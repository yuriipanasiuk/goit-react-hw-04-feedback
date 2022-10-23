import PropTypes from 'prop-types';
import { Button, List, Item } from './FeedbackOptions.styled';

const FeedbackOptions = ({ type = 'button', options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map(option => (
        <Item key={option}>
          <Button type={type} onClick={() => onLeaveFeedback(option)}>
            {option}
          </Button>
        </Item>
      ))}
    </List>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
