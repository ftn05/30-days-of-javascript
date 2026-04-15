# Interval Cancellation

🔗 [Problem Link](https://leetcode.com/problems/interval-cancellation/)
📊 Difficulty: easy
📂 Category: General

## 📝 Description
Given a function fn, an array of arguments&nbsp;args, and&nbsp;an interval time t, return a cancel function cancelFn.

After a delay of&nbsp;cancelTimeMs, the returned cancel function&nbsp;cancelFn&nbsp;will be invoked.


setTimeout(cancelFn, cancelTimeMs)


The function fn should be called with args immediately and then called again every&nbsp;t milliseconds&nbsp;until&nbsp;cancelFn&nbsp;is called at cancelTimeMs ms.

&nbsp;
Example 1:


Input: fn = (x) =&gt; x * 2, args = [4], t = 35
Output: 
[
   {&quot;time&quot;: 0, &quot;returned&quot;: 8},
   {&quot;time&quot;: 35, &quot;returned&quot;: 8},
   {&quot;time&quot;: 70, &quot;returned&quot;: 8},
   {&quot;time&quot;: 105, &quot;returned&quot;: 8},
   {&quot;time&quot;: 140, &quot;returned&quot;: 8},
   {&quot;time&quot;: 175, &quot;retu...