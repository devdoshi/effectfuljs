function a_1(a) {
  return M.jMB(eff(2), a_2, a);
}

function a_2(b, a) {
  return M.jMB(eff(3), a_3, a, b);
}

function a_3(c, a, b) {
  return a(b, c, 4);
}

function a() {
  return M.jMB(eff(1), a_1);
}