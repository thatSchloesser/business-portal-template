import { setAuthCookies } from 'next-firebase-auth'
import initAuth from '../../utils/initAuth'

initAuth()

const handler = async (req, res) => {
  try {
    await setAuthCookies(req, res)

    //this line is failing right now, and I don't know why. It's probably just my credentials. Let's redo later.
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e)
    return res.status(500).json({ error: 'Unexpected error.' })
  }
  return res.status(200).json({ status: true })
}

export default handler
