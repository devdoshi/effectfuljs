function a() {
  return M.chain(eff1(), _1, _7);

  function _1() {
    return M.chain(eff2(), _2, _7);
  }

  function _2() {
    return M.chain(eff(3), _3, _7);
  }

  function _3(a) {
    if (a) {
      return M.chain(eff5(), _4, _7);
    } else {
      return M.chain(eff7(), _6, _7);
    }
  }

  function _4() {
    return M.chain(eff6(), _5, _7);
  }

  function _5() {
    return M.repeat(eff4(), _2, _7);
  }

  function _6() {
    return M.pure();
  }

  function _7(e) {
    return M.raise(e);
  }
}