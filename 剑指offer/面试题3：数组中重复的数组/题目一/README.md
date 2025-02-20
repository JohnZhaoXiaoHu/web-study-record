# 题目一：找出数组中重复的数字
在一个长度为n的数组里面的所有数字都在 0~1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字
## 解法1
解决这个问题的一个简单的方法就是先把输入的数组排序，从排序的数组中找出重复的数字是一件很容易的事情，只需要从头到尾扫描排序后的数组就可以了。排序一个长度为n的数组需要 O(nlogn)的时间
```js
const findCoverNum = function(arr) {
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if( arr[i] > arr[j] ) {
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }            
        }
    }

    for (let i = 0; i < arr.length-1; i++) {
        if(arr[i] === arr[i+1]) {
            return arr[i]
        }        
    }
    return null;
}
```
## 解法2 
可以利用哈希表来解决这个问题。从头到尾按顺序扫描数组的每个数字，每扫描到一个数字的时候，都可以用O(1) 的时间来判断哈希表里是否已经包含了该数字，如果哈希表里面没有这个数字，就把它加入哈希表。如果哈希白哦里面还没有这个数字，就把它加入哈希表。如果哈希表里面已经存在该数字，就找到一个重复的数字。这个算法的时间复杂度是 O(n), 但它提高时间效率是以一个大小为 O(n) 的哈希表为代价的。
```js
const findCoverNum = function(arr) {
    let hash = {};
    for (let i = 0; i < arr.length; i++) {
        if(hash[arr[i]]){
            return arr[i];
        }else{
            hash[arr[i]] = true;
        }        
    }
    return null;
}
```
## 解法3
我们注意到数组中的数字都在 0~n-1 的范围内，如果这个数组中没有重复的数字，那么当数组排序之后数字 i 将出现在下标为 i 的位置。由于数组中有重复的数字，那么有些位置可能存在多个数字，也有些位置没有数字。
那么现在想象一下，我们将数组进行重排。从头到尾依次扫描这个数组中的每个数字，当扫描到下标为i的数字时，首先比较这个数字（用m表示）是不是等于下标i，如果是，就接着扫描下一个数字，如果不是，则再拿它和下标为m 的数字进行交换。如果它和第 m 个数字相等，就找到了一个重复的数字（该数字在下标为i和m的位置都出现了）；如果它和第m个数字不相等，就把第i个数字和第m个数字交换，把m方法属于他的位置，接下来重复这个比较
以数组[2, 3, 1, 0, 2, 5, 3]为例来分析找到重复数字的步骤。
[2, 3, 1, 0, 2, 5, 3] -> [1, 3, 2, 0, 2, 5, 3]     i=0  m=2

[1, 3, 2, 0, 2, 5, 3] -> [3, 1, 2, 0, 2, 5, 3]     i=0  m=1

[3, 1, 2, 0, 2, 5, 3] -> [0, 1, 2, 3, 2, 5, 3]     i=0  m=3

[0, 1, 2, 3, 2, 5, 3] -> [0, 1, 2, 3, 2, 5, 3]     i->0->1->2->3->4 m=2

```js
const findCoverNum = function(arr) {
    for (let i = 0; i < arr.length; ) {
        if(arr[i]===i) {
            i++;
        }else if(arr[i] !== arr[arr[i]]){
            let temp = arr[i];
            arr[i] = arr[arr[i]];
            arr[temp] = temp;
        }else {
            return arr[i];
        }
    }
    return null;
}
```

## 测试用例
- 长度为n的数组里面包含一个或多个重复的数字
- 数组中不包含重复的数字
- 无效输入测试用例（输入空指针；长度为n的数组中包含0~n-1之外的数字）
```js
const res1 = findCoverNum([2, 1, 5, 2, 6, 9, 8, 1, 2, 3]);
const res2 = findCoverNum([0, 1, 2, 3, 4, 5, 6, 7]);
const res3 = findCoverNum([]);
const res4 = findCoverNum([0, 2, 3, 11, 11]);

console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);
```
