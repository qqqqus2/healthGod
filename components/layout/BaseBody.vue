<template>
  <div class="cbody">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { watchEffect } from 'vue'
import { useHeader } from '~/composables/useHeader'

// Props 정의 - 간단한 버전
interface Props {
  showBackButton?: boolean
  customTitle?: string
  logoType?: 'both' | 'text' | 'image'
  logoTypeWithBack?: 'both' | 'text' | 'image' | ''
  hasNotification?: boolean
  hasReward?: boolean
  isCenterTitle?: boolean
}

const props = defineProps<Props>()

// 헤더 설정
const { setHeaderConfig } = useHeader()

// props가 변경될 때마다 헤더 업데이트
watchEffect(() => {
  // 설정된 props만 헤더에 전달
  const headerConfig: any = {}
  
  if (props.showBackButton !== undefined) headerConfig.showBackButton = props.showBackButton
  if (props.customTitle) headerConfig.customTitle = props.customTitle
  if (props.logoType) headerConfig.logoType = props.logoType
  if (props.logoTypeWithBack) headerConfig.logoTypeWithBack = props.logoTypeWithBack
  if (props.hasNotification !== undefined) headerConfig.hasNotification = props.hasNotification
  if (props.hasReward !== undefined) headerConfig.hasReward = props.hasReward
  if (props.isCenterTitle !== undefined) headerConfig.isCenterTitle = props.isCenterTitle
  
  // 설정할 것이 있으면 헤더 업데이트
  if (Object.keys(headerConfig).length > 0) {
    console.log('BaseBody setting header config:', headerConfig)
    setHeaderConfig(headerConfig)
  }
})
</script>

<style scoped lang="scss"></style>
