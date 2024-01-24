import * as React from 'react';

import { SvgController, SvgControllerProps } from '@components/icon/SvgController';

export default function IconCaution(props: SvgControllerProps) {
  return (
    <SvgController {...props}>
      <defs>
        <mask id="ipSCaution0">
          <g fill="none" strokeWidth="4">
            <path
              fill={props.color}
              fillRule="evenodd"
              stroke={props.color}
              strokeLinejoin="round"
              d="M24 5L2 43h44L24 5Z"
              clip-rule="evenodd"
            />
            <path stroke="#000" strokeLinecap="round" d="M24 35v1m0-17l.008 10" />
          </g>
        </mask>
      </defs>
      <path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSCaution0)" />
    </SvgController>
  );
}
