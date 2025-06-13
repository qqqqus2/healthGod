<template>
  <BaseBody >
    <div style="display: grid; gap: 1rem">
      <div style="display: flex; flex-direction: column; gap: 5px">
        <div style="padding: 20px; background-color: #cccccc">
          <div>청구서류 전송을 완료했어요</div>
          <div>삼성화재 청구 내역 확인 ></div>
        </div>
        <div style="padding: 20px; background-color: #cccccc">
          <div>추가서류가 필요한 청구가 있어요</div>
          <div>DB손해보험 청구 내역 확인 ></div>
        </div>
      </div>

      <div style="display: flex; gap: 10px">
        <div style="padding: 20px; background-color: #3498db; color: white" @click="clickCharge('paperless')">
          서류 없이 청구
        </div>
        <div style="padding: 20px; background-color: #2c3e50; color: white" @click="clickCharge('picture')">
          사진 찍어 청구
        </div>
      </div>

      <div style="padding: 20px; background-color: #95a5a6; color: white" @click="clickCharge('subrogation')">
        보험금 대리청구
      </div>

      <div style="display: grid; gap: 1rem">
        <div>놓치기 쉬운 보상금 돌려받으세요</div>

        <div style="padding: 20px; background-color: gainsboro">AI 실손 예상 보험금 확인</div>
        <div style="padding: 20px; background-color: gainsboro">AI 분석 숨은 보상금 찾기</div>

        <div style="display: flex; gap: 1rem">
          <div style="padding: 20px; background-color: gainsboro">청구내역 조회</div>
          <div style="padding: 20px; background-color: gainsboro">병원 서류 발급</div>
        </div>

        <div style="padding: 20px; background-color: gainsboro">
          <div>실손보험 자동청구</div>
          <div style="display: flex; gap: 1rem">
            <div>청구 보험사 2개</div>
            <div>청구 병원 3개</div>
          </div>
        </div>
      </div>

      <div>청구의신 더 알아보기</div>
      <div style="display: flex; gap: 1rem">
        <div style="padding: 20px; background-color: gainsboro">My병원/보험사 관리</div>
        <div style="padding: 20px; background-color: gainsboro">제휴병원 찾아보기</div>
        <div style="padding: 20px; background-color: gainsboro">실손청구 이용안내</div>
      </div>

      <div>실손청구에 대해 궁금하다면?</div>
      <div>
        <div style="padding: 10px; background-color: gainsboro">카카오톡 상담 ></div>
        <div style="padding: 10px; background-color: gainsboro">자주 묻는 질문 ></div>
        <div style="padding: 10px; background-color: gainsboro">1:1 질문 ></div>
        <div style="padding: 10px; background-color: gainsboro">전화상담 1661-2966 ></div>
      </div>
    </div>
    <Modal v-if="isShowNonePaper" :message="message" @confirm="confirmNonePaper" />
  </BaseBody>
</template>

<script setup lang="ts">
import Modal from '~/components/common/modal/Modal.vue'
import BaseBody from '~/components/layout/BaseBody.vue'

definePageMeta({
  // isShowHeader: false,
  // isShowUtils: false,
  // isShowBackButton: false,
  title: '실손 청구',
  // customTitle: 'logo'
  isShowTabbar: true
})

const isShowNonePaper = ref(false)
const message = ref('')

const route = useRoute()

const clickCharge = (type: 'paperless' | 'picture' | 'subrogation') => {
  if (type === 'paperless') {
    // TODO:: 서류없이 인지 사진찍어인지 스토어 저장 필요!
    // MY병원 등록여부 확인
    // 등록되어 있을 때
    navigateTo('/insu/claim/paperless/selectTreatmentHospital')

    // 등록안되어 있을때
    // isShowNonePaper.value = true
    // message.value = `
    //   <div><span>MY병원 연결이 필요해요.</span><br />연결한 MY병원의 통원 및 입원 진료 내역을 찾아 간편하게 청구를 할 수 있어요.</div>
    // `
  } else if (type === 'picture') {
    // MY병원 등록여부 확인
    // 등록되어 있을 때
    navigateTo('/insu/claim/picture/findSelfHospitalsPicture')

    // 등록안되어 있을때
    // isShowNonePaper.value = true
    // message.value = `
    //   <div><span>MY병원 연결이 필요해요.</span><br />연결한 MY병원의 통원 및 입원 진료 내역을 찾아 간편하게 청구를 할 수 있어요.</div>
    // `
  } else if (type === 'subrogation') {
    navigateTo('/insu/claim/subrogation/signupInfo')
  }
}

const clickPicture = () => {}

const confirmNonePaper = () => {
  navigateTo('/insu/claim/findHospitals')
}
</script>

<style scoped lang="scss"></style>
