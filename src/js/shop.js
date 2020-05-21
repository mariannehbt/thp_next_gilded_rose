class Shop {
	constructor(items=[]){
		this.items = items;
	}

	updateQuality() {
		this.items.map((item) => {
			switch (true) {
				case (item.name == "Sulfuras, Hand of Ragnaros"):
					break;
				case (item.name == "Aged Brie" && item.sellIn <= 0):
				case (item.name == "Backstage passes to a TAFKAL80ETC concert" && item.sellIn <= 0):
					item.quality = 0;
					break;
				case (item.name == "Aged Brie" && item.sellIn <= 5 && item.quality <= 47):
				case (item.name == "Backstage passes to a TAFKAL80ETC concert" && item.sellIn <= 5 && item.quality <= 47):
					item.quality += 3;
					break;
				case (item.name == "Aged Brie" && item.sellIn <= 10 && item.quality <= 48):
				case (item.name == "Backstage passes to a TAFKAL80ETC concert" && item.sellIn <= 10 && item.quality <= 48):
					item.quality += 2;
					break;
				case (item.name == "Aged Brie" && item.quality <= 49):
				case (item.name == "Backstage passes to a TAFKAL80ETC concert" && item.quality <= 49):
					item.quality += 1;
					break;
				case (item.name == "Aged Brie"):
				case (item.name == "Backstage passes to a TAFKAL80ETC concert"):
					item.quality = 50;
					break;
				case (item.name.split(' ')[0] == "Conjured" && item.sellIn <= 0 && item.quality <= 4 || item.name.split(' ')[0] == "Conjured" && item.sellIn > 0 && item.quality <= 2):
					item.quality = 0;
					break;
				case (item.name.split(' ')[0] == "Conjured" && item.sellIn <= 0):
					item.quality -= 4;
					break;

				case (item.name.split(' ')[0] == "Conjured" && item.sellIn > 0):
					item.quality -= 2;
					break;
				case (item.sellIn < 1 && item.quality >= 2):
					item.quality -= 2;
					break;
				case (item.sellIn >= 1 && item.quality >= 1):
					item.quality --;
					break;
				}
				item.sellIn --;
			})
		return this.items;
  }
}

module.exports = { Shop };
