console.log("hai");

var nama = prompt('siapa nama kamu?')
console.log('nama kamu adalah ' + nama)

var umur = parseInt(prompt('berapa umur kamu?'))
console.log('umur kamu adalah ' + umur)

if (Number.isNaN(umur)){
    alert('umur harus angka')
}

let tinggi = parseInt(prompt('berapa tinggi badan mu?'))
console.log('tinggi badan kamu adalah ' + tinggi)

if (Number.isNaN(tinggi)){
    alert('tinggi harus angka')
}

tinggi = parseInt(prompt('berapa tinggi badanmu sekarang?'))
console.log("tinggi badanmu sekarang adalah " + tinggi)

console.log("tipe data nama: ", typeof nama)
console.log("tipe data umur: ", typeof umur)
console.log("tipe data tinggi: ",typeof tinggi)
