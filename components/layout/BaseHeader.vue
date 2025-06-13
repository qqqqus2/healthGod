<template>
    <header
        ref="headerRef"
        :class="[
            'c-header',
            {
                h_search: showSearch,
                'bg-transparent': title === '건강의신',
                sticky: isSticky,
            },
        ]"
    >
        <div class="c-header-inner">
            <!-- 뒤로가기 버튼 -->
            <button
                v-if="showBackButton"
                type="button"
                class="c-btn c-icon back"
                aria-label="이전으로 돌아가기"
                @click="$emit('goBack')"
            >
                <i class="icon back" aria-hidden="true" />
            </button>

            <!-- 타이틀 -->
            <h1
                :class="[
                    'h_title',
                    {
                        center: isCenterTitle,
                        'healthGod-logo': title === '건강의신',
                    },
                ]"
            >
                <strong
                    v-if="
                        currentLogoType === 'both' || currentLogoType === 'text'
                    "
                    :style="{ fontSize: currentLogoType === 'both' ? '0' : '' }"
                    >{{ title }}</strong
                >
                <nuxt-link
                    to="/"
                    title="홈으로 이동"
                    v-if="
                        currentLogoType === 'both' ||
                        currentLogoType === 'image'
                    "
                >
                    <i
                        :title="title"
                        :class="{ 'health-god-icon': title === '건강의신' }"
                    />
                </nuxt-link>
            </h1>

            <!-- 검색 -->
            <div v-if="showSearch" class="search_input">
                <div class="c-inp-el">
                    <label>
                        <input
                            type="text"
                            name="searchInput"
                            id="searchInput"
                            placeholder="키워드를 입력해주세요."
                            class="c-inp"
                        />
                    </label>
                    <button type="button" class="clear-btn" aria-label="삭제" />
                    <button
                        type="button"
                        class="c-btn c-icon"
                        aria-label="검색"
                    >
                        <i class="icon search" aria-hidden="true" />
                    </button>
                </div>
                <button
                    type="button"
                    class="c-btn c-icon"
                    aria-label="검색 취소"
                >
                    <i class="icon close" aria-hidden="true" />
                </button>
            </div>

            <!-- 유틸 버튼 -->
            <div v-if="showUtil" class="c-header-util">
                <router-link
                    v-if="showSearchBtn"
                    to="allmenusearch"
                    class="c-btn c-icon search"
                    aria-label="검색"
                >
                    <i class="icon search" aria-hidden="true" />
                </router-link>
                <router-link
                    v-if="hasNotification"
                    to="notification"
                    class="c-btn c-icon noti"
                    aria-label="알림 미확인 없음"
                >
                    <i class="icon noti" aria-hidden="true" />
                </router-link>
                <router-link
                    v-if="hasNotificationDot"
                    to="notification"
                    class="c-btn c-icon noti"
                    aria-label="알림 미확인 5건"
                >
                    <i class="icon noti" aria-hidden="true" />
                    <span class="c-badge round xxs">
                        <span class="text">5</span>
                    </span>
                </router-link>
                <router-link
                    v-if="showLucky"
                    to="lucky"
                    class="c-btn c-icon lucky"
                    aria-label="행운복권 없음"
                >
                    <i class="icon lucky" aria-hidden="true" />
                </router-link>
                <router-link
                    v-if="showLuckyDot"
                    to="lucky"
                    class="c-btn c-icon lucky"
                    aria-label="행원복권 미확인 5건"
                >
                    <i class="icon lucky" aria-hidden="true" />
                    <span class="c-badge round xxs">
                        <span class="text">5</span>
                    </span>
                </router-link>
                <router-link
                    v-if="showChat"
                    to="/community/inbox"
                    class="c-btn c-icon chat"
                    aria-label="쪽지함"
                >
                    <i class="icon chat" aria-hidden="true" />
                </router-link>
                <router-link
                    v-if="showChatDot"
                    to="/community/inbox"
                    class="c-btn c-icon chat"
                    aria-label="새로운 쪽지 있음"
                >
                    <i class="icon chat" aria-hidden="true" />
                    <span class="c-badge round xxs">
                        <span class="text">N</span>
                    </span>
                </router-link>
                <router-link
                    v-if="showSet"
                    to="seeting"
                    class="c-btn c-icon set"
                    aria-label="설정"
                >
                    <i class="icon set" aria-hidden="true" />
                </router-link>
                <button
                    v-if="showAllMenu"
                    type="button"
                    class="c-btn c-icon menu"
                    aria-label="커뮤니티 전체메뉴"
                    @click="$emit('toggleSidebar')"
                >
                    <i class="icon menu" aria-hidden="true" />
                </button>
                <button
                    v-if="showShare"
                    type="button"
                    class="c-btn c-icon share"
                    aria-label="공유하기"
                >
                    <i class="icon share" aria-hidden="true" />
                </button>
                <div
                    v-if="showMore"
                    :class="['c-dropdown', { 'is-show': isDropdownVisible }]"
                >
                    <button
                        type="button"
                        class="c-dropdown-btn bottom"
                        :aria-expanded="isDropdownVisible.toString()"
                        aria-label="더보기"
                        @click="toggleDropdown"
                    >
                        <i class="icon more" aria-hidden="true" />
                    </button>
                    <!-- 드롭다운 패널 -->
                    <div
                        v-show="isDropdownVisible"
                        class="c-dropdown-panel"
                        style="--dropdown-top: 30px; --dropdown-right: 0px"
                    >
                        <div class="c-dropdown-menu">
                            <ul class="c-dropdown-menu" role="menu">
                                <li class="c-dropdown-item" role="menuitem">
                                    <button
                                        type="button"
                                        class="c-btn c-link inline white"
                                    >
                                        <span class="text">응원하기</span>
                                    </button>
                                </li>
                                <li class="c-dropdown-item" role="menuitem">
                                    <button
                                        type="button"
                                        class="c-btn c-link inline white"
                                    >
                                        <span class="text">참가 취소하기</span>
                                    </button>
                                </li>
                                <li class="c-dropdown-item" role="menuitem">
                                    <button
                                        type="button"
                                        class="c-btn c-link inline white"
                                    >
                                        <span class="text"
                                            >챌린지 자세히 보기</span
                                        >
                                    </button>
                                </li>
                                <li class="c-dropdown-item" role="menuitem">
                                    <button
                                        type="button"
                                        class="c-btn c-icon c-link inline white"
                                    >
                                        <i
                                            class="icon pen"
                                            aria-hidden="true"
                                        />
                                        <span class="text">수정</span>
                                    </button>
                                </li>
                                <li class="c-dropdown-item" role="menuitem">
                                    <button
                                        type="button"
                                        class="c-btn c-icon c-link inline white"
                                    >
                                        <i
                                            class="icon del"
                                            aria-hidden="true"
                                        />
                                        <span class="text">삭제</span>
                                    </button>
                                </li>
                                <li class="c-dropdown-item" role="menuitem">
                                    <button
                                        type="button"
                                        class="c-btn c-icon c-link inline white"
                                    >
                                        <i
                                            class="icon police"
                                            aria-hidden="true"
                                        />
                                        <span class="text">신고하기</span>
                                    </button>
                                </li>
                                <li class="c-dropdown-item" role="menuitem">
                                    <button
                                        type="button"
                                        class="c-btn c-icon c-link inline white"
                                    >
                                        <i
                                            class="icon info"
                                            aria-hidden="true"
                                        />
                                        <span class="text">차단하기</span>
                                    </button>
                                </li>
                                <li class="c-dropdown-item" role="menuitem">
                                    <button
                                        type="button"
                                        class="c-btn c-icon c-link inline white"
                                    >
                                        <i
                                            class="icon info-off"
                                            aria-hidden="true"
                                        />
                                        <span class="text">차단해제</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, defineProps, defineEmits } from "vue";

