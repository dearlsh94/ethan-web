import * as React from 'react';

import { PropsWithDirection, SvgController, SvgControllerProps } from '@components/icon/SvgController';

export default function IconSingleArrow(props: PropsWithDirection<SvgControllerProps>) {
  const getRotateDegree = () => {
    const { direction } = props;
    switch (direction) {
      case 'top':
        return 90;
      case 'right':
        return 180;
      case 'left':
        return 0;
      case 'bottom':
        return 270;
      default:
        return 0;
    }
  };
  return (
    <SvgController rotate={getRotateDegree()} {...props}>
      <g>
        <path d="M15.125 21.1L6.7 12.7q-.15-.15-.213-.325T6.425 12q0-.2.062-.375T6.7 11.3l8.425-8.425q.35-.35.875-.35t.9.375q.375.375.375.875t-.375.875L9.55 12l7.35 7.35q.35.35.35.863t-.375.887q-.375.375-.875.375t-.875-.375Z" />
      </g>
    </SvgController>
  );
}
