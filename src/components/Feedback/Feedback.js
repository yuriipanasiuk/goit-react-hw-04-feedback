import { useState } from 'react';
import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Sratistics';
import Notification from 'components/Notification';

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodFeedback = () => {
    setGood(state => state + 1);
  };

  const neutralFeedback = () => {
    setNeutral(state => state + 1);
  };

  const badFeedback = () => {
    setBad(state => state + 1);
  };

  const total = good + neutral + bad;

  const positivePercentage = () => {
    return Math.round((good / total) * 100);
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={{
            good: goodFeedback,
            neutral: neutralFeedback,
            bad: badFeedback,
          }}
        />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};

export default Feedback;
