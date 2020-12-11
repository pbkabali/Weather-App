const toggleNoticeView = () => {
  const notice = document.getElementById("notice");
  notice.classList.toggle("display-none");
};

const notice = () => {
  const modal = document.createElement("div");
  modal.id = "notice";
  modal.classList.add("loading", "notice-modal", "display-none");
  const noticeDetail = document.createElement("div");
  noticeDetail.classList.add("notice");
  const message = document.createElement("p");
  message.id = "notice-msg";
  const closeBtn = document.createElement("div");
  closeBtn.classList.add("close-btn");
  closeBtn.innerText = "Close";
  closeBtn.onclick = () => toggleNoticeView();
  noticeDetail.append(message, closeBtn);
  modal.appendChild(noticeDetail);
  return modal;
};

export const openNotice = (msg) => {
  toggleNoticeView();
  const msgArea = document.getElementById("notice-msg");
  msgArea.innerText = msg;
};

export default notice;
