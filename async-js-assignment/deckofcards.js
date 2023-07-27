let deckID;

$.getJSON("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1",
    function (res) {
        deckID = res["deck_id"]
        console.log(deckID)
        console.log(res)
    }
);

$("#draw-card").on("click", function(e){
    $.getJSON(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`,
    function (res) {
        deckID = res["deck_id"]
        suit = res["cards"][0]["suit"]
        value = res["cards"][0]["value"]
        image = res["cards"][0]["image"]
        console.log(image)
        console.log(`${suit.toLowerCase()} of ${value.toLowerCase()}`)
        $(`<img class="deck-card" src=${image}>`).appendTo(".card-holder").css({"transform":`rotate(${Math.random(30)*30}deg)`})
    }
);
})
