const character = {
      name: "Snortleblat",
      class: "Swamp Beast Diplomat",
      level: 5,
      health: 100,
      image: 'https://andejuli.github.io/wdd131/character_card/snortleblat.webp',
      attacked() {
        if (this.health >= 20) {
          this.health -= 20;
        } else {
            alert('Character Died');
        }
      },
      levelUp() {
        this.level += 1;
        this.health += 20;
      }
    };
    let imageBox = document.querySelector(".image");
    let nameBox = document.querySelector(".name");
    let levelBox = document.querySelector("#level");
    let classBox = document.querySelector("#class");
    let healthBar = document.querySelector("#health");

    imageBox.setAttribute("src", character.image);
    imageBox.setAttribute("alt", character.name);
    nameBox.textContent = character.name;
    levelBox.textContent = character.level;
    classBox.textContent = character.class;
    healthBar.textContent = character.health;

   function UpdateStats(){
    document.querySelector("#health").textContent = character.health;
    document.querySelector("#level").textContent = character.level;

   }

    let attack = document.querySelector("#attacked");
    let levelUp = document.querySelector("#levelup");

    attack.addEventListener("click",() =>{
      character.attacked();
      UpdateStats();
    });
    levelUp.addEventListener("click",() =>{
      character.levelUp();
      UpdateStats();
    });

    UpdateStats();