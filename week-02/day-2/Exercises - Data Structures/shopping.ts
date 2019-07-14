//Create a list with the following items.
//Eggs, milk, fish, apples, bread and chicken
//Create an application which solves the following problems.
//Do we have milk on the list?
//Do we have bananas on the list?

let shoppingList: string[] = ['eggs', 'milk', 'fish', 'apples', 'bread', 'chicken'];

function doesItHave (thing: string): boolean{
    return shoppingList.includes('milk');
}

console.log(doesItHave('milk'));

function doesItHave2 (thing: string): boolean{
    return shoppingList.includes('banana');
}

console.log(doesItHave2('banana'));
