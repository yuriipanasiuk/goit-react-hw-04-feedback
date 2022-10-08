import styled from 'styled-components';

export const Response = styled.p`
  margin-bottom: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.textColor};
  font-weight: ${p => p.theme.fontWeight.bold};
`;

export const TotalResponse = styled.p`
  margin-bottom: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.textColor};
  font-weight: ${p => p.theme.fontWeight.bold};
`;

export const PercentPositiveResponse = styled.p`
  color: ${p => p.theme.colors.textColor};
  font-weight: ${p => p.theme.fontWeight.bold};
`;

export const TextWraper = styled.span`
  font-weight: ${p => p.theme.fontWeight.bold};
  color: ${p => p.theme.colors.black};
  margin-left: ${p => p.theme.space[2]}px;
`;
