// Arrow Function

//const namaFungsi = (parameter1, ..., parameterX) => {
// kode yang ingin dijalankan dalam fungsi
//}

//const namaFungsiTanpaParameter = () => {
// kode yang ingin dijalankan dalam fungsi
//}

const operasiPenjumlahan = (bilangan1, bilangan2) => {
    const hasil = bilangan1 + bilangan2;
    return hasil;
};
console.log(operasiPenjumlahan(3, 4));

//implicit return in callback function
const values = [20, 2, 5, 1];
let sumOfValues = values.reduce((total, value) => (total += value));
console.log(sumOfValues);

//Default values
const panggang = (
    bahan = "makanannya",
    durasi = "yang diperlukan",
    suhu = "yang cocok"
) => `Panggang ${bahan} selama ${durasi} pada suhu ${suhu}`;

console.log(panggang("risoles", "5 menit"));

// Exercise
const yearUntilRetirement = (year, firstName) => {
    const age = 28;
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${firstName} retired in ${retirement} years`);
    } else {
        console.log(`${firstName} is already retired`);
    }
};

yearUntilRetirement(10, "Jun");
