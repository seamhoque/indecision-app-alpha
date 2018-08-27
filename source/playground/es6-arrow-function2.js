const user = {
    name: "Mazharul",
    cities: ["DHAKA","Madrid","Manchester"],
    printPlacesLived(){
        
        const cityMesseges = this.cities.map((cities)=>{
            return this.name + 'has live in ' + cities;
        })

        return cityMesseges;

    }
}
//console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1,2,3,4,5,6,7,8,9,10],
    multiplyBy : 18,

    multiply(){
        const table = this.numbers.map((number)=>{
           return this.multiplyBy + ' times ' + number + ' is ' + number * this.multiplyBy;
           //return number * this.multiplyBy; 
        })

        return table;
    }
    
}
console.log(multiplier.multiply());