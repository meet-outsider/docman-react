import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
interface LoadingProps {
  open: boolean;
  onClose: () => void;
}
export function Loading({ open, onClose }: LoadingProps) {
  return (
    <>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={onClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}
