---
sidebar_position: 8
---

# Other types

**volder support other types to improve the validation process specifically on strings.**

- [**Email(input: String): Boolean**](#emailinput-string-boolean)
- [**IPAddress(input :String): Boolean**](#ipaddressinput-string-boolean)
- [**UUID(input: String): Boolean**](#uuidinput-string-boolean)
- [**CreditCard(input: String): Boolean**](#creditcardinput-string-boolean)
- [**URL(input: String): Boolean**](#urlinput-string-boolean)

---

## Usage

**volder types take string as input and validate it and then return Boolean (true or false), all volder types accept custom error message.**

```js
import { Volder, Email, IPAddress } from "volder";

const user = new Volder({
  username: { type: String, alphanumeric: true },
  email: { type: String, pattern: Email }, // you can pass Email function in pattern.
  ip_address: { type: IPAddress, trim: true }, // you can pass as a type.
});
```

### `Email(input: String): Boolean`

Requires the string value to be a valid email address.

```js
const vlaidEmail = singleVolder({ type: Email });
vlaidEmail.valid("test@test.com"); // -> true
vlaidEmail.valid("test@gmailcom"); // -> false
```

### `IPAddress(input :String): Boolean`

Requires the string value to be a valid ip address. **(version 4 or 6).**

```js
const validIPAddress = singleVolder({ type: IPAddress });
validIPAddress.valid("2001:db8:0000:1:1:1:1:1"); // -> true
validIPAddress.valid("0200.200.200.200"); // -> false
```

### `UUID(input: String): Boolean`

Requires the string value to be a valid UUID. **(version 1, 2, 3, 4 or 5).**

```js
const validUUID = singleVolder({ type: UUID });
validUUID.valid("A987FBC9-4BED-3078-CF07-9141BA07C9F3"); // -> true
validUUID.valid("A987FBC9-4BED-3078-CF07-9141BA07C9F3xxx"); // -> false
```

### `CreditCard(input: String): Boolean`

Requires the number to be a credit card number.

```js
const validCreditCard = singleVolder({ type: CreditCard });
validCreditCard.valid("4716-2210-5188-5662"); // ->true
validCreditCard.valid("375556917985515"); // -> true
validCreditCard.valid("5398228707871528"); // -> false
```

### `URL(input: String): Boolean`

Requires the string value to be a valid URL.

```js
const validURL = singleVolder({ type: URL });
validURL.valid("www.foobar.com"); // -> true
validURL.valid("HTTP://WWW.FOOBAR.COM/"); // -> true
validURL.valid("HTTP/WWW.FOOBAR.COM"); // -> false
```
