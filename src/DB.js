const fs = require("node:fs");

const usersPath = "./data/users";
const sessionsPath = "./data/sessions";

class DB {
  constructor() {
    /*
     A sample object in this users array would look like:
     { id: 1, name: "Liam Brown", username: "liam23", password: "string" }
    */
    this.users = JSON.parse(fs.readFileSync(usersPath, "utf8"));

    /*
     A sample object in this sessions array would look like:
     { userId: 1, token: 23423423 }
    */
    this.sessions = JSON.parse(fs.readFileSync(sessionsPath, "utf8"));
  }

  update() {
    this.users = JSON.parse(fs.readFileSync(usersPath, "utf8"));
    this.sessions = JSON.parse(fs.readFileSync(sessionsPath, "utf8"));
  }

  save() {
    fs.writeFileSync(usersPath, JSON.stringify(db.users));
    fs.writeFileSync(sessionsPath, JSON.stringify(db.sessions));
  }
}

const db = new DB();

module.exports = db;
