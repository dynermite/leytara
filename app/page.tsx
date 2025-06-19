"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Search, Shield, ArrowRight, Mail, MapPin, Sparkles, Zap, Target } from 'lucide-react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200/50 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Leytara
              </span>
            </div>
            <Button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.open('mailto:info@leytara.com', '_blank')}
            >
              Work With Us
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-2 mb-8">
              <Zap className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-800">The Future of Search Marketing</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                Get cited.
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Get chosen.
              </span>
              <br />
              <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                Get found.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              <strong className="text-slate-800">Leytara helps your brand appear where AI and people look for answers</strong> — 
              from Google's AI Overviews to ChatGPT, Perplexity, and beyond.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 text-lg px-8 py-6"
                onClick={() => window.open('mailto:info@leytara.com', '_blank')}
              >
                Work With Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-slate-300 hover:border-blue-400 text-slate-700 hover:text-blue-700 transition-all duration-300 text-lg px-8 py-6"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
              What We Do
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We position your brand at the intersection of AI and search, ensuring you're discovered in the new era of information retrieval.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-blue-50/30 hover:scale-105">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">🧠 LLM Mention Engine</h3>
                <p className="text-slate-600 leading-relaxed">
                  We get your brand cited in the content that AI pulls from — so when someone asks ChatGPT or Perplexity, you show up.
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-purple-50/30 hover:scale-105">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">🔎 Answer Engine Optimization</h3>
                <p className="text-slate-600 leading-relaxed">
                  We structure your site and content to appear in Google's AI Overviews, zero-click panels, and semantic search results.
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-indigo-50/30 hover:scale-105">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">Entity Authority Stack</h3>
                <p className="text-slate-600 leading-relaxed">
                  We help enhance your brand's presence across trusted sources such as Wikidata, Crunchbase, schema, and trusted sources — so AI sees you as legit.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">Why It Matters</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <Target className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-red-300">Traditional SEO is dying.</h3>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-yellow-300">Clicks are vanishing.</h3>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <Brain className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-blue-300">AI is rewriting how people discover answers.</h3>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                We help you <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">be the answer</span>.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
            Contact
          </h2>
          
          <p className="text-2xl text-slate-700 mb-12">Want to work together?</p>
          
          <div className="bg-white rounded-3xl shadow-2xl p-12 border border-slate-200/50">
            <div className="space-y-8">
              <div className="flex items-center justify-center space-x-4">
                <Mail className="w-8 h-8 text-blue-600" />
                <a 
                  href="mailto:info@leytara.com" 
                  className="text-2xl font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-300"
                >
                  info@leytara.com
                </a>
              </div>
              
              <div className="flex items-center justify-center space-x-4">
                <MapPin className="w-8 h-8 text-purple-600" />
                <span className="text-xl text-slate-600">📍 Based wherever curiosity leads</span>
              </div>
              
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 text-xl px-12 py-6"
                onClick={() => window.open('mailto:info@leytara.com', '_blank')}
              >
                → Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Leytara
            </span>
          </div>
          <p className="text-slate-400">
            © 2025 Leytara. Helping brands thrive in the age of AI search.
          </p>
        </div>
      </footer>
    </div>
  );
}