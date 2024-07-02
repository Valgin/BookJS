/* 

 Функции в JS позволяют взять фрагмент кода, присвоит ему имя,
 а затем ссылаться на его имя вещде, где он понадобится


  Определение функции   имя функции    параметры функции
 function               bark          (name, weight) {
 }



 функция в js может быть объявлена где угодно
*/


function bark(name, weight) {
    if(weight > 20) {
        console.log(name + " says WOOF WOFF");
    } else {
        console.log(name + " says woof woof");
    }

}

bark("rover", 23);
bark("spot", 13);
bark("spike", 53);
bark("lady", 17);