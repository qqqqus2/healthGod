<template>
  <BaseBody >
    <div style="display: flex; flex-direction: column; gap: 1rem">
      <div>직업을 선택해주세요</div>
      <div>가족정보는 실손청구가 처음인 경우만 입력해요</div>

      <div style="display: flex; flex-direction: column">
        <span>직업</span>
        <select>
          <option>직장인</option>
          <option>공무원</option>
          <option>전문직</option>
          <option>자영업자</option>
        </select>
      </div>

      <div style="display: flex; justify-content: space-between">
        <div>가족 관계</div>
        <input placeholder="(예)자녀, 남편, 배우자 등" />
      </div>

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
  navigateTo('/insu/claim/inputAddress')
}
</script>

<style scoped lang="scss"></style>
