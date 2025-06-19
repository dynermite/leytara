import { builder } from '@builder.io/sdk';

// Initialize Builder with your API key
// You'll need to replace 'YOUR_BUILDER_API_KEY' with your actual Builder.io API key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY || 'YOUR_BUILDER_API_KEY');

export { builder };