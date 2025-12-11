import portfolioRu from '../data/lang/ru/portfolio.json'
import portfolioEn from '../data/lang/en/portfolio.json'

const Portfolio = ({ lang = 'ru' }) => {
  const portfolioData = lang === 'en' ? portfolioEn : portfolioRu

  return (
    <main className="flex-grow px-4 py-10">
      <h1 className="text-3xl font-bold leading-tight tracking-[-0.02em]">{portfolioData.title}</h1>
      <p className="mt-2 max-w-2xl text-text-light">{portfolioData.description}</p>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {portfolioData.projects.map((project) => (
          <figure key={project.title} className="group relative overflow-hidden rounded-xl border border-border-light">
            <img
              src={project.image}
              alt={project.title}
              className="aspect-square h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" aria-hidden />
            <figcaption className="absolute bottom-4 left-4 text-lg font-semibold text-white">
              {project.title}
            </figcaption>
          </figure>
        ))}
      </div>
    </main>
  )
}

export default Portfolio

