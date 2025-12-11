import aboutRu from '../data/lang/ru/about.json'
import aboutEn from '../data/lang/en/about.json'

const About = ({ lang = 'ru' }) => {
  const about = lang === 'en' ? aboutEn : aboutRu

  return (
    <main className="flex-grow space-y-16 pb-16">
    <section className="px-4 pt-10 sm:px-6 lg:px-8">
      <div
        className="flex min-h-[440px] flex-col items-center justify-center gap-6 rounded-xl bg-cover bg-center bg-no-repeat p-6 text-center sm:p-10"
        style={{ backgroundImage: about.hero.backgroundImage }}
      >
        <div className="max-w-3xl space-y-3">
          <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-white sm:text-5xl lg:text-6xl">
            {about.hero.title}
          </h1>
          <p className="text-base leading-normal text-gray-100 sm:text-lg">{about.hero.subtitle}</p>
        </div>
        <button className="flex h-12 min-w-[120px] items-center justify-center rounded-lg bg-primary px-6 text-base font-bold text-white transition-colors hover:bg-red-700">
          {about.hero.buttonLabel}
        </button>
      </div>
    </section>

    <section className="space-y-8 px-4 sm:px-6 lg:px-8">
      <div className="space-y-3">
        <h2 className="text-[32px] font-bold leading-tight tracking-[-0.02em] text-text-dark sm:text-4xl">
          {about.story.title}
        </h2>
        <p className="max-w-3xl text-base text-text-light sm:text-lg">{about.story.description}</p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {about.storyBlocks.map((block) => (
          <article key={block.title} className="flex flex-col gap-4">
            <div
              className="aspect-video w-full rounded-xl bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: block.image }}
              role="img"
              aria-label={block.title}
            />
            <div className="space-y-1">
              <p className="text-lg font-semibold text-text-dark">{block.title}</p>
              <p className="text-sm text-text-light">{block.text}</p>
            </div>
          </article>
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
      <div className="mx-auto max-w-3xl rounded-xl border border-border-light bg-white p-8 text-center shadow-sm sm:p-12">
        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-text-dark sm:text-3xl">{about.cta.title}</h3>
          <p className="text-base text-text-light">{about.cta.description}</p>
          <button className="flex h-12 w-full items-center justify-center rounded-lg bg-primary px-6 text-base font-bold text-white transition-colors hover:bg-red-700 sm:w-auto">
            {about.cta.buttonLabel}
          </button>
        </div>
      </div>
    </section>
  </main>
  )
}

export default About

