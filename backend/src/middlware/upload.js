const fs = require("fs");
require("dotenv").config();
const models = require("../models");

const uploadPublic = async (req, res, next) => {
  if (!req.file) {
    next();
  } else {
    const fileNameArray = req.file.originalname.split(".");
    const extention = fileNameArray.pop();

    const newFileName = `${Date.now()}.${extention}`;

    fs.rename(req.file.path, `public/assets/images/${newFileName}`, (err) => {
      if (err) {
        res.status(400).send("Error while uploading");
      } else {
        models.files
          .addNewfile(newFileName, req.params.id)
          .then((image) => {
            req.image = {
              id: image[0].insertId,
              url: newFileName,
            };

            next();
          })
          .catch((error) => {
            console.error(error);
            res.status(500).send("error while saving image");
          });
      }
    });
  }
};

module.exports = { uploadPublic };
