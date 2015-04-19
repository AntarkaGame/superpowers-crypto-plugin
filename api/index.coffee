fs = require 'fs'
fix = 
"""
interface ArrayBufferView {}
declare var ArrayBufferView: {};

interface ArrayBuffer {}
declare var ArrayBuffer: {};

interface Int8Array {}
declare var Int8Array: {};

interface Int32Array {}
declare var Int32Array: {};

interface Float32Array {}
declare var Float32Array: {};
"""
SupAPI.registerPlugin 'typescript', 'CryptoJS ', {
  code: "declare var CryptoJS;"
  defs: fs.readFileSync(__dirname + '/crypto.d.ts', encoding: 'utf8') + fix
}
