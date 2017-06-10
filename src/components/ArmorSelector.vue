<template>
  <div>
    <select name="armor" id="armor" v-model="armor" @change="calcArmorClass">
      <option value="----">----</option>
      <optgroup label="Light Armor">
        <option value="padded">Padded</option>
        <option value="leather">Leather</option>
        <option value="studded_leather">Studded Leather</option>
      </optgroup>
      <optgroup label="Medium Armor">
        <option value="hide">Hide</option>
        <option value="chain_shirt">Chain Shirt</option>
        <option value="scale_mail">Scale Mail</option>
        <option value="breast_plate">Breastplate</option>
        <option value="half_plate">Half Plate</option>
      </optgroup>
      <optgroup label="Heavy Armor">
        <option value="ring_mail">Ring Mail</option>
        <option value="chain_mail">Chain Mail</option>
        <option value="splint">Splint</option>
        <option value="plate">Plate</option>
      </optgroup>
    </select>

    <label for="shield">Shield:</label>
    <input type="checkbox" name="shield" id="shield" v-model="shield" @change="calcArmorClass">
    <label for="shield"></label>
  </div>
</template>



<script>
  export default {
    name: 'armor-selector',
    props: [
      'dexBonus',
      'armorClass'
    ],
    data () {
      return {
        armor: '----',
        shield: false
      }
    },
    created: function () {
      this.calcArmorClass()
    },
    watch: {
      dexBonus: function () {
        this.calcArmorClass()
      }
    },
    methods: {
      calcArmorClass () {
        let az = 10

        switch (this.armor) {
          case 'padded':
          case 'leather':
            az = 11 + this.dexBonus
            break

          case 'studded_leather':
            az = 12 + this.dexBonus
            break

          case 'hide':
            az = 12 + Math.max(this.dexBonus, 2)
            break

          case 'chain_shirt':
            az = 13 + Math.max(this.dexBonus, 2)
            break

          case 'scale_mail':
          case 'breast_plate':
            az = 14 + Math.max(this.dexBonus, 2)
            break

          case 'half_plate':
            az = 15 + Math.max(this.dexBonus, 2)
            break

          case 'ring_mail':
            az = 14
            break

          case 'chain_mail':
            az = 16
            break

          case 'splint':
            az = 17
            break

          case 'plate':
            az = 18
            break

          default:
            az += this.dexBonus
        }

        if (this.shield) {
          az += 2
        }

        this.$emit('update:armorClass', az)
      }
    }
  }
</script>



<style scoped>
  label,
  select {
    font-size: inherit;
  }

  select {
    border: 0;
    background: transparent;
    width: 62%;
  }

  input[type=checkbox] {
    display: none;
  }

  input[type=checkbox] + label {
    position: absolute;
    margin-top: 1%;
    margin-left: 3%;
    box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.5), 0px 1px 0px rgba(255, 255, 255, 0.4);
    border-radius: 4px;
    background: linear-gradient(to bottom, #222222 0%, #45484d 100%);
    padding-bottom: 8%;
    width: 8%;
    height: 0;
    cursor: pointer;
  }

  input[type=checkbox] + label:after {
    position: absolute;
    top: 0.5vw;
    left: 0.4vw;
    border: 3px solid #fcfff4;
    border-top: none;
    border-right: none;
    background: transparent;
    transform: rotate(-45deg);
    width: 0.8vw;
    height: 0.4vw;
    opacity: 0;
    content: '';
  }

  input[type=checkbox] + label:hover::after {
     opacity: 0.3;
  }

  input[type=checkbox]:checked + label:after {
     opacity: 1;
  }
</style>
