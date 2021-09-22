import React, { useState } from 'react';
import '../styles/FileManager.css';
import createRandomString from '../utility/common/createRandomString';
import ImageFolder from './ImageFolder';
// import ImageFileView from './ImageFileView';
// import AddImageInput from './AddImageInput';
import file_folder from '../file_folder.json'
import checkFileMimeType from '../utility/GUIApp/checkFileMimeType';
import getExifData from '../utility/GUIApp/getExifData';
import imageUrlToFile from '../utility/GUIApp/imageUrlToFile';
import AddFolderDialog from './common/AddFolderDialog';
// import ShowImageDialog from './common/ShowImageDialog';
import FileManagerHeader from './FileMangerHeader';


function FileManager() {
  const [rootFolder, setRootFolder] = useState(file_folder);
  console.log(rootFolder)
  // const [folder, setFolder] = useState(initialFolder);
  // const [files, setFiles] = useState([]);
  // const [allImages, setAllImages] = useState(imageList);
  // const [images, setImages] = useState([]);
  // const [selectedImage, setSelectedImage] = useState({});
  // const [parentId, setParentId] = useState(1);
  // const [exif, setExif] = useState({});
  // const [imageFileObj, setImageFileObj] = useState({});

  // const [open, setOpen] = useState(false);
  // const [openImage, setOpenImage] = useState(false);

  // const handleClickOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  // const hanldeClickImageOpen = () => setOpenImage(true);
  // const handleCloseImage = () => setOpenImage(false);

  // ====### add folder event ####====
  // const handleAddFolder = (name) => {
  //   if (name) {
  //     const id = createRandomString(10);
  //     setFolder([...folder, { folderName: name, id }]);
  //     handleClose();
  //   }
  // };

  // ====### add images under folder event ####====
  // const handleFilesChange = async (event) => {
  //   const filesObj = await event.target.files;
  //   setFiles([]);
  //   if (filesObj) {
  //     for (let i = 0; i < filesObj.length; i++) {
  //       const realMimeType = await checkFileMimeType(filesObj[i]);
  //       if (realMimeType === 'image/jpeg') {
  //         setFiles((prevState) => [...prevState, filesObj[i]]);
  //         const base64Image = URL.createObjectURL(filesObj[i]);
  //         const id = createRandomString(10);
  //         setImages((prevState) => [...prevState, { image: base64Image, parentId: parentId, id }]);
  //         setAllImages((prevState) => [
  //           ...prevState,
  //           { image: base64Image, parentId: parentId, id },
  //         ]);
  //       } else {
  //         const message = `Sorry, the image ${filesObj[i].name} must be Jpeg formate`;
  //         alert(message);
  //       }
  //     }
  //   }
  // };

  // ====### select folder and show folders images event  ####====
  // const showImageUnderFolder = (id) => {
  //   handleUnselectImages();
  //   const filterImages = allImages.filter((imageItem) => imageItem.parentId === id);
  //   setImages(filterImages);
  //   setParentId(id);
  // };

  // ====### image show after double click on image ####====
  // const ImageShowByDoubleClick = async (obj) => {
  //   console.log(obj);
  //   hanldeClickImageOpen();
  //   try {
  //     setSelectedImage(obj);
  //     const imageFile = await imageUrlToFile(obj.image);
  //     console.log({ imageFile });
  //     if (imageFile) {
  //       setImageFileObj(imageFile);
  //       const exifFile = await getExifData(imageFile);
  //       setExif(exifFile);
  //     }
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };

  // ====### multiple image select event ####====
  // const handleSelectImage = (id) => {
  //   const filterImages = images.slice().map((item) => {
  //     if (item.id === id) {
  //       item.selectStatus = item.selectStatus ? false : true;
  //       return item;
  //     }
  //     return item;
  //   });
  //   setImages(filterImages);
  // };

  // ====### deselect images event ####====
  // const handleUnselectImages = () => {
  //   const filterImages = images.slice().map((item) => {
  //     item.selectStatus = false;
  //     return item;
  //   });
  //   setImages(filterImages);
  // };

  // ====### delete selected images event ####====
  // const handleDeleteImages = () => {
  //   const filterImages = images.slice().filter((item) => item.selectStatus !== true);
  //   setImages(filterImages);
  // };

  // ====### delete selected images event ####====

  return (
    <div className="file_manager__container">
      <FileManagerHeader
        // handleClickOpen={handleClickOpen}
        // handleDeleteImages={handleDeleteImages}
      />
      {/* <AddFolderDialog open={open} handleClose={handleClose} handleAddFolder={handleAddFolder} /> */}

      {/* ------ all folder shows here --------*/}
      <div className="folders">
        {rootFolder.children.map((item) => (
          <ImageFolder key={item.name} folder={item} /* showImageUnderFolder={showImageUnderFolder} */ />
        ))}
      </div>

      {/* ------ images shows under folder select --------*/}
      {/* <div className="folder_image_view"> */}
        {/* {images.map((item) => (
          <ImageFileView
            fileObj={item}
            handleSelectImage={handleSelectImage}
            ImageShowByDoubleClick={ImageShowByDoubleClick}
            key={item.id}
            extraClassName={item.selectStatus ? 'active' : ''}
          />
        ))} */}
        {/* <AddImageInput handleFilesChange={handleFilesChange} /> */}

        {/* ------ image dialog box open after double click on image --------*/}
        {/* <ShowImageDialog
          open={openImage}
          handleClose={handleCloseImage}
          selectedImage={selectedImage}
          files={files}
          imageFileObj={imageFileObj}
          exif={exif}
        />
      </div> */}
    </div>
  );
}

export default FileManager;
