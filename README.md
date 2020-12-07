# JavaScript Async Defer

## MDN says...

> **async | HTML5**

> For classic scripts, if the async attribute is present, then the classic script will be fetched in parallel to parsing and evaluated as soon as it is available.<br />For module scripts, if the async attribute is present then the scripts and all their dependencies will be executed in the defer queue, therefore they will get fetched in parallel to parsing and evaluated as soon as they are available.<br />This attribute allows the elimination of parser-blocking JavaScript where the browser would have to load and evaluate scripts before continuing to parse. defer has a similar effect in this case.<br />This is a boolean attribute: the presence of a boolean attribute on an element represents the true value, and the absence of the attribute represents the false value.<br />See Browser compatibility for notes on browser support. See also Async scripts for asm.js.


> **defer**

> This Boolean attribute is set to indicate to a browser that the script is meant to be executed after the document has been parsed, but before firing DOMContentLoaded.<br />Scripts with the defer attribute will prevent the DOMContentLoaded event from firing until the script has loaded and finished evaluating.<br />This attribute must not be used if the src attribute is absent (i.e. for inline scripts), in this case it would have no effect.<br />The defer attribute has no effect on module scripts — they defer by default.<br />Scripts with the defer attribute will execute in the order in which they appear in the document.<br />This attribute allows the elimination of parser-blocking JavaScript where the browser would have to load and evaluate scripts before continuing to parse. async has a similar effect in this case.

**async** HTML5 / \<script\> will be executed asynchronously as soon as it is available

**defer** HTML 4.01 / \<script\> will be executed when document is ready (before DOMContentLoaded)

## Files

- index.js / global function definition
- async.js / async option
- defer.js / defer option
- default / no options
 
## What I Expected

1. stop parsing and excute index.js (means global function is ready to use)
2. execute async.js immediately after loaded and at that time, when \<body\> has not parsed, can't append 'red' \<div\>
3. defer.js will excute at last time
4. stop parsing and excute default.js (means can not append 'blue' \<div\>)

# Result
 
**FF**
ASYNC -> DEFAULT -> INLINE / head -> INLINE / body -> INLINE / after header -> INLINE / after section -> INLINE / after footer -> DEFER -> DOMContentLoaded -> load

**Safari**
DEFAULT -> INLINE / head -> INLINE / body –> INLINE / after header -> INLINE / after section –> INLINE / after footer -> DEFER -> DOMContentLoaded –> ASYNC -> load

**Chrome**
DEFAULT -> INLINE / head -> INLINE / body -> INLINE / after header -> INLINE / after section -> INLINE / after footer -> ASYNC -> DEFER -> DOMContentLoaded -> load

[FED Front-End-Developer](https://kool-jay.tistory.com/35)


## install and test

Clone this repo and install npm modules.

```
npm run start
```

Now you can see.