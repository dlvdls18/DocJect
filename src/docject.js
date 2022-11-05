// https://github.com/dlvdls18/DocJect
var DocJect = {
  toJSON(target) {
    var instance = {
      tag: target.localName,
      hasInner: target.innerHTML != "",
      content: null,
      attr: null
    }
    console.log(target);
    // attributes
    for(var i = 0; i < target.attributes.length; i++) {
      var attr = target.attributes.item(attr);
      console.log(attr);
    }
    // content
    
    return instance;
  }
}