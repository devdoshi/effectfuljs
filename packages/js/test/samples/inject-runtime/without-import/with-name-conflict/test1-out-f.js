import * as _M from '@effectful/generators';

var _a = _M.generatorFunction(a);

var M = 10;

function a() {
  return _M.scope(_1, _5, _4);

  function _1() {
    return _M.yld(1, _2, _5, _4);
  }

  function _2() {
    return _M.yld(2, _3, _5, _4);
  }

  function _3() {
    return _M.pure();
  }

  function _4(r) {
    return _M.pure(r);
  }

  function _5(e) {
    return _M.raise(e);
  }
}