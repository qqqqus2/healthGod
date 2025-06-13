<template>
  <BaseBody >
    <div style="display: flex; flex-direction: column; gap: 1rem">
      <div>다녀온 병원을 선택해주세요.</div>
      <div>최근 3년간<br />MY병원 진료내역이에요.</div>

      <div style="display: flex; justify-content: space-between; padding: 1rem; border: 1px solid gray">
        <button>통원</button>
        <button>입원</button>
      </div>
      <!-- 통원 탭 -->
      <div>
        <div>총 2건의 병원을 찾았어요.</div>
      </div>

      <!-- 입원 탭 -->
      <div>총 1건의 병원을 찾았어요.</div>

      <div style="border: 1px solid gainsboro; text-align: center">
        <div>찾고있는 병원이 없나요?</div>
        <button @click="clickFindSelfHospitals">직접 병원 찾기</button>
      </div>
    </div>
  </BaseBody>
</template>

<script setup lang="ts">
import BaseBody from '~/components/layout/BaseBody.vue'

const clickFindHospitals = () => {
  navigateTo('/insu/claim/successFindHospitals')
}

const clickFindSelfHospitals = () => {
  navigateTo('/insu/claim/findSelfHospitals')
}
</script>

<style scoped lang="scss"></style>
