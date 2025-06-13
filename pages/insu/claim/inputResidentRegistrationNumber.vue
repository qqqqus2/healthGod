<template>
  <BaseBody >
    <div>주민등록번호를 입력해 주세요</div>
    <div>
      <span>주민등록번호</span>
      <input type="text" />
    </div>
    <button style="width: 100%; margin-top: 1rem; padding: 1rem" @click="clickNext">다음</button>
  </BaseBody>
</template>

<script setup lang="ts">
import BaseBody from '~/components/layout/BaseBody.vue'

const clickNext = () => {
  console.log('clickNext')
  navigateTo('/insu/claim/selectInsuranceCompany')
}
</script>

<style scoped lang="scss"></style>
