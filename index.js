function introduction(name) {
    return(`Hi, my name is ${name}.`);
}

const akiIntroduction = introduction("Aki");
console.log(akiIntroduction);

const samipIntroduction = introduction("Samip");
console.log(samipIntroduction);

function introductionWithLanguage(name, language) {
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`)
}

const akiintroductionWithLanguage = introductionWithLanguage("Aki", "Ember.js");
console.log(akiintroductionWithLanguage);

const samipintroductionWithLanguage = introductionWithLanguage("Samip", "React");
console.log(samipintroductionWithLanguage);

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`)
}

const gracieintroductionWithLanguageOptional = introductionWithLanguage("Gracie");
console.log(gracieintroductionWithLanguageOptional);
