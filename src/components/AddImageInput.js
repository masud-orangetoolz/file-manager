import { AddPhotoAlternate } from "@material-ui/icons";
import '../styles/AddImageInput.css';

function AddImageInput({ handleFilesChange }) {
    return ( 
        <form action="" className="add_image_form">
            <label htmlFor="image_file">
                <input onChange={handleFilesChange} multiple type="file" id="image_file" style={{display: "none"}} />
                <div className="add_image_btn">
                    <AddPhotoAlternate className="add_image_icon" />
                    <span>Upload your files</span>
                </div>
            </label>
        </form>
     );
}

export default AddImageInput;