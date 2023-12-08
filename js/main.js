// Initialize the count variables for the coin flip
let hCount = 0;
let tCount = 0;

// Add event listener for click of button to flip coin 
document.querySelector('#flip-coin').addEventListener('click', makeReq)

// Asynch / await function to make request to server to flip coin and return result
async function makeReq(){
  // Fetch request to '/api' path of URL stored as variable (res short for response)
  const res = await fetch(`/api`);
  // Response from server as .json format object stored as variable
  const data = await res.json();

  // Conditional to examine the object returned from the server and add it to appropriate count variable
  if (data.flip === 'Heads'){
    hCount++;
  } else {
    tCount++;
  }

  console.log(data);

  //Updates the count to the index.html file 
  document.querySelector("#H-count").textContent = `Landed on Heads: ${hCount}`;
  document.querySelector("#T-count").textContent = `Landed on Tails: ${tCount}`;
  
}

// Add event listener for click of button to reset the count
document.querySelector("#reset-button").addEventListener('click', reset);

// Function to reset the count variables for each outcome of the coin flip
function reset() {
  // Resets the count variable for each outcome of the coin flip
  hCount = 0;
  tCount = 0;
  // Updates the count to the index.hmtl file
  document.querySelector("#H-count").textContent = `Landed on Heads: ${hCount}`;
  document.querySelector("#T-count").textContent = `Landed on Tails: ${tCount}`;
}