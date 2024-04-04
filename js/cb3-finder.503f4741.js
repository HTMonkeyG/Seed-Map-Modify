"use strict";
Math.frac = function (a) { return a - Math.trunc(a) }
function memoizeQuickLRU(a, b) {
  var c = new QuickLRU(b)
    , d = function () {
      var d = b.hash.apply(null, arguments);
      if (c.has(d))
        return c.get(d);
      var e = a.apply(null, arguments);
      return "undefined" != typeof e && c.set(d, e),
        e
    };
  return d.clear = function () {
    c.clear()
  }
    ,
    d
}
function handleBedrockSeed(a) {
  function b(a) {
    return {
      seed: CB3Libs.Long.fromInt(a.toInt()),
      seedDisplay: a.toInt()
    }
  }
  function c(c, h) {
    var i = null != c ? c : CB3Libs.Long.ONE;
    e = c;
    var j = null;
    if (d.use32BitSeed) {
      var k = b(i);
      i = k.seed,
        j = k.seedDisplay
    }
    (h !== g || null != f && !i.equals(f)) && (f = i,
      g = h,
      a.trigger("seedchange", [i, h, j]))
  }
  var d = {}
    , e = null
    , f = null
    , g = null;
  a.on("seedchangeui", function (a, b, d) {
    c(b, d)
  }),
    a.on("platformchange", function (a, b) {
      var f = d;
      d = b,
        f.use32BitSeed !== b.use32BitSeed && c(e, g)
    })
}
window.__seedMapPoisSprite = {
  "amethyst.png": {
    x: 78,
    y: 104,
    width: 26,
    height: 25
  },
  "ancient-city.png": {
    x: 0,
    y: 154,
    width: 16,
    height: 26
  },
  "bastion-bridge.png": {
    x: 30,
    y: 0,
    width: 26,
    height: 26
  },
  "bastion-stables.png": {
    x: 0,
    y: 26,
    width: 26,
    height: 26
  },
  "bastion-treasure.png": {
    x: 26,
    y: 26,
    width: 26,
    height: 26
  },
  "bastion-units.png": {
    x: 56,
    y: 0,
    width: 26,
    height: 26
  },
  "buried-treasure.png": {
    x: 134,
    y: 99,
    width: 24,
    height: 24
  },
  "cave.png": {
    x: 56,
    y: 26,
    width: 26,
    height: 26
  },
  "desert-temple.png": {
    x: 0,
    y: 52,
    width: 26,
    height: 26
  },
  "desert-well.png": {
    x: 160,
    y: 22,
    width: 22,
    height: 25
  },
  "dungeon-skeleton.png": {
    x: 0,
    y: 130,
    width: 24,
    height: 24
  },
  "dungeon-spider.png": {
    x: 24,
    y: 130,
    width: 24,
    height: 24
  },
  "dungeon-zombie.png": {
    x: 48,
    y: 130,
    width: 24,
    height: 24
  },
  "dungeon.png": {
    x: 72,
    y: 130,
    width: 24,
    height: 24
  },
  "end-city-ship.png": {
    x: 26,
    y: 52,
    width: 26,
    height: 26
  },
  "end-city.png": {
    x: 52,
    y: 52,
    width: 26,
    height: 26
  },
  "end-gateway.png": {
    x: 82,
    y: 0,
    width: 26,
    height: 26
  },
  "fossil.png": {
    x: 104,
    y: 104,
    width: 26,
    height: 25
  },
  "golden-apple.png": {
    x: 134,
    y: 24,
    width: 23,
    height: 26
  },
  "igloo-basement.png": {
    x: 82,
    y: 26,
    width: 26,
    height: 26
  },
  "igloo.png": {
    x: 82,
    y: 52,
    width: 26,
    height: 26
  },
  "jungle-temple.png": {
    x: 0,
    y: 78,
    width: 26,
    height: 26
  },
  "mansion.png": {
    x: 96,
    y: 130,
    width: 24,
    height: 24
  },
  "mineshaft.png": {
    x: 134,
    y: 50,
    width: 23,
    height: 26
  },
  "nether-fortress.png": {
    x: 26,
    y: 78,
    width: 26,
    height: 26
  },
  "ocean-monument.png": {
    x: 134,
    y: 76,
    width: 26,
    height: 23
  },
  "ocean-ruin-special.png": {
    x: 52,
    y: 78,
    width: 26,
    height: 26
  },
  "ocean-ruin.png": {
    x: 78,
    y: 78,
    width: 26,
    height: 26
  },
  "pillager-outpost.png": {
    x: 108,
    y: 0,
    width: 26,
    height: 26
  },
  "ravine-special.png": {
    x: 108,
    y: 26,
    width: 26,
    height: 26
  },
  "ravine-underwater-special.png": {
    x: 108,
    y: 52,
    width: 26,
    height: 26
  },
  "ravine-underwater.png": {
    x: 108,
    y: 78,
    width: 26,
    height: 26
  },
  "ravine.png": {
    x: 0,
    y: 104,
    width: 26,
    height: 26
  },
  "raw-copper.png": {
    x: 160,
    y: 0,
    width: 26,
    height: 22
  },
  "raw-iron.png": {
    x: 134,
    y: 0,
    width: 26,
    height: 24
  },
  "ruined-portal.png": {
    x: 26,
    y: 104,
    width: 26,
    height: 26
  },
  "shipwreck.png": {
    x: 160,
    y: 125,
    width: 21,
    height: 24
  },
  "spawn.png": {
    x: 0,
    y: 0,
    width: 30,
    height: 26
  },
  "stronghold.png": {
    x: 120,
    y: 130,
    width: 24,
    height: 24
  },
  "trail-ruin.png": {
    x: 52,
    y: 104,
    width: 26,
    height: 26
  },
  "village-zombie.png": {
    x: 160,
    y: 47,
    width: 20,
    height: 26
  },
  "village.png": {
    x: 160,
    y: 73,
    width: 20,
    height: 26
  },
  "witch-hut.png": {
    x: 160,
    y: 99,
    width: 20,
    height: 26
  }
},
  window.__seedMapPoisSpriteImage = "data:image/PNG;base64,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",
  !function (a, b) {
    "object" == typeof exports && "object" == typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define([], b) : "object" == typeof exports ? exports.CB3Libs = b() : a.CB3Libs = b()
  }(this, function () {
    return function () {
      function a(d) {
        var e = c[d];
        if (void 0 !== e)
          return e.exports;
        var f = c[d] = {
          exports: {}
        };
        return b[d](f, f.exports, a),
          f.exports
      }
      var b = {
        720: function (a) {
          function b(a, b, c) {
            this.low = 0 | a,
              this.high = 0 | b,
              this.unsigned = !!c
          }
          function c(a) {
            return !0 === (a && a.__isLong__)
          }
          function d(a, b) {
            var c, d, e;
            return b ? (e = 0 <= (a >>>= 0) && 256 > a) && (d = k[a]) ? d : (c = f(a, 0 > (0 | a) ? -1 : 0, !0),
              e && (k[a] = c),
              c) : (e = -128 <= (a |= 0) && 128 > a) && (d = j[a]) ? d : (c = f(a, 0 > a ? -1 : 0, !1),
                e && (j[a] = c),
                c)
          }
          function e(a, b) {
            if (isNaN(a))
              return b ? r : q;
            if (b) {
              if (0 > a)
                return r;
              if (a >= n)
                return w
            } else {
              if (-o >= a)
                return x;
              if (a + 1 >= o)
                return v
            }
            return 0 > a ? e(-a, b).neg() : f(a % m | 0, a / m | 0, b)
          }
          function f(a, c, d) {
            return new b(a, c, d)
          }
          function g(a, b, c) {
            if (0 === a.length)
              throw Error("empty string");
            if ("NaN" === a || "Infinity" === a || "+Infinity" === a || "-Infinity" === a)
              return q;
            if ("number" == typeof b ? (c = b,
              b = !1) : b = !!b,
              (c = c || 10) < 2 || c > 36)
              throw RangeError("radix");
            var d;
            if ((d = a.indexOf("-")) > 0)
              throw Error("interior hyphen");
            if (0 === d)
              return g(a.substring(1), b, c).neg();
            for (var f = e(l(c, 8)), h = q, i = 0; i < a.length; i += 8) {
              var j = Math.min(8, a.length - i)
                , k = parseInt(a.substring(i, i + j), c);
              if (8 > j) {
                var m = e(l(c, j));
                h = h.mul(m).add(e(k))
              } else
                h = (h = h.mul(f)).add(e(k))
            }
            return h.unsigned = b,
              h
          }
          function h(a, b) {
            return "number" == typeof a ? e(a, b) : "string" == typeof a ? g(a, b) : f(a.low, a.high, "boolean" == typeof b ? b : a.unsigned)
          }
          a.exports = b;
          var i = null;
          try {
            i = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports
          } catch (a) { }
          b.prototype.__isLong__,
            Object.defineProperty(b.prototype, "__isLong__", {
              value: !0
            }),
            b.isLong = c;
          var j = {}
            , k = {};
          b.fromInt = d,
            b.fromNumber = e,
            b.fromBits = f;
          var l = Math.pow;
          b.fromString = g,
            b.fromValue = h;
          var m = 4294967296
            , n = m * m
            , o = n / 2
            , p = d(1 << 24)
            , q = d(0);
          b.ZERO = q;
          var r = d(0, !0);
          b.UZERO = r;
          var s = d(1);
          b.ONE = s;
          var t = d(1, !0);
          b.UONE = t;
          var u = d(-1);
          b.NEG_ONE = u;
          var v = f(-1, 2147483647, !1);
          b.MAX_VALUE = v;
          var w = f(-1, -1, !0);
          b.MAX_UNSIGNED_VALUE = w;
          var x = f(0, -2147483648, !1);
          b.MIN_VALUE = x;
          var y = b.prototype;
          y.toInt = function () {
            return this.unsigned ? this.low >>> 0 : this.low
          }
            ,
            y.toNumber = function () {
              return this.unsigned ? (this.high >>> 0) * m + (this.low >>> 0) : this.high * m + (this.low >>> 0)
            }
            ,
            y.toString = function (a) {
              if ((a = a || 10) < 2 || a > 36)
                throw RangeError("radix");
              if (this.isZero())
                return "0";
              if (this.isNegative()) {
                if (this.eq(x)) {
                  var b = e(a)
                    , c = this.div(b)
                    , d = c.mul(b).sub(this);
                  return c.toString(a) + d.toInt().toString(a)
                }
                return "-" + this.neg().toString(a)
              }
              for (var f = e(l(a, 6), this.unsigned), g = this, h = ""; ;) {
                var i = g.div(f)
                  , j = (g.sub(i.mul(f)).toInt() >>> 0).toString(a);
                if ((g = i).isZero())
                  return j + h;
                for (; j.length < 6;)
                  j = "0" + j;
                h = "" + j + h
              }
            }
            ,
            y.getHighBits = function () {
              return this.high
            }
            ,
            y.getHighBitsUnsigned = function () {
              return this.high >>> 0
            }
            ,
            y.getLowBits = function () {
              return this.low
            }
            ,
            y.getLowBitsUnsigned = function () {
              return this.low >>> 0
            }
            ,
            y.getNumBitsAbs = function () {
              if (this.isNegative())
                return this.eq(x) ? 64 : this.neg().getNumBitsAbs();
              for (var a = 0 != this.high ? this.high : this.low, b = 31; b > 0 && 0 == (a & 1 << b); b--)
                ;
              return 0 != this.high ? b + 33 : b + 1
            }
            ,
            y.isZero = function () {
              return 0 === this.high && 0 === this.low
            }
            ,
            y.eqz = y.isZero,
            y.isNegative = function () {
              return !this.unsigned && this.high < 0
            }
            ,
            y.isPositive = function () {
              return this.unsigned || this.high >= 0
            }
            ,
            y.isOdd = function () {
              return 1 == (1 & this.low)
            }
            ,
            y.isEven = function () {
              return 0 == (1 & this.low)
            }
            ,
            y.equals = function (a) {
              return c(a) || (a = h(a)),
                (this.unsigned === a.unsigned || this.high >>> 31 != 1 || a.high >>> 31 != 1) && this.high === a.high && this.low === a.low
            }
            ,
            y.eq = y.equals,
            y.notEquals = function (a) {
              return !this.eq(a)
            }
            ,
            y.neq = y.notEquals,
            y.ne = y.notEquals,
            y.lessThan = function (a) {
              return this.comp(a) < 0
            }
            ,
            y.lt = y.lessThan,
            y.lessThanOrEqual = function (a) {
              return this.comp(a) <= 0
            }
            ,
            y.lte = y.lessThanOrEqual,
            y.le = y.lessThanOrEqual,
            y.greaterThan = function (a) {
              return this.comp(a) > 0
            }
            ,
            y.gt = y.greaterThan,
            y.greaterThanOrEqual = function (a) {
              return this.comp(a) >= 0
            }
            ,
            y.gte = y.greaterThanOrEqual,
            y.ge = y.greaterThanOrEqual,
            y.compare = function (a) {
              if (c(a) || (a = h(a)),
                this.eq(a))
                return 0;
              var b = this.isNegative()
                , d = a.isNegative();
              return b && !d ? -1 : !b && d ? 1 : this.unsigned ? a.high >>> 0 > this.high >>> 0 || a.high === this.high && a.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(a).isNegative() ? -1 : 1
            }
            ,
            y.comp = y.compare,
            y.negate = function () {
              return !this.unsigned && this.eq(x) ? x : this.not().add(s)
            }
            ,
            y.neg = y.negate,
            y.add = function (a) {
              c(a) || (a = h(a));
              var b = this.high >>> 16
                , d = 65535 & this.high
                , e = this.low >>> 16
                , g = 65535 & this.low
                , i = a.high >>> 16
                , j = 65535 & a.high
                , k = a.low >>> 16
                , l = 0
                , m = 0
                , n = 0
                , o = 0;
              return n += (o += g + (65535 & a.low)) >>> 16,
                m += (n += e + k) >>> 16,
                l += (m += d + j) >>> 16,
                l += b + i,
                f((n &= 65535) << 16 | (o &= 65535), (l &= 65535) << 16 | (m &= 65535), this.unsigned)
            }
            ,
            y.subtract = function (a) {
              return c(a) || (a = h(a)),
                this.add(a.neg())
            }
            ,
            y.sub = y.subtract,
            y.multiply = function (a) {
              if (this.isZero())
                return q;
              if (c(a) || (a = h(a)),
                i)
                return f(i.mul(this.low, this.high, a.low, a.high), i.get_high(), this.unsigned);
              if (a.isZero())
                return q;
              if (this.eq(x))
                return a.isOdd() ? x : q;
              if (a.eq(x))
                return this.isOdd() ? x : q;
              if (this.isNegative())
                return a.isNegative() ? this.neg().mul(a.neg()) : this.neg().mul(a).neg();
              if (a.isNegative())
                return this.mul(a.neg()).neg();
              if (this.lt(p) && a.lt(p))
                return e(this.toNumber() * a.toNumber(), this.unsigned);
              var b = this.high >>> 16
                , d = 65535 & this.high
                , g = this.low >>> 16
                , j = 65535 & this.low
                , k = a.high >>> 16
                , l = 65535 & a.high
                , m = a.low >>> 16
                , n = 65535 & a.low
                , o = 0
                , r = 0
                , s = 0
                , t = 0;
              return s += (t += j * n) >>> 16,
                r += (s += g * n) >>> 16,
                s &= 65535,
                r += (s += j * m) >>> 16,
                o += (r += d * n) >>> 16,
                r &= 65535,
                o += (r += g * m) >>> 16,
                r &= 65535,
                o += (r += j * l) >>> 16,
                o += b * n + d * m + g * l + j * k,
                f((s &= 65535) << 16 | (t &= 65535), (o &= 65535) << 16 | (r &= 65535), this.unsigned)
            }
            ,
            y.mul = y.multiply,
            y.divide = function (a) {
              if (c(a) || (a = h(a)),
                a.isZero())
                throw Error("division by zero");
              var b, d, g;
              if (i)
                return this.unsigned || -2147483648 !== this.high || -1 !== a.low || -1 !== a.high ? f((this.unsigned ? i.div_u : i.div_s)(this.low, this.high, a.low, a.high), i.get_high(), this.unsigned) : this;
              if (this.isZero())
                return this.unsigned ? r : q;
              if (this.unsigned) {
                if (a.unsigned || (a = a.toUnsigned()),
                  a.gt(this))
                  return r;
                if (a.gt(this.shru(1)))
                  return t;
                g = r
              } else {
                if (this.eq(x))
                  return a.eq(s) || a.eq(u) ? x : a.eq(x) ? s : (b = this.shr(1).div(a).shl(1)).eq(q) ? a.isNegative() ? s : u : (d = this.sub(a.mul(b)),
                    g = b.add(d.div(a)));
                if (a.eq(x))
                  return this.unsigned ? r : q;
                if (this.isNegative())
                  return a.isNegative() ? this.neg().div(a.neg()) : this.neg().div(a).neg();
                if (a.isNegative())
                  return this.div(a.neg()).neg();
                g = q
              }
              for (d = this; d.gte(a);) {
                b = Math.max(1, Math.floor(d.toNumber() / a.toNumber()));
                for (var j = Math.ceil(Math.log(b) / Math.LN2), k = 48 >= j ? 1 : l(2, j - 48), m = e(b), n = m.mul(a); n.isNegative() || n.gt(d);)
                  n = (m = e(b -= k, this.unsigned)).mul(a);
                m.isZero() && (m = s),
                  g = g.add(m),
                  d = d.sub(n)
              }
              return g
            }
            ,
            y.div = y.divide,
            y.modulo = function (a) {
              return c(a) || (a = h(a)),
                i ? f((this.unsigned ? i.rem_u : i.rem_s)(this.low, this.high, a.low, a.high), i.get_high(), this.unsigned) : this.sub(this.div(a).mul(a))
            }
            ,
            y.mod = y.modulo,
            y.rem = y.modulo,
            y.not = function () {
              return f(~this.low, ~this.high, this.unsigned)
            }
            ,
            y.and = function (a) {
              return c(a) || (a = h(a)),
                f(this.low & a.low, this.high & a.high, this.unsigned)
            }
            ,
            y.or = function (a) {
              return c(a) || (a = h(a)),
                f(this.low | a.low, this.high | a.high, this.unsigned)
            }
            ,
            y.xor = function (a) {
              return c(a) || (a = h(a)),
                f(this.low ^ a.low, this.high ^ a.high, this.unsigned)
            }
            ,
            y.shiftLeft = function (a) {
              return c(a) && (a = a.toInt()),
                0 == (a &= 63) ? this : 32 > a ? f(this.low << a, this.high << a | this.low >>> 32 - a, this.unsigned) : f(0, this.low << a - 32, this.unsigned)
            }
            ,
            y.shl = y.shiftLeft,
            y.shiftRight = function (a) {
              return c(a) && (a = a.toInt()),
                0 == (a &= 63) ? this : 32 > a ? f(this.low >>> a | this.high << 32 - a, this.high >> a, this.unsigned) : f(this.high >> a - 32, this.high >= 0 ? 0 : -1, this.unsigned)
            }
            ,
            y.shr = y.shiftRight,
            y.shiftRightUnsigned = function (a) {
              if (c(a) && (a = a.toInt()),
                0 == (a &= 63))
                return this;
              var b = this.high;
              return 32 > a ? f(this.low >>> a | b << 32 - a, b >>> a, this.unsigned) : f(32 === a ? b : b >>> a - 32, 0, this.unsigned)
            }
            ,
            y.shru = y.shiftRightUnsigned,
            y.shr_u = y.shiftRightUnsigned,
            y.toSigned = function () {
              return this.unsigned ? f(this.low, this.high, !1) : this
            }
            ,
            y.toUnsigned = function () {
              return this.unsigned ? this : f(this.low, this.high, !0)
            }
            ,
            y.toBytes = function (a) {
              return a ? this.toBytesLE() : this.toBytesBE()
            }
            ,
            y.toBytesLE = function () {
              var a = this.high
                , b = this.low;
              return [255 & b, b >>> 8 & 255, b >>> 16 & 255, b >>> 24, 255 & a, a >>> 8 & 255, a >>> 16 & 255, a >>> 24]
            }
            ,
            y.toBytesBE = function () {
              var a = this.high
                , b = this.low;
              return [a >>> 24, a >>> 16 & 255, a >>> 8 & 255, 255 & a, b >>> 24, b >>> 16 & 255, b >>> 8 & 255, 255 & b]
            }
            ,
            b.fromBytes = function (a, c, d) {
              return d ? b.fromBytesLE(a, c) : b.fromBytesBE(a, c)
            }
            ,
            b.fromBytesLE = function (a, c) {
              return new b(a[0] | a[1] << 8 | a[2] << 16 | a[3] << 24, a[4] | a[5] << 8 | a[6] << 16 | a[7] << 24, c)
            }
            ,
            b.fromBytesBE = function (a, c) {
              return new b(a[4] << 24 | a[5] << 16 | a[6] << 8 | a[7], a[0] << 24 | a[1] << 16 | a[2] << 8 | a[3], c)
            }
        }
      }
        , c = {};
      a.d = function (b, c) {
        for (var d in c)
          a.o(c, d) && !a.o(b, d) && Object.defineProperty(b, d, {
            enumerable: !0,
            get: c[d]
          })
      }
        ,
        a.o = function (a, b) {
          return Object.prototype.hasOwnProperty.call(a, b)
        }
        ,
        a.r = function (a) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, {
            value: "Module"
          }),
            Object.defineProperty(a, "__esModule", {
              value: !0
            })
        }
        ;
      var d = {};
      return function () {
        function b(a) {
          return l[a.id] = a,
            null != a.parent && (m[a.parent] = a.id),
            a
        }
        a.r(d),
          a.d(d, {
            BedrockVersion: function () {
              return f
            },
            Dimension: function () {
              return g
            },
            DungeonType: function () {
              return h
            },
            Edition: function () {
              return c
            },
            JavaVersion: function () {
              return e
            },
            Long: function () {
              return j
            },
            POI: function () {
              return i
            },
            biomeList: function () {
              return l
            },
            supportsCaveBiomes: function () {
              return k
            }
          });
        var c, e, f, g, h, i, j = a(720);
        !function (a) {
          a.Java = "Java",
            a.Bedrock = "Bedrock"
        }(c || (c = {})),
          function (a) {
            a[a.V1_7 = 10070] = "V1_7",
              a[a.V1_8 = 10080] = "V1_8",
              a[a.V1_9 = 10090] = "V1_9",
              a[a.V1_10 = 10100] = "V1_10",
              a[a.V1_11 = 10110] = "V1_11",
              a[a.V1_12 = 10120] = "V1_12",
              a[a.V1_13 = 10130] = "V1_13",
              a[a.V1_14 = 10140] = "V1_14",
              a[a.V1_15 = 10150] = "V1_15",
              a[a.V1_16 = 10160] = "V1_16",
              a[a.V1_17 = 10170] = "V1_17",
              a[a.V1_18 = 10180] = "V1_18",
              a[a.V1_19 = 10190] = "V1_19",
              a[a.V1_19_3 = 10193] = "V1_19_3",
              a[a.V1_20 = 10200] = "V1_20"
          }(e || (e = {})),
          function (a) {
            a[a.V1_14 = 10140] = "V1_14",
              a[a.V1_16 = 10160] = "V1_16",
              a[a.V1_17 = 10170] = "V1_17",
              a[a.V1_18 = 10180] = "V1_18",
              a[a.V1_19 = 10190] = "V1_19",
              a[a.V1_20 = 10200] = "V1_20"
          }(f || (f = {})),
          function (a) {
            a.Overworld = "overworld",
              a.Nether = "nether",
              a.End = "end"
          }(g || (g = {})),
          function (a) {
            a[a.ZOMBIE = 0] = "ZOMBIE",
              a[a.SPIDER = 1] = "SPIDER",
              a[a.SKELETON = 2] = "SKELETON"
          }(h || (h = {})),
          function (a) {
            a.BastionRemnant = "bastionRemnant",
              a.BuriedTreasure = "buriedTreasure",
              a.Dungeon = "dungeon",
              a.EndCity = "endCity",
              a.NetherFortress = "netherFortress",
              a.SlimeChunk = "slimeChunk",
              a.Stronghold = "stronghold",
              a.Village = "village",
              a.Mineshaft = "mineshaft",
              a.WoodlandMansion = "woodlandMansion",
              a.PillagerOutpost = "pillagerOutpost",
              a.OceanRuin = "oceanRuin",
              a.OceanMonument = "oceanMonument",
              a.Shipwreck = "shipwreck",
              a.DesertTemple = "desertTemple",
              a.JungleTemple = "jungleTemple",
              a.WitchHut = "witchHut",
              a.Igloo = "igloo",
              a.RuinedPortalOverworld = "ruinedPortalOverworld",
              a.RuinedPortalNether = "ruinedPortalNether",
              a.Spawn = "spawn",
              a.Fossil = "fossil",
              a.Ravine = "ravine",
              a.EndGateway = "endGateway",
              a.AmethystGeode = "amethystGeode",
              a.AncientCity = "ancientCity",
              a.ItemOverworld = "itemOverworld",
              a.OreVein = "oreVein",
              a.Cave = "cave",
              a.DesertWell = "desertWell",
              a.TrailRuin = "trailRuin"
          }(i || (i = {}));
        var k = function (a) {
          return function (a) {
            return a.edition === c.Java && a.javaVersion >= e.V1_18 || a.edition === c.Bedrock && a.bedrockVersion >= f.V1_18
          }(a)
        }
          , l = []
          , m = {}
          , n = (b({
            id: 0,
            key: "ocean",
            name: ext_BiomeName[0],
            category: "ocean",
            temperature: .5,
            precipitation: "rain",
            depth: -1,
            rgb: [0, 0, 112],
            dimension: g.Overworld
          }),
            b({
              id: 1,
              key: "plains",
              name: ext_BiomeName[1],
              category: "plains",
              temperature: .8,
              precipitation: "rain",
              depth: .125,
              rgb: [141, 179, 96],
              dimension: g.Overworld
            }))
          , o = b({
            id: 2,
            key: "desert",
            name: ext_BiomeName[2],
            category: "desert",
            temperature: 2,
            precipitation: "none",
            depth: .125,
            rgb: [250, 148, 24],
            dimension: g.Overworld
          })
          , p = b({
            id: 3,
            key: "windswept_hills",
            name: ext_BiomeName[3],
            oldNames: [ext_BiomeName[3.1]],
            category: "extreme_hills",
            temperature: .2,
            precipitation: "rain",
            depth: 1,
            rgb: [96, 96, 96],
            dimension: g.Overworld
          })
          , q = b({
            id: 4,
            key: "forest",
            name: ext_BiomeName[4],
            category: "forest",
            temperature: .7,
            precipitation: "rain",
            depth: .1,
            rgb: [5, 102, 33],
            dimension: g.Overworld
          })
          , r = b({
            id: 5,
            key: "taiga",
            name: ext_BiomeName[5],
            category: "taiga",
            temperature: .25,
            precipitation: "rain",
            depth: .2,
            rgb: [11, 102, 89],
            dimension: g.Overworld
          })
          , s = b({
            id: 6,
            key: "swamp",
            name: ext_BiomeName[6],
            category: "swamp",
            temperature: .8,
            precipitation: "rain",
            depth: -.2,
            rgb: [7, 249, 178],
            dimension: g.Overworld
          })
          , t = (b({
            id: 7,
            key: "river",
            name: ext_BiomeName[7],
            category: "river",
            temperature: .5,
            precipitation: "rain",
            depth: -.5,
            rgb: [0, 0, 255],
            dimension: g.Overworld
          }),
            b({
              id: 8,
              key: "nether_wastes",
              name: ext_BiomeName[8],
              category: "nether",
              temperature: 2,
              precipitation: "none",
              depth: .1,
              rgb: [191, 59, 59],
              climates: [{
                temperature: 0,
                humidity: 0,
                altitude: 0,
                weirdness: 0,
                offset: 0
              }],
              dimension: g.Nether
            }),
            b({
              id: 9,
              key: "the_end",
              name: ext_BiomeName[9],
              category: "the_end",
              temperature: .5,
              precipitation: "none",
              depth: .1,
              rgb: [128, 128, 255],
              dimension: g.End
            }),
            b({
              id: 10,
              key: "frozen_ocean",
              name: ext_BiomeName[10],
              category: "ocean",
              temperature: 0,
              precipitation: "snow",
              depth: -1,
              rgb: [112, 112, 214],
              dimension: g.Overworld
            }),
            b({
              id: 11,
              key: "frozen_river",
              name: ext_BiomeName[11],
              category: "river",
              temperature: 0,
              precipitation: "snow",
              depth: -.5,
              rgb: [160, 160, 255],
              dimension: g.Overworld
            }),
            b({
              id: 12,
              key: "snowy_plains",
              name: ext_BiomeName[12],
              oldNames: [ext_BiomeName[12.1]],
              category: "icy",
              temperature: 0,
              precipitation: "snow",
              depth: .125,
              rgb: [255, 255, 255],
              dimension: g.Overworld
            }))
          , u = (b({
            id: 13,
            name: ext_BiomeName[13],
            category: "icy",
            temperature: 0,
            precipitation: "snow",
            depth: .45,
            rgb: [160, 160, 160],
            dimension: g.Overworld
          }),
            b({
              id: 14,
              key: "mushroom_fields",
              name: ext_BiomeName[14],
              category: "mushroom",
              temperature: .9,
              precipitation: "rain",
              depth: .2,
              rgb: [255, 0, 255],
              dimension: g.Overworld
            }),
            b({
              id: 15,
              name: ext_BiomeName[15],
              category: "mushroom",
              temperature: .9,
              precipitation: "rain",
              depth: 0,
              rgb: [160, 0, 255],
              dimension: g.Overworld
            }),
            b({
              id: 16,
              key: "beach",
              name: ext_BiomeName[16],
              category: "beach",
              temperature: .8,
              precipitation: "rain",
              depth: 0,
              rgb: [250, 222, 85],
              dimension: g.Overworld
            }),
            b({
              id: 17,
              name: ext_BiomeName[17],
              category: "desert",
              temperature: 2,
              precipitation: "none",
              depth: .45,
              rgb: [210, 95, 18],
              dimension: g.Overworld
            }),
            b({
              id: 18,
              key: "windswept_forest",
              name: ext_BiomeName[18],
              oldNames: [ext_BiomeName[18.1]],
              category: "forest",
              temperature: .7,
              precipitation: "rain",
              depth: .45,
              rgb: [34, 85, 28],
              dimension: g.Overworld
            }),
            b({
              id: 19,
              name: ext_BiomeName[19],
              category: "taiga",
              temperature: .25,
              precipitation: "rain",
              depth: .45,
              rgb: [22, 57, 51],
              dimension: g.Overworld
            }),
            b({
              id: 20,
              name: ext_BiomeName[20],
              category: "extreme_hills",
              temperature: .2,
              precipitation: "rain",
              depth: .8,
              rgb: [114, 120, 154],
              dimension: g.Overworld
            }),
            b({
              id: 21,
              key: "jungle",
              name: ext_BiomeName[21],
              category: "jungle",
              temperature: .95,
              precipitation: "rain",
              depth: .1,
              rgb: [83, 123, 9],
              dimension: g.Overworld
            }))
          , v = (b({
            id: 22,
            name: ext_BiomeName[22],
            category: "jungle",
            temperature: .95,
            precipitation: "rain",
            depth: .45,
            rgb: [44, 66, 5],
            dimension: g.Overworld
          }),
            b({
              id: 23,
              key: "sparse_jungle",
              name: ext_BiomeName[23],
              oldNames: [ext_BiomeName[23.1]],
              category: "jungle",
              temperature: .95,
              precipitation: "rain",
              depth: .1,
              rgb: [98, 139, 23],
              dimension: g.Overworld
            }))
          , w = (b({
            id: 24,
            key: "deep_ocean",
            name: ext_BiomeName[24],
            category: "ocean",
            temperature: .5,
            precipitation: "rain",
            depth: -1.8,
            rgb: [0, 0, 48],
            dimension: g.Overworld
          }),
            b({
              id: 25,
              key: "stony_shore",
              name: ext_BiomeName[25],
              oldNames: [ext_BiomeName[25.1]],
              category: "none",
              temperature: .2,
              precipitation: "rain",
              depth: .1,
              rgb: [162, 162, 132],
              dimension: g.Overworld
            }),
            b({
              id: 26,
              key: "snowy_beach",
              name: ext_BiomeName[26],
              category: "beach",
              temperature: .05,
              precipitation: "snow",
              depth: 0,
              rgb: [250, 240, 192],
              dimension: g.Overworld
            }),
            b({
              id: 27,
              key: "birch_forest",
              name: ext_BiomeName[27],
              category: "forest",
              temperature: .6,
              precipitation: "rain",
              depth: .1,
              rgb: [48, 116, 68],
              dimension: g.Overworld
            }))
          , x = b({
            id: 28,
            name: ext_BiomeName[28],
            category: "forest",
            temperature: .6,
            precipitation: "rain",
            depth: .45,
            rgb: [31, 95, 50],
            dimension: g.Overworld
          })
          , y = b({
            id: 29,
            key: "dark_forest",
            name: ext_BiomeName[29],
            category: "forest",
            temperature: .7,
            precipitation: "rain",
            depth: .1,
            rgb: [64, 81, 26],
            dimension: g.Overworld
          })
          , z = b({
            id: 30,
            key: "snowy_taiga",
            name: ext_BiomeName[30],
            category: "taiga",
            temperature: -.5,
            precipitation: "snow",
            depth: .2,
            rgb: [49, 85, 74],
            dimension: g.Overworld
          })
          , A = (b({
            id: 31,
            name: ext_BiomeName[31],
            category: "taiga",
            temperature: -.5,
            precipitation: "snow",
            depth: .45,
            rgb: [36, 63, 54],
            dimension: g.Overworld
          }),
            b({
              id: 32,
              key: "old_growth_pine_taiga",
              name: ext_BiomeName[32],
              oldNames: [ext_BiomeName[32.1]],
              category: "taiga",
              temperature: .3,
              precipitation: "rain",
              depth: .2,
              rgb: [89, 102, 81],
              dimension: g.Overworld
            }))
          , B = b({
            id: 33,
            name: ext_BiomeName[33],
            category: "taiga",
            temperature: .3,
            precipitation: "rain",
            depth: .45,
            rgb: [69, 79, 62],
            dimension: g.Overworld
          })
          , C = b({
            id: 34,
            name: ext_BiomeName[34],
            category: "extreme_hills",
            temperature: .2,
            precipitation: "rain",
            depth: 1,
            rgb: [80, 112, 80],
            dimension: g.Overworld
          })
          , D = b({
            id: 35,
            key: "savanna",
            name: ext_BiomeName[35],
            category: "savanna",
            temperature: 1.2,
            precipitation: "none",
            depth: .125,
            rgb: [189, 178, 95],
            dimension: g.Overworld
          })
          , E = b({
            id: 36,
            key: "savanna_plateau",
            name: ext_BiomeName[36],
            category: "savanna",
            temperature: 1,
            precipitation: "none",
            depth: 1.5,
            rgb: [167, 157, 100],
            dimension: g.Overworld
          })
          , F = b({
            id: 37,
            key: "badlands",
            name: ext_BiomeName[37],
            category: "mesa",
            temperature: 2,
            precipitation: "none",
            depth: .1,
            rgb: [217, 69, 21],
            dimension: g.Overworld
          })
          , G = b({
            id: 38,
            key: "wooded_badlands",
            name: ext_BiomeName[38],
            oldNames: [ext_BiomeName[38]],
            category: "mesa",
            temperature: 2,
            precipitation: "none",
            depth: 1.5,
            rgb: [176, 151, 101],
            dimension: g.Overworld
          })
          , H = b({
            id: 39,
            name: ext_BiomeName[39],
            category: "mesa",
            temperature: 2,
            precipitation: "none",
            depth: 1.5,
            rgb: [202, 140, 101],
            dimension: g.Overworld
          });
        b({
          id: 40,
          key: "small_end_islands",
          name: ext_BiomeName[40],
          category: "the_end",
          temperature: .5,
          precipitation: "none",
          depth: .1,
          rgb: [0, 0, 42],
          dimension: g.End
        }),
          b({
            id: 41,
            key: "end_midlands",
            name: ext_BiomeName[41],
            category: "the_end",
            temperature: .5,
            precipitation: "none",
            depth: .1,
            rgb: [235, 248, 182],
            dimension: g.End
          }),
          b({
            id: 42,
            key: "end_highlands",
            name: ext_BiomeName[42],
            category: "the_end",
            temperature: .5,
            precipitation: "none",
            depth: .1,
            rgb: [195, 189, 137],
            dimension: g.End
          }),
          b({
            id: 43,
            key: "end_barrens",
            name: ext_BiomeName[43],
            category: "the_end",
            temperature: .5,
            precipitation: "none",
            depth: .1,
            rgb: [144, 144, 114],
            dimension: g.End
          }),
          b({
            id: 44,
            key: "warm_ocean",
            name: ext_BiomeName[44],
            category: "ocean",
            temperature: .5,
            precipitation: "rain",
            depth: -1,
            rgb: [0, 0, 172],
            dimension: g.Overworld
          }),
          b({
            id: 45,
            key: "lukewarm_ocean",
            name: ext_BiomeName[45],
            category: "ocean",
            temperature: .5,
            precipitation: "rain",
            depth: -1,
            rgb: [0, 0, 144],
            dimension: g.Overworld
          }),
          b({
            id: 46,
            key: "cold_ocean",
            name: ext_BiomeName[46],
            category: "ocean",
            temperature: .5,
            precipitation: "rain",
            depth: -1,
            rgb: [32, 32, 112],
            dimension: g.Overworld
          }),
          b({
            id: 47,
            key: "deep_warm_ocean",
            name: ext_BiomeName[47],
            category: "ocean",
            temperature: .5,
            precipitation: "rain",
            depth: -1.8,
            rgb: [0, 0, 80],
            dimension: g.Overworld
          }),
          b({
            id: 48,
            key: "deep_lukewarm_ocean",
            name: ext_BiomeName[48],
            category: "ocean",
            temperature: .5,
            precipitation: "rain",
            depth: -1.8,
            rgb: [0, 0, 64],
            dimension: g.Overworld
          }),
          b({
            id: 49,
            key: "deep_cold_ocean",
            name: ext_BiomeName[49],
            category: "ocean",
            temperature: .5,
            precipitation: "rain",
            depth: -1.8,
            rgb: [32, 32, 56],
            dimension: g.Overworld
          }),
          b({
            id: 50,
            key: "deep_frozen_ocean",
            name: ext_BiomeName[50],
            category: "ocean",
            temperature: .5,
            precipitation: "rain",
            depth: -1.8,
            rgb: [64, 64, 144],
            dimension: g.Overworld
          }),
          b({
            id: 129,
            name: ext_BiomeName[129],
            key: "sunflower_plains",
            category: "plains",
            temperature: .8,
            precipitation: "rain",
            depth: .125,
            rgb: [181, 219, 136],
            parent: n.id,
            dimension: g.Overworld
          }),
          b({
            id: 130,
            name: ext_BiomeName[130],
            category: "desert",
            temperature: 2,
            precipitation: "none",
            depth: .125,
            rgb: [255, 188, 64],
            parent: o.id,
            dimension: g.Overworld
          }),
          b({
            id: 131,
            key: "windswept_gravelly_hills",
            name: ext_BiomeName[131],
            oldNames: [ext_BiomeName[131.1]],
            category: "extreme_hills",
            temperature: .2,
            precipitation: "rain",
            depth: 1,
            rgb: [136, 136, 136],
            parent: p.id,
            dimension: g.Overworld
          }),
          b({
            id: 132,
            key: "flower_forest",
            name: ext_BiomeName[132],
            category: "forest",
            temperature: .7,
            precipitation: "rain",
            depth: .1,
            rgb: [45, 142, 73],
            parent: q.id,
            dimension: g.Overworld
          }),
          b({
            id: 133,
            name: ext_BiomeName[133],
            category: "taiga",
            temperature: .25,
            precipitation: "rain",
            depth: .3,
            rgb: [51, 142, 129],
            parent: r.id,
            dimension: g.Overworld
          }),
          b({
            id: 134,
            name: ext_BiomeName[134],
            category: "swamp",
            temperature: .8,
            precipitation: "rain",
            depth: -.1,
            rgb: [47, 255, 218],
            parent: s.id,
            dimension: g.Overworld
          }),
          b({
            id: 140,
            key: "ice_spikes",
            name: ext_BiomeName[140],
            category: "icy",
            temperature: 0,
            precipitation: "snow",
            depth: .425,
            rgb: [180, 220, 220],
            parent: t.id,
            dimension: g.Overworld
          }),
          b({
            id: 149,
            name: ext_BiomeName[149],
            category: "jungle",
            temperature: .95,
            precipitation: "rain",
            depth: .2,
            rgb: [123, 163, 49],
            parent: u.id,
            dimension: g.Overworld
          }),
          b({
            id: 151,
            name: ext_BiomeName[151],
            category: "jungle",
            temperature: .95,
            precipitation: "rain",
            depth: .2,
            rgb: [138, 179, 63],
            parent: v.id,
            dimension: g.Overworld
          }),
          b({
            id: 155,
            key: "old_growth_birch_forest",
            name: ext_BiomeName[155],
            oldNames: [ext_BiomeName[155.1]],
            category: "forest",
            temperature: .6,
            precipitation: "rain",
            depth: .2,
            rgb: [88, 156, 108],
            parent: w.id,
            dimension: g.Overworld
          }),
          b({
            id: 156,
            name: ext_BiomeName[156],
            category: "forest",
            temperature: .6,
            precipitation: "rain",
            depth: .55,
            rgb: [71, 135, 90],
            parent: x.id,
            dimension: g.Overworld
          }),
          b({
            id: 157,
            name: ext_BiomeName[157],
            category: "forest",
            temperature: .7,
            precipitation: "rain",
            depth: .2,
            rgb: [104, 121, 66],
            parent: y.id,
            dimension: g.Overworld
          }),
          b({
            id: 158,
            name: ext_BiomeName[158],
            category: "taiga",
            temperature: -.5,
            precipitation: "snow",
            depth: .3,
            rgb: [89, 125, 114],
            parent: z.id,
            dimension: g.Overworld
          }),
          b({
            id: 160,
            key: "old_growth_spruce_taiga",
            name: ext_BiomeName[160],
            oldNames: [ext_BiomeName[160.1]],
            category: "taiga",
            temperature: .25,
            precipitation: "rain",
            depth: .2,
            rgb: [129, 142, 121],
            parent: A.id,
            dimension: g.Overworld
          }),
          b({
            id: 161,
            name: ext_BiomeName[161],
            category: "taiga",
            temperature: .25,
            precipitation: "rain",
            depth: .2,
            rgb: [109, 119, 102],
            parent: B.id,
            dimension: g.Overworld
          }),
          b({
            id: 162,
            name: ext_BiomeName[162],
            category: "extreme_hills",
            temperature: .2,
            precipitation: "rain",
            depth: 1,
            rgb: [120, 152, 120],
            parent: C.id,
            dimension: g.Overworld
          }),
          b({
            id: 163,
            key: "windswept_savanna",
            name: ext_BiomeName[163],
            oldNames: [ext_BiomeName[163.1]],
            category: "savanna",
            temperature: 1.1,
            precipitation: "none",
            depth: .3625,
            rgb: [229, 218, 135],
            parent: D.id,
            dimension: g.Overworld
          }),
          b({
            id: 164,
            name: ext_BiomeName[164],
            category: "savanna",
            temperature: 1,
            precipitation: "none",
            rgb: [207, 197, 140],
            depth: 1.05,
            parent: E.id,
            dimension: g.Overworld
          }),
          b({
            id: 165,
            key: "eroded_badlands",
            name: ext_BiomeName[165],
            category: "mesa",
            temperature: 2,
            precipitation: "none",
            depth: .1,
            rgb: [255, 109, 61],
            parent: F.id,
            dimension: g.Overworld
          }),
          b({
            id: 166,
            name: ext_BiomeName[166],
            category: "mesa",
            temperature: 2,
            precipitation: "none",
            depth: .45,
            rgb: [216, 191, 141],
            parent: G.id,
            dimension: g.Overworld
          }),
          b({
            id: 167,
            name: ext_BiomeName[167],
            category: "mesa",
            temperature: 2,
            precipitation: "none",
            depth: .45,
            rgb: [242, 180, 141],
            parent: H.id,
            dimension: g.Overworld
          }),
          b({
            id: 168,
            key: "bamboo_jungle",
            name: ext_BiomeName[168],
            category: "jungle",
            temperature: .95,
            precipitation: "rain",
            depth: .1,
            rgb: [118, 142, 20],
            dimension: g.Overworld
          }),
          b({
            id: 169,
            name: ext_BiomeName[169],
            category: "jungle",
            temperature: .95,
            precipitation: "rain",
            depth: .45,
            rgb: [59, 71, 10],
            dimension: g.Overworld
          }),
          b({
            id: 170,
            key: "soul_sand_valley",
            name: ext_BiomeName[170],
            category: "nether",
            temperature: 2,
            precipitation: "none",
            depth: .1,
            rgb: [94, 56, 48],
            climates: [{
              temperature: 0,
              humidity: -.5,
              altitude: 0,
              weirdness: 0,
              offset: 0
            }],
            dimension: g.Nether
          }),
          b({
            id: 171,
            key: "crimson_forest",
            name: ext_BiomeName[171],
            category: "nether",
            temperature: 2,
            precipitation: "none",
            depth: .1,
            rgb: [221, 8, 8],
            climates: [{
              temperature: .4,
              humidity: 0,
              altitude: 0,
              weirdness: 0,
              offset: 0
            }],
            dimension: g.Nether
          }),
          b({
            id: 172,
            key: "warped_forest",
            name: ext_BiomeName[172],
            category: "nether",
            temperature: 2,
            precipitation: "none",
            depth: .1,
            rgb: [73, 144, 123],
            climates: [{
              temperature: 0,
              humidity: .5,
              altitude: 0,
              weirdness: 0,
              offset: .375
            }],
            dimension: g.Nether
          }),
          b({
            id: 173,
            key: "basalt_deltas",
            name: ext_BiomeName[173],
            category: "nether",
            temperature: 2,
            precipitation: "none",
            depth: .1,
            rgb: [64, 54, 54],
            climates: [{
              temperature: -.5,
              humidity: 0,
              altitude: 0,
              weirdness: 0,
              offset: .175
            }],
            dimension: g.Nether
          }),
          b({
            id: 174,
            key: "dripstone_caves",
            name: ext_BiomeName[174],
            category: "none",
            temperature: .8,
            precipitation: "rain",
            depth: 0,
            rgb: [193, 165, 143],
            dimension: g.Overworld
          }),
          b({
            id: 175,
            key: "lush_caves",
            name: ext_BiomeName[175],
            category: "none",
            temperature: .5,
            precipitation: "rain",
            depth: 0,
            rgb: [223, 150, 52],
            dimension: g.Overworld
          }),
          b({
            id: 177,
            key: "meadow",
            name: ext_BiomeName[177],
            category: "mountain",
            temperature: .5,
            precipitation: "rain",
            depth: 0,
            rgb: [140, 164, 112],
            dimension: g.Overworld
          }),
          b({
            id: 178,
            key: "grove",
            name: ext_BiomeName[178],
            category: "forest",
            temperature: -.2,
            precipitation: "snow",
            depth: 0,
            rgb: [223, 236, 229],
            dimension: g.Overworld
          }),
          b({
            id: 179,
            key: "snowy_slopes",
            name: ext_BiomeName[179],
            category: "mountain",
            temperature: -.3,
            precipitation: "snow",
            depth: 0,
            rgb: [218, 241, 241],
            dimension: g.Overworld
          }),
          b({
            id: 180,
            key: "frozen_peaks",
            name: ext_BiomeName[180],
            category: "mountain",
            temperature: -.7,
            precipitation: "snow",
            depth: 0,
            rgb: [234, 251, 251],
            dimension: g.Overworld
          }),
          b({
            id: 181,
            key: "jagged_peaks",
            name: ext_BiomeName[181],
            category: "mountain",
            temperature: -.7,
            precipitation: "snow",
            depth: 0,
            rgb: [227, 236, 237],
            dimension: g.Overworld
          }),
          b({
            id: 182,
            key: "stony_peaks",
            name: ext_BiomeName[182],
            category: "mountain",
            temperature: 1,
            precipitation: "rain",
            depth: 0,
            rgb: [209, 209, 209],
            dimension: g.Overworld
          }),
          b({
            id: 183,
            key: "deep_dark",
            name: ext_BiomeName[183],
            category: "none",
            temperature: .8,
            precipitation: "rain",
            depth: 0,
            rgb: [0, 0, 0],
            dimension: g.Overworld
          }),
          b({
            id: 184,
            key: "mangrove_swamp",
            name: ext_BiomeName[184],
            category: "none",
            temperature: .8,
            precipitation: "rain",
            depth: 0,
            rgb: [36, 196, 142],
            dimension: g.Overworld
          }),
          b({
            id: 185,
            key: "cherry_grove",
            name: ext_BiomeName[185],
            category: "mountain",
            temperature: 0,
            precipitation: "none",
            depth: 0,
            rgb: [247, 185, 220],
            dimension: g.Overworld
          })
      }(),
        d
    }()
  });
