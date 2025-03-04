import { experiences } from '@/assets/data/experiences';
import ExperienceItem from '@/Components/ExperienceItem';
import { PageProps } from '@/types';
import { Head } from '@inertiajs/react';
import profile from '../assets/profile.jpg';

export default function Welcome({
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const experienceItems = experiences.map((experience) => (
        <ExperienceItem experience={experience} />
    ));

    const age = Math.floor(
        Math.abs(Date.now() - new Date('1994-04-23T03:35:00').getTime()) /
            (1000 * 3600 * 24) /
            365.25,
    );

    return (
        <>
            <Head title="Welcome" />
            <div>
                <div className="relative flex min-h-screen flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <header className="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3">
                            <div className="flex items-center space-x-4 lg:col-start-2 lg:justify-center">
                                <div
                                    className="flex size-12 shrink-0 items-center justify-center rounded-full bg-cover sm:size-16"
                                    style={{
                                        backgroundImage: `url(${profile})`,
                                    }}
                                />

                                <h1 className="text-2xl font-semibold text-black dark:text-white">
                                    Sabrina Bourouis
                                </h1>
                            </div>
                        </header>

                        <main className="mt-6 space-y-10">
                            <div id="about">
                                <h2 className="text-2xl font-semibold text-black dark:text-white">
                                    About me
                                </h2>
                                <p>{age} years old / Sydney</p>
                                <p>
                                    Very interested in new technologies, I
                                    initially followed a general computer
                                    science training, then I specialised in web
                                    development during my 3 years
                                    apprenticeship. I used those skills in the
                                    Research and Development department of IRCAD
                                    where I could master Angular and Node.js.
                                    After arriving in Australia, I focused
                                    mainly on Front-end development during my 5
                                    years at Big Picture Medical, using Vue but
                                    had a Laravel exposure and grew interest in
                                    this framework.
                                </p>
                                <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
                                    {experienceItems}
                                </div>
                            </div>
                        </main>

                        <footer className="py-16 text-center text-sm text-black dark:text-white/70">
                            Laravel v{laravelVersion} (PHP v{phpVersion})
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}
