function deepEqual(a, b) {
  if ("object" == typeof a && null != a && "object" == typeof b && null != b) {
    var c = [0, 0];
    for (var d in a)
      c[0]++;
    for (var d in b)
      c[1]++;
    if (c[0] - c[1] !== 0)
      return !1;
    for (var d in a)
      if (!(d in b && deepEqual(a[d], b[d])))
        return !1;
    for (var d in b)
      if (!(d in a && deepEqual(b[d], a[d])))
        return !1;
    return !0
  }
  return a === b
}
function __CB__debounce(a, b) {
  var c;
  return function () {
    clearTimeout(c);
    var d = arguments;
    c = setTimeout(function () {
      a.apply(this, d)
    }, b || 1)
  }
}
Math.imul || (Math.imul = function (a, b) {
  b |= 0;
  var c = (4194303 & a) * b;
  return 4290772992 & a && (c += (4290772992 & a) * b | 0),
    0 | c
}
),
  $.fn.cb_flashRed = function () {
    var a = this;
    a.addClass("errorflash"),
      setTimeout(function () {
        a.removeClass("errorflash")
      }, 1500)
  }
  ,
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
  /*!
  * jQuery hashchange event - v1.3 - 7/21/2010 - Custom Modification for $.browser
  * http://benalman.com/projects/jquery-hashchange-plugin/
  *
  * Copyright (c) 2010 "Cowboy" Ben Alman
  * Dual licensed under the MIT and GPL licenses.
  * http://benalman.com/about/license/
  */
  function (a, b, c) {
    function d(a) {
      return a = a || location.href,
        "#" + a.replace(/^[^#]*#?(.*)$/, "$1")
    }
    var e, f = "hashchange", g = document, h = a.event.special, i = g.documentMode, j = "on" + f in b && (i === c || i > 7);
    a.fn[f] = function (a) {
      return a ? this.bind(f, a) : this.trigger(f)
    }
      ,
      a.fn[f].delay = 50,
      h[f] = a.extend(h[f], {
        setup: function () {
          return j ? !1 : void a(e.start)
        },
        teardown: function () {
          return j ? !1 : void a(e.stop)
        }
      }),
      e = function () {
        function e() {
          var c = d()
            , g = n(k);
          c !== k ? (m(k = c, g),
            a(b).trigger(f)) : g !== k && (location.href = location.href.replace(/#.*/, "") + g),
            h = setTimeout(e, a.fn[f].delay)
        }
        var h, i = {}, k = d(), l = function (a) {
          return a
        }, m = l, n = l;
        return i.start = function () {
          h || e()
        }
          ,
          i.stop = function () {
            h && clearTimeout(h),
              h = c
          }
          ,
          !a.support.boxModel && !j && function () {
            var b, c;
            i.start = function () {
              b || (c = a.fn[f].src,
                c = c && c + d(),
                b = a('<iframe tabindex="-1" title="empty"/>').hide().one("load", function () {
                  c || m(d()),
                    e()
                }).attr("src", c || "javascript:0").insertAfter("body")[0].contentWindow,
                g.onpropertychange = function () {
                  try {
                    "title" === event.propertyName && (b.document.title = g.title)
                  } catch (a) { }
                }
              )
            }
              ,
              i.stop = l,
              n = function () {
                return d(b.location.href)
              }
              ,
              m = function (c, d) {
                var e = b.document
                  , h = a.fn[f].domain;
                c !== d && (e.title = g.title,
                  e.open(),
                  h && e.write('<script>document.domain="' + h + '"</script>'),
                  e.close(),
                  b.location.hash = c)
              }
          }(),
          i
      }()
  }(jQuery, this),
  !function (a) {
    "use strict";
    var b = function (a, b) {
      this.init("tooltip", a, b)
    };
    b.prototype = {
      constructor: b,
      init: function (b, c, d) {
        var e, f, g, h, i;
        for (this.type = b,
          this.$element = a(c),
          this.options = this.getOptions(d),
          this.enabled = !0,
          g = this.options.trigger.split(" "),
          i = g.length; i--;)
          h = g[i],
            "click" == h ? this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this)) : "manual" != h && (e = "hover" == h ? "mouseenter" : "focus",
              f = "hover" == h ? "mouseleave" : "blur",
              this.$element.on(e + "." + this.type, this.options.selector, a.proxy(this.enter, this)),
              this.$element.on(f + "." + this.type, this.options.selector, a.proxy(this.leave, this)));
        this.options.selector ? this._options = a.extend({}, this.options, {
          trigger: "manual",
          selector: ""
        }) : this.fixTitle()
      },
      getOptions: function (b) {
        return b = a.extend({}, a.fn[this.type].defaults, this.$element.data(), b),
          b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
          }),
          b
      },
      enter: function (b) {
        var c, d = a.fn[this.type].defaults, e = {};
        return this._options && a.each(this._options, function (a, b) {
          d[a] != b && (e[a] = b)
        }, this),
          c = a(b.currentTarget)[this.type](e).data(this.type),
          c.options.delay && c.options.delay.show ? (clearTimeout(this.timeout),
            c.hoverState = "in",
            void (this.timeout = setTimeout(function () {
              "in" == c.hoverState && c.show()
            }, c.options.delay.show))) : c.show()
      },
      leave: function (b) {
        var c = a(b.currentTarget)[this.type](this._options).data(this.type);
        return this.timeout && clearTimeout(this.timeout),
          c.options.delay && c.options.delay.hide ? (c.hoverState = "out",
            void (this.timeout = setTimeout(function () {
              "out" == c.hoverState && c.hide()
            }, c.options.delay.hide))) : c.hide()
      },
      show: function () {
        var b, c, d, e, f, g, h = a.Event("show");
        if (this.hasContent() && this.enabled) {
          if (this.$element.trigger(h),
            h.isDefaultPrevented())
            return;
          switch (b = this.tip(),
          this.setContent(),
          this.options.animation && b.addClass("fade"),
          f = "function" == typeof this.options.placement ? this.options.placement.call(this, b[0], this.$element[0]) : this.options.placement,
          b.detach().css({
            top: 0,
            left: 0,
            display: "block"
          }),
          this.options.container ? b.appendTo(this.options.container) : b.insertAfter(this.$element),
          c = this.getPosition(),
          d = b[0].offsetWidth,
          e = b[0].offsetHeight,
          f) {
            case "bottom":
              g = {
                top: c.top + c.height,
                left: c.left + c.width / 2 - d / 2
              };
              break;
            case "top":
              g = {
                top: c.top - e,
                left: c.left + c.width / 2 - d / 2
              };
              break;
            case "left":
              g = {
                top: c.top + c.height / 2 - e / 2,
                left: c.left - d
              };
              break;
            case "right":
              g = {
                top: c.top + c.height / 2 - e / 2,
                left: c.left + c.width
              }
          }
          this.applyPlacement(g, f),
            this.$element.trigger("shown")
        }
      },
      applyPlacement: function (a, b) {
        var c, d, e, f, g = this.tip(), h = g[0].offsetWidth, i = g[0].offsetHeight;
        g.offset(a).addClass(b).addClass("in"),
          c = g[0].offsetWidth,
          d = g[0].offsetHeight,
          "top" == b && d != i && (a.top = a.top + i - d,
            f = !0),
          "bottom" == b || "top" == b ? (e = 0,
            a.left < 0 && (e = -2 * a.left,
              a.left = 0,
              g.offset(a),
              c = g[0].offsetWidth,
              d = g[0].offsetHeight),
            this.replaceArrow(e - h + c, c, "left")) : this.replaceArrow(d - i, d, "top"),
          f && g.offset(a)
      },
      replaceArrow: function (a, b, c) {
        this.arrow().css(c, a ? 50 * (1 - a / b) + "%" : "")
      },
      setContent: function () {
        var a = this.tip()
          , b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b),
          a.removeClass("fade in top bottom left right")
      },
      hide: function () {
        function b() {
          var b = setTimeout(function () {
            c.off(a.support.transition.end).detach()
          }, 500);
          c.one(a.support.transition.end, function () {
            clearTimeout(b),
              c.detach()
          })
        }
        var c = this.tip()
          , d = a.Event("hide");
        return this.$element.trigger(d),
          d.isDefaultPrevented() ? void 0 : (c.removeClass("in"),
            a.support.transition && this.$tip.hasClass("fade") ? b() : c.detach(),
            this.$element.trigger("hidden"),
            this)
      },
      fixTitle: function () {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
      },
      hasContent: function () {
        return this.getTitle()
      },
      getPosition: function () {
        var b = this.$element[0];
        return a.extend({}, "function" == typeof b.getBoundingClientRect ? b.getBoundingClientRect() : {
          width: b.offsetWidth,
          height: b.offsetHeight
        }, this.$element.offset())
      },
      getTitle: function () {
        var a, b = this.$element, c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
      },
      tip: function () {
        return this.$tip = this.$tip || a(this.options.template)
      },
      arrow: function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
      },
      validate: function () {
        this.$element[0].parentNode || (this.hide(),
          this.$element = null,
          this.options = null)
      },
      enable: function () {
        this.enabled = !0
      },
      disable: function () {
        this.enabled = !1
      },
      toggleEnabled: function () {
        this.enabled = !this.enabled
      },
      toggle: function (b) {
        var c = b ? a(b.currentTarget)[this.type](this._options).data(this.type) : this;
        c.tip().hasClass("in") ? c.hide() : c.show()
      },
      destroy: function () {
        this.hide().$element.off("." + this.type).removeData(this.type)
      }
    };
    var c = a.fn.tooltip;
    a.fn.tooltip = function (c) {
      return this.each(function () {
        var d = a(this)
          , e = d.data("tooltip")
          , f = "object" == typeof c && c;
        e || d.data("tooltip", e = new b(this, f)),
          "string" == typeof c && e[c]()
      })
    }
      ,
      a.fn.tooltip.Constructor = b,
      a.fn.tooltip.defaults = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1
      },
      a.fn.tooltip.noConflict = function () {
        return a.fn.tooltip = c,
          this
      }
  }(window.jQuery),
  !function (a) {
    "use strict";
    var b = function (a, b) {
      this.init("popover", a, b)
    };
    b.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype, {
      constructor: b,
      setContent: function () {
        var a = this.tip()
          , b = this.getTitle()
          , c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b),
          a.find(".popover-content")[this.options.html ? "html" : "text"](c),
          a.removeClass("fade top bottom left right in")
      },
      hasContent: function () {
        return this.getTitle() || this.getContent()
      },
      getContent: function () {
        var a, b = this.$element, c = this.options;
        return a = ("function" == typeof c.content ? c.content.call(b[0]) : c.content) || b.attr("data-content")
      },
      tip: function () {
        return this.$tip || (this.$tip = a(this.options.template)),
          this.$tip
      },
      destroy: function () {
        this.hide().$element.off("." + this.type).removeData(this.type)
      }
    });
    var c = a.fn.popover;
    a.fn.popover = function (c) {
      return this.each(function () {
        var d = a(this)
          , e = d.data("popover")
          , f = "object" == typeof c && c;
        e || d.data("popover", e = new b(this, f)),
          "string" == typeof c && e[c]()
      })
    }
      ,
      a.fn.popover.Constructor = b,
      a.fn.popover.defaults = a.extend({}, a.fn.tooltip.defaults, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
      }),
      a.fn.popover.noConflict = function () {
        return a.fn.popover = c,
          this
      }
  }(window.jQuery),
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
  }()),
  !function (a, b) {
    "object" == typeof exports && "undefined" != typeof module ? b(exports) : "function" == typeof define && define.amd ? define(["exports"], b) : b((a = a || self).Popper = {})
  }(this, function (a) {
    function b(a) {
      return {
        width: (a = a.getBoundingClientRect()).width,
        height: a.height,
        top: a.top,
        right: a.right,
        bottom: a.bottom,
        left: a.left,
        x: a.left,
        y: a.top
      }
    }
    function c(a) {
      return "[object Window]" !== a.toString() ? (a = a.ownerDocument) ? a.defaultView : window : a
    }
    function d(a) {
      return {
        scrollLeft: (a = c(a)).pageXOffset,
        scrollTop: a.pageYOffset
      }
    }
    function e(a) {
      return a instanceof c(a).Element || a instanceof Element
    }
    function f(a) {
      return a instanceof c(a).HTMLElement || a instanceof HTMLElement
    }
    function g(a) {
      return a ? (a.nodeName || "").toLowerCase() : null
    }
    function h(a) {
      return (e(a) ? a.ownerDocument : a.document).documentElement
    }
    function i(a) {
      return b(h(a)).left + d(a).scrollLeft
    }
    function j(a) {
      return c(a).getComputedStyle(a)
    }
    function k(a) {
      return a = j(a),
        /auto|scroll|overlay|hidden/.test(a.overflow + a.overflowY + a.overflowX)
    }
    function l(a, e, j) {
      void 0 === j && (j = !1);
      var l = h(e);
      a = b(a);
      var m = f(e)
        , n = {
          scrollLeft: 0,
          scrollTop: 0
        }
        , o = {
          x: 0,
          y: 0
        };
      return (m || !m && !j) && (("body" !== g(e) || k(l)) && (n = e !== c(e) && f(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
      } : d(e)),
        f(e) ? ((o = b(e)).x += e.clientLeft,
          o.y += e.clientTop) : l && (o.x = i(l))),
      {
        x: a.left + n.scrollLeft - o.x,
        y: a.top + n.scrollTop - o.y,
        width: a.width,
        height: a.height
      }
    }
    function m(a) {
      return {
        x: a.offsetLeft,
        y: a.offsetTop,
        width: a.offsetWidth,
        height: a.offsetHeight
      }
    }
    function n(a) {
      return "html" === g(a) ? a : a.assignedSlot || a.parentNode || a.host || h(a)
    }
    function o(a, b) {
      void 0 === b && (b = []);
      var d = function h(a) {
        return 0 <= ["html", "body", "#document"].indexOf(g(a)) ? a.ownerDocument.body : f(a) && k(a) ? a : h(n(a))
      }(a);
      a = "body" === g(d);
      var e = c(d);
      return d = a ? [e].concat(e.visualViewport || [], k(d) ? d : []) : d,
        b = b.concat(d),
        a ? b : b.concat(o(n(d)))
    }
    function p(a) {
      if (!f(a) || "fixed" === j(a).position)
        return null;
      if (a = a.offsetParent) {
        var b = h(a);
        if ("body" === g(a) && "static" === j(a).position && "static" !== j(b).position)
          return b
      }
      return a
    }
    function q(a) {
      for (var b = c(a), d = p(a); d && 0 <= ["table", "td", "th"].indexOf(g(d)) && "static" === j(d).position;)
        d = p(d);
      if (d && "body" === g(d) && "static" === j(d).position)
        return b;
      if (!d)
        a: {
          for (a = n(a); f(a) && 0 > ["html", "body"].indexOf(g(a));) {
            if ("none" !== (d = j(a)).transform || "none" !== d.perspective || d.willChange && "auto" !== d.willChange) {
              d = a;
              break a
            }
            a = a.parentNode
          }
          d = null
        }
      return d || b
    }
    function r(a) {
      var b = new Map
        , c = new Set
        , d = [];
      return a.forEach(function (a) {
        b.set(a.name, a)
      }),
        a.forEach(function (a) {
          c.has(a.name) || function e(a) {
            c.add(a.name),
              [].concat(a.requires || [], a.requiresIfExists || []).forEach(function (a) {
                c.has(a) || (a = b.get(a)) && e(a)
              }),
              d.push(a)
          }(a)
        }),
        d
    }
    function s(a) {
      var b;
      return function () {
        return b || (b = new Promise(function (c) {
          Promise.resolve().then(function () {
            b = void 0,
              c(a())
          })
        }
        )),
          b
      }
    }
    function t(a) {
      return a.split("-")[0]
    }
    function u(a, b) {
      var c = !(!b.getRootNode || !b.getRootNode().host);
      if (a.contains(b))
        return !0;
      if (c)
        do {
          if (b && a.isSameNode(b))
            return !0;
          b = b.parentNode || b.host
        } while (b);
      return !1
    }
    function v(a) {
      return Object.assign(Object.assign({}, a), {}, {
        left: a.x,
        top: a.y,
        right: a.x + a.width,
        bottom: a.y + a.height
      })
    }
    function w(a, e) {
      if ("viewport" === e) {
        e = c(a);
        var g = h(a);
        e = e.visualViewport;
        var k = g.clientWidth;
        g = g.clientHeight;
        var l = 0
          , m = 0;
        e && (k = e.width,
          g = e.height,
          /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (l = e.offsetLeft,
            m = e.offsetTop)),
          a = v(a = {
            width: k,
            height: g,
            x: l + i(a),
            y: m
          })
      } else
        f(e) ? ((a = b(e)).top += e.clientTop,
          a.left += e.clientLeft,
          a.bottom = a.top + e.clientHeight,
          a.right = a.left + e.clientWidth,
          a.width = e.clientWidth,
          a.height = e.clientHeight,
          a.x = a.left,
          a.y = a.top) : (m = h(a),
            a = h(m),
            l = d(m),
            e = m.ownerDocument.body,
            k = Math.max(a.scrollWidth, a.clientWidth, e ? e.scrollWidth : 0, e ? e.clientWidth : 0),
            g = Math.max(a.scrollHeight, a.clientHeight, e ? e.scrollHeight : 0, e ? e.clientHeight : 0),
            m = -l.scrollLeft + i(m),
            l = -l.scrollTop,
            "rtl" === j(e || a).direction && (m += Math.max(a.clientWidth, e ? e.clientWidth : 0) - k),
            a = v({
              width: k,
              height: g,
              x: m,
              y: l
            }));
      return a
    }
    function x(a, b, c) {
      return b = "clippingParents" === b ? function (a) {
        var b = o(n(a))
          , c = 0 <= ["absolute", "fixed"].indexOf(j(a).position) && f(a) ? q(a) : a;
        return e(c) ? b.filter(function (a) {
          return e(a) && u(a, c) && "body" !== g(a)
        }) : []
      }(a) : [].concat(b),
        (c = (c = [].concat(b, [c])).reduce(function (b, c) {
          return c = w(a, c),
            b.top = Math.max(c.top, b.top),
            b.right = Math.min(c.right, b.right),
            b.bottom = Math.min(c.bottom, b.bottom),
            b.left = Math.max(c.left, b.left),
            b
        }, w(a, c[0]))).width = c.right - c.left,
        c.height = c.bottom - c.top,
        c.x = c.left,
        c.y = c.top,
        c
    }
    function y(a) {
      return 0 <= ["top", "bottom"].indexOf(a) ? "x" : "y"
    }
    function z(a) {
      var b = a.reference
        , c = a.element
        , d = (a = a.placement) ? t(a) : null;
      a = a ? a.split("-")[1] : null;
      var e = b.x + b.width / 2 - c.width / 2
        , f = b.y + b.height / 2 - c.height / 2;
      switch (d) {
        case "top":
          e = {
            x: e,
            y: b.y - c.height
          };
          break;
        case "bottom":
          e = {
            x: e,
            y: b.y + b.height
          };
          break;
        case "right":
          e = {
            x: b.x + b.width,
            y: f
          };
          break;
        case "left":
          e = {
            x: b.x - c.width,
            y: f
          };
          break;
        default:
          e = {
            x: b.x,
            y: b.y
          }
      }
      if (null != (d = d ? y(d) : null))
        switch (f = "y" === d ? "height" : "width",
        a) {
          case "start":
            e[d] = Math.floor(e[d]) - Math.floor(b[f] / 2 - c[f] / 2);
            break;
          case "end":
            e[d] = Math.floor(e[d]) + Math.ceil(b[f] / 2 - c[f] / 2)
        }
      return e
    }
    function A(a) {
      return Object.assign(Object.assign({}, {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }), a)
    }
    function B(a, b) {
      return b.reduce(function (b, c) {
        return b[c] = a,
          b
      }, {})
    }
    function C(a, c) {
      void 0 === c && (c = {});
      var d = c;
      c = void 0 === (c = d.placement) ? a.placement : c;
      var f = d.boundary
        , g = void 0 === f ? "clippingParents" : f
        , i = void 0 === (f = d.rootBoundary) ? "viewport" : f;
      f = void 0 === (f = d.elementContext) ? "popper" : f;
      var j = d.altBoundary
        , k = void 0 !== j && j;
      d = A("number" != typeof (d = void 0 === (d = d.padding) ? 0 : d) ? d : B(d, K));
      var l = a.elements.reference;
      j = a.rects.popper,
        g = x(e(k = a.elements[k ? "popper" === f ? "reference" : "popper" : f]) ? k : k.contextElement || h(a.elements.popper), g, i),
        k = z({
          reference: i = b(l),
          element: j,
          strategy: "absolute",
          placement: c
        }),
        j = v(Object.assign(Object.assign({}, j), k)),
        i = "popper" === f ? j : i;
      var m = {
        top: g.top - i.top + d.top,
        bottom: i.bottom - g.bottom + d.bottom,
        left: g.left - i.left + d.left,
        right: i.right - g.right + d.right
      };
      if (a = a.modifiersData.offset,
        "popper" === f && a) {
        var n = a[c];
        Object.keys(m).forEach(function (a) {
          var b = 0 <= ["right", "bottom"].indexOf(a) ? 1 : -1
            , c = 0 <= ["top", "bottom"].indexOf(a) ? "y" : "x";
          m[a] += n[c] * b
        })
      }
      return m
    }
    function D() {
      for (var a = arguments.length, b = Array(a), c = 0; a > c; c++)
        b[c] = arguments[c];
      return !b.some(function (a) {
        return !(a && "function" == typeof a.getBoundingClientRect)
      })
    }
    function E(a) {
      void 0 === a && (a = {});
      var b = a.defaultModifiers
        , c = void 0 === b ? [] : b
        , d = void 0 === (a = a.defaultOptions) ? O : a;
      return function (a, b, f) {
        function g() {
          i.forEach(function (a) {
            return a()
          }),
            i = []
        }
        void 0 === f && (f = d);
        var h = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign(Object.assign({}, O), d),
          modifiersData: {},
          elements: {
            reference: a,
            popper: b
          },
          attributes: {},
          styles: {}
        }
          , i = []
          , j = !1
          , k = {
            state: h,
            setOptions: function (f) {
              return g(),
                h.options = Object.assign(Object.assign(Object.assign({}, d), h.options), f),
                h.scrollParents = {
                  reference: e(a) ? o(a) : a.contextElement ? o(a.contextElement) : [],
                  popper: o(b)
                },
                f = function (a) {
                  var b = r(a);
                  return N.reduce(function (a, c) {
                    return a.concat(b.filter(function (a) {
                      return a.phase === c
                    }))
                  }, [])
                }(function (a) {
                  var b = a.reduce(function (a, b) {
                    var c = a[b.name];
                    return a[b.name] = c ? Object.assign(Object.assign(Object.assign({}, c), b), {}, {
                      options: Object.assign(Object.assign({}, c.options), b.options),
                      data: Object.assign(Object.assign({}, c.data), b.data)
                    }) : b,
                      a
                  }, {});
                  return Object.keys(b).map(function (a) {
                    return b[a]
                  })
                }([].concat(c, h.options.modifiers))),
                h.orderedModifiers = f.filter(function (a) {
                  return a.enabled
                }),
                h.orderedModifiers.forEach(function (a) {
                  var b = a.name
                    , c = a.options;
                  c = void 0 === c ? {} : c,
                    "function" == typeof (a = a.effect) && (b = a({
                      state: h,
                      name: b,
                      instance: k,
                      options: c
                    }),
                      i.push(b || function () { }
                      ))
                }),
                k.update()
            },
            forceUpdate: function () {
              if (!j) {
                var a = h.elements
                  , b = a.reference;
                if (D(b, a = a.popper))
                  for (h.rects = {
                    reference: l(b, q(a), "fixed" === h.options.strategy),
                    popper: m(a)
                  },
                    h.reset = !1,
                    h.placement = h.options.placement,
                    h.orderedModifiers.forEach(function (a) {
                      return h.modifiersData[a.name] = Object.assign({}, a.data)
                    }),
                    b = 0; b < h.orderedModifiers.length; b++)
                    if (!0 === h.reset)
                      h.reset = !1,
                        b = -1;
                    else {
                      var c = h.orderedModifiers[b];
                      a = c.fn;
                      var d = c.options;
                      d = void 0 === d ? {} : d,
                        c = c.name,
                        "function" == typeof a && (h = a({
                          state: h,
                          options: d,
                          name: c,
                          instance: k
                        }) || h)
                    }
              }
            },
            update: s(function () {
              return new Promise(function (a) {
                k.forceUpdate(),
                  a(h)
              }
              )
            }),
            destroy: function () {
              g(),
                j = !0
            }
          };
        return D(a, b) ? (k.setOptions(f).then(function (a) {
          !j && f.onFirstUpdate && f.onFirstUpdate(a)
        }),
          k) : k
      }
    }
    function F(a) {
      var b, d = a.popper, e = a.popperRect, f = a.placement, g = a.offsets, i = a.position, j = a.gpuAcceleration, k = a.adaptive, l = window.devicePixelRatio || 1;
      a = Math.round(g.x * l) / l || 0,
        l = Math.round(g.y * l) / l || 0;
      var m = g.hasOwnProperty("x");
      g = g.hasOwnProperty("y");
      var n, o = "left", p = "top", r = window;
      if (k) {
        var s = q(d);
        s === c(d) && (s = h(d)),
          "top" === f && (p = "bottom",
            l -= s.clientHeight - e.height,
            l *= j ? 1 : -1),
          "left" === f && (o = "right",
            a -= s.clientWidth - e.width,
            a *= j ? 1 : -1)
      }
      return d = Object.assign({
        position: i
      }, k && Q),
        j ? Object.assign(Object.assign({}, d), {}, ((n = {})[p] = g ? "0" : "",
          n[o] = m ? "0" : "",
          n.transform = 2 > (r.devicePixelRatio || 1) ? "translate(" + a + "px, " + l + "px)" : "translate3d(" + a + "px, " + l + "px, 0)",
          n)) : Object.assign(Object.assign({}, d), {}, ((b = {})[p] = g ? l + "px" : "",
            b[o] = m ? a + "px" : "",
            b.transform = "",
            b))
    }
    function G(a) {
      return a.replace(/left|right|bottom|top/g, function (a) {
        return R[a]
      })
    }
    function H(a) {
      return a.replace(/start|end/g, function (a) {
        return S[a]
      })
    }
    function I(a, b, c) {
      return void 0 === c && (c = {
        x: 0,
        y: 0
      }),
      {
        top: a.top - b.height - c.y,
        right: a.right - b.width + c.x,
        bottom: a.bottom - b.height + c.y,
        left: a.left - b.width - c.x
      }
    }
    function J(a) {
      return ["top", "right", "bottom", "left"].some(function (b) {
        return 0 <= a[b]
      })
    }
    var K = ["top", "bottom", "right", "left"]
      , L = K.reduce(function (a, b) {
        return a.concat([b + "-start", b + "-end"])
      }, [])
      , M = [].concat(K, ["auto"]).reduce(function (a, b) {
        return a.concat([b, b + "-start", b + "-end"])
      }, [])
      , N = "beforeRead read afterRead beforeMain main afterMain beforeWrite write afterWrite".split(" ")
      , O = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
      }
      , P = {
        passive: !0
      }
      , Q = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
      }
      , R = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
      }
      , S = {
        start: "end",
        end: "start"
      }
      , T = [{
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function () { },
        effect: function (a) {
          var b = a.state
            , d = a.instance
            , e = (a = a.options).scroll
            , f = void 0 === e || e
            , g = void 0 === (a = a.resize) || a
            , h = c(b.elements.popper)
            , i = [].concat(b.scrollParents.reference, b.scrollParents.popper);
          return f && i.forEach(function (a) {
            a.addEventListener("scroll", d.update, P)
          }),
            g && h.addEventListener("resize", d.update, P),
            function () {
              f && i.forEach(function (a) {
                a.removeEventListener("scroll", d.update, P)
              }),
                g && h.removeEventListener("resize", d.update, P)
            }
        },
        data: {}
      }, {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function (a) {
          var b = a.state;
          b.modifiersData[a.name] = z({
            reference: b.rects.reference,
            element: b.rects.popper,
            strategy: "absolute",
            placement: b.placement
          })
        },
        data: {}
      }, {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function (a) {
          var b = a.state
            , c = a.options;
          a = void 0 === (a = c.gpuAcceleration) || a,
            c = void 0 === (c = c.adaptive) || c,
            a = {
              placement: t(b.placement),
              popper: b.elements.popper,
              popperRect: b.rects.popper,
              gpuAcceleration: a
            },
            null != b.modifiersData.popperOffsets && (b.styles.popper = Object.assign(Object.assign({}, b.styles.popper), F(Object.assign(Object.assign({}, a), {}, {
              offsets: b.modifiersData.popperOffsets,
              position: b.options.strategy,
              adaptive: c
            })))),
            null != b.modifiersData.arrow && (b.styles.arrow = Object.assign(Object.assign({}, b.styles.arrow), F(Object.assign(Object.assign({}, a), {}, {
              offsets: b.modifiersData.arrow,
              position: "absolute",
              adaptive: !1
            })))),
            b.attributes.popper = Object.assign(Object.assign({}, b.attributes.popper), {}, {
              "data-popper-placement": b.placement
            })
        },
        data: {}
      }, {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function (a) {
          var b = a.state;
          Object.keys(b.elements).forEach(function (a) {
            var c = b.styles[a] || {}
              , d = b.attributes[a] || {}
              , e = b.elements[a];
            f(e) && g(e) && (Object.assign(e.style, c),
              Object.keys(d).forEach(function (a) {
                var b = d[a];
                !1 === b ? e.removeAttribute(a) : e.setAttribute(a, !0 === b ? "" : b)
              }))
          })
        },
        effect: function (a) {
          var b = a.state
            , c = {
              popper: {
                position: b.options.strategy,
                left: "0",
                top: "0",
                margin: "0"
              },
              arrow: {
                position: "absolute"
              },
              reference: {}
            };
          return Object.assign(b.elements.popper.style, c.popper),
            b.elements.arrow && Object.assign(b.elements.arrow.style, c.arrow),
            function () {
              Object.keys(b.elements).forEach(function (a) {
                var d = b.elements[a]
                  , e = b.attributes[a] || {};
                a = Object.keys(b.styles.hasOwnProperty(a) ? b.styles[a] : c[a]).reduce(function (a, b) {
                  return a[b] = "",
                    a
                }, {}),
                  f(d) && g(d) && (Object.assign(d.style, a),
                    Object.keys(e).forEach(function (a) {
                      d.removeAttribute(a)
                    }))
              })
            }
        },
        requires: ["computeStyles"]
      }, {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function (a) {
          var b = a.state
            , c = a.name
            , d = void 0 === (a = a.options.offset) ? [0, 0] : a
            , e = (a = M.reduce(function (a, c) {
              var e = b.rects
                , f = t(c)
                , g = 0 <= ["left", "top"].indexOf(f) ? -1 : 1
                , h = "function" == typeof d ? d(Object.assign(Object.assign({}, e), {}, {
                  placement: c
                })) : d;
              return e = (e = h[0]) || 0,
                h = ((h = h[1]) || 0) * g,
                f = 0 <= ["left", "right"].indexOf(f) ? {
                  x: h,
                  y: e
                } : {
                  x: e,
                  y: h
                },
                a[c] = f,
                a
            }, {}))[b.placement]
            , f = e.x;
          e = e.y,
            null != b.modifiersData.popperOffsets && (b.modifiersData.popperOffsets.x += f,
              b.modifiersData.popperOffsets.y += e),
            b.modifiersData[c] = a
        }
      }, {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function (a) {
          var b = a.state
            , c = a.options;
          if (a = a.name,
            !b.modifiersData[a]._skip) {
            var d = c.mainAxis;
            d = void 0 === d || d;
            var e = c.altAxis;
            e = void 0 === e || e;
            var f = c.fallbackPlacements
              , g = c.padding
              , h = c.boundary
              , i = c.rootBoundary
              , j = c.altBoundary
              , k = c.flipVariations
              , l = void 0 === k || k
              , m = c.allowedAutoPlacements;
            k = t(c = b.options.placement),
              f = f || (k !== c && l ? function (a) {
                if ("auto" === t(a))
                  return [];
                var b = G(a);
                return [H(a), b, H(b)]
              }(c) : [G(c)]);
            var n = [c].concat(f).reduce(function (a, c) {
              return a.concat("auto" === t(c) ? function (a, b) {
                void 0 === b && (b = {});
                var c = b.boundary
                  , d = b.rootBoundary
                  , e = b.padding
                  , f = b.flipVariations
                  , g = b.allowedAutoPlacements
                  , h = void 0 === g ? M : g
                  , i = b.placement.split("-")[1];
                0 === (f = (b = i ? f ? L : L.filter(function (a) {
                  return a.split("-")[1] === i
                }) : K).filter(function (a) {
                  return 0 <= h.indexOf(a)
                })).length && (f = b);
                var j = f.reduce(function (b, f) {
                  return b[f] = C(a, {
                    placement: f,
                    boundary: c,
                    rootBoundary: d,
                    padding: e
                  })[t(f)],
                    b
                }, {});
                return Object.keys(j).sort(function (a, b) {
                  return j[a] - j[b]
                })
              }(b, {
                placement: c,
                boundary: h,
                rootBoundary: i,
                padding: g,
                flipVariations: l,
                allowedAutoPlacements: m
              }) : c)
            }, []);
            c = b.rects.reference,
              f = b.rects.popper;
            var o = new Map;
            k = !0;
            for (var p = n[0], q = 0; q < n.length; q++) {
              var r = n[q]
                , s = t(r)
                , u = "start" === r.split("-")[1]
                , v = 0 <= ["top", "bottom"].indexOf(s)
                , w = v ? "width" : "height"
                , x = C(b, {
                  placement: r,
                  boundary: h,
                  rootBoundary: i,
                  altBoundary: j,
                  padding: g
                });
              if (u = v ? u ? "right" : "left" : u ? "bottom" : "top",
                c[w] > f[w] && (u = G(u)),
                w = G(u),
                v = [],
                d && v.push(0 >= x[s]),
                e && v.push(0 >= x[u], 0 >= x[w]),
                v.every(function (a) {
                  return a
                })) {
                p = r,
                  k = !1;
                break
              }
              o.set(r, v)
            }
            if (k)
              for (d = function (a) {
                var b = n.find(function (b) {
                  return (b = o.get(b)) ? b.slice(0, a).every(function (a) {
                    return a
                  }) : void 0
                });
                return b ? (p = b,
                  "break") : void 0
              }
                ,
                e = l ? 3 : 1; e > 0 && "break" !== d(e); e--)
                ;
            b.placement !== p && (b.modifiersData[a]._skip = !0,
              b.placement = p,
              b.reset = !0)
          }
        },
        requiresIfExists: ["offset"],
        data: {
          _skip: !1
        }
      }, {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function (a) {
          var b = a.state
            , c = a.options;
          a = a.name;
          var d = c.mainAxis
            , e = void 0 === d || d;
          d = void 0 !== (d = c.altAxis) && d;
          var f = c.tether;
          f = void 0 === f || f;
          var g = c.tetherOffset
            , h = void 0 === g ? 0 : g;
          c = C(b, {
            boundary: c.boundary,
            rootBoundary: c.rootBoundary,
            padding: c.padding,
            altBoundary: c.altBoundary
          }),
            g = t(b.placement);
          var i = b.placement.split("-")[1]
            , j = !i
            , k = y(g);
          g = "x" === k ? "y" : "x";
          var l = b.modifiersData.popperOffsets
            , n = b.rects.reference
            , o = b.rects.popper
            , p = "function" == typeof h ? h(Object.assign(Object.assign({}, b.rects), {}, {
              placement: b.placement
            })) : h;
          if (h = {
            x: 0,
            y: 0
          },
            l) {
            if (e) {
              var r = "y" === k ? "top" : "left"
                , s = "y" === k ? "bottom" : "right"
                , u = "y" === k ? "height" : "width";
              e = l[k];
              var v = l[k] + c[r]
                , w = l[k] - c[s]
                , x = f ? -o[u] / 2 : 0
                , z = "start" === i ? n[u] : o[u];
              i = "start" === i ? -o[u] : -n[u],
                o = b.elements.arrow,
                o = f && o ? m(o) : {
                  width: 0,
                  height: 0
                };
              var A = b.modifiersData["arrow#persistent"] ? b.modifiersData["arrow#persistent"].padding : {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
              };
              r = A[r],
                s = A[s],
                o = Math.max(0, Math.min(n[u], o[u])),
                z = j ? n[u] / 2 - x - o - r - p : z - o - r - p,
                j = j ? -n[u] / 2 + x + o + s + p : i + o + s + p,
                p = b.elements.arrow && q(b.elements.arrow),
                n = b.modifiersData.offset ? b.modifiersData.offset[b.placement][k] : 0,
                p = l[k] + z - n - (p ? "y" === k ? p.clientTop || 0 : p.clientLeft || 0 : 0),
                j = l[k] + j - n,
                f = Math.max(f ? Math.min(v, p) : v, Math.min(e, f ? Math.max(w, j) : w)),
                l[k] = f,
                h[k] = f - e
            }
            d && (d = l[g],
              f = Math.max(d + c["x" === k ? "top" : "left"], Math.min(d, d - c["x" === k ? "bottom" : "right"])),
              l[g] = f,
              h[g] = f - d),
              b.modifiersData[a] = h
          }
        },
        requiresIfExists: ["offset"]
      }, {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function (a) {
          var b, c = a.state;
          a = a.name;
          var d = c.elements.arrow
            , e = c.modifiersData.popperOffsets
            , f = t(c.placement)
            , g = y(f);
          if (f = 0 <= ["left", "right"].indexOf(f) ? "height" : "width",
            d && e) {
            var h = c.modifiersData[a + "#persistent"].padding
              , i = m(d)
              , j = "y" === g ? "top" : "left"
              , k = "y" === g ? "bottom" : "right"
              , l = c.rects.reference[f] + c.rects.reference[g] - e[g] - c.rects.popper[f];
            e = e[g] - c.rects.reference[g],
              l = (d = (d = q(d)) ? "y" === g ? d.clientHeight || 0 : d.clientWidth || 0 : 0) / 2 - i[f] / 2 + (l / 2 - e / 2),
              f = Math.max(h[j], Math.min(l, d - i[f] - h[k])),
              c.modifiersData[a] = ((b = {})[g] = f,
                b.centerOffset = f - l,
                b)
          }
        },
        effect: function (a) {
          var b = a.state
            , c = a.options;
          a = a.name;
          var d = c.element;
          if (d = void 0 === d ? "[data-popper-arrow]" : d,
            c = void 0 === (c = c.padding) ? 0 : c,
            null != d) {
            if ("string" == typeof d && !(d = b.elements.popper.querySelector(d)))
              return;
            u(b.elements.popper, d) && (b.elements.arrow = d,
              b.modifiersData[a + "#persistent"] = {
                padding: A("number" != typeof c ? c : B(c, K))
              })
          }
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"]
      }, {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: function (a) {
          var b = a.state;
          a = a.name;
          var c = b.rects.reference
            , d = b.rects.popper
            , e = b.modifiersData.preventOverflow
            , f = C(b, {
              elementContext: "reference"
            })
            , g = C(b, {
              altBoundary: !0
            });
          c = I(f, c),
            d = I(g, d, e),
            e = J(c),
            g = J(d),
            b.modifiersData[a] = {
              referenceClippingOffsets: c,
              popperEscapeOffsets: d,
              isReferenceHidden: e,
              hasPopperEscaped: g
            },
            b.attributes.popper = Object.assign(Object.assign({}, b.attributes.popper), {}, {
              "data-popper-reference-hidden": e,
              "data-popper-escaped": g
            })
        }
      }]
      , U = E({
        defaultModifiers: T
      });
    a.createPopper = U,
      a.defaultModifiers = T,
      a.detectOverflow = C,
      a.popperGenerator = E,
      Object.defineProperty(a, "__esModule", {
        value: !0
      })
  }),
  !function (a, b) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = b(require("@popperjs/core")) : "function" == typeof define && define.amd ? define(["@popperjs/core"], b) : (a = a || self).tippy = b(a.Popper)
  }(this, function (a) {
    "use strict";
    function b(a, b, c) {
      if (Array.isArray(a)) {
        var d = a[b];
        return null == d ? Array.isArray(c) ? c[b] : c : d
      }
      return a
    }
    function c(a, b) {
      var c = {}.toString.call(a);
      return 0 === c.indexOf("[object") && c.indexOf(b + "]") > -1
    }
    function d(a, b) {
      return "function" == typeof a ? a.apply(void 0, b) : a
    }
    function e(a, b) {
      return 0 === b ? a : function (d) {
        clearTimeout(c),
          c = setTimeout(function () {
            a(d)
          }, b)
      }
        ;
      var c
    }
    function f(a, b) {
      var c = Object.assign({}, a);
      return b.forEach(function (a) {
        delete c[a]
      }),
        c
    }
    function g(a) {
      return [].concat(a)
    }
    function h(a, b) {
      -1 === a.indexOf(b) && a.push(b)
    }
    function i(a) {
      return a.split("-")[0]
    }
    function j(a) {
      return [].slice.call(a)
    }
    function k() {
      return document.createElement("div")
    }
    function l(a) {
      return ["Element", "Fragment"].some(function (b) {
        return c(a, b)
      })
    }
    function m(a) {
      return c(a, "MouseEvent")
    }
    function n(a) {
      return !(!a || !a._tippy || a._tippy.reference !== a)
    }
    function o(a) {
      return l(a) ? [a] : function (a) {
        return c(a, "NodeList")
      }(a) ? j(a) : Array.isArray(a) ? a : j(document.querySelectorAll(a))
    }
    function p(a, b) {
      a.forEach(function (a) {
        a && (a.style.transitionDuration = b + "ms")
      })
    }
    function q(a, b) {
      a.forEach(function (a) {
        a && a.setAttribute("data-state", b)
      })
    }
    function r(a) {
      var b = g(a)[0];
      return b && b.ownerDocument || document
    }
    function s(a, b, c) {
      var d = b + "EventListener";
      ["transitionend", "webkitTransitionEnd"].forEach(function (b) {
        a[d](b, c)
      })
    }
    function t() {
      L.isTouch || (L.isTouch = !0,
        window.performance && document.addEventListener("mousemove", u))
    }
    function u() {
      var a = performance.now();
      20 > a - M && (L.isTouch = !1,
        document.removeEventListener("mousemove", u)),
        M = a
    }
    function v() {
      var a = document.activeElement;
      if (n(a)) {
        var b = a._tippy;
        a.blur && !b.state.isVisible && a.blur()
      }
    }
    function w(a) {
      var b = (a.plugins || []).reduce(function (b, c) {
        var d = c.name
          , e = c.defaultValue;
        return d && (b[d] = void 0 !== a[d] ? a[d] : e),
          b
      }, {});
      return Object.assign({}, a, {}, b)
    }
    function x(a, b) {
      var c = Object.assign({}, b, {
        content: d(b.content, [a])
      }, b.ignoreAttributes ? {} : function (a, b) {
        return (b ? Object.keys(w(Object.assign({}, N, {
          plugins: b
        }))) : O).reduce(function (b, c) {
          var d = (a.getAttribute("data-tippy-" + c) || "").trim();
          if (!d)
            return b;
          if ("content" === c)
            b[c] = d;
          else
            try {
              b[c] = JSON.parse(d)
            } catch (e) {
              b[c] = d
            }
          return b
        }, {})
      }(a, b.plugins));
      return c.aria = Object.assign({}, N.aria, {}, c.aria),
        c.aria = {
          expanded: "auto" === c.aria.expanded ? b.interactive : c.aria.expanded,
          content: "auto" === c.aria.content ? b.interactive ? null : "describedby" : c.aria.content
        },
        c
    }
    function y(a, b) {
      a.innerHTML = b
    }
    function z(a) {
      var b = k();
      return !0 === a ? b.className = "tippy-arrow" : (b.className = "tippy-svg-arrow",
        l(a) ? b.appendChild(a) : y(b, a)),
        b
    }
    function A(a, b) {
      l(b.content) ? (y(a, ""),
        a.appendChild(b.content)) : "function" != typeof b.content && (b.allowHTML ? y(a, b.content) : a.textContent = b.content)
    }
    function B(a) {
      var b = a.firstElementChild
        , c = j(b.children);
      return {
        box: b,
        content: c.find(function (a) {
          return a.classList.contains("tippy-content")
        }),
        arrow: c.find(function (a) {
          return a.classList.contains("tippy-arrow") || a.classList.contains("tippy-svg-arrow")
        }),
        backdrop: c.find(function (a) {
          return a.classList.contains("tippy-backdrop")
        })
      }
    }
    function C(a) {
      function b(b, d) {
        var e = B(c)
          , f = e.box
          , g = e.content
          , h = e.arrow;
        d.theme ? f.setAttribute("data-theme", d.theme) : f.removeAttribute("data-theme"),
          "string" == typeof d.animation ? f.setAttribute("data-animation", d.animation) : f.removeAttribute("data-animation"),
          d.inertia ? f.setAttribute("data-inertia", "") : f.removeAttribute("data-inertia"),
          f.style.maxWidth = "number" == typeof d.maxWidth ? d.maxWidth + "px" : d.maxWidth,
          d.role ? f.setAttribute("role", d.role) : f.removeAttribute("role"),
          b.content === d.content && b.allowHTML === d.allowHTML || A(g, a.props),
          d.arrow ? h ? b.arrow !== d.arrow && (f.removeChild(h),
            f.appendChild(z(d.arrow))) : f.appendChild(z(d.arrow)) : h && f.removeChild(h)
      }
      var c = k()
        , d = k();
      d.className = "tippy-box",
        d.setAttribute("data-state", "hidden"),
        d.setAttribute("tabindex", "-1");
      var e = k();
      return e.className = "tippy-content",
        e.setAttribute("data-state", "hidden"),
        A(e, a.props),
        c.appendChild(d),
        d.appendChild(e),
        b(a.props, a.props),
      {
        popper: c,
        onUpdate: b
      }
    }
    function D(c, f) {
      function l() {
        var a = vb.props.touch;
        return Array.isArray(a) ? a : [a, 0]
      }
      function n() {
        return "hold" === l()[0]
      }
      function o() {
        var a;
        return !!(null == (a = vb.props.render) ? void 0 : a.$$tippy)
      }
      function t() {
        return jb || c
      }
      function u() {
        return B(xb)
      }
      function v(a) {
        return vb.state.isMounted && !vb.state.isVisible || L.isTouch || gb && "focus" === gb.type ? 0 : b(vb.props.delay, a ? 0 : 1, N.delay)
      }
      function y() {
        xb.style.pointerEvents = vb.props.interactive && vb.state.isVisible ? "" : "none",
          xb.style.zIndex = "" + vb.props.zIndex
      }
      function z(a, b, c) {
        var d;
        void 0 === c && (c = !0),
          zb.forEach(function (c) {
            c[a] && c[a].apply(void 0, b)
          }),
          c && (d = vb.props)[a].apply(d, b)
      }
      function A() {
        var a = vb.props.aria;
        if (a.content) {
          var b = "aria-" + a.content
            , d = xb.id;
          g(vb.props.triggerTarget || c).forEach(function (a) {
            var c = a.getAttribute(b);
            if (vb.state.isVisible)
              a.setAttribute(b, c ? c + " " + d : d);
            else {
              var e = c && c.replace(d, "").trim();
              e ? a.setAttribute(b, e) : a.removeAttribute(b)
            }
          })
        }
      }
      function C() {
        !Ab && vb.props.aria.expanded && g(vb.props.triggerTarget || c).forEach(function (a) {
          vb.props.interactive ? a.setAttribute("aria-expanded", vb.state.isVisible && a === t() ? "true" : "false") : a.removeAttribute("aria-expanded")
        })
      }
      function D() {
        sb.removeEventListener("mousemove", rb),
          Q = Q.filter(function (a) {
            return a !== rb
          })
      }
      function E(a) {
        if (!(L.isTouch && (ob || "mousedown" === a.type) || vb.props.interactive && xb.contains(a.target))) {
          if (t().contains(a.target)) {
            if (L.isTouch)
              return;
            if (vb.state.isVisible && vb.props.trigger.indexOf("click") >= 0)
              return
          } else
            z("onClickOutside", [vb, a]);
          !0 === vb.props.hideOnClick && (vb.clearDelayTimeouts(),
            vb.hide(),
            nb = !0,
            setTimeout(function () {
              nb = !1
            }),
            vb.state.isMounted || I())
        }
      }
      function F() {
        ob = !0
      }
      function G() {
        ob = !1
      }
      function H() {
        sb.addEventListener("mousedown", E, !0),
          sb.addEventListener("touchend", E, K),
          sb.addEventListener("touchstart", G, K),
          sb.addEventListener("touchmove", F, K)
      }
      function I() {
        sb.removeEventListener("mousedown", E, !0),
          sb.removeEventListener("touchend", E, K),
          sb.removeEventListener("touchstart", G, K),
          sb.removeEventListener("touchmove", F, K)
      }
      function M(a, b) {
        function c(a) {
          a.target === d && (s(d, "remove", c),
            b())
        }
        var d = u().box;
        return 0 === a ? b() : (s(d, "remove", hb),
          s(d, "add", c),
          hb = c,
          void 0)
      }
      function O(a, b, d) {
        void 0 === d && (d = !1),
          g(vb.props.triggerTarget || c).forEach(function (c) {
            c.addEventListener(a, b, d),
              qb.push({
                node: c,
                eventType: a,
                handler: b,
                options: d
              })
          })
      }
      function S() {
        var a;
        n() && (O("touchstart", U, {
          passive: !0
        }),
          O("touchend", W, {
            passive: !0
          })),
          (a = vb.props.trigger,
            a.split(/\s+/).filter(Boolean)).forEach(function (a) {
              if ("manual" !== a)
                switch (O(a, U),
                a) {
                  case "mouseenter":
                    O("mouseleave", W);
                    break;
                  case "focus":
                    O(J ? "focusout" : "blur", X);
                    break;
                  case "focusin":
                    O("focusout", X)
                }
            })
      }
      function T() {
        qb.forEach(function (a) {
          var b = a.node
            , c = a.eventType
            , d = a.handler
            , e = a.options;
          b.removeEventListener(c, d, e)
        }),
          qb = []
      }
      function U(a) {
        var b, c = !1;
        if (vb.state.isEnabled && !Y(a) && !nb) {
          var d = "focus" === (null == (b = gb) ? void 0 : b.type);
          gb = a,
            jb = a.currentTarget,
            C(),
            !vb.state.isVisible && m(a) && Q.forEach(function (b) {
              return b(a)
            }),
            "click" === a.type && (vb.props.trigger.indexOf("mouseenter") < 0 || mb) && !1 !== vb.props.hideOnClick && vb.state.isVisible ? c = !0 : ab(a),
            "click" === a.type && (mb = !c),
            c && !d && bb(a)
        }
      }
      function V(a) {
        var b = a.target
          , c = t().contains(b) || xb.contains(b);
        "mousemove" === a.type && c || function (a, b) {
          var c = b.clientX
            , d = b.clientY;
          return a.every(function (a) {
            var b = a.popperRect
              , e = a.popperState
              , f = a.props.interactiveBorder
              , g = i(e.placement)
              , h = e.modifiersData.offset;
            if (!h)
              return !0;
            var j = "bottom" === g ? h.top.y : 0
              , k = "top" === g ? h.bottom.y : 0
              , l = "right" === g ? h.left.x : 0
              , m = "left" === g ? h.right.x : 0
              , n = b.top - d + j > f
              , o = d - b.bottom - k > f
              , p = b.left - c + l > f
              , q = c - b.right - m > f;
            return n || o || p || q
          })
        }(_().concat(xb).map(function (a) {
          var b, c = null == (b = a._tippy.popperInstance) ? void 0 : b.state;
          return c ? {
            popperRect: a.getBoundingClientRect(),
            popperState: c,
            props: lb
          } : null
        }).filter(Boolean), a) && (D(),
          bb(a))
      }
      function W(a) {
        Y(a) || vb.props.trigger.indexOf("click") >= 0 && mb || (vb.props.interactive ? vb.hideWithInteractivity(a) : bb(a))
      }
      function X(a) {
        vb.props.trigger.indexOf("focusin") < 0 && a.target !== t() || vb.props.interactive && a.relatedTarget && xb.contains(a.relatedTarget) || bb(a)
      }
      function Y(a) {
        return !!L.isTouch && n() !== a.type.indexOf("touch") >= 0
      }
      function Z() {
        $();
        var b = vb.props
          , d = b.popperOptions
          , e = b.placement
          , f = b.offset
          , g = b.getReferenceClientRect
          , h = b.moveTransition
          , i = o() ? B(xb).arrow : null
          , j = g ? {
            getBoundingClientRect: g,
            contextElement: g.contextElement || t()
          } : c
          , k = [{
            name: "offset",
            options: {
              offset: f
            }
          }, {
            name: "preventOverflow",
            options: {
              padding: {
                top: 2,
                bottom: 2,
                left: 5,
                right: 5
              }
            }
          }, {
            name: "flip",
            options: {
              padding: 5
            }
          }, {
            name: "computeStyles",
            options: {
              adaptive: !h
            }
          }, {
            name: "$$tippy",
            enabled: !0,
            phase: "beforeWrite",
            requires: ["computeStyles"],
            fn: function (a) {
              var b = a.state;
              if (o()) {
                var c = u().box;
                ["placement", "reference-hidden", "escaped"].forEach(function (a) {
                  "placement" === a ? c.setAttribute("data-placement", b.placement) : b.attributes.popper["data-popper-" + a] ? c.setAttribute("data-" + a, "") : c.removeAttribute("data-" + a)
                }),
                  b.attributes.popper = {}
              }
            }
          }];
        o() && i && k.push({
          name: "arrow",
          options: {
            element: i,
            padding: 3
          }
        }),
          k.push.apply(k, (null == d ? void 0 : d.modifiers) || []),
          vb.popperInstance = a.createPopper(j, xb, Object.assign({}, d, {
            placement: e,
            onFirstUpdate: ib,
            modifiers: k
          }))
      }
      function $() {
        vb.popperInstance && (vb.popperInstance.destroy(),
          vb.popperInstance = null)
      }
      function _() {
        return j(xb.querySelectorAll("[data-tippy-root]"))
      }
      function ab(a) {
        vb.clearDelayTimeouts(),
          a && z("onTrigger", [vb, a]),
          H();
        var b = v(!0)
          , c = l()
          , d = c[0]
          , e = c[1];
        L.isTouch && "hold" === d && e && (b = e),
          b ? db = setTimeout(function () {
            vb.show()
          }, b) : vb.show()
      }
      function bb(a) {
        if (vb.clearDelayTimeouts(),
          z("onUntrigger", [vb, a]),
          vb.state.isVisible) {
          if (!(vb.props.trigger.indexOf("mouseenter") >= 0 && vb.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(a.type) >= 0 && mb)) {
            var b = v(!1);
            b ? eb = setTimeout(function () {
              vb.state.isVisible && vb.hide()
            }, b) : fb = requestAnimationFrame(function () {
              vb.hide()
            })
          }
        } else
          I()
      }
      var cb, db, eb, fb, gb, hb, ib, jb, kb, lb = x(c, Object.assign({}, N, {}, w((cb = f,
        Object.keys(cb).reduce(function (a, b) {
          return void 0 !== cb[b] && (a[b] = cb[b]),
            a
        }, {}))))), mb = !1, nb = !1, ob = !1, pb = !1, qb = [], rb = e(V, lb.interactiveDebounce), sb = r(lb.triggerTarget || c), tb = P++, ub = (kb = lb.plugins).filter(function (a, b) {
          return kb.indexOf(a) === b
        }), vb = {
          id: tb,
          reference: c,
          popper: k(),
          popperInstance: null,
          props: lb,
          state: {
            isEnabled: !0,
            isVisible: !1,
            isDestroyed: !1,
            isMounted: !1,
            isShown: !1
          },
          plugins: ub,
          clearDelayTimeouts: function () {
            clearTimeout(db),
              clearTimeout(eb),
              cancelAnimationFrame(fb)
          },
          setProps: function (a) {
            if (!vb.state.isDestroyed) {
              z("onBeforeUpdate", [vb, a]),
                T();
              var b = vb.props
                , d = x(c, Object.assign({}, vb.props, {}, a, {
                  ignoreAttributes: !0
                }));
              vb.props = d,
                S(),
                b.interactiveDebounce !== d.interactiveDebounce && (D(),
                  rb = e(V, d.interactiveDebounce)),
                b.triggerTarget && !d.triggerTarget ? g(b.triggerTarget).forEach(function (a) {
                  a.removeAttribute("aria-expanded")
                }) : d.triggerTarget && c.removeAttribute("aria-expanded"),
                C(),
                y(),
                yb && yb(b, d),
                vb.popperInstance && (Z(),
                  _().forEach(function (a) {
                    requestAnimationFrame(a._tippy.popperInstance.forceUpdate)
                  })),
                z("onAfterUpdate", [vb, a])
            }
          },
          setContent: function (a) {
            vb.setProps({
              content: a
            })
          },
          show: function () {
            var a = vb.state.isVisible
              , c = vb.state.isDestroyed
              , e = !vb.state.isEnabled
              , f = L.isTouch && !vb.props.touch
              , g = b(vb.props.duration, 0, N.duration);
            if (!(a || c || e || f || t().hasAttribute("disabled") || (z("onShow", [vb], !1),
              !1 === vb.props.onShow(vb)))) {
              if (vb.state.isVisible = !0,
                o() && (xb.style.visibility = "visible"),
                y(),
                H(),
                vb.state.isMounted || (xb.style.transition = "none"),
                o()) {
                var i = u()
                  , j = i.box
                  , k = i.content;
                p([j, k], 0)
              }
              ib = function () {
                if (vb.state.isVisible && !pb) {
                  if (pb = !0,
                    xb.offsetHeight,
                    xb.style.transition = vb.props.moveTransition,
                    o() && vb.props.animation) {
                    var a = u()
                      , b = a.box
                      , c = a.content;
                    p([b, c], g),
                      q([b, c], "visible")
                  }
                  A(),
                    C(),
                    h(R, vb),
                    vb.state.isMounted = !0,
                    z("onMount", [vb]),
                    vb.props.animation && o() && function (a, b) {
                      M(a, b)
                    }(g, function () {
                      vb.state.isShown = !0,
                        z("onShown", [vb])
                    })
                }
              }
                ,
                function () {
                  var a, b = vb.props.appendTo, c = t();
                  a = vb.props.interactive && b === N.appendTo || "parent" === b ? c.parentNode : d(b, [c]),
                    a.contains(xb) || a.appendChild(xb),
                    Z()
                }()
            }
          },
          hide: function () {
            var a = !vb.state.isVisible
              , c = vb.state.isDestroyed
              , d = !vb.state.isEnabled
              , e = b(vb.props.duration, 1, N.duration);
            if (!(a || c || d) && (z("onHide", [vb], !1),
              !1 !== vb.props.onHide(vb))) {
              if (vb.state.isVisible = !1,
                vb.state.isShown = !1,
                pb = !1,
                mb = !1,
                o() && (xb.style.visibility = "hidden"),
                D(),
                I(),
                y(),
                o()) {
                var f = u()
                  , g = f.box
                  , h = f.content;
                vb.props.animation && (p([g, h], e),
                  q([g, h], "hidden"))
              }
              A(),
                C(),
                vb.props.animation ? o() && function (a, b) {
                  M(a, function () {
                    !vb.state.isVisible && xb.parentNode && xb.parentNode.contains(xb) && b()
                  })
                }(e, vb.unmount) : vb.unmount()
            }
          },
          hideWithInteractivity: function (a) {
            sb.addEventListener("mousemove", rb),
              h(Q, rb),
              rb(a)
          },
          enable: function () {
            vb.state.isEnabled = !0
          },
          disable: function () {
            vb.hide(),
              vb.state.isEnabled = !1
          },
          unmount: function () {
            vb.state.isVisible && vb.hide(),
              vb.state.isMounted && ($(),
                _().forEach(function (a) {
                  a._tippy.unmount()
                }),
                xb.parentNode && xb.parentNode.removeChild(xb),
                R = R.filter(function (a) {
                  return a !== vb
                }),
                vb.state.isMounted = !1,
                z("onHidden", [vb]))
          },
          destroy: function () {
            vb.state.isDestroyed || (vb.clearDelayTimeouts(),
              vb.unmount(),
              T(),
              delete c._tippy,
              vb.state.isDestroyed = !0,
              z("onDestroy", [vb]))
          }
        };
      if (!lb.render)
        return vb;
      var wb = lb.render(vb)
        , xb = wb.popper
        , yb = wb.onUpdate;
      xb.setAttribute("data-tippy-root", ""),
        xb.id = "tippy-" + vb.id,
        vb.popper = xb,
        c._tippy = vb,
        xb._tippy = vb;
      var zb = ub.map(function (a) {
        return a.fn(vb)
      })
        , Ab = c.hasAttribute("aria-expanded");
      return S(),
        C(),
        y(),
        z("onCreate", [vb]),
        lb.showOnCreate && ab(),
        xb.addEventListener("mouseenter", function () {
          vb.props.interactive && vb.state.isVisible && vb.clearDelayTimeouts()
        }),
        xb.addEventListener("mouseleave", function (a) {
          vb.props.interactive && vb.props.trigger.indexOf("mouseenter") >= 0 && (sb.addEventListener("mousemove", rb),
            rb(a))
        }),
        vb
    }
    function E(a, b) {
      void 0 === b && (b = {});
      var c = N.plugins.concat(b.plugins || []);
      document.addEventListener("touchstart", t, K),
        window.addEventListener("blur", v);
      var d = Object.assign({}, b, {
        plugins: c
      })
        , e = o(a).reduce(function (a, b) {
          var c = b && D(b, d);
          return c && a.push(c),
            a
        }, []);
      return l(a) ? e[0] : e
    }
    function F(a) {
      var b = a.clientX
        , c = a.clientY;
      U = {
        clientX: b,
        clientY: c
      }
    }
    function G(a, b) {
      return !a || !b || a.top !== b.top || a.right !== b.right || a.bottom !== b.bottom || a.left !== b.left
    }
    var H = "undefined" != typeof window && "undefined" != typeof document
      , I = H ? navigator.userAgent : ""
      , J = /MSIE |Trident\//.test(I)
      , K = {
        passive: !0,
        capture: !0
      }
      , L = {
        isTouch: !1
      }
      , M = 0
      , N = Object.assign({
        appendTo: function () {
          return document.body
        },
        aria: {
          content: "auto",
          expanded: "auto"
        },
        delay: 0,
        duration: [300, 250],
        getReferenceClientRect: null,
        hideOnClick: !0,
        ignoreAttributes: !1,
        interactive: !1,
        interactiveBorder: 2,
        interactiveDebounce: 0,
        moveTransition: "",
        offset: [0, 10],
        onAfterUpdate: function () { },
        onBeforeUpdate: function () { },
        onCreate: function () { },
        onDestroy: function () { },
        onHidden: function () { },
        onHide: function () { },
        onMount: function () { },
        onShow: function () { },
        onShown: function () { },
        onTrigger: function () { },
        onUntrigger: function () { },
        onClickOutside: function () { },
        placement: "top",
        plugins: [],
        popperOptions: {},
        render: null,
        showOnCreate: !1,
        touch: !0,
        trigger: "mouseenter focus",
        triggerTarget: null
      }, {
        animateFill: !1,
        followCursor: !1,
        inlinePositioning: !1,
        sticky: !1
      }, {}, {
        allowHTML: !1,
        animation: "fade",
        arrow: !0,
        content: "",
        inertia: !1,
        maxWidth: 350,
        role: "tooltip",
        theme: "",
        zIndex: 9999
      })
      , O = Object.keys(N);
    C.$$tippy = !0;
    var P = 1
      , Q = []
      , R = [];
    E.defaultProps = N,
      E.setDefaultProps = function (a) {
        Object.keys(a).forEach(function (b) {
          N[b] = a[b]
        })
      }
      ,
      E.currentInput = L;
    var S = {
      mouseover: "mouseenter",
      focusin: "focus",
      click: "click"
    }
      , T = {
        name: "animateFill",
        defaultValue: !1,
        fn: function (a) {
          var b;
          if (!(null == (b = a.props.render) ? void 0 : b.$$tippy))
            return {};
          var c = B(a.popper)
            , d = c.box
            , e = c.content
            , f = a.props.animateFill ? function () {
              var a = k();
              return a.className = "tippy-backdrop",
                q([a], "hidden"),
                a
            }() : null;
          return {
            onCreate: function () {
              f && (d.insertBefore(f, d.firstElementChild),
                d.setAttribute("data-animatefill", ""),
                d.style.overflow = "hidden",
                a.setProps({
                  arrow: !1,
                  animation: "shift-away"
                }))
            },
            onMount: function () {
              if (f) {
                var a = d.style.transitionDuration
                  , b = Number(a.replace("ms", ""));
                e.style.transitionDelay = Math.round(b / 10) + "ms",
                  f.style.transitionDuration = a,
                  q([f], "visible")
              }
            },
            onShow: function () {
              f && (f.style.transitionDuration = "0ms")
            },
            onHide: function () {
              f && q([f], "hidden")
            }
          }
        }
      }
      , U = {
        clientX: 0,
        clientY: 0
      }
      , V = []
      , W = {
        name: "followCursor",
        defaultValue: !1,
        fn: function (a) {
          function b() {
            return "initial" === a.props.followCursor && a.state.isVisible
          }
          function c() {
            j.addEventListener("mousemove", f)
          }
          function d() {
            j.removeEventListener("mousemove", f)
          }
          function e() {
            k = !0,
              a.setProps({
                getReferenceClientRect: null
              }),
              k = !1
          }
          function f(b) {
            var c = !b.target || i.contains(b.target)
              , d = a.props.followCursor
              , e = b.clientX
              , f = b.clientY
              , g = i.getBoundingClientRect()
              , h = e - g.left
              , j = f - g.top;
            !c && a.props.interactive || a.setProps({
              getReferenceClientRect: function () {
                var a = i.getBoundingClientRect()
                  , b = e
                  , c = f;
                "initial" === d && (b = a.left + h,
                  c = a.top + j);
                var g = "horizontal" === d ? a.top : c
                  , k = "vertical" === d ? a.right : b
                  , l = "horizontal" === d ? a.bottom : c
                  , m = "vertical" === d ? a.left : b;
                return {
                  width: k - m,
                  height: l - g,
                  top: g,
                  right: k,
                  bottom: l,
                  left: m
                }
              }
            })
          }
          function g() {
            a.props.followCursor && (V.push({
              instance: a,
              doc: j
            }),
              function (a) {
                a.addEventListener("mousemove", F)
              }(j))
          }
          function h() {
            0 === (V = V.filter(function (b) {
              return b.instance !== a
            })).filter(function (a) {
              return a.doc === j
            }).length && function (a) {
              a.removeEventListener("mousemove", F)
            }(j)
          }
          var i = a.reference
            , j = r(a.props.triggerTarget || i)
            , k = !1
            , l = !1
            , n = !0
            , o = a.props;
          return {
            onCreate: g,
            onDestroy: h,
            onBeforeUpdate: function () {
              o = a.props
            },
            onAfterUpdate: function (f, i) {
              var j = i.followCursor;
              k || void 0 !== j && o.followCursor !== j && (h(),
                j ? (g(),
                  !a.state.isMounted || l || b() || c()) : (d(),
                    e()))
            },
            onMount: function () {
              a.props.followCursor && !l && (n && (f(U),
                n = !1),
                b() || c())
            },
            onTrigger: function (a, b) {
              m(b) && (U = {
                clientX: b.clientX,
                clientY: b.clientY
              }),
                l = "focus" === b.type
            },
            onHidden: function () {
              a.props.followCursor && (e(),
                d(),
                n = !0)
            }
          }
        }
      }
      , X = {
        name: "inlinePositioning",
        defaultValue: !1,
        fn: function (a) {
          function b() {
            var b;
            f || (b = function (a, b) {
              var c;
              return {
                popperOptions: Object.assign({}, a.popperOptions, {
                  modifiers: [].concat(((null == (c = a.popperOptions) ? void 0 : c.modifiers) || []).filter(function (a) {
                    return a.name !== b.name
                  }), [b])
                })
              }
            }(a.props, g),
              f = !0,
              a.setProps(b),
              f = !1)
          }
          var c, d = a.reference, e = -1, f = !1, g = {
            name: "tippyInlinePositioning",
            enabled: !0,
            phase: "afterWrite",
            fn: function (b) {
              var f = b.state;
              a.props.inlinePositioning && (c !== f.placement && a.setProps({
                getReferenceClientRect: function () {
                  return function (a) {
                    return function (a, b, c, d) {
                      if (c.length < 2 || null === a)
                        return b;
                      if (2 === c.length && d >= 0 && c[0].left > c[1].right)
                        return c[d] || b;
                      switch (a) {
                        case "top":
                        case "bottom":
                          var e = c[0]
                            , f = c[c.length - 1]
                            , g = "top" === a
                            , h = e.top
                            , i = f.bottom
                            , j = g ? e.left : f.left
                            , k = g ? e.right : f.right;
                          return {
                            top: h,
                            bottom: i,
                            left: j,
                            right: k,
                            width: k - j,
                            height: i - h
                          };
                        case "left":
                        case "right":
                          var l = Math.min.apply(Math, c.map(function (a) {
                            return a.left
                          }))
                            , m = Math.max.apply(Math, c.map(function (a) {
                              return a.right
                            }))
                            , n = c.filter(function (b) {
                              return "left" === a ? b.left === l : b.right === m
                            })
                            , o = n[0].top
                            , p = n[n.length - 1].bottom;
                          return {
                            top: o,
                            bottom: p,
                            left: l,
                            right: m,
                            width: m - l,
                            height: p - o
                          };
                        default:
                          return b
                      }
                    }(i(a), d.getBoundingClientRect(), j(d.getClientRects()), e)
                  }(f.placement)
                }
              }),
                c = f.placement)
            }
          };
          return {
            onCreate: b,
            onAfterUpdate: b,
            onTrigger: function (b, c) {
              if (m(c)) {
                var d = j(a.reference.getClientRects())
                  , f = d.find(function (a) {
                    return a.left - 2 <= c.clientX && a.right + 2 >= c.clientX && a.top - 2 <= c.clientY && a.bottom + 2 >= c.clientY
                  });
                e = d.indexOf(f)
              }
            },
            onUntrigger: function () {
              e = -1
            }
          }
        }
      }
      , Y = {
        name: "sticky",
        defaultValue: !1,
        fn: function (a) {
          function b(b) {
            return !0 === a.props.sticky || a.props.sticky === b
          }
          function c() {
            var h = b("reference") ? (a.popperInstance ? a.popperInstance.state.elements.reference : d).getBoundingClientRect() : null
              , i = b("popper") ? e.getBoundingClientRect() : null;
            (h && G(f, h) || i && G(g, i)) && a.popperInstance && a.popperInstance.update(),
              f = h,
              g = i,
              a.state.isMounted && requestAnimationFrame(c)
          }
          var d = a.reference
            , e = a.popper
            , f = null
            , g = null;
          return {
            onMount: function () {
              a.props.sticky && c()
            }
          }
        }
      };
    return H && function (a) {
      /*var b = document.createElement("style");
      b.textContent = a,
      b.setAttribute("data-tippy-stylesheet", "");
      var c = document.head
        , d = document.querySelector("head>style,head>link");
      d ? c.insertBefore(b, d) : c.appendChild(b)*/
    }('.tippy-box[data-animation=fade][data-state=hidden]{opacity:0}[data-tippy-root]{max-width:calc(100vw - 10px)}.tippy-box{position:relative;background-color:#333;color:#fff;border-radius:4px;font-size:14px;line-height:1.4;outline:0;transition-property:transform,visibility,opacity}.tippy-box[data-placement^=top]>.tippy-arrow{bottom:0}.tippy-box[data-placement^=top]>.tippy-arrow:before{bottom:-7px;left:0;border-width:8px 8px 0;border-top-color:initial;transform-origin:center top}.tippy-box[data-placement^=bottom]>.tippy-arrow{top:0}.tippy-box[data-placement^=bottom]>.tippy-arrow:before{top:-7px;left:0;border-width:0 8px 8px;border-bottom-color:initial;transform-origin:center bottom}.tippy-box[data-placement^=left]>.tippy-arrow{right:0}.tippy-box[data-placement^=left]>.tippy-arrow:before{border-width:8px 0 8px 8px;border-left-color:initial;right:-7px;transform-origin:center left}.tippy-box[data-placement^=right]>.tippy-arrow{left:0}.tippy-box[data-placement^=right]>.tippy-arrow:before{left:-7px;border-width:8px 8px 8px 0;border-right-color:initial;transform-origin:center right}.tippy-box[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-arrow{width:16px;height:16px;color:#333}.tippy-arrow:before{content:"";position:absolute;border-color:transparent;border-style:solid}.tippy-content{position:relative;padding:5px 9px;z-index:1}'),
      E.setDefaultProps({
        plugins: [T, W, X, Y],
        render: C
      }),
      E.createSingleton = function (a, b) {
        function c() {
          h = g.map(function (a) {
            return a.reference
          })
        }
        function d(a) {
          g.forEach(function (b) {
            a ? b.enable() : b.disable()
          })
        }
        void 0 === b && (b = {});
        var e, g = a, h = [], i = b.overrides;
        d(!1),
          c();
        var j = {
          fn: function () {
            return {
              onDestroy: function () {
                d(!0)
              },
              onTrigger: function (a, b) {
                var c = b.currentTarget
                  , d = h.indexOf(c);
                if (c !== e) {
                  e = c;
                  var f = (i || []).concat("content").reduce(function (a, b) {
                    return a[b] = g[d].props[b],
                      a
                  }, {});
                  a.setProps(Object.assign({}, f, {
                    getReferenceClientRect: function () {
                      return c.getBoundingClientRect()
                    }
                  }))
                }
              }
            }
          }
        }
          , l = E(k(), Object.assign({}, f(b, ["overrides"]), {
            plugins: [j].concat(b.plugins || []),
            triggerTarget: h
          }))
          , m = l.setProps;
        return l.setProps = function (a) {
          i = a.overrides || i,
            m(a)
        }
          ,
          l.setInstances = function (a) {
            d(!0),
              g = a,
              d(!1),
              c(),
              l.setProps({
                triggerTarget: h
              })
          }
          ,
          l
      }
      ,
      E.delegate = function (a, b) {
        function c(a) {
          if (a.target) {
            var c = a.target.closest(i);
            if (c) {
              var d = c.getAttribute("data-tippy-trigger") || b.trigger || N.trigger;
              if (!c._tippy && !("touchstart" === a.type && "boolean" == typeof l.touch || "touchstart" !== a.type && d.indexOf(S[a.type]) < 0)) {
                var e = E(c, l);
                e && (h = h.concat(e))
              }
            }
          }
        }
        function d(a, b, c, d) {
          void 0 === d && (d = !1),
            a.addEventListener(b, c, d),
            e.push({
              node: a,
              eventType: b,
              handler: c,
              options: d
            })
        }
        var e = []
          , h = []
          , i = b.target
          , j = f(b, ["target"])
          , k = Object.assign({}, j, {
            trigger: "manual",
            touch: !1
          })
          , l = Object.assign({}, j, {
            showOnCreate: !0
          })
          , m = E(a, k);
        return g(m).forEach(function (a) {
          var b = a.destroy;
          a.destroy = function (a) {
            void 0 === a && (a = !0),
              a && h.forEach(function (a) {
                a.destroy()
              }),
              h = [],
              e.forEach(function (a) {
                var b = a.node
                  , c = a.eventType
                  , d = a.handler
                  , e = a.options;
                b.removeEventListener(c, d, e)
              }),
              e = [],
              b()
          }
            ,
            function (a) {
              var b = a.reference;
              d(b, "touchstart", c),
                d(b, "mouseover", c),
                d(b, "focusin", c),
                d(b, "click", c)
            }(a)
        }),
          m
      }
      ,
      E.hideAll = function (a) {
        var b = void 0 === a ? {} : a
          , c = b.exclude
          , d = b.duration;
        R.forEach(function (a) {
          var b = !1;
          if (c && (b = n(c) ? a.reference === c : a.popper === c.popper),
            !b) {
            var e = a.props.duration;
            a.setProps({
              duration: d
            }),
              a.hide(),
              a.state.isDestroyed || a.setProps({
                duration: e
              })
          }
        })
      }
      ,
      E.roundArrow = '<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>',
      E
  });
