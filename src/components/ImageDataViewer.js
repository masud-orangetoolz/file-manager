function ImageDataViewer({fileObj}) {
    return (
      <>
        {/* ----Basic info of uploaded file */}
        {fileObj.name && fileObj.size ? (
          <table className="image-meta-data-table">
            <thead>
              <tr>
                <th colSpan="2">Basic Image info:</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>File Name</td>
                <td>{fileObj.name}</td>
              </tr>
              <tr>
                <td>File size</td>
                <td>{(Number(fileObj.size) / 1000000).toFixed(3)} MB</td>
              </tr>
              <tr>
                <td>File Type</td>
                <td>{fileObj.type}</td>
              </tr>
            </tbody>
          </table>
        ) : (
          ""
        )}
      </>
    );
}

export default ImageDataViewer;