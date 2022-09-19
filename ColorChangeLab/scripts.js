const COLORS_ARRAY = [
    "red",
    "yellow",
    "magenta",
    "cyan",
    "blue",
    "black",
    "gray",
    "teal",
    "green",
    "purple",
    "violet",
  ];

  const colorBtn = document.querySelector("#generate-color")  
  const resetBtn = document.querySelector('#reset') 
  const ul = document.querySelector('#color-list')

  // ===== CHALLENGE =====
  // 1. Create a Function (generate)
  // Function should get a random color from the COLORS_ARRAY
  // Create a li element
  // Add the color name to the li text
  // Set the background color of the li to the random color
  // Append the li to the ul
  function generate() {
    const randInd = Math.floor(Math.random()*COLORS_ARRAY.length)
    const randColor = COLORS_ARRAY[randInd]
    const li = document.createElement('li')
    li.textContent = randColor
    li.style.backgroundColor = randColor
    ul.appendChild(li)
    console.log(randColor);
}

  // 2. Create Function (reset)
  // Should remove all li children from the ul. 
  // Should set background color to white.
  function reset() {
    for( ;ul.children.length; )
    ul.children[0].remove()
}
colorBtn.addEventListener('click', generate)
resetBtn.addEventListener('click', reset)