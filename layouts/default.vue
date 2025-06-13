<template>
    <div>
        <BaseLayout>
            <!-- Header -->
            <BaseHeader
                :title="headerTitle"
                :showBackButton="false"
                currentLogoType="both"
                :show-util="false"
                :show-search-btn="false"
                :has-notification="true"
                :show-chat="false"
                :show-set="true"
                @go-back="handleGoBack"
                @toggle-sidebar="handleToggleSidebar"
            >
                <!-- 유틸 컴포넌트 자체를 넣을 수 있는 방법 -->
                <template #headerUtils> </template>
            </BaseHeader>

            <!-- Page -->
            <BasePage>
                <slot></slot>
            </BasePage>

            <!-- Base Bottom Navigation -->
            <BaseTabbar position="bottom">
                <template v-for="tab in tabs" :key="tab.path">
                    <BaseTabbarItem
                        :path="tab.path"
                        :icon="tab.icon"
                        :label="tab.label"
                    />
                </template>
            </BaseTabbar>

            <!-- Sidebar -->
        </BaseLayout>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import BaseLayout from "@/components/layout/BaseLayout.vue";
import BasePage from "@/components/page/BasePage.vue";
import BaseHeader from "@/components/layout/BaseHeader.vue"; // 업데이트된 BaseHeader 사용
import BaseTabbar from "~/components/tabbar/BaseTabbar.vue";
import BaseTabbarItem from "~/components/tabbar/BaseTabbarItem.vue";

const route = useRoute();
const router = useRouter();

// 헤더 제목 설정
const headerTitle = computed(() => {
    // 라우트에 따른 동적 제목 설정
    switch (route.path) {
        case "/common/home":
            return "건강의신";
        case "/walkingKing":
            return "걸기왕";
        case "/community":
            return "커뮤니티";
        case "/insu":
            return "청구의신";
        case "/common/wholeMenu":
            return "메뉴";
        case "/guide/PubList":
            return "퍼블리싱 가이드";
        default:
            return "건강의 신";
    }
});

// 뒤로가기 버튼 표시 여부

// 이벤트 핸들러
const handleGoBack = () => {
    router.go(-1); // 브라우저 기본 뒤로가기
};

const handleToggleSidebar = () => {
    console.log("사이드바 토글");
    // 사이드바 토글 로직 여기서 구현
};

const tabs = [
    { path: "/common/home", icon: "home", label: "홈" },
    {
        path: "/walkingKing",
        icon: "tab-bar1",
        label: "걷기왕",
    },
    {
        path: "/community",
        icon: "tab-bar2",
        label: "커뮤니티",
        selected: false,
    },
    { path: "/insu", icon: "tab-bar3", label: "청구의신" },
    {
        path: "/common/wholeMenu",
        icon: "tab-bar4",
        label: "메뉴",
    },
];
</script>

<style scoped lang="scss"></style>
