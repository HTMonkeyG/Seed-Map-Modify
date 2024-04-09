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
  }(jQuery),
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
