import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton, Modal } from "@mui/material";

interface Props {
  open: boolean;
  handleClose: () => void;
  title: string;
  children: React.ReactNode;
  customStyle?: object;
}


const ModalComponent = ({open, handleClose, title, children, customStyle}:Props) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={customStyle}>
        <div className="flex justify-between items-center border-b-[1px] border-[#D9D9D9] pb-1">
          <h2 className="text-[#000000c9] text-[16px] font-semibold py-2">
            {title}
          </h2>
          <IconButton
            onClick={handleClose}
          >
            <CloseIcon className="text-[#E50D0D]" fontSize="small" />
          </IconButton>
        </div>
        <Box sx={{ p: 1 }}>{children}</Box>
      </Box>
    </Modal>
  );
};

export default ModalComponent;
