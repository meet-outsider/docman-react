import { useState } from 'react';

export function useLoading() {
  const [open, setOpen] = useState(false);

  const openLoading = () => {
    setOpen(true);
  };

  const closeLoading = () => {
    setOpen(false);
  };

  return {
    open,
    openLoading,
    closeLoading,
  };
}
