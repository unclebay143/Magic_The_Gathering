
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
decklist = [
  'c-archweaver.jpg',
  'c-axebaneStag.jpg',
  'c-brindleBoar.jpg',
  'c-deadlyRecluse.jpg',
  'c-elvishMystic.png',
  'c-elvishMystic.png',
  'c-giantSpider.png',
  'c-kalonianTusker.jpg',
  'c-rootwalla.png',
  'c-rumblingBaloth.png',
  'c-woodbornBehemoth.png',
  'i-chorusOfMight.jpg',
  'i-fog.png ',
  'i-giantGrowth.png',
  'i-wildwoodRebirth.jpg',
  's-huntTheWeak.png',
  's-seekTheHorizon.png',
  'l-forest.png',
  'l-forest.png',
  'l-forest.png',
  'l-forest.png',
  'l-forest.png',
  'l-forest.png',
  'l-forest.png',
  'l-forest.png',
  'l-forest.png',
  'l-forest.png',
  'l-forest.png',
  'l-forest.png',
  'l-forest.png'
]

greenDeck = new Deck(decklist)
greenDeck.count()
greenDeck.printList()

playerHand = new Hand()
playerHand.drawFrom(greenDeck, 10)

console.log(decklist.length)
