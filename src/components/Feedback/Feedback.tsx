import { useState } from 'react';
import Section from '../Section';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Sratistics';
import Notification from '../Notification';

const Feedback: React.FC = () => {
  const [good, setGood] = useState<number>(0);
  const [neutral, setNeutral] = useState<number>(0);
  const [bad, setBad] = useState<number>(0);

  const addFeedback = (type: string) => {
    switch (type) {
      case 'Good':
        setGood(state => state + 1);
        break;
      case 'Bad':
        setBad(state => state + 1);
        break;
      case 'Neutral':
        setNeutral(state => state + 1);
        break;

      default:
        break;
    }
  };

  const total = good + neutral + bad;
  const positivePercentage = Math.round((good / total) * 100);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={addFeedback}
        />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};

export default Feedback;
