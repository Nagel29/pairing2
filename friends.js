var numbers = [5, 15, 20, 25, 30, 35, 40, 45]

function overThirty(nums) {
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] > 30) {
      console.log(nums[i]);
    }
  }
}

function underSixty(nums) {
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] < 60) {
      console.log(nums[i]);
    }
  }
}

overThirty(numbers);
underSixty(numbers);
