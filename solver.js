var nums = [];
var result = 0;
var operations = {
    0: "+",
    1: "-",
    2: "*",
    3: "/",
}

function main() {
    nums[0] = prompt("Enter first number");
    nums[1] = prompt("Enter second number");
    nums[2] = prompt("Enter third number");
    nums[3] = prompt("Enter fourth number");
    convert(); //I'm not going to parameterize this function and make is usable everywhere.
    solve();
}

function convert() {
    for (var i = 0; i < nums.length; i++) {
        if (nums[i].includes("/")) {
            var tmpArray = nums[i].split("/");
            tmpArray[0] = parseInt(tmpArray[0], 10);
            tmpArray[1] = parseInt(tmpArray[1], 10);
            nums[i] = tmpArray[0] / tmpArray[1];
        } else {
            nums[i] = Number(nums[i]); //nums[i] could be float or int
        }
    }
}

function solve() {
    var valids = [];
    for (var i = 0; i < 4; i++) { //starting number
        for (var j = 0; j < 4; j++) { //second number
            for (var k = 0; k < 4; k++) { //third number
                for (var l = 0; l < 4; l++) { //fourth number
                    if (!(l === i || l === j || l === k || k === j || k === i || j === i)) {
                        for (var a = 0; a < 4; a++) { //first operation
                            for (var b = 0; b < 4; b++) {
                                for (var c = 0; c < 4; c++) {
                                    if (a === 0) result = nums[i] + nums[j];
                                    if (a === 1) result = nums[i] - nums[j];
                                    if (a === 2) result = nums[i] * nums[j];
                                    if (a === 3) result = nums[i] / nums[j];
                                    if (b === 0) result += nums[k];
                                    if (b === 1) result -= nums[k];
                                    if (b === 2) result *= nums[k];
                                    if (b === 3) result /= nums[k];
                                    if (c === 0) result += nums[l];
                                    if (c === 1) result -= nums[l];
                                    if (c === 2) result *= nums[l];
                                    if (c === 3) result /= nums[l];
                                    console.log("Got solution " + result + " with " + a + " " + b + " " + c + " and indexes " + i + " " + j + " " + k + " " + l);
                                    if (result === 24) {
                                        alert("Result found! " + nums[i] + operations[a] + nums[j] + operations[b] + nums[k] + operations[c] + nums[l]);
                                        return;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
