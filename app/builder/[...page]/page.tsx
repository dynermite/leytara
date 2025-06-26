// This is the minimum required to fix the error
export async function generateStaticParams() {
  return [];
}

export default function BuilderPage({ params }: { params: { page: string[] } }) {
  return (
    <div>
      <h1>Builder.io Page</h1>
      <p>Path: {params.page.join('/')}</p>
    </div>
  );
}