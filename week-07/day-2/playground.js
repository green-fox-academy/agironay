//accessing data from an object

let myCat = {
    'name': 'Meowsalot',
    'species': 'cat';
    'favFood': 'tuna'
}
myCat.name
myCat.favFood

//accessing data from an array
let myFavColors = ['blue', 'green', 'purple'];
myFavColors[1];

//combining the two → JSON!

let thePets = [
    {
        'name': 'Meowsalot',
        'species': 'cat',
        'favFood': 'tuna'
    },
    {
        'name': 'Barky',
        'species': 'dog',
        'favFood': 'carrots'
    }
]
//to access carrot:
thePets[1].favFood