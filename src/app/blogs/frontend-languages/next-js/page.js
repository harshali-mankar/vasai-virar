import Link from 'next/link';
import { frontendLanguages } from '../../../data';  // Importing nextJsTopics from data.js

// Generate Metadata Dynamically for SEO
export async function generateMetadata({ params }) {
  // for browser tab title
  const title = 'Next JS Topics';
  // for for meta description
  const description = 'Explore various Next JS topics such as components, routing, and more.';

  return {
    title,
    description,
  };
}

export default function nextJsPage() {
  return (
    <div>
      <h1>Next JS Topics</h1>
      {frontendLanguages.nextjsTopics.map((topic) => (
        <div key={topic.slug} style={{ marginBottom: "20px", border: "1px solid #ddd", padding: "15px", borderRadius: "5px" }}>
          <h2>{topic.heading}</h2>
          {/* <p>{topic.description}</p> */}
          <p dangerouslySetInnerHTML={{ __html: topic.description }} /> {/* Render HTML content */}

          <Link href={`/blogs/frontend-languages/next-js/${topic.slug}`}>
            <button style={{ padding: "10px 15px", background: "#0070f3", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
              Read More
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}
