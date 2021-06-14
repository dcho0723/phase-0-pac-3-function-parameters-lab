const introduction = (aName) => {
    return `Hi, my name is ${aName}.`
}

const introductionWithLanguage = (aName, language) => {
    return `Hi, my name is ${aName} and I am learning to program in ${language}.`
}

const introductionWithLanguageOptional = (aName, language = "JavaScript") => {
    return `Hi, my name is ${aName} and I am learning to program in ${language}.`
}