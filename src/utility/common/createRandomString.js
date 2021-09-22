const createRandomString = (num) => {
  const givenStr = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const length = givenStr.length;

  let randomString = '';
  for (let i = 0; i < num; i++) {
    const element = givenStr.charAt(Math.round(Math.random() * length));
    randomString += element;
  }
  return randomString;
};

export default createRandomString;
