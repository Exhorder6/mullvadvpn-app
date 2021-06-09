import React from 'react';
import { colors } from '../../config.json';

export const openSans: React.CSSProperties = {
  fontFamily: 'Open Sans',
};

export const sourceSansPro: React.CSSProperties = {
  fontFamily: '"Source Sans Pro", "Noto Sans"',
  fontWeight: 'bold',
};

export const smallText = {
  ...openSans,
  fontSize: '13px',
  fontWeight: 600,
  lineHeight: '20px',
  color: colors.white80,
};

export const mediumText = {
  ...openSans,
  fontSize: '18px',
  lineHeight: '24px',
};

export const buttonText = {
  ...mediumText,
  ...sourceSansPro,
  color: colors.white,
};

export const bigText = {
  ...sourceSansPro,
  fontSize: '30px',
  lineHeight: '34px',
  color: colors.white,
};
