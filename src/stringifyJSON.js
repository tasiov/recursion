// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var result = "";

  function recurse(obj) {
    if (obj === null) {
      result += "null";
      return;
    } else if (typeof obj === "string") {
      result += '"' + obj.toString() + '"';
      return;
    } else if (typeof obj === "number" || typeof obj === "boolean") {
      result += obj.toString();
      return;
    }

    if (Array.isArray(obj)) {
      result += "[";
      for (var i = 0; i < obj.length; i++) {
        if (i > 0) {
          result += ",";
        }
        recurse(obj[i]);
      }
      result += "]";
    } else {
      result += "{";
      var first = true;
      for (var i in obj) {
        if (typeof obj[i] != "function" && typeof obj[i] != "undefined") {
          if (first === false) {
            result += ",";
            first = false;
          }
          result += '"' + i + '":';
          recurse(obj[i]);
          first = false;
          }
      }
      result += "}";
    }
  };

  recurse(obj);

  return result;
};


  // var result = "";

  // result = recurse(obj);
  // return result;

