import { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

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
        cn('transition-all', {
            'text-accent-300 font-bold': currentLanguage === language,
        });

    return (
        <div className="ml-10 flex gap-2">
            <button
                onClick={() => changeLanguage('en')}
                className={setButtonClass('en')}
            >
                EN
            </button>
            <div>|</div>
            <button
                onClick={() => changeLanguage('ua')}
                className={setButtonClass('ua')}
            >
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
                'backdrop-filter-none w-full flex items-center py-5 fixed top-0 z-20 transition-visibility ease-in-out duration-300',
                { navbar: scrolled },
            )}
        >
            <div
                className={cn(
                    'absolute inset-0 bg-none z-0 transition-colors ease-in-out duration-300',
                    {
                        'bg-dark-900/50': scrolled,
                    },
                )}
            ></div>
            <div className="w-full flex items-center max-w-7xl mx-auto gap-8 z-10">
                <Link
                    to="/"
                    className="flex flex-1 items-center gap-2"
                    onClick={() => {
                        setActive('');
                        window.scrollTo(0, 0);
                    }}
                >
                    <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
                    <p className="text-white text-[18px] font-bold cursor-pointer flex ">
                        {t('navbar.logo.name')} &nbsp;
                        <span className="md:block hidden">
                            | {t('navbar.logo.profession')}
                        </span>
                    </p>
                </Link>

                <ul className="list-none hidden lg:flex flex-row gap-10">
                    {navLinks.map(nav => (
                        <li
                            key={nav.id}
                            className={cn(
                                'hover:text-accent-100 text-[18px] font-medium cursor-pointer transition-color ease-in-out duration-300',
                                {
                                    'text-accent-300': active === nav.title,
                                    'text-white': active !== nav.title,
                                },
                            )}
                            onClick={() => setActive(nav.title)}
                        >
                            {nav.href ? (
                                <a onClick={() => window.open(nav.href, '_blank')}>
                                    {t(nav.title)}
                                </a>
                            ) : (
                                <a href={`#${nav.id}`}>{t(nav.title)}</a>
                            )}
                        </li>
                    ))}
                </ul>

                {!isDesktop && <LangButtons />}

                <div className="lg:hidden flex justify-end items-center">
                    <MenuIcon open={toggle} setOpen={() => setToggle(!toggle)} />

                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: toggle ? 1 : 0, y: toggle ? 0 : -20 }}
                        transition={{ duration: 0.3 }}
                        className={cn(
                            'p-6 menu-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl',
                            {
                                hidden: !toggle,
                                flex: toggle,
                            },
                        )}
                    >
                        <ul className="list-none flex justify-center items-center flex-1 flex-col gap-4">
                            {navLinks.map(nav => (
                                <li
                                    key={nav.id}
                                    className={cn(
                                        'font-poppins font-medium cursor-pointer text-[16px]',
                                        {
                                            'text-white': active === nav.title,
                                            'text-secondary': active !== nav.title,
                                        },
                                    )}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(nav.title);
                                    }}
                                >
                                    {nav.href ? (
                                        <a
                                            href={`#${nav.id}`}
                                            onClick={() =>
                                                window.open(nav.href, '_blank')
                                            }
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
