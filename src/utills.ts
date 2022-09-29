export const ANDROID = 'android';
export const APPLE = 'apple'

export function checkMobile() {
  const mobileType = navigator.userAgent.toLowerCase();
  if (mobileType.indexOf('android') > -1) {
    return 'android';
  }
  if (mobileType.indexOf('iphone') > -1 || mobileType.indexOf('ipad') > -1 || mobileType.indexOf('ipod') > -1) {
    return 'apple';
  }
  return 'web';
}