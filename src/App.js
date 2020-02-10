import React from 'react';
import './App.css';

import ScreenRoots from './screens/Roots';
import ErrorBoundary from 'components/ErrorBoundry';

function App() {
  return (
    <ErrorBoundary>
      <ScreenRoots />
    </ErrorBoundary>
  );
}

export default App;
