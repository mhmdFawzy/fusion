setTimeout(function () { $("#pre").fadeOut("fast") }, 6e3), setTimeout(function () { $(".preload").fadeOut("fast") }, 6e3), $(function () { setTimeout(function () { $("html, body").css({ "overflow-y": "auto", "overflow-x": "hidden" }).animate({ scrollTop: $(".one").offset().top }, 4e3) }, 4e3) });