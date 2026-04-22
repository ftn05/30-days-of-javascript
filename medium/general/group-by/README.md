# Group By

🔗 [Problem Link](https://leetcode.com/problems/group-by/)
📊 Difficulty: medium
📂 Category: General

## 📝 Description
Write code that enhances all arrays such that you can call the&nbsp;array.groupBy(fn)&nbsp;method on any array and it will return a grouped&nbsp;version of the array.

A grouped array is an object where each&nbsp;key&nbsp;is&nbsp;the output of fn(arr[i]) and each value is an array containing all items in the original array which generate that key.

The provided callback&nbsp;fn&nbsp;will accept an item in the array and return a string key.

The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.

Please solve it without lodash&#39;s&nbsp;_.groupBy function.

&nbsp;
Example 1:


Input: 
array = [
&nbsp; {&quot;id&quot;:&quot;1&quot;},
&nbsp; {&quot;id&quot;:&quot;1&quot;},
&nbsp; {&quot;id&quot;:&quot;2&quot;}
], 
fn = function (item)...