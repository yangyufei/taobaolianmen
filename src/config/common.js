// import Vue from 'vue';
import Cookies from 'js-cookie';
import $ from 'jquery';
let Base64 = require('js-base64').Base64;

const ON_SCREEN_HEIGHT = 50;
const ON_SCREEN_WIDTH = 50;

let common = {
  // 下载资源
  downloadFile(url) {
    let form = $("<form method='get'>");//定义form表单,通过表单发送请求
    form.attr("style", "display:none");//设置为不显示
    form.attr("action", url);//设置请求路径
    $("body").append(form);//添加表单到页面(body)中
    form.submit();//表单提交
  },
  download(url, fileName) {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.responseType = 'blob'
    xhr.onload = function () {
      // 请求完成
      let blob = this.response
      console.log(blob)
      // 创建隐藏的可下载链接
      let eleLink = document.createElement('a')
      eleLink.download = fileName
      eleLink.style.display = 'none'
      // eleLink.href = url
      eleLink.href = URL.createObjectURL(blob);
      // 触发点击
      document.body.appendChild(eleLink)
      eleLink.click()
      // 然后移除
      document.body.removeChild(eleLink)
    }
    xhr.ontimeout = function (e) {
      //下载超时请重试
      console.log(e)
      // _this.$message.error('下载超时请重试')
    }
    xhr.onerror = function (e) {
      //下载出错
      console.log(e)
      // _this.$message.error('下载出错，请联系管理员')
    }
    // 发送ajax请求
    xhr.send()
  },
  getSession(key) {
    if (window.sessionStorage) {
      let item = sessionStorage.getItem(key)
      if (window.location.href.includes('basejy')) {
        if (item) {
          item = Base64.decode(item);
        }
      }
      return JSON.parse(item);
    }
    return null;
  },
  setSession(key, value) {
    if (window.sessionStorage) {
      if (window.location.href.includes('basejy')) {
        sessionStorage.setItem(key, Base64.encode(JSON.stringify(value)));
      } else {
        sessionStorage.setItem(key, JSON.stringify(value));
      }
    }
  },
  removeSession(key) {
    if (window.sessionStorage) {
      sessionStorage.removeItem(key)
    }
  },
  getLocal(key) {
    if (window.sessionStorage) {
      let item = localStorage.getItem(key)
      if (window.location.href.includes('basejy')) {
        if (item) {
          item = Base64.decode(item);
        }
      }
      return JSON.parse(item);
    }
    return null;
  },
  setLocal(key, value) {
    if (window.localStorage) {
      if (window.location.href.includes('basejy')) {
        localStorage.setItem(key, Base64.encode(JSON.stringify(value)));
      } else {
        localStorage.setItem(key, JSON.stringify(value));
      }
    }
  },
  removeLocal(key) {
    if (window.localStorage) {
      localStorage.removeItem(key)
    }
  },
  setCookie(key, value, exp) {
    Cookies.set(key, JSON.stringify(value), { expires: exp })
  },
  getCookie(key) {
    if (Cookies.get(key)) {
      return JSON.parse(Cookies.get(key))
    }
    return null
  },
  removeCookie(key) {
    Cookies.remove(key)
  },
  // 是否登录
  isLogin() {
    return this.getCookie('userData');
  },
  // 获取当前用户信息
  getUser() {
    if (this.getCookie('userData')) {
      return this.getCookie('userData').member
    }
    return null;
  },
  // 检验必填项是否填入
  checkMustParams(paramsArr, _this) {
    for (let params of paramsArr) {
      if (!_this[params.name]) {
        _this.$message.error(params.msg)
        return false
      }
    }
    return true
  },
  // 初始化数据，重新调用data方法
  initialize(obj) {
    Object.assign(obj.$data, obj.$options.data());
  },
  // 设置点击body区域关闭btnBox
  setBodyCloseBtnBox(vObj, vAttr, index = -1) {
    vObj[vAttr] = !vObj[vAttr];
    $('body').click();

    if (vObj[vAttr]) {
      $('body').one('click', () => {
        if (index == -1) {
          vObj[vAttr] = false;
        } else {
          vObj.$set(vObj[vAttr], index, false);
        }
      });
    }
  },
  /**
   * 把数组列表中的某个值用字符串加“，”连接
   * @param Array list
   * @param String key
   */
  getStringByArray(list, key = 'name') {
    let str = "";
    if (!list) return str;
    for (let item of list) {
      if (item) {
        if (key == 'unobject') {
          str += `${item},`;
        } else {
          if (item[key]) {
            str += `${item[key]},`;
          }
        }
      }
    }
    return str.substring(0, str.length - 1);
  },
  /**
   * 获取可以使用l-table组件奇偶行背景颜色的表格数据
   */
  getBgTableData(data, attr) {
    let arr = data;
    let i = 0;
    arr.forEach(item => {
      if (item[attr]) {
        item[attr].forEach(val => {
          val.i = i++;
        });
      }
    });
    return arr;
  },
  // 获取加载的背景高度
  getLoadingBgHeight(h) {
    return window.innerHeight - h;
  },
  // 限制只能输入数字
  limitInpNum(obj, name, event, vObj) {
    if (obj) {
      obj[name] = event.target.value.replace(/[^\d]/g, '');
    } else {
      vObj[name] = event.target.value.replace(/[^\d]/g, '');
    }
  },
  // 取几位小数
  takeDecimal(target, n) {
    if (target) {
      return (parseInt(parseFloat(target) * Math.pow(10, n)) / Math.pow(10, n)).toFixed(n);
    } else {
      return "";
    }
  },
  // 判断是否是正整数
  checkNumber(theObj) {
    let reg = /^[0-9]+.?[0-9]*$/;
    if (reg.test(theObj)) {
      return true;
    }
    return false;
  },
  addClass(el, cls) {
    if (!el) return
    let arr = el.className.split(" ")
    if (arr.indexOf(cls) === -1) {
      arr.push(cls)
      el.className = arr.join(" ")
    }
  },
  removeClass(el, cls) {
    if (!el) return
    let arr = el.className.split(" ")
    if (arr.indexOf(cls) !== -1) {
      arr.splice(arr.indexOf(cls), 1)
      el.className = arr.join(" ")
    }
  },
  hasClass(el, cls) {
    let arr = el.className.split(" ")
    return arr.indexOf(cls) !== -1
  },
  type(o) {
    if (o === null) return 'null';
    var s = Object.prototype.toString.call(o);
    var t = s.match(/\[object (.*?)\]/)[1].toLowerCase();
    return t === 'number' ? isNaN(o) ? 'nan' : !isFinite(o) ? 'infinity' : t : t;
  },
  clone(a) {
    let arr = Array.prototype.slice.call(arguments, 1)
    let obj = {}
    arr.forEach(t => {
      t && a.forEach(k => {
        if (t[k]) obj[k] = t[k]
      })
    })
    console.log(obj)
    return obj
  },
  pos(el) {
    function Postion(x, y, el) {
      // if (_.isDocument(el)) el = document.doctype ? window.document.documentElement : document.body;
      this.x = x;
      this.y = y;
      this.time = +new Date();
      this.el = el;
      this.width = el.clientWidth; //不包括边框   el.offsetWidth包括边框;
      this.height = el.clientHeight; //el.offsetHeight;
      this.scrollTop = el.scrollTop;
      this.scrollHeight = el.scrollHeight;
      this.offsetHeight = el.offsetHeight;
      this.top = y;
      this.left = x;
      this.right = x + this.width;
      this.bottom = y + this.height;
    }
    var pos = new Postion(el.offsetLeft, el.offsetTop, el);
    var target = el.offsetParent;
    while (target) {
      // if(target.scrollTop){
      //     console.log(target,target.scrollTop)
      // }
      // console.log(target,target.scrollTop)

      pos.x += target.offsetLeft;
      pos.y += target.offsetTop;
      target = target.offsetParent
    }
    // if (offsetPos) {
    //     pos.x -= offsetPos.x;
    //     pos.y -= offsetPos.y;
    // }
    return pos;
  },
  /**
   * 根据时间戳转换日期格式
   * @param {any} dateString
   * @param {中文年月日分隔} fmt
   * @returns
   */
  timestampFormat(dateString, fmt) {
    if (!dateString) {
      return '';
    }

    const date = new Date(dateString)
    let y = date.getFullYear()
    let M = date.getMonth() + 1
    M = M < 10 ? ('0' + M) : M
    let d = date.getDate()
    d = d < 10 ? ('0' + d) : d
    let h = date.getHours()
    h = h < 10 ? ('0' + h) : h
    let m = date.getMinutes()
    m = m < 10 ? ('0' + m) : m
    let s = date.getSeconds()
    s = s < 10 ? ('0' + s) : s

    let result = y + '-' + M + '-' + d;

    if (fmt) {
      if (fmt.indexOf(':') != -1) {
        result = y + '-' + M + '-' + d + ' ' + h + ':' + m;
      } else if (fmt.indexOf('s') != -1) {
        result = y + '-' + M + '-' + d + ' ' + h + ':' + m + ':' + s;
      } else if (fmt.indexOf('c') != -1) {
        result = y + '年' + M + '月' + d + '日';
      } else if (fmt.indexOf('MM月dd日') != -1) {
        result = M + '月' + d + '日';
      } else if (fmt.indexOf('/') != -1) {
        result = M + '/' + d;
      } else if (fmt.indexOf('.') != -1) {
        result = y + '.' + M + '.' + d;
      } else if (fmt.indexOf('m') != -1) {
        result = M + '.' + d;
      } else if (fmt.indexOf('d') != -1) {
        result = d;
      }
    }
    return result;
  },
  format(date, fmt) {
    fmt = fmt || "yyyy-MM-dd hh:mm:ss.S";
    // var date = this.date
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate(); //日期 day_of_month
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var msecond = date.getMilliseconds(); //毫秒
    var quarter = (date.getMonth() + 3) / 3 << 0; // //季度
    var o = {
      "y+|Y+": year, //年份4位特殊处理
      "M+": month,
      "d+|D+": day,
      "h+|H+": hour,
      "m+": minute,
      "s+": second,
      "q+": quarter,
      "S": msecond,
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
  },
  isOnScreen(element) {

    let rect = element.getBoundingClientRect();
    let windowHeight = window.innerHeight || document.documentElement.clientHeight;
    let windowWidth = window.innerWidth || document.documentElement.clientWidth;

    let elementHeight = element.offsetHeight;
    let elementWidth = element.offsetWidth;

    let onScreenHeight = ON_SCREEN_HEIGHT > elementHeight ? elementHeight : ON_SCREEN_HEIGHT;
    let onScreenWidth = ON_SCREEN_WIDTH > elementWidth ? elementWidth : ON_SCREEN_WIDTH;

    // 元素在屏幕上方
    let elementBottomToWindowTop = rect.top + elementHeight;
    let bottomBoundingOnScreen = elementBottomToWindowTop >= onScreenHeight;

    // 元素在屏幕下方
    let elementTopToWindowBottom = windowHeight - (rect.bottom - elementHeight);
    let topBoundingOnScreen = elementTopToWindowBottom >= onScreenHeight;

    // 元素在屏幕左侧
    let elementRightToWindowLeft = rect.left + elementWidth;
    let rightBoundingOnScreen = elementRightToWindowLeft >= onScreenWidth;

    // 元素在屏幕右侧
    let elementLeftToWindowRight = windowWidth - (rect.right - elementWidth);
    let leftBoundingOnScreen = elementLeftToWindowRight >= onScreenWidth;

    return bottomBoundingOnScreen && topBoundingOnScreen && rightBoundingOnScreen && leftBoundingOnScreen;
  },
  // decodeURI解码时报错 URI malformed，把特殊字符编码后传输
  encodeSearchKey(key) {
    const encodeArr = [
      {
        code: "%",
        encode: "%25"
      },
      {
        code: "?",
        encode: "%3F"
      },
      {
        code: "#",
        encode: "%23"
      },
      {
        code: "&",
        encode: "%26"
      },
      {
        code: "=",
        encode: "%3D"
      }
    ]
    return key.replace(/[%?#&=]/g, ($) => {
      for (const k of encodeArr) {
        if (k.code === $) {
          return k.encode
        }
      }
    })
  },
  // 获取跨项目url对象参数
  getUrlParameter() {
    const encodeUserData = this.encodeSearchKey(this.getSession("encodeUserData"))
    const encodePersonInfo = this.encodeSearchKey(this.getSession("encodePersonInfo"))

    return {
      encodeUserData,
      encodePersonInfo
    }
  },
  // 从URL上读取参数
  getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)") // 构造一个含有目标参数的正则表达式对象
    if (!window.location.href.split("?")[1]) return null
    var r = window.location.href.split("?")[1].match(reg) // 匹配目标参数
    if (r != null) return unescape(r[2])
    return null // 返回参数值
  },
  /**
   * JS实现倒计时(天数、时、分、秒)
   * @param {时间戳} value
   */
  countdown(value) {
    let leftTime = value - new Date().getTime() >= 0 ? value - new Date().getTime() : new Date().getTime() - value; //计算剩余的毫秒数
    let hours = parseInt((leftTime / 1000 / 60 / 60) % 24, 10); //计算剩余的小时
    let minutes = parseInt((leftTime / 1000 / 60) % 60, 10); //计算剩余的分钟
    let seconds = parseInt((leftTime / 1000) % 60, 10); //计算剩余的秒数
    let obj = {
      hours, minutes, seconds
    }
    for (let item in obj) {
      if (obj[item] < 10) {
        obj[item] = `0${obj[item]}`
      }
    }
    return `${obj.hours}:${obj.minutes}:${obj.seconds}`
  },

  /**
   *  获取localStorage过期
   * @param {key: string, minite: 分钟(number)}
   */
  ifLocalKeyExpired(key, minite) {
    let keyTimestamp = this.getLocal(key)
    let miniteTimestamp = 1000 * 60 * minite
    let currTimestamp = new Date().getTime()
    if (currTimestamp - keyTimestamp > miniteTimestamp) {
      return true //已过期
    } else {
      return false // 未过期
    }
  },
  // 是否是base64图片
  isBase64(src) {
    return /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@?%\s]*?)\s*$/i.test(src)
  },
};

['Null', 'Undefined', 'Array', 'String', 'Number',
  'Boolean', 'Function', 'RegExp', 'NaN', 'Infinity', // 'Infinite',
  'NodeList', 'Arguments', 'Window', 'TouchEvent', 'MouseEvent', 'Screen', 'Date', 'DOMRect'
].forEach(function (t) {
  common['is' + t] = function (o) {
    return common.type(o) === t.toLowerCase();
  };
});
common.isElement = function (o) {
  return /html.*?element/i.test(common.type(o));
};

common.isObject = function (o) {
  return common.isElement(o) ? true : common.type(o) === "object";
};
common.install = function (Vue) {
  Vue.prototype.$common = Vue.common = common;
};
export default common;
