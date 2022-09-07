const PLANE = require('../1.classes/classPlane');



let globalListOfPlanes = [];
for (let i = 1; i < 11; i++) {
    globalListOfPlanes = [...globalListOfPlanes, new PLANE('PLANE' + i)];
}
//globalListOfPlanes.forEach(e => Object.freeze(e));
Object.freeze(globalListOfPlanes); //no more push or pop to array but can change properties within the objects
//console.log(globalListOfPlanes);
//let copyOfGlobalListOfPlanes = ["a"];

//const copyOfGlobalListOfPlanes = [...globalListOfPlanes];//cloning the array as the landAPlane function makes changes in plane.landedAt property hence changing the array.




// copyOfGlobalListOfPlanes.forEach(e => console.log(e));
// console.log(copyOfGlobalListOfPlanes.length);
// copyOfGlobalListOfPlanes.splice(0, 5);
// copyOfGlobalListOfPlanes.forEach(e => console.log(e));
// console.log(copyOfGlobalListOfPlanes.length);

globalListOfPlanes.forEach(e => console.log(e));
// console.log(globalListOfPlanes.length);


console.log(globalListOfPlanes[2].landedAt);

copyOfGlobalListOfPlanes.forEach(e => console.log(e));