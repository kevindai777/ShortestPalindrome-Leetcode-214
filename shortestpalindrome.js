//Objective is, given an input string, to find the number of letters to add to the word
//to make it palindromic and return the new palindrome

let s = "abcd"


//O(n) solution where n is the number of characters in the given string
//We find the number of characters not involved in a possible palindrome,
//reverse them, then put the newly reversed string in the front of our result

let index = 0
    
//Find how many characters are palindromic
for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] == s[index]) {
        index++
    }
}

//Entire string is a palindrome
if (index == s.length) {
    return s
}

//Reverse the remaining non-palindromic characters and put it in the front
let remainingRev = s.substring(index, s.length)
remainingRev = reverse(remainingRev, 0, remainingRev.length - 1)

//Put it together like this:
//Reversed non-palindromic letters, Palindromic letters, Non-palindromic letters
return remainingRev + shortestPalindrome(s.substring(0, index)) + s.substring(index)

function reverse(string, i, j) {
    let tempArr = string.split('')
    while (i < j) {
        let temp = tempArr[i]
        tempArr[i++] = tempArr[j]
        tempArr[j--] = temp
    }
    
    return tempArr.join('')
}