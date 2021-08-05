//Given an array nums. Return the running sum of nums.

// 
/* var runningSum = function(nums) {
    array = []
    for (let i in nums) {
        const sliceArray = nums.slice(0, parseInt(i) + 1)
        const sum = sliceArray.reduce((result, number) => result + number)
        array.push(sum)
    }
    console.log(array)
    return array
} */

/* var runningSum = function(nums){
    const array = nums.map((value,index) => nums.slice(0,index+1))
    const sum = array.map(arr => arr.reduce((result, number) => result + number))
    return sum
  } */

var runningSum = function(nums) {
    let val = 0
    return nums.map(arr => val = arr + val)
}

runningSum([1, 2, 3, 4])