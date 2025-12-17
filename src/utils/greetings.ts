// Helper to get time-based greeting
export const getTimeBasedGreeting = (): { greeting: string; emoji: string } => {
  const hour = new Date().getHours();
  
  if (hour >= 5 && hour < 12) {
    return { greeting: "Good morning", emoji: "🌅" };
  } else if (hour >= 12 && hour < 17) {
    return { greeting: "Good afternoon", emoji: "☀️" };
  } else if (hour >= 17 && hour < 21) {
    return { greeting: "Good evening", emoji: "🌆" };
  } else {
    return { greeting: "Hey there", emoji: "🌙" };
  }
};

// Helper to get a warm, personalized message
export const getWarmMessage = (userName: string): string => {
  const messages = [
    `It's okay to feel whatever you're feeling right now.`,
    `Take your time — there's no rush here.`,
    `You're safe here. Let's check in together.`,
    `Whatever brought you here, you're not alone.`,
    `This is your space. Be honest with yourself.`,
  ];
  
  return messages[Math.floor(Math.random() * messages.length)];
};
