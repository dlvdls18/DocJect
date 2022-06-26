# DocJect

![DocJect](docject.png)

Convert HTML String to JSON or JSON to HTML String without setup and configuration.

```js
DocJect.toHTML({
  tag: "p",
  hasInner: true,
  content: "Hello, World!",
  attr: {
    style: "color:red"
  }
});

// <p style="color:red">Hello, World!</p>
```

```js
DocJect.toJSON(`<p style="color:red">Hello, World!</p>`;

/*
{
  tag: "p",
  hasInner: true,
  content: "Hello, World!",
  attr: {
    style: "color:red"
  }
}
*/
```

# Installation
```html
<script src="https://cdn.jsdelivr.net/gh/dlvdls18/DocJect@main/src/docject.js"></script>
```

# Documentation
Use the variable (object) `DocJect` which contains the 2 main function.

|   HTML to JSON   |    JSON to HTML     |
|------------------|---------------------|
| `DocJect.toJSON` |   `DocJect.toHTML`  |
|      String      | Object/Array Object |
|   Array Object   |       String        |

- Function
- Type
- Return Type

```js
DocJect.toJSON(/*      HTML String      */);
DocJect.toHTML(/* Array Object / Object */);
```


## JSON Format
`JSON to HTML` requires 1 argument which is `object` or `array object`.
Keys of `Object` are:

- Tag
  - Key name - `tag`
  - Is required - `Yes`
  - Type - `String`
  - For - `Tag name of the element`
  - Example - `{ tag: "img" } -> <img>`
- Has Inner
  - Key name - `hasInner`
  - Is required - `Yes`
  - Type - `Boolean`
  - For - `True: <test></test>, False: <test>`
  - Example - `{ hasInner: true } -> <test></test>`
- Content
  - Key name - `content`
  - Is required - `No`
  - Type - `String` or `Object` or `Array Object`
  - For - `InnerHTML of the element`
  - Example - `{ content: "Hello" } -> <test>Hello</test>`
  - Note - `This will not work when "hasInner" is false or null`
  - Note - `To add element inside, set the content type to array object or array`
- Attributes
  - Key name - `attr`
  - Is required - `No`
  - Type - `Object`
  - For - `Attributes for element key="value"`
  - Example - `{ attr: { color: "orange", font-family: "monospace" } } -> <test color="orange" font-family="monospace">`
