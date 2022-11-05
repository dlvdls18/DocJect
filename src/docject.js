// https://github.com/dlvdls18/DocJect
// tag, content, hasInner, attr
var DocJect = {
  toJSON(arg) {
    var targets = [];
    if(arg instanceof HTMLElement) targets.push(arg);
    else {
      var local = document.createElement("div");
      local.innerHTML = arg;
      targets = [...local.childNodes].filter(function(target) {
        return target instanceof HTMLElement;
      });
    }
    return targets.length == 1 ? targets[0] : targets;
  }
}