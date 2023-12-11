import { FC } from 'react';
import PianoComponent from './components';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <h1>Piyano Game</h1>
      <p>Start clicking on the box to see some magic happen :)</p>
      <PianoComponent />
    </div>
  );
};
