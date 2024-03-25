import { Notify } from "notiflix/build/notiflix-notify-aio";

// ================== Notiflix  init ==================
export function infoStyle() {
  return Notify.init({
    width: "300px",
    position: "center-top",
    closeButton: false,
    distance: "145px",
    opacity: 0.95,
    borderRadius: "5px",
    rtl: false,
    timeout: 2000,
    messageMaxLength: 110,
    backOverlay: false,
    backOverlayColor: "rgba(0,0,0,0.9)",
    plainText: true,
    showOnlyTheLastOne: true,
    clickToClose: true,
    pauseOnHover: true,
    zindex: 4001,
    fontFamily: "Quicksand",
    fontSize: "16px",
    cssAnimationStyle: "zoom",
    cssAnimationDuration: "500",
    useIcon: "false",
    messageColor: "#ff6b01",
  });
}
