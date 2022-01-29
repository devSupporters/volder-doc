---
sidebar_position: 6
---

# Date

#### Date type configs

- { **type: Date** }
- [**required: date**](./basics#required-date) described in basics APIs page
- [**pattern: Function(input) : date**](./basics#pattern-functioninput--date) described in basics APIs page
- [**transform: Function(input) : undefined**](./basics#transform-functioninput--undefined) described in basics APIs page
- [**after: String**](#after-string) 
- [**before: String**](#before-string)

---

:::caution
Notice the date in `mm/dd/yyyy` format.
'after' and 'before' config just accept `String` on that format.
:::

### `after: String`

Specifies that the value must be after than `date`.
```js
const date = singleVolder({ type: Date, after: '1/1/2000' });
date.valid('1/1/1999'); // -> false, notice that Date in mm/dd/yyyy fromat.
```

### `before: String`

Specifies that the value must be before than `date`.
```js
const date = singleVolder({ type: Date, before: '5/10/2000' });
date.valid('6/9/2000'); // -> false, notice that Date in mm/dd/yyyy fromat.
```
