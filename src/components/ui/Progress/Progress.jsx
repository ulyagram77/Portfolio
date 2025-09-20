import { useEffect, useRef } from 'react';

import { useTranslation } from 'react-i18next';

import { Portal } from '@/components/common';

import './Progress.css';

const Progress = () => {
  const { t } = useTranslation();
  const progressRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const { scrollHeight, clientHeight } = document.documentElement;

      const totalScroll = scrollHeight - clientHeight;
      const scrollPosition = window.scrollY;
      const scrollPercentage = (scrollPosition / totalScroll) * 100;

      if (progressRef.current) {
        progressRef.current.style.width = `${scrollPercentage}%`;

        if (scrollPercentage >= 99) {
          progressRef.current.classList.add('done');
          progressRef.current.innerHTML = `<p>${t('progress.finished')} &#x2764;&#xFE0F;</p>`;
        } else {
          progressRef.current.classList.remove('done');
          progressRef.current.innerHTML = '';
        }
      }
    };

    const optimizedHandleScroll = () => {
      window.requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', optimizedHandleScroll);
    return () => {
      window.removeEventListener('scroll', optimizedHandleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Portal rootId="root">
      <div className="scroll-progress" ref={progressRef}></div>
    </Portal>
  );
};

export default Progress;
