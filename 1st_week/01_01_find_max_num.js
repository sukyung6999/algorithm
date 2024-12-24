const list = [3, 5, 6, 1, 2, 4, 3, 5, 6, 1, 2, 43, 5, 6, 1, 2, 43, 5, 6, 1, 2, 43, 5, 6, 1, 2, 43, 5, 6, 1, 2, 43, 5, 6, 1, 2, 43, 5, 6, 1, 2, 43, 5, 6, 1, 2, 43, 5, 6, 1, 2, 43, 5, 6, 1, 2, 43, 5, 6, 1, 2, 43, 5, 6, 1, 2, 43, 5, 6, 1, 2, 43, 5, 6, 1, 2, 43, 5, 6, 1, 2, 43, 5, 6, 1, 2, 43, 5, 6, 1, 2, 43, 5, 6, 1, 2, 43, 5, 6, 1, 2, 43, 5, 6, 1, 2, 43, 5, 6, 1, 2, 43, 5, 6, 1, 2, 43, 5, 6, 1, 2, 43, 5, 6, 1, 2, 4];

/* 1. 하나의 변수를 잡아서 그 변수와 비교하며 가장 큰 값 찾기
let max = 0;

for(const num of list) {
  if (num > max) max = num;
}

console.log(max);
*/


for(const num of list) {
  let is_max_num = true;
  for (const compare_num of list) {
    
    if (num < compare_num) {
      is_max_num = false;
      break;
    }
  }
  if (is_max_num) {
    console.log(num);
    return;
  }
}



/**
 * 이터러블 : 순회 가능한
 */