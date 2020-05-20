import 'bootstrap';
import '../sass/styles.scss';
import {Item} from './item';
import {Shop} from './shop';

let listItems = [];
listItems.push(new Item('+5 Dexterity Vest', 10, 20));
listItems.push(new Item('Mana Cake', 3, 6));

let shop = new Shop(listItems);

console.log(shop);

const selector = document.getElementById('listItems');

function showListItems(name, sellIn, quality) {
	selector.innerHTML += `
		<item class='col-lg-4 col-md-12 p-0'>
				<div class='border rounded border-danger'>
					<div class='card-body text-info'>
						<h1 class='card-title'>${name}</h1>
						<p class='card-text'>Qualité : ${quality}</p>
						<p class='card-text'>J-${sellIn}</p>
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








// import { myFunction, anotherFunction } from './file2';
// import moment from 'moment';

// console.log('coucou');
// myFunction();
// anotherFunction();
// console.log(moment().format('MMMM Do YYYY'));
// console.log(moment('20111031', 'YYYYMMDD').fromNow()); // 8 years ago
// console.log(moment().subtract(10, 'days').calendar()); // 05/27/2019
// console.log('bye');
// console.log('TEST', process.env.DB_HOST);