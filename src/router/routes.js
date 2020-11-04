const routes = [{
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      //Main Pages
      {
        path: '',
        component: () => import('pages/Index.vue')
      },
      {
        path: '/about',
        component: () => import('pages/main/About.vue')
      },
      {
        path: '/newpage',
        component: () => import('pages/main/Newpage.vue')
      }
     
    ]
  },

]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
