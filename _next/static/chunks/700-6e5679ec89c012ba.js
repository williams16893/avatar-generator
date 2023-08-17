"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [700], {
        7921: function(e, t, i) {
            i.d(t, {
                s: function() {
                    return s
                }
            });
            var l = i(7437),
                a = i(2265);
            let s = a.memo(function(e) {
                let {
                    children: t,
                    onClose: i
                } = e, s = (0, a.useCallback)(e => {
                    "Escape" === e.key && i()
                }, [i]);
                return (0, a.useEffect)(() => (document.addEventListener("keydown", s), () => {
                    document.removeEventListener("keydown", s)
                }), [s]), (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("div", {
                        className: "fixed inset-0 w-screen h-screen bg-black bg-opacity-70 z-50",
                        children: (0, l.jsx)("style", {
                            children: "\n            body {\n              overflow-y: hidden !important;\n            }\n          "
                        })
                    }), (0, l.jsx)("div", {
                        onClick: () => {
                            i()
                        },
                        className: "fixed inset-0 w-screen h-screen flex items-center justify-center z-50",
                        children: t
                    })]
                })
            })
        },
        9627: function(e, t, i) {
            i.d(t, {
                b: function() {
                    return o
                },
                l: function() {
                    return d
                }
            });
            var l = i(7437),
                a = i(7042),
                s = i(2265),
                n = i(5278);
            i(2169);
            var r = i(4719);
            let d = s.memo(function(e) {
                    let {
                        selectedItem: t = 0,
                        onChange: i,
                        children: a
                    } = e, d = (0, r.iP)(), o = d.width && d.width < 768;
                    return (0, s.useEffect)(() => {
                        let e = e => {
                            "ArrowRight" === e.key && t < a.length - 1 && i(t + 1), "ArrowLeft" === e.key && t > 0 && i(t - 1)
                        };
                        return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
                    }, [t, i, a.length]), (0, l.jsx)(n.lr, {
                        onChange: i,
                        selectedItem: t,
                        axis: "horizontal",
                        dynamicHeight: !0,
                        showIndicators: !1,
                        showStatus: !1,
                        showThumbs: !1,
                        showArrows: !1,
                        transitionTime: o ? 100 : 0,
                        centerMode: !1,
                        swipeable: !0,
                        useKeyboardArrows: !0,
                        preventMovementUntilSwipeScrollTolerance: !0,
                        swipeScrollTolerance: 20,
                        children: a
                    })
                }),
                o = s.memo(function(e) {
                    let {
                        count: t,
                        selectedIndex: i,
                        onSelect: s
                    } = e;
                    return (0, l.jsx)("div", {
                        className: "flex space-x-2 mt-4",
                        children: Array(t).fill("").map((e, t) => (0, l.jsx)("div", {
                            onClick: e => {
                                e.stopPropagation(), s(t)
                            },
                            className: (0, a.Z)({
                                "w-2.5 h-2.5 rounded-full cursor-pointer": !0,
                                "bg-zinc-700": t !== i,
                                "bg-zinc-300": t === i
                            })
                        }, t))
                    })
                })
        },
        7159: function(e, t, i) {
            i.d(t, {
                _: function() {
                    return u
                }
            });
            var l = i(7437),
                a = i(2265),
                s = i(7042),
                n = i(7904),
                r = i(2749),
                d = i(165),
                o = i(8285),
                c = i(5764),
                m = i(9222);
            let u = a.memo(function(e) {
                let {
                    imageWidth: t,
                    imageId: i,
                    eventSource: u
                } = e, {
                    data: h
                } = (0, r.useSession)(), {
                    setLoginMenuOpen: p
                } = (0, n.useLoginMenuContext)(), x = (0, d.NL)(), v = ["likes"], g = ["prompts.infinitePrompts", {
                    source: "likes"
                }], f = (0, o.a)(v, {
                    queryFn: () => (0, m.Z)("/api/likes").then(e => e.data),
                    enabled: !!h,
                    staleTime: 3e5
                }), {
                    mutate: y
                } = (0, c.D)({
                    mutationFn: async e => {
                        let t = await m.Z.post("/api/likes/add", e);
                        return t.data
                    },
                    onMutate: async e => {
                        let {
                            imageId: t
                        } = e, i = x.getQueryState(v), l = (null == i ? void 0 : i.fetchStatus) === "fetching";
                        l && await x.cancelQueries({
                            queryKey: v
                        });
                        let a = await x.getQueryData(v);
                        return x.setQueryData(v, e => [...e || [], t]), {
                            previousData: a,
                            didCancelQuery: l
                        }
                    },
                    onError: (e, t, i) => {
                        let {
                            imageId: l
                        } = t;
                        (null == i ? void 0 : i.previousData) && x.setQueryData(v, i.previousData)
                    },
                    onSettled: (e, t, i, l) => {
                        let {
                            imageId: a
                        } = i;
                        (null == l ? void 0 : l.didCancelQuery) && x.invalidateQueries(v)
                    }
                }), {
                    mutate: w
                } = (0, c.D)({
                    mutationFn: e => m.Z.post("/api/likes/delete", e).then(e => e.data),
                    onMutate: async e => {
                        let {
                            imageId: t
                        } = e, i = x.getQueryState(v), l = (null == i ? void 0 : i.fetchStatus) === "fetching";
                        l && await x.cancelQueries({
                            queryKey: v
                        });
                        let a = x.getQueryData(v);
                        x.setQueryData(v, e => (e || []).filter(e => e !== t));
                        let s = x.getQueryState(g),
                            n = (null == s ? void 0 : s.fetchStatus) === "fetching";
                        n && await x.cancelQueries({
                            queryKey: g
                        });
                        let r = x.getQueryData(g);
                        return r && x.setQueryData(g, e => e ? { ...e,
                            pages: e.pages.map(e => ({ ...e,
                                images: e.images.filter(e => e.id !== t),
                                count: e.count && e.count > 0 ? e.count - 1 : 0
                            }))
                        } : {
                            pages: [],
                            pageParams: []
                        }), {
                            previousData: a,
                            previousDataLikesPage: r,
                            didCancelQuery: l,
                            didCancelQueryLikesPage: n
                        }
                    },
                    onError: (e, t, i) => {
                        let {
                            imageId: l
                        } = t;
                        (null == i ? void 0 : i.previousData) && (x.setQueryData(v, i.previousData), x.setQueryData(g, i.previousDataLikesPage))
                    },
                    onSettled: (e, t, i, l) => {
                        let {
                            imageId: a
                        } = i;
                        (null == l ? void 0 : l.didCancelQuery) && x.invalidateQueries(v), (null == l ? void 0 : l.didCancelQueryLikesPage) && x.invalidateQueries(g)
                    }
                }), j = (0, a.useMemo)(() => (f.data || []).includes(i), [i, f.data]), b = (0, a.useCallback)(e => {
                    if (e.preventDefault(), e.stopPropagation(), !h) {
                        p(!0);
                        return
                    }
                    j ? w({
                        imageId: i
                    }) : y({
                        imageId: i,
                        eventSource: u
                    })
                }, [i, u, j, y, w, h, p]);
                return (0, l.jsx)("button", {
                    onClick: b,
                    className: (0, s.Z)("  bg-zinc-900 bg-opacity-70 hover:bg-opacity-100 flex items-center justify-center cursor-pointer active:scale-90 transition-all ", {
                        "rounded text-md h-8 w-8": t <= 180,
                        "rounded-lg text-lg h-10 w-10": t > 180 && t < 1e3,
                        "rounded-lg text-lg h-11 w-11": t >= 1e3
                    }),
                    children: (0, l.jsx)("div", {
                        className: "scale-50",
                        children: (0, l.jsx)("div", {
                            className: (0, s.Z)("heart brightness-110", {
                                "is-active": j
                            })
                        })
                    })
                })
            })
        },
        7986: function(e, t, i) {
            i.d(t, {
                N: function() {
                    return Q
                }
            });
            var l = i(7437),
                a = i(7042),
                s = i(1396),
                n = i.n(s),
                r = i(1175);
            let d = e => {
                let {
                    text: t,
                    onTagClick: i
                } = e, s = [], d = t.split(",").map(e => e.trim()).map(e => e.toLocaleLowerCase()).filter(e => e.length > 0);
                1 === d.length && (d = t.split(".").map(e => e.trim()).map(e => e.toLocaleLowerCase()).filter(e => e.length > 0));
                let o = ["bg-red-500", "bg-orange-500", "bg-yellow-500", "bg-green-500", "bg-blue-500", "bg-indigo-500", "bg-purple-500"];
                for (let e = 0; e < d.length; e++) {
                    let t = d[e].trim();
                    e > 0 && s.push((0, l.jsx)("span", {
                        children: ", "
                    }, "tag-".concat(e, "-sep")));
                    let c = new URLSearchParams({
                        q: t
                    });
                    s.push((0, l.jsx)(n(), {
                        href: "/?".concat(c),
                        onClick: e => {
                            (0, r.gs)(e) || (e.preventDefault(), i(t))
                        },
                        className: (0, a.Z)(o[e % o.length], "bg-opacity-0 rounded hover:bg-opacity-40 cursor-pointer "),
                        children: 0 === e ? (null == t ? void 0 : t.charAt(0).toUpperCase()) + t.slice(1) : t
                    }, e))
                }
                return (0, l.jsx)("p", {
                    children: s
                })
            };
            var o = i(2265),
                c = i(9627),
                m = i(774),
                u = i(7046),
                h = i(6439),
                p = i(5675),
                x = i(9174),
                v = i(6345),
                g = i(7876),
                f = i(4852),
                y = i(6489);
            let w = o.memo(function(e) {
                let {
                    textToCopy: t,
                    children: i,
                    onCopy: a
                } = e, [s, n] = (0, o.useState)(!1);
                return (0, l.jsx)("div", {
                    onClick: () => {
                        navigator.clipboard.writeText(t), n(!0), a && a(), setTimeout(() => {
                            n(!1)
                        }, 1e3)
                    },
                    className: "text-xs rounded-md sm:text-xs active:scale-95 transition-all transform-gpu whitespace-nowrap flex-1 flex select-none cursor-pointer hover:bg-zinc-600 border border-zinc-600 bg-zinc-700 items-center justify-center  shadow px-2.5 py-2 w-fit-content",
                    children: s ? "Copied!" : (0, l.jsx)(l.Fragment, {
                        children: i
                    })
                })
            });
            var j = i(8411),
                b = i(7159),
                N = i(2749),
                k = i(1937),
                C = i(9703),
                z = i(5764),
                D = i(9222),
                S = i(4033),
                I = i(4719),
                F = i(7921);
            let Q = e => {
                    var t, i, s, n, r, v, g, k, Q, _;
                    let {
                        variant: E,
                        prompt: Z,
                        onTagClick: P,
                        initialImageId: A,
                        placeholderSize: V,
                        onExploreClick: M,
                        onGenerateClick: T,
                        onDeleteClick: J,
                        eventSource: K
                    } = e, {
                        data: q
                    } = (0, N.useSession)(), U = (0, I.iP)(), W = U.width && U.width < 768, [R, H] = (0, o.useState)(0), B = Z.images.length - 1;
                    R = R > B ? B : R;
                    let [X, G] = (0, o.useState)(null), O = (0, S.usePathname)(), {
                        mutate: Y
                    } = (0, z.D)({
                        mutationFn: async e => D.Z.post("/api/event-explore-similar", e)
                    }), {
                        mutate: $
                    } = (0, z.D)({
                        mutationFn: async e => D.Z.post("/api/event-load-prompt", e)
                    }), ee = (0, o.useMemo)(() => {
                        let e = A && Z.images.find(e => e.id === A);
                        return e ? [e, ...Z.images.filter(t => t.id !== e.id)] : Z.images
                    }, [A, Z.images]), {
                        mutate: et
                    } = (0, z.D)({
                        mutationFn: async e => D.Z.post("/api/expand-image", e)
                    }), {
                        mutate: ei
                    } = (0, z.D)({
                        mutationFn: async e => D.Z.post("/api/download-image", e)
                    });
                    (0, o.useEffect)(() => {
                        let e = e => {
                            null === X && ("ArrowRight" === e.key && R < Z.images.length - 1 && H(R + 1), "ArrowLeft" === e.key && R > 0 && H(R - 1))
                        };
                        return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
                    }, [R, X, Z.images.length]);
                    let {
                        mutate: el
                    } = (0, z.D)({
                        mutationFn: async e => D.Z.post("/api/copy-prompt", e)
                    }), {
                        mutate: ea
                    } = (0, z.D)({
                        mutationFn: async e => D.Z.post("/api/copy-url", e)
                    }), [es, en] = (0, o.useState)(!1), er = ee[R], ed = er.upscaled_width ? er.upscaled_width / 2 : er.width, eo = er.upscaled_height ? er.upscaled_height / 2 : er.height;
                    "lexica-aperture-v3" === Z.model && (ed *= 2, eo *= 2);
                    let ec = W ? {
                        width: U.width,
                        height: U.height - 56
                    } : {
                        width: U.width - 128 - 400 - 112,
                        height: U.height - 64 - 20 - 10 - 56 - 20
                    };
                    ed > ec.width && (eo *= ec.width / ed, ed = ec.width), eo > ec.height && (ed *= ec.height / eo, eo = ec.height);
                    let em = "Stable Diffusion 1.5";
                    return !Z.model || (em = ({
                        "lexica-aperture": "Lexica Aperture v1",
                        "lexica-aperture-v2": "Lexica Aperture v2",
                        "lexica-aperture-v3": "Lexica Aperture v3"
                    })[Z.model]) || (em = "Stable Diffusion 1.5"), (0, l.jsxs)(l.Fragment, {
                        children: [null !== X && (0, l.jsx)(F.s, {
                            onClose: () => {
                                G(null)
                            },
                            children: (0, l.jsxs)("div", {
                                className: "flex items-center justify-center flex-col",
                                children: [(0, l.jsx)(c.l, {
                                    onChange: e => {
                                        G(e)
                                    },
                                    selectedItem: X,
                                    children: Z.images.map(e => {
                                        var t;
                                        return (0, l.jsx)("img", {
                                            className: "object-contain h-auto w-auto max-w-[calc(100vw-30px)] max-h-[calc(100vh-60px)]",
                                            src: (0, C.J)({
                                                id: e.id,
                                                size: "lg",
                                                workerFileVariant: (null == Z ? void 0 : null === (t = Z.model) || void 0 === t ? void 0 : t.includes("aperture")) ? "v2" : "v1"
                                            }),
                                            alt: ""
                                        }, e.id)
                                    })
                                }), Z.images.length > 1 && (0, l.jsx)(c.b, {
                                    count: Z.images.length,
                                    selectedIndex: X,
                                    onSelect: e => {
                                        G(e)
                                    }
                                })]
                            })
                        }), (0, l.jsxs)("div", {
                            ref: e => {},
                            className: (0, a.Z)("flex w-full h-full self-stretch flex-col md:flex-row pb-16 md:pb-0 md:pt-0 flex-1 ", {
                                "overflow-y-auto": W
                            }),
                            children: [(0, l.jsxs)("div", {
                                className: "w-full flex-shrink-0 overflow-hidden text-base px-5 flex flex-col h-auto ",
                                style: {
                                    height: "fit-content",
                                    width: W ? "100%" : 400
                                },
                                children: [(0, l.jsxs)("div", {
                                    className: "mt-6 px-4 py-3 bg-zinc-700 rounded-xl shadow bg-opacity-50 font-light flex flex-col space-y-5",
                                    children: [(0, l.jsx)(d, {
                                        onTagClick: P,
                                        text: Z.prompt || ""
                                    }), (0, l.jsxs)("div", {
                                        className: "flex text-xs font-light",
                                        children: [(0, l.jsxs)("div", {
                                            className: "flex flex-1 flex-row space-x-2 mr-2",
                                            children: [(0, l.jsxs)(w, {
                                                onCopy: () => el({
                                                    imageId: "modal-item" === E && er.id ? er.id : void 0,
                                                    promptId: null !== (k = Z.id) && void 0 !== k ? k : "",
                                                    eventSource: K
                                                }),
                                                textToCopy: null !== (Q = Z.prompt) && void 0 !== Q ? Q : "",
                                                children: [(0, l.jsx)(h.C, {
                                                    className: "text-sm mr-2"
                                                }), "Copy prompt"]
                                            }), (0, l.jsxs)(w, {
                                                onCopy: () => ea({
                                                    imageId: "modal-item" === E && er.id ? er.id : void 0,
                                                    promptId: null !== (_ = Z.id) && void 0 !== _ ? _ : "",
                                                    eventSource: K
                                                }),
                                                textToCopy: "https://lexica.art/prompt/".concat(Z.id),
                                                children: [(0, l.jsx)(x.X, {
                                                    className: "text-sm mr-2"
                                                }), "Copy URL"]
                                            })]
                                        }), "full-screen" !== E && (0, l.jsx)("a", {
                                            href: "/prompt/".concat(Z.id),
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "text-sm w-12 flex select-none cursor-pointer hover:bg-zinc-600 border border-zinc-600 bg-zinc-700 items-center justify-center rounded-md shadow px-3 ",
                                            children: (0, l.jsx)(p.A, {
                                                className: "text-sm"
                                            })
                                        })]
                                    })]
                                }), (0, l.jsxs)("div", {
                                    className: "flex space-x-2 px-2",
                                    children: [(0, l.jsxs)("div", {
                                        onClick: () => {
                                            T(Z, ee[R]), $({
                                                imageId: "modal-item" === E && er.id ? er.id : void 0,
                                                promptId: Z.id,
                                                eventSource: K,
                                                eventVariant: "modal-item" === E ? "modal-details" : "details"
                                            })
                                        },
                                        className: "text-xs rounded-md sm:text-sm group mt-4 whitespace-nowrap flex-1 flex select-none cursor-pointer hover:brightness-110 bg-gradient-to-t from-indigo-900 via-indigo-900 to-indigo-800 drop-shadow items-center justify-center px-2.5 py-2.5 w-fit-content active:scale-95 transition-all",
                                        children: [(0, l.jsx)(f.h, {
                                            className: "mr-2 text-base transition-all w-3 h-3"
                                        }), "Open in editor"]
                                    }), (0, l.jsxs)("div", {
                                        onClick: () => {
                                            "modal-item" !== E && en(!0), M(er.id), Y({
                                                imageId: "modal-item" === E && er.id ? er.id : void 0,
                                                promptId: Z.id,
                                                eventSource: K,
                                                eventVariant: "modal-item" === E ? "modal-details" : "details"
                                            })
                                        },
                                        className: "text-xs rounded-md sm:text-sm group mt-4 whitespace-nowrap flex-1 flex select-none cursor-pointer hover:brightness-110 bg-gradient-to-t  from-zinc-700 via-zinc-700 to-zinc-700 drop-shadow items-center justify-center px-2.5 py-2 w-fit-content",
                                        children: [es && (0, l.jsx)(j.$, {
                                            size: "md"
                                        }), !es && (0, l.jsxs)(l.Fragment, {
                                            children: ["Explore this style", (0, l.jsx)(u.T, {
                                                className: "ml-2 text-base group-hover:translate-x-1 transition-all"
                                            })]
                                        })]
                                    })]
                                }), (0, l.jsxs)("div", {
                                    className: "md:mt-6 mt-4 opacity-80 ml-2 grid grid-cols-2 gap-2  md:flex  flex-wrap md:flex-col md:space-x-0 md:space-y-1 h-auto pb-16 sm:pb-8",
                                    children: [(0, l.jsxs)("div", {
                                        children: [(0, l.jsx)("div", {
                                            className: "text-xs opacity-50",
                                            children: "Model"
                                        }), (0, l.jsx)("div", {
                                            className: "text-sm",
                                            children: em
                                        })]
                                    }), !(null === (t = Z.model) || void 0 === t ? void 0 : t.includes("aperture")) && (0, l.jsxs)("div", {
                                        children: [(0, l.jsx)("div", {
                                            className: "text-xs opacity-50",
                                            children: "Seed"
                                        }), (0, l.jsx)("div", {
                                            className: "text-sm",
                                            children: Z.seed
                                        })]
                                    }), (0, l.jsxs)("div", {
                                        children: [(0, l.jsx)("div", {
                                            className: "text-xs opacity-50",
                                            children: "Guidance scale"
                                        }), (0, l.jsx)("div", {
                                            className: "text-sm",
                                            children: Z.c
                                        })]
                                    }), (0, l.jsxs)("div", {
                                        children: [(0, l.jsx)("div", {
                                            className: "text-xs opacity-50",
                                            children: "Dimensions"
                                        }), (0, l.jsxs)("div", {
                                            className: "text-sm",
                                            children: [er.width, " \xd7 ", er.height]
                                        })]
                                    }), "number" == typeof er.upscaled_width && er.upscaled_width != er.width && (0, l.jsxs)("div", {
                                        children: [(0, l.jsx)("div", {
                                            className: "text-xs opacity-50",
                                            children: "Upscaled"
                                        }), (0, l.jsxs)("div", {
                                            className: "text-sm",
                                            children: [er.upscaled_width, " \xd7 ", er.upscaled_height]
                                        })]
                                    }), "/history" === O && (0, l.jsxs)("div", {
                                        children: [(0, l.jsx)("div", {
                                            className: "text-xs opacity-50",
                                            children: "Visibility"
                                        }), (0, l.jsx)("div", {
                                            className: "text-sm",
                                            children: Z.is_private ? "Private" : "Public"
                                        })]
                                    }), Z.negativePrompt && (0, l.jsxs)("div", {
                                        children: [(0, l.jsx)("div", {
                                            className: "text-xs opacity-50",
                                            children: "Negative prompt"
                                        }), (0, l.jsx)("div", {
                                            className: "text-sm",
                                            children: Z.negativePrompt
                                        })]
                                    }), Z.initImage && (0, l.jsxs)("div", {
                                        children: [(0, l.jsx)("div", {
                                            className: "text-xs opacity-50",
                                            children: "Image to Image"
                                        }), (0, l.jsx)("a", {
                                            href: "https://image.lexica.art/sm/".concat(Z.initImage),
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "block mt-1 w-28 h-28 rounded-md overflow-hidden",
                                            children: (0, l.jsx)("img", {
                                                alt: "",
                                                src: "https://image.lexica.art/sm/".concat(Z.initImage),
                                                className: "w-full"
                                            })
                                        }), (0, l.jsxs)("div", {
                                            className: "text-[12px] opacity-40",
                                            children: ["with ", Z.initImageStrength, "% influence"]
                                        })]
                                    })]
                                })]
                            }), "full-screen" === E && (0, l.jsx)("div", {
                                className: (0, a.Z)("flex flex-wrap overflow-hidden flex-1 items-start justify-start thin-scrollbar h-auto pb-2", {}),
                                style: {
                                    height: "fit-content",
                                    overscrollBehaviorX: "contain"
                                },
                                children: Z.images.map((e, t) => {
                                    var i;
                                    return (0, l.jsx)("img", {
                                        onClick: () => {
                                            var e;
                                            G(t), et({
                                                promptId: Z.id,
                                                imageId: null === (e = Z.images[t]) || void 0 === e ? void 0 : e.id,
                                                eventSource: K
                                            })
                                        },
                                        alt: "",
                                        className: "select-none ",
                                        src: (0, C.J)({
                                            id: e.id,
                                            size: "lg",
                                            workerFileVariant: (null == Z ? void 0 : null === (i = Z.model) || void 0 === i ? void 0 : i.includes("aperture")) ? "v2" : "v1"
                                        }),
                                        style: {
                                            objectFit: "contain",
                                            height: "100%",
                                            width: W && !Z.grid && Z.images.length > 1 ? "50%" : void 0,
                                            maxHeight: Z.grid || 1 === Z.images.length ? W ? "80vh" : "60vh" : "35vh"
                                        }
                                    }, e.id)
                                })
                            }), "modal-item" === E && (0, l.jsxs)("div", {
                                className: "w-full md:h-full flex flex-col  ",
                                style: {
                                    order: W ? -1 : 0
                                },
                                children: [!W && (0, l.jsxs)("div", {
                                    className: "flex mx-auto mt-[20px]",
                                    children: [(0, l.jsx)("button", {
                                        disabled: 0 === R,
                                        onClick: () => {
                                            let e = Math.max(0, R - 1);
                                            H(e)
                                        },
                                        className: (0, a.Z)("h-full w-14 text-5xl flex items-center justify-center", {
                                            "opacity-10": 0 === R,
                                            "opacity-80 hover:opacity-100 cursor-pointer": 0 !== R
                                        }),
                                        children: (0, l.jsx)(m.Y, {})
                                    }), (0, l.jsxs)("div", {
                                        className: "relative",
                                        children: [(0, l.jsx)("div", {
                                            className: "absolute top-2 right-2 z-30",
                                            children: (0, l.jsx)(b._, {
                                                imageId: er.id,
                                                imageWidth: 1e3,
                                                eventSource: K
                                            }, er.id)
                                        }), 0 === R && V && (0, l.jsx)("img", {
                                            alt: "",
                                            className: "absolute top-0 left-0 z-10",
                                            src: (0, C.J)({
                                                id: er.id,
                                                size: V,
                                                workerFileVariant: (null == Z ? void 0 : null === (i = Z.model) || void 0 === i ? void 0 : i.includes("aperture")) ? "v2" : "v1"
                                            }),
                                            style: {
                                                width: "".concat(ed, "px"),
                                                height: "".concat(eo, "px"),
                                                maxWidth: "none"
                                            }
                                        }), (0, l.jsx)("img", {
                                            alt: "",
                                            className: "relative z-20",
                                            src: (0, C.J)({
                                                id: er.id,
                                                size: "lg",
                                                workerFileVariant: (null == Z ? void 0 : null === (s = Z.model) || void 0 === s ? void 0 : s.includes("aperture")) ? "v2" : "v1"
                                            }),
                                            style: {
                                                width: "".concat(ed, "px"),
                                                height: "".concat(eo, "px"),
                                                maxWidth: "none"
                                            }
                                        }), (0, l.jsxs)("div", {
                                            className: "absolute bottom-2 right-2 space-y-2 flex flex-col items-end z-30",
                                            children: [(0, l.jsx)("a", {
                                                href: (0, C.J)({
                                                    id: er.id,
                                                    size: "lg",
                                                    workerFileVariant: (null == Z ? void 0 : null === (n = Z.model) || void 0 === n ? void 0 : n.includes("aperture")) ? "v2" : "v1",
                                                    download: !0
                                                }),
                                                download: (0, C.t)(Z.prompt || "", er.id),
                                                title: "Download",
                                                className: "bg-zinc-900 bg-opacity-70 hover:bg-opacity-100 transition-opacity flex items-center justify-center cursor-pointer text-lg h-10 w-10 rounded-lg",
                                                onClick: () => {
                                                    ei({
                                                        promptId: Z.id,
                                                        imageId: er.id,
                                                        eventSource: K
                                                    })
                                                },
                                                children: (0, l.jsx)(y.C, {})
                                            }), er.userid && ((null == q ? void 0 : null === (r = q.user) || void 0 === r ? void 0 : r.id) === er.userid || (null == q ? void 0 : null === (v = q.user) || void 0 === v ? void 0 : v.email) === "samin100@gmail.com" || (null == q ? void 0 : null === (g = q.user) || void 0 === g ? void 0 : g.email) === "gabe.ragland@gmail.com") && J && (0, l.jsx)(L, {
                                                onConfirm: () => {
                                                    J(er.id)
                                                }
                                            })]
                                        })]
                                    }), (0, l.jsx)("button", {
                                        disabled: R === ee.length - 1,
                                        onClick: () => {
                                            let e = Math.min(Z.images.length - 1, R + 1);
                                            H(e)
                                        },
                                        className: (0, a.Z)("h-full w-14 text-5xl flex items-center justify-center", {
                                            "opacity-10": R === ee.length - 1,
                                            "opacity-80 hover:opacity-100 cursor-pointer": R !== ee.length - 1
                                        }),
                                        children: (0, l.jsx)(u.T, {})
                                    })]
                                }), W && (0, l.jsx)("div", {
                                    className: "flex-1",
                                    style: {
                                        width: "100%"
                                    },
                                    children: (0, l.jsx)("div", {
                                        className: "relative ",
                                        style: {
                                            width: "100%"
                                        },
                                        children: (0, l.jsx)(c.l, {
                                            onChange: e => H(e),
                                            selectedItem: R,
                                            children: ee.map((e, t) => {
                                                var i, a, s, n;
                                                return (0, l.jsxs)("div", {
                                                    className: "h-full relative inline-block",
                                                    children: [(0, l.jsx)("div", {
                                                        className: "absolute right-3 top-3 z-30",
                                                        children: (0, l.jsx)(b._, {
                                                            imageId: e.id,
                                                            imageWidth: 1e3,
                                                            eventSource: K
                                                        }, e.id)
                                                    }), (0, l.jsxs)("div", {
                                                        className: "absolute bottom-3 right-3 space-y-2 flex flex-col items-end z-30",
                                                        children: [(0, l.jsx)("a", {
                                                            href: (0, C.J)({
                                                                id: e.id,
                                                                size: "lg",
                                                                workerFileVariant: (null == Z ? void 0 : null === (i = Z.model) || void 0 === i ? void 0 : i.includes("aperture")) ? "v2" : "v1",
                                                                download: !0
                                                            }),
                                                            download: (0, C.t)(Z.prompt || "", e.id),
                                                            title: "Download",
                                                            className: "bg-zinc-900 bg-opacity-70 hover:bg-opacity-100 transition-opacity flex items-center justify-center cursor-pointer text-lg h-10 w-10 rounded-lg",
                                                            onClick: () => {
                                                                ei({
                                                                    promptId: Z.id,
                                                                    imageId: er.id,
                                                                    eventSource: K
                                                                })
                                                            },
                                                            children: (0, l.jsx)(y.C, {})
                                                        }), e.userid && (null == q ? void 0 : null === (a = q.user) || void 0 === a ? void 0 : a.id) === e.userid && J && (0, l.jsx)(L, {
                                                            onConfirm: () => {
                                                                J(e.id)
                                                            }
                                                        })]
                                                    }), 0 === t && V && (0, l.jsx)("img", {
                                                        alt: "",
                                                        className: "absolute top-0 left-0 z-10",
                                                        src: (0, C.J)({
                                                            id: e.id,
                                                            size: V,
                                                            workerFileVariant: (null == Z ? void 0 : null === (s = Z.model) || void 0 === s ? void 0 : s.includes("aperture")) ? "v2" : "v1"
                                                        }),
                                                        style: {
                                                            width: "".concat(ed, "px"),
                                                            height: "".concat(eo, "px"),
                                                            pointerEvents: "auto"
                                                        }
                                                    }), (0, l.jsx)("img", {
                                                        alt: "",
                                                        className: "relative z-20",
                                                        src: (0, C.J)({
                                                            id: e.id,
                                                            size: "lg",
                                                            workerFileVariant: (null == Z ? void 0 : null === (n = Z.model) || void 0 === n ? void 0 : n.includes("aperture")) ? "v2" : "v1"
                                                        }),
                                                        style: {
                                                            width: "".concat(ed, "px"),
                                                            height: "".concat(eo, "px"),
                                                            pointerEvents: "auto"
                                                        }
                                                    })]
                                                }, null == e ? void 0 : e.id)
                                            })
                                        })
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "flex space-x-2 items-center justify-center overflow-hidden w-full flex-wrap mt-4 md:mt-[10px] md:px-2",
                                    children: ee.map((e, t) => {
                                        var i;
                                        return (0, l.jsx)("div", {
                                            className: "relative",
                                            style: {
                                                height: 50,
                                                width: er.width / (er.height / 50),
                                                marginBottom: 6
                                            },
                                            children: (0, l.jsx)("img", {
                                                onClick: () => {
                                                    H(t)
                                                },
                                                alt: "",
                                                className: (0, a.Z)("select-none cursor-pointer", {
                                                    "opacity-40": t !== R,
                                                    "opacity-100": t === R
                                                }),
                                                src: (0, C.J)({
                                                    id: e.id,
                                                    size: "lg",
                                                    workerFileVariant: (null == Z ? void 0 : null === (i = Z.model) || void 0 === i ? void 0 : i.includes("aperture")) ? "v2" : "v1"
                                                }),
                                                style: {
                                                    height: "100%",
                                                    width: "auto",
                                                    objectFit: "contain",
                                                    backgroundColor: "black"
                                                }
                                            })
                                        }, e.id)
                                    })
                                })]
                            })]
                        }, Z.id)]
                    })
                },
                L = e => {
                    let {
                        onConfirm: t
                    } = e, [i, a] = (0, o.useState)(!1), s = (0, o.useRef)(null);
                    return (0, k.Z)(s, () => {
                        a(!1)
                    }), (0, l.jsxs)("div", {
                        className: "flex space-x-1",
                        ref: s,
                        children: [i && (0, l.jsx)("button", {
                            onClick: () => {
                                a(!1), t()
                            },
                            className: "slideLeftAndFade w-24 text-sm font-medium bg-red-800 hover:brightness-90 drop-shadow-dark transition-opacity flex items-center justify-center cursor-pointer h-10 rounded-lg",
                            children: "Delete"
                        }), (0, l.jsx)("button", {
                            onClick: () => a(e => !e),
                            className: "bg-zinc-900 bg-opacity-70 hover:bg-opacity-100 transition-opacity flex items-center justify-center cursor-pointer text-lg h-10 w-10 rounded-lg",
                            children: i ? (0, l.jsx)(g.q, {}) : (0, l.jsx)(v.W, {})
                        })]
                    })
                }
        },
        1175: function(e, t, i) {
            function l(e) {
                return e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
            }
            i.d(t, {
                _S: function() {
                    return a
                },
                gC: function() {
                    return s
                },
                gs: function() {
                    return l
                }
            });
            let a = e => Math.max(e, 0),
                s = (e, t) => Math.min(e, t)
        },
        3534: function(e, t, i) {
            i.d(t, {
                j: function() {
                    return a
                }
            });
            var l = i(9703);

            function a(e, t) {
                return {
                    images: t.map(t => ({
                        id: t.id,
                        url: (0, l.J)({
                            id: t.id,
                            size: "lg",
                            workerFileVariant: (e.model || "").includes("aperture") ? "v2" : "v1"
                        }),
                        promptid: e.id,
                        width: t.width,
                        height: t.height,
                        upscaledHeight: t.upscaled_height,
                        upscaledWidth: t.upscaled_width,
                        userId: t.userid,
                        isUpscale: (e.model || "").includes("aperture") && t.width > 768 && t.height > 768
                    })),
                    prompt: {
                        id: e.id,
                        prompt: e.prompt || "",
                        negativePrompt: e.negativePrompt || "",
                        model: e.model || "stable-diffusion",
                        guidanceScale: e.c,
                        width: e.width,
                        height: e.height
                    }
                }
            }
        },
        9703: function(e, t, i) {
            function l(e) {
                let {
                    id: t,
                    size: i,
                    workerFileVariant: l,
                    download: a,
                    useLexicaDomain: s = !0
                } = e, n = a ? "https://lexica.art/download" : s ? "https://image.lexica.art" : "https://lexica-serve-encoded-images.sharif.workers.dev";
                if ("v1" === l && ("lg" === i && (i = "md"), n += "/".concat(i, "/").concat(t)), "v2" === l) {
                    let e = i;
                    "sm" === i ? e = "sm2" : "md" === i ? e = "md2" : "lg" === i && (e = "full_jpg"), n += "/".concat(e, "/").concat(t)
                }
                return n
            }
            i.d(t, {
                J: function() {
                    return l
                },
                t: function() {
                    return a
                }
            });
            let a = function(e, t) {
                let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                e = e.trim();
                let l = e.split(","),
                    a = e;
                return (l.length && (a = l[0].trim()), a.length > 50 && (a = a.slice(0, 50)), a) ? a + (i ? "-" + t : "") + ".jpg" : t + ".jpg"
            }
        }
    }
]);