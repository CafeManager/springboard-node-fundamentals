let deckID;

$(document).ready( async function(e){
        res = await axios.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
        deckID = res["data"]["deck_id"]
    }
)


$("#draw-card").on("click", async function(e){
        res = await axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`)
        suit = res["data"]["cards"][0]["suit"]
        value = res["data"]["cards"][0]["value"]
        image = res["data"]["cards"][0]["image"]
        $(`<img class="deck-card" src=${image}>`).appendTo(".card-holder").css({"transform":`rotate(${Math.random(30)*30}deg)`})
    
})
