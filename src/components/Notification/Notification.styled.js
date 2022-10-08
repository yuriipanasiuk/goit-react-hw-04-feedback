import styled from 'styled-components';

export const Notice = styled.p`
  text-align: center;
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeight.bold};
  color: ${p => p.theme.colors.red};
`;
