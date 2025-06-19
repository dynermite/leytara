"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Brain, 
  Search, 
  Shield, 
  ArrowRight, 
  Mail, 
  MapPin, 
  Sparkles, 
  Zap, 
  Target, 
  Users, 
  Bot, 
  CheckCircle, 
  MapIcon 
} from 'lucide-react';
import Image from 'next/image';

// Hero Section Component
export const LeytaraHero = ({ 
  title = "Get Found. Get Leads. Powered by AI.",
  subtitle = "Leytara builds AI-powered marketing systems that help your business show up everywhere it matters — and bring in real leads while you sleep.",
  primaryButtonText = "Let's Talk",
  primaryButtonUrl = "https://www.notion.so/Leytara-214d82ce0c5d80048fd4d3137b40bd82?pvs=21",
  showSecondaryButton = false,
  secondaryButtonText = "Learn More",
  badgeText = "Powered by AI"
}) => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-100 to-blue-100 rounded-full px-6 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-teal-600" />
            <span className="text-sm font-medium text-teal-800">{badgeText}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-slate-900 via-teal-900 to-blue-900 bg-clip-text text-transparent">
              {title}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 text-lg px-8 py-6"
              onClick={() => window.open(primaryButtonUrl, '_blank')}
            >
              {primaryButtonText}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            {showSecondaryButton && (
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-slate-300 hover:border-teal-400 text-slate-700 hover:text-teal-700 transition-all duration-300 text-lg px-8 py-6"
              >
                {secondaryButtonText}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// Service Card Component
export const LeytaraServiceCard = ({
  icon = "Brain",
  title = "Service Title",
  description = "Service description goes here.",
  buttonText = "Learn More",
  buttonUrl = "#",
  gradientFrom = "teal",
  gradientTo = "blue"
}) => {
  const IconComponent = {
    Brain,
    Search,
    Shield,
    Bot,
    MapIcon,
    Target,
    Zap,
    CheckCircle,
    Users
  }[icon] || Brain;

  const gradientClasses = {
    teal: "from-teal-500 to-teal-600 bg-gradient-to-br from-white to-teal-50/50",
    blue: "from-blue-500 to-blue-600 bg-gradient-to-br from-white to-blue-50/50",
    purple: "from-purple-500 to-purple-600 bg-gradient-to-br from-white to-purple-50/50",
    indigo: "from-indigo-500 to-indigo-600 bg-gradient-to-br from-white to-indigo-50/50"
  };

  return (
    <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-teal-50/50 hover:scale-105">
      <CardContent className="p-8">
        <div className={`w-16 h-16 bg-gradient-to-br ${gradientClasses[gradientFrom] || gradientClasses.teal} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <IconComponent className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-slate-900">{title}</h3>
        <p className="text-slate-600 leading-relaxed mb-6">{description}</p>
        <Button 
          className={`bg-gradient-to-r from-${gradientFrom}-600 to-${gradientTo}-600 hover:from-${gradientFrom}-700 hover:to-${gradientTo}-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 w-full`}
          onClick={() => window.open(buttonUrl, '_blank')}
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};

// Section Header Component
export const LeytaraSectionHeader = ({
  title = "Section Title",
  subtitle = "Section subtitle goes here.",
  alignment = "center"
}) => {
  const alignmentClasses = {
    center: "text-center",
    left: "text-left",
    right: "text-right"
  };

  return (
    <div className={`mb-16 ${alignmentClasses[alignment]}`}>
      <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-teal-900 bg-clip-text text-transparent">
        {title}
      </h2>
      <p className="text-xl text-slate-600 max-w-3xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
};

// CTA Section Component
export const LeytaraCTA = ({
  title = "Ready to Get Started?",
  description = "Let's work together to grow your business.",
  buttonText = "Get in Touch",
  buttonUrl = "mailto:info@leytara.com",
  showEmail = true,
  showLocation = true,
  backgroundColor = "gradient"
}) => {
  const backgroundClasses = {
    gradient: "bg-gradient-to-br from-teal-50 to-blue-50",
    white: "bg-white",
    dark: "bg-gradient-to-br from-slate-900 via-teal-900 to-blue-900 text-white"
  };

  return (
    <section className={`py-20 px-6 ${backgroundClasses[backgroundColor]}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className={`text-4xl md:text-5xl font-bold mb-8 ${backgroundColor === 'dark' ? 'text-white' : 'bg-gradient-to-r from-slate-900 to-teal-900 bg-clip-text text-transparent'}`}>
          {title}
        </h2>
        
        <p className={`text-xl mb-12 ${backgroundColor === 'dark' ? 'text-slate-200' : 'text-slate-700'}`}>
          {description}
        </p>
        
        <div className="bg-white rounded-3xl shadow-2xl p-12 border border-slate-200/50">
          <div className="space-y-8">
            {showEmail && (
              <div className="flex items-center justify-center space-x-4">
                <Mail className="w-8 h-8 text-teal-600" />
                <a 
                  href="mailto:info@leytara.com" 
                  className="text-2xl font-semibold text-teal-600 hover:text-teal-700 transition-colors duration-300"
                >
                  info@leytara.com
                </a>
              </div>
            )}

            {showLocation && (
              <div className="flex items-center justify-center space-x-4">
                <MapPin className="w-8 h-8 text-blue-600" />
                <span className="text-xl text-slate-600">📍 Based wherever curiosity leads</span>
              </div>
            )}

            <Button 
              size="lg" 
              className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 text-xl px-12 py-6"
              onClick={() => window.open(buttonUrl, '_blank')}
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Navigation Component
export const LeytaraNavigation = ({
  logoUrl = "/a-minimalist-logo-design-featuring-the-l_FpaEARmZRJeW7Fhnp67cHw_mLubwmYuRVCAjbXx7aJY7w (1).png",
  brandName = "Leytara",
  ctaText = "Work With Us",
  ctaUrl = "https://www.notion.so/Leytara-214d82ce0c5d80048fd4d3137b40bd82?pvs=21"
}) => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200/50 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image 
              src={logoUrl}
              alt={`${brandName} Logo`}
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              {brandName}
            </span>
          </div>
          <Button 
            className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => window.open(ctaUrl, '_blank')}
          >
            {ctaText}
          </Button>
        </div>
      </div>
    </nav>
  );
};