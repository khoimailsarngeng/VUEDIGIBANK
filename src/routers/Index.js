import Vue from 'vue';
import Router from 'vue-router';
import FrontEndLayout from '../layouts/frontendLayout.vue';
import Home from '../views/Home/home.vue';
import Individual from '../views/Home/individual.vue';
import Corporate from '../views/Home/corporate.vue';
const route = [
    {
        path: '/',
        component: FrontEndLayout,      
        meta: {
          requiresAuth: true
        }, // check authication krn ja ja khao nar luk thar br tg karn check krn man sai false
        children : [
          {
            path: '/home',
            component: Home,
          },
          {
            path : '/individual',
            component : Individual
          },
          {
            path : '/corporate',
            component : Corporate
          }
        ]        
    }
]

// Always leave this as last one
// if (process.env.MODE !== 'ssr') {
//     route.push({
//         path: '*',
//         component: () =>
//             import('../pages/ERROR404.vue')
//     })
// }

export default route