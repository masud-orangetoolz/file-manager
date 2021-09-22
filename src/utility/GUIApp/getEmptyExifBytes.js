import piexif from 'piexifjs'

function getEmptyExifBytes() {
  let zeroth = {}
  let exif = {}
  let gps = {}

  const exifObj = { '0th': zeroth, Exif: exif, GPS: gps }
  const exifbytes = piexif.dump(exifObj)

  return exifbytes
}

export default getEmptyExifBytes
