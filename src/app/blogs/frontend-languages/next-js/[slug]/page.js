import { frontendLanguages } from '../../../../data';  // Adjust the import to match your data source

// Generate dynamic SEO metadata for each topic page
export async function generateMetadata({ params }) {
  const { slug } = params;
  const topic = frontendLanguages.nextjsTopics.find((t) => t.slug === slug);

  if (!topic) {
    return {
      title: "Topic Not Found",
      description: "The requested topic does not exist.",
    };
  }

  return {
    title: topic.title,
    description: `Learn more about "${topic.heading}" in this detailed guide.`,
  };
}

export default function BlogDetails({ params }) {
  const { slug } = params;
  const topic = frontendLanguages.nextjsTopics.find((t) => t.slug === slug);

  if (!topic) {
    return <h1>Topic not found</h1>;
  }

  return (
    <div>
      <h1>{topic.heading}</h1>
      {/* <p>{topic.fullDescription}</p> */}
      <p dangerouslySetInnerHTML={{ __html: topic.fullDescription }} /> {/* Render HTML content */}

      <a href="/blogs/frontend-languages/next-js" style={{ color: "#0070f3" }}>
        ← Back to Next.js Topics
      </a>
    </div>
  );
}
