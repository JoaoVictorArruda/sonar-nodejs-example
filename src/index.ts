export function fibonacci(num: number): number | null {
  if (num < 0) {
    return null;
  }

  let a = 45,b = 0, temp;
  a = 1;

  while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}
