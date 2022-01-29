---
sidebar_position: 5
---

# Object

### Object type configs

- { **type: Object** }
- [**required: Boolean**](./basics#required-boolean) described in basics APIs page
- [**pattern: Function(input) : Boolean**](./basics#pattern-functioninput--boolean) described in basics APIs page
- [**transform: Function(input) : undefined**](./basics#transform-functioninput--undefined) described in basics APIs page
- [**instance: ConstructorFunction**](#instance-constructorfunction)
- [**with: [...keys: String]**](#with-keys-string)
- [**without: [...keys: String]**](#without-keys-string)
- [**strict: [...keys: String]**](#strict-keys-string)

---

### `instance: ConstructorFunction`
Requires the object to be an instance of a given constructor. **instance accept custom error message**

```js
const person = new PersonConstructor();
const object = singleVolder({ type: Object, instance: PersonConstructor });
object.valid(person); // -> true
```
### `with: [...keys: String]`
Specifies the required keys names to be exists in `Object`.
```js
const object = singleVolder({ type: Object, with ['name', 'age'] });
object.valid({ name: 'max' }); // -> false ; the age key is missed.
```

### `without: [...keys: String]`
Specifies the not allowed keys names to be unexists in `Object`.
```js
const object = singleVolder({ type: Object, without: ['birth_day'] });
object.valid({ name: 'max', birth_day: '1/1/2000' }); // -> false ; birth_day key is not allowed to be exists.
```

### `strict: [...keys: String]`
Specifies and strict the allowed keys to be exists in `Object`.
```js
const object = singleVolder({ type: Object, strict: ['name', 'age'] });
object.valid({ name: 'max', age:23, birth_day: '1/1/2000' }); // -> false, birth_day is not form stricted keys names.
```

:::caution
If you want to add custom error message to this:`with`, `without`, `strict`.
you should do this without the regular custom error message.

for `with` add `withErrorMessage` to the option.

for `without` add `withoutErrorMessage` to the option.

for `strict` add `strictErrorMessage` to the option.

```js
const schema = new Volder({
  person: {
    type: Object,
    with:['name', 'age'],
    withErrorMessage: 'name and age are required'
  }
})
:::
```
