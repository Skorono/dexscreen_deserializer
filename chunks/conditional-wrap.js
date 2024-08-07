var Gt = Object.defineProperty;
var qt = (e, t, r) => t in e ? Gt(e, t, {enumerable: !0, configurable: !0, writable: !0, value: r}) : e[t] = r;
var $ = (e, t, r) => (qt(e, typeof t != "symbol" ? t + "" : t, r), r);
import {
    h8 as Xt,
    al as pt,
    am as gt,
    h9 as St,
    ha as ke,
    an as Jt,
    hb as Yt,
    hc as Kt,
    hd as Qt,
    he as Zt,
    gz as er,
    hf as q,
    hg as tr,
    fg as ve,
    a5 as R,
    hh as rr,
    hi as Ee,
    hj as ce,
    x as h,
    hk as sr,
    hl as yt,
    hm as bt,
    hn as Ie,
    ho as ne,
    hp as Pe,
    hq as vt,
    hr as Pt,
    hs as nr,
    ht as wt,
    hu as or,
    hv as ir,
    hw as ar,
    hx as lr,
    hy as cr,
    hz as ur,
    hA as xe,
    hB as dr,
    hC as mr,
    hD as hr,
    hE as fr,
    hF as pr,
    hG as gr,
    hH as Sr,
    hI as Ct,
    hJ as yr,
    hK as br,
    hL as Tt,
    hM as vr,
    bo as l,
    hN as Pr,
    hO as wr,
    hP as Cr,
    $ as D,
    cq as H,
    hQ as Tr,
    b2 as ge,
    c4 as kr,
    b4 as kt,
    dO as xr,
    dT as qe,
    gO as xt,
    hR as Ar,
    bt as Se,
    hS as Br,
    hT as Lr,
    b7 as Er,
    y as O,
    J as At,
    fn as Ir,
    gX as M,
    hU as P,
    hV as m,
    gZ as oe,
    f3 as Ve,
    fx as Bt,
    aD as Lt,
    d1 as Vr,
    hW as Dr,
    gY as J,
    hX as Et,
    gy as Ur,
    g0 as Mr,
    hY as Nr,
    c3 as It,
    c7 as Vt,
    A as _,
    dR as Rr,
    hZ as Dt,
    bn as Hr,
    ed as Ae,
    eL as Ut,
    g6 as _r,
    a$ as Or,
    c6 as Wr,
    gT as ue,
    aV as $r,
    Q as Fr,
    ap as jr,
    eD as zr,
    b0 as Gr,
    d7 as qr,
    cm as Xr,
    O as Xe,
    G as Jr,
    cc as Yr,
    h_ as Kr
} from "../entries/pages_catch-all.js";
import {i as we, o as Qr, a as Zr} from "./util-hGGZbKlM.js";
import {d as es, u as ts, g as rs, a as ss} from "./dex-search.service-TIwqq6Pl.js";
import {c as ns} from "./catchError-X-LkCcQN.js";

var os = Xt(function (e) {
    return function (r) {
        r === void 0 && (r = null), e(this), this.message = "Timeout has occurred", this.name = "TimeoutError", this.info = r
    }
});

function is(e, t) {
    var r = Yt(e) ? {first: e} : typeof e == "number" ? {each: e} : e, s = r.first, n = r.each, o = r.with,
        i = o === void 0 ? as : o, a = r.scheduler, u = a === void 0 ? t ?? St : a, d = r.meta,
        c = d === void 0 ? null : d;
    if (s == null && n == null) throw new TypeError("No timeout provided.");
    return pt(function (v, f) {
        var g, S, p = null, y = 0, b = function (B) {
            S = ke(f, u, function () {
                try {
                    g.unsubscribe(), Jt(i({meta: c, lastValue: p, seen: y})).subscribe(f)
                } catch (x) {
                    f.error(x)
                }
            }, B)
        };
        g = v.subscribe(gt(f, function (B) {
            S == null || S.unsubscribe(), y++, f.next(p = B), n > 0 && b(n)
        }, void 0, void 0, function () {
            S != null && S.closed || S == null || S.unsubscribe(), p = null
        })), !y && b(s != null ? typeof s == "number" ? s : +s - u.now() : n)
    })
}

function as(e) {
    throw new os(e)
}

function ls(e) {
    for (var t, r, s = [], n = 1; n < arguments.length; n++) s[n - 1] = arguments[n];
    var o = (t = Kt(s)) !== null && t !== void 0 ? t : St, i = (r = s[0]) !== null && r !== void 0 ? r : null,
        a = s[1] || 1 / 0;
    return pt(function (u, d) {
        var c = [], v = !1, f = function (p) {
            var y = p.buffer, b = p.subs;
            b.unsubscribe(), Zt(c, p), d.next(y), v && g()
        }, g = function () {
            if (c) {
                var p = new er;
                d.add(p);
                var y = [], b = {buffer: y, subs: p};
                c.push(b), ke(p, o, function () {
                    return f(b)
                }, e)
            }
        };
        i !== null && i >= 0 ? ke(d, o, g, i, !0) : v = !0, g();
        var S = gt(d, function (p) {
            var y, b, B = c.slice();
            try {
                for (var x = Qt(B), k = x.next(); !k.done; k = x.next()) {
                    var L = k.value, w = L.buffer;
                    w.push(p), a <= w.length && f(L)
                }
            } catch (E) {
                y = {error: E}
            } finally {
                try {
                    k && !k.done && (b = x.return) && b.call(x)
                } finally {
                    if (y) throw y.error
                }
            }
        }, function () {
            for (; c != null && c.length;) d.next(c.shift().buffer);
            S == null || S.unsubscribe(), d.complete(), d.unsubscribe()
        }, void 0, function () {
            return c = null
        });
        u.subscribe(S)
    })
}

const Mt = () => Intl.DateTimeFormat().resolvedOptions().timeZone, cs = e => {
    let t = ["iframe_loading_compatibility_mode", "study_templates", "items_favoriting", "datasource_copypaste", "seconds_resolution"],
        r = ["auto_enable_symbol_labels", "header_symbol_search", "save_shortcut", "header_saveload", "header_fullscreen_button", "symbol_search_hot_key", "popup_hints", "legend_inplace_edit"];
    const n = {
        library_path: "/tv/v27.001/",
        logo: e.hideTradingViewLogo ? {image: "/transparent-pixel.png"} : void 0,
        theme: "dark",
        locale: "en",
        autosize: !0,
        symbol_search_request_delay: 500,
        container: e.containerId,
        auto_save_delay: 2,
        timezone: Mt(),
        interval: e.defaultInterval ?? q[15],
        favorites: {intervals: e.favoriteIntervals, chartTypes: ["Line", "Candles"]},
        overrides: {
            ...e.widgetOverrides,
            "scalesProperties.fontSize": 14,
            "scalesProperties.showStudyLastValue": !1,
            "scalesProperties.showSymbolLabels": !1,
            "mainSeriesProperties.style": e.chartStyle ?? 1
        },
        datafeed: e.dataFeed.getDataFeed(),
        symbol: e.symbol,
        saved_data: e.savedData,
        save_load_adapter: e.saveLoadAdapter,
        custom_formatters: {priceFormatterFactory: () => ({format: o => o === null ? o : tr({price: o})})}
    };
    return e.settingsAdapter && (n.settings_adapter = e.settingsAdapter), e.symbolLogo && t.push("show_symbol_logos"), e.enabledFeatures && (t.push(...e.enabledFeatures), r = r.filter(o => {
        var i;
        return !((i = e.enabledFeatures) != null && i.includes(o))
    })), e.disabledFeatures && (r.push(...e.disabledFeatures), t = t.filter(o => {
        var i;
        return !((i = e.disabledFeatures) != null && i.includes(o))
    })), n.enabled_features = t, n.disabled_features = r, n
}, se = (e, t, r) => {
    const s = new Date(e);
    switch (t) {
        case"second":
            s.setMilliseconds(0), s.setSeconds(s.getSeconds() - s.getSeconds() % r);
            break;
        case"minute":
            s.setSeconds(0, 0), s.setMinutes(s.getMinutes() - s.getMinutes() % r);
            break;
        case"hour":
            s.setMinutes(0, 0, 0), s.setHours(s.getHours() - s.getHours() % r);
            break;
        case"day":
            s.setHours(0, 0, 0, 0), s.setDate(s.getDate() - s.getDate() % r);
            break;
        case"week": {
            const n = s.getDay(), o = (n === 0 ? 7 : n) - 1;
            s.setDate(s.getDate() - o), s.setHours(0, 0, 0, 0);
            break
        }
        case"month":
            if (r !== 1) throw new Error("Month truncation only supports amount of 1");
            s.setHours(0, 0, 0, 0), s.setDate(1);
            break;
        default:
            throw new Error("Unsupported interval")
    }
    return Math.floor(s.getTime() / 1e3)
}, us = (e, t) => {
    if (t.endsWith("S")) {
        const r = ve(t.split("S")[0] ?? t);
        return se(e, "second", r)
    } else if (t.endsWith("M")) {
        const r = ve(t.split("M")[0] ?? t);
        return se(e, "month", r)
    } else if (t.endsWith("W")) {
        const r = ve(t.split("W")[0] ?? t);
        return se(e, "week", r)
    } else {
        const r = Number.parseInt(t);
        if (r < 60) return se(e, "minute", r);
        if (r >= 60 && r <= 720) {
            const s = Math.floor(r / 60);
            return se(e, "hour", s)
        } else return se(e, "day", 1)
    }
}, ds = () => ({
    buildSearchTicker: (e, t) => {
        var s;
        let r = `${t.chainId}+${t.pairAddress}+${(s = t.quoteToken) == null ? void 0 : s.address}`;
        return t.c && (r = `${r}+${t.c}`, t.c === "a" && (r = `${r}+${t.a}`)), `${e} (${r})`
    }, getComparableSymbolDetail: e => {
        const t = /\((.*\+.*)\)/, r = e.match(t);
        if (!r || !r[1]) return;
        const [s, n, o, i, a] = r[1].split("+");
        if (!(!s || !n || !o)) return {
            context: i == null ? void 0 : i.toLowerCase(),
            ammId: a == null ? void 0 : a.toLowerCase(),
            chainId: s.toLowerCase(),
            pairId: n.toLowerCase(),
            quoteTokenAddress: o.toLowerCase()
        }
    }
});

class ms {
    constructor(t) {
        $(this, "params");
        $(this, "barCursor", {});
        $(this, "isTriggeringSubscribers", !1);
        $(this, "symbolManagement", ds());
        $(this, "subscribeBarsCallbacks", []);
        $(this, "makerHistory", []);
        $(this, "getResolution", t => t.indexOf("S") != -1 ? t : t === "1D" ? 1440 : t);
        $(this, "getSymbolInfoDescription", t => this.params.chartType === "marketCap" ? `${t} (Market Cap) on ${this.params.dexName}` : `${t} on ${this.params.dexName}`);
        this.params = t, this.makerHistory = []
    }

