import VideoPlayer from '../components/VideoPlayer'
import homeRu from '../data/lang/ru/home.json'
import homeEn from '../data/lang/en/home.json'
import servicesRu from '../data/lang/ru/services.json'
import servicesEn from '../data/lang/en/services.json'
import portfolioRu from '../data/lang/ru/portfolio.json'
import portfolioEn from '../data/lang/en/portfolio.json'

const Home = ({ lang = 'ru' }) => {
  const home = (lang === 'en' ? homeEn : homeRu)
  const servicesData = (lang === 'en' ? servicesEn : servicesRu)
  const portfolioData = (lang === 'en' ? portfolioEn : portfolioRu)

  return (
    <main className="flex-grow">
    <section className="mt-10">
      <div
        className="flex min-h-[480px] flex-col items-center justify-center gap-6 rounded-xl bg-surface-light p-4 sm:gap-8 sm:p-6 md:p-10 border border-border-light"
      >
        <div className="w-full max-w-5xl">
          <VideoPlayer videoId={home.hero.videoId} title={home.hero.title} autoplay={home.hero.autoplay} />
        </div>
      </div>
    </section>

    <section className="px-4 pb-3 pt-16">
      <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em]">{home.expertiseTitle}</h2>
    </section>
    <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 px-4 pb-4">
      {servicesData.services.map((service) => (
        <article
          key={service.title}
          className="flex flex-col gap-3 rounded-xl border border-border-light bg-surface-light p-4 pb-3"
        >
          <div
            className="aspect-[4/3] w-full rounded-lg bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${service.image}')` }}
            role="img"
            aria-label={service.title}
          ></div>
          <div>
            <p className="text-lg font-medium leading-normal text-text-dark">{service.title}</p>
            <p className="text-sm font-normal leading-normal text-text-light">{service.description}</p>
          </div>
        </article>
      ))}
    </section>

    <section className="px-4 pb-3 pt-16">
      <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em]">{home.projectsTitle}</h2>
    </section>
    <section className="grid grid-cols-2 gap-4 px-4 pb-4 md:grid-cols-4">
      {portfolioData.projects.map((project) => (
        <figure key={project.title} className="group relative overflow-hidden rounded-xl">
          <img
            src={project.image}
            alt={project.title}
            className="aspect-square h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" aria-hidden />
          <figcaption className="absolute bottom-4 left-4 text-white font-bold">{project.title}</figcaption>
        </figure>
      ))}
    </section>

    <section className="mx-4 my-16 rounded-xl border border-border-light bg-surface-light p-8 text-center sm:p-12">
      <h2 className="text-3xl font-bold leading-tight tracking-[-0.015em] text-text-dark">{home.cta.title}</h2>
      <p className="mx-auto mt-2 mb-6 max-w-xl text-text-light">{home.cta.description}</p>
      <button className="mx-auto flex h-12 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg px-6 text-base font-bold leading-normal tracking-[0.015em] text-white transition-colors bg-primary hover:bg-red-700">
        <span className="truncate">{home.cta.buttonLabel}</span>
      </button>
    </section>
    </main>
  )
}

export default Home

