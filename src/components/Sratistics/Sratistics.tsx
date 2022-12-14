import {
  Response,
  TotalResponse,
  PercentPositiveResponse,
  TextWraper,
} from './Sratistics.styled';

interface IProps {
  good: number;
  neutral: number;
  bad: number;
  total: number;
  positivePercentage: number;
}

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}: IProps) => {
  return (
    <>
      <Response>
        Good: <TextWraper>{good}</TextWraper>
      </Response>
      <Response>
        Neutrall: <TextWraper>{neutral}</TextWraper>
      </Response>
      <Response>
        Bad: <TextWraper>{bad}</TextWraper>
      </Response>
      <TotalResponse>
        Total: <TextWraper>{total}</TextWraper>
      </TotalResponse>
      <PercentPositiveResponse>
        Positive feedback: <TextWraper>{positivePercentage} %</TextWraper>
      </PercentPositiveResponse>
    </>
  );
};

export default Statistics;
