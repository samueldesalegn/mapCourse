/* eslint-disable require-jsdoc */
export class ModuleP {
	//  #basket
	constructor() {
		this.basket = [];
	}
	upsertItem(item) {
		if (!this.basket.includes(item)) {
			this.basket.push(item);
		} else {
			for (const elem of this.basket) {
				if (elem.id === item.id){
					this.basket[elem] = item;
				}
      }
		}
	}

	getItemsCount() {
		return this.basket.length;
	}
	getTotalPrice() {
		let total = 0;
		for (const elem of this.basket) {
			total += elem.product.price * elem.count;
		}
		return total;
	}
	removeItemById(id) {
		let index = this.basket.findIndex(x => x.id === id);
		this.basket.splice(index, 1);
	}
}