var QuickLRU = function () {
  function a(a, c) {
    var d;
    if ("undefined" == typeof Symbol || null == a[Symbol.iterator]) {
      if (Array.isArray(a) || (d = b(a)) || c && a && "number" == typeof a.length) {
        d && (a = d);
        var e = 0;
        return function () {
          return e >= a.length ? {
            done: !0
          } : {
            done: !1,
            value: a[e++]
          }
        }
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    return d = a[Symbol.iterator](),
      d.next.bind(d)
  }
  function b(a, b) {
    if (a) {
      if ("string" == typeof a)
        return c(a, b);
      var d = Object.prototype.toString.call(a).slice(8, -1);
      return "Object" === d && a.constructor && (d = a.constructor.name),
        "Map" === d || "Set" === d ? Array.from(a) : "Arguments" === d || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d) ? c(a, b) : void 0
    }
  }
  function c(a, b) {
    (null == b || b > a.length) && (b = a.length);
    for (var c = 0, d = new Array(b); b > c; c++)
      d[c] = a[c];
    return d
  }
  function d(a, b) {
    for (var c = 0; c < b.length; c++) {
      var d = b[c];
      d.enumerable = d.enumerable || !1,
        d.configurable = !0,
        "value" in d && (d.writable = !0),
        Object.defineProperty(a, d.key, d)
    }
  }
  function e(a, b, c) {
    return b && d(a.prototype, b),
      c && d(a, c),
      a
  }
  var f = function () {
    function b(a) {
      if (void 0 === a && (a = {}),
        !(a.maxSize && a.maxSize > 0))
        throw new TypeError("`maxSize` must be a number greater than 0");
      this.maxSize = a.maxSize,
        this.onEviction = a.onEviction,
        this.cache = new Map,
        this.oldCache = new Map,
        this._size = 0
    }
    var c = b.prototype;
    return c._set = function (b, c) {
      if (this.cache.set(b, c),
        this._size++,
        this._size >= this.maxSize) {
        if (this._size = 0,
          "function" == typeof this.onEviction)
          for (var d, e = a(this.oldCache.entries()); !(d = e()).done;) {
            var f = d.value
              , g = f[0]
              , h = f[1];
            this.onEviction(g, h)
          }
        this.oldCache = this.cache,
          this.cache = new Map
      }
    }
      ,
      c.get = function (a) {
        if (this.cache.has(a))
          return this.cache.get(a);
        if (this.oldCache.has(a)) {
          var b = this.oldCache.get(a);
          return this.oldCache["delete"](a),
            this._set(a, b),
            b
        }
      }
      ,
      c.set = function (a, b) {
        return this.cache.has(a) ? this.cache.set(a, b) : this._set(a, b),
          this
      }
      ,
      c.has = function (a) {
        return this.cache.has(a) || this.oldCache.has(a)
      }
      ,
      c.peek = function (a) {
        return this.cache.has(a) ? this.cache.get(a) : this.oldCache.has(a) ? this.oldCache.get(a) : void 0
      }
      ,
      c["delete"] = function (a) {
        var b = this.cache["delete"](a);
        return b && this._size--,
          this.oldCache["delete"](a) || b
      }
      ,
      c.clear = function () {
        this.cache.clear(),
          this.oldCache.clear(),
          this._size = 0
      }
      ,
      e(b, [{
        key: "size",
        get: function () {
          for (var b, c = 0, d = a(this.oldCache.keys()); !(b = d()).done;) {
            var e = b.value;
            this.cache.has(e) || c++
          }
          return Math.min(this._size + c, this.maxSize)
        }
      }]),
      b
  }();
  return f
}();

/* Libs end, Chunkbase code starts */
var loadMinecraftSave = function () {
  function a(b, c, d) {
    return c = Array.isArray(c) ? c : c.split("."),
      b = b[c[0]],
      b && c.length > 1 ? a(b, c.slice(1)) : void 0 === b ? d : b
  }
  function b(b, c) {
    return a(b, c.reduce(function (a, b) {
      return a.concat(b, "value")
    }, b.isBedrock ? ["value"] : ["value", "Data", "value"]))
  }
  function c(a, b) {
    var c = new FileReader;
    c.onload = function () {
      2 === c.readyState && b(null, c.result)
    }
      ,
      c.onerror = function () {
        b(c.error || "error")
      }
      ,
      c.readAsArrayBuffer(a)
  }
  return function (a, d) {
    new FileReader;
    c(a, function (a, c) {
      if (a)
        return void d(a);
      var e = function (a, c) {
        return a ? void d(a) : void d(null, {
          isBedrock: c.isBedrock,
          getSeed: function () {
            var a = b(c, ["RandomSeed"]);
            return null == a && (a = b(c, ["WorldGenSettings", "seed"])),
              null == a ? null : c.isBedrock ? CB3Libs.Long.fromBits(a[0], a[1]).toString() : CB3Libs.Long.fromBits(a[1], a[0]).toString()
          },
          getLevelName: function () {
            return b(c, ["LevelName"])
          },
          getSpawn: function () {
            return [b(c, ["SpawnX"]), b(c, ["SpawnY"]), b(c, ["SpawnZ"])]
          }
        })
      };
      try {
        window.nbt.parse(c, e)
      } catch (f) {
        d(f)
      }
    })
  }
}()
  , CB3SharedTaskManagerMain = {
    init: function (a) {
      var b = new QuickLRU({
        maxSize: 32
      })
        , c = {};
      a.forEach(function (a) {
        a.addEventListener("message", function (d) {
          if ("sharedTaskPerformResult" === d.data.type) {
            var e = d.data.key
              , f = d.data.result;
            b.set(e, f),
              c[e].forEach(function (a) {
                a(f)
              }),
              delete c[e]
          } else if ("sharedTaskGet" === d.data.type) {
            var e = d.data.key;
            if (b.has(e))
              return void a.postMessage({
                type: "sharedTaskResult",
                key: e,
                result: b.get(e)
              });
            if (c[e])
              return void c[e].push(function (b) {
                a.postMessage({
                  type: "sharedTaskResult",
                  key: e,
                  result: b
                })
              });
            c[e] = [],
              a.postMessage({
                type: "sharedTaskPerform",
                key: e
              })
          }
        }, !1)
      })
    }
  };
window._enableAnalytics = !1;
var ChunkApp = {
  config: {
    maxSeeds: 100,
    distantChunkWidth: 8,
    maxChunkWidth: 80,
    minChunkWidth: 1
  },
  Platform: {
    java_1_20_lb: {
      label: "Java 1.20 (LB)",
      cb3World: {
        edition: CB3Libs.Edition.Java,
        javaVersion: CB3Libs.JavaVersion.V1_20,
        config: {
          largeBiomes: !0
        }
      }
    },
    java_1_20: {
      label: "Java 1.20",
      cb3World: {
        edition: CB3Libs.Edition.Java,
        javaVersion: CB3Libs.JavaVersion.V1_20,
        config: {}
      }
    },
    java_1_19_3_lb: {
      label: "Java 1.19.3 (LB)",
      cb3World: {
        edition: CB3Libs.Edition.Java,
        javaVersion: CB3Libs.JavaVersion.V1_19_3,
        config: {
          largeBiomes: !0
        }
      }
    },
    java_1_19_3: {
      label: "Java 1.19.3",
      cb3World: {
        edition: CB3Libs.Edition.Java,
        javaVersion: CB3Libs.JavaVersion.V1_19_3,
        config: {}
      }
    },
    java_1_19_lb: {
      label: "Java 1.19 (LB)",
      cb3World: {
        edition: CB3Libs.Edition.Java,
        javaVersion: CB3Libs.JavaVersion.V1_19,
        config: {
          largeBiomes: !0
        }
      }
    },
    java_1_19: {
      label: "Java 1.19",
      cb3World: {
        edition: CB3Libs.Edition.Java,
        javaVersion: CB3Libs.JavaVersion.V1_19,
        config: {}
      }
    },
    java_1_18_lb: {
      label: "Java 1.18 (LB)",
      cb3World: {
        edition: CB3Libs.Edition.Java,
        javaVersion: CB3Libs.JavaVersion.V1_18,
        config: {
          largeBiomes: !0
        }
      }
    },
    java_1_18: {
      label: "Java 1.18",
      cb3World: {
        edition: CB3Libs.Edition.Java,
        javaVersion: CB3Libs.JavaVersion.V1_18,
        config: {}
      }
    },
    java_1_17_lb: {
      label: "Java 1.17 (LB)",
      cb3World: {
        edition: CB3Libs.Edition.Java,
        javaVersion: CB3Libs.JavaVersion.V1_17,
        config: {
          largeBiomes: !0
        }
      }
    },
    java_1_17: {
      label: "Java 1.17",
      cb3World: {
        edition: CB3Libs.Edition.Java,
        javaVersion: CB3Libs.JavaVersion.V1_17,
        config: {}
      }
    },
    java_1_16_lb: {
      label: "Java 1.16 (LB)",
      cb3World: {
        edition: CB3Libs.Edition.Java,
        javaVersion: CB3Libs.JavaVersion.V1_16,
        config: {
          largeBiomes: !0
        }
      }
    },
    java_1_16: {
      label: "Java 1.16",
      cb3World: {
        edition: CB3Libs.Edition.Java,
        javaVersion: CB3Libs.JavaVersion.V1_16,
        config: {}
      }
    },
    java_1_15_lb: {
      label: "Java 1.15 (LB)",
      cb3World: {
        edition: CB3Libs.Edition.Java,
        javaVersion: CB3Libs.JavaVersion.V1_15,
        config: {
          largeBiomes: !0
        }
      }
    },
    java_1_15: {
      label: "Java 1.15",
      cb3World: {
        edition: CB3Libs.Edition.Java,
        javaVersion: CB3Libs.JavaVersion.V1_15,
        config: {}
      }
    },
    java_1_14_lb: {
      label: "Java 1.14 (LB)",
      cb3World: {
        edition: CB3Libs.Edition.Java,
        javaVersion: CB3Libs.JavaVersion.V1_14,
        config: {
          largeBiomes: !0
        }
      }
    },
    java_1_14: {
      label: "Java 1.14",
      cb3World: {
        edition: CB3Libs.Edition.Java,
        javaVersion: CB3Libs.JavaVersion.V1_14,
        config: {}
      }
    },
    java_1_13_lb: {
      label: "Java 1.13 (LB)",
      cb3World: {
        edition: CB3Libs.Edition.Java,
        javaVersion: CB3Libs.JavaVersion.V1_13,
        config: {
          largeBiomes: !0
        }
      }
    },
    java_1_13: {
      label: "Java 1.13",
      cb3World: {
        edition: CB3Libs.Edition.Java,
        javaVersion: CB3Libs.JavaVersion.V1_13,
        config: {}
      }
    },
    java_1_12_lb: {
      label: "Java 1.12 (LB)",
      cb3World: {
        edition: CB3Libs.Edition.Java,
        javaVersion: CB3Libs.JavaVersion.V1_12,
        config: {
          largeBiomes: !0
        }
      }
    },
    java_1_12: {
      label: "Java 1.12",
      cb3World: {
        edition: CB3Libs.Edition.Java,
        javaVersion: CB3Libs.JavaVersion.V1_12,
        config: {}
      }
    },
    java_1_11_lb: {
      label: "Java 1.11 (LB)",
      cb3World: {
        edition: CB3Libs.Edition.Java,
        javaVersion: CB3Libs.JavaVersion.V1_11,
        config: {
          largeBiomes: !0
        }
      }
    },
    java_1_11: {
      label: "Java 1.11",
      cb3World: {
        edition: CB3Libs.Edition.Java,
        javaVersion: CB3Libs.JavaVersion.V1_11,
        config: {}
      }
    },
    java_1_10_lb: {
      label: "Java 1.10 (LB)",
      cb3World: {
        edition: CB3Libs.Edition.Java,
        javaVersion: CB3Libs.JavaVersion.V1_10,
        config: {
          largeBiomes: !0
        }
      }
    },
    java_1_10: {
      label: "Java 1.10",
      cb3World: {
        edition: CB3Libs.Edition.Java,
        javaVersion: CB3Libs.JavaVersion.V1_10,
        config: {}
      }
    },
    java_1_9_lb: {
      label: "Java 1.9 (LB)",
      cb3World: {
        edition: CB3Libs.Edition.Java,
        javaVersion: CB3Libs.JavaVersion.V1_9,
        config: {
          largeBiomes: !0
        }
      }
    },
    java_1_9: {
      label: "Java 1.9",
      cb3World: {
        edition: CB3Libs.Edition.Java,
        javaVersion: CB3Libs.JavaVersion.V1_9,
        config: {}
      }
    },
    java_1_8_lb: {
      label: "Java 1.8 (LB)",
      cb3World: {
        edition: CB3Libs.Edition.Java,
        javaVersion: CB3Libs.JavaVersion.V1_8,
        config: {
          largeBiomes: !0
        }
      }
    },
    java_1_8: {
      label: "Java 1.8",
      cb3World: {
        edition: CB3Libs.Edition.Java,
        javaVersion: CB3Libs.JavaVersion.V1_8,
        config: {}
      }
    },
    java_1_7_lb: {
      label: "Java 1.7 (LB)",
      cb3World: {
        edition: CB3Libs.Edition.Java,
        javaVersion: CB3Libs.JavaVersion.V1_7,
        config: {
          largeBiomes: !0
        }
      }
    },
    java_1_7: {
      label: "Java 1.7",
      cb3World: {
        edition: CB3Libs.Edition.Java,
        javaVersion: CB3Libs.JavaVersion.V1_7,
        config: {}
      }
    },
    bedrock_1_20: {
      label: "Bedrock 1.20",
      cb3World: {
        edition: CB3Libs.Edition.Bedrock,
        bedrockVersion: CB3Libs.BedrockVersion.V1_20,
        config: {}
      }
    },
    bedrock_1_19: {
      label: "Bedrock 1.19",
      cb3World: {
        edition: CB3Libs.Edition.Bedrock,
        bedrockVersion: CB3Libs.BedrockVersion.V1_19,
        config: {}
      }
    },
    bedrock_1_18: {
      label: "Bedrock 1.18",
      cb3World: {
        edition: CB3Libs.Edition.Bedrock,
        bedrockVersion: CB3Libs.BedrockVersion.V1_18,
        config: {}
      }
    },
    bedrock_1_17: {
      label: "Bedrock 1.17",
      use32BitSeed: !0,
      cb3World: {
        edition: CB3Libs.Edition.Bedrock,
        bedrockVersion: CB3Libs.BedrockVersion.V1_17,
        config: {}
      }
    },
    bedrock_1_16: {
      label: "Bedrock 1.16",
      use32BitSeed: !0,
      cb3World: {
        edition: CB3Libs.Edition.Bedrock,
        bedrockVersion: CB3Libs.BedrockVersion.V1_16,
        config: {}
      }
    },
    bedrock_1_14: {
      label: "Bedrock 1.14",
      use32BitSeed: !0,
      cb3World: {
        edition: CB3Libs.Edition.Bedrock,
        bedrockVersion: CB3Libs.BedrockVersion.V1_14,
        config: {}
      }
    },
    java: {
      label: "Java",
      cb3World: {
        edition: CB3Libs.Edition.Java,
        javaVersion: CB3Libs.JavaVersion.V1_7,
        config: {}
      }
    },
    bedrock: {
      label: "Bedrock",
      use32BitSeed: !1,
      cb3World: {
        edition: CB3Libs.Edition.Bedrock,
        bedrockVersion: CB3Libs.BedrockVersion.V1_19,
        config: {}
      }
    }
  }
}
  , appHelpers = {
    toLong: function (a) {
      if (!a.match(/^[-+]?\d+$/))
        return void 0;
      var b, c;
      if (a.startsWith("+") ? (b = 1,
        c = a.substr(1)) : a.startsWith("-") ? (b = -1,
          c = a.substr(1)) : (b = 1,
            c = a),
        c = c.replace(/^[0]+/g, ""),
        c.length < 1)
        c = "0";
      else if (c.length > 20)
        return void 0;
      var d = CB3Libs.Long.fromString(c).multiply(CB3Libs.Long.fromNumber(b))
        , e = c;
      return 0 > b && (e = "-" + e),
        d.toString() !== e ? void 0 : d
    }
  }
  , chunkAppLoader = function () {  // Init functions
    function a() {
      try {
        if ("object" == typeof WebAssembly && "function" == typeof WebAssembly.instantiate) {
          var a = new WebAssembly.Module(Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0));
          if (a instanceof WebAssembly.Module)
            return new WebAssembly.Instance(a) instanceof WebAssembly.Instance
        }
      } catch (b) { }
      return !1
    }
    var b = function () {  // Error process func A
      $("img.loader").addClass("hidden"),
        $("#app").removeClass("hidden")
    }
      , c = function (a) {
        var c = $("body");
        a.compassImage = new Image,
          a.compassImage.src = "data:image/png;base64,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";
        a.compassImage.onload = function () {
          if (handleBedrockSeed(a),
            "function" == typeof $.fn.seedControls) {
            var d = c.find("#world-controls");
            d.each(function () {
              $(this).seedControls(a)
            })
          }
          if ("function" == typeof $.fn.seedFindControls) {
            var e = c.find("#seed-find-controls");
            e.each(function () {
              $(this).seedFindControls(a)
            })
          }
          var f = c.find("#map-controls");
          f.mapControls(a);
          var g = c.find("#map-canvas");
          g.chunkMap(a),
            b(),
            a.triggerHandler("uiloaded"),
            setTimeout(function () {
              window._enableAnalytics = !0
            }, 5e3)
        }
      }
      , d = function () {
        $("#app").html("This app is not supported by your browser. Please make sure your browser is up to date and try again."),
          b()
      }
      , e = {};
    return e.errorInit = function () {
      $("#app").html("There was an error loading the app. Please try again later"),
        window.gtag && window.gtag("event", "CB_ChunkApp_InitError"),
        b()
    }
      ,
      e.init = function (b, e) {
        var f = !!Modernizr.canvas
          , g = !!Modernizr.canvastext
          , h = !!Modernizr.webworkers
          , i = !!window.Promise
          , j = !!a();
        !e && f && i && g && h && j ? c(b) : (d(),
          window.gtag && window.gtag("event", "CB_ChunkApp_BrowserTestFailure", {
            missing: [e && "app-support", !f && "canvas", !g && "canvastext", !h && "workers", !j && "wasm", !i && "promise"].filter(Boolean).join(",")
          }))
      }
      ,
      e
  }();
