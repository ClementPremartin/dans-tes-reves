const AbstractManager = require("./AbstractManager");

class PresentationManager extends AbstractManager {
  static table = "presentation";

  findAll() {
    return this.connection.query(
      `SELECT id, description FROM ${PresentationManager.table}`
    );
  }

  update(item) {
    return this.connection.query(
      `update ${PresentationManager.table} set description = ? where id = ?`,
      [item.description, item.id]
    );
  }
}

module.exports = PresentationManager;
