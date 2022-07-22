const AbstractManager = require("./AbstractManager");

class CreationManager extends AbstractManager {
  static table = "creation";

  findAll() {
    return this.connection.query(`SELECT * FROM ${CreationManager.table}`);
  }

  findSection() {
    return this.connection.query(
      `SELECT s.id AS serie_id, s.name AS serie_name, f.image_url, f.image_alt FROM ${CreationManager.table} AS c
      LEFT JOIN files AS f ON f.id=c.files_id
      INNER JOIN series AS s ON s.id = c.series_id
      GROUP BY s.id`
    );
  }

  findCreation(id) {
    return this.connection.query(
      `SELECT c.id, c.art_title, c.date, c.size, c.technical, c.story, f.id AS file_id, f.image_url, f.image_alt FROM ${CreationManager.table} AS c
      LEFT JOIN files AS f ON f.id=c.files_id
      WHERE c.series_id = ?`,
      [id]
    );
  }

  addNewCreation(crea, id, fileId) {
    return this.connection.query(
      `Insert INTO ${CreationManager.table} (art_title, date, size, technical, story, series_id, files_id) 
      VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        crea.art_title,
        crea.date,
        crea.size,
        crea.technical,
        crea.story,
        id,
        fileId,
      ]
    );
  }

  deleteCreation(id) {
    return this.connection.query(
      `DELETE FROM ${CreationManager.table} WHERE id=?`,
      [id]
    );
  }
}

module.exports = CreationManager;
