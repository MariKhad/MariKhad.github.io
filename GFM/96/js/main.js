class Storage {
	constructor(storage = 'local', key, value) {
		this.storage = storage === 'local' ? localStorage : sessionStorage;
		this.key = key;
		this.value = value;
		this.set(JSON.stringify(this?.key), JSON.stringify(this?.value));
	}



	get(key) {
		try {
			return JSON.parse(this.storage.getItem(this.key));
		}
		catch (err) {
			alert(err);
		}
	}

	set(key, value) {
		try {
			storage.setItem(JSON.stringify(this.key), JSON.stringify(this.value));
		}
		catch (err) {
			alert(err);
		}
	}


	clear(key) {
		storage.removeItem(this.key, '');
	}
	isEmpty(key) {
		return !storage.get(this.key)
	}
}


let storage1 = new Storage('local');
let store123 = new Storage('local');


storage1.set('city', 'Kazan');
console.log(storage.get('city'));
let value = {
	зп: '400',
	status: 'married',
}
store123.set('Gleb', value);
alert(store123.get('Gleb'));