<template>
  <BaseBody >
    <div style="display: flex; flex-direction: column; gap: 1rem">
      <div>가족 주민번호를 입력해 주세요</div>
      <div>가족정보는 실손청구가 처음인 경우만 입력해요</div>

      <div style="display: flex; justify-content: space-between">
        <div>가족 주민등록번호</div>
        <input placeholder="가족 이름을 입력해 주세요" />
      </div>

      <div style="display: flex; justify-content: space-between">
        <div>가족 이름</div>
        <input placeholder="가족 이름을 입력해 주세요" />
      </div>

      <button @click="clickNext">확인</button>
    </div>
  </BaseBody>
</template>

<script setup lang="ts">
import BaseBody from '~/components/layout/BaseBody.vue'

const clickNext = () => {
  console.log('선택한 병원 등록 후 청구의신 서브메인으로 이동')
  navigateTo('/insu/claim/inputFamilyRelationship')
}
</script>

<style scoped lang="scss"></style>
