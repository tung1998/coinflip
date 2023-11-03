export function getDataByKey (value:any) {
  return useState<any>('data').value.find((item:any) => item.name === value)?.content || {}
}
