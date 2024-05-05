import { useState } from 'react';
import { Box, Button, Text, Flex, Heading } from '@chakra-ui/react';

const Calendar = () => {
  const [view, setView] = useState('month');

  const changeView = (newView) => {
    setView(newView);
  };

  return (
    <Box p={4}>
      <Flex justifyContent="space-between" alignItems="center">
        <Heading mb={4}>Calendar</Heading>
        <Flex>
          <Button onClick={() => changeView('day')} colorScheme={view === 'day' ? 'blue' : 'gray'} m={1}>Day</Button>
          <Button onClick={() => changeView('week')} colorScheme={view === 'week' ? 'blue' : 'gray'} m={1}>Week</Button>
          <Button onClick={() => changeView('month')} colorScheme={view === 'month' ? 'blue' : 'gray'} m={1}>Month</Button>
        </Flex>
      </Flex>
      <Text fontSize="lg">Viewing in {view} mode.</Text>
      {/* Placeholder for calendar view */}
      <Box mt={4} p={5} bg="gray.100" minHeight="60vh">
        <Text>Calendar content would go here.</Text>
      </Box>
    </Box>
  );
};

export default Calendar;