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
  "Roll 31: Bonk! - Roll for a random sim in your household (Teen and up) While walking today your sim was struck in the head by a falling… turtle? Seems a hawk was trying to make a snack of it and needed something thick to crack its shell open. Your sim's head the job nicely. They're ok, after the headache of course, but they seem to have some amnesia. Roll a D2 1 ==> All your sims' relationships have returned to neutral 0. They don't love or hate anyone anymore… In fact… who are you? 2 ==> All your sims's skills (Other than body skill) are back to zero.",
  "Roll 32: Adventure time - Send a sim on an adventure. 5 days later they come back with treasure.",
  "Roll 33: My sweet prince - You receive an email. A prince from Ethiopia is messaging you about giving you his fortune! But they need you to cover the money transfer fees. You pay $10,000 and never hear of the prince ever again.",
  "Roll 34: Identity crisis - Selected sim doesn't feel like themselves anymore... they need a total makeover. Change hair and clothes.",
  "Roll 35: Free Furniture - A neighbor puts a perfectly good piece of furniture on the curb. Roll D4. 1 ==> Couch. 2 ==> Table. 3 ==> Bookshelf. 4 ==> Gaming system. Take it or sell it.",
  "Roll 36: Influencer Recommendation - A random influencer recommends something. Your Sim immediately becomes obsessed. Spend $1,000 on a new hobby or object.",
  "Roll 37: Amazon at 2 am - Your sim is tired and scrolling through amazon. They make an impulsive purchase. Buy something with a cost of $8,000 or higher. Can be multiple things",
  "Roll 38: Take the sicssors away - Roll for a random haircut. You have to keep it for at least one rotation.",
  "Roll 40: Unexpected Talent - Selected Sim discovers they're surprisingly good at something. Roll D6. 1 ==> Singing. 2 ==> Painting. 3 ==> Cooking. 4 ==> Comedy. 5 ==> Dancing. 6 ==> Writing. Gain a free skill point.",
  "Roll 41: Neighbor's Package - A package arrives. It isn't yours. You can choose to keep it or return it. If you keep it roll a D4. If you return it you get a 2,000 simoleon reward. 1 ==> A garden gnome. 2 ==> A microwave. 3 ==> A desk lamp. 4 ==> A garden flamingo.",
  "Roll 42: Swim Forrest Swim -  Roll for a random sim in your household (Teen and up) It's the annual river race, where sims swim from one side to the other to win some money. Your sim decided to compete. Roll a D3 to see what happens. 1 ==> Your sim wins! They get D10 x100 as a prize. Plus they get the Love to swim trait! 2 ==> Your sim not only loses the race, but they almost drown!  Your sim is saved but they are the laughing stock, the people there toss coins at you as a sign of mock. Roll D10x 10 for the coins and gain the Hydrophobic and Loser traits. 3 ==> Your sim makes it halfway across the river before getting sucked under by a current. A valiant effort is made to save them, but alas. They are gone. Your sim has drowned.",
  "Roll 43: Bucket list - Your sim realizes life is shorter than they think. Write down (in the biography spot) 3 goals your sim NEEDS to achieve before dying.",
  "Roll 44: Do not redeem card! - A suspicious sim with a weird accent calls you and they guide you through the process of transferring your life savings into a master account that will double your money. The last step is to read the card numbers to the sim on the other side of the line. Flip a coin: Heads ==> you redeem the card. Your money goes back into your bank account. Tails ==> you read the numbers to the scammer and loose all your household simoleons.",
  "Roll 45: Burnout - Your Sim has been pushing too hard. They crash and must take one week off work.",
  "Roll 46: The conspiracy - Selected Sim falls down an internet rabbit hole. It is simply too much! everyone is conspiring against them and no one can be trusted! Gain the Insane trait.",
  "Roll 47: Pilgrimage - Roll for a random sim in your household (Teen and up) Your sim has this yearning to see the world! They go on a journey to some historical sites. They won't be back for two rounds but they will return, older and wiser! Feel free to put them in the sim bin or take them to a vacation world so you can play them through. When they get back they will be two rounds older and have five new random skill points. Also gets the Adventurous trait!",
  "Roll 48: Yo what?? - Roll for a random sim in your household (Teen and up) The world is flat! 5G is poisoning us, and the trans agenda is destroying our kids! Your sim is speaking nonsense and the entire family is concerned about them. For their safety they are sent to the mental hospital to rest up. If you have an actual mental hospital, send them for 2 rotations. Roll a D4: 1 ==> Your sim returns fully healed. Thank goodness that's over. 2 ==> Your sim is still a bit odd, but well enough to come home! However your sim does gain the Neurotic trait. 3 ==> It's not working... No matter what the doctors have tried your sim's still a bit… completely insane. Not to worry though. They are not dangerous (we hope). Your sim gains the Insane trait.  4 ==> Uhh, now they're talking about something called… voting? Lost cause, sad really. Your sim must stay at the Almshouse forever.",
  "Roll 49: Look at that cool star! - One night, your sims are gathered outside and they look at the sky, such pretty stars. And look at that one! It's so big and bright and... it's getting bigger? wait-- that's a meteorite! Coming straight to your home! It crashes on your roof and oblitarates your home. You can move out and look for a better place to live, or buldoze everything and start building again.",
  "Roll 50: Shot! shot! shot! - Roll for a random, unmarried sim in your household (Adult and up) Your sim is hanging with some buddies when they hear about a drinking contest. They all joke about joining in, but joking turns serious and they all make a pact to join the contest. Your sim isn't sure if they should or not… Flip a coin to see if they join (Popularity sims must accept) Heads ==> Your sim accepts and they all go to the drinking contest. Everyone drinks hard and tries to outdo the others. Your sim wins oddly enough and gets the cash prize (D10x 100) buuuttt they're hungover the rest of the round. Comfort must remain in the red this round (Cheat it) and energy and hunger never go above halfway. Tails ==> Your sim refuses, they have a job to do after all! Very responsible! Also very stick-in-the mud. Your friends stop asking you to joining them, not just to the drinking contest but to other events as well (All friendships outside the family drop by 25%)",
  "Roll 51: Egg crack - Selected sim has been feeling a certain way for some time. They believe the gender they were assigned is not their true gender. Finally they accept the truth and come out to everyone. They are trans! Loud and proud! They transition in the way that is most comfortable for them.",
  "Roll 52: Maybe Baby - That biological clock, she's a tickin. In a random fit of sleep your sim suddenly has a realization. They roll over, shaking their spouse to wake them up. Half groggy and confused, your sim greets them, urgently with 'I want another baby!!' -- Try for a baby.",
  "Roll 53: Retail therapy - Choose a sim in your household. Your sim has been feeling sad lately. Nothing seems to work, food, going on a walk, hanging out with friends... there's only one thing that can fix a sadness like this... spending money! Oh yeah! Your sim goes out and spends $5,000 on random useless things. But aren't they pretty??",
  "Roll 54: You are C A N C E L L E D - Oh no. Selected sim has said something online they shouldn't have... Now everyone hates them! No one wants to assotiate with them. Lose 3 random friendships and gain Socially Awkward and Technophobe trait.",
  "Roll 55: I saw my life - Selected sim wakes up one night drenched in sweat. They are in panic. Heart beating like a train, feels like the walls are closing in. Feels like they're dying. Your sim closes their eyes and prepares for doom... but nothing happens. It was just a panic attack. Even though death was not really coming, they still felt real. Too real. This kind of experience does not leave you unaffected. Gain the Brave trait and either change your career, have an affair or buy a the biggest TV possible.",
  "Roll 56: Get off the planet, i want to be alone - Selected sim has been watching an amazing show. It had everything! Action, drama, great dialog and the best character ever. Your sim has gotten so attached to a character, in fact, that they become a comfort character. While watching the las episode Comfort Character dies. Your sim cannot bear this sadness and needs to process their loss by being alone for 3 days. Your sim cannot be in the same room as other sims for the next 3 days.",
  "Roll 57: Separation anxiety - Selected sim has a random flashback from their childhood. They remember that time their parent got rid of their favorite teddy bear. Granted, the thing was filthy and was missing an eye. But it was your sim's best friend! They suddenly start to feel some separation anxiety. Your sim cannot be left alone for the next 3 days, There needs to be a sim in the room with them at all times and they cannot refuse any hangout invitations.",
  "Roll 58: What the hell is that?! - Roll for a random sim in your household. While out on the streets late at night, your sim stumbles upon a demon. The thing is so ugly and scary. What will your sim do?. Roll a D3 to see how your sim reacts. 1 ==> What an ugly creature… oh shoot, did you say that out loud?! The demon scowls and, with a flick of their wrist, curses you! All your hair falls out on the spot. (Make your sim bald. Forever) 2 ==> Frightened, your sim turns and runs away. Halfway out of the woods their foot catches on a rock and they go sprawling, breaking a leg. The leg gets infected and they have to amputate it. 3 ==> Politely your sim apologizes for disturbing them, catching the demon off guard. Soon enough the two of you spend some time talking and even become friends. As a show of appreciation the demon flicks their wrist and suddenly you feel far more powerful. Your sim is now a demon as well! (you can manage the new powers however you want)",
  "Roll 59: Straight up Black plague - The Black plague comes to town. Flip a coin for every sim in the neighborhood to see if they survive.",
  "Roll 60: First impression is important - Your sim is a bit self conscious about the look of their house. They need to spend $1,500 on landscaping and the front of their house or lawn. It just has to be perfect!",
  "Roll 61: Bullseye - Your sim enters a darts competition.  Roll a D12 to see where they place, 12 being last and 1 being first. If your sim has any mechanical skill, add their skill level to the dice roll. If 3rd place, your sim wins $250 simoleons. Nice! If 2nd place, your sim wins $500 simoleons. Sweet! If 1st place, your sim wins $1000 simoleons and gets to take home their target as an extra prize. How good is that!",
  "Roll 62: Good... luck? - While on a walk you come across a little terrain plot. You explore for a bit and it looks promising! You can use this to make a house or a business. However, while your sim is exploring the place, they step on hole and their foot goes through it. They break their leg and it gets infected. You get a free plot (2x2 or 1x3) for your use but your sim never recovers from the broken leg. They have to amputate it and they are unable to work anymore.",
  "Roll 63: Therapy works - Selected sim finally agrees to go to therapy and it actually works! Remove one negative trait or roleplay flaw. Gain Optimistic trait.",
  "Roll 64: The cult - Roll for a random sim in the household (teen and up). They either join a cult or, start a cult. If they join a cult, they donate $500 to the cult for as long as they are in it. They also gain ",
  "Roll 65: Blood Moon - A strange red moon rises tonight. Something ancient stirs. Every supernatural Sim gains max motives for 3 days.",
  "Roll 66: The chosen one - Roll for a random child sim, if there is no child, then a teen. Your sim has very weird dream. A dream of water, fire, air and earth... when they wake up they feel a strange power in their body. They soon discover they have elemental powers! All of the elements in fact. Do with it what you will. Gain Avatar trait",
  "Roll 67: Possession - Selected sim gets possessed and cannot be controled for 3 days. If they survive or not is up to them.",
  "Roll 68: Elemental Surge - Something has disrupted reality. For one week: Fire benders cannot cook safely. Water benders randomly create puddles. Air benders break electronics. Earth benders destroy furniture.",
  "Roll 69: Dig down - Your sim has heard rumors of possible treasure buried in their land from bygone eras. Roll a (d10) to see how many times your sim may try to dig a hole in their land to find treasure! If they strike water, your Sim may establish a well. Score!",
  "Roll 70: Can't Catch a Break - Why do bad things happen to good Sims?? Your fears are realized! Accomplish (d2) fears this round for your sim.",
  "Roll 71: Bed bugs! - There are bed bugs in your bed! You call pest control services but you can't sleep in your bed for 3 days. You need to sleep (or just spend the night) on comunity lots.",
  "Roll 72: Long lost sibling - A stranger arrives claiming to be related to your family. Flip a coin: Heads ==> They're telling the truth. Tails ==> They're lying. Either way they want to move in.",
  "Roll 73: Bad influence - Roll for a random teen or child in your household. Your sim has fallen in with the wrong crowd. For one season: Skip school twice. Gain one enemy. Gain one friend. Flip a coin: Heads ==> They grow out of it. Tails ==> This becomes part of their personality.",
  "Roll 74: Not the pie - ",
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
