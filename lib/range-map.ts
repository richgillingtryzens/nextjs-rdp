export default function rangeMap(n: number, fn: (i: number) => any) {
  const arr: any = []
  while (n > arr.length) {
    arr.push(fn(arr.length))
  }
  return arr
}
