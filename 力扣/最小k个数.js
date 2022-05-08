function getLeastNumbers(arr, k) {
    function quickSort(arr, begin, end) {
        var _a, _b;
        var l = begin, r = end;
        var temp = arr[begin];
        while (l < r) {
            while (l < r && arr[l] <= temp)
                l++;
            while (l < r && arr[r] >= temp)
                r--;
            _a = [arr[r], arr[l]], arr[l] = _a[0], arr[r] = _a[1];
        }
        _b = [arr[l], arr[begin]], arr[begin] = _b[0], arr[l] = _b[1];
        return begin;
    }
    var start = 0, end = arr.length - 1;
    var index = quickSort(arr, start, end);
    while (index !== k) {
        if (index < k) {
            start = index + 1;
            index = quickSort(arr, start, end);
        }
        else {
            end = index - 1;
            index = quickSort(arr, start, end);
        }
    }
    return arr.slice(0, k);
}
var a = getLeastNumbers([3, 2, 1], 2);
console.log(a);
