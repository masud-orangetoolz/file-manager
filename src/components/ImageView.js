import '../styles/ImageView.css';

function ImageView({ selectedImage }) {
  return (
    <div className="image_view">
        <img src={selectedImage ? selectedImage.image : ''} alt="" />
    </div>
  );
}

export default ImageView;





//  <div className="image-controller-btn">
//           <button onClick={handleOpen}>Update metaData</button>
//           <button onClick={() => removeMetaDataFromImage(index)}>Remove metaData</button>
//           <button>
//             <a
//               style={{
//                 textDecoration: "none",
//                 color: "inherit",
//               }}
//               href={base64Img}
//               download={downloadedImage}
//             >
//               Download
//             </a>
//           </button>
//         </div> */}
//        <TransitionsModal open={open} handleClose={handleClose}>
//           <ImageMetaDataForm
//             exif={exif}
//             index={index}
//             handleClose={handleClose}
//             handleUpdateMetaData={handleUpdateMetaData}
//           />
//         </TransitionsModal> 
