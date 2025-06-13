<template>
  <BaseBody >
    <div>보험사에 청구 가능 여부를 조회하고 있어요</div>
  </BaseBody>
</template>

<script setup lang="ts">
import BaseBody from '~/components/layout/BaseBody.vue'

setTimeout(() => {
  navigateTo('/insu/claim/confirmChargeInfo')
}, 1500)
</script>

<style scoped lang="scss"></style>
