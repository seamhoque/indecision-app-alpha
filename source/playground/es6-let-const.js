var nameVar = "Mazharul";
nameVar = "Hoque"
console.log ('nameVar',nameVar);

let nameLet = "Marla";
nameLet = "Singer";
console.log('nameLet', nameLet);

const nameConst = "Tylor";
console.log("nameConst", nameConst);

var fullName = "Mazharul  Hoque";

if(fullName){
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}