// Encryption function
function encrypt() {
  const key = document.querySelector("#key").value;
  const message = document.querySelector("#message").value;

  // Encrypt the message using AES encryption with the provided key
  const encryptedMessage = CryptoJS.AES.encrypt(message, key).toString();

  document.querySelector("#result").value = encryptedMessage;
}

// Decryption function
function decrypt() {
  const key = document.querySelector("#key").value;
  const encryptedMessage = document.querySelector("#message").value;

  // Decrypt the encrypted message using the provided key
  const decryptedMessage = CryptoJS.AES.decrypt(encryptedMessage, key).toString(CryptoJS.enc.Utf8);

  document.querySelector("#result").value = decryptedMessage;
}
