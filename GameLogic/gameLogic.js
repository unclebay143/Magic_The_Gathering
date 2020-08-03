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
