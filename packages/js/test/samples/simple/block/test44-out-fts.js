function a() {
  return M.chain(eff1(), a_1, a_4);
}

function a_1() {
  if (a) {
    return M.chain(eff5(5), a_3, a_4);
  } else {
    return M.chain(eff6(), a_2, a_4);
  }
}

function a_2() {
  var r;
  return M.pure(r);
}

function a_3(r) {
  return M.pure(r);
}

function a_4(e) {
  return M.raise(e);
}