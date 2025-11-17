new Vue({
      el: '#app',
      data: {
        newName: "",
        newMood: "",
        newColor: "#ffb6c1",
        newRarity: "common",

        monsters: [
          { name: "Fluffu", mood: "glad", color: "#ffe4e1", rarity: "rare" },
          { name: "Gnask", mood: "sur", color: "#c2f0fc", rarity: "common" }
        ]
      },
      methods: {
        addMonster() {
          if (this.newName.trim() === "" || this.newMood.trim() === "") return;

          this.monsters.push({
            name: this.newName,
            mood: this.newMood,
            color: this.newColor,
            rarity: this.newRarity
          });

          this.newName = "";
          this.newMood = "";
        }
      }
    });