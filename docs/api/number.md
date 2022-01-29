---
sidebar_position: 2
---

# Number

#### Number type configs
- { **type: Number** }
- [**required: Boolean**](./basics#required-boolean) described in basics APIs page
- [**pattern: Function(input) : Boolean**](./basics#pattern-functioninput--boolean) described in basics APIs page
- [**transform: Function(input) : undefined**](./basics#transform-functioninput--undefined) described in basics APIs page
- [**max: Number**](#max-number)
- [**min: Number**](#min-number)
- [**integer: Boolean**](#integer-boolean)
- [**float: Boolean**](#float-boolean)
- [**sing: 'positive'|  'negative'**](#sing-positive--negative)
- [**round: Boolean**](#round-boolean)
- [**fixed: Number**](#fixed-number)

---

### `max: Number`
Specifies the maximum value. **max accept custom error message**.
```js
const number = singleVolder({ type: Number, max: 9 });
number.valid(10); // -> false
```
### `min: Number`
Specifies the minimum value. **min accept custom error message**.
```js
const number = singleVolder({ type: Number, min: 4 });
number.valid(3.9); // -> false
```
### `integer: Boolean`
Requires the number to be an integer (no floating point). **integer accept custom error message**.
```js
const number = singleVolder({ type: Number, integer: true });
number.valid(23.3); // -> false
```
### `float: Boolean`
Requires the number to be an float (floating point). **float accept custom error message**.
```js
const number = singleVolder({ type: Number, float: true });
number.valid(32); // -> false
```
### `sing: 'positive'|  'negative'`
Requires the number to be negative or positive where: sign - one of 'negative' or 'positive'. **sign accept custom error message**.
```js
const number = singleVolder({ type: Number, sign: 'positive' });
number.valid(-23); // -> false
```
### `round: Boolean`
Round the number to the nearest integer.
```js
const number = singleVolder({ type: Number, round: true });
const { value } = number.validate(2.6);
// value = 3;
```
### `fixed: Number`
Transform the number to be fixed decimal number. 
```js
const number = singleVolder({ type: Number, fixed: 2 });
const { value } = number.validate(1.2423523); 
// value = 1.24;
```
