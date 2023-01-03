// IN PROGRESS

// Push the emoji into the myEmoji's array, and clear the input field
// However, if the input value is empty, don't do anything

const myEmojis = ["👨‍💻", "⛷", "🍲"];
const emojiContainer = document.getElementById("emoji-container");

for (let i = 0; i < myEmojis.length; i++) {
  const emoji = document.createElement("span");
  emoji.textContent = myEmojis[i];
  emojiContainer.append(emoji);
}

const pushBtn = document.getElememtById("push-btn");
pushBtn.addEventListener("click", function () {
  //  => grab hold of the 'input' element
  const emojiInput = document.getElementById("emoji-input");
  // console.log(emojiInput.value);

  if (emojiInput.value) {
    // => push the emoji into the myEmojis array
    myEmojis.push(emojiInput.value);
    // => clear out the input field
    emojiInput.value = "";
    console.log(myEmojis);
  }
});

// OUTPUT:
// ["👨‍💻", "⛷", "🍲", "🔥"]
