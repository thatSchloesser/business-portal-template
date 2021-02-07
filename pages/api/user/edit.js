import { query } from '../../../utils/db';

const handler = async (req, res) => {
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
