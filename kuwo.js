/****************************

#!name = 酷我音乐
#!desc = 〔 酷我音乐 〕全功能破解
#!author = 影子[https://www.napi.ltd]
#!homepage = https://napi.ltd
#!openUrl = https://napi.ltd
#!tag = 酷我音乐
#!loon_version = 3.2.3(762)
#!icon = https://static.napi.ltd/Image/KuWo.png
#!date = 2025-08-17

[Argument]
QS = select,"Hi-Res音质","无损音质","超品音质","高品音质",tag=音质选择
authUI = switch,false,tag=启用旧版会员中心

[Rule]
USER-AGENT,KWPlayer*,PROXY
DOMAIN-SUFFIX,kuwo.cn,PROXY

[Rewrite]
^.*?(ad(.*)?\.tencentmusic\.com|kuwo\.cn\/((EcomResource|(Mobile)?Ad)Serv(er|ice)|(vip|(open)?api)?\/(setting\/sidebar\/menus|v\d\/(user\/freeMode|album\/adBar|app\/(newMenuList\/menuListInfo|pasterAdvert\/config)|operate\/pop\/info))|kuwopay\/vip-tab\/page\/floatbox|commercia\/eproxy\/boot\/recommend\/fee\/config)) reject-200

[Script]
http-response ^(?!.*img).*?(abt-kuwo\.tencentmusic\.com|kuwo\.cn)(/vip|/(open)?api)?(/enc.*?signver|/(v\d/)?(pay/app/getConfigInfo|user/vip\?vers|app/startup/config|theme\?op=gd|api/((pay/)?(user/info|payInfo/kwplayer/payMiniBar))|tingshu/index/radio|operate/homePage|sysinfo\?op\=getRePayAndDoPayBox(New)?&useNewHeadShow|recommend/(daily/main|songlist/getRecSonglist)|online/bottomTab/abConfig)|/kuwo/ui/info$|/kuwopay\/personal\/cells|/pay/viptab/index\.html|/kuwopay/vip-tab/(setting|page/cells)|/a\.p($|\?newver\=\d$|.*?op\=(getvip|policy_shortvideo)|.*?ptype\=vip)|/commercia/vip(Tab/myTab/base|/player/getStyleListByModel|/hanger/wear)|/mobi\.s\?f\=kwxs|/music\.pay\?newver\=\d(&allpay\=\d)?$|/basedata\.s|/mgxh\.s\?user) script-path=https://raw.githubusercontent.com/conghua11/loon/main/kuwo.js, requires-body=true, timeout=60, tag=酷我音乐, img-url=https://static.napi.ltd/Image/KuWo.png, argument=[{QS},{authUI}]

[Mitm]
hostname = *.kuwo.cn, abt-kuwo.tencentmusic.com

****************************/


