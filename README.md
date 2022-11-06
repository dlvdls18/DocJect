# DocJect

![DocJect](docject.png)

Convert HTML Element and Object

```js
DocJect.object(document.createElement("input"));
/*
{
  tag: "input",
  content: [],
  attr: {}
}
*/
```

# Installation
```html
<script src="https://cdn.jsdelivr.net/gh/dlvdls18/DocJect@main/src/docject.js"></script>
```

# Documentation

## Methods

```js
/*
 * Converts HTMLElement to Object
 * DocJect.object(HTMLElement);
 * Returns Object
 */
DocJect.object();

/*
 * Converts Object to HTMLElement
 * DocJect.element(Object);
 * Returns HTMLElement
 */
DocJect.element();
```


## Keys

| Name  | Value  |       Description      |
|:-----:|:------:|:----------------------:|
| `tag` | String | Tag name of the element |
| `content` | Array | Content of the element |
| `attr` | Object | Attributes of the element |

### Key pair attributes
```js
attr = {
  color: "red"
}
// <... color="red"></...>
```

### Content
Content array values can be `Object` and `String`.
```
content = [
  "Hello",
  {
    tag: "b",
    content: ["World"],
    attr: {}
  }
];
// <...>Hello<b>World</b></...>
```
