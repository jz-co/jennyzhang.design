import type { Metadata } from "next";

export default function Page() {
    return (
        <div className="w-full max-w-3xl px-4 md:px-6">
          <section className="py-12 md:py-24 lg:py-32">
            <div className="space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Mobile Banking App Redesign Case Study
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  A case study about redesigning a mobile banking app.
                </p>
              </div>
            </div>
          </section>
          <section className="py-12 md:py-24 lg:py-32">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Problem Statement</h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                The existing mobile banking app was outdated and difficult to use.
              </p>
            </div>
          </section>
          <section className="py-12 md:py-24 lg:py-32">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Research & Analysis</h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We conducted user interviews and analyzed the existing app to identify the issues.
              </p>
            </div>
          </section>
          <section className="py-12 md:py-24 lg:py-32">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Design Process</h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We designed a new user-friendly mobile banking app that addressed the issues identified in the research
                and analysis phase.
              </p>
            </div>
          </section>
          <section className="py-12 md:py-24 lg:py-32">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Final Solution</h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                The new mobile banking app was launched and received positive feedback from users.
              </p>
            </div>
          </section>
        </div>
    )
}