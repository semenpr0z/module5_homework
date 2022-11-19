let Map = new Map();
Map.set(1, 'One');
Map.set(2, 'Two');
Map.set(3, 'Three');

for (let item of Map) {
	console.log(`Ключ - ${item[0]}, значение - ${item[1]}`);
}