function a() {
  return M.chain(eff(1), _1, _5);

  function _1(a) {
    return M.chain(eff(2), _2, _5, a);
  }

  function _2(b, a) {
    return M.chain(eff(3), _3, _5, a, b);
  }

  function _3(c, a, b) {
    return M.chain(a(b, c, 4), _4, _5);
  }

  function _4() {
    return M.pure();
  }

  function _5(e) {
    return M.raise(e);
  }
}