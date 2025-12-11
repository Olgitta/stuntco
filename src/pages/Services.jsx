import servicesRu from '../data/lang/ru/services.json'
import servicesEn from '../data/lang/en/services.json'

const Services = ({ lang = 'ru' }) => {
  const servicesData = lang === 'en' ? servicesEn : servicesRu

  return (
    <main className="flex-grow px-4 py-10">
      <h1 className="text-3xl font-bold leading-tight tracking-[-0.02em]">{servicesData.title}</h1>
      <p className="mt-2 max-w-2xl text-text-light">{servicesData.description}</p>
      <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
        {servicesData.services.map((service) => (
          <article
            key={service.title}
            className="flex flex-col gap-3 rounded-xl border border-border-light bg-surface-light p-4"
          >
            <div
              className="aspect-[4/3] w-full rounded-lg bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${service.image}')` }}
              role="img"
              aria-label={service.title}
            ></div>
            <div>
              <p className="text-lg font-semibold text-text-dark">{service.title}</p>
              <p className="text-sm text-text-light">{service.description}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}

export default Services

