// regex
const defaultComment = new RegExp('^.*?This is an empty file.*?\\*\\/', 'gmis')
const validEmail = new RegExp(
    '^[\\w\\.-]{2,25}@([\\w-]{2,15}\\.)?[\\w-]{2,15}\\.[\\w-]{2,3}$/',
    'gmis'
)

// aux
const words = [
    'import',
    'export',
    'require',
    'const',
    'let',
    'exec',
    'eval',
    'window',
    'document',
    'process',
    'global',
    'module',
]

const validCodeWords = (str: string) => {
    for (const el of words) {
        if (str.includes(el)) {
            return false
        }
    }
    return true
}
enum ErrorReason {
    CODE = 'Invalid code',
    SYNTAX = 'Invalid syntax',
    EMAIL = 'Invalid email format',
}

type CleanResponse = [boolean, string | ErrorReason]

export const useCleanInput = () => {
    const CleanCodeInput = (data: string): CleanResponse => {
        let result = data
        const hasInitialComment = defaultComment.test(data)
        if (hasInitialComment) {
            result = result.replace(defaultComment, '')
        }

        if (validCodeWords(result)) {
            return [true, result]
        }

        return [false, ErrorReason.CODE]
    }

    const CheckCodeInput = (data: string) => validCodeWords(data)

    const CheckEmail = (email: string) => {
        const valid = validEmail.test(email)
        if (valid) {
            return [true, email]
        }
        return [false, ErrorReason.EMAIL]
    }

    return {
        CheckEmail,
        CleanCodeInput,
        CheckCodeInput,
    }
}
