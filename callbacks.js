// var arr = ["Alice", "Bob", "Waldo", "Winston"];
// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == "Waldo") {
      var a = arr.indexOf("Waldo");
      found(a);   // execute callback
    }
  }
}

function actionWhenFound(indexOfWaldo) {
  console.log("Found him at " + indexOfWaldo + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
