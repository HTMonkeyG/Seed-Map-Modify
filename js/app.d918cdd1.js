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

Number.prototype.clamp = function (a, b) {
  return Math.min(Math.max(this, a), b)
},
  jQuery.fn.reverse = [].reverse,
  Array.prototype.remove = function (a, b) {
    var c = this.slice((b || a) + 1 || this.length);
    return this.length = 0 > a ? this.length + a : a,
      this.push.apply(this, c)
  }
  ,
  "function" != typeof String.prototype.startsWith && (String.prototype.startsWith = function (a) {
    return 0 == this.indexOf(a)
  }
    ,
    String.prototype.endsWith = function (a) {
      return -1 !== this.indexOf(a, this.length - a.length)
    }
  ),
  "function" != typeof String.prototype.trim && (String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, "")
  }
  ),
  Array.isArray || (Array.isArray = function (a) {
    return "[object Array]" === Object.prototype.toString.call(a)
  }
  ),
  Array.prototype.indexOf || (Array.prototype.indexOf = function (a) {
    for (var b = 0; b < this.length; b++)
      if (this[b] === a)
        return b;
    return -1
  }
  ),
  Object.keys || (Object.keys = function () {
    "use strict";
    var a = Object.prototype.hasOwnProperty
      , b = !{
        toString: null
      }.propertyIsEnumerable("toString")
      , c = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"]
      , d = c.length;
    return function (e) {
      if ("function" != typeof e && ("object" != typeof e || null === e))
        throw new TypeError("Object.keys called on non-object");
      var f, g, h = [];
      for (f in e)
        a.call(e, f) && h.push(f);
      if (b)
        for (g = 0; d > g; g++)
          a.call(e, c[g]) && h.push(c[g]);
      return h
    }
  }()),
  Array.prototype.filter || (Array.prototype.filter = function (a) {
    var b = this.length >>> 0;
    if ("function" != typeof a)
      throw new TypeError;
    for (var c = [], d = arguments[1], e = 0; b > e; e++)
      if (e in this) {
        var f = this[e];
        a.call(d, f, e, this) && c.push(f)
      }
    return c
  }
  ),
  Date.prototype.toISOString || (Date.prototype.toISOString = function () {
    function a(a) {
      return 10 > a ? "0" + a : a
    }
    return this.getUTCFullYear() + "-" + a(this.getUTCMonth() + 1) + "-" + a(this.getUTCDate()) + "T" + a(this.getUTCHours()) + ":" + a(this.getUTCMinutes()) + ":" + a(this.getUTCSeconds()) + "Z"
  }
  ),
  $.fn.isOnScreen = function () {
    var a = $(window)
      , b = {
        top: a.scrollTop(),
        left: a.scrollLeft()
      };
    b.right = b.left + a.width(),
      b.bottom = b.top + a.height();
    var c = this.offset();
    return c.right = c.left + this.outerWidth(),
      c.bottom = c.top + this.outerHeight(),
      !(b.right < c.left || b.left > c.right || b.bottom < c.top || b.top > c.bottom)
  }
  ,
  $.fn.enterKey = function (a) {
    return this.each(function () {
      $(this).keypress(function (b) {
        var c = b.keyCode ? b.keyCode : b.which;
        "13" == c && a.call(this, b)
      })
    })
  }
  ,
  function (a) {
    function b() { }
    for (var c, d = "assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","); c = d.pop();)
      a[c] = a[c] || b
  }(function () {
    try {
      return window.console
    } catch (a) {
      return window.console = {}
    }
  }())
  ,
  !function (a) {
    "use strict";
    var b = '[data-dismiss="alert"]'
      , c = function (c) {
        a(c).on("click", b, this.close)
      };
    c.prototype.close = function (b) {
      function c() {
        d.trigger("closed").remove()
      }
      var d, e = a(this), f = e.attr("data-target");
      f || (f = e.attr("href"),
        f = f && f.replace(/.*(?=#[^\s]*$)/, "")),
        d = a(f),
        b && b.preventDefault(),
        d.length || (d = e.hasClass("alert") ? e : e.parent()),
        d.trigger(b = a.Event("close")),
        b.isDefaultPrevented() || (d.removeClass("in"),
          a.support.transition && d.hasClass("fade") ? d.on(a.support.transition.end, c) : c())
    }
      ,
      a.fn.alert = function (b) {
        return this.each(function () {
          var d = a(this)
            , e = d.data("alert");
          e || d.data("alert", e = new c(this)),
            "string" == typeof b && e[b].call(d)
        })
      }
      ,
      a.fn.alert.Constructor = c,
      a(function () {
        a("body").on("click.alert.data-api", b, c.prototype.close)
      })
  }(window.jQuery),
  function (a) {
    "use strict";
    function b(c, d, f, g) {
      function h(a) {
        a.timeout && (i.cycleTimeout = setTimeout(function () {
          b(c, a, 0, !a.rev)
        }, a.timeout))
      }
      if (!d.busy) {
        var i = c[0].parentNode
          , j = c[d.currSlide]
          , k = c[d.nextSlide];
        if (0 !== i.cycleTimeout || f)
          if (f || !i.cyclePause) {
            d.before.length && a.each(d.before, function (a, b) {
              b.apply(k, [j, k, d, g])
            });
            var l = function () {
              e && this.style.removeAttribute("filter"),
                a.each(d.after, function (a, b) {
                  b.apply(k, [j, k, d, g])
                }),
                h(d)
            };
            d.nextSlide != d.currSlide && (d.busy = 1,
              a.fn.cycle.custom(j, k, d, l));
            var m = d.nextSlide + 1 == c.length;
            d.nextSlide = m ? 0 : d.nextSlide + 1,
              d.currSlide = m ? c.length - 1 : d.nextSlide - 1
          } else
            h(d)
      }
    }
    function c(a, c, d) {
      var e = a[0].parentNode
        , f = e.cycleTimeout;
      return f && (clearTimeout(f),
        e.cycleTimeout = 0),
        c.nextSlide = c.currSlide + d,
        c.nextSlide < 0 ? c.nextSlide = a.length - 1 : c.nextSlide >= a.length && (c.nextSlide = 0),
        b(a, c, 1, d >= 0),
        !1
    }
    var d = "Lite-1.7"
      , e = /MSIE/.test(navigator.userAgent);
    a.fn.cycle = function (d) {
      return this.each(function () {
        d = d || {},
          this.cycleTimeout && clearTimeout(this.cycleTimeout),
          this.cycleTimeout = 0,
          this.cyclePause = 0;
        var f = a(this)
          , g = d.slideExpr ? a(d.slideExpr, this) : f.find("img")
          , h = g.get();
        if (h.length < 2)
          return void window.console;
        var i = a.extend({}, a.fn.cycle.defaults, d || {}, a.metadata ? f.metadata() : a.meta ? f.data() : {})
          , j = a.isFunction(f.data) ? f.data(i.metaAttr) : null;
        j && (i = a.extend(i, j)),
          i.before = i.before ? [i.before] : [],
          i.after = i.after ? [i.after] : [],
          i.after.unshift(function () {
            i.busy = 0
          });
        var k = this.className;
        if (i.width = parseInt((k.match(/w:(\d+)/) || [])[1], 10) || i.width,
          i.height = parseInt((k.match(/h:(\d+)/) || [])[1], 10) || i.height,
          i.timeout = parseInt((k.match(/t:(\d+)/) || [])[1], 10) || i.timeout,
          "static" == f.css("position") && f.css("position", "relative"),
          i.width && f.width(i.width),
          "max" == i.height) {
          var l = function (b) {
            var c = 0;
            g.each(function () {
              var d = a(this)
                , e = d.height();
              e > c && (c = e),
                b && d.load(function () {
                  e = d.height();
                  var a = d.parents(i.identifier);
                  a.height() < e && a.height(e)
                })
            }),
              f.height(c)
          };
          l(!0),
            a(window).resize(function () {
              l(!1)
            })
        } else
          i.height && "auto" != i.height && f.height(i.height);
        var m = 0;
        g.css({
          position: "absolute",
          top: 0
        }).each(function (b) {
          a(this).css("z-index", h.length - b)
        }),
          a(h[m]).css("opacity", 1).show(),
          e && h[m].style.removeAttribute("filter"),
          i.fit && i.width && g.width(i.width),
          i.fit && i.height && "auto" != i.height && g.height(i.height),
          i.pause && f.hover(function () {
            this.cyclePause = 1
          }, function () {
            this.cyclePause = 0
          });
        var n = a.fn.cycle.transitions[i.fx];
        if (n && n(f, g, i),
          g.each(function () {
            var b = a(this);
            this.cycleH = i.fit && i.height ? i.height : b.height(),
              this.cycleW = i.fit && i.width ? i.width : b.width()
          }),
          i.cssFirst && a(g[m]).css(i.cssFirst),
          i.timeout)
          for (i.speed.constructor == String && (i.speed = {
            slow: 600,
            fast: 200
          }[i.speed] || 400),
            i.sync || (i.speed = i.speed / 2); i.timeout - i.speed < 250;)
            i.timeout += i.speed;
        i.speedIn = i.speed,
          i.speedOut = i.speed,
          i.slideCount = h.length,
          i.currSlide = m,
          i.nextSlide = 1;
        var o = g[m];
        i.before.length && i.before[0].apply(o, [o, o, i, !0]),
          i.after.length > 1 && i.after[1].apply(o, [o, o, i, !0]),
          i.click && !i.next && (i.next = i.click),
          i.next && a(i.next).unbind("click.cycle").bind("click.cycle", function () {
            return c(h, i, i.rev ? -1 : 1)
          }),
          i.prev && a(i.prev).unbind("click.cycle").bind("click.cycle", function () {
            return c(h, i, i.rev ? 1 : -1)
          }),
          i.timeout && (this.cycleTimeout = setTimeout(function () {
            b(h, i, 0, !i.rev)
          }, i.timeout + (i.delay || 0)))
      })
    }
      ,
      a.fn.cycle.custom = function (b, c, d, e) {
        var f = a(b)
          , g = a(c);
        g.css(d.cssBefore);
        var h = function () {
          g.animate(d.animIn, d.speedIn, d.easeIn, e)
        };
        f.animate(d.animOut, d.speedOut, d.easeOut, function () {
          f.css(d.cssAfter),
            d.sync || h()
        }),
          d.sync && h()
      }
      ,
      a.fn.cycle.transitions = {
        fade: function (a, b, c) {
          b.not(":eq(0)").hide(),
            c.cssBefore = {
              opacity: 0,
              display: "block"
            },
            c.cssAfter = {
              display: "none"
            },
            c.animOut = {
              opacity: 0
            },
            c.animIn = {
              opacity: 1
            }
        },
        fadeout: function (b, c, d) {
          d.before.push(function (b, c, d, e) {
            a(b).css("zIndex", d.slideCount + (e === !0 ? 1 : 0)),
              a(c).css("zIndex", d.slideCount + (e === !0 ? 0 : 1))
          }),
            c.not(":eq(0)").hide(),
            d.cssBefore = {
              opacity: 1,
              display: "block",
              zIndex: 1
            },
            d.cssAfter = {
              display: "none",
              zIndex: 0
            },
            d.animOut = {
              opacity: 0
            },
            d.animIn = {
              opacity: 1
            }
        }
      },
      a.fn.cycle.ver = function () {
        return d
      }
      ,
      a.fn.cycle.defaults = {
        animIn: {},
        animOut: {},
        fx: "fade",
        after: null,
        before: null,
        cssBefore: {},
        cssAfter: {},
        delay: 0,
        fit: 0,
        height: "auto",
        metaAttr: "cycle",
        next: null,
        pause: !1,
        prev: null,
        speed: 1e3,
        slideExpr: null,
        sync: !0,
        timeout: 4e3
      }
  }(jQuery),
  /*!
  Slimbox v2.05 - The ultimate lightweight Lightbox clone for jQuery
  (c) 2007-2013 Christophe Beyls <http://www.digitalia.be>
  MIT-style license.
  */
  function (a) {
    function b() {
      var b = E.scrollLeft()
        , c = E.width();
      a([v, A]).css("left", b + c / 2),
        q && a(u).css({
          left: b,
          top: E.scrollTop(),
          width: c,
          height: E.height()
        })
    }
    function c(c) {
      c ? a("object").add(G ? "select" : "embed").each(function (a, b) {
        H[a] = [b, b.style.visibility],
          b.style.visibility = "hidden"
      }) : (a.each(H, function (a, b) {
        b[0].style.visibility = b[1]
      }),
        H = []);
      var e = c ? "bind" : "unbind";
      E[e]("scroll resize", b),
        a(document)[e]("keydown", d)
    }
    function d(b) {
      var c = b.which
        , d = a.inArray;
      return d(c, l.closeKeys) >= 0 ? k() : d(c, l.nextKeys) >= 0 ? f() : d(c, l.previousKeys) >= 0 ? e() : null
    }
    function e() {
      return g(o)
    }
    function f() {
      return g(p)
    }
    function g(a) {
      return a >= 0 && (F = a,
        n = m[F][0],
        o = (F || (l.loop ? m.length : 0)) - 1,
        p = (F + 1) % m.length || (l.loop ? 0 : -1),
        j(),
        v.className = "lbLoading",
        I = new Image,
        I.onload = h,
        I.src = n),
        !1
    }
    function h() {
      v.className = "",
        a(w).css({
          backgroundImage: "url(" + n + ")",
          visibility: "hidden",
          display: ""
        }),
        a(x).width(I.width),
        a([x, y, z]).height(I.height),
        a(C).html(m[F][1] || ""),
        a(D).html((m.length > 1 && l.counterText || "").replace(/{x}/, F + 1).replace(/{y}/, m.length)),
        o >= 0 && (J.src = m[o][0]),
        p >= 0 && (K.src = m[p][0]),
        s = w.offsetWidth,
        t = w.offsetHeight;
      var b = Math.max(0, r - t / 2);
      v.offsetHeight != t && a(v).animate({
        height: t,
        top: b
      }, l.resizeDuration, l.resizeEasing),
        v.offsetWidth != s && a(v).animate({
          width: s,
          marginLeft: -s / 2
        }, l.resizeDuration, l.resizeEasing),
        a(v).queue(function () {
          a(A).css({
            width: s,
            top: b + t,
            marginLeft: -s / 2,
            visibility: "hidden",
            display: ""
          }),
            a(w).css({
              display: "none",
              visibility: "",
              opacity: ""
            }).fadeIn(l.imageFadeDuration, i)
        })
    }
    function i() {
      o >= 0 && a(y).show(),
        p >= 0 && a(z).show(),
        a(B).css("marginTop", -B.offsetHeight).animate({
          marginTop: 0
        }, l.captionAnimationDuration),
        A.style.visibility = ""
    }
    function j() {
      I.onload = null,
        I.src = J.src = K.src = n,
        a([v, w, B]).stop(!0),
        a([y, z, w, A]).hide()
    }
    function k() {
      return F >= 0 && (j(),
        F = o = p = -1,
        a(v).hide(),
        a(u).stop().fadeOut(l.overlayFadeDuration, c)),
        !1
    }
    var l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E = a(window), F = -1, G = !window.XMLHttpRequest, H = [], I = (document.documentElement,
      {}), J = new Image, K = new Image;
    a(function () {
      a("body").append(a([u = a('<div id="lbOverlay" />').click(k)[0], v = a('<div id="lbCenter" />')[0], A = a('<div id="lbBottomContainer" />')[0]]).css("display", "none")),
        w = a('<div id="lbImage" />').appendTo(v).append(x = a('<div style="position: relative;" />').append([y = a('<a id="lbPrevLink" href="#" />').click(e)[0], z = a('<a id="lbNextLink" href="#" />').click(f)[0]])[0])[0],
        B = a('<div id="lbBottom" />').appendTo(A).append([a('<a id="lbCloseLink" href="#" />').click(k)[0], C = a('<div id="lbCaption" />')[0], D = a('<div id="lbNumber" />')[0], a('<div style="clear: both;" />')[0]])[0]
    }),
      a.slimbox = function (d, e, f) {
        return l = a.extend({
          loop: !1,
          overlayOpacity: .8,
          overlayFadeDuration: 400,
          resizeDuration: 400,
          resizeEasing: "swing",
          initialWidth: 250,
          initialHeight: 250,
          imageFadeDuration: 400,
          captionAnimationDuration: 400,
          counterText: "Image {x} of {y}",
          closeKeys: [27, 88, 67],
          previousKeys: [37, 80],
          nextKeys: [39, 78]
        }, f),
          "string" == typeof d && (d = [[d, e]],
            e = 0),
          r = E.scrollTop() + E.height() / 2,
          s = l.initialWidth,
          t = l.initialHeight,
          a(v).css({
            top: Math.max(0, r - t / 2),
            width: s,
            height: t,
            marginLeft: -s / 2
          }).show(),
          q = G || u.currentStyle && "fixed" != u.currentStyle.position,
          q && (u.style.position = "absolute"),
          a(u).css("opacity", l.overlayOpacity).fadeIn(l.overlayFadeDuration),
          b(),
          c(1),
          m = d,
          l.loop = l.loop && m.length > 1,
          g(e)
      }
      ,
      a.fn.slimbox = function (b, c, d) {
        c = c || function (a) {
          return [a.href, a.title]
        }
          ,
          d = d || function () {
            return !0
          }
          ;
        var e = this;
        return e.unbind("click").click(function () {
          var f, g, h = this, i = 0, j = 0;
          for (f = a.grep(e, function (a, b) {
            return d.call(h, a, b)
          }),
            g = f.length; g > j; ++j)
            f[j] == h && (i = j),
              f[j] = c(f[j], j);
          return a.slimbox(f, i, b)
        })
      }
  }(jQuery),
  function () {
    function a(a) {
      var b = this;
      this.elem = a,
        this.buttons = a.find("button"),
        this.listeners = [],
        this.buttonClickedProxy = function (a) {
          $.proxy(b.buttonClicked, b)(a)
        }
        ,
        this.attach()
    }
    a.prototype.attach = function () {
      this.buttons.on("click", this.buttonClickedProxy).removeClass("active"),
        this.buttons.first().addClass("active"),
        this.elem.addClass("gh-toggle-group")
    }
      ,
      a.prototype.detach = function () {
        this.buttons.off("click", this.buttonClicked).removeClass("active"),
          this.elem.removeClass("gh-toggle-group")
      }
      ,
      a.prototype.setActive = function (a) {
        this.buttons.removeClass("active"),
          this.buttons.filter("#" + a).addClass("active")
      }
      ,
      a.prototype.getActive = function () {
        return this.buttons.filter(".active").attr("id")
      }
      ,
      a.prototype.addListener = function (a) {
        this.listeners.push(a)
      }
      ,
      a.prototype.removeListener = function (a) {
        var b = this.listeners.indexOf(a);
        0 > b || this.listeners.splice(b, 1)
      }
      ,
      a.prototype.removeAllListeners = function () {
        this.listeners = []
      }
      ,
      a.prototype.buttonClicked = function (a) {
        var b = a.currentTarget.id
          , c = this.getActive();
        if (c !== b) {
          this.setActive(b);
          for (var d = 0; d < this.listeners.length; d++)
            this.listeners[d](b, a.target)
        }
      }
      ,
      $.fn.buttonsToRadios = function (b, c) {
        var d = arguments
          , e = this.data("plugin_buttonsToRadios")
          , f = "undefined" != typeof e && null !== e;
        if (0 !== d.length || f)
          if (1 === d.length && "string" == typeof d[0] && f) {
            if ("get" === b)
              return e.getActive();
            "unbindAll" === b ? e.removeAllListeners() : "detach" === b && (e.detach(),
              this.removeData("plugin_buttonsToRadios"))
          } else
            2 === d.length && "string" == typeof d[0] && f && ("set" === b && "string" == typeof c ? e.setActive(c) : "onChange" === b && "function" == typeof c ? e.addListener(c) : "unbindOnChange" === b && "function" == typeof c && e.removeListener(c));
        else
          this.data("plugin_buttonsToRadios", new a(this))
      }
  }(),
  $(document).ready(function () {
    var a = getLocale();
    $.ajaxSetup({
      store: !1
    }),
      $(".gallery").each(function () {
        $(this).cycle({
          height: "max",
          delay: Math.floor(4e3 * Math.random()),
          timeout: 4750 + Math.floor(1e3 * Math.random()),
          before: function () {
            $(this).parents(".gallery").parent().find(".gallerycaption").html(this.alt ? this.alt : "&nbsp;")
          },
          identifier: ".gallery"
        })
      });
    var b = "Image {x} of {y}";
    "de" === a && (b = "Bild {x} von {y}"),
      /android|iphone|ipod|series60|symbian|windows ce|blackberry/i.test(navigator.userAgent) || jQuery(function (a) {
        a("a[data-rel^='lightbox']").slimbox({
          loop: !0,
          counterText: b
        }, null, function (a) {
          return this == a || this.attributes["data-rel"].value.length > 8 && this.attributes["data-rel"].value == a.attributes["data-rel"].value
        })
      });
    var c = $("#disqus_thread")
      , d = $("#disqus_notice")
      , e = c.find(".disqus-loader");
    if (c.length > 0) {
      var f = !1;
      window.__cbcof(function (a) {
        return a.blocked === !0 || a.gdpr === !1 || a.tcData && a.tcData.purpose.consents[28] && a.tcData.purpose.consents[29]
      }, function () {
        f = !0;
        var a = document.createElement("script");
        a.type = "text/javascript",
          a.async = !0,
          a.src = "//" + disqus_shortname + ".disqus.com/embed.js",
          (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(a),
          d.css("display", "none")
      }),
        setTimeout(function () {
          f || (d.css("display", "flex"),
            e.css("display", "none"))
        }, 13e3)
    }
  });
var cb_msg = function () {
  function a(a) {
    for (var b = a.split("."), c = cb_strings, d = 0; d < b.length; d++) {
      if ("undefined" == typeof c[b[d]])
        return "";
      c = c[b[d]]
    }
    return c
  }
  var b = ""
    , c = {
      setNamespace: function (a) {
        b = a
      },
      t: function (c) {
        if ("string" != typeof c || c.length < 1)
          return "";
        if (b.length > 0) {
          var d = a(b + "." + c);
          if (d.length > 0)
            return d
        }
        return a(c)
      }
    };
  return c
}()
  , getLocale = function () {
    return "en_us"
  }
  , getSiteDomain = function () {
    return "de" === getLocale() ? "chunkbase.de" : "chunkbase.com"
  };
!function () {
  function a() {
    var a = c.prop("checked");
    e.each(function (b, c) {
      var d = $(c);
      return a ? void (d.data("supports-bedrock") ? d.show() : d.hide()) : void d.show()
    })
  }
  var b, c = $("#bedrock-filter"), d = "CB_APPS_BEDROCK_FILTER", e = $(".overview-thumbs .modules li");
  try {
    b = !!JSON.parse(localStorage.getItem(d))
  } catch (f) { }
  null != b && c.prop("checked", b),
    c.change(function () {
      var b = c.prop("checked");
      localStorage.setItem(d, b),
        a()
    }),
    a()
}();
