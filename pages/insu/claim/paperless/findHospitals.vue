<template>
  <BaseBody >
    <div>
      <div>다녀온 병원을 자동으로 찾아드려요.</div>
      <div>주민등록번호</div>
      <div style="display: flex; gap: 1rem">
        <button style="border: 1px solid #95a5a6; padding: 1rem">서류없이 청구 가능한 병원 확인</button>
        <button style="border: 1px solid #95a5a6; padding: 1rem">병원 서류 발급 가능한 병원 확인</button>
      </div>

      <button style="width: 100%; margin-top: 1rem; padding: 1rem" @click="clickFindHospitals">MY병원 찾기</button>
    </div>
  </BaseBody>
</template>

<script setup lang="ts">
import BaseBody from '~/components/layout/BaseBody.vue'

const clickFindHospitals = () => {
  navigateTo('/insu/SuccessFIndHospitals')
}
</script>

<style scoped lang="scss"></style>
