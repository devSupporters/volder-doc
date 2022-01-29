---
sidebar_position: 1
---

# String

#### string type configs

- { **type: String** }
- [**required: Boolean**](#required-boolean) described in basics APIs page
- [**pattern: Function(input) : Boolean**](./basics#pattern-functioninput--boolean) described in basics APIs page
- [**transform: Function(input) : undefined**](./basics#transform-functioninput--undefined) described in basics APIs page
- [**maxLength: Number**](#maxlength-number)
- [**minLength: Number**](#minlength-number)
- [**matches: Regex**](#matches-regex)
- [**alphanumeric: Boolean**](#alphanumeric-boolean)
- [**uppercase: Boolean**](#uppercase-boolean)
- [**lowercase: Boolean**](#lowercase-boolean)
- [**whitespace: Boolean**](#whitespace-boolean)
- [**trim: Boolean**](#trim-boolean)

---

### `maxLength: Number`

Specifies the maximum number of string length. **maxLength accept custom error message**.

```js
const username = singleVolder({ type: String, maxLength: 5 });
username.valid("hello"); // -> true
```

### `minLength: Number`

Specifies the minimum number of string length. **minLength accept custom error message**.

```js
const username = singleVolder({ type: String, minLength: 4 });
username.valid("max"); // -> false
```

### `required: Boolean`

Marks a key as required which will not allow undefined as value,except that empty strings are also considered 'missing' values if trim set to `true`.
**required accept custom error message**

```js
const person = new Volder({
  name: { type: String, required: true },
});
person.valid({ name: "" }); // -> true
```

### `matches: Regex`

Set `Regex` to validate the input string. it accept `regular regex` and `string reguex`
**matches accpet custom error message**

```js
// the regex for string that start with letter
const id = singleVolder({ type: String, matches: "^[a-zA-Z]" });
id.valid("a2342342"); // -> true
```

### `alphanumeric: Boolean`

`alphanumeric` accept string that only have letters and numbers.
**alphanumeric accpet custom error message**

```js
const username = singleVolder({ type: String, alphanumeric: true });
username.valid("welcome.1234"); // -> false
```

### `uppercase: Boolean`

`uppercase` accpet string that not have small letters.
**uppercase accpet custom error message**

```js
const username = singleVolder({ type: String, uppercase: true });
username.valid("WELCOME.1234"); // -> true
```

### `lowercase: Boolean`

`lowercase` accpet string that not have big letters.**lowercase accpet custom error message**

```js
const username = singleVolder({ type: String, lowercase: true });
username.valid("welcome.1234"); // -> true
```

:::caution
If you set `lowercase` and `uppercase` to true at the same time, it will throw an Error
:::

### `whitespace: Boolean`

If `whitespace` set to `false`,it accpet string that not have whitespace.**whitespace accpet custom error message**

```js
const username = singleVolder({ type: String, whitespace: false });
username.valid("welcome.1234 "); // -> false
```

### `trim: Boolean`

`trim` = true, it will trim the Entered string.

```js
const username = singleVolder({ type: String, trim: true });
const { value } = username.validate("  welcome.1234 ");
// value = "welcome.1234"
```
