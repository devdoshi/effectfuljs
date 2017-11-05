// *- when branches has effects and it is the last statement
function a() {
  var r;

  if (true) {
    return M.chain(eff(1), _1, _2);
  } else {
    return M.chain(eff(2), _1, _2);
  }

  function _1(r) {
    return M.pure(r);
  }

  function _2(e) {
    return M.raise(e);
  }
}

function b() {
  var r;

  if (true) {
    return M.chain(eff(1), _1, _2);
  } else {
    return M.chain(eff(2), _1, _2);
  }

  function _1(r) {
    return M.pure(r);
  }

  function _2(e) {
    return M.raise(e);
  }
}

function c() {
  if (true) {
    return M.chain(eff(1), _1, _4);
  } else {
    return M.chain(eff(2), _1, _4);
  }

  function _1() {
    return M.chain(eff(3), _2, _4);
  }

  function _2() {
    return M.chain(eff(4), _3, _4);
  }

  function _3() {
    return M.pure();
  }

  function _4(e) {
    return M.raise(e);
  }
}

function d() {
  return M.chain(eff('a'), _1, _5);

  function _1() {
    if (true) {
      return M.chain(eff(1), _2, _5);
    } else {
      return M.chain(eff(2), _2, _5);
    }
  }

  function _2() {
    return M.chain(eff(3), _3, _5);
  }

  function _3() {
    return M.chain(eff(4), _4, _5);
  }

  function _4() {
    return M.pure();
  }

  function _5(e) {
    return M.raise(e);
  }
}

function e() {
  var r;
  return M.chain(eff(1), _1, _2);

  function _1(a) {
    if (a) {
      return M.pure(1);
    } else {
      return M.pure(2);
    }
  }

  function _2(e) {
    return M.raise(e);
  }
}

function f() {
  var r;
  return M.chain(eff(1), _1, _2);

  function _1(a) {
    if (a) {
      return M.pure(1);
    } else {
      return M.pure(2);
    }
  }

  function _2(e) {
    return M.raise(e);
  }
}