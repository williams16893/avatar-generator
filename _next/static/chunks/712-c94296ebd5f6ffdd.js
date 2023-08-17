"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [712], {
        5859: function(e, t, n) {
            n.d(t, {
                Ry: function() {
                    return l
                }
            });
            var r = new WeakMap,
                o = new WeakMap,
                a = {},
                u = 0,
                c = function(e) {
                    return e && (e.host || c(e.parentNode))
                },
                i = function(e, t, n, i) {
                    var l = (Array.isArray(e) ? e : [e]).map(function(e) {
                        if (t.contains(e)) return e;
                        var n = c(e);
                        return n && t.contains(n) ? n : (console.error("aria-hidden", e, "in not contained inside", t, ". Doing nothing"), null)
                    }).filter(function(e) {
                        return !!e
                    });
                    a[n] || (a[n] = new WeakMap);
                    var d = a[n],
                        s = [],
                        f = new Set,
                        p = new Set(l),
                        v = function(e) {
                            !e || f.has(e) || (f.add(e), v(e.parentNode))
                        };
                    l.forEach(v);
                    var m = function(e) {
                        !e || p.has(e) || Array.prototype.forEach.call(e.children, function(e) {
                            if (f.has(e)) m(e);
                            else {
                                var t = e.getAttribute(i),
                                    a = null !== t && "false" !== t,
                                    u = (r.get(e) || 0) + 1,
                                    c = (d.get(e) || 0) + 1;
                                r.set(e, u), d.set(e, c), s.push(e), 1 === u && a && o.set(e, !0), 1 === c && e.setAttribute(n, "true"), a || e.setAttribute(i, "true")
                            }
                        })
                    };
                    return m(t), f.clear(), u++,
                        function() {
                            s.forEach(function(e) {
                                var t = r.get(e) - 1,
                                    a = d.get(e) - 1;
                                r.set(e, t), d.set(e, a), t || (o.has(e) || e.removeAttribute(i), o.delete(e)), a || e.removeAttribute(n)
                            }), --u || (r = new WeakMap, r = new WeakMap, o = new WeakMap, a = {})
                        }
                },
                l = function(e, t, n) {
                    void 0 === n && (n = "data-aria-hidden");
                    var r = Array.from(Array.isArray(e) ? e : [e]),
                        o = t || ("undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
                    return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), i(r, o, n, "aria-hidden")) : function() {
                        return null
                    }
                }
        },
        7552: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return X
                }
            });
            var r, o, a, u, c, i, l = n(8648),
                d = n(2265),
                s = "right-scroll-bar-position",
                f = "width-before-scroll-bar",
                p = (void 0 === r && (r = {}), void 0 === o && (o = function(e) {
                    return e
                }), a = [], u = !1, (c = {
                    read: function() {
                        if (u) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                        return a.length ? a[a.length - 1] : null
                    },
                    useMedium: function(e) {
                        var t = o(e, u);
                        return a.push(t),
                            function() {
                                a = a.filter(function(e) {
                                    return e !== t
                                })
                            }
                    },
                    assignSyncMedium: function(e) {
                        for (u = !0; a.length;) {
                            var t = a;
                            a = [], t.forEach(e)
                        }
                        a = {
                            push: function(t) {
                                return e(t)
                            },
                            filter: function() {
                                return a
                            }
                        }
                    },
                    assignMedium: function(e) {
                        u = !0;
                        var t = [];
                        if (a.length) {
                            var n = a;
                            a = [], n.forEach(e), t = a
                        }
                        var r = function() {
                                var n = t;
                                t = [], n.forEach(e)
                            },
                            o = function() {
                                return Promise.resolve().then(r)
                            };
                        o(), a = {
                            push: function(e) {
                                t.push(e), o()
                            },
                            filter: function(e) {
                                return t = t.filter(e), a
                            }
                        }
                    }
                }).options = (0, l.pi)({
                    async: !0,
                    ssr: !1
                }, r), c),
                v = function() {},
                m = d.forwardRef(function(e, t) {
                    var n, r, o, a = d.useRef(null),
                        u = d.useState({
                            onScrollCapture: v,
                            onWheelCapture: v,
                            onTouchMoveCapture: v
                        }),
                        c = u[0],
                        i = u[1],
                        s = e.forwardProps,
                        f = e.children,
                        m = e.className,
                        h = e.removeScrollBar,
                        g = e.enabled,
                        E = e.shards,
                        y = e.sideCar,
                        b = e.noIsolation,
                        w = e.inert,
                        C = e.allowPinchZoom,
                        R = e.as,
                        M = void 0 === R ? "div" : R,
                        k = (0, l._T)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]),
                        S = (n = [a, t], r = function(e) {
                            return n.forEach(function(t) {
                                return "function" == typeof t ? t(e) : t && (t.current = e), t
                            })
                        }, (o = (0, d.useState)(function() {
                            return {
                                value: null,
                                callback: r,
                                facade: {
                                    get current() {
                                        return o.value
                                    },
                                    set current(value) {
                                        var e = o.value;
                                        e !== value && (o.value = value, o.callback(value, e))
                                    }
                                }
                            }
                        })[0]).callback = r, o.facade),
                        T = (0, l.pi)((0, l.pi)({}, k), c);
                    return d.createElement(d.Fragment, null, g && d.createElement(y, {
                        sideCar: p,
                        removeScrollBar: h,
                        shards: E,
                        noIsolation: b,
                        inert: w,
                        setCallbacks: i,
                        allowPinchZoom: !!C,
                        lockRef: a
                    }), s ? d.cloneElement(d.Children.only(f), (0, l.pi)((0, l.pi)({}, T), {
                        ref: S
                    })) : d.createElement(M, (0, l.pi)({}, T, {
                        className: m,
                        ref: S
                    }), f))
                });
            m.defaultProps = {
                enabled: !0,
                removeScrollBar: !0,
                inert: !1
            }, m.classNames = {
                fullWidth: f,
                zeroRight: s
            };
            var h = function(e) {
                var t = e.sideCar,
                    n = (0, l._T)(e, ["sideCar"]);
                if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
                var r = t.read();
                if (!r) throw Error("Sidecar medium not found");
                return d.createElement(r, (0, l.pi)({}, n))
            };
            h.isSideCarExport = !0;
            var g = function() {
                    var e = 0,
                        t = null;
                    return {
                        add: function(r) {
                            if (0 == e && (t = function() {
                                    if (!document) return null;
                                    var e = document.createElement("style");
                                    e.type = "text/css";
                                    var t = i || n.nc;
                                    return t && e.setAttribute("nonce", t), e
                                }())) {
                                var o, a;
                                (o = t).styleSheet ? o.styleSheet.cssText = r : o.appendChild(document.createTextNode(r)), a = t, (document.head || document.getElementsByTagName("head")[0]).appendChild(a)
                            }
                            e++
                        },
                        remove: function() {
                            --e || !t || (t.parentNode && t.parentNode.removeChild(t), t = null)
                        }
                    }
                },
                E = function() {
                    var e = g();
                    return function(t, n) {
                        d.useEffect(function() {
                            return e.add(t),
                                function() {
                                    e.remove()
                                }
                        }, [t && n])
                    }
                },
                y = function() {
                    var e = E();
                    return function(t) {
                        return e(t.styles, t.dynamic), null
                    }
                },
                b = {
                    left: 0,
                    top: 0,
                    right: 0,
                    gap: 0
                },
                w = function(e) {
                    return parseInt(e || "", 10) || 0
                },
                C = function(e) {
                    var t = window.getComputedStyle(document.body),
                        n = t["padding" === e ? "paddingLeft" : "marginLeft"],
                        r = t["padding" === e ? "paddingTop" : "marginTop"],
                        o = t["padding" === e ? "paddingRight" : "marginRight"];
                    return [w(n), w(r), w(o)]
                },
                R = function(e) {
                    if (void 0 === e && (e = "margin"), "undefined" == typeof window) return b;
                    var t = C(e),
                        n = document.documentElement.clientWidth,
                        r = window.innerWidth;
                    return {
                        left: t[0],
                        top: t[1],
                        right: t[2],
                        gap: Math.max(0, r - n + t[2] - t[0])
                    }
                },
                M = y(),
                k = function(e, t, n, r) {
                    var o = e.left,
                        a = e.top,
                        u = e.right,
                        c = e.gap;
                    return void 0 === n && (n = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(c, "px ").concat(r, ";\n  }\n  body {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(r, ";"), "margin" === n && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(a, "px;\n    padding-right: ").concat(u, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(c, "px ").concat(r, ";\n    "), "padding" === n && "padding-right: ".concat(c, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(s, " {\n    right: ").concat(c, "px ").concat(r, ";\n  }\n  \n  .").concat(f, " {\n    margin-right: ").concat(c, "px ").concat(r, ";\n  }\n  \n  .").concat(s, " .").concat(s, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(f, " .").concat(f, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(c, "px;\n  }\n")
                },
                S = function(e) {
                    var t = e.noRelative,
                        n = e.noImportant,
                        r = e.gapMode,
                        o = void 0 === r ? "margin" : r,
                        a = d.useMemo(function() {
                            return R(o)
                        }, [o]);
                    return d.createElement(M, {
                        styles: k(a, !t, o, n ? "" : "!important")
                    })
                },
                T = !1;
            if ("undefined" != typeof window) try {
                var D = Object.defineProperty({}, "passive", {
                    get: function() {
                        return T = !0, !0
                    }
                });
                window.addEventListener("test", D, D), window.removeEventListener("test", D, D)
            } catch (e) {
                T = !1
            }
            var A = !!T && {
                    passive: !1
                },
                _ = function(e, t) {
                    var n = window.getComputedStyle(e);
                    return "hidden" !== n[t] && !(n.overflowY === n.overflowX && "TEXTAREA" !== e.tagName && "visible" === n[t])
                },
                N = function(e, t) {
                    var n = t;
                    do {
                        if ("undefined" != typeof ShadowRoot && n instanceof ShadowRoot && (n = n.host), L(e, n)) {
                            var r = x(e, n);
                            if (r[1] > r[2]) return !0
                        }
                        n = n.parentNode
                    } while (n && n !== document.body);
                    return !1
                },
                L = function(e, t) {
                    return "v" === e ? _(t, "overflowY") : _(t, "overflowX")
                },
                x = function(e, t) {
                    return "v" === e ? [t.scrollTop, t.scrollHeight, t.clientHeight] : [t.scrollLeft, t.scrollWidth, t.clientWidth]
                },
                F = function(e, t, n, r, o) {
                    var a, u = (a = window.getComputedStyle(t).direction, "h" === e && "rtl" === a ? -1 : 1),
                        c = u * r,
                        i = n.target,
                        l = t.contains(i),
                        d = !1,
                        s = c > 0,
                        f = 0,
                        p = 0;
                    do {
                        var v = x(e, i),
                            m = v[0],
                            h = v[1] - v[2] - u * m;
                        (m || h) && L(e, i) && (f += h, p += m), i = i.parentNode
                    } while (!l && i !== document.body || l && (t.contains(i) || t === i));
                    return s && (o && 0 === f || !o && c > f) ? d = !0 : !s && (o && 0 === p || !o && -c > p) && (d = !0), d
                },
                I = function(e) {
                    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
                },
                P = function(e) {
                    return [e.deltaX, e.deltaY]
                },
                W = function(e) {
                    return e && "current" in e ? e.current : e
                },
                O = 0,
                Z = [],
                B = (p.useMedium(function(e) {
                    var t = d.useRef([]),
                        n = d.useRef([0, 0]),
                        r = d.useRef(),
                        o = d.useState(O++)[0],
                        a = d.useState(function() {
                            return y()
                        })[0],
                        u = d.useRef(e);
                    d.useEffect(function() {
                        u.current = e
                    }, [e]), d.useEffect(function() {
                        if (e.inert) {
                            document.body.classList.add("block-interactivity-".concat(o));
                            var t = (0, l.ev)([e.lockRef.current], (e.shards || []).map(W), !0).filter(Boolean);
                            return t.forEach(function(e) {
                                    return e.classList.add("allow-interactivity-".concat(o))
                                }),
                                function() {
                                    document.body.classList.remove("block-interactivity-".concat(o)), t.forEach(function(e) {
                                        return e.classList.remove("allow-interactivity-".concat(o))
                                    })
                                }
                        }
                    }, [e.inert, e.lockRef.current, e.shards]);
                    var c = d.useCallback(function(e, t) {
                            if ("touches" in e && 2 === e.touches.length) return !u.current.allowPinchZoom;
                            var o, a = I(e),
                                c = n.current,
                                i = "deltaX" in e ? e.deltaX : c[0] - a[0],
                                l = "deltaY" in e ? e.deltaY : c[1] - a[1],
                                d = e.target,
                                s = Math.abs(i) > Math.abs(l) ? "h" : "v";
                            if ("touches" in e && "h" === s && "range" === d.type) return !1;
                            var f = N(s, d);
                            if (!f) return !0;
                            if (f ? o = s : (o = "v" === s ? "h" : "v", f = N(s, d)), !f) return !1;
                            if (!r.current && "changedTouches" in e && (i || l) && (r.current = o), !o) return !0;
                            var p = r.current || o;
                            return F(p, t, e, "h" === p ? i : l, !0)
                        }, []),
                        i = d.useCallback(function(e) {
                            if (Z.length && Z[Z.length - 1] === a) {
                                var n = "deltaY" in e ? P(e) : I(e),
                                    r = t.current.filter(function(t) {
                                        var r;
                                        return t.name === e.type && t.target === e.target && (r = t.delta)[0] === n[0] && r[1] === n[1]
                                    })[0];
                                if (r && r.should) {
                                    e.cancelable && e.preventDefault();
                                    return
                                }
                                if (!r) {
                                    var o = (u.current.shards || []).map(W).filter(Boolean).filter(function(t) {
                                        return t.contains(e.target)
                                    });
                                    (o.length > 0 ? c(e, o[0]) : !u.current.noIsolation) && e.cancelable && e.preventDefault()
                                }
                            }
                        }, []),
                        s = d.useCallback(function(e, n, r, o) {
                            var a = {
                                name: e,
                                delta: n,
                                target: r,
                                should: o
                            };
                            t.current.push(a), setTimeout(function() {
                                t.current = t.current.filter(function(e) {
                                    return e !== a
                                })
                            }, 1)
                        }, []),
                        f = d.useCallback(function(e) {
                            n.current = I(e), r.current = void 0
                        }, []),
                        p = d.useCallback(function(t) {
                            s(t.type, P(t), t.target, c(t, e.lockRef.current))
                        }, []),
                        v = d.useCallback(function(t) {
                            s(t.type, I(t), t.target, c(t, e.lockRef.current))
                        }, []);
                    d.useEffect(function() {
                        return Z.push(a), e.setCallbacks({
                                onScrollCapture: p,
                                onWheelCapture: p,
                                onTouchMoveCapture: v
                            }), document.addEventListener("wheel", i, A), document.addEventListener("touchmove", i, A), document.addEventListener("touchstart", f, A),
                            function() {
                                Z = Z.filter(function(e) {
                                    return e !== a
                                }), document.removeEventListener("wheel", i, A), document.removeEventListener("touchmove", i, A), document.removeEventListener("touchstart", f, A)
                            }
                    }, []);
                    var m = e.removeScrollBar,
                        h = e.inert;
                    return d.createElement(d.Fragment, null, h ? d.createElement(a, {
                        styles: "\n  .block-interactivity-".concat(o, " {pointer-events: none;}\n  .allow-interactivity-").concat(o, " {pointer-events: all;}\n")
                    }) : null, m ? d.createElement(S, {
                        gapMode: "margin"
                    }) : null)
                }), h),
                K = d.forwardRef(function(e, t) {
                    return d.createElement(m, (0, l.pi)({}, e, {
                        ref: t,
                        sideCar: B
                    }))
                });
            K.classNames = m.classNames;
            var X = K
        },
        8712: function(e, t, n) {
            n.d(t, {
                VY: function() {
                    return z
                },
                aV: function() {
                    return Y
                },
                fC: function() {
                    return B
                },
                h_: function() {
                    return X
                },
                x8: function() {
                    return V
                },
                xz: function() {
                    return K
                }
            });
            var r = n(3428),
                o = n(2265),
                a = n(5744),
                u = n(2210),
                c = n(6989),
                i = n(966),
                l = n(3763),
                d = n(9249),
                s = n(2759),
                f = n(2730),
                p = n(5606),
                v = n(9381),
                m = n(1244),
                h = n(7552),
                g = n(5859),
                E = n(7256);
            let y = "Dialog",
                [b, w] = (0, c.b)(y),
                [C, R] = b(y),
                M = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...c
                    } = e, i = R("DialogTrigger", n), l = (0, u.e)(t, i.triggerRef);
                    return (0, o.createElement)(v.WV.button, (0, r.Z)({
                        type: "button",
                        "aria-haspopup": "dialog",
                        "aria-expanded": i.open,
                        "aria-controls": i.contentId,
                        "data-state": W(i.open)
                    }, c, {
                        ref: l,
                        onClick: (0, a.M)(e.onClick, i.onOpenToggle)
                    }))
                }),
                k = "DialogPortal",
                [S, T] = b(k, {
                    forceMount: void 0
                }),
                D = "DialogOverlay",
                A = (0, o.forwardRef)((e, t) => {
                    let n = T(D, e.__scopeDialog),
                        {
                            forceMount: a = n.forceMount,
                            ...u
                        } = e,
                        c = R(D, e.__scopeDialog);
                    return c.modal ? (0, o.createElement)(p.z, {
                        present: a || c.open
                    }, (0, o.createElement)(_, (0, r.Z)({}, u, {
                        ref: t
                    }))) : null
                }),
                _ = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...a
                    } = e, u = R(D, n);
                    return (0, o.createElement)(h.Z, {
                        as: E.g7,
                        allowPinchZoom: !0,
                        shards: [u.contentRef]
                    }, (0, o.createElement)(v.WV.div, (0, r.Z)({
                        "data-state": W(u.open)
                    }, a, {
                        ref: t,
                        style: {
                            pointerEvents: "auto",
                            ...a.style
                        }
                    })))
                }),
                N = "DialogContent",
                L = (0, o.forwardRef)((e, t) => {
                    let n = T(N, e.__scopeDialog),
                        {
                            forceMount: a = n.forceMount,
                            ...u
                        } = e,
                        c = R(N, e.__scopeDialog);
                    return (0, o.createElement)(p.z, {
                        present: a || c.open
                    }, c.modal ? (0, o.createElement)(x, (0, r.Z)({}, u, {
                        ref: t
                    })) : (0, o.createElement)(F, (0, r.Z)({}, u, {
                        ref: t
                    })))
                }),
                x = (0, o.forwardRef)((e, t) => {
                    let n = R(N, e.__scopeDialog),
                        c = (0, o.useRef)(null),
                        i = (0, u.e)(t, n.contentRef, c);
                    return (0, o.useEffect)(() => {
                        let e = c.current;
                        if (e) return (0, g.Ry)(e)
                    }, []), (0, o.createElement)(I, (0, r.Z)({}, e, {
                        ref: i,
                        trapFocus: n.open,
                        disableOutsidePointerEvents: !0,
                        onCloseAutoFocus: (0, a.M)(e.onCloseAutoFocus, e => {
                            var t;
                            e.preventDefault(), null === (t = n.triggerRef.current) || void 0 === t || t.focus()
                        }),
                        onPointerDownOutside: (0, a.M)(e.onPointerDownOutside, e => {
                            let t = e.detail.originalEvent,
                                n = 0 === t.button && !0 === t.ctrlKey,
                                r = 2 === t.button || n;
                            r && e.preventDefault()
                        }),
                        onFocusOutside: (0, a.M)(e.onFocusOutside, e => e.preventDefault())
                    }))
                }),
                F = (0, o.forwardRef)((e, t) => {
                    let n = R(N, e.__scopeDialog),
                        a = (0, o.useRef)(!1),
                        u = (0, o.useRef)(!1);
                    return (0, o.createElement)(I, (0, r.Z)({}, e, {
                        ref: t,
                        trapFocus: !1,
                        disableOutsidePointerEvents: !1,
                        onCloseAutoFocus: t => {
                            var r, o;
                            null === (r = e.onCloseAutoFocus) || void 0 === r || r.call(e, t), t.defaultPrevented || (a.current || null === (o = n.triggerRef.current) || void 0 === o || o.focus(), t.preventDefault()), a.current = !1, u.current = !1
                        },
                        onInteractOutside: t => {
                            var r, o;
                            null === (r = e.onInteractOutside) || void 0 === r || r.call(e, t), t.defaultPrevented || (a.current = !0, "pointerdown" !== t.detail.originalEvent.type || (u.current = !0));
                            let c = t.target,
                                i = null === (o = n.triggerRef.current) || void 0 === o ? void 0 : o.contains(c);
                            i && t.preventDefault(), "focusin" === t.detail.originalEvent.type && u.current && t.preventDefault()
                        }
                    }))
                }),
                I = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeDialog: n,
                        trapFocus: a,
                        onOpenAutoFocus: c,
                        onCloseAutoFocus: i,
                        ...l
                    } = e, f = R(N, n), p = (0, o.useRef)(null), v = (0, u.e)(t, p);
                    return (0, m.EW)(), (0, o.createElement)(o.Fragment, null, (0, o.createElement)(s.M, {
                        asChild: !0,
                        loop: !0,
                        trapped: a,
                        onMountAutoFocus: c,
                        onUnmountAutoFocus: i
                    }, (0, o.createElement)(d.XB, (0, r.Z)({
                        role: "dialog",
                        id: f.contentId,
                        "aria-describedby": f.descriptionId,
                        "aria-labelledby": f.titleId,
                        "data-state": W(f.open)
                    }, l, {
                        ref: v,
                        onDismiss: () => f.onOpenChange(!1)
                    }))), !1)
                }),
                P = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...u
                    } = e, c = R("DialogClose", n);
                    return (0, o.createElement)(v.WV.button, (0, r.Z)({
                        type: "button"
                    }, u, {
                        ref: t,
                        onClick: (0, a.M)(e.onClick, () => c.onOpenChange(!1))
                    }))
                });

            function W(e) {
                return e ? "open" : "closed"
            }
            let [O, Z] = (0, c.k)("DialogTitleWarning", {
                contentName: N,
                titleName: "DialogTitle",
                docsSlug: "dialog"
            }), B = e => {
                let {
                    __scopeDialog: t,
                    children: n,
                    open: r,
                    defaultOpen: a,
                    onOpenChange: u,
                    modal: c = !0
                } = e, d = (0, o.useRef)(null), s = (0, o.useRef)(null), [f = !1, p] = (0, l.T)({
                    prop: r,
                    defaultProp: a,
                    onChange: u
                });
                return (0, o.createElement)(C, {
                    scope: t,
                    triggerRef: d,
                    contentRef: s,
                    contentId: (0, i.M)(),
                    titleId: (0, i.M)(),
                    descriptionId: (0, i.M)(),
                    open: f,
                    onOpenChange: p,
                    onOpenToggle: (0, o.useCallback)(() => p(e => !e), [p]),
                    modal: c
                }, n)
            }, K = M, X = e => {
                let {
                    __scopeDialog: t,
                    forceMount: n,
                    children: r,
                    container: a
                } = e, u = R(k, t);
                return (0, o.createElement)(S, {
                    scope: t,
                    forceMount: n
                }, o.Children.map(r, e => (0, o.createElement)(p.z, {
                    present: n || u.open
                }, (0, o.createElement)(f.h, {
                    asChild: !0,
                    container: a
                }, e))))
            }, Y = A, z = L, V = P
        },
        1244: function(e, t, n) {
            n.d(t, {
                EW: function() {
                    return a
                }
            });
            var r = n(2265);
            let o = 0;

            function a() {
                (0, r.useEffect)(() => {
                    var e, t;
                    let n = document.querySelectorAll("[data-radix-focus-guard]");
                    return document.body.insertAdjacentElement("afterbegin", null !== (e = n[0]) && void 0 !== e ? e : u()), document.body.insertAdjacentElement("beforeend", null !== (t = n[1]) && void 0 !== t ? t : u()), o++, () => {
                        1 === o && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), o--
                    }
                }, [])
            }

            function u() {
                let e = document.createElement("span");
                return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e
            }
        },
        2759: function(e, t, n) {
            let r;
            n.d(t, {
                M: function() {
                    return f
                }
            });
            var o = n(3428),
                a = n(2265),
                u = n(2210),
                c = n(9381),
                i = n(6459);
            let l = "focusScope.autoFocusOnMount",
                d = "focusScope.autoFocusOnUnmount",
                s = {
                    bubbles: !1,
                    cancelable: !0
                },
                f = (0, a.forwardRef)((e, t) => {
                    let {
                        loop: n = !1,
                        trapped: r = !1,
                        onMountAutoFocus: f,
                        onUnmountAutoFocus: g,
                        ...E
                    } = e, [y, b] = (0, a.useState)(null), w = (0, i.W)(f), C = (0, i.W)(g), R = (0, a.useRef)(null), M = (0, u.e)(t, e => b(e)), k = (0, a.useRef)({
                        paused: !1,
                        pause() {
                            this.paused = !0
                        },
                        resume() {
                            this.paused = !1
                        }
                    }).current;
                    (0, a.useEffect)(() => {
                        if (r) {
                            function e(e) {
                                if (k.paused || !y) return;
                                let t = e.target;
                                y.contains(t) ? R.current = t : m(R.current, {
                                    select: !0
                                })
                            }

                            function t(e) {
                                if (k.paused || !y) return;
                                let t = e.relatedTarget;
                                null === t || y.contains(t) || m(R.current, {
                                    select: !0
                                })
                            }
                            document.addEventListener("focusin", e), document.addEventListener("focusout", t);
                            let n = new MutationObserver(function(e) {
                                let t = document.activeElement;
                                for (let n of e) n.removedNodes.length > 0 && !(null != y && y.contains(t)) && m(y)
                            });
                            return y && n.observe(y, {
                                childList: !0,
                                subtree: !0
                            }), () => {
                                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), n.disconnect()
                            }
                        }
                    }, [r, y, k.paused]), (0, a.useEffect)(() => {
                        if (y) {
                            h.add(k);
                            let e = document.activeElement,
                                t = y.contains(e);
                            if (!t) {
                                let t = new CustomEvent(l, s);
                                y.addEventListener(l, w), y.dispatchEvent(t), t.defaultPrevented || (function(e, {
                                    select: t = !1
                                } = {}) {
                                    let n = document.activeElement;
                                    for (let r of e)
                                        if (m(r, {
                                                select: t
                                            }), document.activeElement !== n) return
                                }(p(y).filter(e => "A" !== e.tagName), {
                                    select: !0
                                }), document.activeElement === e && m(y))
                            }
                            return () => {
                                y.removeEventListener(l, w), setTimeout(() => {
                                    let t = new CustomEvent(d, s);
                                    y.addEventListener(d, C), y.dispatchEvent(t), t.defaultPrevented || m(null != e ? e : document.body, {
                                        select: !0
                                    }), y.removeEventListener(d, C), h.remove(k)
                                }, 0)
                            }
                        }
                    }, [y, w, C, k]);
                    let S = (0, a.useCallback)(e => {
                        if (!n && !r || k.paused) return;
                        let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                            o = document.activeElement;
                        if (t && o) {
                            let t = e.currentTarget,
                                [r, a] = function(e) {
                                    let t = p(e),
                                        n = v(t, e),
                                        r = v(t.reverse(), e);
                                    return [n, r]
                                }(t),
                                u = r && a;
                            u ? e.shiftKey || o !== a ? e.shiftKey && o === r && (e.preventDefault(), n && m(a, {
                                select: !0
                            })) : (e.preventDefault(), n && m(r, {
                                select: !0
                            })) : o === t && e.preventDefault()
                        }
                    }, [n, r, k.paused]);
                    return (0, a.createElement)(c.WV.div, (0, o.Z)({
                        tabIndex: -1
                    }, E, {
                        ref: M,
                        onKeyDown: S
                    }))
                });

            function p(e) {
                let t = [],
                    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                        acceptNode: e => {
                            let t = "INPUT" === e.tagName && "hidden" === e.type;
                            return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                        }
                    });
                for (; n.nextNode();) t.push(n.currentNode);
                return t
            }

            function v(e, t) {
                for (let n of e)
                    if (! function(e, {
                            upTo: t
                        }) {
                            if ("hidden" === getComputedStyle(e).visibility) return !0;
                            for (; e && (void 0 === t || e !== t);) {
                                if ("none" === getComputedStyle(e).display) return !0;
                                e = e.parentElement
                            }
                            return !1
                        }(n, {
                            upTo: t
                        })) return n
            }

            function m(e, {
                select: t = !1
            } = {}) {
                if (e && e.focus) {
                    var n;
                    let r = document.activeElement;
                    e.focus({
                        preventScroll: !0
                    }), e !== r && (n = e) instanceof HTMLInputElement && "select" in n && t && e.select()
                }
            }
            let h = (r = [], {
                add(e) {
                    let t = r[0];
                    e !== t && (null == t || t.pause()), (r = g(r, e)).unshift(e)
                },
                remove(e) {
                    var t;
                    null === (t = (r = g(r, e))[0]) || void 0 === t || t.resume()
                }
            });

            function g(e, t) {
                let n = [...e],
                    r = n.indexOf(t);
                return -1 !== r && n.splice(r, 1), n
            }
        }
    }
]);