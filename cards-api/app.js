$(function (){

    $.getJSON("https://deckofcardsapi.com/api/deck/new/draw/").then(data => {
        let {suit, value} = data.cards[0];
        console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);

    })

    let card1 = null;
  $.getJSON("https://deckofcardsapi.com/api/deck/new/draw/")
    .then(data => {
      card1 = data.cards[0];
      let deckId = data.deck_id;
      return $.getJSON(`https://deckofcardsapi.com/api/deck/${deckId}/draw/`);
    })
    .then(data => {
      let card2 = data.cards[0];
      [card1, card2].forEach(function(card) {
        console.log(
          `${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`
        );
      });
    });

    let deckId = null;
    let $button = $('button');
    let $drawCard = $('#draw-card');

  $.getJSON("https://deckofcardsapi.com/api/deck/new/shuffle/").then(data => {
    deckId = data.deck_id;
    $button.show();
  });

    $button.on('click', function() {
        $.getJSON(`https://deckofcardsapi.com/api/deck/${deckId}/draw/`).then(data => {
          let cardSource = data.cards[0].image;
          let angle = Math.random() * 90 - 45;
          let randomX = Math.random() * 45 - 25;
          let randomY = Math.random() * 45 - 25;
          $drawCard.append(
            $('<img>', {
              src: cardSource,
              css: {
                transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
              }
            })
          );
          if (data.remaining === 0) $button.remove();
        });
      });

});


