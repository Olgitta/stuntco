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
  const [lang, setLang] = useState('en')
  const navByLang = useMemo(
    () => ({
      ru: navigationRu,
      en: navigationEn,
    }),
    [],
  )
  const navigation = navByLang[lang] || navByLang.en

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
                <div className="text-center text-xs text-text-light">
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
