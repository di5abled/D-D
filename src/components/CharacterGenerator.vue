<template>
    <section id="character-sheet">
      <input id="character__name" v-model="character.name">

      <input class="char-add-infos" id="armor_class" v-model="armor.class">
      <span class="char-add-infos" id="initiative" v-text="number(modifier(stats.dex))"></span>
      <input class="char-add-infos" id="character__speed" v-model="character.speed">

      <input id="character__hit_points" v-model="character.hit_points">
      <input id="character__hit_dice" v-model="character.hit_dice">

      <span id="proficency_bonus" v-text="number(proficency_bonus(character.level))"></span>
      <span id="passive_perception" v-text="10 + modifier(stats.wis) + ((skills.perception) ? proficency_bonus(character.level) : 0)"></span>

      <input id="character__level" class="character character-lvl1" v-model="character.level">
      <input id="character__class" class="character character-lvl1" v-model="character.class">
      <input id="character__background" class="character character-lvl1" v-model="character.background">
      <input id="player__name" class="character character-lvl1" v-model="player.name">

      <input id="character__race" class="character character-lvl2" v-model="character.race">
      <input id="character__alignment" class="character character-lvl2" v-model="character.alignment">
      <input id="character__xp" class="character character-lvl2" v-model="character.xp">

      <input id="weapon__one__name" class="weapon weapon__one weapon__name" v-model="weapons.one.name">
      <input id="weapon__one__atk" class="weapon weapon__one weapon__atk" v-model="weapons.one.atk">
      <input id="weapon__one__dmg" class="weapon weapon__one weapon__dmg" v-model="weapons.one.dmg">

      <input id="weapon__two__name" class="weapon weapon__two weapon__name" v-model="weapons.two.name">
      <input id="weapon__two__atk" class="weapon weapon__two weapon__atk" v-model="weapons.two.atk">
      <input id="weapon__two__dmg" class="weapon weapon__two weapon__dmg" v-model="weapons.two.dmg">

      <input id="weapon__three__name" class="weapon weapon__three weapon__name" v-model="weapons.three.name">
      <input id="weapon__three__atk" class="weapon weapon__three weapon__atk" v-model="weapons.three.atk">
      <input id="weapon__three__dmg" class="weapon weapon__three weapon__dmg" v-model="weapons.one.dmg">


      <div id="armor">
        Armor: <br>
        <armor :dex-bonus="modifier(stats.dex)"
               :armor-class.sync="armor.class"></armor>
      </div>


      <span id="stats__str__modifier" class="stat-modifier" v-text="number(modifier(stats.str))"></span>
      <input id="stats__str" class="stat" v-model="stats.str">

      <span id="stats__dex__modifier" class="stat-modifier" v-text="number(modifier(stats.dex))"></span>
      <input id="stats__dex" class="stat" v-model="stats.dex">

      <span id="stats__const__modifier" class="stat-modifier" v-text="number(modifier(stats.const))"></span>
      <input id="stats__const" class="stat" v-model="stats.const">

      <span id="stats__int__modifier" class="stat-modifier" v-text="number(modifier(stats.int))"></span>
      <input id="stats__int" class="stat" v-model="stats.int">

      <span id="stats__wis__modifier" class="stat-modifier" v-text="number(modifier(stats.wis))"></span>
      <input id="stats__wis" class="stat" v-model="stats.wis">

      <span id="stats__chr__modifier" class="stat-modifier" v-text="number(modifier(stats.chr))"></span>
      <input id="stats__chr" class="stat" v-model="stats.chr">


      <input type="checkbox" id="saving-throw__str" class="saving_skill" v-model="saving_throws.str"><label
      for="saving-throw__str" class="saving_skill__label" id="saving-throw__str__label"></label>
      <span class="saving_skill__value" id="saving-throw__str__value" v-text="number(modifier(stats.str) + ((saving_throws.str) ? proficency_bonus(character.level) : 0))"></span>

      <input type="checkbox" id="saving-throw__dex" class="saving_skill" v-model="saving_throws.dex"><label
      for="saving-throw__dex" class="saving_skill__label" id="saving-throw__dex__label"></label>
      <span class="saving_skill__value" id="saving-throw__dex__value" v-text="number(modifier(stats.dex) + ((saving_throws.dex) ? proficency_bonus(character.level) : 0))"></span>

      <input type="checkbox" id="saving-throw__const" class="saving_skill" v-model="saving_throws.const"><label
      for="saving-throw__const" class="saving_skill__label" id="saving-throw__const__label"></label>
      <span class="saving_skill__value" id="saving-throw__const__value" v-text="number(modifier(stats.const) + ((saving_throws.const) ? proficency_bonus(character.level) : 0))"></span>

      <input type="checkbox" id="saving-throw__int" class="saving_skill" v-model="saving_throws.int"><label
      for="saving-throw__int" class="saving_skill__label" id="saving-throw__int__label"></label>
      <span class="saving_skill__value" id="saving-throw__int__value" v-text="number(modifier(stats.int) + ((saving_throws.int) ? proficency_bonus(character.level) : 0))"></span>

      <input type="checkbox" id="saving-throw__wis" class="saving_skill" v-model="saving_throws.wis"><label
      for="saving-throw__wis" class="saving_skill__label" id="saving-throw__wis__label"></label>
      <span class="saving_skill__value" id="saving-throw__wis__value" v-text="number(modifier(stats.wis) + ((saving_throws.wis) ? proficency_bonus(character.level) : 0))"></span>

      <input type="checkbox" id="saving-throw__chr" class="saving_skill" v-model="saving_throws.chr"><label
      for="saving-throw__chr" class="saving_skill__label" id="saving-throw__chr__label"></label>
      <span class="saving_skill__value" id="saving-throw__chr__value" v-text="number(modifier(stats.chr) + ((saving_throws.chr) ? proficency_bonus(character.level) : 0))"></span>



      <input type="checkbox" id="skill__acrobatics" class="saving_skill" v-model="skills.acrobatics"><label
      for="skill__acrobatics" class="saving_skill__label" id="skill__acrobatics__label"></label>
      <span class="saving_skill__value" id="skill__acrobatics__value" v-html="number(modifier(stats.dex) + ((skills.acrobatics) ? proficency_bonus(character.level) : 0))"></span>

      <input type="checkbox" id="skill__animal_handling" class="saving_skill" v-model="skills.animal_handling"><label
      for="skill__animal_handling" class="saving_skill__label" id="skill__animal_handling__label"></label>
      <span class="saving_skill__value" id="skill__animal_handling__value" v-html="number(modifier(stats.wis) + ((skills.animal_handling) ? proficency_bonus(character.level) : 0))"></span>

      <input type="checkbox" id="skill__arcana" class="saving_skill" v-model="skills.arcana"><label for="skill__arcana" class="saving_skill__label" id="skill__arcana__label"></label>
      <span class="saving_skill__value" id="skill__arcana__value" v-html="number(modifier(stats.int) + ((skills.arcana) ? proficency_bonus(character.level) : 0))"></span>

      <input type="checkbox" id="skill__athletics" class="saving_skill" v-model="skills.athletics"><label
      for="skill__athletics" class="saving_skill__label" id="skill__athletics__label"></label>
      <span class="saving_skill__value" id="skill__athletics__value" v-html="number(modifier(stats.str) + ((skills.athletics) ? proficency_bonus(character.level) : 0))"></span>

      <input type="checkbox" id="skill__deception" class="saving_skill" v-model="skills.deception"><label
      for="skill__deception" class="saving_skill__label" id="skill__deception__label"></label>
      <span class="saving_skill__value" id="skill__deception__value" v-html="number(modifier(stats.chr) + ((skills.deception) ? proficency_bonus(character.level) : 0))"></span>

      <input type="checkbox" id="skill__history" class="saving_skill" v-model="skills.history"><label for="skill__history" class="saving_skill__label" id="skill__history__label"></label>
      <span class="saving_skill__value" id="skill__history__value" v-html="number(modifier(stats.int) + ((skills.history) ? proficency_bonus(character.level) : 0))"></span>

      <input type="checkbox" id="skill__insight" class="saving_skill" v-model="skills.insight"><label for="skill__insight" class="saving_skill__label" id="skill__insight__label"></label>
      <span class="saving_skill__value" id="skill__insight__value" v-html="number(modifier(stats.wis) + ((skills.insight) ? proficency_bonus(character.level) : 0))"></span>

      <input type="checkbox" id="skill__intimidation" class="saving_skill" v-model="skills.intimidation"><label
      for="skill__intimidation" class="saving_skill__label" id="skill__intimidation__label"></label>
      <span class="saving_skill__value" id="skill__intimidation__value" v-html="number(modifier(stats.chr) + ((skills.intimidation) ? proficency_bonus(character.level) : 0))"></span>

      <input type="checkbox" id="skill__investigation" class="saving_skill" v-model="skills.investigation"><label
      for="skill__investigation" class="saving_skill__label" id="skill__investigation__label"></label>
      <span class="saving_skill__value" id="skill__investigation__value" v-html="number(modifier(stats.int) + ((skills.investigation) ? proficency_bonus(character.level) : 0))"></span>

      <input type="checkbox" id="skill__medicine" class="saving_skill" v-model="skills.medicine"><label for="skill__medicine" class="saving_skill__label" id="skill__medicine__label"></label>
      <span class="saving_skill__value" id="skill__medicine__value" v-html="number(modifier(stats.wis) + ((skills.medicine) ? proficency_bonus(character.level) : 0))"></span>

      <input type="checkbox" id="skill__nature" class="saving_skill" v-model="skills.nature"><label for="skill__nature" class="saving_skill__label" id="skill__nature__label"></label>
      <span class="saving_skill__value" id="skill__nature__value" v-html="number(modifier(stats.int) + ((skills.nature) ? proficency_bonus(character.level) : 0))"></span>

      <input type="checkbox" id="skill__perception" class="saving_skill" v-model="skills.perception"><label
      for="skill__perception" class="saving_skill__label" id="skill__perception__label"></label>
      <span class="saving_skill__value" id="skill__perception__value" v-html="number(modifier(stats.wis) + ((skills.perception) ? proficency_bonus(character.level) : 0))"></span>

      <input type="checkbox" id="skill__performance" class="saving_skill" v-model="skills.performance"><label
      for="skill__performance" class="saving_skill__label" id="skill__performance__label"></label>
      <span class="saving_skill__value" id="skill__performance__value" v-html="number(modifier(stats.chr) + ((skills.performance) ? proficency_bonus(character.level) : 0))"></span>

      <input type="checkbox" id="skill__persuasion" class="saving_skill" v-model="skills.persuasion"><label
      for="skill__persuasion" class="saving_skill__label" id="skill__persuasion__label"></label>
      <span class="saving_skill__value" id="skill__persuasion__value" v-html="number(modifier(stats.chr) + ((skills.persuasion) ? proficency_bonus(character.level) : 0))"></span>

      <input type="checkbox" id="skill__religion" class="saving_skill" v-model="skills.religion"><label for="skill__religion" class="saving_skill__label" id="skill__religion__label"></label>
      <span class="saving_skill__value" id="skill__religion__value" v-html="number(modifier(stats.int) + ((skills.religion) ? proficency_bonus(character.level) : 0))"></span>

      <input type="checkbox" id="skill__sleight_of_hand" class="saving_skill" v-model="skills.sleight_of_hand"><label
      for="skill__sleight_of_hand" class="saving_skill__label" id="skill__sleight_of_hand__label"></label>
      <span class="saving_skill__value" id="skill__sleight_of_hand__value" v-html="number(modifier(stats.dex) + ((skills.sleight_of_hand) ? proficency_bonus(character.level) : 0))"></span>

      <input type="checkbox" id="skill__stealth" class="saving_skill" v-model="skills.stealth"><label for="skill__stealth" class="saving_skill__label" id="skill__stealth__label"></label>
      <span class="saving_skill__value" id="skill__stealth__value" v-html="number(modifier(stats.dex) + ((skills.stealth) ? proficency_bonus(character.level) : 0))"></span>

      <input type="checkbox" id="skill__survival" class="saving_skill" v-model="skills.survival"><label for="skill__survival" class="saving_skill__label" id="skill__survival__label"></label>
      <span class="saving_skill__value" id="skill__survival__value" v-html="number(modifier(stats.wis) + ((skills.survival) ? proficency_bonus(character.level) : 0))"></span>
    </section>
