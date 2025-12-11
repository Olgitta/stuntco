import { useMemo, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Contacts from './pages/Contacts'
import navigationRu from './data/lang/ru/navigation.json'
import navigationEn from './data/lang/en/navigation.json'

function App() {
  const [lang, setLang] = useState('ru')
  const navByLang = useMemo(
    () => ({
      ru: navigationRu,
      en: navigationEn,
    }),
    [],
  )
  const navigation = navByLang[lang] || navByLang.ru

  return (
    <div className="bg-background-light text-text-dark">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <div className="flex h-full grow flex-col">
          <div className="flex flex-1 justify-center px-4 py-5 sm:px-10 md:px-20 lg:px-40">
            <div className="flex w-full max-w-5xl flex-1 flex-col">
              <Navbar
                navItems={navigation.navItems}
                brandName={navigation.brand}
                currentLang={lang}
                onLangChange={setLang}
              />

              <Routes>
                <Route path="/" element={<Home lang={lang} />} />
                <Route path="/services" element={<Services lang={lang} />} />
                <Route path="/portfolio" element={<Portfolio lang={lang} />} />
                <Route path="/about" element={<About lang={lang} />} />
                <Route path="/contacts" element={<Contacts lang={lang} />} />
              </Routes>

              <footer className="mt-10 bg-surface-light px-4 py-8 sm:px-10 border-t border-solid border-border-light">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <div className="size-5 text-primary" aria-hidden>
                        <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                          <path d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.263 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z"></path>
                        </svg>
                      </div>
                      <h2 className="text-lg font-bold text-text-dark">{navigation.brand}</h2>
                    </div>
                    <p className="text-sm text-text-light">{navigation.tagline}</p>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-text-dark">Быстрые ссылки</h3>
                    <ul className="space-y-1">
                      {navigation.navItems.map((item) => (
                        <li key={item.path}>
                          <a className="text-sm text-text-light transition-colors hover:text-primary" href={item.path}>
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-text-dark">Следите за нами</h3>
                    <div className="flex gap-4">
                      <a
                        className="text-text-light transition-colors hover:text-primary"
                        href="#"
                        aria-label={navigation.socialLabels[0]}
                      >
                        <svg
                          fill="none"
                          height="24"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                        </svg>
                      </a>
                      <a
                        className="text-text-light transition-colors hover:text-primary"
                        href="#"
                        aria-label={navigation.socialLabels[1]}
                      >
                        <svg
                          fill="none"
                          height="24"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12.22 2h-1.44a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1.44a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"></path>
                          <path d="M18.22 14h-1.44a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1.44a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2z"></path>
                          <path d="M6.22 14h-1.44a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1.44a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2z"></path>
                          <path d="M12 22V12"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-8 border-t border-solid border-border-light pt-4 text-center text-xs text-text-light">
                  {navigation.footerNote}
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
