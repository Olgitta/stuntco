import servicesRu from '../data/lang/ru/services.json'
import servicesEn from '../data/lang/en/services.json'
import ServicesMap from "../components/ServicesMap.jsx";

const Services = ({ lang = 'en' }) => {
  const servicesData = lang === 'en' ? servicesEn : servicesRu

  return (
    <main className="flex-grow px-4 py-10">
      <h1 className="text-3xl font-bold leading-tight tracking-[-0.02em]">{servicesData.title}</h1>
      <p className="mt-2 max-w-2xl text-text-light">{servicesData.description}</p>
      <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
        <ServicesMap lang={lang} />
      </div>
    </main>
  )
}

export default Services

