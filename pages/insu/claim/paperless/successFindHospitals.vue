<template>
  <BaseBody >
    <div style="display: flex; flex-direction: column; gap: 1rem">
      <div>MY병원 찾기로<br />총 3개의 병원을 찾았어요.</div>
      <div>아래 병원을 연결하면 서류없이<br />간편하게 보험을 청구할 수 있어요.</div>

      <div style="display: flex; justify-content: space-between">
        <div>총3건</div>
        <div>전체 선택</div>
      </div>

      <div style="display: flex; gap: 1rem">
        <button style="border: 1px solid #95a5a6; padding: 1rem">서류없이 청구 가능한 병원 확인</button>
        <button style="border: 1px solid #95a5a6; padding: 1rem">병원 서류 발급 가능한 병원 확인</button>
      </div>

      <div>
        <div style="font-size: 14px; border: 1px solid #777777; padding: 1rem">
          <div>고려대학교 안암병원</div>
          <div>서울특별시 성북구 고려대로 73</div>
        </div>
        <div style="font-size: 14px; border: 1px solid #777777; padding: 1rem">
          <div>고려대학교 안암병원</div>
          <div>서울특별시 성북구 고려대로 73</div>
        </div>
        <div style="font-size: 14px; border: 1px solid #777777; padding: 1rem">
          <div>고려대학교 안암병원</div>
          <div>서울특별시 성북구 고려대로 73</div>
        </div>
      </div>

      <button style="width: 100%; margin-top: 1rem; padding: 1rem" @click="clickRegisterHospitals">MY병원 연결</button>
    </div>
  </BaseBody>
</template>

<script setup lang="ts">
import BaseBody from '~/components/layout/BaseBody.vue'

const clickRegisterHospitals = () => {
  console.log('선택한 병원 등록 후 청구의신 서브메인으로 이동')
  navigateTo('/insu/main')
}
</script>

<style scoped lang="scss"></style>
