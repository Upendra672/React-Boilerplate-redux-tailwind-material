export const ModalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "90%", sm: "80%", md: "70%", lg: "50%" }, // Responsive width
    bgcolor: "background.paper",
    borderRadius: "11px",
    boxShadow: 24,
    p: 2,
    overflowY: "auto", // Adds scroll for overflowing content
    maxHeight: "90vh", // Limits the modal height to prevent it from going offscreen
  };