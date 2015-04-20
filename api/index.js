var fix, fs;

fs = require('fs');

fix = "interface ArrayBufferView {}\ndeclare var ArrayBufferView: {};\n\ninterface ArrayBuffer {}\ndeclare var ArrayBuffer: {};\n\ninterface Int8Array {}\ndeclare var Int8Array: {};\n\ninterface Int32Array {}\ndeclare var Int32Array: {};\n\ninterface Float32Array {}\ndeclare var Float32Array: {};";

SupAPI.registerPlugin('typescript', 'CryptoJS ', {
  code: "declare var CryptoJS;",
  defs: fs.readFileSync(__dirname + '/crypto.d.ts.txt', {
    encoding: 'utf8'
  }) + fix
});