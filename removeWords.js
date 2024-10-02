/**
 * Enlenver les mots dans un tableau
 * @param {string} original
 * @param {string} wordsToRemove
 * @returns {string} 
 */

function removeWords(original, wordsToRemove) {
    let result = '';

    for (let i = 0; i < original.length; i++) {
        const char = original[i];
      
        if (char !== wordsToRemove) {
            result += char;
        }
    }

    return result;
}
const result = removeWords("Hello, Java", "java");
console.log(result); 