    async fetchDexChartBars(t) {
        var n;
        const r = await this.params.dexChartAmmService.getBars({
            chartType: this.params.chartType,
            context: t.context,
            ammId: t.ammId,
            chainId: t.chainId,
            pairAddress: t.pairAddress,
            quoteTokenAddress: t.quoteTokenAddress,
            beforeBlockNumber: t.beforeBlockNumber,
            afterBlockNumber: t.afterBlockNumber,
            resolution: this.getResolution(t.resolution).toString(),
            countBack: t.countBack,
            usdOnly: t.usdOnly,
            isInverted: t.isInverted,
            circulatingSupply: this.params.circulatingSupply ?? void 0
        }), s = [];
        return (n = r.bars) == null || n.forEach(o => {
            if (o.closeUsd && t.usdOnly) {
                const i = new R(o.closeUsd).toNumber();
                s.push({
                    time: o.timestamp,
                    open: o.openUsd ? new R(o.openUsd).toNumber() : i,
                    high: o.highUsd ? new R(o.highUsd).toNumber() : i,
                    low: o.lowUsd ? new R(o.lowUsd).toNumber() : i,
                    close: o.closeUsd ? new R(o.closeUsd).toNumber() : i,
                    volume: o.volumeUsd ? new R(o.volumeUsd).toNumber() : void 0,
                    minBlockNumber: o.minBlockNumber,
                    maxBlockNumber: o.maxBlockNumber
                })
            } else t.usdOnly || s.push({
                time: o.timestamp,
                open: new R(o.open).toNumber(),
                high: new R(o.high).toNumber(),
                low: new R(o.low).toNumber(),
                close: new R(o.close).toNumber(),
                volume: o.volumeUsd ? new R(o.volumeUsd).toNumber() : void 0,
                minBlockNumber: o.minBlockNumber,
                maxBlockNumber: o.maxBlockNumber
            })
        }), s
    }

    getFetchBarParameters(t) {
        const r = this.symbolManagement.getComparableSymbolDetail(t);
        return r || {
            context: this.params.context,
            ammId: this.params.ammId,
            chainId: this.params.chainId,
            pairId: this.params.pairAddress,
            quoteTokenAddress: this.params.quoteTokenAddress
        }
    }

    setBarCursor(t) {
        var n, o;
        const r = t.oldest ? {...t.oldest} : (n = this.barCursor[t.resolution]) == null ? void 0 : n.oldest,
            s = t.newest ? {...t.newest} : (o = this.barCursor[t.resolution]) == null ? void 0 : o.newest;
        this.barCursor[t.resolution] = {oldest: r, newest: s}
    }

    setTradingHistoryMarks(t) {
        this.makerHistory = t
    }

    getDataFeed() {
        return {
            onReady: t => {
                setTimeout(() => {
                    t({supported_resolutions: this.params.supportedResolutions, supports_marks: !0})
                }, 0)
            }, searchSymbols: async (t, r, s, n) => {
                const i = (await this.params.searchPair(t)).map(a => {
                    const u = `${a.baseToken.symbol}/${a.quoteTokenSymbol}`,
                        d = this.symbolManagement.buildSearchTicker(u, a);
                    return {
                        symbol: u,
                        full_name: u,
                        description: `${a.chainId} / ${a.dexId}`,
                        exchange: "dexscreener.com",
                        ticker: d,
                        type: ""
                    }
                });
                n(i)
            }, resolveSymbol: (t, r) => {
                setTimeout(() => {
                    var o;
                    let s = 100, n = ((o = this.params.latestPrice.split(".")[1]) == null ? void 0 : o.length) ?? 0;
                    n < 4 && (n = 4), n > 2 && (s = 10 ** Math.min(n, 16)), r({
                        name: t,
                        description: this.getSymbolInfoDescription(t),
                        exchange: "dexscreener.com",
                        minmov: 1,
                        pricescale: s,
                        session: "24x7",
                        timezone: Mt(),
                        supported_resolutions: this.params.supportedResolutions,
                        has_seconds: !0,
                        has_intraday: !0,
                        has_daily: !0,
                        visible_plots_set: "ohlcv",
                        logo_urls: [this.params.symbolLogo]
                    })
                }, 0)
            }, getBars: async (t, r, s, n, o) => {
                var f, g;
                const {
                    context: i,
                    ammId: a,
                    chainId: u,
                    pairId: d,
                    quoteTokenAddress: c
                } = this.getFetchBarParameters(t.name), v = await rr({
                    callback: () => {
                        var S, p;
                        return this.fetchDexChartBars({
                            context: i,
                            ammId: a,
                            chainId: u,
                            pairAddress: d,
                            quoteTokenAddress: c,
                            beforeBlockNumber: (p = (S = this.barCursor[r]) == null ? void 0 : S.oldest) == null ? void 0 : p.minBlockNumber,
                            resolution: r,
                            countBack: s.countBack,
                            usdOnly: this.params.useUsdPrice,
                            isInverted: this.params.isInverted
                        })
                    }, retrySettings: {tries: 3, delayInMs: 1e3, timeoutInMs: 3e4}
                }).catch(() => {
                    o("Failed fetching bars")
                });
                if (v) if (v.length > 0) {
                    const S = (f = this.barCursor[r]) == null ? void 0 : f.newest, p = v[v.length - 1];
                    p && (!S || S.maxBlockNumber < p.maxBlockNumber) && (this.setBarCursor({
                        resolution: r,
                        newest: p
                    }), this.params.onLatestPrice && this.params.onLatestPrice({
                        value: p.close,
                        usd: this.params.useUsdPrice
                    }));
                    const y = (g = this.barCursor[r]) == null ? void 0 : g.oldest, b = v[0];
                    b && (!y || y.minBlockNumber > b.minBlockNumber) && this.setBarCursor({
                        resolution: r,
                        oldest: b
                    }), n(v)
                } else n([], {noData: !0})
            }, getMarks: (t, r, s, n, o) => {
                const i = this.makerHistory.map(a => ({
                    id: a.id,
                    time: us(a.timestamp, o),
                    color: {border: a.color, background: a.color},
                    text: a.text,
                    label: a.label,
                    labelFontColor: "white",
                    minSize: 25
                }));
                n(i)
            }, subscribeBars: (t, r, s, n) => {
                this.subscribeBarsCallbacks.push({subscriberId: n, symbolName: t.name, resolution: r, callback: s})
            }, unsubscribeBars: t => {
                this.subscribeBarsCallbacks.forEach(r => {
                    r.subscriberId === t && (r.callback = null, delete this.barCursor[r.resolution])
                })
            }
        }
    }

    triggerSubscribers() {
        Object.keys(this.barCursor).length !== 0 && (this.isTriggeringSubscribers || (this.isTriggeringSubscribers = !0, Promise.all(this.subscribeBarsCallbacks.map(async ({
                                                                                                                                                                                symbolName: t,
                                                                                                                                                                                resolution: r,
                                                                                                                                                                                callback: s
                                                                                                                                                                            }) => {
            var v;
            if (!s) return;
            const n = (v = this.barCursor[r]) == null ? void 0 : v.newest;
            if (!n) return;
            const {context: o, ammId: i, chainId: a, pairId: u, quoteTokenAddress: d} = this.getFetchBarParameters(t),
                c = await this.fetchDexChartBars({
                    context: o,
                    ammId: i,
                    chainId: a,
                    pairAddress: u,
                    quoteTokenAddress: d,
                    afterBlockNumber: n.minBlockNumber - 1,
                    resolution: r,
                    countBack: 2,
                    usdOnly: this.params.useUsdPrice,
                    isInverted: this.params.isInverted
                }).catch(() => {
                });
            if (c && c.length !== 0) try {
                c.forEach(f => {
                    var S;
                    const g = (S = this.barCursor[r]) == null ? void 0 : S.newest;
                    if (g) {
                        if (f.minBlockNumber === g.minBlockNumber) {
                            const p = {...f, open: g.open};
                            this.setBarCursor({resolution: r, newest: p}), s(p)
                        } else if (f.minBlockNumber > g.minBlockNumber) {
                            const p = {...f, open: g.close};
                            this.setBarCursor({resolution: r, newest: p}), s(p)
                        }
                    }
                }), this.params.onLatestPrice && this.params.onLatestPrice({
                    value: n.close,
                    usd: this.params.useUsdPrice
                })
            } catch {
            }
        })).then(() => {
            this.isTriggeringSubscribers = !1
        })))
    }
}

function Nt(e) {
    const t = Ee(() => ce(e)), {isStatic: r} = h.useContext(sr);
    if (r) {
        const [, s] = h.useState(e);
        h.useEffect(() => t.on("change", s), [])
    }
    return t
}

const hs = e => typeof e == "object" && e.mix, fs = e => hs(e) ? e.mix : void 0;

function ps(...e) {
    const t = !Array.isArray(e[0]), r = t ? 0 : -1, s = e[0 + r], n = e[1 + r], o = e[2 + r], i = e[3 + r],
        a = yt(n, o, {mixer: fs(o[0]), ...i});
    return t ? a(s) : a
}

function Rt(e, t) {
    const r = Nt(t()), s = () => r.set(t());
    return s(), bt(() => {
        const n = () => ne.update(s, !1, !0), o = e.map(i => i.on("change", n));
        return () => {
            o.forEach(i => i()), Ie(s)
        }
    }), r
}

function gs(e) {
    Pe.current = [], e();
    const t = Rt(Pe.current, e);
    return Pe.current = void 0, t
}

function Ss(e, t, r, s) {
    if (typeof e == "function") return gs(e);
    const n = typeof t == "function" ? t : ps(t, r, s);
    return Array.isArray(e) ? Je(e, n) : Je([e], ([o]) => n(o))
}

function Je(e, t) {
    const r = Ee(() => []);
    return Rt(e, () => {
        r.length = 0;
        const s = e.length;
        for (let n = 0; n < s; n++) r[n] = e[n].get();
        return t(r)
    })
}

function De(e, t, r) {
    var s;
    if (typeof e == "string") {
        let n = document;
        t && (vt(!!t.current, "Scope provided, but no element detected."), n = t.current), r ? ((s = r[e]) !== null && s !== void 0 || (r[e] = n.querySelectorAll(e)), e = r[e]) : e = n.querySelectorAll(e)
    } else e instanceof Element && (e = [e]);
    return Array.from(e || [])
}

const fe = new WeakMap;
let X;

function ys(e, t) {
    if (t) {
        const {inlineSize: r, blockSize: s} = t[0];
        return {width: r, height: s}
    } else return e instanceof SVGElement && "getBBox" in e ? e.getBBox() : {
        width: e.offsetWidth,
        height: e.offsetHeight
    }
}

function bs({target: e, contentRect: t, borderBoxSize: r}) {
    var s;
    (s = fe.get(e)) === null || s === void 0 || s.forEach(n => {
        n({
            target: e, contentSize: t, get size() {
                return ys(e, r)
            }
        })
    })
}

function vs(e) {
    e.forEach(bs)
}

function Ps() {
    typeof ResizeObserver > "u" || (X = new ResizeObserver(vs))
}

function ws(e, t) {
    X || Ps();
    const r = De(e);
    return r.forEach(s => {
        let n = fe.get(s);
        n || (n = new Set, fe.set(s, n)), n.add(t), X == null || X.observe(s)
    }), () => {
        r.forEach(s => {
            const n = fe.get(s);
            n == null || n.delete(t), n != null && n.size || X == null || X.unobserve(s)
        })
    }
}

const pe = new Set;
let de;

function Cs() {
    de = () => {
        const e = {width: window.innerWidth, height: window.innerHeight}, t = {target: window, size: e, contentSize: e};
        pe.forEach(r => r(t))
    }, window.addEventListener("resize", de)
}

function Ts(e) {
    return pe.add(e), de || Cs(), () => {
        pe.delete(e), !pe.size && de && (de = void 0)
    }
}

