// choose a generator //
const genTabs = document.querySelectorAll(".gen-item");
const genScreens = document.querySelectorAll(".gen-screen");

function showGenerator(generatorId) {
  genScreens.forEach((screen) => {
    screen.classList.remove("active");
  });

  document.getElementById(generatorId).classList.add("active");
}

genTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const generatorId = tab.dataset.gen;
    showGenerator(generatorId);
  });
});

// SIMS 2 QUEST GENERATOR //

const npcs = [
  "Your next door neighbor",
  "A very suspicious witch",
  "Your enemy",
  "One of your siblings",
  "A tiny gnome",
  "One of your coworkers",
  "Someone who looks suspiciously like you",
  "A weird little kid",
  "A sketchy policeman",
  "A literal ghost",
  "A talking dog",
  "A blue alien",
  "A random stranger you've never seen before",
  "God",
];

const actions = [
  "runs to you screaming and waving their hands. They grab you and insist you have to ",
  "texts you out of the blue. They want you to ",
  "shows up at your door. When you open they keep saying you need to ",
  "speaks to you in a dream. They tell you to ",
  "asks you softly if you could ",
  "communicates with you telepathically. They demand you ",
  "hands you a letter soup with a message. They want you to ",
  "looks you dead in the eye. They say you must by any means necessary ",
  "slips you a note. It says you should ",
  "whispers to you in the middle of the night. They absolutely need you to ",
  "is staring at you from across the street. They mouth the words that you have to ",
];

const quests = {
  romance: [
    "go on a date with the first Sim you see ",
    "reach 50 relationship points with a stranger ",
    "kiss someone before midnight ",
    "break up with your partner ",
    "break up a couple ",
    "become engaged ",
    "go on a date to the cemetery ",
    "kiss 5 people ",
    "woohoo in a hot tub ",
  ],
  family: [
    "host a family dinner ",
    "have a three generation gathering ",
    "teach a child a new skill ",
    "take a family photo ",
    "visit a relative you haven't seen recently ",
    "throw a birthday party ",
    "adopt a child ",
    "start a new family tradition ",
    "go out to the park with your family ",
  ],
  career: [
    "earn a promotion ",
    "make friends with a coworker ",
    "gain the skill needed for your next promotion ",
    "buy something with your earnings ",
    "become self-employed ",
    "change careers completely ",
    "prank a coworker ",
  ],
  skills: [
    "gain 2 skill points today ",
    "learn a skill you've never touched ",
    "reach level 5 in a skill ",
    "maximize a skill before sunday ",
  ],
  drama: [
    "start a fight with a random Sim ",
    "help create 2 best friends ",
    "create 2 enemies ",
    "have a public argument ",
    "become friends with an enemy ",
    "break up some random friendship ",
    "kill your biggest enemy ",
    "have a romantic relationship with an enemy ",
    "resurrect a dead Sim ",
    "steal a Sim's partner ",
  ],
  rivalry: [
    "beat your rival in a skill ",
    "have more money than your rival ",
    "win a fight ",
    "looksmaxx and become the most attractive Sim in the neighborhood ",
    "forgive your enemy and become friends ",
  ],
  chaos: [
    "quit your job ",
    "move houses ",
    "invite a random stranger to live with you ",
    "have cosmetic surgery ",
    "spend all your money ",
    "sell your most expensive object ",
    "become enemies with your best friend ",
    "throw a party tonight no matter what ",
    "rearrange your living room ",
    "rearrange your entire home ",
    "paint your house a new color ",
    "paint your hair a new color ",
    "dress only in your favorite color ",
    "get a new tattoo ",
    "get a new piercing ",
  ],
};

const when = [
  "today.",
  "tonight.",
  "before the week is over.",
  "before the season ends.",
  "in 5 days.",
  "in 2 days.",
  "in one week.",
  "before sun up.",
];

const rewards = [
  "you get +1000 simoleons",
  "you get +5000 simoleons",
  "you get a new stereo",
  "you gain one free skill point",
  "you get a new outfit",
  "you get a career promotion",
  "you get a free room makeover",
  "they will give you a free makeover",
  "they will give you a puppy",
  "they will install a new hot tub in your backyard",
  "they will construct a new room in your house",
  "they will pay for a vacation for you and your family",
  "you get a new computer",
  "you get +10,000 simoleons",
  "you get a new couch",
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
  "you will grow horns",
];

let currentReward = "";
let currentConsequence = "";

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
  currentReward = getRandomItem(rewards);
  currentConsequence = getRandomItem(consequences);

  const whenItem = getRandomItem(when);
  const resultBox = document.getElementById("questResult");

  resultBox.innerHTML = `
    <h2>Your Quest</h2>
    <p class="quest-description"> ${npc} ${action} ${quest} ${whenItem}</p>
    
   
    
    <div class="quest-buttons">
      <button class="gen-btn results" id="successBtn">I did it</button>
      <button class="gen-btn results" id="failBtn">I failed</button>
    </div>

    <div id="questOutcome"></div>
  `;

  document.getElementById("successBtn").addEventListener("click", showReward);
  document.getElementById("failBtn").addEventListener("click", showConsequence);
}

