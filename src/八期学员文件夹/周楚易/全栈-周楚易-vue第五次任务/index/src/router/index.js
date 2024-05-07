import { createRouter, createWebHistory  } from 'vue-router'
import Home from "@/views/Home.vue";
import HomeList from "@/views/HomeList.vue";
import HomeChosen from "@/views/HomeChosen.vue";

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            redirect:'/home '
        },
        {
            path:'/home',
            component:Home,
            //懒加载，开发中最常用的模式，打包构建应用时，JS包会变得非常大，影响页面加载
            // component:() => import(/* webpackChunkName: "home" */"../views/Home.vue"),
            children: [
                {
                    path:'list',
                    component: () => import("../views/HomeList.vue")
                },
                {
                    path:'chosen/:name',
                    component: HomeChosen,
                    props: true
                }
            ],
        },
        {
            name: "about",
            path: "/about",
            // component:About
            component:() => import(/* webpackChunkName: "about" */"../views/About.vue")
        },

    ]
})

export default router