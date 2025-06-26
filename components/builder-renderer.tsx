'use client';

import { BuilderComponent, useIsPreviewing } from '@builder.io/react';
import { builder } from '@builder.io/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// Initialize Builder with your API key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY || '');

export default function ClientBuilderComponent({ content, path }: { content: any; path: string }) {
  const router = useRouter();
  const isPreviewing = useIsPreviewing();
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    // If no content was found and we're not in preview mode, set notFound
    if (!content && !isPreviewing) {
      setNotFound(true);
    }
  }, [content, isPreviewing]);

  // If no content was found and we're not in preview mode, show 404
  if (notFound) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800">404</h1>
        <p className="text-xl text-gray-600">Page not found</p>
        <button 
          onClick={() => router.push('/')}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Go Home
        </button>
      </div>
    );
  }

  return (
    <BuilderComponent
      model="page"
      content={content}
      options={{ includeRefs: true }}
    >
      {/* This renders when no content is found and preview mode is active */}
      {isPreviewing && !content && (
        <div className="p-5 rounded bg-blue-100 text-blue-700">
          <h3 className="text-xl font-bold">No Builder Content Found</h3>
          <p>
            This page has no Builder content at path: {path}
          </p>
        </div>
      )}
    </BuilderComponent>
  );
}