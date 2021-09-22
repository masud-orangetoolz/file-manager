import { useState } from 'react';
import '../styles/GUIApp.css';
import checkFileMimeType from '../utility/GUIApp/checkFileMimeType';
import getBase64Image from '../utility/GUIApp/getBase64Image';
import getExifData from '../utility/GUIApp/getExifData';
import GUIUploadedArea from './GUIUploadedArea';
import getExifBytes from '../utility/GUIApp/getExifBytes';
import exifBytesToBase64Img from '../utility/GUIApp/exifBytesToBase64Img';
import getEmptyExifBytes from '../utility/GUIApp/getEmptyExifBytes';

function GUIApp() {
  const [files, setFiles] = useState([]);
  const [base64Img, setBase64Img] = useState([]);
  const [exif, setExif] = useState([]);
  const [activeDisabled, setActiveDisabled] = useState(true);
  const [uploading, setUploading] = useState(false);

  const handleFilesChange = async (event) => {
    const filesObj = await event.target.files;
    setFiles([]);
    if (filesObj) {
      setActiveDisabled(false);
      for (let i = 0; i < filesObj.length; i++) {
        const realMimeType = await checkFileMimeType(filesObj[i]);

        if (realMimeType === 'image/jpeg') {
          setFiles((prevState) => [...prevState, filesObj[i]]);
        } else {
          const message = `Sorry, the image ${filesObj[i].name} must be Jpeg formate`;
          alert(message);
        }
      }
    }
  };

  let handleFilesSubmit = async (event) => {
    event.preventDefault();
    setUploading(true);
    setBase64Img([]);
    setExif([]);
    try {
      if (files.length) {
        for (let i = 0; i < files.length; i++) {
          const exifData = await getExifData(files[i]);
          exifData.id = await Math.round(Math.random() * 1000);
          console.log(exifData)
          setExif((prevState) => [...prevState, exifData]);
          const base64image = await getBase64Image(files[i]);
          setBase64Img((prevState) => [...prevState, base64image]);
        }
      }
    } catch (err) {
      console.log(err.message);
    }
    setUploading(false);
    setActiveDisabled(true);
    document.getElementById('select-file-input').value = '';
  };

  const handleUpdateMetaData = async (updatedExif, index) => {
    try {
      const exifbytes = getExifBytes(updatedExif);
      const oldFile = await files[index];
      const insertedBase64Img = await exifBytesToBase64Img(exifbytes, oldFile);
      const copyAllBase64Images = [...base64Img];
      copyAllBase64Images[index] = insertedBase64Img;
      setBase64Img(copyAllBase64Images);
    } catch (err) {
      console.log(err);
    }
  };

  const removeMetaDataFromImage = async (index) => {
    try {
      const exifbytes = getEmptyExifBytes();
      const oldFile = await files[index];
      const insertedBase64Img = await exifBytesToBase64Img(exifbytes, oldFile);
      const copyAllBase64Images = [...base64Img];
      copyAllBase64Images[index] = insertedBase64Img;
      setBase64Img(copyAllBase64Images);
      console.log('updateSuccesfully');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="gui-app">
      <h1>Meta Data view, read, update</h1>
      <form className="gui-image-upload-form" onSubmit={(e) => handleFilesSubmit(e)}>
        <input
          onChange={handleFilesChange}
          multiple
          type="file"
          name="images"
          id="select-file-input"
          accept="image/jpeg"
        />
        <button disabled={activeDisabled} type="submit">
          {uploading ? 'Uploading...' : 'Upload'}
        </button>
      </form>
      <div className="gui-uploaded-area">
        {exif &&
          exif.map((exifItem, i) => (
            <GUIUploadedArea
              base64Img={base64Img[i]}
              exif={exifItem}
              files={files[i]}
              handleUpdateMetaData={handleUpdateMetaData}
              removeMetaDataFromImage={removeMetaDataFromImage}
              key={i}
              index={i}
            />
          ))}
      </div>
    </div>
  );
}

export default GUIApp;
