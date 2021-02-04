import { query } from '../../utils/db';

//NOTE: I have to authenticate this too.

const handler = async (req, res) => {
  const { id, user } = req.body;
  console.log(user);
  try {
    console.log(user.email);
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
