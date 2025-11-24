import React, { useState, useEffect } from 'react';
import { translations } from './translations';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState('en');
  const t = translations[lang];

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'ru' : 'en');
  };


  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'd') {
        e.preventDefault();
        document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 font-sans overflow-x-hidden selection:bg-blue-500/30 selection:text-blue-200">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#09090b]/80 backdrop-blur-xl">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-900/20">
              V
            </div>
            <span className="text-xl font-bold tracking-tight text-zinc-100">Vzuuh</span>
          </div>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-6 text-sm font-medium text-zinc-400">
            <li><a href="#features" className="hover:text-zinc-100 transition-colors">{t.nav.features}</a></li>
            <li><a href="#architecture" className="hover:text-zinc-100 transition-colors">{t.nav.architecture}</a></li>
            <li><a href="#roadmap" className="hover:text-zinc-100 transition-colors">{t.nav.roadmap}</a></li>
            <li><a href="#docs" className="hover:text-zinc-100 transition-colors">{t.nav.docs}</a></li>
          </ul>

          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={toggleLang}
              className="text-zinc-400 hover:text-zinc-100 text-sm font-medium transition-colors uppercase"
            >
              {lang === 'en' ? 'RU' : 'EN'}
            </button>

            <div className="relative hidden lg:flex items-center">
              <svg className="absolute left-3 w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              <input type="text" placeholder={t.nav.search} className="bg-zinc-900 border border-zinc-800 rounded-md py-1.5 pl-9 pr-12 text-sm text-zinc-300 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all w-64 placeholder:text-zinc-600" />
              <div className="absolute right-2 flex gap-1">
                <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-bold text-zinc-500 bg-zinc-800 border border-zinc-700 rounded">Ctrl</kbd>
                <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-bold text-zinc-500 bg-zinc-800 border border-zinc-700 rounded">K</kbd>
              </div>
            </div>
            
            <a href="#download" className="group flex items-center px-4 py-1.5 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-500 transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)]">
              {t.nav.download}
              <span className="hidden md:inline-flex items-center justify-center w-5 h-5 ml-2 text-[10px] font-bold uppercase border rounded bg-white/10 border-white/20 text-white/70 shadow-sm">D</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button 
              onClick={toggleLang}
              className="text-zinc-400 hover:text-zinc-100 text-sm font-medium transition-colors uppercase"
            >
              {lang === 'en' ? 'RU' : 'EN'}
            </button>
            <button 
              className="text-zinc-400 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative pt-24 pb-20 px-4 overflow-hidden">
          {/* Grid Background */}
          <div className="absolute inset-0 bg-grid-white [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] pointer-events-none opacity-20"></div>
          
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <a href="#" className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium mb-8 border border-blue-500/20 hover:bg-blue-500/20 transition-colors">
              {t.hero.news} <span className="ml-1">→</span>
            </a>
            
            <h1 className="text-5xl md:text-7xl font-serif text-zinc-100 mb-6 tracking-tight leading-tight">
              {t.hero.title}
            </h1>
            
            <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
              {t.hero.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
              <a href="#download" className="group flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-md font-medium text-base hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                {t.hero.download_client}
                <span className="ml-3 px-1.5 py-0.5 bg-blue-700 rounded text-[10px] font-bold text-blue-100 border border-blue-500">D</span>
              </a>
              <a href="#source" className="group flex items-center justify-center px-6 py-3 bg-zinc-900 text-zinc-300 border border-zinc-800 rounded-md font-medium text-base hover:bg-zinc-800 hover:text-white transition-all">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                {t.hero.view_source}
                <span className="ml-3 px-1.5 py-0.5 bg-zinc-800 rounded text-[10px] font-bold text-zinc-500 border border-zinc-700 group-hover:text-zinc-400 group-hover:border-zinc-600 transition-colors">C</span>
              </a>
            </div>

            <div className="text-sm text-zinc-500 font-mono">
              {t.hero.available_for}
            </div>

            {/* Feature Highlights Row */}
            <div id="features" className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-20 text-left">
              <div className="p-6 rounded-xl bg-zinc-900/50 border border-white/5 hover:border-blue-500/30 transition-colors group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover:text-blue-300 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-100">{t.features.modern_desktop.title}</h3>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {t.features.modern_desktop.desc}
                </p>
              </div>

              <div className="p-6 rounded-xl bg-zinc-900/50 border border-white/5 hover:border-purple-500/30 transition-colors group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 group-hover:text-purple-300 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-100">{t.features.robust_backend.title}</h3>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {t.features.robust_backend.desc}
                </p>
              </div>

              <div className="p-6 rounded-xl bg-zinc-900/50 border border-white/5 hover:border-green-500/30 transition-colors group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-green-500/10 text-green-400 group-hover:text-green-300 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-100">{t.features.secure.title}</h3>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {t.features.secure.desc}
                </p>
              </div>
            </div>

            {/* App Mockup - Mail Client Style */}
            <div className="relative max-w-6xl mx-auto mt-12">
              <div className="relative rounded-lg bg-[#09090b] border border-white/10 shadow-2xl overflow-hidden ring-1 ring-white/5">
                {/* Window Controls */}
                <div className="h-9 bg-[#09090b] border-b border-white/5 flex items-center px-4 justify-between">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#27272a]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27272a]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27272a]"></div>
                  </div>
                  <div className="text-xs text-zinc-500 font-mono flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    Vzuuh — {t.mockup.inbox}
                  </div>
                  <div className="flex gap-3 text-zinc-600">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" /></svg>
                  </div>
                </div>

                {/* Interface */}
                <div className="grid grid-cols-12 h-[600px] bg-[#09090b] text-zinc-400 font-sans text-sm">
                  {/* Sidebar */}
                  <div className="col-span-3 border-r border-white/5 p-0 flex flex-col">
                    <div className="p-3 text-xs font-bold text-zinc-500 uppercase tracking-wider flex justify-between items-center">
                      {t.mockup.mailboxes}
                      <svg className="w-3 h-3 cursor-pointer hover:text-zinc-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                    </div>
                    <div className="flex-1 overflow-y-auto font-medium">
                      <div className="px-3 py-1.5 text-blue-400 bg-blue-500/10 cursor-pointer flex items-center gap-2 justify-between border-l-2 border-blue-500">
                        <div className="flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" /></svg>
                            {t.mockup.inbox}
                        </div>
                        <span className="text-xs bg-blue-500 text-white px-1.5 rounded-full">4</span>
                      </div>
                      <div className="px-3 py-1.5 text-zinc-500 hover:text-zinc-300 hover:bg-white/5 cursor-pointer flex items-center gap-2 border-l-2 border-transparent">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                        {t.mockup.starred}
                      </div>
                      <div className="px-3 py-1.5 text-zinc-500 hover:text-zinc-300 hover:bg-white/5 cursor-pointer flex items-center gap-2 border-l-2 border-transparent">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                        {t.mockup.sent}
                      </div>
                      <div className="px-3 py-1.5 text-zinc-500 hover:text-zinc-300 hover:bg-white/5 cursor-pointer flex items-center gap-2 border-l-2 border-transparent">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                        {t.mockup.trash}
                      </div>
                    </div>
                  </div>

                  {/* Email List */}
                  <div className="col-span-9 bg-[#09090b] flex flex-col">
                    {/* Tabs / Toolbar */}
                    <div className="flex border-b border-white/5 h-10 items-center px-4 gap-4 bg-[#09090b]">
                        <div className="flex items-center gap-3 text-zinc-400 text-xs font-medium">
                            <span className="text-zinc-200 bg-white/10 px-2 py-0.5 rounded hover:bg-white/20 cursor-pointer transition-colors">{t.mockup.all}</span>
                            <span className="hover:text-zinc-200 cursor-pointer transition-colors">{t.mockup.unread}</span>
                            <span className="hover:text-zinc-200 cursor-pointer transition-colors">{t.mockup.tags}</span>
                        </div>
                        <div className="flex-1"></div>
                        <div className="flex gap-3 text-zinc-500">
                            <svg className="w-4 h-4 hover:text-zinc-300 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            <svg className="w-4 h-4 hover:text-zinc-300 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                        </div>
                    </div>
                    
                    {/* List */}
                    <div className="flex-1 overflow-y-auto">
                        {/* Email Item 1 */}
                        <div className="flex items-start gap-4 p-4 border-b border-white/5 bg-blue-500/5 hover:bg-blue-500/10 cursor-pointer group transition-colors">
                            <div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs font-bold shrink-0">AS</div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-baseline mb-1">
                                    <span className="text-zinc-200 font-semibold truncate">Alice Smith</span>
                                    <span className="text-zinc-500 text-xs">10:42 AM</span>
                                </div>
                                <div className="text-zinc-300 text-sm font-medium truncate mb-0.5">Project Update: Q4 Roadmap</div>
                                <div className="text-zinc-500 text-xs truncate leading-relaxed">Hey team, just wanted to share the latest progress on the Q4 roadmap. We've hit all our milestones for...</div>
                            </div>
                        </div>
                        {/* Email Item 2 */}
                        <div className="flex items-start gap-4 p-4 border-b border-white/5 hover:bg-white/5 cursor-pointer group transition-colors">
                            <div className="w-8 h-8 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center text-xs font-bold shrink-0">GH</div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-baseline mb-1">
                                    <span className="text-zinc-300 font-medium truncate">GitHub</span>
                                    <span className="text-zinc-500 text-xs">Yesterday</span>
                                </div>
                                <div className="text-zinc-400 text-sm truncate mb-0.5">Security alert for your repository</div>
                                <div className="text-zinc-500 text-xs truncate leading-relaxed">We found a potential security vulnerability in one of your dependencies. Please review the attached report...</div>
                            </div>
                        </div>
                         {/* Email Item 3 */}
                         <div className="flex items-start gap-4 p-4 border-b border-white/5 hover:bg-white/5 cursor-pointer group transition-colors">
                            <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold shrink-0">L</div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-baseline mb-1">
                                    <span className="text-zinc-300 font-medium truncate">Linear</span>
                                    <span className="text-zinc-500 text-xs">Yesterday</span>
                                </div>
                                <div className="text-zinc-400 text-sm truncate mb-0.5">Cycle 12 Summary</div>
                                <div className="text-zinc-500 text-xs truncate leading-relaxed">Here is a summary of your team's progress in Cycle 12. You completed 14 issues and...</div>
                            </div>
                        </div>
                        {/* Email Item 4 */}
                        <div className="flex items-start gap-4 p-4 border-b border-white/5 hover:bg-white/5 cursor-pointer group transition-colors">
                            <div className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center text-xs font-bold shrink-0">AWS</div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-baseline mb-1">
                                    <span className="text-zinc-300 font-medium truncate">AWS Billing</span>
                                    <span className="text-zinc-500 text-xs">Oct 24</span>
                                </div>
                                <div className="text-zinc-400 text-sm truncate mb-0.5">Invoice available for October 2025</div>
                                <div className="text-zinc-500 text-xs truncate leading-relaxed">Your invoice for the billing period October 1 - October 31 is now available. Total amount: $12.40...</div>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section id="roadmap" className="py-20 px-4 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-serif text-zinc-100 mb-12 text-center">{t.roadmap.title}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 rounded-xl bg-zinc-900/30 border border-white/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <h3 className="text-lg font-semibold text-zinc-100">{t.roadmap.calls.title}</h3>
                </div>
                <p className="text-zinc-400 text-sm">{t.roadmap.calls.desc}</p>
              </div>
              <div className="p-6 rounded-xl bg-zinc-900/30 border border-white/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <h3 className="text-lg font-semibold text-zinc-100">{t.roadmap.ai.title}</h3>
                </div>
                <p className="text-zinc-400 text-sm">{t.roadmap.ai.desc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section id="download" className="py-32 px-4 bg-[#09090b] border-t border-white/5 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-zinc-100 mb-8 tracking-tight">{t.download.title}</h2>
            <p className="text-xl text-zinc-400 mb-12">
              {t.download.desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button disabled className="group flex items-center justify-center gap-3 px-8 py-4 bg-zinc-800/50 text-zinc-500 rounded-md font-bold text-lg border border-zinc-800 cursor-not-allowed">
                <svg className="w-6 h-6 opacity-50" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/></svg>
                <span>{t.download.windows} <span className="text-xs font-normal ml-1 opacity-70">{t.download.coming_soon}</span></span>
              </button>
              <button disabled className="group flex items-center justify-center gap-3 px-8 py-4 bg-zinc-800/50 text-zinc-500 border border-zinc-800 rounded-md font-bold text-lg cursor-not-allowed">
                <svg className="w-6 h-6 opacity-50" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.21-.93 3.8-.71 1.24.18 2.65.67 3.51 1.91-.02.02-2.13 1.23-2.11 3.66.02 2.94 2.59 3.95 2.61 3.96-.03.09-.4 1.38-1.33 2.71-.83 1.2-1.69 2.4-3.06 2.4M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                <span>{t.download.macos} <span className="text-xs font-normal ml-1 opacity-70">{t.download.coming_soon}</span></span>
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#09090b] text-zinc-500 py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12 text-sm">
          <div className="col-span-1 md:col-span-2">
            <div className="text-lg font-bold text-zinc-100 mb-4">Vzuuh</div>
            <p className="max-w-xs">
              {t.footer.description}
            </p>
          </div>
          <div>
            <h4 className="text-zinc-100 font-bold mb-4">{t.footer.product}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-zinc-100 transition-colors">{t.footer.links.download}</a></li>
              <li><a href="#" className="hover:text-zinc-100 transition-colors">{t.footer.links.features}</a></li>
              <li><a href="#" className="hover:text-zinc-100 transition-colors">{t.footer.links.roadmap}</a></li>
              <li><a href="#" className="hover:text-zinc-100 transition-colors">{t.footer.links.changelog}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-zinc-100 font-bold mb-4">{t.footer.company}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-zinc-100 transition-colors">{t.footer.links.about}</a></li>
              <li><a href="#" className="hover:text-zinc-100 transition-colors">{t.footer.links.blog}</a></li>
              <li><a href="#" className="hover:text-zinc-100 transition-colors">{t.footer.links.contact}</a></li>
              <li><a href="#" className="hover:text-zinc-100 transition-colors">{t.footer.links.privacy}</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-white/5 flex justify-between items-center text-xs">
          <div>&copy; 2025 Vzuuh. {t.footer.rights}</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-zinc-100">Twitter</a>
            <a href="#" className="hover:text-zinc-100">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
