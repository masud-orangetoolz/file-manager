import { Button, ButtonGroup } from '@material-ui/core';
import '../styles/FileManagerHeader.css';
import { CreateNewFolder, Delete, GetApp, SystemUpdateAlt } from '@material-ui/icons';

function FileManagerHeader({ handleClickOpen, handleDeleteImages }) {
    const btnStyle = {
        marginRight: "8px",
        fontSize: "16px"
    }
  return (
    <div className="file_manager_header">
      <div>
        <ButtonGroup variant="contained" size="small" aria-label="small button group">
          <Button>
            <SystemUpdateAlt style={btnStyle} /> Update
          </Button>
          <Button>
            <GetApp style={btnStyle} /> Download
          </Button>
          <Button onClick={handleDeleteImages}>
            <Delete style={btnStyle} /> Delete
          </Button>
        </ButtonGroup>
      </div>
      <Button
        className="add_folder_btn"
        variant="contained"
        color="primary"
        size="small"
        onClick={handleClickOpen}
      >
         Create <CreateNewFolder style={{fontSize: "18px", marginLeft: "8px"}}/>
      </Button>
    </div>
  );
}

export default FileManagerHeader;
