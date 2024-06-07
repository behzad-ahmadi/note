export interface IError {
  message: string
  status: number
  errors?: Record<string, string>
}

const handleServerError = (error: Error): IError => {
  if ((error as any).name === 'ValidationError') {
    return {
      message: 'Validation error',
      status: 400,
      errors: Object.values((error as any).errors).reduce(
        (acc: Record<string, string>, err: any) => {
          acc[err.path] = err.message
          return acc
        },
        {}
      ),
    }
  }
  if ((error as any).name === 'MongoError') {
    return {
      message: 'Database error occurred',
      status: 500,
    }
  }
  return {
    message: 'An unknown error occurred',
    status: 500,
  }
}

export { handleServerError }
