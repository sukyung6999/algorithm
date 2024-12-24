// 2. 최빈값 구하기
const str = "hello my name is dingcodingco";

const a = 'a'.charCodeAt();
const arr = Array.from({length: 26}).fill(0);

const strArr = str.replaceAll(' ', '').split('')

for (const alpha of strArr) {
  const idx = alpha.charCodeAt() - a;
  arr[idx] = arr[idx] + 1
}

let maxCountIdx = 0, maxCount = 0;
arr.forEach((count, idx) => {
  if (maxCount < count) {
    maxCount = count;
    maxCountIdx = idx;
  }
})

console.log(String.fromCharCode(maxCountIdx + 97))

