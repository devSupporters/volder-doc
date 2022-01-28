---
sidebar_position: 3
---

# Boolean

#### Boolean type configs

- [**state: Boolean**](#)
- [**sensible: Boolean**](#)
- [**switch: Boolean**](#)

### `state: Boolean`
Requires the input to be in strict state: (true | false). **state accept custom error message**

### `sensible: Boolean`
allow unBoolean value to be considered as truthy or falsy.
:::info
if `sensible = true` the `state` config it will accept truthy and falsy values as `true` and `false`.
:::
### `switch: Boolean`
transform the truthy value to `true` and falsy to `false`.
