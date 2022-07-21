const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
  static table = "user";

  // AuthController
  findOneByEmail(mail) {
    return this.connection
      .query(`SELECT * FROM ${UsersManager.table} WHERE email = ?`, [mail])
      .then((res) => res[0]);
  }

  findUser(id) {
    return this.connection
      .query(
        `SELECT
        u.id AS user_id,
        u.firstname AS user_firstname,
        u.lastname AS user_lastname,
        u.email
        FROM ${UsersManager.table} AS u WHERE id=?`,
        [id]
      )
      .then((res) => res[0]);
  }
}

module.exports = UsersManager;
