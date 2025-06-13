<template>
  <div class="example-page">
    <h1>헤더 설정 예시 페이지</h1>
    
    <div class="button-group">
      <button @click="toggleBackButton" class="btn">
        뒤로가기 버튼 {{ showBack ? '숨기기' : '보이기' }}
      </button>
      
      <button @click="changeTitle" class="btn">
        제목 변경하기
      </button>
      
      <button @click="resetHeader" class="btn">
        헤더 초기화
      </button>
    </div>
    
    <div class="info">
      <p>현재 뒤로가기 버튼 상태: {{ showBack ? 'ON' : 'OFF' }}</p>
      <p>현재 제목: {{ currentTitle }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useHeader } from '~/composables/useHeader'

// useHeader composable 사용
const { setShowBackButton, setCustomTitle, setHeaderConfig } = useHeader()

// 로컬 상태
const showBack = ref(false)
const currentTitle = ref('예시 페이지')
const titleIndex = ref(0)

const titles = ['예시 페이지', '변경된 제목', '또 다른 제목', '마지막 제목']

// 뒤로가기 버튼 토글
const toggleBackButton = () => {
  showBack.value = !showBack.value
  setShowBackButton(showBack.value)
}

// 제목 변경
const changeTitle = () => {
  titleIndex.value = (titleIndex.value + 1) % titles.length
  currentTitle.value = titles[titleIndex.value]
  setCustomTitle(currentTitle.value)
}

// 헤더 초기화
const resetHeader = () => {
  showBack.value = false
  currentTitle.value = '예시 페이지'
  titleIndex.value = 0
  setHeaderConfig({
    showBackButton: false,
    customTitle: ''
  })
}

// 페이지 로드 시 초기 설정
onMounted(() => {
  setHeaderConfig({
    showBackButton: true,  // 기본값으로 뒤로가기 버튼 보이기
    customTitle: '예시 페이지'
  })
  showBack.value = true
})
</script>

<style scoped>
.example-page {
  padding: 2rem;
}

.button-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem 0;
}

.btn {
  padding: 1rem 2rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn:hover {
  background: #0056b3;
}

.info {
  margin-top: 2rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 4px;
}

.info p {
  margin: 0.5rem 0;
  font-weight: bold;
}
</style>
