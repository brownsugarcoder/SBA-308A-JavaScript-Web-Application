

export function setupEventListeners() {
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