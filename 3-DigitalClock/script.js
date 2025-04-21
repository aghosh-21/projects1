function time() {
    const date = new Date();
const t= date.toLocaleTimeString();
document.getElementById("clock").innerText=t;
}

setInterval(time, 1);