import { withAuthUser, AuthAction } from 'next-firebase-auth'
import Login from '../../components/login';

const Auth = () => (
  <Login />
)

export default withAuthUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
  whenUnauthedBeforeInit: AuthAction.RETURN_NULL,
  whenUnauthedAfterInit: AuthAction.RENDER,
})(Auth)
