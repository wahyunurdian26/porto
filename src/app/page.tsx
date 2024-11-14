import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME || "My Site"} | Home`,
  description: "My Portfolio",
};

export default function Home() {
  return (
    <main className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
      <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark">
        <div className="aspect-6/4 overflow-hidden rounded-lg bg-light pt-4 text-center dark:bg-dark-2">
          <img src="assets/img/profile.png" alt="" className="inline-block h-full w-full scale-110 object-contain object-bottom" />
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold dark:text-light">Cris Rayaan 👋</h3>
          <p className="mt-2 text-muted dark:text-light/70">
            A Passionate
            <span className="font-semibold text-dark dark:text-white">
              Full Stack Developer
            </span>
            🖥️ &
            <span className="font-semibold text-dark dark:text-white">
              Product Designer
            </span>
            having
            <span className="font-semibold text-dark dark:text-white"> 12 years </span>
            of Experiences over 24+ Country Worldwide.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <a href="#" className="inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-primary px-6 py-4 font-medium text-white transition hover:bg-blue-600 focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="h-6 w-6">
                <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Zm10 3a2 2 0 0 1 2 2m-2-6a6 6 0 0 1 6 6" />
              </svg>
              <span>Book A Call</span>
            </a>
            <button type="button" data-clipboard-text="shams.sujon.01@gmail.com" data-clipboard-action="copy" data-clipboard-success-text="Copied to clipboard" className="js-clipboard hs-tooltip inline-flex items-center gap-x-2 rounded-lg border border-light bg-transparent px-6 py-4 font-medium text-dark transition [--trigger:focus] hover:bg-light focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-dark dark:text-light/70 dark:hover:bg-dark dark:hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="h-6 w-6">
                <path d="M8 10a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8Z" />
                <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
              </svg>
              <span>Copy Email</span>

              <span
                className="hs-tooltip-content invisible z-10 hidden rounded-lg bg-gray-900 px-2 py-1 text-xs font-medium text-white opacity-0 shadow-sm transition-opacity hs-tooltip-shown:visible hs-tooltip-shown:opacity-100 dark:bg-slate-700"
                role="tooltip">
                Copied to clipboard
              </span>
            </button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-transparent text-center text-slate-600 transition hover:text-primary focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:bg-dark-2 dark:text-slate-500 dark:hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10Z" />
              </svg>
            </a>
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-transparent text-center text-slate-600 transition hover:text-primary focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:bg-dark-2 dark:text-slate-500 dark:hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path d="M13.37 2.094A10.003 10.003 0 0 0 8.002 21.17a7.757 7.757 0 0 1 .163-2.293c.185-.839 1.296-5.463 1.296-5.463a3.74 3.74 0 0 1-.324-1.577c0-1.485.857-2.593 1.923-2.593a1.334 1.334 0 0 1 1.342 1.508c0 .9-.578 2.262-.88 3.54a1.544 1.544 0 0 0 1.575 1.923c1.898 0 3.17-2.431 3.17-5.301 0-2.2-1.457-3.848-4.143-3.848a4.746 4.746 0 0 0-4.93 4.794 2.96 2.96 0 0 0 .648 1.97.48.48 0 0 1 .162.554c-.046.184-.162.623-.208.784a.354.354 0 0 1-.51.254c-1.384-.554-2.036-2.077-2.036-3.816 0-2.847 2.384-6.255 7.154-6.255 3.796 0 6.32 2.777 6.32 5.747 0 3.909-2.177 6.848-5.394 6.848a2.862 2.862 0 0 1-2.454-1.246s-.578 2.316-.692 2.754a8.026 8.026 0 0 1-1.019 2.131c.923.28 1.882.42 2.846.416a9.99 9.99 0 0 0 9.996-10.003 10.002 10.002 0 0 0-8.635-9.903l-.002-.001Z" />
              </svg>
            </a>
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-transparent text-center text-slate-600 transition hover:text-primary focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:bg-dark-2 dark:text-slate-500 dark:hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10Z" />
              </svg>
            </a>
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-transparent text-center text-slate-600 transition hover:text-primary focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:bg-dark-2 dark:text-slate-500 dark:hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022ZM10 15.5l6-3.5-6-3.5v7Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:gap-6">
        <div className="group rounded-2xl bg-white px-6 pt-0 shadow dark:bg-black dark:shadow-dark">
          <h3 className="relative z-10 bg-white pb-2 pt-6 text-2xl font-semibold dark:bg-black dark:text-light">
            Work Experience
          </h3>

          <div className="max-h-[200px] space-y-4 overflow-hidden pb-6 pt-4 [&::-webkit-scrollbar-thumb]:bg-gray-400 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-0">
            <div className="animate-scrollY space-y-4 group-hover:[animation-play-state:paused]">
              <div className="flex flex-col gap-1 md:flex-row md:gap-10">
                <p className="mt-1 text-sm font-medium text-muted dark:text-light/70">
                  2021 - 2023
                </p>
                <div className="flex items-center gap-3">
                  <div className="grid h-8 w-8 shrink-0 place-content-center rounded-lg bg-light dark:bg-dark-2">
                    <img src="assets/img/google.svg" alt="" className="h-5 w-5" />
                  </div>
                  <div className="">
                    <h6 className="text-base font-semibold text-dark dark:text-light/70">
                      Google Inc.
                    </h6>
                    <p className="text-sm text-muted">
                      Senior Product Designer
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1 md:flex-row md:gap-10">
                <p className="mt-1 text-sm font-medium text-muted dark:text-light/70">
                  2021 - 2023
                </p>
                <div className="flex items-center gap-3">
                  <div className="grid h-8 w-8 shrink-0 place-content-center rounded-lg bg-light dark:bg-dark-2">
                    <img src="assets/img/meta.svg" alt="" className="h-5 w-5" />
                  </div>
                  <div className="">
                    <h6 className="text-base font-semibold text-dark dark:text-light/70">
                      Meta Inc.
                    </h6>
                    <p className="text-sm text-muted">Product Designer</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1 md:flex-row md:gap-10">
                <p className="mt-1 text-sm font-medium text-muted dark:text-light/70">
                  2018 - 2021
                </p>
                <div className="flex items-center gap-3">
                  <div className="grid h-8 w-8 shrink-0 place-content-center rounded-lg bg-light dark:bg-dark-2">
                    <img src="assets/img/adobe.svg" alt="" className="h-5 w-5" />
                  </div>
                  <div className="">
                    <h6 className="text-base font-semibold text-dark dark:text-light/70">
                      Adobe
                    </h6>
                    <p className="text-sm text-muted">Senior UI UX Designer</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1 md:flex-row md:gap-10">
                <p className="mt-1 text-sm font-medium text-muted dark:text-light/70">
                  2018 - 2021
                </p>
                <div className="flex items-center gap-3">
                  <div className="grid h-8 w-8 shrink-0 place-content-center rounded-lg bg-light dark:bg-dark-2">
                    <img src="assets/img/adobe.svg" alt="" className="h-5 w-5" />
                  </div>
                  <div className="">
                    <h6 className="text-base font-semibold text-dark dark:text-light/70">
                      Adobe
                    </h6>
                    <p className="text-sm text-muted">Senior UI UX Designer</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-scrollY space-y-4 group-hover:[animation-play-state:paused]">
              <div className="flex flex-col gap-1 md:flex-row md:gap-10">
                <p className="mt-1 text-sm font-medium text-muted dark:text-light/70">
                  2021 - 2023
                </p>
                <div className="flex items-center gap-3">
                  <div className="grid h-8 w-8 shrink-0 place-content-center rounded-lg bg-light dark:bg-dark-2">
                    <img src="assets/img/google.svg" alt="" className="h-5 w-5" />
                  </div>
                  <div className="">
                    <h6 className="text-base font-semibold text-dark dark:text-light/70">
                      Google Inc.
                    </h6>
                    <p className="text-sm text-muted">
                      Senior Product Designer
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1 md:flex-row md:gap-10">
                <p className="mt-1 text-sm font-medium text-muted dark:text-light/70">
                  2021 - 2023
                </p>
                <div className="flex items-center gap-3">
                  <div className="grid h-8 w-8 shrink-0 place-content-center rounded-lg bg-light dark:bg-dark-2">
                    <img src="assets/img/meta.svg" alt="" className="h-5 w-5" />
                  </div>
                  <div className="">
                    <h6 className="text-base font-semibold text-dark dark:text-light/70">
                      Meta Inc.
                    </h6>
                    <p className="text-sm text-muted">Product Designer</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1 md:flex-row md:gap-10">
                <p className="mt-1 text-sm font-medium text-muted dark:text-light/70">
                  2018 - 2021
                </p>
                <div className="flex items-center gap-3">
                  <div className="grid h-8 w-8 shrink-0 place-content-center rounded-lg bg-light dark:bg-dark-2">
                    <img src="assets/img/adobe.svg" alt="" className="h-5 w-5" />
                  </div>
                  <div className="">
                    <h6 className="text-base font-semibold text-dark dark:text-light/70">
                      Adobe
                    </h6>
                    <p className="text-sm text-muted">Senior UI UX Designer</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1 md:flex-row md:gap-10">
                <p className="mt-1 text-sm font-medium text-muted dark:text-light/70">
                  2018 - 2021
                </p>
                <div className="flex items-center gap-3">
                  <div className="grid h-8 w-8 shrink-0 place-content-center rounded-lg bg-light dark:bg-dark-2">
                    <img src="assets/img/adobe.svg" alt="" className="h-5 w-5" />
                  </div>
                  <div className="">
                    <h6 className="text-base font-semibold text-dark dark:text-light/70">
                      Adobe
                    </h6>
                    <p className="text-sm text-muted">Senior UI UX Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark">
          <h3 className="text-2xl font-semibold dark:text-light">My Expert Area</h3>

          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
            <div className="text-center">
              <div className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
                <img src="assets/img/figma.svg" alt="" className="h-8 w-8" />
              </div>
              <p className="mt-1 text-base font-medium text-dark dark:text-light/70">
                Figma
              </p>
            </div>
            <div className="text-center">
              <div className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
                <img src="assets/img/notion.svg" alt="" className="h-8 w-8" />
              </div>
              <p className="mt-1 text-base font-medium text-dark dark:text-light/70">
                Notion
              </p>
            </div>
            <div className="text-center">
              <div className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
                <img src="assets/img/mico.svg" alt="" className="h-8 w-8" />
              </div>
              <p className="mt-1 text-base font-medium text-dark dark:text-light/70">
                Mico
              </p>
            </div>
            <div className="text-center">
              <div className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
                <img src="assets/img/framer.svg" alt="" className="h-8 w-8" />
              </div>
              <p className="mt-1 text-base font-medium text-dark dark:text-light/70">
                Framer
              </p>
            </div>
            <div className="text-center">
              <div className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
                <img src="assets/img/webflow.svg" alt="" className="h-8 w-8" />
              </div>
              <p className="mt-1 text-base font-medium text-dark dark:text-light/70">
                Webflow
              </p>
            </div>
            <div className="text-center">
              <div className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
                <img src="assets/img/zeplin.svg" alt="" className="h-8 w-8" />
              </div>
              <p className="mt-1 text-base font-medium text-dark dark:text-light/70">
                Zeplin
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-2xl font-semibold dark:text-light">Recent Projects</h3>
          <a href="portfolio.html" className="inline-flex items-center justify-center gap-2 border-b text-center text-base text-primary transition hover:border-b-primary dark:border-b-muted dark:hover:border-b-primary">
            <span>All Projects</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="h-5 w-5">
              <path d="M4.167 10h11.666m-4.999 5 5-5m-5-5 5 5" />
            </svg>
          </a>
        </div>

        <div className="mt-6 space-y-6">
          <div className="group relative overflow-hidden rounded-lg bg-light p-4 pb-0 dark:bg-dark-2 md:p-6 md:pb-0">
            <div className="relative aspect-6/4 overflow-hidden rounded-t-lg">
              <img src="assets/img/project-1.png" alt="" className="h-full w-full rounded-t-lg object-cover object-top transition" />

              <a href="assets/img/project-1.png" data-gall="project-gallry-1" className="project-gallery-link absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-content-center rounded-full bg-white text-primary shadow-lg transition lg:invisible lg:-translate-y-[40%] lg:opacity-0 lg:group-hover:visible lg:group-hover:-translate-y-1/2 lg:group-hover:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="h-6 w-6">
                  <path d="M10 4.167v11.666M4.167 10h11.666" />
                </svg>
              </a>
            </div>

            <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-2 bg-gradient-to-t from-black/20 p-4">
              <span
                className="rounded bg-white px-2 py-1 text-xs font-medium text-primary shadow">
                Product Design
              </span>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg bg-light p-4 pb-0 dark:bg-dark-2 md:p-6 md:pb-0">
            <div className="relative aspect-6/4 overflow-hidden rounded-t-lg">
              <img src="assets/img/project-2.png" alt="" className="h-full w-full rounded-t-lg object-cover object-top transition" />

              <a href="assets/img/project-2.png" data-gall="project-gallry-2" className="project-gallery-link absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-content-center rounded-full bg-white text-primary shadow-lg transition lg:invisible lg:-translate-y-[40%] lg:opacity-0 lg:group-hover:visible lg:group-hover:-translate-y-1/2 lg:group-hover:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="h-6 w-6">
                  <path d="M10 4.167v11.666M4.167 10h11.666" />
                </svg>
              </a>
            </div>

            <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-2 bg-gradient-to-t from-black/20 p-4">
              <span
                className="rounded bg-white px-2 py-1 text-xs font-medium text-primary shadow">
                Product Design
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-2xl font-semibold dark:text-light">Services I Offered</h3>
          <a href="services.html" className="inline-flex items-center justify-center gap-2 border-b text-center text-base text-primary transition hover:border-b-primary dark:border-b-muted dark:hover:border-b-primary">
            <span>See All Services</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="h-5 w-5">
              <path d="M4.167 10h11.666m-4.999 5 5-5m-5-5 5 5" />
            </svg>
          </a>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-4">
          <div className="rounded-2xl bg-light p-2 text-center dark:bg-dark-2 md:p-4">
            <div className="grid place-content-center rounded-lg bg-white p-6 dark:bg-black">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-12 w-12 text-primary lg:h-16 lg:w-16">
                <path d="M8 13.333A5.333 5.333 0 0 1 13.333 8h37.334A5.333 5.333 0 0 1 56 13.333v37.334A5.333 5.333 0 0 1 50.667 56H13.333A5.333 5.333 0 0 1 8 50.667V13.333ZM40 8 8 40M25.334 8l-16 16M53.333 9.333 38.667 24M24 40 10.666 53.333" />
                <path d="M56 24H24v32" />
              </svg>
            </div>
            <p className="mt-3 text-base font-medium text-dark dark:text-light/70">
              UI UX Design
            </p>
          </div>
          <div className="rounded-2xl bg-light p-2 text-center dark:bg-dark-2 md:p-4">
            <div className="grid place-content-center rounded-lg bg-white p-6 dark:bg-black">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-12 w-12 text-primary lg:h-16 lg:w-16">
                <path d="M26.666 18.667A5.333 5.333 0 0 1 32 13.333h16a5.333 5.333 0 0 1 5.333 5.334v26.666A5.333 5.333 0 0 1 48 50.667H32a5.333 5.333 0 0 1-5.334-5.334V18.667Zm-8 0v26.666m-8-24v21.334" />
              </svg>
            </div>
            <p className="mt-3 text-base font-medium text-dark dark:text-light/70">
              Mobile App
            </p>
          </div>
          <div className="rounded-2xl bg-light p-2 text-center dark:bg-dark-2 md:p-4">
            <div className="grid place-content-center rounded-lg bg-white p-6 dark:bg-black">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-12 w-12 text-primary lg:h-16 lg:w-16">
                <path d="M10.666 13.333a2.667 2.667 0 0 1 2.667-2.666h37.334a2.667 2.667 0 0 1 2.666 2.666v5.334a2.667 2.667 0 0 1-2.666 2.666H13.332a2.666 2.666 0 0 1-2.667-2.666v-5.334Zm0 21.334A2.667 2.667 0 0 1 13.333 32H24a2.667 2.667 0 0 1 2.666 2.667v16A2.667 2.667 0 0 1 24 53.333H13.333a2.666 2.666 0 0 1-2.667-2.666v-16ZM37.334 32h16m-16 10.667h16m-16 10.666h16" />
              </svg>
            </div>
            <p className="mt-3 text-base font-medium text-dark dark:text-light/70">
              Product Design
            </p>
          </div>
          <div className="rounded-2xl bg-light p-2 text-center dark:bg-dark-2 md:p-4">
            <div className="grid place-content-center rounded-lg bg-white p-6 dark:bg-black">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-12 w-12 text-primary lg:h-16 lg:w-16">
                <path d="M36.214 36.773a15.982 15.982 0 0 1 1.12 5.894A15.86 15.86 0 0 1 32 54.56a15.814 15.814 0 0 1-10.666 4.107c-8.827 0-16-7.174-16-16 0-7.36 5.013-13.6 11.786-15.44" />
                <path d="M46.88 27.227c6.773 1.84 11.787 8.08 11.787 15.44 0 8.826-7.174 16-16 16A15.814 15.814 0 0 1 32 54.56" />
                <path d="M16 21.333a16 16 0 1 0 32 0 16 16 0 0 0-32 0Z" />
              </svg>
            </div>
            <p className="mt-3 text-base font-medium text-dark dark:text-light/70">
              Branding
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark">
        <div className="animate-marquee whitespace-nowrap overflow-hidden text-nowrap rounded-lg bg-light p-3 text-lg font-medium text-muted dark:bg-dark-2">
          Available For Hire 🚀 Crafting Digital Experiences 🎨 Available For Hire 🚀
          Crafting Digital Experiences 🎨
        </div>

        <h2 className="mt-4 text-[40px] font-semibold leading-snug text-dark dark:text-light">
          Let's👋 <br />
          Work Together
        </h2>

        <a href="contact.html" className="mt-6 inline-flex items-center justify-center gap-2 border-b text-center text-base text-primary transition hover:border-b-primary dark:border-b-muted dark:hover:border-b-primary">
          <span>Let's Talk</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="h-5 w-5">
            <path d="M17.5 11.667v-5h-5" />
            <path d="m17.5 6.667-7.5 7.5-7.5-7.5" />
          </svg>
        </a>
      </div>
    </main>
  );
}
