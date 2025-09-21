import { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { motion } from 'motion/react';

import { logo } from '@/assets';
import { navLinks } from '@/constants';
import { useMatchMedia } from '@/hooks';
import { styles } from '@/styles';
import { cn } from '@/utils/cn';

import { MenuIcon } from '../ui';

const LangButtons = () => {
  const { i18n } = useTranslation();

  const changeLanguage = language => {
    i18n.changeLanguage(language);
  };

  const currentLanguage = i18n.language;

  const setButtonClass = language =>
    `transition-all ${currentLanguage === language ? 'text-[#915eff] font-bold' : ''}`;

  return (
    <div className="ml-10 flex gap-2">
      <button onClick={() => changeLanguage('en')} className={setButtonClass('en')}>
        EN
      </button>
      <div>|</div>
      <button onClick={() => changeLanguage('ua')} className={setButtonClass('ua')}>
        UA
      </button>
    </div>
  );
};

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDesktop } = useMatchMedia();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        styles.paddingX,
        'transition-visibility fixed top-0 z-20 flex w-full items-center py-5 backdrop-filter-none duration-300 ease-in-out',
        { navbar: scrolled },
      )}
    >
      <div
        className={cn(
          'absolute inset-0 z-0 bg-none transition-colors duration-300 ease-in-out',
          {
            'bg-primary/70': scrolled,
          },
        )}
      ></div>
      <div className="z-10 mx-auto flex w-full max-w-7xl items-center gap-8">
        <Link
          to="/"
          className="flex flex-1 items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="h-9 w-9 object-contain" />
          <p className="flex cursor-pointer text-[18px] font-bold text-white">
            {t('navbar.logo.name')} &nbsp;
            <span className="hidden md:block">| {t('navbar.logo.profession')}</span>
          </p>
        </Link>

        <ul className="hidden list-none flex-row gap-10 lg:flex">
          {navLinks.map(nav => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? 'text-white' : 'text-secondary'
              } transition-color cursor-pointer text-[18px] font-medium duration-300 ease-in-out hover:text-white`}
              onClick={() => setActive(nav.title)}
            >
              {nav.href ? (
                <a onClick={() => window.open(nav.href, '_blank')}>{t(nav.title)}</a>
              ) : (
                <a href={`#${nav.id}`}>{t(nav.title)}</a>
              )}
            </li>
          ))}
        </ul>

        {!isDesktop && <LangButtons />}

        <div className="flex items-center justify-end lg:hidden">
          <MenuIcon open={toggle} setOpen={() => setToggle(!toggle)} />

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: toggle ? 1 : 0, y: toggle ? 0 : -20 }}
            transition={{ duration: 0.3 }}
            className={`${
              !toggle ? 'hidden' : 'flex'
            } menu-gradient absolute right-0 top-20 z-10 mx-4 my-2 min-w-[140px] rounded-xl p-6`}
          >
            <ul className="flex flex-1 list-none flex-col items-center justify-center gap-4">
              {navLinks.map(nav => (
                <li
                  key={nav.id}
                  className={`font-poppins cursor-pointer text-[16px] font-medium ${
                    active === nav.title ? 'text-white' : 'text-secondary'
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  {nav.href ? (
                    <a
                      href={`#${nav.id}`}
                      onClick={() => window.open(nav.href, '_blank')}
                    >
                      {t(nav.title)}
                    </a>
                  ) : (
                    <a href={`#${nav.id}`}>{t(nav.title)}</a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {isDesktop && <LangButtons />}
      </div>
    </nav>
  );
};

export default Navbar;
