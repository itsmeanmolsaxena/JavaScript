/**
 * Create a Backpack object, populate some HTML to display its properties.
 */
const updateBackpack = (update) => {
  let main = document.querySelector("main");
  main.innerHTML = markup(backpack);
  console.info(update);
};

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
    updateBackpack(`Lid status changed.`);
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
    updateBackpack(`Strap lengths updated.`);
  },
};

const markup = (backpack) => {
  return `
  <div>
    <h3>${backpack.name}</h3>
    <ul>
      <li>Volume: ${backpack.volume}</li>
      <li>Color: ${backpack.color}</li>
      <li>Number of pockets: ${backpack.pocketNum}</li>
      <li>Strap lengths: L: ${backpack.strapLength.left}, R: ${
    backpack.strapLength.right
  } </li>
      <li>Top lid: ${backpack.lidOpen ? "Open" : "Closed"}</li>
    </ul>
  </div>
`;
};

const main = document.createElement("main");
main.innerHTML = markup(backpack);
document.body.appendChild(main);

/**
 * If I go to inspect my code, you'll see down in the console, it says
 * Uncaught TypeError Cannot read property appendChild of null.
 * So if I go to my script here and look, I'll see down here at the very bottom,
 * it says appendChild. So that's the function the console is saying there's something wrong with,
 * and if I look at what the function is appended to, I can see what's wrong.
 * So it says grab the document. Then find the body element inside the document and then appendChild.
 * The problem is in the HTML document, the script is run before the body element is created.
 * The browser renders everything from the top to the bottom, so it'll render out the JavaScript
 * before it gets to the actual content of the page.
 * The error is telling me the script can't get access to the body element because the body element
 * was never created. To fix this, I can then take the script tag entirely and paste it in below the
 * body element.
 */
