"use client";

import { BuilderComponent, useIsPreviewing } from '@builder.io/react';
import { BuilderContent } from '@builder.io/sdk';
import './BuilderComponents'; // Import to register components

interface RenderBuilderContentProps {
  content: BuilderContent | null;
}

export function RenderBuilderContent({ content }: RenderBuilderContentProps) {
  const isPreviewing = useIsPreviewing();

  // Show a message if we're in preview mode but no content is found
  if (isPreviewing && !content) {
    return <div>No content found. Create some content in Builder.io!</div>;
  }

  // Render the Builder content
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50">
      <BuilderComponent model="page" content={content} />
    </div>
  );
}