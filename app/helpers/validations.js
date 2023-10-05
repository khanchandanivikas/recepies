function isValidName(value) {
    return value && value.trim().length > 0 && value.trim().length >= 3;
}

function isValidEmail(value) {
    return value && value.includes('@') && value.trim().length >= 7;
}

function isValidPassword(value) {
    return value && value.trim().length >= 7;
}

export function validateCredentials(input) {
    let validationErrors = {};

    if (!isValidName(input.name)) {
        validationErrors.name = 'Invalid name provided.'
    }

    if (!isValidEmail(input.email)) {
        validationErrors.email = 'Invalid email address.'
    }

    if (!isValidPassword(input.password)) {
        validationErrors.password = 'Invalid password. Must be at least 7 characters long.'
    }

    if (Object.keys(validationErrors).length > 0) {
        throw validationErrors;
    }
}