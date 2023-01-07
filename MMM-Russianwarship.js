'use strict';

Module.register('MMM-Russianwarship', {
  defaults: {
    display: 'both', //'icon', 'text', or 'both'
    updateInterval: 60, // hourly
    stats: 'all', //'all' or 'personnel'
  },
  start: function () {
    Log.info('Starting module: ' + this.name);

    // Add custom filters
    this.addFilters();

    // load data
    this.load();

    // schedule refresh
    setInterval(this.load.bind(this), this.config.updateInterval * 60 * 1000);
  },
  load: function () {
    this.sendSocketNotification('GET_DATA');
  },
  socketNotificationReceived: function (notification, payload) {
    var that = this;
    switch (notification) {
      case 'DATA':
        that.data.losses = payload;
        that.loaded = true;
        that.updateDom(0);
        break;
      case 'ERR':
        console.error('error :(', payload);
        break;
      default:
        console.error('wrong socketNotification', notification, payload);
        break;
    }
  },
  getStyles: function () {
    return [
      'https://use.fontawesome.com/releases/v5.0.6/css/all.css',
      'MMM-Russianwarship.css',
    ];
  },
  getTranslations: function () {
    return {
      en: 'translations/en.json',
      uk: 'translations/uk.json',
    };
  },
  getTemplate() {
    return 'template.njk';
  },
  getTemplateData() {
    return {
      data: this.data.losses,
      display: this.config.display,
      stats: this.config.stats,
    };
  },

  addFilters() {
    this.nunjucksEnvironment().addFilter(
      'getLoss',
      function (increase) {
        if (!increase || increase === 0) return '';
        else return '+' + increase;
      }.bind(this)
    );
  },
});
