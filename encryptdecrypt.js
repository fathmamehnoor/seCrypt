// Function to encrypt or decrypt based on the selected algorithm
function process(action) {
  const algorithm = document.querySelector("#algorithm").value;
  const key = document.querySelector("#key").value;
  const message = document.querySelector("#message").value;
  let result = "";

  if (action == 'encrypt') {
  switch (algorithm) {
    case "aes":
      result = aes_encrypt(message, key);
      break;
    case "triple_des":
      result = triple_des_encrypt(message, key);
      break;
    case "rc4":
      result = rc4_encrypt(message, key);
      break;
    default:
      alert("Invalid algorithm");
  }
  }

  if (action == 'decrypt') {
    switch (algorithm) {
      case "aes":
        result = aes_decrypt(message, key);
        break;
      case "triple_des":
        result = triple_des_decrypt(message, key);
        break;
      case "rc4":
        result = rc4_decrypt(message, key);
        break;
      default:
        alert("Invalid algorithm");
    }
  }

  document.querySelector("#result").value = result;
}

// AES Encryption function
function aes_encrypt(message, key) {
  return CryptoJS.AES.encrypt(message, key).toString();
}

// AES Decryption function
function aes_decrypt(encryptedMessage, key) {
  return CryptoJS.AES.decrypt(encryptedMessage, key).toString(CryptoJS.enc.Utf8);
}

// Triple DES Encryption function
function triple_des_encrypt(message, key) {
  return CryptoJS.TripleDES.encrypt(message, key).toString();
}

// Triple DES Decryption function
function triple_des_decrypt(encryptedMessage, key) {
  return CryptoJS.TripleDES.decrypt(encryptedMessage, key).toString(CryptoJS.enc.Utf8);
}

// RC4 Encryption function
function rc4_encrypt(message, key) {
  return CryptoJS.RC4.encrypt(message, key).toString();
}

// RC4 Decryption function
function rc4_decrypt(encryptedMessage, key) {
  return CryptoJS.RC4.decrypt(encryptedMessage, key).toString(CryptoJS.enc.Utf8);
}
