const App = Vue.createApp({
  data() {
    return {
      newName: "",
      newColor: "#ffb6c1",
      newRarity: "common",

      monsters: [
        { name: "Fluffy", color: "#ffe4e1", rarity: "common" },
        { name: "Gromp", color: "#c2f0fc", rarity: "uncommon" }
      ]
    };
  },

  methods: {
    addLabubu() {
      if (this.newName.trim() === "") return;

      this.monsters.push({
        name: this.newName,
        color: this.newColor,
        rarity: this.newRarity
      });

      this.newName = "";
    }
  }
});

App.mount('#app');
