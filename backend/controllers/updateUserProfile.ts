const UserProfile = require("../models/user.ts");
const randomCryptoKey = require("crypto");
const multer = require("multer");
require("dotenv").config();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} = require("@aws-sdk/client-s3");

const randomImageKeyGen = (bytes = 32) =>
  randomCryptoKey.randomBytes(bytes).toString("hex");

const bucket_name = process.env.BUCKET_NAME;
const bucket_region = process.env.BUCKET_REGION;
const access_key = process.env.ACCESS_KEY;
const secret_access_key = process.env.SECRET_ACCESS_KEY;

const s3 = new S3Client({
  credentials: {
    accessKeyId: access_key,
    secretAccessKey: secret_access_key,
  },
  region: bucket_region,
});

exports.post_updated_profile = [
  upload.single("userBanner"),
  async (req, res, next) => {
    const profileToUpdate = { _id: req.body.profileToUpdate };
    const imageKey = randomImageKeyGen();

    if (req.file !== undefined) {
      const params = {
        Bucket: bucket_name,
        Key: imageKey,
        Body: req.file.buffer,
        ContentType: req.file.mimetype,
      };

      const command = new PutObjectCommand(params);
      await s3.send(command);

      await UserProfile.updateOne(profileToUpdate, {
        banner: imageKey,
      });
    }

    await UserProfile.updateOne(profileToUpdate, {
      displayName: req.body.newDisplayName,
    });

    await UserProfile.updateOne(profileToUpdate, {
      bio: req.body.newBio,
    });
  },
];
