import { Suspense, lazy } from 'react';

import { Preloader } from './components/ui';

const AppContent = lazy(() => import('./AppContent'));

const App = () => {
  return (
    <Suspense fallback={<Preloader />}>
      <AppContent />
    </Suspense>
  );
};

export default App;
