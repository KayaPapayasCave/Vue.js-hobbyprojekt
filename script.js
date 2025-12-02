const App = Vue.createApp({
  data() {
    return {
      newName: "",
      newColor: "#ffffffff",
      newRarity: "",

      sortMethod: "none",
      filterRarity: "all",

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
  },

  computed: {
    sortedAndFiltered() {
      let list = [...this.monsters];

      if (this.filterRarity !== "all") {
        list = list.filter(m => m.rarity === this.filterRarity);
      }

      if (this.sortMethod === "name") {
        list.sort((a, b) => a.name.localeCompare(b.name));
      }

      if (this.sortMethod === "rarity") {
        const order = {
          common: 0,
          uncommon: 1,
          rare: 2,
          epic: 3,
          legendary: 4,
          mythic: 5
        };

        list.sort((a, b) => {
          const diff = order[a.rarity] - order[b.rarity];
          if (diff !== 0) return diff;
          return a.name.localeCompare(b.name);
        });
      }

      return list;
    }
  },
});

App.mount('#app');
