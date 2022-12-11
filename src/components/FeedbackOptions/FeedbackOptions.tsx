import { Button, List, Item } from './FeedbackOptions.styled';

interface IProps {
  options: string[];
  onLeaveFeedback: (option: string) => void;
}

const FeedbackOptions = ({ options, onLeaveFeedback }: IProps) => {
  return (
    <List>
      {options.map(option => (
        <Item key={option}>
          <Button type="button" onClick={() => onLeaveFeedback(option)}>
            {option}
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default FeedbackOptions;
