//MK

export const _cnc = args => {
  let txt = "";
  for (let i in args) txt += JSON.stringify(args[i]) + " ";
  return txt;
};

export const debug = args => {
  const fs = require("fs"),
    txt = this._cnc(args);
  fs.writeFileSync("debug.log", txt + "\n", { flag: "a" });
};

export const log = () => {
  const dt = new Date();
  let cons,
    args = Array.prototype.slice.call(arguments, 0);
  let dtf = `${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()}.${dt.getMilliseconds()}`;

  args.unshift(dtf);

  if (global.window) {
    cons = global.window.console;
  } else {
    cons = console;
  }

  args.unshift("\n");
  cons.log.apply(cons, args);
};
