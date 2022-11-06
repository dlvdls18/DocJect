// https://github.com/dlvdls18/DocJect (v1.1)
var DocJect = {
  object(target) {
    var instance = {
      tag: target.localName,
      content: [],
      attr: {}
    }
    // attributes
    for(var i = 0; i < target.attributes.length; i++) {
      var attr = target.attributes.item(i);
      instance.attr[attr.localName] = attr.value;
    }
    // content
    [...target.childNodes].forEach(function(node) {
      if(node instanceof HTMLElement) {
        instance.content.push(DocJect.object(node));
      } else if(node instanceof Text) {
        instance.content.push(node.wholeText);
      }
    });
    return instance;
  },
  element(obj) {
    var el = document.createElement(obj.tag);
    // attributes
    for(var attr in obj.attr)
    el.setAttribute(attr, obj.attr[attr]);
    // content
    obj.content.forEach(function(node) {
      if(typeof node == "object")
      el.append(DocJect.element(node));
      else
      el.append(new Text(node));
    });
    return el;
  }
}
