const request = require('request');
const NodeHelper = require('node_helper');

module.exports = NodeHelper.create({
  socketNotificationReceived(notification, payload) {
    var that = this;

    request(
      'https://russianwarship.rip/api/v1/statistics/latest',
      function (error, response, body) {
        if (error) {
          console.error('GET_DATA error:', error.message);

          return that.sendSocketNotification('ERR', {
            type: 'request error',
            msg: error,
          });
        }

        if (response.statusCode !== 200) {
          console.error('GET_DATA wrong status code:', response.statusCode);

          return that.sendSocketNotification('ERR', {
            type: 'request statusCode',
            msg: response && response.statusCode,
          });
        }

        if (!error && response.statusCode === 200) {
          let data;

          try {
            data = JSON.parse(body);
          } catch (e) {
            console.error('GET_DATA json parse:', e.message);

            return that.sendSocketNotification('ERR', {
              type: 'request error',
              msg: error,
            });
          }

          that.sendSocketNotification('DATA', data.data);
        }
      }
    );
  },
});
