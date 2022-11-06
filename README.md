# DocJect

![DocJect](docject.png)

Convert HTML Element and JSON

```js
DocJect.toHTML({
  tag: "p",
  hasInner: true,
  content: ["Hello, World!"],
  attr: {
    style: "color:red"
  }
});

// <p style="color:red">Hello, World!</p>
```

```js
DocJect.toJSON(document.createElement("input"));

/*
{
  tag: "input",
  hasInner: false,
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
Use the variable (object) `DocJect` which contains the 2 main function.

```js
DocJect.toJSON(/* HTMLElement */); // returns object
DocJect.toHTML(/* Object */); // returns HTMLElement
```


## Keys

| Name  | Value  |       Description      |
|:-----:|:------:|:----------------------:|
| `tag` | String | Tag name of the element |
| `hasInner` | Boolean | If the element has inner |
| `content` | Array | Content of the element |
| `attr` | Object | Attributes of the element |
