"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [367], {
        7904: function(e, t, n) {
            n.r(t), n.d(t, {
                Providers: function() {
                    return C
                },
                useApertureState: function() {
                    return j
                },
                useLoginMenuContext: function() {
                    return b
                },
                useNumColumns: function() {
                    return y
                }
            });
            var r = n(7437),
                i = n(8567),
                s = n(2749),
                o = n(2265),
                l = n(4033),
                a = n(1e3),
                u = n(9222),
                d = n(938),
                c = n(165),
                h = n(8285),
                m = n(4719),
                x = n(2418);
            let f = {
                    prompt: "",
                    promptId: null,
                    negativePrompt: "",
                    guidanceScale: 7,
                    enableHiresFix: !1,
                    enableCelebFix: !1,
                    dimensionsIndex: 4,
                    model: "lexica-aperture-v3",
                    imageRows: [],
                    showSafetyWarning: null,
                    hasFlaggedPrompt: !1,
                    showAdvancedSettings: !1,
                    pendingGenerations: [],
                    bannedTerms: [],
                    progressBarInView: !1,
                    showUpgradeMessage: !1,
                    showMembershipMessage: !1,
                    showMaxParallelMessage: !1,
                    showRequestErrorMessage: !1,
                    sourceAction: "variation",
                    sources: [],
                    setState: () => {}
                },
                g = o.createContext(f),
                p = new d.S,
                v = o.createContext(void 0),
                w = o.createContext({
                    numColumns: null,
                    setNumColumns: () => ({})
                }),
                b = () => {
                    let e = (0, o.useContext)(v);
                    if (void 0 === e) throw Error("useLoginMenuContext must be used within LoginMenuContext.Provider");
                    return e
                },
                j = () => {
                    let e = (0, o.useContext)(g);
                    if (void 0 === e) throw Error("useApertureState must be used within ApertureContext.Provider");
                    return e
                },
                y = () => {
                    let e = (0, o.useContext)(w);
                    if (void 0 === e) throw Error("useNumColumns must be used within NumColumnsContext.Provider");
                    return e
                },
                N = e => {
                    let {
                        children: t
                    } = e, [n, i] = (0, o.useState)(f), l = (0, o.useCallback)((e, t) => {
                        i(n => {
                            let r = n.dimensionsIndex;
                            if ("model" === e && "lexica-aperture-v3" === t && "lexica-aperture-v3" !== n.model) {
                                let e = x.Ru.length - 1,
                                    t = x.n7.length - 1,
                                    i = n.dimensionsIndex / t;
                                r = Math.max(0, Math.min(Math.round(i * e), e))
                            } else if ("model" === e && "lexica-aperture-v3" !== t && "lexica-aperture-v3" === n.model) {
                                let e = x.Ru.length - 1,
                                    t = x.n7.length - 1,
                                    i = n.dimensionsIndex / e;
                                r = Math.max(0, Math.min(Math.round(i * t), t))
                            }
                            if ("function" != typeof t) return { ...n,
                                dimensionsIndex: r,
                                [e]: t
                            }; {
                                let i = n[e];
                                return { ...n,
                                    dimensionsIndex: r,
                                    [e]: t(i)
                                }
                            }
                        })
                    }, []);
                    return function(e, t) {
                        let {
                            status: n
                        } = (0, s.useSession)(), {
                            pendingGenerations: r,
                            imageRows: i
                        } = e, {
                            data: l
                        } = (0, h.a)(["pending-generations"], {
                            queryFn: () => (0, u.Z)("/api/generations/pending").then(e => e.data),
                            refetchOnWindowFocus: !1,
                            enabled: "authenticated" === n
                        });
                        l = (0, o.useMemo)(() => {
                            var e;
                            if ((null === (e = l) || void 0 === e ? void 0 : e.length) && i) return l.filter(e => -1 === i.findIndex(t => t.prompt.id === e.promptid))
                        }, [l, i]), (0, o.useEffect)(() => {
                            var e;
                            (null === (e = l) || void 0 === e ? void 0 : e.length) && t("pendingGenerations", e => {
                                let t = l.filter(t => -1 === e.findIndex(e => e.requestId === t.requestId)).map(e => ({ ...e,
                                    poll: !0
                                }));
                                return [...e, ...t]
                            })
                        }, [l, t]);
                        let a = r.filter(e => e.poll),
                            d = a.map(e => e.requestId),
                            {
                                data: c
                            } = (0, h.a)(["generations-poll", d], {
                                queryFn: () => (console.log("Polling for:", d), u.Z.get("/api/generations/poll?requestIds=".concat(d.join(","))).then(e => e.data)),
                                refetchInterval: 3e3,
                                refetchIntervalInBackground: !0,
                                enabled: d.length > 0
                            });
                        (0, o.useEffect)(() => {
                            if (c) {
                                if (console.log("Poll response", c), c.didComplete.length) {
                                    t("pendingGenerations", e => e.filter(e => -1 === c.didComplete.findIndex(t => t.requestId === e.requestId)));
                                    let n = c.completedData.filter(e => e.images.length > 0),
                                        r = c.completedData.filter(e => 0 === e.images.length);
                                    if (r.length) {
                                        var e;
                                        t("showSafetyWarning", (null === (e = r[0].prompt) || void 0 === e ? void 0 : e.prompt) || "");
                                        return
                                    }
                                    n.length && t("imageRows", e => [...n, ...e])
                                }
                                c.didError.length && (t("showRequestErrorMessage", !0), t("pendingGenerations", e => e.filter(e => -1 === c.didError.findIndex(t => t.requestId === e.requestId))))
                            }
                        }, [c, t])
                    }(n, l), (0, r.jsx)(g.Provider, {
                        value: { ...n,
                            setState: l
                        },
                        children: t
                    })
                },
                C = e => {
                    let {
                        children: t
                    } = e, n = (0, l.useRouter)(), u = (0, l.usePathname)(), d = (0, o.useCallback)(e => {
                        let t = e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement;
                        t || ("h" === e.key && "/" !== u ? (console.log("Home"), e.preventDefault(), n.push("/")) : "g" === e.key && "/aperture" !== u && (console.log("Aperture"), e.preventDefault(), n.push("/aperture")))
                    }, [u, n]);
                    (0, o.useEffect)(() => (window.addEventListener("keydown", d), () => {
                        window.removeEventListener("keydown", d)
                    }), [d]);
                    let [h, x] = (0, o.useState)(!1), [f, g] = (0, o.useState)(), [b, j] = (0, o.useState)(!1), [y, C] = (0, o.useState)(null);
                    return (0, r.jsx)("div", {
                        children: (0, r.jsx)(a.vQ, {
                            loadOptions: {
                                apiKey: "AggytNrYd94cDCAtxRNV",
                                scriptUrlPattern: "https://lexica.art/1N9W2boF0qeVPfbR/pfBLwEG93xorirf8?apiKey=<apiKey>&version=<version>&loaderVersion=<loaderVersion>",
                                endpoint: "https://lexica.art/1N9W2boF0qeVPfbR/Wmz9wKZDIDE8qYCh"
                            },
                            cacheTimeInSeconds: 86400,
                            cacheLocation: a.Xd.LocalStorage,
                            children: (0, r.jsx)(i.pn, {
                                children: (0, r.jsx)(s.SessionProvider, {
                                    refetchOnWindowFocus: !1,
                                    children: (0, r.jsx)(c.aH, {
                                        client: p,
                                        children: (0, r.jsx)(v.Provider, {
                                            value: {
                                                loginMenuOpen: h,
                                                setLoginMenuOpen: x,
                                                loginMenuCallback: f,
                                                setLoginMenuCallback: g,
                                                loginMenuRequired: b,
                                                setLoginMenuRequired: j
                                            },
                                            children: (0, r.jsx)(N, {
                                                children: (0, r.jsx)(w.Provider, {
                                                    value: {
                                                        numColumns: y,
                                                        setNumColumns: C
                                                    },
                                                    children: (0, r.jsx)(m.nP, {
                                                        children: t
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                }
        },
        2418: function(e, t, n) {
            n.d(t, {
                Ov: function() {
                    return g
                },
                Ru: function() {
                    return f
                },
                ll: function() {
                    return m
                },
                n7: function() {
                    return x
                }
            });
            var r = n(7437),
                i = n(8692),
                s = n(6072),
                o = n(7042),
                l = n(2167),
                a = n(7870),
                u = n(2265),
                d = n(523),
                c = n(11),
                h = n(9699);
            let m = u.memo(function(e) {
                    let {
                        min: t,
                        max: n,
                        value: i,
                        onChange: o,
                        label: l,
                        step: a = 1,
                        className: d,
                        postfix: c = "",
                        leftLabel: h = "",
                        rightLabel: m = "",
                        icon: x
                    } = e, [f, g] = (0, u.useState)(String(i)), [p, v] = (0, u.useState)(!1);
                    return (0, u.useEffect)(() => {
                        g(String(i))
                    }, [i]), (0, r.jsxs)("div", {
                        className: d,
                        children: [l && (0, r.jsxs)("div", {
                            className: "flex items-center justify-between text-sm",
                            children: [(0, r.jsxs)("p", {
                                className: "select-none opacity-40 text-xs flex items-center justify-center",
                                children: [x, l]
                            }), !p && (0, r.jsxs)("button", {
                                onClick: () => v(!0),
                                className: "w-20 py-2 hover:ring-1 select-none hover:ring-zinc-700 cursor-text rounded flex justify-end pr-0.5 -mr-1",
                                children: [i, "\xa0", c]
                            }), p && (0, r.jsx)("input", {
                                min: t,
                                max: n,
                                step: a,
                                onBlur: e => {
                                    let r = parseInt(e.currentTarget.value);
                                    isNaN(r) && (r = i);
                                    let s = Math.round(r / a) * a,
                                        l = Math.min(Math.max(s, t), n);
                                    o(l), g(String(l)), v(!1)
                                },
                                onFocus: e => {
                                    e.target.select()
                                },
                                onKeyDown: e => {
                                    if ("Enter" === e.key || "Escape" === e.key) {
                                        e.currentTarget.blur();
                                        return
                                    }
                                    if ("ArrowUp" === e.key) {
                                        let r = parseInt(e.currentTarget.value);
                                        isNaN(r) && (r = i);
                                        let s = Math.ceil(r / a) * a;
                                        s === r && (s += a);
                                        let l = Math.min(Math.max(s, t), n);
                                        g(String(l)), o(l), e.preventDefault();
                                        return
                                    }
                                    if ("ArrowDown" === e.key) {
                                        let r = parseInt(e.currentTarget.value);
                                        isNaN(r) && (r = i);
                                        let s = Math.floor(r / a) * a;
                                        s === r && (s -= a);
                                        let l = Math.min(Math.max(s, t), n);
                                        g(String(l)), o(l), e.preventDefault();
                                        return
                                    }
                                },
                                autoFocus: !0,
                                className: "w-20 bg-transparent px-2 focus:outline-none hover:bg-zinc-700 focus:bg-zinc-700 focus:ring-1 ring-zinc-600 py-2 rounded flex -mr-1",
                                type: "number",
                                value: f,
                                onChange: e => {
                                    g(e.target.value)
                                }
                            })]
                        }), (0, r.jsxs)(s.fC, {
                            min: t,
                            max: n,
                            step: a,
                            "aria-label": l,
                            value: [i],
                            onValueChange: e => o(e[0]),
                            className: "w-full relative flex items-center select-none touch-none h-5 cursor-pointer",
                            children: [(0, r.jsx)(s.fQ, {
                                className: "w-full h-0.5 bg-black rounded-full relative",
                                children: (0, r.jsx)(s.e6, {
                                    className: "absolute bg-indigo-600 rounded-full h-full"
                                })
                            }), (0, r.jsx)(s.bU, {
                                className: "block w-4 h-4 bg-white shadow-md rounded-full focus:ring-8 hover:ring-4 hover:ring-indigo-500 focus:ring-indigo-500 hover:ring-opacity-30 focus:ring-opacity-30 focus:outline-none hover:bg-zinc-200 transition-all"
                            })]
                        }), (0, r.jsxs)("div", {
                            className: "flex justify-between w-full text-xs opacity-40 select-none mt-1",
                            children: [(0, r.jsx)("p", {
                                children: h
                            }), (0, r.jsx)("p", {
                                children: m
                            })]
                        })]
                    })
                }),
                x = [
                    [768, 512],
                    [704, 512],
                    [640, 512],
                    [576, 512],
                    [640, 640],
                    [512, 576],
                    [512, 640],
                    [512, 704],
                    [512, 768]
                ],
                f = [
                    [1152, 768],
                    [1088, 896],
                    [1024, 1024],
                    [896, 1088],
                    [768, 1152]
                ],
                g = e => {
                    let {
                        className: t = "",
                        dimensionsIndex: n,
                        setDimensionsIndex: m,
                        disabled: g = !1,
                        useLargeSizes: p = !0
                    } = e, v = p ? f : x, w = v[n][0], b = v[n][1], j = p ? 2 / 3 : 1, [y, N] = (0, u.useState)(!1), C = (0, i.Z)("(max-width: 640px)"), I = C ? window.innerWidth / 2 - 45 : 16 + 512 / 4.5;
                    return (0, r.jsxs)("div", {
                        className: t,
                        children: [(0, r.jsx)(l.M, {
                            children: y && !g && (0, r.jsxs)(a.E.div, {
                                className: "z-10  absolute flex pointer-events-none items-center justify-center bg-zinc-900 border border-opacity-50 border-zinc-700 rounded-md shadow-lg drop-shadow-md",
                                style: {
                                    marginTop: 64
                                },
                                initial: {
                                    x: I - w * j / 4.5 / 2,
                                    width: w * j / 4.5,
                                    height: b * j / 4.5,
                                    scale: .9,
                                    opacity: 1
                                },
                                exit: {
                                    x: I - w * j / 4.5 / 2,
                                    width: w * j / 4.5,
                                    height: b * j / 4.5,
                                    scale: .9,
                                    opacity: 0
                                },
                                animate: {
                                    x: I - w * j / 4.5 / 2,
                                    width: w * j / 4.5,
                                    height: b * j / 4.5,
                                    scale: 1,
                                    opacity: 1
                                },
                                transition: {
                                    type: "spring",
                                    stiffness: 1e3,
                                    damping: 50
                                },
                                children: [(0, r.jsx)("div", {
                                    className: "absolute h-3 w-3 border-t-2 border-l-2 top-0  opacity-20 left-0 m-2"
                                }), (0, r.jsx)("div", {
                                    className: "absolute h-3 w-3 border-t-2 border-r-2 top-0  opacity-20 right-0 m-2"
                                }), (0, r.jsx)("div", {
                                    className: "absolute h-3 w-3 border-b-2 border-l-2  opacity-20 bottom-0 left-0 m-2"
                                }), (0, r.jsx)("div", {
                                    className: "absolute h-3 w-3 border-b-2 border-r-2  opacity-20 bottom-0 right-0 m-2"
                                }), (0, r.jsx)("div", {
                                    className: "flex flex-col items-center justify-center relative",
                                    children: (0, r.jsxs)("p", {
                                        className: "text-sm proportional-nums slashed-zero text-white",
                                        children: [v[n][0], " \xd7 ", v[n][1]]
                                    })
                                })]
                            })
                        }), (0, r.jsxs)("div", {
                            className: "select-none opacity-50 text-xs flex items-center justify-start mb-3",
                            children: [(0, r.jsx)(d.A, {
                                className: "mr-2 text-sm"
                            }), (0, r.jsx)("p", {
                                children: "Dimensions"
                            })]
                        }), (0, r.jsxs)("div", {
                            className: (0, o.Z)("", {
                                "opacity-40": g
                            }),
                            children: [(0, r.jsxs)(s.fC, {
                                min: 0,
                                max: v.length - 1,
                                step: 1,
                                "aria-label": "Dimensions",
                                value: [n],
                                onValueChange: e => m(e[0]),
                                className: "w-full relative flex items-center select-none touch-none h-5 cursor-pointer",
                                onPointerOver: () => N(!0),
                                onPointerOut: () => N(!1),
                                disabled: g,
                                children: [(0, r.jsx)(s.fQ, {
                                    className: "w-full h-0.5 bg-black rounded-full relative",
                                    children: (0, r.jsx)(s.e6, {
                                        className: "absolute bg-indigo-600 rounded-full h-full"
                                    })
                                }), (0, r.jsx)(s.bU, {
                                    className: (0, o.Z)("block w-4 h-4 bg-white shadow-md rounded-full focus:ring-8 hover:ring-4 hover:ring-indigo-500 focus:ring-indigo-500 hover:ring-opacity-30 focus:ring-opacity-30 focus:outline-none hover:bg-zinc-200 transition-all", {
                                        "cursor-not-allowed": g
                                    })
                                })]
                            }), (0, r.jsxs)("div", {
                                className: "flex justify-between w-full  select-none mt-2 text-base",
                                children: [(0, r.jsx)(c.L, {
                                    className: "opacity-40"
                                }), (0, r.jsxs)("div", {
                                    className: "text-xs flex items-center transition-all text-zinc-200",
                                    style: {
                                        opacity: y && !g ? 0 : 1
                                    },
                                    children: [v[n][0], " \xd7 ", v[n][1]]
                                }), (0, r.jsx)(h.b, {
                                    className: "opacity-40"
                                })]
                            })]
                        })]
                    })
                }
        },
        8411: function(e, t, n) {
            n.d(t, {
                $: function() {
                    return s
                }
            });
            var r = n(7437);
            n(2265);
            var i = n(7042);
            let s = e => {
                let {
                    size: t = "sm"
                } = e;
                return (0, r.jsxs)("div", {
                    className: (0, i.Z)("la-ball-grid-beat", {
                        sm: "la-sm",
                        md: "",
                        lg: "la-2x",
                        xl: "la-3x"
                    }[t]),
                    children: [(0, r.jsx)("div", {}), (0, r.jsx)("div", {}), (0, r.jsx)("div", {})]
                })
            }
        },
        4719: function(e, t, n) {
            n.d(t, {
                iP: function() {
                    return l
                },
                nP: function() {
                    return o
                }
            });
            var r = n(7437),
                i = n(2265);
            let s = i.createContext({
                    width: void 0,
                    height: void 0
                }),
                o = e => {
                    let {
                        children: t
                    } = e, n = function() {
                        let [e, t] = (0, i.useState)({
                            width: void 0,
                            height: void 0
                        });
                        return (0, i.useEffect)(() => {
                            function e() {
                                t({
                                    width: window.innerWidth,
                                    height: window.innerHeight
                                })
                            }
                            return window.addEventListener("resize", e), e(), () => window.removeEventListener("resize", e)
                        }, []), e
                    }();
                    return (0, r.jsx)(s.Provider, {
                        value: n,
                        children: t
                    })
                },
                l = () => {
                    let e = (0, i.useContext)(s);
                    if (void 0 === e) throw Error("useWindowSize must be used within WindowSizeProvider");
                    return e
                }
        }
    }
]);