$.fn.seedControls = function (a) {
  var b = this
    , c = {
      error: "错误",
      fileError: "从level.dat中抓取种子失败，请检查level.dat有效性并重试",
      info: "信息",
      warning: "警告",
      noSupport: "因浏览器限制，以下功能无法使用",
      noDragAndDrop: "拖动并放置",
      noFileRead: "从世界存档加载种子"
    }
    , d = {
      seed: this.find("#seed"),
      randomButton: this.find("#seed-random"),
      file: this.find("#seed-file"),
      dropbox: this.find("#seed-dropbox"),
      platformSelect: this.find("select#platform"),
      errors: this.find("#seed-errors"),
      fileError: $('<div class="alert alert-error"><button class="close" data-dismiss="alert">×</button><strong>' + c.error + "!</strong> " + c.fileError + "</div>")
    }
    , e = {
      maybeSetPlatform: function (a) {
        var b = d.platformSelect.find("option").map(function (a, b) {
          return $(b).val()
        }).get();
        return -1 !== b.indexOf(a) ? (d.platformSelect.val(a),
          h.platformChanged(),
          !0) : !1
      },
      ensureEdition: function (a) {
        var b = ChunkApp.Platform[d.platformSelect.val()]
          , c = b && b.cb3World && b.cb3World.edition;
        if (c && c !== a) {
          var f = d.platformSelect.find("option").map(function (a, b) {
            return $(b).val()
          }).get()
            , g = f.find(function (b) {
              var c = ChunkApp.Platform[b]
                , d = c && c.cb3World && c.cb3World.edition;
              return d && d === a
            });
          g && e.maybeSetPlatform(g)
        }
      },
      cleanSeed: function (a) {
        var b;
        return a.length < 1 ? b = e.getSeedFromLong(f) : (b = appHelpers.toLong(a),
          "undefined" == typeof b && (b = a.hashCode())),
          b.toString()
      },
      cleanSeedString: function (a) {
        return a.substr(0, 32)
      },
      getRandomSeed: function () {
        var a = this.getRandomLong();
        return this.getSeedFromLong(a)
      },
      getRandomLong: function () {
        var a = Math.floor(Math.random() * Math.pow(2, 32))
          , b = Math.floor(Math.random() * Math.pow(2, 32));
        return CB3Libs.Long.fromBits(a, b)
      },
      getSeedFromLong: function (a) {
        var b = ChunkApp.Platform[d.platformSelect.val()];
        return b && b.use32BitSeed ? a.toInt() + "" : a.toString()
      },
      removeZero: function (a) {
        return a.replace(/^[0]+/g, "")
      },
      parseFiles: function (a) {
        a.size < 1 ? g.showFileError() : Array.from(a).forEach(function (a) {
          e.addFile(a)
        })
      },
      addFile: function (a) {
        window.gtag && window._enableAnalytics && window.gtag("event", "CB_ChunkApp_SaveFileLoaded"),
          loadMinecraftSave(a, function (a, b) {
            if (a)
              return void g.showFileError();
            var c = b.getSeed()
              , d = b.getLevelName();
            return null == c || c.toString().length >= 100 || null == d || d.toString().length >= 100 ? void g.showFileError() : (g.setSeed(c),
              void e.ensureEdition(b.isBedrock ? CB3Libs.Edition.Bedrock : CB3Libs.Edition.Java))
          })
      }
    }
    , f = e.getRandomLong()
    , g = {
      refreshSeedAndPlatform: function () {
        var a, b = document.location.hash;
        "undefined" != typeof b && b.length > 1 && (a = b.substr(1));
        var c = null
          , d = null;
        try {
          c = window.localStorage.getItem("cb_finder_lastseed")
        } catch (f) { }
        try {
          d = window.localStorage.getItem("cb_finder_lastplatform")
        } catch (f) { }
        var h = d
          , i = a || c;
        return h && e.maybeSetPlatform(h),
          i ? (g.setSeed(i),
            !0) : !1
      },
      getSeed: function () {
        return d.seed.val()
      },
      setSeed: function (a, b, c) {
        d.seed.val(a),
          b || h.seedSubmit(!1, c)
      },
      showFileError: function () {
        d.fileError.prependTo(d.errors)
      },
      showDropbox: function (a) {
        d.dropbox.fadeIn(a),
          $(document).one("click", g.hideDropbox)
      },
      hideDropbox: function (a) {
        "number" != typeof a && (a = 0),
          d.dropbox.fadeOut(a)
      }
    }
    , h = {
      seedChanged: __CB__debounce(function () {
        h.seedSubmit(!0)
      }, 500),
      seedBlurred: function () {
        h.seedSubmit()
      },
      platformChanged: function () {
        var b = d.platformSelect.val();
        0 === b.indexOf("platform-") && (b = b.substr("platform-".length));
        var c = ChunkApp.Platform[b];
        try {
          window.localStorage.setItem("cb_finder_lastplatform", b)
        } catch (e) { }
        c.warning ? j.showError(null, "platform-warning", c.warning, !1, "warning", !1) : j.hideError(null, "platform-warning"),
          a.triggerHandler("platformchange", c)
      },
      randomButton: function () {
        g.setSeed(e.getRandomSeed(), !1, !0)
      },
      openFileDialog: function () {
        d.file.removeClass("hidden").focus().click().addClass("hidden")
      },
      fileSelected: function (a) {
        e.parseFiles(a.target.files)
      },
      hashChanged: function () {
        var a = window.location.hash;
        g.setSeed(a.substr(1)),
          setTimeout(function () {
            d.seed.change(),
              h.seedSubmit()
          }, 0)
      },
      dnd: {
        dragEnter: function () {
          g.showDropbox(125)
        },
        dragLeave: function (a) {
          a = a.originalEvent,
            (a.pageX < 10 || a.pageY < 10 || $(window).width() - a.pageX < 10 || $(window).height - a.pageY < 10) && g.hideDropbox(125)
        },
        drop: function (a) {
          a = a.originalEvent,
            a.stopPropagation && a.stopPropagation(),
            a.preventDefault(),
            g.hideDropbox(0);
          var b = a.dataTransfer.files;
          return "undefined" != typeof b && 0 != b.length ? (e.parseFiles(b),
            !1) : void 0
        }
      },
      seedSubmit: function (b) {
        var c = e.cleanSeedString(g.getSeed())
          , d = e.cleanSeed(c);
        g.setSeed(c, !0);
        var f = CB3Libs.Long.fromString(d);
        !b && $.trim(c).length > 0 && window.location.hash !== "#" + c && window.history.replaceState(null, null, "#" + c),
          b || 0 !== $.trim(c).length || "" === window.location.hash || "#" === window.location.hash || window.history.replaceState(null, null, window.location.pathname);
        try {
          window.localStorage.setItem("cb_finder_lastseed", c)
        } catch (h) { }
        (c.length < 1 || f.toString() === c || "undefined" != typeof appHelpers.toLong(c)) && (c = void 0),
          a.triggerHandler("seedchangeui", [f, c])
      }
    }
    , i = {}
    , j = {
      showError: function (a, b, e, f, g, h) {
        if (f && h)
          throw new Error;
        if (!h || !i[b]) {
          g = g || "error",
            j.hideError(a, b);
          var k = $('<div id="chunkapp-error-' + b + '" class="alert alert-' + g + '">' + (f ? '<button class="close" data-dismiss="alert">×</button>' : "") + "<strong>" + c[g] + '!</strong> <span class="message"></span></div>');
          k.find(".message").replaceWith(e),
            k.prependTo(d.errors),
            i[b] = !0
        }
      },
      hideError: function (a, b) {
        i[b] = !1,
          d.errors.find("#chunkapp-error-" + b).detach()
      }
    }
    , k = Modernizr.draganddrop
    , l = !!window.FileReader;
  if (d.randomButton.click(h.randomButton),
    $(window).hashchange(h.hashChanged),
    l && (k && (this.find("#seed-dragdrop-hint").removeClass("hidden"),
      $("body").bind("dragenter", h.dnd.dragEnter),
      d.dropbox.bind("dragleave", h.dnd.dragLeave).bind("dragover", !1).bind("drop", h.dnd.drop).hide().removeClass("hidden")),
      this.find("#seed-load").removeClass("hidden").click(h.openFileDialog),
      d.file.change(h.fileSelected)),
    !l || !k) {
    var m = '<div class="alert"><button class="close" data-dismiss="alert">×</button><strong>' + c.info + "!</strong> " + c.noSupport + ": "
      , n = new Array;
    l ? k || n.push(c.noDragAndDrop) : n.push(c.noFileRead),
      m += n.join(", ") + "</div>",
      $(m).appendTo(d.errors)
  }
  d.seed.keypress(function (a) {
    13 === a.which && (a.preventDefault(),
      h.seedSubmit())
  }),
    a.on("uiloaded", function () {
      setTimeout(function () {
        var b = !1;
        b = g.refreshSeedAndPlatform(),
          h.seedSubmit(!b),
          d.seed.change(),
          d.platformSelect.change(),
          "object" == typeof a.errors && $.each(a.errors, function (a, b) {
            $('<div class="alert alert-error"><button class="close" data-dismiss="alert">×</button><strong>' + c.error + "!</strong> </div>").append(document.createTextNode(b)).prependTo(d.errors)
          }),
          "object" == typeof a.warnings && $.each(a.warnings, function (a, b) {
            $('<div class="alert"><button class="close" data-dismiss="alert">×</button><strong>' + c.info + "!</strong> " + b + "</div>").prependTo(d.errors)
          })
      })
    }),
    d.seed.change(h.seedChanged).keyup(h.seedChanged),
    d.seed.blur(h.seedBlurred),
    d.platformSelect.change(h.platformChanged),
    a.on("showerror", j.showError),
    a.on("hideerror", j.hideError),
    a.triggerHandler("seedControlsInitialized", b)
}
  ,
  $.fn.mapControls = function (a) {
    var b = this
      , c = {
        slider: this.find("#map-zoom-slider"),
        gotoX: $("body").find("#map-goto-x"),
        gotoZ: $("body").find("#map-goto-z"),
        gotoButton: $("body").find("#map-goto-go"),
        hideSecondary: this.find("#map-secondary-enabled"),
        useWorkers: this.find("#map-worker-enabled"),
        touchEnabled: this.find("#map-touch-enabled"),
        gridLines: this.find("#show-grid-lines")
      }
      , d = {
        flashRed: function (a) {
          a.addClass("errorflash"),
            setTimeout(function () {
              a.removeClass("errorflash")
            }, 1500)
        }
      }
      , e = {
        goToTouchHelp: function (a) {
          $("#howto-touch").ScrollTo(),
            a.preventDefault()
        },
        sliderMoved: function (b, c) {
          //a.triggerHandler("zoomsetpercent", c.value / 100)
        },
        touchChanged: function () {
          a.triggerHandler("touchset", c.touchEnabled.is(":checked"))
        },
        goTo: function (b, e) {
          window.gtag && window._enableAnalytics && window.gtag("event", "CB_ChunkApp_GoTo"),
            e = e === !0;
          var f = c.gotoX.val()
            , g = c.gotoZ.val()
            , h = !1
            , i = !1;
          if (f = appHelpers.toLong(f),
            g = appHelpers.toLong(g),
            "undefined" != typeof f) {
            var j = f.toNumber();
            (j > 34359738352 || -34359738368 > j) && (h = !0)
          } else
            h = !0;
          if ("undefined" != typeof g) {
            var k = g.toNumber();
            (k > 34359738352 || -34359738368 > k) && (i = !0)
          } else
            i = !0;
          h && !e && d.flashRed(c.gotoX),
            i && !e && d.flashRed(c.gotoZ),
            h || i || a.triggerHandler("goto", [f, g])
        },
        buttonPress: function (a) {
          13 === a.keyCode && c.gotoButton.click()
        },
        saveMap: function () {
          window.gtag && window._enableAnalytics && window.gtag("event", "CB_ChunkApp_SaveMap"),
            a.triggerHandler("saverequest")
        },
        secondaryChanged: function () {
          a.triggerHandler("secondarychange", c.hideSecondary.is(":checked"))
        },
        gridLinesChanged: function () {
          a.triggerHandler("gridlineschange", c.gridLines.is(":checked"))
        },
        workerChanged: function () {
          var b = c.useWorkers.is(":checked");
          a.useWorkers !== b && (a.useWorkers = b,
            a.triggerHandler("webworkerchange", [b]))
        }
      }
      , f = {
        zoomChange: function (a, b, d) {
          c.slider.slider("value", [100 * d])
        },
        pinChanged: function (a, b, d) {
          c.gotoX.val(b.toString()),
            c.gotoZ.val(d.toString())
        },
        touchChanged: function (a, b) {
          c.touchEnabled.prop("checked", !!b)
        }
      };
    /*c.slider.slider({
        min: 0,
        max: 100,
        step: 1,
        value: 51
    }),*/
    c.gotoButton.click(e.goTo),
      c.gotoX.add(c.gotoZ).on("keypress", e.buttonPress),
      //c.slider.on("slide", e.sliderMoved),
      c.hideSecondary.click(e.secondaryChanged),
      c.gridLines.change(e.gridLinesChanged),
      b.find("#map-save").on("click", e.saveMap),
      a.on("zoomchange", f.zoomChange),
      a.on("pinset", f.pinChanged),
      a.initialHideSecondary = c.hideSecondary.prop("checked"),
      a.supportsWorkers ? (c.useWorkers.click(e.workerChanged),
        e.workerChanged()) : (b.find("#map-worker").hide(),
          a.triggerHandler("webworkerchange", [!1])),
      c.gridLines.prop("checked", !a.initialHideGridLines),
      this.find("a").filter(function () {
        return "undefined" != typeof $(this).data("scrollto")
      }).each(function () {
        var a = $(this);
        a.click(function () {
          return $(a.data("scrollto")).ScrollTo(),
            !1
        })
      }),
      "undefined" != typeof Hammer && (c.touchEnabled.change(e.touchChanged),
        a.on("touchchange", f.touchChanged),
        this.find("#map-touch").removeClass("hidden"),
        this.find("#map-touch-enabled-help").click(e.goToTouchHelp)),
      setTimeout(function () {
        c.gotoButton.trigger("click", !0)
      }, 0)
  }
  ,
  $.fn.chunkMap = function (a) {
    function b() {
      window._enableAnalytics && window.gtag && t && (window.gtag("event", "CB_ChunkApp_Usage", {
        platform: Object.keys(ChunkApp.Platform).find(function (a) {
          return ChunkApp.Platform[a] === m
        }) || "N/A",
        finder: window.CB3FinderAppName || "N/A",
        dimension: window.__analytics_dimension || "N/A",
        zoom: Math.pow(2, Math.floor(Math.log2(options.chunkWidth))),
        biomeFilterCount: window.__analytics_biomeFilter ? window.__analytics_biomeFilter.length : "N/A",
        poisCount: __analytics_lastPois ? __analytics_lastPois.length : "-1",
        pois: __analytics_lastPois && CB3PoiConfig ? __analytics_lastPois.map(function (a) {
          return CB3PoiConfig[a].gaId
        }).concat(__analytics_lastBiomes ? ["Bi"] : []).join("") : "",
        biomeRequests: window.__analytics_biomeRequests ? window.__analytics_biomeRequests : 0
      }),
        t = !1)
    }
    function c(b) {
      var width = document.body.clientWidth
        , height = document.documentElement.clientHeight || document.body.clientHeight
        , m = width;

      E = 15;  /** Map area left margin */
      F = 32;  /** Map area top margin */
      G = 15;  /** Map area right margin */
      H = 55;  /** Map area bottom margin */

      var n = m - E - G
        , o = Math.floor(.7 * n)
        , p = o + F + H;
      p = Math.min(540, p),
        m = width,
        p = height - mapContext.canvas.offsetTop - 68,
        mapContext.canvas.width = m,
        mapContext.canvas.height = p,
        mapContext.imageSmoothingEnabled = !1,
        mapContext.mozImageSmoothingEnabled = !1,
        mapContext.webkitImageSmoothingEnabled = !1,
        mapContext.msImageSmoothingEnabled = !1,
        d = m,
        e = p,
        right = d - G,
        bottom = e - H,
        left = E,
        top = F,
        b && x.setCenter(CB3Libs.Long.ZERO, CB3Libs.Long.ZERO),
        a.triggerHandler("mapdimensionschanged", [[m, p]]),
        w.redraw()
    }
    var d, e, right, bottom, left, top, k = this, l = $("body")
      , m = ChunkApp.Platform.java
      , n = !a.initialHideSecondary
      , o = !a.initialHideGridLines
      , p = !1, q = 1, mapContext = k.get(0).getContext("2d");
    mapContext.imageSmoothingEnabled = !1,
      mapContext.mozImageSmoothingEnabled = !1,
      mapContext.webkitImageSmoothingEnabled = !1,
      mapContext.msImageSmoothingEnabled = !1,
      a.loadingBackground && k.css("background-color", "rgb(" + a.loadingBackground + ")");
    var mapText = {
      chunkLoad: "加载区块中...",
      chunkLoadShort: "加载中...",
      to: "到",
      from: "从",
      forLabel: "版本"
    }
      , t = !1;
    setTimeout(function () {
      t = !0
    }, 9e4);
    var options = {
      seed: CB3Libs.Long.ZERO,
      seedString: void 0,
      chunkWidth: 48,  // Pixels per chunk
      distantView: !1,
      startX: -6,
      startZ: -4,
      intervalFactor: 50,
      interval: 10,    // Chunks per text
      gridStartX: left,
      gridEndX: right + 1,
      gridStartY: top,
      gridEndY: bottom + 1,
      pin: void 0
    }
      , v = {
        setSeed: function (a, b, c) {
          options.seed.equals(a) || (
            options.seed = a,
            options.seedString = b,
            options.seedDisplay = c
          )
        },
        limitInt32: function (a) {
          return a > 2147483647 ? 2147483647 : -2147483648 > a ? -2147483648 : a
        },
        nearInteger: function (a) {
          var b = a % 1;
          return -.999 > b || b > 0 && .001 > b ? Math.floor(a) : b > .999 || 0 > b && b > -.001 ? Math.ceil(a) : a
        },
        formatNr: function (a) {
          return a += "",
            "de" == getLocale() ? a.replace(".", ",").replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") : a.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
        }
      }
      , w = function () {
        var c, l = 0, borderColor = "#332B28", t = "#f0cccc", w = "208,227,240", isClip = !1, y = a.drawAll, z = {
          formatNr: v.formatNr,
          chunkXToScreen: function (a) {
            return left + Math.round((a - options.startX) * options.chunkWidth)
          },
          chunkZToScreen: function (a) {
            return top + Math.round((a - options.startZ) * options.chunkWidth)
          },
          getFirstChunkX: function () {
            return Math.floor(options.startX)
          },
          getFirstChunkZ: function () {
            return Math.floor(options.startZ)
          },
          getFirstChunkXToFill: function () {
            var a = z.getFirstChunkX()
              , b = a + 1
              , c = z.chunkXToScreen(a)
              , d = z.chunkXToScreen(b);
            return c = Math.max(c, left),
              3 > d - c ? b : a
          },
          getFirstChunkZToFill: function () {
            var a = z.getFirstChunkZ()
              , b = a + 1
              , c = z.chunkZToScreen(a)
              , d = z.chunkZToScreen(b);
            return c = Math.max(c, top),
              3 > d - c ? b : a
          },
          getLastChunkXToFill: function () {
            var a = z.getFirstChunkXToFill();
            return a + Math.floor((right - z.chunkXToScreen(a)) / options.chunkWidth)
          },
          getLastChunkZToFill: function () {
            var a = z.getFirstChunkZToFill();
            return a + Math.floor((bottom - z.chunkZToScreen(a)) / options.chunkWidth)
          },
          getScreenFirstX: function () {
            return (Math.floor(options.startX) - options.startX) * options.chunkWidth + left
          },
          getScreenFirstY: function () {
            return (Math.floor(options.startZ) - options.startZ) * options.chunkWidth + top
          },
          getInScreenFirstX: function (a) {
            for (var b = z.getScreenFirstX(); left - (a ? 1 : 0) >= b;)
              b += options.chunkWidth;
            return b
          },
          getInScreenFirstY: function (a) {
            for (var b = z.getScreenFirstY(); top - (a ? 1 : 0) >= b;)
              b += options.chunkWidth;
            return b
          },
          getInScreenFirstX16: function (a) {
            var b = options.interval;
            b = Math.ceil(options.startX / b) * b,
              b = (b - options.startX) * options.chunkWidth + left;
            return b
          },
          getInScreenFirstY16: function (a) {
            var b = options.interval;
            b = Math.ceil(options.startZ / b) * b,
              b = (b - options.startZ) * options.chunkWidth + top;
            return b
          },
          getInScreenFirstRegionX: function (a) {
            for (var b = z.getScreenFirstX(), c = Math.floor(options.startX); left - (a ? 1 : 0) >= b || c % 32 !== 0;)
              b += options.chunkWidth,
                c += 1;
            return b
          },
          getInScreenFirstRegionY: function (a) {
            for (var b = z.getScreenFirstY(), c = Math.floor(options.startZ); top - (a ? 1 : 0) >= b || c % 32 !== 0;)
              b += options.chunkWidth,
                c += 1;
            return b
          },
          getInScreenFirstRegionX16: function (a) {
            for (var b = z.getScreenFirstX(), c = Math.floor(options.startX); left - (a ? 1 : 0) >= b || c % 32 !== 0;)
              b += options.chunkWidth,
                c += 1;
            return b
          },
          getInScreenFirstRegionY16: function (a) {
            for (var b = z.getScreenFirstY(), c = Math.floor(options.startZ); top - (a ? 1 : 0) >= b || c % 32 !== 0;)
              b += options.chunkWidth,
                c += 1;
            return b
          },
          getFirstCoordinateX: function () {
            return 16 * Math.ceil(options.startX)
          },
          getFirstCoordinateX16: function () {
            var b = options.interval;
            b = Math.ceil(options.startX / b) * b;
            return 16 * b
          },
          getLastCoordinateX: function () {
            for (var a = z.getFirstCoordinateX(), b = z.getInScreenFirstX(!0); right >= b;)
              b += options.chunkWidth,
                a += 16;
            return a - 16
          },
          getFirstCoordinateZ: function () {
            return 16 * Math.ceil(options.startZ)
          },
          getFirstCoordinateZ16: function () {
            var b = options.interval;
            b = Math.ceil(options.startZ / b) * b;
            return 16 * b
          },
          getLastCoordinateZ: function () {
            for (var a = z.getFirstCoordinateZ(), b = z.getInScreenFirstY(!0); bottom >= b;)
              b += options.chunkWidth,
                a += 16;
            return a - 16
          }
        }, A = function () {
          var b = 0
            , d = 0
            , e = 0
            , l = 0
            , o = 0
            , v = 0
            , x = 0
            , A = 0
            , E = 0
            , F = 0
            , H = []
            , I = !1
            , J = 0
            , L = 0
            , M = 0
            , O = a.secondaryRange || 0
            , Q = !1
            , R = null
            , S = {};
          S.mapChanged = function (f) {
            if ("undefined" != typeof options.seed) {
              a.triggerHandler("mapDrawingStarted", [options, m]);
              var g = f === !0 || y;
              if (L = L + 1 | 0,
                M = 0,
                e = z.getFirstChunkXToFill(),
                l = z.getFirstChunkZToFill(),
                o = z.getLastChunkXToFill(),
                v = z.getLastChunkZToFill(),
                "undefined" != typeof m.boundaries && (e = Math.max(e, m.boundaries.minX),
                  l = Math.max(l, m.boundaries.minZ),
                  o = Math.min(o, m.boundaries.maxX),
                  v = Math.min(v, m.boundaries.maxZ)),
                x = e - O,
                A = l - O,
                E = o + O,
                F = v + O,
                b = x,
                d = A,
                H = [],
                R = null,
                Q = options.distantView && a.distantViewDeferredRender || !options.distantView && a.deferredRender) {
                var h = function (a, b) {
                  var c = z.chunkXToScreen(a) + 1
                    , d = z.chunkZToScreen(b) + 1;
                  return [c, d]
                };
                R = a.getRenderer(x, A, E - x, F - A, options.chunkWidth, h)
              }
              if (f || (PutLoadText(),
                p || (k.attr("aria-busy", "true"),
                  p = !0)),
                !I || g) {
                I = !0;
                var i = (new Date).getTime() - c;
                10 > i || g ? $(void 0, 90 - i, g, f) : window.postMessage("drawChunks", "*")
              }
            }
          }
            ;
          var PutLoadText = function () {
            EndClip();
            mapContext.font = "12px sans-serif";
            mapContext.textAlign = "end";
            mapContext.textBaseline = "middle";
            mapContext.fillStyle = "white";
            mapContext.fillText(mapText.chunkLoadShort, right - 5, 16);
            BeginClip()
          }
            , ClearLoadText = function () {
              EndClip();
              mapContext.fillStyle = borderColor;
              mapContext.fillRect(right - 55, 0, 60, 32);
              BeginClip()
            }
            , V = function (b, c, d, e) {
              if (W(b, c)) {
                var j = a.primaryColorRGB
                  , k = a.secondaryColorRGB;
                "string" == typeof e && (j = e,
                  k = e);
                var l = z.chunkXToScreen(b) + 1
                  , m = z.chunkZToScreen(c) + 1
                  , n = Math.min(z.chunkXToScreen(b + 1) - 1, right + 1)
                  , o = Math.min(z.chunkZToScreen(c + 1) - 1, bottom + 1);
                l = Math.max(l, left + 2),
                  m = Math.max(m, top + 2),
                  mapContext.fillStyle = 1 > d ? "rgba(" + k + "," + d + ")" : "rgb(" + j + ")",
                  BeginClip(),
                  options.distantView ? (mapContext.beginPath(),
                    mapContext.arc((l + n) / 2, (m + o) / 2, 4, 0, 2 * Math.PI, !1),
                    mapContext.fill()) : mapContext.fillRect(l, m, n - l, o - m)
              }
            }
            , W = function (a, b) {
              return a >= e && b >= l && o >= a && v >= b
            }
            , X = function (a, b) {
              return a -= e,
                b -= l,
                a * (v - l + 1) + b
            }
            , Y = function (a, b) {
              if (W(a, b)) {
                var c = X(a, b);
                H[c] = 1
              }
            }
            , Z = function (a, b) {
              if (!W(a, b))
                return !1;
              var c = X(a, b);
              return 1 === H[c]
            }
            , $ = function (c, e, f, g) {
              function h() {
                (!a.async || 1 > M && I === !1) && (a.drawChunkBordersPostRender || DrawGridLine(),
                  EndClip(),
                  DrawPin(),
                  g || (P.clearFooter(),
                    DetailTextOnPin(),
                    ClearLoadText(),
                    p && (k.attr("aria-busy", "false"),
                      p = !1)))
              }
              if ("undefined" != typeof c) {
                if (c.source != window || "drawChunks" != c.data)
                  return;
                c.stopPropagation()
              }
              "undefined" == typeof e && (e = 10),
                f = f === !0,
                J = (new Date).getTime();
              for (var i = L; (new Date).getTime() - J < e || f;) {
                if (Q) {
                  if (!R.hasNext())
                    return I = !1,
                      void h()
                } else if (b > E && (d++,
                  b = x,
                  d > F))
                  return I = !1,
                    void h();
                if (a.async)
                  Q ? (M++,
                    R.renderNextAsync(mapContext, function (b, c, d, e, f, g) {
                      if (L !== i)
                        return !1;
                      if (BeginClip(),
                        g)
                        mapContext.fillStyle = t,
                          mapContext.fillRect(b, c, d, e);
                      else if (f && a.loadingBackground) {
                        var h = mapContext.globalCompositeOperation;
                        mapContext.globalCompositeOperation = "destination-over",
                          mapContext.fillStyle = borderColor,
                          mapContext.fillRect(b, c, d, e),
                          mapContext.globalCompositeOperation = h
                      }
                      return !0
                    }, function () {
                      M--,
                        L === i && h()
                    }, function (a, b, c) {
                      L === i && V(a, b, 1, c)
                    }, function () {
                      DrawGridLine(),
                        DrawPin()
                    }, function () {
                      BeginClip(),
                        Border()
                    }, [options.gridStartX + 2, options.gridStartY + 2, options.gridEndX, options.gridEndY])) : (M++,
                      a.checkChunkAsync(options.seed, b, d, m, function (b, c, d) {
                        L === i && (M--,
                          b ? V(c, d, 1, b) : a.loadingBackground && V(c, d, 1, w),
                          h())
                      }),
                      true);
                else if (Q)
                  BeginClip(),
                    R.renderNext(mapContext, function (a, b, c) {
                      V(a, b, 1, c)
                    });
                else {
                  var j = a.checkChunk(options.seed, b, d, m);
                  if (j) {
                    if (V(b, d, 1, j),
                      n && O > 0) {
                      Y(b, d);
                      var l = a.getSurroundings(b, d);
                      if ("undefined" != typeof l)
                        for (var o = 0; o < l.length; o++) {
                          var s = l[o];
                          Z(s.x, s.z) || s.p > 0 && V(s.x, s.z, s.p)
                        }
                    }
                  } else
                    a.loadingBackground && V(b, d, 1, w);
                  b++
                }
              }
              window.postMessage("drawChunks", "*")
            };
          return window.addEventListener ? window.addEventListener("message", $, !0) : y = !0,
            S
        }(), BeginClip = function () {  // Start clip area
          isClip || (
            isClip = !0,
            mapContext.save(),
            mapContext.beginPath(),
            mapContext.rect(
              options.gridStartX + 2, options.gridStartY + 2,
              options.gridEndX - options.gridStartX - 5,
              options.gridEndY - options.gridStartY - 4
            ),
            mapContext.clip()
          )
        }, EndClip = function () {    // End clip area
          isClip && (
            isClip = !1,
            mapContext.restore()
          )
        }, Border = function () {    // Fill border with specify color, clear map area 
          L = !1,
            mapContext.fillStyle = borderColor,
            mapContext.fillRect(0, 0, d, e),
            a.loadingBackground && (
              BeginClip(),  // Contains B and C function
              mapContext.clearRect(left, top, right - left, bottom - top),
              EndClip()
            )
        }, ClearMap = function () {    // Clear entire screen
          mapContext.fillStyle = borderColor;
          mapContext.fillRect(0, 0, d, e)
        }, Grid = function (color, lineWidth, c, d, e) {  // Draw grid line actually
          var j, k;
          for (mapContext.strokeStyle = color,
            mapContext.lineWidth = lineWidth,
            mapContext.beginPath(),
            j = c; right + .5 >= j;)
            mapContext.moveTo(Math.round(j) + .5, Math.round(top) + 2),
              mapContext.lineTo(Math.round(j) + .5, Math.round(bottom) + 1),
              j += e;
          for (mapContext.stroke(),
            mapContext.beginPath(),
            k = d; bottom + .5 >= k;)
            mapContext.moveTo(Math.round(left) + 2, Math.round(k) + .5),
              mapContext.lineTo(Math.round(right) + 1, Math.round(k) + .5),
              k += e;
          mapContext.stroke()
        }, DrawGridLine = function () {  // Draw grid line caller
          if (o) {
            var a = options.chunkWidth, b = options.interval;
            options.distantView || Grid("#888", 1, z.getInScreenFirstX16(!1) - b * a, z.getInScreenFirstY16(!1) - b * a, a);
            Grid("#88C", options.distantView ? 1 : 2, z.getInScreenFirstX16(!0) - b * a, z.getInScreenFirstY16(!0) - b * a, b * a);
          }
        }, PutCoordText = function () {  //  Coordinate text
          var b, c, e = left + .5, k = top + .5, p = options.interval;
          mapContext.strokeStyle = "#444",
            mapContext.lineWidth = "2",
            mapContext.beginPath(),
            mapContext.moveTo(e, bottom + 1),
            mapContext.lineTo(e, k),
            mapContext.lineTo(right, k),
            mapContext.lineTo(right, bottom + 1),
            mapContext.lineTo(e, bottom + 1),
            mapContext.stroke(),
            mapContext.font = "10px sans-serif";
          b = z.getInScreenFirstX16(!0),
            c = top + 16,
            mapContext.textAlign = "center",
            mapContext.textBaseline = "alphabetic",
            mapContext.fillStyle = "white",
            BeginClip();
          for (var q = z.getFirstCoordinateX16(); right >= b;) {
            mapContext.fillText(z.formatNr(q.toFixed(0)), b, c);
            b += options.chunkWidth * p;
            q += 16 * p;
          }
          b = left + 4;
          c = z.getInScreenFirstY16(!0);
          mapContext.textAlign = "start";
          q = z.getFirstCoordinateZ16();
          if (bottom >= c) {
            mapContext.textBaseline = "middle";
            c > top + 28 && mapContext.fillText(z.formatNr(q.toFixed(0)), b, c);
            c += p * options.chunkWidth;
            q += 16 * p;
            for (; bottom >= c;) {
              mapContext.fillText(z.formatNr(q.toFixed(0)), b, c);
              c += p * options.chunkWidth;
              q += 16 * p;
            }
          }
          mapContext.drawImage(a.compassImage, right - 45, bottom - 55);
          EndClip();
        },
          PutSeedText = function () {  //  Seed text
            var b, c;
            mapContext.textAlign = "start",
              mapContext.font = "11px sans-serif",
              mapContext.fillStyle = "white",
              c = 11,
              b = left;
            var t = ", " + mapText.forLabel + " " + m.label
              , v = options.seedDisplay || options.seed;
            "string" == typeof a.header ? mapContext.fillText(a.header, b, c + 8) : "undefined" == typeof options.seedString ? mapContext.fillText("种子: " + v.toString() + t, b, c + 8) : (mapContext.fillText("种子: ", b, c + 8),
              mapContext.font = "10px sans-serif",
              mapContext.fillText(options.seedString + t, b + 35, c),
              mapContext.fillText(v.toString(), b + 35, c + 16))
          }
          , PutDetailText = function (a, b, c, d, e) {
            L = !0,
              mapContext.font = "11px sans-serif",
              mapContext.textAlign = "end",
              mapContext.fillStyle = "white";
            var i = right - 5
              , k = bottom + 15;
            mapContext.fillText("X: " + z.formatNr(a.toFixed(1)) + "   Z: " + z.formatNr(b.toFixed(1)), i, k),
              k += 14,
              mapContext.fillText("区块 (" + z.formatNr(Math.floor(c / 16)) + " / " + z.formatNr(Math.floor(d / 16)) + ") " + mapText.from + " (" + z.formatNr(c) + " / " + z.formatNr(d) + ") " + mapText.to + " (" + z.formatNr(c + 15) + " / " + z.formatNr(d + 15) + ")", i, k),
              k += 14,
              e && (
                mapContext.font = "11px sans-serif",
                mapContext.fillText(e, i, k)
              )
          }, DrawPin = function () {
            PutCoordText();
            if (P.pinRect = void 0,
              "undefined" != typeof options.pin) {
              var a = options.pin
                , b = left + (a[0] - options.startX) * options.chunkWidth;
              left > b || b > right || (l = top + (a[1] - options.startZ) * options.chunkWidth,
                top > l || l > bottom || (P.pinRect = [Math.floor(b) - 3, Math.floor(l) - 3, 6, 6],
                  mapContext.fillStyle = "rgb(255,255,255)",
                  mapContext.beginPath(),
                  mapContext.moveTo(0, 0),
                  mapContext.arc(b, l, 7, 0, 2 * Math.PI, !0),
                  mapContext.closePath(),
                  mapContext.fill(),
                  mapContext.fillStyle = "rgb(255,0,0)",
                  mapContext.beginPath(),
                  mapContext.moveTo(0, 0),
                  mapContext.arc(b, l, 5, 0, 2 * Math.PI, !0),
                  mapContext.closePath(),
                  mapContext.fill()))
            }
          }, L = !1, M = null, DetailTextOnPin = function () {
            if (!L && "undefined" != typeof options.pin) {
              var b = options.pin[0]
                , c = options.pin[1]
                , d = 16 * b
                , e = 16 * c
                , f = null;
              a.getHoverText && (f = a.getHoverText({
                x: Math.floor(d),
                z: Math.floor(e),
                chunkX: b,
                chunkZ: c,
                platform: m
              })),
                PutDetailText(d, e, 16 * Math.floor(b), 16 * Math.floor(c), f)
            }
          }, DelayPutText = function () {
            null !== M && clearTimeout(M),
              M = setTimeout(DetailTextOnPin, 800)
          }, P = {};
        P.pinRect = void 0;
        P.initialDraw = function () {
          P.redraw()
        };
        P.clearFooter = function () {
          L = !1,
            mapContext.fillStyle = borderColor,
            mapContext.fillRect(0, bottom + 1, right, e - bottom - 1),
            DelayPutText()
        };
        P.redrawFooter = function (a, b, c, d, e) {
          EndClip(),
            P.clearFooter(),
            PutDetailText(a, b, c, d, e)
        };
        P.setXBoundaries = function () { };
        var Q = function () {
          if ("undefined" == typeof m.boundaries)
            return options.gridStartX = left,
              options.gridStartY = top,
              options.gridEndX = right + 1,
              void (options.gridEndY = bottom + 1);
          var a = z.getInScreenFirstX(!0)
            , b = Math.ceil(options.startX)
            , c = b + Math.floor((right - z.getScreenFirstX()) / options.chunkWidth)
            , d = m.boundaries.minX
            , e = m.boundaries.maxX;
          d + 1 > c || b - 1 > e ? (options.gridStartX = left,
            options.gridEndX = left) : (options.gridStartX = d >= b ? a + options.chunkWidth * (d - b) - 2 : left,
              options.gridEndX = c >= e ? a + options.chunkWidth * (e - b) + 1 : right + 1);
          var j = z.getInScreenFirstY(!0)
            , k = Math.ceil(options.startZ)
            , l = k + Math.floor((bottom - z.getScreenFirstY()) / options.chunkWidth)
            , n = m.boundaries.minZ
            , o = m.boundaries.maxZ;
          n + 1 > l || k - 1 > o ? (options.gridStartY = top,
            options.gridEndY = top) : (options.gridStartY = n >= k ? j + options.chunkWidth * (n - k) - 2 : top,
              options.gridEndY = l >= o ? j + options.chunkWidth * (o - k) + 1 : bottom + 1)
        };
        return P.redraw = function () {
          b(),
            c = (new Date).getTime(),
            Q(),
            EndClip(),
            Border(),
            PutSeedText(),
            PutCoordText(),
            BeginClip(),  // Start clip area, restrict drawing operation after.
            DrawGridLine(),
            A.mapChanged(!1),
            EndClip(),  // Remove clip area, cancelled restriction.
            DrawPin(),
            DelayPutText()
        }
          ,
          P.drawImage = function () {
            Q(),
              EndClip(),
              Border(),
              PutSeedText(),
              PutCoordText(),
              BeginClip(),
              DrawGridLine(),
              A.mapChanged(!0),
              EndClip(),
              DrawPin(),
              DetailTextOnPin()
          }
          ,
          P.clearAll = function () {
            mapContext.fillStyle = borderColor,
              mapContext.fillRect(0, 0, d, e)
          }
          ,
          P
      }()
      , x = {
        setX: function (a) {
          a !== options.startX && (a = v.limitInt32(a),
            a = v.nearInteger(a),
            options.startX = a)
        },
        setZ: function (a) {
          a !== options.startZ && (a = v.limitInt32(a),
            a = v.nearInteger(a),
            options.startZ = a,
            w.setXBoundaries())
        },
        getChunkFromCoords: function (a, b) {
          return [(a.toNumber() + .5) / 16, (b.toNumber() + .5) / 16]
        },
        getChunkFromScreen: function (a, b) {
          return x.isInsideMap(a, b) ? (a = (a - left) / options.chunkWidth + options.startX,
            a = (Math.floor(16 * a) + .5) / 16,
            b = (b - top) / options.chunkWidth + options.startZ,
            b = (Math.floor(16 * b) + .5) / 16,
            [a, b]) : void 0
        },
        getCoordsFromScreen: function (a, b) {
          return x.isInsideMap(a, b) ? (a = (a - left) / options.chunkWidth + options.startX,
            a = Math.floor(160 * a + .5) / 10,
            b = (b - top) / options.chunkWidth + options.startZ,
            b = Math.floor(160 * b + .5) / 10,
            [a, b]) : void 0
        },
        setCenter: function (a, b) {
          var c = x.getChunkFromCoords(a, b)
            , d = (right - left) / options.chunkWidth / 2
            , e = (bottom - top) / options.chunkWidth / 2;
          x.setX(c[0] - d),
            x.setZ(c[1] - e)
        },
        _setCenterRaw: function (a, b) {
          const c = [a / 16, b / 16];
          var d = (right - left) / options.chunkWidth / 2
            , e = (bottom - top) / options.chunkWidth / 2;
          x.setX(c[0] - d),
            x.setZ(c[1] - e)
        },
        getCenter: function () {
          var a = (right - left) / options.chunkWidth / 2
            , b = (bottom - top) / options.chunkWidth / 2
            , c = options.startX + a
            , d = options.startZ + b;
          return [16 * c, 16 * d]
        },
        scaleCenter: function (a) {
          var b = x.getCenter();
          x._setCenterRaw(CB3Libs.Long.fromNumber(b[0] * a), CB3Libs.Long.fromNumber(b[1] * a))
        },
        moveY: function (a) {
          if (!(1 > a && a > -1)) {
            var b = a / options.chunkWidth;
            x.setZ(options.startZ + b)
          }
        },
        moveX: function (a) {
          if (!(1 > a && a > -1)) {
            var b = a / options.chunkWidth;
            x.setX(options.startX + b)
          }
        },
        setPin: function (a, b) {
          options.pin = x.getChunkFromCoords(a, b)
        },
        setPinAtCanvas: function (b, c) {
          var d = x.getChunkFromScreen(b, c);
          if ("undefined" != typeof d) {
            if ("undefined" != typeof w.pinRect) {
              var e = w.pinRect
                , f = e[0]
                , g = e[0] + e[2]
                , h = e[1]
                , i = e[1] + e[3];
              if (b >= f && g >= b && c >= h && i >= c)
                return void x.removePin()
            }
            window.gtag && window._enableAnalytics && window.gtag("event", "CB_ChunkApp_PinSetViaInputDevice"),
              options.pin = d,
              a.triggerHandler("pinset", [Math.floor(16 * options.pin[0]), Math.floor(16 * options.pin[1])])
          }
        },
        removePin: function () {
          options.pin = void 0
        },
        isInsideMap: function (a, b) {
          return a >= left && right > a && b >= top && bottom >= b
        }
      }
      , y = {
        zoomFactor: 1,
        toChunkWidth: function (a) {
          var b = Math.pow(16, a)
            , c = b < ChunkApp.config.distantChunkWidth;
          return c ? Math.floor(32 * b) / 32 : Math.floor(b)
        },
        toZoomFactor: function (a) {
          return Math.log(a) / Math.log(16)
        },
        getMinMaxZoom: function () {
          var b = null != a.minChunkWidth ? a.minChunkWidth : ChunkApp.config.minChunkWidth
            , c = null != a.maxChunkWidth ? a.maxChunkWidth : ChunkApp.config.maxChunkWidth
            , d = y.toZoomFactor(b)
            , e = y.toZoomFactor(c);
          return [d, e]
        },
        setZoom: function (b, c, d) {
          var e = y.getMinMaxZoom();
          d = Math.max(Math.min(d, e[1]), e[0]);
          var f = y.toChunkWidth(d);
          options.distantView = f < ChunkApp.config.distantChunkWidth;
          var g = f / options.chunkWidth,
            t1;
          options.chunkWidth = f,
            t1 = Math.log10(1 / options.chunkWidth * options.intervalFactor),
            options.interval = Math.ceil(t1),
            (Math.frac(t1) >= 0 && Math.frac(t1) <= 0.3) ? options.interval = Math.pow(10, options.interval - 1) * 2 :
              (Math.frac(t1) > 0.3 && Math.frac(t1) <= 0.699) ? options.interval = Math.pow(10, options.interval - 1) * 5 :
                options.interval = Math.pow(10, options.interval),
            y.zoomFactor = d,
            b -= left,
            c -= top,
            x.moveX(b * g - b),
            x.moveY(c * g - c);
          var j = (d - e[0]) / (e[1] - e[0]);
          a.triggerHandler("zoomchange", [d, j])
        },
        shiftZoom: function (a, b, c) {
          var d = Math.pow(2, .1 * c);
          y.setZoom(a, b, y.zoomFactor + (1 - d))
        }
      }
      , z = {
        lastDrag: void 0,
        dragDistance: 0,
        drag: function (a, b) {
          var c = z.lastDrag;
          if ("undefined" != typeof c) {
            var d = c[0] - a
              , e = c[1] - b;
            return x.moveX(d),
              x.moveY(e),
              z.lastDrag = [a, b],
              z.dragDistance += Math.abs(d) + Math.abs(e),
              !0
          }
          return z.stop(),
            !1
        },
        start: function (a, b) {
          z.lastDrag = [a, b],
            z.dragDistance = 0,
            l.css("cursor", "move"),
            l.one("mouseup", z.stop),
            l.on("mousemove", C.dragging),
            l.on("mouseleave", z.stop)
        },
        stop: function (a) {
          l.css("cursor", "auto"),
            l.off("mousemove", C.dragging),
            l.off("mouseleave", z.stop),
            z.lastDrag = void 0,
            z.dragDistance < 4 && C.clicked(a)
        }
      }
      , A = {
        setSeed: function (a, b, c, d) {
          v.setSeed(b, c, d),
            w.redraw()
        },
        goTo: function (a, b, c) {
          x.setCenter(b, c),
            x.setPin(b, c),
            w.redraw()
        },
        setZoomPercent: function (a, b) {
          var c = y.getMinMaxZoom()
            , d = c[0] + b * (c[1] - c[0])
            , e = left + (right - left) / 2
            , j = top + (bottom - top) / 2;
          y.setZoom(e, j, d),
            w.redraw()
        },
        sendMap: function () {
          function b() {
            window.alert("Failed to download map. Please make sure you use an up-to-date web browser")
          }
          function c() {
            var a = $("<a></a>");
            a.attr("download", e + ".png"),
              a.attr("href", d),
              a.appendTo($("body")),
              a[0].click(),
              a.remove()
          }
          w.drawImage();
          var d = k.get(0).toDataURL("image/png")
            , e = options.seedString || options.seed || "empty";
          if (e = (a.shortName || "chunkbase") + "_" + e,
            "download" in document.createElement("a"))
            try {
              c()
            } catch (f) {
              b()
            }
          else
            b();
          w.clearAll(),
            w.redraw()
        },
        touchSet: function (a, b) {
          window.gtag && window._enableAnalytics && window.gtag("event", "CB_ChunkApp_SetTouchEnabled", {
            state: b ? "On" : "Off"
          }),
            C.touch.touchSet(b)
        },
        setPlatform: function (a, b) {
          window.gtag && window._enableAnalytics && m && b && m !== b && window.gtag("event", "CB_ChunkApp_ChangePlatform", {
            platform: Object.keys(ChunkApp.Platform).find(function (a) {
              return ChunkApp.Platform[a] === b
            }) || "N/A"
          }),
            m = b,
            w.redraw()
        },
        setSecondary: function (a, b) {
          n = !b,
            w.redraw()
        },
        setGridLines: function (a, b) {
          o = b,
            w.redraw()
        },
        setHidePoi: function (a, b) {
          hidePoi = b,
            w.redraw()
        },
        dimensionChanged: function (b, c, d) {
          var e = q;
          if (q = d,
            !e)
            return void a.triggerHandler("applydimensionchanged", [c]);
          var f = e / d;
          if (1 === f)
            return void a.triggerHandler("applydimensionchanged", [c]);
          if (options.pin && (0 !== options.pin[0] || 0 !== options.pin[1])) {
            var g = [options.pin[0] * f, options.pin[1] * f];
            options.pin = g,
              a.triggerHandler("pinset", [Math.floor(16 * options.pin[0]), Math.floor(16 * options.pin[1])])
          }
          x.scaleCenter(f),
            a.triggerHandler("applydimensionchanged", [c])
        },
        redrawMap: function () {
          w.redraw()
        }
      }
      , B = {
        on: function () {
          $(document).on("keydown", B.handleKey)
        },
        off: function () {
          $(document).off("keydown", B.handleKey)
        },
        handleKey: function (a) {
          var b = a.keyCode || a.which
            , c = !1;
          return 40 == b ? (B.down(),
            c = !0) : 38 == b ? (B.up(),
              c = !0) : 37 == b ? (B.left(),
                c = !0) : 39 == b && (B.right(),
                  c = !0),
            c ? (w.redraw(),
              !1) : void 0
        },
        up: function () {
          x.moveY(-20)
        },
        down: function () {
          x.moveY(20)
        },
        left: function () {
          x.moveX(-20)
        },
        right: function () {
          x.moveX(20)
        }
      }
      , C = {
        mouseScrolled: function (a, b, c, d) {
          if (0 !== d) {
            var e = a.pageX - this.offsetLeft
              , f = a.pageY - this.offsetTop;
            if (x.isInsideMap(e, f)) {
              a.preventDefault();
              var g = options.chunkWidth;
              y.shiftZoom(e, f, -d),
                options.chunkWidth !== g && w.redraw()
            }
          }
        },
        mouseMoved: function (b) {
          var c = b.pageX - this.offsetLeft
            , d = b.pageY - this.offsetTop
            , e = x.getCoordsFromScreen(c, d);
          if ("undefined" == typeof e)
            return void w.clearFooter();
          var f = e[0] / 16
            , g = e[1] / 16
            , h = null;
          a.getHoverText && (h = a.getHoverText({
            x: Math.floor(e[0]),
            z: Math.floor(e[1]),
            chunkX: f,
            chunkZ: g
          })),
            w.redrawFooter(e[0], e[1], 16 * Math.floor(f), 16 * Math.floor(g), h),
            a.isClickable && (k.get(0).style.cursor = a.isClickable(c, d) ? "pointer" : "default")
        },
        mouseLeft: function () {
          B.off(),
            w.clearFooter()
        },
        mouseEntered: function () {
          B.on()
        },
        dragging: function (a) {
          var b = a.pageX
            , c = a.pageY;
          z.drag(b, c) && w.redraw()
        },
        clicked: function (b) {
          if (a.onChunkClick) {
            var c = b.pageX - k.offset().left
              , d = b.pageY - k.offset().top
              , e = x.getCoordsFromScreen(c, d);
            if ("undefined" == typeof e)
              return;
            var f = Math.floor(e[0] / 16)
              , g = Math.floor(e[1] / 16);
            a.onChunkClick(f, g) && w.redraw()
          }
          if (a.onCanvasClick) {
            var c = b.pageX - k.offset().left
              , d = b.pageY - k.offset().top;
            a.onCanvasClick(c, d)
          }
        },
        dblClicked: function (a) {
          C.setPinAtScreen(a.pageX, a.pageY, this)
        },
        mouseDown: function (a) {
          var b = a.pageX - this.offsetLeft
            , c = a.pageY - this.offsetTop;
          x.isInsideMap(b, c) && (a.preventDefault(),
            z.start(a.pageX, a.pageY))
        },
        globalMouseUp: function () {
          z.stop()
        },
        touch: {
          lastScale: 1,
          lastDragX: 0,
          lastDragY: 0,
          lastDragXLeftOver: 0,
          lastDragYLeftOver: 0,
          enabled: !1,
          doubletap: function () {
            /*C.touch.enabled = !C.touch.enabled,
            a.trigger("touchchange", C.touch.enabled)*/
          },
          touchSet: function (a) {
            C.touch.enabled = a
          },
          drag: function (a) {
            if (C.touch.enabled && !(a.gesture.startEvent.touches.length > 1) && x.isInsideMap(a.gesture.startEvent.center.pageX - this.offsetLeft, a.gesture.startEvent.center.pageY - this.offsetTop)) {
              a.gesture.preventDefault();
              var b = C.touch.lastDragX
                , c = C.touch.lastDragY
                , d = a.gesture.deltaX
                , e = a.gesture.deltaY;
              C.touch.lastDragX = d,
                C.touch.lastDragY = e,
                d = d - b + C.touch.lastDragXLeftOver,
                e = e - c + C.touch.lastDragYLeftOver;
              var f = Math.floor(d + .5)
                , g = Math.floor(e + .5);
              C.touch.lastDragXLeftOver = d - f,
                C.touch.lastDragYLeftOver = e - g,
                0 !== d && 0 !== e && (x.moveX(-f),
                  x.moveY(-g),
                  w.redraw())
            }
          },
          dragEnd: function () {
            C.touch.lastDragX = 0,
              C.touch.lastDragY = 0,
              C.touch.lastDragXLeftOver = 0,
              C.touch.lastDragYLeftOver = 0
          },
          transformEnd: function () {
            C.touch.enabled && (C.touch.lastScale = 1)
          },
          hold: function (a) {
            C.touch.enabled && C.setPinAtScreen(a.gesture.center.pageX, a.gesture.center.pageY, this) && a.gesture.preventDefault()
          },
          pinch: function (a) {
            if (C.touch.enabled) {
              var b = a.gesture.center.pageX - this.offsetLeft
                , c = a.gesture.center.pageY - this.offsetTop;
              if (x.isInsideMap(b, c)) {
                var d = options.chunkWidth
                  , e = a.gesture.scale;
                y.setZoom(b, c, y.zoomFactor + (e - C.touch.lastScale) / 1.5),
                  C.touch.lastScale = e,
                  options.chunkWidth !== d && w.redraw()
              }
            }
          }
        },
        setPinAtScreen: function (a, b, c) {
          return a -= c.offsetLeft,
            b -= c.offsetTop,
            x.isInsideMap(a, b) ? (x.setPinAtCanvas(a, b),
              w.redraw(),
              !0) : !1
        }
      };
    if (k.on("mousewheel", C.mouseScrolled),
      k.mousemove(C.mouseMoved),
      k.dblclick(C.dblClicked),
      k.mousedown(C.mouseDown),
      k.on("mouseleave", C.mouseLeft),
      k.on("mouseenter", C.mouseEntered),
      a.on("seedapply", A.setSeed),
      a.on("goto", A.goTo),
      a.on("zoomsetpercent", A.setZoomPercent),
      a.on("saverequest", A.sendMap),
      a.on("platformchange", A.setPlatform),
      a.on("secondarychange", A.setSecondary),
      a.on("gridlineschange", A.setGridLines),
      a.on("hidepoichange", A.setHidePoi),
      a.on("redrawmap", A.redrawMap),
      a.on("dimensionchanged", A.dimensionChanged),
      "undefined" != typeof Hammer) {
      {
        Hammer(k.get(0)).on("hold", C.touch.hold).on("pinch", C.touch.pinch).on("transformend", C.touch.transformEnd).on("drag", C.touch.drag).on("dragend", C.touch.dragEnd).on("doubletap", C.touch.doubletap)
      }
      k.on("doubleclick", C.touch.doubletap),
        a.on("touchset", A.touchSet);
      var D = !1;
      k.on("touchstart", function (a) {
        C.touch.enabled && (D = x.isInsideMap(a.originalEvent.touches[0].pageX - this.offsetLeft, a.originalEvent.touches[0].pageY - this.offsetTop))
      }),
        k.on("touchmove", function (a) {
          C.touch.enabled && D && a.preventDefault()
        })
    }
    y.setZoom(0, 0, null != a.initialChunkWidth ? y.toZoomFactor(a.initialChunkWidth) : y.zoomFactor),
      x.setCenter(CB3Libs.Long.ZERO, CB3Libs.Long.ZERO);
    var E, F, G, H;
    $(window).resize(function () {
      c(!1)
    }),
      c(!0),
      a.triggerHandler("canvasinit", [k.get(0)]),
      a.on("uiloaded", function () {
        c()
      })
  }
  ,
  $.fn.topNavigate = function (a) {
    var b = this
      , c = {
        navWorld: this.find("#nav-world"),
        navOpr: this.find("#nav-operations"),
        navTools: this.find("#nav-tools"),
        navAbouts: this.find("#nav-about"),
        worldMenu: $("body").find("#world-controls"),
        oprMenu: $("body").find("#map-controls"),
        aboutsMenu: $("body").find("#abouts")
      },
      d = {
        showWorldMenu: function () {
          c.worldMenu.hasClass("hidden") ? (
            c.worldMenu.removeClass("hidden"), c.navWorld.addClass("active")) : (
            c.worldMenu.addClass("hidden"), c.navWorld.removeClass("active")),
            d.hideOprMenu(),
            d.hideAboutMenu()
        },
        hideWorldMenu: function () {
          c.worldMenu.addClass("hidden"),
            c.navWorld.removeClass("active")
        },
        showOprMenu: function () {
          c.oprMenu.hasClass("hidden") ? (
            c.oprMenu.removeClass("hidden"), c.navOpr.addClass("active")) : (
            c.oprMenu.addClass("hidden"), c.navOpr.removeClass("active")),
            d.hideWorldMenu(),
            d.hideAboutMenu()
        },
        hideOprMenu: function () {
          c.oprMenu.addClass("hidden"),
            c.navOpr.removeClass("active")
        },
        showAboutMenu: function () {
          c.aboutsMenu.hasClass("hidden") ? (
            c.aboutsMenu.removeClass("hidden"), c.navAbouts.addClass("active")) : (
            c.aboutsMenu.addClass("hidden"), c.navAbouts.removeClass("active")),
            d.hideOprMenu(),
            d.hideWorldMenu()
        },
        hideAboutMenu: function () {
          c.aboutsMenu.addClass("hidden"),
            c.navAbouts.removeClass("active")
        }
      };
    c.navWorld.on("click", d.showWorldMenu),
      c.navOpr.on("click", d.showOprMenu),
      c.navAbouts.on("click", d.showAboutMenu),
      c.navTools.click(d.showToolsMenu)
  }
  ,
  String.prototype.hashCode = function () {
    var a = 0;
    if (0 == this.length)
      return a;
    for (var b = 0; b < this.length; b++) {
      var c = this.charCodeAt(b);
      a = (a << 5) - a + c,
        a &= a
    }
    return a
  }
  ,
  /*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
  * Licensed under the MIT License (LICENSE.txt).
  *
  * Thanks to: Andrew Cobby (@andrewcobby http://github.com/cobbweb)
  * - Refactored for jQuery 1.7+ only
  * - Use MozMousePixelScroll for new Gecko browsers
  * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
  * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
  * Thanks to: Seamus Leahy for adding deltaX and deltaY
  *
  * Version: 2.0.0
  *
  * Requires jQuery: 1.7+
  */
  function (a, b) {
    function c(e) {
      var f = e || window.event
        , g = [].slice.call(arguments, 1)
        , h = 0
        , i = 0
        , j = 0;
      return e = a.event.fix(f),
        e.type = "mousewheel",
        f.wheelDelta && (h = f.wheelDelta / 120),
        f.detail && (f.type == d[2] ? (this.removeEventListener(d[0], c, !1),
          h = -f.detail / 42) : h = -f.detail / 3),
        j = h,
        f.axis !== b && f.axis === f.HORIZONTAL_AXIS && (j = 0,
          i = -1 * h),
        f.wheelDeltaY !== b && (j = f.wheelDeltaY / 120),
        f.wheelDeltaX !== b && (i = -1 * f.wheelDeltaX / 120),
        g.unshift(e, h, i, j),
        (a.event.dispatch || a.event.handle).apply(this, g)
    }
    var d = ["DOMMouseScroll", "mousewheel", "MozMousePixelScroll"];
    if (a.event.fixHooks)
      for (var e = d.length; e;)
        a.event.fixHooks[d[--e]] = a.event.mouseHooks;
    a.event.special.mousewheel = {
      setup: function () {
        if (this.addEventListener)
          for (var a = d.length; a;)
            this.addEventListener(d[--a], c, !1);
        else
          this.onmousewheel = c
      },
      teardown: function () {
        if (this.removeEventListener)
          for (var a = d.length; a;)
            this.removeEventListener(d[--a], c, !1);
        else
          this.onmousewheel = null
      }
    }
  }(jQuery);

