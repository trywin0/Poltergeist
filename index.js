function showAbout() {
  const entranceDiv = document.getElementById("entrance")
  entranceDiv.style.display = "none"

  const aboutDiv = document.getElementById("about")
  aboutDiv.style.display = "block"
}

setTimeout(() => {
  document.getElementById("enterbtn").style.cursor = "pointer"
}, 4300);