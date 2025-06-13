<template>
  <BaseBody >
    <div style="display: flex; flex-direction: column; gap: 1rem">
      <div>청구서류를 첨부해주세요</div>
      <div style="display: flex; gap: 1rem">
        <div style="border: 1px solid gainsboro; padding: 1rem">서류 글씨가 잘 보이도록 촬영</div>
        <div style="border: 1px solid gainsboro; padding: 1rem">최대 15장까지 서류첨부 가능</div>
      </div>

      <div style="display: flex; flex-direction: column">
        <input type="file" />
        <span>가족청구는 피보험자와 수익자가 만 19세 미만 미성년자인 경우, 가족관계 증명서를 함께 첨부해 주세요.</span>
      </div>

      <div>
        <div>필요한 청구 서류 안내</div>
      </div>

      <button @click="clickNext">다음</button>
    </div>
  </BaseBody>
</template>

<script setup lang="ts">
import BaseBody from '~/components/layout/BaseBody.vue'

const clickNext = () => {
  navigateTo('/insu/claim/confirmChargeInfoPicture')
}
</script>

<style scoped lang="scss"></style>
