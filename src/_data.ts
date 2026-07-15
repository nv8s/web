const ascii = `Yokusu , Watashi no Portfolio 👋🏼`;

export const resume = {
  name: "Saad",
  ascii,

  location: "Casablanca, Morocco",
  locationLink: "https://www.google.com/maps/place/Casablanca",

  about:
    "I’m a <strong>Math student</strong> and <strong>tech nerd</strong>, daily <a href='https://archlinux.org/' target='_blank' class='underline break-all' style='color: #a2c9eb'>Arch</a> user and <strong>GNU/Linux enthusiast</strong> exploring system programming to deepen my expertise.",

  languagesSummary:
    "Using <strong>TypeScript</strong> for type safety, <strong>JavaScript</strong> for flexibility not a senior in them just a vibe coder in that moment.",

  runtimesSummary:
    "Experienced with <strong>Node.js</strong> in Whatsapp bot development, <strong>Deno</strong>, in websites development.",

  skills: [
    "JavaScript",
    "TypeScript",
    "Node",
    "Git",
    "Deno",
    "Linux",
    "Hyprland",
    "Gnome"
  ],

  contact: {
    email: "saadxe8@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/nv8v",
      },
      Telegram: {
        name: "Telegram",
        url: "https://t.me/SetByte",
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/saad-v-03a5b8372?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
    },
  },

  resumeLink: "./documents/resume.pdf",

  futurePlans:
    "Diving into <strong>Linux Kernel</strong> with <strong>Arch</strong> and <strong>nixOS</strong> to master systems and configuration and understanding more about OS, and make my skills more better in web development inchaalah .",

  projects: [
    {
      title: "No Projects",
      active: false,
      description: "No ideas tbh",
      links: [],
    },
  ],
} as const;

declare global {
  namespace Lume {
    interface Data {
      resume: typeof resume;
    }
  }
}
