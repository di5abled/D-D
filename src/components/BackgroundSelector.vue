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
        this.$emit('update:background', this.backgroundSelector)
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
