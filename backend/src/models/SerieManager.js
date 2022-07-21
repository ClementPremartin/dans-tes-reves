const AbstractManager = require("./AbstractManager");

class SerieManager extends AbstractManager {
  static table = "series";

  findSection(id) {
    return this.connection.query(
      `SELECT s.id AS serie_id, s.name AS serie_name FROM ${SerieManager.table} AS s 
    INNER JOIN creation AS c ON c.series_id=s.id 
      WHERE s.id=? LIMIT 1`,
      [id]
    );
  }
}

module.exports = SerieManager;
