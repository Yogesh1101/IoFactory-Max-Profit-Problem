Array.prototype.max = function () {
  return Math.max.apply(null, this);
};

Array.prototype.min = function () {
  return Math.min.apply(null, this);
};

calculateMaxProfit(13); // input

function calculateMaxProfit(n) {
  let data = {
    units: [5, 4, 10],
    earnings: [1500, 1000, 3000],
  };

  var minUnit = data.units.min(),
    maxEarning,
    displayOutput,
    totalOutputArray = [],
    totalEarningArray = [],
    result = [],
    number = 1,
    output = "";

  data.units.map((value, index) => {
    var input = n,
      earnings = 0,
      tempArray = [];
    while (input >= minUnit) {
      input -= value;
      if (input >= 0) {
        earnings += input * data.earnings[index];
        tempArray.push(input);
      }
    }
    totalEarningArray.push(earnings);
    result.push(tempArray);
  });

  maxEarning = totalEarningArray.max();

  totalEarningArray.map((value, index) => {
    var tempArray = [];
    if (maxEarning === value) {
      switch (index) {
        case 0:
          tempArray.push(result[index].length);
          break;
        case 1:
          tempArray.push(result[index].length);
          break;
        case 2:
          tempArray.push(result[index].length);
          break;
        default:
          tempArray.push(0);
          break;
      }
    } else {
      tempArray.push(0);
    }
    totalOutputArray.push(tempArray);
  });

  displayOutput = totalOutputArray.join().split(",").map(Number);
  displayOutput.map((value, index) => {
    if (value !== 0) {
      output += `${number}. `;
      switch (index) {
        case 0:
          output += `T: ${value} P: 0 C: 0`;
          break;
        case 1:
          output += `T: 0 P: ${value} C: 0`;
          break;
        case 2:
          output += `T: 0 P: 0 C: ${value}`;
          break;
        default:
          output += "";
          break;
      }
      output += "\n";
      number++;
    }
  });
  console.log(`Time Unit: ${n}`);
  console.log(`Earnings: $${maxEarning}`);
  console.log(`Solutions `);
  console.log(output);
}
