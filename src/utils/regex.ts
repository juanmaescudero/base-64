export const regexBase64 = /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{4}|[A-Za-z0-9+\/]{3}=|[A-Za-z0-9+\/]{2}={2})$/gm

export const regexBase64String = /^data:image\/(png|jpe?g|gif);base64,/