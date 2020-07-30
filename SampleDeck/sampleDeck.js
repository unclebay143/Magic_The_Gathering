const FOREST = "url('https://gatherer.wizards.com/Handlers/Image.ashx?type=card&name=Forest')";
const AXEBANE_STAG = "url('https://gatherer.wizards.com/Handlers/Image.ashx?type=card&name=Axebane+Stag')"
const ARCH_WEAVER = "url('https://gatherer.wizards.com/Handlers/Image.ashx?type=card&name=Archweaver')"
const BRINDLE_BOAR = "url('https://gatherer.wizards.com/Handlers/Image.ashx?type=card&name=Brindle+Boar')"
const DEADLY_RECLUSE = "url('https://gatherer.wizards.com/Handlers/Image.ashx?type=card&name=Deadly+Recluse')"
const GIANT_SPIDER = "url('https://gatherer.wizards.com/Handlers/Image.ashx?type=card&name=Giant+Spider')"
const ROOTWALLA = "url('https://gatherer.wizards.com/Handlers/Image.ashx?type=card&name=Rootwalla')"
const ELVISH_MYSTIC = "url('https://gatherer.wizards.com/Handlers/Image.ashx?type=card&name=Elvish+Mystic')"
const KALONIAN_TUSKER = "url('https://gatherer.wizards.com/Handlers/Image.ashx?type=card&name=Kalonian+Tusker')"
const RUMBLING_BALOTH = "url('https://gatherer.wizards.com/Handlers/Image.ashx?type=card&name=Rumbling+Baloth')"
const WOODBORN_BEHEMOTH = "url('https://media.magic.wizards.com/image_legacy_migration/images/magic/daily/arcana/arc1246_behemoth.jpg')"


function activate(ID,card){
  ID.style.backgroundImage = card;
}
