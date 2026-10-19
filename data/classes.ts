
export type StudioClass = {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  duration: number;
  price: number;
  level: string;
  image: string;
  acuityUrl?: string;
};

export const studioClasses: StudioClass[] = [
  {
    id: "barre-beginner",
    name: "Barre Beginner",
    subtitle: "Build your foundation",
    description:
      "A welcoming introduction to barre, focused on alignment, strength, and controlled movement.",
    duration: 60,
    price: 25,
    level: "Beginner",
    image: "/images/barre-beginner.jpg",
  },
  {
    id: "barre-advanced",
    name: "Barre Advanced",
    subtitle: "Challenge your strength",
    description:
      "An energizing full-body class designed to challenge your endurance, balance, and control.",
    duration: 60,
    price: 50,
    level: "Advanced",
    image: "/images/barre-advanced.jpg",
  },
];
