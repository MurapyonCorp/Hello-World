'use strict';
function countdown(due) {
  const now = new Date();
  const rest = due.getTime() - now.getTime();
  const sec = Math.floor(rest / 1000) % 60;
  const min = Math.floor(rest / 1000 / 60) % 60;
  const hours = Math.floor(rest / 1000 / 60 / 60) % 60;
  const days = Math.floor(rest / 1000 / 60 / 60 / 60) % 60;
  const count = [days, hours, min, sec];
  
  return count;
}

const goal = new Date(2025, 4, 3);
/*goal.setHours(23);
  goal.getMinutes(59);
  goal.getSeconds(59);*/

console.log(countdown(goal));
function recale() {
  const counter = countdown(goal);
  // const time = `${counter[1]}時間${counter[2]}分${counter[3]}秒`;
  // document.getElementById('timer').textContent = time;
  document.getElementById('day').textContent = counter[0];
  document.getElementById('hour').textContent = counter[1];
  document.getElementById('min').textContent = String(counter[2]).padStart(2, '0');
  document.getElementById('sec').textContent = String(counter[3]).padStart(2, '0');
  refresh();
}

function refresh() {
  setTimeout(recale, 1000);
}
recale();