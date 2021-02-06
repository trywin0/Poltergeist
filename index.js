function showAbout() {
  const entranceDiv = document.getElementById("entrance")
  entranceDiv.style.display = "none"

  const aboutDiv = document.getElementById("about")
  aboutDiv.style.display = "block"
}
function hideAbout() {
  const entranceDiv = document.getElementById("entrance")
  entranceDiv.style.display = "block"

  const aboutDiv = document.getElementById("about")
  aboutDiv.style.display = "none"
}

setTimeout(() => {
  document.getElementById("enterbtn").style.cursor = "pointer"
}, 4300);