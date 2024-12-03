import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home - My Website</title>
        <meta name="description" content="Welcome to the home page of my website." />
      </Head>
      <div>
        <h1>Welcome to the Home Page</h1>
        <p>This is the index page.</p>
      </div>
    </>
  );
}
