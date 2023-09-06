// App.js
import React from 'react';
import './App.css';
<script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>

function App() {
  return (
    <body>   
    <div class="top-module" id="top-module" onClick={Search}>
    <box-icon class="SearchIcon" name='search' color='#bfbfbf'></box-icon> 
    <box-icon class="UserIcon" name='user-circle' type='solid' color='#bfbfbf'></box-icon>
    <p class="Name" id="name">Krish</p>
    </div>
    <div class="container">
      <div class="left-module">
        <div class="Nav_HT" onClick={Home}>   
          <box-icon class="Nav_HTChild1" name='home-alt' type='solid' color='#bfbfbf'></box-icon>  
        <p class="Nav_HTChild2">Home</p>          
        </div>
        <div class="Nav_HT" onClick={Search}>   
          <box-icon class="Nav_HTChild1" name='search' color='#bfbfbf'></box-icon>  
        <p class="Nav_HTChild2">Search</p>          
        </div>
      </div>
      <div class="main-module"></div>
    </div>
    <div class="bottom-module"> 
    <div class="icon-container">
    <div class="Previous">
    <box-icon class="PreviousIcon" name='skip-previous' color='#bfbfbf' ></box-icon>
    </div>
    <div class="PlayPause">
    <box-icon class="PlayPauseIcon" name='play' color='#bfbfbf'></box-icon>
    </div>
    <div class="Next">
    <box-icon class="NextIcon" name='skip-next' color='#bfbfbf'></box-icon>
    </div>       
    </div>

    </div>
    </body>
  );
}

let inputElement;
let inputValue = '';

function Home() {
  const topModule = document.getElementById("top-module");
  topModule.classList.remove("editing");
}

function Search() {
  const topModule = document.getElementById("top-module");
  const searchIcon = document.querySelector(".SearchIcon");

  // Check if topModule is already in edit mode
  const isEditing = topModule.classList.contains("editing");

  if (!isEditing) {
    // Enter edit mode
    topModule.classList.add("editing");
    
    // Remove the search icon and add the input element
    if (searchIcon && searchIcon.parentNode === topModule) {
      topModule.removeChild(searchIcon);
    }
    if (!inputElement) {
      inputElement = document.createElement("input");
      inputElement.type = "text";
      inputElement.placeholder = "Search"; // Placeholder text for the input
      inputElement.classList.add("input-field");
      inputElement.value = inputValue; // Set the input value to the stored value

      inputElement.addEventListener("blur", function () {
        topModule.classList.remove("editing");
        inputValue = inputElement.value; // Store the input value
      });

      inputElement.addEventListener("input", function () {
        // Adjust the width of the input element dynamically
        const nameElement = document.querySelector(".Name");
        const nameWidth = nameElement.offsetWidth;
        inputElement.style.width = `calc(90% - ${nameWidth + 10}px)`; // Adjust the width as needed (smaller)
      });
    }

        // Add a keydown event listener to the input element
        inputElement.addEventListener("keydown", function (event) {
          if (event.key === "Enter") {
            // If Enter key is pressed, call FetchSong and stop editing
            FetchSong();
            topModule.classList.remove("editing");
            event.preventDefault(); // Prevent the default Enter key behavior (e.g., form submission)
          }
        });

    topModule.insertBefore(inputElement, topModule.firstChild); // Insert the input element at the beginning
    inputElement.focus();
  }
}

async function FetchSong() {
const url = 'https://spotify-scraper.p.rapidapi.com/v1/track/download?track=LegoHouseEdSheeran';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '39ed191fb4msh098a8df42702e21p1ca117jsnc636fcce8c64',
		'X-RapidAPI-Host': 'spotify-scraper.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	logFirstAudioUrl(result);
} catch (error) {
	console.error(error);
}  
}

function logFirstAudioUrl(jsonData) {
    console.log(jsonData);
  }
export default App;