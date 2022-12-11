import { Title, StyledSection } from './Section.styled';

interface IProps {
  title: string;
  children: JSX.Element;
}

const Section = ({ title, children }: IProps) => {
  return (
    <StyledSection>
      <Title>{title}</Title>
      {children}
    </StyledSection>
  );
};

export default Section;
