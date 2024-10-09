const phrases = [
    [
        "Deep in the enchanted forest, Lila discovered a hidden path.",
        "In an old shop, Lila stumbled upon an ancient timepiece.",
        "Her journey led Lila to a dark cave rumored to hold a cursed artifact.",
        "In the heart of the forest, a guardian spirit appeared before her.",
        "As darkness spread, Lila prepared for the final confrontation."
    ],
    [
        "Curious about where it might lead, she decided to explore.",
        "It was said to belong to a legendary time traveler.",
        "Legends warned of misfortune for anyone who dared to take it.",
        "The spirit warned Lila of the impending darkness threatening the realm.",
        "Her friends joined her, united against the looming threat."
    ],
    [
        "Along the path, she found a shimmering portal surrounded by glowing flowers.",
        "This timepiece could transport its holder to any moment in history.",
        "Despite the risk, Lila felt a strange pull to the artifact.",
        "It revealed that only by understanding her past could she save the future.",
        "They devised a plan to confront the source of the curse."
    ],
    [
        "Intrigued, Lila stepped through the portal.",
        "After some hesitation, Lila set the dial to a significant event.",
        "When she touched it, shadows began to swirl around her.",
        "Lila accepted the spirit's quest to retrieve lost memories.",
        "In a fierce battle, they faced the entity that sought to engulf their world."
    ],
    [
        "What awaited her on the other side was a world of magic and mystery.",
        "She found herself amidst a pivotal moment that could change history.",
        "To break the curse, she needed to uncover its hidden truth.",
        "With each challenge, she discovered her own inner strength.",
        "With bravery and unity, they restored peace to the enchanted forest."
    ]
];

const chosenWords = ["", "", "", "", ""];

// Function to cycle through words
function cycleWords(index) {
    chosenWords[index] = phrases[index][Math.floor(Math.random() * phrases[index].length)];
    document.getElementById(`chosenWord${index + 1}`).innerText = chosenWords[index];
}

// Function to speak the story
function speakStory(story) {
    const utterance = new SpeechSynthesisUtterance(story);
    speechSynthesis.speak(utterance);
}

// Event listeners for buttons
for (let i = 0; i < 5; i++) {
    document.getElementById(`word${i + 1}`).addEventListener('click', () => cycleWords(i));
}

// Show story
document.getElementById('showStory').addEventListener('click', () => {
    const story = chosenWords.join(' ') + '.';
    document.getElementById('storyOutput').innerText = story;
    speakStory(story); // Speak the generated story
});

// Random story
document.getElementById('randomStory').addEventListener('click', () => {
    const randomStory = [
        phrases[0][Math.floor(Math.random() * phrases[0].length)],
        phrases[1][Math.floor(Math.random() * phrases[1].length)],
        phrases[2][Math.floor(Math.random() * phrases[2].length)],
        phrases[3][Math.floor(Math.random() * phrases[3].length)],
        phrases[4][Math.floor(Math.random() * phrases[4].length)]
    ].join(' ') + '.';
    document.getElementById('storyOutput').innerText = randomStory;
    speakStory(randomStory); // Speak the generated random story
});

// Reset
document.getElementById('reset').addEventListener('click', () => {
    chosenWords.fill('');
    for (let i = 0; i < 5; i++) {
        document.getElementById(`chosenWord${i + 1}`).innerText = '';
    }
    document.getElementById('storyOutput').innerText = '';
});