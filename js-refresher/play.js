var name = 'Steve';
var age = 45;
var hasHobbies = true;

function summarizeUser(userName, userAge, userHasHobby) {
    return 'Name is ' + userName + ', age is ' + userAge + ', and ' + userName + ' has hobbies is ' + userHasHobby + '.'
}

console.log(summarizeUser(name, age, hasHobbies))