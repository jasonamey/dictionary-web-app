import React, { useContext } from 'react';

import { ThemeContext } from '@/context/ThemeContext'

export const DarkToggle = () => {
  const { colorMode = 'light', setColorMode } = useContext(ThemeContext);


  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={ colorMode === 'dark' }
          onChange={ ev => {
            setColorMode(ev.target.checked ? 'dark' : 'light');
          } }
        />
        Dark
      </label>
      <p>the dark toggle</p>
    </>
  );
};

