import { useTranslation } from 'react-i18next';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import { experiences } from '@/constants';
import { withSectionWrapper } from '@/hoc';
import { styles } from '@/styles';
import { textVariant } from '@/utils/motion';

const ExperienceCard = ({ experience }) => {
    const { t } = useTranslation();

    return (
        <VerticalTimelineElement
            contentStyle={{ background: '#1d1836', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #232631' }}
            date={t(experience.date)}
            iconStyle={{ background: experience.iconBg }}
            icon={
                <div className="flex justify-center items-center w-full h-full">
                    <img
                        src={experience.icon}
                        alt={t(experience.company_name)}
                        className="w-[60%] h-[60%] object-contain"
                    />
                </div>
            }
        >
            <div>
                <h3 className="text-white text-[24px] font-bold">
                    {t(experience.title)}
                </h3>
                <p
                    className="text-secondary text-[16px] font-semibold"
                    style={{ margin: 0 }}
                >
                    {t(experience.company_name)}
                </p>
                <ul className="mt-5 list-disc ml-5 space-y-2">
                    {experience.points.map((point, index) => (
                        <li
                            key={`experience-point-${index}`}
                            className="text-white-100 text-[14px] pl-1 tracking-wider"
                        >
                            {t(point)}
                        </li>
                    ))}
                </ul>
                {experience.github ? (
                    <p
                        className="text-secondary underline text-sm hover:text-white cursor-pointer transition-color ease-in-out duration-300"
                        onClick={() => window.open(experience.github, '_blank')}
                    >
                        {t('experience.timeline.github')}
                    </p>
                ) : null}

                {experience.certificate ? (
                    <p
                        className="text-secondary underline text-sm hover:text-white cursor-pointer transition-color ease-in-out duration-300"
                        onClick={() => window.open(experience.certificate, '_blank')}
                    >
                        {t('experience.timeline.certificate')}
                    </p>
                ) : null}
            </div>
        </VerticalTimelineElement>
    );
};

const Experience = withSectionWrapper(() => {
    const { t } = useTranslation();

    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>{t('experience.subtitle')}</p>
                <h2 className={styles.sectionHeadText}>{t('experience.title')}</h2>
            </motion.div>

            <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience} />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
}, 'experience');

ExperienceCard.propTypes = {
    experience: PropTypes.object,
};

export default Experience;
