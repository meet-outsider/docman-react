import { useState } from 'react';

// 自定义alert消息提示框组件 点击显示，2s后自动关闭
export function CustomMessageAlert() {
  const [message, setMessage] = useState('');
  const [show, setShow] = useState(false);
  const [timer, setTimer] = useState<any>(null);

  const handleClose = () => {
    setShow(false);
    setMessage('');
    if (timer) {
      clearTimeout(timer);
    }
  };

  const handleShow = (message: string) => {
    setMessage(message);
    setShow(true);
    if (timer) {
      clearTimeout(timer);
    }
    setTimer(
      setTimeout(() => {
        handleClose();
      }, 2000),
    );
  };

  return {
    message,
    show,
    handleClose,
    handleShow,
  };
}
