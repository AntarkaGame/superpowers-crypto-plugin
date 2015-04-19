# superpowers-crypto-plugin
crypto-JS plugin for Superpowers, the extensible HTML5 2D+3D game engine.

# Documentation

### Use crypto-JS as usual : 

```javascript
var hash = CryptoJS.SHA1("password"); // Return an object.
// var hash = CryptoJS.SHA1("password,"your secret key here");

Sup.log(hash.toString()); 
// 155baa61e4c9b93f3f0682250b6cf8331b7ee68fd8

Sup.log(hash.toString(CryptoJS.enc.Base64));
// 15W6ph5Mm5Pz8GgiULbPgzG37mj9g= 

hash = CryptoJS.MD5("password"); 
// etc...
```

### More here : 

https://code.google.com/p/crypto-js/

# Installation 

[Download the latest release](https://github.com/fraxken/superpowers-crypto-plugin/archive/master.zip), unzip it, rename the folder to Jquery, move it inside app/plugins/fraxken/ then restart your server.
