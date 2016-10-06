// var arr = ["Alice", "Bob", "Waldo", "Winston"];
// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function actionWhenFound(value, index)) {
    if (value === "Waldo") {
      found(index);   // execute callback
    }
  }
}

function actionWhenFound(indexOfWaldo) {
  console.log("Found him at " + indexOfWaldo + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);