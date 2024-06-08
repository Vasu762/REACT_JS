// import logo from './logo.svg';
// import './App.css';
import {Button}   from 'react-bootstrap'; 
import Stack from 'react-bootstrap/Stack';


function App() {
  return (
    <Stack direction="horizontal" gap={2}>
  <Button as="a" variant="primary">
    Button as link
  </Button>
  <Button as="a" variant="success">
    Button as link
  </Button>
</Stack>
  );
}

export default App;
