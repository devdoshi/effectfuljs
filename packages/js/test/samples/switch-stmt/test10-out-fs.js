function a() {
  var i;
  i = 0;
  return M.chain(eff(), _1, _4, i);

  function _1(i) {
    var a;
    i += 1;

    switch (i += 2) {
      case 1:
        a = i += 3;
        return M.chain(effB(a), _2, _4, i);

      case 2:
        return M.chain(effB(i), _2, _4, i);

      case 3:
        {
          console.log('hi', i);
        }

      default:
        return M.jump(_2, _4, i);
    }
  }

  function _2(i) {
    return M.chain(eff(i), _3, _4);
  }

  function _3() {
    return M.pure();
  }

  function _4(e) {
    return M.raise(e);
  }
}