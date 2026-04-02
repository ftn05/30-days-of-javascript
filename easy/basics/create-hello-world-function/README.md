# Create Hello World Function

🔗 [Problem Link](https://leetcode.com/problems/create-hello-world-function/)
📊 Difficulty: easy
📂 Category: Basics

## 📝 Description
Write a function&nbsp;createHelloWorld.&nbsp;It should return a new function that always returns&nbsp;&quot;Hello World&quot;.
&nbsp;
Example 1:


Input: args = []
Output: &quot;Hello World&quot;
Explanation:
const f = createHelloWorld();
f(); // &quot;Hello World&quot;

The function returned by createHelloWorld should always return &quot;Hello World&quot;.


Example 2:


Input: args = [{},null,42]
Output: &quot;Hello World&quot;
Explanation:
const f = createHelloWorld();
f({}, null, 42); // &quot;Hello World&quot;

Any arguments could be passed to the function but it should still always return &quot;Hello World&quot;.


&nbsp;
Constraints:


	0 &lt;= args.length &lt;= 10