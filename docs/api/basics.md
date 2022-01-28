---
sidebar_position: 0
---

# Basic APIs

#### Schema Validation Functions

- [**Schema.validate( input: Object) : Object**](#schemavalidateinput-object--object)
- [**Schema.valid( input: Object) : Boolean**](#schemavalid-input-object--boolean)

#### General Configs

- [**type: js_type | Function(input) : Boolean**](#type-js_type--functioninput--boolean)
- [**required: Boolean**](#required-boolean)
- [**pattern: Function(input) : Boolean**](#pattern-functioninput--boolean)
- [**transform: Function(input) : undefined**](#transform-functioninput--undefined)

#### Other Options

- [**Custom Error Message**](#custom-error-message)
- [**Custom type**](#custom-type)

---

### `Schema.validate(input: Object) : Object`

`validate` function accept one argument `input`, input must Object, and return Object with three keys.

- `valid: Boolean ` if input matches the configs you set return `true` otherwise `false`.
- `errors: Object` if some input properties don't match the configs it will return error message with specific property name
  and set valid to `false`.
- `value: Object` return input if valid equal `true` otherwise empty object `{}`, input is new immutable object, or return input with changes if you set transformation configs.

[**see an example in get started page**](/docs/get-started/#example)

### `Schema.valid( input: Object) : Boolean`

`valid` function accept one argument input. and just return a Boolean `true` or `false`.

```js
const nameSchema = new Volder({ name: String });
nameSchema.valid({ name: 23 }); // return false
```

### `type: js_type | Function(input) : Boolean`

`type` config specify the type of the data, `type` strict equal to one item of this array

```js
[String, Number, Boolean, Array, Object, Date, null];
```

:::caution
`type` config must be included, or will throw an Error.
:::

you can add `Custom` type, [**see how custom type work.**](#custom-type)

```js
const numberSetType = new Volder({ age: { type: Number } });
// or in other approach
const numberSetTypeOnly = new Volder({ age: Number });

numberSetTypeOnly.valid({ age: 23 }); // return true
```

### `required: Boolean`

Marks a key as required which will not allow `undefined` as value.

```js
const nameSchema = new Volder( name: { type: Boolean, required: true});
const { valid, errors, value } = nameSchema.validate({ }).
/* valid = false
   errors = { name: "name is required" }
   value = {}
*/
```

### `pattern: Function(input) : Boolean`

pattern accept `Function` and the `arg1` is input with specific value you set in schema and return Boolean type `true` or `false`.

:::info
we will use `singleVolder` function. [**see more about singleVolder.**](./single-volder)
:::

```js
const peoples = singleVolder({
    type: Array,
    pattern: (input) => input.includes('max')
    arrayOf:[String]
    });

peoples.valid(['messy', 'ronaldo', 'david']); // ->  false
```

### `transform: Function(input) : undefined`

`transform` config accpet `Function`, `arg1` is input with specific value you set in schema. it will return void.

```js
const name = singleVolder({ type: String, transform: (input) => "MR." + input });
const { valid, errors, value } = name.validate("max");
/* valid = true
   errors = {}
   value = "MR.max"
*/
```

### Custom Error Message

`Custom Error Message` is important feature you must use it. custom error change using default error message to use your custom error message.

to add a custom error message `{ configName: [value, error message]}`
:::info
value must be in index 0 of array and error message must be in index 1 of array.
:::
see the exampe to know how it works.

```js
// without custom error message
const person = new Volder({
  name: { type: String, minLength: 4 },
  age: Number,
});
const { valid, errors, value } = person.validate({ name: "me", age: true });
/* valid = false
   errors = {
       name: 'name must be at least 4 characters',
       age: 'age should be a number'
   }
   value = {}
*/

// with custom error message
const customPerson = new Volder({
  name: {
    type: [String, "only string type"],
    minLength: [4, "at least 4 letters"],
  },
  age: {
    type:[Number, 'we just accept number type for the age'
  }
});

const { valid, errors, value } = customPerson.validate({ name: 'me', age: false });
/* valid = false
   errors = {
       name: 'at least 4 letters',
       age: 'we just accept number type for the age'
   }
   value = {}
*/
```
### Custom Type
Custom type is other approach to specify the type you like.

Custom type is a `Function`, `arg1` is an input and function return `Boolean (true or false)`.
- `true` => the type is correct.
- `false` => the type is uncorrect and will add error message to the error object.

```js

const CustomType = singleVolder({ 
    type: (input) => {
        return typeof input === 'string' && input.includes('_');
    }
})

CustomType.valid('max_min') // -> true
```

:::info
you can use other types that volder support in `type` config as a `Function`.

```js
import { singleVolder, Email } from 'volder';

const isEmail = singleVolder({ type: Email });
isEmail.valid('test@gmail.test') // -> true
```
[**see more in other types page.**](./volder-types)
:::
