'use client';

import { Alert, Snackbar, SnackbarCloseReason } from '@mui/material';
import { useState } from 'react';

interface NotificationProps {
  message: string;
  type: 'success' | 'info' | 'warning' | 'error';
}

const Notification = ({ message, type = 'success' }: NotificationProps) => {
  const [open, setOpen] = useState(true);
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={type} variant="filled" sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
