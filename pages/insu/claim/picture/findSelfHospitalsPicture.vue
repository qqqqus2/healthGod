<template>
  <BaseBody >
    <div style="display: flex; flex-direction: column; gap: 1rem">
      <div>다녀온 병원을 검색해 주세요</div>
      <div style="text-align: right">약제비만 청구</div>
      <div style="display: flex; justify-content: space-between">
        <input placeholder="병원 이름을 입렵해 주세요" />
      </div>

      <div>
        <div style="display: flex; justify-content: space-between">
          <div>최근검색</div>
          <div>전체검색</div>
        </div>

        <button @click="clickHospital">
          <span style="display: block">강남세브란스병원</span>
          <span style="display: block">서울특별시 강남구 도곡1동 연주로211</span>
        </button>
        <button>
          <span style="display: block">베스트산부인과의원</span>
          <span style="display: block">서울특별시 강남구 도곡1동 연주로211</span>
        </button>
      </div>
    </div>
  </BaseBody>
</template>

<script setup lang="ts">
import BaseBody from '~/components/layout/BaseBody.vue'

const clickRegisterHospitals = () => {
  console.log('선택한 병원 등록 후 청구의신 서브메인으로 이동')
  navigateTo('/insu/main')
}

const clickHospital = () => {
  // 본인/사족 하단 모달 띄운 후, 주민등록번호 입력 페이지로 이동
  navigateTo('/insu/claim/inputResidentRegistrationNumber')
}
</script>

<style scoped lang="scss"></style>
