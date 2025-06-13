<template>
  <BaseBody >
    <div>주소를 입력해 주세요.</div>
    <div>기본정보는 실손청구가 처음인 경우만 입력해요.</div>
    <div>
      <input type="text" placeholder="주소를 입력하세요" />
      <input type="text" placeholder="상세주소 입력" />
      <div style="display: flex; flex-direction: column">
        <span>이름</span>
        <input type="text" placeholder="이름" />
      </div>
    </div>
    <button style="width: 100%; margin-top: 1rem; padding: 1rem" @click="clickNext">다음</button>
  </BaseBody>
</template>

<script setup lang="ts">
import BaseBody from '~/components/layout/BaseBody.vue'

const clickNext = () => {
  console.log('clickNext')
  navigateTo('/insu/claim/inputMedicalBenefit')
}
</script>

<style scoped lang="scss"></style>
