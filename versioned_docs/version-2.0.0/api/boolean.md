---
sidebar_position: 3
---

# Boolean

#### Boolean type configs

- { **type: Boolean** }
- [**required: Boolean**](./basics#required-boolean) described in basics APIs page
- [**pattern: Function(input) : Boolean**](./basics#pattern-functioninput--boolean) described in basics APIs page
- [**transform: Function(input) : undefined**](./basics#transform-functioninput--undefined) described in basics APIs page
- [**state: Boolean**](#state-boolean)
- [**sensible: Boolean**](#sensible-boolean)
- [**switch: Boolean**](#switch-boolean)

---

### `state: Boolean`

Requires the input to be in strict state: (true | false). **state accept custom error message**

```js
const boolean = singleVolder({ type: Boolean, state: true });
boolean.valid(false); // -> false
```

### `sensible: Boolean`

Allow unBoolean value to be considered as truthy or falsy.
:::info
If `sensible = true` the `state` config it will accept truthy and falsy values as `true` and `false`.
:::

```js
const boolean = singleVolder({ type: Boolean, sensible: true });
boolean.valid('True'); // -> true
```

### `switch: Boolean`

Transform the truthy value to `true` and falsy to `false`.

:::caution
If you want to use `switch` config you should set `sensible` to `true`.
:::

```js
const boolean = singleVolder({ type: Boolean, switch: true, sensible: true});
const { value } = boolean.validate(10); // -> value = true; 
```
