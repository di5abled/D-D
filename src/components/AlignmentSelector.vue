<template>
  <select name="alignment" id="alignment" v-model="alignmentSelector" @change="udpateValues">
    <option value="----">----</option>
    <option value="Lawful Good">Lawful Good</option>
    <option value="Lawful Neutral">Lawful Neutral</option>
    <option value="Lawful Evil">Lawful Evil</option>

    <option value="Neutral Good">Neutral Good</option>
    <option value="True Neutral">True Neutral</option>
    <option value="Neutral Evil">Neutral Evil</option>

    <option value="Chaotic Good">Chaotic Good</option>
    <option value="Chaotic Neutral">Chaotic Neutral</option>
    <option value="Chaotic Evil">Chaotic Evil</option>
  </select>
</template>



<script>
  export default {
    name: 'alignment-selector',
    props: ['alignment'],
    data () {
      return {
        alignmentSelector: '----'
      }
    },
    created: function () {
      this.udpateValues()
    },
    methods: {
      udpateValues () {
        this.$emit('update:alignment', this.alignmentSelector)
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
