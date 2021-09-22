import { piexif } from "piexifjs";
import { useEffect, useState } from "react";
import '../styles/ImageMetaDataViewer.css';
import showTheImageLocation from "../utility/GUIApp/showTheImageLocation";


function ImageMetaDataViewer({exif}) {
    // const ifds = ["0th", "Exif", "GPS", "Interop", "1st"];
    const [location, setLocation] = useState("");
    useEffect(() => {
      const location = showTheImageLocation(exif);
      setLocation(location);
    }, [exif])

    return (
      <>
        {exif["0th"] ? (
          <table className="image-meta-data-table">
            <thead>
              <tr>
                <th colSpan="2">Exif Meta Data of Image: </th>
              </tr>
            </thead>
            <tbody>
              {exif["0th"] && exif["0th"][piexif.ImageIFD.Make] && (
                <tr>
                  <td>Make:</td>
                  <td>{exif["0th"][piexif.ImageIFD.Make]}</td>
                </tr>
              )}
              {exif["0th"][piexif.ImageIFD.Model] && (
                <tr>
                  <td>Model:</td>
                  <td>{exif["0th"][piexif.ImageIFD.Model]}</td>
                </tr>
              )}

              {exif["0th"][piexif.ImageIFD.XResolution] && (
                <tr>
                  <td>XResolution:</td>
                  <td>{exif["0th"][piexif.ImageIFD.XResolution][0]} Pixels</td>
                </tr>
              )}
              {exif["0th"][piexif.ImageIFD.YResolution] && (
                <tr>
                  <td>YResolution:</td>
                  <td>{exif["0th"][piexif.ImageIFD.YResolution][0]} Pixels</td>
                </tr>
              )}
              {exif["0th"][piexif.ImageIFD.Software] && (
                <tr>
                  <td>Software:</td>
                  <td>{exif["0th"][piexif.ImageIFD.Software]}</td>
                </tr>
              )}
              {exif["0th"][piexif.ImageIFD.DateTime] && (
                <tr>
                  <td>DateTime:</td>
                  <td>{exif["0th"][piexif.ImageIFD.DateTime]}</td>
                </tr>
              )}
              {exif["0th"][piexif.ImageIFD.TileWidth] && (
                <tr>
                  <td>TileWidth: </td>
                  <td>{exif["0th"][piexif.ImageIFD.TileWidth]}</td>
                </tr>
              )}
              {exif["0th"][piexif.ImageIFD.TileLength] && (
                <tr>
                  <td>TileLength: </td>
                  <td>{exif["0th"][piexif.ImageIFD.TileLength]}</td>
                </tr>
              )}
            </tbody>
          </table>
        ) : (
          ""
        )}

        {/*-------------- Exif Data of when was the photo taken --------------------*/}
        {exif["Exif"] ? (
          <table className="image-meta-data-table">
            <tbody>
              {exif["Exif"][piexif.ExifIFD.ShutterSpeedValue] && (
                <tr>
                  <td>ShutterSpeedValue:</td>
                  <td>{exif["Exif"][piexif.ExifIFD.ShutterSpeedValue]}</td>
                </tr>
              )}
              {exif["Exif"][piexif.ExifIFD.Flash] && (
                <tr>
                  <td>Flash:</td>
                  <td>{exif["Exif"][piexif.ExifIFD.Flash]}</td>
                </tr>
              )}
              {exif["Exif"][piexif.ExifIFD.BrightnessValue] && (
                <tr>
                  <td>BrightnessValue:</td>
                  <td>{exif["Exif"][piexif.ExifIFD.BrightnessValue]}</td>
                </tr>
              )}
              {exif["Exif"][piexif.ExifIFD.FocalLength] && (
                <tr>
                  <td>FocalLength:</td>
                  <td>{exif["Exif"][piexif.ExifIFD.FocalLength]}</td>
                </tr>
              )}
              {exif["Exif"][piexif.ExifIFD.LensModel] && (
                <tr>
                  <td>LensModel:</td>
                  <td>{exif["Exif"][piexif.ExifIFD.LensModel]}</td>
                </tr>
              )}
            </tbody>
          </table>
        ) : (
          ""
        )}

        {/*-------------- Exif Data of GPS --------------------*/}
        {exif["GPS"] ? (
          <table className="image-meta-data-table">
            <tbody>
              {exif["GPS"][piexif.GPSIFD.GPSLatitude] && (
                <tr>
                  <td>GPSLatitude: </td>
                  <td>{exif["GPS"][piexif.GPSIFD.GPSLatitude]}</td>
                </tr>
              )}
              {exif["GPS"][piexif.GPSIFD.GPSLatitudeRef] && (
                <tr>
                  <td>GPSLatitudeRef: </td>
                  <td>{exif["GPS"][piexif.GPSIFD.GPSLatitudeRef]}</td>
                </tr>
              )}
              {exif["GPS"][piexif.GPSIFD.GPSLongitude] && (
                <tr>
                  <td>GPSLongitude: </td>
                  <td>{exif["GPS"][piexif.GPSIFD.GPSLongitude]}</td>
                </tr>
              )}
              {exif["GPS"][piexif.GPSIFD.GPSLongitudeRef] && (
                <tr>
                  <td>GPSLongitudeRef: </td>
                  <td>{exif["GPS"][piexif.GPSIFD.GPSLongitudeRef]}</td>
                </tr>
              )}
            </tbody>
          </table>
        ) : (
          ""
        )}
        {location && <a href={location} target="_blank" rel="noreferrer">Image Location</a>}
      </>
    );
}

export default ImageMetaDataViewer;