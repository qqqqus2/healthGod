<template>
  <BaseBody >
    <div style="display: flex; flex-direction: column; gap: 1rem">
      <div>사고(진료) 내용을 입력해 주세요</div>

      <div style="display: flex; flex-direction: column">
        <span>사고(질병) 내용</span>
        <input placeholder="(예) 감기몸살, 장염, 골절" />
      </div>

      <div style="display: flex; flex-direction: column">
        <span>사고 유형</span>
        <select>
          <option>질병</option>
          <option>일반상해</option>
          <option>교통사고</option>
        </select>
      </div>

      <div style="display: flex; flex-direction: column">
        <span>사고(진료) 일자</span>
        <input placeholder="사고(진료) 일자 선택" />
      </div>

      <button @click="clickNext">다음</button>
    </div>
  </BaseBody>
</template>

<script setup lang="ts">
import BaseBody from '~/components/layout/BaseBody.vue'

const clickNext = () => {
  navigateTo('/insu/claim/inputBeneficiaryInfo')
}
</script>

<style scoped lang="scss"></style>
