function selectSort(arr) {
    var _a;
    for (var i = 0; i < arr.length - 1; i++) {
        // 当前最小值的索引
        var min = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        _a = [arr[min], arr[i]], arr[i] = _a[0], arr[min] = _a[1];
    }
    return arr;
}
var a = selectSort([1, 2, 3, 7, 8, 0, 5]);
console.log(a);
