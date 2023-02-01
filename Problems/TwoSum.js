// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

const twoSum = (nums, target) => {
  const sol = [];
  const numsHash = []
  for (let m = 0; m < 10; m++) {
    numsHash.push([]);
  }

  for (let i = 0; i < nums.length; i++) {
    let hash = Math.abs(nums[i] % 10);
    let remHash = Math.abs((target - nums[i]) % 10);
    for (let j of numsHash[remHash]) {
      if (target - nums[i] === j.key) {
        sol.push(j.val);
        sol.push(i);
      }
    }
    numsHash[hash].push({key: nums[i], val: i});
  }

  return sol;
};
