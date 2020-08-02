
function Deck(list){
  this.list = list
}
Deck.prototype = {
  constructor: Deck,
  count : function () { return this.list.length },
  printList : function () {
    for(let i in this.list){
      console.log(this.list[i])
    }
  },
  draw : function () {
    if(this.list.length > 0){
      let randomIndex = Math.ceil(Math.random() * (this.count()-1))
      let drawnCard = this.list[randomIndex]
      this.list.splice(randomIndex,1)
      return drawnCard
    } return 'deck empty'
  }
}


//Tests:

greeDeck = new Deck(['card1', 'card2'])
greeDeck.count()
greeDeck.printList()
console.log(greeDeck.draw())
console.log(greeDeck.draw())
console.log(greeDeck.draw())
console.log(greeDeck.draw())
