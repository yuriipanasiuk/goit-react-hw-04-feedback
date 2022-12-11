import { Notice } from './Notification.styled';

interface IProps {
  message: string;
}

const Notification = ({ message }: IProps) => {
  return <Notice>{message}</Notice>;
};

export default Notification;
