/**
 * Type basic
 * 1. variabel && data type
 */

// string
let displayName : string;
displayName = "Renaldi Pranata";
console.log(displayName);

// number
let age : number;
age = 20;
console.log(age);

// bollean
let isMerried:boolean;
isMerried = true;

// any
let heroes : any;
heroes = "Ironman";
console.log(heroes);

// array any
let anyArray : any[];
anyArray = ["Renaldi Pranata", 20, false, "Ironman"];
console.log(anyArray);

// array number
let array : number[];
array = [1, 2, 3];
console.log(array);

// tuples
let tuples : [string, number, boolean, string];
tuples = ['Aldi', 20, false, "ironman"];
console.log(tuples);

// enum
// merupakan tipe data yang menyimpan nilai secara constant seperti user atau password databse
enum Month {
    jan = "Januari",
    feb = "Febrari",
    mar = "Maret",
    apr = "April",
    mei = "Mei",
    jun = "Juni",
    jul = "Juli",
    agu = "Agustus",
    sep = "September",
    okt = "Oktober",
    nov = "November",
    des = "Desember"
}
console.log(Month.jan);
