import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10">
                <Image
                  src="/leytara-logo.png"
                  alt="Leytara Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                Leytara
              </span>
            </div>
            <a
              href="https://calendly.com/leytara-info/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Work With Us
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div className="text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
                Empower Your Business Growth
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                We build AI agents that handle the tasks you don't want to do. From search marketing optimization to custom workflow automation, let intelligent systems work for you.
              </p>
              
              <a
                href="https://calendly.com/leytara-info/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Get Started
              </a>
            </div>

            {/* Right Column - Graphics Placeholder */}
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 rounded-2xl p-8 shadow-xl">
                {/* Search Results Chart SVG */}
                <div className="mb-6">
                  <svg className="w-full h-48" viewBox="0 0 400 200" fill="none">
                    {/* Chart Background */}
                    <rect width="400" height="200" fill="white" rx="8" />
                    
                    {/* Grid Lines */}
                    <defs>
                      <pattern id="grid" width="40" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" strokeWidth="1"/>
                      </pattern>
                    </defs>
                    <rect width="400" height="200" fill="url(#grid)" />
                    
                    {/* Upward Trajectory Line */}
                    <path d="M 40 160 Q 100 150 160 120 T 280 80 T 360 40" stroke="#059669" strokeWidth="3" fill="none" />
                    
                    {/* Data Points */}
                    <circle cx="40" cy="160" r="4" fill="#059669" />
                    <circle cx="120" cy="140" r="4" fill="#059669" />
                    <circle cx="200" cy="100" r="4" fill="#059669" />
                    <circle cx="280" cy="80" r="4" fill="#059669" />
                    <circle cx="360" cy="40" r="4" fill="#059669" />
                    
                    {/* Y-axis labels */}
                    <text x="25" y="170" className="text-xs fill-slate-600" textAnchor="end">0</text>
                    <text x="25" y="130" className="text-xs fill-slate-600" textAnchor="end">25</text>
                    <text x="25" y="90" className="text-xs fill-slate-600" textAnchor="end">50</text>
                    <text x="25" y="50" className="text-xs fill-slate-600" textAnchor="end">75</text>
                    
                    {/* Chart Title */}
                    <text x="200" y="25" className="text-sm font-semibold fill-slate-800" textAnchor="middle">Search Visibility Growth</text>
                  </svg>
                </div>
                
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">
                    AI-Powered Search Marketing
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Automated keyword optimization and campaign management
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              AI-powered solutions that handle the work you don't want to do
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* AI Search Marketing */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-xl">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  AI Search Marketing
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  Show up in local search, Google Maps, AI Overviews, and even ChatGPT. We help you appear where customers go to find what you do.
                </p>
              </div>
              
              {/* Search Results Graphic */}
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 rounded-xl p-6 mb-6">
                <svg className="w-full h-32" viewBox="0 0 300 120" fill="none">
                  {/* Search Results List */}
                  <rect x="10" y="10" width="280" height="12" rx="6" fill="#059669" opacity="0.8" />
                  <rect x="10" y="30" width="240" height="12" rx="6" fill="#0891b2" opacity="0.6" />
                  <rect x="10" y="50" width="260" height="12" rx="6" fill="#059669" opacity="0.9" />
                  <rect x="10" y="70" width="220" height="12" rx="6" fill="#0891b2" opacity="0.5" />
                  <rect x="10" y="90" width="200" height="12" rx="6" fill="#6b7280" opacity="0.3" />
                  
                  {/* Search Icon */}
                  <circle cx="270" cy="25" r="8" stroke="#059669" strokeWidth="2" fill="none" />
                  <path d="276 31 280 35" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <p className="text-sm text-slate-600 dark:text-slate-400 text-center mt-2">
                  Dominate search results with AI optimization
                </p>
              </div>
              
              <a
                href="https://calendly.com/leytara-info/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-teal-600 dark:text-teal-400 font-semibold hover:text-teal-700 dark:hover:text-teal-300"
              >
                Get More Leads →
              </a>
            </div>

            {/* AI Workflow Automation */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-xl">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Custom AI Workflow Automation
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  Bespoke AI agents for your unique business processes. Customer support, data entry, content creation, lead qualification — we automate the repetitive tasks you hate.
                </p>
              </div>
              
              {/* Workflow Diagram */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 mb-6">
                <svg className="w-full h-32" viewBox="0 0 300 120" fill="none">
                  {/* Workflow Steps */}
                  <rect x="10" y="40" width="60" height="40" rx="8" fill="#3b82f6" opacity="0.8" />
                  <text x="40" y="58" className="text-xs fill-white" textAnchor="middle">Task</text>
                  <text x="40" y="68" className="text-xs fill-white" textAnchor="middle">Input</text>
                  
                  {/* Arrow */}
                  <path d="M75 60 L95 60" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
                  
                  {/* AI Agent */}
                  <rect x="100" y="35" width="60" height="50" rx="8" fill="#059669" />
                  <text x="130" y="55" className="text-xs fill-white" textAnchor="middle">AI</text>
                  <text x="130" y="65" className="text-xs fill-white" textAnchor="middle">Agent</text>
                  
                  {/* Arrow */}
                  <path d="M165 60 L185 60" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
                  
                  {/* Output */}
                  <rect x="190" y="40" width="60" height="40" rx="8" fill="#8b5cf6" opacity="0.8" />
                  <text x="220" y="58" className="text-xs fill-white" textAnchor="middle">Auto</text>
                  <text x="220" y="68" className="text-xs fill-white" textAnchor="middle">Output</text>
                  
                  {/* Arrow markers */}
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#6b7280" />
                    </marker>
                  </defs>
                </svg>
                <p className="text-sm text-slate-600 dark:text-slate-400 text-center mt-2">
                  Automated workflows that save hours daily
                </p>
              </div>
              
              <a
                href="https://calendly.com/leytara-info/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300"
              >
                Automate Everything →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              How We Work
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Simple, transparent process with measurable results
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Simple, fixed-fee packages
              </h3>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Built-for-you strategy and setup
              </h3>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Tools and workflows you actually own
              </h3>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Fast onboarding and measurable results
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-teal-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Automate Your Success?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Stop wasting time on tasks that drain your energy. 
            Let AI handle the work you don't want to do.
          </p>
          <a
            href="https://calendly.com/leytara-info/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-teal-600 bg-white hover:bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Book Your Free Consultation
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Leytara</h3>
            <p className="text-slate-400 mb-4">AI agents for the tasks you don't want to do</p>
            <a 
              href="mailto:info@leytara.com"
              className="text-teal-400 hover:text-teal-300 transition-colors duration-200"
            >
              info@leytara.com
            </a>
          </div>
          <p className="text-slate-500">
            © 2024 Leytara. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
