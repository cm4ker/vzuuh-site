import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">vzuuh</div>
          <ul className="hidden md:flex space-x-8">
            <li><a href="#features" className="hover:text-blue-600 transition-colors">Возможности</a></li>
            <li><a href="#download" className="hover:text-blue-600 transition-colors">Скачать</a></li>
            <li><a href="#contact" className="hover:text-blue-600 transition-colors">Контакты</a></li>
          </ul>
          <button className="md:hidden text-slate-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 text-center bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Почта, которая <span className="text-blue-600">летает</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
              Быстрый, удобный и безопасный почтовый клиент для тех, кто ценит своё время.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
                Скачать бесплатно
              </button>
              <button className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-lg font-semibold hover:bg-slate-50 transition-colors">
                Узнать больше
              </button>
            </div>
          </div>
        </section>

        {/* Features Section Placeholder */}
        <section id="features" className="py-20 px-4 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Почему vzuuh?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Молниеносная скорость', desc: 'Загрузка писем происходит мгновенно благодаря новому движку.' },
              { title: 'Умная сортировка', desc: 'ИИ автоматически раскладывает письма по папкам.' },
              { title: 'Безопасность', desc: 'Сквозное шифрование защищает вашу переписку.' }
            ].map((feature, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-3 text-slate-900">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 text-center">
        <p>&copy; 2025 vzuuh. Все права защищены.</p>
      </footer>
    </div>
  );
}

export default App;
