import Head from 'next/head';
import Layout from '../components/layout';
// import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <>
      <Head>
        <title>Stephen Schloesser Business Portal</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout> Hello World \n</Layout>;
    </>
  );
};

export default Home;
