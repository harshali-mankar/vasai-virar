"use client";
import React, { useEffect, useState } from 'react';
import { CopyButton } from 'react-copy-button';
import Head from 'next/head';
import * as shiki from 'shiki'; // Make sure to import * as shiki

export async function generateMetadata() {
    return {
      title: "React - Frontend Blog",
      description: "Learn about JavaScript, a powerful programming language for the web.",
    };
  }

export default function ClientComponent() {
  const [copied, setCopied] = useState(false);
  const [highlightedCode, setHighlightedCode] = useState('');
  const codeString = `const sayHello = () => {
    console.log('Hello, world!');
  };`;

  useEffect(() => {
    const loadShiki = async () => {
      try {
        const highlighter = await shiki.createHighlighter({ themes: ['nord'], langs: ["javascript"] });
        const highlighted = highlighter.codeToHtml(codeString, { lang: 'javascript', theme: "nord" });
        setHighlightedCode(highlighted);
      } catch (error) {
        console.error('Error loading Shiki:', error);
      }
    };
    
    loadShiki();
  }, [codeString]);

  return (
    <>
   
        <div className="code-wrap relative">
          {/* Button outside the CopyButton */}
          <div className="copy-button-wrapper">
            <CopyButton text={codeString} onCopy={() => setCopied(true)}>
              <button className="neutral-700-bg pure-white-500">
                {copied ? 'Copied!' : 'Copy code'}
              </button>
            </CopyButton>
          </div>

          {/* Syntax Highlighted Code */}
          <div className="code-data">
            <div
              className="code-block"
              dangerouslySetInnerHTML={{ __html: highlightedCode }}
            />
          </div>
        </div>
      
    </>
  );
}
