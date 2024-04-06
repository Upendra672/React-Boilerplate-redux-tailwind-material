import { Box, Button, Stack } from "@mui/material";
import "./App.css";

function App() {
  return (
    <>
    {/* tailwind css example */}
      <div className="text-3xl text-green-400 font-bold underline">
        hello folks...
      </div>

      {/* material ui example using buttons */}
      <Box>
        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
      </Box>
    </>
  );
}

export default App;
