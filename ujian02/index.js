//Nama: Maramis, Jeremiah;

//Bagian 1
//Nomor 1
const calculateAge = birthYear => 2019 - birthYear;

const yearUntilRetirement = object => {
    let age = calculateAge(object.year);
    let retirement = 60 - age;

    retirement > 0
        ? console.log(`${object.firstName} retires in ${retirement} years`)
        : console.log(`${object.firstName} is already retired`);
};

yearUntilRetirement({ year: 1987, firstName: "John" });

//Nomor 2
const addNumber = (...angka) => {
    let sum = 0;
    angka.map(x => (sum += x));
    return sum;
};
console.log(addNumber(1, 2, 3, 4, 5, 6, 7));

//Nomor 3
let phi = 3.14;
let power = 2;
let radius = 0;

const calculateArea = obj => phi * Math.pow(obj.radius, obj.power);

radius = 21;
let area21 = calculateArea({ radius: radius, power: power });

radius = 7;
let area7 = calculateArea({ radius: radius, power: power });

console.log(`area with 21 radius ${area21}, and area with 7 radius: ${area7}`);

//Nomor 4
const makeAjaxRequest = (url, method = "GET") => {
    console.log(url, method);
};
makeAjaxRequest("www.google.com");

//Bagian 2
//Nomor 1
const warnaKesukaan = (warna = "putih") =>
    console.log(`warna kesukaan saya adalah ${warna}`);
warnaKesukaan();

//Nomor 2
let namaBuah1 = ["apel", "mangga"];
let namaBuah2 = ["sirsak", "semangka"];

let semuaNamaBuah;

semuaNamaBuah = [...namaBuah1, ...namaBuah2];
console.log(semuaNamaBuah);
