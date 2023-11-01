//Generate a number between 0 - 3
const generateMessageNumber = () => {
    return Math.floor(Math.random() * 4); 
  };

  //Create four objects with three differents strings
  //Maybe your phrases that remain the same are, I know that...,If you feel...don't forget..., 
const object = [
    {
        string1: 'you have got this',
        string2: 'sad',
        string3: 'that sloths mistake their arms for branches and sometimes fall out of the trees because of this!'
    },

    {
        string1: 'everyday can be challenging',
        string2: 'defeated',
        string3: 'to take a break and practice self compassion'
    },

    {
        string1: 'blue skies bring you joy',
        string2: 'happy',
        string3: 'to do a little dance to celebrate'
    },

    {
        string1: 'potatoes are so incredible',
        string2: 'hungry',
        string3: 'you can always pop a potatoe waffle in your airfryer!'
    }
];

  //Create a switch statement using the random number between 0-3 to list all strings in an object and add in the const phrases
switch (generateMessageNumber) {
    case 0:
        console.log(object[0]`I know that ${string1}, If you feel ${string2} don't forget ${string3}`)
        break;
    case 1:
        console.log(object[1]`I know that ${string1}, If you feel ${string2} don't forget ${string3}`)
        break;
    case 2:
        console.log(object[2]`I know that ${string1}, If you feel ${string2} don't forget ${string3}`)
        break;
    case 3:
        console.log(object[3]`I know that ${string1}, If you feel ${string2} don't forget ${string3}`)
        break;
    default:
        console.log(`This is weird, this number does not exist in this program`)
        break;
};