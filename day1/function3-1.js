// ★함수를 값으로 다룰 수 있다.


// 1) 함수를 변수에 저장할 수 있다.
// -> 어떤 기능을 변수에 저장해 두었다가 필요할 때 사용할 수 있다.

// 2) 함수를 매개값으로 받을 수 있다.
// -> 어떤 기능을 전달 받아 기존 기능을 강화할 수 있다.

// 3) 함수를 반환값으로 전달할 수 있다.
// -> 어떤 기능을 새로운 기능으로 변환하여 전달 할 수 있다.




// -----------------------------------------------------------------
// ★☆★☆★function3-1, 3-2, 3-3 참고★☆★☆★

// 1) 함수를 변수에 저장할 수 있다.
{
  const f1 = function (arr, f) {
    for (let i = 0; i < arr.length; i++) {
      console.log(f(arr[i]));
    }
  }

  const f2 = function (x) {
    return x * 2;
  }
}