"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.linkUrl = exports.httpUrl = void 0;
let httpUrl;
exports.httpUrl = httpUrl;
let linkUrl;
exports.linkUrl = linkUrl;

if (process.env.NODE_ENV === "production") {
  exports.httpUrl = httpUrl = 'http://106.15.44.155:4399';
  exports.linkUrl = linkUrl = 'http://data.cesslab.co.uk/data'; // linkUrl = 'http://121.46.19.38:54558'
} else {
  exports.httpUrl = httpUrl = 'http://106.15.44.155:4399';
  exports.linkUrl = linkUrl = 'http://121.46.19.38:54558';
}