import type { CUSTOM_HEADER_TITLE, HEADER_UTILS_BUTTON } from '~/constants/header.constants'

export type HeaderUtilsHandler = {
  event: Event
  name: string
}

export interface HeaderUtilsStatus {
  [key: string]: boolean
}

// HEADER_UTILS_BUTTON 상수값을 타입으로 사용
export type HeaderUtilsButton = (typeof HEADER_UTILS_BUTTON)[keyof typeof HEADER_UTILS_BUTTON]

// CUSTOM_HEADER_TITLE 상수값을 타입으로 사용
export type CustomHeaderTitle = (typeof CUSTOM_HEADER_TITLE)[keyof typeof CUSTOM_HEADER_TITLE]
