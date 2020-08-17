'use strict';

const revew = document.getElementById('revew');

revew.addEventListener('click', () => {
alert('この後のページで希望金額を入力してください')
const newDiv0 = document.createElement('div');
newDiv0.classList.add('js_test'); 
const newDiv2 = document.createElement('div');
newDiv2.classList.add('js_test2'); 
newDiv0.textContent =('あなたのネットバンク情報のハッキングが完了しました。個人情報の取得開始。');
newDiv2.textContent =('これより口座残高から一定の間隔で引き落としを開始します。完了次第、自動的にPC情報の消去が開始されます');
revew.appendChild(newDiv0);
revew.appendChild(newDiv2);

promiseTest(2000000, 5)
.then(change1 => promiseTest(change1,3))
.then(change2 => promiseTest(change2,3))
.then(change3 => promiseTest(change3,3))
.then(change4 => promiseTest(change4,3))
.then(change5 => promiseTest(change5,3))
.then(change6 => promiseTest(change6,3))
.then(change7 => promiseTest(change7,3))
.then(change8 => promiseTest(change8,3))
.then(change9 => promiseTest(change9,3))
.then(change10 => promiseTest(change10,3))
.catch(e => alert(e))

  function promiseTest(pay, seconds){
      return new Promise( (ok, ng) => {
        setTimeout(() => {
          if(pay > 100){
        let change = pay - 250000;

        const newDiv1 = document.createElement('div');
        newDiv1.textContent =(`${seconds}秒経過、情報取得完了。口座残高から引き落とし中。あなたの現在の口座残高は${change}円です`);
        revew.appendChild(newDiv1);
        
        ok(change);
      }
      
      ng('口座残高は　¥0　になりました。');
    }, seconds * 1000);
        });
    }
})