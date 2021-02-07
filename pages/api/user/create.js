import { query } from '../../../utils/db';

//already initialized form next-firebase-auth!
import * as admin from 'firebase-admin';

const handler = async (req, res) => {
  //this isn't a page
  if (req.method === 'GET') {
    return res.redirect('/');
  }

  //authorize post first
  if (!(req.headers && req.headers.authorization)) {
    return res
      .status(400)
      .json({ error: 'Missing Authorization header value' });
  }
  const token = req.headers.authorization;
  try {
    await admin.auth().verifyIdToken(token);
  } catch (e) {
    console.error(e);
    return res.status(403).json({ error: 'Not authorized' });
  }

  const { id, user } = req.body;
  try {
    //for Firebase, currently
    const results = await query(
      `
      INSERT INTO users (id, email, 
        first_name, last_name, google_verified_email, google_picture, google_locale)
      VALUES (?, ?, ?, ?, ?, ?, ?)
      `,
      [
        id,
        user.email,
        user.given_name,
        user.family_name,
        user.verified_email ? 1 : 0,
        user.picture,
        user.locale,
      ]
    );

    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default handler;
