function patternGenerator(c) {
  if (c < -5 || c > 20) return "out of range";
  if (c <= 0) return "";

  //set array for tmp_data
  var ans = [];

  // set first block
  for (var i = 0; i < c - 1; ++i) {
    var s = "";
    for (var j = 0; j < c - 1 - i; ++j) s += " ";
    var count = 0;
    var h = 0;
    for (; j < c; ++j) {
      if (h % 2 == 1) {
        if (j != c - 1) s += " ";
      } else {
        if (count % 2 == 0) s += "x";
        else s += "o";
        count++;
      }
      h++;
    }
    ans.push(s);
  }

  // set second block
  var count = 0;
  var s = "";
  for (var i = 0; i < c; ++i)
    if (i % 2 == 0) {
      if (count % 2 == 0) s += "x";
      else s += "o";
      count++;
    } else s += " ";
  var w = "";
  for (var i = c - 2; i >= 0; --i) w += s[i];
  ans.push(s + w);
  for (var i = 0; i < c - 1; ++i) {
    var s = "";
    for (var j = 0; j < c - 1; ++j) s += " ";
    if (i != 0) w = w.slice(1);
    s += w;
    while (s.length < 2 * c) s += " ";
    ans.push(s);
  }
  return ans.join("\n");
}

// test the function, please set value of pattern
console.log(patternGenerator(20));
