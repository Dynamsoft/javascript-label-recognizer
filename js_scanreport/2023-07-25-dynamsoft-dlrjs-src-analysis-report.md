# Code analysis
## dynamsoft-dlrjs-src 
#### Version 1.0.0 

**By: default**

*Date: 2023-07-25*

## Introduction
This document contains results of the code analysis of dynamsoft-dlrjs-src



## Configuration

- Quality Profiles
    - Names: Sonar way [TypeScript]; 
    - Files: AX9sVF1puUAFS9ToL78Z.json; 


 - Quality Gate
    - Name: Sonar way
    - File: Sonar way.xml

## Synthesis

### Analysis Status

Reliability | Security | Security Review | Maintainability |
:---:|:---:|:---:|:---:
C | A | A | A |

### Quality gate status

| Quality Gate Status | OK |
|-|-|

Metric|Value
---|---
Reliability Rating on New Code|OK
Security Rating on New Code|OK
Maintainability Rating on New Code|OK
Duplicated Lines (%) on New Code|OK


### Metrics

Coverage | Duplications | Comment density | Median number of lines of code per file | Adherence to coding standard |
:---:|:---:|:---:|:---:|:---:
0.0 % | 8.4 % | 17.7 % | 10.0 | 98.9 %

### Tests

Total | Success Rate | Skipped | Errors | Failures |
:---:|:---:|:---:|:---:|:---:
0 | 0 % | 0 | 0 | 0

### Detailed technical debt

Reliability|Security|Maintainability|Total
---|---|---|---
0d 0h 5min|-|3d 1h 48min|3d 1h 53min


### Metrics Range

\ | Cyclomatic Complexity | Cognitive Complexity | Lines of code per file | Coverage | Comment density (%) | Duplication (%)
:---|:---:|:---:|:---:|:---:|:---:|:---:
Min | 0.0 | 0.0 | 4.0 | 0.0 | 0.0 | 0.0
Max | 914.0 | 1517.0 | 3525.0 | 0.0 | 69.0 | 10.9

### Volume

Language|Number
---|---
TypeScript|3525
Total|3525


## Issues

### Issues count by severity and types

Type / Severity|INFO|MINOR|MAJOR|CRITICAL|BLOCKER
---|---|---|---|---|---
BUG|0|0|1|0|0
VULNERABILITY|0|0|0|0|0
CODE_SMELL|9|52|53|20|0


### Issues List

