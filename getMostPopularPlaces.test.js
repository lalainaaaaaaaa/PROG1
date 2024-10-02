const { expect } = require('chai');
const getBestGrades = require('/PROG1/getMostPopularPlaces.js'); 

describe('Tests pour la fonction getMostPopularPlaces', function() {
    it('devrait retourner les deux  quartiers les plus populaires', function() {
        const result = getBestGrades(["Analamahitsy", "Itaosy", "Behoririka", "Itaosy", "Itaosy", "Analamahitsy"])
        expect(result).to.deep.equals("Analamahitsy Itaosy");
    });
});