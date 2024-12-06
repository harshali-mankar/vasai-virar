'use client'; // Add this at the top of the file to make it a client component

import { useState } from 'react';
import Link from 'next/link';
import { frontendLanguages } from './data'; 
import { backendTechnologies } from './data';

export default function HomePage() {


  // State to track the selected category
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Function to get the first topic in a category
  const getFirstTopicSlug = (category) => {
    if (category === "frontend") {
      return frontendLanguages.nextjsTopics[0]?.slug || "";
    } else if (category === "backend") {
      return "nodejs-introduction"; // Replace with your backendTopics[0]?.slug logic if backend data is ready
    }
    return "";
  };
  
  return (
    <>
      <div>
        <h1>Welcome to the Home Page</h1>
        <p>This is the index page with categories for frontend and backend topics.</p>

        {/* Categories Section */}
        <div
          className="categories"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginBottom: "20px",
          }}
        >
          {/* Frontend Category */}
          <Link
            href={`/blogs/frontend-languages/${getFirstTopicSlug("frontend")}`}
            className="category"
            style={{ cursor: "pointer", textAlign: "center" }}
          >
            <img
              src="/images/FrontendLanguages.jpg"
              alt="Frontend Languages"
              style={{ width: "150px", height: "100px", objectFit: "cover" }}
            />
            <p>Frontend Languages</p>
          </Link>

          {/* Backend Category */}
          <Link
            href={`/blogs/backend/${getFirstTopicSlug("backend")}`}
            className="category"
            style={{ cursor: "pointer", textAlign: "center" }}
          >
            <img
              src="/images/Backend.jpg"
              alt="Backend"
              style={{ width: "150px", height: "100px", objectFit: "cover" }}
            />
            <p>Backend</p>
          </Link>
        </div>
   
      </div>
    </>
  );
}
