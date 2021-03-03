import { query } from '../../../utils/db';
import { verifyIdToken } from 'next-firebase-auth';
import initAuth from '../../../utils/initAuth';

initAuth();

const handler = async (req, res) => {
  if (!(req.headers && req.headers.authorization)) {
    return res
      .status(400)
      .json({ error: 'Missing Authorization header value' });
  }

  const token = req.headers.authorization;
  try {
    await verifyIdToken(token);
  } catch (e) {
    return res.status(403).json({ error: 'Not authorized' });
  }

  const { userid, title, content } = req.body;
  try {
    const results = await query(
      `
      INSERT INTO notes (userid, title, content)
      VALUES (?,?,?)
    `,
      [userid, title, content]
    );
    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default handler;
