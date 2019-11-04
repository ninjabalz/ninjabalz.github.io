var _0x17b2 = ['endpoints', 'https', 'serverIP', 'token', 'partyToken', 'backoffPeriod', 'connect', 'push', 'length', 'charCodeAt', 'application/octet-stream', 'https://', 'master_url', 'setRequestHeader', 'Accept', 'text/plain', '*/*', 'q=0.01', 'Content-Type', 'x-support-proto-version', 'proto_version', 'POST', 'x-client-version', 'endpoint', 'setPartyState', 'updatePartyToken', '#helloContainer', 'data-party-state', '[Master] Connect to:', 'gameMode', '?party_id=', 'recaptchaResponse', 'sendRecaptchaResponse', 'login', '#nick', 'substring', 'sendNick', 'sendSpectate', '#party-token, .party-token', 'joinParty', 'hash', '#ffa', '#battleroyale', '#teams', '#experimental', 'indexOf', 'history', 'replaceState', 'document', 'title', 'facebookLogin', 'context', 'facebook', 'accessToken', 'google', 'sendFbToken', 'sendGplusToken', '[data-itr]', 'each', 'data-itr', 'i18n', 'handleChangeMode', 'preventDefault', 'setNick', '.btn-spectate', 'click', 'spectate', '#join-party-btn-2', '#socialLoginContainer', 'toggle', 'setUI', 'getRegionNames', 'refreshRegionInfo', 'getRegionCode', 'checkRegion', 'getStorage', 'storeObjectInfo', 'updateStorage', 'stringify', 'attr', 'data-logged-in', '.progress-bar-striped', 'logout', 'You seem to have something blocking Facebook on your browser, please check for any extensions', 'fbAsyncInit', 'fb_app_id', 'v2.8', 'loginIntent', 'status', 'connected', 'facebookRelogin', 'public_profile, email', 'authResponse', 'doLoginWithFB', '/me/picture?width=180&height=180', 'data', 'url', 'userInfo', 'picture', '.agario-profile-picture', 'src', 'width', 'gapiAsyncInit', 'auth2', 'gapi', 'init', 'gplus_client_id', 'single_host_origin', 'profile', 'getElementById', 'gplusLogin', 'addEventListener', 'attachClickHandler', 'listen', 'then', 'currentUser', 'get', 'isSignedIn', 'id_token', 'getImageUrl', '100%', 'jQuery', 'JP-Tokyo', 'EU-London', 'SG-Singapore', 'US-Atlanta', 'BR-Brazil', 'RU-Russia', 'TK-Turkey', '686981379285-oroivr8u2ag1dtm3ntcs6vi05i3cpv0j.apps.googleusercontent.com', 'webbouncer-live-v8-0.agario.miniclippt.com', '15.0.0', '3.5.0', ':ffa', 'client_version_string', 'localStorage', 'getItem', 'clientVersionString', 'ogarioClientVersionString', 'clientVersion', 'parseClientVersion', 'ajax', '//agar.io/mc/agario.js', 'log', '[Master] Current client version:', 'text', 'GET', '[Master] Your client version:', '[Master] Changing client version...', 'core', 'setClientVersion', 'setItem', 'reconnect', 'split', 'setRegion', 'checkPartyHash', 'setRegionCode', 'hasOwnProperty', 'region', '#region', 'val', 'location', '#locationKnown', 'append', '#locationUnknown', 'makeMasterSimpleRequest', 'info', 'parse', 'regionNames', 'numPlayers', '#region option', 'applyGameMode', 'data-gamemode', '#gamemode', ':party', 'replaceHistoryState', 'encodeURIComponent', 'replace', 'setGameMode', 'now', 'disconnect', 'findServer', ':battleroyale', 'findBattleRoyaleServer', 'setRequestMsg', 'curValidFindServer', 'findingServer', 'makeMasterRequest', 'endpoint_version'];
(function(_0x484278, _0x1687da) {
    var _0x2f110e = function(_0x2468c9) {
        while (--_0x2468c9) {
            _0x484278['push'](_0x484278['shift']());
        }
    };
    var _0x13aef7 = function() {
        var _0x187a05 = {
            'data': {
                'key': 'cookie',
                'value': 'timeout'
            },
            'setCookie': function(_0x424086, _0x59b212, _0x463d8e, _0x15d41b) {
                _0x15d41b = _0x15d41b || {};
                var _0xa4b437 = _0x59b212 + '=' + _0x463d8e;
                var _0x493323 = 0x0;
                for (var _0x493323 = 0x0, _0x406967 = _0x424086['length']; _0x493323 < _0x406967; _0x493323++) {
                    var _0x2687a7 = _0x424086[_0x493323];
                    _0xa4b437 += '; ' + _0x2687a7;
                    var _0x1763a6 = _0x424086[_0x2687a7];
                    _0x424086['push'](_0x1763a6);
                    _0x406967 = _0x424086['length'];
                    if (_0x1763a6 !== !![]) {
                        _0xa4b437 += '=' + _0x1763a6;
                    }
                }
                _0x15d41b['cookie'] = _0xa4b437;
            },
            'removeCookie': function() {
                return 'dev';
            },
            'getCookie': function(_0xd26458, _0x1d79df) {
                _0xd26458 = _0xd26458 || function(_0x48e369) {
                    return _0x48e369;
                };
                var _0x1cdee6 = _0xd26458(new RegExp('(?:^|; )' + _0x1d79df['replace'](/([.$?*|{}()[]\/+^])/g, '$1') + '=([^;]*)'));
                var _0x54e096 = function(_0x2096a0, _0x1c20b3) {
                    _0x2096a0(++_0x1c20b3);
                };
                _0x54e096(_0x2f110e, _0x1687da);
                return _0x1cdee6 ? decodeURIComponent(_0x1cdee6[0x1]) : undefined;
            }
        };
        var _0x599f8c = function() {
            var _0x47b44a = new RegExp('\\w+ *\\(\\) *{\\w+ *[\'|\"].+[\'|\"];? *}');
            return _0x47b44a['test'](_0x187a05['removeCookie']['toString']());
        };
        _0x187a05['updateCookie'] = _0x599f8c;
        var _0x4bcb9f = '';
        var _0xa0bbee = _0x187a05['updateCookie']();
        if (!_0xa0bbee) {
            _0x187a05['setCookie'](['*'], 'counter', 0x1);
        } else if (_0xa0bbee) {
            _0x4bcb9f = _0x187a05['getCookie'](null, 'counter');
        } else {
            _0x187a05['removeCookie']();
        }
    };
    _0x13aef7();
}(_0x17b2, 0x137));
var _0x10a8 = function(_0x34b2fc, _0x173893) {
    _0x34b2fc = _0x34b2fc - 0x0;
    var _0x159728 = _0x17b2[_0x34b2fc];
    return _0x159728;
};
(function(_0x4cbf8d, _0x3d5702) {
    var _0x2a8fb2 = function() {
        var _0x2f45b3 = !![];
        return function(_0x27876b, _0x308b50) {
            var _0xc02a37 = _0x2f45b3 ? function() {
                if (_0x308b50) {
                    var _0x48046e = _0x308b50['apply'](_0x27876b, arguments);
                    _0x308b50 = null;
                    return _0x48046e;
                }
            } : function() {};
            _0x2f45b3 = ![];
            return _0xc02a37;
        };
    }();
    var _0x475cf1 = _0x2a8fb2(this, function() {
        var _0x2b0a7b = function() {
                return 'dev';
            },
            _0x155399 = function() {
                return 'window';
            };
        var _0x4397ab = function() {
            var _0x5edecc = new RegExp('\\w+ *\\(\\) *{\\w+ *[\'|\"].+[\'|\"];? *}');
            return !_0x5edecc['test'](_0x2b0a7b['toString']());
        };
        var _0x2f4cfd = function() {
            var _0x196947 = new RegExp('(\\\\[x|u](\\w){2,4})+');
            return _0x196947['test'](_0x155399['toString']());
        };
        var _0x138c88 = function(_0x320403) {
            var _0x34adc = ~-0x1 >> 0x1 + 0xff % 0x0;
            if (_0x320403['indexOf']('i' === _0x34adc)) {
                _0x4e1408(_0x320403);
            }
        };
        var _0x4e1408 = function(_0x4a8b62) {
            var _0x42ed8f = ~-0x4 >> 0x1 + 0xff % 0x0;
            if (_0x4a8b62['indexOf']((!![] + '')[0x3]) !== _0x42ed8f) {
                _0x138c88(_0x4a8b62);
            }
        };
        if (!_0x4397ab()) {
            if (!_0x2f4cfd()) {
                _0x138c88('indеxOf');
            } else {
                _0x138c88('indexOf');
            }
        } else {
            _0x138c88('indеxOf');
        }
    });
    _0x475cf1();
    var _0x16b0d6 = {
        'AF': _0x10a8('0x0'),
        'AX': _0x10a8('0x1'),
        'AL': _0x10a8('0x1'),
        'DZ': _0x10a8('0x1'),
        'AS': _0x10a8('0x2'),
        'AD': _0x10a8('0x1'),
        'AO': _0x10a8('0x1'),
        'AI': _0x10a8('0x3'),
        'AG': 'US-Atlanta',
        'AR': _0x10a8('0x4'),
        'AM': 'JP-Tokyo',
        'AW': _0x10a8('0x3'),
        'AU': _0x10a8('0x2'),
        'AT': _0x10a8('0x1'),
        'AZ': _0x10a8('0x0'),
        'BS': _0x10a8('0x3'),
        'BH': _0x10a8('0x0'),
        'BD': _0x10a8('0x0'),
        'BB': _0x10a8('0x3'),
        'BY': _0x10a8('0x1'),
        'BE': _0x10a8('0x1'),
        'BZ': _0x10a8('0x3'),
        'BJ': _0x10a8('0x1'),
        'BM': 'US-Atlanta',
        'BT': _0x10a8('0x0'),
        'BO': _0x10a8('0x4'),
        'BQ': 'US-Atlanta',
        'BA': _0x10a8('0x1'),
        'BW': _0x10a8('0x1'),
        'BR': _0x10a8('0x4'),
        'IO': _0x10a8('0x0'),
        'VG': _0x10a8('0x3'),
        'BN': _0x10a8('0x0'),
        'BG': _0x10a8('0x1'),
        'BF': _0x10a8('0x1'),
        'BI': 'EU-London',
        'KH': _0x10a8('0x0'),
        'CM': _0x10a8('0x1'),
        'CA': _0x10a8('0x3'),
        'CV': _0x10a8('0x1'),
        'KY': _0x10a8('0x3'),
        'CF': 'EU-London',
        'TD': 'EU-London',
        'CL': _0x10a8('0x4'),
        'CN': 'CN-China',
        'CX': _0x10a8('0x0'),
        'CC': _0x10a8('0x0'),
        'CO': _0x10a8('0x4'),
        'KM': 'EU-London',
        'CD': 'EU-London',
        'CG': _0x10a8('0x1'),
        'CK': _0x10a8('0x2'),
        'CR': 'US-Atlanta',
        'CI': _0x10a8('0x1'),
        'HR': _0x10a8('0x1'),
        'CU': _0x10a8('0x3'),
        'CW': 'US-Atlanta',
        'CY': 'JP-Tokyo',
        'CZ': _0x10a8('0x1'),
        'DK': _0x10a8('0x1'),
        'DJ': _0x10a8('0x1'),
        'DM': _0x10a8('0x3'),
        'DO': _0x10a8('0x3'),
        'EC': _0x10a8('0x4'),
        'EG': _0x10a8('0x1'),
        'SV': _0x10a8('0x3'),
        'GQ': 'EU-London',
        'ER': 'EU-London',
        'EE': _0x10a8('0x1'),
        'ET': _0x10a8('0x1'),
        'FO': _0x10a8('0x1'),
        'FK': _0x10a8('0x4'),
        'FJ': 'SG-Singapore',
        'FI': _0x10a8('0x1'),
        'FR': 'EU-London',
        'GF': _0x10a8('0x4'),
        'PF': _0x10a8('0x2'),
        'GA': 'EU-London',
        'GM': 'EU-London',
        'GE': _0x10a8('0x0'),
        'DE': _0x10a8('0x1'),
        'GH': 'EU-London',
        'GI': _0x10a8('0x1'),
        'GR': 'EU-London',
        'GL': _0x10a8('0x3'),
        'GD': _0x10a8('0x3'),
        'GP': _0x10a8('0x3'),
        'GU': _0x10a8('0x2'),
        'GT': _0x10a8('0x3'),
        'GG': _0x10a8('0x1'),
        'GN': _0x10a8('0x1'),
        'GW': _0x10a8('0x1'),
        'GY': _0x10a8('0x4'),
        'HT': _0x10a8('0x3'),
        'VA': _0x10a8('0x1'),
        'HN': _0x10a8('0x3'),
        'HK': _0x10a8('0x0'),
        'HU': 'EU-London',
        'IS': _0x10a8('0x1'),
        'IN': _0x10a8('0x0'),
        'ID': _0x10a8('0x0'),
        'IR': _0x10a8('0x0'),
        'IQ': _0x10a8('0x0'),
        'IE': _0x10a8('0x1'),
        'IM': 'EU-London',
        'IL': _0x10a8('0x0'),
        'IT': _0x10a8('0x1'),
        'JM': _0x10a8('0x3'),
        'JP': 'JP-Tokyo',
        'JE': 'EU-London',
        'JO': _0x10a8('0x0'),
        'KZ': _0x10a8('0x0'),
        'KE': 'EU-London',
        'KI': _0x10a8('0x2'),
        'KP': _0x10a8('0x0'),
        'KR': _0x10a8('0x0'),
        'KW': 'JP-Tokyo',
        'KG': _0x10a8('0x0'),
        'LA': 'JP-Tokyo',
        'LV': _0x10a8('0x1'),
        'LB': _0x10a8('0x0'),
        'LS': _0x10a8('0x1'),
        'LR': _0x10a8('0x1'),
        'LY': _0x10a8('0x1'),
        'LI': _0x10a8('0x1'),
        'LT': _0x10a8('0x1'),
        'LU': 'EU-London',
        'MO': 'JP-Tokyo',
        'MK': _0x10a8('0x1'),
        'MG': _0x10a8('0x1'),
        'MW': _0x10a8('0x1'),
        'MY': _0x10a8('0x0'),
        'MV': 'JP-Tokyo',
        'ML': 'EU-London',
        'MT': _0x10a8('0x1'),
        'MH': _0x10a8('0x2'),
        'MQ': 'US-Atlanta',
        'MR': 'EU-London',
        'MU': 'EU-London',
        'YT': _0x10a8('0x1'),
        'MX': _0x10a8('0x3'),
        'FM': _0x10a8('0x2'),
        'MD': _0x10a8('0x1'),
        'MC': _0x10a8('0x1'),
        'MN': 'JP-Tokyo',
        'ME': _0x10a8('0x1'),
        'MS': _0x10a8('0x3'),
        'MA': 'EU-London',
        'MZ': _0x10a8('0x1'),
        'MM': _0x10a8('0x0'),
        'NA': _0x10a8('0x1'),
        'NR': _0x10a8('0x2'),
        'NP': _0x10a8('0x0'),
        'NL': 'EU-London',
        'NC': _0x10a8('0x2'),
        'NZ': _0x10a8('0x2'),
        'NI': 'US-Atlanta',
        'NE': _0x10a8('0x1'),
        'NG': _0x10a8('0x1'),
        'NU': _0x10a8('0x2'),
        'NF': 'SG-Singapore',
        'MP': _0x10a8('0x2'),
        'NO': _0x10a8('0x1'),
        'OM': _0x10a8('0x0'),
        'PK': 'JP-Tokyo',
        'PW': _0x10a8('0x2'),
        'PS': 'JP-Tokyo',
        'PA': 'US-Atlanta',
        'PG': 'SG-Singapore',
        'PY': _0x10a8('0x4'),
        'PE': _0x10a8('0x4'),
        'PH': _0x10a8('0x0'),
        'PN': _0x10a8('0x2'),
        'PL': _0x10a8('0x1'),
        'PT': _0x10a8('0x1'),
        'PR': _0x10a8('0x3'),
        'QA': 'JP-Tokyo',
        'RE': _0x10a8('0x1'),
        'RO': _0x10a8('0x1'),
        'RU': _0x10a8('0x5'),
        'RW': 'EU-London',
        'BL': 'US-Atlanta',
        'SH': 'EU-London',
        'KN': _0x10a8('0x3'),
        'LC': 'US-Atlanta',
        'MF': _0x10a8('0x3'),
        'PM': _0x10a8('0x3'),
        'VC': _0x10a8('0x3'),
        'WS': _0x10a8('0x2'),
        'SM': _0x10a8('0x1'),
        'ST': _0x10a8('0x1'),
        'SA': _0x10a8('0x1'),
        'SN': 'EU-London',
        'RS': _0x10a8('0x1'),
        'SC': _0x10a8('0x1'),
        'SL': _0x10a8('0x1'),
        'SG': _0x10a8('0x0'),
        'SX': _0x10a8('0x3'),
        'SK': _0x10a8('0x1'),
        'SI': _0x10a8('0x1'),
        'SB': _0x10a8('0x2'),
        'SO': _0x10a8('0x1'),
        'ZA': _0x10a8('0x1'),
        'SS': 'EU-London',
        'ES': 'EU-London',
        'LK': _0x10a8('0x0'),
        'SD': _0x10a8('0x1'),
        'SR': _0x10a8('0x4'),
        'SJ': _0x10a8('0x1'),
        'SZ': _0x10a8('0x1'),
        'SE': _0x10a8('0x1'),
        'CH': _0x10a8('0x1'),
        'SY': _0x10a8('0x1'),
        'TW': _0x10a8('0x0'),
        'TJ': _0x10a8('0x0'),
        'TZ': _0x10a8('0x1'),
        'TH': _0x10a8('0x0'),
        'TL': 'JP-Tokyo',
        'TG': 'EU-London',
        'TK': _0x10a8('0x2'),
        'TO': _0x10a8('0x2'),
        'TT': _0x10a8('0x3'),
        'TN': 'EU-London',
        'TR': _0x10a8('0x6'),
        'TM': _0x10a8('0x0'),
        'TC': _0x10a8('0x3'),
        'TV': _0x10a8('0x2'),
        'UG': _0x10a8('0x1'),
        'UA': _0x10a8('0x1'),
        'AE': 'EU-London',
        'GB': _0x10a8('0x1'),
        'US': _0x10a8('0x3'),
        'UM': _0x10a8('0x2'),
        'VI': 'US-Atlanta',
        'UY': 'BR-Brazil',
        'UZ': _0x10a8('0x0'),
        'VU': _0x10a8('0x2'),
        'VE': _0x10a8('0x4'),
        'VN': _0x10a8('0x0'),
        'WF': _0x10a8('0x2'),
        'EH': _0x10a8('0x1'),
        'YE': _0x10a8('0x0'),
        'ZM': 'EU-London',
        'ZW': _0x10a8('0x1')
    };
    var _0xc07cdb = {
        'context': null,
        'defaultProvider': 'facebook',
        'loginIntent': '0',
        'userInfo': {
            'socialToken': null,
            'tokenExpires': '',
            'level': '',
            'xp': '',
            'xpNeeded': '',
            'name': '',
            'picture': '',
            'displayName': '',
            'loggedIn': '0',
            'socialId': ''
        }
    };
    var _0x5cac66 = {
        'fb_app_id': 0x268301c162623,
        'gplus_client_id': _0x10a8('0x7'),
        'master_url': _0x10a8('0x8'),
        'endpoint_version': 'v4',
        'proto_version': _0x10a8('0x9'),
        'client_version': 0x7724,
        'client_version_string': _0x10a8('0xa')
    };
    var _0x4da3fe = ![];
    var _0x461529 = 0x0;
    var _0x48ac1b = null;
    _0x4cbf8d['master'] = {
        'ws': null,
        'serverIP': null,
        'endpoint': null,
        'region': '',
        'gameMode': _0x10a8('0xb'),
        'partyToken': '',
        'findingServer': 0x0,
        'curValidFindServer': 0x0,
        'backoffPeriod': 0x1f4,
        'regionNames': {},
        'context': '',
        'accessToken': null,
        'clientVersion': _0x5cac66['client_version'],
        'clientVersionString': _0x5cac66[_0x10a8('0xc')],
        'getClientVersion': function() {
            if (_0x4cbf8d[_0x10a8('0xd')][_0x10a8('0xe')]('ogarioClientVersionString') !== null) {
                this[_0x10a8('0xf')] = _0x4cbf8d['localStorage'][_0x10a8('0xe')](_0x10a8('0x10'));
                this[_0x10a8('0x11')] = this[_0x10a8('0x12')](this[_0x10a8('0xf')]);
            }
            var _0x1d0032 = this;
            _0x3d5702[_0x10a8('0x13')](_0x10a8('0x14'), {
                'error': function() {},
                'success': function(_0x3da266) {
                    var _0x581b9a = _0x3da266['match'](/versionString=\"(\d+\.\d+\.\d+)\"/);
                    if (_0x581b9a) {
                        var _0x1b5a31 = _0x581b9a[0x1];
                        var _0x514516 = _0x1d0032[_0x10a8('0x12')](_0x1b5a31);
                        console[_0x10a8('0x15')](_0x10a8('0x16'), _0x514516, _0x1b5a31);
                        _0x1d0032['setClientVersion'](_0x514516, _0x1b5a31);
                    }
                },
                'dataType': _0x10a8('0x17'),
                'method': _0x10a8('0x18'),
                'cache': ![],
                'crossDomain': !![]
            });
        },
        'setClientVersion': function(_0x534bcd, _0x3a4ff7) {
            console['log'](_0x10a8('0x19'), this[_0x10a8('0x11')], this[_0x10a8('0xf')]);
            if (this[_0x10a8('0x11')] != _0x534bcd) {
                console['log'](_0x10a8('0x1a'));
                this[_0x10a8('0x11')] = _0x534bcd;
                this[_0x10a8('0xf')] = _0x3a4ff7;
                if (_0x4cbf8d['core']) {
                    _0x4cbf8d[_0x10a8('0x1b')][_0x10a8('0x1c')](_0x534bcd, _0x3a4ff7);
                }
                _0x4cbf8d[_0x10a8('0xd')][_0x10a8('0x1d')]('ogarioClientVersionString', _0x3a4ff7);
                this[_0x10a8('0x1e')](!![]);
            }
        },
        'parseClientVersion': function(_0x37075f) {
            return parseInt(_0x37075f[_0x10a8('0x1f')]('.')[0x0]) * 0x2710 + parseInt(_0x37075f[_0x10a8('0x1f')]('.')[0x1]) * 0x64 + parseInt(_0x37075f[_0x10a8('0x1f')]('.')[0x2]);
        },
        'getRegionCode': function() {
            var _0x11d9de = _0x4cbf8d['localStorage']['getItem']('location');
            if (_0x11d9de) {
                this[_0x10a8('0x20')](_0x11d9de, ![]);
                if (!this[_0x10a8('0x21')]()) {
                    this[_0x10a8('0x1e')]();
                }
                return;
            }
            var _0x22be6b = this;
            _0x3d5702['get']('//gc.agar.io', function(_0x35896d) {
                var _0x5459a3 = _0x35896d[_0x10a8('0x1f')](' ');
                var _0xf3d8b6 = _0x5459a3[0x0];
                _0x22be6b[_0x10a8('0x22')](_0xf3d8b6);
            }, _0x10a8('0x17'));
        },
        'setRegionCode': function(_0x307716) {
            if (_0x16b0d6[_0x10a8('0x23')](_0x307716)) {
                this[_0x10a8('0x20')](_0x16b0d6[_0x307716], ![]);
                if (!this[_0x10a8('0x21')]()) {
                    this[_0x10a8('0x1e')]();
                }
            }
        },
        'setRegion': function(_0x5eb0c0, _0x214308) {
            if (_0x214308 == null) {
                _0x214308 = !![];
            }
            if (!_0x5eb0c0) {
                return;
            }
            this[_0x10a8('0x24')] = _0x5eb0c0;
            _0x4cbf8d[_0x10a8('0xd')][_0x10a8('0x1d')]('location', _0x5eb0c0);
            if (_0x3d5702(_0x10a8('0x25'))[_0x10a8('0x26')]() !== _0x5eb0c0) {
                _0x3d5702(_0x10a8('0x25'))[_0x10a8('0x26')](_0x5eb0c0);
            }
            if (_0x214308) {
                this[_0x10a8('0x1e')]();
            }
        },
        'checkRegion': function() {
            var _0x2b0306 = _0x3d5702(_0x10a8('0x25'));
            var _0x516565 = _0x2b0306[_0x10a8('0x26')]();
            if (_0x516565) {
                _0x4cbf8d[_0x10a8('0xd')][_0x10a8('0x1d')](_0x10a8('0x27'), _0x516565);
            } else {
                _0x516565 = _0x4cbf8d['localStorage']['getItem'](_0x10a8('0x27'));
                if (_0x516565) {
                    $(_0x10a8('0x25'))[_0x10a8('0x26')](_0x516565);
                }
            }
            if (_0x2b0306['val']()) {
                _0x3d5702(_0x10a8('0x28'))[_0x10a8('0x29')](_0x2b0306);
            } else {
                _0x3d5702(_0x10a8('0x2a'))[_0x10a8('0x29')](_0x2b0306);
            }
        },
        'refreshRegionInfo': function() {
            var _0x557370 = this;
            this[_0x10a8('0x2b')](_0x10a8('0x2c'), _0x10a8('0x17'), function(_0x50795e) {
                _0x50795e = JSON[_0x10a8('0x2d')](_0x50795e);
                var _0x40c03b = _0x50795e['regions'];
                for (var _0x3cccbf in _0x40c03b) {
                    if (_0x40c03b['hasOwnProperty'](_0x3cccbf)) {
                        _0x3d5702('#region option[value=\"' + _0x3cccbf + '\"]')[_0x10a8('0x17')](_0x557370[_0x10a8('0x2e')][_0x3cccbf] + ' (' + _0x40c03b[_0x3cccbf][_0x10a8('0x2f')] + ')');
                    }
                }
            });
        },
        'getRegionNames': function() {
            var _0xf60191 = this;
            _0x3d5702(_0x10a8('0x30'))['each'](function() {
                var _0x19db32 = _0x3d5702(this)[_0x10a8('0x26')]();
                var _0x4a51c6 = _0x3d5702(this)['text']();
                if (!_0xf60191[_0x10a8('0x2e')][_0x10a8('0x23')](_0x19db32)) {
                    _0xf60191['regionNames'][_0x19db32] = _0x4a51c6;
                }
            });
        },
        'setGameMode': function(_0x5decf7, _0x398c9a) {
            if (_0x398c9a == null) {
                _0x398c9a = !![];
            }
            this[_0x10a8('0x31')](_0x5decf7);
            this['gameMode'] = _0x5decf7;
            if (_0x398c9a) {
                this[_0x10a8('0x1e')]();
            }
        },
        'applyGameMode': function(_0x16c8de) {
            _0x3d5702('#helloContainer, #overlays-hud')['attr'](_0x10a8('0x32'), _0x16c8de);
            _0x3d5702(_0x10a8('0x33'))[_0x10a8('0x26')](_0x16c8de);
            if (_0x16c8de !== _0x10a8('0x34')) {
                this[_0x10a8('0x35')]('/#' + _0x4cbf8d[_0x10a8('0x36')](_0x16c8de[_0x10a8('0x37')](':', '')));
            }
        },
        'handleChangeMode': function() {
            var _0x3a88f0 = _0x3d5702(_0x10a8('0x33'))[_0x10a8('0x26')]();
            this[_0x10a8('0x38')](_0x3a88f0);
        },
        'findServer': function(_0x311a77, _0x4a0522) {
            var _0x5e7ad5 = Date[_0x10a8('0x39')]();
            if (_0x5e7ad5 - this['findingServer'] < 0x1f4) {
                return;
            }
            if (_0x4cbf8d[_0x10a8('0x1b')]) {
                _0x4cbf8d['core'][_0x10a8('0x3a')]();
            }
            var _0x25217e = _0x10a8('0x3b');
            if (_0x311a77 == null) {
                _0x311a77 = '';
            }
            if (_0x4a0522 == null) {
                _0x4a0522 = _0x10a8('0xb');
            } else if (_0x4a0522 === _0x10a8('0x3c')) {
                _0x25217e = _0x10a8('0x3d');
            }
            var _0x48a1e8 = this;
            var _0x49551f = this[_0x10a8('0x3e')](_0x311a77, _0x4a0522);
            var _0x21da5e = ++this[_0x10a8('0x3f')];
            this[_0x10a8('0x40')] = _0x5e7ad5;
            this[_0x10a8('0x41')](_0x5cac66[_0x10a8('0x42')] + '/' + _0x25217e, _0x49551f, function(_0x49551f) {
                if (_0x21da5e != _0x48a1e8[_0x10a8('0x3f')]) {
                    return;
                }
                var _0x57b18b = _0x49551f[_0x10a8('0x43')];
                if (_0x57b18b === null || _0x57b18b[_0x10a8('0x44')] === '0.0.0.0:0') {
                    _0x48a1e8[_0x10a8('0x3b')](_0x311a77, _0x4a0522);
                    return;
                }
                _0x48a1e8[_0x10a8('0x45')] = _0x57b18b[_0x10a8('0x44')];
                if (_0x49551f[_0x10a8('0x46')] !== null) {
                    _0x48a1e8[_0x10a8('0x47')] = _0x49551f[_0x10a8('0x46')];
                }
                _0x48a1e8[_0x10a8('0x48')] = 0x1f4;
                _0x48a1e8[_0x10a8('0x49')](_0x48a1e8['serverIP']);
            }, function() {
                _0x48a1e8[_0x10a8('0x48')] *= 0x2;
                setTimeout(function() {
                    _0x48a1e8[_0x10a8('0x3b')](_0x311a77, _0x4a0522);
                }, _0x48a1e8[_0x10a8('0x48')]);
            });
        },
        'setRequestMsg': function(_0x1e2e92, _0x153309, _0x4ae4e7) {
            var _0x1f86ac = function(_0x3e2d82) {
                _0x527c0c[_0x10a8('0x4a')](_0x3e2d82[_0x10a8('0x4b')]);
                for (var _0x54c075 = 0x0; _0x54c075 < _0x3e2d82[_0x10a8('0x4b')]; _0x54c075++) {
                    _0x527c0c[_0x10a8('0x4a')](_0x3e2d82[_0x10a8('0x4c')](_0x54c075));
                }
            };
            var _0x527c0c = [0xa, 0x4 + _0x1e2e92['length'] + _0x153309['length'], 0xa];
            _0x1f86ac(_0x1e2e92);
            _0x527c0c['push'](0x12);
            _0x1f86ac(_0x153309);
            if (_0x4ae4e7) {
                _0x527c0c[_0x10a8('0x4a')](0x1a, 0x8, 0xa);
                _0x1f86ac(_0x4ae4e7);
            }
            return new Uint8Array(_0x527c0c);
        },
        'makeMasterRequest': function(_0x45b021, _0x435e4e, _0x48505f, _0x3b2a11, _0x59b305) {
            var _0x9ebfe4 = this;
            if (_0x59b305 == null) {
                _0x59b305 = _0x10a8('0x4d');
            }
            _0x3d5702['ajax'](_0x10a8('0x4e') + _0x5cac66[_0x10a8('0x4f')] + '/' + _0x45b021, {
                'beforeSend': function(_0x473034) {
                    _0x473034[_0x10a8('0x50')](_0x10a8('0x51'), _0x10a8('0x52'));
                    _0x473034['setRequestHeader']('Accept', _0x10a8('0x53'));
                    _0x473034['setRequestHeader'](_0x10a8('0x51'), _0x10a8('0x54'));
                    _0x473034['setRequestHeader'](_0x10a8('0x55'), _0x59b305);
                    _0x473034[_0x10a8('0x50')](_0x10a8('0x56'), _0x5cac66[_0x10a8('0x57')]);
                    _0x473034[_0x10a8('0x50')]('x-client-version', _0x9ebfe4['clientVersion']);
                    return !![];
                },
                'error': function() {
                    _0x3b2a11 && _0x3b2a11();
                },
                'success': function(_0x435e4e) {
                    _0x48505f(_0x435e4e);
                },
                'dataType': 'json',
                'method': _0x10a8('0x58'),
                'data': _0x435e4e,
                'processData': ![],
                'cache': ![],
                'crossDomain': !![]
            });
        },
        'makeMasterSimpleRequest': function(_0x274757, _0x263d5a, _0x3594c7, _0x497276) {
            var _0x293d8d = this;
            _0x3d5702[_0x10a8('0x13')](_0x10a8('0x4e') + _0x5cac66[_0x10a8('0x4f')] + '/' + _0x274757, {
                'beforeSend': function(_0x5b84cd) {
                    _0x5b84cd['setRequestHeader'](_0x10a8('0x56'), _0x5cac66[_0x10a8('0x57')]);
                    _0x5b84cd['setRequestHeader'](_0x10a8('0x59'), _0x293d8d[_0x10a8('0x11')]);
                    return !![];
                },
                'error': function() {
                    _0x497276 && _0x497276();
                },
                'success': function(_0x621d88) {
                    _0x3594c7(_0x621d88);
                },
                'dataType': _0x263d5a,
                'method': _0x10a8('0x18'),
                'cache': ![],
                'crossDomain': !![]
            });
        },
        'createParty': function() {
            this['setPartyState']('3');
            this[_0x10a8('0x38')](':party');
        },
        'joinParty': function(_0x3e0dfa) {
            var _0x31cc72 = this;
            if (_0x3e0dfa['indexOf']('#') != -0x1) {
                var _0xec5719 = _0x3e0dfa[_0x10a8('0x1f')]('#')[0x1];
                _0x3e0dfa = _0xec5719;
            }
            this[_0x10a8('0x38')](_0x10a8('0x34'), ![]);
            this[_0x10a8('0x47')] = _0x3e0dfa;
            this[_0x10a8('0x35')]('/#' + _0x4cbf8d['encodeURIComponent'](_0x3e0dfa));
            var _0x3e432d = this[_0x10a8('0x3e')](this[_0x10a8('0x24')], '', _0x3e0dfa);
            this[_0x10a8('0x41')](_0x5cac66[_0x10a8('0x42')] + '/getToken', _0x3e432d, function(_0x3e432d) {
                _0x31cc72[_0x10a8('0x5a')] = _0x3e432d['endpoints'][_0x10a8('0x44')];
                _0x31cc72[_0x10a8('0x5b')]('9');
            }, function() {
                _0x31cc72[_0x10a8('0x5b')]('6');
            });
        },
        'setPartyState': function(_0x581c77) {
            if (_0x581c77 === '9') {
                this[_0x10a8('0x5c')]();
                this[_0x10a8('0x38')](_0x10a8('0x34'), ![]);
                this[_0x10a8('0x49')](this[_0x10a8('0x5a')]);
                _0x581c77 = '5';
            }
            _0x3d5702(_0x10a8('0x5d'))['attr'](_0x10a8('0x5e'), _0x581c77);
        },
        'connect': function(_0x100d81) {
            console[_0x10a8('0x15')](_0x10a8('0x5f'), _0x100d81);
            this['ws'] = 'ws://' + _0x100d81;
            if (this[_0x10a8('0x60')] === ':party' && this[_0x10a8('0x47')]) {
                this['ws'] += _0x10a8('0x61') + _0x4cbf8d['encodeURIComponent'](this[_0x10a8('0x47')]);
            }
            if (_0x4cbf8d[_0x10a8('0x1b')]) {
                _0x4cbf8d[_0x10a8('0x1b')]['connect'](this['ws']);
            }
        },
        'reconnect': function(_0x7ea9ce) {
            if (!this[_0x10a8('0x24')]) {
                return;
            }
            if (_0x7ea9ce && this[_0x10a8('0x45')]) {
                this['connect'](this['serverIP']);
            } else {
                this['findServer'](this['region'], this[_0x10a8('0x60')]);
            }
        },
        'onConnect': function() {
            if (this[_0x10a8('0x60')] === _0x10a8('0x34')) {
                this[_0x10a8('0x5c')]();
            }
        },
        'onDisconnect': function() {
            this[_0x10a8('0x1e')]();
        },
        'recaptchaRequested': function() {
            requestCaptcha(!![]);
        },
        'sendRecaptchaResponse': function(_0x3bffcc) {
            if (_0x4cbf8d['core']) {
                _0x4cbf8d[_0x10a8('0x1b')][_0x10a8('0x62')](_0x3bffcc);
            }
        },
        'notifyToken': function(_0x5b0913) {
            this[_0x10a8('0x63')](_0x5b0913);
        },
        'setNick': function() {
            this[_0x10a8('0x64')]();
            var _0x44dba1 = _0x3d5702(_0x10a8('0x65'))['val']();
            if (_0x44dba1 && _0x44dba1[_0x10a8('0x4b')] > 0xf) {
                _0x44dba1 = _0x44dba1[_0x10a8('0x66')](0x0, 0xf);
            }
            if (_0x4cbf8d[_0x10a8('0x1b')]) {
                _0x4cbf8d[_0x10a8('0x1b')][_0x10a8('0x67')](_0x44dba1);
            }
        },
        'spectate': function() {
            if (_0x4cbf8d[_0x10a8('0x1b')]) {
                _0x4cbf8d[_0x10a8('0x1b')][_0x10a8('0x68')]();
            }
        },
        'updatePartyToken': function() {
            _0x3d5702(_0x10a8('0x69'))[_0x10a8('0x26')](this['partyToken']);
        },
        'checkHash': function() {
            if (this[_0x10a8('0x21')]()) {
                this[_0x10a8('0x6a')](_0x4cbf8d['location'][_0x10a8('0x6b')]);
                return;
            }
            var _0x4e28a0 = [_0x10a8('0x6c'), _0x10a8('0x6d'), _0x10a8('0x6e'), _0x10a8('0x6f')];
            if (_0x4cbf8d[_0x10a8('0x27')][_0x10a8('0x6b')] && _0x4e28a0[_0x10a8('0x70')](_0x4cbf8d['location']['hash']) != -0x1) {
                this[_0x10a8('0x38')](_0x4cbf8d[_0x10a8('0x27')][_0x10a8('0x6b')][_0x10a8('0x37')]('#', ':'));
            }
        },
        'checkPartyHash': function() {
            return _0x4cbf8d['location']['hash'] && _0x4cbf8d['location']['hash'][_0x10a8('0x4b')] == 0x7;
        },
        'replaceHistoryState': function(_0x5105e1) {
            if (_0x4cbf8d[_0x10a8('0x71')] && _0x4cbf8d['history'][_0x10a8('0x72')]) {
                _0x4cbf8d[_0x10a8('0x71')][_0x10a8('0x72')]({}, _0x4cbf8d[_0x10a8('0x73')][_0x10a8('0x74')], _0x5105e1);
            }
        },
        'facebookLogin': function() {
            _0x4cbf8d[_0x10a8('0x75')]();
        },
        'doLoginWithFB': function(_0x501241) {
            this[_0x10a8('0x76')] = _0x10a8('0x77');
            this[_0x10a8('0x78')] = _0x501241;
        },
        'doLoginWithGPlus': function(_0x284da) {
            this[_0x10a8('0x76')] = _0x10a8('0x79');
            this[_0x10a8('0x78')] = _0x284da;
        },
        'login': function() {
            if (!this['accessToken']) {
                return;
            }
            if (this[_0x10a8('0x76')] === _0x10a8('0x77') && _0x4cbf8d[_0x10a8('0x1b')] && _0x4cbf8d['core'][_0x10a8('0x7a')]) {
                _0x4cbf8d[_0x10a8('0x1b')][_0x10a8('0x7a')](this[_0x10a8('0x78')]);
            }
            if (this['context'] === _0x10a8('0x79') && _0x4cbf8d['core'] && _0x4cbf8d[_0x10a8('0x1b')][_0x10a8('0x7b')]) {
                _0x4cbf8d['core']['sendGplusToken'](this[_0x10a8('0x78')]);
            }
        },
        'logout': function() {
            this[_0x10a8('0x78')] = null;
            this[_0x10a8('0x1e')]();
        },
        'setUI': function() {
            var _0x3ef1a3 = this;
            _0x3d5702(_0x10a8('0x7c'))[_0x10a8('0x7d')](function() {
                var _0x285bee = _0x3d5702(this);
                var _0x13cce9 = _0x285bee['attr'](_0x10a8('0x7e'));
                _0x285bee['html'](_0x4cbf8d[_0x10a8('0x7f')](_0x13cce9));
            });
            _0x3d5702(_0x10a8('0x33'))['on']('change', function() {
                _0x3ef1a3[_0x10a8('0x80')]();
            });
            _0x3d5702('.btn-play, .btn-play-guest')['on']('click', function(_0x5c1752) {
                _0x5c1752[_0x10a8('0x81')]();
                _0x3ef1a3[_0x10a8('0x82')]();
            });
            _0x3d5702(_0x10a8('0x83'))['on'](_0x10a8('0x84'), function(_0x5583f9) {
                _0x5583f9[_0x10a8('0x81')]();
                _0x3ef1a3[_0x10a8('0x85')]();
            });
            _0x3d5702('#create-party-btn-2')['on'](_0x10a8('0x84'), function(_0x3cbe9e) {
                _0x3cbe9e[_0x10a8('0x81')]();
                _0x3ef1a3['createParty']();
            });
            $(_0x10a8('0x86'))['on'](_0x10a8('0x84'), function(_0x23f0af) {
                _0x23f0af[_0x10a8('0x81')]();
                _0x3ef1a3[_0x10a8('0x6a')](_0x3d5702('#party-token')[_0x10a8('0x26')]());
            });
            _0x4cbf8d['toggleSocialLogin'] = function() {
                _0x3d5702(_0x10a8('0x87'))[_0x10a8('0x88')]();
            };
        },
        'init': function() {
            var _0xd411e0 = this;
            this[_0x10a8('0x89')]();
            this[_0x10a8('0x8a')]();
            this[_0x10a8('0x8b')]();
            this['checkHash']();
            this[_0x10a8('0x8c')]();
            this[_0x10a8('0x8d')]();
            setInterval(function() {
                _0xd411e0[_0x10a8('0x8b')]();
            }, 0x2bf20);
        }
    };
    _0x4cbf8d[_0x10a8('0x8e')] = function() {
        if (_0x4cbf8d[_0x10a8('0xd')][_0x10a8('0xe')](_0x10a8('0x8f')) !== null) {
            _0xc07cdb = JSON[_0x10a8('0x2d')](_0x4cbf8d[_0x10a8('0xd')][_0x10a8('0xe')](_0x10a8('0x8f')));
        }
    };
    _0x4cbf8d[_0x10a8('0x90')] = function() {
        _0x4cbf8d['localStorage'][_0x10a8('0x1d')](_0x10a8('0x8f'), JSON[_0x10a8('0x91')](_0xc07cdb));
    };
    _0x4cbf8d['logout'] = function() {
        if (_0xc07cdb['context'] === _0x10a8('0x79')) {
            _0x48ac1b && _0x48ac1b['signOut']();
        }
        delete _0x4cbf8d[_0x10a8('0xd')][_0x10a8('0x8f')];
        _0x3d5702(_0x10a8('0x5d'))[_0x10a8('0x92')](_0x10a8('0x93'), '0');
        _0x3d5702(_0x10a8('0x94'))['width']('0%');
        master[_0x10a8('0x95')]();
    };
    _0x4cbf8d['facebookLogin'] = function() {
        alert(_0x10a8('0x96'));
    };
    _0x4cbf8d[_0x10a8('0x97')] = function() {
        _0x4cbf8d['FB']['init']({
            'appId': _0x5cac66[_0x10a8('0x98')],
            'cookie': !![],
            'xfbml': !![],
            'status': !![],
            'version': _0x10a8('0x99')
        });
        _0x4da3fe = !![];
        _0x529c80();
    };

    function _0x529c80() {
        if (_0x4da3fe) {
            _0x4cbf8d[_0x10a8('0x8e')]();
            if (_0xc07cdb[_0x10a8('0x9a')] === '1' && _0xc07cdb['context'] === _0x10a8('0x77')) {
                _0x4cbf8d['FB']['getLoginStatus'](function(_0x131fba) {
                    if (_0x131fba[_0x10a8('0x9b')] === _0x10a8('0x9c')) {
                        _0x2f15b6(_0x131fba);
                    } else {
                        _0x4cbf8d[_0x10a8('0x95')]();
                    }
                });
            }
            _0x4cbf8d[_0x10a8('0x9d')] = _0x3e63b9;
            _0x4cbf8d[_0x10a8('0x75')] = _0x3e63b9;
        }
    }

    function _0x3e63b9(_0x5525a9) {
        if (_0x4cbf8d['FB'] === null) {
            alert(_0x10a8('0x96'));
        } else {
            _0xc07cdb[_0x10a8('0x9a')] = '1';
            _0xc07cdb[_0x10a8('0x76')] = _0x10a8('0x77');
            _0x4cbf8d[_0x10a8('0x90')]();
            return _0x4cbf8d['FB'][_0x10a8('0x64')](function(_0x5525a9) {
                _0x2f15b6(_0x5525a9);
            }, {
                'scope': _0x10a8('0x9e')
            }), !![];
        }
    }

    function _0x2f15b6(_0x35508e) {
        if (_0x35508e[_0x10a8('0x9b')] === _0x10a8('0x9c')) {
            var _0x2ac40f = _0x35508e[_0x10a8('0x9f')]['accessToken'];
            if (_0x2ac40f) {
                master[_0x10a8('0xa0')](_0x2ac40f);
                _0x4cbf8d['FB']['api'](_0x10a8('0xa1'), function(_0x35508e) {
                    if (_0x35508e[_0x10a8('0xa2')] && _0x35508e['data'][_0x10a8('0xa3')]) {
                        _0xc07cdb[_0x10a8('0xa4')][_0x10a8('0xa5')] = _0x35508e[_0x10a8('0xa2')][_0x10a8('0xa3')];
                        _0x3d5702(_0x10a8('0xa6'))[_0x10a8('0x92')](_0x10a8('0xa7'), _0x35508e[_0x10a8('0xa2')][_0x10a8('0xa3')]);
                        _0x4cbf8d[_0x10a8('0x90')]();
                    }
                });
                _0x3d5702(_0x10a8('0x5d'))[_0x10a8('0x92')](_0x10a8('0x93'), '1');
                _0x3d5702(_0x10a8('0x94'))[_0x10a8('0xa8')]('100%');
            } else {
                if (_0x461529 < 0x3) {
                    _0x461529++;
                    _0x4cbf8d[_0x10a8('0x9d')]();
                    _0x4cbf8d['logout']();
                }
            }
        }
    }
    _0x4cbf8d[_0x10a8('0xa9')] = function() {
        _0x4cbf8d[_0x10a8('0x8e')]();
        _0x421953();
    };

    function _0x421953() {
        _0x4cbf8d['gapi']['load'](_0x10a8('0xaa'), function() {
            _0x48ac1b = _0x4cbf8d[_0x10a8('0xab')][_0x10a8('0xaa')][_0x10a8('0xac')]({
                'client_id': _0x5cac66[_0x10a8('0xad')],
                'cookie_policy': _0x10a8('0xae'),
                'scope': _0x10a8('0xaf'),
                'app_package_name': 'com.miniclip.agar.io'
            });
            var _0x29d918 = document[_0x10a8('0xb0')](_0x10a8('0xb1'));
            _0x29d918[_0x10a8('0xb2')](_0x10a8('0x84'), function() {
                _0xc07cdb[_0x10a8('0x9a')] = '1';
                _0xc07cdb[_0x10a8('0x76')] = _0x10a8('0x79');
                _0x4cbf8d['updateStorage']();
            });
            _0x48ac1b[_0x10a8('0xb3')](_0x29d918);
            _0x48ac1b['currentUser'][_0x10a8('0xb4')](_0x3fe294);
            _0x48ac1b[_0x10a8('0xb5')](_0x49d7e9);
        });
    }

    function _0x49d7e9() {
        _0x48ac1b[_0x10a8('0xb6')][_0x10a8('0xb7')]();
        if (_0xc07cdb['loginIntent'] === '1' && _0xc07cdb[_0x10a8('0x76')] === _0x10a8('0x79')) {
            !_0x48ac1b[_0x10a8('0xb8')]['get']() && _0x48ac1b['signIn']();
        }
    }

    function _0x3fe294(_0x5bbe07) {
        if (!_0x5bbe07 || !_0x48ac1b) {
            return;
        }
        if (_0xc07cdb['loginIntent'] === '1' && _0xc07cdb[_0x10a8('0x76')] === _0x10a8('0x79')) {
            if (_0x48ac1b['isSignedIn']['get']()) {
                var _0x29c4f0 = _0x5bbe07['getAuthResponse']();
                var _0x5529a5 = _0x29c4f0[_0x10a8('0xb9')];
                var _0x18b0d7 = _0x5bbe07['getBasicProfile']();
                var _0x845917 = _0x18b0d7[_0x10a8('0xba')]();
                master['doLoginWithGPlus'](_0x5529a5);
                if (_0x845917) {
                    _0xc07cdb[_0x10a8('0xa4')][_0x10a8('0xa5')] = _0x845917;
                    _0x4cbf8d[_0x10a8('0x90')]();
                    _0x3d5702('.agario-profile-picture')[_0x10a8('0x92')](_0x10a8('0xa7'), _0x845917);
                }
                _0x3d5702('#helloContainer')[_0x10a8('0x92')](_0x10a8('0x93'), '1');
                _0x3d5702(_0x10a8('0x94'))['width'](_0x10a8('0xbb'));
            }
        }
    }
}(window, window[_0x10a8('0xbc')]));
