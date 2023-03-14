window.onload = () => {
    let toggleBlocks = document.getElementsByClassName("color-toggle")
    for (const block of toggleBlocks) {
        block.classList.add("red")
        block.onmouseenter = clickEvent
    }
}

let clickEvent = (event) => {
    if (event.target.classList.contains("red")) {
        event.target.classList.remove("red")
        event.target.classList.add("green")
    } else {
        event.target.classList.remove("green")
        event.target.classList.add("red")
    }
}