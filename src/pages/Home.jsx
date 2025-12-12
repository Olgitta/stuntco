import VideoPlayer from '../components/VideoPlayer'
import homeRu from '../data/lang/ru/home.json'
import homeEn from '../data/lang/en/home.json'
import servicesRu from '../data/lang/ru/services.json'
import servicesEn from '../data/lang/en/services.json'
import portfolioRu from '../data/lang/ru/portfolio.json'
import portfolioEn from '../data/lang/en/portfolio.json'
import ContactBar from "../components/ContactBar.jsx";
import ServicesMap from "../components/ServicesMap.jsx";

const Home = ({ lang = 'en' }) => {
  const home = (lang === 'en' ? homeEn : homeRu)
  const servicesData = (lang === 'en' ? servicesEn : servicesRu)
  const portfolioData = (lang === 'en' ? portfolioEn : portfolioRu)

  return (
    <main className="flex-grow">

        <ContactBar lang={lang} />

        <section className="mt-10">

            <div className="text-text-light w-full max-w-5xl space-y-4">
                {home.description.map((desc, index) => (
                    <p
                        key={index}
                        className={index === 0 ? "font-bold" : ""}
                    >
                        {desc}
                    </p>
                ))}
            </div>

        </section>

        <section className="mt-10">

            <div className="w-full max-w-5xl">
                <VideoPlayer videoId={home.hero.videoId} title={home.hero.title} autoplay={home.hero.autoplay} />
        </div>

    </section>

    <section className="px-4 pb-3 pt-16">
      <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em]">{home.expertiseTitle}</h2>
    </section>
    <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 px-4 pb-4">
      <ServicesMap lang={lang} />
    </section>

    </main>
  )
}

export default Home

