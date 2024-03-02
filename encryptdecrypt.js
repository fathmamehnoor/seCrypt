//AES Encryption function
function aes_encrypt() {
  const key = document.querySelector("#key").value;
  const message = document.querySelector("#message").value;

  // Encrypt the message using AES encryption with the provided key
  const encryptedMessage = CryptoJS.AES.encrypt(message, key).toString();

  document.querySelector("#result").value = encryptedMessage;
}

//AES Decryption function
function aes_decrypt() {
  const key = document.querySelector("#key").value;
  const encryptedMessage = document.querySelector("#message").value;

  // Decrypt the encrypted message using the provided key
  const decryptedMessage = CryptoJS.AES.decrypt(encryptedMessage, key).toString(CryptoJS.enc.Utf8);

  document.querySelector("#result").value = decryptedMessage;
}

//Triple DES Encryption function
function triple_des_encrypt() {
  const key = document.querySelector("#key").value;
  const message = document.querySelector("#message").value;

  // Encrypt the message using Triple DES encryption with the provided key
  const encryptedMessage = CryptoJS.TripleDES.encrypt(message, key).toString();

  document.querySelector("#result").value = encryptedMessage;
}

//Triple DES Decryption function
function triple_des_decrypt() {
  const key = document.querySelector("#key").value;
  const encryptedMessage = document.querySelector("#message").value;

  // Decrypt the encrypted message using the provided key
  const decryptedMessage = CryptoJS.TripleDES.decrypt(encryptedMessage, key).toString(CryptoJS.enc.Utf8);

  document.querySelector("#result").value = decryptedMessage;
}

//RC4 Encryption function
function rc4_encrypt() {
  const key = document.querySelector("#key").value;
  const message = document.querySelector("#message").value;

  // Encrypt the message using RC4 encryption with the provided key
  const encryptedMessage = CryptoJS.RC4.encrypt(message, key).toString();

  document.querySelector("#result").value = encryptedMessage;
}

//RC4 Decryption function
function rc4_decrypt() {
  const key = document.querySelector("#key").value;
  const encryptedMessage = document.querySelector("#message").value;

  // Decrypt the encrypted message using the provided key
  const decryptedMessage = CryptoJS.RC4.decrypt(encryptedMessage, key).toString(CryptoJS.enc.Utf8);

  document.querySelector("#result").value = decryptedMessage;
}
