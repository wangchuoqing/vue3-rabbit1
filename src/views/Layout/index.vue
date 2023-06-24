<script setup>
import LayoutNav from './components/LayoutNav.vue';
import LayoutHeader from './components/LayoutHeader.vue';
import LayoutFooter from './components/LayoutFooter.vue';
import LayoutFixed from './components/LayoutFixed.vue';

// 触发获取导航列表的action
import { useCategoryStore } from '@/stores/category';
import { onMounted } from 'vue';
const categoryStore = useCategoryStore()

onMounted(()=>{
    categoryStore.getCategory()
})
</script>

<template>
    <!-- 吸顶导航 -->
    <LayoutFixed />
    <!-- 登录 -->
    <LayoutNav />
    <!-- 普通导航 -->
    <LayoutHeader />
    <!-- 二级路由组件出口 -->
    <RouterView />
    <!-- 底部 -->
    <LayoutFooter />
</template>
