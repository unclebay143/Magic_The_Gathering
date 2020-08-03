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
