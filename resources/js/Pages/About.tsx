import { experiences } from '@/assets/data/experiences';
import { projects } from '@/assets/data/projects';
import ExperienceItem from '@/Components/ExperienceItem';
import ProjectItem from '@/Components/ProjectItem';
import { PageProps } from '@/types';
import { Head } from '@inertiajs/react';

export default function About({
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

    const projectItems = projects.map((project) => (
        <ProjectItem project={project} />
    ));

    return (
        <>
            <Head title="About" />
            <div id="about">
                <h2 className="text-2xl font-semibold text-black dark:text-white">
                    About me
                </h2>
                <p>{age} years old / Sydney</p>
                <p>
                    Very interested in new technologies, I initially followed a
                    general computer science training, then I specialised in web
                    development during my 3 years apprenticeship. I used those
                    skills in the Research and Development department of IRCAD
                    where I could master Angular and Node.js. After arriving in
                    Australia, I focused mainly on Front-end development during
                    my 5 years at Big Picture Medical, using Vue but had a
                    Laravel exposure and grew interest in this framework.
                </p>
                <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
                    {experienceItems}
                </div>
            </div>
            {/*<div id="projects">*/}
            {/*    <h2 className="text-2xl font-semibold text-black dark:text-white">*/}
            {/*        My past projects*/}
            {/*    </h2>*/}
            {/*    <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">*/}
            {/*        {projectItems}*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div id="contact" className="min-h-screen"></div>*/}
        </>
    );
}
