import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Flex, Link, Box } from '@chakra-ui/react';
import Index from "./pages/Index.jsx";

const Navbar = () => (
  <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="blue.500" color="white">
    <Box>
      <Link href="/" padding="1rem">Home</Link>
      <Link href="/about" padding="1rem">About</Link>
    </Box>
  </Flex>
);

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;
