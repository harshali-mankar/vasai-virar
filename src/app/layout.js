'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './globals.css'; // Your global CSS file

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Utility to check active path, including dynamic slugs
  const isActive = (path) => {
    // Check if pathname matches the base path or if it starts with the provided path (for dynamic routes like blog posts)
    return pathname === path || pathname.startsWith(path);
  };

  return (
    <html lang="en">
      <body>
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
          {/* Top Navigation */}
          <nav style={{ backgroundColor: '#333', color: '#fff', padding: '1rem' }}>
            <Link
              href="/"
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className={`nav-link ${isActive('/about-us') ? 'active' : ''}`}
            >
              About Us
            </Link>
          </nav>

          {/* Main Content Area */}
          <div style={{ display: 'flex', flex: 1 }}>
            {/* Left Blog Navigation */}
            <aside style={{ width: '250px', backgroundColor: '#f4f4f4', padding: '1rem' }}>
              <h3>Blogs</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li>
                  <h4>Frontend Languages</h4>
                  <ul id="frontendLanguages" style={{ listStyle: 'none', paddingLeft: '1rem' }}>
                    <li>
                      <Link
                        href="/blogs/frontend-languages/javascript"
                        className={`nav-link ${
                          isActive('/blogs/frontend-languages/javascript') ? 'active' : ''
                        }`}
                      >
                        JavaScript
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blogs/frontend-languages/react"
                        className={`nav-link ${
                          isActive('/blogs/frontend-languages/react') ? 'active' : ''
                        }`}
                      >
                        React
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blogs/frontend-languages/next-js"
                        className={`nav-link ${
                          isActive('/blogs/frontend-languages/next-js') ? 'active' : ''
                        }`}
                      >
                        Next.js
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blogs/frontend-languages/typescript"
                        className={`nav-link ${
                          isActive('/blogs/frontend-languages/typescript') ? 'active' : ''
                        }`}
                      >
                        TypeScript
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blogs/frontend-languages/css"
                        className={`nav-link ${
                          isActive('/blogs/frontend-languages/css') ? 'active' : ''
                        }`}
                      >
                        CSS
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <h4>Backend</h4>
                  <ul id="backendLanguages"style={{ listStyle: 'none', paddingLeft: '1rem' }}>
                    <li>
                      <Link
                        href="/blogs/backend/nodejs"
                        className={`nav-link ${
                          isActive('/blogs/backend/nodejs') ? 'active' : ''
                        }`}
                      >
                        Node JS
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </aside>

            {/* Main Content */}
            <main style={{ flex: 1, padding: '1rem' }}>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
