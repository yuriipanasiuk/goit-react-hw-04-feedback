import styled from 'styled-components';

export const Title = styled.h2`
  margin-bottom: ${p => p.theme.space[5]}px;
  color: ${p => p.theme.colors.textColor};
  text-align: center;
`;

export const StyledSection = styled.section`
  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[5]}px;
  }
`;
