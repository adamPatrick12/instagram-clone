const cryptoKey = require("crypto");
const UserPost = require("../models/posts.ts");

const multer = require("multer");
const {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} = require("@aws-sdk/client-s3");
require("dotenv").config();
const sharp = require("sharp");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

const bucket_name = process.env.BUCKET_NAME;
const bucket_region = process.env.BUCKET_REGION;
const access_key = process.env.ACCESS_KEY;
const secret_access_key = process.env.SECRET_ACCESS_KEY;

// Get logged in user?? Dont know which one

const randomImageKey = (bytes = 32) =>
  cryptoKey.randomBytes(bytes).toString("hex");

const s3 = new S3Client({
  credentials: {
    accessKeyId: access_key,
    secretAccessKey: secret_access_key,
  },
  region: bucket_region,
});

exports.get_feed_posts = [
  (req, res, next) => {
    UserPost.find()
      .sort({ _id: -1 })
      .populate("user", "userName displayName profilePicture")
      .exec(async (err, list_post) => {
        if (err) {
          return next(err);
        }
        for (const post of list_post) {
          const getObjectParams = {
            Bucket: bucket_name,
            Key: post.imageKey,
          };

          const command = new GetObjectCommand(getObjectParams);
          const url = await getSignedUrl(s3, command, { expiresIn: 3600 });
          post.imageKey = url;
        }
        res.send(list_post);
        console.log(list_post);
      });
  },
];

exports.create_new_post = [
  upload.single("NewPostImage"),
  async (req, res, next) => {
    console.log("req.body", req.body);
    console.log("userID", req.body.UserID);

    console.log("req.file", req.file.buffer);

    const imageKey = randomImageKey();

    const params = {
      Bucket: bucket_name,
      Key: imageKey,
      Body: req.file.buffer,
      ContentType: req.file.mimetype,
    };

    const command = new PutObjectCommand(params);
    await s3.send(command);

    const newPost = new UserPost({
      caption: req.body.Caption,
      imageKey: imageKey,
      user: req.body.UserID,
    });
    newPost.save((err) => {
      if (err) {
        return next(err);
      }
    });

    res.send({});
  },
];
