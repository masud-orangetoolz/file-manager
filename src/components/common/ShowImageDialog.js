import { Dialog, DialogActions, DialogContent } from '@material-ui/core';
import * as React from 'react';
import ImageDataViewer from '../ImageDataViewer';
import ImageMetaDataViewer from '../ImageMetaDataViewer';
import ImageView from '../ImageView';

export default function ShowImageDialog({
  open,
  handleClose,
  selectedImage,
  files,
  imageFileObj,
  exif,
}) {
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <ImageView selectedImage={selectedImage} />
          <div className="gui-meta-data-container">
            {files && <ImageDataViewer fileObj={imageFileObj} />}
            <ImageMetaDataViewer exif={exif} />
          </div>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </>
  );
}
