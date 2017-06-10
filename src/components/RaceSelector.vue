<template>
  <select name="class" id="class" v-model="raceSelector" @change="udpateValues">
    <option value="----">----</option>
    <option value="dwarf">Dwarf</option>
    <option value="dwarf-hill">Dwarf - Hill</option>
    <option value="dwarf-mountain">Dwarf - Mountain</option>
    <option value="elf">Elf</option>
    <option value="elf-high">Elf - High</option>
    <option value="elf-wood">Elf - Wood</option>
    <option value="halfling">Halfling</option>
    <option value="halfling-lightfood">Halfling - Lightfood</option>
    <option value="halfling-stout">Halfling - Stout</option>
    <option value="human">Human</option>
    <option value="dragonborn">Dragonborn</option>
    <option value="gnome">Gnome</option>
    <option value="gnome-forest">Gnome - Forest</option>
    <option value="gnome-rock">Gnome - Rock</option>
    <option value="half-elf">Half-Elf</option>
    <option value="half-orc">Half-Orc</option>
    <option value="thiefling">Thiefling</option>
  </select>
</template>



<script>
  export default {
    name: 'race-selector',
    props: [
      'race',
      'speed'
    ],
    data () {
      return {
        raceSelector: '----'
      }
    },
    created: function () {
      this.udpateValues()
    },
    methods: {
      udpateValues () {
        let speed = 30

        switch (this.raceSelector) {
          case 'dwarf':
          case 'dwarf-hill':
          case 'dwarf-mountain':
            speed = 25
            break

          case 'elf-wood':
            speed = 35
            break
        }

        this.$emit('update:race', this.raceSelector)
        this.$emit('update:speed', speed)
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
