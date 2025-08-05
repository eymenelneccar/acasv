
export class AppError extends Error {
  constructor(
    message: string,
    public statusCode: number = 500,
    public isOperational: boolean = true
  ) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

export const handleApiError = (error: any) => {
  console.error('API Error:', error);
  
  if (error.response?.data?.message) {
    return error.response.data.message;
  }
  
  if (error.message) {
    return error.message;
  }
  
  return 'حدث خطأ غير متوقع';
};

export const showErrorToast = (error: any) => {
  const message = handleApiError(error);
  // يمكنك استخدام نظام التنبيهات هنا
  console.error('Error Toast:', message);
  return message;
};
