// Encryption function
function encrypt() {
  const key = document.querySelector("#key").value;
  const message = document.querySelector("#message").value;
  let encryptedMessage = "";

  for (let i = 0; i < message.length; i++) {
    // Get the character code of the current character in the message
    const charCode = message.charCodeAt(i);

    // Encrypt the character based on the key
    const encryptedCharCode = charCode + parseInt(key);

    // Append the encrypted character to the result
    encryptedMessage += String.fromCharCode(encryptedCharCode);
  }

  // Display the encrypted message
  document.querySelector("#result").value = encryptedMessage;
}

// Decryption function
function decrypt() {
  const key = document.querySelector("#key").value;
  const encryptedMessage = document.querySelector("#message").value;
  let decryptedMessage = "";

  for (let i = 0; i < encryptedMessage.length; i++) {
    // Get the character code of the current character in the encrypted message
    const encryptedCharCode = encryptedMessage.charCodeAt(i);

    // Decrypt the character based on the key
    const decryptedCharCode = encryptedCharCode - parseInt(key);

    // Append the decrypted character to the result
    decryptedMessage += String.fromCharCode(decryptedCharCode);
  }

  // Display the decrypted message
  document.querySelector("#result").value = decryptedMessage;
}

