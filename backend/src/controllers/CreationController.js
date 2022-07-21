const models = require("../models");

class CreationController {
  static browse = (req, res) => {
    models.creation
      .findAll()
      .then(([rows]) => {
        res.status(201).json(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    models.series
      .findSection(req.params.id)
      .then(([serie]) => {
        if (serie[0] == null) {
          res.sendStatus(404);
        } else {
          models.creation
            .findCreation(req.params.id)
            .then(([creations]) => {
              if (creations[0] === null) {
                res.sendStatus(404);
              } else {
                const datas = { ...serie, creations };
                res.status(201).json(datas);
              }
            })
            .catch((err) => {
              console.error(err);
              res.sendStatus(500);
            });
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static edit = (req, res) => {
    const item = req.body;

    // TODO validations (length, format...)

    item.id = parseInt(req.params.id, 10);

    models.creation
      .update(item)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.sendStatus(204);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static add = (req, res) => {
    const crea = JSON.parse(req.body.userCrea);
    delete crea.image_url;
    // TODO validations (length, format...)
    models.creation
      .addNewCreation(crea, req.params.id, req.image.id)
      .then(([result]) => {
        res.status(201).send({ ...crea, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.creation
      .deleteCreation(req.body.id)
      .then(() =>
        models.files
          .deleteFile(req.body.file_id)
          .then(() => {
            res.sendStatus(204);
          })
          .catch((err) => {
            console.error(err);
            res.sendStatus(500);
          })
      )
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = CreationController;
