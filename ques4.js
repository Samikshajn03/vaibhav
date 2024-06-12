function palindrome(string){
   const len = string.length;
   for (let i=0; i< len/2; i++) {
   if(string[i]=== string[len-i-1] )
    return 'it is a palindrome';
   else
    return 'it is not a palindrome';
   }
}
 
const string = prompt("enter a string:");
const ans = palindrome(string);
console.log(ans);