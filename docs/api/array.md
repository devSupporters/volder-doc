---
sidebar_position: 4
---

# Array

#### Array type configs

- { **type: Array** }
- [**required: Boolean**](./basics#required-boolean) described in basics APIs page
- [**pattern: Function(input) : Boolean**](./basics#pattern-functioninput--boolean) described in basics APIs page
- [**transform: Function(input) : undefined**](./basics#transform-functioninput--undefined) described in basics APIs page
- [**maxLength: Number**](#maxlength-number)
- [**minLength: Number**](#minlength-number)
- [**arrayOf: constructor type | null | undefined**](#arrayof-constructor-type--null--undefined)
- [**unique: Boolean**](#unique-boolean)

---

### `maxLength: Number`

Specifies the maximum number of items in the array. **maxLength accept custom error message**.

```js
const array = singleVolder({ type: Array, maxLength: 3 });
array.valid([1, 2, 3, 4]); // -> false
```

### `minLength: Number`

Specifies the minimum number of items in the array. **minLength accept custom error message**.

```js
const array = singleVolder({ type: Array, minLength: 3 });
array.valid([1, 2, 3]); // -> true
```

### `arrayOf: constructor type | null | undefined`

Specifies the type allowed for the array. **arrayOf accept custom error message**.

the allowed type is one of this array:`[String, Number, Array, Object, Boolean, null, undefined]`

```js
const array = singleVolder({ type: Array, arrayOf: String });
array.valid(["hello", "welcome", 3]); // -> false
```

### `unique: Boolean`

Requires the array values to be unique. **unique accept custom error message**.

```js
const array = singleVolder({ type: Array, unique: true });
array.valid([1, 2, 3, 2]); // -> false
```
:::info
reference values are excepted from `unique` config. ( `unique` can't figure the Similarity).
:::