function ks(e, t) {
    return typeof e == "function" ? Ts(e) : ws(e, t)
}

const xs = 50, Ye = () => ({
        current: 0,
        offset: [],
        progress: 0,
        scrollLength: 0,
        targetOffset: 0,
        targetLength: 0,
        containerLength: 0,
        velocity: 0
    }), As = () => ({time: 0, x: Ye(), y: Ye()}),
    Bs = {x: {length: "Width", position: "Left"}, y: {length: "Height", position: "Top"}};

function Ke(e, t, r, s) {
    const n = r[t], {length: o, position: i} = Bs[t], a = n.current, u = r.time;
    n.current = e["scroll" + i], n.scrollLength = e["scroll" + o] - e["client" + o], n.offset.length = 0, n.offset[0] = 0, n.offset[1] = n.scrollLength, n.progress = Pt(0, n.scrollLength, n.current);
    const d = s - u;
    n.velocity = d > xs ? 0 : nr(n.current - a, d)
}

function Ls(e, t, r) {
    Ke(e, "x", t, r), Ke(e, "y", t, r), t.time = r
}

function Es(e, t) {
    const r = {x: 0, y: 0};
    let s = e;
    for (; s && s !== t;) if (s instanceof HTMLElement) r.x += s.offsetLeft, r.y += s.offsetTop, s = s.offsetParent; else if (s.tagName === "svg") {
        const n = s.getBoundingClientRect();
        s = s.parentElement;
        const o = s.getBoundingClientRect();
        r.x += n.left - o.left, r.y += n.top - o.top
    } else if (s instanceof SVGGraphicsElement) {
        const {x: n, y: o} = s.getBBox();
        r.x += n, r.y += o;
        let i = null, a = s.parentNode;
        for (; !i;) a.tagName === "svg" && (i = a), a = s.parentNode;
        s = i
    } else break;
    return r
}

const Is = {Enter: [[0, 1], [1, 1]], Exit: [[0, 0], [1, 0]], Any: [[1, 0], [0, 1]], All: [[0, 0], [1, 1]]},
    Be = {start: 0, center: .5, end: 1};

function Qe(e, t, r = 0) {
    let s = 0;
    if (Be[e] !== void 0 && (e = Be[e]), typeof e == "string") {
        const n = parseFloat(e);
        e.endsWith("px") ? s = n : e.endsWith("%") ? e = n / 100 : e.endsWith("vw") ? s = n / 100 * document.documentElement.clientWidth : e.endsWith("vh") ? s = n / 100 * document.documentElement.clientHeight : e = n
    }
    return typeof e == "number" && (s = t * e), r + s
}

const Vs = [0, 0];

function Ds(e, t, r, s) {
    let n = Array.isArray(e) ? e : Vs, o = 0, i = 0;
    return typeof e == "number" ? n = [e, e] : typeof e == "string" && (e = e.trim(), e.includes(" ") ? n = e.split(" ") : n = [e, Be[e] ? e : "0"]), o = Qe(n[0], r, s), i = Qe(n[1], t), o - i
}

const Us = {x: 0, y: 0};

function Ms(e) {
    return "getBBox" in e && e.tagName !== "svg" ? e.getBBox() : {width: e.clientWidth, height: e.clientHeight}
}

function Ns(e, t, r) {
    let {offset: s = Is.All} = r;
    const {target: n = e, axis: o = "y"} = r, i = o === "y" ? "height" : "width", a = n !== e ? Es(n, e) : Us,
        u = n === e ? {width: e.scrollWidth, height: e.scrollHeight} : Ms(n),
        d = {width: e.clientWidth, height: e.clientHeight};
    t[o].offset.length = 0;
    let c = !t[o].interpolate;
    const v = s.length;
    for (let f = 0; f < v; f++) {
        const g = Ds(s[f], d[i], u[i], a[o]);
        !c && g !== t[o].interpolatorOffsets[f] && (c = !0), t[o].offset[f] = g
    }
    c && (t[o].interpolate = yt(t[o].offset, wt(s)), t[o].interpolatorOffsets = [...t[o].offset]), t[o].progress = t[o].interpolate(t[o].current)
}

function Rs(e, t = e, r) {
    if (r.x.targetOffset = 0, r.y.targetOffset = 0, t !== e) {
        let s = t;
        for (; s && s !== e;) r.x.targetOffset += s.offsetLeft, r.y.targetOffset += s.offsetTop, s = s.offsetParent
    }
    r.x.targetLength = t === e ? t.scrollWidth : t.clientWidth, r.y.targetLength = t === e ? t.scrollHeight : t.clientHeight, r.x.containerLength = e.clientWidth, r.y.containerLength = e.clientHeight
}

function Hs(e, t, r, s = {}) {
    return {
        measure: () => Rs(e, s.target, r), update: n => {
            Ls(e, r, n), (s.offset || s.target) && Ns(e, r, s)
        }, notify: () => t(r)
    }
}

const le = new WeakMap, Ze = new WeakMap, Ce = new WeakMap, et = e => e === document.documentElement ? window : e;

function _s(e, {container: t = document.documentElement, ...r} = {}) {
    let s = Ce.get(t);
    s || (s = new Set, Ce.set(t, s));
    const n = As(), o = Hs(t, e, n, r);
    if (s.add(o), !le.has(t)) {
        const a = () => {
            for (const f of s) f.measure()
        }, u = () => {
            for (const f of s) f.update(or.timestamp)
        }, d = () => {
            for (const f of s) f.notify()
        }, c = () => {
            ne.read(a, !1, !0), ne.update(u, !1, !0), ne.update(d, !1, !0)
        };
        le.set(t, c);
        const v = et(t);
        window.addEventListener("resize", c, {passive: !0}), t !== document.documentElement && Ze.set(t, ks(t, c)), v.addEventListener("scroll", c, {passive: !0})
    }
    const i = le.get(t);
    return ne.read(i, !1, !0), () => {
        var a;
        Ie(i);
        const u = Ce.get(t);
        if (!u || (u.delete(o), u.size)) return;
        const d = le.get(t);
        le.delete(t), d && (et(t).removeEventListener("scroll", d), (a = Ze.get(t)) === null || a === void 0 || a(), window.removeEventListener("resize", d))
    }
}

