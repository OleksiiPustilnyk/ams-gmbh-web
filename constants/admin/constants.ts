export const MAX_IMAGE_SIZE = 5 * 1024 * 1024 // 5MB

export const MAX_PDF_SIZE = 10 * 1024 * 1024 // 10MB

export const PASSWORD_REGEX =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{7,}$/ //Pass$12

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ //example@email.com
