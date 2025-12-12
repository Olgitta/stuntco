import aboutRu from '../data/lang/ru/about.json'
import aboutEn from '../data/lang/en/about.json'
import ContactBar from "../components/ContactBar.jsx";

const About = ({lang = 'en'}) => {
    const about = lang === 'en' ? aboutEn : aboutRu

    return (
        <main className="flex-grow">
            <ContactBar lang={lang} />
            <section className="mt-10">
                <h3 className="pb-8 text-center text-[22px] font-bold leading-tight tracking-[-0.015em] text-text-dark sm:text-3xl">
                    {about.story.title}
                </h3>
                <div className="text-text-light w-full max-w-5xl space-y-4">
                    {about.aboutus.map((desc, index) => (
                        <p
                            key={index}
                        >
                            {desc}
                        </p>
                    ))}
                </div>
            </section>

            <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
                <h3 className="pb-8 text-center text-[22px] font-bold leading-tight tracking-[-0.015em] text-text-dark sm:text-3xl">
                    {about.valuesTitle}
                </h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {about.values.map((value) => (
                        <div
                            key={value.title}
                            className="flex flex-1 flex-col gap-3 rounded-lg border border-border-light bg-surface-light p-6"
                        >
                            <span className="material-symbols-outlined !text-4xl text-primary">{value.icon}</span>
                            <div className="space-y-1">
                                <h4 className="text-base font-bold leading-tight text-text-dark">{value.title}</h4>
                                <p className="text-sm text-text-light">{value.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="space-y-8 px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-2">
                    <h3 className="text-[22px] font-bold leading-tight tracking-[-0.015em] text-text-dark sm:text-3xl">
                        {about.teamTitle}
                    </h3>
                    <p className="text-base text-text-light sm:text-lg">{about.teamDescription}</p>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {about.team.map((member) => (
                        <div key={member.name} className="group flex flex-col items-center text-center">
                            <div className="w-full overflow-hidden rounded-lg">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="aspect-square h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="mt-4 space-y-1">
                                <p className="font-bold text-text-dark">{member.name}</p>
                                <p className="text-sm text-primary">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="px-4 pb-6 sm:px-6 lg:px-8">
                <div
                    className="mx-auto max-w-3xl rounded-xl border border-border-light bg-white p-8 text-center shadow-sm sm:p-12">
                    <div className="space-y-3">
                        <h3 className="text-2xl font-bold text-text-dark sm:text-3xl">{about.cta.title}</h3>
                        <p className="text-base text-text-light">{about.cta.description}</p>
                        <button
                            className="flex h-12 w-full items-center justify-center rounded-lg bg-primary px-6 text-base font-bold text-white transition-colors hover:bg-red-700 sm:w-auto">
                            {about.cta.buttonLabel}
                        </button>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default About

