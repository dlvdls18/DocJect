// https://github.com/dlvdls18/DocJect
var DocJect = {
  toJSON(arg) {
    var target = null;
    if(arg instanceof HTMLElement) target = arg;
    else {
      var local = document.createElement("div");
      local.innerHTML = arg;
      target = local.childNodes[0];
    }
    var instance = {
      tag: target.localName,
      hasInner: target.innerHTML != "",
      content: null,
      attr: null
    }
    // attributes
    for(var i = 0; i < target.attributes.length; i++) {
      var attr = target.attributes.item(attr);
      console.log(attr);
    }
    // content
    
    return instance;
  }
}