// To use defer I have to seprate js as a file
// https://zh.javascript.info/script-async-defer
// Replace mermaid pre.code to div
Array.from(document.getElementsByClassName('mermaid')).forEach(el => {
    el.outerHTML = `<span><div class="mermaid">${el.innerText}</div></span>`
})
