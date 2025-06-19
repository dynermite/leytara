import { builder } from '@builder.io/sdk';
import { RenderBuilderContent } from '@/components/builder/RenderBuilderContent';
import { notFound } from 'next/navigation';

// Initialize Builder
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: {
    page: string[];
  };
}

export default async function Page({ params }: PageProps) {
  const urlPath = '/' + (params?.page?.join('/') || '');
  
  // Fetch the Builder content for this page
  const content = await builder
    .get('page', {
      userAttributes: {
        urlPath,
      },
    })
    .toPromise();

  // If no content is found, return 404
  if (!content) {
    return notFound();
  }

  // Return the rendered Builder content
  return <RenderBuilderContent content={content} />;
}

export async function generateStaticParams() {
  // Get all pages from Builder
  const pages = await builder.getAll('page', {
    options: { noTargeting: true },
  });

  // Generate static params for all Builder pages
  return pages.map((page) => ({
    page: page.data?.url?.split('/').filter(Boolean) || [],
  }));
}