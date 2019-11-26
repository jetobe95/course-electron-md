const marked = require("marked");
const markdownView = document.querySelector("#markdown");
const htmlView = document.querySelector("#html");


const renderToMarkdown = (md) => {
    htmlView.innerHTML = marked(md, { sanitize: true });
}


markdownView.addEventListener("keyup", (e) => {
    const currentContent = e.target.value;
    renderToMarkdown(currentContent)
})