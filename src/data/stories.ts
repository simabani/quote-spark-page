export type MoodType = 
  | 'sad' 
  | 'anxious' 
  | 'tired' 
  | 'hopeless' 
  | 'angry' 
  | 'lonely' 
  | 'okay' 
  | 'motivated' 
  | 'grateful' 
  | 'joyful';

export interface Mood {
  id: MoodType;
  emoji: string;
  label: string;
  color: string;
}

export interface Story {
  id: string;
  title: string;
  content: string;
  mood: MoodType;
}

export const moods: Mood[] = [
  { id: 'sad', emoji: '😢', label: 'Sad', color: 'bg-misty-blue' },
  { id: 'anxious', emoji: '😰', label: 'Anxious', color: 'bg-soft-lilac' },
  { id: 'tired', emoji: '😴', label: 'Tired', color: 'bg-warm-peach' },
  { id: 'hopeless', emoji: '💔', label: 'Hopeless', color: 'bg-blush-pink' },
  { id: 'angry', emoji: '😡', label: 'Angry', color: 'bg-warm-peach' },
  { id: 'lonely', emoji: '🥺', label: 'Lonely', color: 'bg-soft-lilac' },
  { id: 'okay', emoji: '🙂', label: 'Okay', color: 'bg-misty-blue' },
  { id: 'motivated', emoji: '💪', label: 'Motivated', color: 'bg-golden-glow/50' },
  { id: 'grateful', emoji: '🙏', label: 'Grateful', color: 'bg-blush-pink' },
  { id: 'joyful', emoji: '😄', label: 'Joyful', color: 'bg-golden-glow/50' },
];

