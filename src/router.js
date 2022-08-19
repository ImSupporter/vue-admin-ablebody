// router.js
import {createRouter, createWebHistory} from 'vue-router';
import DashboardLayout from '@/Layout/LayoutDashboard';
import UserPage from './pages/user-page';
import QnaPage from './pages/qna-page';
import ReportPage from './pages/report-page';
import SuggesstionPage from './pages/suggestion-page';

// 라우트 정보
// 라우팅을 해주면서 #을 제거해주면서, path에 입력한 경로에 매핑된 컴포넌트를 보여준다.
const route = [
    {path: "/", component: DashboardLayout,
     children:[
        {
            path: 'user',
            component: UserPage,
            name : '유저 관리'
        },
        {
            path: 'qna',
            component: QnaPage,
            name : '운동생활 관리'
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
        }
     ]}
];

// Vue 라우터 인스턴스 생성
export const router = createRouter({
    history: createWebHistory(),
    routes: route,
  });