// 요소를 싹다 선택하는걸 먼저 진행
const todaySpan = document.querySelector('#today');
const numbersDiv = document.querySelector('.numbers');
const drawBtn = document.querySelector('#draw');
const resetBtn = document.querySelector('#reset');
// 로또 번호 추첨 기능 구현
let lottoNumbers = []; // 빈 배열 생성, 추첨버튼 눌렀을 때 랜덤한 숫자 6개 채울 예정

const today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1;
let day = today.getDate();
todaySpan.textContent = `${year}년 ${month}월 ${day}일 `;

function paintNumber(number) {
  // 매개변수로 랜덤숫자를 받는다.
  const eachNumDiv = document.createElement('div');
  eachNumDiv.classList.add('eachnum');
  eachNumDiv.textContent = number;
  numbersDiv.append(eachNumDiv);
}

// draw 버튼에 클릭 이벤트 리스터 추가
drawBtn.addEventListener('click', function () {
  while (lottoNumbers.length < 6) {
    let rn = Math.floor(Math.random() * 45) + 1; // 1~45 중 하나가 정수로 랜덤 추첨 된다.

    if (lottoNumbers.indexOf(rn) === -1) {
      // 아직 그 숫자가 반환 되지 않았다면 푸시한다.
      lottoNumbers.push(rn);
      paintNumber(rn); // 로또번호가 추가될때마다 호출, 그때마다 추첨된 랜덤숫자를 그린다.
    }
  }
});

// 리셋
resetBtn.addEventListener('click', function () {
  lottoNumbers.splice(0, 6);
  numbersDiv.innerHTML = '';
  while (lottoNumbers.length < 6) {
    let rn = Math.floor(Math.random() * 45) + 1; // 1~45 중 하나가 정수로 랜덤 추첨 된다.

    if (lottoNumbers.indexOf(rn) === -1) {
      // 아직 그 숫자가 반환 되지 않았다면 푸시한다.
      lottoNumbers.push(rn);
      paintNumber(rn); // 로또번호가 추가될때마다 호출, 그때마다 추첨된 랜덤숫자를 그린다.
    }
  }
});
