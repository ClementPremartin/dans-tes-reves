const express = require("express");
const multer = require("multer");

const upload = multer({ dest: "public/tmp/" });

const { checkData } = require("./middlware/auth");
const { uploadPublic } = require("./middlware/upload");

const {
  ItemController,
  AuthController,
  PresentationController,
  SectionController,
  CreationController,
  MailerController,
} = require("./controllers");

const router = express.Router();

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

router.post("/login", checkData, AuthController.login);

router.get("/presentation", PresentationController.browse);
router.get("/section", SectionController.browse);
router.get("/sectionall", SectionController.browseAll);
router.get("/creation", CreationController.browse);
router.get("/creation/:id", CreationController.read);

router.post(
  "/creation/:id",
  upload.single("image_url"),
  uploadPublic,
  CreationController.add
);
router.post("/section", SectionController.add);
router.post("/sendEmail", MailerController.sendMail);

router.put("/presentation/:id", PresentationController.edit);

router.delete("/creation/:id", CreationController.delete);

module.exports = router;
