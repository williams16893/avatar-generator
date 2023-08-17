(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [324], {
        2324: function(e, t, a) {
            Promise.resolve().then(a.bind(a, 1886))
        },
        1218: function(e, t, a) {
            "use strict";
            a.d(t, {
                L: function() {
                    return r
                }
            });
            var s = a(7437);
            a(2265);
            var l = a(9394),
                i = a(8010);
            let r = e => {
                let {
                    values: t,
                    selectedValue: a,
                    onChange: r,
                    placeholder: n
                } = e;
                return (0, s.jsxs)(i.fC, {
                    onValueChange: r,
                    value: a,
                    children: [(0, s.jsxs)(i.xz, {
                        className: "flex cursor-pointer select-none hover:bg-zinc-900 hover:bg-opacity-50 pl-3 pr-2.5 py-2 items-center justify-center space-x-1.5 rounded focus:outline-none text-xs text-zinc-200",
                        children: [(0, s.jsx)(i.B4, {
                            className: "opacity-50 ",
                            placeholder: n
                        }), (0, s.jsx)(i.GV, {
                            children: (0, s.jsx)(l.v4q, {})
                        })]
                    }), (0, s.jsx)(i.h_, {
                        children: (0, s.jsx)(i.VY, {
                            children: (0, s.jsx)(i.l_, {
                                className: "bg-zinc-800 p-1 drop-shadow-md border border-zinc-700 rounded-md",
                                children: (0, s.jsx)(i.ZA, {
                                    className: "select-none",
                                    children: t.map(e => (0, s.jsxs)(i.ck, {
                                        className: "flex space-x-2 items-center px-4 pl-8 py-2 cursor-pointer hover:bg-zinc-700 rounded text-xs relative focus:outline-none",
                                        value: e.value,
                                        children: [(0, s.jsx)(i.eT, {
                                            children: e.label
                                        }), (0, s.jsx)(i.wU, {
                                            className: "w-6 left-0 absolute",
                                            children: (0, s.jsx)(l.nQG, {})
                                        })]
                                    }, e.value))
                                })
                            })
                        })
                    })]
                })
            }
        },
        1886: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                HomeScreen: function() {
                    return Y
                }
            });
            var s = a(7437),
                l = a(1567),
                i = a(7381),
                r = a(8356),
                n = a(4994),
                o = a(7876),
                c = a(1704),
                d = a(4719),
                u = a(2265),
                m = a(8411),
                p = a(7042),
                x = a(4033),
                h = a(7986),
                g = a(3565),
                f = a(5845),
                v = a(9721);
            let b = u.createContext(void 0),
                y = () => {
                    let e = (0, u.useContext)(b);
                    if (void 0 === e) throw Error("useGridImageContext must be used within GridImageContext.Provider");
                    return e
                };
            var j = a(4852),
                w = a(4348),
                N = a(7159),
                k = a(9703),
                C = a(1175),
                S = a(5764),
                z = a(9222);
            let D = u.memo(function(e) {
                let {
                    index: t,
                    width: a,
                    data: l
                } = e, i = u.useRef(null), n = u.useRef(null), o = a > 130, {
                    onImageClick: c,
                    onSearch: d,
                    onGenerateClick: m,
                    onGetPrompt: x,
                    onSelect: h,
                    onUnselect: g,
                    selection: f,
                    eventSource: v
                } = y(), b = f.images.find(e => e.id === l.id), D = (0, u.useMemo)(() => x(l.promptid), [l.promptid, x]), Z = a > 190 && !l.grid ? "md" : "sm", {
                    mutate: R
                } = (0, S.D)({
                    mutationFn: async e => z.Z.post("/api/event-load-prompt", e)
                }), {
                    mutate: P
                } = (0, S.D)({
                    mutationFn: async e => z.Z.post("/api/event-explore-similar", e)
                }), F = (0, u.useMemo)(() => {
                    var e;
                    return (0, k.J)({
                        id: l.id,
                        size: Z,
                        workerFileVariant: (null == D ? void 0 : null === (e = D.model) || void 0 === e ? void 0 : e.includes("aperture")) ? "v2" : "v1"
                    })
                }, [l, Z, D]), M = (0, u.useMemo)(() => {
                    if (!l.prompt) return "";
                    if (!(l.prompt.length > 100)) return l.prompt.charAt(0).toUpperCase() + l.prompt.slice(1); {
                        let e = l.prompt.slice(0, 100) + "...";
                        return e.charAt(0).toUpperCase() + e.slice(1)
                    }
                }, [l.prompt]), E = (0, u.useMemo)(() => {
                    if (!l.prompt) return "";
                    let e = l.prompt.split(",");
                    if (!(e.length > 1)) return ""; {
                        let t = e[0].charAt(0).toUpperCase() + e[0].slice(1);
                        return t.length > 100 && (t = t.slice(0, 100) + "..."), t
                    }
                }, [l.prompt]), I = (0, u.useMemo)(() => {
                    if (!l.prompt) return "";
                    let e = l.prompt.split(",");
                    if (!(e.length > 1)) return ""; {
                        let t = e.slice(1).join(",").trim();
                        return (t = t.charAt(0).toUpperCase() + t.slice(1)).length > 64 && (t = t.slice(0, 64) + "..."), t
                    }
                }, [l.prompt]), L = l.width > l.height, [T, W] = u.useState(!1);
                (0, u.useEffect)(() => {
                    i.current && (i.current.onload = () => {
                        var e;
                        null === (e = n.current) || void 0 === e || e.classList.remove("opacity-0"), W(!0)
                    }, i.current.src = F, W(!1))
                }, [F]);
                let U = (0, u.useCallback)(e => {
                    if (f.enabled) {
                        e.preventDefault(), e.stopPropagation(), b ? g(l) : h(l, e.shiftKey);
                        return
                    }(0, C.gs)(e) || (e.preventDefault(), c({
                        imageId: l.id,
                        promptId: l.promptid,
                        size: Z
                    }))
                }, [l, Z, f.enabled, h, g, b, c]);
                return (0, s.jsxs)("a", {
                    href: "/prompt/".concat(l.promptid),
                    onClick: U,
                    ref: n,
                    style: {
                        WebkitTransition: "opacity ".concat(500, "ms ease"),
                        MozTransition: "opacity ".concat(500, "ms ease"),
                        msTransition: "opacity ".concat(500, "ms ease"),
                        OTransition: "opacity ".concat(500, "ms ease")
                    },
                    className: (0, p.Z)("block relative group select-none overflow-hidden m-0.5 border-indigo-600 ", {
                        "rounded-xl": a > 220,
                        "rounded-lg": a <= 220,
                        "opacity-0": !T
                    }),
                    children: [f.enabled && (0, s.jsx)("div", {
                        className: (0, p.Z)("absolute top-0 left-0 bottom-0 right-0", {
                            "bg-indigo-600 bg-opacity-50": b
                        }),
                        children: (0, s.jsx)("div", {
                            className: (0, p.Z)("rounded-full text-indigo-700 shadow  w-7 h-7 absolute top-3 left-3", {
                                "border border-white": !b
                            }),
                            children: b && (0, s.jsx)(w.m, {
                                className: "w-full h-full rounded-full bg-white"
                            })
                        })
                    }), (0, s.jsxs)("div", {
                        className: (0, p.Z)("absolute inset-0 z-10 block text-zinc-100 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none line-clamp px-2 pb-2", {
                            "text-sm px-2": a > 180,
                            "text-xs px-1.5": a <= 180
                        }),
                        style: {
                            background: "linear-gradient(0deg,rgba(0,0,0,.8) 0% , rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.1) 100%)"
                        },
                        children: [!f.enabled && E && o && (0, s.jsx)("div", {
                            className: "flex-shrink h-full flex items-end",
                            children: (0, s.jsxs)("div", {
                                className: "flex flex-col",
                                children: [(0, s.jsx)("p", {
                                    className: (0, p.Z)("", {
                                        "text-xs font-medium leading-snug mb-0.5": a <= 180 || L,
                                        "text-sm mb-1.5 font-medium leading-snug": a > 180
                                    }),
                                    style: {
                                        overflow: "hidden",
                                        display: "-webkit-box",
                                        WebkitLineClamp: a >= 220 ? 3 : a >= 190 ? 2 : 1,
                                        WebkitBoxOrient: "vertical"
                                    },
                                    children: E
                                }), (0, s.jsx)("p", {
                                    style: {
                                        overflow: "hidden",
                                        display: "-webkit-box",
                                        WebkitLineClamp: L ? 1 : a >= 200 ? 3 : 2,
                                        WebkitBoxOrient: "vertical"
                                    },
                                    className: (0, p.Z)("opacity-60 leading-snug", {
                                        "text-xs": a <= 180,
                                        "text-sm": a > 180
                                    }),
                                    children: I
                                })]
                            })
                        }), !f.enabled && !E && M && o && (0, s.jsx)("div", {
                            className: "flex-shrink h-full flex items-end shadow-md",
                            children: (0, s.jsx)("div", {
                                className: (0, p.Z)("flex flex-col", {}),
                                children: (0, s.jsx)("p", {
                                    className: (0, p.Z)({
                                        "text-xs leading-snug ": a <= 180 || L,
                                        "text-sm leading-snug": a > 180 && !L,
                                        "text-white leading-snug opacity-100": !E,
                                        "opacity-80": E
                                    }),
                                    style: {
                                        overflow: "hidden",
                                        display: "-webkit-box",
                                        WebkitLineClamp: a >= 200 ? 3 : L ? 1 : 2,
                                        WebkitBoxOrient: "vertical"
                                    },
                                    children: M
                                })
                            })
                        })]
                    }), (0, s.jsxs)("div", {
                        className: (0, p.Z)("top-2 left-0 absolute w-full flex z-10 text-zinc-100 justify-between opacity-0 group-hover:opacity-100 transition-opacity px-2 mb-1", {
                            "text-sm": a > 180,
                            "text-xs": a <= 180,
                            invisible: f.enabled
                        }),
                        children: [(0, s.jsx)("button", {
                            onClick: e => {
                                e.preventDefault(), e.stopPropagation(), d(l.id), P({
                                    imageId: l.id,
                                    promptId: D.id,
                                    eventSource: v,
                                    eventVariant: "card"
                                })
                            },
                            className: (0, p.Z)(" bg-zinc-900 bg-opacity-50 hover:bg-opacity-100 transition-opacity flex items-center justify-center cursor-pointer", {
                                "rounded text-lg h-8 w-8": a <= 180,
                                "text-lg h-10 w-10 rounded-lg": a > 180
                            }),
                            children: (0, s.jsx)(r.j, {})
                        }), (0, s.jsxs)("div", {
                            className: "flex flex-col space-y-2",
                            children: [(0, s.jsx)(N._, {
                                imageId: l.id,
                                imageWidth: a,
                                eventSource: v
                            }, l.id), (0, s.jsx)("button", {
                                onClick: e => {
                                    e.preventDefault(), e.stopPropagation(), m(D, l), R({
                                        imageId: l.id,
                                        promptId: D.id,
                                        eventSource: v,
                                        eventVariant: "card"
                                    })
                                },
                                className: (0, p.Z)("bg-zinc-900 bg-opacity-50 hover:bg-opacity-100 transition-opacity flex items-center justify-center cursor-pointer", {
                                    "rounded text-lg h-8 w-8": a <= 180,
                                    "text-lg h-10 w-10 rounded-lg": a > 180
                                }),
                                children: (0, s.jsx)(j.h, {})
                            })]
                        })]
                    }), l.rank && (0, s.jsx)("div", {
                        className: (0, p.Z)("absolute bottom-3 right-3 px-1 rounded bg-black text-white shadow-md text-sm", {
                            "bg-yellow-800": "popular" === l.rank,
                            "bg-red-700": "rising" === l.rank,
                            "bg-zinc-900": "new" === l.rank
                        }),
                        children: l.points
                    }), (0, s.jsx)("img", {
                        ref: i,
                        width: l.width / 1.6,
                        height: l.height / 1.6
                    })]
                })
            });
            var Z = a(1218),
                R = a(396),
                P = a(4176),
                F = a(5003),
                M = a(9179),
                E = a(5013),
                I = a(6345);
            let L = u.memo(function(e) {
                let {
                    src: t,
                    alt: a,
                    onClick: l,
                    onDelete: i,
                    ...r
                } = e, n = (0, R.Z)(t) ? "https://image.lexica.art/sm/".concat(t) : t;
                return (0, s.jsxs)("div", {
                    className: "overflow-hidden relative h-full flex group rounded-lg drop-shadow border border-zinc-800 items-center justify-center w-auto",
                    children: [(0, s.jsx)("div", {
                        id: "image-preview",
                        onClick: l,
                        className: "z-50 absolute flex items-start justify-end w-full h-full  cursor-pointer text-xl hover:bg-opacity-50 bg-opacity-0 bg-black transition-all group",
                        children: (0, s.jsx)("div", {
                            className: "group-hover:opacity-100 opacity-0 mr-1 mt-1 hover:bg-black p-1 rounded",
                            onClick: () => {
                                i && i()
                            },
                            children: (0, s.jsx)(I.W, {})
                        })
                    }), (0, s.jsx)("img", {
                        style: {
                            maxHeight: 120,
                            maxWidth: 120
                        },
                        className: "h-full w-full object-contain",
                        src: n,
                        alt: a,
                        ...r
                    })]
                })
            });
            var T = a(165),
                W = a(1396),
                U = a.n(W),
                A = a(7707),
                V = a(7904),
                q = a(3534),
                B = a(1937);

            function O(e) {
                let {
                    selection: t,
                    setSelection: l,
                    maxSelectedImages: i,
                    getPromptFromData: r,
                    showDelete: n,
                    deleteImagesMutation: c,
                    onClose: d
                } = e, x = (0, u.useRef)(null), h = (0, u.useRef)(0), g = (0, u.useRef)(0), f = (0, u.useRef)(!1), [v, b] = (0, u.useState)(0), [y, j] = (0, u.useState)(!1), [N, C] = (0, u.useState)("idle"), [S, z] = (0, u.useState)("idle"), D = (0, u.useRef)(null);
                (0, B.Z)(D, () => {
                    j(!1)
                });
                let Z = (0, u.useRef)(null),
                    R = (0, u.useRef)(null),
                    P = async () => {
                        C("pending"), x.current = Date.now();
                        let e = t.images.map(e => {
                                var t;
                                let a = r(e.promptid);
                                if (!a) return null;
                                let s = (0, k.t)(a.prompt || "", e.id, !0);
                                return {
                                    name: "lexica-download/".concat(s),
                                    url: (0, k.J)({
                                        id: e.id,
                                        size: "lg",
                                        workerFileVariant: (null === (t = a.model) || void 0 === t ? void 0 : t.includes("aperture")) ? "v2" : "v1"
                                    })
                                }
                            }).filter(e => e),
                            s = e.map(e => fetch(e.url).then(e => e.blob()).then(e => (h.current++, g.current = Math.floor(h.current / t.images.length * 100), Date.now() - x.current > 1e3 && g.current < 30 && (f.current = !0), e)));
                        R.current = setInterval(() => {
                            b(g.current)
                        }, 100);
                        try {
                            let t = await Promise.all(s),
                                l = t.map((t, a) => ({
                                    name: e[a].name,
                                    lastModified: new Date,
                                    input: t
                                })),
                                i = (await a.e(562).then(a.bind(a, 1562))).downloadZip,
                                r = await i(l).blob(),
                                n = document.createElement("a");
                            n.href = URL.createObjectURL(r), n.download = "lexica-download.zip", n.click(), n.remove();
                            let o = Date.now() - x.current;
                            setTimeout(() => {
                                C("complete"), Z.current = setTimeout(() => {
                                    C("idle")
                                }, 3e3)
                            }, Math.max(1e3 - o, 0))
                        } catch (e) {
                            console.error("error", e), setTimeout(() => {
                                C("error")
                            }, 500)
                        } finally {
                            clearInterval(R.current)
                        }
                    },
                    F = async () => {
                        z("pending"), x.current = Date.now();
                        let e = t.images.map(e => e.id);
                        try {
                            let t = async () => new Promise((t, a) => {
                                c(e, {
                                    onSuccess: () => {
                                        t(!0)
                                    },
                                    onError: e => {
                                        a(e)
                                    }
                                })
                            });
                            t();
                            let a = Date.now() - x.current;
                            setTimeout(() => {
                                z("complete"), Z.current = setTimeout(() => {
                                    j(!1), z("idle")
                                }, 3e3)
                            }, Math.max(1e3 - a, 0))
                        } catch (e) {
                            console.error("error", e), z("error")
                        }
                    };
                return (0, s.jsxs)("div", {
                    className: "fixed z-50 top-0 left-0 w-full py-3 px-6 bg-indigo-600 text-white space-y-4 sm:space-y-0 sm:flex sm:items-center sm:justify-between bg-opacity-80 backdrop-blur-lg shadow-lg",
                    children: [(0, s.jsxs)("div", {
                        children: [(0, s.jsx)("div", {
                            className: "text-xl flex items-center",
                            children: 0 === t.images.length ? (0, s.jsx)(s.Fragment, {
                                children: "Select images below"
                            }) : (0, s.jsxs)(s.Fragment, {
                                children: [t.images.length, " image", t.images.length > 1 && "s", " selected", (0, s.jsx)("button", {
                                    className: "ml-3 underline text-sm",
                                    onClick: () => {
                                        l({
                                            enabled: !0,
                                            images: []
                                        })
                                    },
                                    children: "clear"
                                })]
                            })
                        }), (0, s.jsx)("div", {
                            className: "hidden sm:block text-xs mt-1 opacity-60",
                            children: t.images.length === i ? (0, s.jsx)(s.Fragment, {
                                children: "Max selected. Download before selecting more."
                            }) : (0, s.jsx)(s.Fragment, {
                                children: "Shift + click to select multiple"
                            })
                        })]
                    }), (0, s.jsxs)("div", {
                        className: "flex items-center space-x-7",
                        children: [(0, s.jsxs)("div", {
                            className: "flex items-center space-x-3",
                            children: [(0, s.jsxs)("button", {
                                onClick: () => {
                                    P()
                                },
                                type: "button",
                                disabled: 0 === t.images.length || "pending" === N || "complete" === N,
                                className: "overflow-hidden relative min-w-[8rem] text-sm rounded-md group whitespace-nowrap flex-1 flex select-none cursor-pointer hover:brightness-110 bg-gradient-to-t from-indigo-900 via-indigo-900 to-indigo-900 drop-shadow items-center justify-center px-5 py-2.5 active:scale-95 transition-all",
                                children: ["\xa0", (0, s.jsx)("span", {
                                    className: (0, p.Z)("transition-all duration-500 w-full flex items-center justify-center space-x-2 absolute", {
                                        "translate-y-0 opacity-100": "idle" === N,
                                        "translate-y-8 opacity-0": "idle" !== N
                                    }),
                                    children: (0, s.jsx)("span", {
                                        children: "Download"
                                    })
                                }), (0, s.jsxs)("span", {
                                    className: (0, p.Z)("transition-all duration-500 w-full flex items-center justify-center space-x-2 absolute", {
                                        "-translate-y-8 opacity-0": "idle" === N,
                                        "translate-y-0 opacity-100": "pending" === N,
                                        "translate-y-8 opacity-100": "complete" === N || "error" === N
                                    }),
                                    children: [(0, s.jsx)(m.$, {
                                        size: "md"
                                    }), f.current && (0, s.jsxs)("span", {
                                        children: [Math.floor(v), "%"]
                                    })]
                                }), (0, s.jsxs)("span", {
                                    className: (0, p.Z)("transition-all duration-500 w-full flex items-center justify-center space-x-2 absolute", {
                                        "-translate-y-8 opacity-0": "complete" !== N,
                                        "translate-y-0 opacity-100": "complete" === N
                                    }),
                                    children: [(0, s.jsx)(w.m, {
                                        className: "opacity-80"
                                    }), (0, s.jsx)("span", {
                                        children: "Complete"
                                    })]
                                }), (0, s.jsx)("span", {
                                    className: (0, p.Z)("transition-all duration-500 w-full flex items-center justify-center space-x-2 absolute", {
                                        "-translate-y-8 opacity-0": "error" !== N,
                                        "translate-y-0 opacity-100": "error" === N
                                    }),
                                    children: (0, s.jsx)("span", {
                                        children: "Error. Retry?"
                                    })
                                }), "\xa0"]
                            }), n && (0, s.jsx)(s.Fragment, {
                                children: y ? (0, s.jsxs)("button", {
                                    ref: D,
                                    onClick: () => {
                                        F()
                                    },
                                    type: "button",
                                    disabled: 0 === t.images.length || "pending" === S || "complete" === S,
                                    className: "overflow-hidden relative min-w-[9rem] text-sm rounded-md group whitespace-nowrap flex-1 flex select-none cursor-pointer hover:brightness-110 bg-gradient-to-t bg-red-800 drop-shadow items-center justify-center px-5 py-2.5 active:scale-95 transition-all",
                                    children: ["\xa0", (0, s.jsx)("span", {
                                        className: (0, p.Z)("transition-all duration-500 w-full flex items-center justify-center space-x-2 absolute", {
                                            "translate-y-0 opacity-100": "idle" === S,
                                            "translate-y-8 opacity-0": "idle" !== S
                                        }),
                                        children: (0, s.jsx)("span", {
                                            children: "Confirm Delete"
                                        })
                                    }), (0, s.jsx)("span", {
                                        className: (0, p.Z)("transition-all duration-500 w-full flex items-center justify-center space-x-2 absolute", {
                                            "-translate-y-8 opacity-0": "idle" === S,
                                            "translate-y-0 opacity-100": "pending" === S,
                                            "translate-y-8 opacity-100": "complete" === S || "error" === S
                                        }),
                                        children: (0, s.jsx)(m.$, {
                                            size: "md"
                                        })
                                    }), (0, s.jsxs)("span", {
                                        className: (0, p.Z)("transition-all duration-500 w-full flex items-center justify-center space-x-2 absolute", {
                                            "-translate-y-8 opacity-0": "complete" !== S,
                                            "translate-y-0 opacity-100": "complete" === S
                                        }),
                                        children: [(0, s.jsx)(w.m, {
                                            className: "opacity-80"
                                        }), (0, s.jsx)("span", {
                                            children: "Complete"
                                        })]
                                    }), (0, s.jsx)("span", {
                                        className: (0, p.Z)("transition-all duration-500 w-full flex items-center justify-center space-x-2 absolute", {
                                            "-translate-y-8 opacity-0": "error" !== S,
                                            "translate-y-0 opacity-100": "error" === S
                                        }),
                                        children: (0, s.jsx)("span", {
                                            children: "Error. Retry?"
                                        })
                                    }), "\xa0"]
                                }, "confirm") : (0, s.jsxs)("button", {
                                    onClick: () => {
                                        j(!0)
                                    },
                                    disabled: 0 === t.images.length || "pending" === S || "complete" === S,
                                    className: "overflow-hidden relative text-sm rounded-md group whitespace-nowrap flex-1 flex select-none cursor-pointer hover:brightness-110 bg-gradient-to-t from-indigo-900 via-indigo-900 to-indigo-900 drop-shadow items-center justify-center px-3 py-2.5 active:scale-95 transition-all",
                                    children: ["\xa0", (0, s.jsx)(I.W, {}), "\xa0"]
                                })
                            })]
                        }), (0, s.jsx)("button", {
                            onClick: () => {
                                Z.current && clearTimeout(Z.current), d()
                            },
                            type: "button",
                            className: "text-sm opacity-60 hover:opacity-100 rounded-full bg-indigo-800 w-6 h-6 flex items-center justify-center absolute top-3 right-3 sm:static",
                            children: (0, s.jsx)(o.q, {})
                        })]
                    })]
                })
            }
            var Q = a(6521),
                G = a(2749);
            let Y = e => {
                    var t, o, y, j, w, N, k, I, W, B, Y;
                    let {
                        initialSearchTerm: K = "",
                        initialSearchMode: J = "images",
                        initialSource: $ = "search",
                        initialPrompts: X,
                        showDiscord: ee = !1
                    } = e, {
                        data: et,
                        status: ea
                    } = (0, G.useSession)(), es = (0, x.useRouter)(), el = (0, x.usePathname)(), ei = (0, T.NL)(), er = (0, d.iP)(), en = er.width && er.width < 768, eo = (0, u.useMemo)(() => (0, R.Z)(K), [K]), [ec, ed] = (0, u.useState)(eo ? "" : K), [eu, em] = (0, u.useState)(K), [ep, ex] = (0, u.useState)(!1), [eh, eg] = (0, u.useState)(J), [ef, ev] = (0, u.useState)("lexica-aperture-v2"), [eb, ey] = (0, u.useState)(!1), [ej, ew] = (0, u.useState)(""), [eN, ek] = (0, u.useState)({
                        enabled: !1,
                        images: []
                    }), eC = "search" !== $ || eu ? $ : "home", [eS, ez] = (0, u.useState)(null), eD = (0, V.useApertureState)(), [eZ, {
                        filesContent: eR,
                        loading: eP,
                        errors: eF,
                        clear: eM
                    }] = (0, M.s)({
                        readAs: "DataURL",
                        accept: "image/*",
                        multiple: !1,
                        limitFilesConfig: {
                            max: 1
                        },
                        maxFileSize: 100
                    }), eE = (0, u.useCallback)(async e => {
                        let t = await (await fetch(e)).blob();
                        try {
                            let e = (await a.e(536).then(a.bind(a, 2536))).default(t, {
                                maxSizeMB: .1,
                                maxWidthOrHeight: 400,
                                useWebWorker: !0
                            });
                            return e
                        } catch (e) {
                            return console.log("Could not compress"), t
                        }
                    }, []);
                    (0, u.useEffect)(() => {
                        0 === eR.length || ej || (ey(!0), z.Z.post("/api/get-upload-url").then(e => {
                            if (e.data.error) ey(!1), eM(), ew("");
                            else {
                                var t;
                                let a = new FormData;
                                eE(null === (t = eR[0]) || void 0 === t ? void 0 : t.content).then(t => {
                                    a.append("file", t), console.log("Uploading..."), z.Z.post(e.data.uploadURL, a, {
                                        headers: {
                                            "Content-Type": "multipart/form-data"
                                        }
                                    }).then(e => {
                                        if (e.data.success) {
                                            let t = e.data.result.variants.find(e => -1 !== e.indexOf("tiny")) + "?type=.jpg";
                                            ew(t), em(t), ed(""), ey(!1)
                                        }
                                    }).catch(() => {
                                        ey(!1)
                                    })
                                }).catch(() => {
                                    ey(!1)
                                })
                            }
                        }).catch(() => {
                            ey(!1)
                        }))
                    }, [eM, eR, eE, ey]);
                    let eI = async e => {
                            var t, a;
                            let {
                                pageParam: s = 0
                            } = e, l = {
                                text: eu,
                                searchMode: eh,
                                source: $,
                                cursor: s,
                                firstRequestDate: s > 0 ? null === (a = eT.data) || void 0 === a ? void 0 : null === (t = a.pages[0]) || void 0 === t ? void 0 : t.firstRequestDate : void 0,
                                model: ef
                            }, i = await z.Z.post("/api/infinite-prompts", l);
                            return i.data
                        },
                        eL = (0, u.useMemo)(() => ["prompts.infinitePrompts", "search" === $ ? {
                            text: eu,
                            searchMode: eh,
                            source: $,
                            model: ef
                        } : "history" === $ ? {
                            text: eu,
                            source: $
                        } : {
                            source: $
                        }], [eu, eh, $, ef]),
                        eT = (0, A.N)({
                            queryKey: eL,
                            initialData: X && K === eu && J === eh && "lexica-aperture-v2" === ef ? {
                                pages: [X],
                                pageParams: [null]
                            } : void 0,
                            queryFn: eI,
                            getNextPageParam: e => e.nextCursor,
                            retryDelay: 0,
                            structuralSharing: !0,
                            refetchOnWindowFocus: !1,
                            refetchOnReconnect: !1,
                            ...("search" === $ || "aperture-feed" === $) && {
                                refetchOnMount: !1,
                                staleTime: 1 / 0
                            },
                            onSuccess: e => {
                                let t = e.pages[e.pages.length - 1],
                                    a = 0 === t.images.length && t.nextCursor;
                                a && (console.log("Empty page. Auto-fetching next."), eT.fetchNextPage())
                            }
                        }),
                        eW = (0, u.useCallback)(async () => {
                            await eT.refetch({
                                refetchPage: (e, t) => 0 === t
                            }), ei.setQueryData(eL, e => ({
                                pages: e.pages.slice(0, 1),
                                pageParams: e.pageParams.slice(0, 1)
                            }))
                        }, [eT, ei, eL]),
                        eU = (0, u.useCallback)(e => {
                            let t = e.trim(),
                                a = new URLSearchParams({
                                    q: t
                                }),
                                s = t ? "/?".concat(a) : "/";
                            if ("/" !== el) {
                                es.push(s);
                                return
                            }
                            ew(""), eM(), window.history.pushState({}, "", s), window.scrollTo(0, 0), ez(null), t === eu ? eW() : (em(t), (0, R.Z)(t) ? ed("") : ed(t))
                        }, [eu, eM, el, es, eW]),
                        eA = (0, u.useCallback)(e => {
                            let t = e.trim(),
                                a = new URLSearchParams({
                                    q: t
                                }),
                                s = t ? "/history?".concat(a) : "/history";
                            window.history.pushState({}, "", s), window.scrollTo(0, 0), em(t)
                        }, []);
                    (0, u.useCallback)(e => {
                        let t = new URLSearchParams(e.split("?")[1]),
                            a = t.get("q") || "";
                        a = a.trim(), ep && a !== eu && !ej && 0 === eR.length && ((0, R.Z)(a) ? ed("") : ed(a), em(a))
                    }, [ep, eu, ej, eR.length]);
                    let eV = eT.isFetched && !eT.isLoading && eT.data && eT.data.pages && (null === (o = eT.data) || void 0 === o ? void 0 : null === (t = o.pages[0]) || void 0 === t ? void 0 : t.images.length) === 0 && (null === (j = eT.data) || void 0 === j ? void 0 : null === (y = j.pages[0]) || void 0 === y ? void 0 : y.nextCursor) === null,
                        {
                            mutate: eq
                        } = (0, S.D)({
                            mutationFn: async e => z.Z.post("/api/expand-image", e)
                        }),
                        eB = (0, u.useCallback)(e => {
                            let {
                                imageId: t,
                                promptId: a,
                                size: s
                            } = e;
                            eq({
                                promptId: a,
                                imageId: t,
                                eventSource: eC
                            }), ez({
                                initialImageId: t,
                                promptId: a,
                                placeholderSize: s
                            });
                            let l = new URL(window.location.href);
                            l.searchParams.set("prompt", a), window.history.pushState({}, "", l)
                        }, [eq, eC]),
                        {
                            numColumns: eO,
                            setNumColumns: eQ
                        } = (0, V.useNumColumns)();
                    (0, u.useEffect)(() => {
                        if (!ep) {
                            ex(!0);
                            let e = document.getElementById("main-search"),
                                t = document.documentElement.clientWidth;
                            e && t > 768 && e.focus()
                        }
                        if (!eO) {
                            let e = window.innerWidth,
                                t = Math.floor(e / 250);
                            e % 250 / 250 > .5 ? eQ(Math.max(2, t + 1)) : eQ(Math.max(2, t))
                        }
                    }, [ep, eO, eQ]);
                    let {
                        mutate: eG
                    } = (0, S.D)({
                        mutationFn: async e => z.Z.post("/api/images/delete", {
                            ids: e
                        }).then(e => e.data),
                        onMutate: async e => {
                            let t = ei.getQueryState(eL),
                                a = (null == t ? void 0 : t.fetchStatus) === "fetching";
                            a && await ei.cancelQueries({
                                queryKey: eL
                            });
                            let s = ei.getQueryData(eL),
                                l = {};
                            for (let t of e) l[t] = !0;
                            return s && ei.setQueryData(eL, t => t ? { ...t,
                                pages: t.pages.map(t => ({ ...t,
                                    images: t.images.filter(e => !l[e.id]),
                                    prompts: t.prompts.map(e => ({ ...e,
                                        images: e.images.filter(e => !l[e.id])
                                    })).filter(e => e.images.length > 0),
                                    count: t.count && t.count - e.length > 0 ? t.count - e.length : 0
                                }))
                            } : {
                                pages: [],
                                pageParams: []
                            }), eN.enabled && ek({
                                enabled: !0,
                                images: []
                            }), eD.setState("imageRows", e => e.map(e => ({ ...e,
                                images: e.images.filter(e => !l[e.id])
                            })).filter(e => e.images.length > 0)), {
                                previousData: s,
                                previousImageRows: eD.imageRows,
                                previousSelection: eN,
                                didCancelQuery: a
                            }
                        },
                        onError: (e, t, a) => {
                            (null == a ? void 0 : a.previousData) && ei.setQueryData(eL, a.previousData), (null == a ? void 0 : a.previousImageRows) && eD.setState("imageRows", a.previousImageRows), (null == a ? void 0 : a.previousSelection.images) && ek(e => ({
                                enabled: e.enabled,
                                images: e.enabled ? a.previousSelection.images : []
                            }))
                        },
                        onSettled: (e, t, a, s) => {
                            (null == s ? void 0 : s.didCancelQuery) && ei.invalidateQueries(eL)
                        }
                    }), eY = (0, u.useCallback)(e => {
                        var t;
                        for (let a of (null === (t = eT.data) || void 0 === t ? void 0 : t.pages) || []) {
                            let t = a.prompts.find(t => t.id === e);
                            if (t) return t
                        }
                    }, [null === (w = eT.data) || void 0 === w ? void 0 : w.pages]), e_ = (0, u.useMemo)(() => (null == eS ? void 0 : eS.promptId) ? eY(null == eS ? void 0 : eS.promptId) : null, [eS, eY]), eH = (0, u.useCallback)((e, t) => {
                        let a = e.prompt || "";
                        a = (a = (a = a.replace(/[\(\)]/g, "")).replace(/\s{2,}/g, " ")).trim(), eD.setState("prompt", a), eD.setState("negativePrompt", e.negativePrompt || ""), eD.setState("guidanceScale", 7);
                        let s = (0, q.j)(e, [t]);
                        eD.setState("imageRows", [{
                            images: s.images,
                            prompt: s.prompt
                        }, ...eD.imageRows]), es.push("/aperture")
                    }, [eD, es]), eK = (0, u.useCallback)(e => {
                        eg("images"), eU(e)
                    }, [eU]), eJ = (0, u.useCallback)(() => {
                        let e = new URL(window.location.href);
                        e.searchParams.delete("prompt"), window.history.pushState({}, "", e), ez(null)
                    }, []), e$ = (0, u.useCallback)(e => {
                        let t = e.target,
                            a = "INPUT" === t.tagName || "TEXTAREA" === t.tagName;
                        "Escape" !== e.key || a || eJ()
                    }, [eJ]);
                    (0, u.useEffect)(() => (document.addEventListener("keydown", e$, !1), () => {
                        document.removeEventListener("keydown", e$, !1)
                    }), [e$]);
                    let eX = (0, u.useRef)(!1),
                        e0 = (0, u.useCallback)(async (e, t, a) => {
                            eT.isFetchingNextPage || !eT.hasNextPage || eX.current || (eX.current = !0, await eT.fetchNextPage().finally(() => {
                                eX.current = !1
                            }))
                        }, [eT]),
                        e1 = (0, g.z)(e0, {
                            isItemLoaded: (e, t) => !!t[e]
                        }),
                        [e2, e5] = (0, u.useState)(!1),
                        [e8] = (0, P.u)(),
                        [e4] = (0, P.u)(),
                        e3 = (0, u.useMemo)(() => {
                            var e, t;
                            let a = [];
                            for (let s of (null === (e = eT.data) || void 0 === e ? void 0 : e.pages) || [])
                                for (let e of (null == s ? void 0 : s.images) || []) {
                                    let l = s.prompts.find(t => t.id === (null == e ? void 0 : e.promptid));
                                    a.push({ ...e,
                                        prompt: null !== (t = null == l ? void 0 : l.prompt) && void 0 !== t ? t : "",
                                        grid: !!(null == l ? void 0 : l.grid)
                                    })
                                }
                            return a
                        }, [eT.data]),
                        e7 = (0, E.Z)(e3),
                        e6 = (0, u.useRef)(0),
                        e9 = (0, u.useMemo)(() => {
                            if (e7)
                                for (let t = 0; t < e7.length; t++) {
                                    var e;
                                    if (e7[t].id !== (null === (e = e3[t]) || void 0 === e ? void 0 : e.id)) return e6.current + 1
                                }
                            return e6.current
                        }, [e3, e7]);
                    (0, u.useEffect)(() => {
                        e6.current = e9
                    }, [e9]);
                    let te = (0, u.useCallback)((e, t) => {
                            let a = [],
                                s = e3.findIndex(t => t.id === e.id);
                            if (t) {
                                let e = -1;
                                for (let t = 0; t < s; t++) eN.images.find(e => e.id === e3[t].id) && (e = t);
                                if (e >= 0)
                                    for (let t = e + 1; t < s; t++) a.push(e3[t])
                            }
                            a.push(e), ek(e => ({
                                enabled: !0,
                                images: [...e.images, ...a].slice(0, 1e3)
                            }))
                        }, [eN, ek, e3, 1e3]),
                        tt = (0, u.useCallback)(e => {
                            ek(t => ({ ...t,
                                images: t.images.filter(t => t.id !== e.id)
                            }))
                        }, [ek]);
                    return (0, s.jsxs)("div", {
                        className: "w-screen overflow-x-hidden flex flex-col bg-zinc-800 text-gray-100 text-sm",
                        children: [eS && e_ && (0, s.jsx)(_, {
                            onClose: eJ,
                            children: (0, s.jsx)(h.N, {
                                onExploreClick: eK,
                                initialImageId: eS.initialImageId,
                                prompt: e_,
                                placeholderSize: eS.placeholderSize,
                                variant: "modal-item",
                                onTagClick: eU,
                                onGenerateClick: eH,
                                onDeleteClick: e => {
                                    1 === e_.images.length && eJ(), eG([e])
                                },
                                eventSource: eC
                            }, "".concat(e_.id, "-").concat(eS.initialImageId))
                        }), (0, s.jsxs)("div", {
                            className: "absolute sm:hidden w-full flex items-center justify-end top-2",
                            children: [!et && "unauthenticated" === ea && (0, s.jsx)(Q.LoginMenu, {}), et && (0, s.jsx)(Q.AccountButton, {})]
                        }), eN.enabled && (0, s.jsx)(O, {
                            selection: eN,
                            setSelection: ek,
                            maxSelectedImages: 1e3,
                            getPromptFromData: eY,
                            showDelete: "/history" === el,
                            deleteImagesMutation: eG,
                            onClose: () => {
                                ek({
                                    enabled: !1,
                                    images: []
                                })
                            }
                        }), (0, s.jsxs)("div", {
                            className: "flex flex-col items-center py-4 mt-16",
                            children: ["/likes" === el && (0, s.jsx)("div", {
                                className: "text-7xl mb-12 font-logo font-bold mt-0 ",
                                children: "Likes"
                            }), "/feed" === el && (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)("div", {
                                    className: "text-7xl mb-12 font-logo font-bold mt-0 ",
                                    children: "Aperture"
                                }), (0, s.jsx)("div", {
                                    className: "text-sm -mt-3 max-w-sm text-center text-zinc-300 mb-6",
                                    children: "Aperture is a new model from Lexica that can generate photorealistic images."
                                }), (0, s.jsx)(U(), {
                                    href: "/aperture",
                                    children: (0, s.jsx)("button", {
                                        className: "mb-4 px-8 py-2 text-md rounded-lg bg-zinc-700 border border-zinc-600 transition-all active:scale-95 hover:brightness-105",
                                        children: "Try Aperture now"
                                    })
                                })]
                            }), "/history" === el && (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)(U(), {
                                    onClick: e => {
                                        eu && (em(""), ed(""), eA(""))
                                    },
                                    className: "text-5xl sm:text-6xl md:text-7xl mb-8 font-logo font-bold mt-0 text-center",
                                    href: "/history",
                                    children: "Camera Roll"
                                }), (0, s.jsx)("div", {
                                    className: "flex items-center w-full max-w-[500px] px-4 pl-5 md:px-5",
                                    children: (0, s.jsxs)("div", {
                                        className: "w-full flex items-center relative",
                                        ref: e4,
                                        children: [(0, s.jsx)(r.j, {
                                            className: "absolute left-4 pointer-events-none"
                                        }), (0, s.jsx)("input", {
                                            id: "main-search",
                                            autoComplete: "off",
                                            value: ec,
                                            onChange: e => ed(e.target.value),
                                            onKeyDown: e => {
                                                "Enter" === e.key && (eA(ec), e.currentTarget.blur())
                                            },
                                            className: "bg-zinc-700 flex-1 pl-12 pr-12 rounded-full text-sm px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-indigo-700",
                                            placeholder: "Search your images"
                                        })]
                                    })
                                }), (0, s.jsx)("div", {
                                    className: "mb-8",
                                    children: (0, s.jsx)("button", {
                                        onClick: () => {
                                            eA(ec)
                                        },
                                        className: (0, p.Z)("w-32 sm:w-36 flex items-center text-xs justify-center text-center  h-9 rounded-full  hover:brightness-110 bg-opacity-0 shadow-sm  mt-4 bg-gradient-to-t from-indigo-900 via-indigo-900 to-indigo-800"),
                                        children: eT.isFetching && !eT.isFetchingNextPage ? (0, s.jsx)(m.$, {
                                            size: "md"
                                        }) : "Search"
                                    })
                                })]
                            }), "/" === el && (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)(U(), {
                                    onClick: e => {
                                        (0, C.gs)(e) || (e.preventDefault(), eU(""))
                                    },
                                    href: "/",
                                    children: (0, s.jsx)(l.hg, {
                                        className: "h-16 m-4"
                                    })
                                }), ee && (0, s.jsx)("a", {
                                    href: "https://discord.gg/bMHBjJ9wRh",
                                    rel: "noopener noreferrer",
                                    target: "_blank",
                                    className: "p-0 mt-3",
                                    children: (0, s.jsxs)("button", {
                                        className: "h-8 px-3 flex text-xs rounded-lg select-none  items-center justify-center opacity-50 hover:opacity-90 hover:bg-zinc-600 border border-zinc-700",
                                        children: [(0, s.jsx)(c.M, {
                                            className: "text-base mr-2"
                                        }), " Join the Discord"]
                                    })
                                }), (0, s.jsxs)("div", {
                                    className: "flex items-center w-full max-w-[600px] md:ml-[48px] mt-8 px-4 pl-5 md:px-5",
                                    children: [(0, s.jsx)("div", {
                                        className: "w-full",
                                        children: (0, s.jsxs)("div", {
                                            className: "w-full flex items-center relative",
                                            ref: e4,
                                            children: [(0, s.jsx)(r.j, {
                                                className: "absolute left-4 pointer-events-none"
                                            }), (0, s.jsx)("input", {
                                                id: "main-search",
                                                autoComplete: "off",
                                                value: ec,
                                                onChange: e => ed(e.target.value),
                                                onKeyDown: e => {
                                                    "Enter" === e.key && (eU(ec), e.currentTarget.blur())
                                                },
                                                className: "bg-zinc-700 flex-1 pl-12 pr-12 rounded-full text-sm px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-indigo-700",
                                                placeholder: "Search for an image"
                                            }), (0, s.jsx)(F.u, {
                                                label: "Upload an image for reverse image search.",
                                                children: (0, s.jsx)("button", {
                                                    onClick: () => {
                                                        ew(""), eZ()
                                                    },
                                                    className: "text-base absolute right-2 hover:bg-zinc-800 h-8 w-8 flex items-center justify-center rounded-full",
                                                    children: (0, s.jsx)(i.L, {})
                                                })
                                            })]
                                        })
                                    }), (0, s.jsx)("div", {
                                        className: "flex justify-center",
                                        children: (0, s.jsx)("button", {
                                            onClick: () => e5(!e2),
                                            className: (0, p.Z)("ml-2 h-10 w-10 rounded-full cursor-pointer flex items-center justify-center ", {
                                                "bg-transparent hover:bg-zinc-900": !e2,
                                                "bg-zinc-900": e2
                                            }),
                                            children: (0, s.jsx)(n.N, {})
                                        })
                                    })]
                                }), (0, s.jsx)("div", {
                                    className: "flex w-full max-w-[600px] md:ml-[48px] px-4 pl-5 md:px-5",
                                    ref: e8,
                                    children: e2 && (0, s.jsx)("div", {
                                        className: "w-full flex flex-col items-center",
                                        children: (0, s.jsxs)("div", {
                                            className: "w-full px-3 pt-3 flex space-x-1 items-center justify-center pr-12",
                                            children: ["sd-1.5" === ef && (0, s.jsx)(Z.L, {
                                                placeholder: "Select search mode...",
                                                values: [{
                                                    label: "Search by image relevancy",
                                                    value: "images"
                                                }, {
                                                    label: "Search by prompt text",
                                                    value: "prompts"
                                                }],
                                                onChange: e => {
                                                    eg(e)
                                                },
                                                selectedValue: eh
                                            }), (0, s.jsx)(Z.L, {
                                                placeholder: "Select model...",
                                                values: [{
                                                    label: "Lexica Aperture",
                                                    value: "lexica-aperture-v2"
                                                }, {
                                                    label: "Stable Diffusion 1.5",
                                                    value: "sd-1.5"
                                                }],
                                                onChange: e => {
                                                    ev(e)
                                                },
                                                selectedValue: ef
                                            })]
                                        })
                                    })
                                }), eF.length > 0 && (0, s.jsxs)("div", {
                                    className: " font-medium my-4 ",
                                    children: [(0, s.jsx)("div", {
                                        children: eF[0].fileSizeToolarge && "Maximum file size is 100 MB."
                                    }), (0, s.jsx)("div", {
                                        children: eF[0].readerError && "Problem occured while reading file."
                                    })]
                                }), eR.map((e, t) => {
                                    var a, l;
                                    return (0, s.jsx)("div", {
                                        className: "mt-4 mb-2",
                                        children: (0, s.jsx)(L, {
                                            src: null === (a = eR[0]) || void 0 === a ? void 0 : a.content,
                                            alt: null === (l = eR[0]) || void 0 === l ? void 0 : l.name,
                                            onClick: e => {
                                                e.target === e.currentTarget && (em(ej), ed(""), eT.remove())
                                            },
                                            onDelete: () => {
                                                eM(), ew("")
                                            }
                                        })
                                    }, t)
                                }), (0, s.jsx)("div", {
                                    className: " mb-8 flex flex-col items-center",
                                    children: (0, s.jsxs)("div", {
                                        className: "flex space-x-2",
                                        children: [(0, s.jsx)("button", {
                                            onClick: () => {
                                                eU(ec)
                                            },
                                            className: (0, p.Z)("w-32 sm:w-36 flex items-center text-xs justify-center text-center  h-9 rounded-full  hover:brightness-110 bg-opacity-0 shadow-sm  mt-4 bg-gradient-to-t from-indigo-900 via-indigo-900 to-indigo-800"),
                                            children: eT.isFetching && !eT.isFetchingNextPage || eb || eP ? (0, s.jsx)(m.$, {
                                                size: "md"
                                            }) : "Search"
                                        }), (0, s.jsx)(U(), {
                                            href: "/aperture",
                                            children: (0, s.jsx)("button", {
                                                className: (0, p.Z)("w-32 sm:w-36 flex items-center text-xs justify-center text-center  h-9 rounded-full  hover:brightness-110 bg-opacity-0 shadow-sm  mt-4 border border-gray-700 hover:bg-zinc-700"),
                                                children: "Generate"
                                            })
                                        })]
                                    })
                                })]
                            }), ep && (0, s.jsxs)("div", {
                                className: "mt-2 hover:opacity-100 opacity-50 transition-all",
                                children: [(0, s.jsxs)("div", {
                                    className: "text-center text-xs opacity-50",
                                    children: ["Columns: ", eO]
                                }), (0, s.jsx)(v.ZP, {
                                    sx: {
                                        color: "white",
                                        opacity: .8
                                    },
                                    style: {
                                        width: 250
                                    },
                                    "aria-label": "Columns",
                                    defaultValue: null != eO ? eO : 4,
                                    getAriaValueText: () => "Columns",
                                    valueLabelDisplay: "auto",
                                    step: 1,
                                    value: null != eO ? eO : 4,
                                    onChange: (e, t) => {
                                        eQ(t)
                                    },
                                    min: 1,
                                    max: en ? 4 : 12
                                })]
                            }), eT.isSuccess && eT.data.pages && (null === (N = eT.data.pages[0]) || void 0 === N ? void 0 : N.count) && (0, s.jsxs)("div", {
                                className: "text-center text-sm mt-4 opacity-80 space-y-1.5 sm:flex sm:space-y-0 sm:space-x-5",
                                children: [(0, s.jsxs)("div", {
                                    children: ["Showing ", null === (W = eT.data) || void 0 === W ? void 0 : null === (I = W.pages[0]) || void 0 === I ? void 0 : null === (k = I.count) || void 0 === k ? void 0 : k.toLocaleString(), " result", (null === (Y = eT.data) || void 0 === Y ? void 0 : null === (B = Y.pages[0]) || void 0 === B ? void 0 : B.count) === 1 ? "" : "s"]
                                }), ("/history" === el || "/likes" === el) && e3.length && (0, s.jsx)("button", {
                                    className: "opacity-50 hover:opacity-100",
                                    onClick: () => {
                                        ek(e => ({ ...e,
                                            enabled: !e.enabled
                                        }))
                                    },
                                    children: "Select Multiple"
                                })]
                            }), (0, s.jsx)("div", {
                                className: "mt-2",
                                children: "\xa0"
                            }), eV && (0, s.jsx)("div", {
                                className: "text-center px-10 text-sm mt-4 text-zinc-400",
                                children: (0, s.jsxs)("p", {
                                    children: ["/" === el && (0, s.jsx)(s.Fragment, {
                                        children: "No results found. Try switching the search mode."
                                    }), "/history" === el && (0, s.jsx)(s.Fragment, {
                                        children: eu ? (0, s.jsx)(s.Fragment, {
                                            children: "No results found."
                                        }) : (0, s.jsxs)(s.Fragment, {
                                            children: ["Your camera roll is empty. Go", " ", (0, s.jsx)(U(), {
                                                href: "/aperture",
                                                className: "underline",
                                                children: "generate an image"
                                            }), "."]
                                        })
                                    }), "/likes" === el && (0, s.jsx)(s.Fragment, {
                                        children: "You haven't liked any images yet."
                                    })]
                                })
                            }), (0, s.jsx)(H, {
                                children: (0, s.jsx)(b.Provider, {
                                    value: {
                                        onImageClick: eB,
                                        onSearch: eK,
                                        onGenerateClick: eH,
                                        onGetPrompt: eY,
                                        onSelect: te,
                                        onUnselect: tt,
                                        selection: eN,
                                        eventSource: eC
                                    },
                                    children: (0, s.jsx)("div", {
                                        className: "w-full mt-4 px-1 relative",
                                        children: ep && (0, s.jsx)(f.R, {
                                            className: "active:outline-none focus:outline-none",
                                            itemHeightEstimate: window.innerWidth / (null != eO ? eO : 4),
                                            overscanBy: 2,
                                            onRender: e1,
                                            items: e3,
                                            render: D,
                                            columnCount: null != eO ? eO : 4
                                        }, e9)
                                    })
                                })
                            })]
                        })]
                    })
                },
                _ = e => {
                    let {
                        children: t,
                        onClose: a
                    } = e, l = (0, d.iP)(), i = l.width && l.width < 768;
                    return (0, s.jsxs)("div", {
                        id: "fullscreen-modal-overlay",
                        onClick: e => {
                            "fullscreen-modal-overlay" === e.target.id && a()
                        },
                        className: "fixed inset-0 w-screen h-screen overflow-hidden px-16 py-8 flex justify-center z-40 sm:z-50 bg-zinc-900 bg-opacity-80",
                        style: {
                            overscrollBehavior: "contain",
                            minHeight: "-webkit-fill-available"
                        },
                        children: [(0, s.jsx)("style", {
                            children: "\n          body {\n            overflow-y: hidden !important;\n          }\n        "
                        }), (0, s.jsx)("div", {
                            onClick: () => a(),
                            className: "absolute top-0 left-0 cursor-pointer h-12 w-12 flex items-center justify-center text-4xl drop-shadow",
                            children: (0, s.jsx)(o.q, {})
                        }), (0, s.jsx)("div", {
                            style: { ...i ? {
                                    minHeight: "calc(100dvh - 32px)",
                                    minWidth: "calc(100vw)",
                                    marginTop: 24
                                } : {
                                    maxHeight: "calc(100dvh - 64px)",
                                    maxWidth: "calc(100vw - 64px)"
                                },
                                height: "100%",
                                overflowY: "auto"
                            },
                            className: "flex flex-col bg-zinc-800 drop-shadow-xl overflow-hidden rounded-xl border border-zinc-700 box-content",
                            children: t
                        })]
                    })
                };
            class H extends u.Component {
                static getDerivedStateFromError(e) {
                    return {
                        hasError: !0
                    }
                }
                componentDidCatch(e, t) {
                    console.error(e, t), window.location.reload()
                }
                render() {
                    return this.state.hasError ? null : this.props.children
                }
                constructor(...e) {
                    super(...e), this.state = {
                        hasError: !1
                    }
                }
            }
        },
        5003: function(e, t, a) {
            "use strict";
            a.d(t, {
                u: function() {
                    return c
                }
            });
            var s = a(7437),
                l = a(8567),
                i = a(2791);
            let r = (0, i.F4)({
                    "0%": {
                        opacity: 0,
                        transform: "translateY(-5px) scale(0.95)"
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translateY(0) scale(1)"
                    }
                }),
                n = (0, i.F4)({
                    "0%": {
                        opacity: 0,
                        transform: "translateY(5px) scale(0.95)"
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translateY(0) scale(1)"
                    }
                }),
                o = (0, i.zo)(l.VY, {
                    animationDuration: "0.15s",
                    '&[data-side="top"]': {
                        animationName: n
                    },
                    '&[data-side="bottom"]': {
                        animationName: r
                    },
                    maxWidth: 230
                }),
                c = e => {
                    let {
                        children: t,
                        label: a
                    } = e;
                    return a ? (0, s.jsxs)(l.fC, {
                        delayDuration: 500,
                        children: [(0, s.jsx)(l.xz, {
                            asChild: !0,
                            children: t
                        }), (0, s.jsx)(l.h_, {
                            children: (0, s.jsxs)(o, {
                                className: "bg-zinc-900 text-sm px-4 py-2 rounded-lg drop-shadow-md z-50",
                                children: [a, (0, s.jsx)(l.Eh, {
                                    fill: "rgb(24 24 27)"
                                })]
                            })
                        })]
                    }) : (0, s.jsx)(s.Fragment, {
                        children: t
                    })
                }
        }
    }
]);