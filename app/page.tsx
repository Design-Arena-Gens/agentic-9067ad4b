import Link from "next/link";

const highlights = [
  "Typed Next.js 14 app router setup",
  "Responsive layout that reads well on any device",
  "Ready for rapid experiments and Vercel deployments",
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 text-slate-100">
      <div className="w-full max-w-3xl px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-teal-300">
          Wave back
        </p>
        <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">
          Hi there, welcome to your freshly generated app 👋
        </h1>
        <p className="mt-5 text-lg text-slate-300">
          This minimal experience is production ready out of the box. The only
          thing missing is your next idea: tweak the copy, drop in components,
          or plug in an API to bring it to life.
        </p>
        <ul className="mt-8 space-y-3 text-left text-base text-slate-200">
          {highlights.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-lg border border-slate-800 bg-slate-900/50 px-4 py-3"
            >
              <span aria-hidden className="text-teal-300">
                ✦
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="https://nextjs.org/docs"
            className="inline-flex items-center justify-center rounded-full bg-teal-400 px-6 py-3 font-medium text-slate-950 transition hover:bg-teal-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-200"
          >
            Explore Next.js Docs
          </Link>
          <Link
            href="https://vercel.com"
            className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 font-medium text-slate-100 transition hover:border-slate-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-100"
          >
            Check Vercel Platform
          </Link>
        </div>
      </div>
      <footer className="w-full max-w-3xl px-6 pb-8 text-center text-xs text-slate-500">
        Deployed lightning fast by an autonomous coding agent.
      </footer>
    </main>
  );
}
