function FilePath({path}) {

    const style = {
        display: "flex",
        justifyContent: "space-between",
        margin: "0.5rem"
    }
    return ( 
        <div className="file_path" style={style}>
            <span>{path}</span>
        </div>
     );
}

export default FilePath;