var SeedMapTiles = function (a, b) {
  function c(a) {
    var b = -1 !== a.indexOf("biomes")
      , c = a.filter(function (a) {
        return ("biomes" !== a) && ("checkAll" !== a) && ("unCheckAll" !== a)
      });
    return {
      showBiomes: b,
      pois: c
    }
  }
  var d = "CHUNK_ASYNC_TILE_LOAD_ERROR"
    , e = 0
    , f = 5
    , g = b.loadTile
    , h = b.nrParallel
    , i = function () {
      function i(c, d) {
        r.clear(),
          b.onParamsChanged(c, d),
          a.getHoverText && a.getHoverText.clear(),
          y = [],
          s = [],
          t = {},
          u = {}
      }
      function j(a, b) {
        var c = v.tileSize
          , d = v.tileScale;
        return {
          x: Math.floor(a / c) * c,
          z: Math.floor(b / c) * c,
          xL: c,
          zL: c,
          scale: d
        }
      }
      function k(a, b, c, d) {
        for (var e = v.tileSize, f = v.tileScale, g = Math.floor(a / e), h = Math.floor(b / e), i = Math.floor((a + c + 1) / e), j = Math.floor((b + d + 1) / e), k = [], l = h; j >= l; l++)
          for (var m = g; i >= m; m++)
            k.push({
              x: m * e,
              z: l * e,
              xL: e,
              zL: e,
              scale: f
            });
        return k
      }
      function l() {
        for (; h > z && y.length > 0;) {
          var a = y.shift();
          m(a)
        }
      }
      function m(a) {
        return a.beforeLoad() ? (z += 1,
          void g(a.params, a.tile, function (b) {
            z -= 1,
              setTimeout(l, 0),
              a.cb(b)
          })) : void l()
      }
      function n(a, b, c) {
        y.push({
          params: v,
          tile: a,
          beforeLoad: b,
          cb: c
        }),
          1 > z && l()
      }
      function o(a, c, d, g) {
        var h = p(a);
        return r.has(h) ? void g(null, r.get(h)) : t[h] ? (t[h] = g,
          void (u[h] = d)) : (t[h] = g,
            u[h] = d,
            void n(a, function () {
              return u[h] ? u[h]() ? (delete u[h],
                delete t[h],
                !1) : !0 : !1
            }, function (d) {
              if (!c()) {
                var g = null;
                t[h] && (g = t[h],
                  delete t[h],
                  delete u[h]);
                var i = d && {
                  tile: a,
                  hits: d.error ? d : b.processTile(d, a)
                };
                if (r.set(h, i),
                  i.hits.error && (s.push(h),
                    window.gtag && f > e)) {
                  e += 1;
                  var j = 1 === e && i.hits.errorStack && Math.random() < .01
                    , k = i.hits.errorStr + " (" + e + ") (" + (navigator.hardwareConcurrency || 0) + ")";
                  j && (k += " (" + i.hits.errorStack + ")"),
                    window.gtag("event", "CB_ChunkApp_ChunkLoadError", {
                      errorMsg: k
                    })
                }
                g && g(i)
              }
            }))
      }
      function p(a) {
        return a.x + "-" + a.z
      }
      function q(a, b, c, d, e) {
        var f = k(a, b, c, d, e)
          , g = []
          , h = [];
        return f.forEach(function (a) {
          var b = p(a);
          r.has(b) ? h.push(r.get(b)) : g.push(a)
        }),
          [h, g]
      }
      var r = new QuickLRU({
        maxSize: 2048
      })
        , s = []
        , t = {}
        , u = {}
        , v = Object.assign({
          seed: "0",
          platform: b.defaultPlatform,
          tileSize: 8,
          tileScale: 1,
          biomeFilter: null,
          dimension: a.initialDimension,
          pois: [],
          showBiomes: !1,
          biomeHeight: a.initialBiomeHeight,
          showHeights: !1,
          hidePoi: !0
        }, c(a.initialPois))
        , w = null;
      if (b.getHoverText) {
        var x = function (a) {
          return v.tileScale >= 1 ? a : Math.floor(a / v.tileScale) * v.tileScale
        };
        a.getHoverText = memoizeQuickLRU(function (a) {
          var c = x(a.chunkX)
            , d = x(a.chunkZ)
            , e = p(j(c, d))
            , f = r.get(e);
          return f ? b.getHoverText(c, d, f, v) : void 0
        }, {
          maxSize: 100,
          hash: function (a) {
            return x(a.chunkX) + " " + x(a.chunkZ)
          }
        })
      }
      a.onCanvasClick = function (a, c) {
        b.onCanvasClick && b.onCanvasClick(a, c, v)
      }
        ,
        a.isClickable = b.isClickable;
      var y = []
        , z = 0;
      l();
      var A = $('<span>Failed to load region. <button style="text-decoration: underline" class="retry-now unstyled-button">Try again</button></span>');
      return A.find(".retry-now").click(function () {
        s.forEach(function (a) {
          r.delete(a)
        }),
          s = [],
          a.getHoverText && a.getHoverText.clear(),
          a.triggerHandler("hideerror", [d]),
          a.triggerHandler("redrawmap", [])
      }),
      {
        getParams: function () {
          return v
        },
        setParams: function (a) {
          var b = Object.keys(a).filter(function (b) {
            return v[b] !== a[b]
          });
          b.length < 1 || (v = Object.assign({}, v, a),
            i(v, b))
        },
        getRenderer: function (c, e, f, g, h, i) {
          var j = !1
            , k = !1;
          w && w.onCancel();
          var l = v
            , m = function () {
              return l !== v
            }
            , n = {
              hasNext: function () {
                return !j
              },
              renderNextAsync: function (l, n, p, r, s, t, u) {
                var w = function (c, e) {
                  var f = i(c.tile.x, c.tile.z);
                  if (c.hits.error) {
                    if (!n(f[0], f[1], c.tile.xL * h, c.tile.zL * h, !0, !0))
                      return;
                    a.triggerHandler("showerror", [d, A, !1, "error", !0])
                  } else {
                    if (!n(f[0], f[1], c.tile.xL * h, c.tile.zL * h, !0, !1))
                      return;
                    b.paintTile(l, e, c.tile, c.hits, r, h, i, u, v)
                  }
                }
                  , x = function (a) {
                    b.beforeMapRepaint(),
                      a.forEach(function (a) {
                        w(a, "biomes")
                      }),
                      a.forEach(function (a) {
                        w(a, "slimeChunks")
                      }),
                      a.forEach(function (a) {
                        w(a, "pois")
                      }),
                      s(),
                      b.onMapRepainted(v)
                  };
                if (j)
                  throw new Error;
                j = !0;
                var y = q(c, e, f, g)
                  , z = y[0]
                  , B = y[1];
                x(z);
                var C = 0;
                B.length < 1 && p(),
                  B.forEach(function (a) {
                    C += 1,
                      o(a, m, function () {
                        return m() || k
                      }, function (a) {
                        if (C -= 1,
                          a && !k) {
                          t();
                          var b = q(c, e, f, g)[0];
                          x(b)
                        }
                        1 > C && p()
                      })
                  })
              },
              onCancel: function () {
                k = !0
              }
            };
          return w = n,
            n
        }
      }
    }();
  return a.getRenderer = i.getRenderer,
    a.on("seedchange", function (b, c, d, e) {
      i.setParams({
        seed: c.toString()
      }),
        a.trigger("seedapply", [c, d, e])
    }),
    a.on("platformchange", function (a, b) {
      i.setParams({
        platform: b
      })
    }),
    a.on("biomefilterchanged", function (b, c) {
      i.setParams({
        biomeFilter: c
      }),
        a.triggerHandler("redrawmap")
    }),
    a.on("applydimensionchanged", function (b, c) {
      i.setParams({
        dimension: c
      }),
        a.triggerHandler("redrawmap")
    }),
    a.on("poischanged", function (b, d) {
      var e = c(d.pois);
      i.setParams(e),
        a.triggerHandler("redrawmap")
    }),
    a.on("biomeheightchanged", function (b, c) {
      i.setParams({
        biomeHeight: c
      }),
        a.triggerHandler("redrawmap")
    }),
    a.on("showheightschanged", function (b, c) {
      i.setParams({
        showHeights: c
      }),
        a.triggerHandler("redrawmap")
    }),
    a.on("hidepoichanged", function (b, c) {
      i.setParams({
        hidePoi: c.checkbox
      }),
        c.select ? a.triggerHandler("redrawmap") : 0
    }),
    a.on("mapDrawingStarted", function (a, b) {
      var c = SeedMapTiles.calcTileParams(b.chunkWidth)
        , d = c.size
        , e = c.scale;
      i.setParams({
        tileSize: d,
        tileScale: e
      })
    }),
    a.on("mapdimensionschanged", function (a, c) {
      b.onMapDimensionsChanged(c[0], c[1])
    }),
    a.on("canvasinit", function (a, c) {
      b.init(c, i.getParams())
    }),
    a
};
SeedMapTiles.calcTileParams = function (a) {
  return .25 > a ? {
    size: 512,
    scale: 8
  } : .5 > a ? {
    size: 256,
    scale: 4
  } : 1 > a ? {
    size: 128,
    scale: 2
  } : 2 > a ? {
    size: 64,
    scale: 1
  } : 4 > a ? {
    size: 32,
    scale: .5
  } : 8 > a ? {
    size: 16,
    scale: .25
  } : {
    size: 8,
    scale: .25
  }
}
  ,
  $.fn.dimensionSelection = function (a) {
    var b = $(this);
    if (!(b.length < 1)) {
      var c = {
        select: b.find("select"),
        overworldOption: b.find('option[value="overworld"]'),
        netherOption: b.find('option[value="nether"]'),
        endOption: b.find('option[value="end"]')
      }
        , d = {
          overworld: 1,
          nether: 8,
          end: 1
        }
        , e = {
          getDimension: function () {
            return c.select.val()
          }
        }
        , f = {
          onChange: function () {
            var b = e.getDimension();
            b && (window.__analytics_dimension = b,
              a.triggerHandler("dimensionchanged", [b, d[b] ? d[b] : 1]))
          },
          onPlatformChange: function (b) {
            var d = a.getSupportedDimensions ? a.getSupportedDimensions(b) : {}
              , e = !!d.nether
              , g = !!d.end
              , h = $.contains(document, c.netherOption[0])
              , i = $.contains(document, c.endOption[0]);
            h && !e ? c.netherOption.detach() : !h && e && (c.netherOption.insertAfter(c.overworldOption),
              h = !0),
              i && !g ? c.endOption.detach() : !i && g && c.endOption.insertAfter(h ? c.netherOption : c.overworldOption),
              f.onChange()
          }
        };
      c.select.change(f.onChange),
        a.initialDimension && c.select.val(a.initialDimension),
        a.on("platformchange", function (a, b) {
          f.onPlatformChange(b)
        }),
        f.onChange()
    }
  }
  ,
  $.fn.biomeSelection = function (a) {
    var b = $(this);
    if (!(b.length < 1)) {
      var c = CB3Libs.Dimension.Overworld
        , d = {
          checkbox: b.find("#biome-selection-checkbox"),
          select: b.find("#biome-selection-select"),
          selectWrap: b.find("#biome-selection-select-wrap")
        }
        , e = {
          isFilterActive: function () {
            return d.checkbox.is(":checked")
          }
        }
        , f = {
          getBiomeValue: function () {
            if (!e.isFilterActive())
              return !1;
            var a = d.select.select2("val");
            return a.length < 1 ? !1 : a.map(function (a) {
              return +a
            })
          },
          triggerBiomeFilterEvent: function () {
            var b = f.getBiomeValue();
            window.__analytics_biomeFilter = b,
              a.triggerHandler("biomefilterchanged", [b])
          }
        }
        , g = {
          onFilterChanged: function () {
            var a = e.isFilterActive();
            d.select.select2("enable", a),
              f.triggerBiomeFilterEvent()
          },
          onBiomesChanged: function () {
            var a = d.select.select2("container").find(".select2-input")[0];
            a.value = "",
              a.dispatchEvent(new Event("change")),
              f.triggerBiomeFilterEvent(),
              d.selectWrap.find(".select2-search-choice > div").removeAttr("title")
          },
          dimensionChanged: function (a) {
            a !== c && (c = a,
              d.select.select2("val", []),
              d.select.select2("updateResults"))
          }
        };
      d.select.select2({
        data: function () {
          return {
            results: CB3Libs.biomeList.filter(function (a) {
              return a.dimension === c
            }).reduce(function (a, b) {
              return a.push(b),
                (b.oldNames || []).forEach(function (c) {
                  a.push(Object.assign({}, b, {
                    name: c
                  }))
                }),
                a
            }, []).map(function (a) {
              return {
                id: a.id,
                text: a.name,
                rgb: a.rgb
              }
            })
          }
        },
        multiple: !0,
        placeholder: "Select Biomes",
        formatResult: function (a) {
          return '<div class="biome-square" style="background-color:rgb(' + a.rgb.join(",") + ');"></div>' + a.text
        },
        formatSelection: function (a) {
          return '<div class="biome-square" style="background-color:rgb(' + a.rgb.join(",") + ');"></div>' + a.text
        },
        escapeMarkup: function (a) {
          return a
        },
        matcher: function (a, b, c) {
          return ("" + b + " " + c.id).toUpperCase().indexOf(("" + a).toUpperCase()) >= 0
        },
        width: "resolve"
      }),
        d.checkbox.change(g.onFilterChanged),
        d.select.change(g.onBiomesChanged),
        a.on("applydimensionchanged", function (a, b) {
          g.dimensionChanged(b)
        }),
        g.onFilterChanged()
    }
  }
  ,
  $.fn.seedMapLayers = function (a) {
    var b = $(this);
    if (!(b.length < 1)) {
      var c = {
        container: b,
        selectAll: b.find("#seedmap-checkall"),
        unselectAll: b.find("#seedmap-uncheckall"),
        poiGrid: b.find("#seedmap-layers"),
        pois: b.find("#seedmap-layers button"),
        toggle: b.find("#seedmap-layers-toggle-hor"),
        zoomWarning: b.find(".seedmap-layers-warning"),
        scrollbarWrapper: b.find("[data-simplebar]")
      }
        , d = a.initialDimension
        , e = []
        , f = a.initialHiddenPois || []
        , g = {
          applyPois: function (a) {
            c.pois.each(function (b, c) {
              var d = c.dataset.poi
                , e = -1 !== a.indexOf(d);
              e ? c.setAttribute("aria-checked", "true") : c.removeAttribute("aria-checked", "false")
            })
          },
          applyFilters: function () {
            c.pois.each(function (a, b) {
              var c = b.dataset.poi
                , f = "checkAll" === c || "unCheckAll" === c || "biomes" === c || CB3PoiConfig[c].dimension === d && -1 !== e.indexOf(c);
              f ? b.classList.remove("hidden") : b.classList.add("hidden")
            });
            try {
              var a = window.SimpleBar && window.SimpleBar.instances.get(c.scrollbarWrapper.get(0));
              a && a.recalculate()
            } catch (b) { }
          },
          applyHiddenPois: function () {
            c.pois.each(function (a, b) {
              var c = b.dataset.poi;
              -1 !== f.indexOf(c) ? b.classList.add("zoom-hidden") : b.classList.remove("zoom-hidden")
            })
          },
          refreshZoomWarning: function () {
            var a = !1;
            c.pois.each(function (b, c) {
              a || !c.classList.contains("zoom-hidden") || "true" !== c.getAttribute("aria-checked") || c.classList.contains("hidden") || (a = !0)
            }),
              a ? c.zoomWarning.removeClass("hidden") : c.zoomWarning.addClass("hidden")
          },
          getPois: function () {
            var a = [];
            return c.pois.each(function (b, c) {
              var d = c.dataset.poi
                , e = "true" === c.getAttribute("aria-checked");
              e && a.push(d)
            }),
            {
              pois: a
            }
          }
        }
        , h = {
          notifyPoiChange: function () {
            var b = g.getPois();
            a.triggerHandler("poischanged", [b])
          },
          setAllSelected: function (a) {
            c.pois.attr("aria-checked", a ? "true" : "false")
          }
        }
        , i = {
          poiClicked: function () {
            "true" === this.getAttribute("aria-checked") ? this.setAttribute("aria-checked", "false") : this.setAttribute("aria-checked", "true"),
              g.refreshZoomWarning(),
              h.notifyPoiChange()
          },
          selectAll: function () {
            h.setAllSelected(!0),
              g.refreshZoomWarning(),
              h.notifyPoiChange()
          },
          unselectAll: function () {
            h.setAllSelected(!1),
              g.refreshZoomWarning(),
              h.notifyPoiChange()
          },
          dimensionChanged: function (a) {
            d !== a && (d = a,
              g.applyFilters(a),
              g.refreshZoomWarning())
          },
          supportedPoisChanged: function (a) {
            e = a,
              g.applyFilters(),
              g.refreshZoomWarning()
          },
          toggleClicked: function () {
            c.container.hasClass("seedmap-layers-expanded") ? (c.container.removeClass("seedmap-layers-expanded"),
              c.toggle.text("▲")) : (c.container.addClass("seedmap-layers-expanded"),
                c.toggle.text("▼"))
          },
          hiddenPoisChanged: function (a) {
            f = a,
              g.applyHiddenPois(),
              g.refreshZoomWarning()
          }
        };
      c.toggle.click(i.toggleClicked),
        c.pois.click(i.poiClicked),
        c.selectAll.click(i.selectAll),
        c.unselectAll.click(i.unselectAll),
        a.on("applydimensionchanged", function (a, b) {
          i.dimensionChanged(b)
        }),
        a.on("supportedpoischanged", function (a, b) {
          i.supportedPoisChanged(b)
        }),
        a.on("hiddenpoischanged", function (a, b) {
          i.hiddenPoisChanged(b)
        }),
        g.applyPois(a.initialPois),
        g.applyFilters(),
        g.applyHiddenPois(),
        g.refreshZoomWarning(),
        h.notifyPoiChange()
    }
  }
  ,
  $.fn.biomHeightSelect = function (a) {
    var b = $(this);
    if (!(b.length < 1)) {
      var c = a.initialDimension
        , d = null
        , e = a.initialPois
        , f = null
        , g = {
          maybeUpdateEnabledState: function () {
            var a = c === CB3Libs.Dimension.Overworld
              , g = d && CB3Libs.supportsCaveBiomes(d.cb3World)
              , h = -1 !== e.indexOf("biomes")
              , i = a && g && h;
            i !== f && (f = i,
              b.attr("disabled", !i))
          }
        }
        , h = {
          triggerUpdate: function () {
            var c = b.val();
            a.triggerHandler("biomeheightchanged", [c])
          }
        };
      a.on("applydimensionchanged", function (a, b) {
        c = b,
          g.maybeUpdateEnabledState()
      }),
        a.on("platformchange", function (a, b) {
          d = b,
            g.maybeUpdateEnabledState()
        }),
        a.on("poischanged", function (a, b) {
          e = b.pois,
            g.maybeUpdateEnabledState()
        }),
        b.change(h.triggerUpdate),
        g.maybeUpdateEnabledState(),
        h.triggerUpdate()
    }
  }
  ,
  $.fn.heightsToggle = function (a) {
    var b = $(this);
    if (!(b.length < 1)) {
      var c = {
        container: b,
        checkbox: b.find("#show-heights-checkbox")
      }
        , d = a.initialDimension
        , e = null
        , f = a.initialPois
        , g = a.initialBiomeHeight
        , h = {
          updateEnabledState: function () {
            var a = i.isSupported(d, e, f);
            c.checkbox.attr("disabled", !a),
              a ? c.container.removeClass("disabled") : c.container.addClass("disabled")
          }
        }
        , i = {
          isSupported: function (a, b, c) {
            var d = a === CB3Libs.Dimension.Overworld
              , e = -1 !== c.indexOf("biomes") && "worldSurface" === g
              , f = b && (b.cb3World.javaVersion >= CB3Libs.JavaVersion.V1_18 || b.cb3World.bedrockVersion >= CB3Libs.BedrockVersion.V1_18);
            return d && e && f
          },
          triggerUpdate: function () {
            var b = !!c.checkbox.is(":checked");
            a.triggerHandler("showheightschanged", [b])
          }
        };
      a.on("applydimensionchanged", function (a, b) {
        d = b,
          h.updateEnabledState()
      }),
        a.on("platformchange", function (a, b) {
          e = b,
            h.updateEnabledState()
        }),
        a.on("poischanged", function (a, b) {
          f = b.pois,
            h.updateEnabledState()
        }),
        a.on("biomeheightchanged", function (a, b) {
          g = b,
            h.updateEnabledState()
        }),
        c.checkbox.change(i.triggerUpdate),
        h.updateEnabledState(),
        i.triggerUpdate()
    }
  }
  ,
  $.fn.hidePoiToggle = function (a) {
    var b = $(this);
    if (!(b.length < 1)) {
      var c = {
        container: b,
        checkbox: b.find("#hide-poi"),
        select: $("body").find("#biome-selection-checkbox")
      };
      c.checkbox.change(function () {
        a.triggerHandler("hidepoichanged", { checkbox: c.checkbox.is(":checked"), select: c.select.is(":checked") })
      })
    }
  };

