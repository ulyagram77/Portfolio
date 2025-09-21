import { useEffect } from 'react';

import { useTranslation } from 'react-i18next';

import { SocialIcons } from '..';
import { AnimatePresence, motion } from 'framer-motion';
import PropTypes from 'prop-types';

import { Portal } from '@/components/common';
import { styles } from '@/styles';

const Modal = ({ open, setOpen }) => {
  const { t } = useTranslation();

  const onOverlayClick = e => {
    if (e.target === e.currentTarget) setOpen(false);
  };

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') setOpen(false);
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, setOpen]);

  useEffect(() => {
    if (open) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [open, setOpen]);

  return (
    <AnimatePresence>
      {open && (
        <Portal rootId="body">
          <motion.div
            className="fixed inset-0 z-30 bg-black bg-opacity-60"
            onClick={e => onOverlayClick(e)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-1/2 z-50 h-1/2 w-10/12 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-tertiary p-10 md:w-3/4 lg:w-1/2 xl:w-2/5"
              role="dialog"
              aria-modal="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <span
                className="absolute right-0 top-0 mr-5 mt-5 cursor-pointer text-5xl"
                onClick={() => setOpen(false)}
              >
                &times;
              </span>

              <div className="flex h-full flex-col items-center justify-between text-center">
                <div>
                  <p className={styles.sectionSubText}>{t('modal.subtitle')}</p>
                  <h2 className={styles.sectionHeadText}>
                    &#128293; {t('modal.title')} &#128293;
                  </h2>
                </div>

                <p className="text-[16px] text-secondary sm:text-lg">
                  {t('modal.text')}
                </p>

                <p>
                  <b className="text-md sm:text-lg">{t('modal.wish')} &#128526;</b>
                </p>

                <SocialIcons />
              </div>
            </motion.div>
          </motion.div>
        </Portal>
      )}
    </AnimatePresence>
  );
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default Modal;
