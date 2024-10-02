/**
 * Savoir quel est le quartier le plus populaire 
 * @param {string[]} places
 * @returns {string}
 */

function getMostPopularPlaces(places){
    let tableau=[]
    
    for(let i=0; i<places.length;i++){
        if(places[i]<=places){
            tableau.push(places[i])
        }
    }
    return tableau;
}
console.log(getMostPopularPlaces(["Analamahitsy", "Itaosy", "Itaosy", "Analamhitsy", "Itaosy", "Behoririka", "Itaosy"]));