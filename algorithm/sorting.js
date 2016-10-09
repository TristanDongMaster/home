/*
http://javascript.ruanyifeng.com/library/sorting.html
*/
// 1. 冒泡排序（Bubble Sort）
function swap(myArray, p1, p2){
  var temp = myArray[p1];
  myArray[p1] = myArray[p2];
  myArray[p2] = temp;
}

function bubbleSort(myArray){
  var len = myArray.length;
  var i;
  var j;
  var stop;

  for (i = 0; i < len - 1; i++){
    for (j = 0, stop = len - 1 - i; j < stop; j++){
      if (myArray[j] > myArray[j + 1]){
        swap(myArray, j, j + 1);
      }
    }
  }

  return myArray;
}

// 2. 选择排序（Selection Sort）

function swap(myArray, p1, p2){
    var temp = myArray[p1];
    myArray[p1] = myArray[p2];
    myArray[p2] = temp;
}

function selectionSort(myArray){

    var len = myArray.length,
        min;

    for (i=0; i < len; i++){

        // 将当前位置设为最小值
        min = i;

        // 检查数组其余部分是否更小
        for (j=i+1; j < len; j++){
            if (myArray[j] < myArray[min]){
                min = j;
            }
        }

        // 如果当前位置不是最小值，将其换为最小值
        if (i != min){
            swap(myArray, i, min);
        }
    }

    return myArray;
}

// 3. 插入排序（insertion sort）

function insertionSort(myArray) {

    var len     = myArray.length,     // 数组的长度
        value,                      // 当前比较的值
        i,                          // 未排序部分的当前位置
        j;                          // 已排序部分的当前位置
    
    for (i=0; i < len; i++) {
    
        // 储存当前位置的值
        value = myArray[i];
        
        /*
         * 当已排序部分的当前元素大于value，
         * 就将当前元素向后移一位，再将前一位与value比较
         */
        for (j=i-1; j > -1 && myArray[j] > value; j--) {
            myArray[j+1] = myArray[j];
        }

        myArray[j+1] = value;
    }
    
    return myArray;
}

// 4.合并排序（Merge sort） 

function merge(left, right){
    var result  = [],
        il      = 0,
        ir      = 0;

    while (il < left.length && ir < right.length){
        if (left[il] < right[ir]){
            result.push(left[il++]);
        } else {
            result.push(right[ir++]);
        }
    }

    return result.concat(left.slice(il)).concat(right.slice(ir));
}

function mergeSort(myArray){

    if (myArray.length < 2) {
        return myArray;
    }

    var middle = Math.floor(myArray.length / 2),
        left    = myArray.slice(0, middle),
        right   = myArray.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function mergeSort(myArray){

    if (myArray.length < 2) {
        return myArray;
    }

    var middle = Math.floor(myArray.length / 2),
        left    = myArray.slice(0, middle),
        right   = myArray.slice(middle),
        params = merge(mergeSort(left), mergeSort(right));
    
    // 在返回的数组头部，添加两个元素，第一个是0，第二个是返回的数组长度
    params.unshift(0, myArray.length);

	// splice用来替换数组元素，它接受多个参数，
	// 第一个是开始替换的位置，第二个是需要替换的个数，后面就是所有新加入的元素。
	// 因为splice不接受数组作为参数，所以采用apply的写法。
	// 这一句的意思就是原来的myArray数组替换成排序后的myArray
    myArray.splice.apply(myArray, params);

	// 返回排序后的数组
    return myArray;
}

// 5. 快速排序（quick sort）

function swap(myArray, firstIndex, secondIndex){
    var temp = myArray[firstIndex];
    myArray[firstIndex] = myArray[secondIndex];
    myArray[secondIndex] = temp;
}

function partition(myArray, left, right) {

    var pivot   = myArray[Math.floor((right + left) / 2)],
        i       = left,
        j       = right;


    while (i <= j) {

        while (myArray[i] < pivot) {
            i++;
        }

        while (myArray[j] > pivot) {
            j--;
        }

        if (i <= j) {
            swap(myArray, i, j);
            i++;
            j--;
        }
    }

    return i;
}

function quickSort(myArray, left, right) {

	if (myArray.length < 2) return myArray;

	left = (typeof left !== "number" ? 0 : left);

	right = (typeof right !== "number" ? myArray.length - 1 : right);

	var index  = partition(myArray, left, right);

	 if (left < index - 1) {
            quickSort(myArray, left, index - 1);
     }

	 if (index < right) {
            quickSort(myArray, index, right);
      }

	 return myArray;

}