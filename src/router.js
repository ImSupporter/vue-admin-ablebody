// router.js
import {createRouter, createWebHistory} from 'vue-router';
import DashboardLayout from '@/Layout/LayoutDashboard';
import UserPage from './pages/user-page';
import QnaPage from './pages/qna-page';
import ReportPage from './pages/report-page';
import SuggesstionPage from './pages/suggestion-page';
import LonginPage from '@/pages/login-page'
import UserDetailPage from '@/pages/user-detail-page';
import QnaDetailPage from '@/pages/qna-detail-page';
import NotiPage from '@/pages/noti-page'
import NotiWritePage from '@/pages/noti-write-page'
import store from './store';

// 라우트 정보
// 라우팅을 해주면서 #을 제거해주면서, path에 입력한 경로에 매핑된 컴포넌트를 보여준다.
const route = [
    {
        path: "/", 
        redirect: "/user",
        component: DashboardLayout,
        children:[
            {
                path: 'user',
                component: UserPage,
                name : '유저 관리'
            },
            {
                path: "user/:uid",
                component: UserDetailPage,
                name : '유저 상세 정보'
            },
            {
                path: 'qna',
                component: QnaPage,
                name : '운동생활 관리'
            },
            {
                path: 'qna/:id',
                component: QnaDetailPage,
                name : '운동생활 상세 페이지'
            },
            {
                path: 'report',
                component: ReportPage,
                name : '신고하기'
            },
            {
                path: 'suggestion',
                component: SuggesstionPage,
                name : '제안하기'
            },
            {
                path: 'noti',
                component: NotiPage,
                name: '푸시 및 알림'
            },
            {
                path: 'noti/write',
                component: NotiWritePage,
                name: '푸시 및 알림 작성'
            },
            {
                path: '*',
                redirect: 'user'
            }
        ],
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        component: LonginPage
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: route,
});

router.beforeEach((to, from, next) => {
    if(to.meta.requiresAuth && !store.getters.isLoggedIn){
        next('/login')
        console.log('인증이 필요합니다 ' + store.getters.isLoggedIn)
    }
    else{
        next();
    }
});

//Vue 라우터 인스턴스 생성
export {router};