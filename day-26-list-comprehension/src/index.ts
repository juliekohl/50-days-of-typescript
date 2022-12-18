// List Comprehension
// For Loop
let numbers: number[] = [1, 2, 3];
let newList: number[] = [];
for (let n in numbers) {
    let add: number = numbers[n] + 1;
    newList.push(add);
}
console.log(newList);

// String as List
let myName: string = "Juliana";
let charList: string[] = myName.split('');
console.log(charList); // ['J', 'u', 'l', 'i', 'a', 'n', 'a']
