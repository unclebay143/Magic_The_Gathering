
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