</template>



<script>
  import ArmorSelector from './ArmorSelector'

  export default {
    name: 'character-generator',
    components: {
      armor: ArmorSelector
    },
    data () {
      return {
        player: {
          name: 'M@'
        },
        character: {
          name: 'Azul',
          class: 'Sorcerer',
          level: 1,
          background: 'Outlander',
          race: 'Wood - Elf',
          alignment: 'Neutral',
          xp: '150 XP',
          speed: 30,
          hit_points: 9,
          hit_dice: '1d6'
        },
        armor: {
          class: undefined
        },
        weapons: {
          one: { name: 'Shortsword', atk: '+5', dmg: '1d6 +3 pierc.' },
          two: { name: 'Dagger', atk: '+4', dmg: '1d4 +2 slash.' },
          three: { name: 'Shortbow', atk: '+7', dmg: '1d6 +5 pierc.' }
        },
        stats: {
          str: 15,
          dex: 17,
          const: 10,
          int: 11,
          wis: 15,
          chr: 11
        },
        saving_throws: {
          str: true,
          dex: true,
          const: true,
          int: true,
          wis: true,
          chr: true
        },
        skills: {
          acrobatics: true,
          animal_handling: true,
          arcana: true,
          athletics: true,
          deception: true,
          history: true,
          insight: true,
          intimidation: true,
          investigation: true,
          medicine: true,
          nature: true,
          perception: true,
          performance: true,
          persuasion: true,
          religion: true,
          sleight_of_hand: true,
          stealth: true,
          survival: true
        }
      }
    },
    methods: {
      number (number) {
        return ((number >= 0) ? '+' : '') + number
      },
      modifier (value) {
        return Math.floor((value - 10) / 2)
      },
      proficency_bonus (level) {
        return Math.ceil(level / 4) + 1
      }
    }
  }
