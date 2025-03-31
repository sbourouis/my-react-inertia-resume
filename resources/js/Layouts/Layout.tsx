import githubDark from '@/assets/images/GitHub-Mark-32px.png';
import githubLight from '@/assets/images/GitHub-Mark-Light-32px.png';
import profile from '@/assets/profile.jpg';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
    return (
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
                    <nav className="-mx-3 flex flex-1 items-center justify-end">
                        <Link
                            href="/about"
                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                        >
                            About
                        </Link>
                        <Link
                            href="/projects"
                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                        >
                            Projects
                        </Link>
                        <a
                            target="_blank"
                            href="http://www.github.com/sbourouis/my-react-inertia-resume"
                            className="ml-4"
                            rel="noreferrer"
                        >
                            <img
                                width="24px"
                                className="hidden hover:opacity-75 dark:block"
                                src={githubLight}
                            />
                            <img
                                width="24px"
                                className="hover:opacity-75 dark:hidden"
                                src={githubDark}
                            />
                        </a>
                    </nav>
                </header>

                <main className="mt-6 mb-10 space-y-10">{children}</main>
            </div>
        </div>
    );
}
