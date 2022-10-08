import { Box } from 'components/Box/Box';
import Feedback from 'components/Feedback/Feedback';

export const App = () => {
  return (
    <Box
      pl={5}
      pr={5}
      pt={5}
      pb={5}
      width="300px"
      ml={'auto'}
      mr={'auto'}
      bg={'pageBgColor'}
      as="main"
    >
      <Feedback />
    </Box>
  );
};
