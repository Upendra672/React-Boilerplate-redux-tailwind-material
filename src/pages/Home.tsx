import { Box, Button, Stack } from "@mui/material";
import ModalComponent from "../utils/ModalComponent";
import { useState } from "react";
import { ModalStyle } from "../styles/MuiStyles";

const Home = () => {
  const [open, setOpen] = useState(false);

  const handleModal = () => {
    setOpen(!open);
  };
  return (
    <div className="flex items-center justify-center h-[100vh] flex-col ">
      {/* tailwind css example */}
      <div className="text-3xl text-blue-400 font-bold underline mb-10">
        <h1 className="text-center no-underline">
          Hello folks, This is a React BoilerPlate made by Upendra Yadav
        </h1>
      </div>

      {/* material ui example using buttons */}
      <Box>
        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="outlined">outlined</Button>
          <Button variant="contained" onClick={handleModal}>
          Click to see Modal
          </Button>
        </Stack>
      </Box>
      <ModalComponent
        open={open}
        handleClose={handleModal}
        title="Testing"
        customStyle={ModalStyle}
      >
        <div>upendra yadav here</div>
      </ModalComponent>
    </div>
  );
};

export default Home;
