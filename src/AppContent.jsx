import { useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import { ErrorBoundary } from './components/common';
import {
    About,
    Contact,
    Experience,
    Hero,
    Navbar,
    StarsCanvas,
    Tech,
    Works,
} from './components/sections';
import { IceSvgFilter, Progress } from './components/ui';

const AppContent = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.substring(1));
            if (element) {
                element.scrollIntoView();
            }
        }
    }, [hash]);

    return (
        <>
            <Progress />
            <main className="relative z-0">
                <section className="bg-hero-pattern bg-fixed bg-cover bg-no-repeat bg-center">
                    <Navbar />
                    <ErrorBoundary>
                        <Hero />
                    </ErrorBoundary>
                </section>

                <About />
                <Experience />
                <ErrorBoundary>
                    <Tech />
                </ErrorBoundary>
                <Works />

                <section className="relative z-0">
                    <ErrorBoundary>
                        <Contact />
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <StarsCanvas />
                    </ErrorBoundary>
                </section>
            </main>
            <IceSvgFilter />
        </>
    );
};

export default AppContent;
