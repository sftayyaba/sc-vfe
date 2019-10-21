import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

var numeral = require('numeral');

/**
 * Formats a phone number.
 *
 * @param {String} phone
 * @return {Void}
 */
Vue.filter('phone', function (phone) {
    if(phone && phone !== ''){
        return phone.replace(/[^0-9]/g, '')
            .replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    }

});