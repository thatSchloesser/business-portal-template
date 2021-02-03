import Head from 'next/head';
// import styles from '../styles/Home.module.css';
import { withAuthUser, AuthAction } from 'next-firebase-auth'
import FullPageLoader from '../components/FullPageLoader'


import Layout from '../components/layout';

const Home = () => {
  return (
    <>
      <Head>
        <title>Stephen Schloesser Business Portal</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>testing testing 123</Layout>;
    </>
  );
}

export default withAuthUser({
  whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
  LoaderComponent: FullPageLoader,
})(Home)