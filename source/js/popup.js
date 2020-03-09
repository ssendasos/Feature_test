"use strict";

const $ = {}

function _createPopup(options) {
  const popup = document.createElement('div')
  popup.classList.add('popup');
  popup.insertAdjacentHTML('afterbegin', `
  <div class="popup-overlay">
  <div class="popup-window">
    <button class="button__close" id="popup-close">Закрыть</button>
    <h2 class="popup__title">Бронирование</h2>
    <form class="popup__form" id="form">
        <fieldset class="popup__about">
            <p class="popup__about--item item__date">
                <label for="date">Дата<span class="custom-star">*</span></label>
                <input type="date" id="date" name="date" value="2019.09.14">
            </p>

            <p class="popup__about--item item__email">
                <label for="email">Email<span class="custom-star">*</span></label>
                <input type="email" id="email" name="email" placeholder="Электронная почта" required>
            </p>
            <p class="popup__about--item item__first-name">
                <label for="first-name">Имя<span class="custom-star">*</span></label>
                <input type="text" id="first-name" name="first-name" value="Иван" required>
            </p>
            <p class="popup__about--item item__last-name">
                <label for="last-name">Фамилия<span class="custom-star">*</span></label>
                <input type="text" id="last-name" name="last-name" value="Громов" required>
            </p>
            <p class="popup__about--item item__phone">
                <label for="phone">Телефон<span class="custom-star">*</span></label>
                <input type="number" id="phone" name="phone" placeholder="+7 (905) 184-81-40" required>
            </p>
            <p class="popup__about--item item__card">
                <label for="card-number">Данные карты<span class="custom-star">*</span></label>
                <input type="number"  id="card-number" name="card-number" placeholder="Номер карты" required>
                <input type="text"  id="card-date" name="card-date" placeholder="Срок действия" required>
                <input type="number"  id="card-cvv" name="card-cvv" placeholder="CVV" required>
            </p>
        </fieldset>
        <p class="popup__check">
            <label class="label-checkbox">
                <input id="check" type="checkbox" name="check" onchange="document.getElementById('submit').disabled = !this.checked;">
                <span class="checkbox-indicator"></span>
                Я согласен с пользовательским соглашением и публичной офертой
            </label>
        </p>
        <button type="submit"  id="submit" class="popup__submit">Забронировать</button>
    </form>
  </div>
</div>
  `)

  document.body.appendChild(popup);
  return popup
}

$.popup = function(options) {
  let $popup = _createPopup(options)
  let closing = false;
  let destroyed = false;

  const popup = {
    open() {
      !closing && $popup.classList.add('open')
    },

    close() {
      closing = true
      $popup.classList.remove('open')
      $popup.classList.add('hide')
      setTimeout(() => {
        $popup.classList.remove('hide')
        closing = false;
      }, 700)
    }
  }

  return Object.assign(popup, {
    destroy() {
      $popup.parentNode.removeChild($popup)
      destroyed = true
    }
  })
}

const popup = $.popup()

const reservationButton = document.getElementById('reservation-button')
const popupClose = document.getElementById('popup-close')

reservationButton.addEventListener('click', evt => {
  evt.preventDefault();
  popup.open()
})

popupClose.addEventListener('click', evt => {
  evt.preventDefault();
  popup.close();
})