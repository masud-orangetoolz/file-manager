import { useEffect, useState } from "react";
import TransitionsModal from "./common/TransitionsModal";
import ImageDataViewer from "./ImageDataViewer";
import ImageMetaDataForm from "./ImageMetaDataForm";
import ImageMetaDataViewer from "./ImageMetaDataViewer";

function GUIUploadedArea({
  base64Img,
  exif,
  files,
  handleUpdateMetaData,
  index,
  removeMetaDataFromImage
}) {
  const [open, setOpen] = useState(false);
  const [downloadedImage, setDownloadedImage] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const createImageName = (name) => {
    const imgName = name
      .split(" ")
      .join("-")
      .replace(/.jpg|.jpeg/, "");

    return `${imgName}-${Math.round(Math.random() * 10000)}`;
  };
  useEffect(() => {
    const name = createImageName(files.name);
    setDownloadedImage(name);
  }, []);

  return (
    <div className="gui-uploaded-item">
      <div className="gui-image">
        <img src={base64Img} alt="" />
        <div className="image-controller-btn">
          <button onClick={handleOpen}>Update metaData</button>
          <button onClick={() => removeMetaDataFromImage(index)}>Remove metaData</button>
          <button>
            <a
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
              href={base64Img}
              download={downloadedImage}
            >
              Download
            </a>
          </button>
        </div>
        <TransitionsModal open={open} handleClose={handleClose}>
          <ImageMetaDataForm
            exif={exif}
            index={index}
            handleClose={handleClose}
            handleUpdateMetaData={handleUpdateMetaData}
          />
        </TransitionsModal>
      </div>

      <div className="gui-meta-data-container">
        {files && <ImageDataViewer files={files} />}
        <ImageMetaDataViewer exif={exif} />
      </div>
    </div>
  );
}

export default GUIUploadedArea;