function showReward() {
  document.getElementById("questOutcome").innerHTML = `
    <h3>Reward</h3>
    <p>${currentReward}</p>
  `;
}

function showConsequence() {
  document.getElementById("questOutcome").innerHTML = `
    <h3>Consequence</h3>
    <p>${currentConsequence}</p>
  `;
}

document.getElementById("rollQuestBtn").addEventListener("click", rollQuest);

// RANDOM EVENT GENERATOR
const RandomEvents = [
  "Uh oh, natural 1: … that can't be good- and it's not! Fire! Fire in all buildings! Watch out! Someone could get hurt or worse! ",
  "Roll 2: Salmonella Cinderella - So i guess some kid didn't cook the chicken properly and now everyone has diarrhea. ",
  "Roll 3: Mirror mirror - Every single mirror in your home disappears. You can only see your reflection in puddles and windows now. ",
  "Roll 4: That's not my name - Selected sim feels like their current name doesn't really fit them. They need a change right now. Rename selected sim.",
  "Roll 5: It Crossed the Road - While out and about in the street, you stumble upon a free roaming chicken! Gain a chicken on your household if you keep it. ",
  "Roll 6: Man's Best Friend - Your sim heads outside to see a stray dog eating out of the trash. Feeling bad for him, your sim offers him some fresh scraps. The dog is very thankful! - Maybe too thankful… Now it won't leave! Looks like you got a dog now. Adopt a stray dog. ",
  "Roll 7: By a whisker - Your home has been infested by mice. Your sims are at their wits end- when suddenly the mice just disappear! Confused but grateful you continue about your business, when you find a very fat and happy cat snoozing in the barn. Seems it is the one to thank for this good fortune. However now with the mice gone there's nothing to feed it…. Well, maybe you could start doing that instead. Looks like you have a cat! Adopt a stray cat.",
  "Roll 8: The Great Sick - A deadly virus has spread across the neighborhood. Flip a coin for every sim in your household. Heads they get sick, tails they stay healthy. If a sim gets sick, they will be bedridden for 3 days and lose 2 skill points in every skill. ",
  "Roll 9: What's up doc? - While fishing one day a very tame rabbit hops into your sim's lap. Knowing it won't last out in the wild with how friendly it is, your sim takes it home for now. Gain a rabbit on your farm free of charge.",
  "Roll 10: Pining - Roll for a random sim in town. Your sim has now developed a one sided crush! Your sim loves them to the moon and back! They would move heaven and earth for them! The object of affection is unaffected by this event.",
  "Roll 11: Don't Bug me! - Some careless sim left trash all over your property last night, attracting bugs. Looks like you have a mess to clean up… Leave trash out on your lawn (Roll a D10 to see how many piles you will leave) You can remove the trash once the bugs arrive. Then try to handle all the creepy crawlies!",
  "Roll 12: It's just a try - The selected sim starts wondering... what would it be like to kiss someone the same gender. They can try with a random sim at a bar or with their best friend. Choise is yours.",
  "Roll 13: Terrible Gambler - Your sim has a gambling problem. They can't stop themselves from gambling! Every day they will lose 500 simoleons until they win 5000 simoleons. Roll a D10 every day to see if they win or lose. If they win, they are cured of their gambling addiction. If they lose, they have to pay up.",
  "Roll 14: Lucky Penny - Your sim has found a 1,000 simoleon bill on the ground! Just pick it up and buy something nice",
  "Roll 15: Any excuse to party - Your sim is in the mood to party! Throw a theme party within this turn.",
  "Roll 16: It's you or me - Your selected sim and the sim with the lowest relationship points with them have a fight. Flip a coin to see who wins. The loser dies. Yes they die.",
  "Roll 17: Watcher? Is that you? - Selected sim feels like they have been called by some higher power. They move out of the household into a secluded cabin and devote their lofe to the Watcher. They become celibate.",
  "Roll 18: Up in the starts - Selected sim has always been fascinated by the stars. One night while stargazing, they see a strange object flight right on top of them. A green light comes down and they get abducted! If it's a male, flip a coin to determine if he get pregnant or not.",
  "Roll 19: Ouch my head - Selected sim slips and falls. They hit their head really hard. They must rest up for the round. Staying in bed or around the house. At the end of the round roll a D4 for any of these random outcomes (Or pick the one you're able to do if you don't want to add more mods to your game): 1 ==> Your sim's head injury just gets worse, your sim is very sick, and then they die. Whoops. 2 ==> Your sim's head injury has healed, but not without side effects. Using Various Traits By hexagonal-bipyramid add one of these five random traits (Roll a D5 if you want) Absent-minded. Clumsy. Coward. Hot Headed or Neurotic. <br> 3 ==> Your sim's head injury has fully healed! Hurray! 4 ==> Your sim has survived, but they now need constant care and cannot leave the house or work.",
  "Roll 20: My fellow sims - Your sim suddenly gets it. If we don't help each other, how are we supposed to live together in the same world. They decide to gift half of their belongings to charity.",
  "Roll 21: The Great Plague - Oh no, this is bad... A new deadly virus is lose. Flip a coin for every sim during this rotation. If heads they are safe. If tail, they are now sick. If a sim is sick they need to flip a coin the next day. Heads they get better within 5 days. Tails they die.",
  "Roll 22: The Bees Approve - A swarm of bees has taken up residence on your property. Everyone expects disaster. Instead, they seem unusually friendly. Add a bee colony to your home.",
  "Roll 23: The Wrong Funeral - Your household attends a funeral. Slowly, they start to realize nobody actually knows the deceased. The household spends the day pretending they did and socializing with everyone there. All household members gain one new acquaintance.",
  "Roll 24: Found in the Walls - During repairs your family discovers a hidden compartment. Roll D4. 1 ==> D5 ×100. 2 ==> Old family letters. 3 ==> A valuable heirloom worth D10 ×100. 4 ==> Human remains. The family gains a disturbing secret.",
  "Roll 25: The Local Legend - A ridiculous rumor spreads about your household. Roll D4. 1 ==> Your family can talk to birds. 2 ==> Your family is secretly royal. 3 ==> Your family worships vegetables. 4 ==> Your family is cursed.",
  "Roll 26: Not up to regulations. A home inspector inspects your home. Turns out you are not allowed to have a second story. If you have one you need to Bribe the inspector with 50,000 simoleons or get rid of the second floor.",
  "Roll 27: The Muse strikes - Suddenly your sim is striked with inspiration and NEEDS to paint another sim. The sim with which they have the highest relationship. Make the painting. If you don't have enough skill... practice more!",
  "Roll 28: Room For one more? - Things have been so quiet around here. So peaceful. Maybe it's time to add another kid to this household and make things interesting! Flip a coin to see if your family agrees to adopt. If one parent is a family sim, you automatically accept. If Accepted, roll a D4. 1 ==> You adopt a baby! Have fun changing diapers. 2 ==> You adopt a toddler! Make sure to cover all the electrical outlets!... wait… 3 ==> Adopt a child! 4 ==> Adopt a teenager!",
  "Roll 30: I hate it here - Pick a random teen or child in the family. They have just not been getting along with mum and dad. Fighting and arguing with them. Their relationship bars have plummeted! Finally they have had enough! The child runs away! Make the child have a negative relationship with both parents and then have them live outside for 5 days.",
  "Roll 31: Bonk! Roll for a random sim in your household (Teen and up) While walking today your sim was struck in the head by a falling… turtle? Seems a hawk was trying to make a snack of it and needed something thick to crack its shell open. Your sim's head the job nicely. They're ok, after the headache of course, but they seem to have some amnesia. Roll a D2 1 ==> All your sims' relationships have returned to neutral 0. They don't love or hate anyone anymore… In fact… who are you? 2 ==> All your sims's skills (Other than body skill) are back to zero.",
  "Roll 32: Adventure time - Send a sim on an adventure. 5 days later they come back with treasure.",
  "Roll 33: You receive an email. A prince from Ethiopia is messaging you about giving you his fortune! But they need you to cover the money transfer fees. You pay $10,000 and never hear of the prince ever again.",
  "Roll 34: Identity crisis - Selected sim doesn't feel like themselves anymore... they need a total makeover. Change hair and clothes.",
  "Roll 35: Free Furniture - A neighbor puts a perfectly good piece of furniture on the curb. Roll D4. 1 ==> Couch. 2 ==> Table. 3 ==> Bookshelf. 4 ==> Gaming system. Take it or sell it.",
  "Roll 36: Influencer Recommendation - A random influencer recommends something. Your Sim immediately becomes obsessed. Spend $1,000 on a new hobby or object.",
  "Roll 37: Amazon at 2 am - Your sim is tired and scrolling through amazon. They make an impulsive purchase. Buy something with a cost of $8,000 or higher. Can be multiple things",
  "Roll 38: Take the sicssors away - Roll for a random haircut. You have to keep it for at least one rotation.",
  "Roll 40: Unexpected Talent - Selected Sim discovers they're surprisingly good at something. Roll D6. 1 ==> Singing. 2 ==> Painting. 3 ==> Cooking. 4 ==> Comedy. 5 ==> Dancing. 6 ==> Writing. Gain a free skill point.",
  "Roll 41: Neighbor's Package - A package arrives. It isn't yours. You can choose to keep it or return it. If you keep it roll a D4. If you return it you get a 2,000 simoleon reward. 1 ==> A garden gnome. 2 ==> A microwave. 3 ==> A desk lamp. 4 ==> A garden flamingo.",
];

function rollEvent() {
  const RandomEvent = getRandomItem(RandomEvents);
  const resultBox = document.getElementById("eventResult");

  resultBox.innerHTML = `
    <h2>Your Event</h2>
    <p class="quest-description"> ${RandomEvent}</p>
  `;
}

document.getElementById("rollEventBtn").addEventListener("click", rollEvent);
