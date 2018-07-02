window.onload = getCount;

const button = document.getElementsByClassName('btn')[0];

button.addEventListener('click', () => {
  fetch('http://localhost:3000/increase', { 
      method: 'PUT',
  })
  .then(res => res.json())
  .then(data => {
    document.getElementsByClassName('number')[0].textContent = data.count;
  });
});


function getCount() {
  fetch('http://localhost:3000/getcount')
  .then(res => res.json())
  .then(data => {
    document.getElementsByClassName('number')[0].textContent = data.count;
  });
}