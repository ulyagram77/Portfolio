import { useEffect } from 'react';

import { useTranslation } from 'react-i18next';

import { AnimatePresence, motion } from 'framer-motion';
import PropTypes from 'prop-types';

import { Portal } from '@/components/common';
import { socialIcons } from '@/constants';
import { styles } from '@/styles';

const Modal = ({ open, setOpen }) => {
  const { t } = useTranslation();

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

  const onOverlayClick = e => {
    if (e.target === e.currentTarget) setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <Portal rootId="body">
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 z-30"
            onClick={e => onOverlayClick(e)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-10/12 h-1/2 md:w-3/4 lg:w-1/2 xl:w-2/5 bg-tertiary rounded-2xl z-50 p-10"
              role="dialog"
              aria-modal="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <span
                className="absolute top-0 right-0 mr-5 mt-5 text-5xl cursor-pointer"
                onClick={() => setOpen(false)}
              >
                &times;
              </span>

              <div className="flex flex-col justify-between items-center h-full text-center">
                <div>
                  <p className={styles.sectionSubText}>{t('modal.subtitle')}</p>
                  <h2 className={styles.sectionHeadText}>
                    &#128293; {t('modal.title')} &#128293;
                  </h2>
                </div>

                <p className="text-secondary text-[16px] sm:text-lg">
                  {t('modal.text')}
                </p>

                <p>
                  <b className="text-md sm:text-lg">{t('modal.wish')} &#128526;</b>
                </p>

                <div className="flex flex-row items-center gap-5 social cursor-pointer">
                  {socialIcons.map(social => (
                    <div
                      key={social.link}
                      className="w-10 h-10 social__icon"
                      onClick={() => window.open(social.link, '_blank')}
                    >
                      <img
                        src={social.icon}
                        className="object-contain"
                        alt="social icon"
                      />
                    </div>
                  ))}
                </div>
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
