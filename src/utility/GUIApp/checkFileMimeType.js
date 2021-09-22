const checkFileMimeType = (blob) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.onloadend = function (e) {
          const arr = new Uint8Array(e.target.result).subarray(0, 4);
          let header = "";
          for (var i = 0; i < arr.length; i++) {
            header += arr[i].toString(16);
          }
          if (header) {
            // Check the file signature against known types 
            const mimeType = checkMimeTypeCase(header);
            resolve(mimeType);
          }
        };
        fileReader.readAsArrayBuffer(blob);
    })
}

const checkMimeTypeCase = (header) => {
    let type;
    switch (header) {
      case "89504e47":
        type = "image/png";
        break;
      case "47494638":
        type = "image/gif";
        break;
      case "ffd8ffe0":
      case "ffd8ffe1":
      case "ffd8ffe2":
      case "ffd8ffe3":
      case "ffd8ffe8":
        type = "image/jpeg";
        break;
      default:
        type = "unknown"; // Or you can use the blob.type as fallback
        break;
    }
    return type;
} 


export default checkFileMimeType;