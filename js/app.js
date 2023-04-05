function actualizarReloj() {
    let now = new Date();
    let clock = document.getElementById("clock");
    let date = document.getElementById("date");
    clock.innerHTML = now.toLocaleTimeString();
    date.innerHTML = now.toLocaleDateString();
  }
  setInterval(actualizarReloj, 1000);