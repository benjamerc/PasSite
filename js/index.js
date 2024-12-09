const generate = document.querySelector('.btn.generate')
const copy = document.querySelector('.btn.copy')
const inputPassword = document.querySelector('.input-password')

function passwordGenerator(length) {
  const characters = 'QWERTYUIOPASDFGHJKLÑZXCVBNMqwertyuiopasdfghjklñzxcvbnm1234567890@#$&^*+-_.[]{}|;:,.<>/?!`~'
  let password = ''

  for (let i = 0; i < length; i++) {
    const randomCharacter = Math.floor(Math.random() * characters.length)
    const newCharacter = characters[randomCharacter];
  
    if (password[password.length - 1] !== newCharacter) {
      password += newCharacter;
    } else {
      i--;
    }
  }

  return password
}

generate.addEventListener('click', () => {
  let password = passwordGenerator(16)
  inputPassword.value = password
})

copy.addEventListener('click', () => {
  const password = inputPassword.value
  if (password) {
    navigator.clipboard.writeText(password)
      .then(() => {
        alert('Contraseña copiada')
      })
      .catch((err) => {
        alert('Hubo un error al copiar la contraseña')
      })
  } else {
      alert('No hay clave para copiar')
  }
})
