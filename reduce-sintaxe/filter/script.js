function FiltraPares(arr){
	return arr.filter(callback);
}


function callback(item){
	return item % 2 !== 0;
}

const myarr = [1, 5, 9, 22, 75, 30, 22, 110];

console.log(FiltraPares(myarr));
