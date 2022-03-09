// Конфиг
const serverTimeout = 600;
const closeBtnClassname = '.closeButton-mupH76'; //Класс кнопки закрытия ЛС
const leaveBtnClassnames =
  'button-f2h6uQ lookFilled-yCfaCM colorRed-rQXKgM sizeMedium-2bFIHr grow-2sR_-F'; //Класс кнопки покидания в модальном окне

function leaveGroup() {
  const closeBtn = document.querySelector(closeBtnClassname);
  if (closeBtn) {
    closeBtn.click();
    const leaveBtn = Array.from(
      document.getElementsByClassName(leaveBtnClassnames)
    )[0];
    if (leaveBtn) {
      leaveBtn.click();
    }
    setTimeout(() => {
      // Проверка на наличие кнопок
      const emptyCheck = !!document.querySelector(closeBtnClassname);
      if (emptyCheck) {
        leaveGroup();
      }
    }, serverTimeout);
  }
}
leaveGroup();