var CB3PoiConfig = function () {
  function a(a) {
    a = Math.round(10 * a) / 10;
    var b = a + "";
    return b.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
  }
  function b(a) {
    return a[2].map(function (b) {
      return [a[0], a[1], b]
    })
  }
  function c(a) {
    return a[2] ? b(a) : [[a[0], a[1]]]
  }
  function d(a, b) {
    return b.edition === CB3Libs.Edition.Java && b.javaVersion >= CB3Libs.JavaVersion.V1_18 ? [16 * a[0], null, 16 * a[1]] : [16 * a[0] + 8, null, 16 * a[1] + 8]
  }
  function e(a) {
    return a && null != a[0] && null != a[2]
  }
  var f = {
    chunkClassifier: SeedMapTiles.calcTileParams(8).size,
    veryBig: SeedMapTiles.calcTileParams(4).size,
    big: SeedMapTiles.calcTileParams(2).size,
    normal: SeedMapTiles.calcTileParams(.5).size,
    small: SeedMapTiles.calcTileParams(.25).size
  }
    , g = {};
  return g[CB3Libs.POI.AmethystGeode] = {
    gaId: "Ag",
    imgSrc: "amethyst.png",
    dimension: CB3Libs.Dimension.Overworld,
    maxTileSize: f.chunkClassifier,
    splitPois: b,
    getHoverText: function (b) {
      var c = b[2];
      return "Likely Geode @ " + c.map(function (b) {
        return a(b[0]) + " / " + a(b[1]) + " / " + a(b[2])
      }).join(", ")
    },
    getTooltipText: function () {
      return "可能的紫晶洞"
    },
    getCoords: function (a) {
      return a[2]
    },
    fillColor: "98,69,149"
  },
    g[CB3Libs.POI.AncientCity] = {
      gaId: "Ac",
      imgSrc: "ancient-city.png",
      dimension: CB3Libs.Dimension.Overworld,
      maxTileSize: f.normal,
      getTooltipText: function () {
        return "远古城市"
      },
      getCoords: function (a) {
        return [16 * a[0] + 8, -51, 16 * a[1] + 8]
      },
      getHoverText: function (b) {
        var c = g[CB3Libs.POI.AncientCity].getCoords(b);
        return "Ancient City @ " + a(c[0]) + " / " + c[1] + " / " + a(c[2])
      },
      fillColor: "11,47,44"
    },
    g[CB3Libs.POI.BastionRemnant] = {
      gaId: "Br",
      imgSrc: {
        bridge: "bastion-bridge.png",
        stables: "bastion-stables.png",
        units: "bastion-units.png",
        treasure: "bastion-treasure.png"
      },
      dimension: CB3Libs.Dimension.Nether,
      maxTileSize: f.big,
      _getType: function (a) {
        return null == a[2].type ? null : "units" === a[2].type ? "居住区" : "hoglin_stable" === a[2].type ? "疣猪兽棚" : "treasure" === a[2].type ? "藏宝室" : "bridge" === a[2].type ? "桥" : null
      },
      getCoords: function (a) {
        return [16 * a[0], null, 16 * a[1]]
      },
      getHoverText: function (a) {
        var b = g[CB3Libs.POI.BastionRemnant]._getType(a);
        return null == b ? null : "Type: " + b
      },
      getTooltipText: function (a) {
        var b = g[CB3Libs.POI.BastionRemnant]._getType(a);
        return "堡垒遗迹 (" + b + ")"
      },
      getImg: function (a) {
        return "hoglin_stable" === a.type ? "stables" : "treasure" === a.type ? "treasure" : "bridge" === a.type ? "bridge" : "units"
      },
      fillColor: function (a) {
        return null == a.type ? "107,107,107" : "units" === a.type ? "107,107,107" : "hoglin_stable" === a.type ? "245,0,122" : "treasure" === a.type ? "139,69,19" : "bridge" === a.type ? "8,145,17" : "0,0,0"
      }
    },
    g[CB3Libs.POI.BuriedTreasure] = {
      gaId: "Bt",
      imgSrc: "buried-treasure.png",
      dimension: CB3Libs.Dimension.Overworld,
      maxTileSize: f.big,
      getHoverText: function (b, c) {
        var d = g[CB3Libs.POI.BuriedTreasure].getCoords(b, c);
        return "Treasure @ " + a(d[0]) + " / " + a(d[2])
      },
      getTooltipText: function () {
        return "埋藏的宝藏"
      },
      getCoords: function (a, b) {
        var c = b.edition === CB3Libs.Edition.Java ? 9 : 8;
        return [16 * a[0] + c, null, 16 * a[1] + c]
      },
      fillColor: "166,117,78"
    },
    g[CB3Libs.POI.Cave] = {
      gaId: "Ca",
      imgSrc: "cave.png",
      dimension: CB3Libs.Dimension.Overworld,
      maxTileSize: f.veryBig,
      splitPois: b,
      _getSize: function (a) {
        return a.count < 600 ? "小" : a.count < 1800 ? "中" : "大"
      },
      getCoords: function (a) {
        return a[2].reference.pos
      },
      getTooltipText: function (a) {
        a[2].count;
        return "芝士洞穴 (" + g[CB3Libs.POI.Cave]._getSize(a[2]) + ")"
      },
      fillColor: function () {
        return "68,68,68"
      }
    },
    g[CB3Libs.POI.DesertTemple] = {
      gaId: "Dt",
      imgSrc: "desert-temple.png",
      dimension: CB3Libs.Dimension.Overworld,
      maxTileSize: f.normal,
      getTooltipText: function (a, b) {
        return b.edition === CB3Libs.Edition.Java && b.javaVersion >= CB3Libs.JavaVersion.V1_18 ? "可能的沙漠神殿" : "沙漠神殿"
      },
      fillColor: "143,121,0"
    },
    g[CB3Libs.POI.DesertWell] = {
      gaId: "Dw",
      imgSrc: "desert-well.png",
      dimension: CB3Libs.Dimension.Overworld,
      maxTileSize: f.big,
      getTooltipText: function () {
        return "可能的沙漠水井"
      },
      getCoords: function (a) {
        return a[2].slice(0, 3)
      },
      fillColor: "40,57,161"
    },
    g[CB3Libs.POI.Dungeon] = {
      gaId: "D",
      imgSrc: {
        "default": "dungeon.png",
        zombie: "dungeon-zombie.png",
        spider: "dungeon-spider.png",
        skeleton: "dungeon-skeleton.png"
      },
      dimension: CB3Libs.Dimension.Overworld,
      maxTileSize: f.chunkClassifier,
      getImg: function (a) {
        var b = a[3];
        return b === CB3Libs.DungeonType.ZOMBIE ? "zombie" : b === CB3Libs.DungeonType.SKELETON ? "skeleton" : "spider"
      },
      fillColor: function (a) {
        return a.length > 1 ? "200,100,0" : a[0][3] === CB3Libs.DungeonType.ZOMBIE ? "70,109,29" : a[0][3] === CB3Libs.DungeonType.SKELETON ? "125,125,125" : a[0][3] === CB3Libs.DungeonType.SPIDER ? "168,46,0" : "0,0,0"
      },
      splitPois: b,
      getCoords: function (a) {
        return a[2].slice(0, 3)
      },
      _getTypeText: function (a) {
        var b = a === CB3Libs.DungeonType.ZOMBIE ? "僵尸" : a === CB3Libs.DungeonType.SKELETON ? "骷髅" : a === CB3Libs.DungeonType.SPIDER ? "蜘蛛" : null;
        return b
      },
      getTooltipText: function (a, b) {
        var c = g[CB3Libs.POI.Dungeon]._getTypeText(a[2][3]) || "未知生物"
          , d = b.edition === CB3Libs.Edition.Bedrock && b.bedrockVersion >= CB3Libs.BedrockVersion.V1_18 ? "可能的" : "预计的";
        return d + "地牢(" + c + ")"
      },
      getHoverText: function (b) {
        return b[2].map(function (b) {
          var c = g[CB3Libs.POI.Dungeon]._getTypeText(b[3]) || "Dungeon";
          return c + " @ " + [a(b[0] + ""), b[1], a(b[2] + "")].join(" / ")
        }, "").join(", ")
      }
    },
    g[CB3Libs.POI.Fossil] = {
      gaId: "F",
      imgSrc: "fossil.png",
      dimension: CB3Libs.Dimension.Overworld,
      maxTileSize: f.chunkClassifier,
      fillColor: "90,90,90",
      splitPois: c,
      getCoords: function (a) {
        return e(a[2]) ? a[2].slice(0, 3) : [16 * a[0] + 8, null, 16 * a[1] + 8]
      },
      getTooltipText: function (a) {
        var b = a[2] && "diamond" === a[2][3] ? "钻石化石" : "化石";
        return e(a[2]) || (b += " (预计位置)"),
          b
      },
      getHoverText: function (b) {
        return e(b[2]) ? b[2].map(function (b) {
          return "Fossil @ " + [a(b[0] + ""), b[1], a(b[2] + "")].join(" / ")
        }, "").join(", ") : null
      }
    },
    g[CB3Libs.POI.EndCity] = {
      gaId: "E",
      imgSrc: {
        "default": "end-city.png",
        ship: "end-city-ship.png"
      },
      dimension: CB3Libs.Dimension.End,
      maxTileSize: f.normal,
      getImg: function (a) {
        return null == a.hasShip || a.hasShip ? "ship" : "default"
      },
      fillColor: function (a) {
        return null == a.hasShip || a.hasShip ? "73,49,73" : "130,130,130"
      },
      getTooltipText: function (a) {
        var b = null == a[2].hasShip ? "末地城" : a[2].hasShip ? "末地城 (带船)" : "末地城 (无船)";
        return "可能的" + b
      },
      getHoverText: function (a) {
        return null == a[2].hasShip ? null : a[2].hasShip ? "End City with ship" : "End City without ship"
      }
    },
    g[CB3Libs.POI.EndGateway] = {
      gaId: "Eg",
      imgSrc: "end-gateway.png",
      dimension: CB3Libs.Dimension.End,
      maxTileSize: f.normal,
      fillColor: "6,57,49",
      splitPois: b,
      getCoords: function (a) {
        return [a[2].x, null, a[2].z]
      },
      getHoverText: function (b) {
        return "End Gateway @ " + a(b[2][0].x) + " / " + a(b[2][0].z)
      },
      getTooltipText: function () {
        return "末地折跃门"
      }
    },
    g[CB3Libs.POI.NetherFortress] = {
      gaId: "N",
      imgSrc: "nether-fortress.png",
      dimension: CB3Libs.Dimension.Nether,
      maxTileSize: f.big,
      fillColor: "195,65,55",
      getCoords: function (a) {
        return [16 * a[0] + 11, null, 16 * a[1] + 11]
      },
      getTooltipText: function () {
        return "下界要塞 (十字路口)"
      },
      getHoverText: function (b) {
        return "Crossing @ " + a((b[0] << 4) + 11) + " / " + a((b[1] << 4) + 11)
      }
    },
    g[CB3Libs.POI.Igloo] = {
      gaId: "I",
      imgSrc: {
        "default": "igloo.png",
        basement: "igloo-basement.png"
      },
      dimension: CB3Libs.Dimension.Overworld,
      maxTileSize: f.normal,
      getImg: function (a) {
        return a.hasBasement ? "basement" : "default"
      },
      fillColor: function (a) {
        return a.hasBasement ? "35,87,205" : "86,86,86"
      },
      getTooltipText: function (a) {
        return null == a[2].hasBasement ? "Igloo" : a[2].hasBasement ? "雪屋 (带地下室)" : "雪屋 (无地下室)"
      },
      getHoverText: function (a) {
        return null == a[2].hasBasement ? null : a[2].hasBasement ? "Igloo with basement" : "Igloo without basement"
      }
    },
    g[CB3Libs.POI.JungleTemple] = {
      gaId: "J",
      imgSrc: "jungle-temple.png",
      dimension: CB3Libs.Dimension.Overworld,
      maxTileSize: f.normal,
      getTooltipText: function (a, b) {
        return b.edition === CB3Libs.Edition.Java && b.javaVersion >= CB3Libs.JavaVersion.V1_18 ? "可能的丛林神庙" : "丛林神庙"
      },
      fillColor: "114,133,10"
    },
    g[CB3Libs.POI.WoodlandMansion] = {
      gaId: "Ma",
      imgSrc: "mansion.png",
      dimension: CB3Libs.Dimension.Overworld,
      maxTileSize: f.small,
      getTooltipText: function (a, b) {
        return b.edition === CB3Libs.Edition.Java && b.javaVersion >= CB3Libs.JavaVersion.V1_18 ? "可能的林地府邸" : "林地府邸"
      },
      fillColor: "160,82,45"
    },
    g[CB3Libs.POI.Mineshaft] = {
      gaId: "M",
      imgSrc: "mineshaft.png",
      dimension: CB3Libs.Dimension.Overworld,
      maxTileSize: f.veryBig,
      getTooltipText: function () {
        return "废弃矿井"
      },
      fillColor: "148,116,0"
    },
    g[CB3Libs.POI.OceanMonument] = {
      gaId: "Om",
      imgSrc: "ocean-monument.png",
      dimension: CB3Libs.Dimension.Overworld,
      maxTileSize: f.normal,
      getTooltipText: function () {
        return "海底神殿"
      },
      fillColor: "100,100,220"
    },
    g[CB3Libs.POI.OceanRuin] = {
      gaId: "Or",
      imgSrc: {
        "default": "ocean-ruin.png",
        special: "ocean-ruin-special.png"
      },
      dimension: CB3Libs.Dimension.Overworld,
      maxTileSize: f.big,
      getImg: function (a) {
        return a.isLarge && a.clusterSize > 0 ? "special" : "default"
      },
      fillColor: function (a) {
        return "cold" === a.type ? a.isLarge && a.clusterSize > 0 ? "51,102,255" : "80,98,149" : a.isLarge && a.clusterSize > 0 ? "255,82,51" : "149,91,80"
      },
      _getLabel: function (a) {
        var b = a[2];
        return [b.isLarge ? "大型" : "小型", "warm" === b.type ? "热带" : "寒带", "废墟", b.clusterSize > 0 && "团簇 (" + b.clusterSize + "个小型废墟)"].filter(Boolean).join("")
      },
      getTooltipText: function (a) {
        return g[CB3Libs.POI.OceanRuin]._getLabel(a)
      },
      getHoverText: function (a) {
        return g[CB3Libs.POI.OceanRuin]._getLabel(a)
      }
    },
    g[CB3Libs.POI.PillagerOutpost] = {
      gaId: "Po",
      imgSrc: "pillager-outpost.png",
      dimension: CB3Libs.Dimension.Overworld,
      getCoords: d,
      maxTileSize: f.normal,
      getTooltipText: function () {
        return "掠夺者前哨站"
      },
      fillColor: "96,63,28"
    },
    g[CB3Libs.POI.Ravine] = {
      gaId: "Rv",
      imgSrc: {
        normal: "ravine.png",
        special: "ravine-special.png",
        underwater: "ravine-underwater.png",
        underwaterSpecial: "ravine-underwater-special.png"
      },
      dimension: CB3Libs.Dimension.Overworld,
      maxTileSize: f.chunkClassifier,
      splitPois: b,
      getCoords: function (a) {
        return [a[2].x, a[2].y, a[2].z]
      },
      getImg: function (a) {
        return a.isUnderwater ? a.isMegaRavine ? "underwaterSpecial" : "underwater" : a.isMegaRavine ? "special" : "normal"
      },
      getTooltipText: function (b) {
        var c = b[2];
        return [c.isMegaRavine && "大型", c.isUnderwater && "水下", "峡谷", c.thickness && " (大小: " + a(c.thickness) + ")"].filter(Boolean).join("")
      },
      getHoverText: function (b) {
        var c = b[2][0];
        return [c.isMegaRavine && "Mega", c.isUnderwater && "Underwater", "Ravine", "@ " + a(c.x) + " / " + a(c.y) + " / " + a(c.z)].filter(Boolean).join("")
      },
      fillColor: function (a) {
        var b = a[0];
        return b.isUnderwater ? b.isMegaRavine ? "168,7,213" : "0,0,255" : b.isMegaRavine ? "128,25,0" : "20,90,0"
      }
    },
    g[CB3Libs.POI.OreVein] = {
      gaId: "Ov",
      imgSrc: {
        copper: "raw-copper.png",
        iron: "raw-iron.png"
      },
      dimension: CB3Libs.Dimension.Overworld,
      _getSize: function (a) {
        return a.oreCount < 6 ? "小" : a.oreCount < 9 ? "中" : "大"
      },
      splitPois: b,
      getCoords: function (a) {
        return a[2].reference
      },
      getImg: function (a) {
        return a.type
      },
      maxTileSize: f.chunkClassifier,
      getTooltipText: function (a) {
        return ["copper" === a[2].type ? "铜矿脉" : "铁矿脉", "(" + g[CB3Libs.POI.OreVein]._getSize(a[2]) + ")"].join("")
      },
      fillColor: "96,63,28"
    },
    g[CB3Libs.POI.RuinedPortalOverworld] = {
      gaId: "Rp",
      imgSrc: "ruined-portal.png",
      dimension: CB3Libs.Dimension.Overworld,
      maxTileSize: f.big,
      getTooltipText: function () {
        return "可能的废弃传送门"
      },
      fillColor: "109,9,109"
    },
    g[CB3Libs.POI.RuinedPortalNether] = {
      gaId: "Rpn",
      imgSrc: "ruined-portal.png",
      dimension: CB3Libs.Dimension.Nether,
      maxTileSize: f.big,
      getTooltipText: function () {
        return "可能的废弃传送门"
      },
      fillColor: "109,9,109"
    },
    g[CB3Libs.POI.Shipwreck] = {
      gaId: "Sw",
      imgSrc: "shipwreck.png",
      dimension: CB3Libs.Dimension.Overworld,
      maxTileSize: f.big,
      getTooltipText: function () {
        return "沉船"
      },
      fillColor: "108,88,97"
    },
    g[CB3Libs.POI.SlimeChunk] = {
      gaId: "Sc",
      dimension: CB3Libs.Dimension.Overworld,
      maxTileSize: f.chunkClassifier,
      getTooltipText: function () {
        return "史莱姆区块"
      },
      fillColor: "29,145,44",
      fillColorOuter: "40,199,60"
    },
    g[CB3Libs.POI.Spawn] = {
      gaId: "Sp",
      imgSrc: "spawn.png",
      dimension: CB3Libs.Dimension.Overworld,
      maxTileSize: f.small,
      getCoords: function (a) {
        return [a[2].x, null, a[2].z]
      },
      getTooltipText: function () {
        return "预计重生点"
      },
      fillColor: "50,50,50"
    },
    g[CB3Libs.POI.Stronghold] = {
      gaId: "St",
      imgSrc: "stronghold.png",
      dimension: CB3Libs.Dimension.Overworld,
      maxTileSize: f.small,
      fillColor: "195,65,55",
      getCoords: function (a) {
        return [16 * a[0] + 4, null, 16 * a[1] + 4]
      },
      getTooltipText: function () {
        return "要塞 (楼梯)"
      },
      getHoverText: function (b) {
        return "Stronghold stairway @ " + a((b[0] << 4) + 4) + " / " + a((b[1] << 4) + 4)
      }
    },
    g[CB3Libs.POI.TrailRuin] = {
      gaId: "Tr",
      imgSrc: "trail-ruin.png",
      dimension: CB3Libs.Dimension.Overworld,
      maxTileSize: f.normal,
      getTooltipText: function () {
        return "古迹废墟"
      },
      getCoords: function (a) {
        return a[2].slice(0, 3)
      },
      fillColor: "123,80,20"
    },
    g[CB3Libs.POI.Village] = {
      gaId: "V",
      imgSrc: {
        "default": "village.png",
        zombie: "village-zombie.png"
      },
      dimension: CB3Libs.Dimension.Overworld,
      maxTileSize: f.normal,
      getImg: function (a) {
        return a.zombie ? "zombie" : "default"
      },
      getCoords: d,
      fillColor: function (a) {
        return a.zombie ? "200,0,190" : null == a.type ? "100,131,63" : {
          desert: "180,101,4",
          plains: "100,131,63",
          savanna: "138,128,56",
          taiga: "11,102,89",
          snowy: "120,120,120"
        }[a.type]
      },
      _getLabel: function (a) {
        var b = a[2];
        if (null == b.type)
          return null;
        var c = {
          desert: "沙漠村庄",
          plains: "平原村庄",
          savanna: "热带草原村庄",
          taiga: "针叶林村庄",
          snowy: "雪原村庄"
        }[b.type];
        return b.zombie && (c = "僵尸 " + c),
          c
      },
      getTooltipText: function (a) {
        return g[CB3Libs.POI.Village]._getLabel(a) || "Village"
      },
      getHoverText: function (a) {
        return g[CB3Libs.POI.Village]._getLabel(a)
      }
    },
    g[CB3Libs.POI.WitchHut] = {
      gaId: "Wh",
      imgSrc: "witch-hut.png",
      dimension: CB3Libs.Dimension.Overworld,
      maxTileSize: f.normal,
      getTooltipText: function () {
        return "女巫小屋"
      },
      fillColor: "169,44,212"
    },
    g[CB3Libs.POI.ItemOverworld] = {
      gaId: "IOw",
      imgSrc: "golden-apple.png",
      dimension: CB3Libs.Dimension.Overworld,
      maxTileSize: f.small,
      fillColor: "145,81,13",
      getTooltipText: function () {
        return "可能的附魔金苹果 (宝箱)"
      },
      getHoverText: function () {
        return "Likely Enchanted Apple (temple chest)"
      }
    },
    g
}();


