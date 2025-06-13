<template>
  <div style="padding: 1rem 3rem; display: flex; flex-direction: column; gap: 1rem">
    <button
      style="padding: 1rem 3rem; background-color: #4299e1; color: white; border-radius: 0.75rem"
      @click="clickConfirmModal"
    >
      Confirm Modal
    </button>

    <button
      style="padding: 1rem 3rem; background-color: #4299e1; color: white; border-radius: 0.75rem"
      @click="clickAlertModal"
    >
      Alert Modal
    </button>

    <button
      style="padding: 1rem 3rem; background-color: #4299e1; color: white; border-radius: 0.75rem"
      @click="clickBottomModal"
    >
      Bottom Modal
    </button>

    <BottomModal
      :is-visible="isShowBottomModal"
      v-bind="bottomModalProps"
      @cancel="clickCancel"
      @confirm="clickConfirm"
      @close="toggleBottomModal"
    >
      <template #content>
        <div>모달 내용은 Slot</div>
      </template>
    </BottomModal>
  </div>
</template>

<script setup lang="ts">
import { ConfirmModal, AlertModal, BottomModal } from '@lemonhc/fo-ui/components/modal'

const isShowBottomModal = ref(false)
const bottomModalProps = ref({
  title: '하단 모달 제목',
  isShowCloseButton: true,
  isShowCancelButton: true,
  isShowConfirmButton: true,
  confirmButtonText: '확인',
  cancelButtonText: '취소',
  disabledCancelButton: false,
  disabledConfirmButton: false
})

const clickConfirmModal = async () => {
  const modalContent = `
    <div style="display: flex; flex-direction: column; gap: 1rem; text-align: center">
      <div>
        <i class="ri-information-line"></i>
      </div>
      <div style="font-weight: bold">Confirm 모달 내용입니다.</div>
    </div>`

  const confirmRes = await ConfirmModal.open({
    isVisible: true,
    html: modalContent,
    confirmButtonText: '확인'
  })

  if (confirmRes) {
    await AlertModal.open({
      isVisible: true,
      content: '이것은 Alert Modal 입니다.'
    })
  }
}

const clickAlertModal = async () => {
  await AlertModal.open({
    isVisible: true,
    content: '이것은 Alert Modal 입니다.'
  })
}

const toggleBottomModal = () => {
  isShowBottomModal.value = !isShowBottomModal.value
}

const clickBottomModal = () => {
  toggleBottomModal()
}

const clickCancel = () => {
  console.log('하단 모달 취소')
}
const clickConfirm = () => {
  console.log('하단 모달 확인 클릭')
}
</script>

<style scoped lang="scss"></style>
