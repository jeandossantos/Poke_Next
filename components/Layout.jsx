import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>PokeNext</title>
        <link
          rel="shortcut icon"
          href="/images/favicon.ico"
          type="image/x-icon"
        />
      </Head>
      <Navbar />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  );
}
