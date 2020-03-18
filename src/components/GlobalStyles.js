import React from 'react';
import { Global, css } from '@emotion/core';

function GlobalStyles() {
  return (
    <Global
      styles={css`
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
        }
      `}
    />
  );
}

export default GlobalStyles;
