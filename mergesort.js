function mergeSort(arr) {
   if (arr.length <= 1) return arr;
   const left = split(arr)[0];
   const right = split(arr)[1];
   return mergeArrays(mergeSort(left), mergeSort(right));
}
function split(arr) {
   const middle = Math.floor(arr.length / 2);
   const leftHalf = arr.slice(0, middle);
   const rightHalf = arr.slice(middle);
   return [leftHalf, rightHalf];
}
function mergeArrays(arr1, arr2) {
   let pointer1 = 0;
   let pointer2 = 0;
   let result = [];
   while (pointer1 + pointer2 < arr1.length + arr2.length) {
      if (pointer1 >= arr1.length) {
         result.push(arr2[pointer2]);
         pointer2++;
      } else if (pointer2 >= arr2.length) {
         result.push(arr1[pointer1]);
         pointer1++;
      } else {
         if (arr1[pointer1] <= arr2[pointer2]) {
            result.push(arr1[pointer1]);
            pointer1++;
         } else {
            result.push(arr2[pointer2]);
            pointer2++;
         }
      }
   }
   return result;
}
