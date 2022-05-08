function bubbleSort(arr) {
    var _a;
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                _a = [arr[j + 1], arr[j]], arr[j] = _a[0], arr[j + 1] = _a[1];
            }
        }
    }
    return arr;
}
var result2 = bubbleSort([5, 6, 8, 9, 4, 4, 6, 7]);
console.log(result2);
