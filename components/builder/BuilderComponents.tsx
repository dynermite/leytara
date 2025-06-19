"use client";

import { Builder } from '@builder.io/react';
import { 
  LeytaraHero, 
  LeytaraServiceCard, 
  LeytaraSectionHeader, 
  LeytaraCTA, 
  LeytaraNavigation 
} from './LeytaraComponents';

// Register all Leytara components with Builder.io
Builder.registerComponent(LeytaraHero, {
  name: 'LeytaraHero',
  friendlyName: 'Leytara Hero Section',
  inputs: [
    {
      name: 'title',
      type: 'string',
      defaultValue: 'Get Found. Get Leads. Powered by AI.',
      helperText: 'Main headline text'
    },
    {
      name: 'subtitle',
      type: 'longText',
      defaultValue: 'Leytara builds AI-powered marketing systems that help your business show up everywhere it matters — and bring in real leads while you sleep.',
      helperText: 'Subtitle/description text'
    },
    {
      name: 'primaryButtonText',
      type: 'string',
      defaultValue: "Let's Talk",
      helperText: 'Primary button text'
    },
    {
      name: 'primaryButtonUrl',
      type: 'url',
      defaultValue: 'https://www.notion.so/Leytara-214d82ce0c5d80048fd4d3137b40bd82?pvs=21',
      helperText: 'Primary button URL'
    },
    {
      name: 'showSecondaryButton',
      type: 'boolean',
      defaultValue: false,
      helperText: 'Show secondary button'
    },
    {
      name: 'secondaryButtonText',
      type: 'string',
      defaultValue: 'Learn More',
      helperText: 'Secondary button text'
    },
    {
      name: 'badgeText',
      type: 'string',
      defaultValue: 'Powered by AI',
      helperText: 'Badge text above title'
    }
  ]
});

Builder.registerComponent(LeytaraServiceCard, {
  name: 'LeytaraServiceCard',
  friendlyName: 'Leytara Service Card',
  inputs: [
    {
      name: 'icon',
      type: 'string',
      enum: ['Brain', 'Search', 'Shield', 'Bot', 'MapIcon', 'Target', 'Zap', 'CheckCircle', 'Users'],
      defaultValue: 'Brain',
      helperText: 'Choose an icon for the card'
    },
    {
      name: 'title',
      type: 'string',
      defaultValue: 'Service Title',
      helperText: 'Card title'
    },
    {
      name: 'description',
      type: 'longText',
      defaultValue: 'Service description goes here.',
      helperText: 'Card description'
    },
    {
      name: 'buttonText',
      type: 'string',
      defaultValue: 'Learn More',
      helperText: 'Button text'
    },
    {
      name: 'buttonUrl',
      type: 'url',
      defaultValue: '#',
      helperText: 'Button URL'
    },
    {
      name: 'gradientFrom',
      type: 'string',
      enum: ['teal', 'blue', 'purple', 'indigo'],
      defaultValue: 'teal',
      helperText: 'Gradient start color'
    },
    {
      name: 'gradientTo',
      type: 'string',
      enum: ['teal', 'blue', 'purple', 'indigo'],
      defaultValue: 'blue',
      helperText: 'Gradient end color'
    }
  ]
});

Builder.registerComponent(LeytaraSectionHeader, {
  name: 'LeytaraSectionHeader',
  friendlyName: 'Leytara Section Header',
  inputs: [
    {
      name: 'title',
      type: 'string',
      defaultValue: 'Section Title',
      helperText: 'Section title'
    },
    {
      name: 'subtitle',
      type: 'longText',
      defaultValue: 'Section subtitle goes here.',
      helperText: 'Section subtitle'
    },
    {
      name: 'alignment',
      type: 'string',
      enum: ['center', 'left', 'right'],
      defaultValue: 'center',
      helperText: 'Text alignment'
    }
  ]
});

Builder.registerComponent(LeytaraCTA, {
  name: 'LeytaraCTA',
  friendlyName: 'Leytara CTA Section',
  inputs: [
    {
      name: 'title',
      type: 'string',
      defaultValue: 'Ready to Get Started?',
      helperText: 'CTA title'
    },
    {
      name: 'description',
      type: 'longText',
      defaultValue: "Let's work together to grow your business.",
      helperText: 'CTA description'
    },
    {
      name: 'buttonText',
      type: 'string',
      defaultValue: 'Get in Touch',
      helperText: 'Button text'
    },
    {
      name: 'buttonUrl',
      type: 'url',
      defaultValue: 'mailto:info@leytara.com',
      helperText: 'Button URL'
    },
    {
      name: 'showEmail',
      type: 'boolean',
      defaultValue: true,
      helperText: 'Show email address'
    },
    {
      name: 'showLocation',
      type: 'boolean',
      defaultValue: true,
      helperText: 'Show location text'
    },
    {
      name: 'backgroundColor',
      type: 'string',
      enum: ['gradient', 'white', 'dark'],
      defaultValue: 'gradient',
      helperText: 'Background style'
    }
  ]
});

Builder.registerComponent(LeytaraNavigation, {
  name: 'LeytaraNavigation',
  friendlyName: 'Leytara Navigation',
  inputs: [
    {
      name: 'logoUrl',
      type: 'file',
      allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
      defaultValue: '/a-minimalist-logo-design-featuring-the-l_FpaEARmZRJeW7Fhnp67cHw_mLubwmYuRVCAjbXx7aJY7w (1).png',
      helperText: 'Logo image'
    },
    {
      name: 'brandName',
      type: 'string',
      defaultValue: 'Leytara',
      helperText: 'Brand name'
    },
    {
      name: 'ctaText',
      type: 'string',
      defaultValue: 'Work With Us',
      helperText: 'CTA button text'
    },
    {
      name: 'ctaUrl',
      type: 'url',
      defaultValue: 'https://www.notion.so/Leytara-214d82ce0c5d80048fd4d3137b40bd82?pvs=21',
      helperText: 'CTA button URL'
    }
  ]
});

export default function BuilderComponents() {
  return null;
}