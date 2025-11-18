const App = Vue.createApp({
  data() {
    return {
      newName: "",
      newColor: "#ffffffff",
      newRarity: "common",

      palette: [
            "#FFD6E8", "#FFC7D9", "#FFB6C1",
            "#F1E4FF", "#EAD7FF", "#DCC1FF",
            "#D6F3FF", "#C2F0FC", "#BEE8FF",
            "#E4FFE8", "#D7FFE2", "#C5FFD7",
            "#FFF3CD", "#FFF7B2", "#FFEFB5",
            "#FFF0DB", "#FFE5CC", "#FFD8B1",
      ],

      monsters: [
        { name: "Fluffy", color: "#FFD6E8", rarity: "common" },
        { name: "Gromp", color: "#D6F3FF", rarity: "uncommon" }
      ]
    };
  },

  methods: {
    addMonster() {
      if (this.newName.trim() === "") return;

      this.monsters.push({
        name: this.newName,
        color: this.newColor,
        rarity: this.newRarity
      });

      this.newName = "";
    },

    deleteMonster(index) {

      this.monsters.splice(index, 1);
    }
  }
});

App.mount('#app');
