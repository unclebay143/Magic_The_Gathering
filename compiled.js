
function Deck(list){
  this.list = list
}
Deck.prototype = {
  constructor: Deck,
  empty: false,
  count : function () { return this.list.length },
  printList : function () {
    for(let i in this.list){
      console.log(this.list[i])
    }
  },
  draw : function () {
      let randomIndex = Math.ceil(Math.random() * (this.count()-1))
      let drawnCard = this.list[randomIndex]
      this.list.splice(randomIndex,1)
      if(this.list.length == 0){
        this.empty = true
      }
      return  drawnCard
}
}

//TESTS:
function Hand(){
}
Hand.prototype = {
  constructor: Hand,
  hand: [],
  drawFrom: function (Obj, n){
    for(let i=0; i<n; i++){
    if (!Obj.empty){
      this.hand.push(Obj.draw())
    } else {
      console.log('out of cards')
    }
  }
    console.log('After draw, new hand is: ', this.hand)
  },
  size : function(){ return this.hand.length},
  displayHand : function(){ console.log(this.hand) }
}
// Test Deck.js
sampleDeck =  ['c1','c2','c3', 'c4', 'c5','c6','c7','c8', 'c9', 'c10','c11','c12','c13', 'c14', 'c15',]
greenDeck = new Deck(sampleDeck)
greenDeck.count()
greenDeck.printList()


playerHand = new Hand()
playerHand.drawFrom(greenDeck, 10)
