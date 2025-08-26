export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-500/20 dark:to-purple-500/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-8">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Leytara
              </span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-slate-600 dark:text-slate-300 mb-6 max-w-4xl mx-auto leading-relaxed">
              We build AI agents that handle the tasks you don't want to do
            </p>
            <p className="text-lg sm:text-xl text-slate-500 dark:text-slate-400 mb-12 max-w-3xl mx-auto">
              From AI search marketing optimization to custom workflow automation, 
              let intelligent agents work for you while you focus on what matters most.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/leytara-info/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Get Started Free
              </a>
              <a
                href="https://calendly.com/leytara-info/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-slate-700 dark:text-slate-200 bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl border border-slate-200 dark:border-slate-700 transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white/50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              AI-Powered Solutions
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Automate the repetitive, optimize the complex, and scale what works.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-100 dark:border-slate-700">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                AI Search Marketing
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Intelligent agents that optimize your search campaigns, analyze competitor strategies, 
                and automatically adjust bids and keywords for maximum ROI.
              </p>
              <a
                href="https://calendly.com/leytara-info/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300"
              >
                Learn More →
              </a>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-100 dark:border-slate-700">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Custom Workflow Automation
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Bespoke AI agents tailored to your business processes. From data entry and 
                customer support to content creation and lead qualification.
              </p>
              <a
                href="https://calendly.com/leytara-info/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-purple-600 dark:text-purple-400 font-semibold hover:text-purple-700 dark:hover:text-purple-300"
              >
                Explore Options →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Automate Your Success?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Stop wasting time on tasks that drain your energy. 
            Let AI handle the work you don't want to do.
          </p>
          <a
            href="https://calendly.com/leytara-info/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white hover:bg-blue-50 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
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
            <p className="text-slate-400">AI agents for the tasks you don't want to do</p>
          </div>
          <p className="text-slate-500">
            © 2024 Leytara. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
