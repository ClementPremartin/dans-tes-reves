const AbstractManager = require("./AbstractManager");

class PresentationManager extends AbstractManager {
  static table = "presentation";

  findAll() {
    return this.connection.query(
      `SELECT id, description FROM ${PresentationManager.table}`
    );
  }
}

module.exports = PresentationManager;
