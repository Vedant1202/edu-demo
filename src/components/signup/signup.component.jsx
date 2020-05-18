import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';

import DatePicker from '../datepicker/datepicker.component';

export default function Signup() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button color="inherit" onClick={handleClickOpen}>
        <Typography variant="body1" gutterBottom>
            Signup
        </Typography>
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Signup</DialogTitle>
        <DialogContent style={{ padding: '30px' }}>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="contactNumber"
            label="Contact Number"
            type="number"
            fullWidth
          />
          < DatePicker />
          <TextField
            autoFocus
            margin="dense"
            id="orgName"
            label="Organization Name"
            type="text"
            fullWidth
          />        
          <TextField
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Signup
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}