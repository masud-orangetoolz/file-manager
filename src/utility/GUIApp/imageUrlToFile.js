import createRandomString from '../common/createRandomString';

const imageUrlToFile = async (imgUrl, imageFileName = `image-${createRandomString(5)}`) => {
  try {
    const fileName = imageFileName;
    const imgExt = await getUrlExtension(imgUrl);
    const response = await fetch(imgUrl);
    const blob = await response.blob();
    if (imgExt) {
      const file = new File([blob], `${fileName}.${imgExt}`, {
        type: blob.type,
      });
      return file;
    } else {
      const file = new File([blob], `${fileName}.jpg`, {
        type: blob.type,
      });
      return file;
    }
  } catch (err) {
    return err;
  }
};

function getUrlExtension(url) {
  try {
    return url.match(/^https?:\/\/.*[\\\/][^\?#]*\.([a-zA-Z0-9]+)\??#?/)[1];
  } catch (ignored) {
    return false;
  }
}

export default imageUrlToFile;