window.__forcedVersion = 77,
  window.__analytics_biomeRequests = 0;
var CB3TooltipManager = function () {
  function a(a) {
    return a += "",
      a.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
  }
  function b(b) {
    var c = e.getPoiData(g);
    if (g && null != c) {
      var d = f.reference
        , h = c.rect
        , i = CB3PoiConfig[c.type].getTooltipText(c.item, b.platform.cb3World) + "<br>";
      i += "X: " + a(c.coords[0]),
        null != c.coords[1] && (i += " Y: " + a(c.coords[1])),
        i += " Z: " + a(c.coords[2]),
        f.setProps({
          content: i,
          getReferenceClientRect: function () {
            var a = d.getBoundingClientRect();
            return {
              width: h.width,
              height: h.height,
              top: a.top + h.y,
              bottom: a.top + h.y + h.height,
              left: a.left + h.x,
              right: a.left + h.x + h.width
            }
          }
        }),
        f.show()
    } else
      f.hide()
  }
  var c = 0
    , d = 3
    , e = function () {
      function a() {
        g.clearRect(0, 0, b.width, b.height),
          c = {},
          e = {},
          f = 1
      }
      var b = document.createElement("canvas");
      b.width = 0,
        b.height = 0;
      var c = {}
        , e = {}
        , f = 1
        , g = b.getContext("2d");
      return {
        clear: a,
        updateDimensions: function (c, d) {
          a(),
            b.width = c,
            b.height = d
        },
        getPoiData: function (a) {
          return e[a]
        },
        getPoiIdAt: function (a, b) {
          var e = g.getImageData(Math.round(a), Math.round(b), 1, 1).data
            , f = e[0] >> d | e[1] >> d << 8 - d | e[2] >> d << 16 - 2 * d
            , h = c[f];
          return h
        },
        addPoi: function (a, b) {
          var h = f;
          f += 1;
          var i = Math.pow(2, 8 - d) - 1
            , j = (h & i) << d
            , k = (h >> 8 - d & i) << d
            , l = (h >> 16 - 2 * d & i) << d;
          return c[h] = a,
            e[a] = b,
          {
            fillRect: function (a, b, c, d) {
              g.fillStyle = "rgb(" + j + "," + k + "," + l + ")",
                g.fillRect(a, b, c, d)
            }
          }
        }
      }
    }()
    , f = null
    , g = null;
  return {
    onInit: function (a) {
      f = tippy(a, {
        duration: 0,
        arrow: !0,
        hideOnClick: !1,
        interactive: !0,
        theme: "light center-align",
        trigger: "manual",
        allowHTML: !0
      })
    },
    onCanvasClick: function (a, c, d) {
      var f = e.getPoiIdAt(a, c);
      if (null == f && null == g)
        return !1;
      if (g = f === g ? null : f,
        f && window._enableAnalytics && window.gtag) {
        var h = e.getPoiData(g);
        h && h.type && window.gtag("event", "CB_ChunkApp_SelectPoi", {
          poi: h.type
        })
      }
      return b(d),
        !0
    },
    onMapDimensionsChanged: function (a, b) {
      e.updateDimensions(a, b)
    },
    onParamsChanged: function () {
      e.clear()
    },
    beforeMapRepaint: function () {
      e.clear()
    },
    onMapRepainted: function (a) {
      f && b(a)
    },
    isClickable: function (a, b) {
      return null != e.getPoiIdAt(a, b)
    },
    isSelected: function (a) {
      return a === g
    },
    onPoiDrawn: function (a, b, d, f, g, h, i, j, k) {
      var l = g + i
        , m = h + j
        , n = Math.min(k[2], Math.max(k[0], g))
        , o = Math.min(k[3], Math.max(k[1], h))
        , p = Math.min(k[2], Math.max(k[0], l))
        , q = Math.min(k[3], Math.max(k[1], m));
      if (p > n && q > o) {
        var r = e.addPoi(b, {
          type: a,
          item: f,
          coords: d,
          rect: {
            x: n,
            y: o,
            width: p - n,
            height: q - o
          }
        });
        r.fillRect(n - c, o - c, p - n + 2 * c, q - o + 2 * c)
      }
    }
  }
}()
  , CB3FinderApp = function () {
    function a(a) {
      var d = b.filterPoisByZoomLevel ? Object.keys(CB3PoiConfig).filter(function (b) {
        return CB3PoiConfig[b].maxTileSize < a.tileSize
      }) : [];
      return c.triggerHandler("hiddenpoischanged", [d]),
        d
    }
    var b = CB3FinderAppConfig || {}
      , c = $({})
      , d = 1.25
      , e = Object.keys(CB3PoiConfig)
      , f = {
        dungeon: {
          initialChunkWidth: 32,
          minChunkWidth: 8,
          maxChunkWidth: 32
        },
        chunkClassifier: {
          initialChunkWidth: 16,
          minChunkWidth: 8,
          maxChunkWidth: 64
        },
        big: {
          initialChunkWidth: 8,
          minChunkWidth: 2,
          maxChunkWidth: 32
        },
        normal: {
          initialChunkWidth: 4,
          minChunkWidth: .5,
          maxChunkWidth: 32
        },
        small: {
          initialChunkWidth: 2,
          minChunkWidth: .25,
          maxChunkWidth: 32
        },
        full: {
          initialChunkWidth: 4,
          minChunkWidth: .25,
          maxChunkWidth: 64
        }
      }
      , g = "all" === b.pois ? Object.keys(CB3PoiConfig).filter(function (a) {
        return !b.initiallyHiddenPois || -1 === b.initiallyHiddenPois.indexOf(a)
      }).concat(["biomes"]) : b.pois || [];
    Object.assign(c, {
      drawAll: !0,
      async: !0,
      loadingBackground: "228,232,235",
      drawChunkBordersPostRender: !0,
      deferredRender: !0,
      distantViewDeferredRender: !0,
      initialDimension: b.dimension || (b.dimensions ? b.dimensions[0] : null),
      initialBiomeHeight: "surface",
      initialPois: g,
      getSupportedDimensions: function (a) {
        return b.dimensions ? {
          overworld: (null == a.restrictToDimensions || -1 !== a.restrictToDimensions.indexOf("overworld")) && -1 !== b.dimensions.indexOf(CB3Libs.Dimension.Overworld),
          nether: (null == a.restrictToDimensions || -1 !== a.restrictToDimensions.indexOf("nether")) && -1 !== b.dimensions.indexOf(CB3Libs.Dimension.Nether),
          end: (null == a.restrictToDimensions || -1 !== a.restrictToDimensions.indexOf("end")) && -1 !== b.dimensions.indexOf(CB3Libs.Dimension.End)
        } : {}
      }
    }, f[b.chunkWidths]);
    var h = null != navigator.hardwareConcurrency && navigator.hardwareConcurrency > 1 ? navigator.hardwareConcurrency - 1 : 1;
    h = Math.min(h, 6);
    for (var i = [], j = 0; h > j; j++)
      i[j] = new Worker(window.URL.createObjectURL(inlineWorker_k9bk8));
    CB3SharedTaskManagerMain.init(i);
    var k = [];
    i.forEach(function (a, b) {
      a.addEventListener("message", function (a) {
        "check" === a.data.type && k[b](a.data.results)
      }, !1)
    });
    var l = new Worker(window.URL.createObjectURL(inlineWorker_k9bk8));
    l.addEventListener("message", function (a) {
      "getSupportedPois" === a.data.type && c.triggerHandler("supportedpoischanged", [a.data.supportedPois])
    }, !1),
      c.on("platformchange", function (a, b) {
        l.postMessage({
          type: "getSupportedPois",
          platform: b
        })
      }),
      c.initialHideGridLines = b.hideGridLines;
    var m = null;
    return SeedMapTiles(c, {
      defaultPlatform: ChunkApp.Platform.java,
      nrParallel: h,
      init: function (b, d) {
        CB3TooltipManager.onInit(b),
          c.initialHiddenPois = a(d)
      },
      onParamsChanged: function (b, c) {
        CB3TooltipManager.onParamsChanged(),
          -1 !== c.indexOf("tileSize") && a(b)
      },
      onMapDimensionsChanged: CB3TooltipManager.onMapDimensionsChanged,
      isClickable: CB3TooltipManager.isClickable,
      getHoverText: function (a, c, d, e) {
        if (d.hits.biomes) {
          var f = new Uint8Array(d.hits.biomes)
            , g = d.hits.biomeScale
            , h = Math.floor((a - d.tile.x) / g)
            , i = Math.floor((c - d.tile.z) / g)
            , j = f[i * d.tile.xL / g + h];
          if (255 === j)
            return null;
          var k = CB3Libs.biomeList[j];
          if (!k)
            return null;
          var l = "生物群系: " + k.name;
          if (d.hits.heights) {
            f = new Int32Array(d.hits.heights);
            var m = f[i * d.tile.xL / g + h];
            l += ", Y: " + m
          }
          return l
        }
        if (!b.renderImg) {
          if (!d.hits.poiResults)
            return null;
          a = Math.floor(a),
            c = Math.floor(c);
          for (var n = Object.keys(d.hits.poiResults).reverse(), o = 0; o < n.length; o++)
            for (var p = n[o], q = CB3PoiConfig[p], r = d.hits.poiResults[p], s = 0; s < r.length; s++) {
              var t = r[s];
              if (t[0] === a && t[1] === c)
                return q.getHoverText ? q.getHoverText(t, e.platform.cb3World) : null
            }
          return null
        }
      },
      loadTile: function (a, c, d) {
        for (var e = null, f = 0; f < i.length; f++)
          if (!k[f]) {
            e = f;
            break
          }
        if (null == e)
          throw new Error("loadTile: Only " + i.length + " requests allowed at a time");
        k[e] = function (a) {
          k[e] = null,
            d(a)
        }
          ;
        var g = Object.assign({}, a, {
          pois: a.pois.filter(function (b) {
            return CB3PoiConfig[b].dimension === a.dimension
          }).filter(function (c) {
            return !b.filterPoisByZoomLevel || CB3PoiConfig[c].maxTileSize >= a.tileSize
          })
        });
        if (a.dimension === CB3Libs.Dimension.Overworld) {
          var h = 64;
          window.__analytics_biomeRequests += a.tileSize * a.tileSize / (h * h)
        }
        i[e].postMessage({
          type: "check",
          params: g,
          tile: c
        })
      },
      paintTile: function (a, c, f, g, h, i, j, k, l) {
        function getBiomeInChunk(px, py) {
          // Variable names like PosX, ChunkPosX, InChunkPosX
          var fx = function (a) {
            return g.biomeScale >= 1 ? a : Math.floor(a / g.biomeScale) * g.biomeScale
          };
          var icpx = Math.floor((fx(px / 16) - f.x) / g.biomeScale),
            icpy = Math.floor((fx(py / 16) - f.z) / g.biomeScale),
            b = new Uint8Array(g.biomes);
          return b[icpy * f.xL / g.biomeScale + icpx]
        }
        if ("biomes" !== c) {
          if ("slimeChunks" === c && b.renderImg && g.poiResults[CB3Libs.POI.SlimeChunk]) {
            var n = g.poiResults[CB3Libs.POI.SlimeChunk]
              , o = CB3PoiConfig[CB3Libs.POI.SlimeChunk]
              , p = a.lineWidth;
            a.lineWidth = 2,
              n.forEach(function (b) {
                a.fillStyle = "rgb(" + o.fillColor + ")";
                var c = j(b[0], b[1])
                  , d = j(b[0] + 1, b[1] + 1);
                a.fillRect(c[0], c[1], d[0] - c[0] - 1, d[1] - c[1] - 1),
                  a.strokeStyle = "rgb(" + o.fillColorOuter + ")",
                  a.strokeRect(c[0] + 1, c[1] + 1, d[0] - c[0] - 3, d[1] - c[1] - 3)
              }),
              a.lineWidth = p
          }
          if ("pois" === c) {
            var q = Object.keys(g.poiResults).sort(function (a, b) {
              return e.indexOf(a) - e.indexOf(b)
            });
            window.__analytics_lastPois = q,
              q.forEach(function (c) {
                function e(b, e) {
                  var f = i.getImg ? i.img[i.getImg(e[2])] : i.img
                    , pos = i.getCoords ? i.getCoords(e, l.platform.cb3World) : [16 * e[0] + 8, null, 16 * e[1] + 8]
                    , h = j(pos[0] / 16, pos[2] / 16)
                    , m = CB3TooltipManager.isSelected(b)
                    , n = f.width * (m ? d : 1)
                    , o = f.height * (m ? d : 1)
                    , p = Math.floor(h[0] - n / 2)
                    , q = Math.floor(h[1] - o / 2);
                  if (g.biomeFilter && (g.biomeFilter.indexOf(getBiomeInChunk(pos[0], pos[2])) != -1))
                    a.drawImage(f, p, q, n, o),
                      CB3TooltipManager.onPoiDrawn(c, b, pos, e, p, q, n, o, k);
                  else if (!g.biomeFilter || !g.biomes || !l.hidePoi)
                    a.drawImage(f, p, q, n, o),
                      CB3TooltipManager.onPoiDrawn(c, b, pos, e, p, q, n, o, k)
                }
                if (c !== CB3Libs.POI.SlimeChunk || !b.renderImg) {
                  var f = g.poiResults[c]
                    , i = CB3PoiConfig[c];
                  f.forEach(function (a) {
                    if (i.img && b.renderImg) {
                      var d = i.splitPois ? i.splitPois(a) : [a];
                      d.forEach(function (a, b) {
                        var d = [c, a[0], a[1], b].join(";");
                        CB3TooltipManager.isSelected(d) ? m = function () {
                          e(d, a, b)
                        }
                          : e(d, a, b)
                      })
                    } else
                      h(a[0], a[1], "function" == typeof i.fillColor ? i.fillColor(a[2]) : i.fillColor)
                  })
                }
              })
          }
        } else if (window.__analytics_lastBiomes = !!g.biomeCanvas,
          g.biomeCanvas) {
          var r = j(f.x, f.z)
            , s = j(f.x + f.xL, f.z + f.zL);
          a.drawImage(g.biomeCanvas, Math.floor(r[0]), Math.floor(r[1]), Math.floor(s[0] - r[0]), Math.floor(s[1] - r[1]))
        }
      },
      processTile: function (a, b) {
        function c(a, b) {
          var c = a / 256
            , d = b / 256;
          return .5 > c ? Math.min(255, Math.max(0, Math.floor(2 * c * d * 256))) : Math.min(255, Math.max(0, Math.floor(256 * (1 - 2 * (1 - c) * (1 - d)))))
        }
        if (!a.biomes)
          return a;
        var d = document.createElement("canvas");
        d.width = b.xL / a.biomeScale,
          d.height = b.zL / a.biomeScale;
        var e, f = new Uint8Array(a.biomes), g = a.heights && new Int32Array(a.heights);
        if (g) {
          e = [];
          for (var h = .025, i = 1 / Math.sqrt(.5) * Math.sqrt(a.biomeScale), j = 45, k = 315, l = 1 * i, m = Math.PI * j / 180, n = Math.PI * k / 180, o = Math.cos(m), p = Math.sin(m), q = 0; q < d.height; q++)
            for (var r = Math.max(q - 1, 0), s = Math.min(q + 1, d.height - 1), t = 0; t < d.width; t++) {
              var u = Math.max(t - 1, 0)
                , v = Math.min(t + 1, d.width - 1)
                , w = h * g[q * d.width + u]
                , x = h * g[q * d.width + v]
                , y = h * g[r * d.width + t]
                , z = h * g[s * d.width + t]
                , A = (x - w) / l
                , B = (z - y) / l
                , C = Math.atan(Math.sqrt(A * A + B * B))
                , D = Math.atan2(B, -A);
              D = 0 > D ? Math.PI / 2 - D : D > Math.PI / 2 ? 2 * Math.PI - D + Math.PI / 2 : Math.PI / 2 - D;
              var E = p * Math.cos(C) + o * Math.sin(C) * Math.cos(n - D)
                , F = Math.min(255, Math.max(0, Math.floor(256 * (E - .20710678118654746))));
              e[q * d.width + t] = F
            }
        }
        for (var G = d.getContext("2d"), H = G.createImageData(d.width, d.height), I = H.data, J = CB3Libs.biomeList, K = 0; K < d.width * d.height; K++) {
          var L = f[K];
          if (255 !== L) {
            var M = J[L].rgb;
            if (e ? (I[4 * K + 0] = c(e[K], M[0]),
              I[4 * K + 1] = c(e[K], M[1]),
              I[4 * K + 2] = c(e[K], M[2])) : (I[4 * K + 0] = M[0],
                I[4 * K + 1] = M[1],
                I[4 * K + 2] = M[2]),
              I[4 * K + 3] = 255,
              a.biomeFilter)
              if (-1 === a.biomeFilter.indexOf(L))
                /* not the specified biome */
                /* change the transparent to 22 */
                I[4 * K + 3] = 22;
              else {
                var N = .9; /* Change the transparent by 0.9 */
                I[4 * K + 0] = Math.round(I[4 * K + 0] * N),
                  I[4 * K + 1] = Math.round(I[4 * K + 1] * N),
                  I[4 * K + 2] = Math.round(I[4 * K + 2] * N)
              }
            a.biomeFilter && -1 === a.biomeFilter.indexOf(L) && (I[4 * K + 3] = 32)
          }
        }
        return G.putImageData(H, 0, 0),
          Object.assign({}, a, {
            biomeCanvas: d
          })
      },
      onCanvasClick: function (a, b, d) {
        var e = CB3TooltipManager.onCanvasClick(a, b, d);
        e && c.triggerHandler("redrawmap")
      },
      beforeMapRepaint: CB3TooltipManager.beforeMapRepaint,
      onMapRepainted: function (a) {
        m && (m(),
          m = null),
          CB3TooltipManager.onMapRepainted(a)
      }
    })
  }();
