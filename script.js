function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  /* pegar a tag da img */
  const img = document.querySelector("#profile img")
  /* se tiver light mode, adicionar a imagem avatar 2 */
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar 2.png")
  } else {
    img.setAttribute("src", "./assets/avatar 3.png")
  }
}
