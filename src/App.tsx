import * as React from 'react';
import { Link } from 'react-router-dom';

import Main from './main';
import { GlobalStyles } from './global-styles';

const App:React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <ul>
        <li><Link to="/">Home</Link></li>
      </ul>
      <Main />
    </>
  );
}

export default App;
