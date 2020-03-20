import React from 'react';
import { Global, css } from '@emotion/core';

function GlobalStyles() {
  return (
    <Global
      styles={theme => css`
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          background-color: ${theme.colors.backgroundPrimary};
        }
      `}
    />
  );
}

export default GlobalStyles;
