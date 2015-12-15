// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  $body = $('body');
  var results = [];

  function recurse(className, element) {
    if (element[0] === undefined) {
      return;
    }
    var classes = element[0].className.split(' ');
    if (classes.includes(className)) {
      results.push(element[0]);
    }
    recurse(className, element.children().first());
    recurse(className, element.next());
  }

  recurse(className, $body);

  return results;
};
