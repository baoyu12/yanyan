webpackJsonp([13], {
    BMZY: function (e, i) {
    }, FOef: function (e, i, t) {
        "use strict";
        Object.defineProperty(i, "__esModule", {value: !0});
        t("34+y");
        var s, r = t("X+yh"), a = t.n(r), o = (t("qONS"), t("UQTY")), n = t.n(o), d = (t("OgVB"), t("/Lyv")),
            u = t.n(d), c = t("woOf"), h = t.n(c), p = t("bOdI"), l = t.n(p), m = t("lbHh"), g = t.n(m), f = t("LOkV"),
            w = {
                name: "ElementImg",
                props: (s = {
                    id: {type: [String, Number]},
                    triggers: {type: Object},
                    properties: {type: Object, required: !0},
                    css: {type: Object},
                    wrapCss: {type: Object},
                    overturnType: {type: Number, required: !0}
                }, l()(s, "triggers", {type: Object}), l()(s, "belongPageIndex", {type: Number}), l()(s, "layerName", {type: String}), l()(s, "imgUrl", {type: String}), l()(s, "cardState", {type: Number}), l()(s, "previewState", {type: String}), l()(s, "showCard", {type: String}), l()(s, "level", {type: Number}), s),
                data: function () {
                    return {cropImgSrc: "", offCss: {}, newApp: window.newApp || window.newAndroid}
                },
                computed: {
                    isInfinity: function () {
                        var e = this.wrapCss.animation;
                        return e && -1 !== e.indexOf("infinite") ? {willChange: "transform"} : {}
                    }, aniOrigin: function () {
                        var e = this.properties.aniOrigin;
                        return "default" == e ? {} : {"transform-origin": e + " !important"}
                    }, shadowCss: function () {
                        var e = this.properties;
                        return 0 == e.visible ? {visibility: "hidden"} : {boxShadow: e.shadowColor + " " + e.shadowX + "px " + e.shadowY + "px " + e.shadowBlur + "px"}
                    }, newCss: function () {
                        var e = this.css;
                        return this.$set(e, "borderRadius", this.wrapCss.borderRadius), this.css
                    }, rotateCss: function () {
                        switch (this.overturnType) {
                            case 0:
                                return {transform: "none"};
                            case 1:
                                return {transform: "rotateX(0deg) rotateY(180deg)"};
                            case 2:
                                return {transform: "rotateX(180deg) rotateY(0deg)"};
                            case 3:
                                return {transform: "rotateX(180deg) rotateY(180deg)"}
                        }
                    }, maskCss: function () {
                        var e = ["maskBoxImageSource"], i = {};
                        for (var t in this.properties) e.includes(t) && (i[t] = this.properties[t]);
                        return i.maskBoxImageSlice = "0 fill", i
                    }, wrapStyle: function () {
                        var e = ["transform", "left", "top", "width", "height"], i = {};
                        for (var t in this.wrapCss) e.includes(t) && (i[t] = this.wrapCss[t]);
                        return i
                    }, wrapNoSize: function () {
                        var e = ["transform", "left", "top", "width", "height", "borderRadius", "borderWidth", "borderStyle", "borderColor"],
                            i = {};
                        for (var t in this.wrapCss) e.includes(t) || (i[t] = this.wrapCss[t]);
                        return i
                    }, borderCss: function () {
                        return {
                            borderRadius: this.wrapCss.borderRadius,
                            borderWidth: this.wrapCss.borderWidth,
                            borderStyle: this.wrapCss.borderStyle,
                            borderColor: this.wrapCss.borderColor
                        }
                    }
                },
                mounted: function () {
                    var e = parseFloat(document.documentElement.style.fontSize);
                    if (!this.wrapCss.width || !this.wrapCss.height) return !1;
                    var i = 0;
                    this.wrapCss.borderWidth && "none" != this.wrapCss.borderStyle && (i = Math.floor(parseFloat(this.wrapCss.borderWidth) * e));
                    var t = parseFloat(this.wrapCss.width) * e - 2 * i, s = parseFloat(this.wrapCss.height) * e - 2 * i,
                        r = this.properties.realW, a = this.properties.realH, o = void 0, n = window.devicePixelRatio,
                        d = window.screen.width;
                    window.screen.height;
                    window.top !== window.self && (d = 375), d > 375 && (n *= d / 375), n < 3 && (n = 3), r / t >= a / s ? (o = a / s, this.offCss = h()({}, this.offCss, {
                        left: -((r / o - t) / 2).toFixed(3) + "px",
                        height: s + "px" || t / r * a + "px",
                        width: r / o.toFixed(3) + "px"
                    })) : (o = r / t, this.offCss = h()({}, this.offCss, {
                        top: -((a / o - s) / 2).toFixed(3) + "px",
                        width: t + "px",
                        height: a / o.toFixed(3) + "px"
                    }));
                    var u = ~~(r / o * n), c = ~~(a / o * n), p = this.imgUrl ? this.imgUrl : this.properties.src,
                        l = "", m = p.indexOf("?imageMogr2");
                    if ("尾页封面" === this.layerName) l = p; else {
                        l = m >= 0 ? p + "|imageMogr2/thumbnail/" + u + "x" + c + ">" : p.indexOf("?v") >= 0 ? p + "&imageMogr2/auto-orient/thumbnail/" + u + "x" + c + ">" : p + "?imageMogr2/auto-orient/thumbnail/" + u + "x" + c + ">";
                        Object(f.g)() && !(Object(f.e)(!0) > 14) || /\.gif/gi.test(l) || (l += "/format/webp")
                    }
                    this.cropImgSrc = l
                },
                methods: {
                    audioPlay: function (e) {
                        var i = this;
                        if ($(".audio").removeClass("mrotate"), document.getElementById("music").pause(), document.querySelector(".music-" + this.id).paused) {
                            var t = $(e.target), s = t.data("hash"), r = t.data("link");
                            s ? this.$_post(this.apiUrl + "hashToLink", {hash: s}).then(function (e) {
                                $(".audio-com").not(".music-" + i.id).each(function () {
                                    $(this)[0].pause()
                                }), t.children("audio").attr("src", e), t.children("audio")[0].play()
                            }) : ($(".audio-com").not(".music-" + i.id).each(function () {
                                $(this)[0].pause()
                            }), t.children("audio").attr("src", r), t.children("audio")[0].play())
                        } else document.querySelector(".music-" + this.id).pause()
                    }, triggerFun: function (e) {
                        var i = this;
                        if ("link" == this.triggers.event) window.location.replace(this.triggers.link); else if ("phone" == this.triggers.event) {
                            var t = "tel:" + this.triggers.phone;
                            window.location.href = t
                        } else if ("page" == this.triggers.event) e.stopPropagation(), this.bus.$emit("jumpPage", this.triggers.go); else if ("music" == this.triggers.event) {
                            var s = this;
                            if ($(".audio").removeClass("mrotate"), document.getElementById("music").pause(), document.querySelector(".audio-" + s.id).paused) {
                                var r = $(e.currentTarget), o = r.data("hash"), d = r.data("link");
                                o ? s.$_post(s.apiUrl + "hashToLink", {hash: o}).then(function (e) {
                                    $(".audio-bom").not(".audio-" + s.id).each(function () {
                                        $(this)[0].pause()
                                    }), $(".audio-" + s.id).attr("src", e), $(".audio-" + s.id)[0].play()
                                }) : ($(".audio-bom").not(".audio-" + s.id).each(function () {
                                    $(this)[0].pause()
                                }), $(".audio-" + s.id).attr("src", d), $(".audio-" + s.id)[0].play())
                            } else document.querySelector(".audio-" + s.id).pause()
                        } else if ("举报" === this.layerName) this.bus.$emit("reportShow"); else if ("去除尾页广告" === this.layerName) {
                            var c = -1 !== window.location.href.indexOf("miniProgram");
                            if (!window.isWechat || c || this.isPC()) if (c) if ("true" === this.previewState) if (this.cardState) u()({
                                title: "温馨提示",
                                message: "已有" + this.cardState + "份卡券，是否立即激活？",
                                confirmButtonText: "激活",
                                showCancelButton: !0,
                                confirmButtonClass: "btns-com",
                                cancelButtonClass: "btns-com"
                            }).then(function (e) {
                                if ("confirm" == e) {
                                    var t = JSON.parse(g.a.get("mUserInfo"));
                                    n.a.open({
                                        text: "激活中...",
                                        spinnerType: "fading-circle"
                                    }), i.$_post("https://h5.hunbei.com/m/member/doCard", {
                                        uid: t.uid,
                                        token: t.token,
                                        sceneId: window.sceneId
                                    }).then(function (e) {
                                        setTimeout(function () {
                                            n.a.close(), a()({message: "激活成功", iconClass: i.iconSuccess})
                                        }, 1e3), setTimeout(function () {
                                            window.location.reload()
                                        }, 2e3)
                                    }).catch(function (e) {
                                        window.location.reload()
                                    })
                                }
                            }); else if (window.isIos) {
                                var h = JSON.parse(g.a.get("mUserInfo"));
                                this.$_post(this.apiM + "index/wechat/miniVipNotice", {
                                    uid: h.uid,
                                    token: h.token
                                }), a()({message: "由于相关规范iOS功能暂不可用", iconClass: this.iconWarn})
                            } else window.isDouyin ? tt.miniProgram.navigateTo({url: "/pages/members-pay/members-pay?sceneId=" + window.sceneId + "&yueState=true&source=mini_quweiye"}) : uni.navigateTo({url: "/pages/members-pay/members-pay?sceneId=" + window.sceneId + "&yueState=true&source=mini_quweiye"}); else if (window.isIos) {
                                var p = JSON.parse(g.a.get("mUserInfo"));
                                this.$_post(this.apiM + "index/wechat/miniVipNotice", {
                                    uid: p.uid,
                                    token: p.token
                                }), a()({message: "由于相关规范iOS功能暂不可用", iconClass: this.iconWarn})
                            } else this.$emit("openVer", "weiye"); else this.newApp ? this.appMessage({type: "去尾页"}, "newAll") : a()({
                                message: "请分享后使用此功能",
                                iconClass: this.iconWarn
                            }); else this.$emit("openVer")
                        }
                    }, isPC: function () {
                        for (var e = navigator.userAgent, i = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"], t = !0, s = 0; s < i.length; s++) if (e.indexOf(i[s]) > 0) {
                            t = !1;
                            break
                        }
                        return t
                    }
                }
            }, y = {
                render: function () {
                    var e = this, i = e.$createElement, t = e._self._c || i;
                    return t("div", {
                        staticClass: "ele-img animated",
                        style: [e.wrapStyle, e.isInfinity]
                    }, [t("div", {
                        staticClass: "ani-wrap",
                        style: [e.wrapNoSize, e.aniOrigin]
                    }, [e.properties.musicLink || e.properties.musicHash ? t("div", {
                        staticClass: "audio-wrap",
                        attrs: {"data-link": e.properties.musicLink, "data-hash": e.properties.musicHash},
                        on: {
                            click: function (i) {
                                e.audioPlay(i)
                            }
                        }
                    }, [t("audio", {
                        staticClass: "audio-com",
                        class: "music-" + e.id
                    })]) : e._e(), e._v(" "), t("div", {
                        staticClass: "rotate-wrap",
                        style: [e.maskCss, e.shadowCss, {borderRadius: e.borderCss.borderRadius}],
                        attrs: {"data-link": e.triggers.musicLink, "data-hash": e.triggers.musicHash},
                        on: {
                            click: function (i) {
                                e.triggerFun(i)
                            }
                        }
                    }, [t("div", {
                        staticClass: "img-wrap",
                        style: [e.borderCss, e.rotateCss]
                    }, [0 == e.belongPageIndex ? t("img", {
                        style: [e.offCss, {opacity: e.newCss.opacity}],
                        attrs: {src: e.cropImgSrc, alt: ""}
                    }) : t("img", {
                        style: [e.offCss, {opacity: e.newCss.opacity}],
                        attrs: {"data-src": e.cropImgSrc}
                    })])]), e._v(" "), "music" == e.triggers.event ? t("audio", {
                        staticClass: "audio-bom",
                        class: "audio-" + e.id
                    }) : e._e()])])
                }, staticRenderFns: []
            };
        var b = t("VU/8")(w, y, !1, function (e) {
            t("BMZY")
        }, null, null);
        i.default = b.exports
    }
});