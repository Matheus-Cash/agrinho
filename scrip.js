// script.js
class Agrinho {
    constructor() {
      this.farm = [];
      this.score = 0;
      this.farmList = document.getElementById("farm-list");
      this.scoreText = document.getElementById("score-text");
      this.plantBtn = document.getElementById("plant-btn");
      this.waterBtn = document.getElementById("water-btn");
      this.harvestBtn = document.getElementById("harvest-btn");
  
      this.plantBtn.addEventListener("click", () => this.plantSeed());
      this.waterBtn.addEventListener("click", () => this.waterSeed());
      this.harvestBtn.addEventListener("click", () => this.harvest());
    }
  
    plantSeed() {
      this.farm.push("seed");
      this.updateFarmList();
      console.log("You planted a seed!");
    }
  
    waterSeed() {
      if (this.farm.includes("seed")) {
        const index = this.farm.indexOf("seed");
        this.farm[index] = "sprout";
        this.updateFarmList();
        console.log("You watered the seed and it grew into a sprout!");
      } else {
        console.log("You don't have any seeds to water!");
      }
    }
  
    harvest() {
      if (this.farm.includes("sprout")) {
        const index = this.farm.indexOf("sprout");
        this.farm.splice(index, 1);
        this.score++;
        this.updateScore();
        console.log(`You harvested a sprout and earned 1 point! Your score is now ${this.score}.`);
      } else {
        console.log("You don't have any sprouts to harvest!");
      }
    }
  
    updateFarmList() {
      this.farmList.innerHTML = "";
      this.farm.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        this.farmList.appendChild(listItem);
      });
    }
  
    updateScore() {
      this.scoreText.textContent = `${this.score} points`;
    }
  }
  
  const game = new Agrinho();