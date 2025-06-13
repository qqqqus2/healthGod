<template>
  <div style="width: 100%">
    <div style="display: flex; justify-content: space-around">
      <template v-for="tab in tabs" :key="tab.to">
        <NuxtLink :to="tab.to" :class="{ active: isActive(tab.to) }" style="font-weight: bold">{{
          tab.title
        }}</NuxtLink></template
      >
    </div>
    <NuxtPage />
  </div>
</template>
<script setup lang="ts">
import { useRoute } from '#app'

const route = useRoute()

const tabs = ref([
  { title: '홈', to: '/community' },
  { title: '마음일기', to: '/community/diary' },
  { title: '패밀리케어', to: '/community/family' }
])
const isActive = (tabTo: string) => route.path === tabTo
</script>

<style scoped>
.active {
  color: #2f69f0;
}
</style>
