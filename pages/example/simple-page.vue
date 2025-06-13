<template>
  <div>
    <h1>간단한 페이지</h1>
    <p>이 페이지는 뒤로가기 버튼이 표시되고 제목이 변경됩니다.</p>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useHeader } from '~/composables/useHeader'

// 헤더 설정
const { setHeaderConfig } = useHeader()

// 페이지 로드 시 헤더 설정
onMounted(() => {
  setHeaderConfig({
    showBackButton: true,
    customTitle: '상세 페이지'
  })
})
</script>
