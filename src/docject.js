// https://github.com/dlvdls18/DocJect
var DocJect = {
  toHTML(json) {
    var h = "";
    (typeof json == "object" && !Array.isArray(json) ? [json] : json).forEach(function(el) {
      if(el.hasInner) h += `<${el.tag}${DocJect.attrOf(el.attr)}>${typeof el.content == "object" ? DocJect.toHTML(el.content) : el.content}</${el.tag}>`;
      else h += `<${el.tag}${DocJect.attrOf(el.attr)}>`;
    });
    return h;
  },
  attrOf(attr) {
    if(attr == null) return "";
    var a = "";
    for(var at in attr) {
      a += ` ${at}="${attr[at]}"`;
    }
    return a;
  },
  toJSON(html) {
    var d = document.createElement("div");
    d.innerHTML = html;
    var j = [];
    var cn = [...d.childNodes];
    var ncn = [];
    cn.forEach(function(n) {
      if(n instanceof HTMLElement) ncn.push(n);
    });
    ncn.forEach(function(el) {
      var jr = { tag:el.localName };
      for(var i = 0; i < el.attributes.length; i++) {
        if(!jr.attr) jr.attr = {};
        jr.attr[el.attributes.item(i).name] = el.attributes.item(i).value;
      }
      if(document.createElement(el.localName).outerHTML.includes("/")) {
        jr.hasInner = true;
        jr.content = el.textContent;
      } else jr.hasInner = false;
      j.push(jr);
    });
    return j.length == 1 ? j[0] : j;
  }
}