var { Shop, Item } = require('../src/js/gilded_rose.js');
describe("GildedRose shop manager", function () {
  var listItems;

  beforeEach(function () {
    listItems = [];
  });


  it("1. Baisser de 1 la qualité et sellIn d'item normaux", function () {
    listItems.push(new Item("+5 Dexterity Vest", 10, 20));
    listItems.push(new Item("Mana Cake", 3, 6));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQuality();

    var expected = [
      { sellIn: 9, quality: 19 },
      { sellIn: 2, quality: 5 },
    ];
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it("2. Augmenter la qualité de 1 pour Aged Brie et Backstage passes", function () {
    listItems.push(new Item("Aged Brie", 20, 30));
    listItems.push(new Item("Backstage passes to a TAFKAL80ETC concert", 20, 30));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQuality();

    var expected = [
      { sellIn: 19, quality: 31 },
      { sellIn: 19, quality: 31 },
    ];
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it("3. Baisser de 2 la qualité et baisser de 1 le sellIn d'item normaux périmés", function () {
    listItems.push(new Item("Shield", 0, 10));
    listItems.push(new Item("Cheese Cake", 0, 3));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQuality();

    var expected = [
      { sellIn: -1, quality: 8 },
      { sellIn: -1, quality: 1 },
    ];
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it("4. Vérifier que la qualité d'un produit n'est jamais négative", function () {
    listItems.push(new Item("Shield", 1, 0));
    listItems.push(new Item("Cheese Cake", -10, 0));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQuality();

    var expected = [
      { sellIn: 0, quality: 0 },
      { sellIn: -11, quality: 0 },
    ];
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it("5. Vérifier que la qualité d'un produit n'est jamais de plus de 50", function () {
    listItems.push(new Item("Aged Brie", 20, 49));
    listItems.push(new Item("Backstage passes to a TAFKAL80ETC concert", 20, 50));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQuality();

    var expected = [
      { sellIn: 19, quality: 50 },
      { sellIn: 19, quality: 50 },
    ];
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it("6. Vérifier que Sulfuras n'a pas de date de péremption et ne perd jamais en qualité", function () {
    listItems.push(new Item("Sulfuras, Hand of Ragnaros", Infinity, 80));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQuality();

    var expected = [
      { sellIn: Infinity, quality: 80 },
    ];
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it("7. Augmenter la qualité pour pour Aged Brie et Backstage passes : +2 quand il reste 10 jours ou moins et + 3 quand il reste 5 jours ou moins", function () {
    listItems.push(new Item("Backstage passes to a TAFKAL80ETC concert", 11, 30));
    listItems.push(new Item("Backstage passes to a TAFKAL80ETC concert", 10, 30));
    listItems.push(new Item("Backstage passes to a TAFKAL80ETC concert", 6, 30));
    listItems.push(new Item("Backstage passes to a TAFKAL80ETC concert", 5, 30));
    listItems.push(new Item("Aged Brie", 6, 30));
    listItems.push(new Item("Aged Brie", 5, 30));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQuality();

    var expected = [
      { sellIn: 10, quality: 31 },
      { sellIn: 9, quality: 32 },
      { sellIn: 5, quality: 32 },
      { sellIn: 4, quality: 33 },
      { sellIn: 5, quality: 31 },
      { sellIn: 4, quality: 31 },
    ];
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it("8. Vérifier que la qualité de Backstage passes tombe à 0 après le concert", function () {
    listItems.push(new Item("Backstage passes to a TAFKAL80ETC concert", 1, 30));
    listItems.push(new Item("Backstage passes to a TAFKAL80ETC concert", 0, 30));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQuality();

    var expected = [
      { sellIn: 0, quality: 33 },
      { sellIn: -1, quality: 0 },
    ];
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });
});