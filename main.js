// let person = {
//     name: "Aziz",
//     age: 29,
//     hobby: ["oxumaq", "yazmaq", "idman"],
//     informationCombine: function () {
//         return `name: ${this.name}, age: ${this.age}, hobby: ${this.hobby}`;
//     },

//     hobbyShow: function () {
//         console.log("Hobbiler:");
//         this.hobby.forEach(hobby => {
//             console.log(hobby);
//         });
//     }
// };


// console.log(person.informationCombine());
// person.hobbyShow();








// silah




// let silah = {
//     tutumu: 20,
//     maqazin: 0,

//     maqaziniArtir: function () {
//         if (this.maqazin < this.tutumu) {
//             this.maqazin += 5;
//         } else {
//             console.log("maqazin doludu");
//         }
//     },
//     gulleAt: function () {
//         if (this.maqazin > 0) {
//             this.maqazin--;
//         } else {
//             console.log("gulle bitdi")
//         }
//     },
//     avtomatikAt: function () {
//         if (this.maqazin > 0) {
//             this.maqazin -= 6;
//         } else {
//             console.log("gulle bitdi")
//         }
//     }

// }

// for (let index = 0; index < 20; index += 5) {
//     silah.maqaziniArtir();



// silah.gulleAt();
// silah.gulleAt();
// silah.gulleAt();
// silah.gulleAt();
// silah.gulleAt();
// console.log(silah.maqazin);

// silah.maqaziniArtir();
// silah.maqaziniArtir();

// console.log(silah.maqazin);

// silah.gulleAt();
// silah.gulleAt();

// console.log(silah.maqazin);

// silah.avtomatikAt();
// silah.avtomatikAt();
// silah.avtomatikAt();
// silah.avtomatikAt();
// silah.avtomatikAt();
// silah.avtomatikAt();

// console.log(silah.maqazin);





// car object

// let car = {
//     maxsuret: 100,
//     benzinBak: 20,
//     benzin: 20,
//     isStart: false,

//     iseSal: function () {
//         this.isStart = true;
//         console.log("masin ise salindi");
//     },

//     qazver: function (miqdar) {
//         if (!this.isStart) {
//             console.log("masin sonuludur. masini ise salin!:");
//             return;
//         }

//         if (this.benzin < miqdar) {
//             console.log("bak bosdur:");
//             return;
//         }

//         this.benzin -= miqdar;
//         if (this.benzin < 5) {
//             this.doldur();
//         }
//         if (this.maxsuret < this.benzin) {
//             console.log("max sureti kecmeye icaze verilmir.bakda benzin azdir.baki doldur");
//         }

//     },

//     doldur: function (miqdar) {
//         if (miqdar === undefined) {
//             miqdar = this.benzinBak - this.benzin;
//         }
//         if (this.benzin + miqdar <= this.benzinBak) {
//             this.benzin += miqdar;
//         } else {
//             this.benzin = this.benzinBak;
//         }
//         console.log("baki doldur.");

//     },

//     sondur: function () {
//         this.isStart = false;
//         console.log("masin sonduruldu");
//     }
// };

// car.iseSal();
// car.qazver(10);
// car.doldur(20);
// car.qazver(10);
// car.sondur();















