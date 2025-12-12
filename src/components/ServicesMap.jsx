import servicesRu from '../data/lang/ru/services.json'
import servicesEn from '../data/lang/en/services.json'

const ServicesMap = ({ lang = 'en' }) => {
    const servicesData = lang === 'en' ? servicesEn : servicesRu

    return (
        <>
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
        </>
    )
}

export default ServicesMap