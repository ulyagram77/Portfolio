/* eslint-disable react/no-unknown-property */
import { useRef } from 'react';
import { useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { Tilt } from 'react-tilt';

import { motion } from 'motion/react';
import PropTypes from 'prop-types';

import { services } from '@/constants';
import { withSectionWrapper } from '@/hoc';
import { styles } from '@/styles';
import { fadeIn, textVariant } from '@/utils/motion';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="w-full xs:w-[250px]">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="green-pink-gradient w-full rounded-[20px] p-[1px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] bg-tertiary px-12 py-5"
        >
          <img src={icon} alt={title} className="h-16 w-16 object-contain" />
          <h3 className="text-center text-[20px] font-bold text-white">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = withSectionWrapper(() => {
  const paragraphRef = useRef(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    paragraphRef.current.innerHTML = t('about.text');
  }, [i18n.language, t]);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t('about.subtitle')}</p>
        <h2 className={styles.sectionHeadText}>{t('about.title')}</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 max-w-3xl text-[17px] leading-[30px] text-secondary"
        ref={paragraphRef}
      ></motion.p>

      <div className="mt-20 flex flex-wrap place-content-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
}, 'about');

ServiceCard.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string,
  icon: PropTypes.string,
};

export default About;
