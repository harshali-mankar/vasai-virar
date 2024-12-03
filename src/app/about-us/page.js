
export async function generateMetadata() {
    return {
      title: "About Us - Frontend Blog",
      description: "Learn about JavaScript, a powerful programming language for the web.",
    };
  }

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us - My Website</title>
        <meta name="description" content="Learn more about us on this page." />
      </Head>
      <div>
        <h1>About Us</h1>
        <p>This is the About Us page rendered at the top.</p>
      </div>
    </>
  );
}
