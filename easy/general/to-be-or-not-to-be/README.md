# To Be Or Not To Be

🔗 [Problem Link](https://leetcode.com/problems/to-be-or-not-to-be/)
📊 Difficulty: easy
📂 Category: General

## 📝 Description
Write a function&nbsp;expect that helps developers test their code. It should take in any value&nbsp;val&nbsp;and return an object with the following two functions.


	toBe(val)&nbsp;accepts another value and returns&nbsp;true&nbsp;if the two values&nbsp;===&nbsp;each other. If they are not equal, it should throw an error&nbsp;&quot;Not Equal&quot;.
	notToBe(val)&nbsp;accepts another value and returns&nbsp;true&nbsp;if the two values&nbsp;!==&nbsp;each other. If they are equal, it should throw an error&nbsp;&quot;Equal&quot;.


&nbsp;
Example 1:


Input: func = () =&gt; expect(5).toBe(5)
Output: {&quot;value&quot;: true}
Explanation: 5 === 5 so this expression returns true.


Example 2:


Input: func = () =&gt; expect(5).toBe(null)
Output: {&quot;error&quot;: &quot;Not Equal&quot;}
Explana...