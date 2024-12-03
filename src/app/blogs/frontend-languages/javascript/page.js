// 'use client';

// import { useSearchParams } from 'next/navigation';
// import Pagination from '../../../../components/Pagination';

export async function generateMetadata() {
    return {
      title: "JavaScript - Frontend Blog",
      description: "Learn about JavaScript, a powerful programming language for the web.",
    };
  }

// const itemsPerPage = 3;
// const allItems = [
//   { id: 1, title: 'JavaScript Introduction' },
//   { id: 2, title: 'ES6 Features' },
//   { id: 3, title: 'Asynchronous JavaScript' },
//   { id: 4, title: 'Closures Explained' },
//   { id: 5, title: 'JavaScript Modules' },
// ];

export default function JavaScriptBlogsPage() {
//   const searchParams = useSearchParams();
//   const currentPage = parseInt(searchParams.get('page') || '1', 10);

//   const totalPages = Math.ceil(allItems.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const paginatedItems = allItems.slice(startIndex, endIndex);

  return (
    <div>
      <h1>JavaScript Blogs</h1>
      {/* <ul>
        {paginatedItems.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul> */}

        {/* <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            basePath="/blogs/frontend-languages/javascript"
        /> */}

        JavaScript
    </div>
  );
}
