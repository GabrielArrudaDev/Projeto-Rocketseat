function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")
  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode: adiciona a imagem light
    img.setAttribute("src", "./assets/gabriel-avatar2.png")
    img.setAttribute("alt", "teste")
  } else {
    // se não: mantem a imagem
    img.setAttribute("src", "./assets/gabriel-avatar.png")
    img.setAttribute("alt", "teste2")
  }

  // o toggle poderia ser :
  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }
}
