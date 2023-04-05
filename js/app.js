function actualizarReloj() {
    let now = new Date();
    let clock = document.getElementById("hora");
    let date = document.getElementById("fecha");
    clock.innerHTML = now.toLocaleTimeString();
    date.innerHTML = now.toLocaleDateString();
  }
  setInterval(actualizarReloj, 1000);