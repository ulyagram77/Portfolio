import { lazy } from 'react';

import { useTranslation } from 'react-i18next';

import { motion } from 'motion/react';
import PropTypes from 'prop-types';

import { technologies } from '@/constants';
import { withSectionWrapper } from '@/hoc';
import { useMatchMedia } from '@/hooks';
import { styles } from '@/styles';
import { fadeIn, textVariant } from '@/utils/motion';

const BallCanvas = lazy(() => import('../canvas/Ball.jsx'));

const TechMobile = ({ icon, name }) => {
  return (
    <div className="h-50 flex w-40 flex-col items-center justify-center gap-5 rounded-2xl border-b-2 border-white bg-tertiary p-5">
      <div className="w-30">
        <img src={icon} className="w-full" alt="tech" />
      </div>
      <p className="text-center text-[17px] text-secondary">{name}</p>
    </div>
  );
};

const Tech = withSectionWrapper(() => {
  const { isDesktop } = useMatchMedia();
  const { t } = useTranslation();

  return (
    <>
      <motion.div
        variants={textVariant()}
        className="mb-10 flex flex-col items-center justify-center"
      >
        <p className={styles.sectionSubText}>{t('tech.subtitle')}</p>
        <h2 className={styles.sectionHeadText}>{t('tech.title')}</h2>
      </motion.div>

      <motion.div
        variants={fadeIn('bottom', 'spring', 0.5, 0.75)}
        className="flex flex-row flex-wrap justify-center gap-10"
      >
        {technologies.map(technology =>
          !isDesktop ? (
            <TechMobile {...technology} key={technology.name} />
          ) : (
            <div className="h-28 w-28" key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ),
        )}
      </motion.div>
    </>
  );
});

TechMobile.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Tech;
