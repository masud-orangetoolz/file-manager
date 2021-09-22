import piexif from "piexifjs";

const getExifBytes = (updatedExif) => {
  let zeroth = {};
  let exif = {};
  let gps = {};
  if (updatedExif.Make) {
    zeroth[piexif.ImageIFD.Make] = updatedExif.Make;
  }
  if (updatedExif.Model) {
    zeroth[piexif.ImageIFD.Model] = updatedExif.Model;
  }
  if (updatedExif.XResolution) {
    const value = parseInt(updatedExif.XResolution);
    zeroth[piexif.ImageIFD.XResolution] = [value, 1];
  }
  if (updatedExif.YResolution) {
    const value = parseInt(updatedExif.YResolution);
    zeroth[piexif.ImageIFD.YResolution] = [value, 1];
  }
  if (updatedExif.TileWidth) {
    const value = parseInt(updatedExif.TileWidth);
    zeroth[piexif.ImageIFD.TileWidth] = value;
  }
  if (updatedExif.TileLength) {
    const value = parseInt(updatedExif.TileLength);
    zeroth[piexif.ImageIFD.TileLength] = value;
  }
  if (updatedExif.Software) {
    zeroth[piexif.ImageIFD.Software] = updatedExif.Software;
  }
  zeroth[piexif.ImageIFD.DateTime] = new Date().toLocaleString();

  if (updatedExif.ShutterSpeedValue) {
    exif[piexif.ExifIFD.ShutterSpeedValue] = updatedExif.ShutterSpeedValue;
  }

  if (updatedExif.BrightnessValue) {
    exif[piexif.ExifIFD.BrightnessValue] = updatedExif.BrightnessValue;
  }
  if (updatedExif.Flash) {
    const value = parseInt(updatedExif.Flash);
    exif[piexif.ExifIFD.Flash] = value;
  }
  if (updatedExif.FocalLength) {
    const value = parseInt(updatedExif.FocalLength);
    exif[piexif.ExifIFD.FocalLength] = [value, 1];
  }
  if (updatedExif.LensModel) {
    exif[piexif.ExifIFD.LensModel] = updatedExif.LensModel;
  }

  if (updatedExif.latitudeDegrees) {
    const gps_latitude = piexif.GPSHelper.degToDmsRational(updatedExif.latitudeDegrees);
    const gps_latitdeRef = updatedExif.latitudeDegrees > 0 ? "N" : "S";
    gps[piexif.GPSIFD.GPSLatitude] = gps_latitude;
    gps[piexif.GPSIFD.GPSLatitudeRef] = gps_latitdeRef;
  }

  if (updatedExif.longitudeDegrees) {
	const gps_logitude = piexif.GPSHelper.degToDmsRational(updatedExif.longitudeDegrees);
	const gps_longitudeRef = updatedExif.longitudeDegrees > 0 ? "E" : "W";
    gps[piexif.GPSIFD.GPSLongitude] = gps_logitude;
    gps[piexif.GPSIFD.GPSLongitudeRef] = gps_longitudeRef;
  }

  gps[piexif.GPSIFD.GPSVersionID] = [7, 7, 7, 7];
  gps[piexif.GPSIFD.GPSDateStamp] = "1999:99:99 99:99:99";
  const exifObj = { "0th": zeroth, Exif: exif, GPS: gps };
  const exifbytes = piexif.dump(exifObj);
  console.log({exifbytes});
  return exifbytes;
};

export default getExifBytes;
