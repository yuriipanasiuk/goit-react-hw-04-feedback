import PropTypes from 'prop-types';
import { Button, List, Item } from './FeedbackOptions.styled';

const FeedbackOptions = ({ type = 'button', options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map(option => (
        <Item key={option}>
          <Button
            type={type}
            onClick={() => chooseFeedback(onLeaveFeedback, option)}
          >
            {option}
          </Button>
        </Item>
      ))}
    </List>
  );
};

function chooseFeedback(fn, label) {
  switch (label) {
    case 'Good':
      fn.good();
      break;
    case 'Neutral':
      fn.neutral();
      break;
    case 'Bad':
      fn.bad();
      break;
    default:
      break;
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.object.isRequired,
};

export default FeedbackOptions;
