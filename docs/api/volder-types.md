---
sidebar_position: 8
---

# Other types

**volder support other types to improve the validation process specifically on strings.**

- [**Email(input: String): Boolean**](#)
- [**IPAddress(input :String): Boolean**](#)
- [**UUID(input: String): Boolean**](#)
- [**CreditCard(input: String): Boolean**](#)
- [**URL(input: String): Boolean**](#)

---

## Usage

**volder types take string as input and validate it and then return Boolean (true or false)**

```js
import { Volder, Email, IPAddress } from 'volder';

const user = new Volder({
    username: { type:String, alphanumeric: true },
    email: { type: String, pattern: Email },// you can pass Email function in pattern.
    ip_address: { type:IPAddress, trim: true} // you can pass as a type.
})
```

### `Email(input: String): Boolean`

Requires the string value to be a valid email address.
:::info
Notice: the Email function validate emails matches `Gmail style`.
:::

```js
const IPAddress = singleVolder({ type: IPAddress });
IPAddress.valid();
IPAddress.valid();
```

### `IPAddress(input :String): Boolean`

Requires the string value to be a valid ip address.

```js
const IPAddress = singleVolder({ type: IPAddress });
IPAddress.valid();
IPAddress.valid();
```

### `UUID(input: String): Boolean`

Requires the string value to be a valid UUID.

```js
const IPAddress = singleVolder({ type: IPAddress });
IPAddress.valid();
IPAddress.valid();
```

### `CreditCard(input: String): Boolean`

Requires the number to be a credit card number.

```js
const IPAddress = singleVolder({ type: IPAddress });
IPAddress.valid();
IPAddress.valid();
```

### `URL(input: String): Boolean`

Requires the string value to be a valid URL.

```js
const IPAddress = singleVolder({ type: IPAddress });
IPAddress.valid();
IPAddress.valid();
```
