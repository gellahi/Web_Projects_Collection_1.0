
let count = 0;
function increaseCounter() {
    count++;
    document.getElementById('counter').innerText = count;
}
function decreaseCounter() {
    if (count > 0) {
        count--;
        document.getElementById('counter').innerText = count;
    }
}