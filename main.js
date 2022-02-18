// Should you be learning right now?

if ('Are you a developer?') {
    keepLearning()
} else {
    programmingLanguages.find(programmingLanguage => {
        return programmingLanguage.YouLike
    })
    goLearn()
}

if ('Is there someone better than you?') {
    keepLearning()
} else {
    developers.find(dev => {
        return dev.betterThanYou
    })
    keepLearning()
}

if ('You just finished learning') {
    // commit and push to your gitghub repo
    goToBed()
    wakeUp()
    keepLearning()
}

if ('Are you learning right now?') {
    console.log('Good!')
    console.log(`Don't Stop!`)
}

teachSomeone();
