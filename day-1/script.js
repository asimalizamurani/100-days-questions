/*
Find the longest word in the string
----------------------------------------------------------------
Q: Write a function findLongestWord that takes a string as input and returns the longest word in the string. 
If there are multiple longest words, return the first one encountered.

Constraints:
--> The input string may contain alphabetic characters, digits, spaces, and punctuation.
--> The input string is non-empty.
--> The input string may contain multiple words separated by spaces.

Note:
--> If the input string is empty or contains only whitespace, the function should return an false.
--> The function should ignore leading and trailing whitespace when determinig the longest word.
*/ 

const findLongestWord = (str) => {
    if (str.trim().length === 0) { // trim remover the whitespaces
        return false;
    }

    words = str.split(" "); // str.split converts it into a an array.
    words = words.sort((a,b) => b.length - a.length); // sort brings the words in assending order
    console.log(words);
    // We can not use return two times in a function.
    // return words[0];
    // return words.at(-1); // for the last value
  
    // Second way to print the largest word by using reduce
    console.log("Second way to print the largest word")
    let secondWay = words.reduce(
        ((accum, currentWord) => currentWord.length > accum.length ? currentWord : accum),
        ""
    );
    console.log(secondWay);
}

// Checking the largest word in a string
console.log(findLongestWord('This is a acknowlegement book for everyone'));
console.log(findLongestWord('Which is the largest word'));

