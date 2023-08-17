(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [654], {
        4935: function(t, e, r) {
            "use strict";

            function n(t) {
                var e = Object.create(null);
                return function(r) {
                    return void 0 === e[r] && (e[r] = t(r)), e[r]
                }
            }
            r.d(e, {
                Z: function() {
                    return n
                }
            })
        },
        7729: function(t, e, r) {
            "use strict";
            r.d(e, {
                T: function() {
                    return K
                },
                w: function() {
                    return H
                }
            });
            var n = r(2265),
                i = function() {
                    function t(t) {
                        var e = this;
                        this._insertTag = function(t) {
                            var r;
                            r = 0 === e.tags.length ? e.insertionPoint ? e.insertionPoint.nextSibling : e.prepend ? e.container.firstChild : e.before : e.tags[e.tags.length - 1].nextSibling, e.container.insertBefore(t, r), e.tags.push(t)
                        }, this.isSpeedy = void 0 === t.speedy || t.speedy, this.tags = [], this.ctr = 0, this.nonce = t.nonce, this.key = t.key, this.container = t.container, this.prepend = t.prepend, this.insertionPoint = t.insertionPoint, this.before = null
                    }
                    var e = t.prototype;
                    return e.hydrate = function(t) {
                        t.forEach(this._insertTag)
                    }, e.insert = function(t) {
                        if (this.ctr % (this.isSpeedy ? 65e3 : 1) == 0) {
                            var e;
                            this._insertTag(((e = document.createElement("style")).setAttribute("data-emotion", this.key), void 0 !== this.nonce && e.setAttribute("nonce", this.nonce), e.appendChild(document.createTextNode("")), e.setAttribute("data-s", ""), e))
                        }
                        var r = this.tags[this.tags.length - 1];
                        if (this.isSpeedy) {
                            var n = function(t) {
                                if (t.sheet) return t.sheet;
                                for (var e = 0; e < document.styleSheets.length; e++)
                                    if (document.styleSheets[e].ownerNode === t) return document.styleSheets[e]
                            }(r);
                            try {
                                n.insertRule(t, n.cssRules.length)
                            } catch (t) {}
                        } else r.appendChild(document.createTextNode(t));
                        this.ctr++
                    }, e.flush = function() {
                        this.tags.forEach(function(t) {
                            return t.parentNode && t.parentNode.removeChild(t)
                        }), this.tags = [], this.ctr = 0
                    }, t
                }(),
                o = Math.abs,
                s = String.fromCharCode,
                a = Object.assign;

            function u(t, e, r) {
                return t.replace(e, r)
            }

            function l(t, e) {
                return t.indexOf(e)
            }

            function c(t, e) {
                return 0 | t.charCodeAt(e)
            }

            function f(t, e, r) {
                return t.slice(e, r)
            }

            function h(t) {
                return t.length
            }

            function d(t, e) {
                return e.push(t), t
            }
            var p = 1,
                m = 1,
                y = 0,
                v = 0,
                g = 0,
                b = "";

            function w(t, e, r, n, i, o, s) {
                return {
                    value: t,
                    root: e,
                    parent: r,
                    type: n,
                    props: i,
                    children: o,
                    line: p,
                    column: m,
                    length: s,
                    return: ""
                }
            }

            function x(t, e) {
                return a(w("", null, null, "", null, null, 0), t, {
                    length: -t.length
                }, e)
            }

            function E() {
                return g = v < y ? c(b, v++) : 0, m++, 10 === g && (m = 1, p++), g
            }

            function S() {
                return c(b, v)
            }

            function P(t) {
                switch (t) {
                    case 0:
                    case 9:
                    case 10:
                    case 13:
                    case 32:
                        return 5;
                    case 33:
                    case 43:
                    case 44:
                    case 47:
                    case 62:
                    case 64:
                    case 126:
                    case 59:
                    case 123:
                    case 125:
                        return 4;
                    case 58:
                        return 3;
                    case 34:
                    case 39:
                    case 40:
                    case 91:
                        return 2;
                    case 41:
                    case 93:
                        return 1
                }
                return 0
            }

            function O(t) {
                return p = m = 1, y = h(b = t), v = 0, []
            }

            function A(t) {
                var e, r;
                return (e = v - 1, r = function t(e) {
                    for (; E();) switch (g) {
                        case e:
                            return v;
                        case 34:
                        case 39:
                            34 !== e && 39 !== e && t(g);
                            break;
                        case 40:
                            41 === e && t(e);
                            break;
                        case 92:
                            E()
                    }
                    return v
                }(91 === t ? t + 2 : 40 === t ? t + 1 : t), f(b, e, r)).trim()
            }
            var C = "-ms-",
                R = "-moz-",
                T = "-webkit-",
                k = "comm",
                L = "rule",
                M = "decl",
                D = "@keyframes";

            function j(t, e) {
                for (var r = "", n = t.length, i = 0; i < n; i++) r += e(t[i], i, t, e) || "";
                return r
            }

            function _(t, e, r, n) {
                switch (t.type) {
                    case "@layer":
                        if (t.children.length) break;
                    case "@import":
                    case M:
                        return t.return = t.return || t.value;
                    case k:
                        return "";
                    case D:
                        return t.return = t.value + "{" + j(t.children, n) + "}";
                    case L:
                        t.value = t.props.join(",")
                }
                return h(r = j(t.children, n)) ? t.return = t.value + "{" + r + "}" : ""
            }

            function U(t, e, r, n, i, s, a, l, c, h, d) {
                for (var p = i - 1, m = 0 === i ? s : [""], y = m.length, v = 0, g = 0, b = 0; v < n; ++v)
                    for (var x = 0, E = f(t, p + 1, p = o(g = a[v])), S = t; x < y; ++x)(S = (g > 0 ? m[x] + " " + E : u(E, /&\f/g, m[x])).trim()) && (c[b++] = S);
                return w(t, e, r, 0 === i ? L : l, c, h, d)
            }

            function F(t, e, r, n) {
                return w(t, e, r, M, f(t, 0, n), f(t, n + 1, -1), n)
            }
            var I = function(t, e, r) {
                    for (var n = 0, i = 0; n = i, i = S(), 38 === n && 12 === i && (e[r] = 1), !P(i);) E();
                    return f(b, t, v)
                },
                V = function(t, e) {
                    var r = -1,
                        n = 44;
                    do switch (P(n)) {
                        case 0:
                            38 === n && 12 === S() && (e[r] = 1), t[r] += I(v - 1, e, r);
                            break;
                        case 2:
                            t[r] += A(n);
                            break;
                        case 4:
                            if (44 === n) {
                                t[++r] = 58 === S() ? "&\f" : "", e[r] = t[r].length;
                                break
                            }
                        default:
                            t[r] += s(n)
                    }
                    while (n = E());
                    return t
                },
                B = function(t, e) {
                    var r;
                    return r = V(O(t), e), b = "", r
                },
                N = new WeakMap,
                q = function(t) {
                    if ("rule" === t.type && t.parent && !(t.length < 1)) {
                        for (var e = t.value, r = t.parent, n = t.column === r.column && t.line === r.line;
                            "rule" !== r.type;)
                            if (!(r = r.parent)) return;
                        if ((1 !== t.props.length || 58 === e.charCodeAt(0) || N.get(r)) && !n) {
                            N.set(t, !0);
                            for (var i = [], o = B(e, i), s = r.props, a = 0, u = 0; a < o.length; a++)
                                for (var l = 0; l < s.length; l++, u++) t.props[u] = i[a] ? o[a].replace(/&\f/g, s[l]) : s[l] + " " + o[a]
                        }
                    }
                },
                W = function(t) {
                    if ("decl" === t.type) {
                        var e = t.value;
                        108 === e.charCodeAt(0) && 98 === e.charCodeAt(2) && (t.return = "", t.value = "")
                    }
                },
                $ = [function(t, e, r, n) {
                    if (t.length > -1 && !t.return) switch (t.type) {
                        case M:
                            t.return = function t(e, r) {
                                switch (45 ^ c(e, 0) ? (((r << 2 ^ c(e, 0)) << 2 ^ c(e, 1)) << 2 ^ c(e, 2)) << 2 ^ c(e, 3) : 0) {
                                    case 5103:
                                        return T + "print-" + e + e;
                                    case 5737:
                                    case 4201:
                                    case 3177:
                                    case 3433:
                                    case 1641:
                                    case 4457:
                                    case 2921:
                                    case 5572:
                                    case 6356:
                                    case 5844:
                                    case 3191:
                                    case 6645:
                                    case 3005:
                                    case 6391:
                                    case 5879:
                                    case 5623:
                                    case 6135:
                                    case 4599:
                                    case 4855:
                                    case 4215:
                                    case 6389:
                                    case 5109:
                                    case 5365:
                                    case 5621:
                                    case 3829:
                                        return T + e + e;
                                    case 5349:
                                    case 4246:
                                    case 4810:
                                    case 6968:
                                    case 2756:
                                        return T + e + R + e + C + e + e;
                                    case 6828:
                                    case 4268:
                                        return T + e + C + e + e;
                                    case 6165:
                                        return T + e + C + "flex-" + e + e;
                                    case 5187:
                                        return T + e + u(e, /(\w+).+(:[^]+)/, T + "box-$1$2" + C + "flex-$1$2") + e;
                                    case 5443:
                                        return T + e + C + "flex-item-" + u(e, /flex-|-self/, "") + e;
                                    case 4675:
                                        return T + e + C + "flex-line-pack" + u(e, /align-content|flex-|-self/, "") + e;
                                    case 5548:
                                        return T + e + C + u(e, "shrink", "negative") + e;
                                    case 5292:
                                        return T + e + C + u(e, "basis", "preferred-size") + e;
                                    case 6060:
                                        return T + "box-" + u(e, "-grow", "") + T + e + C + u(e, "grow", "positive") + e;
                                    case 4554:
                                        return T + u(e, /([^-])(transform)/g, "$1" + T + "$2") + e;
                                    case 6187:
                                        return u(u(u(e, /(zoom-|grab)/, T + "$1"), /(image-set)/, T + "$1"), e, "") + e;
                                    case 5495:
                                    case 3959:
                                        return u(e, /(image-set\([^]*)/, T + "$1$`$1");
                                    case 4968:
                                        return u(u(e, /(.+:)(flex-)?(.*)/, T + "box-pack:$3" + C + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + T + e + e;
                                    case 4095:
                                    case 3583:
                                    case 4068:
                                    case 2532:
                                        return u(e, /(.+)-inline(.+)/, T + "$1$2") + e;
                                    case 8116:
                                    case 7059:
                                    case 5753:
                                    case 5535:
                                    case 5445:
                                    case 5701:
                                    case 4933:
                                    case 4677:
                                    case 5533:
                                    case 5789:
                                    case 5021:
                                    case 4765:
                                        if (h(e) - 1 - r > 6) switch (c(e, r + 1)) {
                                            case 109:
                                                if (45 !== c(e, r + 4)) break;
                                            case 102:
                                                return u(e, /(.+:)(.+)-([^]+)/, "$1" + T + "$2-$3$1" + R + (108 == c(e, r + 3) ? "$3" : "$2-$3")) + e;
                                            case 115:
                                                return ~l(e, "stretch") ? t(u(e, "stretch", "fill-available"), r) + e : e
                                        }
                                        break;
                                    case 4949:
                                        if (115 !== c(e, r + 1)) break;
                                    case 6444:
                                        switch (c(e, h(e) - 3 - (~l(e, "!important") && 10))) {
                                            case 107:
                                                return u(e, ":", ":" + T) + e;
                                            case 101:
                                                return u(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + T + (45 === c(e, 14) ? "inline-" : "") + "box$3$1" + T + "$2$3$1" + C + "$2box$3") + e
                                        }
                                        break;
                                    case 5936:
                                        switch (c(e, r + 11)) {
                                            case 114:
                                                return T + e + C + u(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
                                            case 108:
                                                return T + e + C + u(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
                                            case 45:
                                                return T + e + C + u(e, /[svh]\w+-[tblr]{2}/, "lr") + e
                                        }
                                        return T + e + C + e + e
                                }
                                return e
                            }(t.value, t.length);
                            break;
                        case D:
                            return j([x(t, {
                                value: u(t.value, "@", "@" + T)
                            })], n);
                        case L:
                            if (t.length) return t.props.map(function(e) {
                                var r;
                                switch (r = e, (r = /(::plac\w+|:read-\w+)/.exec(r)) ? r[0] : r) {
                                    case ":read-only":
                                    case ":read-write":
                                        return j([x(t, {
                                            props: [u(e, /:(read-\w+)/, ":" + R + "$1")]
                                        })], n);
                                    case "::placeholder":
                                        return j([x(t, {
                                            props: [u(e, /:(plac\w+)/, ":" + T + "input-$1")]
                                        }), x(t, {
                                            props: [u(e, /:(plac\w+)/, ":" + R + "$1")]
                                        }), x(t, {
                                            props: [u(e, /:(plac\w+)/, C + "input-$1")]
                                        })], n)
                                }
                                return ""
                            }).join("")
                    }
                }];
            r(8654), r(7599);
            var z = n.createContext("undefined" != typeof HTMLElement ? function(t) {
                var e, r, n, o, a, y = t.key;
                if ("css" === y) {
                    var x = document.querySelectorAll("style[data-emotion]:not([data-s])");
                    Array.prototype.forEach.call(x, function(t) {
                        -1 !== t.getAttribute("data-emotion").indexOf(" ") && (document.head.appendChild(t), t.setAttribute("data-s", ""))
                    })
                }
                var C = t.stylisPlugins || $,
                    R = {},
                    T = [];
                o = t.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + y + ' "]'), function(t) {
                    for (var e = t.getAttribute("data-emotion").split(" "), r = 1; r < e.length; r++) R[e[r]] = !0;
                    T.push(t)
                });
                var L = (r = (e = [q, W].concat(C, [_, (n = function(t) {
                        a.insert(t)
                    }, function(t) {
                        !t.root && (t = t.return) && n(t)
                    })])).length, function(t, n, i, o) {
                        for (var s = "", a = 0; a < r; a++) s += e[a](t, n, i, o) || "";
                        return s
                    }),
                    M = function(t) {
                        var e, r;
                        return j((r = function t(e, r, n, i, o, a, y, x, O) {
                            for (var C, R = 0, T = 0, L = y, M = 0, D = 0, j = 0, _ = 1, I = 1, V = 1, B = 0, N = "", q = o, W = a, $ = i, z = N; I;) switch (j = B, B = E()) {
                                case 40:
                                    if (108 != j && 58 == c(z, L - 1)) {
                                        -1 != l(z += u(A(B), "&", "&\f"), "&\f") && (V = -1);
                                        break
                                    }
                                case 34:
                                case 39:
                                case 91:
                                    z += A(B);
                                    break;
                                case 9:
                                case 10:
                                case 13:
                                case 32:
                                    z += function(t) {
                                        for (; g = S();)
                                            if (g < 33) E();
                                            else break;
                                        return P(t) > 2 || P(g) > 3 ? "" : " "
                                    }(j);
                                    break;
                                case 92:
                                    z += function(t, e) {
                                        for (var r; --e && E() && !(g < 48) && !(g > 102) && (!(g > 57) || !(g < 65)) && (!(g > 70) || !(g < 97)););
                                        return r = v + (e < 6 && 32 == S() && 32 == E()), f(b, t, r)
                                    }(v - 1, 7);
                                    continue;
                                case 47:
                                    switch (S()) {
                                        case 42:
                                        case 47:
                                            d(w(C = function(t, e) {
                                                for (; E();)
                                                    if (t + g === 57) break;
                                                    else if (t + g === 84 && 47 === S()) break;
                                                return "/*" + f(b, e, v - 1) + "*" + s(47 === t ? t : E())
                                            }(E(), v), r, n, k, s(g), f(C, 2, -2), 0), O);
                                            break;
                                        default:
                                            z += "/"
                                    }
                                    break;
                                case 123 * _:
                                    x[R++] = h(z) * V;
                                case 125 * _:
                                case 59:
                                case 0:
                                    switch (B) {
                                        case 0:
                                        case 125:
                                            I = 0;
                                        case 59 + T:
                                            -1 == V && (z = u(z, /\f/g, "")), D > 0 && h(z) - L && d(D > 32 ? F(z + ";", i, n, L - 1) : F(u(z, " ", "") + ";", i, n, L - 2), O);
                                            break;
                                        case 59:
                                            z += ";";
                                        default:
                                            if (d($ = U(z, r, n, R, T, o, x, N, q = [], W = [], L), a), 123 === B) {
                                                if (0 === T) t(z, r, $, $, q, a, L, x, W);
                                                else switch (99 === M && 110 === c(z, 3) ? 100 : M) {
                                                    case 100:
                                                    case 108:
                                                    case 109:
                                                    case 115:
                                                        t(e, $, $, i && d(U(e, $, $, 0, 0, o, x, N, o, q = [], L), W), o, W, L, x, i ? q : W);
                                                        break;
                                                    default:
                                                        t(z, $, $, $, [""], W, 0, x, W)
                                                }
                                            }
                                    }
                                    R = T = D = 0, _ = V = 1, N = z = "", L = y;
                                    break;
                                case 58:
                                    L = 1 + h(z), D = j;
                                default:
                                    if (_ < 1) {
                                        if (123 == B) --_;
                                        else if (125 == B && 0 == _++ && 125 == (g = v > 0 ? c(b, --v) : 0, m--, 10 === g && (m = 1, p--), g)) continue
                                    }
                                    switch (z += s(B), B * _) {
                                        case 38:
                                            V = T > 0 ? 1 : (z += "\f", -1);
                                            break;
                                        case 44:
                                            x[R++] = (h(z) - 1) * V, V = 1;
                                            break;
                                        case 64:
                                            45 === S() && (z += A(E())), M = S(), T = L = h(N = z += function(t) {
                                                for (; !P(S());) E();
                                                return f(b, t, v)
                                            }(v)), B++;
                                            break;
                                        case 45:
                                            45 === j && 2 == h(z) && (_ = 0)
                                    }
                            }
                            return a
                        }("", null, null, null, [""], e = O(e = t), 0, [0], e), b = "", r), L)
                    },
                    D = {
                        key: y,
                        sheet: new i({
                            key: y,
                            container: o,
                            nonce: t.nonce,
                            speedy: t.speedy,
                            prepend: t.prepend,
                            insertionPoint: t.insertionPoint
                        }),
                        nonce: t.nonce,
                        inserted: R,
                        registered: {},
                        insert: function(t, e, r, n) {
                            a = r, M(t ? t + "{" + e.styles + "}" : e.styles), n && (D.inserted[e.name] = !0)
                        }
                    };
                return D.sheet.hydrate(T), D
            }({
                key: "css"
            }) : null);
            z.Provider;
            var H = function(t) {
                    return (0, n.forwardRef)(function(e, r) {
                        return t(e, (0, n.useContext)(z), r)
                    })
                },
                K = n.createContext({})
        },
        8654: function(t, e, r) {
            "use strict";
            r.d(e, {
                O: function() {
                    return p
                }
            });
            var n, i = {
                    animationIterationCount: 1,
                    aspectRatio: 1,
                    borderImageOutset: 1,
                    borderImageSlice: 1,
                    borderImageWidth: 1,
                    boxFlex: 1,
                    boxFlexGroup: 1,
                    boxOrdinalGroup: 1,
                    columnCount: 1,
                    columns: 1,
                    flex: 1,
                    flexGrow: 1,
                    flexPositive: 1,
                    flexShrink: 1,
                    flexNegative: 1,
                    flexOrder: 1,
                    gridRow: 1,
                    gridRowEnd: 1,
                    gridRowSpan: 1,
                    gridRowStart: 1,
                    gridColumn: 1,
                    gridColumnEnd: 1,
                    gridColumnSpan: 1,
                    gridColumnStart: 1,
                    msGridRow: 1,
                    msGridRowSpan: 1,
                    msGridColumn: 1,
                    msGridColumnSpan: 1,
                    fontWeight: 1,
                    lineHeight: 1,
                    opacity: 1,
                    order: 1,
                    orphans: 1,
                    tabSize: 1,
                    widows: 1,
                    zIndex: 1,
                    zoom: 1,
                    WebkitLineClamp: 1,
                    fillOpacity: 1,
                    floodOpacity: 1,
                    stopOpacity: 1,
                    strokeDasharray: 1,
                    strokeDashoffset: 1,
                    strokeMiterlimit: 1,
                    strokeOpacity: 1,
                    strokeWidth: 1
                },
                o = r(4935),
                s = /[A-Z]|^ms/g,
                a = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
                u = function(t) {
                    return 45 === t.charCodeAt(1)
                },
                l = function(t) {
                    return null != t && "boolean" != typeof t
                },
                c = (0, o.Z)(function(t) {
                    return u(t) ? t : t.replace(s, "-$&").toLowerCase()
                }),
                f = function(t, e) {
                    switch (t) {
                        case "animation":
                        case "animationName":
                            if ("string" == typeof e) return e.replace(a, function(t, e, r) {
                                return n = {
                                    name: e,
                                    styles: r,
                                    next: n
                                }, e
                            })
                    }
                    return 1 === i[t] || u(t) || "number" != typeof e || 0 === e ? e : e + "px"
                };

            function h(t, e, r) {
                if (null == r) return "";
                if (void 0 !== r.__emotion_styles) return r;
                switch (typeof r) {
                    case "boolean":
                        return "";
                    case "object":
                        if (1 === r.anim) return n = {
                            name: r.name,
                            styles: r.styles,
                            next: n
                        }, r.name;
                        if (void 0 !== r.styles) {
                            var i = r.next;
                            if (void 0 !== i)
                                for (; void 0 !== i;) n = {
                                    name: i.name,
                                    styles: i.styles,
                                    next: n
                                }, i = i.next;
                            return r.styles + ";"
                        }
                        return function(t, e, r) {
                            var n = "";
                            if (Array.isArray(r))
                                for (var i = 0; i < r.length; i++) n += h(t, e, r[i]) + ";";
                            else
                                for (var o in r) {
                                    var s = r[o];
                                    if ("object" != typeof s) null != e && void 0 !== e[s] ? n += o + "{" + e[s] + "}" : l(s) && (n += c(o) + ":" + f(o, s) + ";");
                                    else if (Array.isArray(s) && "string" == typeof s[0] && (null == e || void 0 === e[s[0]]))
                                        for (var a = 0; a < s.length; a++) l(s[a]) && (n += c(o) + ":" + f(o, s[a]) + ";");
                                    else {
                                        var u = h(t, e, s);
                                        switch (o) {
                                            case "animation":
                                            case "animationName":
                                                n += c(o) + ":" + u + ";";
                                                break;
                                            default:
                                                n += o + "{" + u + "}"
                                        }
                                    }
                                }
                            return n
                        }(t, e, r);
                    case "function":
                        if (void 0 !== t) {
                            var o = n,
                                s = r(t);
                            return n = o, h(t, e, s)
                        }
                }
                if (null == e) return r;
                var a = e[r];
                return void 0 !== a ? a : r
            }
            var d = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
                p = function(t, e, r) {
                    if (1 === t.length && "object" == typeof t[0] && null !== t[0] && void 0 !== t[0].styles) return t[0];
                    var i, o = !0,
                        s = "";
                    n = void 0;
                    var a = t[0];
                    null == a || void 0 === a.raw ? (o = !1, s += h(r, e, a)) : s += a[0];
                    for (var u = 1; u < t.length; u++) s += h(r, e, t[u]), o && (s += a[u]);
                    d.lastIndex = 0;
                    for (var l = ""; null !== (i = d.exec(s));) l += "-" + i[1];
                    return {
                        name: function(t) {
                            for (var e, r = 0, n = 0, i = t.length; i >= 4; ++n, i -= 4) e = (65535 & (e = 255 & t.charCodeAt(n) | (255 & t.charCodeAt(++n)) << 8 | (255 & t.charCodeAt(++n)) << 16 | (255 & t.charCodeAt(++n)) << 24)) * 1540483477 + ((e >>> 16) * 59797 << 16), e ^= e >>> 24, r = (65535 & e) * 1540483477 + ((e >>> 16) * 59797 << 16) ^ (65535 & r) * 1540483477 + ((r >>> 16) * 59797 << 16);
                            switch (i) {
                                case 3:
                                    r ^= (255 & t.charCodeAt(n + 2)) << 16;
                                case 2:
                                    r ^= (255 & t.charCodeAt(n + 1)) << 8;
                                case 1:
                                    r ^= 255 & t.charCodeAt(n), r = (65535 & r) * 1540483477 + ((r >>> 16) * 59797 << 16)
                            }
                            return r ^= r >>> 13, (((r = (65535 & r) * 1540483477 + ((r >>> 16) * 59797 << 16)) ^ r >>> 15) >>> 0).toString(36)
                        }(s) + l,
                        styles: s,
                        next: n
                    }
                }
        },
        7599: function(t, e, r) {
            "use strict";
            r.d(e, {
                L: function() {
                    return s
                }
            });
            var n, i = r(2265),
                o = !!(n || (n = r.t(i, 2))).useInsertionEffect && (n || (n = r.t(i, 2))).useInsertionEffect,
                s = o || function(t) {
                    return t()
                };
            o || i.useLayoutEffect
        },
        1e3: function(t, e, r) {
            "use strict";
            r.d(e, {
                Xd: function() {
                    return o
                },
                vQ: function() {
                    return q
                },
                qG: function() {
                    return z
                }
            });
            var n, i, o, s, a = r(2265),
                u = r(7437),
                l = r(8648),
                c = function() {
                    return (c = Object.assign || function(t) {
                        for (var e, r = 1, n = arguments.length; r < n; r++)
                            for (var i in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                        return t
                    }).apply(this, arguments)
                };
            "function" == typeof SuppressedError && SuppressedError;
            var f = "Blocked by CSP",
                h = "9319",
                d = "Failed to load the JS script of the agent";

            function p() {
                var t, e, r = window,
                    n = "__fpjs_p_l_b",
                    i = r[n];
                if ((null == (e = null === (t = Object.getOwnPropertyDescriptor) || void 0 === t ? void 0 : t.call(Object, r, n)) ? void 0 : e.configurable) ? delete r[n] : e && !e.writable || (r[n] = void 0), "function" != typeof(null == i ? void 0 : i.load)) throw Error(h);
                return i
            }

            function m(t) {
                throw t instanceof Error && t.message === h ? Error(d) : t
            }
            let y = "@fpjs@client@",
                v = () => Date.now();
            class g {
                constructor(t) {
                    var e;
                    this.tag = t.tag || null, this.linkedId = t.linkedId || null, this.extendedResult = null !== (e = t.extendedResult) && void 0 !== e && e
                }
                toKey() {
                    return `${JSON.stringify(this.tag)}__${JSON.stringify(this.linkedId)}__${this.extendedResult}`
                }
            }

            function b(t, e) {
                return `${e}__${t}`
            }

            function w(t, e) {
                return t.replace(`${e}__`, "")
            }
            class x {
                constructor(t = y) {
                    this.prefix = t
                }
                set(t, e) {
                    window.localStorage.setItem(b(t, this.prefix), JSON.stringify(e))
                }
                get(t) {
                    let e = window.localStorage.getItem(b(t, this.prefix));
                    if (e) try {
                        return JSON.parse(e)
                    } catch (t) {
                        return
                    }
                }
                remove(t) {
                    window.localStorage.removeItem(b(t, this.prefix))
                }
                allKeys() {
                    return Object.keys(window.localStorage).filter(t => t.startsWith(this.prefix)).map(t => w(t, this.prefix))
                }
            }
            class E {
                constructor(t = y) {
                    this.prefix = t
                }
                set(t, e) {
                    window.sessionStorage.setItem(b(t, this.prefix), JSON.stringify(e))
                }
                get(t) {
                    let e = window.sessionStorage.getItem(b(t, this.prefix));
                    if (e) try {
                        return JSON.parse(e)
                    } catch (t) {
                        return
                    }
                }
                remove(t) {
                    window.sessionStorage.removeItem(b(t, this.prefix))
                }
                allKeys() {
                    return Object.keys(window.sessionStorage).filter(t => t.startsWith(this.prefix)).map(t => w(t, this.prefix))
                }
            }
            class S {
                constructor(t, e = 3600, r) {
                    this.cache = t, this.cacheTime = e, this.nowProvider = r || v
                }
                get(t) {
                    return (0, l.mG)(this, void 0, void 0, function*() {
                        let e = yield this.cache.get(t.toKey());
                        if (!e) return;
                        let r = yield this.nowProvider();
                        if (e.expiresAt < Math.floor(r / 1e3)) {
                            yield this.cache.remove(t.toKey());
                            return
                        }
                        return e.body
                    })
                }
                set(t, e) {
                    return (0, l.mG)(this, void 0, void 0, function*() {
                        let r = yield this.wrapCacheEntry(e);
                        yield this.cache.set(t.toKey(), r)
                    })
                }
                clearCache() {
                    return (0, l.mG)(this, void 0, void 0, function*() {
                        let t = yield this.cache.allKeys();
                        yield Promise.all(t.map(t => this.cache.remove(t)))
                    })
                }
                wrapCacheEntry(t) {
                    return (0, l.mG)(this, void 0, void 0, function*() {
                        let e = yield this.nowProvider(), r = Math.floor(e / 1e3) + this.cacheTime;
                        return {
                            body: t,
                            expiresAt: r
                        }
                    })
                }
            }
            class P {
                constructor() {
                    this.enclosedCache = function() {
                        let t = {};
                        return {
                            set(e, r) {
                                t[e] = r
                            },
                            get(e) {
                                let r = t[e];
                                if (r) return r
                            },
                            remove(e) {
                                delete t[e]
                            },
                            allKeys: () => Object.keys(t)
                        }
                    }()
                }
            }
            class O {
                set() {}
                get() {}
                remove() {}
                allKeys() {
                    return []
                }
            }(n = o || (o = {})).Memory = "memory", n.LocalStorage = "localstorage", n.SessionStorage = "sessionstorage", n.NoCache = "nocache";
            let A = {
                    [o.Memory]: () => new P().enclosedCache,
                    [o.LocalStorage]: t => new x(t),
                    [o.SessionStorage]: t => new E(t),
                    [o.NoCache]: () => new O
                },
                C = t => {
                    switch (t) {
                        case o.SessionStorage:
                            try {
                                window.sessionStorage.getItem("item")
                            } catch (t) {
                                return !1
                            }
                            return !0;
                        case o.LocalStorage:
                            try {
                                window.localStorage.getItem("item")
                            } catch (t) {
                                return !1
                            }
                            return !0;
                        default:
                            return !0
                    }
                },
                R = t => A[t];
            class T {
                constructor(t) {
                    var e;
                    let r;
                    if (this.options = t, this.inFlightRequests = new Map, this.agentPromise = null, this.agent = {
                            get: () => {
                                throw Error("FPJSAgent hasn't loaded yet. Make sure to call the init() method first.")
                            }
                        }, this.loadOptions = Object.assign(Object.assign({}, t.loadOptions), {
                            integrationInfo: [...t.loadOptions.integrationInfo || [], "fingerprintjs-pro-spa/1.1.0"]
                        }), t.cache && t.cacheLocation && console.warn("Both `cache` and `cacheLocation` options have been specified in the FpjsClient configuration; ignoring `cacheLocation` and using `cache`."), t.cache) r = t.cache;
                    else {
                        if (this.cacheLocation = t.cacheLocation || o.SessionStorage, !R(this.cacheLocation)) throw Error(`Invalid cache location "${this.cacheLocation}"`);
                        C(this.cacheLocation) || (this.cacheLocation = o.Memory), r = R(this.cacheLocation)(t.cachePrefix)
                    }
                    if (t.cacheTimeInSeconds && t.cacheTimeInSeconds > 86400) throw Error("Cache time cannot exceed 86400 seconds (24 hours)");
                    let n = null !== (e = t.cacheTimeInSeconds) && void 0 !== e ? e : 3600;
                    this.cacheManager = new S(r, n)
                }
                init() {
                    return (0, l.mG)(this, void 0, void 0, function*() {
                        if (!this.agentPromise) {
                            var t, e, r, n, i, o, s, a;
                            this.agentPromise = ((t = this.loadOptions).scriptUrlPattern, n = t.token, o = void 0 === (i = t.apiKey) ? n : i, s = function(t, e) {
                                var r = {};
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && 0 > e.indexOf(n) && (r[n] = t[n]);
                                if (null != t && "function" == typeof Object.getOwnPropertySymbols)
                                    for (var i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++) 0 > e.indexOf(n[i]) && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]]);
                                return r
                            }(t, ["scriptUrlPattern", "token", "apiKey"]), a = null !== (e = "scriptUrlPattern", r = Object.prototype.hasOwnProperty.call(t, e) ? t[e] : void 0) && void 0 !== r ? r : "https://fpnpmcdn.net/v<version>/<apiKey>/loader_v<loaderVersion>.js", Promise.resolve().then(function() {
                                var t, e;
                                if (!o || "string" != typeof o) throw Error("API key required");
                                return (t = (Array.isArray(a) ? a : [a]).map(function(t) {
                                    var e, r;
                                    return e = String(t), r = encodeURIComponent, e.replace(/<[^<>]+>/g, function(t) {
                                        return "<version>" === t ? "3" : "<apiKey>" === t ? r(o) : "<loaderVersion>" === t ? r("3.8.5") : t
                                    })
                                }), e = [], (function(t, e) {
                                    var r, n, i = (n = function(t, e, r) {
                                            if (r || 2 == arguments.length)
                                                for (var n, i = 0, o = e.length; i < o; i++) !n && i in e || (n || (n = Array.prototype.slice.call(e, 0, i)), n[i] = e[i]);
                                            return t.concat(n || Array.prototype.slice.call(e))
                                        }([], t, !0), {
                                            current: function() {
                                                return n[0]
                                            },
                                            postpone: function() {
                                                var t = n.shift();
                                                void 0 !== t && n.push(t)
                                            },
                                            exclude: function() {
                                                n.shift()
                                            }
                                        }),
                                        o = (r = 0, function() {
                                            return Math.random() * Math.min(3e3, 100 * Math.pow(2, r++))
                                        }),
                                        s = i.current();
                                    if (void 0 === s) return Promise.reject(TypeError("The list of script URL patterns is empty"));
                                    var a = function(t, r) {
                                        return e(t).catch(function(t) {
                                            if (r + 1 >= 5) throw t;
                                            (function(t) {
                                                if (!(t instanceof Error)) return !1;
                                                var e = t.message;
                                                return e === f || e === h
                                            })(t) ? i.exclude(): i.postpone();
                                            var e, n = i.current();
                                            if (void 0 === n) throw t;
                                            return (e = o(), new Promise(function(t) {
                                                return setTimeout(t, e)
                                            })).then(function() {
                                                return a(n, r + 1)
                                            })
                                        })
                                    };
                                    return a(s, 0)
                                })(t, function(t) {
                                    var r, n, i, o, s, a, u, l, c = new Date,
                                        h = function(r) {
                                            return e.push({
                                                url: t,
                                                startedAt: c,
                                                finishedAt: new Date,
                                                error: r
                                            })
                                        },
                                        m = (r = t, (n = function() {
                                            throw Error(f)
                                        }, s = document, a = "securitypolicyviolation", u = function(t) {
                                            var e = new URL(r, location.href),
                                                n = t.blockedURI;
                                            n !== e.href && n !== e.protocol.slice(0, -1) && n !== e.origin || (o = t, l())
                                        }, s.addEventListener(a, u), l = function() {
                                            return s.removeEventListener(a, u)
                                        }, null == i || i.then(l, l), Promise.resolve().then(function() {
                                            return new Promise(function(t, e) {
                                                var n = document.createElement("script"),
                                                    i = function() {
                                                        var t;
                                                        return null === (t = n.parentNode) || void 0 === t ? void 0 : t.removeChild(n)
                                                    },
                                                    o = document.head || document.getElementsByTagName("head")[0];
                                                n.onload = function() {
                                                    i(), t()
                                                }, n.onerror = function() {
                                                    i(), e(Error(d))
                                                }, n.async = !0, n.src = r, o.appendChild(n)
                                            })
                                        }).then(function(t) {
                                            return l(), t
                                        }, function(t) {
                                            return new Promise(function(t) {
                                                return setTimeout(t)
                                            }).then(function() {
                                                if (l(), o) return n(o);
                                                throw t
                                            })
                                        })).then(p));
                                    return m.then(function() {
                                        return h()
                                    }, h), m
                                }).then(function(t) {
                                    return [t, {
                                        attempts: e
                                    }]
                                })).catch(m)
                            }).then(function(t) {
                                var e = t[0],
                                    r = t[1];
                                return e.load(c(c({}, s), {
                                    ldi: r
                                }))
                            })).then(t => (this.agent = t, t)).catch(t => {
                                throw this.agentPromise = null, t
                            })
                        }
                        return this.agentPromise
                    })
                }
                getVisitorData(t = {}, e = !1) {
                    return (0, l.mG)(this, void 0, void 0, function*() {
                        let r = T.makeCacheKey(t),
                            n = r.toKey();
                        if (!this.inFlightRequests.has(n)) {
                            let r = this._identify(t, e).finally(() => {
                                this.inFlightRequests.delete(n)
                            });
                            this.inFlightRequests.set(n, r)
                        }
                        return yield this.inFlightRequests.get(n)
                    })
                }
                clearCache() {
                    return (0, l.mG)(this, void 0, void 0, function*() {
                        yield this.cacheManager.clearCache()
                    })
                }
                static makeCacheKey(t) {
                    return new g(t)
                }
                _identify(t, e = !1) {
                    return (0, l.mG)(this, void 0, void 0, function*() {
                        let r = T.makeCacheKey(t);
                        if (!e) {
                            let t = yield this.cacheManager.get(r);
                            if (t) return t
                        }
                        let n = yield this.agent.get(t);
                        return yield this.cacheManager.set(r, n), n
                    })
                }
            }
            var k = r(3010),
                L = r.n(k),
                M = function() {
                    throw Error("You forgot to wrap your component in <FpjsProvider>.")
                },
                D = (0, a.createContext)({
                    getVisitorData: M,
                    clearCache: M
                }),
                j = function(t, e) {
                    return (j = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
                    })(t, e)
                },
                _ = function() {
                    return (_ = Object.assign || function(t) {
                        for (var e, r = 1, n = arguments.length; r < n; r++)
                            for (var i in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                        return t
                    }).apply(this, arguments)
                };

            function U(t, e) {
                var r = {};
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && 0 > e.indexOf(n) && (r[n] = t[n]);
                if (null != t && "function" == typeof Object.getOwnPropertySymbols)
                    for (var i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++) 0 > e.indexOf(n[i]) && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]]);
                return r
            }

            function F(t, e, r, n) {
                return new(r || (r = Promise))(function(i, o) {
                    function s(t) {
                        try {
                            u(n.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function a(t) {
                        try {
                            u(n.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function u(t) {
                        var e;
                        t.done ? i(t.value) : ((e = t.value) instanceof r ? e : new r(function(t) {
                            t(e)
                        })).then(s, a)
                    }
                    u((n = n.apply(t, e || [])).next())
                })
            }

            function I(t, e) {
                var r, n, i, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(a) {
                    return function(u) {
                        return function(a) {
                            if (r) throw TypeError("Generator is already executing.");
                            for (; o && (o = 0, a[0] && (s = 0)), s;) try {
                                if (r = 1, n && (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, a[1])).done) return i;
                                switch (n = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                                    case 0:
                                    case 1:
                                        i = a;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: a[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, n = a[1], a = [0];
                                        continue;
                                    case 7:
                                        a = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                            s.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && s.label < i[1]) {
                                            s.label = i[1], i = a;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2], s.ops.push(a);
                                            break
                                        }
                                        i[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                a = e.call(t, s)
                            } catch (t) {
                                a = [6, t], n = 0
                            } finally {
                                r = i = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, u])
                    }
                }
            }

            function V(t, e, r) {
                if (r || 2 == arguments.length)
                    for (var n, i = 0, o = e.length; i < o; i++) !n && i in e || (n || (n = Array.prototype.slice.call(e, 0, i)), n[i] = e[i]);
                return t.concat(n || Array.prototype.slice.call(e))
            }
            "function" == typeof SuppressedError && SuppressedError, (i = s || (s = {})).React = "react", i.Preact = "preact", i.Next = "next", i.Unknown = "unknown";
            var B = function(t) {
                    function e(e) {
                        return t.call(this, e) || this
                    }
                    return ! function(t, e) {
                        if ("function" != typeof e && null !== e) throw TypeError("Class extends value " + String(e) + " is not a constructor or null");

                        function r() {
                            this.constructor = t
                        }
                        j(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
                    }(e, t), e.prototype.render = function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        if (!this.detectedEnv) {
                            var r = t.length > 0;
                            this.detectedEnv = function(t) {
                                try {
                                    var e, r, n = JSON.parse('{"name":"next","version":"13.4.13"}');
                                    if ("object" == typeof n) return n
                                } catch (t) {}
                                return r = t.context, ! function() {
                                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                                    if ("undefined" == typeof window) return !1;
                                    for (var r = 0; r < t.length; r++)
                                        if ((0, t[r])()) return !0;
                                    return !1
                                }(function() {
                                    return "next" in window && !!window.next
                                }, function() {
                                    return document.querySelector("script[id=__NEXT_DATA__]")
                                }) ? r.classRenderReceivesAnyArguments ? {
                                    name: s.Preact
                                } : r.classRenderReceivesAnyArguments ? {
                                    name: s.Unknown
                                } : {
                                    name: s.React
                                } : {
                                    name: s.Next,
                                    version: null === (e = null == window ? void 0 : window.next) || void 0 === e ? void 0 : e.version
                                }
                            }({
                                context: {
                                    classRenderReceivesAnyArguments: r
                                }
                            })
                        }
                        return (0, a.cloneElement)(this.props.children, {
                            env: this.detectedEnv
                        })
                    }, e
                }(a.Component),
                N = "@fingerprintjs/fingerprintjs-pro-react".split("/")[1];

            function q(t) {
                return (0, u.jsx)(B, {
                    children: (0, u.jsx)(W, _({}, t))
                })
            }

            function W(t) {
                var e = this,
                    r = t.children,
                    n = t.forceRebuild,
                    i = t.cache,
                    o = t.cacheTimeInSeconds,
                    s = t.cachePrefix,
                    l = t.cacheLocation,
                    c = t.loadOptions,
                    f = t.env,
                    h = (0, a.useRef)(),
                    d = (0, a.useRef)(),
                    p = (0, a.useMemo)(function() {
                        return {
                            cache: i,
                            cacheTimeInSeconds: o,
                            cachePrefix: s,
                            cacheLocation: l,
                            loadOptions: c
                        }
                    }, [c, i, o, s, l]),
                    m = (0, a.useCallback)(function() {
                        var t = "".concat(N, "/").concat("2.5.0");
                        if (f) {
                            var e = f.version ? "".concat(f.name, "/").concat(f.version) : f.name;
                            t += "/".concat(e)
                        }
                        var r = _(_({}, p), {
                                loadOptions: _(_({}, c), {
                                    integrationInfo: V(V([], c.integrationInfo || [], !0), [t], !1)
                                })
                            }),
                            n = new T(r);
                        return d.current = n.init(), n
                    }, [p, f, c]),
                    y = (0, a.useCallback)(function() {
                        return F(e, void 0, void 0, function() {
                            var t = this;
                            return I(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        var r, n, i, o, s, a;
                                        if ("undefined" == typeof window || void 0 === window.document) throw Error("FpjsProvider client cannot be used in SSR");
                                        if (h.current) return [3, 2];
                                        return [4, (n = (r = {
                                            checkCondition: function() {
                                                return !!h.current
                                            }
                                        }).checkCondition, o = void 0 === (i = r.intervalMs) ? 250 : i, a = void 0 === (s = r.timeoutMs) ? 2e3 : s, new Promise(function(t, e) {
                                            var r = setTimeout(function() {
                                                    clearInterval(i), e(Error("Timeout"))
                                                }, a),
                                                i = setInterval(function() {
                                                    n() && (clearTimeout(r), clearInterval(i), t())
                                                }, o)
                                        })).catch(function() {
                                            return F(t, void 0, void 0, function() {
                                                return I(this, function(t) {
                                                    return m(), [2]
                                                })
                                            })
                                        })];
                                    case 1:
                                        e.sent(), e.label = 2;
                                    case 2:
                                        return [2, h.current]
                                }
                            })
                        })
                    }, [m]),
                    v = (0, a.useCallback)(function(t, r) {
                        return F(e, void 0, void 0, function() {
                            var e;
                            return I(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, y()];
                                    case 1:
                                        return e = n.sent(), [4, d.current];
                                    case 2:
                                        return n.sent(), [2, e.getVisitorData(t, r)]
                                }
                            })
                        })
                    }, [y]),
                    g = (0, a.useCallback)(function() {
                        return F(e, void 0, void 0, function() {
                            return I(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, y()];
                                    case 1:
                                        return [4, t.sent().clearCache()];
                                    case 2:
                                        return t.sent(), [2]
                                }
                            })
                        })
                    }, [y]),
                    b = (0, a.useMemo)(function() {
                        return {
                            clearCache: g,
                            getVisitorData: v
                        }
                    }, [g, v]);
                return (0, a.useEffect)(function() {
                    (!h.current || n) && (h.current = m())
                }, [n, p, m]), (0, u.jsx)(D.Provider, _({
                    value: b
                }, {
                    children: r
                }))
            }

            function $(t, e) {
                if (!t) throw TypeError("".concat(e, " must not be null or undefined"))
            }

            function z(t, e) {
                var r, n, i = this;
                void 0 === t && (t = {}), void 0 === e && (e = H), $(t, "getOptions");
                var o = (r = t, n = (0, a.useRef)(), (0, a.useEffect)(function() {
                        n.current = r
                    }, [r]), n.current),
                    s = e.immediate,
                    u = (0, a.useContext)(D).getVisitorData,
                    l = (0, a.useState)({
                        isLoading: !1
                    }),
                    c = l[0],
                    f = l[1],
                    h = (0, a.useCallback)(function(e) {
                        return void 0 === e && (e = {}), F(i, void 0, void 0, function() {
                            var r, n, i, o, s;
                            return I(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        $(e, "getDataParams"), r = e.ignoreCache, n = U(e, ["ignoreCache"]), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, 4, 5]), f(function(t) {
                                            return _(_({}, t), {
                                                isLoading: !0
                                            })
                                        }), i = t.ignoreCache, [4, u(_(_({}, U(t, ["ignoreCache"])), n), "boolean" == typeof r ? r : i)];
                                    case 2:
                                        return o = a.sent(), f(function(t) {
                                            return _(_({}, t), {
                                                data: o,
                                                isLoading: !1,
                                                error: void 0
                                            })
                                        }), [2, o];
                                    case 3:
                                        var l;
                                        throw (s = (l = a.sent()) instanceof Error ? l : Error(String(l))).name = "FPJSAgentError", f(function(t) {
                                            return _(_({}, t), {
                                                data: void 0,
                                                error: s
                                            })
                                        }), s;
                                    case 4:
                                        return f(function(t) {
                                            return t.isLoading ? _(_({}, t), {
                                                isLoading: !1
                                            }) : t
                                        }), [7];
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    }, [t, u]);
                return (0, a.useEffect)(function() {
                    !s || o && L()(t, o) || h().catch(function(t) {
                        console.error("Failed to fetch visitor data on mount: ".concat(t))
                    })
                }, [s, h, o, t]), {
                    getData: h,
                    isLoading: c.isLoading,
                    data: c.data,
                    error: c.error
                }
            }
            var H = {
                immediate: !0
            }
        },
        8692: function(t, e, r) {
            "use strict";
            r.d(e, {
                Z: function() {
                    return l
                }
            });
            var n = r(2265),
                i = r.t(n, 2),
                o = r(4809),
                s = r(9118),
                a = r(1091).Z;
            let u = i.useSyncExternalStore;

            function l(t, e = {}) {
                let r = (0, o.Z)(),
                    i = "undefined" != typeof window && void 0 !== window.matchMedia,
                    {
                        defaultMatches: l = !1,
                        matchMedia: c = i ? window.matchMedia : null,
                        ssrMatchMedia: f = null,
                        noSsr: h = !1
                    } = (0, s.Z)({
                        name: "MuiUseMediaQuery",
                        props: e,
                        theme: r
                    }),
                    d = "function" == typeof t ? t(r) : t;
                d = d.replace(/^@media( ?)/m, "");
                let p = (void 0 !== u ? function(t, e, r, i, o) {
                    let s = n.useCallback(() => e, [e]),
                        a = n.useMemo(() => {
                            if (o && r) return () => r(t).matches;
                            if (null !== i) {
                                let {
                                    matches: e
                                } = i(t);
                                return () => e
                            }
                            return s
                        }, [s, t, i, o, r]),
                        [l, c] = n.useMemo(() => {
                            if (null === r) return [s, () => () => {}];
                            let e = r(t);
                            return [() => e.matches, t => (e.addListener(t), () => {
                                e.removeListener(t)
                            })]
                        }, [s, r, t]),
                        f = u(c, l, a);
                    return f
                } : function(t, e, r, i, o) {
                    let [s, u] = n.useState(() => o && r ? r(t).matches : i ? i(t).matches : e);
                    return a(() => {
                        let e = !0;
                        if (!r) return;
                        let n = r(t),
                            i = () => {
                                e && u(n.matches)
                            };
                        return i(), n.addListener(i), () => {
                            e = !1, n.removeListener(i)
                        }
                    }, [t, r]), s
                })(d, l, c, f, h);
                return p
            }
        },
        9118: function(t, e, r) {
            "use strict";
            r.d(e, {
                Z: function() {
                    return i
                }
            });
            var n = r(6479);

            function i(t) {
                let {
                    theme: e,
                    name: r,
                    props: i
                } = t;
                return e && e.components && e.components[r] && e.components[r].defaultProps ? function t(e, r) {
                    let i = (0, n.Z)({}, r);
                    return Object.keys(e).forEach(o => {
                        if (o.toString().match(/^(components|slots)$/)) i[o] = (0, n.Z)({}, e[o], i[o]);
                        else if (o.toString().match(/^(componentsProps|slotProps)$/)) {
                            let s = e[o] || {},
                                a = r[o];
                            i[o] = {}, a && Object.keys(a) ? s && Object.keys(s) ? (i[o] = (0, n.Z)({}, a), Object.keys(s).forEach(e => {
                                i[o][e] = t(s[e], a[e])
                            })) : i[o] = a : i[o] = s
                        } else void 0 === i[o] && (i[o] = e[o])
                    }), i
                }(e.components[r].defaultProps, i) : i
            }
        },
        4809: function(t, e, r) {
            "use strict";
            var n = r(2265),
                i = r(7729);
            e.Z = function(t = null) {
                let e = n.useContext(i.T);
                return e && 0 !== Object.keys(e).length ? e : t
            }
        },
        1091: function(t, e, r) {
            "use strict";
            var n = r(2265);
            let i = "undefined" != typeof window ? n.useLayoutEffect : n.useEffect;
            e.Z = i
        },
        11: function(t, e, r) {
            var n = r(5491).w_;
            t.exports.L = function(t) {
                return n({
                    tag: "svg",
                    attr: {
                        fill: "currentColor",
                        viewBox: "0 0 16 16"
                    },
                    child: [{
                        tag: "path",
                        attr: {
                            d: "M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
                        }
                    }, {
                        tag: "path",
                        attr: {
                            d: "M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z"
                        }
                    }]
                })(t)
            }
        },
        9699: function(t, e, r) {
            var n = r(5491).w_;
            t.exports.b = function(t) {
                return n({
                    tag: "svg",
                    attr: {
                        fill: "currentColor",
                        viewBox: "0 0 16 16"
                    },
                    child: [{
                        tag: "path",
                        attr: {
                            d: "M8.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
                        }
                    }, {
                        tag: "path",
                        attr: {
                            d: "M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8l-2.083-2.083a.5.5 0 0 0-.76.063L8 11 5.835 9.7a.5.5 0 0 0-.611.076L3 12V2z"
                        }
                    }]
                })(t)
            }
        },
        523: function(t, e, r) {
            var n = r(5491).w_;
            t.exports.A = function(t) {
                return n({
                    tag: "svg",
                    attr: {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    },
                    child: [{
                        tag: "path",
                        attr: {
                            d: "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
                        }
                    }]
                })(t)
            }
        },
        7876: function(t, e, r) {
            var n = r(5491).w_;
            t.exports.q = function(t) {
                return n({
                    tag: "svg",
                    attr: {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    },
                    child: [{
                        tag: "line",
                        attr: {
                            x1: "18",
                            y1: "6",
                            x2: "6",
                            y2: "18"
                        }
                    }, {
                        tag: "line",
                        attr: {
                            x1: "6",
                            y1: "6",
                            x2: "18",
                            y2: "18"
                        }
                    }]
                })(t)
            }
        },
        5491: function(t, e, r) {
            "use strict";
            r.d(e, {
                w_: function() {
                    return u
                }
            });
            var n = r(2265),
                i = {
                    color: void 0,
                    size: void 0,
                    className: void 0,
                    style: void 0,
                    attr: void 0
                },
                o = n.createContext && n.createContext(i),
                s = function() {
                    return (s = Object.assign || function(t) {
                        for (var e, r = 1, n = arguments.length; r < n; r++)
                            for (var i in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                        return t
                    }).apply(this, arguments)
                },
                a = function(t, e) {
                    var r = {};
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && 0 > e.indexOf(n) && (r[n] = t[n]);
                    if (null != t && "function" == typeof Object.getOwnPropertySymbols)
                        for (var i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++) 0 > e.indexOf(n[i]) && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]]);
                    return r
                };

            function u(t) {
                return function(e) {
                    return n.createElement(l, s({
                        attr: s({}, t.attr)
                    }, e), function t(e) {
                        return e && e.map(function(e, r) {
                            return n.createElement(e.tag, s({
                                key: r
                            }, e.attr), t(e.child))
                        })
                    }(t.child))
                }
            }

            function l(t) {
                var e = function(e) {
                    var r, i = t.attr,
                        o = t.size,
                        u = t.title,
                        l = a(t, ["attr", "size", "title"]),
                        c = o || e.size || "1em";
                    return e.className && (r = e.className), t.className && (r = (r ? r + " " : "") + t.className), n.createElement("svg", s({
                        stroke: "currentColor",
                        fill: "currentColor",
                        strokeWidth: "0"
                    }, e.attr, i, l, {
                        className: r,
                        style: s(s({
                            color: t.color || e.color
                        }, e.style), t.style),
                        height: c,
                        width: c,
                        xmlns: "http://www.w3.org/2000/svg"
                    }), u && n.createElement("title", null, u), t.children)
                };
                return void 0 !== o ? n.createElement(o.Consumer, null, function(t) {
                    return e(t)
                }) : e(i)
            }
        },
        4699: function(t, e) {
            "use strict";
            e.byteLength = function(t) {
                var e = u(t),
                    r = e[0],
                    n = e[1];
                return (r + n) * 3 / 4 - n
            }, e.toByteArray = function(t) {
                var e, r, o = u(t),
                    s = o[0],
                    a = o[1],
                    l = new i((s + a) * 3 / 4 - a),
                    c = 0,
                    f = a > 0 ? s - 4 : s;
                for (r = 0; r < f; r += 4) e = n[t.charCodeAt(r)] << 18 | n[t.charCodeAt(r + 1)] << 12 | n[t.charCodeAt(r + 2)] << 6 | n[t.charCodeAt(r + 3)], l[c++] = e >> 16 & 255, l[c++] = e >> 8 & 255, l[c++] = 255 & e;
                return 2 === a && (e = n[t.charCodeAt(r)] << 2 | n[t.charCodeAt(r + 1)] >> 4, l[c++] = 255 & e), 1 === a && (e = n[t.charCodeAt(r)] << 10 | n[t.charCodeAt(r + 1)] << 4 | n[t.charCodeAt(r + 2)] >> 2, l[c++] = e >> 8 & 255, l[c++] = 255 & e), l
            }, e.fromByteArray = function(t) {
                for (var e, n = t.length, i = n % 3, o = [], s = 0, a = n - i; s < a; s += 16383) o.push(function(t, e, n) {
                    for (var i, o = [], s = e; s < n; s += 3) o.push(r[(i = (t[s] << 16 & 16711680) + (t[s + 1] << 8 & 65280) + (255 & t[s + 2])) >> 18 & 63] + r[i >> 12 & 63] + r[i >> 6 & 63] + r[63 & i]);
                    return o.join("")
                }(t, s, s + 16383 > a ? a : s + 16383));
                return 1 === i ? o.push(r[(e = t[n - 1]) >> 2] + r[e << 4 & 63] + "==") : 2 === i && o.push(r[(e = (t[n - 2] << 8) + t[n - 1]) >> 10] + r[e >> 4 & 63] + r[e << 2 & 63] + "="), o.join("")
            };
            for (var r = [], n = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, a = o.length; s < a; ++s) r[s] = o[s], n[o.charCodeAt(s)] = s;

            function u(t) {
                var e = t.length;
                if (e % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
                var r = t.indexOf("="); - 1 === r && (r = e);
                var n = r === e ? 0 : 4 - r % 4;
                return [r, n]
            }
            n["-".charCodeAt(0)] = 62, n["_".charCodeAt(0)] = 63
        },
        7133: function(t, e, r) {
            "use strict";
            /*!
             * The buffer module from node.js, for the browser.
             *
             * @author Feross Aboukhadijeh <https://feross.org>
             * @license MIT
             */
            var n = r(4699),
                i = r(9087),
                o = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;

            function s(t) {
                if (t > 2147483647) throw RangeError('The value "' + t + '" is invalid for option "size"');
                var e = new Uint8Array(t);
                return Object.setPrototypeOf(e, a.prototype), e
            }

            function a(t, e, r) {
                if ("number" == typeof t) {
                    if ("string" == typeof e) throw TypeError('The "string" argument must be of type string. Received type number');
                    return c(t)
                }
                return u(t, e, r)
            }

            function u(t, e, r) {
                if ("string" == typeof t) return function(t, e) {
                    if (("string" != typeof e || "" === e) && (e = "utf8"), !a.isEncoding(e)) throw TypeError("Unknown encoding: " + e);
                    var r = 0 | p(t, e),
                        n = s(r),
                        i = n.write(t, e);
                    return i !== r && (n = n.slice(0, i)), n
                }(t, e);
                if (ArrayBuffer.isView(t)) return function(t) {
                    if (T(t, Uint8Array)) {
                        var e = new Uint8Array(t);
                        return h(e.buffer, e.byteOffset, e.byteLength)
                    }
                    return f(t)
                }(t);
                if (null == t) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
                if (T(t, ArrayBuffer) || t && T(t.buffer, ArrayBuffer) || "undefined" != typeof SharedArrayBuffer && (T(t, SharedArrayBuffer) || t && T(t.buffer, SharedArrayBuffer))) return h(t, e, r);
                if ("number" == typeof t) throw TypeError('The "value" argument must not be of type number. Received type number');
                var n = t.valueOf && t.valueOf();
                if (null != n && n !== t) return a.from(n, e, r);
                var i = function(t) {
                    if (a.isBuffer(t)) {
                        var e, r = 0 | d(t.length),
                            n = s(r);
                        return 0 === n.length || t.copy(n, 0, 0, r), n
                    }
                    return void 0 !== t.length ? "number" != typeof t.length || (e = t.length) != e ? s(0) : f(t) : "Buffer" === t.type && Array.isArray(t.data) ? f(t.data) : void 0
                }(t);
                if (i) return i;
                if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t[Symbol.toPrimitive]) return a.from(t[Symbol.toPrimitive]("string"), e, r);
                throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t)
            }

            function l(t) {
                if ("number" != typeof t) throw TypeError('"size" argument must be of type number');
                if (t < 0) throw RangeError('The value "' + t + '" is invalid for option "size"')
            }

            function c(t) {
                return l(t), s(t < 0 ? 0 : 0 | d(t))
            }

            function f(t) {
                for (var e = t.length < 0 ? 0 : 0 | d(t.length), r = s(e), n = 0; n < e; n += 1) r[n] = 255 & t[n];
                return r
            }

            function h(t, e, r) {
                var n;
                if (e < 0 || t.byteLength < e) throw RangeError('"offset" is outside of buffer bounds');
                if (t.byteLength < e + (r || 0)) throw RangeError('"length" is outside of buffer bounds');
                return Object.setPrototypeOf(n = void 0 === e && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, e) : new Uint8Array(t, e, r), a.prototype), n
            }

            function d(t) {
                if (t >= 2147483647) throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");
                return 0 | t
            }

            function p(t, e) {
                if (a.isBuffer(t)) return t.length;
                if (ArrayBuffer.isView(t) || T(t, ArrayBuffer)) return t.byteLength;
                if ("string" != typeof t) throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
                var r = t.length,
                    n = arguments.length > 2 && !0 === arguments[2];
                if (!n && 0 === r) return 0;
                for (var i = !1;;) switch (e) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return r;
                    case "utf8":
                    case "utf-8":
                        return A(t).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * r;
                    case "hex":
                        return r >>> 1;
                    case "base64":
                        return C(t).length;
                    default:
                        if (i) return n ? -1 : A(t).length;
                        e = ("" + e).toLowerCase(), i = !0
                }
            }

            function m(t, e, r) {
                var i, o, s = !1;
                if ((void 0 === e || e < 0) && (e = 0), e > this.length || ((void 0 === r || r > this.length) && (r = this.length), r <= 0 || (r >>>= 0) <= (e >>>= 0))) return "";
                for (t || (t = "utf8");;) switch (t) {
                    case "hex":
                        return function(t, e, r) {
                            var n = t.length;
                            (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
                            for (var i = "", o = e; o < r; ++o) i += k[t[o]];
                            return i
                        }(this, e, r);
                    case "utf8":
                    case "utf-8":
                        return b(this, e, r);
                    case "ascii":
                        return function(t, e, r) {
                            var n = "";
                            r = Math.min(t.length, r);
                            for (var i = e; i < r; ++i) n += String.fromCharCode(127 & t[i]);
                            return n
                        }(this, e, r);
                    case "latin1":
                    case "binary":
                        return function(t, e, r) {
                            var n = "";
                            r = Math.min(t.length, r);
                            for (var i = e; i < r; ++i) n += String.fromCharCode(t[i]);
                            return n
                        }(this, e, r);
                    case "base64":
                        return i = e, o = r, 0 === i && o === this.length ? n.fromByteArray(this) : n.fromByteArray(this.slice(i, o));
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return function(t, e, r) {
                            for (var n = t.slice(e, r), i = "", o = 0; o < n.length - 1; o += 2) i += String.fromCharCode(n[o] + 256 * n[o + 1]);
                            return i
                        }(this, e, r);
                    default:
                        if (s) throw TypeError("Unknown encoding: " + t);
                        t = (t + "").toLowerCase(), s = !0
                }
            }

            function y(t, e, r) {
                var n = t[e];
                t[e] = t[r], t[r] = n
            }

            function v(t, e, r, n, i) {
                var o;
                if (0 === t.length) return -1;
                if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), (o = r = +r) != o && (r = i ? 0 : t.length - 1), r < 0 && (r = t.length + r), r >= t.length) {
                    if (i) return -1;
                    r = t.length - 1
                } else if (r < 0) {
                    if (!i) return -1;
                    r = 0
                }
                if ("string" == typeof e && (e = a.from(e, n)), a.isBuffer(e)) return 0 === e.length ? -1 : g(t, e, r, n, i);
                if ("number" == typeof e) return (e &= 255, "function" == typeof Uint8Array.prototype.indexOf) ? i ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r) : g(t, [e], r, n, i);
                throw TypeError("val must be string, number or Buffer")
            }

            function g(t, e, r, n, i) {
                var o, s = 1,
                    a = t.length,
                    u = e.length;
                if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                    if (t.length < 2 || e.length < 2) return -1;
                    s = 2, a /= 2, u /= 2, r /= 2
                }

                function l(t, e) {
                    return 1 === s ? t[e] : t.readUInt16BE(e * s)
                }
                if (i) {
                    var c = -1;
                    for (o = r; o < a; o++)
                        if (l(t, o) === l(e, -1 === c ? 0 : o - c)) {
                            if (-1 === c && (c = o), o - c + 1 === u) return c * s
                        } else -1 !== c && (o -= o - c), c = -1
                } else
                    for (r + u > a && (r = a - u), o = r; o >= 0; o--) {
                        for (var f = !0, h = 0; h < u; h++)
                            if (l(t, o + h) !== l(e, h)) {
                                f = !1;
                                break
                            }
                        if (f) return o
                    }
                return -1
            }

            function b(t, e, r) {
                r = Math.min(t.length, r);
                for (var n = [], i = e; i < r;) {
                    var o, s, a, u, l = t[i],
                        c = null,
                        f = l > 239 ? 4 : l > 223 ? 3 : l > 191 ? 2 : 1;
                    if (i + f <= r) switch (f) {
                        case 1:
                            l < 128 && (c = l);
                            break;
                        case 2:
                            (192 & (o = t[i + 1])) == 128 && (u = (31 & l) << 6 | 63 & o) > 127 && (c = u);
                            break;
                        case 3:
                            o = t[i + 1], s = t[i + 2], (192 & o) == 128 && (192 & s) == 128 && (u = (15 & l) << 12 | (63 & o) << 6 | 63 & s) > 2047 && (u < 55296 || u > 57343) && (c = u);
                            break;
                        case 4:
                            o = t[i + 1], s = t[i + 2], a = t[i + 3], (192 & o) == 128 && (192 & s) == 128 && (192 & a) == 128 && (u = (15 & l) << 18 | (63 & o) << 12 | (63 & s) << 6 | 63 & a) > 65535 && u < 1114112 && (c = u)
                    }
                    null === c ? (c = 65533, f = 1) : c > 65535 && (c -= 65536, n.push(c >>> 10 & 1023 | 55296), c = 56320 | 1023 & c), n.push(c), i += f
                }
                return function(t) {
                    var e = t.length;
                    if (e <= 4096) return String.fromCharCode.apply(String, t);
                    for (var r = "", n = 0; n < e;) r += String.fromCharCode.apply(String, t.slice(n, n += 4096));
                    return r
                }(n)
            }

            function w(t, e, r) {
                if (t % 1 != 0 || t < 0) throw RangeError("offset is not uint");
                if (t + e > r) throw RangeError("Trying to access beyond buffer length")
            }

            function x(t, e, r, n, i, o) {
                if (!a.isBuffer(t)) throw TypeError('"buffer" argument must be a Buffer instance');
                if (e > i || e < o) throw RangeError('"value" argument is out of bounds');
                if (r + n > t.length) throw RangeError("Index out of range")
            }

            function E(t, e, r, n, i, o) {
                if (r + n > t.length || r < 0) throw RangeError("Index out of range")
            }

            function S(t, e, r, n, o) {
                return e = +e, r >>>= 0, o || E(t, e, r, 4, 34028234663852886e22, -34028234663852886e22), i.write(t, e, r, n, 23, 4), r + 4
            }

            function P(t, e, r, n, o) {
                return e = +e, r >>>= 0, o || E(t, e, r, 8, 17976931348623157e292, -17976931348623157e292), i.write(t, e, r, n, 52, 8), r + 8
            }
            e.lW = a, e.h2 = 50, a.TYPED_ARRAY_SUPPORT = function() {
                try {
                    var t = new Uint8Array(1),
                        e = {
                            foo: function() {
                                return 42
                            }
                        };
                    return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(t, e), 42 === t.foo()
                } catch (t) {
                    return !1
                }
            }(), a.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(a.prototype, "parent", {
                enumerable: !0,
                get: function() {
                    if (a.isBuffer(this)) return this.buffer
                }
            }), Object.defineProperty(a.prototype, "offset", {
                enumerable: !0,
                get: function() {
                    if (a.isBuffer(this)) return this.byteOffset
                }
            }), a.poolSize = 8192, a.from = function(t, e, r) {
                return u(t, e, r)
            }, Object.setPrototypeOf(a.prototype, Uint8Array.prototype), Object.setPrototypeOf(a, Uint8Array), a.alloc = function(t, e, r) {
                return (l(t), t <= 0) ? s(t) : void 0 !== e ? "string" == typeof r ? s(t).fill(e, r) : s(t).fill(e) : s(t)
            }, a.allocUnsafe = function(t) {
                return c(t)
            }, a.allocUnsafeSlow = function(t) {
                return c(t)
            }, a.isBuffer = function(t) {
                return null != t && !0 === t._isBuffer && t !== a.prototype
            }, a.compare = function(t, e) {
                if (T(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)), T(e, Uint8Array) && (e = a.from(e, e.offset, e.byteLength)), !a.isBuffer(t) || !a.isBuffer(e)) throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                if (t === e) return 0;
                for (var r = t.length, n = e.length, i = 0, o = Math.min(r, n); i < o; ++i)
                    if (t[i] !== e[i]) {
                        r = t[i], n = e[i];
                        break
                    }
                return r < n ? -1 : n < r ? 1 : 0
            }, a.isEncoding = function(t) {
                switch (String(t).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, a.concat = function(t, e) {
                if (!Array.isArray(t)) throw TypeError('"list" argument must be an Array of Buffers');
                if (0 === t.length) return a.alloc(0);
                if (void 0 === e)
                    for (r = 0, e = 0; r < t.length; ++r) e += t[r].length;
                var r, n = a.allocUnsafe(e),
                    i = 0;
                for (r = 0; r < t.length; ++r) {
                    var o = t[r];
                    if (T(o, Uint8Array)) i + o.length > n.length ? a.from(o).copy(n, i) : Uint8Array.prototype.set.call(n, o, i);
                    else if (a.isBuffer(o)) o.copy(n, i);
                    else throw TypeError('"list" argument must be an Array of Buffers');
                    i += o.length
                }
                return n
            }, a.byteLength = p, a.prototype._isBuffer = !0, a.prototype.swap16 = function() {
                var t = this.length;
                if (t % 2 != 0) throw RangeError("Buffer size must be a multiple of 16-bits");
                for (var e = 0; e < t; e += 2) y(this, e, e + 1);
                return this
            }, a.prototype.swap32 = function() {
                var t = this.length;
                if (t % 4 != 0) throw RangeError("Buffer size must be a multiple of 32-bits");
                for (var e = 0; e < t; e += 4) y(this, e, e + 3), y(this, e + 1, e + 2);
                return this
            }, a.prototype.swap64 = function() {
                var t = this.length;
                if (t % 8 != 0) throw RangeError("Buffer size must be a multiple of 64-bits");
                for (var e = 0; e < t; e += 8) y(this, e, e + 7), y(this, e + 1, e + 6), y(this, e + 2, e + 5), y(this, e + 3, e + 4);
                return this
            }, a.prototype.toString = function() {
                var t = this.length;
                return 0 === t ? "" : 0 == arguments.length ? b(this, 0, t) : m.apply(this, arguments)
            }, a.prototype.toLocaleString = a.prototype.toString, a.prototype.equals = function(t) {
                if (!a.isBuffer(t)) throw TypeError("Argument must be a Buffer");
                return this === t || 0 === a.compare(this, t)
            }, a.prototype.inspect = function() {
                var t = "",
                    r = e.h2;
                return t = this.toString("hex", 0, r).replace(/(.{2})/g, "$1 ").trim(), this.length > r && (t += " ... "), "<Buffer " + t + ">"
            }, o && (a.prototype[o] = a.prototype.inspect), a.prototype.compare = function(t, e, r, n, i) {
                if (T(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)), !a.isBuffer(t)) throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
                if (void 0 === e && (e = 0), void 0 === r && (r = t ? t.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), e < 0 || r > t.length || n < 0 || i > this.length) throw RangeError("out of range index");
                if (n >= i && e >= r) return 0;
                if (n >= i) return -1;
                if (e >= r) return 1;
                if (e >>>= 0, r >>>= 0, n >>>= 0, i >>>= 0, this === t) return 0;
                for (var o = i - n, s = r - e, u = Math.min(o, s), l = this.slice(n, i), c = t.slice(e, r), f = 0; f < u; ++f)
                    if (l[f] !== c[f]) {
                        o = l[f], s = c[f];
                        break
                    }
                return o < s ? -1 : s < o ? 1 : 0
            }, a.prototype.includes = function(t, e, r) {
                return -1 !== this.indexOf(t, e, r)
            }, a.prototype.indexOf = function(t, e, r) {
                return v(this, t, e, r, !0)
            }, a.prototype.lastIndexOf = function(t, e, r) {
                return v(this, t, e, r, !1)
            }, a.prototype.write = function(t, e, r, n) {
                if (void 0 === e) n = "utf8", r = this.length, e = 0;
                else if (void 0 === r && "string" == typeof e) n = e, r = this.length, e = 0;
                else if (isFinite(e)) e >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0);
                else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                var i, o, s, a, u, l, c, f, h = this.length - e;
                if ((void 0 === r || r > h) && (r = h), t.length > 0 && (r < 0 || e < 0) || e > this.length) throw RangeError("Attempt to write outside buffer bounds");
                n || (n = "utf8");
                for (var d = !1;;) switch (n) {
                    case "hex":
                        return function(t, e, r, n) {
                            r = Number(r) || 0;
                            var i = t.length - r;
                            n ? (n = Number(n)) > i && (n = i) : n = i;
                            var o = e.length;
                            n > o / 2 && (n = o / 2);
                            for (var s = 0; s < n; ++s) {
                                var a = parseInt(e.substr(2 * s, 2), 16);
                                if (a != a) break;
                                t[r + s] = a
                            }
                            return s
                        }(this, t, e, r);
                    case "utf8":
                    case "utf-8":
                        return i = e, o = r, R(A(t, this.length - i), this, i, o);
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return s = e, a = r, R(function(t) {
                            for (var e = [], r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
                            return e
                        }(t), this, s, a);
                    case "base64":
                        return u = e, l = r, R(C(t), this, u, l);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return c = e, f = r, R(function(t, e) {
                            for (var r, n, i = [], o = 0; o < t.length && !((e -= 2) < 0); ++o) n = (r = t.charCodeAt(o)) >> 8, i.push(r % 256), i.push(n);
                            return i
                        }(t, this.length - c), this, c, f);
                    default:
                        if (d) throw TypeError("Unknown encoding: " + n);
                        n = ("" + n).toLowerCase(), d = !0
                }
            }, a.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            }, a.prototype.slice = function(t, e) {
                var r = this.length;
                t = ~~t, e = void 0 === e ? r : ~~e, t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), e < t && (e = t);
                var n = this.subarray(t, e);
                return Object.setPrototypeOf(n, a.prototype), n
            }, a.prototype.readUintLE = a.prototype.readUIntLE = function(t, e, r) {
                t >>>= 0, e >>>= 0, r || w(t, e, this.length);
                for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256);) n += this[t + o] * i;
                return n
            }, a.prototype.readUintBE = a.prototype.readUIntBE = function(t, e, r) {
                t >>>= 0, e >>>= 0, r || w(t, e, this.length);
                for (var n = this[t + --e], i = 1; e > 0 && (i *= 256);) n += this[t + --e] * i;
                return n
            }, a.prototype.readUint8 = a.prototype.readUInt8 = function(t, e) {
                return t >>>= 0, e || w(t, 1, this.length), this[t]
            }, a.prototype.readUint16LE = a.prototype.readUInt16LE = function(t, e) {
                return t >>>= 0, e || w(t, 2, this.length), this[t] | this[t + 1] << 8
            }, a.prototype.readUint16BE = a.prototype.readUInt16BE = function(t, e) {
                return t >>>= 0, e || w(t, 2, this.length), this[t] << 8 | this[t + 1]
            }, a.prototype.readUint32LE = a.prototype.readUInt32LE = function(t, e) {
                return t >>>= 0, e || w(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
            }, a.prototype.readUint32BE = a.prototype.readUInt32BE = function(t, e) {
                return t >>>= 0, e || w(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
            }, a.prototype.readIntLE = function(t, e, r) {
                t >>>= 0, e >>>= 0, r || w(t, e, this.length);
                for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256);) n += this[t + o] * i;
                return n >= (i *= 128) && (n -= Math.pow(2, 8 * e)), n
            }, a.prototype.readIntBE = function(t, e, r) {
                t >>>= 0, e >>>= 0, r || w(t, e, this.length);
                for (var n = e, i = 1, o = this[t + --n]; n > 0 && (i *= 256);) o += this[t + --n] * i;
                return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o
            }, a.prototype.readInt8 = function(t, e) {
                return (t >>>= 0, e || w(t, 1, this.length), 128 & this[t]) ? -((255 - this[t] + 1) * 1) : this[t]
            }, a.prototype.readInt16LE = function(t, e) {
                t >>>= 0, e || w(t, 2, this.length);
                var r = this[t] | this[t + 1] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, a.prototype.readInt16BE = function(t, e) {
                t >>>= 0, e || w(t, 2, this.length);
                var r = this[t + 1] | this[t] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, a.prototype.readInt32LE = function(t, e) {
                return t >>>= 0, e || w(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
            }, a.prototype.readInt32BE = function(t, e) {
                return t >>>= 0, e || w(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
            }, a.prototype.readFloatLE = function(t, e) {
                return t >>>= 0, e || w(t, 4, this.length), i.read(this, t, !0, 23, 4)
            }, a.prototype.readFloatBE = function(t, e) {
                return t >>>= 0, e || w(t, 4, this.length), i.read(this, t, !1, 23, 4)
            }, a.prototype.readDoubleLE = function(t, e) {
                return t >>>= 0, e || w(t, 8, this.length), i.read(this, t, !0, 52, 8)
            }, a.prototype.readDoubleBE = function(t, e) {
                return t >>>= 0, e || w(t, 8, this.length), i.read(this, t, !1, 52, 8)
            }, a.prototype.writeUintLE = a.prototype.writeUIntLE = function(t, e, r, n) {
                if (t = +t, e >>>= 0, r >>>= 0, !n) {
                    var i = Math.pow(2, 8 * r) - 1;
                    x(this, t, e, r, i, 0)
                }
                var o = 1,
                    s = 0;
                for (this[e] = 255 & t; ++s < r && (o *= 256);) this[e + s] = t / o & 255;
                return e + r
            }, a.prototype.writeUintBE = a.prototype.writeUIntBE = function(t, e, r, n) {
                if (t = +t, e >>>= 0, r >>>= 0, !n) {
                    var i = Math.pow(2, 8 * r) - 1;
                    x(this, t, e, r, i, 0)
                }
                var o = r - 1,
                    s = 1;
                for (this[e + o] = 255 & t; --o >= 0 && (s *= 256);) this[e + o] = t / s & 255;
                return e + r
            }, a.prototype.writeUint8 = a.prototype.writeUInt8 = function(t, e, r) {
                return t = +t, e >>>= 0, r || x(this, t, e, 1, 255, 0), this[e] = 255 & t, e + 1
            }, a.prototype.writeUint16LE = a.prototype.writeUInt16LE = function(t, e, r) {
                return t = +t, e >>>= 0, r || x(this, t, e, 2, 65535, 0), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
            }, a.prototype.writeUint16BE = a.prototype.writeUInt16BE = function(t, e, r) {
                return t = +t, e >>>= 0, r || x(this, t, e, 2, 65535, 0), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
            }, a.prototype.writeUint32LE = a.prototype.writeUInt32LE = function(t, e, r) {
                return t = +t, e >>>= 0, r || x(this, t, e, 4, 4294967295, 0), this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t, e + 4
            }, a.prototype.writeUint32BE = a.prototype.writeUInt32BE = function(t, e, r) {
                return t = +t, e >>>= 0, r || x(this, t, e, 4, 4294967295, 0), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
            }, a.prototype.writeIntLE = function(t, e, r, n) {
                if (t = +t, e >>>= 0, !n) {
                    var i = Math.pow(2, 8 * r - 1);
                    x(this, t, e, r, i - 1, -i)
                }
                var o = 0,
                    s = 1,
                    a = 0;
                for (this[e] = 255 & t; ++o < r && (s *= 256);) t < 0 && 0 === a && 0 !== this[e + o - 1] && (a = 1), this[e + o] = (t / s >> 0) - a & 255;
                return e + r
            }, a.prototype.writeIntBE = function(t, e, r, n) {
                if (t = +t, e >>>= 0, !n) {
                    var i = Math.pow(2, 8 * r - 1);
                    x(this, t, e, r, i - 1, -i)
                }
                var o = r - 1,
                    s = 1,
                    a = 0;
                for (this[e + o] = 255 & t; --o >= 0 && (s *= 256);) t < 0 && 0 === a && 0 !== this[e + o + 1] && (a = 1), this[e + o] = (t / s >> 0) - a & 255;
                return e + r
            }, a.prototype.writeInt8 = function(t, e, r) {
                return t = +t, e >>>= 0, r || x(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
            }, a.prototype.writeInt16LE = function(t, e, r) {
                return t = +t, e >>>= 0, r || x(this, t, e, 2, 32767, -32768), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
            }, a.prototype.writeInt16BE = function(t, e, r) {
                return t = +t, e >>>= 0, r || x(this, t, e, 2, 32767, -32768), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
            }, a.prototype.writeInt32LE = function(t, e, r) {
                return t = +t, e >>>= 0, r || x(this, t, e, 4, 2147483647, -2147483648), this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24, e + 4
            }, a.prototype.writeInt32BE = function(t, e, r) {
                return t = +t, e >>>= 0, r || x(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
            }, a.prototype.writeFloatLE = function(t, e, r) {
                return S(this, t, e, !0, r)
            }, a.prototype.writeFloatBE = function(t, e, r) {
                return S(this, t, e, !1, r)
            }, a.prototype.writeDoubleLE = function(t, e, r) {
                return P(this, t, e, !0, r)
            }, a.prototype.writeDoubleBE = function(t, e, r) {
                return P(this, t, e, !1, r)
            }, a.prototype.copy = function(t, e, r, n) {
                if (!a.isBuffer(t)) throw TypeError("argument should be a Buffer");
                if (r || (r = 0), n || 0 === n || (n = this.length), e >= t.length && (e = t.length), e || (e = 0), n > 0 && n < r && (n = r), n === r || 0 === t.length || 0 === this.length) return 0;
                if (e < 0) throw RangeError("targetStart out of bounds");
                if (r < 0 || r >= this.length) throw RangeError("Index out of range");
                if (n < 0) throw RangeError("sourceEnd out of bounds");
                n > this.length && (n = this.length), t.length - e < n - r && (n = t.length - e + r);
                var i = n - r;
                return this === t && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(e, r, n) : Uint8Array.prototype.set.call(t, this.subarray(r, n), e), i
            }, a.prototype.fill = function(t, e, r, n) {
                if ("string" == typeof t) {
                    if ("string" == typeof e ? (n = e, e = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), void 0 !== n && "string" != typeof n) throw TypeError("encoding must be a string");
                    if ("string" == typeof n && !a.isEncoding(n)) throw TypeError("Unknown encoding: " + n);
                    if (1 === t.length) {
                        var i, o = t.charCodeAt(0);
                        ("utf8" === n && o < 128 || "latin1" === n) && (t = o)
                    }
                } else "number" == typeof t ? t &= 255 : "boolean" == typeof t && (t = Number(t));
                if (e < 0 || this.length < e || this.length < r) throw RangeError("Out of range index");
                if (r <= e) return this;
                if (e >>>= 0, r = void 0 === r ? this.length : r >>> 0, t || (t = 0), "number" == typeof t)
                    for (i = e; i < r; ++i) this[i] = t;
                else {
                    var s = a.isBuffer(t) ? t : a.from(t, n),
                        u = s.length;
                    if (0 === u) throw TypeError('The value "' + t + '" is invalid for argument "value"');
                    for (i = 0; i < r - e; ++i) this[i + e] = s[i % u]
                }
                return this
            };
            var O = /[^+/0-9A-Za-z-_]/g;

            function A(t, e) {
                e = e || 1 / 0;
                for (var r, n = t.length, i = null, o = [], s = 0; s < n; ++s) {
                    if ((r = t.charCodeAt(s)) > 55295 && r < 57344) {
                        if (!i) {
                            if (r > 56319 || s + 1 === n) {
                                (e -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            i = r;
                            continue
                        }
                        if (r < 56320) {
                            (e -= 3) > -1 && o.push(239, 191, 189), i = r;
                            continue
                        }
                        r = (i - 55296 << 10 | r - 56320) + 65536
                    } else i && (e -= 3) > -1 && o.push(239, 191, 189);
                    if (i = null, r < 128) {
                        if ((e -= 1) < 0) break;
                        o.push(r)
                    } else if (r < 2048) {
                        if ((e -= 2) < 0) break;
                        o.push(r >> 6 | 192, 63 & r | 128)
                    } else if (r < 65536) {
                        if ((e -= 3) < 0) break;
                        o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                    } else if (r < 1114112) {
                        if ((e -= 4) < 0) break;
                        o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                    } else throw Error("Invalid code point")
                }
                return o
            }

            function C(t) {
                return n.toByteArray(function(t) {
                    if ((t = (t = t.split("=")[0]).trim().replace(O, "")).length < 2) return "";
                    for (; t.length % 4 != 0;) t += "=";
                    return t
                }(t))
            }

            function R(t, e, r, n) {
                for (var i = 0; i < n && !(i + r >= e.length) && !(i >= t.length); ++i) e[i + r] = t[i];
                return i
            }

            function T(t, e) {
                return t instanceof e || null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name
            }
            var k = function() {
                for (var t = "0123456789abcdef", e = Array(256), r = 0; r < 16; ++r)
                    for (var n = 16 * r, i = 0; i < 16; ++i) e[n + i] = t[r] + t[i];
                return e
            }()
        },
        3010: function(t) {
            "use strict";
            t.exports = function t(e, r) {
                if (e === r) return !0;
                if (e && r && "object" == typeof e && "object" == typeof r) {
                    if (e.constructor !== r.constructor) return !1;
                    if (Array.isArray(e)) {
                        if ((n = e.length) != r.length) return !1;
                        for (i = n; 0 != i--;)
                            if (!t(e[i], r[i])) return !1;
                        return !0
                    }
                    if (e.constructor === RegExp) return e.source === r.source && e.flags === r.flags;
                    if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === r.valueOf();
                    if (e.toString !== Object.prototype.toString) return e.toString() === r.toString();
                    if ((n = (o = Object.keys(e)).length) !== Object.keys(r).length) return !1;
                    for (i = n; 0 != i--;)
                        if (!Object.prototype.hasOwnProperty.call(r, o[i])) return !1;
                    for (i = n; 0 != i--;) {
                        var n, i, o, s = o[i];
                        if (!t(e[s], r[s])) return !1
                    }
                    return !0
                }
                return e != e && r != r
            }
        },
        9087: function(t, e) { /*!ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource>*/
            e.read = function(t, e, r, n, i) {
                var o, s, a = 8 * i - n - 1,
                    u = (1 << a) - 1,
                    l = u >> 1,
                    c = -7,
                    f = r ? i - 1 : 0,
                    h = r ? -1 : 1,
                    d = t[e + f];
                for (f += h, o = d & (1 << -c) - 1, d >>= -c, c += a; c > 0; o = 256 * o + t[e + f], f += h, c -= 8);
                for (s = o & (1 << -c) - 1, o >>= -c, c += n; c > 0; s = 256 * s + t[e + f], f += h, c -= 8);
                if (0 === o) o = 1 - l;
                else {
                    if (o === u) return s ? NaN : (d ? -1 : 1) * (1 / 0);
                    s += Math.pow(2, n), o -= l
                }
                return (d ? -1 : 1) * s * Math.pow(2, o - n)
            }, e.write = function(t, e, r, n, i, o) {
                var s, a, u, l = 8 * o - i - 1,
                    c = (1 << l) - 1,
                    f = c >> 1,
                    h = 23 === i ? 5960464477539062e-23 : 0,
                    d = n ? 0 : o - 1,
                    p = n ? 1 : -1,
                    m = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
                for (isNaN(e = Math.abs(e)) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = c) : (s = Math.floor(Math.log(e) / Math.LN2), e * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), s + f >= 1 ? e += h / u : e += h * Math.pow(2, 1 - f), e * u >= 2 && (s++, u /= 2), s + f >= c ? (a = 0, s = c) : s + f >= 1 ? (a = (e * u - 1) * Math.pow(2, i), s += f) : (a = e * Math.pow(2, f - 1) * Math.pow(2, i), s = 0)); i >= 8; t[r + d] = 255 & a, d += p, a /= 256, i -= 8);
                for (s = s << i | a, l += i; l > 0; t[r + d] = 255 & s, d += p, s /= 256, l -= 8);
                t[r + d - p] |= 128 * m
            }
        },
        9974: function(t, e, r) {
            "use strict";
            var n = r(4303);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.BroadcastChannel = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "nextauth.message";
                return {
                    receive: function(e) {
                        var r = function(r) {
                            if (r.key === t) {
                                var n, i = JSON.parse(null !== (n = r.newValue) && void 0 !== n ? n : "{}");
                                (null == i ? void 0 : i.event) === "session" && null != i && i.data && e(i)
                            }
                        };
                        return window.addEventListener("storage", r),
                            function() {
                                return window.removeEventListener("storage", r)
                            }
                    },
                    post: function(e) {
                        if ("undefined" != typeof window) try {
                            localStorage.setItem(t, JSON.stringify(u(u({}, e), {}, {
                                timestamp: f()
                            })))
                        } catch (t) {}
                    }
                }
            }, e.apiBaseUrl = c, e.fetchData = function(t, e, r) {
                return l.apply(this, arguments)
            }, e.now = f;
            var i = n(r(8276)),
                o = n(r(7318)),
                s = n(r(5951));

            function a(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function u(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? a(Object(r), !0).forEach(function(e) {
                        (0, o.default)(t, e, r[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    })
                }
                return t
            }

            function l() {
                return (l = (0, s.default)(i.default.mark(function t(e, r, n) {
                    var o, s, a, l, f, h, d, p, m, y = arguments;
                    return i.default.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return s = (o = y.length > 3 && void 0 !== y[3] ? y[3] : {}).ctx, l = void 0 === (a = o.req) ? null == s ? void 0 : s.req : a, f = "".concat(c(r), "/").concat(e), t.prev = 2, d = {
                                    headers: u({
                                        "Content-Type": "application/json"
                                    }, null != l && null !== (h = l.headers) && void 0 !== h && h.cookie ? {
                                        cookie: l.headers.cookie
                                    } : {})
                                }, null != l && l.body && (d.body = JSON.stringify(l.body), d.method = "POST"), t.next = 7, fetch(f, d);
                            case 7:
                                return p = t.sent, t.next = 10, p.json();
                            case 10:
                                if (m = t.sent, p.ok) {
                                    t.next = 13;
                                    break
                                }
                                throw m;
                            case 13:
                                return t.abrupt("return", Object.keys(m).length > 0 ? m : null);
                            case 16:
                                return t.prev = 16, t.t0 = t.catch(2), n.error("CLIENT_FETCH_ERROR", {
                                    error: t.t0,
                                    url: f
                                }), t.abrupt("return", null);
                            case 20:
                            case "end":
                                return t.stop()
                        }
                    }, t, null, [
                        [2, 16]
                    ])
                }))).apply(this, arguments)
            }

            function c(t) {
                return "undefined" == typeof window ? "".concat(t.baseUrlServer).concat(t.basePathServer) : t.basePath
            }

            function f() {
                return Math.floor(Date.now() / 1e3)
            }
        },
        2118: function(t, e, r) {
            "use strict";
            var n = r(4303);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.UnsupportedStrategy = e.UnknownError = e.OAuthCallbackError = e.MissingSecret = e.MissingAuthorize = e.MissingAdapterMethods = e.MissingAdapter = e.MissingAPIRoute = e.InvalidCallbackUrl = e.AccountNotLinkedError = void 0, e.adapterErrorHandler = function(t, e) {
                if (t) return Object.keys(t).reduce(function(r, n) {
                    return r[n] = (0, o.default)(i.default.mark(function r() {
                        var o, s, a, u, l, c = arguments;
                        return i.default.wrap(function(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    for (r.prev = 0, s = Array(o = c.length), a = 0; a < o; a++) s[a] = c[a];
                                    return e.debug("adapter_".concat(n), {
                                        args: s
                                    }), u = t[n], r.next = 6, u.apply(void 0, s);
                                case 6:
                                    return r.abrupt("return", r.sent);
                                case 9:
                                    throw r.prev = 9, r.t0 = r.catch(0), e.error("adapter_error_".concat(n), r.t0), (l = new p(r.t0)).name = "".concat(O(n), "Error"), l;
                                case 15:
                                case "end":
                                    return r.stop()
                            }
                        }, r, null, [
                            [0, 9]
                        ])
                    })), r
                }, {})
            }, e.capitalize = O, e.eventsErrorHandler = function(t, e) {
                return Object.keys(t).reduce(function(r, n) {
                    return r[n] = (0, o.default)(i.default.mark(function r() {
                        var o, s = arguments;
                        return i.default.wrap(function(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return r.prev = 0, o = t[n], r.next = 4, o.apply(void 0, s);
                                case 4:
                                    return r.abrupt("return", r.sent);
                                case 7:
                                    r.prev = 7, r.t0 = r.catch(0), e.error("".concat(P(n), "_EVENT_ERROR"), r.t0);
                                case 10:
                                case "end":
                                    return r.stop()
                            }
                        }, r, null, [
                            [0, 7]
                        ])
                    })), r
                }, {})
            }, e.upperSnake = P;
            var i = n(r(8276)),
                o = n(r(5951)),
                s = n(r(8440)),
                a = n(r(7318)),
                u = n(r(8304)),
                l = n(r(9937)),
                c = n(r(8394)),
                f = n(r(4936)),
                h = n(r(7376));

            function d(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = (0, h.default)(t);
                    if (e) {
                        var i = (0, h.default)(this).constructor;
                        r = Reflect.construct(n, arguments, i)
                    } else r = n.apply(this, arguments);
                    return (0, f.default)(this, r)
                }
            }
            var p = function(t) {
                (0, c.default)(r, t);
                var e = d(r);

                function r(t) {
                    var n, i;
                    return (0, u.default)(this, r), (i = e.call(this, null !== (n = null == t ? void 0 : t.message) && void 0 !== n ? n : t)).name = "UnknownError", i.code = t.code, t instanceof Error && (i.stack = t.stack), i
                }
                return (0, l.default)(r, [{
                    key: "toJSON",
                    value: function() {
                        return {
                            name: this.name,
                            message: this.message,
                            stack: this.stack
                        }
                    }
                }]), r
            }((0, n(r(3125)).default)(Error));
            e.UnknownError = p;
            var m = function(t) {
                (0, c.default)(r, t);
                var e = d(r);

                function r() {
                    var t;
                    (0, u.default)(this, r);
                    for (var n = arguments.length, i = Array(n), o = 0; o < n; o++) i[o] = arguments[o];
                    return t = e.call.apply(e, [this].concat(i)), (0, a.default)((0, s.default)(t), "name", "OAuthCallbackError"), t
                }
                return (0, l.default)(r)
            }(p);
            e.OAuthCallbackError = m;
            var y = function(t) {
                (0, c.default)(r, t);
                var e = d(r);

                function r() {
                    var t;
                    (0, u.default)(this, r);
                    for (var n = arguments.length, i = Array(n), o = 0; o < n; o++) i[o] = arguments[o];
                    return t = e.call.apply(e, [this].concat(i)), (0, a.default)((0, s.default)(t), "name", "AccountNotLinkedError"), t
                }
                return (0, l.default)(r)
            }(p);
            e.AccountNotLinkedError = y;
            var v = function(t) {
                (0, c.default)(r, t);
                var e = d(r);

                function r() {
                    var t;
                    (0, u.default)(this, r);
                    for (var n = arguments.length, i = Array(n), o = 0; o < n; o++) i[o] = arguments[o];
                    return t = e.call.apply(e, [this].concat(i)), (0, a.default)((0, s.default)(t), "name", "MissingAPIRouteError"), (0, a.default)((0, s.default)(t), "code", "MISSING_NEXTAUTH_API_ROUTE_ERROR"), t
                }
                return (0, l.default)(r)
            }(p);
            e.MissingAPIRoute = v;
            var g = function(t) {
                (0, c.default)(r, t);
                var e = d(r);

                function r() {
                    var t;
                    (0, u.default)(this, r);
                    for (var n = arguments.length, i = Array(n), o = 0; o < n; o++) i[o] = arguments[o];
                    return t = e.call.apply(e, [this].concat(i)), (0, a.default)((0, s.default)(t), "name", "MissingSecretError"), (0, a.default)((0, s.default)(t), "code", "NO_SECRET"), t
                }
                return (0, l.default)(r)
            }(p);
            e.MissingSecret = g;
            var b = function(t) {
                (0, c.default)(r, t);
                var e = d(r);

                function r() {
                    var t;
                    (0, u.default)(this, r);
                    for (var n = arguments.length, i = Array(n), o = 0; o < n; o++) i[o] = arguments[o];
                    return t = e.call.apply(e, [this].concat(i)), (0, a.default)((0, s.default)(t), "name", "MissingAuthorizeError"), (0, a.default)((0, s.default)(t), "code", "CALLBACK_CREDENTIALS_HANDLER_ERROR"), t
                }
                return (0, l.default)(r)
            }(p);
            e.MissingAuthorize = b;
            var w = function(t) {
                (0, c.default)(r, t);
                var e = d(r);

                function r() {
                    var t;
                    (0, u.default)(this, r);
                    for (var n = arguments.length, i = Array(n), o = 0; o < n; o++) i[o] = arguments[o];
                    return t = e.call.apply(e, [this].concat(i)), (0, a.default)((0, s.default)(t), "name", "MissingAdapterError"), (0, a.default)((0, s.default)(t), "code", "EMAIL_REQUIRES_ADAPTER_ERROR"), t
                }
                return (0, l.default)(r)
            }(p);
            e.MissingAdapter = w;
            var x = function(t) {
                (0, c.default)(r, t);
                var e = d(r);

                function r() {
                    var t;
                    (0, u.default)(this, r);
                    for (var n = arguments.length, i = Array(n), o = 0; o < n; o++) i[o] = arguments[o];
                    return t = e.call.apply(e, [this].concat(i)), (0, a.default)((0, s.default)(t), "name", "MissingAdapterMethodsError"), (0, a.default)((0, s.default)(t), "code", "MISSING_ADAPTER_METHODS_ERROR"), t
                }
                return (0, l.default)(r)
            }(p);
            e.MissingAdapterMethods = x;
            var E = function(t) {
                (0, c.default)(r, t);
                var e = d(r);

                function r() {
                    var t;
                    (0, u.default)(this, r);
                    for (var n = arguments.length, i = Array(n), o = 0; o < n; o++) i[o] = arguments[o];
                    return t = e.call.apply(e, [this].concat(i)), (0, a.default)((0, s.default)(t), "name", "UnsupportedStrategyError"), (0, a.default)((0, s.default)(t), "code", "CALLBACK_CREDENTIALS_JWT_ERROR"), t
                }
                return (0, l.default)(r)
            }(p);
            e.UnsupportedStrategy = E;
            var S = function(t) {
                (0, c.default)(r, t);
                var e = d(r);

                function r() {
                    var t;
                    (0, u.default)(this, r);
                    for (var n = arguments.length, i = Array(n), o = 0; o < n; o++) i[o] = arguments[o];
                    return t = e.call.apply(e, [this].concat(i)), (0, a.default)((0, s.default)(t), "name", "InvalidCallbackUrl"), (0, a.default)((0, s.default)(t), "code", "INVALID_CALLBACK_URL_ERROR"), t
                }
                return (0, l.default)(r)
            }(p);

            function P(t) {
                return t.replace(/([A-Z])/g, "_$1").toUpperCase()
            }

            function O(t) {
                return "".concat(t[0].toUpperCase()).concat(t.slice(1))
            }
            e.InvalidCallbackUrl = S
        },
        2749: function(t, e, r) {
            "use strict";
            var n, i, o, s, a, u = r(2601),
                l = r(4303),
                c = r(8410);
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var f = {
                SessionContext: !0,
                useSession: !0,
                getSession: !0,
                getCsrfToken: !0,
                getProviders: !0,
                signIn: !0,
                signOut: !0,
                SessionProvider: !0
            };
            e.SessionContext = void 0, e.SessionProvider = function(t) {
                if (!T) throw Error("React Context is unavailable in Server Components");
                var e, r, n, i, o, s, a = t.children,
                    u = t.basePath,
                    l = t.refetchInterval,
                    c = t.refetchWhenOffline;
                u && (A.basePath = u);
                var f = void 0 !== t.session;
                A._lastSync = f ? (0, b.now)() : 0;
                var d = y.useState(function() {
                        return f && (A._session = t.session), t.session
                    }),
                    v = (0, m.default)(d, 2),
                    g = v[0],
                    x = v[1],
                    E = y.useState(!f),
                    S = (0, m.default)(E, 2),
                    P = S[0],
                    O = S[1];
                y.useEffect(function() {
                    return A._getSession = (0, p.default)(h.default.mark(function t() {
                            var e, r, n = arguments;
                            return h.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (e = (n.length > 0 && void 0 !== n[0] ? n[0] : {}).event, t.prev = 1, !((r = "storage" === e) || void 0 === A._session)) {
                                            t.next = 10;
                                            break
                                        }
                                        return A._lastSync = (0, b.now)(), t.next = 7, k({
                                            broadcast: !r
                                        });
                                    case 7:
                                        return A._session = t.sent, x(A._session), t.abrupt("return");
                                    case 10:
                                        if (!(!e || null === A._session || (0, b.now)() < A._lastSync)) {
                                            t.next = 12;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 12:
                                        return A._lastSync = (0, b.now)(), t.next = 15, k();
                                    case 15:
                                        A._session = t.sent, x(A._session), t.next = 22;
                                        break;
                                    case 19:
                                        t.prev = 19, t.t0 = t.catch(1), R.error("CLIENT_SESSION_ERROR", t.t0);
                                    case 22:
                                        return t.prev = 22, O(!1), t.finish(22);
                                    case 25:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, null, [
                                [1, 19, 22, 25]
                            ])
                        })), A._getSession(),
                        function() {
                            A._lastSync = 0, A._session = void 0, A._getSession = function() {}
                        }
                }, []), y.useEffect(function() {
                    var t = C.receive(function() {
                        return A._getSession({
                            event: "storage"
                        })
                    });
                    return function() {
                        return t()
                    }
                }, []), y.useEffect(function() {
                    var e = t.refetchOnWindowFocus,
                        r = void 0 === e || e,
                        n = function() {
                            r && "visible" === document.visibilityState && A._getSession({
                                event: "visibilitychange"
                            })
                        };
                    return document.addEventListener("visibilitychange", n, !1),
                        function() {
                            return document.removeEventListener("visibilitychange", n, !1)
                        }
                }, [t.refetchOnWindowFocus]);
                var L = (e = y.useState("undefined" != typeof navigator && navigator.onLine), n = (r = (0, m.default)(e, 2))[0], i = r[1], o = function() {
                        return i(!0)
                    }, s = function() {
                        return i(!1)
                    }, y.useEffect(function() {
                        return window.addEventListener("online", o), window.addEventListener("offline", s),
                            function() {
                                window.removeEventListener("online", o), window.removeEventListener("offline", s)
                            }
                    }, []), n),
                    D = !1 !== c || L;
                y.useEffect(function() {
                    if (l && D) {
                        var t = setInterval(function() {
                            A._session && A._getSession({
                                event: "poll"
                            })
                        }, 1e3 * l);
                        return function() {
                            return clearInterval(t)
                        }
                    }
                }, [l, D]);
                var j = y.useMemo(function() {
                    return {
                        data: g,
                        status: P ? "loading" : g ? "authenticated" : "unauthenticated",
                        update: function(t) {
                            return (0, p.default)(h.default.mark(function e() {
                                var r;
                                return h.default.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!(P || !g)) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            return O(!0), e.t0 = b.fetchData, e.t1 = A, e.t2 = R, e.next = 8, M();
                                        case 8:
                                            return e.t3 = e.sent, e.t4 = t, e.t5 = {
                                                csrfToken: e.t3,
                                                data: e.t4
                                            }, e.t6 = {
                                                body: e.t5
                                            }, e.t7 = {
                                                req: e.t6
                                            }, e.next = 15, (0, e.t0)("session", e.t1, e.t2, e.t7);
                                        case 15:
                                            return r = e.sent, O(!1), r && (x(r), C.post({
                                                event: "session",
                                                data: {
                                                    trigger: "getSession"
                                                }
                                            })), e.abrupt("return", r);
                                        case 19:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e)
                            }))()
                        }
                    }
                }, [g, P]);
                return (0, w.jsx)(T.Provider, {
                    value: j,
                    children: a
                })
            }, e.getCsrfToken = M, e.getProviders = j, e.getSession = k, e.signIn = function(t, e, r) {
                return U.apply(this, arguments)
            }, e.signOut = function(t) {
                return F.apply(this, arguments)
            }, e.useSession = function(t) {
                if (!T) throw Error("React Context is unavailable in Server Components");
                var e = y.useContext(T),
                    r = null != t ? t : {},
                    n = r.required,
                    i = r.onUnauthenticated,
                    o = n && "unauthenticated" === e.status;
                return (y.useEffect(function() {
                    if (o) {
                        var t = "/api/auth/signin?".concat(new URLSearchParams({
                            error: "SessionRequired",
                            callbackUrl: window.location.href
                        }));
                        i ? i() : window.location.href = t
                    }
                }, [o, i]), o) ? {
                    data: e.data,
                    update: e.update,
                    status: "loading"
                } : e
            };
            var h = l(r(8276)),
                d = l(r(7318)),
                p = l(r(5951)),
                m = l(r(3744)),
                y = S(r(2265)),
                v = S(r(2126)),
                g = l(r(2606)),
                b = r(9974),
                w = r(7437),
                x = r(738);

            function E(t) {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap,
                    r = new WeakMap;
                return (E = function(t) {
                    return t ? r : e
                })(t)
            }

            function S(t, e) {
                if (!e && t && t.__esModule) return t;
                if (null === t || "object" !== c(t) && "function" != typeof t) return {
                    default: t
                };
                var r = E(e);
                if (r && r.has(t)) return r.get(t);
                var n = {},
                    i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in t)
                    if ("default" !== o && Object.prototype.hasOwnProperty.call(t, o)) {
                        var s = i ? Object.getOwnPropertyDescriptor(t, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(n, o, s) : n[o] = t[o]
                    }
                return n.default = t, r && r.set(t, n), n
            }

            function P(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function O(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? P(Object(r), !0).forEach(function(e) {
                        (0, d.default)(t, e, r[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : P(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    })
                }
                return t
            }
            Object.keys(x).forEach(function(t) {
                !("default" === t || "__esModule" === t || Object.prototype.hasOwnProperty.call(f, t)) && (t in e && e[t] === x[t] || Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function() {
                        return x[t]
                    }
                }))
            });
            var A = {
                    baseUrl: (0, g.default)(null !== (n = u.env.NEXTAUTH_URL) && void 0 !== n ? n : u.env.VERCEL_URL).origin,
                    basePath: (0, g.default)(u.env.NEXTAUTH_URL).path,
                    baseUrlServer: (0, g.default)(null !== (i = null !== (o = u.env.NEXTAUTH_URL_INTERNAL) && void 0 !== o ? o : u.env.NEXTAUTH_URL) && void 0 !== i ? i : u.env.VERCEL_URL).origin,
                    basePathServer: (0, g.default)(null !== (s = u.env.NEXTAUTH_URL_INTERNAL) && void 0 !== s ? s : u.env.NEXTAUTH_URL).path,
                    _lastSync: 0,
                    _session: void 0,
                    _getSession: function() {}
                },
                C = (0, b.BroadcastChannel)(),
                R = (0, v.proxyLogger)(v.default, A.basePath),
                T = null === (a = y.createContext) || void 0 === a ? void 0 : a.call(y, void 0);

            function k(t) {
                return L.apply(this, arguments)
            }

            function L() {
                return (L = (0, p.default)(h.default.mark(function t(e) {
                    var r, n;
                    return h.default.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, (0, b.fetchData)("session", A, R, e);
                            case 2:
                                return n = t.sent, (null === (r = null == e ? void 0 : e.broadcast) || void 0 === r || r) && C.post({
                                    event: "session",
                                    data: {
                                        trigger: "getSession"
                                    }
                                }), t.abrupt("return", n);
                            case 5:
                            case "end":
                                return t.stop()
                        }
                    }, t)
                }))).apply(this, arguments)
            }

            function M(t) {
                return D.apply(this, arguments)
            }

            function D() {
                return (D = (0, p.default)(h.default.mark(function t(e) {
                    var r;
                    return h.default.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, (0, b.fetchData)("csrf", A, R, e);
                            case 2:
                                return r = t.sent, t.abrupt("return", null == r ? void 0 : r.csrfToken);
                            case 4:
                            case "end":
                                return t.stop()
                        }
                    }, t)
                }))).apply(this, arguments)
            }

            function j() {
                return _.apply(this, arguments)
            }

            function _() {
                return (_ = (0, p.default)(h.default.mark(function t() {
                    return h.default.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, (0, b.fetchData)("providers", A, R);
                            case 2:
                                return t.abrupt("return", t.sent);
                            case 3:
                            case "end":
                                return t.stop()
                        }
                    }, t)
                }))).apply(this, arguments)
            }

            function U() {
                return (U = (0, p.default)(h.default.mark(function t(e, r, n) {
                    var i, o, s, a, u, l, c, f, d, p, m, y, v, g, w, x, E;
                    return h.default.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return s = void 0 === (o = (i = null != r ? r : {}).callbackUrl) ? window.location.href : o, u = void 0 === (a = i.redirect) || a, l = (0, b.apiBaseUrl)(A), t.next = 4, j();
                            case 4:
                                if (c = t.sent) {
                                    t.next = 8;
                                    break
                                }
                                return window.location.href = "".concat(l, "/error"), t.abrupt("return");
                            case 8:
                                if (!(!e || !(e in c))) {
                                    t.next = 11;
                                    break
                                }
                                return window.location.href = "".concat(l, "/signin?").concat(new URLSearchParams({
                                    callbackUrl: s
                                })), t.abrupt("return");
                            case 11:
                                return f = "credentials" === c[e].type, d = "email" === c[e].type, p = f || d, m = "".concat(l, "/").concat(f ? "callback" : "signin", "/").concat(e), y = "".concat(m, "?").concat(new URLSearchParams(n)), t.t0 = fetch, t.t1 = y, t.t2 = {
                                    "Content-Type": "application/x-www-form-urlencoded"
                                }, t.t3 = URLSearchParams, t.t4 = O, t.t5 = O({}, r), t.t6 = {}, t.next = 25, M();
                            case 25:
                                return t.t7 = t.sent, t.t8 = s, t.t9 = {
                                    csrfToken: t.t7,
                                    callbackUrl: t.t8,
                                    json: !0
                                }, t.t10 = (0, t.t4)(t.t5, t.t6, t.t9), t.t11 = new t.t3(t.t10), t.t12 = {
                                    method: "post",
                                    headers: t.t2,
                                    body: t.t11
                                }, t.next = 33, (0, t.t0)(t.t1, t.t12);
                            case 33:
                                return v = t.sent, t.next = 36, v.json();
                            case 36:
                                if (g = t.sent, !(u || !p)) {
                                    t.next = 42;
                                    break
                                }
                                return x = null !== (w = g.url) && void 0 !== w ? w : s, window.location.href = x, x.includes("#") && window.location.reload(), t.abrupt("return");
                            case 42:
                                if (E = new URL(g.url).searchParams.get("error"), !v.ok) {
                                    t.next = 46;
                                    break
                                }
                                return t.next = 46, A._getSession({
                                    event: "storage"
                                });
                            case 46:
                                return t.abrupt("return", {
                                    error: E,
                                    status: v.status,
                                    ok: v.ok,
                                    url: E ? null : g.url
                                });
                            case 47:
                            case "end":
                                return t.stop()
                        }
                    }, t)
                }))).apply(this, arguments)
            }

            function F() {
                return (F = (0, p.default)(h.default.mark(function t(e) {
                    var r, n, i, o, s, a, u, l, c;
                    return h.default.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return i = void 0 === (n = (null != e ? e : {}).callbackUrl) ? window.location.href : n, o = (0, b.apiBaseUrl)(A), t.t0 = {
                                    "Content-Type": "application/x-www-form-urlencoded"
                                }, t.t1 = URLSearchParams, t.next = 6, M();
                            case 6:
                                return t.t2 = t.sent, t.t3 = i, t.t4 = {
                                    csrfToken: t.t2,
                                    callbackUrl: t.t3,
                                    json: !0
                                }, t.t5 = new t.t1(t.t4), s = {
                                    method: "post",
                                    headers: t.t0,
                                    body: t.t5
                                }, t.next = 13, fetch("".concat(o, "/signout"), s);
                            case 13:
                                return a = t.sent, t.next = 16, a.json();
                            case 16:
                                if (u = t.sent, C.post({
                                        event: "session",
                                        data: {
                                            trigger: "signout"
                                        }
                                    }), !(null === (r = null == e ? void 0 : e.redirect) || void 0 === r || r)) {
                                    t.next = 23;
                                    break
                                }
                                return c = null !== (l = u.url) && void 0 !== l ? l : i, window.location.href = c, c.includes("#") && window.location.reload(), t.abrupt("return");
                            case 23:
                                return t.next = 25, A._getSession({
                                    event: "storage"
                                });
                            case 25:
                                return t.abrupt("return", u);
                            case 26:
                            case "end":
                                return t.stop()
                        }
                    }, t)
                }))).apply(this, arguments)
            }
            e.SessionContext = T
        },
        738: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        2126: function(t, e, r) {
            "use strict";
            var n = r(4303);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0, e.proxyLogger = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
                    e = arguments.length > 1 ? arguments[1] : void 0;
                try {
                    if ("undefined" == typeof window) return t;
                    var r = {},
                        n = function(t) {
                            r[t] = function(r, n) {
                                u[t](r, n), "error" === t && (n = a(n)), n.client = !0;
                                var o = "".concat(e, "/_log"),
                                    l = new URLSearchParams(function(t) {
                                        for (var e = 1; e < arguments.length; e++) {
                                            var r = null != arguments[e] ? arguments[e] : {};
                                            e % 2 ? s(Object(r), !0).forEach(function(e) {
                                                (0, i.default)(t, e, r[e])
                                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach(function(e) {
                                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                                            })
                                        }
                                        return t
                                    }({
                                        level: t,
                                        code: r
                                    }, n));
                                return navigator.sendBeacon ? navigator.sendBeacon(o, l) : fetch(o, {
                                    method: "POST",
                                    body: l,
                                    keepalive: !0
                                })
                            }
                        };
                    for (var o in t) n(o);
                    return r
                } catch (t) {
                    return u
                }
            }, e.setLogger = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = arguments.length > 1 ? arguments[1] : void 0;
                e || (u.debug = function() {}), t.error && (u.error = t.error), t.warn && (u.warn = t.warn), t.debug && (u.debug = t.debug)
            };
            var i = n(r(7318)),
                o = r(2118);

            function s(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function a(t) {
                var e;
                return t instanceof Error && !(t instanceof o.UnknownError) ? {
                    message: t.message,
                    stack: t.stack,
                    name: t.name
                } : (null != t && t.error && (t.error = a(t.error), t.message = null !== (e = t.message) && void 0 !== e ? e : t.error.message), t)
            }
            var u = {
                error: function(t, e) {
                    e = a(e), console.error("[next-auth][error][".concat(t, "]"), "\nhttps://next-auth.js.org/errors#".concat(t.toLowerCase()), e.message, e)
                },
                warn: function(t) {
                    console.warn("[next-auth][warn][".concat(t, "]"), "\nhttps://next-auth.js.org/warnings#".concat(t.toLowerCase()))
                },
                debug: function(t, e) {
                    console.log("[next-auth][debug][".concat(t, "]"), e)
                }
            };
            e.default = u
        },
        2606: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function(t) {
                var e;
                let r = new URL("http://localhost:3000/api/auth");
                t && !t.startsWith("http") && (t = `https://${t}`);
                let n = new URL(null !== (e = t) && void 0 !== e ? e : r),
                    i = ("/" === n.pathname ? r.pathname : n.pathname).replace(/\/$/, ""),
                    o = `${n.origin}${i}`;
                return {
                    origin: n.origin,
                    host: n.host,
                    path: i,
                    base: o,
                    toString: () => o
                }
            }
        },
        2601: function(t, e, r) {
            "use strict";
            var n, i;
            t.exports = (null == (n = r.g.process) ? void 0 : n.env) && "object" == typeof(null == (i = r.g.process) ? void 0 : i.env) ? r.g.process : r(8960)
        },
        8960: function(t) {
            ! function() {
                var e = {
                        229: function(t) {
                            var e, r, n, i = t.exports = {};

                            function o() {
                                throw Error("setTimeout has not been defined")
                            }

                            function s() {
                                throw Error("clearTimeout has not been defined")
                            }

                            function a(t) {
                                if (e === setTimeout) return setTimeout(t, 0);
                                if ((e === o || !e) && setTimeout) return e = setTimeout, setTimeout(t, 0);
                                try {
                                    return e(t, 0)
                                } catch (r) {
                                    try {
                                        return e.call(null, t, 0)
                                    } catch (r) {
                                        return e.call(this, t, 0)
                                    }
                                }
                            }! function() {
                                try {
                                    e = "function" == typeof setTimeout ? setTimeout : o
                                } catch (t) {
                                    e = o
                                }
                                try {
                                    r = "function" == typeof clearTimeout ? clearTimeout : s
                                } catch (t) {
                                    r = s
                                }
                            }();
                            var u = [],
                                l = !1,
                                c = -1;

                            function f() {
                                l && n && (l = !1, n.length ? u = n.concat(u) : c = -1, u.length && h())
                            }

                            function h() {
                                if (!l) {
                                    var t = a(f);
                                    l = !0;
                                    for (var e = u.length; e;) {
                                        for (n = u, u = []; ++c < e;) n && n[c].run();
                                        c = -1, e = u.length
                                    }
                                    n = null, l = !1,
                                        function(t) {
                                            if (r === clearTimeout) return clearTimeout(t);
                                            if ((r === s || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);
                                            try {
                                                r(t)
                                            } catch (e) {
                                                try {
                                                    return r.call(null, t)
                                                } catch (e) {
                                                    return r.call(this, t)
                                                }
                                            }
                                        }(t)
                                }
                            }

                            function d(t, e) {
                                this.fun = t, this.array = e
                            }

                            function p() {}
                            i.nextTick = function(t) {
                                var e = Array(arguments.length - 1);
                                if (arguments.length > 1)
                                    for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
                                u.push(new d(t, e)), 1 !== u.length || l || a(h)
                            }, d.prototype.run = function() {
                                this.fun.apply(null, this.array)
                            }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = p, i.addListener = p, i.once = p, i.off = p, i.removeListener = p, i.removeAllListeners = p, i.emit = p, i.prependListener = p, i.prependOnceListener = p, i.listeners = function(t) {
                                return []
                            }, i.binding = function(t) {
                                throw Error("process.binding is not supported")
                            }, i.cwd = function() {
                                return "/"
                            }, i.chdir = function(t) {
                                throw Error("process.chdir is not supported")
                            }, i.umask = function() {
                                return 0
                            }
                        }
                    },
                    r = {};

                function n(t) {
                    var i = r[t];
                    if (void 0 !== i) return i.exports;
                    var o = r[t] = {
                            exports: {}
                        },
                        s = !0;
                    try {
                        e[t](o, o.exports, n), s = !1
                    } finally {
                        s && delete r[t]
                    }
                    return o.exports
                }
                n.ab = "//";
                var i = n(229);
                t.exports = i
            }()
        },
        622: function(t, e, r) {
            "use strict";
            var n = r(2265),
                i = Symbol.for("react.element"),
                o = Symbol.for("react.fragment"),
                s = Object.prototype.hasOwnProperty,
                a = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                u = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function l(t, e, r) {
                var n, o = {},
                    l = null,
                    c = null;
                for (n in void 0 !== r && (l = "" + r), void 0 !== e.key && (l = "" + e.key), void 0 !== e.ref && (c = e.ref), e) s.call(e, n) && !u.hasOwnProperty(n) && (o[n] = e[n]);
                if (t && t.defaultProps)
                    for (n in e = t.defaultProps) void 0 === o[n] && (o[n] = e[n]);
                return {
                    $$typeof: i,
                    type: t,
                    key: l,
                    ref: c,
                    props: o,
                    _owner: a.current
                }
            }
            e.Fragment = o, e.jsx = l, e.jsxs = l
        },
        7437: function(t, e, r) {
            "use strict";
            t.exports = r(622)
        },
        1396: function(t, e, r) {
            t.exports = r(6685)
        },
        4033: function(t, e, r) {
            t.exports = r(8165)
        },
        8648: function(t, e, r) {
            "use strict";
            r.d(e, {
                Jh: function() {
                    return s
                },
                _T: function() {
                    return i
                },
                ev: function() {
                    return u
                },
                fl: function() {
                    return a
                },
                mG: function() {
                    return o
                },
                pi: function() {
                    return n
                }
            });
            var n = function() {
                return (n = Object.assign || function(t) {
                    for (var e, r = 1, n = arguments.length; r < n; r++)
                        for (var i in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t
                }).apply(this, arguments)
            };

            function i(t, e) {
                var r = {};
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && 0 > e.indexOf(n) && (r[n] = t[n]);
                if (null != t && "function" == typeof Object.getOwnPropertySymbols)
                    for (var i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++) 0 > e.indexOf(n[i]) && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]]);
                return r
            }

            function o(t, e, r, n) {
                return new(r || (r = Promise))(function(i, o) {
                    function s(t) {
                        try {
                            u(n.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function a(t) {
                        try {
                            u(n.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function u(t) {
                        var e;
                        t.done ? i(t.value) : ((e = t.value) instanceof r ? e : new r(function(t) {
                            t(e)
                        })).then(s, a)
                    }
                    u((n = n.apply(t, e || [])).next())
                })
            }

            function s(t, e) {
                var r, n, i, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(a) {
                    return function(u) {
                        return function(a) {
                            if (r) throw TypeError("Generator is already executing.");
                            for (; o && (o = 0, a[0] && (s = 0)), s;) try {
                                if (r = 1, n && (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, a[1])).done) return i;
                                switch (n = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                                    case 0:
                                    case 1:
                                        i = a;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: a[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, n = a[1], a = [0];
                                        continue;
                                    case 7:
                                        a = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                            s.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && s.label < i[1]) {
                                            s.label = i[1], i = a;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2], s.ops.push(a);
                                            break
                                        }
                                        i[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                a = e.call(t, s)
                            } catch (t) {
                                a = [6, t], n = 0
                            } finally {
                                r = i = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, u])
                    }
                }
            }

            function a() {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(function(t, e) {
                    var r = "function" == typeof Symbol && t[Symbol.iterator];
                    if (!r) return t;
                    var n, i, o = r.call(t),
                        s = [];
                    try {
                        for (;
                            (void 0 === e || e-- > 0) && !(n = o.next()).done;) s.push(n.value)
                    } catch (t) {
                        i = {
                            error: t
                        }
                    } finally {
                        try {
                            n && !n.done && (r = o.return) && r.call(o)
                        } finally {
                            if (i) throw i.error
                        }
                    }
                    return s
                }(arguments[e]));
                return t
            }

            function u(t, e, r) {
                if (r || 2 == arguments.length)
                    for (var n, i = 0, o = e.length; i < o; i++) !n && i in e || (n || (n = Array.prototype.slice.call(e, 0, i)), n[i] = e[i]);
                return t.concat(n || Array.prototype.slice.call(e))
            }
        },
        1853: function(t, e, r) {
            "use strict";
            var n = r(2265),
                i = "function" == typeof Object.is ? Object.is : function(t, e) {
                    return t === e && (0 !== t || 1 / t == 1 / e) || t != t && e != e
                },
                o = n.useState,
                s = n.useEffect,
                a = n.useLayoutEffect,
                u = n.useDebugValue;

            function l(t) {
                var e = t.getSnapshot;
                t = t.value;
                try {
                    var r = e();
                    return !i(t, r)
                } catch (t) {
                    return !0
                }
            }
            var c = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(t, e) {
                return e()
            } : function(t, e) {
                var r = e(),
                    n = o({
                        inst: {
                            value: r,
                            getSnapshot: e
                        }
                    }),
                    i = n[0].inst,
                    c = n[1];
                return a(function() {
                    i.value = r, i.getSnapshot = e, l(i) && c({
                        inst: i
                    })
                }, [t, r, e]), s(function() {
                    return l(i) && c({
                        inst: i
                    }), t(function() {
                        l(i) && c({
                            inst: i
                        })
                    })
                }, [t]), u(r), r
            };
            e.useSyncExternalStore = void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : c
        },
        6272: function(t, e, r) {
            "use strict";
            t.exports = r(1853)
        },
        6151: function(t) {
            t.exports = function(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
                return n
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        5827: function(t) {
            t.exports = function(t) {
                if (Array.isArray(t)) return t
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        8440: function(t) {
            t.exports = function(t) {
                if (void 0 === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        5951: function(t) {
            function e(t, e, r, n, i, o, s) {
                try {
                    var a = t[o](s),
                        u = a.value
                } catch (t) {
                    r(t);
                    return
                }
                a.done ? e(u) : Promise.resolve(u).then(n, i)
            }
            t.exports = function(t) {
                return function() {
                    var r = this,
                        n = arguments;
                    return new Promise(function(i, o) {
                        var s = t.apply(r, n);

                        function a(t) {
                            e(s, i, o, a, u, "next", t)
                        }

                        function u(t) {
                            e(s, i, o, a, u, "throw", t)
                        }
                        a(void 0)
                    })
                }
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        8304: function(t) {
            t.exports = function(t, e) {
                if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        5621: function(t, e, r) {
            var n = r(1560),
                i = r(577);

            function o(e, r, s) {
                return i() ? t.exports = o = Reflect.construct.bind() : t.exports = o = function(t, e, r) {
                    var i = [null];
                    i.push.apply(i, e);
                    var o = new(Function.bind.apply(t, i));
                    return r && n(o, r.prototype), o
                }, t.exports.__esModule = !0, t.exports.default = t.exports, o.apply(null, arguments)
            }
            t.exports = o, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        9937: function(t, e, r) {
            var n = r(5330);

            function i(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, n(i.key), i)
                }
            }
            t.exports = function(t, e, r) {
                return e && i(t.prototype, e), r && i(t, r), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        7318: function(t, e, r) {
            var n = r(5330);
            t.exports = function(t, e, r) {
                return (e = n(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        7376: function(t) {
            function e(r) {
                return t.exports = e = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, t.exports.__esModule = !0, t.exports.default = t.exports, e(r)
            }
            t.exports = e, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        8394: function(t, e, r) {
            var n = r(1560);
            t.exports = function(t, e) {
                if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), e && n(t, e)
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        4303: function(t) {
            t.exports = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        1405: function(t) {
            t.exports = function(t) {
                return -1 !== Function.toString.call(t).indexOf("[native code]")
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        577: function(t) {
            t.exports = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (t) {
                    return !1
                }
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        6340: function(t) {
            t.exports = function(t, e) {
                var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (null != r) {
                    var n, i, o, s, a = [],
                        u = !0,
                        l = !1;
                    try {
                        if (o = (r = r.call(t)).next, 0 === e) {
                            if (Object(r) !== r) return;
                            u = !1
                        } else
                            for (; !(u = (n = o.call(r)).done) && (a.push(n.value), a.length !== e); u = !0);
                    } catch (t) {
                        l = !0, i = t
                    } finally {
                        try {
                            if (!u && null != r.return && (s = r.return(), Object(s) !== s)) return
                        } finally {
                            if (l) throw i
                        }
                    }
                    return a
                }
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        9738: function(t) {
            t.exports = function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        4936: function(t, e, r) {
            var n = r(8410).default,
                i = r(8440);
            t.exports = function(t, e) {
                if (e && ("object" === n(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw TypeError("Derived constructors may only return object or undefined");
                return i(t)
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        1200: function(t, e, r) {
            var n = r(8410).default;

            function i() {
                "use strict"; /*!regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE*/
                t.exports = i = function() {
                    return e
                }, t.exports.__esModule = !0, t.exports.default = t.exports;
                var e = {},
                    r = Object.prototype,
                    o = r.hasOwnProperty,
                    s = Object.defineProperty || function(t, e, r) {
                        t[e] = r.value
                    },
                    a = "function" == typeof Symbol ? Symbol : {},
                    u = a.iterator || "@@iterator",
                    l = a.asyncIterator || "@@asyncIterator",
                    c = a.toStringTag || "@@toStringTag";

                function f(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    f({}, "")
                } catch (t) {
                    f = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function h(t, e, r, n) {
                    var i, o, a = Object.create((e && e.prototype instanceof m ? e : m).prototype);
                    return s(a, "_invoke", {
                        value: (i = new A(n || []), o = "suspendedStart", function(e, n) {
                            if ("executing" === o) throw Error("Generator is already running");
                            if ("completed" === o) {
                                if ("throw" === e) throw n;
                                return R()
                            }
                            for (i.method = e, i.arg = n;;) {
                                var s = i.delegate;
                                if (s) {
                                    var a = function t(e, r) {
                                        var n = r.method,
                                            i = e.iterator[n];
                                        if (void 0 === i) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = void 0, t(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = TypeError("The iterator does not provide a '" + n + "' method")), p;
                                        var o = d(i, e.iterator, r.arg);
                                        if ("throw" === o.type) return r.method = "throw", r.arg = o.arg, r.delegate = null, p;
                                        var s = o.arg;
                                        return s ? s.done ? (r[e.resultName] = s.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = void 0), r.delegate = null, p) : s : (r.method = "throw", r.arg = TypeError("iterator result is not an object"), r.delegate = null, p)
                                    }(s, i);
                                    if (a) {
                                        if (a === p) continue;
                                        return a
                                    }
                                }
                                if ("next" === i.method) i.sent = i._sent = i.arg;
                                else if ("throw" === i.method) {
                                    if ("suspendedStart" === o) throw o = "completed", i.arg;
                                    i.dispatchException(i.arg)
                                } else "return" === i.method && i.abrupt("return", i.arg);
                                o = "executing";
                                var u = d(t, r, i);
                                if ("normal" === u.type) {
                                    if (o = i.done ? "completed" : "suspendedYield", u.arg === p) continue;
                                    return {
                                        value: u.arg,
                                        done: i.done
                                    }
                                }
                                "throw" === u.type && (o = "completed", i.method = "throw", i.arg = u.arg)
                            }
                        })
                    }), a
                }

                function d(t, e, r) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, r)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                e.wrap = h;
                var p = {};

                function m() {}

                function y() {}

                function v() {}
                var g = {};
                f(g, u, function() {
                    return this
                });
                var b = Object.getPrototypeOf,
                    w = b && b(b(C([])));
                w && w !== r && o.call(w, u) && (g = w);
                var x = v.prototype = m.prototype = Object.create(g);

                function E(t) {
                    ["next", "throw", "return"].forEach(function(e) {
                        f(t, e, function(t) {
                            return this._invoke(e, t)
                        })
                    })
                }

                function S(t, e) {
                    var r;
                    s(this, "_invoke", {
                        value: function(i, s) {
                            function a() {
                                return new e(function(r, a) {
                                    ! function r(i, s, a, u) {
                                        var l = d(t[i], t, s);
                                        if ("throw" !== l.type) {
                                            var c = l.arg,
                                                f = c.value;
                                            return f && "object" == n(f) && o.call(f, "__await") ? e.resolve(f.__await).then(function(t) {
                                                r("next", t, a, u)
                                            }, function(t) {
                                                r("throw", t, a, u)
                                            }) : e.resolve(f).then(function(t) {
                                                c.value = t, a(c)
                                            }, function(t) {
                                                return r("throw", t, a, u)
                                            })
                                        }
                                        u(l.arg)
                                    }(i, s, r, a)
                                })
                            }
                            return r = r ? r.then(a, a) : a()
                        }
                    })
                }

                function P(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function O(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function A(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(P, this), this.reset(!0)
                }

                function C(t) {
                    if (t) {
                        var e = t[u];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var r = -1,
                                n = function e() {
                                    for (; ++r < t.length;)
                                        if (o.call(t, r)) return e.value = t[r], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return n.next = n
                        }
                    }
                    return {
                        next: R
                    }
                }

                function R() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return y.prototype = v, s(x, "constructor", {
                    value: v,
                    configurable: !0
                }), s(v, "constructor", {
                    value: y,
                    configurable: !0
                }), y.displayName = f(v, c, "GeneratorFunction"), e.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === y || "GeneratorFunction" === (e.displayName || e.name))
                }, e.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, v) : (t.__proto__ = v, f(t, c, "GeneratorFunction")), t.prototype = Object.create(x), t
                }, e.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, E(S.prototype), f(S.prototype, l, function() {
                    return this
                }), e.AsyncIterator = S, e.async = function(t, r, n, i, o) {
                    void 0 === o && (o = Promise);
                    var s = new S(h(t, r, n, i), o);
                    return e.isGeneratorFunction(r) ? s : s.next().then(function(t) {
                        return t.done ? t.value : s.next()
                    })
                }, E(x), f(x, c, "Generator"), f(x, u, function() {
                    return this
                }), f(x, "toString", function() {
                    return "[object Generator]"
                }), e.keys = function(t) {
                    var e = Object(t),
                        r = [];
                    for (var n in e) r.push(n);
                    return r.reverse(),
                        function t() {
                            for (; r.length;) {
                                var n = r.pop();
                                if (n in e) return t.value = n, t.done = !1, t
                            }
                            return t.done = !0, t
                        }
                }, e.values = C, A.prototype = {
                    constructor: A,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(O), !t)
                            for (var e in this) "t" === e.charAt(0) && o.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(t) {
                        if (this.done) throw t;
                        var e = this;

                        function r(r, n) {
                            return s.type = "throw", s.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
                        }
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var i = this.tryEntries[n],
                                s = i.completion;
                            if ("root" === i.tryLoc) return r("end");
                            if (i.tryLoc <= this.prev) {
                                var a = o.call(i, "catchLoc"),
                                    u = o.call(i, "finallyLoc");
                                if (a && u) {
                                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                                } else if (a) {
                                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
                                } else {
                                    if (!u) throw Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var n = this.tryEntries[r];
                            if (n.tryLoc <= this.prev && o.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                var i = n;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var s = i ? i.completion : {};
                        return s.type = t, s.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, p) : this.complete(s)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), p
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), O(r), p
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var i = n.arg;
                                    O(r)
                                }
                                return i
                            }
                        }
                        throw Error("illegal catch attempt")
                    },
                    delegateYield: function(t, e, r) {
                        return this.delegate = {
                            iterator: C(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), p
                    }
                }, e
            }
            t.exports = i, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        1560: function(t) {
            function e(r, n) {
                return t.exports = e = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, t.exports.__esModule = !0, t.exports.default = t.exports, e(r, n)
            }
            t.exports = e, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        3744: function(t, e, r) {
            var n = r(5827),
                i = r(6340),
                o = r(5708),
                s = r(9738);
            t.exports = function(t, e) {
                return n(t) || i(t, e) || o(t, e) || s()
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        3182: function(t, e, r) {
            var n = r(8410).default;
            t.exports = function(t, e) {
                if ("object" !== n(t) || null === t) return t;
                var r = t[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var i = r.call(t, e || "default");
                    if ("object" !== n(i)) return i;
                    throw TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === e ? String : Number)(t)
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        5330: function(t, e, r) {
            var n = r(8410).default,
                i = r(3182);
            t.exports = function(t) {
                var e = i(t, "string");
                return "symbol" === n(e) ? e : String(e)
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        8410: function(t) {
            function e(r) {
                return t.exports = e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, t.exports.__esModule = !0, t.exports.default = t.exports, e(r)
            }
            t.exports = e, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        5708: function(t, e, r) {
            var n = r(6151);
            t.exports = function(t, e) {
                if (t) {
                    if ("string" == typeof t) return n(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(t);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return n(t, e)
                }
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        3125: function(t, e, r) {
            var n = r(7376),
                i = r(1560),
                o = r(1405),
                s = r(5621);

            function a(e) {
                var r = "function" == typeof Map ? new Map : void 0;
                return t.exports = a = function(t) {
                    if (null === t || !o(t)) return t;
                    if ("function" != typeof t) throw TypeError("Super expression must either be null or a function");
                    if (void 0 !== r) {
                        if (r.has(t)) return r.get(t);
                        r.set(t, e)
                    }

                    function e() {
                        return s(t, arguments, n(this).constructor)
                    }
                    return e.prototype = Object.create(t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), i(e, t)
                }, t.exports.__esModule = !0, t.exports.default = t.exports, a(e)
            }
            t.exports = a, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        8276: function(t, e, r) {
            var n = r(1200)();
            t.exports = n;
            try {
                regeneratorRuntime = n
            } catch (t) {
                "object" == typeof globalThis ? globalThis.regeneratorRuntime = n : Function("r", "regeneratorRuntime = r")(n)
            }
        },
        3428: function(t, e, r) {
            "use strict";

            function n() {
                return (n = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }).apply(this, arguments)
            }
            r.d(e, {
                Z: function() {
                    return n
                }
            })
        },
        6479: function(t, e, r) {
            "use strict";

            function n() {
                return (n = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }).apply(this, arguments)
            }
            r.d(e, {
                Z: function() {
                    return n
                }
            })
        },
        760: function(t, e, r) {
            "use strict";

            function n(t, [e, r]) {
                return Math.min(r, Math.max(e, t))
            }
            r.d(e, {
                u: function() {
                    return n
                }
            })
        },
        5744: function(t, e, r) {
            "use strict";

            function n(t, e, {
                checkForDefaultPrevented: r = !0
            } = {}) {
                return function(n) {
                    if (null == t || t(n), !1 === r || !n.defaultPrevented) return null == e ? void 0 : e(n)
                }
            }
            r.d(e, {
                M: function() {
                    return n
                }
            })
        },
        7733: function(t, e, r) {
            "use strict";
            r.d(e, {
                B: function() {
                    return a
                }
            });
            var n = r(2265),
                i = r(6989),
                o = r(2210),
                s = r(7256);

            function a(t) {
                let e = t + "CollectionProvider",
                    [r, a] = (0, i.b)(e),
                    [u, l] = r(e, {
                        collectionRef: {
                            current: null
                        },
                        itemMap: new Map
                    }),
                    c = t + "CollectionSlot",
                    f = n.forwardRef((t, e) => {
                        let {
                            scope: r,
                            children: i
                        } = t, a = l(c, r), u = (0, o.e)(e, a.collectionRef);
                        return n.createElement(s.g7, {
                            ref: u
                        }, i)
                    }),
                    h = t + "CollectionItemSlot",
                    d = "data-radix-collection-item",
                    p = n.forwardRef((t, e) => {
                        let {
                            scope: r,
                            children: i,
                            ...a
                        } = t, u = n.useRef(null), c = (0, o.e)(e, u), f = l(h, r);
                        return n.useEffect(() => (f.itemMap.set(u, {
                            ref: u,
                            ...a
                        }), () => void f.itemMap.delete(u))), n.createElement(s.g7, {
                            [d]: "",
                            ref: c
                        }, i)
                    });
                return [{
                    Provider: t => {
                        let {
                            scope: e,
                            children: r
                        } = t, i = n.useRef(null), o = n.useRef(new Map).current;
                        return n.createElement(u, {
                            scope: e,
                            itemMap: o,
                            collectionRef: i
                        }, r)
                    },
                    Slot: f,
                    ItemSlot: p
                }, function(e) {
                    let r = l(t + "CollectionConsumer", e),
                        i = n.useCallback(() => {
                            let t = r.collectionRef.current;
                            if (!t) return [];
                            let e = Array.from(t.querySelectorAll(`[${d}]`)),
                                n = Array.from(r.itemMap.values()),
                                i = n.sort((t, r) => e.indexOf(t.ref.current) - e.indexOf(r.ref.current));
                            return i
                        }, [r.collectionRef, r.itemMap]);
                    return i
                }, a]
            }
        },
        2210: function(t, e, r) {
            "use strict";
            r.d(e, {
                F: function() {
                    return i
                },
                e: function() {
                    return o
                }
            });
            var n = r(2265);

            function i(...t) {
                return e => t.forEach(t => {
                    "function" == typeof t ? t(e) : null != t && (t.current = e)
                })
            }

            function o(...t) {
                return (0, n.useCallback)(i(...t), t)
            }
        },
        6989: function(t, e, r) {
            "use strict";
            r.d(e, {
                b: function() {
                    return o
                },
                k: function() {
                    return i
                }
            });
            var n = r(2265);

            function i(t, e) {
                let r = (0, n.createContext)(e);

                function i(t) {
                    let {
                        children: e,
                        ...i
                    } = t, o = (0, n.useMemo)(() => i, Object.values(i));
                    return (0, n.createElement)(r.Provider, {
                        value: o
                    }, e)
                }
                return i.displayName = t + "Provider", [i, function(i) {
                    let o = (0, n.useContext)(r);
                    if (o) return o;
                    if (void 0 !== e) return e;
                    throw Error(`\`${i}\` must be used within \`${t}\``)
                }]
            }

            function o(t, e = []) {
                let r = [],
                    i = () => {
                        let e = r.map(t => (0, n.createContext)(t));
                        return function(r) {
                            let i = (null == r ? void 0 : r[t]) || e;
                            return (0, n.useMemo)(() => ({
                                [`__scope${t}`]: { ...r,
                                    [t]: i
                                }
                            }), [r, i])
                        }
                    };
                return i.scopeName = t, [function(e, i) {
                    let o = (0, n.createContext)(i),
                        s = r.length;

                    function a(e) {
                        let {
                            scope: r,
                            children: i,
                            ...a
                        } = e, u = (null == r ? void 0 : r[t][s]) || o, l = (0, n.useMemo)(() => a, Object.values(a));
                        return (0, n.createElement)(u.Provider, {
                            value: l
                        }, i)
                    }
                    return r = [...r, i], a.displayName = e + "Provider", [a, function(r, a) {
                        let u = (null == a ? void 0 : a[t][s]) || o,
                            l = (0, n.useContext)(u);
                        if (l) return l;
                        if (void 0 !== i) return i;
                        throw Error(`\`${r}\` must be used within \`${e}\``)
                    }]
                }, function(...t) {
                    let e = t[0];
                    if (1 === t.length) return e;
                    let r = () => {
                        let r = t.map(t => ({
                            useScope: t(),
                            scopeName: t.scopeName
                        }));
                        return function(t) {
                            let i = r.reduce((e, {
                                useScope: r,
                                scopeName: n
                            }) => {
                                let i = r(t),
                                    o = i[`__scope${n}`];
                                return { ...e,
                                    ...o
                                }
                            }, {});
                            return (0, n.useMemo)(() => ({
                                [`__scope${e.scopeName}`]: i
                            }), [i])
                        }
                    };
                    return r.scopeName = e.scopeName, r
                }(i, ...e)]
            }
        },
        5400: function(t, e, r) {
            "use strict";
            r.d(e, {
                gm: function() {
                    return o
                }
            });
            var n = r(2265);
            let i = (0, n.createContext)(void 0);

            function o(t) {
                let e = (0, n.useContext)(i);
                return t || e || "ltr"
            }
        },
        9249: function(t, e, r) {
            "use strict";
            let n;
            r.d(e, {
                XB: function() {
                    return h
                }
            });
            var i = r(3428),
                o = r(2265),
                s = r(5744),
                a = r(9381),
                u = r(2210),
                l = r(6459);
            let c = "dismissableLayer.update",
                f = (0, o.createContext)({
                    layers: new Set,
                    layersWithOutsidePointerEventsDisabled: new Set,
                    branches: new Set
                }),
                h = (0, o.forwardRef)((t, e) => {
                    var r;
                    let {
                        disableOutsidePointerEvents: h = !1,
                        onEscapeKeyDown: m,
                        onPointerDownOutside: y,
                        onFocusOutside: v,
                        onInteractOutside: g,
                        onDismiss: b,
                        ...w
                    } = t, x = (0, o.useContext)(f), [E, S] = (0, o.useState)(null), P = null !== (r = null == E ? void 0 : E.ownerDocument) && void 0 !== r ? r : null == globalThis ? void 0 : globalThis.document, [, O] = (0, o.useState)({}), A = (0, u.e)(e, t => S(t)), C = Array.from(x.layers), [R] = [...x.layersWithOutsidePointerEventsDisabled].slice(-1), T = C.indexOf(R), k = E ? C.indexOf(E) : -1, L = x.layersWithOutsidePointerEventsDisabled.size > 0, M = k >= T, D = function(t, e = null == globalThis ? void 0 : globalThis.document) {
                        let r = (0, l.W)(t),
                            n = (0, o.useRef)(!1),
                            i = (0, o.useRef)(() => {});
                        return (0, o.useEffect)(() => {
                            let t = t => {
                                    if (t.target && !n.current) {
                                        let n = {
                                            originalEvent: t
                                        };

                                        function o() {
                                            p("dismissableLayer.pointerDownOutside", r, n, {
                                                discrete: !0
                                            })
                                        }
                                        "touch" === t.pointerType ? (e.removeEventListener("click", i.current), i.current = o, e.addEventListener("click", i.current, {
                                            once: !0
                                        })) : o()
                                    }
                                    n.current = !1
                                },
                                o = window.setTimeout(() => {
                                    e.addEventListener("pointerdown", t)
                                }, 0);
                            return () => {
                                window.clearTimeout(o), e.removeEventListener("pointerdown", t), e.removeEventListener("click", i.current)
                            }
                        }, [e, r]), {
                            onPointerDownCapture: () => n.current = !0
                        }
                    }(t => {
                        let e = t.target,
                            r = [...x.branches].some(t => t.contains(e));
                        !M || r || (null == y || y(t), null == g || g(t), t.defaultPrevented || null == b || b())
                    }, P), j = function(t, e = null == globalThis ? void 0 : globalThis.document) {
                        let r = (0, l.W)(t),
                            n = (0, o.useRef)(!1);
                        return (0, o.useEffect)(() => {
                            let t = t => {
                                t.target && !n.current && p("dismissableLayer.focusOutside", r, {
                                    originalEvent: t
                                }, {
                                    discrete: !1
                                })
                            };
                            return e.addEventListener("focusin", t), () => e.removeEventListener("focusin", t)
                        }, [e, r]), {
                            onFocusCapture: () => n.current = !0,
                            onBlurCapture: () => n.current = !1
                        }
                    }(t => {
                        let e = t.target,
                            r = [...x.branches].some(t => t.contains(e));
                        r || (null == v || v(t), null == g || g(t), t.defaultPrevented || null == b || b())
                    }, P);
                    return ! function(t, e = null == globalThis ? void 0 : globalThis.document) {
                        let r = (0, l.W)(t);
                        (0, o.useEffect)(() => {
                            let t = t => {
                                "Escape" === t.key && r(t)
                            };
                            return e.addEventListener("keydown", t), () => e.removeEventListener("keydown", t)
                        }, [r, e])
                    }(t => {
                        let e = k === x.layers.size - 1;
                        e && (null == m || m(t), !t.defaultPrevented && b && (t.preventDefault(), b()))
                    }, P), (0, o.useEffect)(() => {
                        if (E) return h && (0 === x.layersWithOutsidePointerEventsDisabled.size && (n = P.body.style.pointerEvents, P.body.style.pointerEvents = "none"), x.layersWithOutsidePointerEventsDisabled.add(E)), x.layers.add(E), d(), () => {
                            h && 1 === x.layersWithOutsidePointerEventsDisabled.size && (P.body.style.pointerEvents = n)
                        }
                    }, [E, P, h, x]), (0, o.useEffect)(() => () => {
                        E && (x.layers.delete(E), x.layersWithOutsidePointerEventsDisabled.delete(E), d())
                    }, [E, x]), (0, o.useEffect)(() => {
                        let t = () => O({});
                        return document.addEventListener(c, t), () => document.removeEventListener(c, t)
                    }, []), (0, o.createElement)(a.WV.div, (0, i.Z)({}, w, {
                        ref: A,
                        style: {
                            pointerEvents: L ? M ? "auto" : "none" : void 0,
                            ...t.style
                        },
                        onFocusCapture: (0, s.M)(t.onFocusCapture, j.onFocusCapture),
                        onBlurCapture: (0, s.M)(t.onBlurCapture, j.onBlurCapture),
                        onPointerDownCapture: (0, s.M)(t.onPointerDownCapture, D.onPointerDownCapture)
                    }))
                });

            function d() {
                let t = new CustomEvent(c);
                document.dispatchEvent(t)
            }

            function p(t, e, r, {
                discrete: n
            }) {
                let i = r.originalEvent.target,
                    o = new CustomEvent(t, {
                        bubbles: !1,
                        cancelable: !0,
                        detail: r
                    });
                e && i.addEventListener(t, e, {
                    once: !0
                }), n ? (0, a.jH)(i, o) : i.dispatchEvent(o)
            }
        },
        966: function(t, e, r) {
            "use strict";
            r.d(e, {
                M: function() {
                    return u
                }
            });
            var n, i = r(2265),
                o = r(1030);
            let s = (n || (n = r.t(i, 2)))["useId".toString()] || (() => void 0),
                a = 0;

            function u(t) {
                let [e, r] = i.useState(s());
                return (0, o.b)(() => {
                    t || r(t => null != t ? t : String(a++))
                }, [t]), t || (e ? `radix-${e}` : "")
            }
        },
        2049: function(t, e, r) {
            "use strict";
            r.d(e, {
                ee: function() {
                    return t_
                },
                Eh: function() {
                    return tF
                },
                VY: function() {
                    return tU
                },
                fC: function() {
                    return tj
                },
                D7: function() {
                    return tx
                }
            });
            var n = r(3428),
                i = r(2265);
            let o = ["top", "right", "bottom", "left"],
                s = Math.min,
                a = Math.max,
                u = Math.round,
                l = Math.floor,
                c = t => ({
                    x: t,
                    y: t
                }),
                f = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                },
                h = {
                    start: "end",
                    end: "start"
                };

            function d(t, e) {
                return "function" == typeof t ? t(e) : t
            }

            function p(t) {
                return t.split("-")[0]
            }

            function m(t) {
                return t.split("-")[1]
            }

            function y(t) {
                return "x" === t ? "y" : "x"
            }

            function v(t) {
                return "y" === t ? "height" : "width"
            }

            function g(t) {
                return ["top", "bottom"].includes(p(t)) ? "y" : "x"
            }

            function b(t) {
                return t.replace(/start|end/g, t => h[t])
            }

            function w(t) {
                return t.replace(/left|right|bottom|top/g, t => f[t])
            }

            function x(t) {
                return "number" != typeof t ? {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    ...t
                } : {
                    top: t,
                    right: t,
                    bottom: t,
                    left: t
                }
            }

            function E(t) {
                return { ...t,
                    top: t.y,
                    left: t.x,
                    right: t.x + t.width,
                    bottom: t.y + t.height
                }
            }

            function S(t, e, r) {
                let n, {
                        reference: i,
                        floating: o
                    } = t,
                    s = g(e),
                    a = y(g(e)),
                    u = v(a),
                    l = p(e),
                    c = "y" === s,
                    f = i.x + i.width / 2 - o.width / 2,
                    h = i.y + i.height / 2 - o.height / 2,
                    d = i[u] / 2 - o[u] / 2;
                switch (l) {
                    case "top":
                        n = {
                            x: f,
                            y: i.y - o.height
                        };
                        break;
                    case "bottom":
                        n = {
                            x: f,
                            y: i.y + i.height
                        };
                        break;
                    case "right":
                        n = {
                            x: i.x + i.width,
                            y: h
                        };
                        break;
                    case "left":
                        n = {
                            x: i.x - o.width,
                            y: h
                        };
                        break;
                    default:
                        n = {
                            x: i.x,
                            y: i.y
                        }
                }
                switch (m(e)) {
                    case "start":
                        n[a] -= d * (r && c ? -1 : 1);
                        break;
                    case "end":
                        n[a] += d * (r && c ? -1 : 1)
                }
                return n
            }
            let P = async (t, e, r) => {
                let {
                    placement: n = "bottom",
                    strategy: i = "absolute",
                    middleware: o = [],
                    platform: s
                } = r, a = o.filter(Boolean), u = await (null == s.isRTL ? void 0 : s.isRTL(e)), l = await s.getElementRects({
                    reference: t,
                    floating: e,
                    strategy: i
                }), {
                    x: c,
                    y: f
                } = S(l, n, u), h = n, d = {}, p = 0;
                for (let r = 0; r < a.length; r++) {
                    let {
                        name: o,
                        fn: m
                    } = a[r], {
                        x: y,
                        y: v,
                        data: g,
                        reset: b
                    } = await m({
                        x: c,
                        y: f,
                        initialPlacement: n,
                        placement: h,
                        strategy: i,
                        middlewareData: d,
                        rects: l,
                        platform: s,
                        elements: {
                            reference: t,
                            floating: e
                        }
                    });
                    if (c = null != y ? y : c, f = null != v ? v : f, d = { ...d,
                            [o]: { ...d[o],
                                ...g
                            }
                        }, b && p <= 50) {
                        p++, "object" == typeof b && (b.placement && (h = b.placement), b.rects && (l = !0 === b.rects ? await s.getElementRects({
                            reference: t,
                            floating: e,
                            strategy: i
                        }) : b.rects), {
                            x: c,
                            y: f
                        } = S(l, h, u)), r = -1;
                        continue
                    }
                }
                return {
                    x: c,
                    y: f,
                    placement: h,
                    strategy: i,
                    middlewareData: d
                }
            };
            async function O(t, e) {
                var r;
                void 0 === e && (e = {});
                let {
                    x: n,
                    y: i,
                    platform: o,
                    rects: s,
                    elements: a,
                    strategy: u
                } = t, {
                    boundary: l = "clippingAncestors",
                    rootBoundary: c = "viewport",
                    elementContext: f = "floating",
                    altBoundary: h = !1,
                    padding: p = 0
                } = d(e, t), m = x(p), y = a[h ? "floating" === f ? "reference" : "floating" : f], v = E(await o.getClippingRect({
                    element: null == (r = await (null == o.isElement ? void 0 : o.isElement(y))) || r ? y : y.contextElement || await (null == o.getDocumentElement ? void 0 : o.getDocumentElement(a.floating)),
                    boundary: l,
                    rootBoundary: c,
                    strategy: u
                })), g = "floating" === f ? { ...s.floating,
                    x: n,
                    y: i
                } : s.reference, b = await (null == o.getOffsetParent ? void 0 : o.getOffsetParent(a.floating)), w = await (null == o.isElement ? void 0 : o.isElement(b)) && await (null == o.getScale ? void 0 : o.getScale(b)) || {
                    x: 1,
                    y: 1
                }, S = E(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
                    rect: g,
                    offsetParent: b,
                    strategy: u
                }) : g);
                return {
                    top: (v.top - S.top + m.top) / w.y,
                    bottom: (S.bottom - v.bottom + m.bottom) / w.y,
                    left: (v.left - S.left + m.left) / w.x,
                    right: (S.right - v.right + m.right) / w.x
                }
            }
            let A = t => ({
                name: "arrow",
                options: t,
                async fn(e) {
                    let {
                        x: r,
                        y: n,
                        placement: i,
                        rects: o,
                        platform: u,
                        elements: l
                    } = e, {
                        element: c,
                        padding: f = 0
                    } = d(t, e) || {};
                    if (null == c) return {};
                    let h = x(f),
                        p = {
                            x: r,
                            y: n
                        },
                        b = y(g(i)),
                        w = v(b),
                        E = await u.getDimensions(c),
                        S = "y" === b,
                        P = S ? "clientHeight" : "clientWidth",
                        O = o.reference[w] + o.reference[b] - p[b] - o.floating[w],
                        A = p[b] - o.reference[b],
                        C = await (null == u.getOffsetParent ? void 0 : u.getOffsetParent(c)),
                        R = C ? C[P] : 0;
                    R && await (null == u.isElement ? void 0 : u.isElement(C)) || (R = l.floating[P] || o.floating[w]);
                    let T = R / 2 - E[w] / 2 - 1,
                        k = s(h[S ? "top" : "left"], T),
                        L = s(h[S ? "bottom" : "right"], T),
                        M = R - E[w] - L,
                        D = R / 2 - E[w] / 2 + (O / 2 - A / 2),
                        j = a(k, s(D, M)),
                        _ = null != m(i) && D != j && o.reference[w] / 2 - (D < k ? k : L) - E[w] / 2 < 0,
                        U = _ ? D < k ? k - D : M - D : 0;
                    return {
                        [b]: p[b] - U,
                        data: {
                            [b]: j,
                            centerOffset: D - j + U
                        }
                    }
                }
            });

            function C(t, e) {
                return {
                    top: t.top - e.height,
                    right: t.right - e.width,
                    bottom: t.bottom - e.height,
                    left: t.left - e.width
                }
            }

            function R(t) {
                return o.some(e => t[e] >= 0)
            }
            async function T(t, e) {
                let {
                    placement: r,
                    platform: n,
                    elements: i
                } = t, o = await (null == n.isRTL ? void 0 : n.isRTL(i.floating)), s = p(r), a = m(r), u = "y" === g(r), l = ["left", "top"].includes(s) ? -1 : 1, c = o && u ? -1 : 1, f = d(e, t), {
                    mainAxis: h,
                    crossAxis: y,
                    alignmentAxis: v
                } = "number" == typeof f ? {
                    mainAxis: f,
                    crossAxis: 0,
                    alignmentAxis: null
                } : {
                    mainAxis: 0,
                    crossAxis: 0,
                    alignmentAxis: null,
                    ...f
                };
                return a && "number" == typeof v && (y = "end" === a ? -1 * v : v), u ? {
                    x: y * c,
                    y: h * l
                } : {
                    x: h * l,
                    y: y * c
                }
            }

            function k(t) {
                return D(t) ? (t.nodeName || "").toLowerCase() : "#document"
            }

            function L(t) {
                var e;
                return (null == t ? void 0 : null == (e = t.ownerDocument) ? void 0 : e.defaultView) || window
            }

            function M(t) {
                var e;
                return null == (e = (D(t) ? t.ownerDocument : t.document) || window.document) ? void 0 : e.documentElement
            }

            function D(t) {
                return t instanceof Node || t instanceof L(t).Node
            }

            function j(t) {
                return t instanceof Element || t instanceof L(t).Element
            }

            function _(t) {
                return t instanceof HTMLElement || t instanceof L(t).HTMLElement
            }

            function U(t) {
                return "undefined" != typeof ShadowRoot && (t instanceof ShadowRoot || t instanceof L(t).ShadowRoot)
            }

            function F(t) {
                let {
                    overflow: e,
                    overflowX: r,
                    overflowY: n,
                    display: i
                } = N(t);
                return /auto|scroll|overlay|hidden|clip/.test(e + n + r) && !["inline", "contents"].includes(i)
            }

            function I(t) {
                let e = V(),
                    r = N(t);
                return "none" !== r.transform || "none" !== r.perspective || !!r.containerType && "normal" !== r.containerType || !e && !!r.backdropFilter && "none" !== r.backdropFilter || !e && !!r.filter && "none" !== r.filter || ["transform", "perspective", "filter"].some(t => (r.willChange || "").includes(t)) || ["paint", "layout", "strict", "content"].some(t => (r.contain || "").includes(t))
            }

            function V() {
                return "undefined" != typeof CSS && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")
            }

            function B(t) {
                return ["html", "body", "#document"].includes(k(t))
            }

            function N(t) {
                return L(t).getComputedStyle(t)
            }

            function q(t) {
                return j(t) ? {
                    scrollLeft: t.scrollLeft,
                    scrollTop: t.scrollTop
                } : {
                    scrollLeft: t.pageXOffset,
                    scrollTop: t.pageYOffset
                }
            }

            function W(t) {
                if ("html" === k(t)) return t;
                let e = t.assignedSlot || t.parentNode || U(t) && t.host || M(t);
                return U(e) ? e.host : e
            }

            function $(t, e) {
                var r;
                void 0 === e && (e = []);
                let n = function t(e) {
                        let r = W(e);
                        return B(r) ? e.ownerDocument ? e.ownerDocument.body : e.body : _(r) && F(r) ? r : t(r)
                    }(t),
                    i = n === (null == (r = t.ownerDocument) ? void 0 : r.body),
                    o = L(n);
                return i ? e.concat(o, o.visualViewport || [], F(n) ? n : []) : e.concat(n, $(n))
            }

            function z(t) {
                let e = N(t),
                    r = parseFloat(e.width) || 0,
                    n = parseFloat(e.height) || 0,
                    i = _(t),
                    o = i ? t.offsetWidth : r,
                    s = i ? t.offsetHeight : n,
                    a = u(r) !== o || u(n) !== s;
                return a && (r = o, n = s), {
                    width: r,
                    height: n,
                    $: a
                }
            }

            function H(t) {
                return j(t) ? t : t.contextElement
            }

            function K(t) {
                let e = H(t);
                if (!_(e)) return c(1);
                let r = e.getBoundingClientRect(),
                    {
                        width: n,
                        height: i,
                        $: o
                    } = z(e),
                    s = (o ? u(r.width) : r.width) / n,
                    a = (o ? u(r.height) : r.height) / i;
                return s && Number.isFinite(s) || (s = 1), a && Number.isFinite(a) || (a = 1), {
                    x: s,
                    y: a
                }
            }
            let Z = c(0);

            function Q(t) {
                let e = L(t);
                return V() && e.visualViewport ? {
                    x: e.visualViewport.offsetLeft,
                    y: e.visualViewport.offsetTop
                } : Z
            }

            function G(t, e, r, n) {
                var i;
                void 0 === e && (e = !1), void 0 === r && (r = !1);
                let o = t.getBoundingClientRect(),
                    s = H(t),
                    a = c(1);
                e && (n ? j(n) && (a = K(n)) : a = K(t));
                let u = (void 0 === (i = r) && (i = !1), n && (!i || n === L(s)) && i) ? Q(s) : c(0),
                    l = (o.left + u.x) / a.x,
                    f = (o.top + u.y) / a.y,
                    h = o.width / a.x,
                    d = o.height / a.y;
                if (s) {
                    let t = L(s),
                        e = n && j(n) ? L(n) : n,
                        r = t.frameElement;
                    for (; r && n && e !== t;) {
                        let t = K(r),
                            e = r.getBoundingClientRect(),
                            n = N(r),
                            i = e.left + (r.clientLeft + parseFloat(n.paddingLeft)) * t.x,
                            o = e.top + (r.clientTop + parseFloat(n.paddingTop)) * t.y;
                        l *= t.x, f *= t.y, h *= t.x, d *= t.y, l += i, f += o, r = L(r).frameElement
                    }
                }
                return E({
                    width: h,
                    height: d,
                    x: l,
                    y: f
                })
            }

            function X(t) {
                return G(M(t)).left + q(t).scrollLeft
            }

            function Y(t, e, r) {
                let n;
                if ("viewport" === e) n = function(t, e) {
                    let r = L(t),
                        n = M(t),
                        i = r.visualViewport,
                        o = n.clientWidth,
                        s = n.clientHeight,
                        a = 0,
                        u = 0;
                    if (i) {
                        o = i.width, s = i.height;
                        let t = V();
                        (!t || t && "fixed" === e) && (a = i.offsetLeft, u = i.offsetTop)
                    }
                    return {
                        width: o,
                        height: s,
                        x: a,
                        y: u
                    }
                }(t, r);
                else if ("document" === e) n = function(t) {
                    let e = M(t),
                        r = q(t),
                        n = t.ownerDocument.body,
                        i = a(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth),
                        o = a(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight),
                        s = -r.scrollLeft + X(t),
                        u = -r.scrollTop;
                    return "rtl" === N(n).direction && (s += a(e.clientWidth, n.clientWidth) - i), {
                        width: i,
                        height: o,
                        x: s,
                        y: u
                    }
                }(M(t));
                else if (j(e)) n = function(t, e) {
                    let r = G(t, !0, "fixed" === e),
                        n = r.top + t.clientTop,
                        i = r.left + t.clientLeft,
                        o = _(t) ? K(t) : c(1),
                        s = t.clientWidth * o.x,
                        a = t.clientHeight * o.y,
                        u = i * o.x,
                        l = n * o.y;
                    return {
                        width: s,
                        height: a,
                        x: u,
                        y: l
                    }
                }(e, r);
                else {
                    let r = Q(t);
                    n = { ...e,
                        x: e.x - r.x,
                        y: e.y - r.y
                    }
                }
                return E(n)
            }

            function J(t, e) {
                return _(t) && "fixed" !== N(t).position ? e ? e(t) : t.offsetParent : null
            }

            function tt(t, e) {
                let r = L(t);
                if (!_(t)) return r;
                let n = J(t, e);
                for (; n && ["table", "td", "th"].includes(k(n)) && "static" === N(n).position;) n = J(n, e);
                return n && ("html" === k(n) || "body" === k(n) && "static" === N(n).position && !I(n)) ? r : n || function(t) {
                    let e = W(t);
                    for (; _(e) && !B(e);) {
                        if (I(e)) return e;
                        e = W(e)
                    }
                    return null
                }(t) || r
            }
            let te = async function(t) {
                    let {
                        reference: e,
                        floating: r,
                        strategy: n
                    } = t, i = this.getOffsetParent || tt, o = this.getDimensions;
                    return {
                        reference: function(t, e, r) {
                            let n = _(e),
                                i = M(e),
                                o = "fixed" === r,
                                s = G(t, !0, o, e),
                                a = {
                                    scrollLeft: 0,
                                    scrollTop: 0
                                },
                                u = c(0);
                            if (n || !n && !o) {
                                if (("body" !== k(e) || F(i)) && (a = q(e)), n) {
                                    let t = G(e, !0, o, e);
                                    u.x = t.x + e.clientLeft, u.y = t.y + e.clientTop
                                } else i && (u.x = X(i))
                            }
                            return {
                                x: s.left + a.scrollLeft - u.x,
                                y: s.top + a.scrollTop - u.y,
                                width: s.width,
                                height: s.height
                            }
                        }(e, await i(r), n),
                        floating: {
                            x: 0,
                            y: 0,
                            ...await o(r)
                        }
                    }
                },
                tr = {
                    convertOffsetParentRelativeRectToViewportRelativeRect: function(t) {
                        let {
                            rect: e,
                            offsetParent: r,
                            strategy: n
                        } = t, i = _(r), o = M(r);
                        if (r === o) return e;
                        let s = {
                                scrollLeft: 0,
                                scrollTop: 0
                            },
                            a = c(1),
                            u = c(0);
                        if ((i || !i && "fixed" !== n) && (("body" !== k(r) || F(o)) && (s = q(r)), _(r))) {
                            let t = G(r);
                            a = K(r), u.x = t.x + r.clientLeft, u.y = t.y + r.clientTop
                        }
                        return {
                            width: e.width * a.x,
                            height: e.height * a.y,
                            x: e.x * a.x - s.scrollLeft * a.x + u.x,
                            y: e.y * a.y - s.scrollTop * a.y + u.y
                        }
                    },
                    getDocumentElement: M,
                    getClippingRect: function(t) {
                        let {
                            element: e,
                            boundary: r,
                            rootBoundary: n,
                            strategy: i
                        } = t, o = "clippingAncestors" === r ? function(t, e) {
                            let r = e.get(t);
                            if (r) return r;
                            let n = $(t).filter(t => j(t) && "body" !== k(t)),
                                i = null,
                                o = "fixed" === N(t).position,
                                s = o ? W(t) : t;
                            for (; j(s) && !B(s);) {
                                let e = N(s),
                                    r = I(s);
                                r || "fixed" !== e.position || (i = null);
                                let a = o ? !r && !i : !r && "static" === e.position && !!i && ["absolute", "fixed"].includes(i.position) || F(s) && !r && function t(e, r) {
                                    let n = W(e);
                                    return !(n === r || !j(n) || B(n)) && ("fixed" === N(n).position || t(n, r))
                                }(t, s);
                                a ? n = n.filter(t => t !== s) : i = e, s = W(s)
                            }
                            return e.set(t, n), n
                        }(e, this._c) : [].concat(r), u = [...o, n], l = u[0], c = u.reduce((t, r) => {
                            let n = Y(e, r, i);
                            return t.top = a(n.top, t.top), t.right = s(n.right, t.right), t.bottom = s(n.bottom, t.bottom), t.left = a(n.left, t.left), t
                        }, Y(e, l, i));
                        return {
                            width: c.right - c.left,
                            height: c.bottom - c.top,
                            x: c.left,
                            y: c.top
                        }
                    },
                    getOffsetParent: tt,
                    getElementRects: te,
                    getClientRects: function(t) {
                        return Array.from(t.getClientRects())
                    },
                    getDimensions: function(t) {
                        return z(t)
                    },
                    getScale: K,
                    isElement: j,
                    isRTL: function(t) {
                        return "rtl" === N(t).direction
                    }
                };

            function tn(t, e, r, n) {
                let i;
                void 0 === n && (n = {});
                let {
                    ancestorScroll: o = !0,
                    ancestorResize: u = !0,
                    elementResize: c = "function" == typeof ResizeObserver,
                    layoutShift: f = "function" == typeof IntersectionObserver,
                    animationFrame: h = !1
                } = n, d = H(t), p = o || u ? [...d ? $(d) : [], ...$(e)] : [];
                p.forEach(t => {
                    o && t.addEventListener("scroll", r, {
                        passive: !0
                    }), u && t.addEventListener("resize", r)
                });
                let m = d && f ? function(t, e) {
                        let r, n = null,
                            i = M(t);

                        function o() {
                            clearTimeout(r), n && n.disconnect(), n = null
                        }
                        return ! function u(c, f) {
                            void 0 === c && (c = !1), void 0 === f && (f = 1), o();
                            let {
                                left: h,
                                top: d,
                                width: p,
                                height: m
                            } = t.getBoundingClientRect();
                            if (c || e(), !p || !m) return;
                            let y = l(d),
                                v = l(i.clientWidth - (h + p)),
                                g = l(i.clientHeight - (d + m)),
                                b = l(h),
                                w = {
                                    rootMargin: -y + "px " + -v + "px " + -g + "px " + -b + "px",
                                    threshold: a(0, s(1, f)) || 1
                                },
                                x = !0;

                            function E(t) {
                                let e = t[0].intersectionRatio;
                                if (e !== f) {
                                    if (!x) return u();
                                    e ? u(!1, e) : r = setTimeout(() => {
                                        u(!1, 1e-7)
                                    }, 100)
                                }
                                x = !1
                            }
                            try {
                                n = new IntersectionObserver(E, { ...w,
                                    root: i.ownerDocument
                                })
                            } catch (t) {
                                n = new IntersectionObserver(E, w)
                            }
                            n.observe(t)
                        }(!0), o
                    }(d, r) : null,
                    y = -1,
                    v = null;
                c && (v = new ResizeObserver(t => {
                    let [n] = t;
                    n && n.target === d && v && (v.unobserve(e), cancelAnimationFrame(y), y = requestAnimationFrame(() => {
                        v && v.observe(e)
                    })), r()
                }), d && !h && v.observe(d), v.observe(e));
                let g = h ? G(t) : null;
                return h && function e() {
                    let n = G(t);
                    g && (n.x !== g.x || n.y !== g.y || n.width !== g.width || n.height !== g.height) && r(), g = n, i = requestAnimationFrame(e)
                }(), r(), () => {
                    p.forEach(t => {
                        o && t.removeEventListener("scroll", r), u && t.removeEventListener("resize", r)
                    }), m && m(), v && v.disconnect(), v = null, h && cancelAnimationFrame(i)
                }
            }
            let ti = (t, e, r) => {
                let n = new Map,
                    i = {
                        platform: tr,
                        ...r
                    },
                    o = { ...i.platform,
                        _c: n
                    };
                return P(t, e, { ...i,
                    platform: o
                })
            };
            var to = r(4887);
            let ts = t => ({
                name: "arrow",
                options: t,
                fn(e) {
                    let {
                        element: r,
                        padding: n
                    } = "function" == typeof t ? t(e) : t;
                    if (r && ({}).hasOwnProperty.call(r, "current")) {
                        if (null != r.current) return A({
                            element: r.current,
                            padding: n
                        }).fn(e)
                    } else if (r) return A({
                        element: r,
                        padding: n
                    }).fn(e);
                    return {}
                }
            });
            var ta = "undefined" != typeof document ? i.useLayoutEffect : i.useEffect;

            function tu(t, e) {
                let r, n, i;
                if (t === e) return !0;
                if (typeof t != typeof e) return !1;
                if ("function" == typeof t && t.toString() === e.toString()) return !0;
                if (t && e && "object" == typeof t) {
                    if (Array.isArray(t)) {
                        if ((r = t.length) != e.length) return !1;
                        for (n = r; 0 != n--;)
                            if (!tu(t[n], e[n])) return !1;
                        return !0
                    }
                    if ((r = (i = Object.keys(t)).length) !== Object.keys(e).length) return !1;
                    for (n = r; 0 != n--;)
                        if (!({}).hasOwnProperty.call(e, i[n])) return !1;
                    for (n = r; 0 != n--;) {
                        let r = i[n];
                        if (("_owner" !== r || !t.$$typeof) && !tu(t[r], e[r])) return !1
                    }
                    return !0
                }
                return t != t && e != e
            }

            function tl(t) {
                if ("undefined" == typeof window) return 1;
                let e = t.ownerDocument.defaultView || window;
                return e.devicePixelRatio || 1
            }

            function tc(t, e) {
                let r = tl(t);
                return Math.round(e * r) / r
            }

            function tf(t) {
                let e = i.useRef(t);
                return ta(() => {
                    e.current = t
                }), e
            }
            var th = r(9381);
            let td = (0, i.forwardRef)((t, e) => {
                let {
                    children: r,
                    width: o = 10,
                    height: s = 5,
                    ...a
                } = t;
                return (0, i.createElement)(th.WV.svg, (0, n.Z)({}, a, {
                    ref: e,
                    width: o,
                    height: s,
                    viewBox: "0 0 30 10",
                    preserveAspectRatio: "none"
                }), t.asChild ? r : (0, i.createElement)("polygon", {
                    points: "0,0 30,0 15,10"
                }))
            });
            var tp = r(2210),
                tm = r(6989),
                ty = r(6459),
                tv = r(1030),
                tg = r(4977);
            let tb = "Popper",
                [tw, tx] = (0, tm.b)(tb),
                [tE, tS] = tw(tb),
                tP = (0, i.forwardRef)((t, e) => {
                    let {
                        __scopePopper: r,
                        virtualRef: o,
                        ...s
                    } = t, a = tS("PopperAnchor", r), u = (0, i.useRef)(null), l = (0, tp.e)(e, u);
                    return (0, i.useEffect)(() => {
                        a.onAnchorChange((null == o ? void 0 : o.current) || u.current)
                    }), o ? null : (0, i.createElement)(th.WV.div, (0, n.Z)({}, s, {
                        ref: l
                    }))
                }),
                tO = "PopperContent",
                [tA, tC] = tw(tO),
                tR = (0, i.forwardRef)((t, e) => {
                    var r, o, u, l, c, f, h, x, E, S, P, A, k, L;
                    let {
                        __scopePopper: M,
                        side: D = "bottom",
                        sideOffset: j = 0,
                        align: _ = "center",
                        alignOffset: U = 0,
                        arrowPadding: F = 0,
                        collisionBoundary: I = [],
                        collisionPadding: V = 0,
                        sticky: B = "partial",
                        hideWhenDetached: N = !1,
                        avoidCollisions: q = !0,
                        onPlaced: W,
                        ...$
                    } = t, z = tS(tO, M), [H, K] = (0, i.useState)(null), Z = (0, tp.e)(e, t => K(t)), [Q, G] = (0, i.useState)(null), X = (0, tg.t)(Q), Y = null !== (r = null == X ? void 0 : X.width) && void 0 !== r ? r : 0, J = null !== (o = null == X ? void 0 : X.height) && void 0 !== o ? o : 0, tt = "number" == typeof V ? V : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        ...V
                    }, te = Array.isArray(I) ? I : [I], tr = te.length > 0, td = {
                        padding: tt,
                        boundary: te.filter(tL),
                        altBoundary: tr
                    }, {
                        refs: tm,
                        floatingStyles: tb,
                        placement: tw,
                        isPositioned: tx,
                        middlewareData: tE
                    } = function(t) {
                        void 0 === t && (t = {});
                        let {
                            placement: e = "bottom",
                            strategy: r = "absolute",
                            middleware: n = [],
                            platform: o,
                            elements: {
                                reference: s,
                                floating: a
                            } = {},
                            transform: u = !0,
                            whileElementsMounted: l,
                            open: c
                        } = t, [f, h] = i.useState({
                            x: 0,
                            y: 0,
                            strategy: r,
                            placement: e,
                            middlewareData: {},
                            isPositioned: !1
                        }), [d, p] = i.useState(n);
                        tu(d, n) || p(n);
                        let [m, y] = i.useState(null), [v, g] = i.useState(null), b = i.useCallback(t => {
                            t != S.current && (S.current = t, y(t))
                        }, [y]), w = i.useCallback(t => {
                            t !== P.current && (P.current = t, g(t))
                        }, [g]), x = s || m, E = a || v, S = i.useRef(null), P = i.useRef(null), O = i.useRef(f), A = tf(l), C = tf(o), R = i.useCallback(() => {
                            if (!S.current || !P.current) return;
                            let t = {
                                placement: e,
                                strategy: r,
                                middleware: d
                            };
                            C.current && (t.platform = C.current), ti(S.current, P.current, t).then(t => {
                                let e = { ...t,
                                    isPositioned: !0
                                };
                                T.current && !tu(O.current, e) && (O.current = e, to.flushSync(() => {
                                    h(e)
                                }))
                            })
                        }, [d, e, r, C]);
                        ta(() => {
                            !1 === c && O.current.isPositioned && (O.current.isPositioned = !1, h(t => ({ ...t,
                                isPositioned: !1
                            })))
                        }, [c]);
                        let T = i.useRef(!1);
                        ta(() => (T.current = !0, () => {
                            T.current = !1
                        }), []), ta(() => {
                            if (x && (S.current = x), E && (P.current = E), x && E) {
                                if (A.current) return A.current(x, E, R);
                                R()
                            }
                        }, [x, E, R, A]);
                        let k = i.useMemo(() => ({
                                reference: S,
                                floating: P,
                                setReference: b,
                                setFloating: w
                            }), [b, w]),
                            L = i.useMemo(() => ({
                                reference: x,
                                floating: E
                            }), [x, E]),
                            M = i.useMemo(() => {
                                let t = {
                                    position: r,
                                    left: 0,
                                    top: 0
                                };
                                if (!L.floating) return t;
                                let e = tc(L.floating, f.x),
                                    n = tc(L.floating, f.y);
                                return u ? { ...t,
                                    transform: "translate(" + e + "px, " + n + "px)",
                                    ...tl(L.floating) >= 1.5 && {
                                        willChange: "transform"
                                    }
                                } : {
                                    position: r,
                                    left: e,
                                    top: n
                                }
                            }, [r, u, L.floating, f.x, f.y]);
                        return i.useMemo(() => ({ ...f,
                            update: R,
                            refs: k,
                            elements: L,
                            floatingStyles: M
                        }), [f, R, k, L, M])
                    }({
                        strategy: "fixed",
                        placement: D + ("center" !== _ ? "-" + _ : ""),
                        whileElementsMounted: tn,
                        elements: {
                            reference: z.anchor
                        },
                        middleware: [{
                            name: "offset",
                            options: E = {
                                mainAxis: j + J,
                                alignmentAxis: U
                            },
                            async fn(t) {
                                let {
                                    x: e,
                                    y: r
                                } = t, n = await T(t, E);
                                return {
                                    x: e + n.x,
                                    y: r + n.y,
                                    data: n
                                }
                            }
                        }, q && {
                            name: "shift",
                            options: P = {
                                mainAxis: !0,
                                crossAxis: !1,
                                limiter: "partial" === B ? (void 0 === S && (S = {}), {
                                    options: S,
                                    fn(t) {
                                        let {
                                            x: e,
                                            y: r,
                                            placement: n,
                                            rects: i,
                                            middlewareData: o
                                        } = t, {
                                            offset: s = 0,
                                            mainAxis: a = !0,
                                            crossAxis: u = !0
                                        } = d(S, t), l = {
                                            x: e,
                                            y: r
                                        }, c = g(n), f = y(c), h = l[f], m = l[c], v = d(s, t), b = "number" == typeof v ? {
                                            mainAxis: v,
                                            crossAxis: 0
                                        } : {
                                            mainAxis: 0,
                                            crossAxis: 0,
                                            ...v
                                        };
                                        if (a) {
                                            let t = "y" === f ? "height" : "width",
                                                e = i.reference[f] - i.floating[t] + b.mainAxis,
                                                r = i.reference[f] + i.reference[t] - b.mainAxis;
                                            h < e ? h = e : h > r && (h = r)
                                        }
                                        if (u) {
                                            var w, x;
                                            let t = "y" === f ? "width" : "height",
                                                e = ["top", "left"].includes(p(n)),
                                                r = i.reference[c] - i.floating[t] + (e && (null == (w = o.offset) ? void 0 : w[c]) || 0) + (e ? 0 : b.crossAxis),
                                                s = i.reference[c] + i.reference[t] + (e ? 0 : (null == (x = o.offset) ? void 0 : x[c]) || 0) - (e ? b.crossAxis : 0);
                                            m < r ? m = r : m > s && (m = s)
                                        }
                                        return {
                                            [f]: h,
                                            [c]: m
                                        }
                                    }
                                }) : void 0,
                                ...td
                            },
                            async fn(t) {
                                let {
                                    x: e,
                                    y: r,
                                    placement: n
                                } = t, {
                                    mainAxis: i = !0,
                                    crossAxis: o = !1,
                                    limiter: u = {
                                        fn: t => {
                                            let {
                                                x: e,
                                                y: r
                                            } = t;
                                            return {
                                                x: e,
                                                y: r
                                            }
                                        }
                                    },
                                    ...l
                                } = d(P, t), c = {
                                    x: e,
                                    y: r
                                }, f = await O(t, l), h = g(p(n)), m = y(h), v = c[m], b = c[h];
                                if (i) {
                                    let t = v + f["y" === m ? "top" : "left"],
                                        e = v - f["y" === m ? "bottom" : "right"];
                                    v = a(t, s(v, e))
                                }
                                if (o) {
                                    let t = "y" === h ? "top" : "left",
                                        e = "y" === h ? "bottom" : "right",
                                        r = b + f[t],
                                        n = b - f[e];
                                    b = a(r, s(b, n))
                                }
                                let w = u.fn({ ...t,
                                    [m]: v,
                                    [h]: b
                                });
                                return { ...w,
                                    data: {
                                        x: w.x - e,
                                        y: w.y - r
                                    }
                                }
                            }
                        }, q && {
                            name: "flip",
                            options: A = { ...td
                            },
                            async fn(t) {
                                var e, r, n, i;
                                let {
                                    placement: o,
                                    middlewareData: s,
                                    rects: a,
                                    initialPlacement: u,
                                    platform: l,
                                    elements: c
                                } = t, {
                                    mainAxis: f = !0,
                                    crossAxis: h = !0,
                                    fallbackPlacements: x,
                                    fallbackStrategy: E = "bestFit",
                                    fallbackAxisSideDirection: S = "none",
                                    flipAlignment: P = !0,
                                    ...C
                                } = d(A, t), R = p(o), T = p(u) === u, k = await (null == l.isRTL ? void 0 : l.isRTL(c.floating)), L = x || (T || !P ? [w(u)] : function(t) {
                                    let e = w(t);
                                    return [b(t), e, b(e)]
                                }(u));
                                x || "none" === S || L.push(... function(t, e, r, n) {
                                    let i = m(t),
                                        o = function(t, e, r) {
                                            let n = ["left", "right"],
                                                i = ["right", "left"];
                                            switch (t) {
                                                case "top":
                                                case "bottom":
                                                    if (r) return e ? i : n;
                                                    return e ? n : i;
                                                case "left":
                                                case "right":
                                                    return e ? ["top", "bottom"] : ["bottom", "top"];
                                                default:
                                                    return []
                                            }
                                        }(p(t), "start" === r, n);
                                    return i && (o = o.map(t => t + "-" + i), e && (o = o.concat(o.map(b)))), o
                                }(u, P, S, k));
                                let M = [u, ...L],
                                    D = await O(t, C),
                                    j = [],
                                    _ = (null == (e = s.flip) ? void 0 : e.overflows) || [];
                                if (f && j.push(D[R]), h) {
                                    let t = function(t, e, r) {
                                        void 0 === r && (r = !1);
                                        let n = m(t),
                                            i = y(g(t)),
                                            o = v(i),
                                            s = "x" === i ? n === (r ? "end" : "start") ? "right" : "left" : "start" === n ? "bottom" : "top";
                                        return e.reference[o] > e.floating[o] && (s = w(s)), [s, w(s)]
                                    }(o, a, k);
                                    j.push(D[t[0]], D[t[1]])
                                }
                                if (_ = [..._, {
                                        placement: o,
                                        overflows: j
                                    }], !j.every(t => t <= 0)) {
                                    let t = ((null == (r = s.flip) ? void 0 : r.index) || 0) + 1,
                                        e = M[t];
                                    if (e) return {
                                        data: {
                                            index: t,
                                            overflows: _
                                        },
                                        reset: {
                                            placement: e
                                        }
                                    };
                                    let a = null == (n = _.filter(t => t.overflows[0] <= 0).sort((t, e) => t.overflows[1] - e.overflows[1])[0]) ? void 0 : n.placement;
                                    if (!a) switch (E) {
                                        case "bestFit":
                                            {
                                                let t = null == (i = _.map(t => [t.placement, t.overflows.filter(t => t > 0).reduce((t, e) => t + e, 0)]).sort((t, e) => t[1] - e[1])[0]) ? void 0 : i[0];t && (a = t);
                                                break
                                            }
                                        case "initialPlacement":
                                            a = u
                                    }
                                    if (o !== a) return {
                                        reset: {
                                            placement: a
                                        }
                                    }
                                }
                                return {}
                            }
                        }, {
                            name: "size",
                            options: k = { ...td,
                                apply: ({
                                    elements: t,
                                    rects: e,
                                    availableWidth: r,
                                    availableHeight: n
                                }) => {
                                    let {
                                        width: i,
                                        height: o
                                    } = e.reference, s = t.floating.style;
                                    s.setProperty("--radix-popper-available-width", `${r}px`), s.setProperty("--radix-popper-available-height", `${n}px`), s.setProperty("--radix-popper-anchor-width", `${i}px`), s.setProperty("--radix-popper-anchor-height", `${o}px`)
                                }
                            },
                            async fn(t) {
                                let e, r;
                                let {
                                    placement: n,
                                    rects: i,
                                    platform: o,
                                    elements: u
                                } = t, {
                                    apply: l = () => {},
                                    ...c
                                } = d(k, t), f = await O(t, c), h = p(n), y = m(n), v = "y" === g(n), {
                                    width: b,
                                    height: w
                                } = i.floating;
                                "top" === h || "bottom" === h ? (e = h, r = y === (await (null == o.isRTL ? void 0 : o.isRTL(u.floating)) ? "start" : "end") ? "left" : "right") : (r = h, e = "end" === y ? "top" : "bottom");
                                let x = w - f[e],
                                    E = b - f[r],
                                    S = !t.middlewareData.shift,
                                    P = x,
                                    A = E;
                                if (v) {
                                    let t = b - f.left - f.right;
                                    A = y || S ? s(E, t) : t
                                } else {
                                    let t = w - f.top - f.bottom;
                                    P = y || S ? s(x, t) : t
                                }
                                if (S && !y) {
                                    let t = a(f.left, 0),
                                        e = a(f.right, 0),
                                        r = a(f.top, 0),
                                        n = a(f.bottom, 0);
                                    v ? A = b - 2 * (0 !== t || 0 !== e ? t + e : a(f.left, f.right)) : P = w - 2 * (0 !== r || 0 !== n ? r + n : a(f.top, f.bottom))
                                }
                                await l({ ...t,
                                    availableWidth: A,
                                    availableHeight: P
                                });
                                let C = await o.getDimensions(u.floating);
                                return b !== C.width || w !== C.height ? {
                                    reset: {
                                        rects: !0
                                    }
                                } : {}
                            }
                        }, Q && ts({
                            element: Q,
                            padding: F
                        }), tM({
                            arrowWidth: Y,
                            arrowHeight: J
                        }), N && {
                            name: "hide",
                            options: L = {
                                strategy: "referenceHidden"
                            },
                            async fn(t) {
                                let {
                                    rects: e
                                } = t, {
                                    strategy: r = "referenceHidden",
                                    ...n
                                } = d(L, t);
                                switch (r) {
                                    case "referenceHidden":
                                        {
                                            let r = await O(t, { ...n,
                                                    elementContext: "reference"
                                                }),
                                                i = C(r, e.reference);
                                            return {
                                                data: {
                                                    referenceHiddenOffsets: i,
                                                    referenceHidden: R(i)
                                                }
                                            }
                                        }
                                    case "escaped":
                                        {
                                            let r = await O(t, { ...n,
                                                    altBoundary: !0
                                                }),
                                                i = C(r, e.floating);
                                            return {
                                                data: {
                                                    escapedOffsets: i,
                                                    escaped: R(i)
                                                }
                                            }
                                        }
                                    default:
                                        return {}
                                }
                            }
                        }]
                    }), [tP, tC] = tD(tw), tR = (0, ty.W)(W);
                    (0, tv.b)(() => {
                        tx && (null == tR || tR())
                    }, [tx, tR]);
                    let tT = null === (u = tE.arrow) || void 0 === u ? void 0 : u.x,
                        tk = null === (l = tE.arrow) || void 0 === l ? void 0 : l.y,
                        tj = (null === (c = tE.arrow) || void 0 === c ? void 0 : c.centerOffset) !== 0,
                        [t_, tU] = (0, i.useState)();
                    return (0, tv.b)(() => {
                        H && tU(window.getComputedStyle(H).zIndex)
                    }, [H]), (0, i.createElement)("div", {
                        ref: tm.setFloating,
                        "data-radix-popper-content-wrapper": "",
                        style: { ...tb,
                            transform: tx ? tb.transform : "translate(0, -200%)",
                            minWidth: "max-content",
                            zIndex: t_,
                            "--radix-popper-transform-origin": [null === (f = tE.transformOrigin) || void 0 === f ? void 0 : f.x, null === (h = tE.transformOrigin) || void 0 === h ? void 0 : h.y].join(" ")
                        },
                        dir: t.dir
                    }, (0, i.createElement)(tA, {
                        scope: M,
                        placedSide: tP,
                        onArrowChange: G,
                        arrowX: tT,
                        arrowY: tk,
                        shouldHideArrow: tj
                    }, (0, i.createElement)(th.WV.div, (0, n.Z)({
                        "data-side": tP,
                        "data-align": tC
                    }, $, {
                        ref: Z,
                        style: { ...$.style,
                            animation: tx ? void 0 : "none",
                            opacity: null !== (x = tE.hide) && void 0 !== x && x.referenceHidden ? 0 : void 0
                        }
                    }))))
                }),
                tT = {
                    top: "bottom",
                    right: "left",
                    bottom: "top",
                    left: "right"
                },
                tk = (0, i.forwardRef)(function(t, e) {
                    let {
                        __scopePopper: r,
                        ...o
                    } = t, s = tC("PopperArrow", r), a = tT[s.placedSide];
                    return (0, i.createElement)("span", {
                        ref: s.onArrowChange,
                        style: {
                            position: "absolute",
                            left: s.arrowX,
                            top: s.arrowY,
                            [a]: 0,
                            transformOrigin: {
                                top: "",
                                right: "0 0",
                                bottom: "center 0",
                                left: "100% 0"
                            }[s.placedSide],
                            transform: {
                                top: "translateY(100%)",
                                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                                bottom: "rotate(180deg)",
                                left: "translateY(50%) rotate(-90deg) translateX(50%)"
                            }[s.placedSide],
                            visibility: s.shouldHideArrow ? "hidden" : void 0
                        }
                    }, (0, i.createElement)(td, (0, n.Z)({}, o, {
                        ref: e,
                        style: { ...o.style,
                            display: "block"
                        }
                    })))
                });

            function tL(t) {
                return null !== t
            }
            let tM = t => ({
                name: "transformOrigin",
                options: t,
                fn(e) {
                    var r, n, i, o, s;
                    let {
                        placement: a,
                        rects: u,
                        middlewareData: l
                    } = e, c = (null === (r = l.arrow) || void 0 === r ? void 0 : r.centerOffset) !== 0, f = c ? 0 : t.arrowWidth, h = c ? 0 : t.arrowHeight, [d, p] = tD(a), m = {
                        start: "0%",
                        center: "50%",
                        end: "100%"
                    }[p], y = (null !== (n = null === (i = l.arrow) || void 0 === i ? void 0 : i.x) && void 0 !== n ? n : 0) + f / 2, v = (null !== (o = null === (s = l.arrow) || void 0 === s ? void 0 : s.y) && void 0 !== o ? o : 0) + h / 2, g = "", b = "";
                    return "bottom" === d ? (g = c ? m : `${y}px`, b = `${-h}px`) : "top" === d ? (g = c ? m : `${y}px`, b = `${u.floating.height+h}px`) : "right" === d ? (g = `${-h}px`, b = c ? m : `${v}px`) : "left" === d && (g = `${u.floating.width+h}px`, b = c ? m : `${v}px`), {
                        data: {
                            x: g,
                            y: b
                        }
                    }
                }
            });

            function tD(t) {
                let [e, r = "center"] = t.split("-");
                return [e, r]
            }
            let tj = t => {
                    let {
                        __scopePopper: e,
                        children: r
                    } = t, [n, o] = (0, i.useState)(null);
                    return (0, i.createElement)(tE, {
                        scope: e,
                        anchor: n,
                        onAnchorChange: o
                    }, r)
                },
                t_ = tP,
                tU = tR,
                tF = tk
        },
        2730: function(t, e, r) {
            "use strict";
            r.d(e, {
                h: function() {
                    return a
                }
            });
            var n = r(3428),
                i = r(2265),
                o = r(4887),
                s = r(9381);
            let a = (0, i.forwardRef)((t, e) => {
                var r;
                let {
                    container: a = null == globalThis ? void 0 : null === (r = globalThis.document) || void 0 === r ? void 0 : r.body,
                    ...u
                } = t;
                return a ? o.createPortal((0, i.createElement)(s.WV.div, (0, n.Z)({}, u, {
                    ref: e
                })), a) : null
            })
        },
        5606: function(t, e, r) {
            "use strict";
            r.d(e, {
                z: function() {
                    return a
                }
            });
            var n = r(2265),
                i = r(4887),
                o = r(2210),
                s = r(1030);
            let a = t => {
                let {
                    present: e,
                    children: r
                } = t, a = function(t) {
                    var e;
                    let [r, o] = (0, n.useState)(), a = (0, n.useRef)({}), l = (0, n.useRef)(t), c = (0, n.useRef)("none"), f = t ? "mounted" : "unmounted", [h, d] = (e = {
                        mounted: {
                            UNMOUNT: "unmounted",
                            ANIMATION_OUT: "unmountSuspended"
                        },
                        unmountSuspended: {
                            MOUNT: "mounted",
                            ANIMATION_END: "unmounted"
                        },
                        unmounted: {
                            MOUNT: "mounted"
                        }
                    }, (0, n.useReducer)((t, r) => {
                        let n = e[t][r];
                        return null != n ? n : t
                    }, f));
                    return (0, n.useEffect)(() => {
                        let t = u(a.current);
                        c.current = "mounted" === h ? t : "none"
                    }, [h]), (0, s.b)(() => {
                        let e = a.current,
                            r = l.current,
                            n = r !== t;
                        if (n) {
                            let n = c.current,
                                i = u(e);
                            t ? d("MOUNT") : "none" === i || (null == e ? void 0 : e.display) === "none" ? d("UNMOUNT") : r && n !== i ? d("ANIMATION_OUT") : d("UNMOUNT"), l.current = t
                        }
                    }, [t, d]), (0, s.b)(() => {
                        if (r) {
                            let t = t => {
                                    let e = u(a.current),
                                        n = e.includes(t.animationName);
                                    t.target === r && n && (0, i.flushSync)(() => d("ANIMATION_END"))
                                },
                                e = t => {
                                    t.target === r && (c.current = u(a.current))
                                };
                            return r.addEventListener("animationstart", e), r.addEventListener("animationcancel", t), r.addEventListener("animationend", t), () => {
                                r.removeEventListener("animationstart", e), r.removeEventListener("animationcancel", t), r.removeEventListener("animationend", t)
                            }
                        }
                        d("ANIMATION_END")
                    }, [r, d]), {
                        isPresent: ["mounted", "unmountSuspended"].includes(h),
                        ref: (0, n.useCallback)(t => {
                            t && (a.current = getComputedStyle(t)), o(t)
                        }, [])
                    }
                }(e), l = "function" == typeof r ? r({
                    present: a.isPresent
                }) : n.Children.only(r), c = (0, o.e)(a.ref, l.ref), f = "function" == typeof r;
                return f || a.isPresent ? (0, n.cloneElement)(l, {
                    ref: c
                }) : null
            };

            function u(t) {
                return (null == t ? void 0 : t.animationName) || "none"
            }
            a.displayName = "Presence"
        },
        9381: function(t, e, r) {
            "use strict";
            r.d(e, {
                WV: function() {
                    return a
                },
                jH: function() {
                    return u
                }
            });
            var n = r(3428),
                i = r(2265),
                o = r(4887),
                s = r(7256);
            let a = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((t, e) => {
                let r = (0, i.forwardRef)((t, r) => {
                    let {
                        asChild: o,
                        ...a
                    } = t, u = o ? s.g7 : e;
                    return (0, i.useEffect)(() => {
                        window[Symbol.for("radix-ui")] = !0
                    }, []), (0, i.createElement)(u, (0, n.Z)({}, a, {
                        ref: r
                    }))
                });
                return r.displayName = `Primitive.${e}`, { ...t,
                    [e]: r
                }
            }, {});

            function u(t, e) {
                t && (0, o.flushSync)(() => t.dispatchEvent(e))
            }
        },
        6072: function(t, e, r) {
            "use strict";
            r.d(e, {
                bU: function() {
                    return $
                },
                e6: function() {
                    return W
                },
                fC: function() {
                    return N
                },
                fQ: function() {
                    return q
                }
            });
            var n = r(3428),
                i = r(2265),
                o = r(760),
                s = r(5744),
                a = r(2210),
                u = r(6989),
                l = r(3763),
                c = r(5400),
                f = r(5184),
                h = r(4977),
                d = r(9381),
                p = r(7733);
            let m = ["PageUp", "PageDown"],
                y = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
                v = {
                    "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
                    "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
                    "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
                    "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
                },
                g = "Slider",
                [b, w, x] = (0, p.B)(g),
                [E, S] = (0, u.b)(g, [x]),
                [P, O] = E(g),
                A = (0, i.forwardRef)((t, e) => {
                    let {
                        name: r,
                        min: u = 0,
                        max: c = 100,
                        step: f = 1,
                        orientation: h = "horizontal",
                        disabled: d = !1,
                        minStepsBetweenThumbs: p = 0,
                        defaultValue: v = [u],
                        value: g,
                        onValueChange: w = () => {},
                        onValueCommit: x = () => {},
                        inverted: E = !1,
                        ...S
                    } = t, [O, A] = (0, i.useState)(null), C = (0, a.e)(e, t => A(t)), R = (0, i.useRef)(new Set), L = (0, i.useRef)(0), M = !O || !!O.closest("form"), D = "horizontal" === h ? T : k, [j = [], _] = (0, l.T)({
                        prop: g,
                        defaultProp: v,
                        onChange: t => {
                            var e;
                            null === (e = [...R.current][L.current]) || void 0 === e || e.focus(), w(t)
                        }
                    }), U = (0, i.useRef)(j);

                    function F(t, e, {
                        commit: r
                    } = {
                        commit: !1
                    }) {
                        let n = (String(f).split(".")[1] || "").length,
                            i = function(t, e) {
                                let r = Math.pow(10, e);
                                return Math.round(t * r) / r
                            }(Math.round((t - u) / f) * f + u, n),
                            s = (0, o.u)(i, [u, c]);
                        _((t = []) => {
                            let n = function(t = [], e, r) {
                                let n = [...t];
                                return n[r] = e, n.sort((t, e) => t - e)
                            }(t, s, e);
                            if (! function(t, e) {
                                    if (e > 0) {
                                        let r = t.slice(0, -1).map((e, r) => t[r + 1] - e);
                                        return Math.min(...r) >= e
                                    }
                                    return !0
                                }(n, p * f)) return t; {
                                L.current = n.indexOf(s);
                                let e = String(n) !== String(t);
                                return e && r && x(n), e ? n : t
                            }
                        })
                    }
                    return (0, i.createElement)(P, {
                        scope: t.__scopeSlider,
                        disabled: d,
                        min: u,
                        max: c,
                        valueIndexToChangeRef: L,
                        thumbs: R.current,
                        values: j,
                        orientation: h
                    }, (0, i.createElement)(b.Provider, {
                        scope: t.__scopeSlider
                    }, (0, i.createElement)(b.Slot, {
                        scope: t.__scopeSlider
                    }, (0, i.createElement)(D, (0, n.Z)({
                        "aria-disabled": d,
                        "data-disabled": d ? "" : void 0
                    }, S, {
                        ref: C,
                        onPointerDown: (0, s.M)(S.onPointerDown, () => {
                            d || (U.current = j)
                        }),
                        min: u,
                        max: c,
                        inverted: E,
                        onSlideStart: d ? void 0 : function(t) {
                            let e = function(t, e) {
                                if (1 === t.length) return 0;
                                let r = t.map(t => Math.abs(t - e)),
                                    n = Math.min(...r);
                                return r.indexOf(n)
                            }(j, t);
                            F(t, e)
                        },
                        onSlideMove: d ? void 0 : function(t) {
                            F(t, L.current)
                        },
                        onSlideEnd: d ? void 0 : function() {
                            let t = U.current[L.current],
                                e = j[L.current];
                            e !== t && x(j)
                        },
                        onHomeKeyDown: () => !d && F(u, 0, {
                            commit: !0
                        }),
                        onEndKeyDown: () => !d && F(c, j.length - 1, {
                            commit: !0
                        }),
                        onStepKeyDown: ({
                            event: t,
                            direction: e
                        }) => {
                            if (!d) {
                                let r = m.includes(t.key),
                                    n = r || t.shiftKey && y.includes(t.key),
                                    i = L.current,
                                    o = j[i],
                                    s = f * (n ? 10 : 1) * e;
                                F(o + s, i, {
                                    commit: !0
                                })
                            }
                        }
                    })))), M && j.map((t, e) => (0, i.createElement)(I, {
                        key: e,
                        name: r ? r + (j.length > 1 ? "[]" : "") : void 0,
                        value: t
                    })))
                }),
                [C, R] = E(g, {
                    startEdge: "left",
                    endEdge: "right",
                    size: "width",
                    direction: 1
                }),
                T = (0, i.forwardRef)((t, e) => {
                    let {
                        min: r,
                        max: o,
                        dir: s,
                        inverted: u,
                        onSlideStart: l,
                        onSlideMove: f,
                        onSlideEnd: h,
                        onStepKeyDown: d,
                        ...p
                    } = t, [m, y] = (0, i.useState)(null), g = (0, a.e)(e, t => y(t)), b = (0, i.useRef)(), w = (0, c.gm)(s), x = "ltr" === w, E = x && !u || !x && u;

                    function S(t) {
                        let e = b.current || m.getBoundingClientRect(),
                            n = [0, e.width],
                            i = B(n, E ? [r, o] : [o, r]);
                        return b.current = e, i(t - e.left)
                    }
                    return (0, i.createElement)(C, {
                        scope: t.__scopeSlider,
                        startEdge: E ? "left" : "right",
                        endEdge: E ? "right" : "left",
                        direction: E ? 1 : -1,
                        size: "width"
                    }, (0, i.createElement)(L, (0, n.Z)({
                        dir: w,
                        "data-orientation": "horizontal"
                    }, p, {
                        ref: g,
                        style: { ...p.style,
                            "--radix-slider-thumb-transform": "translateX(-50%)"
                        },
                        onSlideStart: t => {
                            let e = S(t.clientX);
                            null == l || l(e)
                        },
                        onSlideMove: t => {
                            let e = S(t.clientX);
                            null == f || f(e)
                        },
                        onSlideEnd: () => {
                            b.current = void 0, null == h || h()
                        },
                        onStepKeyDown: t => {
                            let e = v[E ? "from-left" : "from-right"].includes(t.key);
                            null == d || d({
                                event: t,
                                direction: e ? -1 : 1
                            })
                        }
                    })))
                }),
                k = (0, i.forwardRef)((t, e) => {
                    let {
                        min: r,
                        max: o,
                        inverted: s,
                        onSlideStart: u,
                        onSlideMove: l,
                        onSlideEnd: c,
                        onStepKeyDown: f,
                        ...h
                    } = t, d = (0, i.useRef)(null), p = (0, a.e)(e, d), m = (0, i.useRef)(), y = !s;

                    function g(t) {
                        let e = m.current || d.current.getBoundingClientRect(),
                            n = [0, e.height],
                            i = B(n, y ? [o, r] : [r, o]);
                        return m.current = e, i(t - e.top)
                    }
                    return (0, i.createElement)(C, {
                        scope: t.__scopeSlider,
                        startEdge: y ? "bottom" : "top",
                        endEdge: y ? "top" : "bottom",
                        size: "height",
                        direction: y ? 1 : -1
                    }, (0, i.createElement)(L, (0, n.Z)({
                        "data-orientation": "vertical"
                    }, h, {
                        ref: p,
                        style: { ...h.style,
                            "--radix-slider-thumb-transform": "translateY(50%)"
                        },
                        onSlideStart: t => {
                            let e = g(t.clientY);
                            null == u || u(e)
                        },
                        onSlideMove: t => {
                            let e = g(t.clientY);
                            null == l || l(e)
                        },
                        onSlideEnd: () => {
                            m.current = void 0, null == c || c()
                        },
                        onStepKeyDown: t => {
                            let e = v[y ? "from-bottom" : "from-top"].includes(t.key);
                            null == f || f({
                                event: t,
                                direction: e ? -1 : 1
                            })
                        }
                    })))
                }),
                L = (0, i.forwardRef)((t, e) => {
                    let {
                        __scopeSlider: r,
                        onSlideStart: o,
                        onSlideMove: a,
                        onSlideEnd: u,
                        onHomeKeyDown: l,
                        onEndKeyDown: c,
                        onStepKeyDown: f,
                        ...h
                    } = t, p = O(g, r);
                    return (0, i.createElement)(d.WV.span, (0, n.Z)({}, h, {
                        ref: e,
                        onKeyDown: (0, s.M)(t.onKeyDown, t => {
                            "Home" === t.key ? (l(t), t.preventDefault()) : "End" === t.key ? (c(t), t.preventDefault()) : m.concat(y).includes(t.key) && (f(t), t.preventDefault())
                        }),
                        onPointerDown: (0, s.M)(t.onPointerDown, t => {
                            let e = t.target;
                            e.setPointerCapture(t.pointerId), t.preventDefault(), p.thumbs.has(e) ? e.focus() : o(t)
                        }),
                        onPointerMove: (0, s.M)(t.onPointerMove, t => {
                            let e = t.target;
                            e.hasPointerCapture(t.pointerId) && a(t)
                        }),
                        onPointerUp: (0, s.M)(t.onPointerUp, t => {
                            let e = t.target;
                            e.hasPointerCapture(t.pointerId) && (e.releasePointerCapture(t.pointerId), u(t))
                        })
                    }))
                }),
                M = (0, i.forwardRef)((t, e) => {
                    let {
                        __scopeSlider: r,
                        ...o
                    } = t, s = O("SliderTrack", r);
                    return (0, i.createElement)(d.WV.span, (0, n.Z)({
                        "data-disabled": s.disabled ? "" : void 0,
                        "data-orientation": s.orientation
                    }, o, {
                        ref: e
                    }))
                }),
                D = "SliderRange",
                j = (0, i.forwardRef)((t, e) => {
                    let {
                        __scopeSlider: r,
                        ...o
                    } = t, s = O(D, r), u = R(D, r), l = (0, i.useRef)(null), c = (0, a.e)(e, l), f = s.values.length, h = s.values.map(t => V(t, s.min, s.max));
                    return (0, i.createElement)(d.WV.span, (0, n.Z)({
                        "data-orientation": s.orientation,
                        "data-disabled": s.disabled ? "" : void 0
                    }, o, {
                        ref: c,
                        style: { ...t.style,
                            [u.startEdge]: (f > 1 ? Math.min(...h) : 0) + "%",
                            [u.endEdge]: 100 - Math.max(...h) + "%"
                        }
                    }))
                }),
                _ = "SliderThumb",
                U = (0, i.forwardRef)((t, e) => {
                    let r = w(t.__scopeSlider),
                        [o, s] = (0, i.useState)(null),
                        u = (0, a.e)(e, t => s(t)),
                        l = (0, i.useMemo)(() => o ? r().findIndex(t => t.ref.current === o) : -1, [r, o]);
                    return (0, i.createElement)(F, (0, n.Z)({}, t, {
                        ref: u,
                        index: l
                    }))
                }),
                F = (0, i.forwardRef)((t, e) => {
                    var r;
                    let {
                        __scopeSlider: o,
                        index: u,
                        ...l
                    } = t, c = O(_, o), f = R(_, o), [p, m] = (0, i.useState)(null), y = (0, a.e)(e, t => m(t)), v = (0, h.t)(p), g = c.values[u], w = void 0 === g ? 0 : V(g, c.min, c.max), x = (r = c.values.length) > 2 ? `Value ${u+1} of ${r}` : 2 === r ? ["Minimum", "Maximum"][u] : void 0, E = null == v ? void 0 : v[f.size], S = E ? function(t, e, r) {
                        let n = t / 2,
                            i = B([0, 50], [0, n]);
                        return (n - i(e) * r) * r
                    }(E, w, f.direction) : 0;
                    return (0, i.useEffect)(() => {
                        if (p) return c.thumbs.add(p), () => {
                            c.thumbs.delete(p)
                        }
                    }, [p, c.thumbs]), (0, i.createElement)("span", {
                        style: {
                            transform: "var(--radix-slider-thumb-transform)",
                            position: "absolute",
                            [f.startEdge]: `calc(${w}% + ${S}px)`
                        }
                    }, (0, i.createElement)(b.ItemSlot, {
                        scope: t.__scopeSlider
                    }, (0, i.createElement)(d.WV.span, (0, n.Z)({
                        role: "slider",
                        "aria-label": t["aria-label"] || x,
                        "aria-valuemin": c.min,
                        "aria-valuenow": g,
                        "aria-valuemax": c.max,
                        "aria-orientation": c.orientation,
                        "data-orientation": c.orientation,
                        "data-disabled": c.disabled ? "" : void 0,
                        tabIndex: c.disabled ? void 0 : 0
                    }, l, {
                        ref: y,
                        style: void 0 === g ? {
                            display: "none"
                        } : t.style,
                        onFocus: (0, s.M)(t.onFocus, () => {
                            c.valueIndexToChangeRef.current = u
                        })
                    }))))
                }),
                I = t => {
                    let {
                        value: e,
                        ...r
                    } = t, o = (0, i.useRef)(null), s = (0, f.D)(e);
                    return (0, i.useEffect)(() => {
                        let t = o.current,
                            r = window.HTMLInputElement.prototype,
                            n = Object.getOwnPropertyDescriptor(r, "value"),
                            i = n.set;
                        if (s !== e && i) {
                            let r = new Event("input", {
                                bubbles: !0
                            });
                            i.call(t, e), t.dispatchEvent(r)
                        }
                    }, [s, e]), (0, i.createElement)("input", (0, n.Z)({
                        style: {
                            display: "none"
                        }
                    }, r, {
                        ref: o,
                        defaultValue: e
                    }))
                };

            function V(t, e, r) {
                return (0, o.u)(100 / (r - e) * (t - e), [0, 100])
            }

            function B(t, e) {
                return r => {
                    if (t[0] === t[1] || e[0] === e[1]) return e[0];
                    let n = (e[1] - e[0]) / (t[1] - t[0]);
                    return e[0] + n * (r - t[0])
                }
            }
            let N = A,
                q = M,
                W = j,
                $ = U
        },
        7256: function(t, e, r) {
            "use strict";
            r.d(e, {
                A4: function() {
                    return u
                },
                g7: function() {
                    return s
                }
            });
            var n = r(3428),
                i = r(2265),
                o = r(2210);
            let s = (0, i.forwardRef)((t, e) => {
                let {
                    children: r,
                    ...o
                } = t, s = i.Children.toArray(r), u = s.find(l);
                if (u) {
                    let t = u.props.children,
                        r = s.map(e => e !== u ? e : i.Children.count(t) > 1 ? i.Children.only(null) : (0, i.isValidElement)(t) ? t.props.children : null);
                    return (0, i.createElement)(a, (0, n.Z)({}, o, {
                        ref: e
                    }), (0, i.isValidElement)(t) ? (0, i.cloneElement)(t, void 0, r) : null)
                }
                return (0, i.createElement)(a, (0, n.Z)({}, o, {
                    ref: e
                }), r)
            });
            s.displayName = "Slot";
            let a = (0, i.forwardRef)((t, e) => {
                let {
                    children: r,
                    ...n
                } = t;
                return (0, i.isValidElement)(r) ? (0, i.cloneElement)(r, { ... function(t, e) {
                        let r = { ...e
                        };
                        for (let n in e) {
                            let i = t[n],
                                o = e[n],
                                s = /^on[A-Z]/.test(n);
                            s ? i && o ? r[n] = (...t) => {
                                o(...t), i(...t)
                            } : i && (r[n] = i) : "style" === n ? r[n] = { ...i,
                                ...o
                            } : "className" === n && (r[n] = [i, o].filter(Boolean).join(" "))
                        }
                        return { ...t,
                            ...r
                        }
                    }(n, r.props),
                    ref: e ? (0, o.F)(e, r.ref) : r.ref
                }) : i.Children.count(r) > 1 ? i.Children.only(null) : null
            });
            a.displayName = "SlotClone";
            let u = ({
                children: t
            }) => (0, i.createElement)(i.Fragment, null, t);

            function l(t) {
                return (0, i.isValidElement)(t) && t.type === u
            }
        },
        8567: function(t, e, r) {
            "use strict";
            r.d(e, {
                Eh: function() {
                    return W
                },
                VY: function() {
                    return q
                },
                fC: function() {
                    return V
                },
                h_: function() {
                    return N
                },
                pn: function() {
                    return S
                },
                xz: function() {
                    return B
                }
            });
            var n = r(3428),
                i = r(2265),
                o = r(5744),
                s = r(2210),
                a = r(6989),
                u = r(9249),
                l = r(966),
                c = r(2049),
                f = r(2730),
                h = r(5606),
                d = r(9381),
                p = r(7256),
                m = r(3763),
                y = r(8281);
            let [v, g] = (0, a.b)("Tooltip", [c.D7]), b = (0, c.D7)(), w = "tooltip.open", [x, E] = v("TooltipProvider"), S = t => {
                let {
                    __scopeTooltip: e,
                    delayDuration: r = 700,
                    skipDelayDuration: n = 300,
                    disableHoverableContent: o = !1,
                    children: s
                } = t, [a, u] = (0, i.useState)(!0), l = (0, i.useRef)(!1), c = (0, i.useRef)(0);
                return (0, i.useEffect)(() => {
                    let t = c.current;
                    return () => window.clearTimeout(t)
                }, []), (0, i.createElement)(x, {
                    scope: e,
                    isOpenDelayed: a,
                    delayDuration: r,
                    onOpen: (0, i.useCallback)(() => {
                        window.clearTimeout(c.current), u(!1)
                    }, []),
                    onClose: (0, i.useCallback)(() => {
                        window.clearTimeout(c.current), c.current = window.setTimeout(() => u(!0), n)
                    }, [n]),
                    isPointerInTransitRef: l,
                    onPointerInTransitChange: (0, i.useCallback)(t => {
                        l.current = t
                    }, []),
                    disableHoverableContent: o
                }, s)
            }, P = "Tooltip", [O, A] = v(P), C = "TooltipTrigger", R = (0, i.forwardRef)((t, e) => {
                let {
                    __scopeTooltip: r,
                    ...a
                } = t, u = A(C, r), l = E(C, r), f = b(r), h = (0, i.useRef)(null), p = (0, s.e)(e, h, u.onTriggerChange), m = (0, i.useRef)(!1), y = (0, i.useRef)(!1), v = (0, i.useCallback)(() => m.current = !1, []);
                return (0, i.useEffect)(() => () => document.removeEventListener("pointerup", v), [v]), (0, i.createElement)(c.ee, (0, n.Z)({
                    asChild: !0
                }, f), (0, i.createElement)(d.WV.button, (0, n.Z)({
                    "aria-describedby": u.open ? u.contentId : void 0,
                    "data-state": u.stateAttribute
                }, a, {
                    ref: p,
                    onPointerMove: (0, o.M)(t.onPointerMove, t => {
                        "touch" === t.pointerType || y.current || l.isPointerInTransitRef.current || (u.onTriggerEnter(), y.current = !0)
                    }),
                    onPointerLeave: (0, o.M)(t.onPointerLeave, () => {
                        u.onTriggerLeave(), y.current = !1
                    }),
                    onPointerDown: (0, o.M)(t.onPointerDown, () => {
                        m.current = !0, document.addEventListener("pointerup", v, {
                            once: !0
                        })
                    }),
                    onFocus: (0, o.M)(t.onFocus, () => {
                        m.current || u.onOpen()
                    }),
                    onBlur: (0, o.M)(t.onBlur, u.onClose),
                    onClick: (0, o.M)(t.onClick, u.onClose)
                })))
            }), T = "TooltipPortal", [k, L] = v(T, {
                forceMount: void 0
            }), M = "TooltipContent", D = (0, i.forwardRef)((t, e) => {
                let r = L(M, t.__scopeTooltip),
                    {
                        forceMount: o = r.forceMount,
                        side: s = "top",
                        ...a
                    } = t,
                    u = A(M, t.__scopeTooltip);
                return (0, i.createElement)(h.z, {
                    present: o || u.open
                }, u.disableHoverableContent ? (0, i.createElement)(F, (0, n.Z)({
                    side: s
                }, a, {
                    ref: e
                })) : (0, i.createElement)(j, (0, n.Z)({
                    side: s
                }, a, {
                    ref: e
                })))
            }), j = (0, i.forwardRef)((t, e) => {
                let r = A(M, t.__scopeTooltip),
                    o = E(M, t.__scopeTooltip),
                    a = (0, i.useRef)(null),
                    u = (0, s.e)(e, a),
                    [l, c] = (0, i.useState)(null),
                    {
                        trigger: f,
                        onClose: h
                    } = r,
                    d = a.current,
                    {
                        onPointerInTransitChange: p
                    } = o,
                    m = (0, i.useCallback)(() => {
                        c(null), p(!1)
                    }, [p]),
                    y = (0, i.useCallback)((t, e) => {
                        let r = t.currentTarget,
                            n = {
                                x: t.clientX,
                                y: t.clientY
                            },
                            i = function(t, e) {
                                let r = Math.abs(e.top - t.y),
                                    n = Math.abs(e.bottom - t.y),
                                    i = Math.abs(e.right - t.x),
                                    o = Math.abs(e.left - t.x);
                                switch (Math.min(r, n, i, o)) {
                                    case o:
                                        return "left";
                                    case i:
                                        return "right";
                                    case r:
                                        return "top";
                                    case n:
                                        return "bottom";
                                    default:
                                        throw Error("unreachable")
                                }
                            }(n, r.getBoundingClientRect()),
                            o = function(t, e, r = 5) {
                                let n = [];
                                switch (e) {
                                    case "top":
                                        n.push({
                                            x: t.x - r,
                                            y: t.y + r
                                        }, {
                                            x: t.x + r,
                                            y: t.y + r
                                        });
                                        break;
                                    case "bottom":
                                        n.push({
                                            x: t.x - r,
                                            y: t.y - r
                                        }, {
                                            x: t.x + r,
                                            y: t.y - r
                                        });
                                        break;
                                    case "left":
                                        n.push({
                                            x: t.x + r,
                                            y: t.y - r
                                        }, {
                                            x: t.x + r,
                                            y: t.y + r
                                        });
                                        break;
                                    case "right":
                                        n.push({
                                            x: t.x - r,
                                            y: t.y - r
                                        }, {
                                            x: t.x - r,
                                            y: t.y + r
                                        })
                                }
                                return n
                            }(n, i),
                            s = function(t) {
                                let {
                                    top: e,
                                    right: r,
                                    bottom: n,
                                    left: i
                                } = t;
                                return [{
                                    x: i,
                                    y: e
                                }, {
                                    x: r,
                                    y: e
                                }, {
                                    x: r,
                                    y: n
                                }, {
                                    x: i,
                                    y: n
                                }]
                            }(e.getBoundingClientRect()),
                            a = function(t) {
                                let e = t.slice();
                                return e.sort((t, e) => t.x < e.x ? -1 : t.x > e.x ? 1 : t.y < e.y ? -1 : t.y > e.y ? 1 : 0),
                                    function(t) {
                                        if (t.length <= 1) return t.slice();
                                        let e = [];
                                        for (let r = 0; r < t.length; r++) {
                                            let n = t[r];
                                            for (; e.length >= 2;) {
                                                let t = e[e.length - 1],
                                                    r = e[e.length - 2];
                                                if ((t.x - r.x) * (n.y - r.y) >= (t.y - r.y) * (n.x - r.x)) e.pop();
                                                else break
                                            }
                                            e.push(n)
                                        }
                                        e.pop();
                                        let r = [];
                                        for (let e = t.length - 1; e >= 0; e--) {
                                            let n = t[e];
                                            for (; r.length >= 2;) {
                                                let t = r[r.length - 1],
                                                    e = r[r.length - 2];
                                                if ((t.x - e.x) * (n.y - e.y) >= (t.y - e.y) * (n.x - e.x)) r.pop();
                                                else break
                                            }
                                            r.push(n)
                                        }
                                        return (r.pop(), 1 === e.length && 1 === r.length && e[0].x === r[0].x && e[0].y === r[0].y) ? e : e.concat(r)
                                    }(e)
                            }([...o, ...s]);
                        c(a), p(!0)
                    }, [p]);
                return (0, i.useEffect)(() => () => m(), [m]), (0, i.useEffect)(() => {
                    if (f && d) {
                        let t = t => y(t, d),
                            e = t => y(t, f);
                        return f.addEventListener("pointerleave", t), d.addEventListener("pointerleave", e), () => {
                            f.removeEventListener("pointerleave", t), d.removeEventListener("pointerleave", e)
                        }
                    }
                }, [f, d, y, m]), (0, i.useEffect)(() => {
                    if (l) {
                        let t = t => {
                            let e = t.target,
                                r = {
                                    x: t.clientX,
                                    y: t.clientY
                                },
                                n = (null == f ? void 0 : f.contains(e)) || (null == d ? void 0 : d.contains(e)),
                                i = ! function(t, e) {
                                    let {
                                        x: r,
                                        y: n
                                    } = t, i = !1;
                                    for (let t = 0, o = e.length - 1; t < e.length; o = t++) {
                                        let s = e[t].x,
                                            a = e[t].y,
                                            u = e[o].x,
                                            l = e[o].y,
                                            c = a > n != l > n && r < (u - s) * (n - a) / (l - a) + s;
                                        c && (i = !i)
                                    }
                                    return i
                                }(r, l);
                            n ? m() : i && (m(), h())
                        };
                        return document.addEventListener("pointermove", t), () => document.removeEventListener("pointermove", t)
                    }
                }, [f, d, l, h, m]), (0, i.createElement)(F, (0, n.Z)({}, t, {
                    ref: u
                }))
            }), [_, U] = v(P, {
                isInside: !1
            }), F = (0, i.forwardRef)((t, e) => {
                let {
                    __scopeTooltip: r,
                    children: o,
                    "aria-label": s,
                    onEscapeKeyDown: a,
                    onPointerDownOutside: l,
                    ...f
                } = t, h = A(M, r), d = b(r), {
                    onClose: m
                } = h;
                return (0, i.useEffect)(() => (document.addEventListener(w, m), () => document.removeEventListener(w, m)), [m]), (0, i.useEffect)(() => {
                    if (h.trigger) {
                        let t = t => {
                            let e = t.target;
                            null != e && e.contains(h.trigger) && m()
                        };
                        return window.addEventListener("scroll", t, {
                            capture: !0
                        }), () => window.removeEventListener("scroll", t, {
                            capture: !0
                        })
                    }
                }, [h.trigger, m]), (0, i.createElement)(u.XB, {
                    asChild: !0,
                    disableOutsidePointerEvents: !1,
                    onEscapeKeyDown: a,
                    onPointerDownOutside: l,
                    onFocusOutside: t => t.preventDefault(),
                    onDismiss: m
                }, (0, i.createElement)(c.VY, (0, n.Z)({
                    "data-state": h.stateAttribute
                }, d, f, {
                    ref: e,
                    style: { ...f.style,
                        "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                        "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                        "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                        "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                        "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
                    }
                }), (0, i.createElement)(p.A4, null, o), (0, i.createElement)(_, {
                    scope: r,
                    isInside: !0
                }, (0, i.createElement)(y.f, {
                    id: h.contentId,
                    role: "tooltip"
                }, s || o))))
            }), I = (0, i.forwardRef)((t, e) => {
                let {
                    __scopeTooltip: r,
                    ...o
                } = t, s = b(r), a = U("TooltipArrow", r);
                return a.isInside ? null : (0, i.createElement)(c.Eh, (0, n.Z)({}, s, o, {
                    ref: e
                }))
            }), V = t => {
                let {
                    __scopeTooltip: e,
                    children: r,
                    open: n,
                    defaultOpen: o = !1,
                    onOpenChange: s,
                    disableHoverableContent: a,
                    delayDuration: u
                } = t, f = E(P, t.__scopeTooltip), h = b(e), [d, p] = (0, i.useState)(null), y = (0, l.M)(), v = (0, i.useRef)(0), g = null != a ? a : f.disableHoverableContent, x = null != u ? u : f.delayDuration, S = (0, i.useRef)(!1), [A = !1, C] = (0, m.T)({
                    prop: n,
                    defaultProp: o,
                    onChange: t => {
                        t ? (f.onOpen(), document.dispatchEvent(new CustomEvent(w))) : f.onClose(), null == s || s(t)
                    }
                }), R = (0, i.useMemo)(() => A ? S.current ? "delayed-open" : "instant-open" : "closed", [A]), T = (0, i.useCallback)(() => {
                    window.clearTimeout(v.current), S.current = !1, C(!0)
                }, [C]), k = (0, i.useCallback)(() => {
                    window.clearTimeout(v.current), C(!1)
                }, [C]), L = (0, i.useCallback)(() => {
                    window.clearTimeout(v.current), v.current = window.setTimeout(() => {
                        S.current = !0, C(!0)
                    }, x)
                }, [x, C]);
                return (0, i.useEffect)(() => () => window.clearTimeout(v.current), []), (0, i.createElement)(c.fC, h, (0, i.createElement)(O, {
                    scope: e,
                    contentId: y,
                    open: A,
                    stateAttribute: R,
                    trigger: d,
                    onTriggerChange: p,
                    onTriggerEnter: (0, i.useCallback)(() => {
                        f.isOpenDelayed ? L() : T()
                    }, [f.isOpenDelayed, L, T]),
                    onTriggerLeave: (0, i.useCallback)(() => {
                        g ? k() : window.clearTimeout(v.current)
                    }, [k, g]),
                    onOpen: T,
                    onClose: k,
                    disableHoverableContent: g
                }, r))
            }, B = R, N = t => {
                let {
                    __scopeTooltip: e,
                    forceMount: r,
                    children: n,
                    container: o
                } = t, s = A(T, e);
                return (0, i.createElement)(k, {
                    scope: e,
                    forceMount: r
                }, (0, i.createElement)(h.z, {
                    present: r || s.open
                }, (0, i.createElement)(f.h, {
                    asChild: !0,
                    container: o
                }, n)))
            }, q = D, W = I
        },
        6459: function(t, e, r) {
            "use strict";
            r.d(e, {
                W: function() {
                    return i
                }
            });
            var n = r(2265);

            function i(t) {
                let e = (0, n.useRef)(t);
                return (0, n.useEffect)(() => {
                    e.current = t
                }), (0, n.useMemo)(() => (...t) => {
                    var r;
                    return null === (r = e.current) || void 0 === r ? void 0 : r.call(e, ...t)
                }, [])
            }
        },
        3763: function(t, e, r) {
            "use strict";
            r.d(e, {
                T: function() {
                    return o
                }
            });
            var n = r(2265),
                i = r(6459);

            function o({
                prop: t,
                defaultProp: e,
                onChange: r = () => {}
            }) {
                let [o, s] = function({
                    defaultProp: t,
                    onChange: e
                }) {
                    let r = (0, n.useState)(t),
                        [o] = r,
                        s = (0, n.useRef)(o),
                        a = (0, i.W)(e);
                    return (0, n.useEffect)(() => {
                        s.current !== o && (a(o), s.current = o)
                    }, [o, s, a]), r
                }({
                    defaultProp: e,
                    onChange: r
                }), a = void 0 !== t, u = a ? t : o, l = (0, i.W)(r), c = (0, n.useCallback)(e => {
                    if (a) {
                        let r = "function" == typeof e ? e(t) : e;
                        r !== t && l(r)
                    } else s(e)
                }, [a, t, s, l]);
                return [u, c]
            }
        },
        1030: function(t, e, r) {
            "use strict";
            r.d(e, {
                b: function() {
                    return i
                }
            });
            var n = r(2265);
            let i = (null == globalThis ? void 0 : globalThis.document) ? n.useLayoutEffect : () => {}
        },
        5184: function(t, e, r) {
            "use strict";
            r.d(e, {
                D: function() {
                    return i
                }
            });
            var n = r(2265);

            function i(t) {
                let e = (0, n.useRef)({
                    value: t,
                    previous: t
                });
                return (0, n.useMemo)(() => (e.current.value !== t && (e.current.previous = e.current.value, e.current.value = t), e.current.previous), [t])
            }
        },
        4977: function(t, e, r) {
            "use strict";
            r.d(e, {
                t: function() {
                    return o
                }
            });
            var n = r(2265),
                i = r(1030);

            function o(t) {
                let [e, r] = (0, n.useState)(void 0);
                return (0, i.b)(() => {
                    if (t) {
                        r({
                            width: t.offsetWidth,
                            height: t.offsetHeight
                        });
                        let e = new ResizeObserver(e => {
                            let n, i;
                            if (!Array.isArray(e) || !e.length) return;
                            let o = e[0];
                            if ("borderBoxSize" in o) {
                                let t = o.borderBoxSize,
                                    e = Array.isArray(t) ? t[0] : t;
                                n = e.inlineSize, i = e.blockSize
                            } else n = t.offsetWidth, i = t.offsetHeight;
                            r({
                                width: n,
                                height: i
                            })
                        });
                        return e.observe(t, {
                            box: "border-box"
                        }), () => e.unobserve(t)
                    }
                    r(void 0)
                }, [t]), e
            }
        },
        8281: function(t, e, r) {
            "use strict";
            r.d(e, {
                T: function() {
                    return s
                },
                f: function() {
                    return a
                }
            });
            var n = r(3428),
                i = r(2265),
                o = r(9381);
            let s = (0, i.forwardRef)((t, e) => (0, i.createElement)(o.WV.span, (0, n.Z)({}, t, {
                    ref: e,
                    style: {
                        position: "absolute",
                        border: 0,
                        width: 1,
                        height: 1,
                        padding: 0,
                        margin: -1,
                        overflow: "hidden",
                        clip: "rect(0, 0, 0, 0)",
                        whiteSpace: "nowrap",
                        wordWrap: "normal",
                        ...t.style
                    }
                }))),
                a = s
        },
        8202: function(t, e, r) {
            "use strict";
            r.d(e, {
                j: function() {
                    return s
                }
            });
            var n = r(9492),
                i = r(6504);
            class o extends n.l {
                constructor() {
                    super(), this.setup = t => {
                        if (!i.sk && window.addEventListener) {
                            let e = () => t();
                            return window.addEventListener("visibilitychange", e, !1), window.addEventListener("focus", e, !1), () => {
                                window.removeEventListener("visibilitychange", e), window.removeEventListener("focus", e)
                            }
                        }
                    }
                }
                onSubscribe() {
                    this.cleanup || this.setEventListener(this.setup)
                }
                onUnsubscribe() {
                    if (!this.hasListeners()) {
                        var t;
                        null == (t = this.cleanup) || t.call(this), this.cleanup = void 0
                    }
                }
                setEventListener(t) {
                    var e;
                    this.setup = t, null == (e = this.cleanup) || e.call(this), this.cleanup = t(t => {
                        "boolean" == typeof t ? this.setFocused(t) : this.onFocus()
                    })
                }
                setFocused(t) {
                    let e = this.focused !== t;
                    e && (this.focused = t, this.onFocus())
                }
                onFocus() {
                    this.listeners.forEach(({
                        listener: t
                    }) => {
                        t()
                    })
                }
                isFocused() {
                    return "boolean" == typeof this.focused ? this.focused : "undefined" == typeof document || [void 0, "visible", "prerender"].includes(document.visibilityState)
                }
            }
            let s = new o
        },
        7262: function(t, e, r) {
            "use strict";

            function n() {
                return {
                    onFetch: t => {
                        t.fetchFn = () => {
                            var e, r, n, s, a, u;
                            let l;
                            let c = null == (e = t.fetchOptions) ? void 0 : null == (r = e.meta) ? void 0 : r.refetchPage,
                                f = null == (n = t.fetchOptions) ? void 0 : null == (s = n.meta) ? void 0 : s.fetchMore,
                                h = null == f ? void 0 : f.pageParam,
                                d = (null == f ? void 0 : f.direction) === "forward",
                                p = (null == f ? void 0 : f.direction) === "backward",
                                m = (null == (a = t.state.data) ? void 0 : a.pages) || [],
                                y = (null == (u = t.state.data) ? void 0 : u.pageParams) || [],
                                v = y,
                                g = !1,
                                b = e => {
                                    Object.defineProperty(e, "signal", {
                                        enumerable: !0,
                                        get: () => {
                                            var e, r;
                                            return null != (e = t.signal) && e.aborted ? g = !0 : null == (r = t.signal) || r.addEventListener("abort", () => {
                                                g = !0
                                            }), t.signal
                                        }
                                    })
                                },
                                w = t.options.queryFn || (() => Promise.reject("Missing queryFn for queryKey '" + t.options.queryHash + "'")),
                                x = (t, e, r, n) => (v = n ? [e, ...v] : [...v, e], n ? [r, ...t] : [...t, r]),
                                E = (e, r, n, i) => {
                                    if (g) return Promise.reject("Cancelled");
                                    if (void 0 === n && !r && e.length) return Promise.resolve(e);
                                    let o = {
                                        queryKey: t.queryKey,
                                        pageParam: n,
                                        meta: t.options.meta
                                    };
                                    b(o);
                                    let s = w(o),
                                        a = Promise.resolve(s).then(t => x(e, n, t, i));
                                    return a
                                };
                            if (m.length) {
                                if (d) {
                                    let e = void 0 !== h,
                                        r = e ? h : i(t.options, m);
                                    l = E(m, e, r)
                                } else if (p) {
                                    let e = void 0 !== h,
                                        r = e ? h : o(t.options, m);
                                    l = E(m, e, r, !0)
                                } else {
                                    v = [];
                                    let e = void 0 === t.options.getNextPageParam,
                                        r = !c || !m[0] || c(m[0], 0, m);
                                    l = r ? E([], e, y[0]) : Promise.resolve(x([], y[0], m[0]));
                                    for (let r = 1; r < m.length; r++) l = l.then(n => {
                                        let o = !c || !m[r] || c(m[r], r, m);
                                        if (o) {
                                            let o = e ? y[r] : i(t.options, n);
                                            return E(n, e, o)
                                        }
                                        return Promise.resolve(x(n, y[r], m[r]))
                                    })
                                }
                            } else l = E([]);
                            let S = l.then(t => ({
                                pages: t,
                                pageParams: v
                            }));
                            return S
                        }
                    }
                }
            }

            function i(t, e) {
                return null == t.getNextPageParam ? void 0 : t.getNextPageParam(e[e.length - 1], e)
            }

            function o(t, e) {
                return null == t.getPreviousPageParam ? void 0 : t.getPreviousPageParam(e[0], e)
            }

            function s(t, e) {
                if (t.getNextPageParam && Array.isArray(e)) {
                    let r = i(t, e);
                    return null != r && !1 !== r
                }
            }

            function a(t, e) {
                if (t.getPreviousPageParam && Array.isArray(e)) {
                    let r = o(t, e);
                    return null != r && !1 !== r
                }
            }
            r.d(e, {
                Gm: function() {
                    return n
                },
                Qy: function() {
                    return s
                },
                ZF: function() {
                    return a
                }
            })
        },
        8810: function(t, e, r) {
            "use strict";
            r.d(e, {
                _: function() {
                    return n
                }
            });
            let n = console
        },
        172: function(t, e, r) {
            "use strict";
            r.d(e, {
                R: function() {
                    return u
                },
                m: function() {
                    return a
                }
            });
            var n = r(8810),
                i = r(7156),
                o = r(1909),
                s = r(3238);
            class a extends o.F {
                constructor(t) {
                    super(), this.defaultOptions = t.defaultOptions, this.mutationId = t.mutationId, this.mutationCache = t.mutationCache, this.logger = t.logger || n._, this.observers = [], this.state = t.state || u(), this.setOptions(t.options), this.scheduleGc()
                }
                setOptions(t) {
                    this.options = { ...this.defaultOptions,
                        ...t
                    }, this.updateCacheTime(this.options.cacheTime)
                }
                get meta() {
                    return this.options.meta
                }
                setState(t) {
                    this.dispatch({
                        type: "setState",
                        state: t
                    })
                }
                addObserver(t) {
                    this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), this.mutationCache.notify({
                        type: "observerAdded",
                        mutation: this,
                        observer: t
                    }))
                }
                removeObserver(t) {
                    this.observers = this.observers.filter(e => e !== t), this.scheduleGc(), this.mutationCache.notify({
                        type: "observerRemoved",
                        mutation: this,
                        observer: t
                    })
                }
                optionalRemove() {
                    this.observers.length || ("loading" === this.state.status ? this.scheduleGc() : this.mutationCache.remove(this))
                }
                continue () {
                    var t, e;
                    return null != (t = null == (e = this.retryer) ? void 0 : e.continue()) ? t : this.execute()
                }
                async execute() {
                    var t, e, r, n, i, o, a, u, l, c, f, h, d, p, m, y, v, g, b, w;
                    let x = "loading" === this.state.status;
                    try {
                        if (!x) {
                            this.dispatch({
                                type: "loading",
                                variables: this.options.variables
                            }), await (null == (l = (c = this.mutationCache.config).onMutate) ? void 0 : l.call(c, this.state.variables, this));
                            let t = await (null == (f = (h = this.options).onMutate) ? void 0 : f.call(h, this.state.variables));
                            t !== this.state.context && this.dispatch({
                                type: "loading",
                                context: t,
                                variables: this.state.variables
                            })
                        }
                        let d = await (() => {
                            var t;
                            return this.retryer = (0, s.Mz)({
                                fn: () => this.options.mutationFn ? this.options.mutationFn(this.state.variables) : Promise.reject("No mutationFn found"),
                                onFail: (t, e) => {
                                    this.dispatch({
                                        type: "failed",
                                        failureCount: t,
                                        error: e
                                    })
                                },
                                onPause: () => {
                                    this.dispatch({
                                        type: "pause"
                                    })
                                },
                                onContinue: () => {
                                    this.dispatch({
                                        type: "continue"
                                    })
                                },
                                retry: null != (t = this.options.retry) ? t : 0,
                                retryDelay: this.options.retryDelay,
                                networkMode: this.options.networkMode
                            }), this.retryer.promise
                        })();
                        return await (null == (t = (e = this.mutationCache.config).onSuccess) ? void 0 : t.call(e, d, this.state.variables, this.state.context, this)), await (null == (r = (n = this.options).onSuccess) ? void 0 : r.call(n, d, this.state.variables, this.state.context)), await (null == (i = (o = this.mutationCache.config).onSettled) ? void 0 : i.call(o, d, null, this.state.variables, this.state.context, this)), await (null == (a = (u = this.options).onSettled) ? void 0 : a.call(u, d, null, this.state.variables, this.state.context)), this.dispatch({
                            type: "success",
                            data: d
                        }), d
                    } catch (t) {
                        try {
                            throw await (null == (d = (p = this.mutationCache.config).onError) ? void 0 : d.call(p, t, this.state.variables, this.state.context, this)), await (null == (m = (y = this.options).onError) ? void 0 : m.call(y, t, this.state.variables, this.state.context)), await (null == (v = (g = this.mutationCache.config).onSettled) ? void 0 : v.call(g, void 0, t, this.state.variables, this.state.context, this)), await (null == (b = (w = this.options).onSettled) ? void 0 : b.call(w, void 0, t, this.state.variables, this.state.context)), t
                        } finally {
                            this.dispatch({
                                type: "error",
                                error: t
                            })
                        }
                    }
                }
                dispatch(t) {
                    this.state = (e => {
                        switch (t.type) {
                            case "failed":
                                return { ...e,
                                    failureCount: t.failureCount,
                                    failureReason: t.error
                                };
                            case "pause":
                                return { ...e,
                                    isPaused: !0
                                };
                            case "continue":
                                return { ...e,
                                    isPaused: !1
                                };
                            case "loading":
                                return { ...e,
                                    context: t.context,
                                    data: void 0,
                                    failureCount: 0,
                                    failureReason: null,
                                    error: null,
                                    isPaused: !(0, s.Kw)(this.options.networkMode),
                                    status: "loading",
                                    variables: t.variables
                                };
                            case "success":
                                return { ...e,
                                    data: t.data,
                                    failureCount: 0,
                                    failureReason: null,
                                    error: null,
                                    status: "success",
                                    isPaused: !1
                                };
                            case "error":
                                return { ...e,
                                    data: void 0,
                                    error: t.error,
                                    failureCount: e.failureCount + 1,
                                    failureReason: t.error,
                                    isPaused: !1,
                                    status: "error"
                                };
                            case "setState":
                                return { ...e,
                                    ...t.state
                                }
                        }
                    })(this.state), i.V.batch(() => {
                        this.observers.forEach(e => {
                            e.onMutationUpdate(t)
                        }), this.mutationCache.notify({
                            mutation: this,
                            type: "updated",
                            action: t
                        })
                    })
                }
            }

            function u() {
                return {
                    context: void 0,
                    data: void 0,
                    error: null,
                    failureCount: 0,
                    failureReason: null,
                    isPaused: !1,
                    status: "idle",
                    variables: void 0
                }
            }
        },
        7156: function(t, e, r) {
            "use strict";
            r.d(e, {
                V: function() {
                    return i
                }
            });
            var n = r(6504);
            let i = function() {
                let t = [],
                    e = 0,
                    r = t => {
                        t()
                    },
                    i = t => {
                        t()
                    },
                    o = i => {
                        e ? t.push(i) : (0, n.A4)(() => {
                            r(i)
                        })
                    },
                    s = () => {
                        let e = t;
                        t = [], e.length && (0, n.A4)(() => {
                            i(() => {
                                e.forEach(t => {
                                    r(t)
                                })
                            })
                        })
                    };
                return {
                    batch: t => {
                        let r;
                        e++;
                        try {
                            r = t()
                        } finally {
                            --e || s()
                        }
                        return r
                    },
                    batchCalls: t => (...e) => {
                        o(() => {
                            t(...e)
                        })
                    },
                    schedule: o,
                    setNotifyFunction: t => {
                        r = t
                    },
                    setBatchNotifyFunction: t => {
                        i = t
                    }
                }
            }()
        },
        3864: function(t, e, r) {
            "use strict";
            r.d(e, {
                N: function() {
                    return a
                }
            });
            var n = r(9492),
                i = r(6504);
            let o = ["online", "offline"];
            class s extends n.l {
                constructor() {
                    super(), this.setup = t => {
                        if (!i.sk && window.addEventListener) {
                            let e = () => t();
                            return o.forEach(t => {
                                window.addEventListener(t, e, !1)
                            }), () => {
                                o.forEach(t => {
                                    window.removeEventListener(t, e)
                                })
                            }
                        }
                    }
                }
                onSubscribe() {
                    this.cleanup || this.setEventListener(this.setup)
                }
                onUnsubscribe() {
                    if (!this.hasListeners()) {
                        var t;
                        null == (t = this.cleanup) || t.call(this), this.cleanup = void 0
                    }
                }
                setEventListener(t) {
                    var e;
                    this.setup = t, null == (e = this.cleanup) || e.call(this), this.cleanup = t(t => {
                        "boolean" == typeof t ? this.setOnline(t) : this.onOnline()
                    })
                }
                setOnline(t) {
                    let e = this.online !== t;
                    e && (this.online = t, this.onOnline())
                }
                onOnline() {
                    this.listeners.forEach(({
                        listener: t
                    }) => {
                        t()
                    })
                }
                isOnline() {
                    return "boolean" == typeof this.online ? this.online : "undefined" == typeof navigator || void 0 === navigator.onLine || navigator.onLine
                }
            }
            let a = new s
        },
        938: function(t, e, r) {
            "use strict";
            r.d(e, {
                S: function() {
                    return y
                }
            });
            var n = r(6504),
                i = r(8810),
                o = r(7156),
                s = r(3238),
                a = r(1909);
            class u extends a.F {
                constructor(t) {
                    super(), this.abortSignalConsumed = !1, this.defaultOptions = t.defaultOptions, this.setOptions(t.options), this.observers = [], this.cache = t.cache, this.logger = t.logger || i._, this.queryKey = t.queryKey, this.queryHash = t.queryHash, this.initialState = t.state || function(t) {
                        let e = "function" == typeof t.initialData ? t.initialData() : t.initialData,
                            r = void 0 !== e,
                            n = r ? "function" == typeof t.initialDataUpdatedAt ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt : 0;
                        return {
                            data: e,
                            dataUpdateCount: 0,
                            dataUpdatedAt: r ? null != n ? n : Date.now() : 0,
                            error: null,
                            errorUpdateCount: 0,
                            errorUpdatedAt: 0,
                            fetchFailureCount: 0,
                            fetchFailureReason: null,
                            fetchMeta: null,
                            isInvalidated: !1,
                            status: r ? "success" : "loading",
                            fetchStatus: "idle"
                        }
                    }(this.options), this.state = this.initialState, this.scheduleGc()
                }
                get meta() {
                    return this.options.meta
                }
                setOptions(t) {
                    this.options = { ...this.defaultOptions,
                        ...t
                    }, this.updateCacheTime(this.options.cacheTime)
                }
                optionalRemove() {
                    this.observers.length || "idle" !== this.state.fetchStatus || this.cache.remove(this)
                }
                setData(t, e) {
                    let r = (0, n.oE)(this.state.data, t, this.options);
                    return this.dispatch({
                        data: r,
                        type: "success",
                        dataUpdatedAt: null == e ? void 0 : e.updatedAt,
                        manual: null == e ? void 0 : e.manual
                    }), r
                }
                setState(t, e) {
                    this.dispatch({
                        type: "setState",
                        state: t,
                        setStateOptions: e
                    })
                }
                cancel(t) {
                    var e;
                    let r = this.promise;
                    return null == (e = this.retryer) || e.cancel(t), r ? r.then(n.ZT).catch(n.ZT) : Promise.resolve()
                }
                destroy() {
                    super.destroy(), this.cancel({
                        silent: !0
                    })
                }
                reset() {
                    this.destroy(), this.setState(this.initialState)
                }
                isActive() {
                    return this.observers.some(t => !1 !== t.options.enabled)
                }
                isDisabled() {
                    return this.getObserversCount() > 0 && !this.isActive()
                }
                isStale() {
                    return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some(t => t.getCurrentResult().isStale)
                }
                isStaleByTime(t = 0) {
                    return this.state.isInvalidated || !this.state.dataUpdatedAt || !(0, n.Kp)(this.state.dataUpdatedAt, t)
                }
                onFocus() {
                    var t;
                    let e = this.observers.find(t => t.shouldFetchOnWindowFocus());
                    e && e.refetch({
                        cancelRefetch: !1
                    }), null == (t = this.retryer) || t.continue()
                }
                onOnline() {
                    var t;
                    let e = this.observers.find(t => t.shouldFetchOnReconnect());
                    e && e.refetch({
                        cancelRefetch: !1
                    }), null == (t = this.retryer) || t.continue()
                }
                addObserver(t) {
                    this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), this.cache.notify({
                        type: "observerAdded",
                        query: this,
                        observer: t
                    }))
                }
                removeObserver(t) {
                    this.observers.includes(t) && (this.observers = this.observers.filter(e => e !== t), this.observers.length || (this.retryer && (this.abortSignalConsumed ? this.retryer.cancel({
                        revert: !0
                    }) : this.retryer.cancelRetry()), this.scheduleGc()), this.cache.notify({
                        type: "observerRemoved",
                        query: this,
                        observer: t
                    }))
                }
                getObserversCount() {
                    return this.observers.length
                }
                invalidate() {
                    this.state.isInvalidated || this.dispatch({
                        type: "invalidate"
                    })
                }
                fetch(t, e) {
                    var r, i, o, a;
                    if ("idle" !== this.state.fetchStatus) {
                        if (this.state.dataUpdatedAt && null != e && e.cancelRefetch) this.cancel({
                            silent: !0
                        });
                        else if (this.promise) return null == (o = this.retryer) || o.continueRetry(), this.promise
                    }
                    if (t && this.setOptions(t), !this.options.queryFn) {
                        let t = this.observers.find(t => t.options.queryFn);
                        t && this.setOptions(t.options)
                    }
                    Array.isArray(this.options.queryKey);
                    let u = (0, n.G9)(),
                        l = {
                            queryKey: this.queryKey,
                            pageParam: void 0,
                            meta: this.meta
                        },
                        c = t => {
                            Object.defineProperty(t, "signal", {
                                enumerable: !0,
                                get: () => {
                                    if (u) return this.abortSignalConsumed = !0, u.signal
                                }
                            })
                        };
                    c(l);
                    let f = {
                        fetchOptions: e,
                        options: this.options,
                        queryKey: this.queryKey,
                        state: this.state,
                        fetchFn: () => this.options.queryFn ? (this.abortSignalConsumed = !1, this.options.queryFn(l)) : Promise.reject("Missing queryFn for queryKey '" + this.options.queryHash + "'")
                    };
                    c(f), null == (r = this.options.behavior) || r.onFetch(f), this.revertState = this.state, ("idle" === this.state.fetchStatus || this.state.fetchMeta !== (null == (i = f.fetchOptions) ? void 0 : i.meta)) && this.dispatch({
                        type: "fetch",
                        meta: null == (a = f.fetchOptions) ? void 0 : a.meta
                    });
                    let h = t => {
                        if ((0, s.DV)(t) && t.silent || this.dispatch({
                                type: "error",
                                error: t
                            }), !(0, s.DV)(t)) {
                            var e, r, n, i;
                            null == (e = (r = this.cache.config).onError) || e.call(r, t, this), null == (n = (i = this.cache.config).onSettled) || n.call(i, this.state.data, t, this)
                        }
                        this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1
                    };
                    return this.retryer = (0, s.Mz)({
                        fn: f.fetchFn,
                        abort: null == u ? void 0 : u.abort.bind(u),
                        onSuccess: t => {
                            var e, r, n, i;
                            if (void 0 === t) {
                                h(Error(this.queryHash + " data is undefined"));
                                return
                            }
                            this.setData(t), null == (e = (r = this.cache.config).onSuccess) || e.call(r, t, this), null == (n = (i = this.cache.config).onSettled) || n.call(i, t, this.state.error, this), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1
                        },
                        onError: h,
                        onFail: (t, e) => {
                            this.dispatch({
                                type: "failed",
                                failureCount: t,
                                error: e
                            })
                        },
                        onPause: () => {
                            this.dispatch({
                                type: "pause"
                            })
                        },
                        onContinue: () => {
                            this.dispatch({
                                type: "continue"
                            })
                        },
                        retry: f.options.retry,
                        retryDelay: f.options.retryDelay,
                        networkMode: f.options.networkMode
                    }), this.promise = this.retryer.promise, this.promise
                }
                dispatch(t) {
                    this.state = (e => {
                        var r, n;
                        switch (t.type) {
                            case "failed":
                                return { ...e,
                                    fetchFailureCount: t.failureCount,
                                    fetchFailureReason: t.error
                                };
                            case "pause":
                                return { ...e,
                                    fetchStatus: "paused"
                                };
                            case "continue":
                                return { ...e,
                                    fetchStatus: "fetching"
                                };
                            case "fetch":
                                return { ...e,
                                    fetchFailureCount: 0,
                                    fetchFailureReason: null,
                                    fetchMeta: null != (r = t.meta) ? r : null,
                                    fetchStatus: (0, s.Kw)(this.options.networkMode) ? "fetching" : "paused",
                                    ...!e.dataUpdatedAt && {
                                        error: null,
                                        status: "loading"
                                    }
                                };
                            case "success":
                                return { ...e,
                                    data: t.data,
                                    dataUpdateCount: e.dataUpdateCount + 1,
                                    dataUpdatedAt: null != (n = t.dataUpdatedAt) ? n : Date.now(),
                                    error: null,
                                    isInvalidated: !1,
                                    status: "success",
                                    ...!t.manual && {
                                        fetchStatus: "idle",
                                        fetchFailureCount: 0,
                                        fetchFailureReason: null
                                    }
                                };
                            case "error":
                                let i = t.error;
                                if ((0, s.DV)(i) && i.revert && this.revertState) return { ...this.revertState
                                };
                                return { ...e,
                                    error: i,
                                    errorUpdateCount: e.errorUpdateCount + 1,
                                    errorUpdatedAt: Date.now(),
                                    fetchFailureCount: e.fetchFailureCount + 1,
                                    fetchFailureReason: i,
                                    fetchStatus: "idle",
                                    status: "error"
                                };
                            case "invalidate":
                                return { ...e,
                                    isInvalidated: !0
                                };
                            case "setState":
                                return { ...e,
                                    ...t.state
                                }
                        }
                    })(this.state), o.V.batch(() => {
                        this.observers.forEach(e => {
                            e.onQueryUpdate(t)
                        }), this.cache.notify({
                            query: this,
                            type: "updated",
                            action: t
                        })
                    })
                }
            }
            var l = r(9492);
            class c extends l.l {
                constructor(t) {
                    super(), this.config = t || {}, this.queries = [], this.queriesMap = {}
                }
                build(t, e, r) {
                    var i;
                    let o = e.queryKey,
                        s = null != (i = e.queryHash) ? i : (0, n.Rm)(o, e),
                        a = this.get(s);
                    return a || (a = new u({
                        cache: this,
                        logger: t.getLogger(),
                        queryKey: o,
                        queryHash: s,
                        options: t.defaultQueryOptions(e),
                        state: r,
                        defaultOptions: t.getQueryDefaults(o)
                    }), this.add(a)), a
                }
                add(t) {
                    this.queriesMap[t.queryHash] || (this.queriesMap[t.queryHash] = t, this.queries.push(t), this.notify({
                        type: "added",
                        query: t
                    }))
                }
                remove(t) {
                    let e = this.queriesMap[t.queryHash];
                    e && (t.destroy(), this.queries = this.queries.filter(e => e !== t), e === t && delete this.queriesMap[t.queryHash], this.notify({
                        type: "removed",
                        query: t
                    }))
                }
                clear() {
                    o.V.batch(() => {
                        this.queries.forEach(t => {
                            this.remove(t)
                        })
                    })
                }
                get(t) {
                    return this.queriesMap[t]
                }
                getAll() {
                    return this.queries
                }
                find(t, e) {
                    let [r] = (0, n.I6)(t, e);
                    return void 0 === r.exact && (r.exact = !0), this.queries.find(t => (0, n._x)(r, t))
                }
                findAll(t, e) {
                    let [r] = (0, n.I6)(t, e);
                    return Object.keys(r).length > 0 ? this.queries.filter(t => (0, n._x)(r, t)) : this.queries
                }
                notify(t) {
                    o.V.batch(() => {
                        this.listeners.forEach(({
                            listener: e
                        }) => {
                            e(t)
                        })
                    })
                }
                onFocus() {
                    o.V.batch(() => {
                        this.queries.forEach(t => {
                            t.onFocus()
                        })
                    })
                }
                onOnline() {
                    o.V.batch(() => {
                        this.queries.forEach(t => {
                            t.onOnline()
                        })
                    })
                }
            }
            var f = r(172);
            class h extends l.l {
                constructor(t) {
                    super(), this.config = t || {}, this.mutations = [], this.mutationId = 0
                }
                build(t, e, r) {
                    let n = new f.m({
                        mutationCache: this,
                        logger: t.getLogger(),
                        mutationId: ++this.mutationId,
                        options: t.defaultMutationOptions(e),
                        state: r,
                        defaultOptions: e.mutationKey ? t.getMutationDefaults(e.mutationKey) : void 0
                    });
                    return this.add(n), n
                }
                add(t) {
                    this.mutations.push(t), this.notify({
                        type: "added",
                        mutation: t
                    })
                }
                remove(t) {
                    this.mutations = this.mutations.filter(e => e !== t), this.notify({
                        type: "removed",
                        mutation: t
                    })
                }
                clear() {
                    o.V.batch(() => {
                        this.mutations.forEach(t => {
                            this.remove(t)
                        })
                    })
                }
                getAll() {
                    return this.mutations
                }
                find(t) {
                    return void 0 === t.exact && (t.exact = !0), this.mutations.find(e => (0, n.X7)(t, e))
                }
                findAll(t) {
                    return this.mutations.filter(e => (0, n.X7)(t, e))
                }
                notify(t) {
                    o.V.batch(() => {
                        this.listeners.forEach(({
                            listener: e
                        }) => {
                            e(t)
                        })
                    })
                }
                resumePausedMutations() {
                    var t;
                    return this.resuming = (null != (t = this.resuming) ? t : Promise.resolve()).then(() => {
                        let t = this.mutations.filter(t => t.state.isPaused);
                        return o.V.batch(() => t.reduce((t, e) => t.then(() => e.continue().catch(n.ZT)), Promise.resolve()))
                    }).then(() => {
                        this.resuming = void 0
                    }), this.resuming
                }
            }
            var d = r(8202),
                p = r(3864),
                m = r(7262);
            class y {
                constructor(t = {}) {
                    this.queryCache = t.queryCache || new c, this.mutationCache = t.mutationCache || new h, this.logger = t.logger || i._, this.defaultOptions = t.defaultOptions || {}, this.queryDefaults = [], this.mutationDefaults = [], this.mountCount = 0
                }
                mount() {
                    this.mountCount++, 1 === this.mountCount && (this.unsubscribeFocus = d.j.subscribe(() => {
                        d.j.isFocused() && (this.resumePausedMutations(), this.queryCache.onFocus())
                    }), this.unsubscribeOnline = p.N.subscribe(() => {
                        p.N.isOnline() && (this.resumePausedMutations(), this.queryCache.onOnline())
                    }))
                }
                unmount() {
                    var t, e;
                    this.mountCount--, 0 === this.mountCount && (null == (t = this.unsubscribeFocus) || t.call(this), this.unsubscribeFocus = void 0, null == (e = this.unsubscribeOnline) || e.call(this), this.unsubscribeOnline = void 0)
                }
                isFetching(t, e) {
                    let [r] = (0, n.I6)(t, e);
                    return r.fetchStatus = "fetching", this.queryCache.findAll(r).length
                }
                isMutating(t) {
                    return this.mutationCache.findAll({ ...t,
                        fetching: !0
                    }).length
                }
                getQueryData(t, e) {
                    var r;
                    return null == (r = this.queryCache.find(t, e)) ? void 0 : r.state.data
                }
                ensureQueryData(t, e, r) {
                    let i = (0, n._v)(t, e, r),
                        o = this.getQueryData(i.queryKey);
                    return o ? Promise.resolve(o) : this.fetchQuery(i)
                }
                getQueriesData(t) {
                    return this.getQueryCache().findAll(t).map(({
                        queryKey: t,
                        state: e
                    }) => {
                        let r = e.data;
                        return [t, r]
                    })
                }
                setQueryData(t, e, r) {
                    let i = this.queryCache.find(t),
                        o = null == i ? void 0 : i.state.data,
                        s = (0, n.SE)(e, o);
                    if (void 0 === s) return;
                    let a = (0, n._v)(t),
                        u = this.defaultQueryOptions(a);
                    return this.queryCache.build(this, u).setData(s, { ...r,
                        manual: !0
                    })
                }
                setQueriesData(t, e, r) {
                    return o.V.batch(() => this.getQueryCache().findAll(t).map(({
                        queryKey: t
                    }) => [t, this.setQueryData(t, e, r)]))
                }
                getQueryState(t, e) {
                    var r;
                    return null == (r = this.queryCache.find(t, e)) ? void 0 : r.state
                }
                removeQueries(t, e) {
                    let [r] = (0, n.I6)(t, e), i = this.queryCache;
                    o.V.batch(() => {
                        i.findAll(r).forEach(t => {
                            i.remove(t)
                        })
                    })
                }
                resetQueries(t, e, r) {
                    let [i, s] = (0, n.I6)(t, e, r), a = this.queryCache, u = {
                        type: "active",
                        ...i
                    };
                    return o.V.batch(() => (a.findAll(i).forEach(t => {
                        t.reset()
                    }), this.refetchQueries(u, s)))
                }
                cancelQueries(t, e, r) {
                    let [i, s = {}] = (0, n.I6)(t, e, r);
                    void 0 === s.revert && (s.revert = !0);
                    let a = o.V.batch(() => this.queryCache.findAll(i).map(t => t.cancel(s)));
                    return Promise.all(a).then(n.ZT).catch(n.ZT)
                }
                invalidateQueries(t, e, r) {
                    let [i, s] = (0, n.I6)(t, e, r);
                    return o.V.batch(() => {
                        var t, e;
                        if (this.queryCache.findAll(i).forEach(t => {
                                t.invalidate()
                            }), "none" === i.refetchType) return Promise.resolve();
                        let r = { ...i,
                            type: null != (t = null != (e = i.refetchType) ? e : i.type) ? t : "active"
                        };
                        return this.refetchQueries(r, s)
                    })
                }
                refetchQueries(t, e, r) {
                    let [i, s] = (0, n.I6)(t, e, r), a = o.V.batch(() => this.queryCache.findAll(i).filter(t => !t.isDisabled()).map(t => {
                        var e;
                        return t.fetch(void 0, { ...s,
                            cancelRefetch: null == (e = null == s ? void 0 : s.cancelRefetch) || e,
                            meta: {
                                refetchPage: i.refetchPage
                            }
                        })
                    })), u = Promise.all(a).then(n.ZT);
                    return null != s && s.throwOnError || (u = u.catch(n.ZT)), u
                }
                fetchQuery(t, e, r) {
                    let i = (0, n._v)(t, e, r),
                        o = this.defaultQueryOptions(i);
                    void 0 === o.retry && (o.retry = !1);
                    let s = this.queryCache.build(this, o);
                    return s.isStaleByTime(o.staleTime) ? s.fetch(o) : Promise.resolve(s.state.data)
                }
                prefetchQuery(t, e, r) {
                    return this.fetchQuery(t, e, r).then(n.ZT).catch(n.ZT)
                }
                fetchInfiniteQuery(t, e, r) {
                    let i = (0, n._v)(t, e, r);
                    return i.behavior = (0, m.Gm)(), this.fetchQuery(i)
                }
                prefetchInfiniteQuery(t, e, r) {
                    return this.fetchInfiniteQuery(t, e, r).then(n.ZT).catch(n.ZT)
                }
                resumePausedMutations() {
                    return this.mutationCache.resumePausedMutations()
                }
                getQueryCache() {
                    return this.queryCache
                }
                getMutationCache() {
                    return this.mutationCache
                }
                getLogger() {
                    return this.logger
                }
                getDefaultOptions() {
                    return this.defaultOptions
                }
                setDefaultOptions(t) {
                    this.defaultOptions = t
                }
                setQueryDefaults(t, e) {
                    let r = this.queryDefaults.find(e => (0, n.yF)(t) === (0, n.yF)(e.queryKey));
                    r ? r.defaultOptions = e : this.queryDefaults.push({
                        queryKey: t,
                        defaultOptions: e
                    })
                }
                getQueryDefaults(t) {
                    if (!t) return;
                    let e = this.queryDefaults.find(e => (0, n.to)(t, e.queryKey));
                    return null == e ? void 0 : e.defaultOptions
                }
                setMutationDefaults(t, e) {
                    let r = this.mutationDefaults.find(e => (0, n.yF)(t) === (0, n.yF)(e.mutationKey));
                    r ? r.defaultOptions = e : this.mutationDefaults.push({
                        mutationKey: t,
                        defaultOptions: e
                    })
                }
                getMutationDefaults(t) {
                    if (!t) return;
                    let e = this.mutationDefaults.find(e => (0, n.to)(t, e.mutationKey));
                    return null == e ? void 0 : e.defaultOptions
                }
                defaultQueryOptions(t) {
                    if (null != t && t._defaulted) return t;
                    let e = { ...this.defaultOptions.queries,
                        ...this.getQueryDefaults(null == t ? void 0 : t.queryKey),
                        ...t,
                        _defaulted: !0
                    };
                    return !e.queryHash && e.queryKey && (e.queryHash = (0, n.Rm)(e.queryKey, e)), void 0 === e.refetchOnReconnect && (e.refetchOnReconnect = "always" !== e.networkMode), void 0 === e.useErrorBoundary && (e.useErrorBoundary = !!e.suspense), e
                }
                defaultMutationOptions(t) {
                    return null != t && t._defaulted ? t : { ...this.defaultOptions.mutations,
                        ...this.getMutationDefaults(null == t ? void 0 : t.mutationKey),
                        ...t,
                        _defaulted: !0
                    }
                }
                clear() {
                    this.queryCache.clear(), this.mutationCache.clear()
                }
            }
        },
        127: function(t, e, r) {
            "use strict";
            r.d(e, {
                z: function() {
                    return u
                }
            });
            var n = r(6504),
                i = r(7156),
                o = r(8202),
                s = r(9492),
                a = r(3238);
            class u extends s.l {
                constructor(t, e) {
                    super(), this.client = t, this.options = e, this.trackedProps = new Set, this.selectError = null, this.bindMethods(), this.setOptions(e)
                }
                bindMethods() {
                    this.remove = this.remove.bind(this), this.refetch = this.refetch.bind(this)
                }
                onSubscribe() {
                    1 === this.listeners.size && (this.currentQuery.addObserver(this), l(this.currentQuery, this.options) && this.executeFetch(), this.updateTimers())
                }
                onUnsubscribe() {
                    this.hasListeners() || this.destroy()
                }
                shouldFetchOnReconnect() {
                    return c(this.currentQuery, this.options, this.options.refetchOnReconnect)
                }
                shouldFetchOnWindowFocus() {
                    return c(this.currentQuery, this.options, this.options.refetchOnWindowFocus)
                }
                destroy() {
                    this.listeners = new Set, this.clearStaleTimeout(), this.clearRefetchInterval(), this.currentQuery.removeObserver(this)
                }
                setOptions(t, e) {
                    let r = this.options,
                        i = this.currentQuery;
                    if (this.options = this.client.defaultQueryOptions(t), (0, n.VS)(r, this.options) || this.client.getQueryCache().notify({
                            type: "observerOptionsUpdated",
                            query: this.currentQuery,
                            observer: this
                        }), void 0 !== this.options.enabled && "boolean" != typeof this.options.enabled) throw Error("Expected enabled to be a boolean");
                    this.options.queryKey || (this.options.queryKey = r.queryKey), this.updateQuery();
                    let o = this.hasListeners();
                    o && f(this.currentQuery, i, this.options, r) && this.executeFetch(), this.updateResult(e), o && (this.currentQuery !== i || this.options.enabled !== r.enabled || this.options.staleTime !== r.staleTime) && this.updateStaleTimeout();
                    let s = this.computeRefetchInterval();
                    o && (this.currentQuery !== i || this.options.enabled !== r.enabled || s !== this.currentRefetchInterval) && this.updateRefetchInterval(s)
                }
                getOptimisticResult(t) {
                    let e = this.client.getQueryCache().build(this.client, t),
                        r = this.createResult(e, t);
                    return t.keepPreviousData || (void 0 !== t.placeholderData ? !r.isPlaceholderData : (0, n.VS)(this.getCurrentResult(), r)) || (this.currentResult = r, this.currentResultOptions = this.options, this.currentResultState = this.currentQuery.state), r
                }
                getCurrentResult() {
                    return this.currentResult
                }
                trackResult(t) {
                    let e = {};
                    return Object.keys(t).forEach(r => {
                        Object.defineProperty(e, r, {
                            configurable: !1,
                            enumerable: !0,
                            get: () => (this.trackedProps.add(r), t[r])
                        })
                    }), e
                }
                getCurrentQuery() {
                    return this.currentQuery
                }
                remove() {
                    this.client.getQueryCache().remove(this.currentQuery)
                }
                refetch({
                    refetchPage: t,
                    ...e
                } = {}) {
                    return this.fetch({ ...e,
                        meta: {
                            refetchPage: t
                        }
                    })
                }
                fetchOptimistic(t) {
                    let e = this.client.defaultQueryOptions(t),
                        r = this.client.getQueryCache().build(this.client, e);
                    return r.isFetchingOptimistic = !0, r.fetch().then(() => this.createResult(r, e))
                }
                fetch(t) {
                    var e;
                    return this.executeFetch({ ...t,
                        cancelRefetch: null == (e = t.cancelRefetch) || e
                    }).then(() => (this.updateResult(), this.currentResult))
                }
                executeFetch(t) {
                    this.updateQuery();
                    let e = this.currentQuery.fetch(this.options, t);
                    return null != t && t.throwOnError || (e = e.catch(n.ZT)), e
                }
                updateStaleTimeout() {
                    if (this.clearStaleTimeout(), n.sk || this.currentResult.isStale || !(0, n.PN)(this.options.staleTime)) return;
                    let t = (0, n.Kp)(this.currentResult.dataUpdatedAt, this.options.staleTime);
                    this.staleTimeoutId = setTimeout(() => {
                        this.currentResult.isStale || this.updateResult()
                    }, t + 1)
                }
                computeRefetchInterval() {
                    var t;
                    return "function" == typeof this.options.refetchInterval ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : null != (t = this.options.refetchInterval) && t
                }
                updateRefetchInterval(t) {
                    this.clearRefetchInterval(), this.currentRefetchInterval = t, !n.sk && !1 !== this.options.enabled && (0, n.PN)(this.currentRefetchInterval) && 0 !== this.currentRefetchInterval && (this.refetchIntervalId = setInterval(() => {
                        (this.options.refetchIntervalInBackground || o.j.isFocused()) && this.executeFetch()
                    }, this.currentRefetchInterval))
                }
                updateTimers() {
                    this.updateStaleTimeout(), this.updateRefetchInterval(this.computeRefetchInterval())
                }
                clearStaleTimeout() {
                    this.staleTimeoutId && (clearTimeout(this.staleTimeoutId), this.staleTimeoutId = void 0)
                }
                clearRefetchInterval() {
                    this.refetchIntervalId && (clearInterval(this.refetchIntervalId), this.refetchIntervalId = void 0)
                }
                createResult(t, e) {
                    let r;
                    let i = this.currentQuery,
                        o = this.options,
                        s = this.currentResult,
                        u = this.currentResultState,
                        c = this.currentResultOptions,
                        d = t !== i,
                        p = d ? t.state : this.currentQueryInitialState,
                        m = d ? this.currentResult : this.previousQueryResult,
                        {
                            state: y
                        } = t,
                        {
                            dataUpdatedAt: v,
                            error: g,
                            errorUpdatedAt: b,
                            fetchStatus: w,
                            status: x
                        } = y,
                        E = !1,
                        S = !1;
                    if (e._optimisticResults) {
                        let r = this.hasListeners(),
                            n = !r && l(t, e),
                            s = r && f(t, i, e, o);
                        (n || s) && (w = (0, a.Kw)(t.options.networkMode) ? "fetching" : "paused", v || (x = "loading")), "isRestoring" === e._optimisticResults && (w = "idle")
                    }
                    if (e.keepPreviousData && !y.dataUpdatedAt && null != m && m.isSuccess && "error" !== x) r = m.data, v = m.dataUpdatedAt, x = m.status, E = !0;
                    else if (e.select && void 0 !== y.data) {
                        if (s && y.data === (null == u ? void 0 : u.data) && e.select === this.selectFn) r = this.selectResult;
                        else try {
                            this.selectFn = e.select, r = e.select(y.data), r = (0, n.oE)(null == s ? void 0 : s.data, r, e), this.selectResult = r, this.selectError = null
                        } catch (t) {
                            this.selectError = t
                        }
                    } else r = y.data;
                    if (void 0 !== e.placeholderData && void 0 === r && "loading" === x) {
                        let t;
                        if (null != s && s.isPlaceholderData && e.placeholderData === (null == c ? void 0 : c.placeholderData)) t = s.data;
                        else if (t = "function" == typeof e.placeholderData ? e.placeholderData() : e.placeholderData, e.select && void 0 !== t) try {
                            t = e.select(t), this.selectError = null
                        } catch (t) {
                            this.selectError = t
                        }
                        void 0 !== t && (x = "success", r = (0, n.oE)(null == s ? void 0 : s.data, t, e), S = !0)
                    }
                    this.selectError && (g = this.selectError, r = this.selectResult, b = Date.now(), x = "error");
                    let P = "fetching" === w,
                        O = "loading" === x,
                        A = "error" === x,
                        C = {
                            status: x,
                            fetchStatus: w,
                            isLoading: O,
                            isSuccess: "success" === x,
                            isError: A,
                            isInitialLoading: O && P,
                            data: r,
                            dataUpdatedAt: v,
                            error: g,
                            errorUpdatedAt: b,
                            failureCount: y.fetchFailureCount,
                            failureReason: y.fetchFailureReason,
                            errorUpdateCount: y.errorUpdateCount,
                            isFetched: y.dataUpdateCount > 0 || y.errorUpdateCount > 0,
                            isFetchedAfterMount: y.dataUpdateCount > p.dataUpdateCount || y.errorUpdateCount > p.errorUpdateCount,
                            isFetching: P,
                            isRefetching: P && !O,
                            isLoadingError: A && 0 === y.dataUpdatedAt,
                            isPaused: "paused" === w,
                            isPlaceholderData: S,
                            isPreviousData: E,
                            isRefetchError: A && 0 !== y.dataUpdatedAt,
                            isStale: h(t, e),
                            refetch: this.refetch,
                            remove: this.remove
                        };
                    return C
                }
                updateResult(t) {
                    let e = this.currentResult,
                        r = this.createResult(this.currentQuery, this.options);
                    if (this.currentResultState = this.currentQuery.state, this.currentResultOptions = this.options, (0, n.VS)(r, e)) return;
                    this.currentResult = r;
                    let i = {
                        cache: !0
                    };
                    (null == t ? void 0 : t.listeners) !== !1 && (() => {
                        if (!e) return !0;
                        let {
                            notifyOnChangeProps: t
                        } = this.options, r = "function" == typeof t ? t() : t;
                        if ("all" === r || !r && !this.trackedProps.size) return !0;
                        let n = new Set(null != r ? r : this.trackedProps);
                        return this.options.useErrorBoundary && n.add("error"), Object.keys(this.currentResult).some(t => {
                            let r = this.currentResult[t] !== e[t];
                            return r && n.has(t)
                        })
                    })() && (i.listeners = !0), this.notify({ ...i,
                        ...t
                    })
                }
                updateQuery() {
                    let t = this.client.getQueryCache().build(this.client, this.options);
                    if (t === this.currentQuery) return;
                    let e = this.currentQuery;
                    this.currentQuery = t, this.currentQueryInitialState = t.state, this.previousQueryResult = this.currentResult, this.hasListeners() && (null == e || e.removeObserver(this), t.addObserver(this))
                }
                onQueryUpdate(t) {
                    let e = {};
                    "success" === t.type ? e.onSuccess = !t.manual : "error" !== t.type || (0, a.DV)(t.error) || (e.onError = !0), this.updateResult(e), this.hasListeners() && this.updateTimers()
                }
                notify(t) {
                    i.V.batch(() => {
                        var e, r, n, i, o, s, a, u;
                        t.onSuccess ? (null == (e = (r = this.options).onSuccess) || e.call(r, this.currentResult.data), null == (n = (i = this.options).onSettled) || n.call(i, this.currentResult.data, null)) : t.onError && (null == (o = (s = this.options).onError) || o.call(s, this.currentResult.error), null == (a = (u = this.options).onSettled) || a.call(u, void 0, this.currentResult.error)), t.listeners && this.listeners.forEach(({
                            listener: t
                        }) => {
                            t(this.currentResult)
                        }), t.cache && this.client.getQueryCache().notify({
                            query: this.currentQuery,
                            type: "observerResultsUpdated"
                        })
                    })
                }
            }

            function l(t, e) {
                return !1 !== e.enabled && !t.state.dataUpdatedAt && !("error" === t.state.status && !1 === e.retryOnMount) || t.state.dataUpdatedAt > 0 && c(t, e, e.refetchOnMount)
            }

            function c(t, e, r) {
                if (!1 !== e.enabled) {
                    let n = "function" == typeof r ? r(t) : r;
                    return "always" === n || !1 !== n && h(t, e)
                }
                return !1
            }

            function f(t, e, r, n) {
                return !1 !== r.enabled && (t !== e || !1 === n.enabled) && (!r.suspense || "error" !== t.state.status) && h(t, r)
            }

            function h(t, e) {
                return t.isStaleByTime(e.staleTime)
            }
        },
        1909: function(t, e, r) {
            "use strict";
            r.d(e, {
                F: function() {
                    return i
                }
            });
            var n = r(6504);
            class i {
                destroy() {
                    this.clearGcTimeout()
                }
                scheduleGc() {
                    this.clearGcTimeout(), (0, n.PN)(this.cacheTime) && (this.gcTimeout = setTimeout(() => {
                        this.optionalRemove()
                    }, this.cacheTime))
                }
                updateCacheTime(t) {
                    this.cacheTime = Math.max(this.cacheTime || 0, null != t ? t : n.sk ? 1 / 0 : 3e5)
                }
                clearGcTimeout() {
                    this.gcTimeout && (clearTimeout(this.gcTimeout), this.gcTimeout = void 0)
                }
            }
        },
        3238: function(t, e, r) {
            "use strict";
            r.d(e, {
                DV: function() {
                    return l
                },
                Kw: function() {
                    return a
                },
                Mz: function() {
                    return c
                }
            });
            var n = r(8202),
                i = r(3864),
                o = r(6504);

            function s(t) {
                return Math.min(1e3 * 2 ** t, 3e4)
            }

            function a(t) {
                return (null != t ? t : "online") !== "online" || i.N.isOnline()
            }
            class u {
                constructor(t) {
                    this.revert = null == t ? void 0 : t.revert, this.silent = null == t ? void 0 : t.silent
                }
            }

            function l(t) {
                return t instanceof u
            }

            function c(t) {
                let e, r, l, c = !1,
                    f = 0,
                    h = !1,
                    d = new Promise((t, e) => {
                        r = t, l = e
                    }),
                    p = () => !n.j.isFocused() || "always" !== t.networkMode && !i.N.isOnline(),
                    m = n => {
                        h || (h = !0, null == t.onSuccess || t.onSuccess(n), null == e || e(), r(n))
                    },
                    y = r => {
                        h || (h = !0, null == t.onError || t.onError(r), null == e || e(), l(r))
                    },
                    v = () => new Promise(r => {
                        e = t => {
                            let e = h || !p();
                            return e && r(t), e
                        }, null == t.onPause || t.onPause()
                    }).then(() => {
                        e = void 0, h || null == t.onContinue || t.onContinue()
                    }),
                    g = () => {
                        let e;
                        if (!h) {
                            try {
                                e = t.fn()
                            } catch (t) {
                                e = Promise.reject(t)
                            }
                            Promise.resolve(e).then(m).catch(e => {
                                var r, n;
                                if (h) return;
                                let i = null != (r = t.retry) ? r : 3,
                                    a = null != (n = t.retryDelay) ? n : s,
                                    u = "function" == typeof a ? a(f, e) : a,
                                    l = !0 === i || "number" == typeof i && f < i || "function" == typeof i && i(f, e);
                                if (c || !l) {
                                    y(e);
                                    return
                                }
                                f++, null == t.onFail || t.onFail(f, e), (0, o.Gh)(u).then(() => {
                                    if (p()) return v()
                                }).then(() => {
                                    c ? y(e) : g()
                                })
                            })
                        }
                    };
                return a(t.networkMode) ? g() : v().then(g), {
                    promise: d,
                    cancel: e => {
                        h || (y(new u(e)), null == t.abort || t.abort())
                    },
                    continue: () => {
                        let t = null == e ? void 0 : e();
                        return t ? d : Promise.resolve()
                    },
                    cancelRetry: () => {
                        c = !0
                    },
                    continueRetry: () => {
                        c = !1
                    }
                }
            }
        },
        9492: function(t, e, r) {
            "use strict";
            r.d(e, {
                l: function() {
                    return n
                }
            });
            class n {
                constructor() {
                    this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
                }
                subscribe(t) {
                    let e = {
                        listener: t
                    };
                    return this.listeners.add(e), this.onSubscribe(), () => {
                        this.listeners.delete(e), this.onUnsubscribe()
                    }
                }
                hasListeners() {
                    return this.listeners.size > 0
                }
                onSubscribe() {}
                onUnsubscribe() {}
            }
        },
        6504: function(t, e, r) {
            "use strict";
            r.d(e, {
                A4: function() {
                    return S
                },
                G9: function() {
                    return P
                },
                Gh: function() {
                    return E
                },
                I6: function() {
                    return c
                },
                Kp: function() {
                    return a
                },
                PN: function() {
                    return s
                },
                Rm: function() {
                    return d
                },
                SE: function() {
                    return o
                },
                VS: function() {
                    return v
                },
                X7: function() {
                    return h
                },
                ZT: function() {
                    return i
                },
                _v: function() {
                    return u
                },
                _x: function() {
                    return f
                },
                lV: function() {
                    return l
                },
                oE: function() {
                    return O
                },
                sk: function() {
                    return n
                },
                to: function() {
                    return m
                },
                yF: function() {
                    return p
                }
            });
            let n = "undefined" == typeof window || "Deno" in window;

            function i() {}

            function o(t, e) {
                return "function" == typeof t ? t(e) : t
            }

            function s(t) {
                return "number" == typeof t && t >= 0 && t !== 1 / 0
            }

            function a(t, e) {
                return Math.max(t + (e || 0) - Date.now(), 0)
            }

            function u(t, e, r) {
                return x(t) ? "function" == typeof e ? { ...r,
                    queryKey: t,
                    queryFn: e
                } : { ...e,
                    queryKey: t
                } : t
            }

            function l(t, e, r) {
                return x(t) ? "function" == typeof e ? { ...r,
                    mutationKey: t,
                    mutationFn: e
                } : { ...e,
                    mutationKey: t
                } : "function" == typeof t ? { ...e,
                    mutationFn: t
                } : { ...t
                }
            }

            function c(t, e, r) {
                return x(t) ? [{ ...e,
                    queryKey: t
                }, r] : [t || {}, e]
            }

            function f(t, e) {
                let {
                    type: r = "all",
                    exact: n,
                    fetchStatus: i,
                    predicate: o,
                    queryKey: s,
                    stale: a
                } = t;
                if (x(s)) {
                    if (n) {
                        if (e.queryHash !== d(s, e.options)) return !1
                    } else {
                        if (!y(e.queryKey, s)) return !1
                    }
                }
                if ("all" !== r) {
                    let t = e.isActive();
                    if ("active" === r && !t || "inactive" === r && t) return !1
                }
                return ("boolean" != typeof a || e.isStale() === a) && (void 0 === i || i === e.state.fetchStatus) && (!o || !!o(e))
            }

            function h(t, e) {
                let {
                    exact: r,
                    fetching: n,
                    predicate: i,
                    mutationKey: o
                } = t;
                if (x(o)) {
                    if (!e.options.mutationKey) return !1;
                    if (r) {
                        if (p(e.options.mutationKey) !== p(o)) return !1
                    } else {
                        if (!y(e.options.mutationKey, o)) return !1
                    }
                }
                return ("boolean" != typeof n || "loading" === e.state.status === n) && (!i || !!i(e))
            }

            function d(t, e) {
                let r = (null == e ? void 0 : e.queryKeyHashFn) || p;
                return r(t)
            }

            function p(t) {
                return JSON.stringify(t, (t, e) => b(e) ? Object.keys(e).sort().reduce((t, r) => (t[r] = e[r], t), {}) : e)
            }

            function m(t, e) {
                return y(t, e)
            }

            function y(t, e) {
                return t === e || typeof t == typeof e && !!t && !!e && "object" == typeof t && "object" == typeof e && !Object.keys(e).some(r => !y(t[r], e[r]))
            }

            function v(t, e) {
                if (t && !e || e && !t) return !1;
                for (let r in t)
                    if (t[r] !== e[r]) return !1;
                return !0
            }

            function g(t) {
                return Array.isArray(t) && t.length === Object.keys(t).length
            }

            function b(t) {
                if (!w(t)) return !1;
                let e = t.constructor;
                if (void 0 === e) return !0;
                let r = e.prototype;
                return !!(w(r) && r.hasOwnProperty("isPrototypeOf"))
            }

            function w(t) {
                return "[object Object]" === Object.prototype.toString.call(t)
            }

            function x(t) {
                return Array.isArray(t)
            }

            function E(t) {
                return new Promise(e => {
                    setTimeout(e, t)
                })
            }

            function S(t) {
                E(0).then(t)
            }

            function P() {
                if ("function" == typeof AbortController) return new AbortController
            }

            function O(t, e, r) {
                return null != r.isDataEqual && r.isDataEqual(t, e) ? t : "function" == typeof r.structuralSharing ? r.structuralSharing(t, e) : !1 !== r.structuralSharing ? function t(e, r) {
                    if (e === r) return e;
                    let n = g(e) && g(r);
                    if (n || b(e) && b(r)) {
                        let i = n ? e.length : Object.keys(e).length,
                            o = n ? r : Object.keys(r),
                            s = o.length,
                            a = n ? [] : {},
                            u = 0;
                        for (let i = 0; i < s; i++) {
                            let s = n ? i : o[i];
                            a[s] = t(e[s], r[s]), a[s] === e[s] && u++
                        }
                        return i === s && u === i ? e : a
                    }
                    return r
                }(t, e) : e
            }
        },
        165: function(t, e, r) {
            "use strict";
            r.d(e, {
                NL: function() {
                    return a
                },
                aH: function() {
                    return u
                }
            });
            var n = r(2265);
            let i = n.createContext(void 0),
                o = n.createContext(!1);

            function s(t, e) {
                return t || (e && "undefined" != typeof window ? (window.ReactQueryClientContext || (window.ReactQueryClientContext = i), window.ReactQueryClientContext) : i)
            }
            let a = ({
                    context: t
                } = {}) => {
                    let e = n.useContext(s(t, n.useContext(o)));
                    if (!e) throw Error("No QueryClient set, use QueryClientProvider to set one");
                    return e
                },
                u = ({
                    client: t,
                    children: e,
                    context: r,
                    contextSharing: i = !1
                }) => {
                    n.useEffect(() => (t.mount(), () => {
                        t.unmount()
                    }), [t]);
                    let a = s(r, i);
                    return n.createElement(o.Provider, {
                        value: !r && i
                    }, n.createElement(a.Provider, {
                        value: t
                    }, e))
                }
        },
        2331: function(t, e, r) {
            "use strict";
            let n;
            r.d(e, {
                r: function() {
                    return w
                }
            });
            var i = r(2265),
                o = r(7156),
                s = r(5321);
            let a = i.createContext((n = !1, {
                    clearReset: () => {
                        n = !1
                    },
                    reset: () => {
                        n = !0
                    },
                    isReset: () => n
                })),
                u = () => i.useContext(a);
            var l = r(165);
            let c = i.createContext(!1),
                f = () => i.useContext(c);
            c.Provider;
            var h = r(7798);
            let d = (t, e) => {
                    (t.suspense || t.useErrorBoundary) && !e.isReset() && (t.retryOnMount = !1)
                },
                p = t => {
                    i.useEffect(() => {
                        t.clearReset()
                    }, [t])
                },
                m = ({
                    result: t,
                    errorResetBoundary: e,
                    useErrorBoundary: r,
                    query: n
                }) => t.isError && !e.isReset() && !t.isFetching && (0, h.L)(r, [t.error, n]),
                y = t => {
                    t.suspense && "number" != typeof t.staleTime && (t.staleTime = 1e3)
                },
                v = (t, e) => t.isLoading && t.isFetching && !e,
                g = (t, e, r) => (null == t ? void 0 : t.suspense) && v(e, r),
                b = (t, e, r) => e.fetchOptimistic(t).then(({
                    data: e
                }) => {
                    null == t.onSuccess || t.onSuccess(e), null == t.onSettled || t.onSettled(e, null)
                }).catch(e => {
                    r.clearReset(), null == t.onError || t.onError(e), null == t.onSettled || t.onSettled(void 0, e)
                });

            function w(t, e) {
                let r = (0, l.NL)({
                        context: t.context
                    }),
                    n = f(),
                    a = u(),
                    c = r.defaultQueryOptions(t);
                c._optimisticResults = n ? "isRestoring" : "optimistic", c.onError && (c.onError = o.V.batchCalls(c.onError)), c.onSuccess && (c.onSuccess = o.V.batchCalls(c.onSuccess)), c.onSettled && (c.onSettled = o.V.batchCalls(c.onSettled)), y(c), d(c, a), p(a);
                let [h] = i.useState(() => new e(r, c)), v = h.getOptimisticResult(c);
                if ((0, s.$)(i.useCallback(t => {
                        let e = n ? () => void 0 : h.subscribe(o.V.batchCalls(t));
                        return h.updateResult(), e
                    }, [h, n]), () => h.getCurrentResult(), () => h.getCurrentResult()), i.useEffect(() => {
                        h.setOptions(c, {
                            listeners: !1
                        })
                    }, [c, h]), g(c, v, n)) throw b(c, h, a);
                if (m({
                        result: v,
                        errorResetBoundary: a,
                        useErrorBoundary: c.useErrorBoundary,
                        query: h.getCurrentQuery()
                    })) throw v.error;
                return c.notifyOnChangeProps ? v : h.trackResult(v)
            }
        },
        8285: function(t, e, r) {
            "use strict";
            r.d(e, {
                a: function() {
                    return s
                }
            });
            var n = r(6504),
                i = r(127),
                o = r(2331);

            function s(t, e, r) {
                let s = (0, n._v)(t, e, r);
                return (0, o.r)(s, i.z)
            }
        },
        5321: function(t, e, r) {
            "use strict";
            r.d(e, {
                $: function() {
                    return i
                }
            });
            var n = r(6272);
            let i = n.useSyncExternalStore
        },
        7798: function(t, e, r) {
            "use strict";

            function n(t, e) {
                return "function" == typeof t ? t(...e) : !!t
            }
            r.d(e, {
                L: function() {
                    return n
                }
            })
        },
        9222: function(t, e, r) {
            "use strict";
            let n;

            function i(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            }
            r.d(e, {
                Z: function() {
                    return tW
                }
            });
            let {
                toString: o
            } = Object.prototype, {
                getPrototypeOf: s
            } = Object, a = (U = Object.create(null), t => {
                let e = o.call(t);
                return U[e] || (U[e] = e.slice(8, -1).toLowerCase())
            }), u = t => (t = t.toLowerCase(), e => a(e) === t), l = t => e => typeof e === t, {
                isArray: c
            } = Array, f = l("undefined"), h = u("ArrayBuffer"), d = l("string"), p = l("function"), m = l("number"), y = t => null !== t && "object" == typeof t, v = t => {
                if ("object" !== a(t)) return !1;
                let e = s(t);
                return (null === e || e === Object.prototype || null === Object.getPrototypeOf(e)) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t)
            }, g = u("Date"), b = u("File"), w = u("Blob"), x = u("FileList"), E = u("URLSearchParams");

            function S(t, e, {
                allOwnKeys: r = !1
            } = {}) {
                let n, i;
                if (null != t) {
                    if ("object" != typeof t && (t = [t]), c(t))
                        for (n = 0, i = t.length; n < i; n++) e.call(null, t[n], n, t);
                    else {
                        let i;
                        let o = r ? Object.getOwnPropertyNames(t) : Object.keys(t),
                            s = o.length;
                        for (n = 0; n < s; n++) i = o[n], e.call(null, t[i], i, t)
                    }
                }
            }

            function P(t, e) {
                let r;
                e = e.toLowerCase();
                let n = Object.keys(t),
                    i = n.length;
                for (; i-- > 0;)
                    if (e === (r = n[i]).toLowerCase()) return r;
                return null
            }
            let O = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : global,
                A = t => !f(t) && t !== O,
                C = (F = "undefined" != typeof Uint8Array && s(Uint8Array), t => F && t instanceof F),
                R = u("HTMLFormElement"),
                T = (({
                    hasOwnProperty: t
                }) => (e, r) => t.call(e, r))(Object.prototype),
                k = u("RegExp"),
                L = (t, e) => {
                    let r = Object.getOwnPropertyDescriptors(t),
                        n = {};
                    S(r, (r, i) => {
                        !1 !== e(r, i, t) && (n[i] = r)
                    }), Object.defineProperties(t, n)
                },
                M = "abcdefghijklmnopqrstuvwxyz",
                D = "0123456789",
                j = {
                    DIGIT: D,
                    ALPHA: M,
                    ALPHA_DIGIT: M + M.toUpperCase() + D
                },
                _ = u("AsyncFunction");
            var U, F, I = {
                isArray: c,
                isArrayBuffer: h,
                isBuffer: function(t) {
                    return null !== t && !f(t) && null !== t.constructor && !f(t.constructor) && p(t.constructor.isBuffer) && t.constructor.isBuffer(t)
                },
                isFormData: t => {
                    let e;
                    return t && ("function" == typeof FormData && t instanceof FormData || p(t.append) && ("formdata" === (e = a(t)) || "object" === e && p(t.toString) && "[object FormData]" === t.toString()))
                },
                isArrayBufferView: function(t) {
                    return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && h(t.buffer)
                },
                isString: d,
                isNumber: m,
                isBoolean: t => !0 === t || !1 === t,
                isObject: y,
                isPlainObject: v,
                isUndefined: f,
                isDate: g,
                isFile: b,
                isBlob: w,
                isRegExp: k,
                isFunction: p,
                isStream: t => y(t) && p(t.pipe),
                isURLSearchParams: E,
                isTypedArray: C,
                isFileList: x,
                forEach: S,
                merge: function t() {
                    let {
                        caseless: e
                    } = A(this) && this || {}, r = {}, n = (n, i) => {
                        let o = e && P(r, i) || i;
                        v(r[o]) && v(n) ? r[o] = t(r[o], n) : v(n) ? r[o] = t({}, n) : c(n) ? r[o] = n.slice() : r[o] = n
                    };
                    for (let t = 0, e = arguments.length; t < e; t++) arguments[t] && S(arguments[t], n);
                    return r
                },
                extend: (t, e, r, {
                    allOwnKeys: n
                } = {}) => (S(e, (e, n) => {
                    r && p(e) ? t[n] = i(e, r) : t[n] = e
                }, {
                    allOwnKeys: n
                }), t),
                trim: t => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
                stripBOM: t => (65279 === t.charCodeAt(0) && (t = t.slice(1)), t),
                inherits: (t, e, r, n) => {
                    t.prototype = Object.create(e.prototype, n), t.prototype.constructor = t, Object.defineProperty(t, "super", {
                        value: e.prototype
                    }), r && Object.assign(t.prototype, r)
                },
                toFlatObject: (t, e, r, n) => {
                    let i, o, a;
                    let u = {};
                    if (e = e || {}, null == t) return e;
                    do {
                        for (o = (i = Object.getOwnPropertyNames(t)).length; o-- > 0;) a = i[o], (!n || n(a, t, e)) && !u[a] && (e[a] = t[a], u[a] = !0);
                        t = !1 !== r && s(t)
                    } while (t && (!r || r(t, e)) && t !== Object.prototype);
                    return e
                },
                kindOf: a,
                kindOfTest: u,
                endsWith: (t, e, r) => {
                    t = String(t), (void 0 === r || r > t.length) && (r = t.length), r -= e.length;
                    let n = t.indexOf(e, r);
                    return -1 !== n && n === r
                },
                toArray: t => {
                    if (!t) return null;
                    if (c(t)) return t;
                    let e = t.length;
                    if (!m(e)) return null;
                    let r = Array(e);
                    for (; e-- > 0;) r[e] = t[e];
                    return r
                },
                forEachEntry: (t, e) => {
                    let r;
                    let n = t && t[Symbol.iterator],
                        i = n.call(t);
                    for (;
                        (r = i.next()) && !r.done;) {
                        let n = r.value;
                        e.call(t, n[0], n[1])
                    }
                },
                matchAll: (t, e) => {
                    let r;
                    let n = [];
                    for (; null !== (r = t.exec(e));) n.push(r);
                    return n
                },
                isHTMLForm: R,
                hasOwnProperty: T,
                hasOwnProp: T,
                reduceDescriptors: L,
                freezeMethods: t => {
                    L(t, (e, r) => {
                        if (p(t) && -1 !== ["arguments", "caller", "callee"].indexOf(r)) return !1;
                        let n = t[r];
                        if (p(n)) {
                            if (e.enumerable = !1, "writable" in e) {
                                e.writable = !1;
                                return
                            }
                            e.set || (e.set = () => {
                                throw Error("Can not rewrite read-only method '" + r + "'")
                            })
                        }
                    })
                },
                toObjectSet: (t, e) => {
                    let r = {};
                    return (t => {
                        t.forEach(t => {
                            r[t] = !0
                        })
                    })(c(t) ? t : String(t).split(e)), r
                },
                toCamelCase: t => t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(t, e, r) {
                    return e.toUpperCase() + r
                }),
                noop: () => {},
                toFiniteNumber: (t, e) => Number.isFinite(t = +t) ? t : e,
                findKey: P,
                global: O,
                isContextDefined: A,
                ALPHABET: j,
                generateString: (t = 16, e = j.ALPHA_DIGIT) => {
                    let r = "",
                        {
                            length: n
                        } = e;
                    for (; t--;) r += e[Math.random() * n | 0];
                    return r
                },
                isSpecCompliantForm: function(t) {
                    return !!(t && p(t.append) && "FormData" === t[Symbol.toStringTag] && t[Symbol.iterator])
                },
                toJSONObject: t => {
                    let e = Array(10),
                        r = (t, n) => {
                            if (y(t)) {
                                if (e.indexOf(t) >= 0) return;
                                if (!("toJSON" in t)) {
                                    e[n] = t;
                                    let i = c(t) ? [] : {};
                                    return S(t, (t, e) => {
                                        let o = r(t, n + 1);
                                        f(o) || (i[e] = o)
                                    }), e[n] = void 0, i
                                }
                            }
                            return t
                        };
                    return r(t, 0)
                },
                isAsyncFn: _,
                isThenable: t => t && (y(t) || p(t)) && p(t.then) && p(t.catch)
            };

            function V(t, e, r, n, i) {
                Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), r && (this.config = r), n && (this.request = n), i && (this.response = i)
            }
            I.inherits(V, Error, {
                toJSON: function() {
                    return {
                        message: this.message,
                        name: this.name,
                        description: this.description,
                        number: this.number,
                        fileName: this.fileName,
                        lineNumber: this.lineNumber,
                        columnNumber: this.columnNumber,
                        stack: this.stack,
                        config: I.toJSONObject(this.config),
                        code: this.code,
                        status: this.response && this.response.status ? this.response.status : null
                    }
                }
            });
            let B = V.prototype,
                N = {};
            ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(t => {
                N[t] = {
                    value: t
                }
            }), Object.defineProperties(V, N), Object.defineProperty(B, "isAxiosError", {
                value: !0
            }), V.from = (t, e, r, n, i, o) => {
                let s = Object.create(B);
                return I.toFlatObject(t, s, function(t) {
                    return t !== Error.prototype
                }, t => "isAxiosError" !== t), V.call(s, t.message, e, r, n, i), s.cause = t, s.name = t.name, o && Object.assign(s, o), s
            };
            var q = r(7133).lW;

            function W(t) {
                return I.isPlainObject(t) || I.isArray(t)
            }

            function $(t) {
                return I.endsWith(t, "[]") ? t.slice(0, -2) : t
            }

            function z(t, e, r) {
                return t ? t.concat(e).map(function(t, e) {
                    return t = $(t), !r && e ? "[" + t + "]" : t
                }).join(r ? "." : "") : e
            }
            let H = I.toFlatObject(I, {}, null, function(t) {
                return /^is[A-Z]/.test(t)
            });
            var K = function(t, e, r) {
                if (!I.isObject(t)) throw TypeError("target must be an object");
                e = e || new FormData, r = I.toFlatObject(r, {
                    metaTokens: !0,
                    dots: !1,
                    indexes: !1
                }, !1, function(t, e) {
                    return !I.isUndefined(e[t])
                });
                let n = r.metaTokens,
                    i = r.visitor || c,
                    o = r.dots,
                    s = r.indexes,
                    a = r.Blob || "undefined" != typeof Blob && Blob,
                    u = a && I.isSpecCompliantForm(e);
                if (!I.isFunction(i)) throw TypeError("visitor must be a function");

                function l(t) {
                    if (null === t) return "";
                    if (I.isDate(t)) return t.toISOString();
                    if (!u && I.isBlob(t)) throw new V("Blob is not supported. Use a Buffer instead.");
                    return I.isArrayBuffer(t) || I.isTypedArray(t) ? u && "function" == typeof Blob ? new Blob([t]) : q.from(t) : t
                }

                function c(t, r, i) {
                    let a = t;
                    if (t && !i && "object" == typeof t) {
                        if (I.endsWith(r, "{}")) r = n ? r : r.slice(0, -2), t = JSON.stringify(t);
                        else {
                            var u;
                            if (I.isArray(t) && (u = t, I.isArray(u) && !u.some(W)) || (I.isFileList(t) || I.endsWith(r, "[]")) && (a = I.toArray(t))) return r = $(r), a.forEach(function(t, n) {
                                I.isUndefined(t) || null === t || e.append(!0 === s ? z([r], n, o) : null === s ? r : r + "[]", l(t))
                            }), !1
                        }
                    }
                    return !!W(t) || (e.append(z(i, r, o), l(t)), !1)
                }
                let f = [],
                    h = Object.assign(H, {
                        defaultVisitor: c,
                        convertValue: l,
                        isVisitable: W
                    });
                if (!I.isObject(t)) throw TypeError("data must be an object");
                return ! function t(r, n) {
                    if (!I.isUndefined(r)) {
                        if (-1 !== f.indexOf(r)) throw Error("Circular reference detected in " + n.join("."));
                        f.push(r), I.forEach(r, function(r, o) {
                            let s = !(I.isUndefined(r) || null === r) && i.call(e, r, I.isString(o) ? o.trim() : o, n, h);
                            !0 === s && t(r, n ? n.concat(o) : [o])
                        }), f.pop()
                    }
                }(t), e
            };

            function Z(t) {
                let e = {
                    "!": "%21",
                    "'": "%27",
                    "(": "%28",
                    ")": "%29",
                    "~": "%7E",
                    "%20": "+",
                    "%00": "\x00"
                };
                return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(t) {
                    return e[t]
                })
            }

            function Q(t, e) {
                this._pairs = [], t && K(t, this, e)
            }
            let G = Q.prototype;

            function X(t) {
                return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
            }

            function Y(t, e, r) {
                let n;
                if (!e) return t;
                let i = r && r.encode || X,
                    o = r && r.serialize;
                if (n = o ? o(e, r) : I.isURLSearchParams(e) ? e.toString() : new Q(e, r).toString(i)) {
                    let e = t.indexOf("#"); - 1 !== e && (t = t.slice(0, e)), t += (-1 === t.indexOf("?") ? "?" : "&") + n
                }
                return t
            }
            G.append = function(t, e) {
                this._pairs.push([t, e])
            }, G.toString = function(t) {
                let e = t ? function(e) {
                    return t.call(this, e, Z)
                } : Z;
                return this._pairs.map(function(t) {
                    return e(t[0]) + "=" + e(t[1])
                }, "").join("&")
            };
            var J = class {
                    constructor() {
                        this.handlers = []
                    }
                    use(t, e, r) {
                        return this.handlers.push({
                            fulfilled: t,
                            rejected: e,
                            synchronous: !!r && r.synchronous,
                            runWhen: r ? r.runWhen : null
                        }), this.handlers.length - 1
                    }
                    eject(t) {
                        this.handlers[t] && (this.handlers[t] = null)
                    }
                    clear() {
                        this.handlers && (this.handlers = [])
                    }
                    forEach(t) {
                        I.forEach(this.handlers, function(e) {
                            null !== e && t(e)
                        })
                    }
                },
                tt = {
                    silentJSONParsing: !0,
                    forcedJSONParsing: !0,
                    clarifyTimeoutError: !1
                },
                te = "undefined" != typeof URLSearchParams ? URLSearchParams : Q,
                tr = "undefined" != typeof FormData ? FormData : null,
                tn = "undefined" != typeof Blob ? Blob : null;
            let ti = ("undefined" == typeof navigator || "ReactNative" !== (n = navigator.product) && "NativeScript" !== n && "NS" !== n) && "undefined" != typeof window && "undefined" != typeof document,
                to = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" == typeof self.importScripts;
            var ts = {
                    classes: {
                        URLSearchParams: te,
                        FormData: tr,
                        Blob: tn
                    },
                    isStandardBrowserEnv: ti,
                    isStandardBrowserWebWorkerEnv: to,
                    protocols: ["http", "https", "file", "blob", "url", "data"]
                },
                ta = function(t) {
                    if (I.isFormData(t) && I.isFunction(t.entries)) {
                        let e = {};
                        return I.forEachEntry(t, (t, r) => {
                            ! function t(e, r, n, i) {
                                let o = e[i++],
                                    s = Number.isFinite(+o),
                                    a = i >= e.length;
                                if (o = !o && I.isArray(n) ? n.length : o, a) return I.hasOwnProp(n, o) ? n[o] = [n[o], r] : n[o] = r, !s;
                                n[o] && I.isObject(n[o]) || (n[o] = []);
                                let u = t(e, r, n[o], i);
                                return u && I.isArray(n[o]) && (n[o] = function(t) {
                                    let e, r;
                                    let n = {},
                                        i = Object.keys(t),
                                        o = i.length;
                                    for (e = 0; e < o; e++) n[r = i[e]] = t[r];
                                    return n
                                }(n[o])), !s
                            }(I.matchAll(/\w+|\[(\w*)]/g, t).map(t => "[]" === t[0] ? "" : t[1] || t[0]), r, e, 0)
                        }), e
                    }
                    return null
                };
            let tu = {
                    "Content-Type": void 0
                },
                tl = {
                    transitional: tt,
                    adapter: ["xhr", "http"],
                    transformRequest: [function(t, e) {
                        let r;
                        let n = e.getContentType() || "",
                            i = n.indexOf("application/json") > -1,
                            o = I.isObject(t);
                        o && I.isHTMLForm(t) && (t = new FormData(t));
                        let s = I.isFormData(t);
                        if (s) return i && i ? JSON.stringify(ta(t)) : t;
                        if (I.isArrayBuffer(t) || I.isBuffer(t) || I.isStream(t) || I.isFile(t) || I.isBlob(t)) return t;
                        if (I.isArrayBufferView(t)) return t.buffer;
                        if (I.isURLSearchParams(t)) return e.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
                        if (o) {
                            if (n.indexOf("application/x-www-form-urlencoded") > -1) {
                                var a, u;
                                return (a = t, u = this.formSerializer, K(a, new ts.classes.URLSearchParams, Object.assign({
                                    visitor: function(t, e, r, n) {
                                        return ts.isNode && I.isBuffer(t) ? (this.append(e, t.toString("base64")), !1) : n.defaultVisitor.apply(this, arguments)
                                    }
                                }, u))).toString()
                            }
                            if ((r = I.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
                                let e = this.env && this.env.FormData;
                                return K(r ? {
                                    "files[]": t
                                } : t, e && new e, this.formSerializer)
                            }
                        }
                        return o || i ? (e.setContentType("application/json", !1), function(t, e, r) {
                            if (I.isString(t)) try {
                                return (0, JSON.parse)(t), I.trim(t)
                            } catch (t) {
                                if ("SyntaxError" !== t.name) throw t
                            }
                            return (0, JSON.stringify)(t)
                        }(t)) : t
                    }],
                    transformResponse: [function(t) {
                        let e = this.transitional || tl.transitional,
                            r = e && e.forcedJSONParsing,
                            n = "json" === this.responseType;
                        if (t && I.isString(t) && (r && !this.responseType || n)) {
                            let r = e && e.silentJSONParsing;
                            try {
                                return JSON.parse(t)
                            } catch (t) {
                                if (!r && n) {
                                    if ("SyntaxError" === t.name) throw V.from(t, V.ERR_BAD_RESPONSE, this, null, this.response);
                                    throw t
                                }
                            }
                        }
                        return t
                    }],
                    timeout: 0,
                    xsrfCookieName: "XSRF-TOKEN",
                    xsrfHeaderName: "X-XSRF-TOKEN",
                    maxContentLength: -1,
                    maxBodyLength: -1,
                    env: {
                        FormData: ts.classes.FormData,
                        Blob: ts.classes.Blob
                    },
                    validateStatus: function(t) {
                        return t >= 200 && t < 300
                    },
                    headers: {
                        common: {
                            Accept: "application/json, text/plain, */*"
                        }
                    }
                };
            I.forEach(["delete", "get", "head"], function(t) {
                tl.headers[t] = {}
            }), I.forEach(["post", "put", "patch"], function(t) {
                tl.headers[t] = I.merge(tu)
            });
            let tc = I.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]);
            var tf = t => {
                let e, r, n;
                let i = {};
                return t && t.split("\n").forEach(function(t) {
                    n = t.indexOf(":"), e = t.substring(0, n).trim().toLowerCase(), r = t.substring(n + 1).trim(), !e || i[e] && tc[e] || ("set-cookie" === e ? i[e] ? i[e].push(r) : i[e] = [r] : i[e] = i[e] ? i[e] + ", " + r : r)
                }), i
            };
            let th = Symbol("internals");

            function td(t) {
                return t && String(t).trim().toLowerCase()
            }

            function tp(t) {
                return !1 === t || null == t ? t : I.isArray(t) ? t.map(tp) : String(t)
            }
            let tm = t => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());

            function ty(t, e, r, n, i) {
                if (I.isFunction(n)) return n.call(this, e, r);
                if (i && (e = r), I.isString(e)) {
                    if (I.isString(n)) return -1 !== e.indexOf(n);
                    if (I.isRegExp(n)) return n.test(e)
                }
            }
            class tv {
                constructor(t) {
                    t && this.set(t)
                }
                set(t, e, r) {
                    let n = this;

                    function i(t, e, r) {
                        let i = td(e);
                        if (!i) throw Error("header name must be a non-empty string");
                        let o = I.findKey(n, i);
                        o && void 0 !== n[o] && !0 !== r && (void 0 !== r || !1 === n[o]) || (n[o || e] = tp(t))
                    }
                    let o = (t, e) => I.forEach(t, (t, r) => i(t, r, e));
                    return I.isPlainObject(t) || t instanceof this.constructor ? o(t, e) : I.isString(t) && (t = t.trim()) && !tm(t) ? o(tf(t), e) : null != t && i(e, t, r), this
                }
                get(t, e) {
                    if (t = td(t)) {
                        let r = I.findKey(this, t);
                        if (r) {
                            let t = this[r];
                            if (!e) return t;
                            if (!0 === e) return function(t) {
                                let e;
                                let r = Object.create(null),
                                    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                                for (; e = n.exec(t);) r[e[1]] = e[2];
                                return r
                            }(t);
                            if (I.isFunction(e)) return e.call(this, t, r);
                            if (I.isRegExp(e)) return e.exec(t);
                            throw TypeError("parser must be boolean|regexp|function")
                        }
                    }
                }
                has(t, e) {
                    if (t = td(t)) {
                        let r = I.findKey(this, t);
                        return !!(r && void 0 !== this[r] && (!e || ty(this, this[r], r, e)))
                    }
                    return !1
                }
                delete(t, e) {
                    let r = this,
                        n = !1;

                    function i(t) {
                        if (t = td(t)) {
                            let i = I.findKey(r, t);
                            i && (!e || ty(r, r[i], i, e)) && (delete r[i], n = !0)
                        }
                    }
                    return I.isArray(t) ? t.forEach(i) : i(t), n
                }
                clear(t) {
                    let e = Object.keys(this),
                        r = e.length,
                        n = !1;
                    for (; r--;) {
                        let i = e[r];
                        (!t || ty(this, this[i], i, t, !0)) && (delete this[i], n = !0)
                    }
                    return n
                }
                normalize(t) {
                    let e = this,
                        r = {};
                    return I.forEach(this, (n, i) => {
                        let o = I.findKey(r, i);
                        if (o) {
                            e[o] = tp(n), delete e[i];
                            return
                        }
                        let s = t ? i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, e, r) => e.toUpperCase() + r) : String(i).trim();
                        s !== i && delete e[i], e[s] = tp(n), r[s] = !0
                    }), this
                }
                concat(...t) {
                    return this.constructor.concat(this, ...t)
                }
                toJSON(t) {
                    let e = Object.create(null);
                    return I.forEach(this, (r, n) => {
                        null != r && !1 !== r && (e[n] = t && I.isArray(r) ? r.join(", ") : r)
                    }), e
                }[Symbol.iterator]() {
                    return Object.entries(this.toJSON())[Symbol.iterator]()
                }
                toString() {
                    return Object.entries(this.toJSON()).map(([t, e]) => t + ": " + e).join("\n")
                }
                get[Symbol.toStringTag]() {
                    return "AxiosHeaders"
                }
                static from(t) {
                    return t instanceof this ? t : new this(t)
                }
                static concat(t, ...e) {
                    let r = new this(t);
                    return e.forEach(t => r.set(t)), r
                }
                static accessor(t) {
                    let e = this[th] = this[th] = {
                            accessors: {}
                        },
                        r = e.accessors,
                        n = this.prototype;

                    function i(t) {
                        let e = td(t);
                        r[e] || (! function(t, e) {
                            let r = I.toCamelCase(" " + e);
                            ["get", "set", "has"].forEach(n => {
                                Object.defineProperty(t, n + r, {
                                    value: function(t, r, i) {
                                        return this[n].call(this, e, t, r, i)
                                    },
                                    configurable: !0
                                })
                            })
                        }(n, t), r[e] = !0)
                    }
                    return I.isArray(t) ? t.forEach(i) : i(t), this
                }
            }

            function tg(t, e) {
                let r = this || tl,
                    n = e || r,
                    i = tv.from(n.headers),
                    o = n.data;
                return I.forEach(t, function(t) {
                    o = t.call(r, o, i.normalize(), e ? e.status : void 0)
                }), i.normalize(), o
            }

            function tb(t) {
                return !!(t && t.__CANCEL__)
            }

            function tw(t, e, r) {
                V.call(this, null == t ? "canceled" : t, V.ERR_CANCELED, e, r), this.name = "CanceledError"
            }
            tv.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), I.freezeMethods(tv.prototype), I.freezeMethods(tv), I.inherits(tw, V, {
                __CANCEL__: !0
            });
            var tx = ts.isStandardBrowserEnv ? {
                write: function(t, e, r, n, i, o) {
                    let s = [];
                    s.push(t + "=" + encodeURIComponent(e)), I.isNumber(r) && s.push("expires=" + new Date(r).toGMTString()), I.isString(n) && s.push("path=" + n), I.isString(i) && s.push("domain=" + i), !0 === o && s.push("secure"), document.cookie = s.join("; ")
                },
                read: function(t) {
                    let e = document.cookie.match(RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
                    return e ? decodeURIComponent(e[3]) : null
                },
                remove: function(t) {
                    this.write(t, "", Date.now() - 864e5)
                }
            } : {
                write: function() {},
                read: function() {
                    return null
                },
                remove: function() {}
            };

            function tE(t, e) {
                return t && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e) ? e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t : e
            }
            var tS = ts.isStandardBrowserEnv ? function() {
                    let t;
                    let e = /(msie|trident)/i.test(navigator.userAgent),
                        r = document.createElement("a");

                    function n(t) {
                        let n = t;
                        return e && (r.setAttribute("href", n), n = r.href), r.setAttribute("href", n), {
                            href: r.href,
                            protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                            host: r.host,
                            search: r.search ? r.search.replace(/^\?/, "") : "",
                            hash: r.hash ? r.hash.replace(/^#/, "") : "",
                            hostname: r.hostname,
                            port: r.port,
                            pathname: "/" === r.pathname.charAt(0) ? r.pathname : "/" + r.pathname
                        }
                    }
                    return t = n(window.location.href),
                        function(e) {
                            let r = I.isString(e) ? n(e) : e;
                            return r.protocol === t.protocol && r.host === t.host
                        }
                }() : function() {
                    return !0
                },
                tP = function(t, e) {
                    let r;
                    t = t || 10;
                    let n = Array(t),
                        i = Array(t),
                        o = 0,
                        s = 0;
                    return e = void 0 !== e ? e : 1e3,
                        function(a) {
                            let u = Date.now(),
                                l = i[s];
                            r || (r = u), n[o] = a, i[o] = u;
                            let c = s,
                                f = 0;
                            for (; c !== o;) f += n[c++], c %= t;
                            if ((o = (o + 1) % t) === s && (s = (s + 1) % t), u - r < e) return;
                            let h = l && u - l;
                            return h ? Math.round(1e3 * f / h) : void 0
                        }
                };

            function tO(t, e) {
                let r = 0,
                    n = tP(50, 250);
                return i => {
                    let o = i.loaded,
                        s = i.lengthComputable ? i.total : void 0,
                        a = o - r,
                        u = n(a),
                        l = o <= s;
                    r = o;
                    let c = {
                        loaded: o,
                        total: s,
                        progress: s ? o / s : void 0,
                        bytes: a,
                        rate: u || void 0,
                        estimated: u && s && l ? (s - o) / u : void 0,
                        event: i
                    };
                    c[e ? "download" : "upload"] = !0, t(c)
                }
            }
            let tA = "undefined" != typeof XMLHttpRequest;
            var tC = tA && function(t) {
                return new Promise(function(e, r) {
                    let n, i = t.data,
                        o = tv.from(t.headers).normalize(),
                        s = t.responseType;

                    function a() {
                        t.cancelToken && t.cancelToken.unsubscribe(n), t.signal && t.signal.removeEventListener("abort", n)
                    }
                    I.isFormData(i) && (ts.isStandardBrowserEnv || ts.isStandardBrowserWebWorkerEnv ? o.setContentType(!1) : o.setContentType("multipart/form-data;", !1));
                    let u = new XMLHttpRequest;
                    if (t.auth) {
                        let e = t.auth.username || "",
                            r = t.auth.password ? unescape(encodeURIComponent(t.auth.password)) : "";
                        o.set("Authorization", "Basic " + btoa(e + ":" + r))
                    }
                    let l = tE(t.baseURL, t.url);

                    function c() {
                        if (!u) return;
                        let n = tv.from("getAllResponseHeaders" in u && u.getAllResponseHeaders()),
                            i = s && "text" !== s && "json" !== s ? u.response : u.responseText,
                            o = {
                                data: i,
                                status: u.status,
                                statusText: u.statusText,
                                headers: n,
                                config: t,
                                request: u
                            };
                        ! function(t, e, r) {
                            let n = r.config.validateStatus;
                            !r.status || !n || n(r.status) ? t(r) : e(new V("Request failed with status code " + r.status, [V.ERR_BAD_REQUEST, V.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4], r.config, r.request, r))
                        }(function(t) {
                            e(t), a()
                        }, function(t) {
                            r(t), a()
                        }, o), u = null
                    }
                    if (u.open(t.method.toUpperCase(), Y(l, t.params, t.paramsSerializer), !0), u.timeout = t.timeout, "onloadend" in u ? u.onloadend = c : u.onreadystatechange = function() {
                            u && 4 === u.readyState && (0 !== u.status || u.responseURL && 0 === u.responseURL.indexOf("file:")) && setTimeout(c)
                        }, u.onabort = function() {
                            u && (r(new V("Request aborted", V.ECONNABORTED, t, u)), u = null)
                        }, u.onerror = function() {
                            r(new V("Network Error", V.ERR_NETWORK, t, u)), u = null
                        }, u.ontimeout = function() {
                            let e = t.timeout ? "timeout of " + t.timeout + "ms exceeded" : "timeout exceeded",
                                n = t.transitional || tt;
                            t.timeoutErrorMessage && (e = t.timeoutErrorMessage), r(new V(e, n.clarifyTimeoutError ? V.ETIMEDOUT : V.ECONNABORTED, t, u)), u = null
                        }, ts.isStandardBrowserEnv) {
                        let e = (t.withCredentials || tS(l)) && t.xsrfCookieName && tx.read(t.xsrfCookieName);
                        e && o.set(t.xsrfHeaderName, e)
                    }
                    void 0 === i && o.setContentType(null), "setRequestHeader" in u && I.forEach(o.toJSON(), function(t, e) {
                        u.setRequestHeader(e, t)
                    }), I.isUndefined(t.withCredentials) || (u.withCredentials = !!t.withCredentials), s && "json" !== s && (u.responseType = t.responseType), "function" == typeof t.onDownloadProgress && u.addEventListener("progress", tO(t.onDownloadProgress, !0)), "function" == typeof t.onUploadProgress && u.upload && u.upload.addEventListener("progress", tO(t.onUploadProgress)), (t.cancelToken || t.signal) && (n = e => {
                        u && (r(!e || e.type ? new tw(null, t, u) : e), u.abort(), u = null)
                    }, t.cancelToken && t.cancelToken.subscribe(n), t.signal && (t.signal.aborted ? n() : t.signal.addEventListener("abort", n)));
                    let f = function(t) {
                        let e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
                        return e && e[1] || ""
                    }(l);
                    if (f && -1 === ts.protocols.indexOf(f)) {
                        r(new V("Unsupported protocol " + f + ":", V.ERR_BAD_REQUEST, t));
                        return
                    }
                    u.send(i || null)
                })
            };
            let tR = {
                http: null,
                xhr: tC
            };
            I.forEach(tR, (t, e) => {
                if (t) {
                    try {
                        Object.defineProperty(t, "name", {
                            value: e
                        })
                    } catch (t) {}
                    Object.defineProperty(t, "adapterName", {
                        value: e
                    })
                }
            });
            var tT = {
                getAdapter: t => {
                    let e, r;
                    t = I.isArray(t) ? t : [t];
                    let {
                        length: n
                    } = t;
                    for (let i = 0; i < n && (e = t[i], !(r = I.isString(e) ? tR[e.toLowerCase()] : e)); i++);
                    if (!r) {
                        if (!1 === r) throw new V(`Adapter ${e} is not supported by the environment`, "ERR_NOT_SUPPORT");
                        throw Error(I.hasOwnProp(tR, e) ? `Adapter '${e}' is not available in the build` : `Unknown adapter '${e}'`)
                    }
                    if (!I.isFunction(r)) throw TypeError("adapter is not a function");
                    return r
                },
                adapters: tR
            };

            function tk(t) {
                if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted) throw new tw(null, t)
            }

            function tL(t) {
                tk(t), t.headers = tv.from(t.headers), t.data = tg.call(t, t.transformRequest), -1 !== ["post", "put", "patch"].indexOf(t.method) && t.headers.setContentType("application/x-www-form-urlencoded", !1);
                let e = tT.getAdapter(t.adapter || tl.adapter);
                return e(t).then(function(e) {
                    return tk(t), e.data = tg.call(t, t.transformResponse, e), e.headers = tv.from(e.headers), e
                }, function(e) {
                    return !tb(e) && (tk(t), e && e.response && (e.response.data = tg.call(t, t.transformResponse, e.response), e.response.headers = tv.from(e.response.headers))), Promise.reject(e)
                })
            }
            let tM = t => t instanceof tv ? t.toJSON() : t;

            function tD(t, e) {
                e = e || {};
                let r = {};

                function n(t, e, r) {
                    return I.isPlainObject(t) && I.isPlainObject(e) ? I.merge.call({
                        caseless: r
                    }, t, e) : I.isPlainObject(e) ? I.merge({}, e) : I.isArray(e) ? e.slice() : e
                }

                function i(t, e, r) {
                    return I.isUndefined(e) ? I.isUndefined(t) ? void 0 : n(void 0, t, r) : n(t, e, r)
                }

                function o(t, e) {
                    if (!I.isUndefined(e)) return n(void 0, e)
                }

                function s(t, e) {
                    return I.isUndefined(e) ? I.isUndefined(t) ? void 0 : n(void 0, t) : n(void 0, e)
                }

                function a(r, i, o) {
                    return o in e ? n(r, i) : o in t ? n(void 0, r) : void 0
                }
                let u = {
                    url: o,
                    method: o,
                    data: o,
                    baseURL: s,
                    transformRequest: s,
                    transformResponse: s,
                    paramsSerializer: s,
                    timeout: s,
                    timeoutMessage: s,
                    withCredentials: s,
                    adapter: s,
                    responseType: s,
                    xsrfCookieName: s,
                    xsrfHeaderName: s,
                    onUploadProgress: s,
                    onDownloadProgress: s,
                    decompress: s,
                    maxContentLength: s,
                    maxBodyLength: s,
                    beforeRedirect: s,
                    transport: s,
                    httpAgent: s,
                    httpsAgent: s,
                    cancelToken: s,
                    socketPath: s,
                    responseEncoding: s,
                    validateStatus: a,
                    headers: (t, e) => i(tM(t), tM(e), !0)
                };
                return I.forEach(Object.keys(Object.assign({}, t, e)), function(n) {
                    let o = u[n] || i,
                        s = o(t[n], e[n], n);
                    I.isUndefined(s) && o !== a || (r[n] = s)
                }), r
            }
            let tj = "1.4.0",
                t_ = {};
            ["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
                t_[t] = function(r) {
                    return typeof r === t || "a" + (e < 1 ? "n " : " ") + t
                }
            });
            let tU = {};
            t_.transitional = function(t, e, r) {
                function n(t, e) {
                    return "[Axios v" + tj + "] Transitional option '" + t + "'" + e + (r ? ". " + r : "")
                }
                return (r, i, o) => {
                    if (!1 === t) throw new V(n(i, " has been removed" + (e ? " in " + e : "")), V.ERR_DEPRECATED);
                    return e && !tU[i] && (tU[i] = !0, console.warn(n(i, " has been deprecated since v" + e + " and will be removed in the near future"))), !t || t(r, i, o)
                }
            };
            var tF = {
                assertOptions: function(t, e, r) {
                    if ("object" != typeof t) throw new V("options must be an object", V.ERR_BAD_OPTION_VALUE);
                    let n = Object.keys(t),
                        i = n.length;
                    for (; i-- > 0;) {
                        let o = n[i],
                            s = e[o];
                        if (s) {
                            let e = t[o],
                                r = void 0 === e || s(e, o, t);
                            if (!0 !== r) throw new V("option " + o + " must be " + r, V.ERR_BAD_OPTION_VALUE);
                            continue
                        }
                        if (!0 !== r) throw new V("Unknown option " + o, V.ERR_BAD_OPTION)
                    }
                },
                validators: t_
            };
            let tI = tF.validators;
            class tV {
                constructor(t) {
                    this.defaults = t, this.interceptors = {
                        request: new J,
                        response: new J
                    }
                }
                request(t, e) {
                    let r, n, i;
                    "string" == typeof t ? (e = e || {}).url = t : e = t || {}, e = tD(this.defaults, e);
                    let {
                        transitional: o,
                        paramsSerializer: s,
                        headers: a
                    } = e;
                    void 0 !== o && tF.assertOptions(o, {
                        silentJSONParsing: tI.transitional(tI.boolean),
                        forcedJSONParsing: tI.transitional(tI.boolean),
                        clarifyTimeoutError: tI.transitional(tI.boolean)
                    }, !1), null != s && (I.isFunction(s) ? e.paramsSerializer = {
                        serialize: s
                    } : tF.assertOptions(s, {
                        encode: tI.function,
                        serialize: tI.function
                    }, !0)), e.method = (e.method || this.defaults.method || "get").toLowerCase(), (r = a && I.merge(a.common, a[e.method])) && I.forEach(["delete", "get", "head", "post", "put", "patch", "common"], t => {
                        delete a[t]
                    }), e.headers = tv.concat(r, a);
                    let u = [],
                        l = !0;
                    this.interceptors.request.forEach(function(t) {
                        ("function" != typeof t.runWhen || !1 !== t.runWhen(e)) && (l = l && t.synchronous, u.unshift(t.fulfilled, t.rejected))
                    });
                    let c = [];
                    this.interceptors.response.forEach(function(t) {
                        c.push(t.fulfilled, t.rejected)
                    });
                    let f = 0;
                    if (!l) {
                        let t = [tL.bind(this), void 0];
                        for (t.unshift.apply(t, u), t.push.apply(t, c), i = t.length, n = Promise.resolve(e); f < i;) n = n.then(t[f++], t[f++]);
                        return n
                    }
                    i = u.length;
                    let h = e;
                    for (f = 0; f < i;) {
                        let t = u[f++],
                            e = u[f++];
                        try {
                            h = t(h)
                        } catch (t) {
                            e.call(this, t);
                            break
                        }
                    }
                    try {
                        n = tL.call(this, h)
                    } catch (t) {
                        return Promise.reject(t)
                    }
                    for (f = 0, i = c.length; f < i;) n = n.then(c[f++], c[f++]);
                    return n
                }
                getUri(t) {
                    t = tD(this.defaults, t);
                    let e = tE(t.baseURL, t.url);
                    return Y(e, t.params, t.paramsSerializer)
                }
            }
            I.forEach(["delete", "get", "head", "options"], function(t) {
                tV.prototype[t] = function(e, r) {
                    return this.request(tD(r || {}, {
                        method: t,
                        url: e,
                        data: (r || {}).data
                    }))
                }
            }), I.forEach(["post", "put", "patch"], function(t) {
                function e(e) {
                    return function(r, n, i) {
                        return this.request(tD(i || {}, {
                            method: t,
                            headers: e ? {
                                "Content-Type": "multipart/form-data"
                            } : {},
                            url: r,
                            data: n
                        }))
                    }
                }
                tV.prototype[t] = e(), tV.prototype[t + "Form"] = e(!0)
            });
            class tB {
                constructor(t) {
                    let e;
                    if ("function" != typeof t) throw TypeError("executor must be a function.");
                    this.promise = new Promise(function(t) {
                        e = t
                    });
                    let r = this;
                    this.promise.then(t => {
                        if (!r._listeners) return;
                        let e = r._listeners.length;
                        for (; e-- > 0;) r._listeners[e](t);
                        r._listeners = null
                    }), this.promise.then = t => {
                        let e;
                        let n = new Promise(t => {
                            r.subscribe(t), e = t
                        }).then(t);
                        return n.cancel = function() {
                            r.unsubscribe(e)
                        }, n
                    }, t(function(t, n, i) {
                        r.reason || (r.reason = new tw(t, n, i), e(r.reason))
                    })
                }
                throwIfRequested() {
                    if (this.reason) throw this.reason
                }
                subscribe(t) {
                    if (this.reason) {
                        t(this.reason);
                        return
                    }
                    this._listeners ? this._listeners.push(t) : this._listeners = [t]
                }
                unsubscribe(t) {
                    if (!this._listeners) return;
                    let e = this._listeners.indexOf(t); - 1 !== e && this._listeners.splice(e, 1)
                }
                static source() {
                    let t;
                    let e = new tB(function(e) {
                        t = e
                    });
                    return {
                        token: e,
                        cancel: t
                    }
                }
            }
            let tN = {
                Continue: 100,
                SwitchingProtocols: 101,
                Processing: 102,
                EarlyHints: 103,
                Ok: 200,
                Created: 201,
                Accepted: 202,
                NonAuthoritativeInformation: 203,
                NoContent: 204,
                ResetContent: 205,
                PartialContent: 206,
                MultiStatus: 207,
                AlreadyReported: 208,
                ImUsed: 226,
                MultipleChoices: 300,
                MovedPermanently: 301,
                Found: 302,
                SeeOther: 303,
                NotModified: 304,
                UseProxy: 305,
                Unused: 306,
                TemporaryRedirect: 307,
                PermanentRedirect: 308,
                BadRequest: 400,
                Unauthorized: 401,
                PaymentRequired: 402,
                Forbidden: 403,
                NotFound: 404,
                MethodNotAllowed: 405,
                NotAcceptable: 406,
                ProxyAuthenticationRequired: 407,
                RequestTimeout: 408,
                Conflict: 409,
                Gone: 410,
                LengthRequired: 411,
                PreconditionFailed: 412,
                PayloadTooLarge: 413,
                UriTooLong: 414,
                UnsupportedMediaType: 415,
                RangeNotSatisfiable: 416,
                ExpectationFailed: 417,
                ImATeapot: 418,
                MisdirectedRequest: 421,
                UnprocessableEntity: 422,
                Locked: 423,
                FailedDependency: 424,
                TooEarly: 425,
                UpgradeRequired: 426,
                PreconditionRequired: 428,
                TooManyRequests: 429,
                RequestHeaderFieldsTooLarge: 431,
                UnavailableForLegalReasons: 451,
                InternalServerError: 500,
                NotImplemented: 501,
                BadGateway: 502,
                ServiceUnavailable: 503,
                GatewayTimeout: 504,
                HttpVersionNotSupported: 505,
                VariantAlsoNegotiates: 506,
                InsufficientStorage: 507,
                LoopDetected: 508,
                NotExtended: 510,
                NetworkAuthenticationRequired: 511
            };
            Object.entries(tN).forEach(([t, e]) => {
                tN[e] = t
            });
            let tq = function t(e) {
                let r = new tV(e),
                    n = i(tV.prototype.request, r);
                return I.extend(n, tV.prototype, r, {
                    allOwnKeys: !0
                }), I.extend(n, r, null, {
                    allOwnKeys: !0
                }), n.create = function(r) {
                    return t(tD(e, r))
                }, n
            }(tl);
            tq.Axios = tV, tq.CanceledError = tw, tq.CancelToken = tB, tq.isCancel = tb, tq.VERSION = tj, tq.toFormData = K, tq.AxiosError = V, tq.Cancel = tq.CanceledError, tq.all = function(t) {
                return Promise.all(t)
            }, tq.spread = function(t) {
                return function(e) {
                    return t.apply(null, e)
                }
            }, tq.isAxiosError = function(t) {
                return I.isObject(t) && !0 === t.isAxiosError
            }, tq.mergeConfig = tD, tq.AxiosHeaders = tv, tq.formToJSON = t => ta(I.isHTMLForm(t) ? new FormData(t) : t), tq.HttpStatusCode = tN, tq.default = tq;
            var tW = tq
        },
        7042: function(t, e, r) {
            "use strict";
            e.Z = function() {
                for (var t, e, r = 0, n = ""; r < arguments.length;)(t = arguments[r++]) && (e = function t(e) {
                    var r, n, i = "";
                    if ("string" == typeof e || "number" == typeof e) i += e;
                    else if ("object" == typeof e) {
                        if (Array.isArray(e))
                            for (r = 0; r < e.length; r++) e[r] && (n = t(e[r])) && (i && (i += " "), i += n);
                        else
                            for (r in e) e[r] && (i && (i += " "), i += r)
                    }
                    return i
                }(t)) && (n && (n += " "), n += e);
                return n
            }
        },
        2167: function(t, e, r) {
            "use strict";
            r.d(e, {
                M: function() {
                    return y
                }
            });
            var n = r(2265),
                i = r(538);

            function o() {
                let t = (0, n.useRef)(!1);
                return (0, i.L)(() => (t.current = !0, () => {
                    t.current = !1
                }), []), t
            }
            var s = r(3041),
                a = r(8243),
                u = r(961);
            class l extends n.Component {
                getSnapshotBeforeUpdate(t) {
                    let e = this.props.childRef.current;
                    if (e && t.isPresent && !this.props.isPresent) {
                        let t = this.props.sizeRef.current;
                        t.height = e.offsetHeight || 0, t.width = e.offsetWidth || 0, t.top = e.offsetTop, t.left = e.offsetLeft
                    }
                    return null
                }
                componentDidUpdate() {}
                render() {
                    return this.props.children
                }
            }

            function c({
                children: t,
                isPresent: e
            }) {
                let r = (0, n.useId)(),
                    i = (0, n.useRef)(null),
                    o = (0, n.useRef)({
                        width: 0,
                        height: 0,
                        top: 0,
                        left: 0
                    });
                return (0, n.useInsertionEffect)(() => {
                    let {
                        width: t,
                        height: n,
                        top: s,
                        left: a
                    } = o.current;
                    if (e || !i.current || !t || !n) return;
                    i.current.dataset.motionPopId = r;
                    let u = document.createElement("style");
                    return document.head.appendChild(u), u.sheet && u.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${t}px !important;
            height: ${n}px !important;
            top: ${s}px !important;
            left: ${a}px !important;
          }
        `), () => {
                        document.head.removeChild(u)
                    }
                }, [e]), n.createElement(l, {
                    isPresent: e,
                    childRef: i,
                    sizeRef: o
                }, n.cloneElement(t, {
                    ref: i
                }))
            }
            let f = ({
                children: t,
                initial: e,
                isPresent: r,
                onExitComplete: i,
                custom: o,
                presenceAffectsLayout: s,
                mode: l
            }) => {
                let f = (0, u.h)(h),
                    d = (0, n.useId)(),
                    p = (0, n.useMemo)(() => ({
                        id: d,
                        initial: e,
                        isPresent: r,
                        custom: o,
                        onExitComplete: t => {
                            for (let e of (f.set(t, !0), f.values()))
                                if (!e) return;
                            i && i()
                        },
                        register: t => (f.set(t, !1), () => f.delete(t))
                    }), s ? void 0 : [r]);
                return (0, n.useMemo)(() => {
                    f.forEach((t, e) => f.set(e, !1))
                }, [r]), n.useEffect(() => {
                    r || f.size || !i || i()
                }, [r]), "popLayout" === l && (t = n.createElement(c, {
                    isPresent: r
                }, t)), n.createElement(a.O.Provider, {
                    value: p
                }, t)
            };

            function h() {
                return new Map
            }
            var d = r(781),
                p = r(6567);
            let m = t => t.key || "",
                y = ({
                    children: t,
                    custom: e,
                    initial: r = !0,
                    onExitComplete: a,
                    exitBeforeEnter: u,
                    presenceAffectsLayout: l = !0,
                    mode: c = "sync"
                }) => {
                    var h;
                    (0, p.k)(!u, "Replace exitBeforeEnter with mode='wait'");
                    let y = (0, n.useContext)(d.p).forceRender || function() {
                            let t = o(),
                                [e, r] = (0, n.useState)(0),
                                i = (0, n.useCallback)(() => {
                                    t.current && r(e + 1)
                                }, [e]),
                                a = (0, n.useCallback)(() => s.Wi.postRender(i), [i]);
                            return [a, e]
                        }()[0],
                        v = o(),
                        g = function(t) {
                            let e = [];
                            return n.Children.forEach(t, t => {
                                (0, n.isValidElement)(t) && e.push(t)
                            }), e
                        }(t),
                        b = g,
                        w = (0, n.useRef)(new Map).current,
                        x = (0, n.useRef)(b),
                        E = (0, n.useRef)(new Map).current,
                        S = (0, n.useRef)(!0);
                    if ((0, i.L)(() => {
                            S.current = !1,
                                function(t, e) {
                                    t.forEach(t => {
                                        let r = m(t);
                                        e.set(r, t)
                                    })
                                }(g, E), x.current = b
                        }), h = () => {
                            S.current = !0, E.clear(), w.clear()
                        }, (0, n.useEffect)(() => () => h(), []), S.current) return n.createElement(n.Fragment, null, b.map(t => n.createElement(f, {
                        key: m(t),
                        isPresent: !0,
                        initial: !!r && void 0,
                        presenceAffectsLayout: l,
                        mode: c
                    }, t)));
                    b = [...b];
                    let P = x.current.map(m),
                        O = g.map(m),
                        A = P.length;
                    for (let t = 0; t < A; t++) {
                        let e = P[t]; - 1 !== O.indexOf(e) || w.has(e) || w.set(e, void 0)
                    }
                    return "wait" === c && w.size && (b = []), w.forEach((t, r) => {
                        if (-1 !== O.indexOf(r)) return;
                        let i = E.get(r);
                        if (!i) return;
                        let o = P.indexOf(r),
                            s = t;
                        s || (s = n.createElement(f, {
                            key: m(i),
                            isPresent: !1,
                            onExitComplete: () => {
                                E.delete(r), w.delete(r);
                                let t = x.current.findIndex(t => t.key === r);
                                if (x.current.splice(t, 1), !w.size) {
                                    if (x.current = g, !1 === v.current) return;
                                    y(), a && a()
                                }
                            },
                            custom: e,
                            presenceAffectsLayout: l,
                            mode: c
                        }, i), w.set(r, s)), b.splice(o, 0, s)
                    }), b = b.map(t => {
                        let e = t.key;
                        return w.has(e) ? t : n.createElement(f, {
                            key: m(t),
                            isPresent: !0,
                            presenceAffectsLayout: l,
                            mode: c
                        }, t)
                    }), n.createElement(n.Fragment, null, w.size ? b : b.map(t => (0, n.cloneElement)(t)))
                }
        },
        781: function(t, e, r) {
            "use strict";
            r.d(e, {
                p: function() {
                    return i
                }
            });
            var n = r(2265);
            let i = (0, n.createContext)({})
        },
        8243: function(t, e, r) {
            "use strict";
            r.d(e, {
                O: function() {
                    return i
                }
            });
            var n = r(2265);
            let i = (0, n.createContext)(null)
        },
        3041: function(t, e, r) {
            "use strict";
            r.d(e, {
                Pn: function() {
                    return s
                },
                Wi: function() {
                    return o
                },
                frameData: function() {
                    return a
                },
                S6: function() {
                    return u
                }
            });
            var n = r(6977);
            let i = ["prepare", "read", "update", "preRender", "render", "postRender"],
                {
                    schedule: o,
                    cancel: s,
                    state: a,
                    steps: u
                } = function(t, e) {
                    let r = !1,
                        n = !0,
                        o = {
                            delta: 0,
                            timestamp: 0,
                            isProcessing: !1
                        },
                        s = i.reduce((t, e) => (t[e] = function(t) {
                            let e = [],
                                r = [],
                                n = 0,
                                i = !1,
                                o = !1,
                                s = new WeakSet,
                                a = {
                                    schedule: (t, o = !1, a = !1) => {
                                        let u = a && i,
                                            l = u ? e : r;
                                        return o && s.add(t), -1 === l.indexOf(t) && (l.push(t), u && i && (n = e.length)), t
                                    },
                                    cancel: t => {
                                        let e = r.indexOf(t); - 1 !== e && r.splice(e, 1), s.delete(t)
                                    },
                                    process: u => {
                                        if (i) {
                                            o = !0;
                                            return
                                        }
                                        if (i = !0, [e, r] = [r, e], r.length = 0, n = e.length)
                                            for (let r = 0; r < n; r++) {
                                                let n = e[r];
                                                n(u), s.has(n) && (a.schedule(n), t())
                                            }
                                        i = !1, o && (o = !1, a.process(u))
                                    }
                                };
                            return a
                        }(() => r = !0), t), {}),
                        a = t => s[t].process(o),
                        u = () => {
                            let s = performance.now();
                            r = !1, o.delta = n ? 1e3 / 60 : Math.max(Math.min(s - o.timestamp, 40), 1), o.timestamp = s, o.isProcessing = !0, i.forEach(a), o.isProcessing = !1, r && e && (n = !1, t(u))
                        },
                        l = () => {
                            r = !0, n = !0, o.isProcessing || t(u)
                        },
                        c = i.reduce((t, e) => {
                            let n = s[e];
                            return t[e] = (t, e = !1, i = !1) => (r || l(), n.schedule(t, e, i)), t
                        }, {});
                    return {
                        schedule: c,
                        cancel: t => i.forEach(e => s[e].cancel(t)),
                        state: o,
                        steps: s
                    }
                }("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : n.Z, !0)
        },
        7870: function(t, e, r) {
            "use strict";
            let n;
            r.d(e, {
                E: function() {
                    return i_
                }
            });
            var i, o, s = r(2265);
            let a = (0, s.createContext)({
                    transformPagePoint: t => t,
                    isStatic: !1,
                    reducedMotion: "never"
                }),
                u = (0, s.createContext)({});
            var l = r(8243),
                c = r(538);
            let f = (0, s.createContext)({
                strict: !1
            });

            function h(t) {
                return "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
            }

            function d(t) {
                return "string" == typeof t || Array.isArray(t)
            }

            function p(t) {
                return "object" == typeof t && "function" == typeof t.start
            }
            let m = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
                y = ["initial", ...m];

            function v(t) {
                return p(t.animate) || y.some(e => d(t[e]))
            }

            function g(t) {
                return !!(v(t) || t.variants)
            }

            function b(t) {
                return Array.isArray(t) ? t.join(" ") : t
            }
            let w = {
                    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
                    exit: ["exit"],
                    drag: ["drag", "dragControls"],
                    focus: ["whileFocus"],
                    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
                    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
                    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
                    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
                    layout: ["layout", "layoutId"]
                },
                x = {};
            for (let t in w) x[t] = {
                isEnabled: e => w[t].some(t => !!e[t])
            };
            var E = r(6613),
                S = r(781);
            let P = (0, s.createContext)({}),
                O = Symbol.for("motionComponentSymbol"),
                A = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

            function C(t) {
                if ("string" != typeof t || t.includes("-"));
                else if (A.indexOf(t) > -1 || /[A-Z]/.test(t)) return !0;
                return !1
            }
            let R = {},
                T = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
                k = new Set(T);

            function L(t, {
                layout: e,
                layoutId: r
            }) {
                return k.has(t) || t.startsWith("origin") || (e || void 0 !== r) && (!!R[t] || "opacity" === t)
            }
            let M = t => !!(t && t.getVelocity),
                D = {
                    x: "translateX",
                    y: "translateY",
                    z: "translateZ",
                    transformPerspective: "perspective"
                },
                j = T.length,
                _ = t => e => "string" == typeof e && e.startsWith(t),
                U = _("--"),
                F = _("var(--"),
                I = (t, e) => e && "number" == typeof t ? e.transform(t) : t,
                V = (t, e, r) => Math.min(Math.max(r, t), e),
                B = {
                    test: t => "number" == typeof t,
                    parse: parseFloat,
                    transform: t => t
                },
                N = { ...B,
                    transform: t => V(0, 1, t)
                },
                q = { ...B,
                    default: 1
                },
                W = t => Math.round(1e5 * t) / 1e5,
                $ = /(-)?([\d]*\.?[\d])+/g,
                z = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
                H = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;

            function K(t) {
                return "string" == typeof t
            }
            let Z = t => ({
                    test: e => K(e) && e.endsWith(t) && 1 === e.split(" ").length,
                    parse: parseFloat,
                    transform: e => `${e}${t}`
                }),
                Q = Z("deg"),
                G = Z("%"),
                X = Z("px"),
                Y = Z("vh"),
                J = Z("vw"),
                tt = { ...G,
                    parse: t => G.parse(t) / 100,
                    transform: t => G.transform(100 * t)
                },
                te = { ...B,
                    transform: Math.round
                },
                tr = {
                    borderWidth: X,
                    borderTopWidth: X,
                    borderRightWidth: X,
                    borderBottomWidth: X,
                    borderLeftWidth: X,
                    borderRadius: X,
                    radius: X,
                    borderTopLeftRadius: X,
                    borderTopRightRadius: X,
                    borderBottomRightRadius: X,
                    borderBottomLeftRadius: X,
                    width: X,
                    maxWidth: X,
                    height: X,
                    maxHeight: X,
                    size: X,
                    top: X,
                    right: X,
                    bottom: X,
                    left: X,
                    padding: X,
                    paddingTop: X,
                    paddingRight: X,
                    paddingBottom: X,
                    paddingLeft: X,
                    margin: X,
                    marginTop: X,
                    marginRight: X,
                    marginBottom: X,
                    marginLeft: X,
                    rotate: Q,
                    rotateX: Q,
                    rotateY: Q,
                    rotateZ: Q,
                    scale: q,
                    scaleX: q,
                    scaleY: q,
                    scaleZ: q,
                    skew: Q,
                    skewX: Q,
                    skewY: Q,
                    distance: X,
                    translateX: X,
                    translateY: X,
                    translateZ: X,
                    x: X,
                    y: X,
                    z: X,
                    perspective: X,
                    transformPerspective: X,
                    opacity: N,
                    originX: tt,
                    originY: tt,
                    originZ: X,
                    zIndex: te,
                    fillOpacity: N,
                    strokeOpacity: N,
                    numOctaves: te
                };

            function tn(t, e, r, n) {
                let {
                    style: i,
                    vars: o,
                    transform: s,
                    transformOrigin: a
                } = t, u = !1, l = !1, c = !0;
                for (let t in e) {
                    let r = e[t];
                    if (U(t)) {
                        o[t] = r;
                        continue
                    }
                    let n = tr[t],
                        f = I(r, n);
                    if (k.has(t)) {
                        if (u = !0, s[t] = f, !c) continue;
                        r !== (n.default || 0) && (c = !1)
                    } else t.startsWith("origin") ? (l = !0, a[t] = f) : i[t] = f
                }
                if (!e.transform && (u || n ? i.transform = function(t, {
                        enableHardwareAcceleration: e = !0,
                        allowTransformNone: r = !0
                    }, n, i) {
                        let o = "";
                        for (let e = 0; e < j; e++) {
                            let r = T[e];
                            if (void 0 !== t[r]) {
                                let e = D[r] || r;
                                o += `${e}(${t[r]}) `
                            }
                        }
                        return e && !t.z && (o += "translateZ(0)"), o = o.trim(), i ? o = i(t, n ? "" : o) : r && n && (o = "none"), o
                    }(t.transform, r, c, n) : i.transform && (i.transform = "none")), l) {
                    let {
                        originX: t = "50%",
                        originY: e = "50%",
                        originZ: r = 0
                    } = a;
                    i.transformOrigin = `${t} ${e} ${r}`
                }
            }
            let ti = () => ({
                style: {},
                transform: {},
                transformOrigin: {},
                vars: {}
            });

            function to(t, e, r) {
                for (let n in e) M(e[n]) || L(n, r) || (t[n] = e[n])
            }

            function ts(t, e, r) {
                let n = {},
                    i = function(t, e, r) {
                        let n = t.style || {},
                            i = {};
                        return to(i, n, t), Object.assign(i, function({
                            transformTemplate: t
                        }, e, r) {
                            return (0, s.useMemo)(() => {
                                let n = ti();
                                return tn(n, e, {
                                    enableHardwareAcceleration: !r
                                }, t), Object.assign({}, n.vars, n.style)
                            }, [e])
                        }(t, e, r)), t.transformValues ? t.transformValues(i) : i
                    }(t, e, r);
                return t.drag && !1 !== t.dragListener && (n.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = !0 === t.drag ? "none" : `pan-${"x"===t.drag?"y":"x"}`), void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0), n.style = i, n
            }
            let ta = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "ignoreStrict", "viewport"]);

            function tu(t) {
                return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || ta.has(t)
            }
            let tl = t => !tu(t);
            try {
                (i = require("@emotion/is-prop-valid").default) && (tl = t => t.startsWith("on") ? !tu(t) : i(t))
            } catch (t) {}

            function tc(t, e, r) {
                return "string" == typeof t ? t : X.transform(e + r * t)
            }
            let tf = {
                    offset: "stroke-dashoffset",
                    array: "stroke-dasharray"
                },
                th = {
                    offset: "strokeDashoffset",
                    array: "strokeDasharray"
                };

            function td(t, {
                attrX: e,
                attrY: r,
                attrScale: n,
                originX: i,
                originY: o,
                pathLength: s,
                pathSpacing: a = 1,
                pathOffset: u = 0,
                ...l
            }, c, f, h) {
                if (tn(t, l, c, h), f) {
                    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
                    return
                }
                t.attrs = t.style, t.style = {};
                let {
                    attrs: d,
                    style: p,
                    dimensions: m
                } = t;
                d.transform && (m && (p.transform = d.transform), delete d.transform), m && (void 0 !== i || void 0 !== o || p.transform) && (p.transformOrigin = function(t, e, r) {
                    let n = tc(e, t.x, t.width),
                        i = tc(r, t.y, t.height);
                    return `${n} ${i}`
                }(m, void 0 !== i ? i : .5, void 0 !== o ? o : .5)), void 0 !== e && (d.x = e), void 0 !== r && (d.y = r), void 0 !== n && (d.scale = n), void 0 !== s && function(t, e, r = 1, n = 0, i = !0) {
                    t.pathLength = 1;
                    let o = i ? tf : th;
                    t[o.offset] = X.transform(-n);
                    let s = X.transform(e),
                        a = X.transform(r);
                    t[o.array] = `${s} ${a}`
                }(d, s, a, u, !1)
            }
            let tp = () => ({ ...ti(),
                    attrs: {}
                }),
                tm = t => "string" == typeof t && "svg" === t.toLowerCase();

            function ty(t, e, r, n) {
                let i = (0, s.useMemo)(() => {
                    let r = tp();
                    return td(r, e, {
                        enableHardwareAcceleration: !1
                    }, tm(n), t.transformTemplate), { ...r.attrs,
                        style: { ...r.style
                        }
                    }
                }, [e]);
                if (t.style) {
                    let e = {};
                    to(e, t.style, t), i.style = { ...e,
                        ...i.style
                    }
                }
                return i
            }
            let tv = t => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

            function tg(t, {
                style: e,
                vars: r
            }, n, i) {
                for (let o in Object.assign(t.style, e, i && i.getProjectionStyles(n)), r) t.style.setProperty(o, r[o])
            }
            let tb = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

            function tw(t, e, r, n) {
                for (let r in tg(t, e, void 0, n), e.attrs) t.setAttribute(tb.has(r) ? r : tv(r), e.attrs[r])
            }

            function tx(t, e) {
                let {
                    style: r
                } = t, n = {};
                for (let i in r)(M(r[i]) || e.style && M(e.style[i]) || L(i, t)) && (n[i] = r[i]);
                return n
            }

            function tE(t, e) {
                let r = tx(t, e);
                for (let n in t)
                    if (M(t[n]) || M(e[n])) {
                        let e = -1 !== T.indexOf(n) ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n;
                        r[e] = t[n]
                    }
                return r
            }

            function tS(t, e, r, n = {}, i = {}) {
                return "function" == typeof e && (e = e(void 0 !== r ? r : t.custom, n, i)), "string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e && (e = e(void 0 !== r ? r : t.custom, n, i)), e
            }
            var tP = r(961);
            let tO = t => Array.isArray(t),
                tA = t => !!(t && "object" == typeof t && t.mix && t.toValue),
                tC = t => tO(t) ? t[t.length - 1] || 0 : t;

            function tR(t) {
                let e = M(t) ? t.get() : t;
                return tA(e) ? e.toValue() : e
            }
            let tT = t => (e, r) => {
                    let n = (0, s.useContext)(u),
                        i = (0, s.useContext)(l.O),
                        o = () => (function({
                            scrapeMotionValuesFromProps: t,
                            createRenderState: e,
                            onMount: r
                        }, n, i, o) {
                            let s = {
                                latestValues: function(t, e, r, n) {
                                    let i = {},
                                        o = n(t, {});
                                    for (let t in o) i[t] = tR(o[t]);
                                    let {
                                        initial: s,
                                        animate: a
                                    } = t, u = v(t), l = g(t);
                                    e && l && !u && !1 !== t.inherit && (void 0 === s && (s = e.initial), void 0 === a && (a = e.animate));
                                    let c = !!r && !1 === r.initial;
                                    c = c || !1 === s;
                                    let f = c ? a : s;
                                    if (f && "boolean" != typeof f && !p(f)) {
                                        let e = Array.isArray(f) ? f : [f];
                                        e.forEach(e => {
                                            let r = tS(t, e);
                                            if (!r) return;
                                            let {
                                                transitionEnd: n,
                                                transition: o,
                                                ...s
                                            } = r;
                                            for (let t in s) {
                                                let e = s[t];
                                                if (Array.isArray(e)) {
                                                    let t = c ? e.length - 1 : 0;
                                                    e = e[t]
                                                }
                                                null !== e && (i[t] = e)
                                            }
                                            for (let t in n) i[t] = n[t]
                                        })
                                    }
                                    return i
                                }(n, i, o, t),
                                renderState: e()
                            };
                            return r && (s.mount = t => r(n, t, s)), s
                        })(t, e, n, i);
                    return r ? o() : (0, tP.h)(o)
                },
                tk = {
                    useVisualState: tT({
                        scrapeMotionValuesFromProps: tE,
                        createRenderState: tp,
                        onMount: (t, e, {
                            renderState: r,
                            latestValues: n
                        }) => {
                            try {
                                r.dimensions = "function" == typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
                            } catch (t) {
                                r.dimensions = {
                                    x: 0,
                                    y: 0,
                                    width: 0,
                                    height: 0
                                }
                            }
                            td(r, n, {
                                enableHardwareAcceleration: !1
                            }, tm(e.tagName), t.transformTemplate), tw(e, r)
                        }
                    })
                },
                tL = {
                    useVisualState: tT({
                        scrapeMotionValuesFromProps: tx,
                        createRenderState: ti
                    })
                };

            function tM(t, e, r, n = {
                passive: !0
            }) {
                return t.addEventListener(e, r, n), () => t.removeEventListener(e, r)
            }
            let tD = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary;

            function tj(t, e = "page") {
                return {
                    point: {
                        x: t[e + "X"],
                        y: t[e + "Y"]
                    }
                }
            }
            let t_ = t => e => tD(e) && t(e, tj(e));

            function tU(t, e, r, n) {
                return tM(t, e, t_(r), n)
            }
            let tF = (t, e) => r => e(t(r)),
                tI = (...t) => t.reduce(tF);

            function tV(t) {
                let e = null;
                return () => null === e && (e = t, () => {
                    e = null
                })
            }
            let tB = tV("dragHorizontal"),
                tN = tV("dragVertical");

            function tq(t) {
                let e = !1;
                if ("y" === t) e = tN();
                else if ("x" === t) e = tB();
                else {
                    let t = tB(),
                        r = tN();
                    t && r ? e = () => {
                        t(), r()
                    } : (t && t(), r && r())
                }
                return e
            }

            function tW() {
                let t = tq(!0);
                return !t || (t(), !1)
            }
            class t$ {
                constructor(t) {
                    this.isMounted = !1, this.node = t
                }
                update() {}
            }
            var tz = r(3041);

            function tH(t, e) {
                let r = "pointer" + (e ? "enter" : "leave"),
                    n = "onHover" + (e ? "Start" : "End");
                return tU(t.current, r, (r, i) => {
                    if ("touch" === r.type || tW()) return;
                    let o = t.getProps();
                    t.animationState && o.whileHover && t.animationState.setActive("whileHover", e), o[n] && tz.Wi.update(() => o[n](r, i))
                }, {
                    passive: !t.getProps()[n]
                })
            }
            let tK = (t, e) => !!e && (t === e || tK(t, e.parentElement));
            var tZ = r(6977);

            function tQ(t, e) {
                if (!e) return;
                let r = new PointerEvent("pointer" + t);
                e(r, tj(r))
            }
            let tG = new WeakMap,
                tX = new WeakMap,
                tY = t => {
                    let e = tG.get(t.target);
                    e && e(t)
                },
                tJ = t => {
                    t.forEach(tY)
                },
                t0 = {
                    some: 0,
                    all: 1
                };

            function t1(t, e) {
                if (!Array.isArray(e)) return !1;
                let r = e.length;
                if (r !== t.length) return !1;
                for (let n = 0; n < r; n++)
                    if (e[n] !== t[n]) return !1;
                return !0
            }

            function t2(t, e, r) {
                let n = t.getProps();
                return tS(n, e, void 0 !== r ? r : n.custom, function(t) {
                    let e = {};
                    return t.values.forEach((t, r) => e[r] = t.get()), e
                }(t), function(t) {
                    let e = {};
                    return t.values.forEach((t, r) => e[r] = t.getVelocity()), e
                }(t))
            }
            let t5 = "data-" + tv("framerAppearId");
            var t3 = r(6567);
            let t6 = t => 1e3 * t,
                t4 = t => t / 1e3,
                t8 = {
                    current: !1
                },
                t7 = t => Array.isArray(t) && "number" == typeof t[0],
                t9 = ([t, e, r, n]) => `cubic-bezier(${t}, ${e}, ${r}, ${n})`,
                et = {
                    linear: "linear",
                    ease: "ease",
                    easeIn: "ease-in",
                    easeOut: "ease-out",
                    easeInOut: "ease-in-out",
                    circIn: t9([0, .65, .55, 1]),
                    circOut: t9([.55, 0, 1, .45]),
                    backIn: t9([.31, .01, .66, -.59]),
                    backOut: t9([.33, 1.53, .69, .99])
                },
                ee = (t, e, r) => (((1 - 3 * r + 3 * e) * t + (3 * r - 6 * e)) * t + 3 * e) * t;

            function er(t, e, r, n) {
                if (t === e && r === n) return tZ.Z;
                let i = e => (function(t, e, r, n, i) {
                    let o, s;
                    let a = 0;
                    do(o = ee(s = e + (r - e) / 2, n, i) - t) > 0 ? r = s : e = s; while (Math.abs(o) > 1e-7 && ++a < 12);
                    return s
                })(e, 0, 1, t, r);
                return t => 0 === t || 1 === t ? t : ee(i(t), e, n)
            }
            let en = er(.42, 0, 1, 1),
                ei = er(0, 0, .58, 1),
                eo = er(.42, 0, .58, 1),
                es = t => Array.isArray(t) && "number" != typeof t[0],
                ea = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
                eu = t => e => 1 - t(1 - e),
                el = t => 1 - Math.sin(Math.acos(t)),
                ec = eu(el),
                ef = ea(ec),
                eh = er(.33, 1.53, .69, .99),
                ed = eu(eh),
                ep = ea(ed),
                em = {
                    linear: tZ.Z,
                    easeIn: en,
                    easeInOut: eo,
                    easeOut: ei,
                    circIn: el,
                    circInOut: ef,
                    circOut: ec,
                    backIn: ed,
                    backInOut: ep,
                    backOut: eh,
                    anticipate: t => (t *= 2) < 1 ? .5 * ed(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                },
                ey = t => {
                    if (Array.isArray(t)) {
                        (0, t3.k)(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
                        let [e, r, n, i] = t;
                        return er(e, r, n, i)
                    }
                    return "string" == typeof t ? ((0, t3.k)(void 0 !== em[t], `Invalid easing type '${t}'`), em[t]) : t
                },
                ev = (t, e) => r => !!(K(r) && H.test(r) && r.startsWith(t) || e && Object.prototype.hasOwnProperty.call(r, e)),
                eg = (t, e, r) => n => {
                    if (!K(n)) return n;
                    let [i, o, s, a] = n.match($);
                    return {
                        [t]: parseFloat(i),
                        [e]: parseFloat(o),
                        [r]: parseFloat(s),
                        alpha: void 0 !== a ? parseFloat(a) : 1
                    }
                },
                eb = t => V(0, 255, t),
                ew = { ...B,
                    transform: t => Math.round(eb(t))
                },
                ex = {
                    test: ev("rgb", "red"),
                    parse: eg("red", "green", "blue"),
                    transform: ({
                        red: t,
                        green: e,
                        blue: r,
                        alpha: n = 1
                    }) => "rgba(" + ew.transform(t) + ", " + ew.transform(e) + ", " + ew.transform(r) + ", " + W(N.transform(n)) + ")"
                },
                eE = {
                    test: ev("#"),
                    parse: function(t) {
                        let e = "",
                            r = "",
                            n = "",
                            i = "";
                        return t.length > 5 ? (e = t.substring(1, 3), r = t.substring(3, 5), n = t.substring(5, 7), i = t.substring(7, 9)) : (e = t.substring(1, 2), r = t.substring(2, 3), n = t.substring(3, 4), i = t.substring(4, 5), e += e, r += r, n += n, i += i), {
                            red: parseInt(e, 16),
                            green: parseInt(r, 16),
                            blue: parseInt(n, 16),
                            alpha: i ? parseInt(i, 16) / 255 : 1
                        }
                    },
                    transform: ex.transform
                },
                eS = {
                    test: ev("hsl", "hue"),
                    parse: eg("hue", "saturation", "lightness"),
                    transform: ({
                        hue: t,
                        saturation: e,
                        lightness: r,
                        alpha: n = 1
                    }) => "hsla(" + Math.round(t) + ", " + G.transform(W(e)) + ", " + G.transform(W(r)) + ", " + W(N.transform(n)) + ")"
                },
                eP = {
                    test: t => ex.test(t) || eE.test(t) || eS.test(t),
                    parse: t => ex.test(t) ? ex.parse(t) : eS.test(t) ? eS.parse(t) : eE.parse(t),
                    transform: t => K(t) ? t : t.hasOwnProperty("red") ? ex.transform(t) : eS.transform(t)
                },
                eO = (t, e, r) => -r * t + r * e + t;

            function eA(t, e, r) {
                return (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6) ? t + (e - t) * 6 * r : r < .5 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t
            }
            let eC = (t, e, r) => {
                    let n = t * t;
                    return Math.sqrt(Math.max(0, r * (e * e - n) + n))
                },
                eR = [eE, ex, eS],
                eT = t => eR.find(e => e.test(t));

            function ek(t) {
                let e = eT(t);
                (0, t3.k)(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`);
                let r = e.parse(t);
                return e === eS && (r = function({
                    hue: t,
                    saturation: e,
                    lightness: r,
                    alpha: n
                }) {
                    t /= 360, r /= 100;
                    let i = 0,
                        o = 0,
                        s = 0;
                    if (e /= 100) {
                        let n = r < .5 ? r * (1 + e) : r + e - r * e,
                            a = 2 * r - n;
                        i = eA(a, n, t + 1 / 3), o = eA(a, n, t), s = eA(a, n, t - 1 / 3)
                    } else i = o = s = r;
                    return {
                        red: Math.round(255 * i),
                        green: Math.round(255 * o),
                        blue: Math.round(255 * s),
                        alpha: n
                    }
                }(r)), r
            }
            let eL = (t, e) => {
                    let r = ek(t),
                        n = ek(e),
                        i = { ...r
                        };
                    return t => (i.red = eC(r.red, n.red, t), i.green = eC(r.green, n.green, t), i.blue = eC(r.blue, n.blue, t), i.alpha = eO(r.alpha, n.alpha, t), ex.transform(i))
                },
                eM = {
                    regex: /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
                    countKey: "Vars",
                    token: "${v}",
                    parse: tZ.Z
                },
                eD = {
                    regex: z,
                    countKey: "Colors",
                    token: "${c}",
                    parse: eP.parse
                },
                ej = {
                    regex: $,
                    countKey: "Numbers",
                    token: "${n}",
                    parse: B.parse
                };

            function e_(t, {
                regex: e,
                countKey: r,
                token: n,
                parse: i
            }) {
                let o = t.tokenised.match(e);
                o && (t["num" + r] = o.length, t.tokenised = t.tokenised.replace(e, n), t.values.push(...o.map(i)))
            }

            function eU(t) {
                let e = t.toString(),
                    r = {
                        value: e,
                        tokenised: e,
                        values: [],
                        numVars: 0,
                        numColors: 0,
                        numNumbers: 0
                    };
                return r.value.includes("var(--") && e_(r, eM), e_(r, eD), e_(r, ej), r
            }

            function eF(t) {
                return eU(t).values
            }

            function eI(t) {
                let {
                    values: e,
                    numColors: r,
                    numVars: n,
                    tokenised: i
                } = eU(t), o = e.length;
                return t => {
                    let e = i;
                    for (let i = 0; i < o; i++) e = i < n ? e.replace(eM.token, t[i]) : i < n + r ? e.replace(eD.token, eP.transform(t[i])) : e.replace(ej.token, W(t[i]));
                    return e
                }
            }
            let eV = t => "number" == typeof t ? 0 : t,
                eB = {
                    test: function(t) {
                        var e, r;
                        return isNaN(t) && K(t) && ((null === (e = t.match($)) || void 0 === e ? void 0 : e.length) || 0) + ((null === (r = t.match(z)) || void 0 === r ? void 0 : r.length) || 0) > 0
                    },
                    parse: eF,
                    createTransformer: eI,
                    getAnimatableNone: function(t) {
                        let e = eF(t),
                            r = eI(t);
                        return r(e.map(eV))
                    }
                },
                eN = (t, e) => r => `${r>0?e:t}`;

            function eq(t, e) {
                return "number" == typeof t ? r => eO(t, e, r) : eP.test(t) ? eL(t, e) : t.startsWith("var(") ? eN(t, e) : ez(t, e)
            }
            let eW = (t, e) => {
                    let r = [...t],
                        n = r.length,
                        i = t.map((t, r) => eq(t, e[r]));
                    return t => {
                        for (let e = 0; e < n; e++) r[e] = i[e](t);
                        return r
                    }
                },
                e$ = (t, e) => {
                    let r = { ...t,
                            ...e
                        },
                        n = {};
                    for (let i in r) void 0 !== t[i] && void 0 !== e[i] && (n[i] = eq(t[i], e[i]));
                    return t => {
                        for (let e in n) r[e] = n[e](t);
                        return r
                    }
                },
                ez = (t, e) => {
                    let r = eB.createTransformer(e),
                        n = eU(t),
                        i = eU(e),
                        o = n.numVars === i.numVars && n.numColors === i.numColors && n.numNumbers >= i.numNumbers;
                    return o ? tI(eW(n.values, i.values), r) : ((0, t3.K)(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), eN(t, e))
                },
                eH = (t, e, r) => {
                    let n = e - t;
                    return 0 === n ? 1 : (r - t) / n
                },
                eK = (t, e) => r => eO(t, e, r);

            function eZ(t, e, {
                clamp: r = !0,
                ease: n,
                mixer: i
            } = {}) {
                let o = t.length;
                if ((0, t3.k)(o === e.length, "Both input and output ranges must be the same length"), 1 === o) return () => e[0];
                t[0] > t[o - 1] && (t = [...t].reverse(), e = [...e].reverse());
                let s = function(t, e, r) {
                        let n = [],
                            i = r || function(t) {
                                if ("number" == typeof t);
                                else if ("string" == typeof t) return eP.test(t) ? eL : ez;
                                else if (Array.isArray(t)) return eW;
                                else if ("object" == typeof t) return e$;
                                return eK
                            }(t[0]),
                            o = t.length - 1;
                        for (let r = 0; r < o; r++) {
                            let o = i(t[r], t[r + 1]);
                            if (e) {
                                let t = Array.isArray(e) ? e[r] || tZ.Z : e;
                                o = tI(t, o)
                            }
                            n.push(o)
                        }
                        return n
                    }(e, n, i),
                    a = s.length,
                    u = e => {
                        let r = 0;
                        if (a > 1)
                            for (; r < t.length - 2 && !(e < t[r + 1]); r++);
                        let n = eH(t[r], t[r + 1], e);
                        return s[r](n)
                    };
                return r ? e => u(V(t[0], t[o - 1], e)) : u
            }

            function eQ({
                duration: t = 300,
                keyframes: e,
                times: r,
                ease: n = "easeInOut"
            }) {
                let i = es(n) ? n.map(ey) : ey(n),
                    o = {
                        done: !1,
                        value: e[0]
                    },
                    s = (r && r.length === e.length ? r : function(t) {
                        let e = [0];
                        return function(t, e) {
                            let r = t[t.length - 1];
                            for (let n = 1; n <= e; n++) {
                                let i = eH(0, e, n);
                                t.push(eO(r, 1, i))
                            }
                        }(e, t.length - 1), e
                    }(e)).map(e => e * t),
                    a = eZ(s, e, {
                        ease: Array.isArray(i) ? i : e.map(() => i || eo).splice(0, e.length - 1)
                    });
                return {
                    calculatedDuration: t,
                    next: e => (o.value = a(e), o.done = e >= t, o)
                }
            }

            function eG(t, e, r) {
                var n, i;
                let o = Math.max(e - 5, 0);
                return n = r - t(o), (i = e - o) ? n * (1e3 / i) : 0
            }

            function eX(t, e) {
                return t * Math.sqrt(1 - e * e)
            }
            let eY = ["duration", "bounce"],
                eJ = ["stiffness", "damping", "mass"];

            function e0(t, e) {
                return e.some(e => void 0 !== t[e])
            }

            function e1({
                keyframes: t,
                restDelta: e,
                restSpeed: r,
                ...n
            }) {
                let i;
                let o = t[0],
                    s = t[t.length - 1],
                    a = {
                        done: !1,
                        value: o
                    },
                    {
                        stiffness: u,
                        damping: l,
                        mass: c,
                        velocity: f,
                        duration: h,
                        isResolvedFromDuration: d
                    } = function(t) {
                        let e = {
                            velocity: 0,
                            stiffness: 100,
                            damping: 10,
                            mass: 1,
                            isResolvedFromDuration: !1,
                            ...t
                        };
                        if (!e0(t, eJ) && e0(t, eY)) {
                            let r = function({
                                duration: t = 800,
                                bounce: e = .25,
                                velocity: r = 0,
                                mass: n = 1
                            }) {
                                let i, o;
                                (0, t3.K)(t <= t6(10), "Spring duration must be 10 seconds or less");
                                let s = 1 - e;
                                s = V(.05, 1, s), t = V(.01, 10, t4(t)), s < 1 ? (i = e => {
                                    let n = e * s,
                                        i = n * t,
                                        o = eX(e, s);
                                    return .001 - (n - r) / o * Math.exp(-i)
                                }, o = e => {
                                    let n = e * s,
                                        o = n * t,
                                        a = Math.pow(s, 2) * Math.pow(e, 2) * t,
                                        u = eX(Math.pow(e, 2), s),
                                        l = -i(e) + .001 > 0 ? -1 : 1;
                                    return l * ((o * r + r - a) * Math.exp(-o)) / u
                                }) : (i = e => {
                                    let n = Math.exp(-e * t),
                                        i = (e - r) * t + 1;
                                    return -.001 + n * i
                                }, o = e => {
                                    let n = Math.exp(-e * t),
                                        i = (r - e) * (t * t);
                                    return n * i
                                });
                                let a = 5 / t,
                                    u = function(t, e, r) {
                                        let n = r;
                                        for (let r = 1; r < 12; r++) n -= t(n) / e(n);
                                        return n
                                    }(i, o, a);
                                if (t = t6(t), isNaN(u)) return {
                                    stiffness: 100,
                                    damping: 10,
                                    duration: t
                                }; {
                                    let e = Math.pow(u, 2) * n;
                                    return {
                                        stiffness: e,
                                        damping: 2 * s * Math.sqrt(n * e),
                                        duration: t
                                    }
                                }
                            }(t);
                            (e = { ...e,
                                ...r,
                                velocity: 0,
                                mass: 1
                            }).isResolvedFromDuration = !0
                        }
                        return e
                    }(n),
                    p = f ? -t4(f) : 0,
                    m = l / (2 * Math.sqrt(u * c)),
                    y = s - o,
                    v = t4(Math.sqrt(u / c)),
                    g = 5 > Math.abs(y);
                if (r || (r = g ? .01 : 2), e || (e = g ? .005 : .5), m < 1) {
                    let t = eX(v, m);
                    i = e => {
                        let r = Math.exp(-m * v * e);
                        return s - r * ((p + m * v * y) / t * Math.sin(t * e) + y * Math.cos(t * e))
                    }
                } else if (1 === m) i = t => s - Math.exp(-v * t) * (y + (p + v * y) * t);
                else {
                    let t = v * Math.sqrt(m * m - 1);
                    i = e => {
                        let r = Math.exp(-m * v * e),
                            n = Math.min(t * e, 300);
                        return s - r * ((p + m * v * y) * Math.sinh(n) + t * y * Math.cosh(n)) / t
                    }
                }
                return {
                    calculatedDuration: d && h || null,
                    next: t => {
                        let n = i(t);
                        if (d) a.done = t >= h;
                        else {
                            let o = p;
                            0 !== t && (o = m < 1 ? eG(i, t, n) : 0);
                            let u = Math.abs(o) <= r,
                                l = Math.abs(s - n) <= e;
                            a.done = u && l
                        }
                        return a.value = a.done ? s : n, a
                    }
                }
            }

            function e2({
                keyframes: t,
                velocity: e = 0,
                power: r = .8,
                timeConstant: n = 325,
                bounceDamping: i = 10,
                bounceStiffness: o = 500,
                modifyTarget: s,
                min: a,
                max: u,
                restDelta: l = .5,
                restSpeed: c
            }) {
                let f, h;
                let d = t[0],
                    p = {
                        done: !1,
                        value: d
                    },
                    m = t => void 0 !== a && t < a || void 0 !== u && t > u,
                    y = t => void 0 === a ? u : void 0 === u ? a : Math.abs(a - t) < Math.abs(u - t) ? a : u,
                    v = r * e,
                    g = d + v,
                    b = void 0 === s ? g : s(g);
                b !== g && (v = b - d);
                let w = t => -v * Math.exp(-t / n),
                    x = t => b + w(t),
                    E = t => {
                        let e = w(t),
                            r = x(t);
                        p.done = Math.abs(e) <= l, p.value = p.done ? b : r
                    },
                    S = t => {
                        m(p.value) && (f = t, h = e1({
                            keyframes: [p.value, y(p.value)],
                            velocity: eG(x, t, p.value),
                            damping: i,
                            stiffness: o,
                            restDelta: l,
                            restSpeed: c
                        }))
                    };
                return S(0), {
                    calculatedDuration: null,
                    next: t => {
                        let e = !1;
                        return (h || void 0 !== f || (e = !0, E(t), S(t)), void 0 !== f && t > f) ? h.next(t - f) : (e || E(t), p)
                    }
                }
            }
            let e5 = t => {
                let e = ({
                    timestamp: e
                }) => t(e);
                return {
                    start: () => tz.Wi.update(e, !0),
                    stop: () => (0, tz.Pn)(e),
                    now: () => tz.frameData.isProcessing ? tz.frameData.timestamp : performance.now()
                }
            };

            function e3(t) {
                let e = 0,
                    r = t.next(e);
                for (; !r.done && e < 2e4;) e += 50, r = t.next(e);
                return e >= 2e4 ? 1 / 0 : e
            }
            let e6 = {
                decay: e2,
                inertia: e2,
                tween: eQ,
                keyframes: eQ,
                spring: e1
            };

            function e4({
                autoplay: t = !0,
                delay: e = 0,
                driver: r = e5,
                keyframes: n,
                type: i = "keyframes",
                repeat: o = 0,
                repeatDelay: s = 0,
                repeatType: a = "loop",
                onPlay: u,
                onStop: l,
                onComplete: c,
                onUpdate: f,
                ...h
            }) {
                let d, p, m, y, v, g = 1,
                    b = !1,
                    w = () => {
                        p = new Promise(t => {
                            d = t
                        })
                    };
                w();
                let x = e6[i] || eQ;
                x !== eQ && "number" != typeof n[0] && (y = eZ([0, 100], n, {
                    clamp: !1
                }), n = [0, 100]);
                let E = x({ ...h,
                    keyframes: n
                });
                "mirror" === a && (v = x({ ...h,
                    keyframes: [...n].reverse(),
                    velocity: -(h.velocity || 0)
                }));
                let S = "idle",
                    P = null,
                    O = null,
                    A = null;
                null === E.calculatedDuration && o && (E.calculatedDuration = e3(E));
                let {
                    calculatedDuration: C
                } = E, R = 1 / 0, T = 1 / 0;
                null !== C && (T = (R = C + s) * (o + 1) - s);
                let k = 0,
                    L = t => {
                        if (null === O) return;
                        g > 0 && (O = Math.min(O, t)), g < 0 && (O = Math.min(t - T / g, O)), k = null !== P ? P : Math.round(t - O) * g;
                        let r = k - e * (g >= 0 ? 1 : -1),
                            i = g >= 0 ? r < 0 : r > T;
                        k = Math.max(r, 0), "finished" === S && null === P && (k = T);
                        let u = k,
                            l = E;
                        if (o) {
                            let t = k / R,
                                e = Math.floor(t),
                                r = t % 1;
                            !r && t >= 1 && (r = 1), 1 === r && e--, e = Math.min(e, o + 1);
                            let n = !!(e % 2);
                            n && ("reverse" === a ? (r = 1 - r, s && (r -= s / R)) : "mirror" === a && (l = v));
                            let i = V(0, 1, r);
                            k > T && (i = "reverse" === a && n ? 1 : 0), u = i * R
                        }
                        let c = i ? {
                            done: !1,
                            value: n[0]
                        } : l.next(u);
                        y && (c.value = y(c.value));
                        let {
                            done: h
                        } = c;
                        i || null === C || (h = g >= 0 ? k >= T : k <= 0);
                        let d = null === P && ("finished" === S || "running" === S && h);
                        return f && f(c.value), d && j(), c
                    },
                    M = () => {
                        m && m.stop(), m = void 0
                    },
                    D = () => {
                        S = "idle", M(), d(), w(), O = A = null
                    },
                    j = () => {
                        S = "finished", c && c(), M(), d()
                    },
                    _ = () => {
                        if (b) return;
                        m || (m = r(L));
                        let t = m.now();
                        u && u(), null !== P ? O = t - P : O && "finished" !== S || (O = t), "finished" === S && w(), A = O, P = null, S = "running", m.start()
                    };
                t && _();
                let U = {
                    then: (t, e) => p.then(t, e),
                    get time() {
                        return t4(k)
                    },
                    set time(newTime) {
                        k = newTime = t6(newTime), null === P && m && 0 !== g ? O = m.now() - newTime / g : P = newTime
                    },
                    get duration() {
                        let t = null === E.calculatedDuration ? e3(E) : E.calculatedDuration;
                        return t4(t)
                    },
                    get speed() {
                        return g
                    },
                    set speed(newSpeed) {
                        if (newSpeed === g || !m) return;
                        g = newSpeed, U.time = t4(k)
                    },
                    get state() {
                        return S
                    },
                    play: _,
                    pause: () => {
                        S = "paused", P = k
                    },
                    stop: () => {
                        b = !0, "idle" !== S && (S = "idle", l && l(), D())
                    },
                    cancel: () => {
                        null !== A && L(A), D()
                    },
                    complete: () => {
                        S = "finished"
                    },
                    sample: t => (O = 0, L(t))
                };
                return U
            }
            let e8 = (o = () => Object.hasOwnProperty.call(Element.prototype, "animate"), () => (void 0 === n && (n = o()), n)),
                e7 = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"]),
                e9 = (t, e) => "spring" === e.type || "backgroundColor" === t || ! function t(e) {
                    return !!(!e || "string" == typeof e && et[e] || t7(e) || Array.isArray(e) && e.every(t))
                }(e.ease),
                rt = {
                    type: "spring",
                    stiffness: 500,
                    damping: 25,
                    restSpeed: 10
                },
                re = t => ({
                    type: "spring",
                    stiffness: 550,
                    damping: 0 === t ? 2 * Math.sqrt(550) : 30,
                    restSpeed: 10
                }),
                rr = {
                    type: "keyframes",
                    duration: .8
                },
                rn = {
                    type: "keyframes",
                    ease: [.25, .1, .35, 1],
                    duration: .3
                },
                ri = (t, {
                    keyframes: e
                }) => e.length > 2 ? rr : k.has(t) ? t.startsWith("scale") ? re(e[1]) : rt : rn,
                ro = (t, e) => "zIndex" !== t && !!("number" == typeof e || Array.isArray(e) || "string" == typeof e && (eB.test(e) || "0" === e) && !e.startsWith("url(")),
                rs = new Set(["brightness", "contrast", "saturate", "opacity"]);

            function ra(t) {
                let [e, r] = t.slice(0, -1).split("(");
                if ("drop-shadow" === e) return t;
                let [n] = r.match($) || [];
                if (!n) return t;
                let i = r.replace(n, ""),
                    o = rs.has(e) ? 1 : 0;
                return n !== r && (o *= 100), e + "(" + o + i + ")"
            }
            let ru = /([a-z-]*)\(.*?\)/g,
                rl = { ...eB,
                    getAnimatableNone: t => {
                        let e = t.match(ru);
                        return e ? e.map(ra).join(" ") : t
                    }
                },
                rc = { ...tr,
                    color: eP,
                    backgroundColor: eP,
                    outlineColor: eP,
                    fill: eP,
                    stroke: eP,
                    borderColor: eP,
                    borderTopColor: eP,
                    borderRightColor: eP,
                    borderBottomColor: eP,
                    borderLeftColor: eP,
                    filter: rl,
                    WebkitFilter: rl
                },
                rf = t => rc[t];

            function rh(t, e) {
                let r = rf(t);
                return r !== rl && (r = eB), r.getAnimatableNone ? r.getAnimatableNone(e) : void 0
            }
            let rd = t => /^0[^.\s]+$/.test(t);

            function rp(t, e) {
                return t[e] || t.default || t
            }
            let rm = (t, e, r, n = {}) => i => {
                let o = rp(n, t) || {},
                    s = o.delay || n.delay || 0,
                    {
                        elapsed: a = 0
                    } = n;
                a -= t6(s);
                let u = function(t, e, r, n) {
                        let i, o;
                        let s = ro(e, r);
                        i = Array.isArray(r) ? [...r] : [null, r];
                        let a = void 0 !== n.from ? n.from : t.get(),
                            u = [];
                        for (let t = 0; t < i.length; t++) {
                            var l;
                            null === i[t] && (i[t] = 0 === t ? a : i[t - 1]), ("number" == typeof(l = i[t]) ? 0 === l : null !== l ? "none" === l || "0" === l || rd(l) : void 0) && u.push(t), "string" == typeof i[t] && "none" !== i[t] && "0" !== i[t] && (o = i[t])
                        }
                        if (s && u.length && o)
                            for (let t = 0; t < u.length; t++) {
                                let r = u[t];
                                i[r] = rh(e, o)
                            }
                        return i
                    }(e, t, r, o),
                    l = u[0],
                    c = u[u.length - 1],
                    f = ro(t, l),
                    h = ro(t, c);
                (0, t3.K)(f === h, `You are trying to animate ${t} from "${l}" to "${c}". ${l} is not an animatable value - to enable this animation set ${l} to a value animatable to ${c} via the \`style\` property.`);
                let d = {
                    keyframes: u,
                    velocity: e.getVelocity(),
                    ease: "easeOut",
                    ...o,
                    delay: -a,
                    onUpdate: t => {
                        e.set(t), o.onUpdate && o.onUpdate(t)
                    },
                    onComplete: () => {
                        i(), o.onComplete && o.onComplete()
                    }
                };
                if (! function({
                        when: t,
                        delay: e,
                        delayChildren: r,
                        staggerChildren: n,
                        staggerDirection: i,
                        repeat: o,
                        repeatType: s,
                        repeatDelay: a,
                        from: u,
                        elapsed: l,
                        ...c
                    }) {
                        return !!Object.keys(c).length
                    }(o) && (d = { ...d,
                        ...ri(t, d)
                    }), d.duration && (d.duration = t6(d.duration)), d.repeatDelay && (d.repeatDelay = t6(d.repeatDelay)), !f || !h || t8.current || !1 === o.type) return function({
                    keyframes: t,
                    delay: e,
                    onUpdate: r,
                    onComplete: n
                }) {
                    let i = () => (r && r(t[t.length - 1]), n && n(), {
                        time: 0,
                        speed: 1,
                        duration: 0,
                        play: tZ.Z,
                        pause: tZ.Z,
                        stop: tZ.Z,
                        then: t => (t(), Promise.resolve()),
                        cancel: tZ.Z,
                        complete: tZ.Z
                    });
                    return e ? e4({
                        keyframes: [0, 1],
                        duration: 0,
                        delay: e,
                        onComplete: i
                    }) : i()
                }(t8.current ? { ...d,
                    delay: 0
                } : d);
                if (e.owner && e.owner.current instanceof HTMLElement && !e.owner.getProps().onUpdate) {
                    let r = function(t, e, {
                        onUpdate: r,
                        onComplete: n,
                        ...i
                    }) {
                        let o, s;
                        let a = e8() && e7.has(e) && !i.repeatDelay && "mirror" !== i.repeatType && 0 !== i.damping && "inertia" !== i.type;
                        if (!a) return !1;
                        let u = !1,
                            l = () => {
                                s = new Promise(t => {
                                    o = t
                                })
                            };
                        l();
                        let {
                            keyframes: c,
                            duration: f = 300,
                            ease: h,
                            times: d
                        } = i;
                        if (e9(e, i)) {
                            let t = e4({ ...i,
                                    repeat: 0,
                                    delay: 0
                                }),
                                e = {
                                    done: !1,
                                    value: c[0]
                                },
                                r = [],
                                n = 0;
                            for (; !e.done && n < 2e4;) r.push((e = t.sample(n)).value), n += 10;
                            d = void 0, c = r, f = n - 10, h = "linear"
                        }
                        let p = function(t, e, r, {
                                delay: n = 0,
                                duration: i,
                                repeat: o = 0,
                                repeatType: s = "loop",
                                ease: a,
                                times: u
                            } = {}) {
                                let l = {
                                    [e]: r
                                };
                                u && (l.offset = u);
                                let c = function t(e) {
                                    if (e) return t7(e) ? t9(e) : Array.isArray(e) ? e.map(t) : et[e]
                                }(a);
                                return Array.isArray(c) && (l.easing = c), t.animate(l, {
                                    delay: n,
                                    duration: i,
                                    easing: Array.isArray(c) ? "linear" : c,
                                    fill: "both",
                                    iterations: o + 1,
                                    direction: "reverse" === s ? "alternate" : "normal"
                                })
                            }(t.owner.current, e, c, { ...i,
                                duration: f,
                                ease: h,
                                times: d
                            }),
                            m = () => p.cancel(),
                            y = () => {
                                tz.Wi.update(m), o(), l()
                            };
                        return p.onfinish = () => {
                            t.set(function(t, {
                                repeat: e,
                                repeatType: r = "loop"
                            }) {
                                let n = e && "loop" !== r && e % 2 == 1 ? 0 : t.length - 1;
                                return t[n]
                            }(c, i)), n && n(), y()
                        }, {
                            then: (t, e) => s.then(t, e),
                            attachTimeline: t => (p.timeline = t, p.onfinish = null, tZ.Z),
                            get time() {
                                return t4(p.currentTime || 0)
                            },
                            set time(newTime) {
                                p.currentTime = t6(newTime)
                            },
                            get speed() {
                                return p.playbackRate
                            },
                            set speed(newSpeed) {
                                p.playbackRate = newSpeed
                            },
                            get duration() {
                                return t4(f)
                            },
                            play: () => {
                                u || (p.play(), (0, tz.Pn)(m))
                            },
                            pause: () => p.pause(),
                            stop: () => {
                                if (u = !0, "idle" === p.playState) return;
                                let {
                                    currentTime: e
                                } = p;
                                if (e) {
                                    let r = e4({ ...i,
                                        autoplay: !1
                                    });
                                    t.setWithVelocity(r.sample(e - 10).value, r.sample(e).value, 10)
                                }
                                y()
                            },
                            complete: () => p.finish(),
                            cancel: y
                        }
                    }(e, t, d);
                    if (r) return r
                }
                return e4(d)
            };

            function ry(t) {
                return !!(M(t) && t.add)
            }
            let rv = t => /^\-?\d*\.?\d+$/.test(t);

            function rg(t, e) {
                -1 === t.indexOf(e) && t.push(e)
            }

            function rb(t, e) {
                let r = t.indexOf(e);
                r > -1 && t.splice(r, 1)
            }
            class rw {
                constructor() {
                    this.subscriptions = []
                }
                add(t) {
                    return rg(this.subscriptions, t), () => rb(this.subscriptions, t)
                }
                notify(t, e, r) {
                    let n = this.subscriptions.length;
                    if (n) {
                        if (1 === n) this.subscriptions[0](t, e, r);
                        else
                            for (let i = 0; i < n; i++) {
                                let n = this.subscriptions[i];
                                n && n(t, e, r)
                            }
                    }
                }
                getSize() {
                    return this.subscriptions.length
                }
                clear() {
                    this.subscriptions.length = 0
                }
            }
            let rx = t => !isNaN(parseFloat(t));
            class rE {
                constructor(t, e = {}) {
                    this.version = "10.15.1", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (t, e = !0) => {
                        this.prev = this.current, this.current = t;
                        let {
                            delta: r,
                            timestamp: n
                        } = tz.frameData;
                        this.lastUpdated !== n && (this.timeDelta = r, this.lastUpdated = n, tz.Wi.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), e && this.events.renderRequest && this.events.renderRequest.notify(this.current)
                    }, this.scheduleVelocityCheck = () => tz.Wi.postRender(this.velocityCheck), this.velocityCheck = ({
                        timestamp: t
                    }) => {
                        t !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
                    }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = rx(this.current), this.owner = e.owner
                }
                onChange(t) {
                    return this.on("change", t)
                }
                on(t, e) {
                    this.events[t] || (this.events[t] = new rw);
                    let r = this.events[t].add(e);
                    return "change" === t ? () => {
                        r(), tz.Wi.read(() => {
                            this.events.change.getSize() || this.stop()
                        })
                    } : r
                }
                clearListeners() {
                    for (let t in this.events) this.events[t].clear()
                }
                attach(t, e) {
                    this.passiveEffect = t, this.stopPassiveEffect = e
                }
                set(t, e = !0) {
                    e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
                }
                setWithVelocity(t, e, r) {
                    this.set(e), this.prev = t, this.timeDelta = r
                }
                jump(t) {
                    this.updateAndNotify(t), this.prev = t, this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                }
                get() {
                    return this.current
                }
                getPrevious() {
                    return this.prev
                }
                getVelocity() {
                    var t, e;
                    return this.canTrackVelocity ? (t = parseFloat(this.current) - parseFloat(this.prev), (e = this.timeDelta) ? t * (1e3 / e) : 0) : 0
                }
                start(t) {
                    return this.stop(), new Promise(e => {
                        this.hasAnimated = !0, this.animation = t(e), this.events.animationStart && this.events.animationStart.notify()
                    }).then(() => {
                        this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
                    })
                }
                stop() {
                    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
                }
                isAnimating() {
                    return !!this.animation
                }
                clearAnimation() {
                    delete this.animation
                }
                destroy() {
                    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                }
            }

            function rS(t, e) {
                return new rE(t, e)
            }
            let rP = t => e => e.test(t),
                rO = [B, X, G, Q, J, Y, {
                    test: t => "auto" === t,
                    parse: t => t
                }],
                rA = t => rO.find(rP(t)),
                rC = [...rO, eP, eB],
                rR = t => rC.find(rP(t));

            function rT(t, e, {
                delay: r = 0,
                transitionOverride: n,
                type: i
            } = {}) {
                let {
                    transition: o = t.getDefaultTransition(),
                    transitionEnd: s,
                    ...a
                } = t.makeTargetAnimatable(e), u = t.getValue("willChange");
                n && (o = n);
                let l = [],
                    c = i && t.animationState && t.animationState.getState()[i];
                for (let e in a) {
                    let n = t.getValue(e),
                        i = a[e];
                    if (!n || void 0 === i || c && function({
                            protectedKeys: t,
                            needsAnimating: e
                        }, r) {
                            let n = t.hasOwnProperty(r) && !0 !== e[r];
                            return e[r] = !1, n
                        }(c, e)) continue;
                    let s = {
                        delay: r,
                        elapsed: 0,
                        ...o
                    };
                    if (window.HandoffAppearAnimations && !n.hasAnimated) {
                        let r = t.getProps()[t5];
                        r && (s.elapsed = window.HandoffAppearAnimations(r, e, n, tz.Wi))
                    }
                    n.start(rm(e, n, i, t.shouldReduceMotion && k.has(e) ? {
                        type: !1
                    } : s));
                    let f = n.animation;
                    ry(u) && (u.add(e), f.then(() => u.remove(e))), l.push(f)
                }
                return s && Promise.all(l).then(() => {
                    s && function(t, e) {
                        let r = t2(t, e),
                            {
                                transitionEnd: n = {},
                                transition: i = {},
                                ...o
                            } = r ? t.makeTargetAnimatable(r, !1) : {};
                        for (let e in o = { ...o,
                                ...n
                            }) {
                            let r = tC(o[e]);
                            t.hasValue(e) ? t.getValue(e).set(r) : t.addValue(e, rS(r))
                        }
                    }(t, s)
                }), l
            }

            function rk(t, e, r = {}) {
                let n = t2(t, e, r.custom),
                    {
                        transition: i = t.getDefaultTransition() || {}
                    } = n || {};
                r.transitionOverride && (i = r.transitionOverride);
                let o = n ? () => Promise.all(rT(t, n, r)) : () => Promise.resolve(),
                    s = t.variantChildren && t.variantChildren.size ? (n = 0) => {
                        let {
                            delayChildren: o = 0,
                            staggerChildren: s,
                            staggerDirection: a
                        } = i;
                        return function(t, e, r = 0, n = 0, i = 1, o) {
                            let s = [],
                                a = (t.variantChildren.size - 1) * n,
                                u = 1 === i ? (t = 0) => t * n : (t = 0) => a - t * n;
                            return Array.from(t.variantChildren).sort(rL).forEach((t, n) => {
                                t.notify("AnimationStart", e), s.push(rk(t, e, { ...o,
                                    delay: r + u(n)
                                }).then(() => t.notify("AnimationComplete", e)))
                            }), Promise.all(s)
                        }(t, e, o + n, s, a, r)
                    } : () => Promise.resolve(),
                    {
                        when: a
                    } = i;
                if (!a) return Promise.all([o(), s(r.delay)]); {
                    let [t, e] = "beforeChildren" === a ? [o, s] : [s, o];
                    return t().then(() => e())
                }
            }

            function rL(t, e) {
                return t.sortNodePosition(e)
            }
            let rM = [...m].reverse(),
                rD = m.length;

            function rj(t = !1) {
                return {
                    isActive: t,
                    protectedKeys: {},
                    needsAnimating: {},
                    prevResolvedValues: {}
                }
            }
            let r_ = 0,
                rU = (t, e) => Math.abs(t - e);
            class rF {
                constructor(t, e, {
                    transformPagePoint: r
                } = {}) {
                    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
                            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let t = rB(this.lastMoveEventInfo, this.history),
                                e = null !== this.startEvent,
                                r = function(t, e) {
                                    let r = rU(t.x, e.x),
                                        n = rU(t.y, e.y);
                                    return Math.sqrt(r ** 2 + n ** 2)
                                }(t.offset, {
                                    x: 0,
                                    y: 0
                                }) >= 3;
                            if (!e && !r) return;
                            let {
                                point: n
                            } = t, {
                                timestamp: i
                            } = tz.frameData;
                            this.history.push({ ...n,
                                timestamp: i
                            });
                            let {
                                onStart: o,
                                onMove: s
                            } = this.handlers;
                            e || (o && o(this.lastMoveEvent, t), this.startEvent = this.lastMoveEvent), s && s(this.lastMoveEvent, t)
                        }, this.handlePointerMove = (t, e) => {
                            this.lastMoveEvent = t, this.lastMoveEventInfo = rI(e, this.transformPagePoint), tz.Wi.update(this.updatePoint, !0)
                        }, this.handlePointerUp = (t, e) => {
                            if (this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let {
                                onEnd: r,
                                onSessionEnd: n
                            } = this.handlers, i = rB("pointercancel" === t.type ? this.lastMoveEventInfo : rI(e, this.transformPagePoint), this.history);
                            this.startEvent && r && r(t, i), n && n(t, i)
                        }, !tD(t)) return;
                    this.handlers = e, this.transformPagePoint = r;
                    let n = tj(t),
                        i = rI(n, this.transformPagePoint),
                        {
                            point: o
                        } = i,
                        {
                            timestamp: s
                        } = tz.frameData;
                    this.history = [{ ...o,
                        timestamp: s
                    }];
                    let {
                        onSessionStart: a
                    } = e;
                    a && a(t, rB(i, this.history)), this.removeListeners = tI(tU(window, "pointermove", this.handlePointerMove), tU(window, "pointerup", this.handlePointerUp), tU(window, "pointercancel", this.handlePointerUp))
                }
                updateHandlers(t) {
                    this.handlers = t
                }
                end() {
                    this.removeListeners && this.removeListeners(), (0, tz.Pn)(this.updatePoint)
                }
            }

            function rI(t, e) {
                return e ? {
                    point: e(t.point)
                } : t
            }

            function rV(t, e) {
                return {
                    x: t.x - e.x,
                    y: t.y - e.y
                }
            }

            function rB({
                point: t
            }, e) {
                return {
                    point: t,
                    delta: rV(t, rN(e)),
                    offset: rV(t, e[0]),
                    velocity: function(t, e) {
                        if (t.length < 2) return {
                            x: 0,
                            y: 0
                        };
                        let r = t.length - 1,
                            n = null,
                            i = rN(t);
                        for (; r >= 0 && (n = t[r], !(i.timestamp - n.timestamp > t6(.1)));) r--;
                        if (!n) return {
                            x: 0,
                            y: 0
                        };
                        let o = t4(i.timestamp - n.timestamp);
                        if (0 === o) return {
                            x: 0,
                            y: 0
                        };
                        let s = {
                            x: (i.x - n.x) / o,
                            y: (i.y - n.y) / o
                        };
                        return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s
                    }(e, 0)
                }
            }

            function rN(t) {
                return t[t.length - 1]
            }

            function rq(t) {
                return t.max - t.min
            }

            function rW(t, e = 0, r = .01) {
                return Math.abs(t - e) <= r
            }

            function r$(t, e, r, n = .5) {
                t.origin = n, t.originPoint = eO(e.min, e.max, t.origin), t.scale = rq(r) / rq(e), (rW(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1), t.translate = eO(r.min, r.max, t.origin) - t.originPoint, (rW(t.translate) || isNaN(t.translate)) && (t.translate = 0)
            }

            function rz(t, e, r, n) {
                r$(t.x, e.x, r.x, n ? n.originX : void 0), r$(t.y, e.y, r.y, n ? n.originY : void 0)
            }

            function rH(t, e, r) {
                t.min = r.min + e.min, t.max = t.min + rq(e)
            }

            function rK(t, e, r) {
                t.min = e.min - r.min, t.max = t.min + rq(e)
            }

            function rZ(t, e, r) {
                rK(t.x, e.x, r.x), rK(t.y, e.y, r.y)
            }

            function rQ(t, e, r) {
                return {
                    min: void 0 !== e ? t.min + e : void 0,
                    max: void 0 !== r ? t.max + r - (t.max - t.min) : void 0
                }
            }

            function rG(t, e) {
                let r = e.min - t.min,
                    n = e.max - t.max;
                return e.max - e.min < t.max - t.min && ([r, n] = [n, r]), {
                    min: r,
                    max: n
                }
            }

            function rX(t, e, r) {
                return {
                    min: rY(t, e),
                    max: rY(t, r)
                }
            }

            function rY(t, e) {
                return "number" == typeof t ? t : t[e] || 0
            }
            let rJ = () => ({
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                }),
                r0 = () => ({
                    x: rJ(),
                    y: rJ()
                }),
                r1 = () => ({
                    min: 0,
                    max: 0
                }),
                r2 = () => ({
                    x: r1(),
                    y: r1()
                });

            function r5(t) {
                return [t("x"), t("y")]
            }

            function r3({
                top: t,
                left: e,
                right: r,
                bottom: n
            }) {
                return {
                    x: {
                        min: e,
                        max: r
                    },
                    y: {
                        min: t,
                        max: n
                    }
                }
            }

            function r6(t) {
                return void 0 === t || 1 === t
            }

            function r4({
                scale: t,
                scaleX: e,
                scaleY: r
            }) {
                return !r6(t) || !r6(e) || !r6(r)
            }

            function r8(t) {
                return r4(t) || r7(t) || t.z || t.rotate || t.rotateX || t.rotateY
            }

            function r7(t) {
                var e, r;
                return (e = t.x) && "0%" !== e || (r = t.y) && "0%" !== r
            }

            function r9(t, e, r, n, i) {
                return void 0 !== i && (t = n + i * (t - n)), n + r * (t - n) + e
            }

            function nt(t, e = 0, r = 1, n, i) {
                t.min = r9(t.min, e, r, n, i), t.max = r9(t.max, e, r, n, i)
            }

            function ne(t, {
                x: e,
                y: r
            }) {
                nt(t.x, e.translate, e.scale, e.originPoint), nt(t.y, r.translate, r.scale, r.originPoint)
            }

            function nr(t) {
                return Number.isInteger(t) ? t : t > 1.0000000000001 || t < .999999999999 ? t : 1
            }

            function nn(t, e) {
                t.min = t.min + e, t.max = t.max + e
            }

            function ni(t, e, [r, n, i]) {
                let o = void 0 !== e[i] ? e[i] : .5,
                    s = eO(t.min, t.max, o);
                nt(t, e[r], e[n], s, e.scale)
            }
            let no = ["x", "scaleX", "originX"],
                ns = ["y", "scaleY", "originY"];

            function na(t, e) {
                ni(t.x, e, no), ni(t.y, e, ns)
            }

            function nu(t, e) {
                return r3(function(t, e) {
                    if (!e) return t;
                    let r = e({
                            x: t.left,
                            y: t.top
                        }),
                        n = e({
                            x: t.right,
                            y: t.bottom
                        });
                    return {
                        top: r.y,
                        left: r.x,
                        bottom: n.y,
                        right: n.x
                    }
                }(t.getBoundingClientRect(), e))
            }
            let nl = new WeakMap;
            class nc {
                constructor(t) {
                    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                        x: 0,
                        y: 0
                    }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = r2(), this.visualElement = t
                }
                start(t, {
                    snapToCursor: e = !1
                } = {}) {
                    let {
                        presenceContext: r
                    } = this.visualElement;
                    r && !1 === r.isPresent || (this.panSession = new rF(t, {
                        onSessionStart: t => {
                            this.stopAnimation(), e && this.snapToCursor(tj(t, "page").point)
                        },
                        onStart: (t, e) => {
                            let {
                                drag: r,
                                dragPropagation: n,
                                onDragStart: i
                            } = this.getProps();
                            if (r && !n && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = tq(r), !this.openGlobalLock)) return;
                            this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), r5(t => {
                                let e = this.getAxisMotionValue(t).get() || 0;
                                if (G.test(e)) {
                                    let {
                                        projection: r
                                    } = this.visualElement;
                                    if (r && r.layout) {
                                        let n = r.layout.layoutBox[t];
                                        if (n) {
                                            let t = rq(n);
                                            e = t * (parseFloat(e) / 100)
                                        }
                                    }
                                }
                                this.originPoint[t] = e
                            }), i && tz.Wi.update(() => i(t, e), !1, !0);
                            let {
                                animationState: o
                            } = this.visualElement;
                            o && o.setActive("whileDrag", !0)
                        },
                        onMove: (t, e) => {
                            let {
                                dragPropagation: r,
                                dragDirectionLock: n,
                                onDirectionLock: i,
                                onDrag: o
                            } = this.getProps();
                            if (!r && !this.openGlobalLock) return;
                            let {
                                offset: s
                            } = e;
                            if (n && null === this.currentDirection) {
                                this.currentDirection = function(t, e = 10) {
                                    let r = null;
                                    return Math.abs(t.y) > e ? r = "y" : Math.abs(t.x) > e && (r = "x"), r
                                }(s), null !== this.currentDirection && i && i(this.currentDirection);
                                return
                            }
                            this.updateAxis("x", e.point, s), this.updateAxis("y", e.point, s), this.visualElement.render(), o && o(t, e)
                        },
                        onSessionEnd: (t, e) => this.stop(t, e)
                    }, {
                        transformPagePoint: this.visualElement.getTransformPagePoint()
                    }))
                }
                stop(t, e) {
                    let r = this.isDragging;
                    if (this.cancel(), !r) return;
                    let {
                        velocity: n
                    } = e;
                    this.startAnimation(n);
                    let {
                        onDragEnd: i
                    } = this.getProps();
                    i && tz.Wi.update(() => i(t, e))
                }
                cancel() {
                    this.isDragging = !1;
                    let {
                        projection: t,
                        animationState: e
                    } = this.visualElement;
                    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
                    let {
                        dragPropagation: r
                    } = this.getProps();
                    !r && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), e && e.setActive("whileDrag", !1)
                }
                updateAxis(t, e, r) {
                    let {
                        drag: n
                    } = this.getProps();
                    if (!r || !nf(t, n, this.currentDirection)) return;
                    let i = this.getAxisMotionValue(t),
                        o = this.originPoint[t] + r[t];
                    this.constraints && this.constraints[t] && (o = function(t, {
                        min: e,
                        max: r
                    }, n) {
                        return void 0 !== e && t < e ? t = n ? eO(e, t, n.min) : Math.max(t, e) : void 0 !== r && t > r && (t = n ? eO(r, t, n.max) : Math.min(t, r)), t
                    }(o, this.constraints[t], this.elastic[t])), i.set(o)
                }
                resolveConstraints() {
                    let {
                        dragConstraints: t,
                        dragElastic: e
                    } = this.getProps(), {
                        layout: r
                    } = this.visualElement.projection || {}, n = this.constraints;
                    t && h(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = function(t, {
                        top: e,
                        left: r,
                        bottom: n,
                        right: i
                    }) {
                        return {
                            x: rQ(t.x, r, i),
                            y: rQ(t.y, e, n)
                        }
                    }(r.layoutBox, t) : this.constraints = !1, this.elastic = function(t = .35) {
                        return !1 === t ? t = 0 : !0 === t && (t = .35), {
                            x: rX(t, "left", "right"),
                            y: rX(t, "top", "bottom")
                        }
                    }(e), n !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && r5(t => {
                        this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
                            let r = {};
                            return void 0 !== e.min && (r.min = e.min - t.min), void 0 !== e.max && (r.max = e.max - t.min), r
                        }(r.layoutBox[t], this.constraints[t]))
                    })
                }
                resolveRefConstraints() {
                    var t;
                    let {
                        dragConstraints: e,
                        onMeasureDragConstraints: r
                    } = this.getProps();
                    if (!e || !h(e)) return !1;
                    let n = e.current;
                    (0, t3.k)(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                    let {
                        projection: i
                    } = this.visualElement;
                    if (!i || !i.layout) return !1;
                    let o = function(t, e, r) {
                            let n = nu(t, r),
                                {
                                    scroll: i
                                } = e;
                            return i && (nn(n.x, i.offset.x), nn(n.y, i.offset.y)), n
                        }(n, i.root, this.visualElement.getTransformPagePoint()),
                        s = {
                            x: rG((t = i.layout.layoutBox).x, o.x),
                            y: rG(t.y, o.y)
                        };
                    if (r) {
                        let t = r(function({
                            x: t,
                            y: e
                        }) {
                            return {
                                top: e.min,
                                right: t.max,
                                bottom: e.max,
                                left: t.min
                            }
                        }(s));
                        this.hasMutatedConstraints = !!t, t && (s = r3(t))
                    }
                    return s
                }
                startAnimation(t) {
                    let {
                        drag: e,
                        dragMomentum: r,
                        dragElastic: n,
                        dragTransition: i,
                        dragSnapToOrigin: o,
                        onDragTransitionEnd: s
                    } = this.getProps(), a = this.constraints || {}, u = r5(s => {
                        if (!nf(s, e, this.currentDirection)) return;
                        let u = a && a[s] || {};
                        o && (u = {
                            min: 0,
                            max: 0
                        });
                        let l = {
                            type: "inertia",
                            velocity: r ? t[s] : 0,
                            bounceStiffness: n ? 200 : 1e6,
                            bounceDamping: n ? 40 : 1e7,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10,
                            ...i,
                            ...u
                        };
                        return this.startAxisValueAnimation(s, l)
                    });
                    return Promise.all(u).then(s)
                }
                startAxisValueAnimation(t, e) {
                    let r = this.getAxisMotionValue(t);
                    return r.start(rm(t, r, 0, e))
                }
                stopAnimation() {
                    r5(t => this.getAxisMotionValue(t).stop())
                }
                getAxisMotionValue(t) {
                    let e = "_drag" + t.toUpperCase(),
                        r = this.visualElement.getProps(),
                        n = r[e];
                    return n || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
                }
                snapToCursor(t) {
                    r5(e => {
                        let {
                            drag: r
                        } = this.getProps();
                        if (!nf(e, r, this.currentDirection)) return;
                        let {
                            projection: n
                        } = this.visualElement, i = this.getAxisMotionValue(e);
                        if (n && n.layout) {
                            let {
                                min: r,
                                max: o
                            } = n.layout.layoutBox[e];
                            i.set(t[e] - eO(r, o, .5))
                        }
                    })
                }
                scalePositionWithinConstraints() {
                    if (!this.visualElement.current) return;
                    let {
                        drag: t,
                        dragConstraints: e
                    } = this.getProps(), {
                        projection: r
                    } = this.visualElement;
                    if (!h(e) || !r || !this.constraints) return;
                    this.stopAnimation();
                    let n = {
                        x: 0,
                        y: 0
                    };
                    r5(t => {
                        let e = this.getAxisMotionValue(t);
                        if (e) {
                            let r = e.get();
                            n[t] = function(t, e) {
                                let r = .5,
                                    n = rq(t),
                                    i = rq(e);
                                return i > n ? r = eH(e.min, e.max - n, t.min) : n > i && (r = eH(t.min, t.max - i, e.min)), V(0, 1, r)
                            }({
                                min: r,
                                max: r
                            }, this.constraints[t])
                        }
                    });
                    let {
                        transformTemplate: i
                    } = this.visualElement.getProps();
                    this.visualElement.current.style.transform = i ? i({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), r5(e => {
                        if (!nf(e, t, null)) return;
                        let r = this.getAxisMotionValue(e),
                            {
                                min: i,
                                max: o
                            } = this.constraints[e];
                        r.set(eO(i, o, n[e]))
                    })
                }
                addListeners() {
                    if (!this.visualElement.current) return;
                    nl.set(this.visualElement, this);
                    let t = this.visualElement.current,
                        e = tU(t, "pointerdown", t => {
                            let {
                                drag: e,
                                dragListener: r = !0
                            } = this.getProps();
                            e && r && this.start(t)
                        }),
                        r = () => {
                            let {
                                dragConstraints: t
                            } = this.getProps();
                            h(t) && (this.constraints = this.resolveRefConstraints())
                        },
                        {
                            projection: n
                        } = this.visualElement,
                        i = n.addEventListener("measure", r);
                    n && !n.layout && (n.root && n.root.updateScroll(), n.updateLayout()), r();
                    let o = tM(window, "resize", () => this.scalePositionWithinConstraints()),
                        s = n.addEventListener("didUpdate", ({
                            delta: t,
                            hasLayoutChanged: e
                        }) => {
                            this.isDragging && e && (r5(e => {
                                let r = this.getAxisMotionValue(e);
                                r && (this.originPoint[e] += t[e].translate, r.set(r.get() + t[e].translate))
                            }), this.visualElement.render())
                        });
                    return () => {
                        o(), e(), i(), s && s()
                    }
                }
                getProps() {
                    let t = this.visualElement.getProps(),
                        {
                            drag: e = !1,
                            dragDirectionLock: r = !1,
                            dragPropagation: n = !1,
                            dragConstraints: i = !1,
                            dragElastic: o = .35,
                            dragMomentum: s = !0
                        } = t;
                    return { ...t,
                        drag: e,
                        dragDirectionLock: r,
                        dragPropagation: n,
                        dragConstraints: i,
                        dragElastic: o,
                        dragMomentum: s
                    }
                }
            }

            function nf(t, e, r) {
                return (!0 === e || e === t) && (null === r || r === t)
            }
            let nh = t => (e, r) => {
                    t && tz.Wi.update(() => t(e, r))
                },
                nd = {
                    hasAnimatedSinceResize: !0,
                    hasEverUpdated: !1
                };

            function np(t, e) {
                return e.max === e.min ? 0 : t / (e.max - e.min) * 100
            }
            let nm = {
                correct: (t, e) => {
                    if (!e.target) return t;
                    if ("string" == typeof t) {
                        if (!X.test(t)) return t;
                        t = parseFloat(t)
                    }
                    let r = np(t, e.target.x),
                        n = np(t, e.target.y);
                    return `${r}% ${n}%`
                }
            };
            class ny extends s.Component {
                componentDidMount() {
                    let {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: r,
                        layoutId: n
                    } = this.props, {
                        projection: i
                    } = t;
                    Object.assign(R, ng), i && (e.group && e.group.add(i), r && r.register && n && r.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", () => {
                        this.safeToRemove()
                    }), i.setOptions({ ...i.options,
                        onExitComplete: () => this.safeToRemove()
                    })), nd.hasEverUpdated = !0
                }
                getSnapshotBeforeUpdate(t) {
                    let {
                        layoutDependency: e,
                        visualElement: r,
                        drag: n,
                        isPresent: i
                    } = this.props, o = r.projection;
                    return o && (o.isPresent = i, n || t.layoutDependency !== e || void 0 === e ? o.willUpdate() : this.safeToRemove(), t.isPresent === i || (i ? o.promote() : o.relegate() || tz.Wi.postRender(() => {
                        let t = o.getStack();
                        t && t.members.length || this.safeToRemove()
                    }))), null
                }
                componentDidUpdate() {
                    let {
                        projection: t
                    } = this.props.visualElement;
                    t && (t.root.didUpdate(), queueMicrotask(() => {
                        !t.currentAnimation && t.isLead() && this.safeToRemove()
                    }))
                }
                componentWillUnmount() {
                    let {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: r
                    } = this.props, {
                        projection: n
                    } = t;
                    n && (n.scheduleCheckAfterUnmount(), e && e.group && e.group.remove(n), r && r.deregister && r.deregister(n))
                }
                safeToRemove() {
                    let {
                        safeToRemove: t
                    } = this.props;
                    t && t()
                }
                render() {
                    return null
                }
            }

            function nv(t) {
                let [e, r] = function() {
                    let t = (0, s.useContext)(l.O);
                    if (null === t) return [!0, null];
                    let {
                        isPresent: e,
                        onExitComplete: r,
                        register: n
                    } = t, i = (0, s.useId)();
                    return (0, s.useEffect)(() => n(i), []), !e && r ? [!1, () => r && r(i)] : [!0]
                }(), n = (0, s.useContext)(S.p);
                return s.createElement(ny, { ...t,
                    layoutGroup: n,
                    switchLayoutGroup: (0, s.useContext)(P),
                    isPresent: e,
                    safeToRemove: r
                })
            }
            let ng = {
                    borderRadius: { ...nm,
                        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
                    },
                    borderTopLeftRadius: nm,
                    borderTopRightRadius: nm,
                    borderBottomLeftRadius: nm,
                    borderBottomRightRadius: nm,
                    boxShadow: {
                        correct: (t, {
                            treeScale: e,
                            projectionDelta: r
                        }) => {
                            let n = eB.parse(t);
                            if (n.length > 5) return t;
                            let i = eB.createTransformer(t),
                                o = "number" != typeof n[0] ? 1 : 0,
                                s = r.x.scale * e.x,
                                a = r.y.scale * e.y;
                            n[0 + o] /= s, n[1 + o] /= a;
                            let u = eO(s, a, .5);
                            return "number" == typeof n[2 + o] && (n[2 + o] /= u), "number" == typeof n[3 + o] && (n[3 + o] /= u), i(n)
                        }
                    }
                },
                nb = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
                nw = nb.length,
                nx = t => "string" == typeof t ? parseFloat(t) : t,
                nE = t => "number" == typeof t || X.test(t);

            function nS(t, e) {
                return void 0 !== t[e] ? t[e] : t.borderRadius
            }
            let nP = nA(0, .5, ec),
                nO = nA(.5, .95, tZ.Z);

            function nA(t, e, r) {
                return n => n < t ? 0 : n > e ? 1 : r(eH(t, e, n))
            }

            function nC(t, e) {
                t.min = e.min, t.max = e.max
            }

            function nR(t, e) {
                nC(t.x, e.x), nC(t.y, e.y)
            }

            function nT(t, e, r, n, i) {
                return t -= e, t = n + 1 / r * (t - n), void 0 !== i && (t = n + 1 / i * (t - n)), t
            }

            function nk(t, e, [r, n, i], o, s) {
                ! function(t, e = 0, r = 1, n = .5, i, o = t, s = t) {
                    if (G.test(e)) {
                        e = parseFloat(e);
                        let t = eO(s.min, s.max, e / 100);
                        e = t - s.min
                    }
                    if ("number" != typeof e) return;
                    let a = eO(o.min, o.max, n);
                    t === o && (a -= e), t.min = nT(t.min, e, r, a, i), t.max = nT(t.max, e, r, a, i)
                }(t, e[r], e[n], e[i], e.scale, o, s)
            }
            let nL = ["x", "scaleX", "originX"],
                nM = ["y", "scaleY", "originY"];

            function nD(t, e, r, n) {
                nk(t.x, e, nL, r ? r.x : void 0, n ? n.x : void 0), nk(t.y, e, nM, r ? r.y : void 0, n ? n.y : void 0)
            }

            function nj(t) {
                return 0 === t.translate && 1 === t.scale
            }

            function n_(t) {
                return nj(t.x) && nj(t.y)
            }

            function nU(t, e) {
                return Math.round(t.x.min) === Math.round(e.x.min) && Math.round(t.x.max) === Math.round(e.x.max) && Math.round(t.y.min) === Math.round(e.y.min) && Math.round(t.y.max) === Math.round(e.y.max)
            }

            function nF(t) {
                return rq(t.x) / rq(t.y)
            }
            class nI {
                constructor() {
                    this.members = []
                }
                add(t) {
                    rg(this.members, t), t.scheduleRender()
                }
                remove(t) {
                    if (rb(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
                        let t = this.members[this.members.length - 1];
                        t && this.promote(t)
                    }
                }
                relegate(t) {
                    let e;
                    let r = this.members.findIndex(e => t === e);
                    if (0 === r) return !1;
                    for (let t = r; t >= 0; t--) {
                        let r = this.members[t];
                        if (!1 !== r.isPresent) {
                            e = r;
                            break
                        }
                    }
                    return !!e && (this.promote(e), !0)
                }
                promote(t, e) {
                    let r = this.lead;
                    if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
                        r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, e && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
                        let {
                            crossfade: n
                        } = t.options;
                        !1 === n && r.hide()
                    }
                }
                exitAnimationComplete() {
                    this.members.forEach(t => {
                        let {
                            options: e,
                            resumingFrom: r
                        } = t;
                        e.onExitComplete && e.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete()
                    })
                }
                scheduleRender() {
                    this.members.forEach(t => {
                        t.instance && t.scheduleRender(!1)
                    })
                }
                removeLeadSnapshot() {
                    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
                }
            }

            function nV(t, e, r) {
                let n = "",
                    i = t.x.translate / e.x,
                    o = t.y.translate / e.y;
                if ((i || o) && (n = `translate3d(${i}px, ${o}px, 0) `), (1 !== e.x || 1 !== e.y) && (n += `scale(${1/e.x}, ${1/e.y}) `), r) {
                    let {
                        rotate: t,
                        rotateX: e,
                        rotateY: i
                    } = r;
                    t && (n += `rotate(${t}deg) `), e && (n += `rotateX(${e}deg) `), i && (n += `rotateY(${i}deg) `)
                }
                let s = t.x.scale * e.x,
                    a = t.y.scale * e.y;
                return (1 !== s || 1 !== a) && (n += `scale(${s}, ${a})`), n || "none"
            }
            let nB = (t, e) => t.depth - e.depth;
            class nN {
                constructor() {
                    this.children = [], this.isDirty = !1
                }
                add(t) {
                    rg(this.children, t), this.isDirty = !0
                }
                remove(t) {
                    rb(this.children, t), this.isDirty = !0
                }
                forEach(t) {
                    this.isDirty && this.children.sort(nB), this.isDirty = !1, this.children.forEach(t)
                }
            }
            let nq = ["", "X", "Y", "Z"],
                nW = 0,
                n$ = {
                    type: "projectionFrame",
                    totalNodes: 0,
                    resolvedTargetDeltas: 0,
                    recalculatedProjection: 0
                };

            function nz({
                attachResizeListener: t,
                defaultParent: e,
                measureScroll: r,
                checkIsScrollRoot: n,
                resetTransform: i
            }) {
                return class {
                    constructor(t = {}, r = null == e ? void 0 : e()) {
                        this.id = nW++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
                            x: 1,
                            y: 1
                        }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.checkUpdateFailed = () => {
                            this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
                        }, this.updateProjection = () => {
                            n$.totalNodes = n$.resolvedTargetDeltas = n$.recalculatedProjection = 0, this.nodes.forEach(nZ), this.nodes.forEach(n1), this.nodes.forEach(n2), this.nodes.forEach(nQ), window.MotionDebug && window.MotionDebug.record(n$)
                        }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = t, this.root = r ? r.root || r : this, this.path = r ? [...r.path, r] : [], this.parent = r, this.depth = r ? r.depth + 1 : 0;
                        for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
                        this.root === this && (this.nodes = new nN)
                    }
                    addEventListener(t, e) {
                        return this.eventHandlers.has(t) || this.eventHandlers.set(t, new rw), this.eventHandlers.get(t).add(e)
                    }
                    notifyListeners(t, ...e) {
                        let r = this.eventHandlers.get(t);
                        r && r.notify(...e)
                    }
                    hasListeners(t) {
                        return this.eventHandlers.has(t)
                    }
                    mount(e, r = this.root.hasTreeAnimated) {
                        if (this.instance) return;
                        this.isSVG = e instanceof SVGElement && "svg" !== e.tagName, this.instance = e;
                        let {
                            layoutId: n,
                            layout: i,
                            visualElement: o
                        } = this.options;
                        if (o && !o.current && o.mount(e), this.root.nodes.add(this), this.parent && this.parent.children.add(this), r && (i || n) && (this.isLayoutDirty = !0), t) {
                            let r;
                            let n = () => this.root.updateBlockedByResize = !1;
                            t(e, () => {
                                this.root.updateBlockedByResize = !0, r && r(), r = function(t, e) {
                                    let r = performance.now(),
                                        n = ({
                                            timestamp: i
                                        }) => {
                                            let o = i - r;
                                            o >= e && ((0, tz.Pn)(n), t(o - e))
                                        };
                                    return tz.Wi.read(n, !0), () => (0, tz.Pn)(n)
                                }(n, 250), nd.hasAnimatedSinceResize && (nd.hasAnimatedSinceResize = !1, this.nodes.forEach(n0))
                            })
                        }
                        n && this.root.registerSharedNode(n, this), !1 !== this.options.animate && o && (n || i) && this.addEventListener("didUpdate", ({
                            delta: t,
                            hasLayoutChanged: e,
                            hasRelativeTargetChanged: r,
                            layout: n
                        }) => {
                            if (this.isTreeAnimationBlocked()) {
                                this.target = void 0, this.relativeTarget = void 0;
                                return
                            }
                            let i = this.options.transition || o.getDefaultTransition() || n7,
                                {
                                    onLayoutAnimationStart: s,
                                    onLayoutAnimationComplete: a
                                } = o.getProps(),
                                u = !this.targetLayout || !nU(this.targetLayout, n) || r,
                                l = !e && r;
                            if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || l || e && (u || !this.currentAnimation)) {
                                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(t, l);
                                let e = { ...rp(i, "layout"),
                                    onPlay: s,
                                    onComplete: a
                                };
                                (o.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0, e.type = !1), this.startAnimation(e)
                            } else e || n0(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                            this.targetLayout = n
                        })
                    }
                    unmount() {
                        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
                        let t = this.getStack();
                        t && t.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, (0, tz.Pn)(this.updateProjection)
                    }
                    blockUpdate() {
                        this.updateManuallyBlocked = !0
                    }
                    unblockUpdate() {
                        this.updateManuallyBlocked = !1
                    }
                    isUpdateBlocked() {
                        return this.updateManuallyBlocked || this.updateBlockedByResize
                    }
                    isTreeAnimationBlocked() {
                        return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
                    }
                    startUpdate() {
                        !this.isUpdateBlocked() && (this.isUpdating = !0, this.nodes && this.nodes.forEach(n5), this.animationId++)
                    }
                    getTransformTemplate() {
                        let {
                            visualElement: t
                        } = this.options;
                        return t && t.getProps().transformTemplate
                    }
                    willUpdate(t = !0) {
                        if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                            this.options.onExitComplete && this.options.onExitComplete();
                            return
                        }
                        if (this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty) return;
                        this.isLayoutDirty = !0;
                        for (let t = 0; t < this.path.length; t++) {
                            let e = this.path[t];
                            e.shouldResetTransform = !0, e.updateScroll("snapshot"), e.options.layoutRoot && e.willUpdate(!1)
                        }
                        let {
                            layoutId: e,
                            layout: r
                        } = this.options;
                        if (void 0 === e && !r) return;
                        let n = this.getTransformTemplate();
                        this.prevTransformTemplateValue = n ? n(this.latestValues, "") : void 0, this.updateSnapshot(), t && this.notifyListeners("willUpdate")
                    }
                    update() {
                        this.updateScheduled = !1;
                        let t = this.isUpdateBlocked();
                        if (t) {
                            this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(nX);
                            return
                        }
                        this.isUpdating || this.nodes.forEach(nY), this.isUpdating = !1, this.nodes.forEach(nJ), this.nodes.forEach(nH), this.nodes.forEach(nK), this.clearAllSnapshots();
                        let e = performance.now();
                        tz.frameData.delta = V(0, 1e3 / 60, e - tz.frameData.timestamp), tz.frameData.timestamp = e, tz.frameData.isProcessing = !0, tz.S6.update.process(tz.frameData), tz.S6.preRender.process(tz.frameData), tz.S6.render.process(tz.frameData), tz.frameData.isProcessing = !1
                    }
                    didUpdate() {
                        this.updateScheduled || (this.updateScheduled = !0, queueMicrotask(() => this.update()))
                    }
                    clearAllSnapshots() {
                        this.nodes.forEach(nG), this.sharedNodes.forEach(n3)
                    }
                    scheduleUpdateProjection() {
                        tz.Wi.preRender(this.updateProjection, !1, !0)
                    }
                    scheduleCheckAfterUnmount() {
                        tz.Wi.postRender(() => {
                            this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                        })
                    }
                    updateSnapshot() {
                        !this.snapshot && this.instance && (this.snapshot = this.measure())
                    }
                    updateLayout() {
                        if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
                        if (this.resumeFrom && !this.resumeFrom.instance)
                            for (let t = 0; t < this.path.length; t++) {
                                let e = this.path[t];
                                e.updateScroll()
                            }
                        let t = this.layout;
                        this.layout = this.measure(!1), this.layoutCorrected = r2(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
                        let {
                            visualElement: e
                        } = this.options;
                        e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
                    }
                    updateScroll(t = "measure") {
                        let e = !!(this.options.layoutScroll && this.instance);
                        this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1), e && (this.scroll = {
                            animationId: this.root.animationId,
                            phase: t,
                            isRoot: n(this.instance),
                            offset: r(this.instance)
                        })
                    }
                    resetTransform() {
                        if (!i) return;
                        let t = this.isLayoutDirty || this.shouldResetTransform,
                            e = this.projectionDelta && !n_(this.projectionDelta),
                            r = this.getTransformTemplate(),
                            n = r ? r(this.latestValues, "") : void 0,
                            o = n !== this.prevTransformTemplateValue;
                        t && (e || r8(this.latestValues) || o) && (i(this.instance, n), this.shouldResetTransform = !1, this.scheduleRender())
                    }
                    measure(t = !0) {
                        var e;
                        let r = this.measurePageBox(),
                            n = this.removeElementScroll(r);
                        return t && (n = this.removeTransform(n)), ie((e = n).x), ie(e.y), {
                            animationId: this.root.animationId,
                            measuredBox: r,
                            layoutBox: n,
                            latestValues: {},
                            source: this.id
                        }
                    }
                    measurePageBox() {
                        let {
                            visualElement: t
                        } = this.options;
                        if (!t) return r2();
                        let e = t.measureViewportBox(),
                            {
                                scroll: r
                            } = this.root;
                        return r && (nn(e.x, r.offset.x), nn(e.y, r.offset.y)), e
                    }
                    removeElementScroll(t) {
                        let e = r2();
                        nR(e, t);
                        for (let r = 0; r < this.path.length; r++) {
                            let n = this.path[r],
                                {
                                    scroll: i,
                                    options: o
                                } = n;
                            if (n !== this.root && i && o.layoutScroll) {
                                if (i.isRoot) {
                                    nR(e, t);
                                    let {
                                        scroll: r
                                    } = this.root;
                                    r && (nn(e.x, -r.offset.x), nn(e.y, -r.offset.y))
                                }
                                nn(e.x, i.offset.x), nn(e.y, i.offset.y)
                            }
                        }
                        return e
                    }
                    applyTransform(t, e = !1) {
                        let r = r2();
                        nR(r, t);
                        for (let t = 0; t < this.path.length; t++) {
                            let n = this.path[t];
                            !e && n.options.layoutScroll && n.scroll && n !== n.root && na(r, {
                                x: -n.scroll.offset.x,
                                y: -n.scroll.offset.y
                            }), r8(n.latestValues) && na(r, n.latestValues)
                        }
                        return r8(this.latestValues) && na(r, this.latestValues), r
                    }
                    removeTransform(t) {
                        let e = r2();
                        nR(e, t);
                        for (let t = 0; t < this.path.length; t++) {
                            let r = this.path[t];
                            if (!r.instance || !r8(r.latestValues)) continue;
                            r4(r.latestValues) && r.updateSnapshot();
                            let n = r2(),
                                i = r.measurePageBox();
                            nR(n, i), nD(e, r.latestValues, r.snapshot ? r.snapshot.layoutBox : void 0, n)
                        }
                        return r8(this.latestValues) && nD(e, this.latestValues), e
                    }
                    setTargetDelta(t) {
                        this.targetDelta = t, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
                    }
                    setOptions(t) {
                        this.options = { ...this.options,
                            ...t,
                            crossfade: void 0 === t.crossfade || t.crossfade
                        }
                    }
                    clearMeasurements() {
                        this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
                    }
                    forceRelativeParentToResolveTarget() {
                        this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== tz.frameData.timestamp && this.relativeParent.resolveTargetDelta(!0)
                    }
                    resolveTargetDelta(t = !1) {
                        var e, r, n, i;
                        let o = this.getLead();
                        this.isProjectionDirty || (this.isProjectionDirty = o.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = o.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = o.isSharedProjectionDirty);
                        let s = !!this.resumingFrom || this !== o,
                            a = !(t || s && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty) || this.attemptToResolveRelativeTarget);
                        if (a) return;
                        let {
                            layout: u,
                            layoutId: l
                        } = this.options;
                        if (this.layout && (u || l)) {
                            if (this.resolvedRelativeTargetAt = tz.frameData.timestamp, !this.targetDelta && !this.relativeTarget) {
                                let t = this.getClosestProjectingParent();
                                t && t.layout && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = r2(), this.relativeTargetOrigin = r2(), rZ(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox), nR(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                            if (this.relativeTarget || this.targetDelta) {
                                if ((this.target || (this.target = r2(), this.targetWithTransforms = r2()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) ? (this.forceRelativeParentToResolveTarget(), r = this.target, n = this.relativeTarget, i = this.relativeParent.target, rH(r.x, n.x, i.x), rH(r.y, n.y, i.y)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : nR(this.target, this.layout.layoutBox), ne(this.target, this.targetDelta)) : nR(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                                    this.attemptToResolveRelativeTarget = !1;
                                    let t = this.getClosestProjectingParent();
                                    t && !!t.resumingFrom == !!this.resumingFrom && !t.options.layoutScroll && t.target && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = r2(), this.relativeTargetOrigin = r2(), rZ(this.relativeTargetOrigin, this.target, t.target), nR(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                                }
                                n$.resolvedTargetDeltas++
                            }
                        }
                    }
                    getClosestProjectingParent() {
                        return !this.parent || r4(this.parent.latestValues) || r7(this.parent.latestValues) ? void 0 : this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
                    }
                    isProjecting() {
                        return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
                    }
                    calcProjection() {
                        var t;
                        let e = this.getLead(),
                            r = !!this.resumingFrom || this !== e,
                            n = !0;
                        if ((this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty)) && (n = !1), r && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1), this.resolvedRelativeTargetAt === tz.frameData.timestamp && (n = !1), n) return;
                        let {
                            layout: i,
                            layoutId: o
                        } = this.options;
                        if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(i || o)) return;
                        nR(this.layoutCorrected, this.layout.layoutBox);
                        let s = this.treeScale.x,
                            a = this.treeScale.y;
                        ! function(t, e, r, n = !1) {
                            let i, o;
                            let s = r.length;
                            if (s) {
                                e.x = e.y = 1;
                                for (let a = 0; a < s; a++) {
                                    o = (i = r[a]).projectionDelta;
                                    let s = i.instance;
                                    (!s || !s.style || "contents" !== s.style.display) && (n && i.options.layoutScroll && i.scroll && i !== i.root && na(t, {
                                        x: -i.scroll.offset.x,
                                        y: -i.scroll.offset.y
                                    }), o && (e.x *= o.x.scale, e.y *= o.y.scale, ne(t, o)), n && r8(i.latestValues) && na(t, i.latestValues))
                                }
                                e.x = nr(e.x), e.y = nr(e.y)
                            }
                        }(this.layoutCorrected, this.treeScale, this.path, r), e.layout && !e.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (e.target = e.layout.layoutBox);
                        let {
                            target: u
                        } = e;
                        if (!u) {
                            this.projectionTransform && (this.projectionDelta = r0(), this.projectionTransform = "none", this.scheduleRender());
                            return
                        }
                        this.projectionDelta || (this.projectionDelta = r0(), this.projectionDeltaWithTransform = r0());
                        let l = this.projectionTransform;
                        rz(this.projectionDelta, this.layoutCorrected, u, this.latestValues), this.projectionTransform = nV(this.projectionDelta, this.treeScale), (this.projectionTransform !== l || this.treeScale.x !== s || this.treeScale.y !== a) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", u)), n$.recalculatedProjection++
                    }
                    hide() {
                        this.isVisible = !1
                    }
                    show() {
                        this.isVisible = !0
                    }
                    scheduleRender(t = !0) {
                        if (this.options.scheduleRender && this.options.scheduleRender(), t) {
                            let t = this.getStack();
                            t && t.scheduleRender()
                        }
                        this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                    }
                    setAnimationOrigin(t, e = !1) {
                        let r;
                        let n = this.snapshot,
                            i = n ? n.latestValues : {},
                            o = { ...this.latestValues
                            },
                            s = r0();
                        this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !e;
                        let a = r2(),
                            u = n ? n.source : void 0,
                            l = this.layout ? this.layout.source : void 0,
                            c = u !== l,
                            f = this.getStack(),
                            h = !f || f.members.length <= 1,
                            d = !!(c && !h && !0 === this.options.crossfade && !this.path.some(n8));
                        this.animationProgress = 0, this.mixTargetDelta = e => {
                            let n = e / 1e3;
                            if (n6(s.x, t.x, n), n6(s.y, t.y, n), this.setTargetDelta(s), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                                var u, l, f, p;
                                rZ(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox), f = this.relativeTarget, p = this.relativeTargetOrigin, n4(f.x, p.x, a.x, n), n4(f.y, p.y, a.y, n), r && (u = this.relativeTarget, l = r, u.x.min === l.x.min && u.x.max === l.x.max && u.y.min === l.y.min && u.y.max === l.y.max) && (this.isProjectionDirty = !1), r || (r = r2()), nR(r, this.relativeTarget)
                            }
                            c && (this.animationValues = o, function(t, e, r, n, i, o) {
                                i ? (t.opacity = eO(0, void 0 !== r.opacity ? r.opacity : 1, nP(n)), t.opacityExit = eO(void 0 !== e.opacity ? e.opacity : 1, 0, nO(n))) : o && (t.opacity = eO(void 0 !== e.opacity ? e.opacity : 1, void 0 !== r.opacity ? r.opacity : 1, n));
                                for (let i = 0; i < nw; i++) {
                                    let o = `border${nb[i]}Radius`,
                                        s = nS(e, o),
                                        a = nS(r, o);
                                    if (void 0 === s && void 0 === a) continue;
                                    s || (s = 0), a || (a = 0);
                                    let u = 0 === s || 0 === a || nE(s) === nE(a);
                                    u ? (t[o] = Math.max(eO(nx(s), nx(a), n), 0), (G.test(a) || G.test(s)) && (t[o] += "%")) : t[o] = a
                                }(e.rotate || r.rotate) && (t.rotate = eO(e.rotate || 0, r.rotate || 0, n))
                            }(o, i, this.latestValues, n, d, h)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n
                        }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
                    }
                    startAnimation(t) {
                        this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && ((0, tz.Pn)(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = tz.Wi.update(() => {
                            nd.hasAnimatedSinceResize = !0, this.currentAnimation = function(t, e, r) {
                                let n = M(t) ? t : rS(t);
                                return n.start(rm("", n, 1e3, r)), n.animation
                            }(0, 0, { ...t,
                                onUpdate: e => {
                                    this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e)
                                },
                                onComplete: () => {
                                    t.onComplete && t.onComplete(), this.completeAnimation()
                                }
                            }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
                        })
                    }
                    completeAnimation() {
                        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
                        let t = this.getStack();
                        t && t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
                    }
                    finishAnimation() {
                        this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation()
                    }
                    applyTransformsToTarget() {
                        let t = this.getLead(),
                            {
                                targetWithTransforms: e,
                                target: r,
                                layout: n,
                                latestValues: i
                            } = t;
                        if (e && r && n) {
                            if (this !== t && this.layout && n && ir(this.options.animationType, this.layout.layoutBox, n.layoutBox)) {
                                r = this.target || r2();
                                let e = rq(this.layout.layoutBox.x);
                                r.x.min = t.target.x.min, r.x.max = r.x.min + e;
                                let n = rq(this.layout.layoutBox.y);
                                r.y.min = t.target.y.min, r.y.max = r.y.min + n
                            }
                            nR(e, r), na(e, i), rz(this.projectionDeltaWithTransform, this.layoutCorrected, e, i)
                        }
                    }
                    registerSharedNode(t, e) {
                        this.sharedNodes.has(t) || this.sharedNodes.set(t, new nI);
                        let r = this.sharedNodes.get(t);
                        r.add(e);
                        let n = e.options.initialPromotionConfig;
                        e.promote({
                            transition: n ? n.transition : void 0,
                            preserveFollowOpacity: n && n.shouldPreserveFollowOpacity ? n.shouldPreserveFollowOpacity(e) : void 0
                        })
                    }
                    isLead() {
                        let t = this.getStack();
                        return !t || t.lead === this
                    }
                    getLead() {
                        var t;
                        let {
                            layoutId: e
                        } = this.options;
                        return e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
                    }
                    getPrevLead() {
                        var t;
                        let {
                            layoutId: e
                        } = this.options;
                        return e ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
                    }
                    getStack() {
                        let {
                            layoutId: t
                        } = this.options;
                        if (t) return this.root.sharedNodes.get(t)
                    }
                    promote({
                        needsReset: t,
                        transition: e,
                        preserveFollowOpacity: r
                    } = {}) {
                        let n = this.getStack();
                        n && n.promote(this, r), t && (this.projectionDelta = void 0, this.needsReset = !0), e && this.setOptions({
                            transition: e
                        })
                    }
                    relegate() {
                        let t = this.getStack();
                        return !!t && t.relegate(this)
                    }
                    resetRotation() {
                        let {
                            visualElement: t
                        } = this.options;
                        if (!t) return;
                        let e = !1,
                            {
                                latestValues: r
                            } = t;
                        if ((r.rotate || r.rotateX || r.rotateY || r.rotateZ) && (e = !0), !e) return;
                        let n = {};
                        for (let e = 0; e < nq.length; e++) {
                            let i = "rotate" + nq[e];
                            r[i] && (n[i] = r[i], t.setStaticValue(i, 0))
                        }
                        for (let e in t.render(), n) t.setStaticValue(e, n[e]);
                        t.scheduleRender()
                    }
                    getProjectionStyles(t = {}) {
                        var e, r;
                        let n = {};
                        if (!this.instance || this.isSVG) return n;
                        if (!this.isVisible) return {
                            visibility: "hidden"
                        };
                        n.visibility = "";
                        let i = this.getTransformTemplate();
                        if (this.needsReset) return this.needsReset = !1, n.opacity = "", n.pointerEvents = tR(t.pointerEvents) || "", n.transform = i ? i(this.latestValues, "") : "none", n;
                        let o = this.getLead();
                        if (!this.projectionDelta || !this.layout || !o.target) {
                            let e = {};
                            return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, e.pointerEvents = tR(t.pointerEvents) || ""), this.hasProjected && !r8(this.latestValues) && (e.transform = i ? i({}, "") : "none", this.hasProjected = !1), e
                        }
                        let s = o.animationValues || o.latestValues;
                        this.applyTransformsToTarget(), n.transform = nV(this.projectionDeltaWithTransform, this.treeScale, s), i && (n.transform = i(s, n.transform));
                        let {
                            x: a,
                            y: u
                        } = this.projectionDelta;
                        for (let t in n.transformOrigin = `${100*a.origin}% ${100*u.origin}% 0`, o.animationValues ? n.opacity = o === this ? null !== (r = null !== (e = s.opacity) && void 0 !== e ? e : this.latestValues.opacity) && void 0 !== r ? r : 1 : this.preserveOpacity ? this.latestValues.opacity : s.opacityExit : n.opacity = o === this ? void 0 !== s.opacity ? s.opacity : "" : void 0 !== s.opacityExit ? s.opacityExit : 0, R) {
                            if (void 0 === s[t]) continue;
                            let {
                                correct: e,
                                applyTo: r
                            } = R[t], i = "none" === n.transform ? s[t] : e(s[t], o);
                            if (r) {
                                let t = r.length;
                                for (let e = 0; e < t; e++) n[r[e]] = i
                            } else n[t] = i
                        }
                        return this.options.layoutId && (n.pointerEvents = o === this ? tR(t.pointerEvents) || "" : "none"), n
                    }
                    clearSnapshot() {
                        this.resumeFrom = this.snapshot = void 0
                    }
                    resetTree() {
                        this.root.nodes.forEach(t => {
                            var e;
                            return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
                        }), this.root.nodes.forEach(nX), this.root.sharedNodes.clear()
                    }
                }
            }

            function nH(t) {
                t.updateLayout()
            }

            function nK(t) {
                var e;
                let r = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
                if (t.isLead() && t.layout && r && t.hasListeners("didUpdate")) {
                    let {
                        layoutBox: e,
                        measuredBox: n
                    } = t.layout, {
                        animationType: i
                    } = t.options, o = r.source !== t.layout.source;
                    "size" === i ? r5(t => {
                        let n = o ? r.measuredBox[t] : r.layoutBox[t],
                            i = rq(n);
                        n.min = e[t].min, n.max = n.min + i
                    }) : ir(i, r.layoutBox, e) && r5(n => {
                        let i = o ? r.measuredBox[n] : r.layoutBox[n],
                            s = rq(e[n]);
                        i.max = i.min + s, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[n].max = t.relativeTarget[n].min + s)
                    });
                    let s = r0();
                    rz(s, e, r.layoutBox);
                    let a = r0();
                    o ? rz(a, t.applyTransform(n, !0), r.measuredBox) : rz(a, e, r.layoutBox);
                    let u = !n_(s),
                        l = !1;
                    if (!t.resumeFrom) {
                        let n = t.getClosestProjectingParent();
                        if (n && !n.resumeFrom) {
                            let {
                                snapshot: i,
                                layout: o
                            } = n;
                            if (i && o) {
                                let s = r2();
                                rZ(s, r.layoutBox, i.layoutBox);
                                let a = r2();
                                rZ(a, e, o.layoutBox), nU(s, a) || (l = !0), n.options.layoutRoot && (t.relativeTarget = a, t.relativeTargetOrigin = s, t.relativeParent = n)
                            }
                        }
                    }
                    t.notifyListeners("didUpdate", {
                        layout: e,
                        snapshot: r,
                        delta: a,
                        layoutDelta: s,
                        hasLayoutChanged: u,
                        hasRelativeTargetChanged: l
                    })
                } else if (t.isLead()) {
                    let {
                        onExitComplete: e
                    } = t.options;
                    e && e()
                }
                t.options.transition = void 0
            }

            function nZ(t) {
                n$.totalNodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
            }

            function nQ(t) {
                t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
            }

            function nG(t) {
                t.clearSnapshot()
            }

            function nX(t) {
                t.clearMeasurements()
            }

            function nY(t) {
                t.isLayoutDirty = !1
            }

            function nJ(t) {
                let {
                    visualElement: e
                } = t.options;
                e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
            }

            function n0(t) {
                t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
            }

            function n1(t) {
                t.resolveTargetDelta()
            }

            function n2(t) {
                t.calcProjection()
            }

            function n5(t) {
                t.resetRotation()
            }

            function n3(t) {
                t.removeLeadSnapshot()
            }

            function n6(t, e, r) {
                t.translate = eO(e.translate, 0, r), t.scale = eO(e.scale, 1, r), t.origin = e.origin, t.originPoint = e.originPoint
            }

            function n4(t, e, r, n) {
                t.min = eO(e.min, r.min, n), t.max = eO(e.max, r.max, n)
            }

            function n8(t) {
                return t.animationValues && void 0 !== t.animationValues.opacityExit
            }
            let n7 = {
                    duration: .45,
                    ease: [.4, 0, .1, 1]
                },
                n9 = t => "undefined" != typeof navigator && navigator.userAgent.toLowerCase().includes(t),
                it = n9("applewebkit/") && !n9("chrome/") ? Math.round : tZ.Z;

            function ie(t) {
                t.min = it(t.min), t.max = it(t.max)
            }

            function ir(t, e, r) {
                return "position" === t || "preserve-aspect" === t && !rW(nF(e), nF(r), .2)
            }
            let ii = nz({
                    attachResizeListener: (t, e) => tM(t, "resize", e),
                    measureScroll: () => ({
                        x: document.documentElement.scrollLeft || document.body.scrollLeft,
                        y: document.documentElement.scrollTop || document.body.scrollTop
                    }),
                    checkIsScrollRoot: () => !0
                }),
                io = {
                    current: void 0
                },
                is = nz({
                    measureScroll: t => ({
                        x: t.scrollLeft,
                        y: t.scrollTop
                    }),
                    defaultParent: () => {
                        if (!io.current) {
                            let t = new ii({});
                            t.mount(window), t.setOptions({
                                layoutScroll: !0
                            }), io.current = t
                        }
                        return io.current
                    },
                    resetTransform: (t, e) => {
                        t.style.transform = void 0 !== e ? e : "none"
                    },
                    checkIsScrollRoot: t => "fixed" === window.getComputedStyle(t).position
                }),
                ia = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

            function iu(t, e, r = 1) {
                (0, t3.k)(r <= 4, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
                let [n, i] = function(t) {
                    let e = ia.exec(t);
                    if (!e) return [, ];
                    let [, r, n] = e;
                    return [r, n]
                }(t);
                if (!n) return;
                let o = window.getComputedStyle(e).getPropertyValue(n);
                return o ? o.trim() : F(i) ? iu(i, e, r + 1) : i
            }
            let il = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
                ic = t => il.has(t),
                ih = t => Object.keys(t).some(ic),
                id = t => t === B || t === X,
                ip = (t, e) => parseFloat(t.split(", ")[e]),
                im = (t, e) => (r, {
                    transform: n
                }) => {
                    if ("none" === n || !n) return 0;
                    let i = n.match(/^matrix3d\((.+)\)$/);
                    if (i) return ip(i[1], e); {
                        let e = n.match(/^matrix\((.+)\)$/);
                        return e ? ip(e[1], t) : 0
                    }
                },
                iy = new Set(["x", "y", "z"]),
                iv = T.filter(t => !iy.has(t)),
                ig = {
                    width: ({
                        x: t
                    }, {
                        paddingLeft: e = "0",
                        paddingRight: r = "0"
                    }) => t.max - t.min - parseFloat(e) - parseFloat(r),
                    height: ({
                        y: t
                    }, {
                        paddingTop: e = "0",
                        paddingBottom: r = "0"
                    }) => t.max - t.min - parseFloat(e) - parseFloat(r),
                    top: (t, {
                        top: e
                    }) => parseFloat(e),
                    left: (t, {
                        left: e
                    }) => parseFloat(e),
                    bottom: ({
                        y: t
                    }, {
                        top: e
                    }) => parseFloat(e) + (t.max - t.min),
                    right: ({
                        x: t
                    }, {
                        left: e
                    }) => parseFloat(e) + (t.max - t.min),
                    x: im(4, 13),
                    y: im(5, 14)
                };
            ig.translateX = ig.x, ig.translateY = ig.y;
            let ib = (t, e, r) => {
                    let n = e.measureViewportBox(),
                        i = e.current,
                        o = getComputedStyle(i),
                        {
                            display: s
                        } = o,
                        a = {};
                    "none" === s && e.setStaticValue("display", t.display || "block"), r.forEach(t => {
                        a[t] = ig[t](n, o)
                    }), e.render();
                    let u = e.measureViewportBox();
                    return r.forEach(r => {
                        let n = e.getValue(r);
                        n && n.jump(a[r]), t[r] = ig[r](u, o)
                    }), t
                },
                iw = (t, e, r = {}, n = {}) => {
                    e = { ...e
                    }, n = { ...n
                    };
                    let i = Object.keys(e).filter(ic),
                        o = [],
                        s = !1,
                        a = [];
                    if (i.forEach(i => {
                            let u;
                            let l = t.getValue(i);
                            if (!t.hasValue(i)) return;
                            let c = r[i],
                                f = rA(c),
                                h = e[i];
                            if (tO(h)) {
                                let t = h.length,
                                    e = null === h[0] ? 1 : 0;
                                f = rA(c = h[e]);
                                for (let r = e; r < t && null !== h[r]; r++) u ? (0, t3.k)(rA(h[r]) === u, "All keyframes must be of the same type") : (u = rA(h[r]), (0, t3.k)(u === f || id(f) && id(u), "Keyframes must be of the same dimension as the current value"))
                            } else u = rA(h);
                            if (f !== u) {
                                if (id(f) && id(u)) {
                                    let t = l.get();
                                    "string" == typeof t && l.set(parseFloat(t)), "string" == typeof h ? e[i] = parseFloat(h) : Array.isArray(h) && u === X && (e[i] = h.map(parseFloat))
                                } else(null == f ? void 0 : f.transform) && (null == u ? void 0 : u.transform) && (0 === c || 0 === h) ? 0 === c ? l.set(u.transform(c)) : e[i] = f.transform(h) : (s || (o = function(t) {
                                    let e = [];
                                    return iv.forEach(r => {
                                        let n = t.getValue(r);
                                        void 0 !== n && (e.push([r, n.get()]), n.set(r.startsWith("scale") ? 1 : 0))
                                    }), e.length && t.render(), e
                                }(t), s = !0), a.push(i), n[i] = void 0 !== n[i] ? n[i] : e[i], l.jump(h))
                            }
                        }), !a.length) return {
                        target: e,
                        transitionEnd: n
                    }; {
                        let r = a.indexOf("height") >= 0 ? window.pageYOffset : null,
                            i = ib(e, t, a);
                        return o.length && o.forEach(([e, r]) => {
                            t.getValue(e).set(r)
                        }), t.render(), E.j && null !== r && window.scrollTo({
                            top: r
                        }), {
                            target: i,
                            transitionEnd: n
                        }
                    }
                },
                ix = (t, e, r, n) => {
                    var i, o;
                    let s = function(t, { ...e
                    }, r) {
                        let n = t.current;
                        if (!(n instanceof Element)) return {
                            target: e,
                            transitionEnd: r
                        };
                        for (let i in r && (r = { ...r
                            }), t.values.forEach(t => {
                                let e = t.get();
                                if (!F(e)) return;
                                let r = iu(e, n);
                                r && t.set(r)
                            }), e) {
                            let t = e[i];
                            if (!F(t)) continue;
                            let o = iu(t, n);
                            o && (e[i] = o, r || (r = {}), void 0 === r[i] && (r[i] = t))
                        }
                        return {
                            target: e,
                            transitionEnd: r
                        }
                    }(t, e, n);
                    return e = s.target, n = s.transitionEnd, i = e, o = n, ih(i) ? iw(t, i, r, o) : {
                        target: i,
                        transitionEnd: o
                    }
                },
                iE = {
                    current: null
                },
                iS = {
                    current: !1
                },
                iP = new WeakMap,
                iO = Object.keys(x),
                iA = iO.length,
                iC = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"],
                iR = y.length;
            class iT {
                constructor({
                    parent: t,
                    props: e,
                    presenceContext: r,
                    reducedMotionConfig: n,
                    visualState: i
                }, o = {}) {
                    this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
                        this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                    }, this.scheduleRender = () => tz.Wi.render(this.render, !1, !0);
                    let {
                        latestValues: s,
                        renderState: a
                    } = i;
                    this.latestValues = s, this.baseTarget = { ...s
                    }, this.initialValues = e.initial ? { ...s
                    } : {}, this.renderState = a, this.parent = t, this.props = e, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = n, this.options = o, this.isControllingVariants = v(e), this.isVariantNode = g(e), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(t && t.current);
                    let {
                        willChange: u,
                        ...l
                    } = this.scrapeMotionValuesFromProps(e, {});
                    for (let t in l) {
                        let e = l[t];
                        void 0 !== s[t] && M(e) && (e.set(s[t], !1), ry(u) && u.add(t))
                    }
                }
                scrapeMotionValuesFromProps(t, e) {
                    return {}
                }
                mount(t) {
                    this.current = t, iP.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((t, e) => this.bindToMotionValue(e, t)), iS.current || function() {
                        if (iS.current = !0, E.j) {
                            if (window.matchMedia) {
                                let t = window.matchMedia("(prefers-reduced-motion)"),
                                    e = () => iE.current = t.matches;
                                t.addListener(e), e()
                            } else iE.current = !1
                        }
                    }(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || iE.current), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
                }
                unmount() {
                    for (let t in iP.delete(this.current), this.projection && this.projection.unmount(), (0, tz.Pn)(this.notifyUpdate), (0, tz.Pn)(this.render), this.valueSubscriptions.forEach(t => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this), this.events) this.events[t].clear();
                    for (let t in this.features) this.features[t].unmount();
                    this.current = null
                }
                bindToMotionValue(t, e) {
                    let r = k.has(t),
                        n = e.on("change", e => {
                            this.latestValues[t] = e, this.props.onUpdate && tz.Wi.update(this.notifyUpdate, !1, !0), r && this.projection && (this.projection.isTransformDirty = !0)
                        }),
                        i = e.on("renderRequest", this.scheduleRender);
                    this.valueSubscriptions.set(t, () => {
                        n(), i()
                    })
                }
                sortNodePosition(t) {
                    return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
                }
                loadFeatures({
                    children: t,
                    ...e
                }, r, n, i) {
                    let o, s;
                    for (let t = 0; t < iA; t++) {
                        let r = iO[t],
                            {
                                isEnabled: n,
                                Feature: i,
                                ProjectionNode: a,
                                MeasureLayout: u
                            } = x[r];
                        a && (o = a), n(e) && (!this.features[r] && i && (this.features[r] = new i(this)), u && (s = u))
                    }
                    if (!this.projection && o) {
                        this.projection = new o(this.latestValues, this.parent && this.parent.projection);
                        let {
                            layoutId: t,
                            layout: r,
                            drag: n,
                            dragConstraints: s,
                            layoutScroll: a,
                            layoutRoot: u
                        } = e;
                        this.projection.setOptions({
                            layoutId: t,
                            layout: r,
                            alwaysMeasureLayout: !!n || s && h(s),
                            visualElement: this,
                            scheduleRender: () => this.scheduleRender(),
                            animationType: "string" == typeof r ? r : "both",
                            initialPromotionConfig: i,
                            layoutScroll: a,
                            layoutRoot: u
                        })
                    }
                    return s
                }
                updateFeatures() {
                    for (let t in this.features) {
                        let e = this.features[t];
                        e.isMounted ? e.update() : (e.mount(), e.isMounted = !0)
                    }
                }
                triggerBuild() {
                    this.build(this.renderState, this.latestValues, this.options, this.props)
                }
                measureViewportBox() {
                    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : r2()
                }
                getStaticValue(t) {
                    return this.latestValues[t]
                }
                setStaticValue(t, e) {
                    this.latestValues[t] = e
                }
                makeTargetAnimatable(t, e = !0) {
                    return this.makeTargetAnimatableFromInstance(t, this.props, e)
                }
                update(t, e) {
                    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = e;
                    for (let e = 0; e < iC.length; e++) {
                        let r = iC[e];
                        this.propEventSubscriptions[r] && (this.propEventSubscriptions[r](), delete this.propEventSubscriptions[r]);
                        let n = t["on" + r];
                        n && (this.propEventSubscriptions[r] = this.on(r, n))
                    }
                    this.prevMotionValues = function(t, e, r) {
                        let {
                            willChange: n
                        } = e;
                        for (let i in e) {
                            let o = e[i],
                                s = r[i];
                            if (M(o)) t.addValue(i, o), ry(n) && n.add(i);
                            else if (M(s)) t.addValue(i, rS(o, {
                                owner: t
                            })), ry(n) && n.remove(i);
                            else if (s !== o) {
                                if (t.hasValue(i)) {
                                    let e = t.getValue(i);
                                    e.hasAnimated || e.set(o)
                                } else {
                                    let e = t.getStaticValue(i);
                                    t.addValue(i, rS(void 0 !== e ? e : o, {
                                        owner: t
                                    }))
                                }
                            }
                        }
                        for (let n in r) void 0 === e[n] && t.removeValue(n);
                        return e
                    }(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
                }
                getProps() {
                    return this.props
                }
                getVariant(t) {
                    return this.props.variants ? this.props.variants[t] : void 0
                }
                getDefaultTransition() {
                    return this.props.transition
                }
                getTransformPagePoint() {
                    return this.props.transformPagePoint
                }
                getClosestVariantNode() {
                    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
                }
                getVariantContext(t = !1) {
                    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
                    if (!this.isControllingVariants) {
                        let t = this.parent && this.parent.getVariantContext() || {};
                        return void 0 !== this.props.initial && (t.initial = this.props.initial), t
                    }
                    let e = {};
                    for (let t = 0; t < iR; t++) {
                        let r = y[t],
                            n = this.props[r];
                        (d(n) || !1 === n) && (e[r] = n)
                    }
                    return e
                }
                addVariantChild(t) {
                    let e = this.getClosestVariantNode();
                    if (e) return e.variantChildren && e.variantChildren.add(t), () => e.variantChildren.delete(t)
                }
                addValue(t, e) {
                    e !== this.values.get(t) && (this.removeValue(t), this.bindToMotionValue(t, e)), this.values.set(t, e), this.latestValues[t] = e.get()
                }
                removeValue(t) {
                    this.values.delete(t);
                    let e = this.valueSubscriptions.get(t);
                    e && (e(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
                }
                hasValue(t) {
                    return this.values.has(t)
                }
                getValue(t, e) {
                    if (this.props.values && this.props.values[t]) return this.props.values[t];
                    let r = this.values.get(t);
                    return void 0 === r && void 0 !== e && (r = rS(e, {
                        owner: this
                    }), this.addValue(t, r)), r
                }
                readValue(t) {
                    var e;
                    return void 0 === this.latestValues[t] && this.current ? null !== (e = this.getBaseTargetFromProps(this.props, t)) && void 0 !== e ? e : this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t]
                }
                setBaseTarget(t, e) {
                    this.baseTarget[t] = e
                }
                getBaseTarget(t) {
                    var e;
                    let {
                        initial: r
                    } = this.props, n = "string" == typeof r || "object" == typeof r ? null === (e = tS(this.props, r)) || void 0 === e ? void 0 : e[t] : void 0;
                    if (r && void 0 !== n) return n;
                    let i = this.getBaseTargetFromProps(this.props, t);
                    return void 0 === i || M(i) ? void 0 !== this.initialValues[t] && void 0 === n ? void 0 : this.baseTarget[t] : i
                }
                on(t, e) {
                    return this.events[t] || (this.events[t] = new rw), this.events[t].add(e)
                }
                notify(t, ...e) {
                    this.events[t] && this.events[t].notify(...e)
                }
            }
            class ik extends iT {
                sortInstanceNodePosition(t, e) {
                    return 2 & t.compareDocumentPosition(e) ? 1 : -1
                }
                getBaseTargetFromProps(t, e) {
                    return t.style ? t.style[e] : void 0
                }
                removeValueFromRenderState(t, {
                    vars: e,
                    style: r
                }) {
                    delete e[t], delete r[t]
                }
                makeTargetAnimatableFromInstance({
                    transition: t,
                    transitionEnd: e,
                    ...r
                }, {
                    transformValues: n
                }, i) {
                    let o = function(t, e, r) {
                        let n = {};
                        for (let i in t) {
                            let t = function(t, e) {
                                if (!e) return;
                                let r = e[t] || e.default || e;
                                return r.from
                            }(i, e);
                            if (void 0 !== t) n[i] = t;
                            else {
                                let t = r.getValue(i);
                                t && (n[i] = t.get())
                            }
                        }
                        return n
                    }(r, t || {}, this);
                    if (n && (e && (e = n(e)), r && (r = n(r)), o && (o = n(o))), i) {
                        ! function(t, e, r) {
                            var n, i;
                            let o = Object.keys(e).filter(e => !t.hasValue(e)),
                                s = o.length;
                            if (s)
                                for (let a = 0; a < s; a++) {
                                    let s = o[a],
                                        u = e[s],
                                        l = null;
                                    Array.isArray(u) && (l = u[0]), null === l && (l = null !== (i = null !== (n = r[s]) && void 0 !== n ? n : t.readValue(s)) && void 0 !== i ? i : e[s]), null != l && ("string" == typeof l && (rv(l) || rd(l)) ? l = parseFloat(l) : !rR(l) && eB.test(u) && (l = rh(s, u)), t.addValue(s, rS(l, {
                                        owner: t
                                    })), void 0 === r[s] && (r[s] = l), null !== l && t.setBaseTarget(s, l))
                                }
                        }(this, r, o);
                        let t = ix(this, r, o, e);
                        e = t.transitionEnd, r = t.target
                    }
                    return {
                        transition: t,
                        transitionEnd: e,
                        ...r
                    }
                }
            }
            class iL extends ik {
                readValueFromInstance(t, e) {
                    if (k.has(e)) {
                        let t = rf(e);
                        return t && t.default || 0
                    } {
                        let r = window.getComputedStyle(t),
                            n = (U(e) ? r.getPropertyValue(e) : r[e]) || 0;
                        return "string" == typeof n ? n.trim() : n
                    }
                }
                measureInstanceViewportBox(t, {
                    transformPagePoint: e
                }) {
                    return nu(t, e)
                }
                build(t, e, r, n) {
                    tn(t, e, r, n.transformTemplate)
                }
                scrapeMotionValuesFromProps(t, e) {
                    return tx(t, e)
                }
                handleChildMotionValue() {
                    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
                    let {
                        children: t
                    } = this.props;
                    M(t) && (this.childSubscription = t.on("change", t => {
                        this.current && (this.current.textContent = `${t}`)
                    }))
                }
                renderInstance(t, e, r, n) {
                    tg(t, e, r, n)
                }
            }
            class iM extends ik {
                constructor() {
                    super(...arguments), this.isSVGTag = !1
                }
                getBaseTargetFromProps(t, e) {
                    return t[e]
                }
                readValueFromInstance(t, e) {
                    if (k.has(e)) {
                        let t = rf(e);
                        return t && t.default || 0
                    }
                    return e = tb.has(e) ? e : tv(e), t.getAttribute(e)
                }
                measureInstanceViewportBox() {
                    return r2()
                }
                scrapeMotionValuesFromProps(t, e) {
                    return tE(t, e)
                }
                build(t, e, r, n) {
                    td(t, e, r, this.isSVGTag, n.transformTemplate)
                }
                renderInstance(t, e, r, n) {
                    tw(t, e, r, n)
                }
                mount(t) {
                    this.isSVGTag = tm(t.tagName), super.mount(t)
                }
            }
            let iD = (t, e) => C(t) ? new iM(e, {
                    enableHardwareAcceleration: !1
                }) : new iL(e, {
                    enableHardwareAcceleration: !0
                }),
                ij = {
                    animation: {
                        Feature: class extends t$ {
                            constructor(t) {
                                super(t), t.animationState || (t.animationState = function(t) {
                                    let e = e => Promise.all(e.map(({
                                            animation: e,
                                            options: r
                                        }) => (function(t, e, r = {}) {
                                            let n;
                                            if (t.notify("AnimationStart", e), Array.isArray(e)) {
                                                let i = e.map(e => rk(t, e, r));
                                                n = Promise.all(i)
                                            } else if ("string" == typeof e) n = rk(t, e, r);
                                            else {
                                                let i = "function" == typeof e ? t2(t, e, r.custom) : e;
                                                n = Promise.all(rT(t, i, r))
                                            }
                                            return n.then(() => t.notify("AnimationComplete", e))
                                        })(t, e, r))),
                                        r = {
                                            animate: rj(!0),
                                            whileInView: rj(),
                                            whileHover: rj(),
                                            whileTap: rj(),
                                            whileDrag: rj(),
                                            whileFocus: rj(),
                                            exit: rj()
                                        },
                                        n = !0,
                                        i = (e, r) => {
                                            let n = t2(t, r);
                                            if (n) {
                                                let {
                                                    transition: t,
                                                    transitionEnd: r,
                                                    ...i
                                                } = n;
                                                e = { ...e,
                                                    ...i,
                                                    ...r
                                                }
                                            }
                                            return e
                                        };

                                    function o(o, s) {
                                        let a = t.getProps(),
                                            u = t.getVariantContext(!0) || {},
                                            l = [],
                                            c = new Set,
                                            f = {},
                                            h = 1 / 0;
                                        for (let e = 0; e < rD; e++) {
                                            var m;
                                            let y = rM[e],
                                                v = r[y],
                                                g = void 0 !== a[y] ? a[y] : u[y],
                                                b = d(g),
                                                w = y === s ? v.isActive : null;
                                            !1 === w && (h = e);
                                            let x = g === u[y] && g !== a[y] && b;
                                            if (x && n && t.manuallyAnimateOnMount && (x = !1), v.protectedKeys = { ...f
                                                }, !v.isActive && null === w || !g && !v.prevProp || p(g) || "boolean" == typeof g) continue;
                                            let E = (m = v.prevProp, "string" == typeof g ? g !== m : !!Array.isArray(g) && !t1(g, m)),
                                                S = E || y === s && v.isActive && !x && b || e > h && b,
                                                P = Array.isArray(g) ? g : [g],
                                                O = P.reduce(i, {});
                                            !1 === w && (O = {});
                                            let {
                                                prevResolvedValues: A = {}
                                            } = v, C = { ...A,
                                                ...O
                                            }, R = t => {
                                                S = !0, c.delete(t), v.needsAnimating[t] = !0
                                            };
                                            for (let t in C) {
                                                let e = O[t],
                                                    r = A[t];
                                                f.hasOwnProperty(t) || (e !== r ? tO(e) && tO(r) ? !t1(e, r) || E ? R(t) : v.protectedKeys[t] = !0 : void 0 !== e ? R(t) : c.add(t) : void 0 !== e && c.has(t) ? R(t) : v.protectedKeys[t] = !0)
                                            }
                                            v.prevProp = g, v.prevResolvedValues = O, v.isActive && (f = { ...f,
                                                ...O
                                            }), n && t.blockInitialAnimation && (S = !1), S && !x && l.push(...P.map(t => ({
                                                animation: t,
                                                options: {
                                                    type: y,
                                                    ...o
                                                }
                                            })))
                                        }
                                        if (c.size) {
                                            let e = {};
                                            c.forEach(r => {
                                                let n = t.getBaseTarget(r);
                                                void 0 !== n && (e[r] = n)
                                            }), l.push({
                                                animation: e
                                            })
                                        }
                                        let y = !!l.length;
                                        return n && !1 === a.initial && !t.manuallyAnimateOnMount && (y = !1), n = !1, y ? e(l) : Promise.resolve()
                                    }
                                    return {
                                        animateChanges: o,
                                        setActive: function(e, n, i) {
                                            var s;
                                            if (r[e].isActive === n) return Promise.resolve();
                                            null === (s = t.variantChildren) || void 0 === s || s.forEach(t => {
                                                var r;
                                                return null === (r = t.animationState) || void 0 === r ? void 0 : r.setActive(e, n)
                                            }), r[e].isActive = n;
                                            let a = o(i, e);
                                            for (let t in r) r[t].protectedKeys = {};
                                            return a
                                        },
                                        setAnimateFunction: function(r) {
                                            e = r(t)
                                        },
                                        getState: () => r
                                    }
                                }(t))
                            }
                            updateAnimationControlsSubscription() {
                                let {
                                    animate: t
                                } = this.node.getProps();
                                this.unmount(), p(t) && (this.unmount = t.subscribe(this.node))
                            }
                            mount() {
                                this.updateAnimationControlsSubscription()
                            }
                            update() {
                                let {
                                    animate: t
                                } = this.node.getProps(), {
                                    animate: e
                                } = this.node.prevProps || {};
                                t !== e && this.updateAnimationControlsSubscription()
                            }
                            unmount() {}
                        }
                    },
                    exit: {
                        Feature: class extends t$ {
                            constructor() {
                                super(...arguments), this.id = r_++
                            }
                            update() {
                                if (!this.node.presenceContext) return;
                                let {
                                    isPresent: t,
                                    onExitComplete: e,
                                    custom: r
                                } = this.node.presenceContext, {
                                    isPresent: n
                                } = this.node.prevPresenceContext || {};
                                if (!this.node.animationState || t === n) return;
                                let i = this.node.animationState.setActive("exit", !t, {
                                    custom: null != r ? r : this.node.getProps().custom
                                });
                                e && !t && i.then(() => e(this.id))
                            }
                            mount() {
                                let {
                                    register: t
                                } = this.node.presenceContext || {};
                                t && (this.unmount = t(this.id))
                            }
                            unmount() {}
                        }
                    },
                    inView: {
                        Feature: class extends t$ {
                            constructor() {
                                super(...arguments), this.hasEnteredView = !1, this.isInView = !1
                            }
                            startObserver() {
                                this.unmount();
                                let {
                                    viewport: t = {}
                                } = this.node.getProps(), {
                                    root: e,
                                    margin: r,
                                    amount: n = "some",
                                    once: i
                                } = t, o = {
                                    root: e ? e.current : void 0,
                                    rootMargin: r,
                                    threshold: "number" == typeof n ? n : t0[n]
                                };
                                return function(t, e, r) {
                                    let n = function({
                                        root: t,
                                        ...e
                                    }) {
                                        let r = t || document;
                                        tX.has(r) || tX.set(r, {});
                                        let n = tX.get(r),
                                            i = JSON.stringify(e);
                                        return n[i] || (n[i] = new IntersectionObserver(tJ, {
                                            root: t,
                                            ...e
                                        })), n[i]
                                    }(e);
                                    return tG.set(t, r), n.observe(t), () => {
                                        tG.delete(t), n.unobserve(t)
                                    }
                                }(this.node.current, o, t => {
                                    let {
                                        isIntersecting: e
                                    } = t;
                                    if (this.isInView === e || (this.isInView = e, i && !e && this.hasEnteredView)) return;
                                    e && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", e);
                                    let {
                                        onViewportEnter: r,
                                        onViewportLeave: n
                                    } = this.node.getProps(), o = e ? r : n;
                                    o && o(t)
                                })
                            }
                            mount() {
                                this.startObserver()
                            }
                            update() {
                                if ("undefined" == typeof IntersectionObserver) return;
                                let {
                                    props: t,
                                    prevProps: e
                                } = this.node, r = ["amount", "margin", "root"].some(function({
                                    viewport: t = {}
                                }, {
                                    viewport: e = {}
                                } = {}) {
                                    return r => t[r] !== e[r]
                                }(t, e));
                                r && this.startObserver()
                            }
                            unmount() {}
                        }
                    },
                    tap: {
                        Feature: class extends t$ {
                            constructor() {
                                super(...arguments), this.removeStartListeners = tZ.Z, this.removeEndListeners = tZ.Z, this.removeAccessibleListeners = tZ.Z, this.startPointerPress = (t, e) => {
                                    if (this.removeEndListeners(), this.isPressing) return;
                                    let r = this.node.getProps(),
                                        n = tU(window, "pointerup", (t, e) => {
                                            if (!this.checkPressEnd()) return;
                                            let {
                                                onTap: r,
                                                onTapCancel: n
                                            } = this.node.getProps();
                                            tz.Wi.update(() => {
                                                tK(this.node.current, t.target) ? r && r(t, e) : n && n(t, e)
                                            })
                                        }, {
                                            passive: !(r.onTap || r.onPointerUp)
                                        }),
                                        i = tU(window, "pointercancel", (t, e) => this.cancelPress(t, e), {
                                            passive: !(r.onTapCancel || r.onPointerCancel)
                                        });
                                    this.removeEndListeners = tI(n, i), this.startPress(t, e)
                                }, this.startAccessiblePress = () => {
                                    let t = tM(this.node.current, "keydown", t => {
                                            "Enter" !== t.key || this.isPressing || (this.removeEndListeners(), this.removeEndListeners = tM(this.node.current, "keyup", t => {
                                                "Enter" === t.key && this.checkPressEnd() && tQ("up", (t, e) => {
                                                    let {
                                                        onTap: r
                                                    } = this.node.getProps();
                                                    r && tz.Wi.update(() => r(t, e))
                                                })
                                            }), tQ("down", (t, e) => {
                                                this.startPress(t, e)
                                            }))
                                        }),
                                        e = tM(this.node.current, "blur", () => {
                                            this.isPressing && tQ("cancel", (t, e) => this.cancelPress(t, e))
                                        });
                                    this.removeAccessibleListeners = tI(t, e)
                                }
                            }
                            startPress(t, e) {
                                this.isPressing = !0;
                                let {
                                    onTapStart: r,
                                    whileTap: n
                                } = this.node.getProps();
                                n && this.node.animationState && this.node.animationState.setActive("whileTap", !0), r && tz.Wi.update(() => r(t, e))
                            }
                            checkPressEnd() {
                                this.removeEndListeners(), this.isPressing = !1;
                                let t = this.node.getProps();
                                return t.whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !tW()
                            }
                            cancelPress(t, e) {
                                if (!this.checkPressEnd()) return;
                                let {
                                    onTapCancel: r
                                } = this.node.getProps();
                                r && tz.Wi.update(() => r(t, e))
                            }
                            mount() {
                                let t = this.node.getProps(),
                                    e = tU(this.node.current, "pointerdown", this.startPointerPress, {
                                        passive: !(t.onTapStart || t.onPointerStart)
                                    }),
                                    r = tM(this.node.current, "focus", this.startAccessiblePress);
                                this.removeStartListeners = tI(e, r)
                            }
                            unmount() {
                                this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
                            }
                        }
                    },
                    focus: {
                        Feature: class extends t$ {
                            constructor() {
                                super(...arguments), this.isActive = !1
                            }
                            onFocus() {
                                let t = !1;
                                try {
                                    t = this.node.current.matches(":focus-visible")
                                } catch (e) {
                                    t = !0
                                }
                                t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
                            }
                            onBlur() {
                                this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
                            }
                            mount() {
                                this.unmount = tI(tM(this.node.current, "focus", () => this.onFocus()), tM(this.node.current, "blur", () => this.onBlur()))
                            }
                            unmount() {}
                        }
                    },
                    hover: {
                        Feature: class extends t$ {
                            mount() {
                                this.unmount = tI(tH(this.node, !0), tH(this.node, !1))
                            }
                            unmount() {}
                        }
                    },
                    pan: {
                        Feature: class extends t$ {
                            constructor() {
                                super(...arguments), this.removePointerDownListener = tZ.Z
                            }
                            onPointerDown(t) {
                                this.session = new rF(t, this.createPanHandlers(), {
                                    transformPagePoint: this.node.getTransformPagePoint()
                                })
                            }
                            createPanHandlers() {
                                let {
                                    onPanSessionStart: t,
                                    onPanStart: e,
                                    onPan: r,
                                    onPanEnd: n
                                } = this.node.getProps();
                                return {
                                    onSessionStart: nh(t),
                                    onStart: nh(e),
                                    onMove: r,
                                    onEnd: (t, e) => {
                                        delete this.session, n && tz.Wi.update(() => n(t, e))
                                    }
                                }
                            }
                            mount() {
                                this.removePointerDownListener = tU(this.node.current, "pointerdown", t => this.onPointerDown(t))
                            }
                            update() {
                                this.session && this.session.updateHandlers(this.createPanHandlers())
                            }
                            unmount() {
                                this.removePointerDownListener(), this.session && this.session.end()
                            }
                        }
                    },
                    drag: {
                        Feature: class extends t$ {
                            constructor(t) {
                                super(t), this.removeGroupControls = tZ.Z, this.removeListeners = tZ.Z, this.controls = new nc(t)
                            }
                            mount() {
                                let {
                                    dragControls: t
                                } = this.node.getProps();
                                t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || tZ.Z
                            }
                            unmount() {
                                this.removeGroupControls(), this.removeListeners()
                            }
                        },
                        ProjectionNode: is,
                        MeasureLayout: nv
                    },
                    layout: {
                        ProjectionNode: is,
                        MeasureLayout: nv
                    }
                },
                i_ = function(t) {
                    function e(e, r = {}) {
                        return function({
                            preloadedFeatures: t,
                            createVisualElement: e,
                            useRender: r,
                            useVisualState: n,
                            Component: i
                        }) {
                            t && function(t) {
                                for (let e in t) x[e] = { ...x[e],
                                    ...t[e]
                                }
                            }(t);
                            let o = (0, s.forwardRef)(function(o, p) {
                                var m;
                                let y;
                                let g = { ...(0, s.useContext)(a),
                                        ...o,
                                        layoutId: function({
                                            layoutId: t
                                        }) {
                                            let e = (0, s.useContext)(S.p).id;
                                            return e && void 0 !== t ? e + "-" + t : t
                                        }(o)
                                    },
                                    {
                                        isStatic: w
                                    } = g,
                                    x = function(t) {
                                        let {
                                            initial: e,
                                            animate: r
                                        } = function(t, e) {
                                            if (v(t)) {
                                                let {
                                                    initial: e,
                                                    animate: r
                                                } = t;
                                                return {
                                                    initial: !1 === e || d(e) ? e : void 0,
                                                    animate: d(r) ? r : void 0
                                                }
                                            }
                                            return !1 !== t.inherit ? e : {}
                                        }(t, (0, s.useContext)(u));
                                        return (0, s.useMemo)(() => ({
                                            initial: e,
                                            animate: r
                                        }), [b(e), b(r)])
                                    }(o),
                                    O = n(o, w);
                                if (!w && E.j) {
                                    x.visualElement = function(t, e, r, n) {
                                        let {
                                            visualElement: i
                                        } = (0, s.useContext)(u), o = (0, s.useContext)(f), h = (0, s.useContext)(l.O), d = (0, s.useContext)(a).reducedMotion, p = (0, s.useRef)();
                                        n = n || o.renderer, !p.current && n && (p.current = n(t, {
                                            visualState: e,
                                            parent: i,
                                            props: r,
                                            presenceContext: h,
                                            blockInitialAnimation: !!h && !1 === h.initial,
                                            reducedMotionConfig: d
                                        }));
                                        let m = p.current;
                                        (0, s.useInsertionEffect)(() => {
                                            m && m.update(r, h)
                                        }), (0, c.L)(() => {
                                            m && m.render()
                                        }), (0, s.useEffect)(() => {
                                            m && m.updateFeatures()
                                        });
                                        let y = window.HandoffAppearAnimations ? c.L : s.useEffect;
                                        return y(() => {
                                            m && m.animationState && m.animationState.animateChanges()
                                        }), m
                                    }(i, O, g, e);
                                    let r = (0, s.useContext)(P),
                                        n = (0, s.useContext)(f).strict;
                                    x.visualElement && (y = x.visualElement.loadFeatures(g, n, t, r))
                                }
                                return s.createElement(u.Provider, {
                                    value: x
                                }, y && x.visualElement ? s.createElement(y, {
                                    visualElement: x.visualElement,
                                    ...g
                                }) : null, r(i, o, (m = x.visualElement, (0, s.useCallback)(t => {
                                    t && O.mount && O.mount(t), m && (t ? m.mount(t) : m.unmount()), p && ("function" == typeof p ? p(t) : h(p) && (p.current = t))
                                }, [m])), O, w, x.visualElement))
                            });
                            return o[O] = i, o
                        }(t(e, r))
                    }
                    if ("undefined" == typeof Proxy) return e;
                    let r = new Map;
                    return new Proxy(e, {
                        get: (t, n) => (r.has(n) || r.set(n, e(n)), r.get(n))
                    })
                }((t, e) => (function(t, {
                    forwardMotionProps: e = !1
                }, r, n) {
                    let i = C(t) ? tk : tL;
                    return { ...i,
                        preloadedFeatures: r,
                        useRender: function(t = !1) {
                            return (e, r, n, {
                                latestValues: i
                            }, o) => {
                                let a = C(e) ? ty : ts,
                                    u = a(r, i, o, e),
                                    l = function(t, e, r) {
                                        let n = {};
                                        for (let i in t)("values" !== i || "object" != typeof t.values) && (tl(i) || !0 === r && tu(i) || !e && !tu(i) || t.draggable && i.startsWith("onDrag")) && (n[i] = t[i]);
                                        return n
                                    }(r, "string" == typeof e, t),
                                    c = { ...l,
                                        ...u,
                                        ref: n
                                    },
                                    {
                                        children: f
                                    } = r,
                                    h = (0, s.useMemo)(() => M(f) ? f.get() : f, [f]);
                                return (0, s.createElement)(e, { ...c,
                                    children: h
                                })
                            }
                        }(e),
                        createVisualElement: n,
                        Component: t
                    }
                })(t, e, ij, iD))
        },
        6567: function(t, e, r) {
            "use strict";
            r.d(e, {
                K: function() {
                    return i
                },
                k: function() {
                    return o
                }
            });
            var n = r(6977);
            let i = n.Z,
                o = n.Z
        },
        6613: function(t, e, r) {
            "use strict";
            r.d(e, {
                j: function() {
                    return n
                }
            });
            let n = "undefined" != typeof document
        },
        6977: function(t, e, r) {
            "use strict";
            r.d(e, {
                Z: function() {
                    return n
                }
            });
            let n = t => t
        },
        961: function(t, e, r) {
            "use strict";
            r.d(e, {
                h: function() {
                    return i
                }
            });
            var n = r(2265);

            function i(t) {
                let e = (0, n.useRef)(null);
                return null === e.current && (e.current = t()), e.current
            }
        },
        538: function(t, e, r) {
            "use strict";
            r.d(e, {
                L: function() {
                    return o
                }
            });
            var n = r(2265),
                i = r(6613);
            let o = i.j ? n.useLayoutEffect : n.useEffect
        }
    }
]);