<template>
  <BaseBody >
    <div style="display: flex; flex-direction: column; gap: 1rem">
      <div>의료급여 수급권자 여부를 선택해 주세요.</div>
      <div>기본정보는 실손청구가 처음인 경우만 입력해요.</div>
      <div style="display: flex; flex-direction: column">
        <span>의료급여 수급권자</span>
        <select>
          <option>해당없음</option>
          <option>1종 또는 2종</option>
        </select>
      </div>
      <input type="text" placeholder="주소를 입력하세요" />
      <input type="text" placeholder="상세주소 입력" />
      <div style="display: flex; flex-direction: column">
        <span>이름</span>
        <input type="text" placeholder="이름" />
      </div>
      <button style="width: 100%; margin-top: 1rem; padding: 1rem" @click="clickNext">다음</button>
    </div>
  </BaseBody>
</template>

<script setup lang="ts">
import BaseBody from '~/components/layout/BaseBody.vue'

const clickNext = () => {
  console.log('clickNext')
  navigateTo('/insu/claim/inputJob')
}
</script>

<style scoped lang="scss"></style>
