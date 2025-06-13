<template>
  <BaseBody >
    <div>(주)레몬헬스케어는 개인(신용)정보를 수집 및 이용.............</div>
    <button style="border: 1px solid gray; padding: 0.25rem 2rem" @click="clickNext">동의하고 다음</button>
  </BaseBody>
</template>

<script setup lang="ts">
import { useClaimStore } from '~/store/insu/claim.store'
import BaseBody from '~/components/layout/BaseBody.vue'

const claimStore = useClaimStore()

const clickNext = () => {
  // 설계사 가입하기 클릭한 경우
  if (claimStore.selectSubrogationType === 'consultant') {
    navigateTo('/insu/claim/subrogation/selectInsuranceCompany')
  }
  // 설계사 대리인 가입하기 클릭한 경우
  else {
    navigateTo('/insu/claim/subrogation/inputAgentInfo')
  }
}
</script>

<style scoped lang="scss"></style>
