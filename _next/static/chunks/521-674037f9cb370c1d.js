"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [521], {
        6521: function(e, t, n) {
            n.r(t), n.d(t, {
                AccountButton: function() {
                    return V
                },
                LoginMenu: function() {
                    return k
                },
                TopNav: function() {
                    return Z
                }
            });
            var i = n(7437),
                s = n(2167),
                r = n(7870),
                l = n(2749),
                o = n(4033),
                a = n(2265),
                d = n(1567),
                c = n(4111),
                C = n(7904),
                u = n(9089),
                h = n(5851),
                m = n(1513),
                x = n(5472),
                f = n(2766),
                p = n(7876),
                g = n(3265),
                v = n(4719),
                b = n(7042),
                j = n(5050),
                w = n(8712),
                y = n(1396),
                N = n.n(y),
                H = n(9222),
                M = n(8411);
            let z = [{
                    name: "Home",
                    path: "/",
                    icon: m.m
                }, {
                    name: "Generate",
                    path: "/aperture",
                    icon: u.R
                }, {
                    name: "History",
                    path: "/history",
                    icon: g.M
                }, {
                    name: "Likes",
                    path: "/likes",
                    icon: h.$
                }, {
                    name: "Account",
                    path: "/account",
                    icon: x.n
                }],
                L = z.map(e => ({
                    name: e.name,
                    path: e.path,
                    width: Math.max(80, 10 * e.name.length),
                    icon: e.icon
                })),
                Z = e => {
                    let {
                        colorScheme: t = "dark"
                    } = e, [n, u] = (0, a.useState)(null), [h, m] = (0, a.useState)(!0), x = (0, o.usePathname)(), f = (0, o.useRouter)(), p = z.find(e => e.path === x), {
                        data: g,
                        status: j
                    } = (0, l.useSession)(), w = (0, C.useApertureState)(), y = (0, v.iP)(), H = (null == y ? void 0 : y.width) && (null == y ? void 0 : y.width) < 640, M = "dark" === t && "/careers" !== x;
                    return (0, i.jsxs)("div", {
                        className: (0, b.Z)("fixed bottom-0 sm:top-0 z-50 flex flex-row items-center justify-between  backdrop-blur bg-opacity-80 border-t  sm:border-t-0 sm:border-b border-opacity-50  text-sm select-none", {
                            "bg-zinc-900 border-t-zinc-700 sm:border-b-zinc-700": M,
                            "bg-[#FFFDF0] border-t-stone-300 sm:border-b-stone-300": !M
                        }),
                        style: {
                            height: 56,
                            width: "100vw"
                        },
                        children: [(0, i.jsx)(s.M, {
                            children: w.pendingGenerations.length && !w.progressBarInView && (0, i.jsxs)(r.E.div, {
                                onClick: () => {
                                    (null == p ? void 0 : p.path) === "/aperture" ? window.scrollTo(0, 0): f.push("/aperture")
                                },
                                transition: {
                                    type: "spring",
                                    stiffness: 1e3,
                                    damping: 50
                                },
                                initial: {
                                    opacity: 0,
                                    y: -5
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                exit: {
                                    opacity: 0,
                                    y: -5
                                },
                                className: (0, b.Z)("absolute cursor-pointer -top-16 sm:top-16 right-4 sm:right-8  bg-opacity-90 backdrop-blur-lg rounded-md px-4 py-2 z-20 text-sm w-64 shadow-md pb-3", {
                                    "bg-zinc-900 border border-zinc-800": M,
                                    "bg-stone-100 border border-stone-200": !M
                                }),
                                children: [(0, i.jsxs)("div", {
                                    className: "text-sm mb-2 opacity-60",
                                    children: [w.pendingGenerations.length > 1 ? (0, i.jsxs)(i.Fragment, {
                                        children: [w.pendingGenerations.length, " jobs"]
                                    }) : (0, i.jsx)(i.Fragment, {
                                        children: "Job"
                                    }), " ", "in progress..."]
                                }), (0, i.jsx)(c.k, {
                                    height: 3,
                                    max: 98,
                                    duration: w.pendingGenerations[0].estimatedTime,
                                    startTime: w.pendingGenerations[0].createdAt
                                })]
                            }, "generating-parent")
                        }), (0, i.jsxs)("div", {
                            onClick: () => {
                                "/" === x ? window.location.href = "/" : f.push("/")
                            },
                            className: "hidden sm:flex items-center cursor-pointer px-4 pl-6 left-0 h-full w-32 ",
                            children: [M && (0, i.jsx)(d.hg, {
                                className: "h-5 md:h-5 "
                            }), !M && (0, i.jsx)(d.vM, {
                                className: "h-5 md:h-5 text-zinc-900"
                            })]
                        }, "navbar"), (0, i.jsxs)("div", {
                            onMouseOver: () => m(!0),
                            onMouseLeave: () => m(!1),
                            className: "flex relative items-center h-full -mt-1 w-full sm:w-auto",
                            children: [(0, i.jsx)(r.E.div, {
                                transition: {
                                    type: "spring",
                                    stiffness: 1e3,
                                    damping: 50
                                },
                                animate: {
                                    x: n ? L.slice(0, z.findIndex(e => e.name === n)).reduce((e, t) => e + t.width, 0) : 0,
                                    width: n ? L.find(e => e.name === n).width : 0,
                                    opacity: h ? 1 : 0
                                },
                                style: {
                                    height: 32,
                                    top: 15,
                                    display: H ? "none" : "absolute"
                                },
                                className: (0, b.Z)("absolute  rounded", {
                                    "bg-zinc-700": M,
                                    "bg-stone-300": !M
                                })
                            }), L.map((e, t) => {
                                let s = (null == p ? void 0 : p.path) === e.path,
                                    r = h && n === e.name;
                                return (0, i.jsxs)(N(), {
                                    href: e.path,
                                    onClick: t => {
                                        let n = (null == p ? void 0 : p.path) === e.path;
                                        n && (t.preventDefault(), window.scrollTo(0, 0))
                                    },
                                    onMouseOver: () => u(e.name),
                                    className: "flex flex-row items-center cursor-pointer h-full py-1.5 pb-0 px-2 justify-center transition-all flex-1",
                                    style: {
                                        width: H ? void 0 : e.width,
                                        zIndex: 2,
                                        opacity: s || r ? 1 : .5
                                    },
                                    children: [(0, i.jsxs)("div", {
                                        className: "relative sm:flex justify-center hidden w-full",
                                        children: [(0, i.jsx)("div", {
                                            className: "absolute w-full",
                                            style: {
                                                borderBottom: s ? "2.5px solid #6366f1" : "2.5px solid transparent",
                                                bottom: -17
                                            }
                                        }), (0, i.jsx)("span", {
                                            className: (0, b.Z)({
                                                "text-stone-900": !M
                                            }),
                                            children: e.name
                                        })]
                                    }), (0, i.jsxs)("div", {
                                        className: "relative flex items-center justify-center text-xl sm:hidden w-full",
                                        children: [(0, i.jsx)("div", {
                                            className: "absolute w-full",
                                            style: {
                                                borderBottom: s ? "2.5px solid #6366f1" : "2.5px solid transparent",
                                                bottom: -17
                                            }
                                        }), (0, i.jsx)(e.icon, {})]
                                    })]
                                }, t)
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "hidden w-32 h-full  sm:flex items-center justify-end mr-4",
                            children: [!g && "unauthenticated" === j && M && (0, i.jsx)(k, {}), g && M && (0, i.jsx)(V, {})]
                        })]
                    })
                },
                V = () => {
                    var e, t, n, s;
                    let {
                        data: r,
                        status: a
                    } = (0, l.useSession)(), d = null == r ? void 0 : null === (n = r.user) || void 0 === n ? void 0 : null === (t = n.email) || void 0 === t ? void 0 : null === (e = t[0]) || void 0 === e ? void 0 : e.toLocaleUpperCase();
                    return (0, o.useRouter)(), (0, C.useApertureState)(), (0, i.jsxs)(j.fC, {
                        children: [(0, i.jsx)(j.xz, {
                            asChild: !0,
                            children: (0, i.jsx)("button", {
                                className: "h-7 w-7 rounded-full ml-2 text-xs md:text-sm bg-zinc-800 border  border-zinc-700 drop-shadow mr-2 flex items-center justify-center opacity-80 hover:opacity-100",
                                children: d || (0, i.jsx)(f.f, {})
                            })
                        }), (0, i.jsx)(j.ee, {}), (0, i.jsx)(j.h_, {
                            children: (0, i.jsxs)(j.VY, {
                                className: "w-64 bg-zinc-800 fixed z-50 right-0 top-5 rounded-md drop-shadow shadow text-sm flex flex-col items-start overflow-hidden border border-zinc-700 slideDownAndFade divide-y divide-zinc-700",
                                children: [(0, i.jsx)("div", {
                                    className: "px-4 py-2 bg-zinc-700 bg-opacity-50 w-full",
                                    children: (0, i.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [(0, i.jsx)("div", {
                                            className: "rounded-full h-7 flex-shrink-0 w-7 flex items-center justify-center bg-zinc-800 mr-2",
                                            children: (0, i.jsx)("p", {
                                                children: d || (0, i.jsx)(f.f, {})
                                            })
                                        }), (0, i.jsx)("span", {
                                            className: "font-medium truncate",
                                            children: null == r ? void 0 : null === (s = r.user) || void 0 === s ? void 0 : s.email
                                        })]
                                    })
                                }), (0, i.jsx)(N(), {
                                    href: "/account",
                                    className: "w-full px-4 py-2 hover:bg-zinc-700 flex justify-center",
                                    children: "Account"
                                }), (0, i.jsx)("button", {
                                    onClick: () => {
                                        (0, l.signOut)({
                                            redirect: !1
                                        }).then(() => {
                                            H.Z.post("/api/force-logout", {
                                                withCredentials: !0
                                            }).then(() => {
                                                window.location.href = "/"
                                            })
                                        })
                                    },
                                    className: "w-full px-4 py-2 hover:bg-zinc-700 ",
                                    children: "Sign out"
                                })]
                            })
                        })]
                    })
                },
                k = a.memo(function() {
                    let [e, t] = a.useState(""), [n, s] = a.useState(!1), [r, o] = a.useState(null), [c, u] = a.useState(!1), {
                        loginMenuRequired: h,
                        loginMenuOpen: m,
                        setLoginMenuOpen: x,
                        loginMenuCallback: f
                    } = (0, C.useLoginMenuContext)(), g = (0, a.useRef)(null);
                    return (0, i.jsxs)(w.fC, {
                        open: m,
                        onOpenChange: e => {
                            x(e)
                        },
                        children: [(0, i.jsx)(w.xz, {
                            asChild: !0,
                            children: (0, i.jsx)("button", {
                                className: "h-8 rounded-md ml-2 opacity-90 hover:brightness-110 px-4 text-xs md:text-sm  bg-gradient-to-t from-indigo-800 via-indigo-800 to-indigo-600 drop-shadow mr-2 font-medium",
                                children: "Get started"
                            })
                        }), (0, i.jsxs)(w.h_, {
                            children: [(0, i.jsx)(w.aV, {
                                className: "fixed inset-0 bg-zinc-900 bg-opacity-40 z-40 "
                            }), (0, i.jsxs)(w.VY, {
                                ref: g,
                                className: "bg-zinc-800 items-center fixed shadow-xl rounded-2xl z-50 px-8 py-8 text-sm drop-shadow-lg border border-zinc-700 fadeInAndScale",
                                style: {
                                    top: "50%",
                                    transform: "translate(-50%, -50%)",
                                    left: "50%",
                                    maxWidth: "330px",
                                    width: "100%",
                                    maxHeight: "85vh"
                                },
                                onPointerDownOutside: e => {
                                    if (!g.current) return;
                                    let t = g.current.getBoundingClientRect(),
                                        n = e.detail.originalEvent.clientX > t.left && e.detail.originalEvent.clientX < t.left + t.width && e.detail.originalEvent.clientY > t.top && e.detail.originalEvent.clientY < t.top + t.height;
                                    n && e.preventDefault()
                                },
                                children: [!h && (0, i.jsx)(w.x8, {
                                    className: "hover:bg-zinc-700 p-1 rounded absolute right-3 top-3",
                                    children: (0, i.jsx)(p.q, {
                                        className: "text-xl"
                                    })
                                }), !r && !c && (0, i.jsxs)("div", {
                                    className: "flex flex-col text-zinc-200 text-center items-center",
                                    children: [(0, i.jsx)(d.hg, {
                                        className: "h-6 mb-8"
                                    }), (0, i.jsxs)("div", {
                                        children: [(0, i.jsxs)("button", {
                                            onClick: () => {
                                                (0, l.signIn)("google", {
                                                    callbackUrl: f
                                                })
                                            },
                                            className: "bg-zinc-700 px-4 py-2 rounded-lg  w-64 shadow flex items-center justify-center space-x-2 border border-zinc-500 border-opacity-50 hover:brightness-110",
                                            children: [(0, i.jsx)(d.av, {
                                                className: "h-4"
                                            }), (0, i.jsx)("p", {
                                                className: "flex items-center justify-center",
                                                children: "Continue with Google"
                                            })]
                                        }), (0, i.jsx)("div", {
                                            className: "flex-1 w-64 flex-shrink-0 opacity-50 my-8 ",
                                            children: "Or continue with email"
                                        })]
                                    }), (0, i.jsxs)("form", {
                                        onSubmit: async t => {
                                            t.preventDefault(), n || "" === e.trim() || (s(!0), (0, l.signIn)("email", {
                                                email: e.trim(),
                                                redirect: !1,
                                                callbackUrl: f
                                            }).then(e => {
                                                var t;
                                                s(!1), (null == e ? void 0 : e.ok) ? u(!0) : o(null !== (t = null == e ? void 0 : e.error) && void 0 !== t ? t : "An error has occurred")
                                            }))
                                        },
                                        children: [(0, i.jsx)("input", {
                                            autoComplete: "email",
                                            placeholder: "Email address",
                                            className: "w-64 px-3 py-2 bg-zinc-700 focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-lg border border-zinc-600 hover:brightness-110",
                                            type: "email",
                                            value: e,
                                            onChange: e => t(e.target.value)
                                        }), (0, i.jsx)("button", {
                                            type: "submit",
                                            className: "hover:brightness-110 bg-gradient-to-t from-indigo-800 via-indigo-800 to-indigo-700 border border-indigo-800 px-4 py-1.5 rounded-lg shadow h-9 w-64 drop-shadow flex items-center justify-center mt-3",
                                            children: n ? (0, i.jsx)(M.$, {
                                                size: "md"
                                            }) : "Continue"
                                        })]
                                    })]
                                }), !r && c && (0, i.jsx)("div", {
                                    children: (0, i.jsxs)("div", {
                                        className: "font-medium text-center flex flex-col items-center justify-center text-xl mt-5 my-4",
                                        children: ["Check your email for a login link", (0, i.jsx)("div", {
                                            className: "text-sm mt-2 font-base font-normal opacity-50",
                                            children: "If you don't see the email, check your spam folder."
                                        }), (0, i.jsx)("button", {
                                            onClick: () => {
                                                u(!1), o(null)
                                            },
                                            className: "py-1.5 rounded w-12 flex items-center justify-center font-normal hover:bg-zinc-700 text-xs opacity-30 hover:opacity-100 mt-8",
                                            children: "Back"
                                        })]
                                    })
                                }), r && (0, i.jsx)("div", {
                                    children: (0, i.jsxs)("div", {
                                        className: "font-medium text-center flex flex-col text-lg mt-3",
                                        children: [(0, i.jsx)("span", {
                                            className: "text-red-500",
                                            children: "An error has occurred"
                                        }), (0, i.jsx)("div", {
                                            className: "text-sm mt-4 font-base font-normal opacity-80 text-cente flex items-center flex-col",
                                            children: r
                                        }), (0, i.jsx)("button", {
                                            onClick: () => {
                                                u(!1), o(null)
                                            },
                                            className: "px-6 py-2 rounded  hover:bg-zinc-700 text-xs opacity-50 hover:opacity-100 mt-8",
                                            children: "Back"
                                        })]
                                    })
                                })]
                            })]
                        })]
                    })
                })
        },
        4111: function(e, t, n) {
            n.d(t, {
                k: function() {
                    return o
                }
            });
            var i = n(7437),
                s = n(2265),
                r = n(8528),
                l = n(5545);

            function o(e) {
                let {
                    duration: t,
                    max: n = 100,
                    startTime: o,
                    height: a = 5
                } = e;
                (0, r.Z)(t, 0);
                let d = (0, s.useRef)(null),
                    c = (0, s.useRef)(0),
                    C = (0, s.useRef)(0),
                    u = (0, s.useRef)(new Date(o));
                return (0, s.useEffect)(() => {
                    C.current = c.current
                }, [t]), (0, s.useEffect)(() => {
                    let e = Date.now() - u.current.valueOf(),
                        i = Math.min(t, e),
                        s = (0, l.vh)(i, C.current, n, t);
                    c.current = s > n ? n : s, d.current && (d.current.style.width = "".concat(c.current, "%"))
                }), (0, i.jsx)("div", {
                    className: "rounded-full w-full flex-1 overflow-hidden bg-zinc-700 shadow-md ",
                    children: (0, i.jsx)("div", {
                        style: {
                            height: a
                        },
                        ref: d,
                        className: "bg-indigo-600 w-full"
                    })
                })
            }
        },
        1567: function(e, t, n) {
            n.d(t, {
                av: function() {
                    return l
                },
                hg: function() {
                    return s
                },
                vM: function() {
                    return r
                }
            });
            var i = n(7437);
            n(2265);
            let s = e => (0, i.jsx)("svg", {
                    viewBox: "0 0 112 32",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: (0, i.jsx)("path", {
                        d: "M6.64774 31H0.977744V2.9335H6.64774V31ZM4.66324 31V30.4735H16.8942V31H4.66324ZM33.2749 23.386H38.6209C38.1889 24.979 37.4464 26.383 36.3934 27.598C35.3404 28.813 34.0579 29.758 32.5459 30.433C31.0609 31.081 29.4139 31.405 27.6049 31.405C25.4179 31.405 23.4604 30.9325 21.7324 29.9875C20.0044 29.0425 18.6409 27.733 17.6419 26.059C16.6429 24.358 16.1434 22.4275 16.1434 20.2675C16.1434 18.0805 16.6429 16.15 17.6419 14.476C18.6409 12.802 20.0044 11.4925 21.7324 10.5475C23.4604 9.6025 25.4179 9.13 27.6049 9.13C29.3869 9.13 31.0204 9.454 32.5054 10.102C34.0174 10.75 35.2999 11.668 36.3529 12.856C37.4059 14.017 38.1484 15.394 38.5804 16.987H33.2344C33.0724 15.826 32.7619 14.692 32.3029 13.585C31.8709 12.451 31.2634 11.5195 30.4804 10.7905C29.7244 10.0345 28.7659 9.6565 27.6049 9.6565C26.4709 9.6565 25.4584 10.0615 24.5674 10.8715C23.7034 11.6545 23.0149 12.829 22.5019 14.395C22.0159 15.961 21.7729 17.9185 21.7729 20.2675C21.7729 22.3735 21.9889 24.223 22.4209 25.816C22.8799 27.409 23.5414 28.651 24.4054 29.542C25.2964 30.433 26.3629 30.8785 27.6049 30.8785C29.0359 30.8785 30.2509 30.2575 31.2499 29.0155C32.2759 27.7465 32.9509 25.87 33.2749 23.386ZM18.2089 16.987V16.4605H36.9199V16.987H18.2089ZM39.597 9.535H45.2265L56.4855 31H50.856L39.597 9.535ZM47.535 20.1055L47.94 20.632L41.217 31H40.5285L47.535 20.1055ZM48.5475 20.632L48.1425 20.1055L54.987 9.535H55.6755L48.5475 20.632ZM65.4136 31H59.9461V9.535H65.4136V31ZM62.7001 6.295C61.8091 6.295 61.0666 5.998 60.4726 5.404C59.9056 4.81 59.6221 4.081 59.6221 3.217C59.6221 2.353 59.9056 1.6375 60.4726 1.0705C61.0666 0.476499 61.8091 0.179498 62.7001 0.179498C63.5641 0.179498 64.2796 0.476499 64.8466 1.0705C65.4406 1.6375 65.7376 2.353 65.7376 3.217C65.7376 4.081 65.4406 4.81 64.8466 5.404C64.2796 5.998 63.5641 6.295 62.7001 6.295ZM85.8746 23.5075H91.2206C90.7886 25.0735 90.0461 26.4505 88.9931 27.6385C87.9671 28.8265 86.7116 29.758 85.2266 30.433C83.7416 31.081 82.1081 31.405 80.3261 31.405C78.1391 31.405 76.1816 30.9325 74.4536 29.9875C72.7256 29.0425 71.3621 27.733 70.3631 26.059C69.3641 24.358 68.8646 22.4275 68.8646 20.2675C68.8646 18.0805 69.3641 16.15 70.3631 14.476C71.3621 12.802 72.7256 11.4925 74.4536 10.5475C76.1816 9.6025 78.1391 9.13 80.3261 9.13C82.1081 9.13 83.7416 9.454 85.2266 10.102C86.7116 10.75 87.9671 11.668 88.9931 12.856C90.0461 14.017 90.7886 15.394 91.2206 16.987H85.8746C85.7126 15.799 85.4156 14.6515 84.9836 13.5445C84.5516 12.4105 83.9576 11.479 83.2016 10.75C82.4456 10.021 81.4871 9.6565 80.3261 9.6565C79.1921 9.6565 78.1796 10.0615 77.2886 10.8715C76.4246 11.6545 75.7361 12.829 75.2231 14.395C74.7371 15.961 74.4941 17.9185 74.4941 20.2675C74.4941 22.3735 74.7101 24.223 75.1421 25.816C75.6011 27.409 76.2626 28.651 77.1266 29.542C78.0176 30.433 79.0841 30.8785 80.3261 30.8785C81.3791 30.8785 82.2836 30.5545 83.0396 29.9065C83.7956 29.2315 84.4166 28.3405 84.9026 27.2335C85.3886 26.1265 85.7126 24.8845 85.8746 23.5075ZM111.286 31H105.819V27.7195V24.9655V22.2115V14.5975C105.819 12.7075 105.535 11.4115 104.968 10.7095C104.401 10.0075 103.686 9.6565 102.822 9.6565C102.282 9.6565 101.782 9.8185 101.323 10.1425C100.864 10.4665 100.5 11.0065 100.23 11.7625C99.9596 12.4915 99.8246 13.504 99.8246 14.8C99.8246 15.07 99.8246 15.3535 99.8246 15.6505C99.8516 15.9475 99.8786 16.2175 99.9056 16.4605H94.3166C94.3166 15.0025 94.6811 13.7335 95.4101 12.6535C96.1661 11.5465 97.1921 10.6825 98.4881 10.0615C99.7841 9.4405 101.229 9.13 102.822 9.13C104.442 9.13 105.886 9.454 107.155 10.102C108.424 10.723 109.423 11.6275 110.152 12.8155C110.908 13.9765 111.286 15.367 111.286 16.987V31ZM99.8651 31.405C98.4881 31.405 97.2731 31.135 96.2201 30.595C95.1941 30.055 94.3976 29.326 93.8306 28.408C93.2636 27.463 92.9801 26.41 92.9801 25.249C92.9801 23.98 93.2771 22.873 93.8711 21.928C94.4921 20.956 95.3156 20.2135 96.3416 19.7005C97.3946 19.1605 98.5691 18.8905 99.8651 18.8905H107.074L106.993 19.417H102.822C101.499 19.417 100.446 19.93 99.6626 20.956C98.9066 21.955 98.5286 23.251 98.5286 24.844C98.5286 26.302 98.8391 27.49 99.4601 28.408C100.081 29.326 100.972 29.785 102.133 29.785C102.862 29.785 103.497 29.5825 104.037 29.1775C104.604 28.7725 105.036 28.2055 105.333 27.4765C105.657 26.7475 105.819 25.9105 105.819 24.9655H106.386C106.386 26.9365 105.792 28.5025 104.604 29.6635C103.443 30.8245 101.863 31.405 99.8651 31.405Z",
                        fill: "white"
                    })
                }),
                r = e => (0, i.jsx)("svg", {
                    viewBox: "0 0 112 32",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: (0, i.jsx)("path", {
                        d: "M6.64774 31H0.977744V2.9335H6.64774V31ZM4.66324 31V30.4735H16.8942V31H4.66324ZM33.2749 23.386H38.6209C38.1889 24.979 37.4464 26.383 36.3934 27.598C35.3404 28.813 34.0579 29.758 32.5459 30.433C31.0609 31.081 29.4139 31.405 27.6049 31.405C25.4179 31.405 23.4604 30.9325 21.7324 29.9875C20.0044 29.0425 18.6409 27.733 17.6419 26.059C16.6429 24.358 16.1434 22.4275 16.1434 20.2675C16.1434 18.0805 16.6429 16.15 17.6419 14.476C18.6409 12.802 20.0044 11.4925 21.7324 10.5475C23.4604 9.6025 25.4179 9.13 27.6049 9.13C29.3869 9.13 31.0204 9.454 32.5054 10.102C34.0174 10.75 35.2999 11.668 36.3529 12.856C37.4059 14.017 38.1484 15.394 38.5804 16.987H33.2344C33.0724 15.826 32.7619 14.692 32.3029 13.585C31.8709 12.451 31.2634 11.5195 30.4804 10.7905C29.7244 10.0345 28.7659 9.6565 27.6049 9.6565C26.4709 9.6565 25.4584 10.0615 24.5674 10.8715C23.7034 11.6545 23.0149 12.829 22.5019 14.395C22.0159 15.961 21.7729 17.9185 21.7729 20.2675C21.7729 22.3735 21.9889 24.223 22.4209 25.816C22.8799 27.409 23.5414 28.651 24.4054 29.542C25.2964 30.433 26.3629 30.8785 27.6049 30.8785C29.0359 30.8785 30.2509 30.2575 31.2499 29.0155C32.2759 27.7465 32.9509 25.87 33.2749 23.386ZM18.2089 16.987V16.4605H36.9199V16.987H18.2089ZM39.597 9.535H45.2265L56.4855 31H50.856L39.597 9.535ZM47.535 20.1055L47.94 20.632L41.217 31H40.5285L47.535 20.1055ZM48.5475 20.632L48.1425 20.1055L54.987 9.535H55.6755L48.5475 20.632ZM65.4136 31H59.9461V9.535H65.4136V31ZM62.7001 6.295C61.8091 6.295 61.0666 5.998 60.4726 5.404C59.9056 4.81 59.6221 4.081 59.6221 3.217C59.6221 2.353 59.9056 1.6375 60.4726 1.0705C61.0666 0.476499 61.8091 0.179498 62.7001 0.179498C63.5641 0.179498 64.2796 0.476499 64.8466 1.0705C65.4406 1.6375 65.7376 2.353 65.7376 3.217C65.7376 4.081 65.4406 4.81 64.8466 5.404C64.2796 5.998 63.5641 6.295 62.7001 6.295ZM85.8746 23.5075H91.2206C90.7886 25.0735 90.0461 26.4505 88.9931 27.6385C87.9671 28.8265 86.7116 29.758 85.2266 30.433C83.7416 31.081 82.1081 31.405 80.3261 31.405C78.1391 31.405 76.1816 30.9325 74.4536 29.9875C72.7256 29.0425 71.3621 27.733 70.3631 26.059C69.3641 24.358 68.8646 22.4275 68.8646 20.2675C68.8646 18.0805 69.3641 16.15 70.3631 14.476C71.3621 12.802 72.7256 11.4925 74.4536 10.5475C76.1816 9.6025 78.1391 9.13 80.3261 9.13C82.1081 9.13 83.7416 9.454 85.2266 10.102C86.7116 10.75 87.9671 11.668 88.9931 12.856C90.0461 14.017 90.7886 15.394 91.2206 16.987H85.8746C85.7126 15.799 85.4156 14.6515 84.9836 13.5445C84.5516 12.4105 83.9576 11.479 83.2016 10.75C82.4456 10.021 81.4871 9.6565 80.3261 9.6565C79.1921 9.6565 78.1796 10.0615 77.2886 10.8715C76.4246 11.6545 75.7361 12.829 75.2231 14.395C74.7371 15.961 74.4941 17.9185 74.4941 20.2675C74.4941 22.3735 74.7101 24.223 75.1421 25.816C75.6011 27.409 76.2626 28.651 77.1266 29.542C78.0176 30.433 79.0841 30.8785 80.3261 30.8785C81.3791 30.8785 82.2836 30.5545 83.0396 29.9065C83.7956 29.2315 84.4166 28.3405 84.9026 27.2335C85.3886 26.1265 85.7126 24.8845 85.8746 23.5075ZM111.286 31H105.819V27.7195V24.9655V22.2115V14.5975C105.819 12.7075 105.535 11.4115 104.968 10.7095C104.401 10.0075 103.686 9.6565 102.822 9.6565C102.282 9.6565 101.782 9.8185 101.323 10.1425C100.864 10.4665 100.5 11.0065 100.23 11.7625C99.9596 12.4915 99.8246 13.504 99.8246 14.8C99.8246 15.07 99.8246 15.3535 99.8246 15.6505C99.8516 15.9475 99.8786 16.2175 99.9056 16.4605H94.3166C94.3166 15.0025 94.6811 13.7335 95.4101 12.6535C96.1661 11.5465 97.1921 10.6825 98.4881 10.0615C99.7841 9.4405 101.229 9.13 102.822 9.13C104.442 9.13 105.886 9.454 107.155 10.102C108.424 10.723 109.423 11.6275 110.152 12.8155C110.908 13.9765 111.286 15.367 111.286 16.987V31ZM99.8651 31.405C98.4881 31.405 97.2731 31.135 96.2201 30.595C95.1941 30.055 94.3976 29.326 93.8306 28.408C93.2636 27.463 92.9801 26.41 92.9801 25.249C92.9801 23.98 93.2771 22.873 93.8711 21.928C94.4921 20.956 95.3156 20.2135 96.3416 19.7005C97.3946 19.1605 98.5691 18.8905 99.8651 18.8905H107.074L106.993 19.417H102.822C101.499 19.417 100.446 19.93 99.6626 20.956C98.9066 21.955 98.5286 23.251 98.5286 24.844C98.5286 26.302 98.8391 27.49 99.4601 28.408C100.081 29.326 100.972 29.785 102.133 29.785C102.862 29.785 103.497 29.5825 104.037 29.1775C104.604 28.7725 105.036 28.2055 105.333 27.4765C105.657 26.7475 105.819 25.9105 105.819 24.9655H106.386C106.386 26.9365 105.792 28.5025 104.604 29.6635C103.443 30.8245 101.863 31.405 99.8651 31.405Z",
                        fill: "#333"
                    })
                }),
                l = e => (0, i.jsx)("svg", {
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    ...e,
                    children: (0, i.jsxs)("g", {
                        transform: "matrix(1, 0, 0, 1, 27.009001, -39.238998)",
                        children: [(0, i.jsx)("path", {
                            fill: "#4285F4",
                            d: "M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"
                        }), (0, i.jsx)("path", {
                            fill: "#34A853",
                            d: "M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"
                        }), (0, i.jsx)("path", {
                            fill: "#FBBC05",
                            d: "M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"
                        }), (0, i.jsx)("path", {
                            fill: "#EA4335",
                            d: "M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"
                        })]
                    })
                })
        }
    }
]);