(function (_0x5c6d2f, _0x2c5ce1) {
    const _0x405ae4 = _0x5c6d2f();
    while (true) {
        try {
            const _0x3521d3 = -parseInt(KuWo_0x50e7(1075, 'QLWi')) / 1 + -parseInt(KuWo_0x50e7(1104, 'g$5g')) / 2 * (parseInt(KuWo_0x50e7(592, 'x(y7')) / 3) + -parseInt(KuWo_0x50e7(861, 'sqoA')) / 4 + parseInt(KuWo_0x50e7(607, 'KnHz')) / 5 * (parseInt(KuWo_0x50e7(965, '5bQB')) / 6) + parseInt(KuWo_0x50e7(725, 'u$i&')) / 7 * (parseInt(KuWo_0x2954(1025, 0x598)) / 8) + parseInt(KuWo_0x2954(1135, 0x5d2)) / 9 + -parseInt(KuWo_0x2954(727, '0x410')) / 10 * (-parseInt(KuWo_0x2954(671, 0x22f)) / 11);
            if (_0x3521d3 === _0x2c5ce1) {
                break;
            } else {
                _0x405ae4.push(_0x405ae4.shift());
            }
        } catch (_0x487d6e) {
            _0x405ae4.push(_0x405ae4.shift());
        }
    }
})(KuWo_0x163d, 534915);
const $ = new Env("酷我音乐");
const {
    upDate,
    encrypt,
    decrypt,
    getVer,
    getInfo
} = Napi('影子');
const {
    encryptQuery,
    decryptQuery
} = kwDes();
const KuWo = $.toObj($.getval('KuWo')) || {};
function KuWo_0x21626c(_0x5e718d, _0x42b188, _0x248bc7, _0x312283, _0x527108, _0x5c0eda, _0x2f29c9, _0x2d946e, _0x450628, _0x460f4f, _0x353b15, _0x127c65, _0x109433, _0x12bfd3, _0x2da5ed) {
    return KuWo_0x50e7(_0x248bc7 - '0x393', _0x450628);
}
let url = 'undefined' !== typeof $request ? $request.url : '';
let body = 'undefined' !== typeof $response ? $response.body : null;
let obj = $.toObj(body);
function KuWo_0xa5889a(_0x368379, _0xe488e5, _0x56eaf2, _0x12c99c, _0x40a34b, _0x252d65, _0x4ff840, _0x4e1e67, _0x3bafe0, _0x4c193a, _0x47c728, _0x2e2ca0, _0x4ccd3a, _0x4c4cc1, _0x5c778a) {
    return KuWo_0x2954(_0x3bafe0 - 0x274, _0x4e1e67);
}
let {
    QS = null,
    authUI = false
} = typeof $argument !== 'undefined' ? typeof $argument === 'string' ? $.toObj($argument) : $argument : {};
const KuWo_0x4020d0 = {
    playInfo: /mobi\.s\?f\=kwxs/,
    userInfo: /vip\/enc/,
    vipInfo: /vip\/v\d\/user\/vip/,
    musicInfo: /music\.pay\?newver\=\d(&allpay\=\d)?$/,
    bookVip: /(a\.p|v\d\/api\/(pay\/)?user\/info)/,
    vipTheme: /(commercia\/)?vip\/(v\d\/theme\?op\=gd|(player\/getStyleListByModel|hanger\/wear))/,
    bottomTab: /(online\/bottomTab\/abConfig|kuwo\/ui\/info$)/,
    indexTopAd: /openapi\/v\d\/operate\/homePage/,
    userInfoLabel: /mgxh\.s\?user/,
    bookPageAdBar: /api\/v\d\/pay\/app\/getConfigInfo/,
    bookPageAd: /openapi\/v\d\/tingshu\/index\/radio/,
    vipTabAd: /kuwopay\/vip-tab\/(setting|page\/cells)/,
    vipTabUserBox: /pay\/viptab\/index\.html/,
    myPageVipBox: /(kuwopay\/personal\/cells|commercia\/vipTab\/myTab\/base)/,
    bookListAd: /((openapi)?v\d\/(api\/pay\/payInfo\/kwplayer\/payMiniBar|app\/startup\/config)|basedata\.s)/,
    payBox: /(sysinfo\?op\=getRePayAndDoPayBox(New)?&useNewHeadShow|openapi\/v\d\/recommend)/
};
function KuWo_0x5ecdde(_0x42298d, _0x2cbcd1, _0xc882b2, _0x1a99b2, _0x2694da, _0x5a4406, _0x59ce9d, _0x1a5d42, _0x54e902, _0x36ee63, _0x343727, _0x439422, _0x4b7314, _0x385bbc, _0x8e5aa5) {
    return KuWo_0x50e7(_0x4b7314 + 0x378, _0x5a4406);
}
const KuWo_0xe15fe5 = {
    playInfo: playInfo,
    userInfo: userInfo,
    vipInfo: vipInfo,
    musicInfo: musicInfo,
    bookVip: bookVip,
    vipTheme: vipTheme,
    bottomTab: bottomTab,
    indexTopAd: indexTopAd,
    userInfoLabel: userInfoLabel,
    bookPageAdBar: bookPageAdBar,
    bookPageAd: bookPageAd,
    vipTabAd: vipTabAd,
    vipTabUserBox: vipTabUserBox,
    myPageVipBox: myPageVipBox
};
function KuWo_0x8cfab7(_0x5db239, _0x2b3849, _0x126730, _0x46a0d1, _0x11711f, _0x5620d4, _0x21ed33, _0x4a8baa, _0x4dd4bf, _0x122a61, _0x1c5511, _0x4e7d2f, _0x5dbc80, _0x570828, _0x446631) {
    return KuWo_0x2954(_0x46a0d1 - 0x3a3, _0x5db239);
}
KuWo_0xe15fe5.bookListAd = bookListAd;
KuWo_0xe15fe5.payBox = payBox;
function KuWo_0x50e7(_0x10f2af, _0x1d3d04) {
    const _0x7a8ae2 = KuWo_0x163d();
    KuWo_0x50e7 = function (_0x3223ef, _0x1c741c) {
        _0x3223ef = _0x3223ef - 491;
        let _0x2901bb = _0x7a8ae2[_0x3223ef];
        if (KuWo_0x50e7.MpxsSE === undefined) {
            var _0x391b12 = function (_0x27c699) {
                let _0x2086e4 = '';
                let _0x20b4c5 = '';
                let _0x1c52d7 = _0x2086e4 + _0x391b12;
                let _0x36b881 = 0;
                let _0x29f87f;
                let _0x4d23c8;
                for (let _0x1764d7 = 0; _0x4d23c8 = _0x27c699.charAt(_0x1764d7++); ~_0x4d23c8 && (_0x29f87f = _0x36b881 % 4 ? _0x29f87f * 64 + _0x4d23c8 : _0x4d23c8, _0x36b881++ % 4) ? _0x2086e4 += _0x1c52d7.charCodeAt(_0x1764d7 + 10) - 10 !== 0 ? String.fromCharCode(255 & _0x29f87f >> (-2 * _0x36b881 & 6)) : _0x36b881 : 0) {
                    _0x4d23c8 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='.indexOf(_0x4d23c8);
                }
                let _0x50abdc = 0;
                for (let _0x4ec185 = _0x2086e4.length; _0x50abdc < _0x4ec185; _0x50abdc++) {
                    _0x20b4c5 += '%' + ('00' + _0x2086e4.charCodeAt(_0x50abdc).toString(16)).slice(-2);
                }
                return decodeURIComponent(_0x20b4c5);
            };
            const _0x3248bb = function (_0x3d05a7, _0x4d3071) {
                let _0x5cd178 = [];
                let _0x298f94 = 0;
                let _0x42cd25;
                let _0x552ee8 = '';
                _0x3d05a7 = _0x391b12(_0x3d05a7);
                let _0x4d5387;
                for (_0x4d5387 = 0; _0x4d5387 < 256; _0x4d5387++) {
                    _0x5cd178[_0x4d5387] = _0x4d5387;
                }
                for (_0x4d5387 = 0; _0x4d5387 < 256; _0x4d5387++) {
                    _0x298f94 = (_0x298f94 + _0x5cd178[_0x4d5387] + _0x4d3071.charCodeAt(_0x4d5387 % _0x4d3071.length)) % 256;
                    _0x42cd25 = _0x5cd178[_0x4d5387];
                    _0x5cd178[_0x4d5387] = _0x5cd178[_0x298f94];
                    _0x5cd178[_0x298f94] = _0x42cd25;
                }
                _0x4d5387 = 0;
                _0x298f94 = 0;
                for (let _0x13b41d = 0; _0x13b41d < _0x3d05a7.length; _0x13b41d++) {
                    _0x4d5387 = (_0x4d5387 + 1) % 256;
                    _0x298f94 = (_0x298f94 + _0x5cd178[_0x4d5387]) % 256;
                    _0x42cd25 = _0x5cd178[_0x4d5387];
                    _0x5cd178[_0x4d5387] = _0x5cd178[_0x298f94];
                    _0x5cd178[_0x298f94] = _0x42cd25;
                    _0x552ee8 += String.fromCharCode(_0x3d05a7.charCodeAt(_0x13b41d) ^ _0x5cd178[(_0x5cd178[_0x4d5387] + _0x5cd178[_0x298f94]) % 256]);
                }
                return _0x552ee8;
            };
            KuWo_0x50e7.duvZiq = _0x3248bb;
            _0x10f2af = arguments;
            KuWo_0x50e7.MpxsSE = true;
        }
        const _0x180b39 = _0x7a8ae2[0];
        const _0x4caad5 = _0x3223ef + _0x180b39;
        const _0x5026b2 = _0x10f2af[_0x4caad5];
        if (!_0x5026b2) {
            if (KuWo_0x50e7.WDkADY === undefined) {
                const _0x425084 = function (_0x5dcb9b) {
                    this.RMuqkp = _0x5dcb9b;
                    this.miNKjq = [1, 0, 0];
                    this.MdzcGW = function () {
                        return 'newState';
                    };
                    this.PhujZg = "\\w+ *\\(\\) *{\\w+ *";
                    this.yGihXB = "['|\"].+['|\"];? *}";
                };
                _0x425084.prototype.gILCjQ = function () {
                    const _0x44631b = new RegExp(this.PhujZg + this.yGihXB);
                    const _0x3e6d8b = _0x44631b.test(this.MdzcGW.toString()) ? --this.miNKjq[1] : --this.miNKjq[0];
                    return this.loZnzb(_0x3e6d8b);
                };
                _0x425084.prototype.loZnzb = function (_0x2e25a8) {
                    if (!Boolean(~_0x2e25a8)) {
                        return _0x2e25a8;
                    }
                    return this.LobAvk(this.RMuqkp);
                };
                _0x425084.prototype.LobAvk = function (_0x343095) {
                    let _0x5b8d83 = 0;
                    for (let _0x2694af = this.miNKjq.length; _0x5b8d83 < _0x2694af; _0x5b8d83++) {
                        this.miNKjq.push(Math.round(Math.random()));
                        _0x2694af = this.miNKjq.length;
                    }
                    return _0x343095(this.miNKjq[0]);
                };
                new _0x425084(KuWo_0x50e7).gILCjQ();
                KuWo_0x50e7.WDkADY = true;
            }
            _0x2901bb = KuWo_0x50e7.duvZiq(_0x2901bb, _0x1c741c);
            _0x10f2af[_0x4caad5] = _0x2901bb;
        } else {
            _0x2901bb = _0x5026b2;
        }
        return _0x2901bb;
    };
    return KuWo_0x50e7(_0x10f2af, _0x1d3d04);
}
for (const [handler, regex] of Object.entries(KuWo_0x4020d0)) {
    if (regex.test(url)) {
        (async () => {
            await KuWo_0xe15fe5[handler](handler);
        })()["catch"](_0x25ff3c => {
            $.log("‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️", _0x25ff3c.message);
        });
        break;
    }
}
async function playInfo(_0x4bfc17) {
    try {
        const {
            isFree = 200 == obj?.['code'] && obj?.["data"]?.['duration'] > 30,
            user: _0x3e59c4,
            isVip: _0x454e11,
            endTime: _0x54f1fc,
            keys: _0x12dee5,
            PlayID: _0x28d8ae,
            Song: _0x4e4610,
            ver: _0x4aa8ce
        } = KuWo;
        await getInfo(_0x3e59c4, "kuwo");
        await getVer();
        if (_0x454e11 && !isFree && new Date().getTime() < _0x54f1fc && !upDate("5.8.17", _0x4aa8ce)) {
            const _0x1e9d2b = _0x12dee5[Math.floor(Math.random() * _0x12dee5.length)];
            const _0x330ab2 = decrypt(_0x1e9d2b);
            const _0x5d44a7 = {
                br: 0xfa0,
                url: '4000kflac'
            };
            const _0x1392c6 = {
                br: 0x7d0,
                url: "2000kflac"
            };
            const _0x1bf7b2 = {
                br: 0x140,
                url: "320kmp3"
            };
            const _0x4a75d1 = {
                url: ''
            };
            let _0x449bba = [_0x5d44a7, _0x1392c6, _0x1bf7b2, _0x4a75d1];
            let _0x122521 = 0;
            switch (QS) {
                case KuWo_0x50e7(52891045, '3]]8'):
                    _0x122521 = 1;
                    break;
                case "超品音质":
                    _0x122521 = 2;
                    break;
                case "高品音质":
                    _0x122521 = 3;
                    break;
                default:
                    _0x122521 = 0;
            }
            if ('book' == _0x4e4610) {
                _0x122521 = 2;
            }
            while (_0x449bba[_0x122521]) {
                const _0x4539d2 = "user=YingZi&source=" + _0x330ab2 + (KuWo_0x50e7(61214117, 'Mu6v') + "rl_with_sign&br" + '=') + _0x449bba[_0x122521].url + '&rid=' + _0x28d8ae;
                const _0xe53f19 = "http://nmobi.kuwo.cn/mobi.s?f=kuwo&q=" + encryptQuery(_0x4539d2);
                await $.http.get(_0xe53f19).then(_0x18d090 => {
                    body = _0x18d090.body;
                    obj = $.toObj(body);
                });
                if (_0x122521 < 3 && obj.data.bitrate == _0x449bba[_0x122521].br) {
                    break;
                }
                _0x122521++;
            }
        }
        const _0x49f2f9 = {
            body: body
        };
        $.done(_0x49f2f9);
    } catch (_0x3ba3dc) {
        throw new Error('处理' + _0x4bfc17 + "时发生错误：" + $.toStr(_0x3ba3dc));
    }
}
function KuWo_0x2954(_0x45f739, _0x2b6ccc) {
    const _0x53892f = KuWo_0x163d();
    KuWo_0x2954 = function (_0x5446af, _0x180c87) {
        _0x5446af = _0x5446af - 491;
        let _0x11f709 = _0x53892f[_0x5446af];
        if (KuWo_0x2954.AViXeS === undefined) {
            var _0x31cffd = function (_0xc06216) {
                let _0x1cd4b9 = '';
                let _0x20208c = '';
                let _0x2c1336 = _0x1cd4b9 + _0x31cffd;
                let _0x16e5a0 = 0;
                let _0x405e87;
                let _0x2a44e4;
                for (let _0x42a621 = 0; _0x2a44e4 = _0xc06216.charAt(_0x42a621++); ~_0x2a44e4 && (_0x405e87 = _0x16e5a0 % 4 ? _0x405e87 * 64 + _0x2a44e4 : _0x2a44e4, _0x16e5a0++ % 4) ? _0x1cd4b9 += _0x2c1336.charCodeAt(_0x42a621 + 10) - 10 !== 0 ? String.fromCharCode(255 & _0x405e87 >> (-2 * _0x16e5a0 & 6)) : _0x16e5a0 : 0) {
                    _0x2a44e4 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='.indexOf(_0x2a44e4);
                }
                let _0x34274e = 0;
                for (let _0xc468fd = _0x1cd4b9.length; _0x34274e < _0xc468fd; _0x34274e++) {
                    _0x20208c += '%' + ('00' + _0x1cd4b9.charCodeAt(_0x34274e).toString(16)).slice(-2);
                }
                return decodeURIComponent(_0x20208c);
            };
            KuWo_0x2954.iuyiaX = _0x31cffd;
            _0x45f739 = arguments;
            KuWo_0x2954.AViXeS = true;
        }
        const _0x3dc30d = _0x53892f[0];
        const _0x367da2 = _0x5446af + _0x3dc30d;
        const _0x108887 = _0x45f739[_0x367da2];
        if (!_0x108887) {
            const _0x11bcce = function (_0x2d03f8) {
                this.mLUBpr = _0x2d03f8;
                this.sDgsre = [1, 0, 0];
                this.cwKxqY = function () {
                    return 'newState';
                };
                this.nwnIOs = "\\w+ *\\(\\) *{\\w+ *";
                this.XglpWx = "['|\"].+['|\"];? *}";
            };
            _0x11bcce.prototype.koCBhz = function () {
                const _0x5d123b = new RegExp(this.nwnIOs + this.XglpWx);
                const _0x23c8c9 = _0x5d123b.test(this.cwKxqY.toString()) ? --this.sDgsre[1] : --this.sDgsre[0];
                return this.IMpIDP(_0x23c8c9);
            };
            _0x11bcce.prototype.IMpIDP = function (_0x2b63ad) {
                if (!Boolean(~_0x2b63ad)) {
                    return _0x2b63ad;
                }
                return this.iDfknM(this.mLUBpr);
            };
            _0x11bcce.prototype.iDfknM = function (_0x26b4f1) {
                let _0x7e604e = 0;
                for (let _0x539350 = this.sDgsre.length; _0x7e604e < _0x539350; _0x7e604e++) {
                    this.sDgsre.push(Math.round(Math.random()));
                    _0x539350 = this.sDgsre.length;
                }
                return _0x26b4f1(this.sDgsre[0]);
            };
            new _0x11bcce(KuWo_0x2954).koCBhz();
            _0x11f709 = KuWo_0x2954.iuyiaX(_0x11f709);
            _0x45f739[_0x367da2] = _0x11f709;
        } else {
            _0x11f709 = _0x108887;
        }
        return _0x11f709;
    };
    return KuWo_0x2954(_0x45f739, _0x2b6ccc);
}
async function userInfo(_0x8003c5) {
    try {
        const _0x43e046 = new URL(url).searchParams;
        let _0x3c698f = _0x43e046.get("uid");
        if (isNaN(Number(_0x3c698f))) {
            _0x3c698f = url.replace(/.*?uid=(\d+).*/, '$1');
        }
        await getInfo(_0x3c698f, "kuwo", 1);
        body = await $.http.get(url.replace(/uid=\d+/g, 'uid=9')).then(_0xd5e9ce => _0xd5e9ce.body);
        const _0x5a25f4 = {
            body: body
        };
        $.done(_0x5a25f4);
    } catch (_0x21946b) {
        throw new Error('处理' + _0x8003c5 + "时发生错误：" + $.toStr(_0x21946b));
    }
}
async function vipInfo() {
    const _0x23896a = {
        XOtZl: "https://image.kuwo.cn/fe/13e4f930-f8bc-4b86-8def-43cbc3c7d86c7.png",
        bybJm: "https://image.kuwo.cn/fe/34ad4" + KuWo_0x2954(2986995, '0x1e8') + 'bdc-e6c99566636' + "8yyb.png",
        mxyPX: "https://h5s.kuwo.cn/upload/pic" + KuWo_0x2954(4961267, '0x470') + 'b81d9c5c7af42dc' + '5ed6281fcbe19fc' + "c7.png",
        nSeyS: "9999",
        sSGkU: "VIP7",
        NNobm: '超级会员',
        sgqPn: '未授权'
    };
    const _0x4d5cd9 = {
        vipIcon: "https://image.kuwo.cn/fe/13e4f930-f8bc-4b86-8def-43cbc3c7d86c7.png",
        vipmIcon: _0x23896a[KuWo_0x2954(5596147, 0x531)],
        svipIcon: "https://image.kuwo.cn/fe/13e4f930-f8bc-4b86-8def-43cbc3c7d86c7.png",
        luxuryIcon: _0x23896a.mxyPX,
        growthValue: "9999",
        vipTag: "VIP7",
        openBtnText: KuWo.endTime && '超级会员' || '未授权',
        vipExpire: '' + KuWo.endTime,
        vipExpires: KuWo.endTime,
        vipmExpire: '' + KuWo.endTime,
        vip3Expire: '' + KuWo.endTime,
        vipLuxuryExpire: '' + KuWo.endTime,
        svipExpire: '' + KuWo[KuWo_0x50e7(446909, 'DP85')],
        isYearUser: '2',
        biedSong: '1',
        vipmAutoPayUser: '1',
        svipAutoPayUser: '1'
    };
    Object.assign(obj.data, _0x4d5cd9);
    delete obj.data.iconJumpUrl;
    delete obj.data.adActUrl;
    body = $.toStr(obj);
    const _0x2f7a1f = {
        body: body
    };
    $.done(_0x2f7a1f);
}
async function musicInfo(_0x489136) {
    const _0x144b10 = {
        vtYXV: function (_0x2c97c4, _0x2f03d4) {
            return _0x2c97c4 !== _0x2f03d4;
        },
        tEKem: 'eOCVj',
        "jYfmq": 'BCMS',
        TsmeY: function (_0x4900bf, _0x54028a) {
            return _0x4900bf === _0x54028a;
        },
        IIjgf: 'GjrOc',
        "BXgdp": "tVxPG",
        OKmnb: function (_0x1fa9ef, _0x47668f) {
            return _0x1fa9ef in _0x47668f;
        }
    };
    try {
        if ('GjrOc' === _0x144b10[KuWo_0x2954(6008517, '0x598')]) {
            if (Array.isArray(obj?.["songs"])) {
                const {
                    id = body.replace(/.*?\"id\":(\d+).*/, '$1')
                } = obj.songs[0];
                KuWo.PlayID = parseInt(id);
                KuWo.Song = 'music';
                $.setval($.toStr(KuWo), KuWo_0x2954(8851620, -0xe1));
                obj.songs[0].audio = obj.songs[0].audio.filter(_0x5b5b3a => {
                    if (_0x5b5b3a.fmt === _0x144b10[KuWo_0x2954(21579005637, '0x505')]) {
                        return false;
                    }
                    _0x5b5b3a.st = 0;
                    return true;
                });
            }
            const _0x21b45c = {
                'isShow': 0x0
            };
            if ('mp3Download' in obj.songs[0]) {
                obj.songs[0].mp3Download = _0x21b45c;
            }
            body = $.toStr(obj);
            const _0x28c479 = {
                body: body
            };
            $.done(_0x28c479);
        } else {
            _0x5f4270.assign(_0x50d717.data, _0x1f3e14);
        }
    } catch (_0x257c0c) {
        throw new Error('处理' + _0x489136 + "时发生错误：" + $.toStr(_0x257c0c));
    }
}
function KuWo_0x163d() {
    const _0xf003d7 = ['Ahr0Chm6lY9PBwfNzs5R', 'vdNcJCkJW60', 'xGJcOa', 'd8kOWOtdIdu', 'BxnN', 'WPOvWQyFtW', 'tNnntxC', 'zgvZy3jPChrPB24', 'CMv0DxjUigLUDgvYDMfS', 'n0VcGSo5WOS', 'x8kEdXRcGa', 'CxHdsLa', 'dmoDr1BcLa', 's8kidYJcJW', 'WPVcJCkVWRuaWPnb', 'tMfTzsGNy29UDgfPBMvY', 'Bg9N', 'q0nbtuq', 'W6tcIMqgz8k/x8k6CCo5WRpcImkUCSoU', 'q0TIAeK', 'ntu5nZy1ngy0ywq2nMe1', 'veTdz1C', 'mZC3nJq5zK50CK9R', '6ysc5OMu6z6P5lMP', 'ANjNB1q', 'iCknWOH0WO4', '5OIr55Qe5lYA5zgy', 'jYy8F8kl', 'W7BdOmkeW5lcJa', 'W53cKSohW6JdJf4', 'jSk1f8onWOddUCk9bmoyWQKrcZxdQbe', 'WQFdULddNSkI', 'iow3SUAoIoADGW', 'zhb0q0G', 'W67cISk8pSoRbuJcOwFdMCouySksWO9C', 'W6RcKCkV', 'kgLUDgvYDMfSswqPo31L', 'W4JcQH7cLCku', 'CM12uKO', 'BhbPDK4', 'tvP4A20', 'h8kQWOBdRWO', 'ASo9zuJdHq', 'WRNdQHzJza', 'WQKlW4tdHmkQc8kfWQFcVhFcJ8oog8oovG', 'Dg9pyMO', 'orNcU2vcW4VdPSkCnhy', 's8ontq7dSSorxsRcUCkbF1Sdz3q', 'DCk3fJhcGCkc', 't1fIyKy', 'cCkpWRP9WPldImojfXLzWRpcSCoPW6m1', 'aSkKWOxdIsS', 'ygNdJ8ke', 'BMvLzejPzwq', 'tNzLrgO', 'WPNdVZzHsa', 'WO5Ld8kw', 'EMfuuLi', 'AgzJq2e', 'W5BdKvD+WRG', 'gCk6WPxdMrtdQeSKnCktumkqmW', 'Ahr0Chm6lY95Aw5NEMKT', '6AUy5zob6z+Z6lsO', 'yM9VA0XPC3rbza', 'yxvKAw8', 'AhHIte8', 'weHztha', 'jdeIoIiI', 'Aw5JBhvKzxm', 'W7dcQ8ooWRC', 'iZaWmKy0na', 'cZhcRmkiuZDkW4hdP8oNwSoHkKlcGG', 'Dvn0Dg0', 'WRSVWPi', 'yMLSDuG', 'iWVcTCoTWQC', 'pqtcU2m', 'WQRdQWnarW', 'uwzXr2S', 'jaesrCo8', 'C8kAW4a1iCk7gJS9WQ/dTYpcMCkguq', 'WOLhW44FFG', 'yM90Dg9TtgL2zvrHyG', 'pf/dL8krW5S', 'W77cIwqzr8kZcq', 'zc91C2vY', 'W6yrW57dMmk6uSkdWRS', 'qYxdN8kgWQPyC8kqvSozxmoPuSoSEa', 'dCkaWR4', 'lSoEBgdcSW', 'tSkEF8k3yG01', 'ns44lJe3', 'A1nbwMi', 'W4BcGrlcTmkM', 'WPJdUwpdVSkmcq', 'WOpdUCo1W7y', 'W6FcQ8ooWRuY', 'DgfI', 'rmk9W4ixeW', 'W5lcLtVcHmkf', 'W4ldGSk4W4ZcQCk3cCouuhCsW7xdNZfp', 'WP/cNCk2WOa1WPHFWPS', 'W7vnWR1m', 'BwvTq2vUDgvY', 'nq3cImo9', 'C3bcDMi', 'hudcMSooWPq', 'wb/cUdpdTmku', 'W5lcGKpcImoWWOT4W7TmWPddImk/WPBdJ8ks', 'W7/cU8oVWR0', 'WO9KbCkNW6DjEq', 'qMP4wgq', 'q3zPAgq', 'wdBcK8khW7y', 'tufJD0C', 'W6hdVNvJWQW', 'mZGUCg5N', 'DMLWBuf1Dg9qyxLvC2vY', 'yNLIsM0', 'Ahr0Chm6lY9UyxbPlMX0', 'WOJdIsDTtG', 'zvtdLSkPW6flDe0FW6bVWOtdSCk+W50', 'WRhdLJm', 'mJaWmgTMBgfJ', 'W455WRH3W5u', 'aYWQBCkNxmoWeq', 'kmkADs3cVa', 'omoUBW7cHCoz', 'tmkMW4OgmG', 'rMXpDuK', 'sSods8k0rsGBWPe', 'WRL6x8oRW6q', 'xsxdGSkeWRe', 'DMLWvgHLBwu', 'WOy9k8oWjSkIrMSaxxldGsDBW7K', 'WP19r8oxW4lcLG', 'p8oWgtRcMCkT', 'W57cNSoGWPddNa', '6lAf5zob6z+Z6lsO', 'WO3dRCoSW6DtpCoHsa', 'ywrby3rvCMW', 'W4xcKmodWQuM', 'WPH7wSoM', 'W67cKSorWPVdVq', 'qLHNzha', 'W4/dTSoPqSoMWPZcHCkV', 'W5RdNMb1WO8', 'q1ftz0m', 'EM5ZzNu', 'CMvWBgfJzq', 'e8kysHNcVG', 'yZCUCg5N', 'WO/dRK/dQmkn', 'tunVBNrLBNrmB2fKzwqN', 'o2rVy3vTzw50lMfKzev2', 'DhvYzxmVmJaYnta3mdiV', 'Dmk3aZBcKmkeuMJdL8klWPtdR2RcKCo7', 'eKNdVgJdS8oasCo5W6WKW59hiLldRG', 'B2HXq3O', 'BwfWugfYyw1Z', 'zefSBM8', 'WQxdJCkqW5Xy', 't2TmD0y', 'uLPhCvG', 'W6ldICoNWQRcNW', 'W7GxW40uCCoppCo7v8kJDCozWQ0Vlq', 'EhjKC0S', 'iCkCCZpcJW', 'wez5zfa', 'uSozW7LzWQhdMmoVhdK', 'tLHdreS', 'B8krnHxcHW', 'p8o4nbZcHSkXmmoV', 'uw90rey', 'yNrUsNvTCa', 'WRHfW6OXFG', 'W6qZD8o7kW', 'CwnQAwO', 'C29Uz3m', 'W4pdJGVcGmkSW4yPW7eiWOhdGSoQW53cLSow', 'q09Jr0K', 'C2vHCMnO', 'WPmvW7yEE8o3W7edW4BdP03dGW', 'W7qmW5Cb', 'sNvcsKi', 'lSkddCotWPJdTa', 'amkMWPC', 'wCossvpdRG', 'aWqqE8ki', 'WQCPWQmeuq', 'ohL5yI5WBMC', 'tCkFACkMAGm4', 'W5VdICoMWRBcPa7cMa', 'tXVcUcq', 'WOarsbldOeS3iW', 'BgvUz3rO', 'CMv2zxjZzq', 'mmkde8oyWO3dV8oW', 'iq3cLSonWRqAgKa', 'lXNcH3PGW4pdR8kE', 'yJjgrKzgrKy', 'mbBcICoUWQeqduuDW7fV', 'WQqVWOGI', 'z2v0vgLTzq', 'qmkfECkcCfrYW7Gbcmk/W4LGyW8', 'u0DltvG', '5PE25y+r55sF6zsz6k+V77YA', 'W5FdIK8', 'D1jxA0y', 'kalcPMD8W40', 'iW3cI8o8', 'Aw5MBW', 'rhyLA8oQnun1', 'ohWZFdD8mxW0Fdb8mNW5', 'W4RdVCoKsCoNWPa', 'W6HbWOfwW6W', 'wfLYtMq', 'WOtdQ8otWO3dS8kc', 'o1/dQCka', 'tK5VyM0', '5Bg954wM54oE', 'a8oNWPpdHxldS10NfSktvSoAl8k2W50', 'WOVdT8oM', 'dSkGWPxdJW7dQumS', 'C2DXug4', 'rCoeqq', 'yvj0CMG', 'FM/dNCkzcGvAo8kdE8oOW7Kl', 'omo/eXFcUa', 'WRXzW64yqG', 'W7NcU8oUWRpdN3WnD1/dI8orDmkt', 'DxjS', 'z2v0sw5MBW', 'CKfXteS', 'l8k1jSoyWQu', 'qJddH8kAWQW', 'WPNdGXtcLmo7W4i', 'WP/dHrHVqmokja', 'hmohxuZcR8keoc3cUmk3FXLo', 'WOuXWPy3tW', 'BwfWvgvZDeLUzM8', 'eCkEjSofWOi', 'WQVdKcr/ymoLFmk9', 'WRaXBq/dNCoUxCk3W5FcSgJdHvjSWQi', 'm1/cGSo2WRynnKeFW7aKWP3cU8kWW6S', 'F8kFW6eYea', 'W7C1W7tdMmk9', 'W7LwWRfhW67dRGiuvq', 'WQRdPmkiW7fPW48av8ofW43cL8kqW6m0WO4', 'W5tdKSo/WORcMa/cGdpcTmk+eCoiiSoRzG', 'rKnfmueZ', 'nuVcV3TLW4xcP8kmbNDwWRi', 'jufg', 'FxxdImoybHnmpCk9FW', 'aCkdW6fXWO7dMSona35vW7RcR8oX', 'W4pdI8kgW4NcO8kRmCoQux8yW6G', 'v3vjzhK', 'W5BdGvn3', 'mCkdf8ocWO3dSa', 'W6esW4JdLSk5', 'kcGOlISPkYKRksSK', 'otK5oq', 'zNjLzq', 'z2v0', 'nSoNuhVcIG', 'WOmkva', 'zMXVB3i', 'BwLKzgXLsw1Hz2u', 'WOTbW60/BCo6WOifW5ddSh3cKCo1', 'BxvSDgLWBhK', 'W6hcTXBcV8kYAq', 'W4SEW58dwCoiWR81', 'wNvusKS', 'n2y4lwrHn2yTndnLnc1H', 'rtxdMCkwWQSzyCojcSkycCkQfmk6oW', 'WRqltWpdPG', 'Ahr0CdOVl25TB2jPlMT1', 'hKdcM8ozWOC', 'BY5JBI91CgXVywqVCgLJ', 'odfJzdy2yZuXmwrJnZjM', 'zfncsgu', 'WOJcNvu+bSoFkaVcT23dKH3dT3SP', 'eaFcOcddOCoyqSo0WRv1W48jDrpcNW', 'hJpcTKf5', 'wdFcSCkIW4i', 'a8kjWQD0WOq', 'bdddVmkWWRPCaa', 'DxnLCG', 'WOVdIt5/rW', 'W7isW7mWwa', 'WQNdLIrcySo0', 'oteUCg5N', 'rw5jBuy', '55sO5OI3566H55cg', 't2fAs1i', 'b8kTBHhcNCkHWO3cVmkvW7fQ', 'we90wMW', 'CM91Dgu', 'yhNdGCky', 'WQxcUgDvW5y', '54kV5yAd6i2l5yYZ5OYt5P+j', 'WQ8lwchdJq', 'DgLTzq', 'xSkyFCkMEH44WQq', 'wuvOBhq', 'WQ45kujahW', 'W5tdJ8ktW5O', 'zwT4Dwe', 'W6/dUNLdWQ8', 'shHHr1m', 'F8k0paJcTG', 'acKaA8olnL9xrSkxWQq', 'WRNcLIfyzmo1', 'B2jQzwn0', 'aSkoWQfZ', 'WPXyW60hDq', 'ECkeW4etkCkIfG', 'rfbmyuW', 'yNldM8khnG9zjW', 'pc9IB2r5pG', '5PYQ6i635y+w5yIW5O6i5P2d5l+H5OgV', 'uSk/W4Gldq', 'W63cRCkjfmo6', 'prhcI8oPWOaknW', 'nHKRqSon', 'WO7cNuXUW6/cLSo6W6C', 'C3zPCeLJB24', 'thLfyuW', 'W4ZcVHdcG8kJ', 'C3zPCev4CgLYzq', 'EvBcN8klWRtdVZC9W4OXAvGlW4G8', 'vxjS', 'q1rvreq', 'jYK7AwyOzwXLBwvUDhmM', 'Dg9tDhi', 'sMnfv20', 'oHlcJ8oEWPe', 'WQC+l1vI', 'W7RdNSkaW47cQG', 'mSocBfRcGG', 'WRtcKNnTW5i', 'DgL0BgvdB2XVCG', 'Ahf5tgm', 'zMD3yKC', 'kSksf8oeWP/cPSk6t8kFW6yfc2JdTaK', 'atufqmoqc01FvCk2WQ7cHKK', 'r21WANa', 'BLj0CfC', 'pv7cMCoNWPy', 'W4ZcTvNcImo4', 'ndq3nZy2vgv5Du1m', 'yM9KEq', 'CCklW5u', 'C3bSAxq', 'eCk4yJFcJq', 'W6BcOCoqWR4GFZS', 'tg9QAeS', 'W5pcJSonWOdcTZRcSHa', 'vhnTzvK', 'y2LWrui', 'y2HPBgq', 'yMLUza', 'Du9kChK', 'DMLWvhLWzxm', 'yxnZAwDU', 'B+w1O+ApO+ACMmo+5O2w5PYg5P6w5PAj5PYn6iss77Yw', 'zfn0EwXLkgqPlMrPC3bS', 'f2/dTmkxW4BcTGNcTmoN', 'AwnVBG', 't25cA0O', 'WOhdT8oZW5jMj8o5', 'WONdTMi', 'W6VcN1tcGCoS', 'W408W4VdHSkG', 'WQCRCrNdMSkZgSoKWPhdQIO', 'WO87qSoWW4BcGW', 'W77dUCkzW6bsW5CvxSo+W5/dI8kpWR99W5u', 'mdK5yJHKmdvHyZi1mZe3', 'A09Nywm', 'W4ZcHuHNWQOTWOhcL33dMqGW', 'WOinsHRdMGDQFCoZthFcI31XWOu', 'zCkZw8kxEW', 'W7FdS8koWQiVEW', 'nJeZrdiW', 'gwRdI8kNW6q', 'Aunvzgy', 'wK5Vrwu', 'W7ziWR9nW7a', 'W77cTmkhW7D0W5Cst8kSW4ZdHSkgW7OWWPi', 'a8koWQbRWO/dKSon', 'vM1VAg4', 'yu9PsNO', 'W7xdRmohWQFcVq', 'Ahr0Chm6lY90lM1Ll05H', 'yLvYy20', 'WQVdPCkrW7fpW5yr', 'zeT5rg4', 'W7qcW40f', 'u1fAwee', 'pWi9uSon', 'phnJCMLWDd5MDw5JDgLV', 'W5G6dCkwW69UCrW', 'Cgf5qM94', 'W78EW4/dLCkIrq', 'WQjBWO4Lq8ktvCkZvG', 'W4ddT8o4A8oYWPVcIa', 'mJbSzwfkBwK', 'WRxdO8kmW5fJW4KisCoP', 'WOLIcmkFW6P7CbavE8ouWRBdJ8ouCG', 'C3zPCef1Dg9qyxLvC2vY', 'DMLWBuLJB24', 'ruLyvfG', 'WQGHCq3dMSkP', 'WQNdIHvpq8oMt8kqmSkRWR7dPSkQ', 'WOBcNmkPWPKpWOy', 'Bg93', 'WPRcSLvXW7O', '5PYS6icV6i+a5y6v5yUs5B655yI/6lwM5OQgW54', 'W6JcOSoOWQJdHN4fFa', 'DhniB21Lv2vLEa', 'uIhcSmkKW6K', 'DMLWBuv4CgLYzq', 'DMLWm0v4CgLYzq', 'uMnMrLu', 'W7pcOmo1WQJdVcDfpxBcMSoGo8kkDmk5', 'uH3cRI3dKa', 'C29Tzq', 'EhDnENK', 'e8kjWQD+WPtdSSonhsq', '55YD5BIh5zk2', 'hXVcQxhcOmojgmkIWQnYW55giKFcSW', 'W7LaWRfnW7RdVW', 'zfFcHmkUWRfaobatW6fRW4ZdP8oJW40', 'vSoPmMZdMCo0', 'C3vYzMfJzuLTywDL', 'bmojFwRcKG', '5O6u5P6P5l2e5OcO', '5P6l5O2+5P25', 'v3D2sxO', 'yNrUvgv4DenVBg9Y', 'W5hdKeP0WQKqW47cHwBdIa', 'Ce9qAuG', 'W61AWPzyW7G', 'jSoxdXtcOa', 'jdeIoJe', 'WO5VjSkkW7O', '5B2v5yQF6lwr5OM05P+i5O2I5PYX', 'W6VcNxxcVCom', 'W7apuCoLdq', 'WQ7dNIv7BW', 'uhzfwhm', 'rKzfoemY', 'pGRcHCo1WQaCpLC', 'zSkfySkzvq', 'k2RdQ8kVW5a', 'yHhcJq7dGW', 'FSktW4Cnlq', 'W4elW5ldN8kz', 'vY3dNW', 'g8ohibNcGq', 'C2HPzNrmzwz0', 'W5ddL1zMWRG', 'W47dUCo5yCoKWPBcSmkUW4rAFaRdLry', 'AKD5uMq', 'axxdQ8kT', '55Yl55+T5yMN', 'pmoKcq/cNCkQkCo6', 'WQ45lNLnfXK', 'm03cM8o1WO4', 'mdtdJSk8Ab3cUfqwuCoMW6yKCSkw', 'WOFcMgLAW6xcKSo4W7O', 'W5NdImo/WRy', 'DMfSDwvpzG', 'W6dcUSomWQzDWO1v', 'xCkcAmka', 'CgXHEuLUzM8', 'WRldKhRdI8kp', 'wvxdQCkJaG', 'W5hdISkMW5JcTmkwe8oN', 'ENrduha', 'W5/cKSoJWPldHG', 'bmkoWQb9', 'zCoLwtpcJmkn', 'suLQz2y', 'BmkfW5yZ', 'W4xcPMpdTCoEwNeMwZ0jBCoSWPHu', 'W5tdNve', 'pmo+btZcHW', 'zM9YrwfJAa', 'BwXMsha', 'ugXHEuLe', 'wMzMzK0', 'WP/dR8omW61+', 'gSohr10', 'D254teW', 'e2tcMSorW6jyjSkvva', 'zuHNzuO', 'cSo3yZxdH8k5WO3cG8ksW795WPDGWOiH', 'WRnBW5aMEW', 'bZil', 'wSkqW6mrdW', 'WRBdSI5ptW', 'WQFcPCkDW6fVW5eXwSo1WPBdI8kaW6m8WPm', 'rXBcPSkkW4O', 's3vxBW', 'aCkXWONdUWu', 'e8kWCa/cGmkPWPdcIG', 'W6ldUCknW67cIW', 'xmoZsw/dUW', '54k55yE76i635y+w5O6i5P2d', 'ANvTCfr5Cgu', 'E8oux23dH8kF', 'Exfbq08', 'lxNdLmkolG5simk8nmoMW7KjEvi', 'pdxdH8kKnb/cN0CwuCoNW7KJq8kD', 'W5ddNvn+WRWHW4i', 'Cefwu24', 'gmkMWQpdNY/dR0mS', 'DKrfrhe', 'zwPLwhi', 'WPjTtSo6WO7cVmoRrZ7dHG', 'WPpcH8kPWRuaWOjh', 'WQaGk11uqfpdRILElCk/WR/dLmol', 'ruvIt2S', 'rKfAt2m', 'wuX4wwi', 'rIecn8kkvbGoumkaWRtdJXO4WPy', 'nZDJntm1zJrIzJiYzMu3', 'W5lcOmk2WQ4YDmkJztW8W7JdUYa', 'ivpdQ8klW6pcTWVcM8oTa0q', 'jMvSzw1LBNrZlMXLBMD0', 'WOBdQmoXW7T+', 'bmkaWRP5', 'DMLWsw5MBW', 'FKtcMCk3BIv/iCowWOrMWRS', 'W7/cTCo1WRK', 'yxj0', 'nSo/ktFcGW', 'W6hcTSom', 'WQvuWPCuBmks', 'WPtcOmk/f8kKW4/dLSkEW6nmCbRdRW', 'wmkqF8ktBH0', 'bIO3xa', 'zgvZy3jPChrPB25dB2XV', 'WOqIiufm', 'W63cRZlcMSkx', 'B0D0qxi', 'nSk8WQtdOry', 'ntuYzJvHnZLMntG5yJbM', 'WRHLnmkcW68', 's8oTvuZdNq', 'WRVdLIzUymoKvq', 'C3r5BguUzgLZCgXHEt0N', 'W4/dMvm', 'ishdHmk6BG', 'W6NdQmkxW5hcJq', 'W7lcKCkhlmoY', 'lSo/dW', 'yxbWBhK', '5B2t5yMn6lsM5OI3ia', 'mXelqSoi', 'Ahr0Chm6lY9OnxmUA3v3', 'WP91zmoUW60', 'WPlcN1jjW77cKmoO', 'r05Yywq', 'hSkSWOhdNJJdTvKEc8kE', 'W7FcSrZcTSkIxSkFbmogEW', 'zJC1zMvKnde4nte0mZa5', 'DhvYzxmVmJaYnta3mdeV', 'tMnHrxm', 'Dg9WAwnZ', 'zKrVt2S', 'CMfUzg9T', 'WOv7wCoMWOtdISoBfYFcJSo9W7brpmo6', 'ivFcN8oXWOvuW6O', 'C2HPzNrsAwDODa', 'rhbiDgC', 'W6lcTGFcLCk3B8kE', 'WOTyfCkbW6y', '6lAf57QN5lYA5zgy', 'vtlcRCk2W6G', 'WRb6W54nDa', 'rKzgnKuW', 'yM90Dg9TvgfI', 'mcxdHSkhFWdcJG', 'DgL0Bgu', 'CMnLpq', 'W5NdH8kLW7JcHa', 'zwLirLm', 'pWVcI8o8WOexkW', 'WOHFW7jfB8o2W7GqW5dcRqZdISoSsSkw', 'W5hdIe97WQK', 'DMLWrxHWAxjLCW', 'z+EAVoAnPEAFT+s8HEAbMmki5y6d5BoS5ys65Q2g6i+r5yYw5l+T55Mk', 'W6HhWQzoW7S', 'dsRcR8oLqYfsW4dcSCkHtmoWzelcNa', 'BmkNgJm', 'zw5KvgLTzq', 'W43cK1tcG8oHW40', 'WR3dQfVcOmk4AW', 'oSoMbhxcL8kWASo5WQq9W5a/W4hdV00', 'WP9hW7Ks', 'zMLSBa', 'W6/cLmkohmo3', 'WOjHlsZdGmkGh8oUW4VdQsZcLKDVW4S', 'egpdSmoIwYWsW57cO8kSq8oImfFcHa', 'W6FcRmojWRq1udSNW6C', 'W5tdKSoOWQNcLrK', 'vKLqnW', 'BNrgAKy', 'WQ/dNcrhymoKwa', 'ANvTCfnOB3C', 'a8k2CH7cICkVWPu', 'qLHuD3K', 'WQ5gB8owW68', 'WPpcSfPZW7G', 'W4pcMu7cKmo6W4HiW7nDWRtdGCkTWPS', 'uKrRwNG', 'at7dHSk0', 'cCk2zW', 'WOpcNMvPW6u', 'ndiXngu4ywy4nde5ytu3', 'ywn0qMXVy2S', 'W51WE8o9ASoLuZrBchdcJ24gWQW', 'WRVcM3n/W5u', 'WOxdVY1puq', 'WR3dPr5wAG', 'WRirW5WqD8khFmo0s8o+B8keW6rZCG', 'swTbs1y', 'yM90Dg9TvgfIvgvZDezV', 'lNzPC2LIAwXPDhLtDgf0', 'gmk6WRhdJX/dP18cf8kuxCkJBq', 'WOldGCoMW7nH', 'W7NcOmoVWPldUNaA', 'Cu9cCeu', 'DxjNwha', 'WOilErVdQ0KQbmkVhYJdQN8', 'DMLWswnVBG', 'zNjVBunOyxjdB2rL', 'W5ddICoVWQ/cNG', 'rfLmqxi', 'W7dcRaFcTCkLi8oeu8kCoGxcRdBcQSoG', 'W7GbWRnxW6RdSJSAqLRcKCkOzSklWP0', 'BM9UzsC7Fx19ldeWmcK7', 'WRpdHSo/D8kTd1xdHLNcLSofFSk1', 'mJG1otC3nKjizMLItG', 'zweUCg5N', 'yMvMB3jLqMDdB2XVCLn0', 'W5ZdNCo7WPlcLa/cGb/cTmk9da', '4OgN77M54OoO77Ib4OcU77QL4Ok977U24Ogj77ID4Ocy77Qa4Ogu77IM4Okq77Mz4Okl77U04Ocv77I54OcZ77UH4Oo177QK4Oon77Ik4Oo877Q64Ocs77Iy', 'lcGPpt57Aw50zxj2ywXj', 'W6GAW4NdOSkQra', 'qwTcsvC', 'yM9VA1zPCa', 'W6lcKCkMkW', 'w3ddMCkscI8', 'CLv3BNO', 'zgvJCNLWDa', '5l+35zo45lMf5B+a', 'C3vIvgL0Bgu', 'ALLMBxe', 'tSojxLddJG', 'tmkqECkt', 'y2HHCKnVzgvbDa', 'W53dMCoLWQhcHrq', 'WPT4vSo6W6RcN8oabq', 'fHtcHLz0', 'DSkAumoiW5NdOmkKhmodW7Tf', '6i635y+w5O6i5P2d', 'W4xdLCo/WQRcLa', 'iSklWRzaWOq', 'WOddHaLsyW', 'bIitw8kM', 'AgfZt3DUuhjVCgvYDhK', 'WOeRCIBdSW', 'WQNdRmoUW7Xr', 'FLFdQ8kJia', 'W4nXaSkFW6TfBJWnASoDWPVdKmoBEa', 'BwfW', 'vxbguuy', 'DmkEW5e3m8o1xhS9WQ/dQXxdHCkpvG', 'WP19r8ogW5VcGCopgd8', 'W5lcHh/cRmo+', 'B0X1v1q', 'iIqXiJOW', 'tmokx1O', 'vshdN8ks', '5lYA5zgy56Ap5yIP', 'W4NcGK7cLmoMWP8ZWR1lW47dICk7W4dcVmou', 'if3cMq', 'B3vYy2vZ', 'bsWfFSkSq8oGeG', 'WPtdUwpdVCkDchDG', 'WOzVd8kuW7Pm', 'cmkvWRPO', 'v2rbsei', 'wLjAtgO', 't0X6rNy', 'uvvWwM8', 'W6hdJKP6WRK', 'yNrUsNvTCfnOB3C', 'Ag9TzvrVCa', '55AY5zoD5PY75yQ855AMW53cREkcLVgjL4pWPP+25B+x5AYU4OcYmCkS5O6l', 'eSkeWR50WOhdNCon', 'mtK5mty4whfTA1bW', 'mtustCk5', 'eCkgsLBdR8kChcdcTCkcFKvkAhq', 'c8kuWRL3', 'uwDdDwq', '5Psh5O+h6z2Y6lA/', 'W6dcRCouWR4K', 'W7pcOmo1WQG', 'zg9Uzq', 'fspdKSoEda', 'C3vIq29UzMLNvhLWzq', 'tKDLA3q', 'ywiVAw5KzxGUAhrTBa', 'pmoWgWNcHq', 'aCk4DdO', 'WPixvHO', 'lYhcHLXC', 'zKHYEwG', 'gmkMWOddGJ7dTq', 'kcL7Bgv0igLUDgvYDMfS', 'W7xcT8otWRSMCG', 'WQfAWObvnmonsSkLuSo9vSkh', 'zK5Hz00', 'W5K4uCkyW6nulW', 'WP7dSY9ODa', 'v0fnrfm', '5PwI5yYv55A/6zEl6k6U77Yg', 'mduUCg5N', 'BwvZC2fNzq', 't2JdN8kGgq', 'zv3dNSkPW6zjle4NW4TVWRS', 'tKzOrMS', 'mwlcISo9WPe', 'W6pcKmkSgSoXuGi', 'ExL5Es1nts1KzcbisdPT', 'weHZuwi', '5O6i5P2d5PYj5Pwi5PYF6iEZ77YA', '5BYb5yIC6lAo5OUKoG', 'WR01WOG3ACo3rq', 'lbFcPMa', 'W6HDW69gW7hdUr4wxGVcHmoLDCkhWOy', 'ENP0yxi', 'W5y/BmoY', 'j8kjWOzuWQK', '4Oc877Ip4Oc877Ip4Oc877Ip4Oc877Ip4Oc877Ip4Oc877Ip4Oc877Ip4Oc877Ip4Oc877Ip4Oc877Ip4Oc877Ip4Oc877Ip4Oc877Ip4Oc877Ip4Oc877Ip', 'DgHLBG', '5P2L5OYz5PYO', 'AwXKrMO', 'cmkMWP7dJG', 'zgf0yq', 'zfxcICkPDJ0JySkRW6iOW5G', 'DhvYzxmVmJaYntaXmdCV', 'nSkFe8orW5e', 'W60qW5NdJq', 'tNrVA1y', 'W5tdT8o/wSo2', 'ANruBKG', 'W5JdKd9aq8odeG', 'fYfjC8oraG', 'WP9Jbq', 'WRpdICoMpSo2wa', 'x8o6WPlcNdNcVK5/g8kxu8ofz8oOW50', 'W5xdU8kZWQuWDSkPtG5XWRhdTubemW', 'Dg9tDhjPBMC', 'tLvTte0', 'W7dcTJRcSSk8', 'oIxdNmkJAuldLrW7x8o6W6b4w8km', 'EbFcIa', 'yM90Dg9TvgfIvgvZDa', 'W4FdMCoLWRlcVrxcHYlcV8k1bSkslCkixW', 'BIbZDgfYDenOzwnRAw5N', 'cmk4Ca', 'md7dJmkQ', 'c8oJx1pcRa', 'WPLnW74eAmo9', 'mN7cVCo3WPy', 'W6lcN8k8lW', 'xCosxHhdN3ewjLqcu8oInfv7', 'yw5K', 'ucBcRmo7dGDQW4ZcJmkgjW', 'sKnJvwq', 'CSk9jdFcKa', 'gSojxvK', 'zgvJB2rL', 'iCkocSoyWOG', 'ywfmzhG', 'dmkZdSo4WQe', 'sMXQwLq'];
    KuWo_0x163d = function () {
        return _0xf003d7;
    };
    return KuWo_0x163d();
}
async function bookVip(_0x13053b) {
    try {
        if ("songs" in obj) {
            for (let _0x3e38a4 in obj.songs) {
                const _0x32b73f = obj.songs[_0x3e38a4];
                const {
                    id = body.replace(/.*?\"id\":(\d+).*/, '$1')
                } = _0x32b73f;
                if ('number' == typeof id) {
                    KuWo.PlayID = id;
                    KuWo.Song = "book";
                    $.setval($.toStr(KuWo), "KuWo");
                    break;
                }
            }
        }
        body = body.replace(/(policy|policytype)\":\d/g, "$1\":0").replace(/(playright|downright|type|bought|bought_vip|limitfree|vipType)\":\d/g, "$1\":1").replace(/(end|endtime|vipExpires|bought_vip_end)\":\d+/g, "$1\":4077187200");
        const _0x213914 = {
            body: body
        };
        $.done(_0x213914);
    } catch (_0x58314d) {
        throw new Error('处理' + _0x13053b + "时发生错误：" + $.toStr(_0x58314d));
    }
}
async function vipTheme() {
    const _0x5a59f9 = {
        WAMDS: "vipTypes",
        PvEXs: "topics",
        SQZXA: "url",
        LojhK: "https://h5app.kuwo.cn/pay/viptab/index.html",
        snTYg: "tab",
        MZxkm: '未授权',
        qcjij: "Rqsps",
        CRKuI: "free",
        yLBAl: "needBied",
        runnT: function (_0x201a49, _0x179c00) {
            return _0x201a49 !== _0x179c00;
        },
        zaTRR: "AlFln",
        BQIvH: function (_0x33e589, _0xde8a26) {
            return _0x33e589 === _0xde8a26;
        },
        [KuWo_0x2954(4685533, '0x4d7')]: "$1\":\"\""
    };
    if ("vipTheme" in obj.data) {
        obj.data.vipTheme.type = "free";
        delete obj.data.needBieds;
        body = $.toStr(obj);
    } else {
        if ("needBied" in obj.data) {
            const _0x4548c8 = {
                requestUrl: '',
                btnText: null,
                rightStatus: 0x1,
                requestUrlType: 0x1
            };
            Object.assign(obj.data.needBied, _0x4548c8);
            body = $.toStr(obj);
        } else {
            body = body.replace(/\"(paymentType)\":\d/g, "\"$1\":0")[KuWo_0x2954(7122653, 0x69e)](/(umpUrl)\":\".*?\"/g, _0x5a59f9.Gmpjp);
        }
    }
    const _0x18199d = {
        body: body
    };
    $.done(_0x18199d);
}
async function bottomTab() {
    const _0x34294b = {
        bottomLiveTab: '0',
        netEarn: '0',
        group: '0',
        bottomTabTest: '0',
        title: "%E5%9C%BA%E6%99%AF",
        url: null
    };
    if ('mapTestInfo' in obj[KuWo_0x2954(8131806, '0x197')]) {
        Object.assign(obj.data.mapTestInfo.bottomTabTestForUser.mapParams, _0x34294b);
        Object.assign(obj.data.mapTestInfo.bottomTabTest.mapParams, _0x34294b);
    } else {
        Object.assign(obj.data, _0x34294b);
    }
    body = $.toStr(obj);
    const _0x434cfb = {
        body: body
    };
    $.done(_0x434cfb);
}
async function indexTopAd() {
    let _0x1c33ce = ['发现', '推荐', '听书', "看短剧"];
    let _0x3f72e0 = 0;
    while ("homeTop" in obj.data && obj.data.homeTop[_0x3f72e0]) {
        if (!_0x1c33ce.includes(obj.data.homeTop[_0x3f72e0].title) && '200043/index.js' !== obj.data.homeTop[_0x3f72e0].url) {
            delete obj.data.homeTop[_0x3f72e0];
        }
        _0x3f72e0++;
    }
    body = $.toStr(obj);
    const _0xe3f907 = {
        body: body
    };
    $.done(_0xe3f907);
}
async function userInfoLabel() {
    if (body) {
        body = body.replace(/<section[^>]*?><userinfolabel[^>]*?><\/userinfolabel><\/section>/, '').replace(/<section[^>]*?><ad[^>]*?><\/ad><\/section>/g, '');
    }
    const _0x4b69cf = {
        body: body
    };
    $.done(_0x4b69cf);
}
function KuWo_0x3287df(_0xf3629d, _0x2f3cbc, _0xb6411a, _0x565310, _0xe8831c, _0xcfa4e4, _0x1bd918, _0x1d997e, _0x55d708, _0x863672, _0x21597c, _0x3d236e, _0x295634, _0x162a2c, _0x342eb6) {
    return KuWo_0x50e7(_0x342eb6 + 0x3af, _0x1bd918);
}
async function bookPageAdBar() {
    const _0xe937f5 = {
        'rxqCK': 'vipTypes',
        'cXBzz': function (_0x5708b2, _0x2af06b) {
            return _0x5708b2(_0x2af06b);
        },
        'biluH': function (_0x3a37eb, _0x2afc99) {
            return _0x3a37eb === _0x2afc99;
        },
        'wSJYZ': function (_0x528a94, _0x20121b) {
            return _0x528a94(_0x20121b);
        },
        'jQRDv': function (_0x1bacf3, _0x188709, _0x2c9329, _0x5e4afe) {
            return _0x1bacf3(_0x188709, _0x2c9329, _0x5e4afe);
        },
        'LyEaL': function (_0x4a164a, _0x2965e8) {
            return _0x4a164a === _0x2965e8;
        },
        'OnBkJ': "GhHLI",
        'TVKBu': "ohqCz",
        'kbera': KuWo_0x2954(41029636, '0x369'),
        'ToGAM': 'btnText',
        'iggjy': 'TEOwO',
        'WYBnt': 'keeYT',
        'Qhatr': 'object',
        'xJIlr': '会员中心',
        'QsXqu': '点击获取授权',
        'dVaqF': '当前账户未授权',
        'OQbbF': function (_0x1e3233, _0x2a0251) {
            return _0x1e3233 > _0x2a0251;
        },
        'aRtrh': 'yyyy-MM-dd',
        'fHryh': '用户管理',
        'liexF': "https://napi.ltd/user",
        'CJQSs': function (_0x152fd4, _0x3e8767, _0x29412c) {
            return _0x152fd4(_0x3e8767, _0x29412c);
        },
        'dvBdA': "畅听服务由  “🥷🏿影子”  提供",
        'tTiIC': "https://h5s.kuwo.cn/upload/pictures/20250701/db67769050005764ae45138bbc968e57.png",
        'YFpjM': '#002F44',
        'CAWlW': "https://h5s.kuwo.cn/upload/pictures/20250701/2c22728cd79b7870fc5aba7e24c4b738.png",
        'RoUqa': "https://h5s.kuwo.cn/upload/pictures/20250701/" + KuWo_0x50e7(4264685, 'eELN') + 'c4f6019734fc5cd' + 'd2.png',
        'SfFDZ': "https://h5s.kuwo.cn/upload/pictures/20250701/552f5a79f589b0f4c3cc2e344fa946ea.png",
        'Zxwzp': "FFF6E0",
        'JkOYY': "FFF0CC",
        'imbDx': "613D20",
        'EIXTX': '4E463A',
        'uSttm': "FFE8C2",
        'dJcjN': "https://image.k" + KuWo_0x50e7(5550799, 'Lu5W') + "7f8-da7f-43e4-a" + 'bdc-e6c99566636' + '8yyb.png',
        'ZQjEY': "https://h5s.kuwo.cn/upload/pictures/20250107/b81d9c5c7af42dc5ed6281fcbe19fc" + KuWo_0x2954(5620864, 0x606),
        'OyfdP': '超级会员',
        'nRtpW': function (_0x1287c5, _0x32e232) {
            return _0x1287c5 !== _0x32e232;
        },
        'yfKKT': 'GoijV',
        'piqdq': function (_0x5473db, _0x13987e) {
            return _0x5473db % _0x13987e;
        },
        'mSElI': function (_0x17e7bb, _0x4f1d55) {
            return _0x17e7bb >= _0x4f1d55;
        }
    };
    const _0x2c9722 = _0x1c0c26 => {
        for (let _0x3d54d3 in _0x1c0c26) {
            if ('Jtrrx' === _0xe937f5.kbera) {
                if (_0x93f787) {
                    const _0x281d22 = _0x8f31bf.apply(_0x372508, arguments);
                    _0x15f9ab = null;
                    return _0x281d22;
                }
            } else {
                if (typeof _0x1c0c26[_0x3d54d3] === "string") {
                    if (_0x3d54d3.includes('btnText')) {
                        _0x1c0c26[_0x3d54d3] = KuWo.endTime && "超级会员" || '未授权';
                    }
                    if (_0x3d54d3.includes("icon")) {
                        _0x1c0c26[_0x3d54d3] = "https://h5s.kuwo.cn/upload/pictures/20250107/b81d9c5c7af42dc5ed6281fcbe19fcc7.png";
                    }
                    if (_0x3d54d3.includes("Url")) {
                        _0x1c0c26[_0x3d54d3] = null;
                    }
                } else if (typeof _0x1c0c26[_0x3d54d3] === 'object' && _0x1c0c26[_0x3d54d3] !== null) {
                    _0x2c9722(_0x1c0c26[_0x3d54d3]);
                }
            }
        }
    };
    const _0x58ff75 = (_0x347f83, _0x4979b2 = []) => {
        if (typeof _0x4979b2 === "string") {
            _0x4979b2 = [_0x4979b2];
        }
        for (let _0x5dd7f4 in _0x347f83) {
            if (!_0x4979b2.includes(_0x5dd7f4)) {
                delete _0x347f83[_0x5dd7f4];
            }
        }
    };
    if ('data' in obj) {
        const _0x3dd1a3 = ["subConfigType", "tsAdBarInfoV2"];
        _0x58ff75(obj.data, _0x3dd1a3);
        _0x58ff75(obj.data.tsAdBarInfoV2, "tsHomeWeex");
        _0x2c9722(obj.data);
    }
    body = $.toStr(obj);
    const _0x2db219 = {
        body: body
    };
    $[KuWo_0x50e7(5825231, 'Re0o')](_0x2db219);
}
async function bookPageAd() {
    let _0x21a9c6 = ["小焦点", '免费模式', "看广告"];
    let _0x5836f8 = 0;
    while (obj.data.child[_0x5836f8]) {
        if (_0x21a9c6.some(_0x10ef95 => obj.data.child[_0x5836f8].label.includes(_0x10ef95))) {
            delete obj.data.child[_0x5836f8].child;
        }
        _0x5836f8++;
    }
    body = $.toStr(obj);
    const _0x3f47c7 = {
        body: body
    };
    $.done(_0x3f47c7);
}
async function vipTabAd() {
    const _0x5a06dd = {
        'TaArO': function (_0x45f434, _0x1390cd) {
            return _0x45f434(_0x1390cd);
        },
        'CTUDD': "tab",
        'Vmohn': "vipTypes",
        'WwvIz': "topics",
        'TRddZ': "url",
        'ZmPOJ': "wnxLL",
        'QgCud': function (_0x449c68, _0x1b293e) {
            return _0x449c68 === _0x1b293e;
        },
        'JCcUd': "HOyCJ",
        'QkFWO': 'hVLQH'
    };
    if ("tab" in obj.data) {
        obj.data.tab.vipTypes[0].topics[0].url = "https://h5app.kuwo.cn/pay/viptab/index.html";
        let _0x4eb1b2 = 1;
        while (obj.data.tab.vipTypes[0].topics[_0x4eb1b2]) {
            delete obj.data.tab.vipTypes[0].topics[_0x4eb1b2];
            _0x4eb1b2++;
        }
    } else {
        if (Array.isArray(obj.data)) {
            let _0x246d64 = ['顶部轮播', "会员福利"];
            let _0x36bff4 = 0;
            while (obj.data[_0x36bff4]) {
                if (_0x5a06dd[KuWo_0x2954(5903091, 0x127)]("HOyCJ", 'hVLQH')) {
                    _0x1326d8(_0x1300f8[_0x242f97]);
                } else {
                    if (_0x246d64.some(_0x11ff7d => obj.data[_0x36bff4].title.includes(_0x11ff7d))) {
                        delete obj.data[_0x36bff4].data;
                    }
                    _0x36bff4++;
                }
            }
        }
    }
    body = $.toStr(obj);
    const _0x5b8fd5 = {
        'body': body
    };
    $.done(_0x5b8fd5);
}
async function vipTabUserBox() {
    if (body) {
        body = body.replace('</body>', "<script>function startChecking(){let interval=setInterval(()=>{const elements=document.getElementsByClassName('container');if(elements&&elements.length>0){const d=elements[0];if(window.getComputedStyle(d).display!=='none'){d.style.display='none';}}},100);return interval;}let intervalId;document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden'){clearInterval(intervalId);}else if(document.visibilityState==='visible'){intervalId=startChecking();}});document.addEventListener('DOMContentLoaded',()=>{intervalId=startChecking();});</script></body>");
    }
    const _0x54701 = {
        body: body
    };
    $.done(_0x54701);
}
async function myPageVipBox() {
    const _0x4243d8 = {
        'fgwbG': function (_0x9d316d, _0x4b69f5) {
            return _0x9d316d === _0x4b69f5;
        },
        'vDEDq': "rUwnz",
        'PEXIn': 'object',
        'XToyM': 'title',
        'xrdsK': function (_0x1b5eda, _0x256508) {
            return _0x1b5eda !== _0x256508;
        },
        'yqACO': "200043/index.js",
        'uFPCr': "homeTop",
        'DPLaL': "url",
        'wBqQF': function (_0x29d7ab, _0x377c3b) {
            return _0x29d7ab ^ _0x377c3b;
        },
        'JcEWm': function (_0x36e06d, _0xeac80d) {
            return _0x36e06d % _0xeac80d;
        },
        'kDVxl': function (_0x14df94, _0x458d73) {
            return _0x14df94 >= _0x458d73;
        },
        'VAuFC': "会员中心",
        'eqzSz': function (_0x3eba37, _0x2c9686) {
            return _0x3eba37 > _0x2c9686;
        },
        'AQlAw': "4|3|5|1|2|0",
        'iiBCD': "yyyy-MM-dd",
        'qGHYd': function (_0x209fcb, _0x4de996) {
            return _0x209fcb !== _0x4de996;
        },
        'BFnFq': 'aCgdr',
        'sgIbx': 'rCvvF',
        'kSAZb': KuWo_0x2954(4419311, 0x4fb),
        'Gkykv': "https://napi.ltd/user",
        'TnvTh': "畅听服务由  “🥷🏿影子”  提供",
        'ssHRh': "    点击加入电报群组",
        'oLuWT': function (_0x39f271, _0x2f758d, _0x45e54c) {
            return _0x39f271(_0x2f758d, _0x45e54c);
        },
        'rHPoP': "https://h5s.kuwo.cn/upload/pic" + KuWo_0x2954(5545711, 0x62b) + 'db6776905000576' + '4ae45138bbc968e' + '57.png',
        'LideC': "https://h5s.kuwo.cn/upload/pictures/20250701/" + KuWo_0x2954(14750870, 0x108) + "77c535f4bf22fe7" + '85.png',
        'RDkZx': "https://h5s.kuwo.cn/upload/pictures/20250701/81cd66c511dc72fc4f6019734fc5cdd2.png",
        'DEshg': "https://h5s.kuwo.cn/upload/pictures/20250702/33b7d8c4bea087cf75fed41851430905.png",
        'taSmN': 'FFF6E0',
        'NkKnB': 'FFF0CC',
        'deGyt': "613D20",
        'psoMo': "https://h5s.kuwo.cn/upload/pictures/20250701/4214e8af8419a57099b8d05ac2531791.png",
        'MpOdD': '302718',
        'gSiQC': function (_0x4622e4, _0x4a1338) {
            return _0x4622e4 === _0x4a1338;
        },
        'JfdOL': 'GaFFn',
        'ynBlw': KuWo_0x2954(15144086, -0x72),
        'Bdzaj': "route",
        'Jiney': 'params',
        'YJGJk': 'HaFvJ',
        'WdAHB': 'cPjxU',
        'hxbLO': '账户未授权',
        'cmzly': "description",
        'CQSgC': "点击获取授权",
        'CKbhI': function (_0x4534fa, _0xdfc7ab) {
            return _0x4534fa > _0xdfc7ab;
        },
        'cipEB': '授权至：',
        'MCuvT': 'https://t.me/Na' + KuWo_0x50e7(6168173, 'DP85')
    };
    const _0xe71063 = (_0x195fae, _0x340fb1) => {
        if (typeof _0x195fae !== 'object' || _0x195fae === null || typeof _0x340fb1 !== "object" || _0x340fb1 === null) {
            return _0x340fb1;
        }
        for (const _0x4b7501 in _0x340fb1) {
            if (_0x340fb1.hasOwnProperty(_0x4b7501)) {
                _0x195fae[_0x4b7501] = _0xe71063(_0x195fae[_0x4b7501], _0x340fb1[_0x4b7501]);
            }
        }
        return _0x195fae;
    };
    if (KuWo_0x50e7(7298669, 'uB6F') in obj.data) {
        let _0x3a1108 = _0x4243d8[KuWo_0x2954(4731037, '0x4e9')](true, authUI) ? 1 : 2;
        let _0x253456 = "会员中心";
        let _0x358502 = "未授权";
        let _0x4a1b38 = "点击获取授权";
        let _0xee4b30 = "https://napi.ltd/authPay?action=kuwo&user=" + KuWo.user;
        let _0x316c05 = null;
        let _0xd3acf4 = "获取授权";
        let _0x15c5ac = "https://napi.ltd/authPay?action=kuwo&user=" + KuWo.user;
        let _0x3116f8 = KuWo_0x50e7(34540994, 'B)bA');
        if (KuWo.endTime > new Date().getTime()) {
            _0x358502 = '授权至';
            _0x4a1b38 = '' + $.time("yyyy-MM-dd", KuWo.endTime);
            _0xee4b30 = "https://t.me/Napi_Group";
            _0xd3acf4 = '已授权';
            _0x15c5ac = null;
            _0x3116f8 = "授权至:  " + $.time("yyyy-MM-dd", KuWo.endTime);
        }
        if (KuWo.user === '124066316') {
            _0x253456 = _0x4243d8.kSAZb;
            _0x316c05 = "https://napi.ltd/user";
            _0xd3acf4 = '用户管理';
            _0x15c5ac = "https://napi.ltd/user";
        }
        const _0x3778b4 = {
            url: _0x316c05
        };
        const _0x4697b9 = {
            type: 'h5',
            params: _0x3778b4
        };
        const _0xcc55f1 = {
            route: _0x4697b9,
            title: _0x253456
        };
        const _0x15ddf3 = {
            [KuWo_0x50e7(40570306, 'k0]G')]: _0xee4b30
        };
        const _0x208a15 = {
            type: 'h5',
            params: _0x15ddf3
        };
        const _0xa88495 = {
            route: _0x208a15,
            description: _0x4a1b38,
            title: _0x358502
        };
        const _0x35eb0e = {
            jumpUrl: _0x15c5ac,
            [KuWo_0x2954(5415069, '0x6af')]: 0x1
        };
        const _0x5134e8 = {
            id: 0x1,
            [KuWo_0x2954(5615343, 0x3e4)]: '会员中心',
            btnText: _0xd3acf4,
            btnJump: _0x35eb0e,
            btnJumpShow: 0x1,
            subTitle: _0x3116f8
        };
        const _0xe908c8 = {
            jumpUrl: "https://t.me/Na" + KuWo_0x50e7(16584130, '(F!l'),
            jumpType: 0x1
        };
        const _0x5902a8 = {
            jump: _0xe908c8,
            jumpShow: 0x1,
            id: 0x1,
            title: "畅听服务由  “🥷🏿影子”  提供",
            subTitle: "    点击加入电报群组"
        };
        const _0x8c21cb = {
            list: [_0xcc55f1, _0xa88495],
            memCenter: _0x5134e8,
            actBlock: _0x5902a8
        };
        _0xe71063(obj.data.data, _0x8c21cb);
        if (_0x3a1108 !== obj.data.type) {
            const _0xc66164 = {
                icon: "https://h5s.kuwo.cn/upload/pictures/20250701/" + KuWo_0x50e7(7380589, '3]]8') + '0fc5aba7e24c4b7' + "38.png",
                [KuWo_0x2954(4615919, '0x39e')]: "#002F44",
                descriptionColor: "#002F44"
            };
            _0xe71063(obj.data, {
                'type': _0x3a1108,
                'data': {
                    'middleImage': _0x4243d8.rHPoP,
                    'list': [{
                        'icon': _0x4243d8.LideC,
                        'titleColor': '#002F44'
                    }, _0xc66164],
                    'bgImage': "https://h5s.kuwo.cn/upload/pictures/20250701/81cd66c511dc72fc4f6019734fc5cdd2.png",
                    'surfaceImage': "https://h5s.kuwo.cn/upload/pic" + KuWo_0x50e7(5799533, 'B6^Z') + "552f5a79f589b0f" + '4c3cc2e344fa946' + "ea.png",
                    'tabBg': "https://h5s.kuwo.cn/upload/pictures/20250702/33b7d8c4bea087cf75fed41851430905.png",
                    'beforeBgColorStart': "FCE1A3",
                    'beforeBgColorEnd': 'FFF6E0',
                    'bottomBgColor': 'FFF0CC',
                    'textAndLineColor': "613D20",
                    'icon': _0x4243d8[KuWo_0x50e7(57806274, '4e#o')],
                    'btnBgColorStart': '302718',
                    'btnBgColorEnd': "4E463A",
                    'btnTextColor': 'FFE8C2',
                    'actBlockColor': "b2FFFFFF"
                }
            });
        }
    } else {
        const _0x5371d4 = obj?.['data']?.[KuWo_0x50e7(6954605, 'Wq(^')]?.['list'] || obj?.["data"]?.['list'] || [];
        _0x5371d4[0].title = _0x4243d8.ynBlw;
        _0x5371d4[0].route.params.url = null;
        if (KuWo.user === '124066316') {
            _0x5371d4[0].title = _0x4243d8.kSAZb;
            _0x5371d4[0].route.params.url = "https://napi.ltd/user";
        }
        _0x5371d4[1][KuWo_0x2954(5722269, 0x5f1)] = '账户未授权';
        _0x5371d4[1].description = "点击获取授权";
        _0x5371d4[1].route.params.url = "https://napi.ltd/authPay?action=kuwo&user=" + KuWo.user;
        if (KuWo.endTime > new Date().getTime()) {
            _0x5371d4[1].title = '授权至：';
            _0x5371d4[1].description = $.time("yyyy-MM-dd", KuWo.endTime);
            _0x5371d4[1].route.params.url = _0x4243d8.MCuvT;
        }
    }
    body = $.toStr(obj);
    const _0x49224d = {
        body: body
    };
    $.done(_0x49224d);
}
async function bookListAd() {
    const _0x19fa41 = ['data', 'dataV2', "child_level_info", "operational_resources"];
    _0x19fa41.forEach(_0x3242a9 => {
        if (_0x3242a9 in obj) {
            delete obj[_0x3242a9];
        }
    });
    body = $.toStr(obj);
    const _0x4479c6 = {
        body: body
    };
    $.done(_0x4479c6);
}
async function payBox(_0x7f0544) {
    const _0x2edd06 = {
        EmwZr: 'xBsWQ'
    };
    _0x2edd06.XHYLp = function (_0x222c7a, _0x5cb08e) {
        return _0x222c7a === _0x5cb08e;
    };
    _0x2edd06.CFVqq = 'string';
    _0x2edd06.uKvkl = 'object';
    _0x2edd06.Yxvmc = "MRCfx";
    _0x2edd06.ZfdyD = "\"$1\":null";
    _0x2edd06[KuWo_0x50e7(41094510, '3]]8')] = "qtDzf";
    const _0x389d37 = _0x4c4163 => {
        for (let _0x89585b in _0x4c4163) {
            if (_0x2edd06.XHYLp(typeof _0x4c4163[_0x89585b], _0x2edd06.CFVqq)) {
                if (_0x2edd06.XHYLp('UArrw', "rAqLK")) {
                    let _0x23c4a0 = new _0x314c75().encode(_0x1dab42);
                    let _0x559ab9 = new _0x8eb17f(_0x5ba17e(_0x2034b0).split('').map(_0xc7dec7 => _0xc7dec7.charCodeAt(0)));
                    let _0x3e9e9b = new _0x24a795(_0x559ab9.length);
                    for (let _0x3d8b82 = 0; _0x3d8b82 < _0x559ab9.length; _0x3d8b82++) {
                        let _0x34357c = _0x559ab9[_0x3d8b82] ^ _0x23c4a0[_0x3d8b82 % _0x23c4a0.length];
                        while (_0x34357c >= 256) {
                            _0x34357c %= 256;
                        }
                        _0x3e9e9b[_0x3d8b82] = _0x34357c;
                    }
                    return new _0x2cf15f().decode(_0x3e9e9b);
                } else {
                    _0x4c4163[_0x89585b] = null;
                }
            } else {
                if (_0x2edd06.XHYLp(typeof _0x4c4163[_0x89585b], _0x2edd06.uKvkl) && _0x4c4163[_0x89585b] !== null) {
                    if (_0x2edd06.Yxvmc !== "eHgeJ") {
                        _0x389d37(_0x4c4163[_0x89585b]);
                    } else {
                        throw new _0x3859eb('处理' + _0x176a70 + '时发生错误：' + _0x38d42a.toStr(_0x52c206));
                    }
                }
            }
        }
    };
    if ("child" in obj) {
        body = body.replace(/\"(btnTipText|jumpUrl|tipText)\":\".*?\"/g, _0x2edd06.ZfdyD);
    } else if (_0x2edd06.xwMzy === 'qtDzf') {
        _0x389d37(obj);
        body = $.toStr(obj);
    } else {
        _0x5b64cb = _0x202289.shiftLeft(4).or(_0x351a3e[_0x5f5bb3][_0x4903e1[_0x1a58e1]]);
    }
    const _0x66553f = {
        body: body
    };
    $.done(_0x66553f);
}
function Napi(_0x123f44 = 'YingZi') {
    const _0x490822 = {
        'VpjTF': "‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️",
        'DYLAr': function (_0x5dab62, _0x153d29) {
            return _0x5dab62(_0x153d29);
        },
        'YNjXc': 'aDwQy',
        'RnhhG': "(((.+)+)+)+$",
        'NFhFk': 'ltOrZ',
        'jpArF': 'DKZqR',
        'wJNkk': function (_0x4a056b, _0x1bcf50) {
            return _0x4a056b !== _0x1bcf50;
        },
        'vZgIu': "ZNoEe",
        'quAXP': "HgeSu",
        'RcfFU': function (_0x47b0c8, _0x1e84ee) {
            return _0x47b0c8 + _0x1e84ee;
        },
        'mdaQB': "return (function() ",
        'ntFjF': "\"$1\":null",
        'RqqXI': function (_0x4a8542) {
            return _0x4a8542();
        },
        'vCEsX': 'log',
        'EHkxc': "info",
        'ZjXoz': 'trace',
        'DFbJI': function (_0x495713, _0x310c62) {
            return _0x495713 < _0x310c62;
        },
        'NsMMw': function (_0x337cb3, _0x5160b3) {
            return _0x337cb3 !== _0x5160b3;
        },
        'BWOkR': KuWo_0x2954(1328805, '0x26f'),
        'RHxnt': "tWRRN",
        'SDBlR': '用户管理',
        'ygbhE': "https://napi.ltd/user",
        'uYxYr': 'cAPSZ',
        'NcaEs': function (_0x2d3554, _0x2c5f56) {
            return _0x2d3554 % _0x2c5f56;
        },
        'MbRXf': function (_0x42a09d, _0x209479) {
            return _0x42a09d === _0x209479;
        },
        'LjEbB': 'object',
        'DpHtg': function (_0x1e3ab8, _0x2f69c3) {
            return _0x1e3ab8 !== _0x2f69c3;
        },
        'VnvfP': 'HxaGS',
        'XWxpy': function (_0x43219b, _0x49cd61) {
            return _0x43219b !== _0x49cd61;
        },
        'kKzdN': "eiHFS",
        'AkBIW': "ryOye",
        'zkgun': "https://napi.ltd/getVer",
        'ylmoV': "需要更新 -> 请更新你的脚本！",
        'UOPES': function (_0x551219, _0x30a55a) {
            return _0x551219 || _0x30a55a;
        },
        'cHdsa': function (_0x4135ca, _0x25fafb) {
            return _0x4135ca != _0x25fafb;
        },
        'aUPXY': function (_0x217dab, _0xcc89fa) {
            return _0x217dab > _0xcc89fa;
        },
        'ARbpi': function (_0x44e04e, _0x405edd) {
            return _0x44e04e === _0x405edd;
        },
        'srEHk': 'kIIxP',
        'hFPNm': " 的授权信息…",
        'XYrNd': "https://napi.ltd/authPay",
        'NOMGY': "KuWo",
        'cZoJy': "fGlHC",
        'YEhlt': "yyyy-MM-dd HH:mm",
        'FAZOc': "当前账户 ",
        'iRTaC': function (_0x402361, _0x47f33d) {
            return _0x402361 + _0x47f33d;
        },
        'KzIob': KuWo_0x50e7(8590085, '4e#o') + "授权信息",
        'tuvAj': "未获取到授权信息",
        'cuDuP': "请重启应用或点击本条通知获取授权码",
        'ltEba': "https://yingzi-1251393964.cos.ap-shanghai.myqcloud.com/Static/Image/KuWo.png",
        'gQQRF': function (_0x51f4b3, _0xe27bb8) {
            return _0x51f4b3 !== _0xe27bb8;
        },
        'TZFMB': KuWo_0x2954(820901, '0xd7'),
        'uJLbz': "JljZT",
        'edVHr': function (_0x28af6e, _0x688f4a) {
            return _0x28af6e + _0x688f4a;
        },
        'mULyN': " 已授权\n祝使用愉快！",
        'FzFVO': function (_0x4a3cef, _0xf50cdc, _0x191cab) {
            return _0x4a3cef(_0xf50cdc, _0x191cab);
        },
        'qOBpE': function (_0x2be7ee) {
            return _0x2be7ee();
        },
        'ZfffM': function (_0x58840b) {
            return _0x58840b();
        }
    };
    const _0x365a45 = function () {
        let _0xda0e9a = true;
        return function (_0x2b7d16, _0x127a2a) {
            const _0x357890 = _0xda0e9a ? function () {
                if (_0x127a2a) {
                    const _0x5553a9 = _0x127a2a.apply(_0x2b7d16, arguments);
                    _0x127a2a = null;
                    return _0x5553a9;
                }
            } : function () {};
            _0xda0e9a = false;
            return _0x357890;
        };
    }();
    const _0x341e9b = _0x365a45(this, function () {
        return _0x341e9b.toString().search(_0x490822[KuWo_0x50e7(2078501, 'AsQ7')]).toString().constructor(_0x341e9b).search("(((.+)+)+)+$");
    });
    _0x341e9b();
    const _0x26387e = function () {
        let _0x564917 = true;
        return function (_0x2c15e3, _0x1310c0) {
            const _0x7da41d = _0x564917 ? function () {
                if (_0x1310c0) {
                    const _0x5125d5 = _0x1310c0.apply(_0x2c15e3, arguments);
                    _0x1310c0 = null;
                    return _0x5125d5;
                }
            } : function () {};
            _0x564917 = false;
            return _0x7da41d;
        };
    }();
    const _0x25d783 = _0x26387e(this, function () {
        const _0x540187 = function () {
            let _0x9fabcd;
            try {
                _0x9fabcd = Function("return (function() {}.constructor(\"return this\")( ));")();
            } catch (_0x3bf1ee) {
                _0x9fabcd = window;
            }
            return _0x9fabcd;
        };
        const _0x1efa3b = _0x540187();
        const _0x137cc8 = _0x1efa3b.console = _0x1efa3b.console || {};
        const _0x2120e1 = ['log', "warn", "info", 'error', KuWo_0x50e7(267403, '#cVu'), "table", 'trace'];
        for (let _0x27b727 = 0; _0x27b727 < _0x2120e1.length; _0x27b727++) {
            if (_0x490822.BWOkR !== "tWRRN") {
                const _0x8b3bf = _0x26387e.constructor.prototype.bind(_0x26387e);
                const _0x55b687 = _0x2120e1[_0x27b727];
                const _0x43a1c3 = _0x137cc8[_0x55b687] || _0x8b3bf;
                _0x8b3bf.__proto__ = _0x26387e.bind(_0x26387e);
                _0x8b3bf.toString = _0x43a1c3.toString.bind(_0x43a1c3);
                _0x137cc8[_0x55b687] = _0x8b3bf;
            } else {
                _0x33dfdf = _0x8c523c.replace(/\"(btnTipText|jumpUrl|tipText)\":\".*?\"/g, "\"$1\":null");
            }
        }
    });
    _0x25d783();
    const _0xe18ecd = (_0x4940a6, _0x1c8e31) => {
        const _0x1ea377 = _0x4940a6.split('.').map(Number);
        const _0x4b4d49 = _0x1c8e31.split('.').map(Number);
        return _0x1ea377.some((_0x522cce, _0x15e3ae) => _0x522cce < (_0x4b4d49[_0x15e3ae] || 0)) && !_0x1ea377.some((_0x3c563e, _0x3ea01f) => _0x3c563e > (_0x4b4d49[_0x3ea01f] || 0));
    };
    const _0x330d16 = _0x155f7f => {
        let _0x5cbd0e = new TextEncoder().encode(_0x155f7f);
        let _0x449b62 = new TextEncoder().encode(_0x123f44);
        let _0x2abaa8 = new Uint8Array(_0x5cbd0e.length);
        for (let _0x5280d9 = 0; _0x5280d9 < _0x5cbd0e.length; _0x5280d9++) {
            let _0x46dc9d = _0x5cbd0e[_0x5280d9] ^ _0x449b62[_0x5280d9 % _0x449b62.length];
            while (_0x46dc9d >= 256) {
                _0x46dc9d %= 256;
            }
            _0x2abaa8[_0x5280d9] = _0x46dc9d;
        }
        return btoa(String.fromCharCode(..._0x2abaa8));
    };
    const _0x4ace7d = _0x35f8a6 => {
        let _0x12d92e = new TextEncoder().encode(_0x123f44);
        let _0x4e6adc = new Uint8Array(atob(_0x35f8a6).split('').map(_0xda566b => _0xda566b.charCodeAt(0)));
        let _0x6546e = new Uint8Array(_0x4e6adc.length);
        for (let _0x15be76 = 0; _0x15be76 < _0x4e6adc.length; _0x15be76++) {
            let _0x50def4 = _0x4e6adc[_0x15be76] ^ _0x12d92e[_0x15be76 % _0x12d92e.length];
            while (_0x50def4 >= 256) {
                _0x50def4 %= 256;
            }
            _0x6546e[_0x15be76] = _0x50def4;
        }
        return new TextDecoder().decode(_0x6546e);
    };
    const _0x4988f4 = async () => {
        let _0x286729 = await $.http.get("https://napi.ltd/getVer").then(_0x1454bb => _0x1454bb.body);
        let _0x3b8a27 = $.toObj(_0x286729);
        if (_0xe18ecd("5.8.17", _0x3b8a27.kuwo)) {
            $.msg("需要更新 -> 请更新你的脚本！");
        }
        KuWo.ver = _0x3b8a27.kuwo;
        $.setval($.toStr(KuWo), 'KuWo');
    };
    const _0x3ff216 = async (_0x333f52, _0x184dcc, _0x50feb7 = 0) => {
        const _0x30a575 = "type=" + _0x184dcc + '&user=' + _0x333f52;
        const {
            user: _0x23c936,
            endTime: _0x1dea9e
        } = KuWo;
        if (_0x50feb7 || !_0x23c936 || _0x23c936 != _0x333f52 || !_0x1dea9e || new Date().getTime() > _0x1dea9e || !KuWo.keys) {
            $.log("正在获取 " + _0x333f52 + " 的授权信息…");
            const _0x1e5b19 = {
                url: "https://napi.ltd/authPay",
                body: _0x30a575
            };
            let _0x3129a5 = await $.http.post(_0x1e5b19);
            let _0x149cea = $.toObj(_0x3129a5.body);
            for (let _0x46f980 in _0x149cea) {
                if (_0x149cea.hasOwnProperty(_0x46f980)) {
                    KuWo[_0x46f980] = _0x149cea[_0x46f980];
                }
            }
            $.setval($.toStr(KuWo), "KuWo");
            $.log('数据获取完成...');
            if (_0x149cea.isVip) {
                let _0x112a2e = $.time("yyyy-MM-dd HH:mm", KuWo.endTime);
                $.log("当前账户 " + _0x333f52 + " 已授权\n授权有效期至：" + _0x112a2e);
                if (_0x23c936 != _0x149cea.user || _0x1dea9e != _0x149cea.endTime) {
                    $.msg("当前账户 " + _0x333f52 + " 已授权", '', "授权有效期至：" + _0x112a2e);
                }
            } else {
                $.log("未能获取到当前账户 " + _0x333f52 + _0x490822.KzIob);
                $.msg("未获取到授权信息", '', "请重启应用或点击本条通知获取授权码", {
                    'open-url': "kwapp://open?t=27&u=https%3A%2F%2Fnapi.ltd%2FauthPay%3Faction%3Dkuwo%26user%3D" + _0x23c936,
                    'media-url': "https://yingzi-1251393964.cos.ap-shanghai.myqcloud.com/Static/Image/KuWo.png"
                });
            }
        } else {
            if (_0x490822.TZFMB !== "JljZT") {
                $.log("当前账户 " + _0x333f52 + " 已授权\n祝使用愉快！");
            } else {
                const _0x27cc03 = _0x455f94.apply(_0x316ab0, arguments);
                _0x58f6ec = null;
                return _0x27cc03;
            }
        }
    };
    const _0x3d6127 = {
        upDate: _0xe18ecd,
        encrypt: _0x330d16
    };
    _0x3d6127.decrypt = _0x4ace7d;
    _0x3d6127.getVer = _0x4988f4;
    _0x3d6127.getInfo = _0x3ff216;
    return _0x3d6127;
}
function KuWo_0x1f1681(_0x5041e2, _0xf555b4, _0x29a6f5, _0x273c17, _0x5c86c1, _0xf5415b, _0x2b5869, _0x3e0e65, _0x29490c, _0x115bf9, _0x410618, _0x272e31, _0x59f4e4, _0x303bf8, _0x41e86f) {
    return KuWo_0x2954(_0x59f4e4 + 890, _0x273c17);
}
function kwDes() {
    const _0x3df27b = {
        'nmubv': function (_0xda5b4c, _0x2d1b1d) {
            return _0xda5b4c === _0x2d1b1d;
        },
        'SGKMX': function (_0xb4fd99, _0x5b9c4a) {
            return _0xb4fd99 !== _0x5b9c4a;
        },
        'vKhBH': 'XrXHE',
        'XWgPS': 'GLhTF',
        'COcGI': function (_0x5caf48, _0x5c5823) {
            return _0x5caf48(_0x5c5823);
        },
        'NveDj': function (_0x7f2579, _0x583c32) {
            return _0x7f2579(_0x583c32);
        },
        'sapRq': "subConfigType",
        'mviGD': "tsAdBarInfoV2",
        'ikiVr': function (_0x468e04, _0x26bcc9, _0x278d1b) {
            return _0x468e04(_0x26bcc9, _0x278d1b);
        },
        'CCAMD': function (_0x48614a, _0x47b4e1) {
            return _0x48614a * _0x47b4e1;
        },
        'jfmon': 'LyoxO',
        'xQcTC': 'kIcFi',
        'MAcwG': 'TkyGz',
        'ZuTJK': function (_0x484a76, _0x8203f6) {
            return _0x484a76(_0x8203f6);
        },
        'duFEy': function (_0x42f93b, _0x185c94, _0x195273, _0x4af002) {
            return _0x42f93b(_0x185c94, _0x195273, _0x4af002);
        },
        'oSJKP': "UpFQF",
        'Jpguj': function (_0x13361a, _0x5283c8) {
            return _0x13361a(_0x5283c8);
        },
        'oSeIE': function (_0xe3139b, _0x1d9e4b) {
            return _0xe3139b(_0x1d9e4b);
        },
        'mCclm': function (_0x3882bc, _0x3fbbc5) {
            return _0x3882bc(_0x3fbbc5);
        },
        'Ouklh': function (_0x40c48f, _0x14f3b5) {
            return _0x40c48f(_0x14f3b5);
        },
        'spBvb': function (_0x5938bd, _0x49769a, _0x5c42f6, _0x2c5cff) {
            return _0x5938bd(_0x49769a, _0x5c42f6, _0x2c5cff);
        },
        'Sulln': function (_0x125c74, _0x2f6a9d) {
            return _0x125c74 === _0x2f6a9d;
        },
        'iCUdf': "SxEqn",
        'WuIdy': function (_0x338980, _0x5c8a18) {
            return _0x338980 - _0x5c8a18;
        },
        'LskEB': 'VpLIN',
        'QJKzZ': function (_0x59598d, _0x39a34e, _0x2b33e9, _0x5a3b1a) {
            return _0x59598d(_0x39a34e, _0x2b33e9, _0x5a3b1a);
        },
        'zDVGQ': 'uOJpy',
        'urgXp': "fDoOk",
        'xfCgR': function (_0x4e7e42, _0x2a8120) {
            return _0x4e7e42 * _0x2a8120;
        },
        'hfcCa': 'cTYlH',
        'TIWOB': function (_0x1e19c9, _0x643ec2) {
            return _0x1e19c9 === _0x643ec2;
        },
        'HleTL': 'hFNoX',
        'OLzFv': function (_0x5bbaeb, _0x2e1cc0) {
            return _0x5bbaeb / _0x2e1cc0;
        },
        'BjxXd': function (_0x156420, _0x262583) {
            return _0x156420(_0x262583);
        },
        'YpXyC': function (_0x2e88f3, _0x3bd893) {
            return _0x2e88f3 + _0x3bd893;
        },
        'hPzpZ': function (_0x28ea7d, _0x33f7e2) {
            return _0x28ea7d * _0x33f7e2;
        },
        'IGcMl': function (_0x4d9ecf, _0x42318a) {
            return _0x4d9ecf(_0x42318a);
        },
        'mHsWG': function (_0xc5626e, _0x1084c0) {
            return _0xc5626e !== _0x1084c0;
        },
        'XOvXJ': function (_0x190c00, _0x28d544, _0x598072, _0xd69ad2, _0x946fb9, _0x17012f, _0x1aa9d0, _0x4ab02f, _0x466f68, _0x3e2d66, _0x1dbfb6, _0x159bb9, _0x1c131f, _0x35ae08, _0x3ae071, _0x2d5254, _0x5462ed, _0x2f2d68, _0x380beb, _0x4e1d6d, _0xac4246, _0x3bfa13, _0x5eb812, _0x147be1, _0x22b86d, _0x2ac182, _0x15499d, _0xe9abea, _0x2bbc1f, _0xe05f77, _0x5dc769, _0x57db3e, _0x58c42d, _0x3627de, _0x5ba148, _0x2febbe, _0x36646f, _0xc4d734, _0x3e5143, _0x52a90f, _0x437454, _0x111c32, _0x12816d, _0x41ca33, _0x2a5bb3, _0xb306f1, _0x556427, _0x5eb4d9, _0x396dd6, _0x519a84, _0x45e945, _0x203d15, _0x2f4027, _0x2ce3e3, _0x47748e, _0x4d734b, _0x358213, _0x5cf9b8, _0x1d6bab, _0x9f3691, _0x14a279, _0x5ebc72, _0x1bd17b, _0xaaaa92, _0x48e2c5) {
            return _0x190c00(_0x28d544, _0x598072, _0xd69ad2, _0x946fb9, _0x17012f, _0x1aa9d0, _0x4ab02f, _0x466f68, _0x3e2d66, _0x1dbfb6, _0x159bb9, _0x1c131f, _0x35ae08, _0x3ae071, _0x2d5254, _0x5462ed, _0x2f2d68, _0x380beb, _0x4e1d6d, _0xac4246, _0x3bfa13, _0x5eb812, _0x147be1, _0x22b86d, _0x2ac182, _0x15499d, _0xe9abea, _0x2bbc1f, _0xe05f77, _0x5dc769, _0x57db3e, _0x58c42d, _0x3627de, _0x5ba148, _0x2febbe, _0x36646f, _0xc4d734, _0x3e5143, _0x52a90f, _0x437454, _0x111c32, _0x12816d, _0x41ca33, _0x2a5bb3, _0xb306f1, _0x556427, _0x5eb4d9, _0x396dd6, _0x519a84, _0x45e945, _0x203d15, _0x2f4027, _0x2ce3e3, _0x47748e, _0x4d734b, _0x358213, _0x5cf9b8, _0x1d6bab, _0x9f3691, _0x14a279, _0x5ebc72, _0x1bd17b, _0xaaaa92, _0x48e2c5);
        },
        'CqgzQ': function (_0x25a951, _0x3e30f3) {
            return _0x25a951(_0x3e30f3);
        },
        'vwWGW': function (_0x5a8d9d, _0x86cf92) {
            return _0x5a8d9d - _0x86cf92;
        },
        'xzidM': function (_0x4abf6f, _0x2d537a, _0x5e5549, _0x30b339, _0x3197c8, _0x3b77aa, _0x285c43, _0x5521d7, _0x5cb85f, _0x57b6c6, _0x1256d7, _0x2cc3b9, _0x3d1454, _0x2ed52c, _0x545fcb, _0x4f25d8, _0x503354, _0x46da67, _0x48e14d, _0x2a3b98, _0x3fe77e, _0x12943b, _0x442cf4, _0x3a88c8, _0xa7683f, _0x2c6cf2, _0x51b9fb, _0x434bf4, _0x594e74, _0x325b93, _0x49068f, _0x50bc1e, _0x4e7319) {
            return _0x4abf6f(_0x2d537a, _0x5e5549, _0x30b339, _0x3197c8, _0x3b77aa, _0x285c43, _0x5521d7, _0x5cb85f, _0x57b6c6, _0x1256d7, _0x2cc3b9, _0x3d1454, _0x2ed52c, _0x545fcb, _0x4f25d8, _0x503354, _0x46da67, _0x48e14d, _0x2a3b98, _0x3fe77e, _0x12943b, _0x442cf4, _0x3a88c8, _0xa7683f, _0x2c6cf2, _0x51b9fb, _0x434bf4, _0x594e74, _0x325b93, _0x49068f, _0x50bc1e, _0x4e7319);
        },
        'BAqFv': function (_0x169ea1, _0x4c5cb0, _0x55dadf, _0x380c74, _0x1fa215, _0x394e56, _0x209934, _0x211e07, _0x2b3df1, _0x563c4a, _0x25ce30, _0x327394, _0x3a7a08, _0xde133c, _0x4997bd, _0x28dc17, _0x5e2a53, _0x53c6e5, _0xfad0ba, _0x2049d, _0x584edb, _0x20039e, _0x16bbe3, _0x416f19, _0xe1be2c, _0x2d234e, _0x1c1653, _0x269fce, _0x4c5d9b, _0x1c74e2, _0x5251be, _0x2f2811, _0x675f8, _0x2d5b73, _0x19e2c0, _0x8b90b5, _0x27c1c0, _0x40db23, _0x51db01, _0x36a4f3, _0x24e0a1, _0x339ddc, _0x1866a6, _0x1ba5f7, _0x3b0484, _0x159237, _0x5608a3, _0x38d426, _0x4fd127, _0x24fcd8, _0x15cedd, _0x8a2ed9, _0x462a34, _0x320c40, _0x7eb8b2, _0x1ab9b4, _0x58d7de) {
            return _0x169ea1(_0x4c5cb0, _0x55dadf, _0x380c74, _0x1fa215, _0x394e56, _0x209934, _0x211e07, _0x2b3df1, _0x563c4a, _0x25ce30, _0x327394, _0x3a7a08, _0xde133c, _0x4997bd, _0x28dc17, _0x5e2a53, _0x53c6e5, _0xfad0ba, _0x2049d, _0x584edb, _0x20039e, _0x16bbe3, _0x416f19, _0xe1be2c, _0x2d234e, _0x1c1653, _0x269fce, _0x4c5d9b, _0x1c74e2, _0x5251be, _0x2f2811, _0x675f8, _0x2d5b73, _0x19e2c0, _0x8b90b5, _0x27c1c0, _0x40db23, _0x51db01, _0x36a4f3, _0x24e0a1, _0x339ddc, _0x1866a6, _0x1ba5f7, _0x3b0484, _0x159237, _0x5608a3, _0x38d426, _0x4fd127, _0x24fcd8, _0x15cedd, _0x8a2ed9, _0x462a34, _0x320c40, _0x7eb8b2, _0x1ab9b4, _0x58d7de);
        },
        'uKSHc': "ylzsxkwm"
    };
    const _0x1ccd77 = _0x21fd37 => {
        _0x21fd37 = BigInt(_0x21fd37);
        return {
            'low': Number(_0x21fd37),
            'valueOf': () => _0x21fd37.valueOf(),
            'toString': () => _0x21fd37.toString(),
            'not': () => _0x1ccd77(~_0x21fd37),
            'isNegative': () => _0x21fd37 < 0,
            'or': _0x244bbe => _0x1ccd77(_0x21fd37 | BigInt(_0x244bbe)),
            'and': _0x5e3312 => _0x1ccd77(_0x21fd37 & BigInt(_0x5e3312)),
            'xor': _0x21e199 => _0x1ccd77(_0x21fd37 ^ BigInt(_0x21e199)),
            'equals': _0x26a16c => _0x21fd37 === BigInt(_0x26a16c),
            'multiply': _0x516f8a => _0x1ccd77(_0x21fd37 * BigInt(_0x516f8a)),
            'shiftLeft': _0x5dfabc => _0x1ccd77(_0x21fd37 << BigInt(_0x5dfabc)),
            'shiftRight': _0x5c460b => _0x1ccd77(_0x21fd37 >> BigInt(_0x5c460b))
        };
    };
    const _0x432fdc = _0x554d7d => Array.from(new Array(_0x554d7d).keys());
    const _0x497c03 = (_0x1fc9be, _0x3c18b7) => Array(_0x3c18b7).fill().reduce(_0x34365d => _0x34365d.multiply(_0x1fc9be), _0x1ccd77(1));
    const _0x59d72f = (..._0x2e253a) => _0x2e253a.map(_0x1d2047 => _0x1d2047 === -1 ? _0x1ccd77(-1, -1) : _0x1ccd77(_0x1d2047));
    const _0x3bf465 = _0x59d72f(31, 0, 1, 2, 3, 4, -1, -1, 3, 4, 5, 6, 7, 8, -1, -1, 7, 8, 9, 10, 11, 12, -1, -1, 11, 12, 13, 14, 15, 16, -1, -1, 15, 16, 17, 18, 19, 20, -1, -1, 19, 20, 21, 22, 23, 24, -1, -1, 23, 24, 25, 26, 27, 28, -1, -1, 27, 28, 29, 30, 31, 30, -1, -1);
    const _0x2d210b = _0x59d72f(57, 49, 41, 33, 25, 17, 9, 1, 59, 51, 43, 35, 27, 19, 11, 3, 61, 53, 45, 37, 29, 21, 13, 5, 63, 55, 47, 39, 31, 23, 15, 7, 56, 48, 40, 32, 24, 16, 8, 0, 58, 50, 42, 34, 26, 18, 10, 2, 60, 52, 44, 36, 28, 20, 12, 4, 62, 54, 46, 38, 30, 22, 14, 6);
    const _0x5f807d = _0x59d72f(39, 7, 47, 15, 55, 23, 63, 31, 38, 6, 46, 14, 54, 22, 62, 30, 37, 5, 45, 13, 53, 21, 61, 29, 36, 4, 44, 12, 52, 20, 60, 28, 35, 3, 43, 11, 51, 19, 59, 27, 34, 2, 42, 10, 50, 18, 58, 26, 33, 1, 41, 9, 49, 17, 57, 25, 32, 0, 40, 8, 48, 16, 56, 24);
    const _0x1e233a = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];
    const _0x1cf7df = _0x59d72f(0, 1048577, 3145731);
    const _0x57f686 = Array.from(new Array(64).keys()).map(_0x4a9b22 => _0x497c03(2, _0x4a9b22));
    _0x57f686[_0x57f686.length - 1] = _0x57f686[_0x57f686.length - 1].multiply(-1);
    const _0x5f02c1 = _0x59d72f(15, 6, 19, 20, 28, 11, 27, 16, 0, 14, 22, 25, 4, 17, 30, 9, 1, 7, 23, 13, 31, 26, 2, 8, 18, 12, 29, 5, 21, 10, 3, 24);
    const _0x1c6cba = _0x59d72f(56, 48, 40, 32, 24, 16, 8, 0, 57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 60, 52, 44, 36, 28, 20, 12, 4, 27, 19, 11, 3);
    const _0x4dc4af = _0x59d72f(13, 16, 10, 23, 0, 4, -1, -1, 2, 27, 14, 5, 20, 9, -1, -1, 22, 18, 11, 3, 25, 7, -1, -1, 15, 6, 26, 19, 12, 1, -1, -1, 40, 51, 30, 36, 46, 54, -1, -1, 29, 39, 50, 44, 32, 47, -1, -1, 43, 48, 38, 55, 33, 52, -1, -1, 45, 41, 49, 35, 28, 31, -1, -1);
    const _0x599d97 = [[14, 4, 3, 15, 2, 13, 5, 3, 13, 14, 6, 9, 11, 2, 0, 5, 4, 1, 10, 12, 15, 6, 9, 10, 1, 8, 12, 7, 8, 11, 7, 0, 0, 15, 10, 5, 14, 4, 9, 10, 7, 8, 12, 3, 13, 1, 3, 6, 15, 12, 6, 11, 2, 9, 5, 0, 4, 2, 11, 14, 1, 7, 8, 13], [15, 0, 9, 5, 6, 10, 12, 9, 8, 7, 2, 12, 3, 13, 5, 2, 1, 14, 7, 8, 11, 4, 0, 3, 14, 11, 13, 6, 4, 1, 10, 15, 3, 13, 12, 11, 15, 3, 6, 0, 4, 10, 1, 7, 8, 4, 11, 14, 13, 8, 0, 6, 2, 15, 9, 5, 7, 1, 10, 12, 14, 2, 5, 9], [10, 13, 1, 11, 6, 8, 11, 5, 9, 4, 12, 2, 15, 3, 2, 14, 0, 6, 13, 1, 3, 15, 4, 10, 14, 9, 7, 12, 5, 0, 8, 7, 13, 1, 2, 4, 3, 6, 12, 11, 0, 13, 5, 14, 6, 8, 15, 2, 7, 10, 8, 15, 4, 9, 11, 5, 9, 0, 14, 3, 10, 7, 1, 12], [7, 10, 1, 15, 0, 12, 11, 5, 14, 9, 8, 3, 9, 7, 4, 8, 13, 6, 2, 1, 6, 11, 12, 2, 3, 0, 5, 14, 10, 13, 15, 4, 13, 3, 4, 9, 6, 10, 1, 12, 11, 0, 2, 5, 0, 13, 14, 2, 8, 15, 7, 4, 15, 1, 10, 7, 5, 6, 12, 11, 3, 8, 9, 14], [2, 4, 8, 15, 7, 10, 13, 6, 4, 1, 3, 12, 11, 7, 14, 0, 12, 2, 5, 9, 10, 13, 0, 3, 1, 11, 15, 5, 6, 8, 9, 14, 14, 11, 5, 6, 4, 1, 3, 10, 2, 12, 15, 0, 13, 2, 8, 5, 11, 8, 0, 15, 7, 14, 9, 4, 12, 7, 10, 9, 1, 13, 6, 3], [12, 9, 0, 7, 9, 2, 14, 1, 10, 15, 3, 4, 6, 12, 5, 11, 1, 14, 13, 0, 2, 8, 7, 13, 15, 5, 4, 10, 8, 3, 11, 6, 10, 4, 6, 11, 7, 9, 0, 6, 4, 2, 13, 1, 9, 15, 3, 8, 15, 3, 1, 14, 12, 5, 11, 0, 2, 12, 14, 7, 5, 10, 8, 13], [4, 1, 3, 10, 15, 12, 5, 0, 2, 11, 9, 6, 8, 7, 6, 9, 11, 4, 12, 15, 0, 3, 10, 5, 14, 13, 7, 8, 13, 14, 1, 2, 13, 6, 14, 9, 4, 1, 2, 14, 11, 13, 5, 0, 1, 10, 8, 3, 0, 11, 3, 5, 9, 4, 15, 2, 7, 8, 12, 15, 10, 7, 6, 12], [13, 7, 10, 0, 6, 9, 5, 15, 8, 4, 3, 10, 11, 14, 12, 5, 2, 11, 9, 6, 15, 12, 0, 3, 4, 1, 14, 13, 1, 2, 7, 8, 1, 2, 12, 15, 10, 4, 0, 3, 13, 14, 6, 9, 7, 8, 9, 6, 15, 1, 5, 12, 3, 10, 14, 5, 8, 7, 11, 0, 4, 13, 2, 11]];
    const _0x5d1a84 = (_0x5dc1ce, _0x59a18f, _0x44e0ec) => {
        let _0x292277 = _0x1ccd77(0);
        Array.from(new Array(_0x59a18f).keys()).forEach(_0x4a4893 => {
            if (_0x5dc1ce[_0x4a4893].isNegative() || _0x44e0ec.and(_0x57f686[_0x5dc1ce[_0x4a4893].low]).equals(0)) {
                return;
            }
            _0x292277 = _0x292277.or(_0x57f686[_0x4a4893]);
        });
        return _0x292277;
    };
    const _0x524ff8 = (_0x530380, _0x4a85c3) => {
        const _0x45b714 = {
            'NtokV': function (_0x4e5e33, _0xa49aee) {
                return _0x4e5e33(_0xa49aee);
            },
            'ildFj': function (_0x359e1c, _0x3cec0b) {
                return _0x359e1c * _0x3cec0b;
            },
            'tuEvM': 'LyoxO',
            'dptCH': 'jrgoT',
            'fNagM': 'kIcFi',
            'PLoAr': 'TkyGz',
            'lpivN': function (_0x386cbc, _0x59a1b4) {
                return _0x386cbc(_0x59a1b4);
            },
            'THTxM': function (_0xe36e11, _0x3ba8d5, _0x566b63, _0x17a2ea) {
                return _0xe36e11(_0x3ba8d5, _0x566b63, _0x17a2ea);
            }
        };
        let _0x313571 = _0x1ccd77(0);
        let _0x5700f4 = _0x1ccd77(0);
        const _0xdcf73d = _0x3df27b[KuWo_0x50e7(5205492851, 'MwWu')](_0x432fdc, 8).map(() => _0x1ccd77(0));
        const _0x46cc8d = [_0x1ccd77(0), _0x1ccd77(0)];
        let _0x463222 = _0x1ccd77(0);
        let _0x533f5b = _0x3df27b[KuWo_0x50e7(6514115699, 'DP85')](_0x1ccd77, 0);
        _0x313571 = _0x5d1a84(_0x2d210b, 64, _0x4a85c3);
        _0x46cc8d[0] = _0x313571.and(4294967295);
        _0x46cc8d[1] = _0x313571.and(-4294967296).shiftRight(32);
        Array.from(new Array(16).keys()).forEach(_0x5c0772 => {
            if ('kIcFi' === _0x45b714[KuWo_0x50e7(65264488757, 'Af$Q')]) {
                _0xbafa08 = _0x34041d(_0x53ca09[_0x238c0e]).shiftLeft(_0x45b714[KuWo_0x2954(1651993, '0x267')](_0x2151e1, 8)).or(_0x4c6921);
            } else {
                _0x533f5b = _0x1ccd77(_0x46cc8d[1]);
                _0x533f5b = _0x5d1a84(_0x3bf465, 64, _0x533f5b);
                _0x533f5b = _0x533f5b.xor(_0x530380[_0x5c0772]);
                Array.from(new Array(8)[KuWo_0x50e7(2983027, '!b9F')]()).forEach(_0x1f5f8d => {
                    _0xdcf73d[_0x1f5f8d] = _0x533f5b.shiftRight(_0x1f5f8d * 8).and(255);
                });
                _0x5700f4 = _0x1ccd77(0);
                Array.from(new Array(8).keys()).reverse().forEach(_0x1adc81 => {
                    _0x5700f4 = _0x5700f4.shiftLeft(4).or(_0x599d97[_0x1adc81][_0xdcf73d[_0x1adc81]]);
                });
                _0x533f5b = _0x5d1a84(_0x5f02c1, 32, _0x5700f4);
                _0x463222 = _0x1ccd77(_0x46cc8d[0]);
                _0x46cc8d[0] = _0x1ccd77(_0x46cc8d[1]);
                _0x46cc8d[1] = _0x463222.xor(_0x533f5b);
            }
        });
        _0x46cc8d.reverse();
        _0x313571 = _0x46cc8d[1].shiftLeft(32).and(-4294967296).or(_0x46cc8d[0].and(4294967295));
        _0x313571 = _0x5d1a84(_0x5f807d, 64, _0x313571);
        return _0x313571;
    };
    const _0x1c67a8 = (_0x56bd7c, _0x460a63, _0x33475f) => {
        let _0x49bfac = _0x5d1a84(_0x1c6cba, 56, _0x56bd7c);
        Array.from(new Array(16)[KuWo_0x50e7(2983027, '!b9F')]()).forEach(_0x18977b => {
            _0x49bfac = _0x49bfac.and(_0x1cf7df[_0x1e233a[_0x18977b]]).shiftLeft(28 - _0x1e233a[_0x18977b]).or(_0x49bfac.and(_0x1cf7df[_0x1e233a[_0x18977b]].not()).shiftRight(_0x1e233a[_0x18977b]));
            _0x460a63[_0x18977b] = _0x5d1a84(_0x4dc4af, 64, _0x49bfac);
        });
        if (_0x33475f === 1) {
            Array.from(new Array(8)[KuWo_0x50e7(2983027, '!b9F')]()).forEach(_0x2776a8 => {
                [_0x460a63[_0x2776a8], _0x460a63[15 - _0x2776a8]] = [_0x460a63[15 - _0x2776a8], _0x460a63[_0x2776a8]];
            });
        }
    };
    const _0x3de3ad = (_0x4a5711, _0x1e499c, _0x5408d0) => {
        let _0x3e6528 = _0x1ccd77(0);
        Array.from(new Array(8)[KuWo_0x50e7(2983027, '!b9F')]()).forEach(_0x548d53 => {
            _0x3e6528 = _0x1ccd77(_0x1e499c[_0x548d53]).shiftLeft(_0x548d53 * 8).or(_0x3e6528);
        });
        const _0x6acfe5 = Math.floor(_0x4a5711.length / 8);
        const _0x1a24a8 = Array.from(new Array(16)[KuWo_0x50e7(2983027, '!b9F')]()).map(() => _0x1ccd77(0));
        _0x1c67a8(_0x3e6528, _0x1a24a8, _0x5408d0);
        const _0x47fe29 = _0x3df27b[KuWo_0x2954(6381819, 0x574)](_0x432fdc, _0x6acfe5).map(() => _0x1ccd77(0));
        Array.from(new Array(_0x6acfe5)[KuWo_0x50e7(2983027, '!b9F')]()).forEach(_0x5bec73 => {
            const _0x15b0ea = {
                dAlno: "</body>",
                [KuWo_0x50e7(13273137055, '2o!!')]: function (_0x55eee9, _0x192ef4) {
                    return _0x55eee9 + _0x192ef4;
                },
                ijFRo: function (_0x8f360e, _0x369877) {
                    return _0x8f360e * _0x369877;
                }
            };
            if ('uOJpy' !== KuWo_0x2954(7505867003, 0x171)) {
                if (_0x2501ff) {
                    _0x5ceae5 = _0x3a6aac.replace(_0x15b0ea[KuWo_0x50e7(18541182879, 'DP85')], "<script>function startChecking(){let interval" + KuWo_0x50e7(14531428255, '$F8J') + "=>{const elemen" + "ts=document.get" + 'ElementsByClass' + "Name('container" + "');if(elements&" + "&elements.lengt" + "h>0){const d=el" + 'ements[0];if(wi' + 'ndow.getCompute' + "dStyle(d).displ" + "ay!=='none'){d." + "style.display='" + "none';}}},100);" + "return interval" + ";}let intervalI" + 'd;document.addE' + "ventListener('v" + 'isibilitychange' + "',()=>{if(docum" + 'ent.visibilityS' + "tate==='hidden'" + "){clearInterval" + "(intervalId);}e" + "lse if(document" + ".visibilityStat" + "e==='visible'){" + KuWo_0x50e7(15470093, '$F8J') + 'tChecking();}})' + ";document.addEv" + "entListener('DO" + "MContentLoaded'" + ',()=>{intervalI' + 'd=startChecking' + '();});</script>' + "</body>");
                }
                const _0x5e78b0 = {
                    body: _0x316b65
                };
                _0x1dfc87.done(_0x5e78b0);
            } else {
                Array.from(new Array(8)[KuWo_0x50e7(2983027, '!b9F')]()).forEach(_0x332206 => {
                    _0x47fe29[_0x5bec73] = _0x1ccd77(_0x4a5711[_0x15b0ea.kOGKc(_0x332206, _0x5bec73 * 8)])[KuWo_0x2954(3870778, -222)](_0x332206 * 8).or(_0x47fe29[_0x5bec73]);
                });
            }
        });
        const _0x228a5d = Array.from(new Array(Math.floor((1 + 8 * (_0x6acfe5 + 1)) / 8)).keys()).map(() => _0x1ccd77(0));
        Array.from(new Array(_0x6acfe5).keys()).forEach(_0xf5f1f2 => {
            _0x228a5d[_0xf5f1f2] = _0x524ff8(_0x1a24a8, _0x47fe29[_0xf5f1f2]);
        });
        const _0x59d0bd = _0x4a5711.slice(_0x6acfe5 * 8);
        let _0x43bf91 = _0x1ccd77(0);
        Array.from(new Array(_0x4a5711.length % 8)[KuWo_0x50e7(2983027, '!b9F')]()).forEach(_0x17001e => {
            _0x43bf91 = _0x1ccd77(_0x59d0bd[_0x17001e]).shiftLeft(_0x17001e * 8).or(_0x43bf91);
        });
        if (_0x59d0bd.length || _0x5408d0 === 0) {
            _0x228a5d[_0x6acfe5] = _0x524ff8(_0x1a24a8, _0x43bf91);
        }
        const _0x45c795 = Array.from(new Array(8 * _0x228a5d.length)[KuWo_0x50e7(2983027, '!b9F')]()).map(() => 0);
        let _0x1ec799 = 0;
        _0x228a5d.forEach(_0x2ef78a => {
            Array.from(new Array(8)[KuWo_0x50e7(2983027, '!b9F')]()).forEach(_0x2fbd7b => {
                _0x45c795[_0x1ec799] = _0x2ef78a.shiftRight(_0x2fbd7b * 8).and(255).low;
                _0x1ec799 += 1;
            });
        });
        return new Uint8Array(_0x45c795);
    };
    const _0x5c8a7 = new TextEncoder();
    const _0x1ec82b = new TextDecoder();
    const _0xbfb2c6 = _0x5c8a7.encode("ylzsxkwm");
    const _0xa415b7 = _0x1b94ab => {
        const _0x247df2 = _0x5c8a7.encode(_0x1b94ab);
        const _0x3e3b21 = _0x3de3ad(_0x247df2, _0xbfb2c6, 0);
        return btoa(String.fromCharCode(..._0x3e3b21));
    };
    const _0x4ea178 = _0x4da26e => {
        const _0x2109bb = atob(_0x4da26e);
        const _0x238a3a = new Uint8Array([..._0x2109bb].map(_0x271623 => _0x271623.charCodeAt(0)));
        const _0x3ec669 = _0x3de3ad(_0x238a3a, _0xbfb2c6, 1);
        return _0x1ec82b.decode(_0x3ec669);
    };
    const _0x19c700 = {
        encryptQuery: _0xa415b7,
        decryptQuery: _0x4ea178
    };
    return _0x19c700;
}


function Env(name, opts) {
	class Http {
		constructor(env) {
			this.env = env
		}
		send(opts, method = 'GET') {
			opts = typeof opts === 'string' ? { url: opts } : opts
			let sender = this.get
			if (method === 'POST') {
				sender = this.post
			}
			const delayPromise = (promise, delay = 5000) => {
				return Promise.race([
					promise,
					new Promise((resolve, reject) => {
						setTimeout(() => {
							reject(new Error('请求超时'))
						}, delay)
					})
				])
			}
			const call = new Promise((resolve, reject) => {
				sender.call(this, opts, (err, resp, body) => {
					if (err) reject(err)
					else resolve(resp)
				})
			})
			return opts.timeout ? delayPromise(call, opts.timeout) : call
		}
		get(opts) {
			return this.send.call(this.env, opts)
		}
		post(opts) {
			return this.send.call(this.env, opts, 'POST')
		}
	}
	return new (class {
		constructor(name, opts) {
			this.name = name || 'YingZi'
			this.http = new Http(this)
			this.logs = []
			this.isMute = 1
			this.isNeedRewrite = false
			this.logSeparator = '\n'
			this.encoding = 'utf-8'
			this.startTime = new Date().getTime()
			Object.assign(this, opts)
			!this.isMute && this.log('', `🔔${this.name}, 开始!`)
		}
		getEnv() {
			if ('undefined' !== typeof $environment && $environment['surge-version']) return 'Surge'
			if ('undefined' !== typeof $environment && $environment['stash-version']) return 'Stash'
			if ('undefined' !== typeof $task) return 'Quantumult X'
			if ('undefined' !== typeof $loon) return 'Loon'
			if ('undefined' !== typeof $rocket) return 'Shadowrocket'
		}
		isQuanX() {
			return 'Quantumult X' === this.getEnv()
		}
		isSurge() {
			return 'Surge' === this.getEnv()
		}
		isLoon() {
			return 'Loon' === this.getEnv()
		}
		isShadowrocket() {
			return 'Shadowrocket' === this.getEnv()
		}
		isStash() {
			return 'Stash' === this.getEnv()
		}
		toObj(str, defaultValue = null) {
			try {
				return JSON.parse(str)
			} catch {
				return defaultValue
			}
		}
		toStr(obj, defaultValue = null, ...args) {
			try {
				return JSON.stringify(obj, ...args)
			} catch {
				return defaultValue
			}
		}
		getval(key) {
			switch (this.getEnv()) {
				case 'Surge':
				case 'Loon':
				case 'Stash':
				case 'Shadowrocket':
					return $persistentStore.read(key)
				case 'Quantumult X':
				return $prefs.valueForKey(key)
				default:
			}
		}
		setval(val, key) {
			switch (this.getEnv()) {
				case 'Surge':
				case 'Loon':
				case 'Stash':
				case 'Shadowrocket':
					return $persistentStore.write(val, key)
				case 'Quantumult X':
				return $prefs.setValueForKey(val, key)
				default:
			}
		}
		get(request, callback = () => {}) {
			if (request.headers) {
				delete request.headers['Content-Type']
				delete request.headers['Content-Length']
				delete request.headers['content-type']
				delete request.headers['content-length']
			}
			if (
				typeof request.followRedirect !== 'undefined' && !request['followRedirect']
			) {
				if (this.isSurge() || this.isLoon()) request['auto-redirect'] = false
				if (this.isQuanX())
					request.opts
						? (request['opts']['redirection'] = false)
						: (request.opts = { redirection: false })
			}
			switch (this.getEnv()) {
				case 'Surge':
				case 'Loon':
				case 'Stash':
				case 'Shadowrocket':
				default:
					if (this.isSurge() && this.isNeedRewrite) {
						request.headers = request.headers || {}
						Object.assign(request.headers, { 'X-Surge-Skip-Scripting': false })
					}
					$httpClient.get(request, (err, resp, body) => {
						if (!err && resp) {
							resp.body = body
							resp.statusCode = resp.status ? resp.status : resp.statusCode
							resp.status = resp.statusCode
						}
						callback(err, resp, body)
					})
					break
				case 'Quantumult X':
					if (this.isNeedRewrite) {
						request.opts = request.opts || {}
						Object.assign(request.opts, { hints: false })
					}
					$task.fetch(request).then(
						(resp) => {
							const {
								statusCode: status,
								statusCode,
								headers,
								body,
								bodyBytes
							} = resp
							callback(
								null,
								{ status, statusCode, headers, body, bodyBytes },
								body,
								bodyBytes
							)
						},
						(err) => callback((err && err.error) || 'UndefinedError')
					)
					break
			}
		}
		post(request, callback = () => {}) {
			const method = request.method ? request.method.toLocaleLowerCase() : 'post'
			if (
				request.body &&
				request.headers && !request.headers['Content-Type'] && !request.headers['content-type']
				) {
				request.headers['content-type'] = 'application/x-www-form-urlencoded'
			}
			if (request.headers) {
				delete request.headers['Content-Length']
				delete request.headers['content-length']
			}
			if (
				typeof request.followRedirect !== 'undefined' && !request['followRedirect']
			) {
				if (this.isSurge() || this.isLoon()) request['auto-redirect'] = false
				if (this.isQuanX())
					request.opts
						? (request['opts']['redirection'] = false)
						: (request.opts = { redirection: false })
			}
			switch (this.getEnv()) {
				case 'Surge':
				case 'Loon':
				case 'Stash':
				case 'Shadowrocket':
				default:
					if (this.isSurge() && this.isNeedRewrite) {
						request.headers = request.headers || {}
						Object.assign(request.headers, { 'X-Surge-Skip-Scripting': false })
					}
					$httpClient[method](request, (err, resp, body) => {
						if (!err && resp) {
							resp.body = body
							resp.statusCode = resp.status ? resp.status : resp.statusCode
							resp.status = resp.statusCode
						}
						callback(err, resp, body)
					})
					break
				case 'Quantumult X':
					request.method = method
					if (this.isNeedRewrite) {
						request.opts = request.opts || {}
						Object.assign(request.opts, { hints: false })
					}
					$task.fetch(request).then(
						(resp) => {
							const {
								statusCode: status,
								statusCode,
								headers,
								body,
								bodyBytes
							} = resp
							callback(
								null,
								{ status, statusCode, headers, body, bodyBytes },
								body,
								bodyBytes
							)
						},
						(err) => callback((err && err.error) || 'UndefinedError')
					)
					break
			}
		}
		time(fmt, ts = null) {
			const date = ts ? new Date(ts) : new Date()
			let o = {
				'M+': date.getMonth() + 1,
				'd+': date.getDate(),
				'H+': date.getHours(),
				'm+': date.getMinutes(),
				's+': date.getSeconds(),
				'q+': Math.floor((date.getMonth() + 3) / 3),
				'S': date.getMilliseconds()
			}
			if (/(y+)/.test(fmt))
				fmt = fmt.replace(
					RegExp.$1,
					(date.getFullYear() + '').substr(4 - RegExp.$1.length)
				)
			for (let k in o)
				if (new RegExp('(' + k + ')').test(fmt))
					fmt = fmt.replace(
						RegExp.$1,
						RegExp.$1.length == 1
							? o[k]
							: ('00' + o[k]).substr(('' + o[k]).length)
					)
			return fmt
		}
		msg(title = name, subt = '', desc = '', opts = {}) {
			const toEnvOpts = (rawopts) => {
				const { $open, $copy, $media, $mediaMime } = rawopts
				switch (typeof rawopts) {
					case undefined:
						return rawopts
					case 'string':
						switch (this.getEnv()) {
							case 'Surge':
							case 'Stash':
							default:
								return { url: rawopts }
							case 'Loon':
							case 'Shadowrocket':
								return rawopts
							case 'Quantumult X':
								return { 'open-url': rawopts }
						}
					case 'object':
						switch (this.getEnv()) {
							case 'Surge':
							case 'Stash':
							case 'Shadowrocket':
							default: {
								const options = {}
								let openUrl =
									rawopts.openUrl || rawopts.url || rawopts['open-url'] || $open
								if (openUrl)
								Object.assign(options, { action: 'open-url', url: openUrl })
								let copy =
									rawopts['update-pasteboard'] ||
									rawopts.updatePasteboard ||
									$copy
								if (copy) {
									Object.assign(options, { action: 'clipboard', text: copy })
								}

								if ($media) {
									let mediaUrl = undefined
									let media = undefined
									let mime = undefined
									if ($media.startsWith('http')) {
										mediaUrl = $media
									}
									else if ($media.startsWith('data:')) {
										const [data] = $media.split(';')
										const [, base64str] = $media.split(',')
										media = base64str
										mime = data.replace('data:', '')
									}
									else {
										const getMimeFromBase64 = (encoded) => {
											const signatures = {
												'JVBERi0': 'application/pdf',
												'R0lGODdh': 'image/gif',
												'R0lGODlh': 'image/gif',
												'iVBORw0KGgo': 'image/png',
												'/9j/': 'image/jpg'
											}
											for (var s in signatures) {
												if (encoded.indexOf(s) === 0) {
													return signatures[s]
												}
											}
											return null
										}
										media = $media
										mime = getMimeFromBase64($media)
									}

									Object.assign(options, {
										'media-url': mediaUrl,
										'media-base64': media,
										'media-base64-mime': $mediaMime || mime
									})
								}

								Object.assign(options, {
									'auto-dismiss': rawopts['auto-dismiss'],
									'sound': rawopts['sound']
								})
								return options
							}
							case 'Loon': {
								const options = {}

								let openUrl =
									rawopts.openUrl || rawopts.url || rawopts['open-url'] || $open
								if (openUrl) Object.assign(options, { openUrl })

								let mediaUrl = rawopts.mediaUrl || rawopts['media-url']
								if ($media && $media.startsWith('http')) mediaUrl = $media
								if (mediaUrl) Object.assign(options, { mediaUrl })

								console.log(JSON.stringify(options))
								return options
							}
							case 'Quantumult X': {
								const options = {}

								let openUrl =
									rawopts['open-url'] || rawopts.url || rawopts.openUrl || $open
								if (openUrl) Object.assign(options, { 'open-url': openUrl })

								let mediaUrl = rawopts['media-url'] || rawopts.mediaUrl
								if ($media && $media.startsWith('http')) mediaUrl = $media
								if (mediaUrl) Object.assign(options, { 'media-url': mediaUrl })

								let copy =
									rawopts['update-pasteboard'] ||
									rawopts.updatePasteboard ||
									$copy
								if (copy) Object.assign(options, { 'update-pasteboard': copy })

								console.log(JSON.stringify(options))
								return options
							}
						}
					default:
						return undefined
				}
			}
			switch (this.getEnv()) {
				case 'Surge':
				case 'Loon':
				case 'Stash':
				case 'Shadowrocket':
				default:
					$notification.post(title, subt, desc, toEnvOpts(opts))
					break
				case 'Quantumult X':
					$notify(title, subt, desc, toEnvOpts(opts))
					break
			}
			if (!this.isMute) {
				let logs = ['', '==============📣系统通知📣==============']
				logs.push(title)
				subt ? logs.push(subt) : ''
				desc ? logs.push(desc) : ''
				console.log(logs.join('\n'))
				this.logs = this.logs.concat(logs)
			}
		}
		log(...logs) {
			if (logs.length > 0) {
				this.logs = [...this.logs, ...logs]
			}
			console.log(logs.map((l) => l || String(l)).join(this.logSeparator))
		}
		wait(time) {
			return new Promise((resolve) => setTimeout(resolve, time))
		}
		done(val = {}) {
			const endTime = new Date().getTime()
			const costTime = (endTime - this.startTime) / 1000
			!this.isMute && this.log('', `🔔${this.name}, 结束! 🕛 ${costTime} 秒`)
			this.log()
			switch (this.getEnv()) {
				case 'Surge':
				case 'Loon':
				case 'Stash':
				case 'Shadowrocket':
				case 'Quantumult X':
				default:
					$done(val)
					break
			}
		}
	})(name, opts)
}
