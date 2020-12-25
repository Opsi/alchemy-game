# Milestones

Certain skills, views etc. are only visible after doing something else.
Those will be called Milestones. Here a few examples:

- Gained X Ingredients
- Gained X Knowledge
- Brewed X Potion
- Learned X Skills
- Learned Certain Skill
- Sold X Items
- Catched X Rats
- Tamed X Rats
- Had X Ticks

```ts
interface Stats {
  total: {
    ticks: number;
    ingredients: number;
    knowledge: number;
    skills: number;
    brewedPotions: number;
    drankPotions: number;
    soldPotions: number;
    catchedRats: number;
    tamedRats: number;
    tamedRats: number;
  }
}

interface MilestoneState {
  stats: Stats;
  learnedFirstPotionRecipe: boolean;
}
```

# Skills/Items

Skills and Items are both passive abilities that will improve everything. The only difference between the two are that skills are paid with money and items are paid with gold.

### Properties:

- Name
- Description (becomes a tooltip)
- Learnable?
- Affordable?
- Effect

```ts
interface Skill {
  title: str;
  tooltip: str;
  type: 'skill' | 'item';
  priceTag: str;
  logMessage: str;
  learnable: (state: State) => boolean;
  affordable: (state: State) => boolean;
  effect: (state: State) => State;
}
```

What could those effects be?
- flip one of the milestone-effects
- **Increase:**
  - Search
    - Player Chance per tick
    - Rat-Gatherer Chance per tick
  - Experiment
    - knowledge per experiment
    - player speed
    - rat-quack speed
  - Brew
    - potions per brew
    - potions-queue size
    - player speed
    - rat-alchemist speed
  - Drink:
    - Effect duration
    - Effect power (Mk 2,3,4,... Potion)
  - Sell
    - gold per order
    - chance for new order
    - capacity of orders
    - time-limit of order
  - Rats
    - chance to catch rat
    - train-queue size
    - player train speed
    - rat train speed
  - Nice to Have: Capacity
    - Ingredients
    - Potions
    - Rats
- **Decrease:**
  - Experiment:
    - Player ingredient cost
    - rat ingredient cost
  - Brew
    - ingredient cost



# Events

When some things happen they should trigger an event an be logged in the log. Maybe this can be combined with the milestones

```ts
interface GameEvent {
  tickTime: number;
  message: string;
}

interface LogState {
  enabled: boolean;
  events: GameEvent[];
}
```