function tt(e, t) {
    ir(!!(!t || t.current), `You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)
}

const Os = () => ({scrollX: ce(0), scrollY: ce(0), scrollXProgress: ce(0), scrollYProgress: ce(0)});

function Ws({container: e, target: t, layoutEffect: r = !0, ...s} = {}) {
    const n = Ee(Os);
    return (r ? bt : h.useEffect)(() => (tt("target", t), tt("container", e), _s(({x: i, y: a}) => {
        n.scrollX.set(i.current), n.scrollXProgress.set(i.progress), n.scrollY.set(a.current), n.scrollYProgress.set(a.progress)
    }, {
        ...s,
        container: (e == null ? void 0 : e.current) || void 0,
        target: (t == null ? void 0 : t.current) || void 0
    })), [e, t, JSON.stringify(s.offset)]), n
}

function $s(e, t) {
    let r;
    const s = () => {
        const {currentTime: n} = t, i = (n === null ? 0 : n.value) / 100;
        r !== i && e(i), r = i
    };
    return ne.update(s, !0), () => Ie(s)
}

const Fs = ar(() => window.ScrollTimeline !== void 0);

class Ht {
    constructor(t) {
        this.animations = t.filter(Boolean)
    }

    then(t, r) {
        return Promise.all(this.animations).then(t).catch(r)
    }

    getAll(t) {
        return this.animations[0][t]
    }

    setAll(t, r) {
        for (let s = 0; s < this.animations.length; s++) this.animations[s][t] = r
    }

    attachTimeline(t) {
        const r = this.animations.map(s => {
            if (Fs() && s.attachTimeline) s.attachTimeline(t); else return s.pause(), $s(n => {
                s.time = s.duration * n
            }, t)
        });
        return () => {
            r.forEach((s, n) => {
                s && s(), this.animations[n].stop()
            })
        }
    }

    get time() {
        return this.getAll("time")
    }

    set time(t) {
        this.setAll("time", t)
    }

    get speed() {
        return this.getAll("speed")
    }

    set speed(t) {
        this.setAll("speed", t)
    }

    get duration() {
        let t = 0;
        for (let r = 0; r < this.animations.length; r++) t = Math.max(t, this.animations[r].duration);
        return t
    }

    runAll(t) {
        this.animations.forEach(r => r[t]())
    }

    play() {
        this.runAll("play")
    }

    pause() {
        this.runAll("pause")
    }

    stop() {
        this.runAll("stop")
    }

    cancel() {
        this.runAll("cancel")
    }

    complete() {
        this.runAll("complete")
    }
}

function js(e) {
    return typeof e == "object" && !Array.isArray(e)
}

function zs(e) {
    const t = {
        presenceContext: null,
        props: {},
        visualState: {
            renderState: {transform: {}, transformOrigin: {}, style: {}, vars: {}, attrs: {}},
            latestValues: {}
        }
    }, r = lr(e) ? new cr(t, {enableHardwareAcceleration: !1}) : new ur(t, {enableHardwareAcceleration: !0});
    r.mount(e), xe.set(e, r)
}

function Gs(e, t = 100) {
    const r = dr({keyframes: [0, t], ...e}), s = Math.min(mr(r), hr);
    return {type: "keyframes", ease: n => r.next(s * n).value / t, duration: fr(s)}
}

function rt(e, t, r, s) {
    var n;
    return typeof t == "number" ? t : t.startsWith("-") || t.startsWith("+") ? Math.max(0, e + parseFloat(t)) : t === "<" ? r : (n = s.get(t)) !== null && n !== void 0 ? n : e
}

const qs = (e, t, r) => {
    const s = t - e;
    return ((r - e) % s + s) % s + e
};

function Xs(e, t) {
    return pr(e) ? e[qs(0, e.length, t)] : e
}

function Js(e, t, r) {
    for (let s = 0; s < e.length; s++) {
        const n = e[s];
        n.at > t && n.at < r && (Sr(e, n), s--)
    }
}

function Ys(e, t, r, s, n, o) {
    Js(e, n, o);
    for (let i = 0; i < t.length; i++) e.push({value: t[i], at: gr(n, o, s[i]), easing: Xs(r, i)})
}

function Ks(e, t) {
    return e.at === t.at ? e.value === null ? 1 : t.value === null ? -1 : 0 : e.at - t.at
}

const Qs = "easeInOut";

function Zs(e, {defaultTransition: t = {}, ...r} = {}, s) {
    const n = t.duration || .3, o = new Map, i = new Map, a = {}, u = new Map;
    let d = 0, c = 0, v = 0;
    for (let f = 0; f < e.length; f++) {
        const g = e[f];
        if (typeof g == "string") {
            u.set(g, c);
            continue
        } else if (!Array.isArray(g)) {
            u.set(g.name, rt(c, g.at, d, u));
            continue
        }
        let [S, p, y = {}] = g;
        y.at !== void 0 && (c = rt(c, y.at, d, u));
        let b = 0;
        const B = (x, k, L, w = 0, E = 0) => {
            const T = en(x), {delay: F = 0, times: I = wt(T), type: ye = "keyframes", ...j} = k;
            let {ease: ie = t.ease || "easeOut", duration: V} = k;
            const z = typeof F == "function" ? F(w, E) : F, Q = T.length;
            if (Q <= 2 && ye === "spring") {
                let ee = 100;
                if (Q === 2 && sn(T)) {
                    const K = T[1] - T[0];
                    ee = Math.abs(K)
                }
                const N = {...j};
                V !== void 0 && (N.duration = br(V));
                const Y = Gs(N, ee);
                ie = Y.ease, V = Y.duration
            }
            V ?? (V = n);
            const Z = c + z, G = Z + V;
            I.length === 1 && I[0] === 0 && (I[1] = 1);
            const ae = I.length - T.length;
            ae > 0 && yr(I, ae), T.length === 1 && T.unshift(null), Ys(L, T, ie, I, Z, G), b = Math.max(z + V, b), v = Math.max(G, v)
        };
        if (Ct(S)) {
            const x = st(S, i);
            B(p, y, nt("default", x))
        } else {
            const x = De(S, s, a), k = x.length;
            for (let L = 0; L < k; L++) {
                p = p, y = y;
                const w = x[L], E = st(w, i);
                for (const T in p) B(p[T], tn(y, T), nt(T, E), L, k)
            }
            d = c, c += b
        }
    }
    return i.forEach((f, g) => {
        for (const S in f) {
            const p = f[S];
            p.sort(Ks);
            const y = [], b = [], B = [];
            for (let k = 0; k < p.length; k++) {
                const {at: L, value: w, easing: E} = p[k];
                y.push(w), b.push(Pt(0, v, L)), B.push(E || "easeOut")
            }
            b[0] !== 0 && (b.unshift(0), y.unshift(y[0]), B.unshift(Qs)), b[b.length - 1] !== 1 && (b.push(1), y.push(null)), o.has(g) || o.set(g, {
                keyframes: {},
                transition: {}
            });
            const x = o.get(g);
            x.keyframes[S] = y, x.transition[S] = {...t, duration: v, ease: B, times: b, ...r}
        }
    }), o
}

function st(e, t) {
    return !t.has(e) && t.set(e, {}), t.get(e)
}

function nt(e, t) {
    return t[e] || (t[e] = []), t[e]
}

function en(e) {
    return Array.isArray(e) ? e : [e]
}

function tn(e, t) {
    return e[t] ? {...e, ...e[t]} : {...e}
}

const rn = e => typeof e == "number", sn = e => e.every(rn);

function _t(e, t, r, s) {
    const n = De(e, s), o = n.length;
    vt(!!o, "No valid element provided.");
    const i = [];
    for (let a = 0; a < o; a++) {
        const u = n[a];
        xe.has(u) || zs(u);
        const d = xe.get(u), c = {...r};
        typeof c.delay == "function" && (c.delay = c.delay(a, o)), i.push(...vr(d, {...t, transition: c}, {}))
    }
    return new Ht(i)
}

const nn = e => Array.isArray(e) && Array.isArray(e[0]);

function on(e, t, r) {
    const s = [];
    return Zs(e, t, r).forEach(({keyframes: o, transition: i}, a) => {
        let u;
        Ct(a) ? u = Tt(a, o.default, i.default) : u = _t(a, o, i), s.push(u)
    }), new Ht(s)
}

const an = e => {
    function t(r, s, n) {
        let o;
        return nn(r) ? o = on(r, s, e) : js(s) ? o = _t(r, s, n, e) : o = Tt(r, s, n), e && e.animations.push(o), o
    }

    return t
}, ln = an();
var he = (e, t) => {
    const r = h.useRef(!1), s = h.useRef(!1);
    h.useEffect(() => {
        if (r.current && s.current) return e();
        s.current = !0
    }, t), h.useEffect(() => (r.current = !0, () => {
        r.current = !1
    }), [])
};

function cn() {
    var e = h.useRef(!0);
    return e.current ? (e.current = !1, !0) : e.current
}

var un = function (e, t) {
    var r = cn();
    h.useEffect(function () {
        if (!r) return e()
    }, t)
};

function dn(e, t) {
    t === void 0 && (t = 0);
    var r = h.useRef(!1), s = h.useRef(), n = h.useRef(e), o = h.useCallback(function () {
        return r.current
    }, []), i = h.useCallback(function () {
        r.current = !1, s.current && clearTimeout(s.current), s.current = setTimeout(function () {
            r.current = !0, n.current()
        }, t)
    }, [t]), a = h.useCallback(function () {
        r.current = null, s.current && clearTimeout(s.current)
    }, []);
    return h.useEffect(function () {
        n.current = e
    }, [e]), h.useEffect(function () {
        return i(), a
    }, [t]), [o, a, i]
}

function mn(e, t, r) {
    t === void 0 && (t = 0), r === void 0 && (r = []);
    var s = dn(e, t), n = s[0], o = s[1], i = s[2];
    return h.useEffect(i, r), [n, o]
}

var hn = function (e) {
    h.useEffect(e, [])
}, fn = function (e, t) {
    var r = h.useRef(function () {
    });
    h.useEffect(function () {
        r.current = e
    }), h.useEffect(function () {
        if (t !== null) {
            var s = setInterval(function () {
                return r.current()
            }, t || 0);
            return function () {
                return clearInterval(s)
            }
        }
    }, [t])
}, pn = function (e) {
    var t = h.useRef(e);
    t.current = e, hn(function () {
        return function () {
            return t.current()
        }
    })
}, gn = function (e) {
    var t = h.useRef(0), r = h.useState(e), s = r[0], n = r[1], o = h.useCallback(function (i) {
        cancelAnimationFrame(t.current), t.current = requestAnimationFrame(function () {
            n(i)
        })
    }, []);
    return pn(function () {
        cancelAnimationFrame(t.current)
    }), [s, o]
}, wo = function (e, t) {
    e === void 0 && (e = 1 / 0), t === void 0 && (t = 1 / 0);
    var r = gn({width: we ? window.innerWidth : e, height: we ? window.innerHeight : t}), s = r[0], n = r[1];
    return h.useEffect(function () {
        if (we) {
            var o = function () {
                n({width: window.innerWidth, height: window.innerHeight})
            };
            return Qr(window, "resize", o), function () {
                Zr(window, "resize", o)
            }
        }
    }, []), s
};
const Te = l.object({
        pairChartSettings: Pr.optional(),
        globalChartSettings: wr.optional(),
        chartStudyTemplates: l.array(Cr).optional()
    }), ot = "chart.lastUsedTimeBasedResolution", it = "chartproperties.mainSeriesProperties", Sn = D(ge, Tr, (e, t) => ({
        actions: {
            async allChartStudyTemplates() {
                const r = await H(e.currentUser);
                return r ? t.findByUserId(r.id) : []
            }, async persistChartStudyTemplate(r) {
                const s = await H(e.ensuredCurrentUser), o = (await t.findByUserId(s.id)).find(i => i.name === r.name);
                o ? await t.update({id: o.id, userId: s.id, input: r}) : await t.create(s.id, r)
            }, async deleteChartStudyTemplate(r) {
                await t.delete(r)
            }
        }
    })), yn = D(ge, Br, Se, (e, t, r) => {
        const s = e.currentUser.pipe(kr(i => i ? new xr(a => t.findByUserIdSnapshot({
            userId: i.id, onResult: u => {
                a.next(u)
            }, onError: u => {
                r.error({
                    event: {
                        id: "failedOnReadingGlobalChartSettingsStore",
                        data: {error: u, userId: i.id}
                    }
                }), a.error(u)
            }
        })) : kt(void 0)), qe), n = new xt, o = Ar(s, n).pipe(qe);
        return {
            all: o, actions: {
                async createGlobalChartSettings(i) {
                    const a = await H(e.ensuredCurrentUser);
                    await t.create(a.id, i)
                }, async updateGlobalChartSettings(i, a) {
                    const u = await H(e.ensuredCurrentUser);
                    await t.update({id: i, userId: u.id, input: a})
                }, async persistGlobalChartSettings(i) {
                    const a = await H(o), u = await H(e.ensuredCurrentUser);
                    if (a) {
                        const d = {...a, settings: {...a.settings, ...i.settings}};
                        n.next(d), await this.updateGlobalChartSettings(a.id, d).catch(c => {
                            r.error({event: {id: "failedUpdatingGlobalChartSettings", data: {error: c, userId: u.id}}})
                        })
                    } else await this.createGlobalChartSettings(i)
                }
            }
        }
    }), bn = D(ge, Lr, (e, t) => {
        const r = async n => {
            const o = await H(e.ensuredCurrentUser);
            await t.create(o.id, n)
        }, s = async (n, o) => {
            const i = await H(e.ensuredCurrentUser);
            await t.update({pairChartSettings: n, input: o, userId: i.id})
        };
        return {
            actions: {
                async getPairChartSettings(n) {
                    const o = await H(e.currentUser);
                    if (!o) return;
                    const i = await t.findByPairId({userId: o.id, pairId: n.pair.pairId, chainId: n.pair.chainId});
                    if (i) return i
                }, async persistPairChartSettings(n) {
                    const o = await H(e.ensuredCurrentUser),
                        i = await t.findByPairId({userId: o.id, pairId: n.pair.pairId, chainId: n.pair.chainId});
                    i ? await s(i, n) : await r(n)
                }
            }
        }
    }),
    vn = ["volumePaneSize", "editorFontsList", "priceScaleSelectionStrategyName", "paneProperties.backgroundType", "paneProperties.background", "paneProperties.backgroundGradientStartColor", "paneProperties.backgroundGradientEndColor", "paneProperties.vertGridProperties.color", "paneProperties.vertGridProperties.style", "paneProperties.horzGridProperties.color", "paneProperties.horzGridProperties.style", "paneProperties.crossHairProperties.color", "paneProperties.crossHairProperties.style", "paneProperties.crossHairProperties.transparency", "paneProperties.crossHairProperties.width", "paneProperties.topMargin", "paneProperties.bottomMargin", "paneProperties.axisProperties.autoScale", "paneProperties.axisProperties.percentage", "paneProperties.axisProperties.indexedTo100", "paneProperties.axisProperties.log", "paneProperties.axisProperties.alignLabels", "paneProperties.axisProperties.isInverted", "paneProperties.legendProperties.showStudyArguments", "paneProperties.legendProperties.showStudyTitles", "paneProperties.legendProperties.showStudyValues", "paneProperties.legendProperties.showSeriesTitle", "paneProperties.legendProperties.showSeriesOHLC", "paneProperties.legendProperties.showLegend", "paneProperties.legendProperties.showBarChange", "paneProperties.legendProperties.showBackground", "paneProperties.legendProperties.backgroundTransparency", "scalesProperties.axisHighlightColor", "scalesProperties.axisLineToolLabelBackgroundColorActive", "scalesProperties.axisLineToolLabelBackgroundColorCommon", "scalesProperties.backgroundColor", "scalesProperties.lineColor", "scalesProperties.textColor", "scalesProperties.fontSize", "scalesProperties.scaleSeriesOnly", "scalesProperties.showSeriesLastValue", "scalesProperties.seriesLastValueMode", "scalesProperties.showSeriesPrevCloseValue", "scalesProperties.showStudyLastValue", "scalesProperties.showSymbolLabels", "scalesProperties.showStudyPlotLabels", "scalesProperties.showPriceScaleCrosshairLabel", "scalesProperties.showTimeScaleCrosshairLabel", "timeScale.rightOffset", "sessions.vertlines.sessBreaks.color", "sessions.vertlines.sessBreaks.style", "sessions.vertlines.sessBreaks.visible", "sessions.vertlines.sessBreaks.width", "mainSeriesProperties.style", "mainSeriesProperties.visible", "mainSeriesProperties.showPriceLine", "mainSeriesProperties.priceLineWidth", "mainSeriesProperties.priceLineColor", "mainSeriesProperties.baseLineColor", "mainSeriesProperties.showPrevClosePriceLine", "mainSeriesProperties.prevClosePriceLineWidth", "mainSeriesProperties.prevClosePriceLineColor", "mainSeriesProperties.showCountdown", "mainSeriesProperties.priceAxisProperties.autoScale", "mainSeriesProperties.priceAxisProperties.lockScale", "mainSeriesProperties.priceAxisProperties.percentage", "mainSeriesProperties.priceAxisProperties.indexedTo100", "mainSeriesProperties.priceAxisProperties.log", "mainSeriesProperties.priceAxisProperties.isInverted", "mainSeriesProperties.priceAxisProperties.alignLabels", "mainSeriesProperties.statusViewStyle.showExchange", "mainSeriesProperties.statusViewStyle.showInterval", "mainSeriesProperties.statusViewStyle.symbolTextSource", "symbolWatermarkProperties.color ", "symbolWatermarkProperties.visibility ", "mainSeriesProperties.highLowAvgPrice.highLowPriceLinesVisible", "mainSeriesProperties.highLowAvgPrice.highLowPriceLabelsVisible", "mainSeriesProperties.highLowAvgPrice.averageClosePriceLineVisible", "mainSeriesProperties.highLowAvgPrice.averageClosePriceLabelVisible", "mainSeriesProperties.candleStyle.upColor", "mainSeriesProperties.candleStyle.downColor", "mainSeriesProperties.candleStyle.drawWick", "mainSeriesProperties.candleStyle.drawBorder", "mainSeriesProperties.candleStyle.borderColor", "mainSeriesProperties.candleStyle.borderUpColor", "mainSeriesProperties.candleStyle.borderDownColor", "mainSeriesProperties.candleStyle.wickColor", "mainSeriesProperties.candleStyle.wickUpColor", "mainSeriesProperties.candleStyle.wickDownColor", "mainSeriesProperties.candleStyle.barColorsOnPrevClose", "mainSeriesProperties.candleStyle.drawBody", "mainSeriesProperties.hollowCandleStyle.upColor", "mainSeriesProperties.hollowCandleStyle.downColor", "mainSeriesProperties.hollowCandleStyle.drawWick", "mainSeriesProperties.hollowCandleStyle.drawBorder", "mainSeriesProperties.hollowCandleStyle.borderColor", "mainSeriesProperties.hollowCandleStyle.borderUpColor", "mainSeriesProperties.hollowCandleStyle.borderDownColor", "mainSeriesProperties.hollowCandleStyle.wickColor", "mainSeriesProperties.hollowCandleStyle.wickUpColor", "mainSeriesProperties.hollowCandleStyle.wickDownColor", "mainSeriesProperties.hollowCandleStyle.drawBody", "mainSeriesProperties.haStyle.upColor", "mainSeriesProperties.haStyle.downColor", "mainSeriesProperties.haStyle.drawWick", "mainSeriesProperties.haStyle.drawBorder", "mainSeriesProperties.haStyle.borderColor", "mainSeriesProperties.haStyle.borderUpColor", "mainSeriesProperties.haStyle.borderDownColor", "mainSeriesProperties.haStyle.wickColor", "mainSeriesProperties.haStyle.wickUpColor", "mainSeriesProperties.haStyle.wickDownColor", "mainSeriesProperties.haStyle.barColorsOnPrevClose", "mainSeriesProperties.haStyle.drawBody", "mainSeriesProperties.barStyle.upColor", "mainSeriesProperties.barStyle.downColor", "mainSeriesProperties.barStyle.barColorsOnPrevClose", "mainSeriesProperties.barStyle.dontDrawOpen", "mainSeriesProperties.barStyle.thinBars", "mainSeriesProperties.columnStyle.upColor", "mainSeriesProperties.columnStyle.downColor", "mainSeriesProperties.columnStyle.barColorsOnPrevClose", "mainSeriesProperties.columnStyle.priceSource", "mainSeriesProperties.lineStyle.color", "mainSeriesProperties.lineStyle.linestyle", "mainSeriesProperties.lineStyle.linewidth", "mainSeriesProperties.lineStyle.priceSource", "mainSeriesProperties.areaStyle.color1", "mainSeriesProperties.areaStyle.color2", "mainSeriesProperties.areaStyle.linecolor", "mainSeriesProperties.areaStyle.linestyle", "mainSeriesProperties.areaStyle.linewidth", "mainSeriesProperties.areaStyle.priceSource", "mainSeriesProperties.areaStyle.transparency", "mainSeriesProperties.baselineStyle.baselineColor", "mainSeriesProperties.baselineStyle.topFillColor1", "mainSeriesProperties.baselineStyle.topFillColor2", "mainSeriesProperties.baselineStyle.bottomFillColor1", "mainSeriesProperties.baselineStyle.bottomFillColor2", "mainSeriesProperties.baselineStyle.topLineColor", "mainSeriesProperties.baselineStyle.bottomLineColor", "mainSeriesProperties.baselineStyle.topLineWidth", "mainSeriesProperties.baselineStyle.bottomLineWidth", "mainSeriesProperties.baselineStyle.priceSource", "mainSeriesProperties.baselineStyle.transparency", "mainSeriesProperties.baselineStyle.baseLevelPercentage", "mainSeriesProperties.hiloStyle.color", "mainSeriesProperties.hiloStyle.showBorders", "mainSeriesProperties.hiloStyle.borderColor", "mainSeriesProperties.hiloStyle.showLabels", "mainSeriesProperties.hiloStyle.labelColor", "mainSeriesProperties.pbStyle.upColor", "mainSeriesProperties.pbStyle.downColor", "mainSeriesProperties.pbStyle.borderUpColor", "mainSeriesProperties.pbStyle.borderDownColor", "mainSeriesProperties.pbStyle.upColorProjection", "mainSeriesProperties.pbStyle.downColorProjection", "mainSeriesProperties.pbStyle.borderUpColorProjection", "mainSeriesProperties.pbStyle.borderDownColorProjection", "mainSeriesProperties.renkoStyle.upColor", "mainSeriesProperties.renkoStyle.downColor", "mainSeriesProperties.renkoStyle.borderUpColor", "mainSeriesProperties.renkoStyle.borderDownColor", "mainSeriesProperties.renkoStyle.upColorProjection", "mainSeriesProperties.renkoStyle.downColorProjection", "mainSeriesProperties.renkoStyle.borderUpColorProjection", "mainSeriesProperties.renkoStyle.borderDownColorProjection", "mainSeriesProperties.renkoStyle.wickUpColor", "mainSeriesProperties.renkoStyle.wickDownColor", "mainSeriesProperties.kagiStyle.upColor", "mainSeriesProperties.kagiStyle.downColor", "mainSeriesProperties.kagiStyle.upColorProjection", "mainSeriesProperties.kagiStyle.downColorProjection", "mainSeriesProperties.pnfStyle.upColor", "mainSeriesProperties.pnfStyle.downColor", "mainSeriesProperties.pnfStyle.upColorProjection", "mainSeriesProperties.pnfStyle.downColorProjection", "mainSeriesProperties.rangeStyle.upColor", "mainSeriesProperties.rangeStyle.downColor", "mainSeriesProperties.rangeStyle.thinBars", "mainSeriesProperties.rangeStyle.upColorProjection", "mainSeriesProperties.rangeStyle.downColorProjection"],
    Co = ({background: e, width: t, scrollContainerRef: r, forceVisibility: s}) => {
        const n = Er("white", "black"), [o, i] = h.useState(s === !0), {scrollXProgress: a} = Ws({
            container: r,
            axis: "x"
        }), u = Nt(s ? 1 : 0), d = Ss(a, [0, .9, 1], [1, 1, 0]), {current: c} = r;
        return h.useEffect(() => {
            (async () => {
                if (c) {
                    const {clientWidth: f, scrollWidth: g} = c;
                    g > f && await ln(u, 1), i(!0);
                    return
                }
            })()
        }, [u, c]), O.jsx(At, {
            as: Ir.div,
            pointerEvents: "none",
            position: "absolute",
            width: t ?? "50px",
            height: "100%",
            bgGradient: `linear(to-r, transparent, ${e ?? n})`,
            left: "0",
            top: "0",
            transform: "translateX(-100%)",
            style: {opacity: o ? d : u},
            initial: {opacity: s ? 1 : 0}
        })
    }, Pn = M({
        timestamp: P(),
        open: m(),
        openUsd: m().nullable(),
        high: m(),
        highUsd: m().nullable(),
        low: m(),
        lowUsd: m().nullable(),
        close: m(),
        closeUsd: m().nullable(),
        volumeUsd: m().nullable()
    }), wn = l.object({
        timestamp: l.number(),
        open: l.string(),
        openUsd: l.string().nullable(),
        high: l.string(),
        highUsd: l.string().nullable(),
        low: l.string(),
        lowUsd: l.string().nullable(),
        close: l.string(),
        closeUsd: l.string().nullable(),
        volumeUsd: l.string().nullable(),
        minBlockNumber: l.number(),
        maxBlockNumber: l.number()
    }), Cn = M({
        timestamp: P(),
        open: m(),
        openUsd: m().nullable(),
        high: m(),
        highUsd: m().nullable(),
        low: m(),
        lowUsd: m().nullable(),
        close: m(),
        closeUsd: m().nullable(),
        volumeUsd: m().nullable(),
        minBlockNumber: P(),
        maxBlockNumber: P()
    });
M({schemaVersion: m(), bars: oe(Pn).nullable()});
export const Tn = l.object({schemaVersion: l.string(), bars: Ve(wn).nullable()}),
    kn = M({schemaVersion: m(), bars: oe(Cn).nullable()}), xn = D(Lt(), e => {
        const t = {
            schemaVersion: "1.0.0",
            format: "json",
            endpoints: {root: `${e.DS_DEX_CHART_UNISWAP_HOST}/dex/chart/uniswap`}
        }, r = {
            schemaVersion: "1.0.0",
            format: "json",
            endpoints: {root: `${e.DS_DEX_CHART_BALANCER_HOST}/dex/balancer/chart`}
        }, s = {
            schemaVersion: "1.0.0",
            format: "json",
            endpoints: {root: `${e.DS_DEX_CHART_OSMOSIS_HOST}/dex/osmosis/chart`}
        }, n = {schemaVersion: "1.0.0", endpoints: {root: `${e.DS_DEX_CHART_AMM_HOST}/dex/chart/amm/v3`}};
        return {
            get(o) {
                var u, d;
                const i = (u = o == null ? void 0 : o.context) == null ? void 0 : u.toLowerCase(),
                    a = (d = o == null ? void 0 : o.ammId) == null ? void 0 : d.toLowerCase();
                return i === "u" ? t : i === "b" ? r : i === "o" ? s : {...n, endpoints: {root: `${n.endpoints.root}/${a}`}}
            }
        }
    }), An = D(xn, Bt, (e, t) => {
        const r = s => {
            const n = e.get(s), o = new URL(`${n.endpoints.root}/bars/${s.chainId}/${encodeURIComponent(s.pairAddress)}`);
            return s.chartType === "marketCap" && (o.searchParams.set("mc", "1"), s.circulatingSupply && o.searchParams.set("cs", s.circulatingSupply.toString())), s.beforeBlockNumber && o.searchParams.set("bbn", s.beforeBlockNumber.toString()), s.afterBlockNumber && o.searchParams.set("abn", s.afterBlockNumber.toString()), o.searchParams.set("res", s.resolution), o.searchParams.set("cb", s.countBack.toString()), o.searchParams.set("q", s.quoteTokenAddress), s.usdOnly || o.searchParams.set("uo", "0"), s.isInverted && o.searchParams.set("i", "1"), o
        };
        return {
            getBars: async s => {
                const n = r(s);
                return e.get(s).format === "json" ? t.get(n.toString(), Tn) : t.avro(n.toString(), kn)
            }
        }
    }), Bn = e => {
        const [t, r] = h.useState("visible"), [s, n] = h.useState(!0);
        return h.useEffect(() => {
            const o = () => {
                document.visibilityState === "hidden" ? (r("hidden"), e != null && e.hiddenDebounceInMs || n(!1)) : document.visibilityState === "visible" && (r("visible"), n(!0))
            };
            return document.addEventListener("visibilitychange", o), () => document.removeEventListener("visibilitychange", o)
        }, [e == null ? void 0 : e.hiddenDebounceInMs]), mn(() => {
            e != null && e.hiddenDebounceInMs && t === "hidden" && n(!1)
        }, e == null ? void 0 : e.hiddenDebounceInMs, [e == null ? void 0 : e.hiddenDebounceInMs, t]), s
    }, at = {
        production: {visibleDefault: 4500, visibleFast: 3e3, invisible: 1e4},
        development: {visibleDefault: 3e3, visibleFast: 1e3, invisible: 5e3}
    }, lt = e => {
        const t = e.isDev ? at.development : at.production;
        return e.isPageVisible ? e.m5Txns >= 20 || e.isMoonshot ? {
            type: "visibleFast",
            rate: t.visibleFast
        } : {type: "visibleDefault", rate: t.visibleDefault} : {type: "invisible", rate: t.invisible}
    }, ct = e => {
        console.log(new Date, `${e.source}.polling.type=${e.chartAndTxnsPollingRate.type} ${e.source}.polling.rate=${e.chartAndTxnsPollingRate.rate}`)
    }, Ln = e => {
        const r = h.useMemo(() => !!(typeof window < "u" && window.location.search.includes("debugPolling=1")), []),
            s = Bn({hiddenDebounceInMs: 3e4}), n = Vr(e.pair), [o, i] = h.useState(() => {
                const a = lt({isPageVisible: s, m5Txns: e.pair.txns.m5.buys + e.pair.txns.m5.sells, isDev: !1, isMoonshot: n});
                return r && ct({source: e.source, chartAndTxnsPollingRate: a}), a
            });
        return un(() => {
            const a = lt({isPageVisible: s, m5Txns: e.pair.txns.m5.buys + e.pair.txns.m5.sells, isDev: !1, isMoonshot: n});
            (a.type !== o.type || a.rate !== o.rate) && (r && ct({source: e.source, chartAndTxnsPollingRate: a}), i(a))
        }, [r, o.type, o.rate, s, e.pair.txns.m5.buys, e.pair.txns.m5.sells, !1, n]), {
            chartAndTxnsPollingRate: o,
            isPageVisible: s,
            debugPolling: r
        }
    }, Ot = l.object({
        buys: l.number(),
        sells: l.number(),
        volumeUsdBuy: l.number(),
        volumeUsdSell: l.number(),
        amountBuy: l.string(),
        amountSell: l.string(),
        balanceAmount: l.string().nullable(),
        balancePercentage: l.number().nullable(),
        firstSwap: l.number(),
        new: l.boolean()
    }), Ue = M({
        buys: P(),
        sells: P(),
        volumeUsdBuy: P(),
        volumeUsdSell: P(),
        amountBuy: m(),
        amountSell: m(),
        balanceAmount: m().nullable(),
        balancePercentage: P().nullable(),
        firstSwap: P(),
        new: Dr()
    }), En = l.object({
        logType: l.literal("swap"),
        blockNumber: l.number(),
        blockTimestamp: l.number(),
        txnHash: l.string(),
        maker: l.string().optional(),
        makerScreener: Ot.optional(),
        logIndex: l.number(),
        txnType: l.literal("buy").or(l.literal("sell")),
        priceUsd: l.string().optional(),
        priceNative: l.string().optional(),
        volumeUsd: l.string().optional(),
        amount0: l.string(),
        amount1: l.string()
    }), In = En.extend({metadata: l.record(l.string(), l.string()).optional()}), Wt = M({
        logType: J("swap"),
        blockNumber: P(),
        blockTimestamp: P(),
        txnHash: m(),
        maker: m().optional(),
        makerScreener: Ue.optional(),
        logIndex: P(),
        txnType: J("buy").or(J("sell")),
        priceUsd: m().optional(),
        volumeUsd: m().optional(),
        amount0: m(),
        amount1: m()
    }), Vn = M({
        logType: J("swap"),
        blockNumber: P(),
        blockTimestamp: P(),
        txnHash: m(),
        maker: m().optional(),
        makerScreener: Ue.optional(),
        logIndex: P(),
        txnType: J("buy").or(J("sell")),
        priceUsd: m().optional(),
        priceNative: m().optional(),
        volumeUsd: m().optional(),
        amount0: m(),
        amount1: m()
    }), Dn = Wt.extend({metadata: Et(m(), m()).optional()}), Un = Vn.extend({metadata: Et(m(), m()).optional()}),
    Mn = l.object({
        logType: l.literal("add").or(l.literal("remove")),
        blockNumber: l.number(),
        blockTimestamp: l.number(),
        txnHash: l.string(),
        maker: l.string().optional(),
        makerScreener: Ot.optional(),
        logIndex: l.number(),
        amount0: l.string(),
        amount1: l.string()
    }), Me = M({
        logType: J("add").or(J("remove")),
        blockNumber: P(),
        blockTimestamp: P(),
        txnHash: m(),
        maker: m().optional(),
        makerScreener: Ue.optional(),
        logIndex: P(),
        amount0: m(),
        amount1: m()
    }), Nn = Wt.or(Me), Rn = In.or(Mn), Hn = Dn.or(Me), _n = Un.or(Me);
M({schemaVersion: m(), baseTokenSymbol: m().optional(), quoteTokenSymbol: m().optional(), logs: oe(Nn).nullable()});
M({logs: oe(Hn).nullable()});
export const On = l.object({logs: Ve(Rn).nullable()}), Wn = M({logs: oe(_n).nullable()}), $n = l.object({
        maker: l.string(),
        buys: l.number(),
        sells: l.number(),
        volumeUsdBuy: l.number(),
        volumeUsdSell: l.number(),
        amountBuy: l.string(),
        amountSell: l.string(),
        balanceAmount: l.string().nullable(),
        balancePercentage: l.number().nullable(),
        firstSwap: l.number(),
        lastSwap: l.number()
    }), Fn = M({
        maker: m(),
        buys: P(),
        sells: P(),
        volumeUsdBuy: P(),
        volumeUsdSell: P(),
        amountBuy: m(),
        amountSell: m(),
        balanceAmount: m().nullable(),
        balancePercentage: P().nullable(),
        firstSwap: P(),
        lastSwap: P()
    }), jn = Ve($n), zn = oe(Fn), Gn = D(Lt(), e => {
        const t = {format: "json", endpoints: {root: `${e.DS_DEX_LOG_UNISWAP_HOST}/dex/log/uniswap`}},
            r = {format: "json", endpoints: {root: `${e.DS_DEX_LOG_BALANCER_HOST}/dex/balancer/log`}},
            s = {format: "json", endpoints: {root: `${e.DS_DEX_LOG_OSMOSIS_HOST}/dex/osmosis/log`}},
            n = {endpoints: {root: `${e.DS_DEX_LOG_AMM_HOST}/dex/log/amm/v4`}};
        return {
            get(o) {
                return o.c === "u" ? {...t, route: "all"} : o.c === "b" ? {...r, route: "logs"} : o.c === "o" ? {
                    ...s,
                    route: "logs"
                } : {...n, route: "all", endpoints: {root: `${n.endpoints.root}/${o.c === "a" ? o.a : ""}`}}
            }
        }
    }), qn = D(Gn, Bt, (e, t) => {
        const r = ({pair: n, filters: o, isInverted: i, beforeBlockNumber: a, afterBlockNumber: u}) => {
            const d = e.get(n),
                c = new URL(`${d.endpoints.root}/${d.route}/${n.chainId}/${encodeURIComponent(n.pairAddress)}`);
            return a && c.searchParams.set("bbn", a.toString()), u && c.searchParams.set("abn", u.toString()), n.quoteToken.address && c.searchParams.set("q", n.quoteToken.address), i && c.searchParams.set("i", "1"), o.type && c.searchParams.set("ft", o.type), o.amountUsd.min && c.searchParams.set("vumi", o.amountUsd.min.toString()), o.amountUsd.max && c.searchParams.set("vuma", o.amountUsd.max.toString()), o.amount0.min && c.searchParams.set("a0mi", o.amount0.min.toString()), o.amount0.max && c.searchParams.set("a0ma", o.amount0.max.toString()), o.amount1.min && c.searchParams.set("a1mi", o.amount1.min.toString()), o.amount1.max && c.searchParams.set("a1ma", o.amount1.max.toString()), o.timestamp.min && c.searchParams.set("tss", o.timestamp.min.toString()), o.timestamp.max && c.searchParams.set("tse", o.timestamp.max.toString()), o.maker && c.searchParams.set("m", o.maker), c.searchParams.set("c", "1"), c
        }, s = ({pair: n, sortBy: o, maxDaysAgo: i}) => {
            const a = e.get(n), u = new URL(`${a.endpoints.root}/top/${n.chainId}/${encodeURIComponent(n.pairAddress)}`);
            return n.quoteToken.address && u.searchParams.set("q", n.quoteToken.address), i && u.searchParams.set("mda", i.toString()), o && o.type && u.searchParams.set("s", o.type), o && o.direction && u.searchParams.set("sd", o.direction), u
        };
        return {
            getServer: n => e.get(n), getLogs: async n => {
                const o = r(n).toString();
                return e.get(n.pair).format === "json" ? t.get(o.toString(), On) : t.avro(o.toString(), Wn)
            }, getTopMakers: async n => {
                const o = s(n);
                return e.get(n.pair).format === "json" ? t.get(o.toString(), jn) : t.avro(o.toString(), zn)
            }
        }
    }), Xn = D(qn, Se, (e, t) => {
        const r = new Ur(void 0);
        return {
            tradingHistoryResponse: r, fetchHistory: async o => {
                const i = r.getValue(), a = new Date().getTime();
                try {
                    const u = await e.getLogs(o), d = u.logs;
                    if (d) {
                        if (o.isFetchingPastTradingHistory && (i != null && i.success)) r.next({
                            ...i,
                            value: {...i.value, tradingHistory: [...i.value.tradingHistory, ...d], fetchedAtTimestamp: a}
                        }); else {
                            let c = [];
                            !o.isUpdatingFilter && i && i.success && i.value.tradingHistory && c.push(...i.value.tradingHistory), c = [...d, ...c], o.currentListRange && o.currentListRange.endIndex < 50 && (c = c.slice(0, 100)), c[0] && r.next({
                                success: !0,
                                value: {
                                    tradingHistory: c,
                                    latestBlockNumber: c[0].blockNumber,
                                    fetchedAtTimestamp: a,
                                    filteredResult: {byMaker: o.filters.maker !== null}
                                }
                            })
                        }
                        return
                    }
                    (!i || !i.success || o.isUpdatingFilter) && r.next({
                        success: !0,
                        value: {
                            ...u,
                            tradingHistory: [],
                            latestBlockNumber: null,
                            fetchedAtTimestamp: a,
                            filteredResult: {byMaker: o.filters.maker !== null}
                        }
                    })
                } catch (u) {
                    t.error({
                        event: {
                            id: "failedFetchingTradingHistory",
                            data: {
                                error: u,
                                chainId: o.pair.chainId,
                                pairId: o.pair.pairAddress,
                                recent: !o.isFetchingPastTradingHistory,
                                beforeBlockNumber: o.beforeBlockNumber,
                                afterBlockNumber: o.afterBlockNumber
                            }
                        }
                    }), i != null && i.success && o.isUpdatingFilter ? r.next({
                        success: !0,
                        value: {
                            ...i.value,
                            tradingHistory: [],
                            fetchedAtTimestamp: a,
                            filteredResult: {byMaker: o.filters.maker !== null}
                        }
                    }) : (!i || !i.success) && r.next({success: !1, error: "failed"})
                }
            }, clearHistory: () => r.next(void 0)
        }
    }), Jn = e => "txnType" in e ? e.txnType : e.logType, Yn = e => {
        if ("volumeUsd" in e) return e.volumeUsd
    }, Kn = {buy: "B", sell: "S", add: "A", remove: "R"},
    ut = {buy: "Bought", sell: "Sold", add: "Added", remove: "Removed"}, Qn = e => {
        const t = Jn(e.tradingHistory), r = Yn(e.tradingHistory);
        let s = "";
        if (r) {
            const n = Mr({number: r, significantDigits: 2, addCommas: !0});
            s = `${ut[t]} $${n} on ${Nr(e.tradingHistory.blockTimestamp, "MMM d yy hh:mm a")}`
        }
        return (t === "add" || t === "remove") && (s = `${ut[t]} ${e.tradingHistory.amount0} ${e.pairBaseTokenSymbol}`), {
            id: `${e.tradingHistory.txnHash}:${e.tradingHistory.logIndex}`,
            text: s,
            color: t === "remove" || t === "sell" ? "#e53e3e" : "#38a169",
            label: Kn[t],
            timestamp: e.tradingHistory.blockTimestamp
        }
    }, Zn = e => {
        const t = _(Xn), [r, s] = h.useState([]);
        return It(() => t.tradingHistoryResponse.pipe(Vt(n => {
            if (!n) {
                s([]);
                return
            }
            if (n.success) if (n.value.filteredResult.byMaker) {
                const o = n.value.tradingHistory.map(i => Qn({
                    tradingHistory: i,
                    pairBaseTokenSymbol: e.pair.baseToken.symbol
                }));
                s(o)
            } else r.length > 0 && s([])
        })), [t.tradingHistoryResponse, e.pair.baseToken.symbol, r.length]), {tradingHistoryMarks: r}
    }, eo = D(Se, Dt, (e, t) => ({
        async persistPairChartSettings(r) {
            var n;
            const s = {type: "savePairChartSettings", input: r};
            (n = t.ReactNativeWebView) == null || n.postMessage(JSON.stringify(s))
        }, async getPairChartSettings(r) {
            const s = Te.safeParse(t.chartSettingsWebView);
            if (!s.success) {
                e.error({
                    event: {
                        id: "failedParsingChartSettingsWebView",
                        data: {entityType: "pairChartSettings", error: s.error, pair: r.pair}
                    }
                });
                return
            }
            return s.data.pairChartSettings
        }, getGlobalChartSettings() {
            const r = new Rr, s = Te.safeParse(t.chartSettingsWebView);
            return s.success ? r.next(s.data.globalChartSettings) : (e.error({
                event: {
                    id: "failedParsingChartSettingsWebView",
                    data: {entityType: "globalChartSettings", error: s.error}
                }
            }), r.next(void 0)), r
        }, async persistGlobalChartSettings(r) {
            var n;
            const s = {type: "saveGlobalChartSettings", input: r};
            (n = t.ReactNativeWebView) == null || n.postMessage(JSON.stringify(s))
        }, async getStudyTemplates() {
            const r = Te.safeParse(t.chartSettingsWebView);
            return r.success ? r.data.chartStudyTemplates ?? [] : (e.error({
                event: {
                    id: "failedParsingChartSettingsWebView",
                    data: {entityType: "chartStudyTemplates", error: r.error}
                }
            }), [])
        }, async persistStudyTemplate(r) {
            var n;
            const s = {type: "saveChartStudyTemplate", input: r};
            (n = t.ReactNativeWebView) == null || n.postMessage(JSON.stringify(s))
        }, async deleteStudyTemplate(r) {
            var n;
            const s = {type: "deleteChartStudyTemplate", id: r};
            (n = t.ReactNativeWebView) == null || n.postMessage(JSON.stringify(s))
        }
    })), to = D(bn, yn, Sn, (e, t, r) => ({
        async persistPairChartSettings(s) {
            await e.actions.persistPairChartSettings(s)
        }, async getPairChartSettings(s) {
            return e.actions.getPairChartSettings(s)
        }, getGlobalChartSettings() {
            return t.all
        }, async persistGlobalChartSettings(s) {
            await t.actions.persistGlobalChartSettings(s)
        }, async getStudyTemplates() {
            return r.actions.allChartStudyTemplates()
        }, async persistStudyTemplate(s) {
            await r.actions.persistChartStudyTemplate(s)
        }, async deleteStudyTemplate(s) {
            await r.actions.deleteChartStudyTemplate(s)
        }
    })), Ne = D(Dt, to, eo, (e, t, r) => e.chartSettingsWebView ? r : t), ro = l.object({
        version: l.number(),
        panes: l.array(l.unknown()),
        symbol: l.string().optional(),
        interval: l.string().optional()
    }), dt = e => {
        const t = ro.parse(JSON.parse(e));
        return t.symbol && delete t.symbol, JSON.stringify(t)
    }, so = D(Ne, Hr, (e, t) => ({
        saveLineToolsAndGroups: async () => {
        },
        loadLineToolsAndGroups: async () => null,
        getAllCharts: async () => [],
        removeChart: async () => {
        },
        saveChart: async () => "",
        getChartContent: async () => "",
        getChartTemplateContent: async () => ({}),
        getAllChartTemplates: async () => [],
        saveChartTemplate: async () => {
        },
        removeChartTemplate: async () => {
        },
        getDrawingTemplates: async () => [],
        loadDrawingTemplate: async () => "",
        removeDrawingTemplate: async () => {
        },
        saveDrawingTemplate: async () => {
        },
        getAllStudyTemplates: async () => {
            try {
                return (await e.getStudyTemplates()).map(s => ({name: s.name, content: ""}))
            } catch {
                return t.track({event: "chart:studyTemplates:error"}), []
            }
        },
        getStudyTemplateContent: async r => {
            t.track({event: "chart:studyTemplates:apply"});
            try {
                const s = await e.getStudyTemplates();
                if (!s) return "";
                const n = s.find(o => o.name === r.name);
                return n ? dt(n.content) : ""
            } catch {
                return t.track({event: "chart:studyTemplates:error"}), ""
            }
        },
        saveStudyTemplate: async r => {
            t.track({event: "chart:studyTemplates:save"});
            try {
                await e.persistStudyTemplate({schemaVersion: "1.0.0", name: r.name, content: dt(r.content)})
            } catch {
                t.track({event: "chart:studyTemplates:error"})
            }
        },
        removeStudyTemplate: async r => {
            t.track({event: "chart:studyTemplates:delete"});
            try {
                const s = await e.getStudyTemplates();
                if (!s) return;
                const n = s.find(o => o.name === r.name);
                if (!n) return;
                await e.deleteStudyTemplate(n.id)
            } catch {
                t.track({event: "chart:studyTemplates:error"})
            }
        }
    })), mt = [q["1S"], q[1], q[5], q[15], q[60], q[240], q["1D"]],
    no = e => e && e === "a" ? mt : mt.filter(t => t.indexOf("S") === -1),
    oo = e => e && e === "a" ? Ae : Ae.filter(t => t.indexOf("S") === -1), io = e => Ae.find(t => t == e),
    ao = e => typeof e == "boolean" || typeof e == "number" || typeof e == "string", Le = (e, t = null, r = {}) => {
        for (const s in e) {
            const n = t ? `${t}.${s}` : s, o = e[s];
            Ut(o) ? Le(o, n, r) : ao(o) && (r[n] = o)
        }
        return r
    }, lo = e => {
        let t = {};
        if (!e) return t;
        const r = e.settings;
        if (r.chartproperties) {
            const s = JSON.parse(r.chartproperties);
            Ut(s) && (t = Le(s))
        }
        if (r[it]) {
            const s = Le({mainSeriesProperties: JSON.parse(r[it])});
            t = {...t, ...s}
        }
        for (const s of Object.keys(t)) vn.includes(s) || delete t[s];
        return t
    }, ht = new xt, co = e => {
        if (e && e.settings[ot]) return io(e.settings[ot])
    }, uo = D(Ne, e => async t => {
        let r = !1;
        const s = setTimeout(() => {
            r = !0, clearTimeout(s)
        }, 2e3);
        return {
            subscription: ht.pipe(ls(1e3), _r(o => o.length > 0), Or(o => o.reduce((i, a) => ({...i, ...a}), {}))).subscribe(async o => {
                await e.persistGlobalChartSettings({schemaVersion: "1.0.0", settings: o})
            }),
            widgetOverrides: lo(t),
            widgetLastUsedTime: co(t),
            settingsAdapter: {
                initialSettings: t == null ? void 0 : t.settings, setValue: async (o, i) => {
                    r && ht.next({[o]: i})
                }, removeValue: () => {
                }
            }
        }
    }), mo = D(es, e => async t => {
        if (t.trim().length < 2) return [];
        const r = Wr(e.searchPairs({query: t}));
        return await H(r)
    }), U = {
        default: {color: "var(--tv-color-toolbar-button-text,#d1d4dc)", fontWeight: "400"},
        active: {color: "var(--tv-color-toolbar-button-text-active,#2962ff)", fontWeight: "600"}
    }, ho = e => {
        var s;
        const t = `color:${U.active.color};font-weight:${U.active.fontWeight}`,
            r = (s = e.tvWidgetRef.current) == null ? void 0 : s.createButton();
        r && (e.chartType === "price" ? (r.style.color = "var(--tv-color-toolbar-button-text,#d1d4dc)", r.style.cursor = "pointer", r.addEventListener("click", () => e.onChartTypeChange("marketCap")), r.setAttribute("title", "Switch to market cap chart"), r.innerHTML = `<span style="${t}">Price</span> / MCap`) : (r.style.color = "var(--tv-color-toolbar-button-text,#d1d4dc)", r.style.cursor = "pointer", r.addEventListener("click", () => e.onChartTypeChange("price")), r.setAttribute("title", "Switch to price chart"), r.innerHTML = `Price / <span style="${t}">MCap</span>`))
    }, fo = e => {
        var s;
        if (!e.pair.priceUsd) return;
        const t = `color:${U.active.color};font-weight:${U.active.fontWeight}`,
            r = (s = e.tvWidgetRef.current) == null ? void 0 : s.createButton();
        if (r) {
            r.style.color = U.default.color, r.style.fontWeight = U.default.fontWeight, r.style.cursor = "pointer";
            const n = ue(e.isInverted ? e.pair.baseToken.symbol : e.pair.quoteTokenSymbol, 24);
            e.quotePricingMode === "usd" ? (r.innerHTML = `<span style="${t}">USD</span> / ${n}`, r.addEventListener("click", () => e.onQuotePricingModeChange("quote")), r.setAttribute("title", `Switch to price in ${n}`)) : (r.innerHTML = `USD / <span style="${t}">${n}</span>`, r.addEventListener("click", () => e.onQuotePricingModeChange("usd")), r.setAttribute("title", "Switch to price in USD"))
        }
    },
    po = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="100%" height="100%"><path fill="currentColor" d="M8.5 6A2.5 2.5 0 0 0 6 8.5V11h1V8.5C7 7.67 7.67 7 8.5 7H11V6H8.5zM6 17v2.5A2.5 2.5 0 0 0 8.5 22H11v-1H8.5A1.5 1.5 0 0 1 7 19.5V17H6zM19.5 7H17V6h2.5A2.5 2.5 0 0 1 22 8.5V11h-1V8.5c0-.83-.67-1.5-1.5-1.5zM22 19.5V17h-1v2.5c0 .83-.67 1.5-1.5 1.5H17v1h2.5a2.5 2.5 0 0 0 2.5-2.5z"></path></svg>',
    go = e => {
        var r;
        if (!e.isLargeScreen) return;
        const t = (r = e.tvWidgetRef.current) == null ? void 0 : r.createButton();
        if (t) return t.style.color = U.default.color, t.style.fontWeight = U.default.fontWeight, t.style.cursor = "pointer", t.innerHTML = `<span style="display:block;width:24px;height:24px;margin-right:2px;">${po}</span><span>Full</span>`, t.style.display = "flex", t.style.alignItems = "center", t.style.padding = "0 6px 0 2px", t.addEventListener("click", e.onToggleExpandCollapse), t
    }, ft = "tv-chart-container", To = ({
                                            chainId: e,
                                            dexId: t,
                                            pair: r,
                                            isInverted: s,
                                            circulatingSupply: n,
                                            isExpanded: o,
                                            quotePricingMode: i,
                                            chartType: a,
                                            onToggleExpandCollapse: u,
                                            onQuotePricingModeChange: d,
                                            onChartTypeChange: c,
                                            onLatestPrice: v,
                                            containerId: f,
                                            containerProps: g,
                                            widgetConfigOverrides: S,
                                            chartStyle: p,
                                            intervalOverride: y
                                        }) => {
        const b = $r({base: !1, lg: !0}) ?? !1, B = Fr(), x = _(ss), k = ts("/tv/v27.001/charting_library.js"),
            L = h.useRef(null), w = h.useRef(), E = h.useRef(), T = h.useRef(), F = h.useRef(), I = _(Se), ye = _(ge),
            j = jr(ye.currentUser, void 0), ie = _(Kr), [V, z] = h.useState(), [Q, Z] = h.useState(), G = _(Ne), ae = _(uo),
            ee = Zn({pair: r}), N = zr(C => C.embedSettings), Y = h.useMemo(() => x({
                dsDataParams: rs({pair: r}),
                cmsParams: r.cmsProfile ? {assetId: r.cmsProfile.iconId, fit: "crop"} : void 0
            }), [x, r]), K = h.useMemo(() => ({
                userId: j == null ? void 0 : j.id,
                pairId: r.pairAddress,
                quotePricingMode: i,
                chainId: e,
                embedSettings: N
            }), [e, j == null ? void 0 : j.id, N, r.pairAddress, i]), te = !N.isEmbed || N.chartSaveDrawings;
        It(() => te ? Gr(G.getGlobalChartSettings(), G.getPairChartSettings({
            isInverted: s,
            quotePricingMode: i,
            pair: {
                chainId: e,
                pairId: r.pairAddress,
                quoteTokenAddress: r.quoteToken.address,
                baseTokenAddress: r.baseToken.address
            }
        })).pipe(is({first: 1e4}), ns(() => (B({
            status: "error",
            description: "Failed loading chart settings."
        }), I.error({event: {id: "failedLoadingChartSettings", data: K}}), z(null), Z(null), qr)), Vt(([C, A]) => {
            if (Z(C ?? null), !A) return z(null);
            const W = ie.getChartContent({
                chartType: a,
                pairChartSettings: A,
                isInverted: s,
                quotePricingMode: i,
                pair: {
                    chainId: e,
                    pairId: r.pairAddress,
                    quoteTokenAddress: r.quoteToken.address,
                    baseTokenAddress: r.baseToken.address
                }
            });
            if (W) return z(W);
            z(null)
        })) : (z(null), Z(null), kt(void 0)), [a, e, G, s, te, r.baseToken.address, r.pairAddress, r.quoteToken.address, i, ie, B, K, I]);
        const Re = _(so), He = Xr(t), _e = _(mo), Oe = _(An),
            re = Q === void 0 || V === void 0 || a === "marketCap" && n === void 0, be = k === "ready", $t = k === "error",
            Ft = () => {
                var C, A;
                (C = T.current) == null || C.setTradingHistoryMarks([]), (A = w.current) == null || A.activeChart().clearMarks()
            }, We = be && !re && w.current !== void 0 && T.current !== void 0;
        he(() => {
            var C, A;
            try {
                if (!We) return;
                if (ee.tradingHistoryMarks.length === 0) return Ft();
                (C = T.current) == null || C.setTradingHistoryMarks(ee.tradingHistoryMarks), (A = w.current) == null || A.activeChart().refreshMarks()
            } catch (W) {
                I.debug({event: {id: "failedLoadingMarks", data: {error: W}}})
            }
        }, [re, I, ee.tradingHistoryMarks, We]);
        const $e = h.useCallback(() => {
                const C = l.string().safeParse(e);
                if (!C.success) return;
                const A = i === "usd" && r.priceUsd ? r.priceUsd : r.price, W = i === "usd", zt = r.c === "a" ? r.a : void 0;
                return new ms({
                    chartType: a,
                    context: r.c,
                    ammId: zt,
                    chainId: C.data,
                    dexName: He,
                    pairAddress: r.pairAddress,
                    quoteTokenAddress: r.quoteToken.address,
                    latestPrice: A,
                    useUsdPrice: W,
                    supportedResolutions: oo(r.c),
                    isInverted: s,
                    searchPair: _e,
                    onLatestPrice: v,
                    dexChartAmmService: Oe,
                    circulatingSupply: n,
                    symbolLogo: Y
                })
            }, [n, a, e, He, s, v, r, i, _e, Oe, Y]), Fe = h.useCallback(async C => {
                E.current = await ae(Q);
                const A = y ?? E.current.widgetLastUsedTime;
                return new window.TradingView.widget(cs({
                    chartStyle: p,
                    defaultInterval: A,
                    settingsAdapter: E.current.settingsAdapter,
                    saveLoadAdapter: Re,
                    containerId: f ?? ft,
                    hideTradingViewLogo: N.dsApp || !N.isEmbed,
                    dataFeed: C.dataFeed,
                    savedData: te ? V ?? void 0 : void 0,
                    favoriteIntervals: no(r.c),
                    widgetOverrides: E.current.widgetOverrides,
                    symbolLogo: Y,
                    symbol: s ? `${ue(r.quoteTokenSymbol, 48)}/${ue(r.baseToken.symbol, 48)}` : `${ue(r.baseToken.symbol, 48)}/${ue(r.quoteTokenSymbol, 48)}`, ...S
                }))
            }, [ae, Q, y, p, Re, f, N.dsApp, N.isEmbed, te, V, r.c, r.baseToken.symbol, r.quoteTokenSymbol, Y, s, S]),
            je = h.useCallback(async C => {
                await G.persistPairChartSettings({
                    schemaVersion: "1.0.0",
                    isInverted: s,
                    quotePricingMode: i,
                    chartType: a,
                    pair: {
                        chainId: e,
                        pairId: r.pairAddress,
                        quoteTokenAddress: r.quoteToken.address,
                        baseTokenAddress: r.baseToken.address
                    },
                    chartData: JSON.stringify(C)
                })
            }, [e, G, s, r, i, a]), ze = k !== "ready" || L.current === void 0 || w.current !== void 0;
        h.useEffect(() => {
            re || ze || (T.current = $e(), T.current && Fe({dataFeed: T.current}).then(C => {
                w.current = C, w.current.headerReady().then(() => {
                    r.c === "a" && ho({chartType: a, tvWidgetRef: w, onChartTypeChange: c}), fo({
                        isInverted: s,
                        quotePricingMode: i,
                        pair: r,
                        tvWidgetRef: w,
                        onQuotePricingModeChange: d
                    });
                    const A = go({isLargeScreen: b, tvWidgetRef: w, onToggleExpandCollapse: u});
                    F.current = A
                }).catch(A => {
                    I.error({event: {id: "failedCreatingTradingViewCustomButtons", data: {...K, error: A}}})
                }), w.current.onChartReady(() => {
                    var A;
                    te && ((A = w.current) == null || A.subscribe("onAutoSaveNeeded", () => {
                        var W;
                        (W = w.current) == null || W.save(je)
                    }))
                })
            }).catch(C => {
                I.error({event: {id: "failedInstantiatingTradingView", data: {...K, error: C}}})
            }))
        }, [n, k, V, re, ze, $e, Fe, I, K, s, r, i, d, a, c, b, u, te, je]);
        const {chartAndTxnsPollingRate: me, debugPolling: jt} = Ln({source: "chart", pair: r}), Ge = () => {
            T.current && T.current.triggerSubscribers()
        };
        return fn(() => Ge(), me.rate), he(() => {
            me.type !== "invisible" && (jt && console.log(new Date, `chart.polling.type=${me.type} trigger chart subscribers`), Ge())
        }, [me.type]), he(() => {
            y && w.current && w.current.activeChart() && w.current.setSymbol(w.current.activeChart().symbol(), y, () => {
            })
        }, [y]), he(() => {
            F.current && (F.current.style.color = o ? U.active.color : U.default.color, F.current.style.fontWeight = o ? U.active.fontWeight : U.default.fontWeight)
        }, [o]), h.useEffect(() => () => {
            var C;
            (C = E.current) == null || C.subscription.unsubscribe()
        }, [E]), O.jsxs(O.Fragment, {
            children: [$t && O.jsx(Xe, {
                flex: 1,
                m: 2, ...g,
                children: O.jsx(Jr, {
                    size: "sm",
                    title: "Error loading chart",
                    children: "Please refresh this page to try again!"
                })
            }), (!be || re) && O.jsx(Xe, {
                flex: 1,
                m: 2, ...g,
                children: O.jsx(Yr, {size: "sm", color: "trading-view.text-color", label: "Loading chart settings..."})
            }), be && !re && O.jsx(At, {ref: L, id: f ?? ft, flex: 1, ...g})]
        })
    }, ko = ({if: e, with: t, children: r}) => e ? t(r) : O.jsx(O.Fragment, {children: r});
export {
    To as A,
    ko as C,
    Co as S,
    un as a,
    dn as b,
    an as c,
    he as d,
    Ln as e,
    fn as f,
    Xn as g,
    qn as h,
    is as t,
    wo as u
};
