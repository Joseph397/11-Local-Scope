//Local Scope
// can not be accessed from outside code blocks
// if - NOT VARkl


// let name = 'bobo';


// function calculate(){
//     const name = 'john'; // dosent effect the global name because it is in the function
//     const age = 25;
//     // code goes here

    
// }

// // calculate();
//  console.log(age);// results in error undefined, can not be accessed outside of the function, likewise 

// if(true){
//     const name = 'john'; // also does not effect the global name
// }


// console.log(`my name is ${name} and I'm awesome`);

//=====================================================================>

// let name = 'bobo';


// function calculate(){
//     const name = 'john'; 
//     const age = 25;
//     // code goes here
//     becomesGlobal = 'global variable'; // notice no keyword needed
// }

// calculate();
// console.log(becomesGlobal); 

// if(true){
//     const name = 'john';
// }


// console.log(`my name is ${name} and I'm awesome`);

//===================================================================>

let name = 'bobo';


function calculate(){
    const name = 'john'; 
    const age = 25;
    // code goes here
    becomesGlobal = 'global variable'; // notice no keyword needed
}

calculate();
console.log(becomesGlobal); 

if(true){
    const name = 'john';
}

{ // curly braces count as code blocks
    const name ='john';        
    const special = 'special'
    
}


console.log(special); // error special is not globally defined

console.log(`my name is ${name} and I'm awesome`);
