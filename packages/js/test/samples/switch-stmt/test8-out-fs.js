// *- with state
function a() {
  var i;
  i = 0;
  return M.chain(eff(), _1, _7, i);

  function _1(i) {
    var a;
    a = i += 1;
    return M.chain(eff(a), _2, _7, i);
  }

  function _2(a, i) {
    var b;
    pat = a;
    b = i += 2;
    return M.chain(check(b), _3, _7, i);
  }

  function _3(a, i) {
    var b, c;

    if (pat === a) {
      b = i += 3;
      return M.chain(effB(b), _6, _7);
    } else {
      c = i += 4;
      return M.chain(check(c), _4, _7, i);
    }
  }

  function _4(a, i) {
    var b, c;

    if (pat === a) {
      b = i += 5;
      return M.chain(effB(b), _6, _7);
    } else {
      c = i += 6;
      return M.chain(check(c), _5, _7, i);
    }
  }

  function _5(a, i) {
    if (pat === a) {
      console.log('hi', i);
    }

    return M.chain(eff(i), _6, _7);
  }

  function _6() {
    return M.pure();
  }

  function _7(e) {
    return M.raise(e);
  }
}