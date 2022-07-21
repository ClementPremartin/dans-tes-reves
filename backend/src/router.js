const express = require("express");

const { checkData } = require("./middlware/auth");

const {
  ItemController,
  AuthController,
  PresentationController,
  SectionController,
} = require("./controllers");

const router = express.Router();

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

router.get("/presentation", PresentationController.browse);
router.get("/section", SectionController.browse);

router.post("/login", checkData, AuthController.login);

module.exports = router;
