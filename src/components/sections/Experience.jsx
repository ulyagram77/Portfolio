import { useTranslation } from 'react-i18next';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { motion } from 'motion/react';
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
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={experience.icon}
            alt={t(experience.company_name)}
            className="h-[60%] w-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-[24px] font-bold text-white">{t(experience.title)}</h3>
        <p
          className="text-[16px] font-semibold text-secondary"
          style={{ margin: 0 }}
        >
          {t(experience.company_name)}
        </p>
        <ul className="ml-5 mt-5 list-disc space-y-2">
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="pl-1 text-[14px] tracking-wider text-white-100"
            >
              {t(point)}
            </li>
          ))}
        </ul>
        {experience.github ? (
          <p
            className="transition-color cursor-pointer text-sm text-secondary underline duration-300 ease-in-out hover:text-white"
            onClick={() => window.open(experience.github, '_blank')}
          >
            {t('experience.timeline.github')}
          </p>
        ) : null}

        {experience.certificate ? (
          <p
            className="transition-color cursor-pointer text-sm text-secondary underline duration-300 ease-in-out hover:text-white"
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
