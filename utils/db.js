// Note: should this go in a /lib folder instead like the nextjs with-mysql example?
import mysql from 'serverless-mysql';

export const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
  },
});

export async function query(q, values) {
  try {
    const results = await db.query(q, values);
    await db.end();
    return results;
  } catch (e) {
    throw Error(e.message);
  }
}