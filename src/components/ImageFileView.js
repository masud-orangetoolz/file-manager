import { Checkbox } from '@material-ui/core';
import '../styles/ImageFileView.css';

function ImageFileView({ fileObj, handleSelectImage, ImageShowByDoubleClick, extraClassName }) {
  return (
    <div className={`image_file_view ${extraClassName}`}>
      <Checkbox
        checked={fileObj.selectStatus | false}
        onChange={() => handleSelectImage(fileObj.id)}
        color="primary"
        inputProps={{ 'aria-label': 'controlled' }}
      />
      <img src={fileObj.image} alt="" onDoubleClick={() => ImageShowByDoubleClick(fileObj)} />
    </div>
  );
}

export default ImageFileView;
