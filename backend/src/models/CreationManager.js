const AbstractManager = require("./AbstractManager");

class CreationManager extends AbstractManager {
  static table = "creation";

  findSection() {
    return this.connection.query(
      `SELECT c.id, c.art_title, s.id AS serie_id, s.name AS serie_name, f.image_url, f.image_alt FROM ${CreationManager.table} AS c
      LEFT JOIN files AS f ON f.id=c.files_id
      INNER JOIN series AS s ON s.id = c.series_id`
    );
  }

  findCreation(id) {
    return this.connection.query(
      `SELECT c.id, c.art_title, c.date, c.size, c.technical, c.story, f.image_url, f.image_alt FROM ${CreationManager.table} AS c
      LEFT JOIN files AS f ON f.id=c.files_id
      WHERE c.series_id = ?`,
      [id]
    );
  }
}

module.exports = CreationManager;
