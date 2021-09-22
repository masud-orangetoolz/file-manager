import { Folder } from "@material-ui/icons";

function ImageFolder({folder, showImageUnderFolder}) {
    return ( 
        <div className="folder" onClick={() => showImageUnderFolder(folder.id)}>
            <Folder className="folder_icon" />
            <span>
              {folder.folderName.length > 10
                ? `${folder.folderName.substring(0, 10)}...`
                : `${folder.folderName}`}{' '}
            </span>
          </div>
     );
}

export default ImageFolder;