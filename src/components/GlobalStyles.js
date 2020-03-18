import React from 'react';
import { Global, css } from '@emotion/core';

function GlobalStyles() {
  return (
    <Global
      styles={css`
        body {
          margin: 0;
        }
      `}
    />
  );
}

export default GlobalStyles;
