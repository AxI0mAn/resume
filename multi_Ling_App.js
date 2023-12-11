const radio_btns = document.querySelectorAll('input.change-eur');
const allLang = ['en', 'ua', 'ru'];
let select = document.querySelectorAll('input.change-eur[value="en"]');

select.checked = true;

for (let btn of radio_btns) {
  btn.addEventListener('click', () => {
    if (btn.checked) {
      select = btn;
      changeURLLang();
    }
  })
}

function changeURLLang() {
  let lang = select.value;
  location.href = window.location.pathname + '#' + lang;
  location.reload();
}

function changeLang() {
  let hash = window.location.hash;
  hash = hash.substring(1);
  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + '#en';
    location.reload();
  }
  select.value = hash;
  document.querySelector('title').innerHTML = translateArr['titl'][hash];
  for (let key in translateArr) {
    let goal = '.eur-' + key;
    let elements = document.querySelectorAll(goal);
    for (let element of elements) {
      if (element && goal) {
        element.textContent = translateArr[key][hash];
      }
    }
  }
}
changeLang()
