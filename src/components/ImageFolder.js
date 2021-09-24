import { Folder, Image } from "@material-ui/icons";

function ImageFolder({node, showFileOrFolderInsideItem}) {
  if(node.type === "directory") {
    return (
      <div className="folder" onDoubleClick={() => showFileOrFolderInsideItem(node)}>
            <Folder className="folder_icon"/>
            <span>
              {node.name.length > 10
                ? `${node.name.substring(0, 10)}...`
                : `${node.name}`}{' '}
            </span>
      </div>
    )
  } else {
    return (
      <div className="folder" onDoubleClick={() => showFileOrFolderInsideItem(node)}>
        <Image className="folder_icon" />
            <span>
              {node.name.length > 10
                ? `${node.name.substring(0, 10)}...`
                : `${node.name}`}{' '}
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