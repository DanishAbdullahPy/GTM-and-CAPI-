"use strict";

var _require = require('../../dist/index'),
  trackEvent = _require.trackEvent;
test('trackEvent should log event name and data', function () {
  console.log = jest.fn();
  trackEvent('test_event', {
    key: 'value'
  });
  expect(console.log).toHaveBeenCalledWith('Event: test_event', {
    key: 'value'
  });
});