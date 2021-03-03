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

  const { id, email, first_name, last_name } = req.body;
  try {
    if (!email || !first_name || !last_name) {
      return res
        .status(400)
        .json({ message: 'missing id, email, first_name or last_name' });
    }

    const results = await query(
      `
      UPDATE users
      SET email = ?, first_name = ?, last_name =?
      WHERE id = ?
      `,
      [email, first_name, last_name, id]
    );

    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default handler;
