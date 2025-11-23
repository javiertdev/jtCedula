[![@javiert.dev/cedula](https://s6.imgcdn.dev/YKWaND.png)](https://github.com/javiertdev/jtCedula)

Lee esto en [español](https://github.com/javiertdev/jtCedula/blob/main/README.md).

Are you confused or tired of creating functions to validate RUN/RUT, document number, searching through hundreds of examples on the Internet?

**jtCedula** is your answer.

Here I present a simple and lightweight library that will help you validate RUN/RUT, document number or passport quickly and efficiently. With just a few lines of code, you can ensure that the entered data is valid and in the correct format. Even calculate a person's age with their RUN/RUT.

> [!NOTE]
> This project is not affiliated with any government entity nor related to the Chilean government. It is an independent tool created to facilitate document validation in web applications.

[![Documentation](https://s6.imgcdn.dev/YKWQIv.png)](https://github.com/javiertdev/jtCedula/wiki)

I invite you to review the [**documentation**](https://github.com/javiertdev/jtCedula/wiki) to see how easy it is to use. Here you will find usage examples, available functions and much more.

> [!IMPORTANT]
> The validations in this library are mathematical calculations and are not related to the veracity of the data in the civil registry. Therefore, it is not guaranteed that the RUN/RUT, document number or passport is real or associated with a specific person. This library only validates that the structure and format of the entered data are correct.

[![Installation](https://s6.imgcdn.dev/YKWs6B.png)](https://github.com/javiertdev/jtCedula/wiki)
This is really fast and simple! You just need a package manager like npm, yarn or pnpm. If you already have one installed, simply run one of the following commands in the root of your project:

```bash
npm install @javiert.dev/cedula
```

```bash
yarn add @javiert.dev/cedula
```

```bash
pnpm add @javiert.dev/cedula
```

> [!TIP]
> This project is made with [Typescript](https://www.typescriptlang.org) and includes the interfaces and typing of the functions.

And that's it! You already have **jtCedula** installed and ready to use!

> [!TIP]
> [jtSnippets](https://marketplace.visualstudio.com/items?itemName=javiertdev.jt-snippets) supports this project!
> [![jtSnippets](https://s6.imgcdn.dev/YKWw6h.png)](https://marketplace.visualstudio.com/items?itemName=javiertdev.jt-snippets)

[![Examples](https://s6.imgcdn.dev/YKWiBN.png)](https://github.com/javiertdev/jtCedula/wiki)

> [!TIP]
> Just in case you didn't know, the RUN (Rol Único Nacional in spanish) is a unique identification number assigned to each Chilean citizen. It is used for various purposes, such as identification in government, banking and commercial procedures. The RUN consists of a number followed by a check digit, which can be a number or the letter "K".
> And the RUT (Rol Único Tributario in spanish) is a tax identification number used in Chile to identify individuals and companies in their tax obligations. And it is the same number as the RUN, but used in a different context.

```typescript
import jtCedula from '@javiert.dev/cedula';

// Validate if the RUN is valid
// you can pass the RUN with or without dots and dash, but it is important to pass the check digit
jtCedula.run.validate('123456789'); //Example response: true
jtCedula.run.validate('12345678k'); //Example response: false

// Calculate the check digit
jtCedula.run.dv('12345678'); //Example response: '9'

// Format the RUN with dots and dash
jtCedula.run.format('12345678-9'); //Example response: '12.345.678-9'
jtCedula.run.format('12345678k'); //Example response: '12.345.678-k'

// Unformat the RUN removing dots and dash
jtCedula.run.unformat('12.345.678-9'); //Example response: '123456789'

// Both format and unformat accept a second parameter to force the structure with leading zeros
jtCedula.run.format('12345678-9', true); //Example response: '0.012.345.678-9'
jtCedula.run.unformat('12.345.678-k', true); //Example response: '0012345678k'

// Generate valid random RUNs
jtCedula.run.generate(2); //Example response: ['12.345.678-9', '12.345.678-k']
// You can generate valid random RUNs within a specific range
jtCedula.run.generate(2, {min: 10, max: 19}); //Example response: ['10.123.456-7', '15.123.456-k']

// Calculate age from RUN/RUT
jtCedula.run.getAge('12345678-9'); //Example response: { age: 26, year: 1998, month: 5 }

// Validate if the document number is valid
jtCedula.documentNumber.validate('123456789'); //Example response: true
jtCedula.documentNumber.validate('123.456.789'); //Example response: true
jtCedula.documentNumber.validate('123.JKL.RRR'); //Example response: false
jtCedula.documentNumber.validate('A123456789'); //Example response: true
```

![Roadmap](https://s6.imgcdn.dev/YKW5VL.png)

| Function | Status |
| ------- | :------: |
| Validate RUN/RUT | ✅ |
| Get check digit | ✅ |
| Format RUN/RUT | ✅ |
| Unformat RUN/RUT | ✅ |
| Generate random RUN/RUT | ✅ |
| Calculate age from RUN/RUT | ✅ |
| Validate document number | ✅ |
| Validate passport number | ❌ |