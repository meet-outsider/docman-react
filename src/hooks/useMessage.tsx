import { Message, MessageType } from "@/components/Message";
import { useState } from "react";

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