const props = defineProps({
    pageType: { type: String, default: "" },
    title: { type: String, default: "Title" }, // 기본 타이틀
    logoType: { type: String, default: "both" }, // "both", "text", "image" 중 하나
    logoTypeWithBack: { type: String, default: "" }, // 뒤로가기 버튼 있을 때의 logoType
    showBackButton: { type: Boolean, default: false }, // 뒤로가기 버튼 표시 여부
    showUtil: { type: Boolean, default: false }, // 유틸 버튼 표시 여부
    showSearch: { type: Boolean, default: false }, // 검색 필드 표시 여부
    showSearchBtn: { type: Boolean, default: false }, // 검색 버튼 표시
    showChat: { type: Boolean, default: false }, // 쪽지함 없음
    showChatDot: { type: Boolean, default: false }, // 쪽지함 있음
    showLucky: { type: Boolean, default: false }, // 행운복권 없음
    showLuckyDot: { type: Boolean, default: false }, // 행운복권 있음
    showSet: { type: Boolean, default: false }, // 설정
    showAllMenu: { type: Boolean, default: false }, // 전체메뉴
    showShare: { type: Boolean, default: false }, // 공유하기
    showMore: { type: Boolean, default: false }, // 더보기
    hasNotification: { type: Boolean, default: false }, // 공지 버튼 표시 여부
    hasNotificationDot: { type: Boolean, default: false }, // 공지 알림 여부
    isCenterTitle: { type: Boolean, default: false }, // 타이틀 가운데 정렬 여부
});

