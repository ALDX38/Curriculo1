document.addEventListener("mousemove", (e) => {
  
  const matrixChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const char = document.createElement("span");
  char.textContent = matrixChars[Math.floor(Math.random() * matrixChars.length)];
  char.className = "matrix-char";


  char.style.left = `${e.pageX}px`;
  char.style.top = `${e.pageY}px`;

  
  const angle = Math.random() * 2 * Math.PI; 
  char.style.setProperty("--dx", Math.cos(angle)); 
  char.style.setProperty("--dy", Math.sin(angle)); 

  document.body.appendChild(char);

  setTimeout(() => {
    char.remove();
  }, 2000);
});