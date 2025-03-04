import { PropsWithChildren } from 'react';

export default function CardContent({
    title,
    description,
    children,
}: PropsWithChildren<{ title?: string; description?: string }>) {
    return (
        <div className="pt-3 sm:pt-5">
            {title && (
                <h2 className="text-xl font-semibold text-black dark:text-white">
                    {title}
                </h2>
            )}
            {children}
            {description && (
                <p className="mt-4 text-sm/relaxed">{description}</p>
            )}
        </div>
    );
}
