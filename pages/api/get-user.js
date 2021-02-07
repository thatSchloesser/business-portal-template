import { query } from '../../utils/db';
import { verifyIdToken } from 'next-firebase-auth';
import initAuth from '../../utils/initAuth';

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
    // eslint-disable-next-line no-console
    console.error(e);
    return res.status(403).json({ error: 'Not authorized' });
  }

  const { id } = req.query;
  try {
    if (!id) {
      return res.status(400).json({ message: '`id` required' });
    }
    const results = await query(
      `
      SELECT *
      FROM users
      WHERE id = ?
    `,
      id
    );
    console.log(results);
    return res.json(results[0]);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default handler;
