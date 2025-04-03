// Array index number starts from 0
// const numbers = [10, 25, 26, 31, 42, 84, 38, 12, 1];
// const fristValue = numbers[0]
// const secondValue = numbers[1]
// const thirdValue = numbers[2]
// console.log(fristValue, secondValue, thirdValue);
// console.log(numbers[6], numbers[7]);

// If you try to access a possition that is not exist in the array, it will return UNDEFINE
// const numbers = [ 12, 41, 25, 54]
// const fifth = numbers[4]
// console.log(fifth);

// you can upadate a value form the array
// const numbers = [10, 20, 30];
// numbers[0] = 20;
// console.log(numbers);

// const friends = ['Jahid', 'Ramim', 'Shoyeb', 'Afnan', 'Osman', 'Riyad', 'Asraful']
// console.log(friends[3]);

// const books = ['Physics', 'Math', 'Chemistry', 'Biology', 'Higher Math', 'Economics', 'English']
// console.log(books[5]);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numbers[5] = 30;
// console.log(numbers);

// const games = ['Free Fire', 'Pubge', 'Candy Crash', 'Temple Run']
// games[2]= 'Subway Surfer'
// console.log(games);

// const friendsName = ['Kamal', 'Rafiq', 'Salam', 'Jabbar', 'Barkat']
// console.log(friendsName[3]);

// const countriesToVisit = ['Thiland', 'Singapur', 'Malaysia', 'China']
// console.log(countriesToVisit[4]);

// const tableAccesories = ['Monitor', 'Laptop', 'Box', 'Programing Book', 'Note pade', 'Pen', 'Mobile', 'Erreser']
// console.log(tableAccesories[7]);

// ---------------------------------

// PUSH AND POOP

// const numbers = [12, 87, 98, 45];
// numbers.push(44)
// console.log(numbers);

// const numbers = [12, 87, 98, 45];
// numbers.push(44, 65, 98, 11, 9);
// console.log(numbers);

// const friends = ['balam', 'kalam', 'salam']
// friends.push('kailam')
// console.log(friends);

// const friends = ['balam', 'kalam', 'salam', 'gelam', 'pailam']
// friends.pop()
// console.log(friends);

// poop function remove the last element from the array
// const poop1 = friends.pop()
// const poop2 = friends.pop()
// console.log(friends, poop1, poop2);

// friends.pop()
// console.log(friends);
// -------------------------------------

// SHIFT AND UNSHIFT

// const friends = ['balam', 'kalam', 'salam', 'gelam', 'pailam']
// friends.shift()
// console.log(friends);

// const teachers = ['Assistant sir', 'Class sir', 'PT sir']
// teachers.unshift("Head sir")
// console.log(teachers);

// practice
// const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// numbers.push(100, 110, 120)
// console.log(numbers);

// const name = ['sojib', 'shakil', 'sohel', 'sgor', 'shakib']
// name.push('sumon')
// console.log(name);

// const game = ['cricket', 'football', 'freefire']
// game.pop()
// console.log(game);

// const numbers = [24, 36, 48, 60];
// numbers.unshift(12)
// console.log(numbers);


// const books = ['Bangle', 'English', 'Math', 'Arbi', 'Islam']
// books.shift()
// console.log(books);

// --------------

// INCLUDES
 
// const friends = ['balam', 'kalam', 'salam', 'gelam', 'pailam']
// const exist = friends.includes('gelam')
// console.log(exist);


// const friends = ['balam', 'kalam', 'salam', 'gelam', 'pailam']
// const exist = friends.includes('khailam')
// console.log(exist);


// const friends = ['balam', 'kalam', 'salam', 'gelam', 'pailam']
// if(friends.includes('khailam')){
//     console.log('Party');
    
// }else{
//     console.log('No food. We are fasting' );
    
// }


// const friends = ['balam', 'kalam', 'salam', 'gelam', 'pailam']
// const exist = friends.includes('Gelam')
// console.log(exist);


// includes method gives you either ture or false
// If you want to know the index you can use indexof method

// const friends = ['balam', 'kalam', 'salam', 'gelam', 'pailam']
// const index = friends.indexOf('gelam')
// console.log(index);


// indexOf always return >= 0 if element exist in the array. 
// indexOf will return -1 if elements does not exist in the array

// const friends = ['balam', 'kalam', 'salam', 'gelam', 'pailam']
// const index = friends.indexOf('khailam')
// console.log(index);


// practice 
// const fruits = ['mango', 'banana', 'lichi','apple']
// if(fruits.includes('mango')){
//     console.log('mango ace');
    
// }else{
//     console.log('mango nai gase ud');
    
// }


// const dakNmae = ['Babul','Alif', 'Choton']
// console.log(dakNmae.indexOf('Babul'));


// const friends = ['Rimon', 'Rifat', 'Rajib']
// console.log(friends.indexOf('Rifat'));


// const cities = ['Dhaka', 'Chittagong', 'Sylhet']
// cities.push('rajshahi')
// if(cities.includes('Rajshahi')){
//     console.log('Rajshahi ace');
    
// }else{
//     console.log('Rajshahi nai');
    
// }

// const umberalla = ['meg', 'bristi', 'borsa']
// if(umberalla.includes('bristi')){
//     console.log('I need Umberalla');
    
// }else{
//     console.log('No rain no pain');
    
// }

// const sports = ['Football', 'Cricket', 'Boliball']
// console.log(sports.includes('Badminton'));
