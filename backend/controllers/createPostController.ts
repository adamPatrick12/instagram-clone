const multer = require("multer");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const crypto = require("crypto");
require("dotenv").config();
const sharp = require("sharp");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const bucket_name = process.env.BUCKET_NAME;
const bucket_region = process.env.BUCKET_REGION;
const access_key = process.env.ACCESS_KEY;
const secret_access_key = process.env.SECRET_ACCESS_KEY;

const randomImageKey = (bytes = 32) =>
  crypto.randomBytes(bytes).toString("hex");

const s3 = new S3Client({
  credentials: {
    accessKeyId: access_key,
    secretAccessKey: secret_access_key,
  },
  region: bucket_region,
});

exports.create_new_post = [
  upload.single("NewPostImage"),
  async (req, res) => {
    console.log("req.body", req.body);
    console.log("req.file", req.file.buffer);

    //resize image
    const buffer = await sharp(req.file.buffer)
      .resize({ height: 1920, width: 1080, fit: "contain" })
      .toBuffer();

    const params = {
      Bucket: bucket_name,
      Key: randomImageKey(),
      Body: buffer,
      ContentType: req.file.mimetype,
    };

    const command = new PutObjectCommand(params);
    await s3.send(command);

    res.send({});
  },
];
