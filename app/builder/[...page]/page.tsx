import { builder } from '@builder.io/react';
import ClientBuilderComponent from '@/components/builder-renderer';

// Set your Builder.io public API key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY || '');

// This function is required for static export with dynamic routes
export async function generateStaticParams() {
  // For now, return an empty array
  return [];
}

// This is needed for Builder's visual editor
export const dynamic = 'force-dynamic';

export default async function BuilderPage({ params }: { params: { page: string[] } }) {
  const path = '/' + (params?.page?.join('/') || '');
  
  // Fetch the Builder content for the current path
  const content = await builder
    .get('page', {
      url: path
    })
    .promise();

  // Pass the content to our client component
  return <ClientBuilderComponent content={content} path={path} />;
}