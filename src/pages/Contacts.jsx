import contactsRu from '../data/lang/ru/contacts.json'
import contactsEn from '../data/lang/en/contacts.json'

const Contacts = ({ lang = 'en' }) => {
  const contacts = lang === 'en' ? contactsEn : contactsRu

  return (
    <main className="flex-grow px-4 py-10 space-y-12">
    <section className="space-y-3">
      <h1 className="text-3xl font-bold leading-tight tracking-[-0.02em]">{contacts.title}</h1>
      <p className="max-w-2xl text-text-light">{contacts.intro}</p>
    </section>

    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {contacts.contactMethods.map((item) => (
        <div
          key={item.title}
          className="flex flex-col gap-3 rounded-xl border border-border-light bg-surface-light p-4"
        >
          <span className="material-symbols-outlined text-primary">{item.icon}</span>
          <div className="space-y-1">
            <p className="text-base font-semibold leading-tight text-text-dark">{item.title}</p>
            <p className="text-sm text-text-light">{item.value}</p>
          </div>
        </div>
      ))}
    </section>

    <section className="space-y-6">
      <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em]">{contacts.form.title}</h2>
      <form className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {contacts.form.fields
            .filter((field) => field.type !== 'textarea')
            .map((field) =>
              field.type === 'select' ? (
                <label key={field.name} className="flex flex-col space-y-2">
                  <span className="text-base font-medium leading-normal text-text-dark">{field.label}</span>
                  <select className="h-12 rounded-lg border border-border-light bg-background-light px-4 text-base text-text-dark shadow-sm outline-none ring-primary/50 focus:ring-2">
                    {field.options?.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </label>
              ) : (
                <label key={field.name} className="flex flex-col space-y-2">
                  <span className="text-base font-medium leading-normal text-text-dark">{field.label}</span>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="h-12 rounded-lg border border-border-light bg-background-light px-4 text-base text-text-dark shadow-sm outline-none ring-primary/50 focus:ring-2"
                  />
                </label>
              ),
            )}
        </div>
        {contacts.form.fields
          .filter((field) => field.type === 'textarea')
          .map((field) => (
            <label key={field.name} className="flex flex-col space-y-2">
              <span className="text-base font-medium leading-normal text-text-dark">{field.label}</span>
              <textarea
                placeholder={field.placeholder}
                className="h-32 rounded-lg border border-border-light bg-background-light px-4 py-3 text-base text-text-dark shadow-sm outline-none ring-primary/50 focus:ring-2"
              />
            </label>
          ))}
        <button className="flex h-12 min-w-[120px] items-center justify-center rounded-lg bg-primary px-6 text-base font-bold text-white transition-colors hover:bg-red-700">
          {contacts.form.submitLabel}
        </button>
      </form>
    </section>

    <section className="space-y-4 text-center">
      <h3 className="text-[22px] font-bold leading-tight tracking-[-0.015em]">{contacts.socialTitle}</h3>
      <div className="flex items-center justify-center gap-3">
        {contacts.social.map((social) => (
          <a
            key={social.label}
            href={social.href}
            aria-label={social.label}
            className="rounded-full border border-border-light p-3 transition-colors hover:bg-primary/10"
          >
            <img src={social.src} alt={`${social.label} Icon`} className="h-6 w-6" />
          </a>
        ))}
      </div>
    </section>
  </main>
  )
}

export default Contacts