export const stories: Story[] = [
  // Sad stories
  {
    id: 'sad-1',
    title: 'The Rain Will Pass',
    content: `There was once a small garden that hadn't seen sunlight in weeks. The flowers began to droop, wondering if they'd ever feel warmth again.

But beneath the soil, their roots grew deeper, reaching for nourishment they couldn't see.

When the clouds finally parted, those same flowers bloomed brighter than ever before — because they had learned to find strength in the darkness.

Your sadness is not weakness. It's your roots growing deeper, preparing you for the light that's coming. 💜`,
    mood: 'sad',
  },
  {
    id: 'sad-2',
    title: 'The Cracked Vase',
    content: `A potter once made a beautiful vase, but it fell and cracked before it could be sold.

Instead of throwing it away, she filled the cracks with gold.

"Now," she said, "it tells a story. It's more beautiful because it survived."

Your tears are not a sign of breaking — they're proof that you're still feeling, still living, still human. And that's the most beautiful thing of all. ✨`,
    mood: 'sad',
  },

  // Anxious stories
  {
    id: 'anxious-1',
    title: 'The Worried Lighthouse',
    content: `A lighthouse once worried it wasn't bright enough. "What if ships can't see me? What if I fail them?"

But every night, without fail, ships found their way safely to shore.

The lighthouse realized it had been so focused on its fears that it forgot to notice all the ships it was already saving.

You don't have to be perfect. You just have to keep shining, even when you're scared. You're guiding more people than you know. 🌟`,
    mood: 'anxious',
  },
  {
    id: 'anxious-2',
    title: 'One Breath at a Time',
    content: `A mountain climber once asked an elder, "How do you climb such a tall mountain?"

The elder smiled and said, "I don't climb mountains. I just take one small step, then another, then another."

The whole journey felt impossible — until it wasn't.

You don't have to solve everything right now. Just this moment. Just this breath. That's enough. 🌸`,
    mood: 'anxious',
  },

  // Tired stories
  {
    id: 'tired-1',
    title: 'The Resting River',
    content: `A river once felt guilty for slowing down. "Everyone depends on me," it thought. "I can't stop."

But when winter came, it froze — and discovered that even in stillness, it was still beautiful, still needed, still loved.

Rest is not giving up. It's how you gather strength for the next flow. Let yourself be still. The world will wait for you. 💙`,
    mood: 'tired',
  },
  {
    id: 'tired-2',
    title: 'The Sleepy Star',
    content: `Even stars need to rest. That's why they only shine at night — when the sky is dark and quiet.

You've been burning so bright for so long. It's okay to dim for a while.

The world doesn't need you to shine every second. It just needs you to still be there when you wake up. Rest now, dear heart. 🌙`,
    mood: 'tired',
  },

  // Hopeless stories
  {
    id: 'hopeless-1',
    title: 'The Seed in the Dark',
    content: `A seed once lay buried in cold, dark soil. It couldn't see the sun. It couldn't feel the wind. It thought it had been forgotten.

But all that time, something was happening. Slowly, quietly, it was becoming something new.

One day, without warning, it broke through the surface — and became a flower.

You are not forgotten. You are becoming. And when you bloom, it will be beautiful. 🌷`,
    mood: 'hopeless',
  },
  {
    id: 'hopeless-2',
    title: 'The Last Page',
    content: `A reader once reached a sad chapter and closed the book, thinking the story was over.

But it wasn't. There were still pages left — pages of hope, of healing, of happy endings she couldn't yet imagine.

This is not your last chapter. There are still pages left in your story. Keep reading. Keep living. The best part might be next. 📖`,
    mood: 'hopeless',
  },

  // Angry stories
  {
    id: 'angry-1',
    title: 'The Storm Cloud',
    content: `A storm cloud once felt ashamed of its thunder and lightning. "Why can't I be soft like the other clouds?"

An old cloud drifted by and whispered, "After every storm, the air is cleaner. The earth is watered. You're not destructive — you're necessary."

Your anger is valid. It means something matters to you deeply. Feel it, honor it, and then let it clear the air. 🌧️`,
    mood: 'angry',
  },
  {
    id: 'angry-2',
    title: 'The Volcano\'s Heart',
    content: `Deep inside a volcano lived fire that had been held in for too long.

When it finally erupted, the village nearby was scared. But in time, the ash made the soil rich, and the most beautiful flowers grew there.

Sometimes what feels like destruction is actually the beginning of something new. Your fire can create, not just destroy. 🔥`,
    mood: 'angry',
  },

  // Lonely stories
  {
    id: 'lonely-1',
    title: 'The Single Star',
    content: `A star once sat alone in a corner of the sky, far from the others. "No one can see me," it thought. "I don't matter."

But far below, a child looked up and made a wish on that very star — the only one visible through her window.

You may feel alone, but someone, somewhere, is looking up at you and finding hope. You matter more than you know. ⭐`,
    mood: 'lonely',
  },
  {
    id: 'lonely-2',
    title: 'The Quiet Forest',
    content: `In a quiet forest, a tree stood alone in a clearing. For years, it thought it was isolated.

Then one day, it noticed something: its roots were connected to every tree around it, sharing water and nutrients underground.

Even when you feel alone, you are connected to others in ways you cannot see. You are part of something bigger. 🌲`,
    mood: 'lonely',
  },

  // Okay stories
  {
    id: 'okay-1',
    title: 'The Middle Path',
    content: `A traveler once complained to a monk, "I'm not happy, but I'm not sad either. I just feel... okay. Is something wrong with me?"

The monk smiled. "The middle path is where most of life happens. It's where peace lives. Being okay is not a failure — it's a foundation."

You don't always have to feel extraordinary. Being okay is a gentle blessing. Honor it. 🍃`,
    mood: 'okay',
  },
  {
    id: 'okay-2',
    title: 'The Steady Candle',
    content: `Not every candle needs to be a bonfire. Some candles burn quietly, steadily, for a very long time.

Their light isn't dramatic, but it's reliable. It's there when you need it.

Being okay means you're still here, still glowing. And that quiet, steady light? It's more powerful than you think. 🕯️`,
    mood: 'okay',
  },

  // Motivated stories
  {
    id: 'motivated-1',
    title: 'The Little Engine',
    content: `A small engine was asked to climb a mountain that had defeated much bigger trains.

"Why me?" it asked. "I'm so small."

"Because," said the conductor, "big trains rely on their size. But you — you rely on your heart."

And up the mountain it went, one chug at a time.

Your size doesn't matter. Your spirit does. Keep climbing. You're unstoppable. 🚂`,
    mood: 'motivated',
  },
  {
    id: 'motivated-2',
    title: 'The Arrow\'s Lesson',
    content: `An arrow once complained about being pulled backward. "This feels wrong," it said. "I should be flying forward."

The archer whispered, "I'm pulling you back so you can fly farther than ever before."

Every setback is a setup for a greater launch. Trust the tension. Your breakthrough is coming. 🎯`,
    mood: 'motivated',
  },

  // Grateful stories
  {
    id: 'grateful-1',
    title: 'The Grateful Stone',
    content: `A stone sat by a river for a thousand years. One day, a traveler stopped to rest beside it.

"You must be bored," said the traveler. "You've been here so long."

The stone replied, "Bored? I've watched a million sunrises. I've felt the river sing. I've seen children grow into grandparents. I am the richest being alive."

Gratitude doesn't need grand things. It finds treasure in the ordinary. 🌅`,
    mood: 'grateful',
  },
  {
    id: 'grateful-2',
    title: 'The Thank You Tree',
    content: `There was once a tree that dropped a single leaf every time someone said "thank you" beneath its branches.

Over the years, the ground beneath it became the softest, most fertile soil in the land — and new trees grew from it.

Your gratitude creates ripples. Every thank you plants a seed. Keep spreading that energy. 🌳`,
    mood: 'grateful',
  },

  // Joyful stories
  {
    id: 'joyful-1',
    title: 'The Dancing Sunbeam',
    content: `A sunbeam once asked the sun, "What is my purpose?"

The sun replied, "To dance. To play. To make shadows into art and dust into glitter."

"That's it?" asked the sunbeam.

"That's everything," said the sun.

Joy doesn't need a reason. It is the reason. Dance in your light. Celebrate being alive. ☀️`,
    mood: 'joyful',
  },
  {
    id: 'joyful-2',
    title: 'The Laughing Brook',
    content: `A brook giggled its way down the mountain, bubbling over rocks and splashing at the edges.

"Why are you always so happy?" asked a tired hiker.

"Because," said the brook, "I know where I'm going, and I'm enjoying every twist and turn on the way there."

Joy isn't about the destination. It's about loving the journey. Keep laughing, keep flowing, keep shining. 💫`,
    mood: 'joyful',
  },
];

export const getStoriesForMood = (mood: MoodType): Story[] => {
  return stories.filter(story => story.mood === mood);
};

export const getRandomStoryForMood = (mood: MoodType): Story => {
  const moodStories = getStoriesForMood(mood);
  return moodStories[Math.floor(Math.random() * moodStories.length)];
};
