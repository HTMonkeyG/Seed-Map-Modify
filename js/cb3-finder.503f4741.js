"use strict";
Math.frac = function (a) { return a - Math.trunc(a) };
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
};
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
window.__seedMapPoisSprite = { "amethyst.png": { x: 134, y: 0, width: 26, height: 25 }, "ancient-city.png": { x: 0, y: 177, width: 16, height: 26 }, "bastion-bridge.png": { x: 30, y: 0, width: 26, height: 26 }, "bastion-stables.png": { x: 0, y: 26, width: 26, height: 26 }, "bastion-treasure.png": { x: 26, y: 26, width: 26, height: 26 }, "bastion-units.png": { x: 56, y: 0, width: 26, height: 26 }, "buried-treasure.png": { x: 160, y: 0, width: 24, height: 24 }, "cave-special.png": { x: 56, y: 26, width: 26, height: 26 }, "cave.png": { x: 0, y: 52, width: 26, height: 26 }, "desert-temple.png": { x: 26, y: 52, width: 26, height: 26 }, "desert-well.png": { x: 184, y: 0, width: 22, height: 25 }, "dungeon-skeleton.png": { x: 160, y: 24, width: 24, height: 24 }, "dungeon-spider.png": { x: 160, y: 48, width: 24, height: 24 }, "dungeon-zombie.png": { x: 160, y: 72, width: 24, height: 24 }, "dungeon.png": { x: 160, y: 96, width: 24, height: 24 }, "end-city-ship.png": { x: 52, y: 52, width: 26, height: 26 }, "end-city.png": { x: 82, y: 0, width: 26, height: 26 }, "end-gateway.png": { x: 82, y: 26, width: 26, height: 26 }, "fossil.png": { x: 134, y: 25, width: 26, height: 25 }, "golden-apple.png": { x: 134, y: 74, width: 23, height: 26 }, "igloo-basement.png": { x: 82, y: 52, width: 26, height: 26 }, "igloo.png": { x: 0, y: 78, width: 26, height: 26 }, "jungle-temple.png": { x: 26, y: 78, width: 26, height: 26 }, "lava-bucket.png": { x: 184, y: 25, width: 22, height: 25 }, "lava-cave.png": { x: 52, y: 78, width: 26, height: 26 }, "mansion.png": { x: 160, y: 120, width: 24, height: 24 }, "mineshaft.png": { x: 134, y: 100, width: 23, height: 26 }, "nether-fortress.png": { x: 78, y: 78, width: 26, height: 26 }, "ocean-monument.png": { x: 0, y: 130, width: 26, height: 23 }, "ocean-ruin-special.png": { x: 108, y: 0, width: 26, height: 26 }, "ocean-ruin.png": { x: 108, y: 26, width: 26, height: 26 }, "pillager-outpost.png": { x: 108, y: 52, width: 26, height: 26 }, "ravine-special.png": { x: 108, y: 78, width: 26, height: 26 }, "ravine-underwater-special.png": { x: 0, y: 104, width: 26, height: 26 }, "ravine-underwater.png": { x: 26, y: 104, width: 26, height: 26 }, "ravine.png": { x: 52, y: 104, width: 26, height: 26 }, "raw-copper.png": { x: 26, y: 130, width: 26, height: 22 }, "raw-iron.png": { x: 134, y: 50, width: 26, height: 24 }, "ruined-portal.png": { x: 78, y: 104, width: 26, height: 26 }, "shipwreck.png": { x: 184, y: 128, width: 21, height: 24 }, "spawn.png": { x: 0, y: 0, width: 30, height: 26 }, "stronghold.png": { x: 0, y: 153, width: 24, height: 24 }, "trail-ruin.png": { x: 104, y: 104, width: 26, height: 26 }, "trial-chamber.png": { x: 24, y: 153, width: 24, height: 24 }, "village-zombie.png": { x: 184, y: 50, width: 20, height: 26 }, "village.png": { x: 184, y: 76, width: 20, height: 26 }, "witch-hut.png": { x: 184, y: 102, width: 20, height: 26 } };
window.__seedMapPoisSpriteImage = "data:image/PNG;base64,iVBORw0KGgoAAAANSUhEUgAAAM4AAADLCAMAAAARDFxFAAAC+lBMVEUAAAC9myjj4+Pj4+Pj4+Pj4+O2kQC0jgCykQHj4+NCQkJ/f390dHQAAACPj480MzUbLTjooHRWhH3V1tcbJzC8vLwvLy6dnp46cmWqeqomUv9McGtmZmalkn94q6fBwcGvr683WyghIyMfDQP///+RZpG1emWwy8qoqKgqRFVNkX/Ly8zyuYeld6aWl5b/zAO+jnaP8dcGJCH/2UEvFQnZpA77+O8/ZHieb57KgmTQ8vJHJKlXTDjo9/eGcVkVFxh6WzlJUGWRX0OXayM7MylGLhPQyo1NTUuwg7DQi26rn43LxYNBOi9AaTPC2tqipKSMRShBJ5kwTiNQIrbPoPNlTiqtNC16W7XVzZbz81Q5Sl2YyrxsNiJJPzZxViy1jLWMiohMdjb/2SqOaBlYPicVXFSncSHxtYLZ0p/XmXMLTUKMasxdZFykSiiFYCJoIsre1aUrJRZ4JdVZIr/XXBF6f2wJODB2JgZhilNZWE2gbyFtlFvmkEHbaiWLMd/sq3zEv3dmMwDi2qu7Z0aZd0MylABwr0jsy0VPRj5NPSXGhA/p4LIkg3PsfE+1XT3yw5meiFeNbDzMxqfar5VEXERsd2nCc1Tw6LvbppErmIy/lmDrpXkihgTsyLKDhoPIXjRBAgG5lLlkR55wXk2pi0lSekkoUklclkVkpDqmdifmqSEyJRO+mr5cd18kOTWyZBHptwv93ch08fW/gFt7PTFDSydTFgimAgJmmXlMpoKEu1QlQBwicADq5tfk0lyteirMRiikJiTVsCLNQwhEaET10DhdQxfKTgf+7KmBloH+y+ZxaG7OimUqyc/8mYL/ERFRuoS4lAdEbOznyI/+/oe+uXGUbkr/wyuJNBxhAAD/oF5+QiaKt4pBVjY0X9p4UhDdhwH/agBAdkBBjDnhgCb99twjT8x/f5jbq4GLhW73zWiXnZjEdBizjvOhvquZPOYszbFl4N3CoMJwbo0cLBAuWNNKgpD/3U7pwTRagvOVymn1xABjAACmTOzxqtanAAAACXRSTlMA+5yqlxijHgcmGnBIAAAib0lEQVR42szYX0hTURwH8Hy8UypdBMNBURrDXCGROKisbsWWPuxhbmDhoslirAQfIhpCgfbQiyjBHtSKrREM92D4UlAMhURkYGgDY9CeNlLQB8EHqYe+v3PO9Vz3RyX697W2s/MTuR/On3t292k5si1ar/KXsm8r/KOMsUxYsehPSM4BXSTHUCbK763oMOwXdZz29ivthblyWHDkJSs6CrKdQ+GcxsY71dWPGhG8I3caKQZFVpCCynrEG4kk1iMRU0siEfF6Ewmv11pPlSdPnoyN4eXdu3cNlNra2rGxMckhjAsePedcVwelC29dIk97jYyu5yD6kTGbK7fCSIJzhy76DiI4FM4pC0147TzW+ojXajJRc08c/IbLNbeK31QkpysZ8vl8ql/t6VGTyaTf7092HDNyS1VV1SkeLmJjU5KDbuKMVst0ao1vBoUqJRJgHLuVxdRS77W3WFuo3bI7h2Ya59B8kxw/JeTLzsxkVbQEB5Z8fmNj4SuysbGRz1cBRBxQkMO6VFYSsTwnsDMnYreaMCicY7Jb0TZtcWpr379/X1NTA1FNzadPn9AkjjbTwAm6MN8kpyOE+EM9F1+96sqq1PbPlONgbMpyUFIMjyijDNN5Ca+j9BmjIysisgIOLHxI7GiQbG8cYIgTDLr0nB5E9WWvG49emMn2qEg34+QXFjY3NxcA2vz6dWEhTxyGkZD5eUk6fhycxq3FcelSp7ZCcNG8MuV2u6em3Pj5cRRzRVQSXhNXgEMeyWESzLCGhuXlmpqGhtevX+PTzpz2pyxXbxktd8evsPb4b+B0QlPIAQYgxrEoJzXOOkZHzDAvZDTxCjn3p6eXS3Hmcrnc6nbOFZbx3soj+x/2jrMPvcSh5PNwAJSHBWEciZEcCuMEAs9yuecOB+c4HG9yHwIBrBBewdBonKN1RqOoJMTasbK1gxSNztuKM2cq7hdxPJ7V1VWXJxj0SA42apbuZcuLh1c7+EbNOEaLBQQRbHF74Tgcz+rqPths1Z2XMNtstg91zSmHw6DwCiga50jdeaOoJLwEEKODBiI4bJ7V3B+q+HjmzMeKoftYONjfUKEQJ8g5UXTx8LWDZLEVdGDtUPbIMZvn583mQk5z8xtwnJlMxglOs47TrHGmlvQck7WFp77eqjV1nNg0MJSP0zGNY6DoOaKHOCqlJ5udIQy1NQ6LBTlVheyJg72rvz+FZcI4jY22/v7R0WqDwitTU4LDJ5uo1JeM5EAjPJIzNzfnIhDWjcfjiaLpQhdxupLJeNyv+lTcfCjxuNqtcerqJMciOK2tEiQxra3bOJhrSGcBx80D1Y+j508qqIhDDn4SkQhOBQkvj5VxMLmampoqbotU4AO6qOLiHlBWGcfFO4gTj4dCoMSTeEcrmVSf/jIHd8ZweDKVyrzs6+t7mUmFw2FxswygAgcwNDpfaKMWlXV2yPHaYUhE7Dx6ztrEaZaJtb1wOnxIPAkQNVR/Mi4mm6U0p7KyFZEkUBCzWawdh83W/+CBs29lZaXP+aDfZnOItYPKQGxkZCQWG4ix9wFRiegOOXzPpqbGQc5yztkmHScYzOGmE8XygceAZi4Y5KMTCtHIqD6mwTj51T/HGRoaGhgeHh7AOzgldjZ613PooKZxahHJCc5hWGh4olFI0CE4AGBwQEHY8U1wqohTvBXQkYZIMmZEcGy2wOLit6Ul50ou93nFufRtcdFmmzQovBIb6FpKBZBJ51LXQAwVccih8FNBSc73ibNnJ75X6DgGXL/H5fJEo54g/mM/gMigcdiioUgOTtT6nQ1nakXZnTMZDszOLrrdzpXPn3MrTvfi7Gw4fMKgyEqgGkm5dZWE5ES8vCU5NN3S6bUbN9bS6SZ53ynNUYiTRFQ1HlJ5Qn7a2fbtK+KIrwe4bHBkBAa9Ok6GTbbMnjjr0pAQI2XXc2Q0Dj9Ne1ii4AQ94LCvqcSJY29Wk1g8bP2E4hrHYgEHmFMah1KeQ+eOwcHJa9fa0mnBSbddaxscHDQospKyISNprSLXjpWtHTFSu3EUgIKw4B9WDYYIGnQSR/Wxu6ePXlhreEcOxgeRHKIQUeO0tbU9fizuO4/xQXJYhXMey0rRVoCIjZqtlVoZcMSZDaBCjkLdxsPt3ThDd3d3ay/IOHGweABiHMIckF+uS3L4qdDpvDxCsVEmR0awgzmd9+jS7pWt2IsPOdaW3Th0Ao1Sgi68gMV7jb3HSsWIUuGzAv2jD5BkdI8+Mjcz/RQbJdw/eJPiNCg7VepLZndOQTindEo/yZHZxvknD6aUosje4pR+zvbfPTZk0XUrxw4dOnYIOXjoJzNm09pEEIfx874kRNzSg5EsbQ6FgNhl6FFPFYRAvHgVIVRQqJBDFEQ/QGAFyUHI2VMpCELxlnbx0Eu99NZbzr3Fb+DzzMx2drJvGi8+bTY7O8bmx/53d/6/KGhht9X62gqCMpx1/3j9Vys/ks8qjCvDCScYhEHYC4NBr9PpDbj7NRwAp7jY1i6NeqOZO1L7GfPPpvP5FG/ECd1cQuAUasN6z5mf0ThNxPN9z29/+uQhauyaMnDfyLim1Ks9m8GZTtEljsdjfvRh4Ibh5iZfvr8p4wZbmuX9+7v3kSRJFFGF5yyd0TieBxRyXP/48QC7asxZXS4aR5fNOjj8YBDmccIWYe4myenp6XsEmyS5z4or13/lMxrHb7exkG2PqTGugSXHCkexzJA4VkR/ibPX7e7N5zw9rZ5LBAJtIIRye8G6OH1mwhczyuJ4KK7mdaoxrtWYs7LOJMoBEsdxFMlHfKU2NDQSZ29vPp0SJwjzOGFEnAQcp/jlhkDEqbKZ3JmccdW3WLxmw352zBmNw+rysxqDY1/iuHkc9w9xWKcWzlYAnI1MwhDXThmOEYOMEKtisM8l+WI8/rLgzjFn0rPTRIFlNQbHHmdxcsiyu1y+QiRRxOMZbQg9lbOg5rYGmDGirp1BHmcgi23n5CRJQIKa4+aejUOYw0OxigOtNVz0bm/uv8YCPYvjs7qeG40x5hjFhhTiIHU4ptJAwjjy2rFgEF47yrOdqOA86W5Ue85v8Jzi48ePHw6F7Tn758j3Tue54M42Z1IcXvqNYaoxFg2O2/J5RZzd3eUbGUkU4WA9DolTHP18dVqdPE6nAkd7TiE+fAAOeCzP2X+K7A92Lva5M+KMee54zcZ+2veLBseeq+4DcbxcvolkwAOgKDIWVEYR6X4nV2muPqZxcBzb9J04tjZMEq0+tOcUAiTgAZCwPGf/GXK+ObjY504Wx+PF0xAGh+N/wHEQU2nODU4vj9NrOSWeTek/1hl5GGGJwf6Qfvh580La4RFnNE6bj82GuFQa43K7wbHPz0XR7ODg1SuDE8c1OIoF0ThmGcdbQRh2OhsbPsJi29nBraAG5/CG54mNM+ENenhEE4kmPYvjMY3tF5fD8/Ph5QvgIM1qnLS1JofZJY5isSuNwSInj9N66KSeLVds9JxCXIGEV86VsD1nn48dsODtxdlr6zGK/95rZMKxxoltnNmsBgdT8/m82+1alcY4UegCwISjMCjF0WJQ8jy5uhJvP1tisA97QidEAXk0HD3O3goAlMXh2FsTxzU4ptJUsfVyOLx2SrThjefEMwcwYhVnAgUJoUoBCV+XxeGXXzk7+lbgulEc4/rXN+rlcjbjjdpowzu/ZO4wGgdrzi5iVRqjFjlc3HCrXvLsFGtD7TlfXgnC3PopVjznhJLrHXjwAxzOpDgyN+eHA4mDAIfnR2W5u4vnDo5X4rDBwfOCTYGNsxXkcLjIKdGGN/pPcIEDnBUxOKGCPBoywDnGjN3vGBzT7xTh8HipZ7Nx7OV1VNy+lXi2EptpcGjq5Au/EifX7xDG6nccVBuBeEub4brhhVOH42LBCaICnEHYspvrIByU4lTZTM6MmOORzjZmVvsdX5eaGqsGIY/jVOM4LiIXnas4QUDfQfeBBA/xxpFTpA0NjraZP2kzH1V7TrvfkVvZGqhx2r4BKDqQwY7+khWezUEkTs6DlKRAG1Z7zrIZq99hfTURDNQ421xHMtnmul4baph6nLzJWc9zWv0Og4LDT1ONM+pD42j1UY+Td1QZz7ZlebatnGf738RUsXUr9WxF+Z+04W9ezZg3bSiI47MtUmdpUCWgQInoUqnqwGAFmsHCkUxdqVIlL24TqYOHDIzNhiwGKk8tAxNDh2xdkFIx5ENkysDQKQNDR75A//fec87GrlGltv+An58VkH7cvbvn8zHrdhptZvQUOAU/yr8ozuZfLvh19CMpXV7kLWjT95fLidBgsFr5fpNqBXqj8UPoDXQNCZy/XzrPelYSp8B3YxyIkWCdLE59Px8nXc3EgauZ+EBECsNwNosivOmA4Xfdno8O9ZRb6W0lFQsUzsOUymXlI4CZLhaL+XSaQJK3b8CZTFaryYSwDg4GgybVCvTLy4YQwTAOZ3d6UMXZnXBCaEgKhjjBXwSoVLenepiLB9Q4TS96xoF24ZBtFp0FveaLGEmT1sni1F8U4MTZXRiHs7umB5BH6pO8vucBLMjr9qRGCMZRpjHNLmSa7VpN51it9pFCCZyj+bwDLeilrCSfIGChkKsRzGDg+5Z1cyPXzsePYHklgUi6ls7uexBnd3zAAYhzrxG2P5iPVOdAbrcn2yaNgwt/jqOeILzO4iBQKxwiYpxUdicczu7kbDPhbhEkDzj3RlvdnnQiyRgHMEBptUyz1QJQm4B240wBJFCIBlMKcmLtkKPd3CyX9Las5ZLXjrQOBYVGQ9eS2Z3vKWku1g4tf7F6wiiElxFNKHG+SRzbtg0Dh/uuG3a1buvL224H6o4fmqZ0tyIcaz6vVsFQrVZ7vV4VY4zzOIvzmENBBqckghnft8i5wAmHEVaP4/TDwBk5XoBo0B/F3Z6AKa1taF2ybeVs7GrdzufjY/TqjI/Hn11TuBvjQHk4zwXO8wzOYDCZLJerFb0ty/clztmZtM7Z2eUlHI9wuJrJ4mom4SCkOU4Qhf3RaBgGwyFbBzDlsnH43i6XAZSwDsF0zVbdgm00rfPpdbdL7rYDZzoFBNFUewhrPVgpdrYsDmoFCgdinEQ1k8XVzNnQ84KA4jQFtiCExyVx1qenEuf0dG082saBs0mccRqHFOOICeP0gEM0Uj3LUqGAcI6OfP/gwPcJR4aCRuNJQgKHq5ksrmbOQsIJoqHn9PtEQzi3cbenDYq1cfjMXoPLoKYIxkEM6IyPj8foDRPO5ro7ccSakShIP3NYBzjiYWIWZ/9lPg5XM1lczURgA80wwupB6hmS1No5hOBs642BcbNelzAepnGks0Gf6mYahyu0hTjPgaNrqBUA5+Li5UvC2du7uABOXVpH066uGtDVlaaxdUgpHOhBEgemiTzGUZschIAScL7am1JpbchuT8ZRkU3TzHHddU1zJw7cTOHMIewMMIV5UGcTOHuMQ2snH6e4mqmyKB08RLY+5hjjbk+7UtoA55u92ZRs4+RkC0c6G0W2d+0kTrncat3dlaG7u1aLNzmWJcxjYQTOVJAJHLaOZe3t2XZsnTdvCOU79ArxjdLojmpmX4kw+qAJPJypNEpZp7IpIRQYpU3FeJSObK7rdusWbIO88+mniUS6A4esZpForEIxDjY5GRxcyscprmbOSNFMDmoMOI0aFXAAp5KPg8gmcMZpHHqaLuvn8rkt516JgxHrhnFePG1ui61zfU0419cSp7iaibWDteIhlSLAIarRTjQMlHVOAGRUDNqzYQDcVho12+P7NNp2KY0W4vCqkn5XJRgLs/w6Wz5OYTWTAnVATkYbA/I20DghWwc4huz2xAglNzm1Wtv9abltyP3wWtpGY5zzc8I5P0/hKKX8DrOmrLM1U3W2tLNhYJz8aqZKo30K0tjigGTkDQNYR21yuNtTtkcm73ckzr3Y1QpwWOx34gYhX7k4hdVM4HgOQAK4GQ6eg1Awwout80x1e2KSuUGogahNCQcswtV24zAQh/ACHCnC4X8vqGYCJ5DBzBObAxwowikc7vY84W5P9pttHE37E5xY+XW2AwyaksRRk8JqpqbD10hOnwf4HHd7krjbM3NzXVNK31xLEQ7/qFmWTJ1tn0PBPkIB+wF/RXE1U9NRnqYXROMtzW5vbwu6PRkHYpxk6UNK4qhJjqfxtdx+tqf3OKmv+P+FqeyPmo0Dv4g3n9CmwTCMq+Cf/CEITnqpWGSMglBFF2/imIedasFbb1F6zDFjHbUHQRx4mprcJHgwWJTQglLEYxcpwVOhOA8K0vUiHV439OLzfl/SpCymdSA+rE3eONf+9n3vm+979nZtbfJPvdgKFIv0wPaGScRkS9B/sA25outJoMCZHJ0Ih/Ogny3RBU158X8B+uc21BhOs9lux3HQJkEIBPQSKgJLZF7B5QktLEzgHIT8B63FYYDooCvN8TA2/Dui0QEOQTgcB0I/WyJOqmcpiOdZS0++5Pv+KEfnrEdOFNKc0w8fPly6VC6XW63WXVKZKcR5CDWie1AD2tl5iHjc9sFxouqBQg2cWrUWqFq9c4fljkgIeDBxnFTPEtv6fMG2s7qzszPQ6R1rMg45UUhxTqfjvH//HlEQNhr0hRgB1Gw219rttYAoLNSEA/kRTmkuESfVsxTEfEGTs6Y3eFcdmLqkSbJu6jZw0pzTCOfVX+BAYlNVr6lqu9nc2FCJSAg9ahiEoIAcp1a7A4kXk3HSPEtc9y0AOM5OadVb+YobuWk6rlUShdhKwtjqGhMrif39/b09dFDdZWq19vb2tre3Q5z3lcrPRmP8wj8rlZeNRoXl3AEcPj4wpginNoFzPhkn1bMEjgn57wYFO7uCM910CyPXF4XYSsLYMgwEPJ6OU/n4sVLBaITh0lKlUllCjHmmlsv9a6R+v6wS0BinVrsBASo4RjhQHCfyLOcJiD0HniWu5xR53RsVZE1eNweWNCi6SkkuiMJ4JWEYW8AZGrGVxKNHj7a3X72imbaNExIuhTiflpY+vamICE+eOCmIHxHGcUJtlMvqGOfiQRzmFSTjiGICDi4STkbTvVVfs7PmoOZrA0+X7Cym1Ng5Bc1Wt2sYEo9nxcHsOnW0cxQvPR0HpQC3UUK5jU0ATTaYHKXk0YmZfExsyoUmH7b1tm15RVeT9GL1R0EeuFn961eb4VDq1+8N6wZ4jOG9IcXZ6TiYW5+AJAonOlc7TxGT3gQ4Gxtl+iKBiG6mfJET4oAnwIHPdgickuR6xaKHpCkOHF8ZWLLl6ZhsgXPa5TwGNBw7p51Op99Hfw9wQLK42O/3YziyxIfxSQetyuoTUWJKxbmSAw5f5hAKv43S6CwsvI4phoMaEOk6M/lCnCJALNPEz7BkV5Yx9/JBZaPMqRt1oAxxQvHMOJu9Duu8VnubIQ7unqqqAoQ9qxEOfLYDOMidQ+FY66azU1OKnut45jpm2LqbOS8KgXNa55WgXu92hxTL03HoXvWgtz9uJe8AKMJhYkTInTFODtto2kgTCn+IOZ478/PPni1Az57Nz1++HMPhpQAPnIaeJXJn3XSV6o7jrY58x/NMcyU74oscXteAA5gtMN0bO6f3799XVQDs7u5++/ZtdxenOMabxvCZhUj71OqfinNh7iDO3IXD4JSy8iiPFYGiKZmqK2N8CgUFk407p8DBsCB7DOAgngWHoL/3Yji9cwrPOSzWOAsJz21c4bmTFw+Ijc7yMpWAZYgKwfKyKMRMvjEQYMalwJUyI8sz84pWqK7ahKPZJV4KAAQanjj1bp1iaTYc6YV6KZS6qXAcGp9mk6FAKnYJdDHWz3Z6wmc7FE7BcSVbyq7kM5rkWNKK6cmKFo4OTTaU6DqGpt41KOY4gfA3iufPn3/+jNZ4RFHvNSVZ71dA86snyRD9awLOEVKSz4YrAc7bt4Tz9i3HiTzLW4REVYAU3kZ9b1BdlbMrtq3h3mOag4HnrSsMh0muv7o3pGpAwUw4EtOLVoDTukn2kcJxxHYbPE2Coh1ciJOsP+IIySYfJGYsx9N11ANZsnTLch0HBc6P7XeQOqwSSDwOcBZJYGFEnGwSZzMJRxABtEZqAwY0s+AQRngM+JNx2H4nY5m65+lFV0eJyyuWK7vAie93DNBE+53pODIU4aiPs7ScCH+vEU6QOMmfGz2NQyJOqmcJHM1FoX5XQon2RqWMDUm6NrHf6QIn2u9MxeGDuqm21F6vh+fHhKeM30gkIaWf7TQvBVyEE/6fVM8S2zfbdQtIHEs3PVfSIBuJJAppzine++IinhgRZ4rh8O/9fvQFPir3ffPF0XMKKSFN4l5Bbu7smbOobhA7ncvBZwvEcYIg1bNE7lDK6BDWbC4WOS4mHZWCFOd0JpxISohzTGA6foR0nAfHAp+NzzBoDpWNJtwVTLYEwy7ds6TcyRR8G/L9L3QK2eQVpDin03C4iIpQcMYL/G/qzqDFaSCK46JeEptSyHZbJGvLKiJbDKsoiC1axBIQoVuKJ7ulB2+2BptTLz150MOiPQS8uD1UPPZDeNjLQhEPfgkP+wkE/28yySQdO1rFWv/azSQP1/x48968eel2z5r0FHtgnjlNOmMOcJYzzwbeyZJLpkWzVDKLGfJOtphZ0AVdXWNK/R1zx5205di5QLZjpTvHOb59MzOmZmZKGlRiQ5N6BbL+WdtQlt4GzqQ6+vJlVIUmfrrT1rWYdzKBdzYC71z/K+8FXYJb3dQlHNvC00c86h5VQeTbhBMmahY3TNsY0RXgPEhoa+sP3wsqVrolmvELn2PU7Lq1f/Qo0NG+Vbdr4eb6ylyivn6lvrEYJ006HykVFiwKy6JuJixN1+27rlsul90mXsNms9FoeAkcmlt3ID02DR3dzvlOJN3K2brDY6e0kYydDVwhHCDgxRTDYeklFd20hQWR7UEWWxTtP/3bcOgO+30wNMt4NcHVbAInAaMznHiSMNNp2x8USoEK2FjZaZM3pkqZEjgKhFNgw1JhjXAYzOu3b3fvkDiO87KT9p3BZABNJgPHz9kvnd/DobaMuOmoOlZYFN1MzLRvmGoNz+v3Pc/FEEz9+HM5gnkNHPoS4ejVju1XX7x/AeETxap+3X6mh5NtPlHjigKHVSixm+Z7EIVF0c1sUuAgWuCkfrnsfQvOYjj6j3GOkNkqbeTodhuviv+1cwSTqNnk7VuAIuGk6DaZDz7f+nz+PFUt3AfCAiUsopsJJbqZDYp91x26bqMMz8BH5KA4zh0iwV/ojlhg7wNn/1UFb1t7WKm8eunbh/fDPltQ2aCmnuJAwyn6bGocdtdbH7fwdR5H8MzjPIkW+2Vw4JvdXeDQ18kksKAqsL/GqwI/qgquF7MZXuSIZVThnaAsxpy6is7kVeTjlMWKdmHhEhbRzeThILqZZcg9OXEbEMjwosSgixVXjSMXORtBkTNNFDkZtXdofXnKOpNPz4cBLyxcsiXKBcKCVEAADMbzvCCMKHZEWkNS2yWat28Fjt7GuoMih9yOOmdixYscVndK3tnaeh7THM6b97wz+ebNMjjakjjIA4BB9OwyGl0XOHWfihyqc1DkCBzR+iDRkLYMC3CUnUmyWLHYQVWftEQ3IyweJpuH5QZySYxrMU60GakBpxIrcuxOLeyzFQPvlCA+5LFz6dLx8RZ0fHzp0oMHuqbuTDILxc/nz8I7SUuIIyx9oAAHPI3+cHji4QgojgN7r9ejyXYZLJhpESYVOZbuRPLTh7qj7rPJOOrOJFkSuQAMSUuEIyy4f5psVBFQVutjvnleM2puzOGQb6Iix3KiImfg22le5GzP/9zoBomtxpQC7kGUCGgFU3QmZRxoIY7+Szg6aGazd73e5cvEwgMnKnIsx+E1TrzIWaAFOHJn8j1f+0NLLHgkS5SpI0uZqprhEJU01QcnQ5ziEu+k1WrPWq1xq8VZeOCIIqc6CmqcUdXKUZGj2CIxHIhwcAhx5M7kVd7K4xaMIxzJEqW2yOLBM/DHycmJh+WHeYllNkiP4cRYoiLHrzxqV5naFaSCoySOwaTGkVt5wOGtPG6J44QWgaNLOPAM3AGGfh8+omUUZGQBzbNnR+1264f7ufuHtr+/Xwn0at9KsyJH+IbjYLAczs2nEk4UPLJF5xOZWQROQ8Yh1+AXM6Cro8u77YWtD+GbGhOAlDhyZ/Ip70yGlpTIBbJF54osiBnGg6NHB0DBWQkcoMxrQWNKiSN3QZWdyUVNPrWlTLsCip8yVWzlIMmFOO32RWmeMS1uG0IYxnEgdlHugio6k3+M05jHQezwmXZqOVHY3Igk8oHUQ1F2Jn/Pgm2oC3nYgrp49cNEDTEcBYwa5zn/Qzhy+l79J38GtqVdA0neEQASzook/uflXVObU8xBmnnoHJpz31TZ65WMK5UaR9NS253tlCZ3JYXirpMm0RJAK8ExOlrHkHDyQskPf/sAgQLHPRJGq8aRlfDOZnoz4R1cm8OBAkhQ7OAKIY1GB7PZbLy3t1Y4iB3LsExtbqrFcUSnFS759Gln51M+vzM6OJi9m80OWq1V4ojMls0+Yspmw8ymcdWNejgUUw2P3R4zXbgQzjdtLXAgGYddLRhJFdQ4LHCu3b52DR/eORqNx+OD8XhvjXDMLNM541wwMGM4BMIlcPby+RG8k8ehhzTQG49R3P8rHC6Bw2UbNh/9Do6mrQlOaEwbaXGuxkGw7IxG+VFAA5F3VsSjxiHnJHHEFeAkJXBmCBjEDcPZa0EAWj1OQhzH5KtJx+gEA1xhTD/CIektpLPxwcG41yPf0JActCY45wIe7dA41AKac7zOlXGgdcfpOtSEB5YBDIxKTlfjM40FzmOuMHwA2mphro0JBvPuHca9wWC6ehxJdDGlb9fNCMesb+spJQ54ptMBWChwyFGzXm+QzxPOGkirdw2DcFJGinAMo1tX4pwinJ38YMBSQOCl/PrgmN3NuwgfhoPAubvZNUMcxoJjOPwfcDStaKTA0zW6oEkZRVxR4yAhTKGWDgEIcw5n+nrgEE/OuMt+Uhy/C8nIEQ3DkcVxxLtVQjJ2sh44BFTcNAJtFumu1DjJnMJwwLI2NGytqTuAcep8TVXiyPvvdZlo8RReSBfo8NPGlPwv18o1ysbUv2/ZfGfn/nEbhKEwgHf19mRHCKkTo0/gezBm5w6R2Fk5ReUu2SvnAFGugLxwASbEwNTvUbchbccq6kP5hgdm8k8yjz+D/zbfEcKRipZcOW17Pp+tJXKOq7UYtq0IjkISBxHO+bA4xxvC2kXEF7uu7/s1B8Ouk8Ahmib9htQ1CtGVoxCL8FEIR31y6i+OksxhjDbDcLk0zRxjnhNz0o3kEAal8wfnrsEsq2kyZgjhdJrnxpg836c1xiVx0sj+ew4R7pdhCEUxjkURvI/xmWiLnCwj6jpCuGaZDA6amvehLMexLEPTaJ1vk6NUhjgHGCJlsbnDwfuGOWmx3XB22+A4BBAiiDIibgoyGjXFCFAIWGrhNUatgVlxoNmJ4QBEzhnz4j3vehSNqarlMbpgYCWLEIRc6cG5c3jKVZUfjxotTjuXXkEtYzhE3AaEvOQgPzlPojk8Zdrv65ot6fNt3dmsFdQKfvm4Fs65/fWxCc52fkwJmup7O2dsAyAMA8HeW/0a3ixreA/vhD+QDtHQJC/fBidzFkmRdw64f/6jA7i3zo5UNFYyZhr1sBzXqYezAWQ+t9KxqaMwHZYDeAEI1MNyAJ8TEqhnlSNSzyqHmISOj5HFGBrT0dIBMqPIBFpnL6gTwfeBI1pnN24dPnTaOvvBRb1WgcSiltPR+mfT0nnQOF4feMv5wQXVVYGtFosojgAAAABJRU5ErkJggg==";
window._enableAnalytics = !1;
window.__forcedVersion = 77;
window.__analytics_biomeRequests = 0;
function isTouch() { return "ontouchstart" in window && (navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) }

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
}(), CB3SharedTaskManagerMain = {
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

var ChunkApp = {
  config: {
    maxSeeds: 100,
    distantChunkWidth: 16,
    maxChunkWidth: 80,
    minChunkWidth: 1
  },
  Platform: {
    java_1_21_lb: {
      label: "Java 1.21 (LB)",
      cb3World: {
        edition: CB3Libs.Edition.Java,
        javaVersion: CB3Libs.JavaVersion.V1_21,
        config: {
          largeBiomes: !0
        }
      }
    },
    java_1_21: {
      label: "Java 1.21",
      cb3World: {
        edition: CB3Libs.Edition.Java,
        javaVersion: CB3Libs.JavaVersion.V1_21,
        config: {}
      }
    },
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
    bedrock_1_21: {
      label: "Bedrock 1.21",
      cb3World: {
        edition: CB3Libs.Edition.Bedrock,
        bedrockVersion: CB3Libs.BedrockVersion.V1_21,
        config: {}
      }
    },
    bedrock_1_20_60: {
      label: "Bedrock 1.20.60",
      cb3World: {
        edition: CB3Libs.Edition.Bedrock,
        bedrockVersion: CB3Libs.BedrockVersion.V_1_20_60,
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
}, appHelpers = {
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
}, chunkAppLoader = function () {  // Init functions
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
  function b() {
    $("img.loader").addClass("hidden");
    $("#app").removeClass("hidden")
  }
  function c(a) {
    var c = $("body");
    a.compassImage = new Image,
      a.compassImage.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAjCAYAAACOysqWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAIpSURBVHjatNZLiE5hGADgQ+NSQ9OURCZqNmMxFposXJKRpCyUwmQhC0VqllJjYTMiudQoQ8Sw4VloyjVZKLdMFqOMJhZWyqWGSLLQHAvv1On4rzPHX1+93/vX93znuydI6ihbsT2bS9O0YknqBN5F+S/ABjzEGDr/B3AOmzCO50UDW3Aq4l9I0VokcA0dEX8OYKAooNPfX4LZ+BTAOOYXAVxBV8RzM0CKE1MFOjCYqc/JAT/ROBXgPPZWAFL0TBZowy3MqAJ8QcNkgD4cyOVm4UMOSLG/XmAR7sWk5v/7VgJ4Xy9wFEdK5C+VaHyi7KgVaIreL8zlB3AS3WWAkVqBgziTy/XnluvxMsj6akAD7sQKyg7X/RId6S8BPKkG7MPlTL0HjzCtzFxdLYEsrwTcxoqIuzEU50+l5XwjB9wsB3ThesS7MIzmamdVmqZJDGEWaS0FDGIJ1mEk9kJSCxDI0wxwMQ9sxOEAXuYmuVZgJl4F8BvNWaAHx3A3Mwd1AYE0xaMgRe8EMA/P8AJr6nxl/LOxsADfA5me4EJU2uttvNyViaXRZt/EW2dzhUZWZp8pURpjMTSVO+TiBTKaoKVKL99Gb7LIssitrXTZoKWWYXgcjQ1ncu2RW1PEpf865mkMe3JfsKoI4FPs8t3RaILFRQIfcSjiFDszcSHAB5zObMifcYx8xeqigJOZ+hgeYLSoL/iFs5n6tnJn/2SBN+jN5YbwA23VgD8DAFBvAMPgFT/mAAAAAElFTkSuQmCC";
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
      c.find("#map-controls").mapControls(a);
      c.find("#map-canvas").chunkMap(a);
      b();
      a.triggerHandler("uiloaded");
      setTimeout(w => window._enableAnalytics = !0, 5e3)
    }
  }
  function d() {
    $("#app").html("This app is not supported by your browser. Please make sure your browser is up to date and try again."),
      b()
  }
  var e = {
    errorInit: function () {
      $("#app").html("There was an error loading the app. Please try again later"),
        window.gtag && window.gtag("event", "CB_ChunkApp_InitError"),
        b()
    },
    init: function (b, e) {
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
  };
  return e
}();

$.fn.seedControls = function (a) {
  var b = this
    , c = {
      error: "错误",
      fileError: "从level.dat中抓取种子失败, 请检查level.dat有效性并重试",
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
}, $.fn.mapControls = function (a) {
  var b = this
    , c = {
      slider: $("body").find("#map-zoom-slider"),
      gotoX: $("body").find("#map-goto-x"),
      gotoZ: $("body").find("#map-goto-z"),
      gotoButton: $("body").find("#map-goto-go"),
      touchEnabled: $("body").find("#map-touch-enabled"),
      gridLines: $("body").find("#show-grid-lines")
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
      touchChanged: function () { a.triggerHandler("touchset", c.touchEnabled.is(":checked")) },
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
      buttonPress: function (a) { 13 === a.keyCode && c.gotoButton.click() },
      saveMap: function () {
        window.gtag && window._enableAnalytics && window.gtag("event", "CB_ChunkApp_SaveMap"),
          a.triggerHandler("saverequest")
      },
      secondaryChanged: function () { a.triggerHandler("secondarychange", c.hideSecondary.is(":checked")) },
      gridLinesChanged: function () { a.triggerHandler("gridlineschange", c.gridLines.is(":checked")) }
    }
    , f = {
      zoomChange: function (a, b, d) { c.slider.slider("value", [100 * d]) },
      pinChanged: function (a, b, d) { c.gotoX.val(b.toString()), c.gotoZ.val(d.toString()) },
      touchChanged: function (a, b) { c.touchEnabled.prop("checked", !!b) }
    };
  c.gotoButton.click(e.goTo);
  c.gotoX.add(c.gotoZ).on("keypress", e.buttonPress);
  c.gridLines.change(e.gridLinesChanged);
  b.find("#map-save").on("click", e.saveMap);
  a.on("zoomchange", f.zoomChange);
  a.on("pinset", f.pinChanged);
  c.gridLines.prop("checked", !a.initialHideGridLines);
  this.find("a").filter(function () {
    return "undefined" != typeof $(this).data("scrollto")
  }).each(function () {
    var a = $(this);
    a.click(function () {
      $(a.data("scrollto")).ScrollTo();
      return !1
    })
  });
  "undefined" != typeof Hammer && isTouch() && (
    a.on("touchchange", f.touchChanged),
    c.touchEnabled.prop('checked', true),
    window.setTimeout(e.touchChanged, 0),
    c.touchEnabled.change(e.touchChanged),
    this.find("#map-touch").removeClass("hidden")
  );
  setTimeout(function () {
    c.gotoButton.trigger("click", !0)
  }, 0)
};

/** Renderer */
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
  function resizeCanvas(isInit) {
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
      p = height - mapDisp.canvas.offsetTop - 68,
      mapDisp.canvas.width = m,
      mapDisp.canvas.height = p,
      mapDisp.imageSmoothingEnabled = !1,
      mapDisp.mozImageSmoothingEnabled = !1,
      mapDisp.webkitImageSmoothingEnabled = !1,
      mapDisp.msImageSmoothingEnabled = !1,
      d = m,
      e = p,
      right = d - G,
      bottom = e - H,
      left = E,
      top = F,
      isInit && x.setCenter(CB3Libs.Long.ZERO, CB3Libs.Long.ZERO),
      a.triggerHandler("mapdimensionschanged", [[m, p]]),
      MapRenderer.redraw()
  }

  var d, e, right, bottom, left, top, k = this, l = $("body")
    , m = ChunkApp.Platform.java
    , n = !a.initialHideSecondary
    , o = !a.initialHideGridLines
    , p = !1, q = 1, mapDisp = k.get(0).getContext("2d");

  mapDisp.imageSmoothingEnabled = !1;
  mapDisp.mozImageSmoothingEnabled = !1;
  mapDisp.webkitImageSmoothingEnabled = !1;
  mapDisp.msImageSmoothingEnabled = !1;
  a.loadingBackground && k.css("background-color", "rgba(" + a.loadingBackground + ",0.1)");

  var mapText = {
    chunkLoad: "加载区块中...",
    chunkLoadShort: "加载中...",
    to: "到",
    from: "从",
    forLabel: "版本"
  }
    , t = !1;

  setTimeout(function () { t = !0 }, 9e4);

  var options = {
    seed: CB3Libs.Long.ZERO,
    seedString: void 0,
    chunkWidth: 0.5,  // Pixels per chunk
    distantView: !1,
    startX: -6,
    startZ: -4,
    intervalFactor: 50,
    interval: 10,    // Chunks per text
    gridStartX: left,
    gridEndX: right + 1,
    gridStartY: top,
    gridEndY: bottom + 1,
    pin: void 0,
    selectMode: !1
  }, v = {
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
    clamp: function (a, b, c) {
      return a > c ? c : b > a ? b : a
    },
    nearInteger: function (a) {
      var b = a % 1;
      return -.999 > b || b > 0 && .001 > b ? Math.floor(a) : b > .999 || 0 > b && b > -.001 ? Math.ceil(a) : a
    },
    formatNr: function (a) {
      return a += "", a.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
    }
  }, MapRenderer = function () {
    var c, l = 0, borderColor = "#332B28", t = "#f0cccc", w = "208,227,240", loadColor = "#332B28", isClip = !1, y = a.drawAll, z = {
      formatNr: v.formatNr,
      chunkXToScreen: function (a) { return left + Math.round((a - options.startX) * options.chunkWidth) },
      chunkZToScreen: function (a) { return top + Math.round((a - options.startZ) * options.chunkWidth) },
      getFirstChunkX: function () { return Math.floor(options.startX) },
      getFirstChunkZ: function () { return Math.floor(options.startZ) },
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
        b = Math.ceil(options.startX / b) * b;
        a && (b -= b % a);
        b = (b - options.startX) * options.chunkWidth + left;
        return b
      },
      getInScreenFirstY16: function (a) {
        var b = options.interval;
        b = Math.ceil(options.startZ / b) * b;
        a && (b -= b % a);
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
    };
    var A = function () {
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
        , R = null
        , S = {};
      S.mapChanged = function (f) {
        if ("undefined" != typeof options.seed) {
          a.triggerHandler("mapDrawingStarted", [options, m]);
          var g = f === !0 || y;
          L = L + 1 | 0,
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
            R = null;
          R = a.getRenderer(x, A, E - x, F - A, options.chunkWidth, function (a, b) {
            var c = z.chunkXToScreen(a) + 1
              , d = z.chunkZToScreen(b) + 1;
            return [c, d]
          });
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

      function PutLoadText() {
        EndClip();
        mapDisp.font = "12px sans-serif";
        mapDisp.textAlign = "end";
        mapDisp.textBaseline = "middle";
        mapDisp.fillStyle = "white";
        mapDisp.fillText(mapText.chunkLoadShort, right - 5, 16);
        BeginClip()
      }
      function ClearLoadText() {
        EndClip();
        mapDisp.fillStyle = borderColor;
        mapDisp.clearRect(right - 55, 0, 60, 32);
        BeginClip()
      }
      /**
       * Draw poi with no icon
       * @param {Number} b - x
       * @param {Number} c - z
       * @param {Number} d - Use rgb
       * @param {String} e - Color
       */
      function V(b, c, d, e) {
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
            mapDisp.fillStyle = !d ? "rgba(" + k + "," + d + ")" : "rgb(" + j + ")",
            BeginClip(),
            options.distantView ? (mapDisp.beginPath(),
              mapDisp.arc((l + n) / 2, (m + o) / 2, 4, 0, 2 * Math.PI, !1),
              mapDisp.fill()) : mapDisp.fillRect(l, m, n - l, o - m)
        }
      }
      function W(a, b) {
        return a >= e && b >= l && o >= a && v >= b
      }
      function X(a, b) {
        return a -= e,
          b -= l,
          a * (v - l + 1) + b
      }
      function Y(a, b) {
        if (W(a, b)) {
          var c = X(a, b);
          H[c] = 1
        }
      }
      function Z(a, b) {
        if (!W(a, b))
          return !1;
        var c = X(a, b);
        return 1 === H[c]
      }
      function $(c, e, f, g) {
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
          if (!R.hasNext())
            return I = !1,
              void h();
          if (a.async)
            M++,
              R.renderNextAsync(mapDisp, function (b, c, d, e, f, g) {
                if (L !== i)
                  return !1;
                if (BeginClip(), g)
                  mapDisp.fillStyle = t,
                    mapDisp.fillRect(b, c, d, e);
                else if (f && a.loadingBackground) {
                  //var h = mapDisp.globalCompositeOperation;
                  //mapDisp.globalCompositeOperation = "destination-over";
                  //mapDisp.fillStyle = loadColor;
                  //mapDisp.fillRect(b, c, d, e);
                  //mapDisp.globalCompositeOperation = h
                }
                return !0
              }, function () {
                M--, L === i && h()
              }, function (a, b, c) {
                L === i && V(a, b, 1, c)
              }, function () {
                DrawGridLine(),
                  DrawPin()
              }, function () {
                PutCoordText()
              }, function () {
                BeginClip(),
                  Border()
              }, [options.gridStartX + 2, options.gridStartY + 2, options.gridEndX, options.gridEndY])
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
    }();

    function BeginClip() {
      isClip || (
        isClip = !0,
        mapDisp.save(),
        mapDisp.beginPath(),
        mapDisp.rect(
          options.gridStartX + 2, options.gridStartY + 2,
          options.gridEndX - options.gridStartX - 5,
          options.gridEndY - options.gridStartY - 4
        ),
        mapDisp.clip()
      )
    }
    function EndClip() {
      isClip && (
        isClip = !1,
        mapDisp.restore()
      )
    }
    /** Fill border with specify color, clear map area */
    function Border() {
      L = !1;
      //mapDisp.fillStyle = borderColor;
      mapDisp.clearRect(0, 0, d, e);
      a.loadingBackground && (
        BeginClip(),
        //mapDisp.fillStyle = borderColor,
        mapDisp.clearRect(left, top, right - left, bottom - top),
        EndClip()
      )
    }
    /** Clear entire canvas */
    function ClearMap() {
      mapDisp.fillStyle = borderColor;
      mapDisp.fillRect(0, 0, d, e)
    }
    /** Draw a grid with given params */
    function Grid(color, lineWidth, c, d, inteval) {
      var j, k;
      for (mapDisp.strokeStyle = color,
        mapDisp.lineWidth = lineWidth,
        mapDisp.beginPath(),
        j = c; right + .5 >= j;)
        mapDisp.moveTo(Math.round(j) + .5, Math.round(top) + 2),
          mapDisp.lineTo(Math.round(j) + .5, Math.round(bottom) + 1),
          j += inteval;
      for (mapDisp.stroke(),
        mapDisp.beginPath(),
        k = d; bottom + .5 >= k;)
        mapDisp.moveTo(Math.round(left) + 2, Math.round(k) + .5),
          mapDisp.lineTo(Math.round(right) + 1, Math.round(k) + .5),
          k += inteval;
      mapDisp.stroke()
    }
    /** Draw grid lines */
    function DrawGridLine() {
      if (o) {
        var a = options.chunkWidth
          , b = options.interval
          , c = options.distantView
          , d = c ? b * a : 5 * a
        c || Grid("#888", 1, z.getInScreenFirstX16(!1) - b * a, z.getInScreenFirstY16(!1) - b * a, a);
        Grid("#88C", c ? 1 : 2, z.getInScreenFirstX16(!c && 5) - d, z.getInScreenFirstY16(!c && 5) - d, d);
      }
    }
    /** Put scale division */
    function PutCoordText() {
      var b, c, e = left + .5, k = top + .5, p = options.interval;
      mapDisp.strokeStyle = options.selectMode ? "#0F0" : "#444",
        mapDisp.lineWidth = "2",
        mapDisp.beginPath(),
        mapDisp.moveTo(e, bottom + 1),
        mapDisp.lineTo(e, k),
        mapDisp.lineTo(right, k),
        mapDisp.lineTo(right, bottom + 1),
        mapDisp.lineTo(e, bottom + 1),
        mapDisp.stroke(),
        mapDisp.font = "10px sans-serif";
      b = z.getInScreenFirstX16(!0),
        c = top + 16,
        mapDisp.textAlign = "center",
        mapDisp.textBaseline = "alphabetic",
        mapDisp.fillStyle = "white",
        BeginClip();
      for (var q = z.getFirstCoordinateX16(); right >= b;) {
        mapDisp.fillText(z.formatNr(q.toFixed(0)), b, c);
        b += options.chunkWidth * p;
        q += 16 * p;
      }
      b = left + 4;
      c = z.getInScreenFirstY16(!0);
      mapDisp.textAlign = "start";
      q = z.getFirstCoordinateZ16();
      if (bottom >= c) {
        mapDisp.textBaseline = "middle";
        c > top + 28 && mapDisp.fillText(z.formatNr(q.toFixed(0)), b, c);
        c += p * options.chunkWidth;
        q += 16 * p;
        for (; bottom >= c;) {
          mapDisp.fillText(z.formatNr(q.toFixed(0)), b, c);
          c += p * options.chunkWidth;
          q += 16 * p;
        }
      }
      mapDisp.drawImage(a.compassImage, right - 45, bottom - 55);
      EndClip();
    }
    /** Put seed text on top-left of canvas */
    function PutSeedText() {
      var b, c;
      mapDisp.textAlign = "start",
        mapDisp.font = "11px sans-serif",
        mapDisp.fillStyle = "white",
        c = 11,
        b = left;
      var t = ", " + mapText.forLabel + " " + m.label
        , v = options.seedDisplay || options.seed;
      "string" == typeof a.header ? mapDisp.fillText(a.header, b, c + 8) : "undefined" == typeof options.seedString ? mapDisp.fillText("种子: " + v.toString() + t, b, c + 8) : (mapDisp.fillText("种子: ", b, c + 8),
        mapDisp.font = "10px sans-serif",
        mapDisp.fillText(options.seedString + t, b + 35, c),
        mapDisp.fillText(v.toString(), b + 35, c + 16))
    }
    /** Put detailed text of pointer on bottom-right of canvas */
    function PutDetailText(posX, posZ, chunkX, chunkZ, attachText) {
      L = !0,
        mapDisp.font = "11px sans-serif",
        mapDisp.textAlign = "end",
        mapDisp.fillStyle = "white";
      var i = right - 5
        , k = bottom + 15;
      mapDisp.fillText(`X: ${z.formatNr(posX.toFixed(1))}  Z: ${z.formatNr(posZ.toFixed(1))}`, i, k);
      k += 14;
      mapDisp.fillText(`区块 (${z.formatNr(Math.floor(chunkX / 16))} / ${z.formatNr(Math.floor(chunkZ / 16))} ${mapText.from} (${z.formatNr(chunkX)} / ${z.formatNr(chunkZ)} ) ${mapText.to} (${z.formatNr(chunkX + 15)} / ${z.formatNr(chunkZ + 15)})`, i, k);
      k += 14;
      attachText && (
        mapDisp.font = "11px sans-serif",
        mapDisp.fillText(attachText, i, k)
      )
    }
    /** Draw the pin on canvas */
    function DrawPin() {
      if (P.pinRect = void 0,
        "undefined" != typeof options.pin) {
        var a = options.pin
          , b = left + (a[0] - options.startX) * options.chunkWidth;
        left > b || b > right || (l = top + (a[1] - options.startZ) * options.chunkWidth,
          top > l || l > bottom || (P.pinRect = [Math.floor(b) - 3, Math.floor(l) - 3, 6, 6],
            mapDisp.fillStyle = "rgb(255,255,255)",
            mapDisp.beginPath(),
            mapDisp.moveTo(0, 0),
            mapDisp.arc(b, l, 7, 0, 2 * Math.PI, !0),
            mapDisp.closePath(),
            mapDisp.fill(),
            mapDisp.fillStyle = "rgb(255,0,0)",
            mapDisp.beginPath(),
            mapDisp.moveTo(0, 0),
            mapDisp.arc(b, l, 5, 0, 2 * Math.PI, !0),
            mapDisp.closePath(),
            mapDisp.fill()))
      }
    }
    /** Put detailed text when pointer is out */
    function DetailTextOnPin() {
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
    }
    function DelayPutText() {
      null !== M && clearTimeout(M),
        M = setTimeout(DetailTextOnPin, 800)
    }
    /** Calculate grid params */
    function Q() {
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
    var L = !1, M = null, P = {
      pinRect: void 0,
      initialDraw: function () { P.redraw() },
      clearFooter: function () {
        L = !1;
        //mapDisp.fillStyle = borderColor;
        mapDisp.clearRect(0, bottom + 2, right, e - bottom - 1);
        DelayPutText()
      },
      redrawFooter: function (a, b, c, d, e) {
        EndClip();
        P.clearFooter();
        PutDetailText(a, b, c, d, e)
      },
      setXBoundaries: function () { },
      clearAll: function () { /*mapDisp.fillStyle = borderColor;*/ mapDisp.clearRect(0, 0, d, e) },
      redraw: function () {
        b();
        c = (new Date).getTime();
        Q();
        EndClip();
        Border();
        PutSeedText();
        PutCoordText();
        BeginClip();  // Start clip area, restrict drawing operation after.
        DrawGridLine();
        A.mapChanged(!1);
        EndClip();  // Remove clip area, cancelled restriction.
        DrawPin();
        DelayPutText()
      },
      drawImage: function () {
        Q();
        EndClip();
        Border();
        PutSeedText();
        PutCoordText();
        BeginClip();
        DrawGridLine();
        A.mapChanged(!0);
        EndClip();
        DrawPin();
        DetailTextOnPin()
      }
    };
    return P
  }()
    , x = {
      setX: function (a) {
        a !== options.startX && (a = v.limitInt32(a),
          a = v.clamp(a, -2.5e6, 2.5e6),
          a = v.nearInteger(a),
          options.startX = a)
      },
      setZ: function (a) {
        a !== options.startZ && (a = v.limitInt32(a),
          a = v.clamp(a, -2.5e6, 2.5e6),
          a = v.nearInteger(a),
          options.startZ = a,
          MapRenderer.setXBoundaries())
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
        var c = x.getChunkFromCoords(a, b);
        options.pin = [v.clamp(c[0], -2.5e6, 2.5e6), v.clamp(c[1], -2.5e6, 2.5e6)]
      },
      setPinAtCanvas: function (b, c) {
        var d = x.getChunkFromScreen(b, c);
        if ("undefined" != typeof d) {
          if ("undefined" != typeof MapRenderer.pinRect) {
            var e = MapRenderer.pinRect
              , f = e[0]
              , g = e[0] + e[2]
              , h = e[1]
              , i = e[1] + e[3];
            if (b >= f && g >= b && c >= h && i >= c)
              return void x.removePin()
          }
          window.gtag && window._enableAnalytics && window.gtag("event", "CB_ChunkApp_PinSetViaInputDevice")
          options.pin = d;
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
        var g = f / options.chunkWidth, t1;
        options.chunkWidth = f,
          t1 = Math.log10(1 / options.chunkWidth * options.intervalFactor),
          options.interval = Math.ceil(t1),
          (Math.frac(t1) > 0 && Math.frac(t1) <= 0.3) ? options.interval = Math.pow(10, options.interval - 1) * 2 :
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
      setSeed: function (a, b, c, d) { v.setSeed(b, c, d), MapRenderer.redraw() },
      setSecondary: function (a, b) { n = !b, MapRenderer.redraw() },
      setGridLines: function (a, b) { o = b, MapRenderer.redraw() },
      setHidePoi: function (a, b) { hidePoi = b, MapRenderer.redraw() },
      setSelectMode: function (a, b) { options.selectMode = b, MapRenderer.redraw() },
      goTo: function (a, b, c) {
        x.setCenter(b, c),
          x.setPin(b, c),
          MapRenderer.redraw()
      },
      setZoomPercent: function (a, b) {
        var c = y.getMinMaxZoom()
          , d = c[0] + b * (c[1] - c[0])
          , e = left + (right - left) / 2
          , j = top + (bottom - top) / 2;
        y.setZoom(e, j, d),
          MapRenderer.redraw()
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
        MapRenderer.drawImage();
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
        MapRenderer.clearAll(),
          MapRenderer.redraw()
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
          MapRenderer.redraw()
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
        MapRenderer.redraw()
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
          c ? (MapRenderer.redraw(),
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
              options.chunkWidth !== g && MapRenderer.redraw()
          }
        }
      },
      mouseMoved: function (b) {
        var c = b.pageX - this.offsetLeft
          , d = b.pageY - this.offsetTop
          , e = x.getCoordsFromScreen(c, d);
        if ("undefined" == typeof e)
          return void MapRenderer.clearFooter();
        var f = e[0] / 16
          , g = e[1] / 16
          , h = null;
        a.getHoverText && (h = a.getHoverText({
          x: Math.floor(e[0]),
          z: Math.floor(e[1]),
          chunkX: f,
          chunkZ: g
        })),
          MapRenderer.redrawFooter(e[0], e[1], 16 * Math.floor(f), 16 * Math.floor(g), h),
          a.isClickable && (k.get(0).style.cursor = a.isClickable(c, d) ? "pointer" : "default")
      },
      mouseLeft: function () {
        B.off(),
          MapRenderer.clearFooter()
      },
      mouseEntered: function () {
        B.on()
      },
      dragging: function (a) {
        var b = a.pageX
          , c = a.pageY;
        z.drag(b, c) && MapRenderer.redraw()
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
          a.onChunkClick(f, g) && MapRenderer.redraw()
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
        touchSet: function (a) { C.touch.enabled = a },
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
                MapRenderer.redraw())
          }
        },
        dragEnd: function () {
          C.touch.lastDragX = 0,
            C.touch.lastDragY = 0,
            C.touch.lastDragXLeftOver = 0,
            C.touch.lastDragYLeftOver = 0
        },
        transformEnd: function () { C.touch.enabled && (C.touch.lastScale = 1) },
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
                options.chunkWidth !== d && MapRenderer.redraw()
            }
          }
        }
      },
      setPinAtScreen: function (a, b, c) {
        return a -= c.offsetLeft,
          b -= c.offsetTop,
          x.isInsideMap(a, b) ? (x.setPinAtCanvas(a, b),
            MapRenderer.redraw(),
            !0) : !1
      }
    };

  k.on("mousewheel", C.mouseScrolled);
  k.mousemove(C.mouseMoved);
  k.dblclick(C.dblClicked);
  k.mousedown(C.mouseDown);
  k.on("mouseleave", C.mouseLeft);
  k.on("mouseenter", C.mouseEntered);
  a.on("seedapply", A.setSeed);
  a.on("goto", A.goTo);
  a.on("zoomsetpercent", A.setZoomPercent);
  a.on("saverequest", A.sendMap);
  a.on("platformchange", A.setPlatform);
  a.on("secondarychange", A.setSecondary);
  a.on("gridlineschange", A.setGridLines);
  a.on("selectmodechanged", A.setSelectMode);
  a.on("hidepoichange", A.setHidePoi);
  a.on("redrawmap", A.redrawMap);
  a.on("dimensionchanged", A.dimensionChanged);

  if ("undefined" != typeof Hammer) {
    {
      Hammer(k.get(0))
        .on("hold", C.touch.hold)
        .on("pinch", C.touch.pinch)
        .on("transformend", C.touch.transformEnd)
        .on("drag", C.touch.drag)
        .on("dragend", C.touch.dragEnd)
        .on("doubletap", C.touch.doubletap)
    }
    k.on("doubleclick", C.touch.doubletap),
      a.on("touchset", A.touchSet);
    var D = !1;
    k.on("touchstart", function (a) {
      C.touch.enabled && (D = x.isInsideMap(a.originalEvent.touches[0].pageX - this.offsetLeft, a.originalEvent.touches[0].pageY - this.offsetTop))
    }),
      k.on("touchmove", a => C.touch.enabled && D && a.preventDefault())
  }
  y.setZoom(0, 0, null != a.initialChunkWidth ? y.toZoomFactor(a.initialChunkWidth) : y.zoomFactor);
  x.setCenter(CB3Libs.Long.ZERO, CB3Libs.Long.ZERO);
  var E, F, G, H;
  $(window).resize(x => resizeCanvas(!1));
  resizeCanvas(!0);
  a.triggerHandler("canvasinit", [k.get(0)]);
  a.on("uiloaded", x => resizeCanvas())
};

function SeedMapTiles(a, b) {
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
    , h = b.nrParallel
    , i = function () {
      function i(c, d) {
        LRUCache.clear(),
          b.onParamsChanged(c, d),
          a.triggerHandler("paramschanged"),
          a.getHoverText && a.getHoverText.clear(),
          requestQueue = [],
          s = [],
          t = {},
          u = {}
      }
      /**
       * Calculate tile coords
       */
      function j(a, b) {
        var c = params.tileSize
          , d = params.tileScale;
        return {
          x: Math.floor(a / c) * c,
          z: Math.floor(b / c) * c,
          xL: c,
          zL: c,
          scale: d
        }
      }
      /** Split area */
      function splitArea(a, b, c, d) {
        for (var e = params.tileSize, f = params.tileScale, g = Math.floor(a / e), h = Math.floor(b / e), i = Math.floor((a + c + 1) / e), j = Math.floor((b + d + 1) / e), k = [], l = h; j >= l; l++)
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
      function loadAll() { for (; h > pending && requestQueue.length > 0;) loadSingle(requestQueue.shift()) }
      function loadSingle(a) {
        // If current request is processed, 
        // then directly load next one;
        // else post message to a spare worker,
        // and wait for it.
        a.beforeLoad() ? (pending += 1,
          b.loadTile(a.params, a.tile, function (b) {
            // When worker finished the request,
            pending -= 1;
            setTimeout(loadAll, 0);
            // Invoke callback to pass the data back.
            a.cb(b)
          })
        ) : loadAll()
      }

      /**
       * Push a request into queue
       * @param {*} a - Tile coords
       * @param {Function} b - Check whether is not loaded
       * @param {Function} c - Callback when loaded
       */
      function pushRequest(a, b, c) {
        requestQueue.push({
          params: params,
          tile: a,
          beforeLoad: b,
          cb: c
        });
        1 > pending && loadAll()
      }

      /**
       * @param {*} a - Tile coords
       * @param {Function} c - Detect params change
       * @param {Function} d 
       * @param {Function} g - Draw
       */
      function getTileData(a, c, d, g) {
        var h = chunkHash(a);
        if (LRUCache.has(h))
          g(null, LRUCache.get(h))
        else if (t[h])
          t[h] = g, u[h] = d
        else {
          t[h] = g;
          u[h] = d;
          pushRequest(a, function () {
            return u[h] ? u[h]() ? (delete u[h],
              delete t[h],
              !1) : !0 : !1
          }, function (d) {
            // Data processor
            if (!c()) {
              var g = null;
              t[h] && (g = t[h],
                delete t[h],
                delete u[h]);
              var i = d && {
                tile: a,
                hits: d.error ? d : b.processTile(d, a)
              };
              LRUCache.set(h, i);
              if (i.hits.error && (s.push(h), window.gtag && f > e)) {
                e += 1;
                var j = 1 === e && i.hits.errorStack && Math.random() < .01
                  , k = i.hits.errorStr + " (" + e + ") (" + (navigator.hardwareConcurrency || 0) + ")";
                j && (k += " (" + i.hits.errorStack + ")");
                window.gtag("event", "CB_ChunkApp_ChunkLoadError", { errorMsg: k })
              }
              g && g(i)
            }
          })
        }
      }
      function chunkHash(a) { return a.x + "-" + a.z }
      /**
       * @param {*} a 
       * @param {*} b 
       * @param {*} c 
       * @param {*} d 
       * @param {*} e 
       * @returns {Array} 0 is data found in cache, 1 is the other
       */
      function getTilesFromCoord(a, b, c, d, e) {
        var f = splitArea(a, b, c, d, e)
          , g = []
          , h = [];
        return f.forEach(function (a) {
          var b = chunkHash(a);
          LRUCache.has(b) ? h.push(LRUCache.get(b)) : g.push(a)
        }),
          [h, g]
      }
      var LRUCache = new QuickLRU({ maxSize: 2048 })
        , s = []
        , t = {}
        , u = {}
        , params = Object.assign({
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
          return params.tileScale >= 1 ? a : Math.floor(a / params.tileScale) * params.tileScale
        };
        a.getHoverText = memoizeQuickLRU(function (a) {
          var c = x(a.chunkX)
            , d = x(a.chunkZ)
            , e = chunkHash(j(c, d))
            , f = LRUCache.get(e);
          return f ? b.getHoverText(c, d, f, params) : void 0
        }, {
          maxSize: 100,
          hash: function (a) {
            return x(a.chunkX) + " " + x(a.chunkZ)
          }
        })
      }
      a.onCanvasClick = function (a, c) {
        b.onCanvasClick && b.onCanvasClick(a, c, params)
      },
        a.isClickable = b.isClickable;
      var requestQueue = []
        , pending = 0;
      loadAll();
      var A = $('<span>Failed to load region. <button style="text-decoration: underline" class="retry-now unstyled-button">Try again</button></span>');
      A.find(".retry-now").click(function () {
        s.forEach(function (a) {
          LRUCache.delete(a)
        }),
          s = [],
          a.getHoverText && a.getHoverText.clear(),
          a.triggerHandler("hideerror", [d]),
          a.triggerHandler("redrawmap", [])
      });
      return {
        getParams: function () { return params },
        setParams: function (a) {
          var b = Object.keys(a).filter(function (b) {
            return params[b] !== a[b]
          });
          b.length < 1 || (params = Object.assign({}, params, a),
            i(params, b))
        },
        flushCache: function () { LRUCache.clear() },
        /**
         * 
         * @param {Number} c - First chunk x to fill
         * @param {Number} e - First chunk z to fill
         * @param {Number} f - Width
         * @param {Number} g - Height
         * @param {Number} h - Chunk width
         * @param {Function} i - Cast chunk pos to screen pos
         * @returns 
         */
        getRenderer: function (c, e, f, g, h, i) {
          var j = !1
            , k = !1;
          w && w.onCancel();
          /** Detect whether params changed */
          function m() { return l !== params }
          var l = params
            , n = {
              hasNext: function () { return !j },
              /**
               * Render a region
               * @param {CanvasRenderingContext2D} l - Map canvas
               * @param {Function} n 
               * @param {Function} p - Complete drawing
               * @param {Function} r - Draw poi with no icon
               * @param {Function} prePoiDraw - Things to do before draw pois
               * @param {Function} postPoiDraw - Things to do after draw pois
               * @param {Function} t 
               * @param {Array} u - Map area pos in canvas
               */
              renderNextAsync: function (l, n, p, r, prePoiDraw, postPoiDraw, t, u) {
                function doPaintTile(c, e) {
                  var f = i(c.tile.x, c.tile.z);
                  if (c.hits.error) {
                    if (!n(f[0], f[1], c.tile.xL * h, c.tile.zL * h, !0, !0))
                      return;
                    a.triggerHandler("showerror", [d, A, !1, "error", !0])
                  } else {
                    if (!n(f[0], f[1], c.tile.xL * h, c.tile.zL * h, !0, !1))
                      return;
                    b.paintTile(l, e, c.tile, c.hits, r, h, i, u, params)
                  }
                }
                function renderAll(a) {
                  b.beforeMapRepaint();
                  a.forEach(function (a) {
                    doPaintTile(a, "biomes")
                  });
                  prePoiDraw();
                  a.forEach(function (a) {
                    doPaintTile(a, "slimeChunks")
                  });
                  a.forEach(function (a) {
                    doPaintTile(a, "pois")
                  });
                  postPoiDraw();
                  b.onMapRepainted(params)
                }

                if (j) throw new Error;
                j = !0;
                var y = getTilesFromCoord(c, e, f, g)
                  , loaded = y[0]
                  , unloaded = y[1];
                renderAll(loaded);
                var C = 0;
                unloaded.length < 1 && p();
                unloaded.forEach(function (a) {
                  C++;
                  getTileData(a, m, function () {
                    return m() || k
                  }, function (a) {
                    C--;
                    if (a && !k) {
                      t();
                      var b = getTilesFromCoord(c, e, f, g)[0];
                      renderAll(b)
                    }
                    1 > C && p()
                  })
                })
              },
              onCancel: function () { k = !0 }
            };
          return w = n, n
        }
      }
    }();
  SeedMapTiles.getParams = function () { return JSON.parse(JSON.stringify(i.getParams())) };
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
    a.on("applycustomizepoi", function () {
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
    a.on("mapdimensionschanged", function (a, c) { b.onMapDimensionsChanged(c[0], c[1]) }),
    a.on("selectmodechanged", function (a, c) { b.setSelectMode(c), HTSelectManager.clearSelection() }),
    a.on("canvasinit", function (a, c) { b.init(c, i.getParams()) }),
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
};

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
};
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
          //var a = d.select.val();
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
            //d.select.prop("disabled", !a),
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
            //d.select.val([]).trigger("change"),
            //d.select.select2("updateResults"))
            d.select.trigger('change'))
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
      placeholder: "选择生物群系",
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
};
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
};
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
};
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
            , e = -1 !== c.indexOf("biomes") && "depth0" === g
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
    , POIConfigs = {}
    , hashFunc = {
      chunk: function (a) { return a[0] + "//" + a[1] },
      xzBlock: function (a, b) { return a + "/" + b },
      xyBlockArr: function (a) { return hashFunc.xzBlock(a[2][0], a[2][2]) }
    };
  POIConfigs[CB3Libs.POI.AmethystGeode] = {
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
    fillColor: "98,69,149",
    getHash: hashFunc.xyBlockArr
  },
    POIConfigs[CB3Libs.POI.AncientCity] = {
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
        var c = POIConfigs[CB3Libs.POI.AncientCity].getCoords(b);
        return "Ancient City @ " + a(c[0]) + " / " + c[1] + " / " + a(c[2])
      },
      fillColor: "11,47,44",
      getHash: hashFunc.chunk
    },
    POIConfigs[CB3Libs.POI.BastionRemnant] = {
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
        var b = POIConfigs[CB3Libs.POI.BastionRemnant]._getType(a);
        return null == b ? null : "Type: " + b
      },
      getTooltipText: function (a) {
        var b = POIConfigs[CB3Libs.POI.BastionRemnant]._getType(a);
        return "堡垒遗迹 (" + b + ")"
      },
      getImg: function (a) {
        return "hoglin_stable" === a.type ? "stables" : "treasure" === a.type ? "treasure" : "bridge" === a.type ? "bridge" : "units"
      },
      fillColor: function (a) {
        return null == a.type ? "107,107,107" : "units" === a.type ? "107,107,107" : "hoglin_stable" === a.type ? "245,0,122" : "treasure" === a.type ? "139,69,19" : "bridge" === a.type ? "8,145,17" : "0,0,0"
      },
      getHash: hashFunc.chunk
    },
    POIConfigs[CB3Libs.POI.BuriedTreasure] = {
      gaId: "Bt",
      imgSrc: "buried-treasure.png",
      dimension: CB3Libs.Dimension.Overworld,
      maxTileSize: f.big,
      getHoverText: function (b, c) {
        var d = POIConfigs[CB3Libs.POI.BuriedTreasure].getCoords(b, c);
        return "Treasure @ " + a(d[0]) + " / " + a(d[2])
      },
      getTooltipText: function () {
        return "埋藏的宝藏"
      },
      getCoords: function (a, b) {
        var c = b.edition === CB3Libs.Edition.Java ? 9 : 8;
        return [16 * a[0] + c, null, 16 * a[1] + c]
      },
      fillColor: "166,117,78",
      getHash: hashFunc.chunk
    },
    POIConfigs[CB3Libs.POI.Cave] = {
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
        return "芝士洞穴 (" + POIConfigs[CB3Libs.POI.Cave]._getSize(a[2]) + ")"
      },
      fillColor: function () {
        return "68,68,68"
      },
      getHash: function (a) {
        return hashFunc.xzBlock(a[2].reference.pos[0], a[2].reference.pos[2])
      }
    },
    POIConfigs[CB3Libs.POI.DesertTemple] = {
      gaId: "Dt",
      imgSrc: "desert-temple.png",
      dimension: CB3Libs.Dimension.Overworld,
      maxTileSize: f.normal,
      getTooltipText: function (a, b) {
        return b.edition === CB3Libs.Edition.Java && b.javaVersion >= CB3Libs.JavaVersion.V1_18 ? "可能的沙漠神殿" : "沙漠神殿"
      },
      fillColor: "143,121,0",
      getHash: hashFunc.chunk
    },
    POIConfigs[CB3Libs.POI.DesertWell] = {
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
      fillColor: "40,57,161",
      getHash: hashFunc.chunk
    },
    POIConfigs[CB3Libs.POI.Dungeon] = {
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
        var c = POIConfigs[CB3Libs.POI.Dungeon]._getTypeText(a[2][3]) || "未知生物"
          , d = b.edition === CB3Libs.Edition.Bedrock && b.bedrockVersion >= CB3Libs.BedrockVersion.V1_18 ? "可能的" : "预计的";
        return d + "地牢(" + c + ")"
      },
      getHoverText: function (b) {
        return b[2].map(function (b) {
          var c = POIConfigs[CB3Libs.POI.Dungeon]._getTypeText(b[3]) || "Dungeon";
          return c + " @ " + [a(b[0] + ""), b[1], a(b[2] + "")].join(" / ")
        }, "").join(", ")
      },
      getHash: hashFunc.xyBlockArr
    },
    POIConfigs[CB3Libs.POI.Fossil] = {
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
      },
      getHash: hashFunc.chunk
    },
    POIConfigs[CB3Libs.POI.EndCity] = {
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
      },
      getHash: hashFunc.chunk
    },
    POIConfigs[CB3Libs.POI.EndGateway] = {
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
      },
      getHash: function (a) {
        return hashFunc.xzBlock(a[2].x, a[2].z)
      }
    },
    POIConfigs[CB3Libs.POI.NetherFortress] = {
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
      },
      getHash: hashFunc.chunk
    },
    POIConfigs[CB3Libs.POI.Igloo] = {
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
      },
      getHash: hashFunc.chunk
    },
    POIConfigs[CB3Libs.POI.JungleTemple] = {
      gaId: "J",
      imgSrc: "jungle-temple.png",
      dimension: CB3Libs.Dimension.Overworld,
      maxTileSize: f.normal,
      getTooltipText: function (a, b) {
        return b.edition === CB3Libs.Edition.Java && b.javaVersion >= CB3Libs.JavaVersion.V1_18 ? "可能的丛林神庙" : "丛林神庙"
      },
      fillColor: "114,133,10",
      getHash: hashFunc.chunk
    },
    POIConfigs[CB3Libs.POI.WoodlandMansion] = {
      gaId: "Ma",
      imgSrc: "mansion.png",
      dimension: CB3Libs.Dimension.Overworld,
      maxTileSize: f.small,
      getTooltipText: function (a, b) {
        return b.edition === CB3Libs.Edition.Java && b.javaVersion >= CB3Libs.JavaVersion.V1_18 ? "可能的林地府邸" : "林地府邸"
      },
      fillColor: "160,82,45",
      getHash: hashFunc.chunk
    },
    POIConfigs[CB3Libs.POI.Mineshaft] = {
      gaId: "M",
      imgSrc: "mineshaft.png",
      dimension: CB3Libs.Dimension.Overworld,
      maxTileSize: f.veryBig,
      getTooltipText: function () {
        return "废弃矿井"
      },
      fillColor: "148,116,0",
      getHash: hashFunc.chunk
    },
    POIConfigs[CB3Libs.POI.OceanMonument] = {
      gaId: "Om",
      imgSrc: "ocean-monument.png",
      dimension: CB3Libs.Dimension.Overworld,
      maxTileSize: f.normal,
      getTooltipText: function () {
        return "海底神殿"
      },
      fillColor: "100,100,220",
      getHash: hashFunc.chunk
    },
    POIConfigs[CB3Libs.POI.OceanRuin] = {
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
        return POIConfigs[CB3Libs.POI.OceanRuin]._getLabel(a)
      },
      getHoverText: function (a) {
        return POIConfigs[CB3Libs.POI.OceanRuin]._getLabel(a)
      },
      getHash: hashFunc.chunk
    },
    POIConfigs[CB3Libs.POI.PillagerOutpost] = {
      gaId: "Po",
      imgSrc: "pillager-outpost.png",
      dimension: CB3Libs.Dimension.Overworld,
      getCoords: d,
      maxTileSize: f.normal,
      getTooltipText: function () {
        return "掠夺者前哨站"
      },
      fillColor: "96,63,28",
      getHash: hashFunc.chunk
    },
    POIConfigs[CB3Libs.POI.Ravine] = {
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
      },
      getHash: function (a) {
        return hashFunc.xzBlock(a[2].x, a[2].z)
      }
    },
    POIConfigs[CB3Libs.POI.OreVein] = {
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
        return ["copper" === a[2].type ? "铜矿脉" : "铁矿脉", "(" + POIConfigs[CB3Libs.POI.OreVein]._getSize(a[2]) + ")"].join("")
      },
      fillColor: "96,63,28",
      getHash: function (a) {
        return hashFunc.xzBlock(a[2].reference[0], a[2].reference[2])
      }
    },
    POIConfigs[CB3Libs.POI.RuinedPortalOverworld] = {
      gaId: "Rp",
      imgSrc: "ruined-portal.png",
      dimension: CB3Libs.Dimension.Overworld,
      maxTileSize: f.big,
      getTooltipText: function () {
        return "可能的废弃传送门"
      },
      fillColor: "109,9,109",
      getHash: hashFunc.chunk
    },
    POIConfigs[CB3Libs.POI.RuinedPortalNether] = {
      gaId: "Rpn",
      imgSrc: "ruined-portal.png",
      dimension: CB3Libs.Dimension.Nether,
      maxTileSize: f.big,
      getTooltipText: function () {
        return "可能的废弃传送门"
      },
      fillColor: "109,9,109",
      getHash: hashFunc.chunk
    },
    POIConfigs[CB3Libs.POI.Shipwreck] = {
      gaId: "Sw",
      imgSrc: "shipwreck.png",
      dimension: CB3Libs.Dimension.Overworld,
      maxTileSize: f.big,
      getTooltipText: function () {
        return "沉船"
      },
      fillColor: "108,88,97",
      getHash: hashFunc.chunk
    },
    POIConfigs[CB3Libs.POI.SlimeChunk] = {
      gaId: "Sc",
      dimension: CB3Libs.Dimension.Overworld,
      maxTileSize: f.chunkClassifier,
      getTooltipText: function () {
        return "史莱姆区块"
      },
      fillColor: "29,145,44",
      fillColorOuter: "40,199,60",
      getHash: hashFunc.chunk
    },
    POIConfigs[CB3Libs.POI.Spawn] = {
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
      fillColor: "50,50,50",
      getHash: hashFunc.chunk
    },
    POIConfigs[CB3Libs.POI.Stronghold] = {
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
      },
      getHash: hashFunc.chunk
    },
    POIConfigs[CB3Libs.POI.TrailRuin] = {
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
      fillColor: "123,80,20",
      getHash: hashFunc.chunk
    },
    POIConfigs[CB3Libs.POI.Village] = {
      gaId: "V",
      imgSrc: {
        default: "village.png",
        zombie: "village-zombie.png"
      },
      dimension: CB3Libs.Dimension.Overworld,
      maxTileSize: f.normal,
      getImg: function (a) { return a.zombie ? "zombie" : "default" },
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
        return POIConfigs[CB3Libs.POI.Village]._getLabel(a) || "Village"
      },
      getHoverText: function (a) {
        return POIConfigs[CB3Libs.POI.Village]._getLabel(a)
      },
      getHash: hashFunc.chunk
    },
    POIConfigs[CB3Libs.POI.WitchHut] = {
      gaId: "Wh",
      imgSrc: "witch-hut.png",
      dimension: CB3Libs.Dimension.Overworld,
      maxTileSize: f.normal,
      getTooltipText: function () {
        return "女巫小屋"
      },
      fillColor: "169,44,212",
      getHash: hashFunc.chunk
    },
    POIConfigs[CB3Libs.POI.ItemOverworld] = {
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
      },
      getHash: hashFunc.chunk
    },
    POIConfigs[CB3Libs.POI.HTCustomize] = {
      gaId: "HTc",
      imgSrc: "golden-apple.png",
      dimension: CB3Libs.Dimension.Overworld,
      maxTileSize: f.small,
      fillColor: "145,81,13",
      getTooltipText: HTPoiConfig.getToolTipText,
      getHoverText: HTPoiConfig.getHoverText,
      getHash: function (a) {
        return hashFunc.xzBlock(Math.floor(a[2].chunkPos[0] * 16), Math.floor(a[2].chunkPos[1] * 16))
      },
      getCoords: HTPoiConfig.getCoords
    },
    POIConfigs[CB3Libs.POI.LavaPool] = {
      shortId: "Lp",
      imgSrc: {
        bucket: "lava-bucket.png",
        cave: "lava-cave.png"
      },
      getImg: function (a) {
        return "undergroundLake" === a.type ? "bucket" : "cave"
      },
      dimension: CB3Libs.Dimension.Overworld,
      maxTileSize: f.chunkClassifier,
      splitPois: b,
      fillColor: "211,83,14",
      getHash: function (a) {
        return hashFunc.xzBlock(a[2].pos[0], a[2].pos[2])
      },
      getTooltipText: function (a) {
        return "cave" === a[2].type ? "熔岩圈层" : "可能的岩浆湖"
      },
      getTooltipAdditionalText: function () {
        return "Never dig straight down"
      },
      getCoords: function (a) {
        return a[2].pos
      }
    },
    POIConfigs[CB3Libs.POI.TrialChamber] = {
      shortId: "Tc",
      imgSrc: "trial-chamber.png",
      dimension: CB3Libs.Dimension.Overworld,
      maxTileSize: f.big,
      getTooltipText: function () {
        return "试炼密室"
      },
      getCoords: function (a) {
        return null != a[2] ? a[2] : [16 * a[0], null, 16 * a[1]]
      },
      fillColor: "113,45,25",
      getHash: hashFunc.chunk
    };
  return POIConfigs
}();

