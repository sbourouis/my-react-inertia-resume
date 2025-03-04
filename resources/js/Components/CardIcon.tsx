import { PropsWithChildren } from 'react';

export default function CardIcon({ children }: PropsWithChildren) {
    return (
        <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16">
            {children}
        </div>
    );
}
