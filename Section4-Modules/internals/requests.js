function encrypt(data) {
  return "encrypted data";
}

function send(url, data) {
  const encryptedData = encrypt(data);
  console.log(`Encrypter Data = ${encryptedData} to ${url}`);
}

module.exports = { send };
