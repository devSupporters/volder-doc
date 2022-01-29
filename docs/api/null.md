---
sidebar_position: 7
---

# null

#### null type configs

- {  **type:  null** }
- [**avoid: [...items]**](#avoid-items)

:::info
`null` type allow every `config` in every type if the value match specific `type`.
:::

---

### `avoid: [...items]`

Specifies the not allowed value types. **avoid custom error message defined in type config**

```js
const null = singleVolder({
  type: [null, 'strings and numbers not allowed'],
  avoid: [String, Number]
});
const { valid, errors, value } = null.validate('name');
/* valid = false
   errors = "strings and numbers not allowed"
   value = null
*/
const { valid, errors, value } = null.validate(123);
/* valid = false
   errors = "strings and numbers not allowed"
   value = null
*/
```
