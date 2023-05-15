import { IconButton, Snackbar } from '@mui/material';
import { useState } from 'react';

export enum MessageType {
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
  INFO = 'info',
}

interface MessageProps {
  open: boolean;
  type: MessageType;
  message: string;
  onClose: () => void;
}

export function Message({ open, type, message, onClose }: MessageProps) {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      open={open}
      autoHideDuration={2000}
      onClose={onClose}
      message={message}
      action={
        <IconButton
          size="small"
          aria-label="close"
          color={type}
          onClick={onClose}
        ></IconButton>
      }
    ></Snackbar>
  );
}

interface UseMessageProps {
  defaultType?: MessageType;
}

export function useMessage({ defaultType }: UseMessageProps = {}) {
  const [message, setMessage] = useState('');
  const [type, setType] = useState<MessageType>(
    defaultType || MessageType.SUCCESS
  );
  const [open, setOpen] = useState(false);

  function showMessage(msg: string, tp: MessageType = MessageType.SUCCESS) {
    setMessage(msg);
    setType(tp);
    setOpen(true);
  }

  function hideMessage() {
    setOpen(false);
  }

  return {
    message,
    type,
    showMessage,
    hideMessage,
    Message: <Message open={open} type={type} message={message} onClose={hideMessage} />,
  };
}
