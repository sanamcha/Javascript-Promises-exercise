
let favoriteNumber = 9;

//1.
$.getJSON(`http://numbersapi.com/${favoriteNumber}?json`).then(data => {
    console.log(data);
  });


  
//2.
let favoriteNumbers = [1, 10, 25];
$.getJSON(`http://numbersapi.com/${favoriteNumbers}?json`).then(data=> {
  console.log(data);
});



//3.
Promise.all(Array.from({length: 4}, () => {
      return $.getJSON(`http://numbersapi.com/${favoriteNumber}?json`);
    })
  ).then(res => {
    res.forEach(data => $("body").append(`<p>${data.text}</p>`));
  });