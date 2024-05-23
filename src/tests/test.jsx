const { trackEvent } = require('../../dist/index');

test('trackEvent should log event name and data', () => {
  console.log = jest.fn();

  trackEvent('test_event', { key: 'value' });

  expect(console.log).toHaveBeenCalledWith('Event: test_event', { key: 'value' });
});
