const typewriterElement = document.getElementById("typewriter");
let typewriterElement2 = undefined;
const warningMsgElement = document.getElementById("warning-msg");
const workspaceElement = document.getElementById("workspace");
const sentences = ["about.txt"];
const response = `
<p class="txt-alert">about.txt : Content updates soon!</p>
<p>C:\\Users\\armin><span id="typewriter-2"></span></p>
`;
const responses = [response];

let currentSentence = [];
let i = 0;
let j = 0;
const isEnd = false;
const isTyping = false;

function typewriter() {
  if (i < sentences.length && !isEnd) {
    if (j < sentences[i].length && !isEnd) {
      currentSentence.push(sentences[i][j]);
      typewriterElement.innerHTML = currentSentence.join("");
      j++;
    } else {
      function createMessage() {
        const message = document.createElement("p");
        message.innerHTML = responses[i];
        workspaceElement.appendChild(message);
        typewriterElement2 = document.getElementById("typewriter-2");
      }
      createMessage();
      function moveCursor() {
        typewriterElement.classList.remove("type-active");
        typewriterElement2.classList.add("type-active");
      }
      moveCursor();
      j = 0;
      i++;
    }
    const speed = Math.random() * (300 - 200) + 100;
    setTimeout(typewriter, speed);
  }
}

window.addEventListener("load", typewriter);
