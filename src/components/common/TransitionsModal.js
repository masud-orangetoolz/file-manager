import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    maxWidth: 800,
    margin: "1rem auto",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    maxHeight: "90vh",
    overflowX: "auto",
    padding: theme.spacing(2, 4, 3),
  },
  close_btn: {
    display: "block",
    textAlign: "end",
    cursor: "pointer",
    marginLeft: "auto",
    color: "gray",
  },
}));

export default function TransitionsModal({ open, handleClose, children }) {
  const classes = useStyles();

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <HighlightOffIcon
            className={classes.close_btn}
            onClick={handleClose}
          />
          {children}
        </div>
      </Fade>
    </Modal>
  );
}
