import styled from 'styled-components';

export const Button = styled.button`
  padding: ${p => p.theme.space[2]}px;
  background-color: ${p => p.theme.colors.btnBg};
  color: ${p => p.theme.colors.white};
  cursor: pointer;
  border: 1px solid #bfe2ff;
  font-weight: bold;
  text-transform: uppercase;
  outline: 1px solid;
  outline-color: ${p => p.theme.colors.btnBg};
  transition: all 1.5s cubic-bezier(0.19, 1, 0.22, 1);

  :hover,
  :focus {
    box-shadow: ${p => p.theme.shadows.shadow};
    outline-color: ${p => p.theme.colors.outline};
    outline-offset: ${p => p.theme.space[4]}px;
    color: ${p => p.theme.colors.white};
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
`;

export const Item = styled.li`
  :not(:last-child) {
    margin-right: ${p => p.theme.space[5]}px;
  }
`;
