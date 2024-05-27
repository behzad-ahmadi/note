import { Types } from 'mongoose'

export function transformObjectId(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map(transformObjectId)
  } else if (obj !== null && typeof obj === 'object') {
    const newObj: any = {}
    for (const key in obj) {
      if (obj[key] instanceof Types.ObjectId) {
        newObj[key] = obj[key].toString()
      } else if (typeof obj[key] === 'object' && obj[key] !== null) {
        newObj[key] = transformObjectId(obj[key])
      } else {
        newObj[key] = obj[key]
      }
    }
    return newObj
  }
  return obj
}
