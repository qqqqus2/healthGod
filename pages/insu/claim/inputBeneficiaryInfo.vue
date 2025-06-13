<template>
  <BaseBody >
    <div style="display: flex; flex-direction: column; gap: 1rem">
      <div>수익자(보험금 받는분) 정보를 입력해 주세요.</div>

      <div style="display: flex; flex-direction: column">
        <div>수익자 이름</div>
        <input type="text" disabled placeholder="홍레몬" />
      </div>

      <div style="display: flex; justify-content: space-between">
        <span>보험금 지급계좌</span>
        <span>+ 지급계좌 추가</span>
      </div>

      <div style="border: 1px solid gainsboro; padding: 1rem">
        <div>DB손해보험 자동이체 계좌</div>
        <div>홍레몬 1235548435465465</div>
      </div>

      <div>최근 보험금 지급계좌</div>
      <div style="border: 1px solid gainsboro; padding: 1rem">
        <div>우리은행 자동이체 계좌</div>
        <div>홍레몬 1235548435465465</div>
      </div>
      <div style="border: 1px solid gainsboro; padding: 1rem">
        <div>신한은행 자동이체 계좌</div>
        <div>홍레몬 1235548435465465</div>
      </div>

      <div>새로운 지급계좌</div>

      <button style="width: 100%; margin-top: 1rem; padding: 1rem" @click="clickNext">확인</button>
    </div>
  </BaseBody>
</template>

<script setup lang="ts">
import BaseBody from '~/components/layout/BaseBody.vue'

const clickNext = () => {
  console.log('clickNext')
  navigateTo('/insu/claim/attachClaimFiles')
}
</script>

<style scoped lang="scss"></style>
