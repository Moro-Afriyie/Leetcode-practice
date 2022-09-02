/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	const NUMBERS_HASH = {};

	for (let i = 0; i < nums.length; i++) {
		if (NUMBERS_HASH[nums[i]] >= 0 && nums[NUMBERS_HASH[nums[i]]] + nums[i] === target) {
			return [NUMBERS_HASH[nums[i]], i];
		}
		NUMBERS_HASH[nums[i]] = i;
	}

	for (let i = 0; i < nums.length; i++) {
		if (NUMBERS_HASH[target - nums[i]] && NUMBERS_HASH[target - nums[i]] !== i) {
			return [NUMBERS_HASH[nums[i]], NUMBERS_HASH[target - nums[i]]];
		}
	}
};
