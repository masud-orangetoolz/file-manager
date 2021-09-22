import { Button, makeStyles, TextField } from "@material-ui/core";
import { useState } from "react";
import getMetaDataObj from "../utility/GUIApp/getMetaDataObj";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
  btn_groups: {
    display: "flex",
    gap: "1rem",
  },
}));

function ImageMetaDataForm({ exif, handleClose, handleUpdateMetaData, index }) {
  const classes = useStyles();
  const [updatedExif, setUpdatedExif] = useState(getMetaDataObj(exif));

  const handleExifChange = (e) => {
    console.log(updatedExif)
    setUpdatedExif({ ...updatedExif, [e.target.name]: e.target.value });
  };

  const handleSaveChange = () => {
    handleUpdateMetaData(updatedExif, index);
    handleClose();
  };
  return (
    <form className={classes.root}>
      <TextField
        name="Make"
        label="Make"
        defaultValue={updatedExif?.Make}
        onChange={handleExifChange}
      />
      <TextField
        name="Model"
        label="Model"
        defaultValue={updatedExif.Model}
        onChange={handleExifChange}
      />
      <TextField
        type="number"
        name="TileWidth"
        label="TileWidth"
        defaultValue={updatedExif.TileWidth[0] | updatedExif.TileWidth}
        onChange={handleExifChange}
      />
      <TextField
        type="number"
        name="TileLength"
        label="TileLength"
        defaultValue={updatedExif.TileLength[0] | updatedExif.TileLength}
        onChange={handleExifChange}
      />
      <TextField
        type="number"
        name="XResolution"
        label="XResolution"
        defaultValue={updatedExif.XResolution[0]}
        onChange={handleExifChange}
      />
      <TextField
        type="number"
        name="YResolution"
        label="YResolution"
        defaultValue={updatedExif.YResolution[0]}
        onChange={handleExifChange}
      />
      <TextField
        name="Software"
        label="Software"
        value={updatedExif.Software}
        onChange={handleExifChange}
      />
      {/* <TextField
        type="number"
        name="ShutterSpeedValue"
        label="ShutterSpeedValue"
        value={updatedExif.ShutterSpeedValue}
        onChange={handleExifChange}
      /> */}
      <TextField
        type="number"
        name="Flash"
        label="Flash"
        value={updatedExif.Flash}
        onChange={handleExifChange}
      />
      {/* <TextField
        type="number"
        name="FocalLength"
        label="FocalLength"
        value={updatedExif.FocalLength}
        onChange={handleExifChange}
      /> */}
      {/* <TextField
        type="number"
        name="BrightnessValue"
        label="BrightnessValue"
        value={updatedExif.BrightnessValue}
        onChange={handleExifChange}
      /> */}
      <TextField
        name="LensModel"
        label="LensModel"
        value={updatedExif.LensModel}
        onChange={handleExifChange}
      />
      <TextField
        type="number"
        name="latitudeDegrees"
        label="GPSLatitude"
        value={updatedExif.latitudeDegrees}
        onChange={handleExifChange}
      />
      <TextField
        type="number"
        name="longitudeDegrees"
        label="GPSLongitude"
        value={updatedExif.longitudeDegrees}
        onChange={handleExifChange}
      />

      <div className={classes.btn_groups}>
        <Button
          size={"small"}
          onClick={handleSaveChange}
          type="button"
          variant="contained"
          color="primary"
        >
          Save Changes
        </Button>
        <Button
          size={"small"}
          onClick={handleClose}
          type="button"
          variant="contained"
          color="secondary"
        >
          cancel
        </Button>
      </div>
    </form>
  );
}

export default ImageMetaDataForm;
