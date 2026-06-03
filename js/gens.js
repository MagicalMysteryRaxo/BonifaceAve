const npcs = [
  "Your next door neighbor",
  "Your best friend",
  "Your enemy",
  "One of your siblings",
  "Your spouse",
  "Your coworker",
  "Your boss",
  "A weird little kid",
  "A policeman",
  "A ghost",
  "A talking dog",
  "A blue Alien",
  "A random stranger you've never seen before",
  "The Watcher",
];

const actions = [
  "runs to you screaming. They ask you to ",
  "texts you out of the blue. They want you to ",
  "shows up at your door. They need you to ",
  "speaks to you in a dream. They tell you to ",
  "offers you a deal. They absolutely need you to ",
  "communicates with you telepathically. They demand you to ",
  "asks you for help. They want you to ",
  "looks you dead in the eyes. They say you must ",
  "slips you a note. It says you should ",
  "whispers to you in the middle of the night. They want you to ",
  "is staring at you from across the street. They want you to ",
];

const quests = {
  romance: [
    "go on a date with the first Sim you see.",
    "reach 50 relationship points with a stranger.",
    "kiss someone before midnight.",
    "rekindle an old romance.",
    "break up a couple.",
    "become engaged within 3 days.",
    "go on a date to the cemetery.",
    "kiss 5 people in 5 days.",
    "woohoo in a hot tub.",
  ],
  family: [
    "host a family dinner.",
    "have a three generation gathering.",
    "teach a child a new skill.",
    "take a family photo.",
    "visit a relative you haven't seen recently.",
    "throw a birthday party.",
    "adopt a child.",
    "start a new family tradition.",
    "go out to the park with your family.",
  ],
  career: [
    "earn a promotion.",
    "make friends with a coworker.",
    "gain the skill needed for your next promotion.",
    "buy something with your earnings.",
    "become self-employed.",
    "change careers completely.",
    "prank a coworker.",
  ],
  skills: [
    "gain 2 skill points today.",
    "learn a skill you've never touched.",
    "reach level 5 in a skill.",
    "maximize a skill before sunday.",
  ],
  drama: [
    "start a fight with a random Sim.",
    "help create 2 best friends.",
    "create 2 enemies.",
    "have a public argument.",
    "become friends with an enemy.",
    "break up a friendship.",
    "kill your biggest enemy.",
    "have a romantic relationship with an enemy.",
    "resurrect a dead Sim.",
    "steal a Sim's partner.",
  ],
  rivalry: [
    "beat your rival in a skill.",
    "have more money than your rival.",
    "win a fight.",
    "looksmaxx and become the most attractive Sim in the neighborhood.",
    "forgive your enemy and become friends.",
  ],
  chaos: [
    "quit your job.",
    "move houses.",
    "invite a random stranger to live with you.",
    "have cosmetic surgery.",
    "spend all your money.",
    "sell your most expensive object.",
    "become enemies with your best friend.",
    "throw a party tonight no matter what.",
    "rearrange your living room.",
    "rearrange your entire home.",
    "paint your house a new color.",
    "paint your hair a new color.",
    "dress only in your favorite color.",
  ],
};

const rewards = [
  "you get +1000 simoleons",
  "you get +5000 simoleons",
  "you get a new stereo",
  "you gain one free skill point",
  "you get a new outfit",
  "you get a career performance boost",
  "you get a free room makeover",
  "you can have a free makeover",
  "they will give you a puppy",
  "they will install a new hot tub in your backyard",
  "they will construct a new room in your house",
  "they will pay for a vacation for you and your family",
];

const consequences = [
  "you lose 3 logic skill points",
  "you lose 3 charisma skill points",
  "you lose 3 body skill points",
  "you lose 500 simoleons",
  "you lose 1000 simoleons",
  "they will trigger one fear",
  "they will erase your best friend's memory of you",
  "you will have a random household object break",
  "you will instantly get fat",
  "you will instantly get old",
  "you will get a random disease",
  "they will curse you with eternal bad luck",
  "they will make your skin blue",
  "they will make your skin purple",
];

function getRandomItem(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function rollQuest() {
  const npc = getRandomItem(npcs);
  const action = getRandomItem(actions);

  const questTypes = Object.keys(quests);
  const questType = getRandomItem(questTypes);

  const quest = getRandomItem(quests[questType]);
  const reward = getRandomItem(rewards);
  const consequence = getRandomItem(consequences);

  const resultBox = document.getElementById("questResult");

  resultBox.innerHTML = `
    <h2>Your Quest</h2>
    <p> ${npc} ${action} ${quest}</p>
    <p><strong>If you do: </strong> ${reward}</p>
    <p><strong>If you don't: </strong> ${consequence}</p>
    <p><strong>Quest Type:</strong> ${questType}</p>
    
  `;
}

document.getElementById("rollQuestBtn").addEventListener("click", rollQuest);
