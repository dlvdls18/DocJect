# DocJect
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
DocJect.toJSON("<p style="color:red">Hello, World!</p>");

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
