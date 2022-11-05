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
    
    // content
    
    return instance;
  }
}