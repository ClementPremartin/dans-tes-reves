const express = require("express");

const { checkData } = require("./middlware/auth");

const {
  ItemController,
  AuthController,
  PresentationController,
  SectionController,
  CreationController,
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
router.get("/creation/:id", CreationController.read);

router.post("/creation/:id", CreationController.add);

module.exports = router;
