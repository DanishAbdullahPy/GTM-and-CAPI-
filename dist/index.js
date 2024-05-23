"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trackEvent = trackEvent;
function trackEvent(eventName, data) {
  console.log("Event: ".concat(eventName), data);
}