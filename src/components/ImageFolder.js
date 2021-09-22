import { Folder, Image } from "@material-ui/icons";

function ImageFolder({folder}) {
  if(folder.type === "directory") {
    return (
      <div className="folder">
            <Folder className="folder_icon" />
            <span>
              {folder.name.length > 10
                ? `${folder.name.substring(0, 10)}...`
                : `${folder.name}`}{' '}
            </span>
      </div>
    )
  } else {
    return (
      <div className="folder">
        <Image className="folder_icon" />
            <span>
              {folder.name.length > 10
                ? `${folder.name.substring(0, 10)}...`
                : `${folder.name}`}{' '}
            </span>
      </div>
    )
  }
}

export default ImageFolder;

{/* <div className="folder">
<Folder className="folder_icon" />
<span>
  {folder.name.length > 10
    ? `${folder.name.substring(0, 10)}...`
    : `${folder.name}`}{' '}
</span>
</div> */}