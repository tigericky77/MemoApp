import React from 'react';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';

import icomoon from '../../assets/fonts/icomoon.ttf';
import selection from '../../assets/fonts/selection.json';

// eslint-disable-next-line react/function-component-definition
export default function Icon(props) {
  const { name, size, color } = props;
  const CustomIcon = createIconSetFromIcoMoon(selection);
  return <CustomIcon name={name} size={size} color={color} />;
}
