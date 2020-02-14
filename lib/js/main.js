/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var main = {
    index: function () {
        $(document).ready(function () {
            console.log(main.getTelecom('09123'));
        });
    },
    getTelecom: function ($telecom) {
        var items = [];
        $.each(telecom, function (i, item) {
            if ($.inArray(parseInt($telecom.substring(1, 3)), item.head_phone_number) >= 0 || $.inArray(parseInt($telecom.substring(1, 4)), item.head_phone_number) >= 0) {
                items = item;
            }
            // đầu số cố định
            if ($telecom.substring(0, 2) == "02" || $telecom.substring(0, 1) == "2") {
                if ($.inArray(parseInt($telecom.substring(1, 3)), item.head_phone_number) < 0 || $.inArray(parseInt($telecom.substring(1, 4)), item.head_phone_number) < 0) {
                    if ($.inArray(parseInt($telecom.substring(3, 5)), item.head_home_phone_number) >= 0 || $.inArray(parseInt($telecom.substring(3, 6)), item.head_home_phone_number) >= 0 ||
                            $.inArray(parseInt($telecom.substring(4, 6)), item.head_home_phone_number) >= 0 || $.inArray(parseInt($telecom.substring(4, 7)), item.head_home_phone_number) >= 0) {
                        items = item;
                    }
                }
            }

        });
        return items;
    },
    numberFormat: function (nStr) {
        nStr += '';
        x = nStr.split('.');
        x1 = x[0];
        x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        return x1 + x2;
    },
};
var DOCSO = function () {
    var t = ["không", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"], r = function (r, n) {
        var o = "", a = Math.floor(r / 10), e = r % 10;
        return a > 1 ? (o = " " + t[a] + " mươi", 1 == e && (o += " mốt")) : 1 == a ? (o = " mười", 1 == e && (o += " một")) : n && e > 0 && (o = " lẻ"), 5 == e && a >= 1 ? o += " lăm" : 4 == e && a >= 1 ? o += " tư" : (e > 1 || 1 == e && 0 == a) && (o += " " + t[e]), o
    }, n = function (n, o) {
        var a = "", e = Math.floor(n / 100), n = n % 100;
        return o || e > 0 ? (a = " " + t[e] + " trăm", a += r(n, !0)) : a = r(n, !1), a
    }, o = function (t, r) {
        var o = "", a = Math.floor(t / 1e6), t = t % 1e6;
        a > 0 && (o = n(a, r) + " triệu", r = !0);
        var e = Math.floor(t / 1e3), t = t % 1e3;
        return e > 0 && (o += n(e, r) + " ngàn", r = !0), t > 0 && (o += n(t, r)), o
    };
    return{doc: function (r) {
            if (0 == r)
                return t[0];
            var n = "", a = "";
            do
                ty = r % 1e9, r = Math.floor(r / 1e9), n = r > 0 ? o(ty, !0) + a + n : o(ty, !1) + a + n, a = " tỷ";
            while (r > 0);
            return n.trim()
        }}
}();
