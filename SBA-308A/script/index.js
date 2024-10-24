
//import { setupEventListeners } from './script/display.js';

async function random_image() {
  const response = await fetch ("https://api.thecatapi.com/v1/breeds")
  const data = await response.json();
  //console.log(data)
  createCatList(data);
}
random_image();

function createCatList(catList) {
  document.getElementById("container").innerHTML = `
   <select>
      <option> Choose a cat </option>
   ${catList.map(function (container) {
          return `<option value="${container.id}">${container.name}</option>`;
     }).join('')}
     </select>
  `
}

function setupEventListeners() {
document.addEventListener('DOMContentLoaded', () => {
let btn = document.getElementById('btnClick');
let image = document.getElementById('image');


if (btn && image) {
btn.addEventListener('click', function () {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then(res => res.json())
    .then(result => {
      console.log(result);
      displayCatImages(result);  
        });
    });
  } else {
    console.error('error fetching images');
  }
});
}  

  //  })
//})
//image.src = result.message
//})
//.catch(err=>console.log(err))
//})

function displayCatImages(images) {
  const imageContainer = document.getElementById('image');
  imageContainer.innerHTML = '';  

  images.forEach(cat => {
    const img = document.createElement('img');
    img.src = cat.url;
    img.alt = "Random cat";
    img.style.width = '280px'; 
    imageContainer.appendChild(img);
  });
}


    
   // .then(response => response.json()) 
 //   .then(data => console.log(data))
  //   console.log(response)
//}

