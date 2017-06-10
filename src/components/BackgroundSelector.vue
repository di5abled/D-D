<template>
  <select name="background" id="background" v-model="backgroundSelector" @change="udpateValues">
    <option value="----">----</option>
    <option value="Acolyte">Acolyte</option>
    <option value="Charlatan">Charlatan</option>
    <option value="Criminal">Criminal</option>
    <option value="Entertainer">Entertainer</option>
    <option value="Folk Hero">Folk Hero</option>
    <option value="Guid Artisan">Guid Artisan</option>
    <option value="Hermit">Hermit</option>
    <option value="Noble">Noble</option>
    <option value="Outlander">Outlander</option>
    <option value="Sage">Sage</option>
    <option value="Sailor">Sailor</option>
    <option value="Soldier">Soldier</option>
    <option value="Urchin">Urchin</option>
  </select>
</template>



<script>
  export default {
    name: 'background-selector',
    props: ['background'],
    data () {
      return {
        backgroundSelector: '----'
      }
    },
    created: function () {
      this.udpateValues()
    },
    methods: {
      udpateValues () {
        let skills = {}

        switch (this.backgroundSelector) {
          case 'Charlatan':
            skills.deception = true
            skills.sleight_of_hand = true
            break

          case 'Criminal':
            skills.deception = true
            skills.stealth = true
            break

          case 'Entertainer':
            skills.acrobatics = true
            skills.performance = true
            break

          case 'Folk Hero':
            skills.animal_handling = true
            skills.survival = true
            break

          case 'Guid Artisan':
            skills.insight = true
            skills.persuasion = true
            break

          case 'Hermit':
            skills.medicine = true
            skills.religion = true
            break

          case 'Noble':
            skills.history = true
            skills.persuasion = true
            break

          case 'Outlander':
            skills.athletics = true
            skills.survival = true
            break

          case 'Sage':
            skills.arcana = true
            skills.history = true
            break

          case 'Sailor':
            skills.athletics = true
            skills.perception = true
            break

          case 'Soldier':
            skills.athletics = true
            skills.intimidation = true
            break

          case 'Urchin':
            skills.sleight_of_hand = true
            skills.stealth = true
            break
        }

        this.$emit('update:background', this.backgroundSelector)
        this.$emit('change', { skills })
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
