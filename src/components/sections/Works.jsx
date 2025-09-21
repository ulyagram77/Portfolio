/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';

import { useTranslation } from 'react-i18next';

import { motion } from 'framer-motion';

import { demo, github } from '@/assets';
import { projects } from '@/constants';
import { withSectionWrapper } from '@/hoc';
import { styles } from '@/styles';
import { fadeIn, textVariant } from '@/utils/motion';

import { Tooltip } from '../ui';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  demo_link,
}) => {
  const { t } = useTranslation();

  return (
    <motion.a
      variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
      href={demo_link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="w-full rounded-3xl bg-tertiary p-5 sm:w-[360px]">
        <div className="relative h-[230px] w-full">
          <img
            src={image}
            alt="project_image"
            className="h-full w-full rounded-2xl object-cover"
          />

          <div className="card-img_hover absolute inset-0 m-3 flex justify-end gap-2">
            <Tooltip tip="View Live Demo">
              <div
                onClick={() => window.open(demo_link, '_blank')}
                className="green-pink-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
              >
                <img
                  src={demo}
                  alt="source code"
                  className="h-1/2 w-1/2 object-contain"
                />
              </div>
            </Tooltip>

            <Tooltip tip="View Source Code">
              <div
                onClick={() => window.open(source_code_link, '_blank')}
                className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
              >
                <img
                  src={github}
                  alt="source code"
                  className="h-1/2 w-1/2 object-contain"
                />
              </div>
            </Tooltip>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-[24px] font-bold text-white">{name}</h3>
          <p className="custom-scroll mt-2 h-[90px] overflow-auto text-[14px] text-secondary">
            {t(description)}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map(tag => (
            <div
              key={`${name}-${tag.name}`}
              className="rounded-2xl bg-primary px-3 py-0.5"
            >
              <p className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.a>
  );
};

const Works = withSectionWrapper(() => {
  const paragraphRef = useRef(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    paragraphRef.current.innerHTML = t('works.text');
  }, [i18n.language, t]);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>{t('works.subtitle')}</p>
        <h2 className={`${styles.sectionHeadText}`}>{t('works.title')}</h2>
      </motion.div>

      <div className="flex w-full">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 max-w-3xl text-[17px] leading-[30px] text-secondary"
          ref={paragraphRef}
        ></motion.p>
      </div>

      <div className="mt-20 flex flex-wrap items-center justify-center gap-7 xl:justify-start">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
}, 'works');

export default Works;
