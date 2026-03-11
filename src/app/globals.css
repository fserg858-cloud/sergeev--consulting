@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 165 45% 3%;
    --foreground: 165 10% 98%;
    --card: 165 35% 6%;
    --card-foreground: 165 10% 98%;
    --popover: 165 45% 4%;
    --popover-foreground: 165 10% 98%;
    --primary: 165 30% 15%;
    --primary-foreground: 165 10% 98%;
    --secondary: 165 20% 10%;
    --secondary-foreground: 165 10% 98%;
    --muted: 165 20% 10%;
    --muted-foreground: 165 10% 65%;
    --accent: 32 45% 55%;
    --accent-foreground: 165 45% 3%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 165 25% 15%;
    --input: 165 25% 15%;
    --ring: 32 45% 55%;
    --radius: 1.25rem;
  }

  .dark {
    --background: 165 45% 3%;
    --foreground: 165 10% 98%;
    --card: 165 35% 6%;
    --card-foreground: 165 10% 98%;
    --popover: 165 45% 4%;
    --popover-foreground: 165 10% 98%;
    --primary: 165 30% 15%;
    --primary-foreground: 165 10% 98%;
    --secondary: 165 20% 10%;
    --secondary-foreground: 165 10% 98%;
    --muted: 165 20% 10%;
    --muted-foreground: 165 10% 65%;
    --accent: 32 45% 55%;
    --accent-foreground: 165 45% 3%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 165 25% 12%;
    --input: 165 25% 12%;
    --ring: 32 45% 55%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground font-body antialiased selection:bg-accent/30;
  }
  h1, h2, h3, h4, h5, h6 {
    @apply font-headline font-bold tracking-tight;
  }
}

.premium-glass {
  background: rgba(10, 38, 31, 0.4);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(198, 138, 83, 0.15);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.4);
}

.text-gradient {
  @apply bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-accent;
}

.hero-glow {
  position: absolute;
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, rgba(198, 138, 83, 0.08) 0%, transparent 70%);
  filter: blur(100px);
  z-index: -1;
}

.border-gradient {
  border: 1px solid transparent;
  background: linear-gradient(var(--card), var(--card)) padding-box,
              linear-gradient(to right, rgba(198, 138, 83, 0.3), transparent) border-box;
}