</script>



<style scoped>
  input {
    border: 0;
    background: transparent;
  }



  #character-sheet {
    position: relative;
    background-image: url('./../assets/character-sheet.jpg');
    background-size: cover;
    padding-bottom: 129.5%;
    width: 100%;
    height: 0;
  }



  #character__name {
    position: absolute;
    top: 7.8%;
    left: 7.5%;
    width: 34%;
    height: 2.3%;
    font-size: 3vw;
    text-align: center;
  }



  .char-add-infos {
    position: absolute;
    top: 18%;
    width: 6.5%;
    height: 3.5%;
    font-size: 3.5vw;
    text-align: center;
  }

  #armor_class {
    top: 17.6%;
    left: 37%;
  }

  #initiative {
    left: 46.4%;
  }

  #character__speed {
    left: 55.8%;
  }



  #character__hit_points {
    position: absolute;
    top: 24.7%;
    left: 48%;
    width: 6.5%;
    height: 1.5%;
    font-size: 1.5vw;
    text-align: left;
  }

  #character__hit_dice {
    position: absolute;
    top: 39.9%;
    left: 40.4%;
    width: 6.5%;
    height: 1.5%;
    font-size: 1.5vw;
    text-align: left;
  }



  #proficency_bonus {
    position: absolute;
    top: 21.4%;
    left: 15.8%;
    width: 3.5%;
    height: 2.3%;
    font-size: 2vw;
    text-align: center;
  }



  #passive_perception {
    position: absolute;
    top: 74.8%;
    left: 5%;
    width: 4%;
    height: 2.2%;
    font-size: 1.8vw;
    text-align: center;
  }



  .character {
    position: absolute;
    height: 1.75%;
    font-size: 1.7vw;
    text-align: left;
  }

  .character-lvl1 {
    top: 6.3%;
  }

  .character-lvl2 {
    top: 9.6%;
  }

  #character__level {
    left: 43.8%;
    width: 2.5%;
    text-align: center;
  }

  #character__class {
    left: 46.5%;
    width: 16%;
  }

  #character__background {
    left: 62.5%;
    width: 15.5%;
  }

  #player__name {
    left: 78.3%;
    width: 15.5%;
  }

  #character__race {
    left: 44%;
    width: 10.75%;
  }

  #character__alignment {
    left: 62.5%;
    width: 15.5%;
  }

  #character__xp {
    left: 78.3%;
    width: 15.5%;
  }



  .weapon {
    position: absolute;
    font-size: 1.8vw;
  }

  .weapon__one {
    top: 49.5%;
  }

  .weapon__two {
    top: 52%;
  }

  .weapon__three {
    top: 54.7%;
  }

  .weapon__name {
    left: 36.7%;
    width: 9.7%;
  }

  .weapon__atk {
    left: 48%;
    width: 4%;
  }

  .weapon__dmg {
    left: 53.8%;
    width: 9.2%;
  }



  #armor {
    position: absolute;
    top: 57.7%;
    left: 36.7%;
    font-size: 1.8vw;
  }



  .stat-modifier {
    position: absolute;
    left: 6%;
    width: 6%;
    height: 3.2%;
    font-size: 3vw;
    text-align: center;
  }

  .stat {
    position: absolute;
    left: 7.8%;
    width: 3%;
    height: 1.4%;
    font-size: 1.4vw;
    text-align: center;
  }

  #stats__str__modifier {
    top: 19.8%;
  }
  #stats__str {
    top: 23.6%;
  }

  #stats__dex__modifier {
    top: 28.8%;
  }
  #stats__dex {
    top: 32.7%;
  }

  #stats__const__modifier {
    top: 37.9%;
  }
  #stats__const {
    top: 41.7%;
  }

  #stats__int__modifier {
    top: 47%;
  }
  #stats__int {
    top: 50.8%;
  }

  #stats__wis__modifier {
    top: 56%;
  }
  #stats__wis {
    top: 59.8%;
  }

  #stats__chr__modifier {
    top: 65.1%;
  }
  #stats__chr {
    top: 68.8%;
  }



  .saving_skill {
    display: none;
  }

  .saving_skill__label {
    display: block;
    position: absolute;
    left: 16.7%;
    border-radius: 50%;
    margin-top: 1%;
    padding-bottom: 0.8%;
    width: 0.8%;
    height: 0;
    cursor: pointer;
  }

  input[type=checkbox]:checked + .saving_skill__label {
    background: black;
  }

  .saving_skill__value {
    position: absolute;
    left: 18.5%;
    font-size: 1.5vw;
    line-height: 1.8;
  }

  #saving-throw__str__label,
  #saving-throw__str__value {
    top: 25.6%;
  }

  #saving-throw__dex__label,
  #saving-throw__dex__value {
    top: 27.3%;
  }

  #saving-throw__const__label,
  #saving-throw__const__value {
    top: 29%;
  }

  #saving-throw__int__label,
  #saving-throw__int__value {
    top: 30.7%;
  }

  #saving-throw__wis__label,
  #saving-throw__wis__value {
    top: 32.4%;
  }

  #saving-throw__chr__label,
  #saving-throw__chr__value {
    top: 34.1%;
  }



  #skill__acrobatics__label,
  #skill__acrobatics__value {
    top: 40.2%;
  }

  #skill__animal_handling__label,
  #skill__animal_handling__value {
    top: 41.9%;
  }

  #skill__arcana__label,
  #skill__arcana__value {
    top: 43.5%;
  }

  #skill__athletics__label,
  #skill__athletics__value {
    top: 45.3%;
  }

  #skill__deception__label,
  #skill__deception__value {
    top: 47%;
  }

  #skill__history__label,
  #skill__history__value {
    top: 48.7%;
  }

  #skill__insight__label,
  #skill__insight__value {
    top: 50.4%;
  }

  #skill__intimidation__label,
  #skill__intimidation__value {
    top: 52.1%;
  }

  #skill__investigation__label,
  #skill__investigation__value {
    top: 53.8%;
  }

  #skill__medicine__label,
  #skill__medicine__value {
    top: 55.5%;
  }

  #skill__nature__label,
  #skill__nature__value {
    top: 57.2%;
  }

  #skill__perception__label,
  #skill__perception__value {
    top: 58.9%;
  }

  #skill__performance__label,
  #skill__performance__value {
    top: 60.6%;
  }

  #skill__persuasion__label,
  #skill__persuasion__value {
    top: 62.3%;
  }

  #skill__religion__label,
  #skill__religion__value {
    top: 64%;
  }

  #skill__sleight_of_hand__label,
  #skill__sleight_of_hand__value {
    top: 65.7%;
  }

  #skill__stealth__label,
  #skill__stealth__value {
    top: 67.4%;
  }

  #skill__survival__label,
  #skill__survival__value {
    top: 69.1%;
  }
</style>
