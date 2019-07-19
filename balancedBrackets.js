function balancedBrackets(string) {
   // Write your code here.
   let stack = [];
   const left = /[\{\[\(]/;
   const right = /[\}\)\]]/;
   for (let i = 0; i < string.length; i++) {
      if (string[i].match(left)) {
         stack.push(string[i]);
      } else if (string[i].match(right)) {
         if (string[i] === ')') {
            if (stack.pop() !== '(') return false;
         } else if (string[i] === '}') {
            if (stack.pop() !== '{') return false;
         } else if (string[i] === ']') {
            if (stack.pop() !== '[') return false;
         }
      }
      console.log(stack);
   }
   if (stack.length) return false;
   return true;
}

console.log(balancedBrackets('(((((((((([[[[[[]]]]]]])))))))))'));