defineEmits(["toggleSidebar", "goBack"]);

const isDropdownVisible = ref(false);
const isSticky = ref(false);
const headerRef = ref(null);
let headerHeight = 0;

// 뒤로가기 버튼 상태에 따라 logoType 결정
const currentLogoType = computed(() => {
    if (props.showBackButton && props.logoTypeWithBack) {
        return props.logoTypeWithBack;
    }
    return props.logoType;
});

// 스크롤 이벤트 핸들러
const handleScroll = () => {
    const scrollY = window.scrollY;
    isSticky.value = scrollY >= headerHeight;
};

// 생명주기 훅들
onMounted(() => {
    // 헤더 높이 측정
    if (headerRef.value) {
        headerHeight = headerRef.value.offsetHeight;
    }
    
    // 스크롤 이벤트 리스너 추가
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    // 스크롤 이벤트 리스너 제거
    window.removeEventListener('scroll', handleScroll);
});

const toggleDropdown = () => {
    isDropdownVisible.value = !isDropdownVisible.value;
};
</script>

<style lang="scss">
@use "@/assets/scss/common/_variable" as vars;
@use "@/assets/scss/common/_mixin" as mixin;
/* S : Header */
.c-header {
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: vars.$header-height;
    background-color: rgb(var(--white));
    &.bg-transparent {
        background-color: transparent;
    }
    .h_title {
        display: flex;
        align-items: center;
        height: 3.4rem;
        font-size: var(--num-18);
        font-weight: vars.$regular;
        letter-spacing: -0.0375rem;
        // 건강의신 타이틀 전용 스타일
        .health-god-icon {
            display: inline-block;
            width: 9.5rem;
            height: 2.2rem;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='26' viewBox='0 0 96 26' fill='none'%3E%3Cpath d='M64.2869 24.2801V3.10254H69.7747V24.2801H64.2869ZM64.2833 22.5153C63.6536 22.8094 62.8714 23.03 61.9364 23.1771C61.0206 23.3058 60.0857 23.3701 59.1317 23.3701H46.1016V18.9581H59.3034C60.2002 18.9581 61.0969 18.8938 61.9937 18.7651C62.9095 18.6364 63.6727 18.4434 64.2833 18.186V22.5153Z' fill='black'/%3E%3Cpath d='M33.3227 14.8105C36.2352 14.8105 38.5425 15.2149 40.2446 16.0235C41.9467 16.8129 42.7977 18.1221 42.7977 19.9512C42.7977 21.761 41.9372 23.0606 40.2162 23.85C38.5141 24.6587 36.2163 25.063 33.3227 25.063C30.4291 25.063 28.1218 24.6587 26.4008 23.85C24.6987 23.0606 23.8477 21.761 23.8477 19.9512C23.8477 18.1221 24.6987 16.8129 26.4008 16.0235C28.1029 15.2149 30.4102 14.8105 33.3227 14.8105ZM33.3227 21.1064C36.3108 21.1064 37.8049 20.7213 37.8049 19.9512C37.8049 19.1618 36.3108 18.7671 33.3227 18.7671C30.3156 18.7671 28.8121 19.1618 28.8121 19.9512C28.8121 20.7213 30.3156 21.1064 33.3227 21.1064Z' fill='black'/%3E%3Cpath d='M78.3688 3.17188C78.3688 3.17188 77.3378 7.81236 78.9166 11.6629C79.141 11.2126 79.3731 10.7852 79.6089 10.3768C78.1025 7.03386 78.3688 3.17188 78.3688 3.17188Z' fill='black'/%3E%3Cpath d='M90.0098 3.14844V14.1658V18.3712H95.4422V14.1658V3.14844H90.0098Z' fill='black'/%3E%3Cpath d='M81.4822 19.8127V16.1279H76.0498V20.7379V23.207V24.2488H86.6196H95.4416V19.8127H86.6196H81.4822Z' fill='black'/%3E%3Cpath d='M88.9824 15.1853V10.1251C86.8787 9.9915 83.782 8.83519 83.782 3.17578H80.5751H78.3686C74.9677 7.07211 73.0617 11.3691 71.9775 15.1853H77.5203C77.8893 14.029 78.3078 12.9605 78.7681 11.9912C78.7681 11.9836 78.7681 11.9721 78.7681 11.9645C78.8175 11.8614 78.8708 11.766 78.9202 11.6668C77.3415 7.81627 78.3724 3.17578 78.3724 3.17578C78.3724 3.17578 78.1061 7.03777 79.6126 10.3807C80.2707 11.8424 81.2941 13.1093 82.6788 13.9336C83.7174 14.5518 84.8929 14.9182 86.0874 15.0861C86.9471 15.2082 87.8069 15.1853 88.6742 15.1853C88.6895 15.1853 88.9862 15.1853 88.9862 15.1853H88.9824Z' fill='black'/%3E%3Cpath d='M34.8917 7.41111C35.1542 6.1365 35.2835 4.70161 35.2835 3.10645H23.2812V7.27754H29.5202C29.5202 8.34989 28.8658 9.18945 27.5534 9.80005C26.2409 10.4106 25.1948 10.7159 23.2812 10.7159V14.9443C26.1116 14.9443 28.4131 14.5741 30.1973 13.8299C30.1973 13.8299 34.1233 12.3035 34.8917 7.40729V7.41111Z' fill='black'/%3E%3Cpath d='M42.7745 3.10254H37.5361V14.5702H42.7745V10.7655H44.8669V6.54474H42.7745V3.10254Z' fill='black'/%3E%3Cpath d='M11.6105 7.41111C11.873 6.1365 12.0023 4.70161 12.0023 3.10645H0V7.27754H6.23891C6.23891 8.34989 5.58459 9.18945 4.27213 9.80005C2.95968 10.4106 1.91352 10.7159 0 10.7159V14.9443C2.83034 14.9443 5.13189 14.5741 6.91606 13.8299C6.91606 13.8299 10.842 12.3035 11.6105 7.40729V7.41111Z' fill='black'/%3E%3Cpath d='M15.2134 6.90728H13.1211V11.1318H15.2134V14.5702H20.4556V3.10254H15.2134V6.90728Z' fill='black'/%3E%3Cpath d='M18.3135 20.0196H12.5843H5.28406V16.2148H0V24.2479H12.5843H18.3135H18.8271H20.4553V20.0196H18.8271H18.3135Z' fill='black'/%3E%3Cpath d='M44.0408 3.27068C45.8368 5.58373 50.5731 8.84957 55.1504 3.40854C54.1607 1.02078 50.5531 -2.34964 44.0408 3.27068Z' fill='%2300BF59'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M63.7466 10.8682C63.7466 15.8888 59.7441 19.96 54.8054 19.96C49.8668 19.96 45.8643 15.8901 45.8643 10.8682C45.8643 5.84635 49.8668 1.77637 54.8054 1.77637C59.7441 1.77637 63.7466 5.84635 63.7466 10.8682ZM55.9214 13.2348C55.4833 12.7595 54.6855 13.0469 54.6598 13.7076L54.5558 16.4537C54.5436 16.771 54.814 17.0111 55.1199 16.9726C56.0621 16.8693 56.9505 16.547 57.7042 16.0555C57.9649 15.8876 58.0163 15.5205 57.7972 15.2829L55.9202 13.236L55.9214 13.2348ZM54.6806 5.6311C54.6806 5.16823 55.0918 4.80864 55.5555 4.87334C58.4189 5.28395 60.6067 7.73764 60.6067 10.6517C60.6067 11.9868 60.143 13.2199 59.3611 14.2091C59.0698 14.5562 58.5265 14.5811 58.2072 14.2601L56.696 12.7707C56.4439 12.5144 56.3913 12.1286 56.5895 11.8338C56.8147 11.4866 56.9468 11.076 56.9468 10.6393C56.9468 9.59905 56.2175 8.72558 55.2362 8.48171C54.9045 8.39212 54.6794 8.08354 54.6794 7.75008V5.6311H54.6806Z' fill='%23FFC516'/%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
        }
    }
    .c-btn.c-icon {
        flex: 0 0 auto;
        align-items: center;
        justify-content: center;
        width: 1.5rem;
        height: 1.5rem;

        .icon {
            width: 2rem;
            height: 2rem;
            mask-size: contain;
            background-size: contain;
            &.back {
                width: 1.5rem;
                height: 1.5rem;
                mask-position: var(--c-header-icon-position);
                background-position: var(--c-header-icon-position);
            }
            &.set {
                width: 1.5rem;
                height: 1.5rem;
            }
        }
        .dot {
            position: absolute;
            top: 0.2rem;
            right: 0.6rem;
            background-color: var(--red);
        }
    }
    .c-badge {
        position: absolute;
        // top: -0.75rem;
        // right: -0.5rem;
        top: 0;
        right: 0;
        background-color: #ff6a6a;
        color: rgb(var(--white));
    }
    .c-dropdown-panel {
        padding: 8px;
        .c-btn.c-link,
        .c-btn.c-icon .text {
            font-size: var(--num-13);
        }
    }
    .c-header-util {
        // overflow: hidden;
        display: flex;
        flex: 0 0 auto;
        align-items: center;
        gap: 0.5rem;
    }
    .c-header-inner {
        display: flex;
        align-items: center;
        position: relative;
        width: 100%;
        height: 100%;
        padding-right: 1rem;
        padding-left: 1rem;
        &:has(.c-badge) {
            padding-right: 0;
            .h_title {
                align-items: flex-end;
            }
            .c-btn.c-icon {
                align-items: flex-end;
                justify-content: flex-start;
            }
            .c-header-util {
                .c-btn.c-icon {
                    width: 2.125rem;
                    height: 2.125rem;
                }
            }
        }
    }
    &.h_search {
        .h_title {
            position: absolute;
            z-index: -1;
            color: transparent;
        }
    }
    &.is-shadow {
        box-shadow: var(--c-header-shadow);
    }
    &:has(.c-header-util) {
        .h_title.center {
            padding-right: 0;
        }
    }
    &:has(+ main .is-sticky) {
        box-shadow: unset;
    }
    // contents 상단에 고정으로 된 부분이 있는경우 header shadow 제거 search_head에 추가
    &:has(+ .l-page .chead .search_head) {
        &.is-shadow {
            box-shadow: none;
            + .l-page .chead .search_head {
                box-shadow: var(--c-header-shadow);
            }
        }
        + .l-page .cbody {
            margin-top: 4.5rem;
        }
    }
    // contents 상단에 tabs 가 고정인 경우
    &:has(+ .l-page > .c-tabs.box) {
        &.is-shadow {
            box-shadow: none;
            + .l-page > .c-tabs.box {
                box-shadow: var(--c-header-shadow);
            }
        }
    }
}
/* E : Header */
</style>
