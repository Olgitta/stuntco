const ContactBar = ({ lang = 'en' }) => {
    const phoneIntl = '+972544518121'
    const phoneDisplay = '054-4518121 (+972)'

    const whatsappNumber = '972544518121'
    const whatsappMessages = {
        en: 'Hello! I have a question.',
        ru: 'Здравствуйте! У меня есть вопрос.'
    }

    const telegramUsername = 'your_telegram_username'

    const whatsappText = encodeURIComponent(
        whatsappMessages[lang] ?? whatsappMessages.en
    )

    return (
        <section className="fixed bottom-0 left-0 right-0 z-50 bg-white p-3 shadow-lg md:static md:shadow-none">
            <div className="container mx-auto">
                <div className="flex items-center gap-2">

                    {/* Phone */}
                    <a
                        href={`tel:${phoneIntl}`}
                        data-twe-ripple-init
                        data-twe-ripple-color="light"
                        className="inline-block rounded bg-[#ea4335]
                        px-6 py-2.5 text-xs font-medium uppercase
                        text-white shadow-md transition hover:shadow-lg"
                        aria-label="Call us"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg"
                             fill="none"
                             viewBox="0 0 24 24"
                             strokeWidth={1.5}
                             stroke="currentColor"
                             className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                        {/*{phoneDisplay}*/}
                    </a>

                    {/* WhatsApp */}
                    <a
                        href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-twe-ripple-init
                        data-twe-ripple-color="light"
                        className="inline-flex items-center rounded bg-[#128c7e] px-6 py-2.5 text-xs font-medium uppercase text-white shadow-md transition hover:shadow-lg"
                        aria-label="Chat on WhatsApp"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            fill="currentColor"
                            className="h-4 w-4"
                        >
                            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                        </svg>
                    </a>

                    {/* Telegram */}
                    <a
                        href={`https://t.me/${telegramUsername}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-twe-ripple-init
                        data-twe-ripple-color="light"
                        className="inline-flex items-center rounded bg-[#229ED9] px-6 py-2.5 text-xs font-medium uppercase text-white shadow-md transition hover:shadow-lg"
                        aria-label="Chat on Telegram"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 496 512"
                            fill="currentColor"
                            className="h-4 w-4"
                        >
                            <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.6 169.9-40.7 191.8c-3.1 13.8-11.4 17.2-23.1 10.7l-64-47.2-30.9 29.7c-3.4 3.4-6.3 6.3-12.9 6.3l4.6-65.3 118.9-107.4c5.2-4.6-1.1-7.2-8-2.6L167.7 285.6l-63.6-19.9c-13.8-4.3-14-13.8 2.9-20.4l248.9-96.1c11.5-4.3 21.5 2.7 13.7 28.7z" />
                        </svg>
                    </a>

                </div>
            </div>
        </section>
    )
}

export default ContactBar




// const ContactBar = () => {
//
//     return (
//         <section className="mt-10">
//             <div className="container mx-auto">
//                 <div
//                     className="flex items-center gap-2">
//                     {/*Phone*/}
//                     <button
//                         type="button"
//                         data-twe-ripple-init
//                         data-twe-ripple-color="light"
//                         className="mb-2 inline-block rounded bg-[#1877f2] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
//                               <span className="[&>svg]:h-4 [&>svg]:w-4">
//                                   054-4518121 (+972)
//                               </span>
//                     </button>
//                     {/*Whatsapp*/}
//                     <button
//                         type="button"
//                         data-twe-ripple-init
//                         data-twe-ripple-color="light"
//                         className="mb-2 inline-block rounded bg-[#128c7e] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
//                           <span className="[&>svg]:h-4 [&>svg]:w-4">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="currentColor"
//                                 viewBox="0 0 448 512">
//                                 <path
//                                     d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
//                             </svg>
//                           </span>
//                     </button>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default ContactBar


