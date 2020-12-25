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