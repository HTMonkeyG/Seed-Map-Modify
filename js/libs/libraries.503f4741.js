!function () {
  function a(a) {
    var b = new Uint8Array(a.slice(0, 2));
    return 2 === b.length && 31 === b[0] && 139 === b[1]
  }
  function b(a) {
    var b, c, d = [];
    for (b = 0; b < a.length; b++)
      c = a.charCodeAt(b),
        128 > c ? d.push(c) : 2048 > c ? (d.push(192 | c >> 6),
          d.push(128 | 63 & c)) : 65536 > c ? (d.push(224 | c >> 12),
            d.push(128 | c >> 6 & 63),
            d.push(128 | 63 & c)) : (d.push(240 | c >> 18 & 7),
              d.push(128 | c >> 12 & 63),
              d.push(128 | c >> 6 & 63),
              d.push(128 | 63 & c));
    return d
  }
  function c(a) {
    var b, c = [];
    for (b = 0; b < a.length; b++)
      0 === (128 & a[b]) ? c.push(127 & a[b]) : b + 1 < a.length && 192 === (224 & a[b]) && 128 === (192 & a[b + 1]) ? c.push((31 & a[b]) << 6 | 63 & a[b + 1]) : b + 2 < a.length && 224 === (240 & a[b]) && 128 === (192 & a[b + 1]) && 128 === (192 & a[b + 2]) ? c.push((15 & a[b]) << 12 | (63 & a[b + 1]) << 6 | 63 & a[b + 2]) : b + 3 < a.length && 240 === (248 & a[b]) && 128 === (192 & a[b + 1]) && 128 === (192 & a[b + 2]) && 128 === (192 & a[b + 3]) && c.push((7 & a[b]) << 18 | (63 & a[b + 1]) << 12 | (63 & a[b + 2]) << 6 | 63 & a[b + 3]);
    return String.fromCharCode.apply(null, c)
  }
  function d(a, b, c) {
    return "slice" in a ? a.slice(b, c) : new Uint8Array([].slice.call(a, b, c))
  }
  if ("undefined" == typeof ArrayBuffer)
    throw new Error("Missing required type ArrayBuffer");
  if ("undefined" == typeof DataView)
    throw new Error("Missing required type DataView");
  if ("undefined" == typeof Uint8Array)
    throw new Error("Missing required type Uint8Array");
  var e = this
    , f = "undefined" != typeof require ? require("zlib") : window.zlib;
  e.tagTypes = {
    end: 0,
    "byte": 1,
    "short": 2,
    "int": 3,
    "long": 4,
    "float": 5,
    "double": 6,
    byteArray: 7,
    string: 8,
    list: 9,
    compound: 10,
    intArray: 11,
    longArray: 12
  },
    e.tagTypeNames = {},
    function () {
      for (var a in e.tagTypes)
        e.tagTypes.hasOwnProperty(a) && (e.tagTypeNames[e.tagTypes[a]] = a)
    }(),
    e.Writer = function () {
      function a(a) {
        var b = d.offset + a;
        if (!(f.byteLength >= b)) {
          for (var c = f.byteLength; b > c;)
            c *= 2;
          var e = new ArrayBuffer(c)
            , i = new Uint8Array(e);
          i.set(h),
            d.offset > f.byteLength && i.fill(0, f.byteLength, d.offset),
            f = e,
            g = new DataView(e),
            h = i
        }
      }
      function c(b, c, e) {
        return a(c),
          g["set" + b](d.offset, e),
          d.offset += c,
          d
      }
      var d = this
        , f = new ArrayBuffer(1024)
        , g = new DataView(f)
        , h = new Uint8Array(f);
      this.offset = 0,
        this.getData = function () {
          return a(0),
            f.slice(0, d.offset)
        }
        ,
        this[e.tagTypes.byte] = c.bind(this, "Int8", 1),
        this.ubyte = c.bind(this, "Uint8", 1),
        this[e.tagTypes.short] = c.bind(this, "Int16", 2),
        this[e.tagTypes.int] = c.bind(this, "Int32", 4),
        this[e.tagTypes.float] = c.bind(this, "Float32", 4),
        this[e.tagTypes.double] = c.bind(this, "Float64", 8),
        this[e.tagTypes.long] = function (a) {
          return d.int(a[0]),
            d.int(a[1]),
            d
        }
        ,
        this[e.tagTypes.byteArray] = function (b) {
          return this.int(b.length),
            a(b.length),
            h.set(b, this.offset),
            this.offset += b.length,
            this
        }
        ,
        this[e.tagTypes.intArray] = function (a) {
          this.int(a.length);
          var b;
          for (b = 0; b < a.length; b++)
            this.int(a[b]);
          return this
        }
        ,
        this[e.tagTypes.longArray] = function (a) {
          this.int(a.length);
          var b;
          for (b = 0; b < a.length; b++)
            this.long(a[b]);
          return this
        }
        ,
        this[e.tagTypes.string] = function (c) {
          var d = b(c);
          return this.short(d.length),
            a(d.length),
            h.set(d, this.offset),
            this.offset += d.length,
            this
        }
        ,
        this[e.tagTypes.list] = function (a) {
          this.byte(e.tagTypes[a.type]),
            this.int(a.value.length);
          var b;
          for (b = 0; b < a.value.length; b++)
            this[a.type](a.value[b]);
          return this
        }
        ,
        this[e.tagTypes.compound] = function (a) {
          var b = this;
          return Object.keys(a).map(function (c) {
            b.byte(e.tagTypes[a[c].type]),
              b.string(c),
              b[a[c].type](a[c].value)
          }),
            this.byte(e.tagTypes.end),
            this
        }
        ;
      var i;
      for (i in e.tagTypes)
        e.tagTypes.hasOwnProperty(i) && (this[i] = this[e.tagTypes[i]])
    }
    ,
    e.Reader = function (a) {
      function b(a, b) {
        var c = h["get" + a](f.offset, this.isBedrock);
        return f.offset += b,
          c
      }
      if (!a)
        throw new Error('Argument "buffer" is falsy');
      var f = this;
      this.offset = 0;
      var g = new Uint8Array(a)
        , h = new DataView(g.buffer);
      this.isBedrock = !1,
        0 === g[1] && 0 === g[2] && 0 === g[3] && (this.offset = 8,
          this.isBedrock = !0),
        this[e.tagTypes.byte] = b.bind(this, "Int8", 1),
        this.ubyte = b.bind(this, "Uint8", 1),
        this[e.tagTypes.short] = b.bind(this, "Int16", 2),
        this[e.tagTypes.int] = b.bind(this, "Int32", 4),
        this[e.tagTypes.float] = b.bind(this, "Float32", 4),
        this[e.tagTypes.double] = b.bind(this, "Float64", 8),
        this[e.tagTypes.long] = function () {
          return [this.int(), this.int()]
        }
        ,
        this[e.tagTypes.byteArray] = function () {
          var a, b = this.int(), c = [];
          for (a = 0; b > a; a++)
            c.push(this.byte());
          return c
        }
        ,
        this[e.tagTypes.intArray] = function () {
          var a, b = this.int(), c = [];
          for (a = 0; b > a; a++)
            c.push(this.int());
          return c
        }
        ,
        this[e.tagTypes.longArray] = function () {
          var a, b = this.int(), c = [];
          for (a = 0; b > a; a++)
            c.push(this.long());
          return c
        }
        ,
        this[e.tagTypes.string] = function () {
          var a = this.short()
            , b = d(g, this.offset, this.offset + a);
          return this.offset += a,
            c(b)
        }
        ,
        this[e.tagTypes.list] = function () {
          var a, b = this.byte(), c = this.int(), d = [];
          for (a = 0; c > a; a++)
            d.push(this[b]());
          return {
            type: e.tagTypeNames[b],
            value: d
          }
        }
        ,
        this[e.tagTypes.compound] = function () {
          for (var a = {}; ;) {
            var b = this.byte();
            if (b === e.tagTypes.end)
              break;
            var c = this.string()
              , d = this[b]();
            a[c] = {
              type: e.tagTypeNames[b],
              value: d
            }
          }
          return a
        }
        ;
      var i;
      for (i in e.tagTypes)
        e.tagTypes.hasOwnProperty(i) && (this[i] = this[e.tagTypes[i]])
    }
    ,
    e.writeUncompressed = function (a) {
      if (!a)
        throw new Error('Argument "value" is falsy');
      var b = new e.Writer;
      return b.byte(e.tagTypes.compound),
        b.string(a.name),
        b.compound(a.value),
        b.getData()
    }
    ,
    e.parseUncompressed = function (a) {
      if (!a)
        throw new Error('Argument "data" is falsy');
      var b = new e.Reader(a)
        , c = b.byte();
      if (c !== e.tagTypes.compound)
        throw new Error("Top tag should be a compound");
      return {
        name: b.string(),
        value: b.compound(),
        isBedrock: b.isBedrock
      }
    }
    ,
    e.parse = function (b, c) {
      if (!b)
        throw new Error('Argument "data" is falsy');
      var d = this;
      if (a(b))
        if (f) {
          var e;
          e = b.length ? b : "undefined" != typeof Buffer ? new Buffer(b) : new Uint8Array(b),
            f.gunzip(e, function (a, b) {
              a ? c(a, null) : c(null, d.parseUncompressed(b))
            })
        } else
          c(new Error("NBT archive is compressed but zlib is not available"), null);
      else
        c(null, d.parseUncompressed(b))
    }
}
  .apply("undefined" != typeof exports ? exports : window.nbt = {});