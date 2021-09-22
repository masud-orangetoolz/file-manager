import { Button, Dialog, DialogActions, DialogContent, TextField } from '@material-ui/core';
import * as React from 'react';

export default function AddFolderDialog({ open, handleClose, handleAddFolder }) {
  const [name, setName] = React.useState('');

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Folder name"
            type="name"
            fullWidth
            variant="standard"
            onChange={(e) => setName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button size="small" variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          <Button size="small" variant="outlined" onClick={() => handleAddFolder(name)}>
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