Name|Description|Type|Severity|Number
---|---|---|---|---
Loops with at most one iteration should be refactored|A loop with at most one iteration is equivalent to the use of an if statement to conditionally execute one piece of code. No developer <br /> expects to find such a use of a loop statement. If the initial intention of the author was really to conditionally execute one piece of code, an <br /> if statement should be used instead. <br /> At worst that was not the initial intention of the author and so the body of the loop should be fixed to use the nested return, <br /> break or throw statements in a more appropriate way. <br /> Noncompliant Code Example <br />  <br /> for (let i = 0; i &lt; 10; i++) { // noncompliant, loop only executes once <br />   console.log("i is " + i); <br />   break; <br /> } <br /> ... <br /> for (let i = 0; i &lt; 10; i++) { // noncompliant, loop only executes once <br />   if (i == x) { <br />     break; <br />   } else { <br />     console.log("i is " + i); <br />     return; <br />   } <br /> } <br />  <br /> Compliant Solution <br />  <br /> for (let i = 0; i &lt; 10; i++) { <br />   console.log("i is " + i); <br /> } <br /> ... <br /> for (let i = 0; i &lt; 10; i++) { <br />   if (i == x) { <br />     break; <br />   } else { <br />     console.log("i is " + i); <br />   } <br /> } <br /> |BUG|MAJOR|1
Functions should not be empty|There are several reasons for a function not to have a function body: <br />  <br />    It is an unintentional omission, and should be fixed to prevent an unexpected behavior in production.  <br />    It is not yet, or never will be, supported. In this case an exception should be thrown in languages where that mechanism is available.  <br />    The method is an intentionally-blank override. In this case a nested comment should explain the reason for the blank override.  <br />  <br /> Noncompliant Code Example <br />  <br /> function foo() { <br /> } <br />  <br /> var foo = () =&gt; {}; <br />  <br /> Compliant Solution <br />  <br /> function foo() { <br />     // This is intentional <br /> } <br />  <br /> var foo = () =&gt; { <br />     do_something(); <br /> }; <br /> |CODE_SMELL|CRITICAL|1
Cognitive Complexity of functions should not be too high|Cognitive Complexity is a measure of how hard the control flow of a function is to understand. Functions with high Cognitive Complexity will be <br /> difficult to maintain. <br /> See <br />  <br />    Cognitive Complexity  <br /> |CODE_SMELL|CRITICAL|19
Track uses of "TODO" tags|TODO tags are commonly used to mark places where some more code is required, but which the developer wants to implement later. <br /> Sometimes the developer will not have the time or will simply forget to get back to that tag. <br /> This rule is meant to track those tags and to ensure that they do not go unnoticed. <br /> Noncompliant Code Example <br />  <br /> function doSomething() { <br />   // TODO <br /> } <br />  <br /> See <br />  <br />    MITRE, CWE-546 - Suspicious Comment  <br /> |CODE_SMELL|INFO|9
Nested blocks of code should not be left empty|Most of the time a block of code is empty when a piece of code is really missing. So such empty block must be either filled or removed. <br /> Noncompliant Code Example <br />  <br /> for (var i = 0; i &lt; length; i++) {}  // Empty on purpose or missing piece of code ? <br />  <br /> Exceptions <br /> When a block contains a comment, this block is not considered to be empty. Moreover catch blocks are ignored.|CODE_SMELL|MAJOR|1
Variables should not be shadowed|Overriding or shadowing a variable declared in an outer scope can strongly impact the readability, and therefore the maintainability, of a piece of <br /> code. Further, it could lead maintainers to introduce bugs because they think they’re using one variable but are really using another.|CODE_SMELL|MAJOR|8
Sections of code should not be commented out|Programmers should not comment out code as it bloats programs and reduces readability. <br /> Unused code should be deleted and can be retrieved from source control history if required.|CODE_SMELL|MAJOR|20
Two branches in a conditional structure should not have exactly the same implementation|Having two cases in a switch statement or two branches in an if chain with the same implementation is at <br /> best duplicate code, and at worst a coding error. If the same logic is truly needed for both instances, then in an if chain they should <br /> be combined, or for a switch, one should fall through to the other. <br /> Noncompliant Code Example <br />  <br /> switch (i) { <br />   case 1: <br />     doFirstThing(); <br />     doSomething(); <br />     break; <br />   case 2: <br />     doSomethingDifferent(); <br />     break; <br />   case 3:  // Noncompliant; duplicates case 1's implementation <br />     doFirstThing(); <br />     doSomething(); <br />     break; <br />   default: <br />     doTheRest(); <br /> } <br />  <br /> if (a &gt;= 0 &amp;&amp; a &lt; 10) { <br />   doFirstThing(); <br />   doTheThing(); <br /> } <br /> else if (a &gt;= 10 &amp;&amp; a &lt; 20) { <br />   doTheOtherThing(); <br /> } <br /> else if (a &gt;= 20 &amp;&amp; a &lt; 50) { <br />   doFirstThing(); <br />   doTheThing();  // Noncompliant; duplicates first condition <br /> } <br /> else { <br />   doTheRest(); <br /> } <br />  <br /> Exceptions <br /> Blocks in an if chain that contain a single line of code are ignored, as are blocks in a switch statement that contain a <br /> single line of code with or without a following break. <br />  <br /> if (a == 1) { <br />   doSomething();  //no issue, usually this is done on purpose to increase the readability <br /> } else if (a == 2) { <br />   doSomethingElse(); <br /> } else { <br />   doSomething(); <br /> } <br />  <br /> But this exception does not apply to if chains without else-s, or to switch-es without default clauses when <br /> all branches have the same single line of code. In case of if chains with else-s, or of switch-es with default <br /> clauses, rule S3923 raises a bug. <br />  <br /> if (a == 1) { <br />   doSomething();  //Noncompliant, this might have been done on purpose but probably not <br /> } else if (a == 2) { <br />   doSomething(); <br /> } <br /> |CODE_SMELL|MAJOR|1
Literals should not be thrown|It is a bad practice to throw something that’s not derived at some level from Error. If you can’t find an existing <br /> Error type that suitably conveys what you need to convey, then you should extend Error to create one. <br /> Specifically, part of the point of throwing Errors is to communicate about the conditions of the error, but literals have far less <br /> ability to communicate meaningfully than Errors because they don’t include stacktraces. <br /> Noncompliant Code Example <br />  <br /> throw 404;                              // Noncompliant <br /> throw "Invalid negative index.";        // Noncompliant <br />  <br /> Compliant Solution <br />  <br /> throw new Error("Status: " + 404); <br /> throw new Error("Invalid negative index.");{code} <br /> |CODE_SMELL|MAJOR|3
Functions should not have identical implementations|When two functions have the same implementation, either it was a mistake - something else was intended - or the duplication was intentional, but <br /> may be confusing to maintainers. In the latter case, the code should be refactored. <br /> Noncompliant Code Example <br />  <br /> function calculateCode() { <br />   doTheThing(); <br />   doOtherThing(); <br />   return code; <br /> } <br />  <br /> function getName() {  // Noncompliant <br />   doTheThing(); <br />   doOtherThing(); <br />   return code; <br /> } <br />  <br /> Compliant Solution <br />  <br /> function calculateCode() { <br />   doTheThing(); <br />   doOtherThing(); <br />   return code; <br /> } <br />  <br /> function getName() { <br />   return calculateCode(); <br /> } <br />  <br /> Exceptions <br /> Functions with fewer than 3 lines are ignored.|CODE_SMELL|MAJOR|11
Assignments should not be redundant|The transitive property says that if a == b and b == c, then a == c. In such cases, there’s no point in <br /> assigning a to c or vice versa because they’re already equivalent. <br /> This rule raises an issue when an assignment is useless because the assigned-to variable already holds the value on all execution paths. <br /> Noncompliant Code Example <br />  <br /> a = b; <br /> c = a; <br /> b = c; // Noncompliant: c and b are already the same <br />  <br /> Compliant Solution <br />  <br /> a = b; <br /> c = a; <br /> |CODE_SMELL|MAJOR|1
Character classes in regular expressions should not contain the same character twice|Character classes in regular expressions are a convenient way to match one of several possible characters by listing the allowed characters or <br /> ranges of characters. If the same character is listed twice in the same character class or if the character class contains overlapping ranges, this <br /> has no effect. <br /> Thus duplicate characters in a character class are either a simple oversight or a sign that a range in the character class matches more than is <br /> intended or that the author misunderstood how character classes work and wanted to match more than one character. A common example of the latter <br /> mistake is trying to use a range like [0-99] to match numbers of up to two digits, when in fact it is equivalent to [0-9]. <br /> Another common cause is forgetting to escape the - character, creating an unintended range that overlaps with other characters in the <br /> character class. <br /> Noncompliant Code Example <br />  <br /> /[0-99]/ // Noncompliant, this won't actually match strings with two digits <br /> /[0-9.-_]/ // Noncompliant, .-_ is a range that already contains 0-9 (as well as various other characters such as capital letters) <br />  <br /> Compliant Solution <br />  <br /> /[0-9]{1,2}/ <br /> /[0-9.\-_]/ <br /> |CODE_SMELL|MAJOR|8
Extra semicolons should be removed|Extra semicolons (;) are usually introduced by mistake, for example because: <br />  <br />    It was meant to be replaced by an actual statement, but this was forgotten.  <br />    There was a typo which lead the semicolon to be doubled, i.e. ;;.  <br />    There was a misunderstanding about where semicolons are required or useful.  <br />  <br /> Noncompliant Code Example <br />  <br /> var x = 1;; // Noncompliant <br />  <br /> function foo() { <br /> };  // Noncompliant <br />  <br /> Compliant Solution <br />  <br /> var x = 1; <br />  <br /> function foo() { <br /> } <br /> |CODE_SMELL|MINOR|3
Unnecessary imports should be removed|There’s no reason to import modules you don’t use; and every reason not to: doing so needlessly increases the load. <br /> Noncompliant Code Example <br />  <br /> import A from 'a';      // Noncompliant, A isn't used <br /> import { B1 } from 'b'; <br />  <br /> console.log(B1); <br />  <br /> Compliant Solution <br />  <br /> import { B1 } from 'b'; <br />  <br /> console.log(B1); <br /> |CODE_SMELL|MINOR|1
Local variables should not be declared and then immediately returned or thrown|Declaring a variable only to immediately return or throw it is a bad practice. <br /> Some developers argue that the practice improves code readability, because it enables them to explicitly name what is being returned. However, this <br /> variable is an internal implementation detail that is not exposed to the callers of the method. The method name should be sufficient for callers to <br /> know exactly what will be returned. <br /> Noncompliant Code Example <br />  <br /> function computeDurationInMilliseconds(hours, minutes, seconds) { <br />   let duration = (((hours * 60) + minutes) * 60 + seconds ) * 1000; <br />   return duration; <br /> } <br />  <br /> Compliant Solution <br />  <br /> function computeDurationInMilliseconds(hours, minutes, seconds) { <br />   return (((hours * 60) + minutes) * 60 + seconds ) * 1000; <br /> } <br /> |CODE_SMELL|MINOR|4
Wrapper objects should not be used for primitive types|The use of wrapper objects for primitive types is gratuitous, confusing and dangerous. If you use a wrapper object constructor for type conversion, <br /> just remove the new keyword, and you’ll get a primitive value automatically. If you use a wrapper object as a way to add properties to a <br /> primitive, you should re-think the design. Such uses are considered bad practice, and should be refactored. <br /> Noncompliant Code Example <br />  <br /> let x = new Number("0"); <br /> if (x) { <br />   alert('hi');  // Shows 'hi'. <br /> } <br />  <br /> Compliant Solution <br />  <br /> let x = Number("0"); <br /> if (x) { <br />   alert('hi'); <br /> } <br /> |CODE_SMELL|MINOR|1
Deprecated APIs should not be used|Once deprecated, classes, and interfaces, and their members should be avoided, rather than used, inherited or extended. Deprecation is a warning <br /> that the class or interface has been superseded, and will eventually be removed. The deprecation period allows you to make a smooth transition away <br /> from the aging, soon-to-be-retired technology. <br /> Noncompliant Code Example <br />  <br /> export interface LanguageService { <br />   /** <br />   * @deprecated Use getEncodedSyntacticClassifications instead. <br />   */ <br />   getSyntacticClassifications(fileName: string, span: TextSpan): ClassifiedSpan[]; <br /> } <br />  <br /> const syntacticClassifications = getLanguageService().getSyntacticClassifications(file, span); // Noncompliant <br />  <br /> See <br />  <br />    MITRE, CWE-477 - Use of Obsolete Functions  <br /> |CODE_SMELL|MINOR|2
"for of" should be used with Iterables|If you have an iterable, such as an array, set, or list, your best option for looping through its values is the for of syntax. Use a <br /> counter, and …? well you’ll get the right behavior, but your code just isn’t as clean or clear. <br /> Noncompliant Code Example <br />  <br /> const arr = [4, 3, 2, 1]; <br />  <br /> for (let i = 0; i &lt; arr.length; i++) {  // Noncompliant <br />   console.log(arr[i]); <br /> } <br />  <br /> Compliant Solution <br />  <br /> const arr = [4, 3, 2, 1]; <br />  <br /> for (let value of arr) { <br />   console.log(value); <br /> } <br /> |CODE_SMELL|MINOR|3
Redundant casts and non-null assertions should be avoided|The TypeScript compiler automatically casts a variable to the relevant type inside conditionals where it is possible to infer the type (because <br /> typeof, instanceof, etc was used). This compiler feature makes casts and not-null assertions unnecessary. <br /> Noncompliant Code Example <br />  <br /> function getName(x?: string &#124 UserName) { <br />   if (x) { <br />     console.log("Getting name for " + x!); // Noncompliant <br />  <br />     if (typeof x === "string") <br />       return (x as string); // Noncompliant <br />     else <br />       return (x as UserName).name; // Noncompliant <br />   } <br />   return "NoName"; <br /> } <br />  <br /> Compliant Solution <br />  <br /> function getName(x?: string &#124 UserName) { <br />   if (x) { <br />     console.log("Getting name for " + x); <br />  <br />     if (typeof x === "string") <br />       return x; <br />     else <br />       return x.name; <br />   } <br />   return "NoName"; <br /> } <br /> |CODE_SMELL|MINOR|10
"await" should not be used redundantly|An async function always wraps the return value in a Promise. Using return await is therefore redundant. <br /> Noncompliant Code Example <br />  <br /> async function foo() { <br />   // ... <br /> } <br />  <br /> async function bar() { <br />   // ... <br />   return await foo(); // Noncompliant <br /> } <br />  <br /> Compliant Solution <br />  <br /> async function foo() { <br />   // ... <br /> } <br />  <br /> async function bar() { <br />   // ... <br />   return foo(); <br /> } <br /> |CODE_SMELL|MINOR|25
Regular expression quantifiers and character classes should be used concisely|With regular expressions syntax, it’s possible to express the same thing in many ways. For example, to match a two-digit number, one could write <br /> [0-9]{2,2} or \d{2}. Latter is not only shorter in terms of expression length, but also easier to read and thus to maintain. <br /> This rule recommends to replace some bulky quantifiers and character classes with more concise equivalents: <br />  <br />    \d for [0-9] and \D for [^0-9]  <br />    \w for [A-Za-z0-9_] and \W for [^A-Za-z0-9_]  <br />    . for character classes matching everything (e.g. [\w\W], [\d\D], or [\s\S] with <br />   s flag)  <br />    x? for x{0,1}, x* for x{0,}, x+ for x{1,}, x{N} for <br />   x{N,N}  <br />  <br /> Noncompliant Code Example <br />  <br /> /a{1,}/; // Noncompliant, '{1,}' quantifier is the same as '+' <br /> /[A-Za-z0-9_]/; // Noncompliant, '\w' is equivalent <br />  <br /> Compliant Solution <br />  <br /> /a+/; <br /> /\w/; <br /> |CODE_SMELL|MINOR|3


## Security Hotspots

### Security hotspots count by category and priority

Category / Priority|LOW|MEDIUM|HIGH
---|---|---|---
LDAP Injection|0|0|0
Object Injection|0|0|0
Server-Side Request Forgery (SSRF)|0|0|0
XML External Entity (XXE)|0|0|0
Insecure Configuration|0|0|0
XPath Injection|0|0|0
Authentication|0|0|0
Weak Cryptography|0|0|0
Denial of Service (DoS)|0|0|0
Log Injection|0|0|0
Cross-Site Request Forgery (CSRF)|0|0|0
Open Redirect|0|0|0
SQL Injection|0|0|0
Buffer Overflow|0|0|0
File Manipulation|0|0|0
Code Injection (RCE)|0|0|0
Cross-Site Scripting (XSS)|0|0|0
Command Injection|0|0|0
Path Traversal Injection|0|0|0
HTTP Response Splitting|0|0|0
Others|0|0|0


### Security hotspots

