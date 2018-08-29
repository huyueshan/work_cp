export const Waybills = {
  Waybill(e) {
	  var qw = 0;
    function a(t, e, a, i) {
      return e > 6 ||
        i[t + "_" + e] ||
        (i[t + "_" + (e + 1)] &&
          "icon-green-1" !== a &&
          i[t + "_" + (e + 1)].c == a) ||
        (i[t - 1 + "_" + e] &&
          "icon-green-1" !== a &&
          i[t - 1 + "_" + e].c == a)
        ? {
            x: t + 1,
            y: e - 1
          }
        : {
            x: t,
            y: e
          };
    }
    var i = e.ele,
      n = {
        isToradora: !0, // 是否是龙虎
        index: 0,
        isMobile: !1
      },
      e = $.extend(n, e); //这地方打断点
    e.isToradora = !0;

    var r = (function() {
        var t,
          a = e.type;
        switch (!0) {
          case /daxiao/i.test(a):
            t = ["大", "小"];
            break;
          case /danshuang/i.test(a):
            t = ["双", "单"];
            break;
          case /longhudou/i.test(a):
            t = ["龙", "虎"];
            break;
          default:
            t = [];
        }
        return {
          banker: t[0] || "",
          player: t[1] || ""
        };
      })(),
      o = function() {
        var t = {};
        (this.C = t),
          (this.TEMP = {}),
          (this.TEMP.prediction = {
            banker: {},
            player: {}
          }),
          (this.init = function() {
            var t = this;
            return this.HandleUpRoadData(t.RenderAll), this;
          });
      };
    (o.prototype.RenderAll = function(t) {
      function a(e) {
        return e === t ? ' class="active" ' : "";
      }
      function n(t) {
        var e = "";
        return (e += $.map(["dayanlu", "xiaolu", "yueyoulu"], function(e, a) {
          var i = o.TEMP.prediction[t][e]
            ? a + 1 + "-" + o.TEMP.prediction[t][e]
            : "empty";
          return '<i class="icon-' + i + '"></i>';
        }).join(""));
      }
      var o = this,
        s = "";
      i.find("div[drag]").each(function() {
        $(this).onmousedown = null;
      }),
        i.find("div.road-button").undelegate("click"),
        this.TEMP.roadData ||
          (this.TEMP.roadData = [
            $.extend(
              {
                title: "大路",
                klass: "dl"
              },
              this.buildHtml(this.BigRoad)
            ),
            $.extend(
              {
                title: "珠盘路",
                klass: "zpl"
              },
              this.buildHtml(this.PearlRoad)
            ),
            $.extend(
              {
                title: "大眼路",
                klass: "dyl"
              },
              this.buildHtml(this.BigEyeRoad)
            ),
            $.extend(
              {
                title: "小路",
                klass: "xl"
              },
              this.buildHtml(this.SmallRoad)
            ),
            $.extend(
              {
                title: "曱甴路",
                klass: "yyl"
              },
              this.buildHtml(this.RoachRoad)
            )
          ]);
      var d = $.map(this.TEMP.roadData, function(e) {
        return (
          '<dl><dt class="wenti"><span>' +
          e.title +
          '</span></dt><dd><div style="position: relative; left: 0px; top: 0px; width: auto; height: 96px;">' +
          e[t] +
          "</div></dd></dl>"
        );
      });
      s =
        '<div class="w-item-main"><div class="big-road-wrap">' +
        d[0] +
        '</div><div class="next-road-wrap clear">' +
        d.slice(1).join("") +
        "</div></div>";
      var l =
        '<div class="w-side" road-button><span class="even-road"><a href="javascript:;"' +
        a("banker") +
        'data-type="' +
        (r.banker ? "banker" : "") +
        '" class="black">' +
        r.banker +
        "问路</a>" +
        n("banker") +
        '</span><span class="odd-road"><a href="javascript:;"' +
        a("player") +
        'data-type="' +
        (r.player ? "player" : "") +
        '">' +
        r.player +
        "问路</a>" +
        n("player") +
        "</span></div>";
      e.isMobile ? (s += l) : (s = l + s);
      i.data("cache" + e.index, s).html(s);
      var c = i.find("div[drag]");
      return (
        i.find("[road-button]").delegate("a", "click", function() {
          var t = $(this);
          "" !== $(this).data("type") &&
            (t.hasClass("active")
              ? (o.RenderAll("baser"), t.removeClass("active"))
              : (o.RenderAll($(this).data("type")), t.addClass("active")));
        }),
        void c.each(function(t, e) {
          var a = $(this),
            i = a.children(),
            n = a.parent(),
            r = i.width(),
            o = i.height();
          $(this)
            .width(r)
            .css({
              position: "absolute",
              left: "0px",
              top: "0px"
            }),
            n.css({
              position: "relative",
              height: o + "px"
            });
          var s = [],
            d = n.width();
          if (
            (a
              .children()
              .children("tbody")
              .children()
              .each(function() {
                var t = $(this).find("i[class*=-]:last");
                t.length > 0 && s.push(t.width() + t.position().left);
              }),
            s.length > 0)
          ) {
            var l = Math.max.apply(null, s);
            l > d &&
              a.css({
                left: d - l + "px"
              });
          }
          //拖动事件
          a[0].onmousedown = function(e) {
            var ev = e || event;
            var oLeft = a[0].offsetLeft;
            var aleft = ev.clientX - oLeft;
            a[0].onmousemove = function(e) {
              var ev = e || event;
              var curleft = ev.clientX - aleft;
              a[0].style.left =
                curleft > 0
                  ? 0 + "px"
                  : curleft < n.width() - a.width()
                    ? n.width() - a.width() + "px"
                    : curleft + "px";
            };
          };
          a[0].onmouseup = function() {
            a[0].onmousemove = function() {
              null;
            };
          };
          a[0].onmouseleave = function() {
            a[0].onmousemove = function() {
              null;
            };
          };

          //拖动事件
          /* $(this).drag(function(t) {
					if (!(t.dom.parentElement.offsetWidth >= t.dom.offsetWidth)) {
						var e = t.dom.style.left.replace(/px/g, "") - 0
						  , a = t.clientX - t.startX + e - t.dom.offsetLeft;
						a > 0 && (a = 0);
						var i = t.dom.parentElement.offsetWidth - t.dom.offsetWidth;
						a < i && (a = i),
						t.dom.style.left = a + "px"
					}
				}) */
        })
      );
    }),
      (o.prototype.buildHtml = function(t) {
        var role;
        1 === arguments.length &&
          "function" == typeof role &&
          ((t = role), (role = null)),
          (this.originData = this.TEMP.data);
        var e = t.call(this);
        this.originData = this.TEMP.data.concat(r.banker);
        var a = t.call(this, !0);
        this.originData = this.TEMP.data.concat(r.player);
        var i = t.call(this, !0);
        return (
          (this.originData = this.TEMP.data),
          {
            baser: e,
            banker: a,
            player: i
          }
        );
      }),
      (o.prototype.ForDraw = function() {
        var t = e.gametype,
          a = e.type,
          i = void 0;
        "6" === t &&
          (i = (function(t) {
            return /(^sixi$)|(^danshuang$)|(^daxiao$)|(^weidaxiao$)/.test(t)
              ? 21
              : /(^zongdanshuang$)|(^zongweidaxiao$)/.test(t)
                ? 55
                : void 0;
          })(a));
        var n = !e.isToradora && !!/^(4)|(6)|(5)|(13)$/.test(t);
        return {
          status: n,
          num: i
        };
      }),
      (o.prototype.RenderTable = function(e, a, i) {
        function n(t) {
          return void 0 === e[o + "_1"] ? t <= o : void 0 !== e[t + "_1"];
        }
        function isNumber(val) {
          var regPos = /^\d+(\.\d+)?$/; //非负浮点数
          var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
          if (regPos.test(val) || regNeg.test(val)) {
            return true;
          } else {
            return false;
          }
        }
        var t;
        for (var o = a.x || 55, s = a.y || 6, d = "", l = 1; l <= s; l++) {
          d += "<tr>";
          for (var c = 1; n(c); c++) {
            var u = e[c + "_" + l],
              h = (t = ""),
              p = "object" == typeof u ? u.c : u,
              f = "font-prediction";
            if ("string" != typeof u || !isNumber(u))
              if ("object" == typeof u && isNaN(u.c)) {
                if (
                  ((h =
                    'class="' +
                    [u.c, a.isPrediction && u.isLastOne ? f : ""].join(" ") +
                    '" isLast="' +
                    u.isLastOne +
                    '"'),
                  (t = u.ab),
                  i && a.isPrediction && u.isLastOne)
                ) {
                  var v = this.originData[this.originData.length - 1];
                  this.TEMP.prediction[r.banker === v ? "banker" : "player"][
                    i
                  ] = u.c.replace(/^.+\-([a-z]+)$/i, "$1");
                }
              } else
                /^[福禄寿喜]$/.test(p)
                  ? ((h = 'class="font-txt"'), (t = p))
                  : /^\d+$/.test(p)
                    ? ((h = 'class="' + u.ab + '"'), (t = p))
                    : ((h =
                        'class="' +
                        [
                          p,
                          a.isPrediction && a.lastOne === [c, l].join("_")
                            ? f
                            : ""
                        ].join(" ") +
                        '"'),
                      (t = p ? a.txtMap[p] : ""));
            else
              (h =
                'class="' +
                [
                  Number(u) % 2 === 0 ? "font-red" : "font-blue",
                  a.isPrediction && a.lastOne === [c, l].join("_") ? f : ""
                ].join(" ") +
                '"'),
                (t = p);
            var y = p ? "<i " + h + ">" + t + "</i>" : "<i></i>";
            d += '<td xy="' + c + "," + l + '">' + y + "</td>";
          }
          d += "</tr>";
        }
        return "<table>" + d + "</table>";
      }),
      (o.prototype.HandleUpRoadData = function(t) {
        t === !0 && (this.TEMP.roadData = null);
        if (e) {
			t = e.waydata
		}else{
			t=[]
		}
        var a = this;
        // t = $.parseJSON(t),
       (a.TEMP.data = t.reverse()), a.RenderAll("baser");
      }),
      (o.prototype.Trend = function(t, e, i, n) {
        var r,
          o = this,
          s = {},
          d = {},
          i = i || !1,
          l = e.red || "",
          c = e.blue || "",
          h = t.concat(),
          h = $.unique(h);
        var u: any = "";
        $.inArray("和", h) > -1;
        $.each($.unique(h), function(t, e) {
          n && !/^\d+$/.test(e)
            ? "和" != e && (u += "([(" + e + ",)(和,)]+)|")
            : (u += "(" + e + ",)+|");
        }),
          (u = new RegExp(u.slice(0, -1), "g"));
        var p = t.join(",") + ",",
          f = p.match(/^((和,)*)/g)[0];
        var y0;
        return (
          (p = p.replace(/^(和,)*/, "")),
          (r = n ? p.match(u) : p.replace(/和,/g, "").match(u)),
          (r[0] = f + r[0]),
          t.length > 0 &&
            $.each(r, function(t, e) {
              var i = e.slice(0, -1).split(","),
                n: any = {},
                u = "",
                h = o.ForDraw();
              $.each(i, function(e, o) {
                var p = t + 1,
                  f = e + 1;
                /龙/.test(o)
                  ? (o = "" == l ? "font-even" : l)
                  : /虎/.test(o)
                    ? (o = "" == c ? "font-odd" : c)
                    : /和/.test(o)
                      ? h.status
                        ? ((u = h.num ? h.num : o), (o = "font-green"))
                        : (o = "font-green")
                      : "" == o
                        ? h.status
                          ? ((u = h.num ? h.num : "和"), (o = "font-green"))
                          : (o = "icon-green-1")
                        : /双/.test(o)
                          ? ((u = ""), (o = "font-even"))
                          : /单/.test(o)
                            ? ((u = ""), (o = "font-odd"))
                            : /大/.test(o)
                              ? ((u = ""), (o = "font-even"))
                              : /小/.test(o)
                                ? ((u = ""), (o = "font-odd"))
                                : /[福禄寿喜]/.test(o)
                                  ? ((u = o), (o = "font-txt"))
                                  : (u = isNaN(o)
                                      ? o
                                      : Number(o) % 2 === 0
                                        ? "font-red"
                                        : "font-blue"),
                  "icon-green-1" != o && (d[p + "_" + f] = o);
                var v = r.length === t + 1 && i.length === e + 1;
                if (n.x) {
                  var y = n.x == p ? p : n.x,
                    g = n.y + 1;
                  (n = a(y, g, o, s)),
                    (s[n.x + "_" + n.y] = {
                      c: o,
                      _x: p,
                      _y: f,
                      ab: u,
                      isLastOne: v
                    });
                } else
                  (s[p + "_" + f] = {
                    c: o,
                    _x: p,
                    _y: f,
                    ab: u,
                    isLastOne: v
                  }),
                    (n = {
                      x: p,
                      y: f
                    });
              });
            }),
          i
            ? {
                newPos: s,
                oldPos: d
              }
            : s
        );
      }),
      (o.prototype.BigRoad = function(t) {
        var a = (this.C,
        this.Trend(
          this.originData,
          {
            red: "font-even",
            blue: "font-odd"
          },
          1,
          !0
        ));
        e.isToradora ? "big-road-1" : "big-road-simple";
        return (
          "<div drag>" +
          this.RenderTable(a.newPos, {
            klass: "big-road",
            isPrediction: t
          }) +
          "</div>"
        );
      }),
      (o.prototype.PearlRoad = function(t) {
        var a,
          i = (this.C, this.originData),
          n = {},
          r = {};
        $.each(i, function(t, o) {
          var s,
            d,
            l = (t % 6) + 1;
          // d = parseInt(t / 6) + 1;
          d = Math.floor(t / 6) + 1;
          (s = /单/.test(o)
            ? "font-odd"
            : /双/.test(o)
              ? "font-even"
              : /大/.test(o)
                ? "font-even"
                : /小/.test(o)
                  ? "font-odd"
                  : /龙/.test(o)
                    ? "font-even"
                    : /虎/.test(o)
                      ? "font-odd"
                      : /和/.test(o)
                        ? e.isToradora
                          ? "font-green"
                          : "和"
                        : "" == o
                          ? e.isToradora
                            ? "font-green"
                            : "和"
                          : o),
            (n[d + "_" + l] = s),
            t + 1 === i.length && (a = [d, l].join("_")),
            (r[s] = o);
        });
        var o = e.isToradora;
        return (
          "<div drag style='position:absolute;'>" +
          this.RenderTable(n, {
            klass: "pearl-road",
            x: o ? 16 : 10,
            lastOne: a,
            isPrediction: t,
            txtMap: r
          }) +
          "</div>"
        );
      }),
      (o.prototype.TotalCol = function() {
		  function unique1(array){
    var n=[];//一个新的临时数组
    for(var i=0;i<array.length;i++){
        //如果当前数组的第i调已经保存进入临时数组，那么跳过
        //否则把当前项push到临时数组里面
        if(n.indexOf(array[i])==-1){
            n.push(array[i]);
        }
    }
    return n;
}

        var t = this.originData
            .join(",")
            .replace(/和,/g, "")
            .split(","),
          e = [],
          a,
          i = t.concat(),
          n = t.concat();

        var data;
		qw = qw+1;
		var cq = [];
		cq = unique1(n)
		if(qw%3==0){
			cq.push(unique1(n)[0])
			cq.push(unique1(n)[1])
		}else{
			cq.push(unique1(n)[0])
		}
        return (
          $.each(cq, function(t, e) {
			  // console.log($.unique(n));
            a += "(" + e + ",)+|";
          }),	
          (a = new RegExp(a.slice(0, -1), "g")),
          (data = (i.join(",") + ",").match(a)),
          $.each(data, function(t, a) {
            e.push(a.slice(0, -1).split(",").length);
          }),
          e
        );
      }),
      (o.prototype.DownRoad = function(t) {
        var t = (this.C, t || 2),
          e = this.Trend(
            this.originData,
            {
              red: "font-even",
              blue: "font-odd"
            },
            1
          ).oldPos,
          a = this.TotalCol(),
          i = [];
        return /[\d福禄寿喜]/.test(this.TEMP.data[0])
          ? []
          : (2 == t && !e["2_2"] && !e["3_1"]) ||
            (3 == t && !e["3_2"] && !e["4_1"]) ||
            (4 == t && !e["4_2"] && !e["5_1"])
            ? i
            : ($.each(e, function(n, r) {
                var o = n.split("_"),
                  s = {
                    x: o[0],
                    y: o[1]
                  };
                if (s.x > t || (s.x == t && s.y > 1))
                  if (1 == s.y)
                    a[s.x - 2] == a[s.x - 1 - t] ? i.push("龙") : i.push("虎");
                  else {
                    var d = s.x - t + 1;
                    e[d + "_" + s.y]
                      ? i.push("龙")
                      : 2 == s.y
                        ? i.push("虎")
                        : e[s.x - t + 1 + "_" + (s.y - 1)]
                          ? i.push("虎")
                          : i.push("龙");
                  }
              }),
              i);
      }),
      (o.prototype.BigEyeRoad = function(t) {
        var e = this.Trend(this.DownRoad(2), {
          red: "road-icon2-red",
          blue: "road-icon2-blue"
        });
        return (
          "<div drag>" +
          this.RenderTable(
            e,
            {
              klass: "big-eye-road",
              x: 50,
              isPrediction: t
            },
            "dayanlu"
          ) +
          "</div>"
        );
      }),
      (o.prototype.SmallRoad = function(t) {
        var e = this.Trend(this.DownRoad(3), {
          red: "road-icon3-red",
          blue: "road-icon3-blue"
        });
        return (
          "<div drag>" +
          this.RenderTable(
            e,
            {
              klass: "small-road",
              x: 50,
              isPrediction: t
            },
            "xiaolu"
          ) +
          "</div>"
        );
      }),
      (o.prototype.RoachRoad = function(t) {
        var e = this.Trend(this.DownRoad(4), {
          red: "road-icon1-red",
          blue: "road-icon1-blue"
        });
        return (
          "<div drag>" +
          this.RenderTable(
            e,
            {
              klass: "roach-road",
              x: 50,
              isPrediction: t
            },
            "yueyoulu"
          ) +
          "</div>"
        );
      }),
      new o().init();
  }
};
