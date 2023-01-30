// let simdiki_zaman = new Date().getFullYear; 
//yukarıdaki kod şimdiki yılı gösterir lakin koda yazdığım zaman çalışmıyor.


let std1_name = "Ali";
let std1_surname = "Velioglu";
let sdt1_birthday = 2008;
let std1_mathNote1 = 80;
let std1_mathNote2 = 90;
let std1_mathNote3 = 100;
let std1_age = 2023 - sdt1_birthday; //yaş hesaplar
let std1_average = (std1_mathNote1+std1_mathNote2+std1_mathNote3)/3 ; // notların  ortalamasını alır


let std2_name = "Veli";
let std2_surname = "Alioglu";
let sdt2_birthday = "2010";
let std2_mathNote1 = 40;
let std2_mathNote2 = 50;
let std2_mathNote3 = 45;
let std2_age = 2023 - sdt2_birthday; //yaş hesaplar
let std2_average = (std2_mathNote1 + std2_mathNote2 + std2_mathNote3)/3 ; // notların  ortalamasını alır



console.log(std1_name + " " + std1_surname);
console.log("Age: "+ std1_age);
console.log("Avarage of math's note: " + std1_average);
console.log(std1_average >=50);  // not 50nin üstündeyse True basar altında ise False

console.log(std2_name + " " + std2_surname);
console.log("Age: "+ std2_age);
console.log("Avarage of math's note: " + std2_average);
console.log(std2_average >=50); // not 50nin üstündeyse True basar altında ise False
