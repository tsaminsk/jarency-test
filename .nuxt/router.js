import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _d30c1bce = () => interopDefault(import('..\\pages\\accounts\\index.vue' /* webpackChunkName: "pages_accounts_index" */))
const _2fa6963b = () => interopDefault(import('..\\pages\\documentation\\index.vue' /* webpackChunkName: "pages_documentation_index" */))
const _d3e8babe = () => interopDefault(import('..\\pages\\services\\index.vue' /* webpackChunkName: "pages_services_index" */))
const _11acbe46 = () => interopDefault(import('..\\pages\\support\\index.vue' /* webpackChunkName: "pages_support_index" */))
const _dd60a902 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/accounts",
      component: _d30c1bce,
      name: "accounts"
    }, {
      path: "/documentation",
      component: _2fa6963b,
      name: "documentation"
    }, {
      path: "/services",
      component: _d3e8babe,
      name: "services"
    }, {
      path: "/support",
      component: _11acbe46,
      name: "support"
    }, {
      path: "/",
      component: _dd60a902,
      name: "index"
    }],

    fallback: false
  })
}
