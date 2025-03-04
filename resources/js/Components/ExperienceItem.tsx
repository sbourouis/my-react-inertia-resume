import Card from '@/Components/Card';
import CardContent from '@/Components/CardContent';
import CardIcon from '@/Components/CardIcon';
import { Experience, EXPERIENCE_TYPE } from '@/types/experience';

const formatDate = (date: string) =>
    new Date(date).toLocaleString('en-GB', {
        month: 'short',
        year: 'numeric',
    });

export default function ExperienceItem({
    experience,
}: {
    experience?: Experience;
}) {
    return (
        <Card>
            <CardIcon>
                {experience.type === EXPERIENCE_TYPE.SCHOOL ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5 sm:size-6"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="#FF2D20"
                            d="M17.673 5.606a3326.02 3326.02 0 0 1-5.671-2.674L.138 8.524l2.03.98L2 9.531V20h1v-9.626l.72-.124.28.135v5.288c0 .914 5.206 3.533 6.249 4.049a3.89 3.89 0 0 0 3.48-.026C20 16.486 20 15.895 20 15.673v-5.288l3.854-1.857s-3.8-1.801-6.181-2.922zM19 15.504a51.526 51.526 0 0 1-5.726 3.302 2.884 2.884 0 0 1-2.582.02A40.184 40.184 0 0 1 5 15.521v-4.655l7 3.373 7-3.373zm-7-2.373L5.416 9.958l6.469-1.115-.17-.987-7.85 1.354-1.403-.676 9.537-4.495c.825.393 8.523 4.014 9.542 4.494z"
                        />
                        <path fill="none" d="M0 0h24v24H0z" />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5 sm:size-6"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            stroke="#FF2D20"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 7H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-4M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M9 7h6"
                        />
                    </svg>
                )}
            </CardIcon>

            <CardContent
                title={experience.name}
                description={experience.description}
            >
                <p>
                    {experience.location} <br />
                    <i>
                        {formatDate(experience.fromDate)} -{' '}
                        {formatDate(experience.toDate)}
                    </i>
                </p>
            </CardContent>
        </Card>
    );
}
