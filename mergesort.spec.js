describe('Split Array function', function() {
   it('is able to split an array into two halves', function() {
      const arr = [1, 2, 3, 4, 5];
      expect(split(arr)).toEqual([[1, 2], [3, 4, 5]]);
   });
});
describe('Merge array function', function() {
   it('is able to merge and sort two sorted arrays', function() {
      const arr1 = [1, 2, 3, 4];
      const arr2 = [2, 5, 6];
      expect(mergeArrays(arr1, arr2)).toEqual([1, 2, 2, 3, 4, 5, 6]);
   });
});
describe('Merge sort function', function() {
   it('should sort an unsorted array', function() {
      const unsorted = [3, 4, 1, 6, -10, 23];
      expect(mergeSort(unsorted)).toEqual([-10, 1, 3, 4, 6, 23]);
   });
   it('should sort an array with an even number of elements', function() {
      const unsorted = [3, 4, 1, 6, -10, 23];
      expect(mergeSort(unsorted)).toEqual([-10, 1, 3, 4, 6, 23]);
   });
   it('should sort an array with an odd number of elements', function() {
      const unsorted = [3, 4, 1, 6, -10, 23, 15];
      expect(mergeSort(unsorted)).toEqual([-10, 1, 3, 4, 6, 15, 23]);
   });
   it('should sort an array with zeroes', function() {
      const unsorted = [3, 4, 1, 6, -10, 23, 15, 0, 0];
      expect(mergeSort(unsorted)).toEqual([-10, 0, 0, 1, 3, 4, 6, 15, 23]);
   });
});
