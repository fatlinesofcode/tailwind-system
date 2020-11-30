import Box from "./Box";

function App() {
  return (
    <div className="App">
      <h1>React Example</h1>
      <Box mt={1} block pt={[1,2,3]} bg={'red'}>Box example</Box>
    </div>
  );
}

export default App;
