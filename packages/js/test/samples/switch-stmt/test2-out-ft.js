function a() {
  var a = M.context();
  return M.chain(eff(1), a_1, a_5);
}

function a_1(a, b) {
  a._pat = b;
  return M.chain(check(1), a_2, a_5);
}

function a_2(a, b) {
  if (a._pat === b) {
    return M.chain(effB(1), a_4, a_5);
  } else {
    return M.chain(check(2), a_3, a_5);
  }
}

function a_3(a, b) {
  if (a._pat === b) {
    return M.chain(effB(2), a_4, a_5);
  } else {
    return M.chain(effB(3), a_4, a_5);
  }
}

function a_4(a) {
  return M.pure();
}

function a_5(a, e) {
  return M.raise(e);
}