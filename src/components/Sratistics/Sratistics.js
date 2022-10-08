import {
  Response,
  TotalResponse,
  PercentPositiveResponse,
} from './Sratistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <Response>Good: {good}</Response>
      <Response>Neutrall: {neutral}</Response>
      <Response>Bad: {bad}</Response>
      <TotalResponse>Total: {total}</TotalResponse>
      <PercentPositiveResponse>
        Positive feedback: {positivePercentage}
      </PercentPositiveResponse>
    </>
  );
};

export default Statistics;
