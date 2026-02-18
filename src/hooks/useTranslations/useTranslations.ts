import { validTranslationKeys, LangKeys } from 'locales/translationKeys'

enum Language {
    es = 'es',
}

export type magicObj = {
    [key: string | number]: string | number
}

export const getActiveLanguage = () => {
    const userLang = navigator.language.split('-')[0]
    switch (userLang) {
        case Language.es:
            return Language.es
        // case Language.en:
        //     return Language.en
        default:
            return Language.es
    }
}

export const useTranslation = () => {
    const lang: LangKeys = getActiveLanguage()
    const selectedLanguage = validTranslationKeys[lang]

    const t = (key: keyof typeof selectedLanguage, binds?: magicObj) => {
        let value = selectedLanguage[key] ? selectedLanguage[key] : key

        if (selectedLanguage[key] && binds) {
            const words = Object.keys(binds)

            for (const item of words) {
                const curStr = binds[item].toString()
                value = value.replace(`{{${item}}}`, curStr)
            }
        }
        return value
    }

    return { t }
}
