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
            a[a.V1_20 = 10200] = "V1_20",
            a[a.V1_21 = 10210] = "V1_21"
        }(e || (e = {})),
        function (a) {
          a[a.V1_14 = 10140] = "V1_14",
            a[a.V1_16 = 10160] = "V1_16",
            a[a.V1_17 = 10170] = "V1_17",
            a[a.V1_18 = 10180] = "V1_18",
            a[a.V1_19 = 10190] = "V1_19",
            a[a.V1_20 = 10200] = "V1_20",
            a[a.V_1_20_60 = 10206] = "V_1_20_60",
            a[a.V1_21 = 10210] = "V1_21"
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
            a.TrailRuin = "trailRuin",
            a.TrialChamber = "trialChamber",
            a.LavaPool = "lavaPool",
            a.HTCustomize = "htCustomize"
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