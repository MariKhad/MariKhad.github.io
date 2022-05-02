class Storage {
	constructor(storage = 'local', key, value) {
		this.storage = storage === 'local' ? localStorage : sessionStorage;
		this.key = key;
		this.value = value;
		this.set(JSON.stringify(this?.key), JSON.stringify(this?.value));
	}



	get(key) {
		try {
			JSON.parse(this.storage.getItem(this.key));
		}
		catch (err) {
			console.log(err);
		}
	}

	set(key, value) {
		try {
			this.storage.setItem(JSON.stringify(this.key), JSON.stringify(this.value));
		}
		catch (err) {
			console.log(err);
		}
	}


	clear(key) {
		this.storage.removeItem(this.key);
	}
	isEmpty(key) {
		return !this.storage.get(this.key)
	}
}


let storage1 = new Storage('local');
let store123 = new Storage('local');


storage1.set('city', 'Kazan');
console.log(storage1.get('city'));
let value = {
	salary: '400',
	status: 'married',
}
store123.set('Gleb', value);
alert(store123.get('Gleb'));