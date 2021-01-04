const die_sound = document.getElementById("die");
const point_sound = document.getElementById("point");
const mission_complete = document.getElementById("mission_complete");
const time_counter = document.getElementById("time_counter");
const word = document.getElementById("word");
const input = document.getElementById("input");
const score_counter = document.getElementById("score_counter");
const hi_score_counter = document.getElementById("hi_score_counter");
const words = [
  "typing","youtube","word","minecraft","skyrim","programming","sally","sam","hand","student","head","pank","rock",
  "bird","rain","terrain","school","study","book","face","work","facebook","book","ukraine","sound","paragon",
  "overwatch","egor","letov","bald","john","sense","razer","mouse","keyboard","quite","search","reality","back",
  "oblivion","math","history","mad","man","zoo","crazy","guy","element","time","paper","about","contact","may","april",
  "july","october","november","summer","biology","chemistry","physics","education","teacher","cube","laptop","robot",
  "legacy","steam","origin","throne","water","blender","car","theory","random","star","war","google","asia","america",
  "europe","russia","usa","germany","spain","italy","china","japan","korea","rainbow","potato","melon","watermelon",
  "piano","lamp","style","cup","watch","idea","paper","table","chair","thumb","desktop","score","event","interval",
  "function","passive","active","cloud","cartoon","cat","dog","plane","ship","integration","disintegration","last","god",
  "plank","simple","hard","normal","easy","language","staff","stuff","environment","start","finish","ask","reward",
  "task","transition","spanish","english","russian","country","state","electron"
];

let hi_score = 0;
let score = 0;
let time = 60;

if (localStorage.getItem("hi") !== null) {
  hi_score = localStorage.getItem("hi");
  hi_score_counter.innerHTML = hi_score;
}

input.addEventListener("click", () => {
  if (time === 60) {
    word.innerHTML = words[Math.floor(Math.random() * words.length)];
    let Interval = setInterval(() => {
      if (time > 0) {
        time--;
        time_counter.innerHTML = `${time} s`;
        input.oninput = () => {
          if (input.value === word.innerHTML) {
            word.innerHTML = words[Math.floor(Math.random() * words.length)];
            input.value = "";
            score += 1;
            score_counter.innerHTML = score;
            point_sound.currentTime = 0;
            point_sound.play();
          }
        };
      } else if (time === 0) {
        alert(`Your score is ${score}`);

        if (score > hi_score) {
          hi_score = score;
          hi_score_counter.innerHTML = score;
          localStorage.setItem("hi", hi_score);

          mission_complete.currentTime = 0;
          mission_complete.play();
        } else {
          die_sound.currentTime = 0;
          die_sound.play();
        }
        score_counter.innerHTML = "0";
        time_counter.innerHTML = "60 s";
        time = 60;
        score = 0;
        word.innerHTML = "";
        input.value = "";
        clearInterval(Interval);

        input.disabled = true;
        input.disabled = false;
      }
    }, 1000);
  }
});