var CB3TooltipManager = function () {
  function a(a) { return a += "", a.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") }
  function createContent(b, c) {
    var e = CB3PoiConfig[b.type].getTooltipText(b.item, c.platform.cb3World)
      , f = "X: " + a(b.coords[0]);

    null != b.coords[1] && (f += " Y: " + a(b.coords[1])),
      f += " Z: " + a(b.coords[2]);
    var h = document.createElement("div");
    var i = document.createElement("label");
    i.classList.add("poi-complete-label");
    var l = document.createElement("input");
    l.classList.add("poi-complete-checkbox");
    i.appendChild(l);
    i.appendChild(document.createTextNode(e));
    l.type = "checkbox";
    l.checked = selectMode ?
      HTSelectManager.isPoiSelected(b.type, CB3PoiConfig[b.type].getHash(b.item))
      : CB3MapUserDataManager.isPoiMarked(c.platform, c.seed, b.type, CB3PoiConfig[b.type].getHash(b.item));
    l.addEventListener("change", function (a) {
      selectMode ?
        a.target.checked ?
          HTSelectManager.selectPoi(b.type, CB3PoiConfig[b.type].getHash(b.item), e, b.coords)
          : HTSelectManager.unselectPoi(b.type, CB3PoiConfig[b.type].getHash(b.item))
        : a.target.checked ?
          CB3MapUserDataManager.markPoi(c.platform, c.seed, b.type, CB3PoiConfig[b.type].getHash(b.item), e, b.coords)
          : CB3MapUserDataManager.unmarkPoi(c.platform, c.seed, b.type, CB3PoiConfig[b.type].getHash(b.item));
      updateMap()
    });
    h.appendChild(i);
    h.appendChild(document.createTextNode(f));
    return h
  }
  function c(a) {
    var c = g.getPoiData(savedPoi);
    if (savedPoi && null != c) {
      var d = h.reference
        , e = c.rect
        , f = createContent(c, a);
      h.setProps({
        content: f,
        getReferenceClientRect: function () {
          var a = d.getBoundingClientRect();
          return {
            width: e.width,
            height: e.height,
            top: a.top + e.y,
            bottom: a.top + e.y + e.height,
            left: a.left + e.x,
            right: a.left + e.x + e.width
          }
        }
      }),
        h.show()
    } else
      h.hide()
  }
  var updateMap, e = 0, f = 3, g = function () {
    function a() {
      g.clearRect(0, 0, b.width, b.height),
        c = {},
        d = {},
        e = 1
    }
    var b = document.createElement("canvas");
    b.width = 0,
      b.height = 0;
    var c = {}
      , d = {}
      , e = 1
      , g = b.getContext("2d", {
        willReadFrequently: !0
      });
    return {
      clear: a,
      updateDimensions: function (c, d) {
        a(),
          b.width = c,
          b.height = d
      },
      getPoiData: function (a) { return d[a] },
      getPoiIdAt: function (a, b) {
        var d = g.getImageData(Math.round(a), Math.round(b), 1, 1).data
          , e = d[0] >> f | d[1] >> f << 8 - f | d[2] >> f << 16 - 2 * f
          , h = c[e];
        return h
      },
      /**
       * Add a poi to cache
       * @param {String} a - Poi hash
       * @param {Object} b - Poi data
       */
      addPoi: function (a, b) {
        var h = e++;
        var i = Math.pow(2, 8 - f) - 1
          , j = (h & i) << f
          , k = (h >> 8 - f & i) << f
          , l = (h >> 16 - 2 * f & i) << f;
        return c[h] = a,
          d[a] = b,
        {
          fillRect: function (a, b, c, d) {
            g.fillStyle = "rgb(" + j + "," + k + "," + l + ")",
              g.fillRect(a, b, c, d)
          }
        }
      }
    }
  }(), h = null, savedPoi = null, selectMode = !1;
  return {
    onInit: function (a, b) {
      h = tippy(a, {
        duration: 0,
        arrow: !1,
        hideOnClick: !1,
        interactive: !0,
        theme: "sign",
        trigger: "manual",
        allowHTML: !0
      }),
        updateMap = b
    },
    onCanvasClick: function (a, b, d) {
      var clickPoi = g.getPoiIdAt(a, b);
      if (null == clickPoi && null == savedPoi)
        return {
          hit: !1,
          handled: !1
        };
      savedPoi = clickPoi === savedPoi ? null : clickPoi;
      if (clickPoi && window._enableAnalytics && window.gtag) {
        var f = g.getPoiData(savedPoi);
        f && f.type && window.gtag("event", "CB_ChunkApp_SelectPoi", {
          poi: f.type
        })
      }
      return c(d),
      {
        hit: null != clickPoi,
        handled: !0
      }
    },
    testCanvasHit: function (a, b) { return null != g.getPoiIdAt(a, b) },
    onMapDimensionsChanged: function (a, b) { g.updateDimensions(a, b) },
    onParamsChanged: function () { g.clear() },
    beforeMapRepaint: function () { g.clear() },
    onMapRepainted: function (a) { h && c(a) },
    setSelectMode: function (a) { selectMode = a },
    isSelectMode: function () { return selectMode },
    isClickable: function (a, b) { return null != g.getPoiIdAt(a, b) },
    isSelected: function (a) { return a === savedPoi },
    /**
     * Add a poi when it is drawn on canvas
     * @param {String} a - Poi name
     * @param {String} b - Poi hash
     * @param {*} c - Pos in blocks
     * @param {*} d - Pos in chunks
     * @param {Number} f - Icon top-left x in screen
     * @param {Number} h - Icon top-left y in screen
     * @param {Number} i - Icon width
     * @param {Number} j - Icon Height
     * @param {Array} k - Map area pos in canvas
     */
    onPoiDrawn: function (a, b, c, d, f, h, i, j, k) {
      var l = f + i
        , m = h + j
        , n = Math.min(k[2], Math.max(k[0], f))
        , o = Math.min(k[3], Math.max(k[1], h))
        , p = Math.min(k[2], Math.max(k[0], l))
        , q = Math.min(k[3], Math.max(k[1], m));
      if (p > n && q > o) {
        var r = g.addPoi(b, {
          type: a,
          item: d,
          coords: c,
          rect: {
            x: n,
            y: o,
            width: p - n,
            height: q - o
          }
        });
        r.fillRect(n - e, o - e, p - n + 2 * e, q - o + 2 * e)
      }
    }
  }
}(), CB3MapUserDataManager = function () {
  function a(a, b) { return a.label + "/" + b.toString() }
  function b(b, c, d) {
    var f = a(b, c);
    markData[f] || (markData[f] = {})
  }
  function k(a, b) { return a + ";" + b }
  function updateUserData() {
    try {
      window.localStorage.setItem(d, JSON.stringify(markData))
    } catch (a) {
      window.gtag && window._enableAnalytics && window.gtag("event", "CB_ChunkApp_UserDataUpdateError")
    }
  }
  var d = "CB3_MAP_DATA", markData = {}, f = 0;
  try {
    markData = JSON.parse(window.localStorage.getItem(d)) || {},
      Object.keys(markData).forEach(function (a) {
        f += Object.keys(markData[a]).length
      })
  } catch (g) {
    window.gtag && window._enableAnalytics && window.gtag("event", "CB_ChunkApp_UserDataLoadError")
  }
  var h = {
    isPoiMarked: function (b, c, d, f) {
      var g = a(b, c);
      return markData[g] && markData[g][k(d, f)]
    },
    markPoi: function (d, g, h, i, t, u) {
      b(d, g, h);
      var j = a(d, g);
      markData[j][k(h, i)] = { state: !0, text: t, coord: u },
        updateUserData(),
        f += 1
    },
    unmarkPoi: function (d, g, h, i) {
      b(d, g, h);
      var j = a(d, g);
      delete markData[j][k(h, i)],
        updateUserData(),
        f -= 1;
    },
    getNumberMarkedPois: function () {
      return f
    }
  };
  return h
}(), CB3FinderApp = function () {
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
    loadingBackground: "51,43,40",
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

  // Get avaliable worker count
  var h = null != navigator.hardwareConcurrency && navigator.hardwareConcurrency > 1 ? navigator.hardwareConcurrency - 1 : 1;
  h = Math.min(h, 6);

  // Create worker
  for (var workers = [], j = 0; h > j; j++)
    workers[j] = new Worker(window.URL.createObjectURL(inlineWorker_k9bk8));
  CB3SharedTaskManagerMain.init(workers);
  var handlers = [];
  workers.forEach(function (a, b) {
    a.addEventListener("message", function (a) {
      "check" === a.data.type && handlers[b](a.data.results)
    }, !1)
  });

  // Worker for poi list when platform change
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
      CB3TooltipManager.onInit(b, function () {
        c.triggerHandler("redrawmap")
      });
      c.initialHiddenPois = a(d)
    },
    onParamsChanged: function (b, d) {
      CB3TooltipManager.onParamsChanged();
      -1 !== d.indexOf("tileSize") && a(b)
    },
    onMapDimensionsChanged: CB3TooltipManager.onMapDimensionsChanged,
    setSelectMode: CB3TooltipManager.setSelectMode,
    isClickable: CB3TooltipManager.isClickable,
    /**
     * @param {*} a 
     * @param {*} c 
     * @param {*} d - Tile data
     * @param {*} e - Params
     * @returns 
     */
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
    /**
     * Send request to workers to load tiles
     * @param {*} a - Params
     * @param {*} c - Tile coords
     * @param {Function} d - Data handler
     */
    loadTile: function (a, c, d) {
      // Look for a spare worker
      for (var e = null, f = 0; f < workers.length; f++)
        if (!handlers[f]) {
          e = f;
          break
        }

      // No spare worker
      if (null == e)
        throw new Error("loadTile: Only " + workers.length + " requests allowed at a time");

      handlers[e] = function (a) {
        handlers[e] = null;
        d(a)
      };

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
      workers[e].postMessage({
        type: "check",
        params: g,
        tile: c
      })
    },
    /**
     * Paint tile to map canvas
     * @param {*} CTX - Map canvas context
     * @param {"biomes"|"slimeChunks"|"pois"} c - Operation type
     * @param {*} f - Tile coord
     * @param {*} tileData - Tile data
     * @param {Function} h - Draw poi with no icon
     * @param {Number} i - Chunk width
     * @param {Function} cast - Calculate screen pos from chunk pos
     * @param {Array} k - Display area pos in canvas
     * @param {*} l - Params
     */
    paintTile: function (CTX, c, f, tileData, h, i, cast, k, l) {
      function getBiomeInChunk(px, py) {
        function fx(a) { return tileData.biomeScale >= 1 ? a : Math.floor(a / tileData.biomeScale) * tileData.biomeScale }
        var icpx = Math.floor((fx(px / 16) - f.x) / tileData.biomeScale),
          icpy = Math.floor((fx(py / 16) - f.z) / tileData.biomeScale),
          b = new Uint8Array(tileData.biomes);
        return b[icpy * f.xL / tileData.biomeScale + icpx]
      }
      tileData.poiResults[CB3Libs.POI.HTCustomize] = HTPoiConfig.getPoisInRegion(f);
      if ("biomes" !== c) {
        if ("slimeChunks" === c && b.renderImg && tileData.poiResults[CB3Libs.POI.SlimeChunk]) {
          var n = tileData.poiResults[CB3Libs.POI.SlimeChunk]
            , o = CB3PoiConfig[CB3Libs.POI.SlimeChunk]
            , p = CTX.lineWidth;
          CTX.lineWidth = 2;
          n.forEach(function (b) {
            // Fill slime chunk
            CTX.fillStyle = "rgb(" + o.fillColor + ")";
            var c = cast(b[0], b[1])
              , d = cast(b[0] + 1, b[1] + 1);
            CTX.fillRect(c[0], c[1], d[0] - c[0] - 1, d[1] - c[1] - 1);
            CTX.strokeStyle = "rgb(" + o.fillColorOuter + ")";
            CTX.strokeRect(c[0] + 1, c[1] + 1, d[0] - c[0] - 3, d[1] - c[1] - 3)
          });
          CTX.lineWidth = p
        } if ("pois" === c) {
          // Sort pois in order of CB3PoiConfig
          var q = Object.keys(tileData.poiResults).sort(function (a, b) {
            return e.indexOf(a) - e.indexOf(b)
          });
          window.__analytics_lastPois = q;
          q.forEach(function (poiName) {
            function doDraw(poiHash, e) {
              var f = i.getImg ? i.img[i.getImg(e[2])] : i.img
                , pos = i.getCoords ? i.getCoords(e, l.platform.cb3World) : [16 * e[0] + 8, null, 16 * e[1] + 8]
                , h = cast(pos[0] / 16, pos[2] / 16)
                , m = CB3TooltipManager.isSelected(poiHash)
                , n = f.width * (m ? d : 1)
                , o = f.height * (m ? d : 1)
                , p = Math.floor(h[0] - n / 2)
                , q = Math.floor(h[1] - o / 2)
                , r = CB3TooltipManager.isSelectMode() ?
                  !HTSelectManager.isPoiSelected(poiName, i.getHash(e))
                  : CB3MapUserDataManager.isPoiMarked(l.platform, l.seed, poiName, i.getHash(e));
              CTX.globalAlpha = r ? CB3TooltipManager.isSelectMode() ? .60 : .45 : 1;
              if (tileData.biomeFilter && (tileData.biomeFilter.indexOf(getBiomeInChunk(pos[0], pos[2])) != -1)) {
                CTX.drawImage(f, p, q, n, o);
                CB3TooltipManager.onPoiDrawn(poiName, poiHash, pos, e, p, q, n, o, k)
              } else if (!tileData.biomeFilter || !tileData.biomes || !l.hidePoi || tileData.biomeScale > 2) {
                CTX.drawImage(f, p, q, n, o);
                CB3TooltipManager.onPoiDrawn(poiName, poiHash, pos, e, p, q, n, o, k)
              }
              CTX.globalAlpha = 1;
            }
            if (poiName !== CB3Libs.POI.SlimeChunk || !b.renderImg) {
              var f = tileData.poiResults[poiName]
                , i = CB3PoiConfig[poiName];
              f.forEach(function (a) {
                if (i.img && b.renderImg) {
                  var d = i.splitPois ? i.splitPois(a) : [a];
                  d.forEach(function (a, b) {
                    var d = [poiName, a[0], a[1], b].join(";");
                    CB3TooltipManager.isSelected(d) ?
                      m = function () { doDraw(d, a, b) }
                      : doDraw(d, a, b)
                  })
                } else
                  h(a[0], a[1], "function" == typeof i.fillColor ? i.fillColor(a[2]) : i.fillColor)
              })
            }
          })
        }
      } else if (window.__analytics_lastBiomes = !!tileData.biomeCanvas,
        tileData.biomeCanvas) {
        var r = cast(f.x, f.z)
          , s = cast(f.x + f.xL, f.z + f.zL);
        CTX.drawImage(tileData.biomeCanvas, Math.floor(r[0]), Math.floor(r[1]), Math.floor(s[0] - r[0]), Math.floor(s[1] - r[1]))
      }
    },
    /**
     * Process biome results to canvas
     * @param {*} a - Results
     * @param {*} b - Tile data
     * @returns Results with biome canvas
     */
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
      /* Draw height */
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
              /* Not the specified biome */
              /* Change the transparent to 22 */
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
  function createImg(src, cb) {
    var img = new Image;
    img.onload = function () {
      cb(null, img)
    };
    img.onerror = function (a) {
      cb(new Error(a))
    };
    img.src = src
  }
  function poiImgCanvas(a, b) {
    var c = document.createElement("canvas");
    c.width = b.width,
      c.height = b.height;
    var d = c.getContext("2d");
    return d.drawImage(a, b.x, b.y, b.width, b.height, 0, 0, b.width, b.height),
      c
  }
  function initPoiImg(a) {
    createImg(window.__seedMapPoisSpriteImage, function (err, d) {
      if (err)
        return void a(err);
      var e = !1;
      Object.keys(CB3PoiConfig).forEach(function (b) {
        var f = CB3PoiConfig[b].imgSrc;
        if (f && !e)
          if ("string" == typeof f) {
            var g = window.__seedMapPoisSprite[f];
            if (!g)
              return a(new Error("sprite not found: " + f)),
                void (e = !0);
            CB3PoiConfig[b].img = poiImgCanvas(d, g)
          } else
            CB3PoiConfig[b].img = {},
              Object.keys(f).forEach(function (g) {
                var h = window.__seedMapPoisSprite[f[g]];
                return h ? void (CB3PoiConfig[b].img[g] = poiImgCanvas(d, h)) : (a(new Error("sprite not found: " + f[g])),
                  void (e = !0))
              })
      }),
        e || a()
    })
  }
  !function () {
    var a = CB3FinderApp;
    initPoiImg(function (b) {
      return b ? void chunkAppLoader.errorInit() : (
        chunkAppLoader.init(a),
        void a.on("uiloaded", function () {
          /* Init */
          $("#biome-selection").biomeSelection(a);
          $("#show-heights-label").heightsToggle(a);
          $("#hide-poi-label").hidePoiToggle(a);
          $("#biome-dimension-selection").dimensionSelection(a);
          $(".seedmap-layers-wrapper").seedMapLayers(a);
          $("#biome-height-select").biomHeightSelect(a);
          $(".topnav").topNavigate(a);
          $("#mark").markMenu(a);
          HTPoiConfig.onInit(a)
        })
      )
    })
  }();
});
