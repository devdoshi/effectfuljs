var $M = require("@effectful/debugger"),
    $ret = $M.ret,
    $unhandled = $M.unhandled,
    $brk = $M.brk,
    $m = $M.module("file.js", null, typeof module === "undefined" ? null : module, null, "$", {
  __webpack_require__: typeof __webpack_require__ !== "undefined" && __webpack_require__
}, null),
    $s$1 = [{
  a: [1, "1:9-1:10"]
}, null, 0],
    $s$2 = [{}, $s$1, 1],
    $m$0 = $M.fun("m$0", "file.js", null, null, [], 0, 2, "1:0-5:0", 32, function ($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $l[1] = $m$1($);
      $.goto = 2;
      continue;

    case 1:
      $.goto = 2;
      return $unhandled($.error);

    case 2:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, null, null, 0, [[0, "1:0-4:1", $s$1], [16, "5:0-5:0", $s$1], [16, "5:0-5:0", $s$1]]),
    $m$1 = $M.fun("m$1", "a", null, $m$0, [], 0, 1, "1:0-4:1", 0, function ($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $.goto = 1;
      $brk();
      $.state = 1;

    case 1:
      if (true) {
        $.state = 2;
      } else {
        $.goto = 4;
        continue;
      }

    case 2:
      $.goto = 3;
      $brk();
      $.state = 3;

    case 3:
      $.result = 2;
      $.goto = 7;
      continue;

    case 4:
      $.goto = 5;
      $brk();
      $.state = 5;

    case 5:
      $.result = 3;
      $.goto = 7;
      continue;

    case 6:
      $.goto = 7;
      return $unhandled($.error);

    case 7:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, null, null, 1, [[4, "2:2-2:21", $s$2], [0, null, $s$2], [4, "2:12-2:21", $s$2], [0, "2:19-2:20", $s$2], [4, "3:2-3:11", $s$2], [0, "3:9-3:10", $s$2], [16, "4:1-4:1", $s$2], [16, "4:1-4:1", $s$2]]);

$M.moduleExports();