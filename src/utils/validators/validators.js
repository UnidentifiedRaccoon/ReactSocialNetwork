export const required = (value) => {
    if (value) {
        return undefined;
    }
    return "Это поле обязательно, пожалуйста введите значение"

}

export const maxLength = (sizeLimit) => (value) => {
    if (value && value.length < sizeLimit) {
        return undefined
    }
    return "Ограничьтесь " + sizeLimit + " символами"
}

export const minLength = (sizeLimit) => (value) => {;
    if (value && value.length > sizeLimit) {
        return undefined
    }
    return "Введите не меннее " + sizeLimit + " символами"
}
