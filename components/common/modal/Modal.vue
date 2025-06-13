<script setup lang="ts">
import { computed } from 'vue'

export interface BaseModalProps {
  title?: string
  isVisible?: boolean
  isShowCloseButton?: boolean
  isShowCancelButton?: boolean
  isShowConfirmButton?: boolean
  confirmButtonText?: string
  cancelButtonText?: string
  disabledCancelButton?: boolean
  disabledConfirmButton?: boolean
  message: string
}

const props = withDefaults(defineProps<BaseModalProps>(), {
  title: '',
  isVisible: false,
  isShowCloseButton: true,
  isShowCancelButton: true,
  isShowConfirmButton: true,
  confirmButtonText: '확인',
  cancelButtonText: '취소',
  disabledCancelButton: false,
  disabledConfirmButton: false,
  message: ''
})

const emit = defineEmits<{
  (e: 'confirm'): void
  (e: 'cancel'): void
  (e: 'close'): void
  (e: 'confirm'): void
}>()

const handleConfirm = () => {
  emit('confirm')
}

const closeModal = () => {
  emit('close')
}
const onClickCancel = () => {
  emit('cancel')
}
const onClickConfirm = () => {
  emit('confirm')
}

const isDisabledCancelButton = computed(() => {
  return props.disabledCancelButton
})

const isDisabledConfirmButton = computed(() => {
  return props.disabledConfirmButton
})
</script>

<template>
  <div class="modal-overlay">
    <div class="modal-box">
      <h2 class="modal-title">{{ title }}</h2>
      <p class="modal-message" v-html="message"></p>
      <div class="modal-buttons">
        <button
          v-if="isShowCancelButton"
          class="modal-button cancel"
          @click="onClickCancel"
        >
          {{ cancelButtonText }}
        </button>
        <button class="modal-button confirm" @click="handleConfirm">
          {{ confirmButtonText }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-box {
  background: white;
  padding: 24px;
  border-radius: 8px;
  width: 320px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.modal-title {
  margin-bottom: 12px;
  font-size: 18px;
  font-weight: bold;
}

.modal-message {
  margin-bottom: 24px;
  font-size: 14px;
  color: #444;
}

.modal-buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.modal-button {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.modal-button.confirm {
  background-color: #3b82f6;
  color: white;
}

.modal-button.cancel {
  background-color: #e5e7eb;
  color: #111;
}
</style>
