function a() {
  var a = M.context();
  return M.chain(eff0(), a_1, a_6);
}

function a_1(a) {
  a._i = 0;
  a._i++;
  return M.chain(eff1(a._i), a_2, a_6);
}

function a_2(a) {
  a._i++;

  if (t) {
    return M.chain(eff2(a._i), a_3, a_6);
  } else {
    a._i++;
    return M.jump(a_4, a_6);
  }
}

function a_3(a) {
  a._i++;
  return M.chain(eff4(a._i), a_4, a_6);
}

function a_4(a) {
  return M.chain(eff5(a._i), a_5, a_6);
}

function a_5(a) {
  return M.pure();
}

function a_6(a, e) {
  return M.raise(e);
}