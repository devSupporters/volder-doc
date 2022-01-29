---
sidebar_position: 9
---

# Single volder

`SingleVolder` function is a schema builder and validator for a single value other than `Volder` constructor for multi values.

you define it and pass a configured `Object` as first arg1.

```js
import { singleVolder } from "volder";

const person = singleVolder({ type: String, maxLength: 9, required: true }); // pass the value configs.

// singleVolder has two validator function.
singleVolder.valid(/*input*/) // -> return Boolean (true or false) depend of input if it a correct input.
const { valid, errors, value } = singleVolder.validate(/*input*/) // -> return object
// valid = Boolean, the validity if input.
// errors = String, return a error message if the the validity is false.
// value = return new immutable value with changes if set transfomation configs.
```
