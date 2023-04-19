const UserProfile = require("../models/user.ts");
const bucket_name = process.env.BUCKET_NAME;
const bucket_region = process.env.BUCKET_REGION;
const access_key = process.env.ACCESS_KEY;
const secret_access_key = process.env.SECRET_ACCESS_KEY;

const {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} = require("@aws-sdk/client-s3");

const s3 = new S3Client({
  credentials: {
    accessKeyId: access_key,
    secretAccessKey: secret_access_key,
  },
  region: bucket_region,
});

const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

exports.get_user_profile = [
  async (req, res, next) => {
    UserProfile.find({ _id: req.params.profileID })
      .populate("posts")
      .populate("followers", "_id displayName profilePicture userName")
      .populate("following", "_id displayName profilePicture userName")
      .exec(async (err, user_profile) => {
        if (err) {
          return next(err);
        }

        for (const user of user_profile) {
          const getObjectParams = {
            Bucket: bucket_name,
            Key: user.banner,
          };

          const command = new GetObjectCommand(getObjectParams);
          const url = await getSignedUrl(s3, command, { expiresIn: 3600 });
          user.banner = url;

          for (const post of user.posts) {
            const getObjectParams = {
              Bucket: bucket_name,
              Key: post.imageKey,
            };

            const command = new GetObjectCommand(getObjectParams);
            const url = await getSignedUrl(s3, command, { expiresIn: 3600 });
            post.imageKey = url;
          }
        }

        res.send(user_profile);
      });
  },
];
