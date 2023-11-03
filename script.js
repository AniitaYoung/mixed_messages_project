  //Create four objects with three differents strings
  //Maybe your phrases that remain the same are, I know that...,If you feel...don't forget..., 
let object0 = {
        string1: 'you have got this',
        string2: 'sad',
        string3: 'that sloths mistake their arms for branches and sometimes fall out of the trees because of this!'
    };

let object1 = {
        string1: 'everyday can be challenging',
        string2: 'defeated',
        string3: 'to take a break and practice self compassion'
    };

    let object2 = {
        string1: 'blue skies bring you joy',
        string2: 'happy',
        string3: 'to do a little dance to celebrate'
    };

let object3 = {
        string1: 'potatoes are so incredible',
        string2: 'hungry',
        string3: 'you can always pop a potatoe waffle in your airfryer!'
    };

//Generate a number between 0 - 3
const generateMessageNumber = () => {
    return Math.floor(Math.random() * 4); 
  };

  //Create a switch statement using the random number between 0-3 to list all strings in an object and add in the const phrases
const randomNumber = generateMessageNumber();
  if (randomNumber === 0) {
    console.log("I know that " + object0.string1 + ", If you feel " + object0.string2 + " don't forget " + object0.string3);
  } else if (randomNumber === 1) {
    console.log("I know that " + object1.string1 + ", If you feel " + object1.string2 + " don't forget " + object1.string3);
  } else if (randomNumber === 2) {
    console.log("I know that " + object2.string1 + ", If you feel " + object2.string2 + " don't forget " + object2.string3);
  } else if (randomNumber === 3) {
    console.log("I know that " + object3.string1 + ", If you feel " + object3.string2 + " don't forget " + object3.string3);
  } else {
    console.log("This is weird, this number does not exist in this program");
  };