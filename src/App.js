import React, { useState } from 'react';
import './App.css';

import ScreenRoots from './screens/Roots';
import ErrorBoundary from 'components/ErrorBoundry';
import LocaleContext from 'localeContext';

function App() {
  const [locale, setLocale] = useState('en-US');
  return (
    <ErrorBoundary>
      <LocaleContext.Provider value={locale}>
        <a href onClick={() => setLocale('en-GB')}>
          [EN-GB]
        </a>
        <a href onClick={() => setLocale('sv')}>
          [SV]
        </a>
        <ScreenRoots />
      </LocaleContext.Provider>
    </ErrorBoundary>
  );
}

export default App;
