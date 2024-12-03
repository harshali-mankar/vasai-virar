

import ClientComponent from "../../../../components/ClientComponent"; // Adjust path based on your folder structure

export async function generateMetadata() {
    return {
      title: "React - Frontend Blog",
      description: "Learn about JavaScript, a powerful programming language for the web.",
    };
  }
  
  export default function ReactPage() {
    return (
      <div>
        <h1>JavaScript</h1>
        <p>All about JavaScript in the Frontend category.</p>
        {/* Render client-side component */}
        <ClientComponent />
      </div>
    );
  }