// *- when it is the last statement
(function () {
  var ctx = M.context();
  return M.pure();
});

function f_1(ctx, ex) {
  ctx._e = ex;
  return M.chain(eff(3), f_2, f_3);
}

function f_2(ctx) {
  return M.pure();
}

function f_3(ctx, e) {
  return M.raise(e);
}

function f_4(ctx, a) {
  return M.jump(f_1, f_3, a);
}