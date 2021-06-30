import Vue from "vue";
import app from "./app.vue";

const div = document.createElement("div");
div.id = "app";
document.body.append(div);

new Vue({
  render: (h) => h(app),
}).$mount();
