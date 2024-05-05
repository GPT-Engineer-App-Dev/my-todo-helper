import { useState } from 'react';
import { Box, Button, Textarea, List, IconButton, useToast, Flex, Text } from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(null);
  const [noteContent, setNoteContent] = useState('');
  const toast = useToast();

  const addNote = () => {
    if (!noteContent.trim()) {
      toast({
        title: 'Empty note',
        description: "You cannot add an empty note.",
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    const newNote = {
      id: Date.now(),
      content: noteContent
    };
    setNotes([...notes, newNote]);
    setNoteContent('');
    setActiveNote(newNote.id);
  };

  const updateNote = (id) => {
    setNotes(notes.map(note => note.id === id ? { ...note, content: noteContent } : note));
    setActiveNote(null);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
    if (id === activeNote) {
      setActiveNote(null);
      setNoteContent('');
    }
  };

  const editNote = (id) => {
    const note = notes.find(note => note.id === id);
    if (note) {
      setActiveNote(note.id);
      setNoteContent(note.content);
    }
  };

  return (
    <Box display="flex" p={{ base: 2, md: 5 }} height="100vh">
      <Box width={{ base: "100%", md: "30%" }} p={3}>
        <Button onClick={addNote} colorScheme="blue" mb={3}>Add New Note</Button>
        <List spacing={3}>
          {notes.map(note => (
            <Box key={note.id} p={4} shadow="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Flex justifyContent="space-between" alignItems="center">
                <Text cursor="pointer" onClick={() => editNote(note.id)}>{note.content.slice(0, 20)}...</Text>
                <IconButton aria-label="Delete note" icon={<FaTrash />} onClick={() => deleteNote(note.id)} />
              </Flex>
            </Box>
          ))}
        </List>
      </Box>
      <Box flex="1" p={3}>
        <Textarea
          placeholder="Write your note here..."
          value={noteContent}
          onChange={(e) => setNoteContent(e.target.value)}
          minHeight="90vh"
        />
        {activeNote && <Button mt={2} colorScheme="green" onClick={() => updateNote(activeNote)}>Update Note</Button>}
      </Box>
    </Box>
  );
};

export default Notes;