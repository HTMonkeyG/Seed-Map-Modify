Math.imul || (Math.imul = function (a, b) {
  b |= 0;
  var c = (4194303 & a) * b;
  return 4290772992 & a && (c += (4290772992 & a) * b | 0),
    0 | c
}
),
  function () {
    var a, b, c;
    return a = b = window.jQuery || require("jquery"),
      b.propHooks.scrollTop = b.propHooks.scrollLeft = {
        get: function (a, b) {
          var c = null;
          return ("HTML" === a.tagName || "BODY" === a.tagName) && ("scrollLeft" === b ? c = window.scrollX : "scrollTop" === b && (c = window.scrollY)),
            null == c && (c = a[b]),
            c
        }
      },
      b.Tween.propHooks.scrollTop = b.Tween.propHooks.scrollLeft = {
        get: function (a) {
          return b.propHooks.scrollTop.get(a.elem, a.prop)
        },
        set: function (a) {
          "HTML" === a.elem.tagName || "BODY" === a.elem.tagName ? (a.options.bodyScrollLeft = a.options.bodyScrollLeft || window.scrollX,
            a.options.bodyScrollTop = a.options.bodyScrollTop || window.scrollY,
            "scrollLeft" === a.prop ? a.options.bodyScrollLeft = Math.round(a.now) : "scrollTop" === a.prop && (a.options.bodyScrollTop = Math.round(a.now)),
            window.scrollTo(a.options.bodyScrollLeft, a.options.bodyScrollTop)) : a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
      },
      c = {
        config: {
          duration: 400,
          easing: "swing",
          callback: void 0,
          durationMode: "each",
          offsetTop: 0,
          offsetLeft: 0
        },
        configure: function (a) {
          return b.extend(c.config, a || {}),
            this
        },
        scroll: function (a, d) {
          var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v;
          return e = a.pop(),
            f = e.$container,
            g = e.$target,
            j = f.prop("tagName"),
            h = b("<span/>").css({
              position: "absolute",
              top: "0px",
              left: "0px"
            }),
            i = f.css("position"),
            f.css({
              position: "relative"
            }),
            h.appendTo(f),
            o = h.offset().top,
            p = g.offset().top,
            q = p - o - parseInt(d.offsetTop, 10),
            r = h.offset().left,
            s = g.offset().left,
            t = s - r - parseInt(d.offsetLeft, 10),
            k = f.prop("scrollTop"),
            l = f.prop("scrollLeft"),
            h.remove(),
            f.css({
              position: i
            }),
            u = {},
            v = function () {
              return 0 === a.length ? "function" == typeof d.callback && d.callback() : c.scroll(a, d),
                !0
            }
            ,
            d.onlyIfOutside && (m = k + f.height(),
              n = l + f.width(),
              q > k && m > q && (q = k),
              t > l && n > t && (t = l)),
            q !== k && (u.scrollTop = q),
            t !== l && (u.scrollLeft = t),
            f.prop("scrollHeight") === f.width() && delete u.scrollTop,
            f.prop("scrollWidth") === f.width() && delete u.scrollLeft,
            null != u.scrollTop || null != u.scrollLeft ? f.animate(u, {
              duration: d.duration,
              easing: d.easing,
              complete: v
            }) : v(),
            !0
        },
        fn: function (a) {
          var d, e, f, g;
          d = [];
          var h = b(this);
          if (0 === h.length)
            return this;
          for (e = b.extend({}, c.config, a),
            f = h.parent(),
            g = f.get(0); 1 === f.length && g !== document.body && g !== document;) {
            var i, j;
            i = "visible" !== f.css("overflow-y") && g.scrollHeight !== g.clientHeight,
              j = "visible" !== f.css("overflow-x") && g.scrollWidth !== g.clientWidth,
              (i || j) && (d.push({
                $container: f,
                $target: h
              }),
                h = f),
              f = f.parent(),
              g = f.get(0)
          }
          return d.push({
            $container: b("html"),
            $target: h
          }),
            "all" === e.durationMode && (e.duration /= d.length),
            c.scroll(d, e),
            this
        }
      },
      b.ScrollTo = b.ScrollTo || c,
      b.fn.ScrollTo = b.fn.ScrollTo || c.fn,
      c
  }
    .call(this),
  /*!
   * ----------------------------- JSTORAGE -------------------------------------
   * Simple local storage wrapper to save data on the browser side, supporting
   * all major browsers - IE6+, Firefox2+, Safari4+, Chrome4+ and Opera 10.5+
   *
   * Copyright (c) 2010 Andris Reinman, andris.reinman@gmail.com
   * Project homepage: www.jstorage.info
   *
   * Licensed under MIT-style license:
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   */
  function (a) {
    a.holdReady(!0),
      Modernizr.load({
        test: window.JSON,
        nope: "/js/libs/json3.js",
        complete: function () {
          function a() {
            var a = !1;
            if ("localStorage" in window)
              try {
                window.localStorage.setItem("_tmptest", "tmpval"),
                  a = !0,
                  window.localStorage.removeItem("_tmptest")
              } catch (b) { }
            if (a)
              try {
                window.localStorage && (v = window.localStorage,
                  y = "localStorage",
                  B = v.jStorage_update)
              } catch (e) { }
            else if ("globalStorage" in window)
              try {
                window.globalStorage && (v = window.globalStorage[window.location.hostname],
                  y = "globalStorage",
                  B = v.jStorage_update)
              } catch (f) { }
            else {
              if (w = document.createElement("link"),
                !w.addBehavior)
                return void (w = null);
              w.style.behavior = "url(#default#userData)",
                document.getElementsByTagName("head")[0].appendChild(w);
              try {
                w.load("jStorage")
              } catch (g) {
                w.setAttribute("jStorage", "{}"),
                  w.save("jStorage"),
                  w.load("jStorage")
              }
              var i = "{}";
              try {
                i = w.getAttribute("jStorage")
              } catch (j) { }
              try {
                B = w.getAttribute("jStorage_update")
              } catch (m) { }
              v.jStorage = i,
                y = "userDataBehavior"
            }
            h(),
              k(),
              c(),
              l(),
              "addEventListener" in window && window.addEventListener("pageshow", function (a) {
                a.persisted && d()
              }, !1)
          }
          function b() {
            var a = "{}";
            if ("userDataBehavior" == y) {
              w.load("jStorage");
              try {
                a = w.getAttribute("jStorage")
              } catch (b) { }
              try {
                B = w.getAttribute("jStorage_update")
              } catch (c) { }
              v.jStorage = a
            }
            h(),
              k(),
              l()
          }
          function c() {
            "localStorage" == y || "globalStorage" == y ? "addEventListener" in window ? window.addEventListener("storage", d, !1) : document.attachEvent("onstorage", d) : "userDataBehavior" == y && setInterval(d, 1e3)
          }
          function d() {
            var a;
            clearTimeout(A),
              A = setTimeout(function () {
                if ("localStorage" == y || "globalStorage" == y)
                  a = v.jStorage_update;
                else if ("userDataBehavior" == y) {
                  w.load("jStorage");
                  try {
                    a = w.getAttribute("jStorage_update")
                  } catch (b) { }
                }
                a && a != B && (B = a,
                  e())
              }, 25)
          }
          function e() {
            var a, c = s.parse(s.stringify(u.__jstorage_meta.CRC32));
            b(),
              a = s.parse(s.stringify(u.__jstorage_meta.CRC32));
            var d, e = [], g = [];
            for (d in c)
              if (c.hasOwnProperty(d)) {
                if (!a[d]) {
                  g.push(d);
                  continue
                }
                c[d] != a[d] && "2." == String(c[d]).substr(0, 2) && e.push(d)
              }
            for (d in a)
              a.hasOwnProperty(d) && (c[d] || e.push(d));
            f(e, "updated"),
              f(g, "deleted")
          }
          function f(a, b) {
            if (a = [].concat(a || []),
              "flushed" == b) {
              a = [];
              for (var c in z)
                z.hasOwnProperty(c) && a.push(c);
              b = "deleted"
            }
            for (var d = 0, e = a.length; e > d; d++) {
              if (z[a[d]])
                for (var f = 0, g = z[a[d]].length; g > f; f++)
                  z[a[d]][f](a[d], b);
              if (z["*"])
                for (var f = 0, g = z["*"].length; g > f; f++)
                  z["*"][f](a[d], b)
            }
          }
          function g() {
            var a = (+new Date).toString();
            "localStorage" == y || "globalStorage" == y ? v.jStorage_update = a : "userDataBehavior" == y && (w.setAttribute("jStorage_update", a),
              w.save("jStorage")),
              d()
          }
          function h() {
            if (v.jStorage)
              try {
                u = s.parse(String(v.jStorage))
              } catch (a) {
                v.jStorage = "{}"
              }
            else
              v.jStorage = "{}";
            x = v.jStorage ? String(v.jStorage).length : 0,
              u.__jstorage_meta || (u.__jstorage_meta = {}),
              u.__jstorage_meta.CRC32 || (u.__jstorage_meta.CRC32 = {})
          }
          function i() {
            n();
            try {
              v.jStorage = s.stringify(u),
                w && (w.setAttribute("jStorage", v.jStorage),
                  w.save("jStorage")),
                x = v.jStorage ? String(v.jStorage).length : 0
            } catch (a) { }
          }
          function j(a) {
            if (!a || "string" != typeof a && "number" != typeof a)
              throw new TypeError("Key name must be string or numeric");
            if ("__jstorage_meta" == a)
              throw new TypeError("Reserved key name");
            return !0
          }
          function k() {
            var a, b, c, d, e = 1 / 0, h = !1, j = [];
            if (clearTimeout(t),
              u.__jstorage_meta && "object" == typeof u.__jstorage_meta.TTL) {
              a = +new Date,
                c = u.__jstorage_meta.TTL,
                d = u.__jstorage_meta.CRC32;
              for (b in c)
                c.hasOwnProperty(b) && (c[b] <= a ? (delete c[b],
                  delete d[b],
                  delete u[b],
                  h = !0,
                  j.push(b)) : c[b] < e && (e = c[b]));
              1 / 0 != e && (t = setTimeout(k, e - a)),
                h && (i(),
                  g(),
                  f(j, "deleted"))
            }
          }
          function l() {
            var a, b;
            if (u.__jstorage_meta.PubSub) {
              var c, d = D;
              for (a = b = u.__jstorage_meta.PubSub.length - 1; a >= 0; a--)
                c = u.__jstorage_meta.PubSub[a],
                  c[0] > D && (d = c[0],
                    m(c[1], c[2]));
              D = d
            }
          }
          function m(a, b) {
            if (C[a])
              for (var c = 0, d = C[a].length; d > c; c++)
                C[a][c](a, s.parse(s.stringify(b)))
          }
          function n() {
            if (u.__jstorage_meta.PubSub) {
              for (var a = +new Date - 2e3, b = 0, c = u.__jstorage_meta.PubSub.length; c > b; b++)
                if (u.__jstorage_meta.PubSub[b][0] <= a) {
                  u.__jstorage_meta.PubSub.splice(b, u.__jstorage_meta.PubSub.length - b);
                  break
                }
              u.__jstorage_meta.PubSub.length || delete u.__jstorage_meta.PubSub
            }
          }
          function o(a, b) {
            u.__jstorage_meta || (u.__jstorage_meta = {}),
              u.__jstorage_meta.PubSub || (u.__jstorage_meta.PubSub = []),
              u.__jstorage_meta.PubSub.unshift([+new Date, a, b]),
              i(),
              g()
          }
          function p(a, b) {
            for (var c, d = a.length, e = b ^ d, f = 0; d >= 4;)
              c = 255 & a.charCodeAt(f) | (255 & a.charCodeAt(++f)) << 8 | (255 & a.charCodeAt(++f)) << 16 | (255 & a.charCodeAt(++f)) << 24,
                c = 1540483477 * (65535 & c) + ((1540483477 * (c >>> 16) & 65535) << 16),
                c ^= c >>> 24,
                c = 1540483477 * (65535 & c) + ((1540483477 * (c >>> 16) & 65535) << 16),
                e = 1540483477 * (65535 & e) + ((1540483477 * (e >>> 16) & 65535) << 16) ^ c,
                d -= 4,
                ++f;
            switch (d) {
              case 3:
                e ^= (255 & a.charCodeAt(f + 2)) << 16;
              case 2:
                e ^= (255 & a.charCodeAt(f + 1)) << 8;
              case 1:
                e ^= 255 & a.charCodeAt(f),
                  e = 1540483477 * (65535 & e) + ((1540483477 * (e >>> 16) & 65535) << 16)
            }
            return e ^= e >>> 13,
              e = 1540483477 * (65535 & e) + ((1540483477 * (e >>> 16) & 65535) << 16),
              e ^= e >>> 15,
              e >>> 0
          }
          var q = "0.4.3"
            , r = window.jQuery || window.$ || (window.$ = {})
            , s = {
              parse: window.JSON && (window.JSON.parse || window.JSON.decode) || String.prototype.evalJSON && function (a) {
                return String(a).evalJSON()
              }
                || r.parseJSON || r.evalJSON,
              stringify: Object.toJSON || window.JSON && (window.JSON.stringify || window.JSON.encode) || r.toJSON
            };
          if (!s.parse || !s.stringify)
            throw new Error("No JSON support found, include //cdnjs.cloudflare.com/ajax/libs/json2/20110223/json2.js to page");
          var t, u = {
            __jstorage_meta: {
              CRC32: {}
            }
          }, v = {
            jStorage: "{}"
          }, w = null, x = 0, y = !1, z = {}, A = !1, B = 0, C = {}, D = +new Date, E = {
            isXML: function (a) {
              var b = (a ? a.ownerDocument || a : 0).documentElement;
              return b ? "HTML" !== b.nodeName : !1
            },
            encode: function (a) {
              if (!this.isXML(a))
                return !1;
              try {
                return (new XMLSerializer).serializeToString(a)
              } catch (b) {
                try {
                  return a.xml
                } catch (c) { }
              }
              return !1
            },
            decode: function (a) {
              var b, c = "DOMParser" in window && (new DOMParser).parseFromString || window.ActiveXObject && function (a) {
                var b = new ActiveXObject("Microsoft.XMLDOM");
                return b.async = "false",
                  b.loadXML(a),
                  b
              }
                ;
              return c ? (b = c.call("DOMParser" in window && new DOMParser || window, a, "text/xml"),
                this.isXML(b) ? b : !1) : !1
            }
          };
          r.jStorage = {
            version: q,
            set: function (a, b, c) {
              if (j(a),
                c = c || {},
                "undefined" == typeof b)
                return this.deleteKey(a),
                  b;
              if (E.isXML(b))
                b = {
                  _is_xml: !0,
                  xml: E.encode(b)
                };
              else {
                if ("function" == typeof b)
                  return void 0;
                b && "object" == typeof b && (b = s.parse(s.stringify(b)))
              }
              return u[a] = b,
                u.__jstorage_meta.CRC32[a] = "2." + p(s.stringify(b), 2538058380),
                this.setTTL(a, c.TTL || 0),
                f(a, "updated"),
                b
            },
            get: function (a, b) {
              return j(a),
                a in u ? u[a] && "object" == typeof u[a] && u[a]._is_xml ? E.decode(u[a].xml) : u[a] : "undefined" == typeof b ? null : b
            },
            deleteKey: function (a) {
              return j(a),
                a in u ? (delete u[a],
                  "object" == typeof u.__jstorage_meta.TTL && a in u.__jstorage_meta.TTL && delete u.__jstorage_meta.TTL[a],
                  delete u.__jstorage_meta.CRC32[a],
                  i(),
                  g(),
                  f(a, "deleted"),
                  !0) : !1
            },
            setTTL: function (a, b) {
              var c = +new Date;
              return j(a),
                b = Number(b) || 0,
                a in u ? (u.__jstorage_meta.TTL || (u.__jstorage_meta.TTL = {}),
                  b > 0 ? u.__jstorage_meta.TTL[a] = c + b : delete u.__jstorage_meta.TTL[a],
                  i(),
                  k(),
                  g(),
                  !0) : !1
            },
            getTTL: function (a) {
              var b, c = +new Date;
              return j(a),
                a in u && u.__jstorage_meta.TTL && u.__jstorage_meta.TTL[a] ? (b = u.__jstorage_meta.TTL[a] - c,
                  b || 0) : 0
            },
            flush: function () {
              return u = {
                __jstorage_meta: {
                  CRC32: {}
                }
              },
                i(),
                g(),
                f(null, "flushed"),
                !0
            },
            storageObj: function () {
              function a() { }
              return a.prototype = u,
                new a
            },
            index: function () {
              var a, b = [];
              for (a in u)
                u.hasOwnProperty(a) && "__jstorage_meta" != a && b.push(a);
              return b
            },
            storageSize: function () {
              return x
            },
            currentBackend: function () {
              return y
            },
            storageAvailable: function () {
              return !!y
            },
            listenKeyChange: function (a, b) {
              j(a),
                z[a] || (z[a] = []),
                z[a].push(b)
            },
            stopListening: function (a, b) {
              if (j(a),
                z[a]) {
                if (!b)
                  return void delete z[a];
                for (var c = z[a].length - 1; c >= 0; c--)
                  z[a][c] == b && z[a].splice(c, 1)
              }
            },
            subscribe: function (a, b) {
              if (a = (a || "").toString(),
                !a)
                throw new TypeError("Channel not defined");
              C[a] || (C[a] = []),
                C[a].push(b)
            },
            publish: function (a, b) {
              if (a = (a || "").toString(),
                !a)
                throw new TypeError("Channel not defined");
              o(a, b)
            },
            reInit: function () {
              b()
            }
          },
            a(),
            r.holdReady(!1)
        }
      })
  }(window.$ || window.jQuery),
  /*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */
  window.matchMedia || (window.matchMedia = function () {
    "use strict";
    var a = window.styleMedia || window.media;
    if (!a) {
      var b = document.createElement("style")
        , c = document.getElementsByTagName("script")[0]
        , d = null;
      b.type = "text/css",
        b.id = "matchmediajs-test",
        c.parentNode.insertBefore(b, c),
        d = "getComputedStyle" in window && window.getComputedStyle(b, null) || b.currentStyle,
        a = {
          matchMedium: function (a) {
            var c = "@media " + a + "{ #matchmediajs-test { width: 1px; } }";
            return b.styleSheet ? b.styleSheet.cssText = c : b.textContent = c,
              "1px" === d.width
          }
        }
    }
    return function (b) {
      return {
        matches: a.matchMedium(b || "all"),
        media: b || "all"
      }
    }
  }())