import { ref } from 'vue';
import { defineStore } from 'pinia';
import { getCategoryAPI } from '@/apis/layout';

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const useCategoryStore = defineStore('category', () => {
    // 导航列表的逻辑

    // state 导航列表数据
    const categoryList = ref([]);
    // action 获取导航数据的方法
    const getCategory = async () => {
        const res = await getCategoryAPI();
        categoryList.value = res.data.result;
    };
    return {
        categoryList,
        getCategory,
    };
});
