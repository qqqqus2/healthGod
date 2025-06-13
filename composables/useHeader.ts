import { inject, onMounted } from "vue";

interface HeaderOptions {
    // 기본 옵션 (logoType 기본값: text)
    showBackButton?: boolean;
    customTitle?: string;
    logoType?: "both" | "text" | "image";
    logoTypeWithBack?: "both" | "text" | "image" | "";
    
    // 유틸 옵션
    showUtil?: boolean;
    showSearch?: boolean;
    showSearchBtn?: boolean;
    
    // 네비게이션 옵션
    showChat?: boolean;
    showChatDot?: boolean;
    showLucky?: boolean;
    showLuckyDot?: boolean;
    showSet?: boolean;
    showAllMenu?: boolean;
    showShare?: boolean;
    showMore?: boolean;
    
    // 알림 옵션
    hasNotification?: boolean;
    hasNotificationDot?: boolean;
    hasReward?: boolean;
    hasRewardDot?: boolean;
    
    // 레이아웃 옵션
    isCenterTitle?: boolean;
}

export const useHeader = () => {
    const setHeaderOptions =
        inject<(options: HeaderOptions) => void>("setHeaderOptions");
    
    console.log('useHeader - setHeaderOptions inject result:', setHeaderOptions)

    const setShowBackButton = (show: boolean) => {
        console.log('setShowBackButton called with:', show)
        if (setHeaderOptions) {
            setHeaderOptions({ showBackButton: show });
        } else {
            console.error('setHeaderOptions not available in setShowBackButton')
        }
    };

    const setCustomTitle = (title: string) => {
        console.log('setCustomTitle called with:', title)
        if (setHeaderOptions) {
            setHeaderOptions({ customTitle: title });
        } else {
            console.error('setHeaderOptions not available in setCustomTitle')
        }
    };

    const setLogoType = (type: "both" | "text" | "image") => {
        console.log('setLogoType called with:', type)
        if (setHeaderOptions) {
            setHeaderOptions({ logoType: type });
        } else {
            console.error('setHeaderOptions not available in setLogoType')
        }
    };

    const setLogoTypeWithBack = (type: "both" | "text" | "image" | "") => {
        console.log('setLogoTypeWithBack called with:', type)
        if (setHeaderOptions) {
            setHeaderOptions({ logoTypeWithBack: type });
        } else {
            console.error('setHeaderOptions not available in setLogoTypeWithBack')
        }
    };

    const setShowUtil = (show: boolean) => {
        console.log('setShowUtil called with:', show)
        if (setHeaderOptions) {
            setHeaderOptions({ showUtil: show });
        } else {
            console.error('setHeaderOptions not available in setShowUtil')
        }
    };

    const setHeaderConfig = (options: HeaderOptions) => {
        console.log('\n=== setHeaderConfig called in useHeader ===')
        console.log('options:', options)
        console.log('setHeaderOptions available:', !!setHeaderOptions)
        
        if (setHeaderOptions) {
            setHeaderOptions(options);
        } else {
            console.error('setHeaderOptions not available in setHeaderConfig - inject failed!')
        }
    };

    return {
        setShowBackButton,
        setCustomTitle,
        setLogoType,
        setLogoTypeWithBack,
        setShowUtil,
        setHeaderConfig,
    };
};
