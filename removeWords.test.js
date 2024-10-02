const { expect } = require('chai');
const cutIt = require('/PROG1/removeWords.js');

describe('Tests pour la fonction removeWOrds', function() {
    it('devrait supprimer les « ceci », « un »', function() {
        const result = removeWords(" Hello, ceci est un test », [« ceci », « un »]");
        expect(result).to.equal("Hello, est test");
    });

    it('devrait retourner la même phrase si la lettre est sensible à la casse', function() {
        const result = removeWords("Hello Java", "java");
        expect(result).to.equal("Hello Java");
    });
});