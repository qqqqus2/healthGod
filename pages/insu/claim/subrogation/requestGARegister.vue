<template>
  <BaseBody >
    <div style="display: flex; flex-direction: column; gap: 1rem">
      <div>
        <div>등록 요청할 GA이름과<br />주소를 입력해 주세요.</div>
      </div>

      <div>GA 이름</div>
      <input style="padding: 0.25rem; border: 1px solid gainsboro" placeholder="GA 이름" />

      <div>주소</div>
      <input style="padding: 0.25rem; border: 1px solid gainsboro" placeholder="GA 이름" />

      <button style="border: 1px solid gray; padding: 0.25rem 2rem" @click="clickRequest()">GA등록 요청하기</button>
    </div>
  </BaseBody>
</template>

<script setup lang="ts">
import BaseBody from '~/components/layout/BaseBody.vue'

const clickRequest = () => {
  navigateTo('/insu/claim/subrogation/term')
}
</script>

<style scoped lang="scss"></style>
