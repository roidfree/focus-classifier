import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import App from './App.vue'
import Focus from "./pages/Focus.vue"
import FocusAnalysis from "./pages/FocusAnalysis.vue"

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { GiBrain, HiDocumentReport, IoAnalytics, GiHamburgerMenu, BiCaretUp, MdTimerOutlined, CoUser, RiFocusLine  } from "oh-vue-icons/icons"

import VueApexCharts from "vue3-apexcharts";


addIcons(GiBrain, HiDocumentReport, IoAnalytics, GiHamburgerMenu, BiCaretUp, MdTimerOutlined, CoUser, RiFocusLine)

const routes = [
    { path: "/", component: Focus },
    { path: "/focus-analysis", component: FocusAnalysis }
]

const router = createRouter({
    // 4. Provide the history implementation to use. We
    // are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })


const app = createApp(App);
app.use(router)
app.use(VueApexCharts);
app.component("v-icon", OhVueIcon);
app.mount("#app");
