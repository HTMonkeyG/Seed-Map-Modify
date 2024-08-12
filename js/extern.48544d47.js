/* Extern menus & operations */
$.fn.topNavigate = function (a) {
  var b = $(this)
    , c = {
      nav: [b.find("#nav-world"), b.find("#nav-operations"), b.find("#nav-about"), b.find("#nav-mark")],
      menu: [$("body").find("#world-controls"), $("body").find("#map-controls"), $("body").find("#abouts"), $("body").find("#mark")]
    }
    , d = {
      showMenu: function (id) {
        c.menu[id].hasClass("hidden") ? (
          c.menu[id].removeClass("hidden"), c.nav[id].addClass("active")) : (
          c.menu[id].addClass("hidden"), c.nav[id].removeClass("active"));
        for (let i = 0; i < c.nav.length; i++)
          i != id && d.hideMenu(i);
      },
      hideMenu: function (id) {
        c.menu[id].addClass("hidden"),
          c.nav[id].removeClass("active")
      }
    };
  for (let i = 0; i < c.nav.length; i++)
    c.nav[i].on("click", function () { d.showMenu(i) });
};
$.fn.markMenu = function (a) {
  var b = this
    , c = {
      list: b.find("#mark-list"),
      addX: $("body").find("#mark-add-x"),
      addZ: $("body").find("#mark-add-z"),
      addName: $("body").find("#mark-add-name"),
      addButton: $("body").find("#mark-add-button")
    }, params = {};

  function encodeText(a) {
    return a += "",
      a.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
  }
  function flashRed(a) {
    a.addClass("errorflash"),
      setTimeout(function () {
        a.removeClass("errorflash")
      }, 1500)
  }
  function addListNode(hash, data, renamable) {
    var nodes = c.list.children();
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i].getAttribute("mark-hash") === hash) return !1;
    }
    var t0 = document.createElement("div")
      , t1 = document.createElement("input")
      , t2 = document.createElement("img")
      , t3 = document.createElement("img")
      , f = "X: " + encodeText(data.coord[0]);
    null != data.coord[1] && (f += " Y: " + encodeText(data.coord[1]));
    f += " Z: " + encodeText(data.coord[2]);
    t0.setAttribute("mark-hash", hash);
    t0.className = "mark-node";
    t1.className = "mini";
    t1.value = data.text;
    t2.src = "data:image/png;base64,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";
    t3.src = "data:image/png;base64,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";
    t2.className = t3.className = "mark-node-icon";
    t2.onclick = function () {
      var d = [CB3Libs.Long.fromNumber(data.coord[0]), CB3Libs.Long.fromNumber(data.coord[2])];
      a.triggerHandler('goto', d);
      a.triggerHandler('pinset', d)
    };
    t3.onclick = function () {
      HTPoiConfig.removePoi(hash.split("§")[1]);
      HTPoiConfig.updatePoi();
    };
    renamable ? (t1.onchange = function () {
      HTPoiConfig.modifyPoi(hash.split("§")[1], t1.value)
    }) : t1.setAttribute("readonly", !0);
    t0.appendChild(t2);
    t0.appendChild(t1);
    t0.appendChild(t3);
    t0.appendChild(document.createTextNode(f));
    c.list[0].appendChild(t0);
    return !0
  }
  function rmListNode(hash) {
    var nodes = c.list.children();
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i].getAttribute("mark-hash") === hash) {
        nodes[i].remove();
        return !0
      }
    }
    return !1
  }
  function clearListNode() {
    var nodes = c.list.children();
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].remove();
    }
  }
  function updateListNode() {
    clearListNode();
    var HTPois = HTPoiConfig.getAllPoi();
    HTPois && Object.keys(HTPois).forEach(function (a) {
      addListNode('htCustomize§' + a, { text: HTPois[a].name, coord: HTPois[a].coords }, !0)
    });
    try {
      var a = window.SimpleBar && window.SimpleBar.instances.get(c.list.get(0));
      a && a.recalculate()
    } catch (b) { }
  }
  function addMark(b, e) {
    e = e === !0;
    var f = c.addX.val()
      , g = c.addZ.val()
      , n = c.addName.val()
      , h = !1
      , i = !1
      , m = !1
      , o = !1;
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
    if ("undefined" === typeof n || n.length > 32)
      m = !0;
    h && !e && flashRed(c.addX);
    i && !e && flashRed(c.addZ);
    m && !e && flashRed(c.addName);
    h || i || m || (
      o = HTPoiConfig.createPoi({ x: f, z: g }, n),
      c.addX[0].value = '',
      c.addZ[0].value = '',
      c.addName[0].value = ''
    )
    !o && !e && (
      flashRed(c.addName)
      , flashRed(c.addX)
      , flashRed(c.addZ)
    );
    o && HTPoiConfig.updatePoi()
  }

  a.on("paramschanged", function () {
    params = SeedMapTiles.getParams();
    updateListNode()
  });
  a.on("applycustomizepoi", function () {
    updateListNode()
  });

  c.addButton.click(addMark)
};
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

