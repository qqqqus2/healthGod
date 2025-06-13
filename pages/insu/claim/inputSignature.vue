<template>
  <BaseBody >
    <div style="display: flex; flex-direction: column; gap: 1rem">
      <div>본인 자필 서명을 입력해 주세요.</div>
      <div>기본정보는 실손청구가 처음인 경우만 입력해요.</div>
      <div style="display: flex; flex-direction: column">
        <span>본인 자필 서명</span>
        <div style="padding: 4rem; background-color: #f8f9fa"></div>
      </div>
      <div style="display: flex; flex-direction: column">
        <span>직업</span>
        <select>
          <option>직장인</option>
          <option>공무원</option>
          <option>전문직</option>
          <option>자영업자</option>
        </select>
      </div>
      <div style="display: flex; flex-direction: column">
        <span>의료급여 수급권자</span>
        <select>
          <option>해당없음</option>
          <option>1종 또는 2종</option>
        </select>
      </div>
      <button style="width: 100%; margin-top: 1rem; padding: 1rem" @click="clickNext">다음</button>
    </div>
  </BaseBody>
</template>

<script setup lang="ts">
import BaseBody from '~/components/layout/BaseBody.vue'

const clickNext = () => {
  // 서류없이 청구 인지 사진찍어 청구인지에 따라 분기처리

  /*
  // 서류없이 청구
  // 통원/입원 선택한 값에 따라 화면 분기처리
  // 통원 선택
  navigateTo('/insu/claim/selectOutpatientTreatment')
  // 입원 선택
  // navigateTo('/insu/SelectHospitalize')
  */

  // 사진찍어 청구
  navigateTo('/insu/claim/inputAccidentDate')
}
</script>

<style scoped lang="scss"></style>
