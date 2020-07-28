// functions that generate and insert new html elements
const generateHTMLElement = (elementType, id, text, classNames) => {
  const element = document.createElement(elementType);
  element.id = id;
  element.innerHTML = text;

  const classes = classNames.split(" ");
  classes.map(el => element.classList.add(el));
  return element;
};

const insertAfter = (nodeID, element) => {
  const node = document.querySelector(nodeID);
  node.after(element);
};

// code that appends button which makes videoplayer go bouncy
if (!document.getElementById("bouncyBtn")) {
  const btn = generateHTMLElement(
    "button",
    "bouncyBtn",
    "Atomuwka",
    "btn btn-sm btn-default"
  );
  insertAfter("#emotelistbtn", btn);
}

document.getElementById("bouncyBtn").onclick = () => {
  const vid = document.getElementById("videowrap");
  vid.classList.add("bounce-out-top");
  setTimeout(() => {
    vid.classList.remove("bounce-out-top");
    vid.classList.add("bounce-in-top");
    setTimeout(() => vid.classList.remove("bounce-in-top"), 1500);
  }, 6000);
};
