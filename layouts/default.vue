<template>
    <div>
        <BaseLayout>
            <!-- Header -->
            <BaseHeader
                :title="headerTitle"
                :showBackButton="showBackButton"
                :logoType="headerOptions.logoType"
                :logoTypeWithBack="headerOptions.logoTypeWithBack"
                :show-util="headerOptions.showUtil"
                :show-search="headerOptions.showSearch"
                :show-search-btn="headerOptions.showSearchBtn"
                :has-notification="headerOptions.hasNotification"
                :has-notification-dot="headerOptions.hasNotificationDot"
                :has-reward="headerOptions.hasReward"
                :has-reward-dot="headerOptions.hasRewardDot"
                :is-center-title="headerOptions.isCenterTitle"
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
import { ref, computed, provide, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import BaseLayout from "@/components/layout/BaseLayout.vue";
import BasePage from "@/components/page/BasePage.vue";
import BaseHeader from "@/components/layout/BaseHeader.vue"; // 업데이트된 BaseHeader 사용
import BaseTabbar from "~/components/tabbar/BaseTabbar.vue";
import BaseTabbarItem from "~/components/tabbar/BaseTabbarItem.vue";

const route = useRoute();
const router = useRouter();

// 페이지에서 설정할 수 있는 헤더 default 옵션
const headerOptions = ref({
    // 기본 옵션
    showBackButton: undefined,
    customTitle: "",
    logoType: "text",
    logoTypeWithBack: "",

    // 유틸 옵션
    showUtil: false,
    showSearch: false,
    showSearchBtn: false,

    // 알림 옵션
    hasNotification: false,
    hasNotificationDot: false,
    hasReward: false,
    hasRewardDot: false,

    // 레이아웃 옵션
    isCenterTitle: false,
});

// 페이지에서 사용할 수 있도록 provide
provide("setHeaderOptions", (options: Partial<typeof headerOptions.value>) => {
    console.log('\n=== setHeaderOptions called in default.vue ===')
    console.log('Before update - headerOptions.value:', headerOptions.value)
    console.log('Received options:', options)
    
    Object.assign(headerOptions.value, options);
    
    console.log('After update - headerOptions.value:', headerOptions.value)
    console.log('=== end setHeaderOptions ===')
});

// headerOptions 변화 감지
watch(headerOptions, (newVal) => {
    console.log('headerOptions changed:', newVal)
}, { deep: true })

// 헤더 제목 설정
const headerTitle = computed(() => {
    // 페이지에서 사용자 정의 제목이 있으면 우선 사용
    if (headerOptions.value.customTitle) {
        console.log(
            "headerTitle from customTitle:",
            headerOptions.value.customTitle
        );
        return headerOptions.value.customTitle;
    }

    // 라우트에 따른 동적 제목 설정
    let routeTitle = "";
    switch (route.path) {
        case "/common/home":
            routeTitle = "건강의신";
            break;
        case "/walkingKing":
            routeTitle = "걸기왕";
            break;
        case "/community":
            routeTitle = "커뮤니티";
            break;
        case "/insu":
            routeTitle = "청구의신";
            break;
        case "/common/wholeMenu":
            routeTitle = "메뉴";
            break;
        case "/guide/PubList":
            routeTitle = "퍼블리싱 가이드";
            break;
        default:
            routeTitle = "건강의 신";
    }

    console.log("headerTitle from route:", route.path, routeTitle);
    return routeTitle;
});

// 뒤로가기 버튼 표시 여부
const showBackButton = computed(() => {
    // 페쓄원가 설정한 값이 있으면 우선 사용
    if (headerOptions.value.showBackButton !== undefined) {
        console.log(
            "showBackButton from headerOptions:",
            headerOptions.value.showBackButton
        );
        return headerOptions.value.showBackButton;
    }

    // 기본값: BaseHeader의 기본값(true) 사용
    // 라우트별 특별 처리가 필요하다면 여기서 처리
    console.log(
        "showBackButton using BaseHeader default (true):",
        route.path
    );
    return undefined; // BaseHeader의 기본값 사용
});

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
