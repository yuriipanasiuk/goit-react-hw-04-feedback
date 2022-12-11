import {
  color,
  ColorProps,
  space,
  SpaceProps,
  layout,
  LayoutProps,
  shadow,
  ShadowProps,
  border,
  BorderProps,
} from 'styled-system';
import styled from 'styled-components';
import React from 'react';

interface Props
  extends ColorProps,
    SpaceProps,
    LayoutProps,
    ShadowProps,
    BorderProps {
  children: React.ReactNode;
}

export const Box = styled.div<Props>`
  ${color};
  ${space};
  ${layout};
  ${shadow};
  ${border};
`;