/* Extern modules */
var HTPoiConfig = function () {
  var pois = {}, redraw = null, app = null, key = "HT_MAP_DATA";
  function getParamHash() {
    var params = SeedMapTiles.getParams();
    return params.platform.label + '/' + params.seed + '/' + params.dimension
  }
  function t() { app && app.triggerHandler("applycustomizepoi") }
  function st() {
    try {
      window.localStorage.setItem(key, JSON.stringify(pois))
    } catch (a) {
      window.gtag && window._enableAnalytics && window.gtag("event", "HT_ChunkApp_UserDataUpdateError")
    }
  }
  try {
    pois = JSON.parse(window.localStorage.getItem(key)) || {};
  } catch (g) {
    window.gtag && window._enableAnalytics && window.gtag("event", "HT_ChunkApp_UserDataLoadError")
  }

  return {
    createPoi: function (pos, name, dim) {
      var a = SeedMapTiles.getParams()
        , b = a.platform.label + '/' + a.seed + '/' + (dim ? dim : a.dimension)
        , c = Math.floor(pos.x) + '/' + Math.floor(pos.z);

      if (pois[b] && pois[b][c]) return !1;
      pois[b] || (pois[b] = {});
      pois[b][c] = { name: name, coords: [Math.floor(pos.x), null, Math.floor(pos.z)] };
      window.localStorage.setItem(key, JSON.stringify(pois));
      redraw && redraw();
      return !0
    },
    modifyPoi: function (hash, name) {
      var a = getParamHash();
      if (!pois[a] || !pois[a][hash]) return !1;
      pois[a][hash] = { name: name };
      st(); t();
      return !0
    },
    removePoi: function (hash) {
      var a = getParamHash();
      delete pois[a][hash];
      if (!Object.keys(pois[a]).length) delete pois[a][hash];
      st();
    },
    getPoisInRegion: function (tile) {
      var a = getParamHash()
        , b = [];
      if (!pois[a]) return b;
      Object.keys(pois[a]).forEach(function (d) {
        var c = d.split('/');
        c[0] = Number(c[0]) / 16, c[1] = Number(c[1]) / 16;
        if (tile.x <= c[0] && c[0] < (tile.x + tile.xL)
          && tile.z <= c[1] && c[1] < (tile.z + tile.zL))
          b.push([Math.floor(c[0]), Math.floor(c[1]), { data: pois[a][d], chunkPos: c }])
      });
      return b
    },
    getAllPoi: function () { return pois[getParamHash()] },
    getToolTipText: function (a) { return a[2].data.name },
    getHoverText: function (a) { return a[2].data.name },
    getCoords: function (a) { return [a[2].chunkPos[0] * 16, null, a[2].chunkPos[1] * 16] },
    updatePoi: t,
    onInit: function (e) {
      app = e;
      redraw = function () { e.triggerHandler("redrawmap") };
    }
  }
}(), HTSelectManager = function () {
  function a(a, b) { return a + ";" + b }
  var selectData = {}
    , f = 0;
  return {
    /**
     * @param {String} d - Poi type
     * @param {String} f - Poi hash
     */
    isPoiSelected: function (d, f) { return selectData[a(d, f)] },
    /**
     * @param {String} h - Poi type
     * @param {String} i - Poi hash
     * @param {String} t - Poi text
     * @param {Array} u - Poi Coords
     */
    selectPoi: function (h, i, t, u) { selectData[a(h, i)] = { state: !0, text: t, coord: u }; f++ },
    /**
     * @param {String} h - Poi type
     * @param {String} i - Poi hash
     */
    unselectPoi: function (h, i) { delete selectData[a(h, i)]; f-- },
    getNumberSelectedPois: function () { return f },
    getAllSelectedPois: function () { return selectData },
    clearSelection: function () { selectData = {} }
  }
}();