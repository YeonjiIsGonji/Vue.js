function addContact(name, mobile, home="없음", address="없음", email="없음") {
	let str = `name=${name}, mobile=${mobile}, home=${home},` + `address=${address}, email=${email}`;  
	//` : option + ~ 누르면 나옴
	console.log(str);
}

addContact("홍길동", "010-222-3331")
addContact("이몽룡", "010-222-3331", "02-3422-9900","서울시");