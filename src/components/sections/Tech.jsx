import { lazy } from 'react';

import { useTranslation } from 'react-i18next';

import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import { technologies } from '@/constants';
import { withSectionWrapper } from '@/hoc';
import { useMatchMedia } from '@/hooks';
import { styles } from '@/styles';
import { fadeIn, textVariant } from '@/utils/motion';

const BallCanvas = lazy(() => import('../canvas/Ball'));

const TechMobile = ({ icon, name }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 w-40 h-50 bg-tertiary p-5 rounded-2xl border-b-2 border-white">
      <div className="w-30">
        <img src={icon} className="w-full" alt="tech" />
      </div>
      <p className="text-secondary text-[17px] text-center">{name}</p>
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
        className="flex flex-col justify-center items-center mb-10"
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
            <div className="w-28 h-28" key={technology.name}>
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
