import 'bootstrap';
import '../sass/styles.scss';
import {Item} from './item';
import {Shop} from './shop';

let listItems = [];
listItems.push(new Item("+5 Dexterity Vest", 10, 20));
listItems.push(new Item("Mana Cake", 3, 6));
listItems.push(new Item("Aged Brie", 20, 30));
listItems.push(new Item("Backstage passes to a TAFKAL80ETC concert", 20, 30));
listItems.push(new Item("Shield", 0, 10));
listItems.push(new Item("Cheese Cake", 0, 3));
listItems.push(new Item("Sulfuras, Hand of Ragnaros", Infinity, 80));
listItems.push(new Item('Conjured Dark Blade', 8, 6));
listItems.push(new Item('Conjured Magic Stick', 17, 42));

const gildedRose = new Shop(listItems);
console.log(gildedRose);

const items = gildedRose.updateQuality();

const selector = document.getElementById('items');

function showListItems(name, sellIn, quality) {
	selector.innerHTML += `
		<item class='col-lg-4 col-md-12 p-0'>
				<div class='border rounded border-danger'>
					<div class='card-body text-info'>
						<h1 class='card-title'>${name}</h1>
						<p class='card-text'>J-${sellIn}</p>
						<p class='card-text'>Qualité : ${quality}</p>
					</div>
				</div>
		</item>
	`;
};

listItems.forEach((e) => {
	showListItems(
		e.name,
		e.sellIn,
		e.quality
	);
});
