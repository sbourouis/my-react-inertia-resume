import { projects } from '@/assets/data/projects';
import ProjectItem from '@/Components/ProjectItem';
import { PageProps } from '@/types';
import { Head } from '@inertiajs/react';

export default function Projects({
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const projectItems = projects.map((project) => (
        <ProjectItem project={project} />
    ));

    return (
        <>
            <Head title="Projects" />
            <div id="projects">
                <h2 className="text-2xl font-semibold text-black dark:text-white">
                    My past projects
                </h2>
                <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
                    {projectItems}
                </div>
            </div>
        </>
    );
}
