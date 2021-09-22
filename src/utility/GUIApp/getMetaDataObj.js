import piexif from "piexifjs";

const getMetaDataObj = (exif) => {
  const Make =
    exif["0th"][piexif.ImageIFD.Make] && exif["0th"][piexif.ImageIFD.Make];
  const Model = exif["0th"][piexif.ImageIFD.Model] ? exif["0th"][piexif.ImageIFD.Model] : "";
  const TileWidth = exif["0th"][piexif.ImageIFD.TileWidth] ? exif["0th"][piexif.ImageIFD.TileWidth] : "";
  const TileLength = exif["0th"][piexif.ImageIFD.TileLength] ? exif["0th"][piexif.ImageIFD.TileLength] : "";
  const XResolution = exif["0th"][piexif.ImageIFD.XResolution] ? exif["0th"][piexif.ImageIFD.XResolution] : "";
  const YResolution = exif["0th"][piexif.ImageIFD.YResolution] ? exif["0th"][piexif.ImageIFD.YResolution] : "";
  const Software = exif["0th"][piexif.ImageIFD.Software] ? exif["0th"][piexif.ImageIFD.Software] : "";

  const ShutterSpeedValue = exif["Exif"][piexif.ExifIFD.ShutterSpeedValue] && exif["Exif"][piexif.ExifIFD.ShutterSpeedValue];
  const Flash = exif["Exif"][piexif.ExifIFD.Flash] && exif["Exif"][piexif.ExifIFD.Flash];
  const FocalLength = exif["Exif"][piexif.ExifIFD.FocalLength] && exif["Exif"][piexif.ExifIFD.FocalLength];
  const BrightnessValue = exif["Exif"][piexif.ExifIFD.BrightnessValue] && exif["Exif"][piexif.ExifIFD.BrightnessValue];
  const LensModel = exif["Exif"][piexif.ExifIFD.LensModel] && exif["Exif"][piexif.ExifIFD.LensModel];

  const GPSLatitude = exif["GPS"][piexif.GPSIFD.GPSLatitude] && exif["GPS"][piexif.GPSIFD.GPSLatitude];
  const GPSLatitudeRef = exif["GPS"][piexif.GPSIFD.GPSLatitudeRef] && exif["GPS"][piexif.GPSIFD.GPSLatitudeRef];
  const GPSLongitude = exif["GPS"][piexif.GPSIFD.GPSLongitude] && exif["GPS"][piexif.GPSIFD.GPSLongitude];
  const GPSLongitudeRef = exif["GPS"][piexif.GPSIFD.GPSLongitudeRef] && exif["GPS"][piexif.GPSIFD.GPSLongitudeRef];
  const latitudeDegrees = GPSLatitude && getLatitudeDegrees(GPSLatitude, GPSLatitudeRef);
  const longitudeDegrees = GPSLongitude && getLongitudeDegrees(GPSLongitude, GPSLongitudeRef);

  return {
    Make,
    Model,
    TileWidth,
    TileLength,
    XResolution,
    YResolution,
    Software,

    ShutterSpeedValue,
    Flash,
    FocalLength,
    BrightnessValue,
    LensModel,

    GPSLatitude,
    GPSLatitudeRef,
    GPSLongitude,
    GPSLongitudeRef,
    latitudeDegrees,
    longitudeDegrees,
  };
}

const getLatitudeDegrees = (latitude, latitudeRef) => {
    const latitudeMultiplier = latitudeRef === "N" ? 1 : -1;
    const decimalLatitude = latitudeMultiplier * piexif.GPSHelper.dmsRationalToDeg(latitude);
    return latitudeMultiplier * decimalLatitude;
};

const getLongitudeDegrees = ( longitude, longitudeRef) => {
  const longitudeMultiplier = longitudeRef === "E" ? 1 : -1;
  const decimalLongitude = longitudeMultiplier * piexif.GPSHelper.dmsRationalToDeg(longitude);
    return longitudeMultiplier * decimalLongitude;
};

export default getMetaDataObj;
