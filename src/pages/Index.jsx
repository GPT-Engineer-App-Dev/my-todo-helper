import { useState } from 'react';
import { Container, VStack, Input, Button, List, ListItem, ListIcon, IconButton, useToast, Box, Text, Flex } from '@chakra-ui/react';
import { FaTrash, FaCheckCircle } from 'react-icons/fa';

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const toast = useToast();

  const addTask = () => {
    if (input.trim() === '') {
      toast({
        title: 'No input',
        description: "You need to write something to add a task.",
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setTasks([...tasks, { id: Date.now(), text: input, isCompleted: false }]);
    setInput('');
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, isCompleted: !task.isCompleted } : task));
  };

  return (
    <Container centerContent maxW="container.md" p={{ base: 3, md: 5 }} minH="100vh" display="flex" flexDirection="column" justifyContent="space-between">
      <VStack spacing={4} w="100%">
        <Input
          placeholder="Add a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTask()}
        />
        <Button onClick={addTask} colorScheme="blue">Add Task</Button>
        <List spacing={3} w="100%">
          {tasks.map(task => (
            <ListItem key={task.id} d="flex" justifyContent="space-between" alignItems="center" p={3} shadow="sm" borderWidth="1px" borderRadius="lg">
              <ListIcon as={FaCheckCircle} color={task.isCompleted ? 'green.500' : 'gray.500'} onClick={() => toggleTaskCompletion(task.id)} cursor="pointer" />
              <Text flex="1" textDecoration={task.isCompleted ? 'line-through' : 'none'}>{task.text}</Text>
              <IconButton aria-label="Delete task" icon={<FaTrash />} onClick={() => deleteTask(task.id)} />
            </ListItem>
          ))}
        </List>
      </VStack>
      <Box as="footer" w="full" p={4} borderTop="1px" borderColor="gray.200">
        <Text textAlign="center" fontSize="sm">© 2023 Todo App</Text>
      </Box>
    </Container>
  );
};

export default Index;