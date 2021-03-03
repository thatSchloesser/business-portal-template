const path = require('path');
const envPath = path.resolve(process.cwd(), '.env.local');

require('dotenv').config({ path: envPath });

const mysql = require('serverless-mysql');

const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
  },
});

async function query(q) {
  try {
    const results = await db.query(q);
    await db.end();
    return results;
  } catch (e) {
    throw Error(e.message);
  }
}

// Create "user" table if doesn't exist
// NOTE: the id as implimented is based on the firebase uid
async function migrate() {
  try {
    await query(`
    CREATE TABLE IF NOT EXISTS users (
      id VARCHAR(56) NOT NULL,
      email VARCHAR(45) NULL,
      first_name VARCHAR(45) NULL,
      last_name VARCHAR(45) NULL,
      google_verified_email INT NULL,
      google_picture VARCHAR(250) NULL,
      google_locale VARCHAR(10) NULL,
      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP 
        NOT NULL 
        DEFAULT CURRENT_TIMESTAMP 
        ON UPDATE CURRENT_TIMESTAMP,
      PRIMARY KEY (id))
    `);
    console.log('migration ran successfully');
  } catch (e) {
    console.error(
      'could not run migration (user table), double check your credentials.'
    );
    process.exit(1);
  }

  try {
    await query(`
    CREATE TABLE IF NOT EXISTS notes (
      id int NOT NULL AUTO_INCREMENT,
      userid varchar(56) DEFAULT NULL,
      title varchar(45) DEFAULT NULL,
      content varchar(500) DEFAULT NULL,
      created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      PRIMARY KEY (id),
      KEY userid_idx (userid),
      CONSTRAINT userid FOREIGN KEY (userid) REFERENCES users (id)
    )`);
    console.log('migration ran successfully');
  } catch (e) {
    console.error(
      'could not run migration (notes table), double check your credentials.'
    );
    process.exit(1);
  }
}

migrate().then(() => process.exit());
