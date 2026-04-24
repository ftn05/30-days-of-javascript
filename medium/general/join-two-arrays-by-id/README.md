# Join Two Arrays by ID

🔗 [Problem Link](https://leetcode.com/problems/join-two-arrays-by-id/)
📊 Difficulty: medium
📂 Category: General

## 📝 Description
Given two arrays arr1 and arr2, return a new&nbsp;array joinedArray. All the objects in each&nbsp;of the two inputs arrays will contain an&nbsp;id&nbsp;field that has an integer value.&nbsp;

joinedArray&nbsp;is an array formed by merging&nbsp;arr1 and arr2 based on&nbsp;their id&nbsp;key. The length of&nbsp;joinedArray should be the length of unique values of id. The returned array should be sorted in&nbsp;ascending&nbsp;order based on the id&nbsp;key.

If a given&nbsp;id&nbsp;exists in one array but not the other, the single object with that&nbsp;id should be included in the result array without modification.

If two objects share an id, their properties should be merged into a single&nbsp;object:


	If a key only exists in one object, that single key-value pair should be included in the...