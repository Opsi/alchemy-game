# Activities

- Search
  - while active: Gain Ingredients
- Skill:
  - visible when: Has 5 Knowledge
  - while active: Use Knowledge -> Learn a learnable skill
- Experiment:
  - visible when: Has 5 Ingredients
  - while active: Use Ingredients -> Gain Knowledge
- Brew:
  - visible when: Learned first Potion Recipe
  - while active: Use Ingredients -> Brew Potions of certain kind

# Other Boxes

- Log:
  - logs (with time-stamp?) of events
- Skills:
  - shows all the learnable and learned skills and their costs and tooltips
- Drink:
  - shows all the available drinks, their brewed amount and their effect
  - shows all the running effects as circularprogress with tooltip
  - Instantanously drink a potion of certain type
  - Gives an effect for a certain tick-period
- 

# Potions

- Faster: Decreases neededProgress
  - Search 'Lootus Fasterus'
  - Experiment 'Tryus Fasterus'
  - Brew 'Corkus Fasterus'
- More Loot: Increases gained Loot
  - Search 'Lootus Betterus'
  - Experiment
  - Brew
- Less Costs: Decreases Costs
  - Experiment 'Tryus Cheaperus'
  - Brew
- Enslavement Potion (Love Potion?): 'Mindus Controlus'

# Skills

- Learn "Better Vision"-Potion (Earn 50% more Ingredients per Search)
- Learn "Search when nothing to do" (Automatically switch to search if there is nothing to do)


# General Story

- **Only log and Search visible**
- Search -> Gain Ingredients
- **Experiment -> visible**
- Experiment -> Gain Knowledge
- **Skills -> visible**
- Skill your first potion
- **Brew -> visible**
- Brew your first potion
- **Drink -> visible**
- Learn "Healing Potion"
- Brew Healing Potion
- People want to buy them
- **Sell -> visible (Selling is passive)**
- Sell your first potion
- **Buy -> visible**
- Buy Equipment (passive Boost)
- **You lose Ingredients because of Rats**
- Learn "Make Rat Trap"
- **You lose less Ingredients**
- Learn "Make Live Rate Trap"
- Catch your first Rat
- **Rats -> visible (See Rat count)**
- Learn "Enslavement Potion"
- Brew one of these
- **(Rat Slaves) -> visible**
- A lot of Rat/Sell/Buy improving stuff
- Buy houses
- Buy the village
- End

# Milestones

- total.ingredients > 0: See Ingredients-Amount
- total.ingredients > 4: See Experiment-Box
- total.knowledge > 0: See Knowledge-Amount
- total.knowledge > 4: See Skills-Box (with two potion-recipes)
- total.skills > 0: See "Learned" Skills Tab
- total.skills > 0 && runningActivity == 'none': "Auto Search"-Skill becomes learnable
- total.knownPotionRecipes > 0: See Brew-Box (each Potion with its own progressbar)
- total.brewedPotions > 0: See Drink-Box
- total.drankPotions > 0: See Effects-Box (in Drink Box)
- total.brewedPotions > 9: "Sell Potions"-Skill becomes learnable
- learnedSkill.sellPotions: See Sell-Box (Table with randomized orders)
- total.earnedGold > 0: See Buy-Tab in the Sell-Box
- boughtItem.livingRatTrap: See Rats-Box with caught rats amount
- total.caughtRats > 0: See convert-to-ingredients button (with ingredients amount)
- total.caughtRats > 0 && learnedSkill.lovePotion && learnedSkill.intelligencePotion: "Tame Rats"-Skill becomes learnable
- learnedSkill.tameRats: See "Tame Rat"-Button (with love-potion and intelligence-potion amount)
- total.tamedRats > 0:
  - See tamedRats-Amount in Rats-Box
  - "Train Rat-Gatherer" becomes learnable
- learnedSkill.trainRatGatherer: 
  - See Train-Tab in Rats-Box
  - See "Train Rat-Collector" in Train-Tab (with progress)
- total.trainedRats.collector > 0: See Boost in Search-Box
- total.trainedRats.collector > 9: "Train Rat-Quack" becomes learnable
- learnedSkill.trainRatQuack: See "Train Rat-Quack" in Train-Tab (with progress)
- **Repeat for alchemist, breederPair, trainer**

# Rats

- Normal Rats
  - Can become Rat Slaves with "Enslavement Potion"
- Rat Slaves
  1. Can Search Ingredients
  2. Can Replicate -> Make Normal Rats
  3. Can Experiment
  4. Can Brew
  5. Can Sell


- Rat Slaves
  - Searches: Collects Ingredients
- Rat Scholars
  - Experiment: Consumes Ingredients to gather Knowledge
- Rat Alchemists:
  - Assign them to potions: Consume Ingredients to brew potions