function a() {
  var a = M.context();
  return M.chain(eff1(), a_1, a_6);
}

function a_1(a) {
  return M.chain(eff2(), a_2, a_6);
}

function a_2(a) {
  return M.chain(eff3(), a_3, a_6);
}

function a_3(a) {
  return M.chain(eff(4), a_4, a_6);
}

function a_4(a, b) {
  if (b) {
    return M.chain(eff(5), a_5, a_6);
  } else {
    return M.pure();
  }
}

function a_5(a) {
  return M.pure();
}

function a_6(a, e) {
  return M.raise(e);
}