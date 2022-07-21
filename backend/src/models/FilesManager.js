const AbstractManager = require("./AbstractManager");

class FileManager extends AbstractManager {
  static table = "files";

  addNewfile(file, id) {
    return this.connection.query(
      `Insert INTO ${FileManager.table} (image_url, image_alt) 
      VALUES (?, "image serie ${id}")`,
      [file.image_url]
    );
  }
}

module.exports = FileManager;