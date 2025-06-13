<template>
    <NuxtLink v-slot="{ navigate, isActive }" custom :to="path">
        <button
            type="button"
            role="tab"
            class="tabbar-btn"
            :class="icon"
            :aria-selected="isActive"
            @click="navigate()"
        >
            <i v-if="icon" class="icon" :class="icon" aria-hidden="true"></i>
            <span class="text">{{ label }}</span>
        </button>
    </NuxtLink>
</template>

<script setup lang="ts">
import type { BaseTabbarItemProps } from "@/types/fo-ui/tabbaritem.type";

withDefaults(defineProps<BaseTabbarItemProps>(), {
    path: "",
    icon: "",
    label: "",
});
</script>
<style scoped lang="scss">
@use "@/assets/scss/common/_variable" as vars;
@use "@/assets/scss/common/_mixin" as mixin;
.tabbar-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex: 1;
    position: relative;
    height: var(--c-tabbar-height);
    color: rgb(var(--gray-08));
    @include mixin.rippleEffectWhite;
    .text {
        line-height: 1.125rem;
    }
    &[aria-selected="true"] {
        .icon {
            background-color: rgb(var(--black));
        }
        .text {
            color: rgb(var(--black));
            font-weight: vars.$bold;
        }
    }
}
</style>
