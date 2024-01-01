/*
  Given two arrays of integers, create a function that concatenates these two arrays 
  and then sorts the resulting array in descending order.
*/
export function concatenateAndSort(arr1: number[], arr2: number[]): number[] {
  const combinedArray = [...arr1, ...arr2];
  return combinedArray.sort((a, b) => b - a);
}

/*
  Given an array of integers 'nums' and an integer 'target', 
  write a function to find all unique pairs in the array that sum up to 'target'.
  Return an array of pairs.
*/
export function findAllPairs(nums: number[], target: number): [number, number][] {
  const result: [number, number][] = [];
  const numSet = new Set<number>();

  for (const currentNumber of nums) {
    const complement = target - currentNumber;

    // Check if the complement exists in the set
    if (numSet.has(complement)) {
      // Ensure the order is sorted for consistency
      const pair: [number, number] = currentNumber < complement
        ? [currentNumber, complement]
        : [complement, currentNumber];

      // Check for uniqueness before adding to the result
      if (!result.some(([a, b]) => a === pair[0] && b === pair[1])) {
        result.push(pair);
      }
    }

    // Add the current number to the set for future lookups
    numSet.add(currentNumber);
  }

  return result;
}

/*
  Given an unsorted array of integers 'nums', 
  write a function to find the length of the longest consecutive elements sequence.
*/
export function longestConsecutiveSequence(nums: number[]): number {
  if (!nums.length) {
    return 0;
}

// Create a Set for faster lookups
const numSet = new Set(nums);

let longestSequence = 0;

for (const num of nums) {
    // Check if the current number is the start of a sequence
    if (!numSet.has(num - 1)) {
        let currentNum = num;
        let currentSequence = 1;

        // Increment currentNum until the consecutive sequence ends
        while (numSet.has(currentNum + 1)) {
            currentNum += 1;
            currentSequence += 1;
        }

        // Update the longest sequence if needed
        longestSequence = Math.max(longestSequence, currentSequence);
    }
}

return longestSequence;
}

/*
  Given an array of integers 'nums' and an integer 'k', 
  write a function to remove all elements that are divisible by 'k' 
  and return the new length of the array.
*/
export function removeDivisibleBy(nums: number[], k: number): number {
  
const originalLength = nums.length
const filteredNumbers = nums.filter((e)=> e % k)

nums.length = 0;
nums.push(...filteredNumbers)

return filteredNumbers.length === originalLength ? originalLength : filteredNumbers.length
}

/*
  Given an array of integers, where every element appears twice except for one,
  write a function to find that single one that does not appear twice.
*/
export function findSingleElement(nums: number[]): number {
  let result = 0;

  for (const num of nums) {
    result ^= num;
  }

  return result;
  // return 0
}
