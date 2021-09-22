const base64ImgFromUrl = (url) =>
  fetch(url)
    .then((response) => response.blob())
    .then(
      (blob) =>
            new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onloadend = () => {
                resolve(reader.result);
            };
            reader.onerror = (err) => {
              reject(err);
            };
            reader.readAsDataURL(blob);
        })
    );
export default base64ImgFromUrl;
