<template>
  <select name="class" id="class" v-model="classSelector" @change="udpateValues">
    <option value="----">----</option>
    <option value="barbarian">Barbarian</option>
    <option value="bard">Bard</option>
    <option value="cleric">Cleric</option>
    <option value="druid">Druid</option>
    <option value="fighter">Fighter</option>
    <option value="monk">Monk</option>
    <option value="paladin">Paladin</option>
    <option value="ranger">Ranger</option>
    <option value="rouge">Rouge</option>
    <option value="sorcerer">Sorcerer</option>
    <option value="warlock">Warlock</option>
    <option value="wizard">Wizard</option>
  </select>
</template>



<script>
  export default {
    name: 'class-selector',
    props: [
      'classType',
      'hitDie',
      'savingThrows'
    ],
    data () {
      return {
        classSelector: '----'
      }
    },
    created: function () {
      this.udpateValues()
    },
    methods: {
      udpateValues () {
        let hitDie = 8
        let savingThrows = {
          str: false,
          dex: false,
          const: false,
          int: false,
          wis: false,
          chr: false
        }

        switch (this.classSelector) {
          case 'barbarian':
            hitDie = 12
            savingThrows.str = true
            savingThrows.const = true
            break

          case 'wizard':
            hitDie = 6
            savingThrows.int = true
            savingThrows.wis = true
            break

          case 'sorcerer':
            hitDie = 6
            savingThrows.const = true
            savingThrows.chr = true
            break

          case 'bard':
            hitDie = 8
            savingThrows.dex = true
            savingThrows.chr = true
            break

          case 'cleric':
            hitDie = 8
            savingThrows.wis = true
            savingThrows.chr = true
            break

          case 'druid':
            hitDie = 8
            savingThrows.int = true
            savingThrows.wis = true
            break

          case 'monk':
            hitDie = 8
            savingThrows.dex = true
            savingThrows.wis = true
            break

          case 'rouge':
            hitDie = 8
            savingThrows.dex = true
            savingThrows.int = true
            break

          case 'warlock':
            hitDie = 8
            savingThrows.wis = true
            savingThrows.chr = true
            break

          case 'fighter':
            hitDie = 10
            savingThrows.str = true
            savingThrows.const = true
            break

          case 'paladin':
            hitDie = 10
            savingThrows.str = true
            savingThrows.chr = true
            break

          case 'ranger':
            hitDie = 10
            savingThrows.dex = true
            savingThrows.wis = true
            break
        }

        this.$emit('update:classType', this.classSelector)
        this.$emit('update:hitDie', hitDie)
        this.$emit('update:savingThrows', savingThrows)
      }
    }
  }
</script>



<style scoped>
  select {
    border: 0;
    background: transparent;
    width: 100%;
    font-size: inherit;
  }
</style>