$(document).ready(function () {
  function a() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
  }
  function b(a, b) {
    var c = new Image;
    c.onload = function () {
      b(null, c)
    }
      ,
      c.onerror = function (a) {
        b(new Error(a))
      }
      ,
      c.src = a
  }
  function c(a, b) {
    var c = document.createElement("canvas");
    c.width = b.width,
      c.height = b.height;
    var d = c.getContext("2d");
    return d.drawImage(a, b.x, b.y, b.width, b.height, 0, 0, b.width, b.height),
      c
  }
  function d(a) {
    b(window.__seedMapPoisSpriteImage, function (b, d) {
      if (b)
        return void a(b);
      var e = !1;
      Object.keys(CB3PoiConfig).forEach(function (b) {
        var f = CB3PoiConfig[b].imgSrc;
        if (f && !e)
          if ("string" == typeof f) {
            var g = window.__seedMapPoisSprite[f];
            if (!g)
              return a(new Error("sprite not found: " + f)),
                void (e = !0);
            CB3PoiConfig[b].img = c(d, g)
          } else
            CB3PoiConfig[b].img = {},
              Object.keys(f).forEach(function (g) {
                var h = window.__seedMapPoisSprite[f[g]];
                return h ? void (CB3PoiConfig[b].img[g] = c(d, h)) : (a(new Error("sprite not found: " + f[g])),
                  void (e = !0))
              })
      }),
        e || a()
    })
  }
  var temp__ = function () {
    var a = CB3FinderApp;
    d(function (b) {
      return b ? void chunkAppLoader.errorInit() : (chunkAppLoader.init(a),
        void a.on("uiloaded", function () {
          $("#biome-selection").biomeSelection(a),
            $("#show-heights-label").heightsToggle(a),
            $("#hide-poi-label").hidePoiToggle(a),
            $("#biome-dimension-selection").dimensionSelection(a),
            $(".seedmap-layers-wrapper").seedMapLayers(a),
            $("#biome-height-select").biomHeightSelect(a),
            $(".topnav").topNavigate(a)
        }))
    })
  }();
});
