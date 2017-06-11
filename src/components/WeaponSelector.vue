<template>
  <select name="weapon" id="weapon" v-model="weaponSelector" @change="udpateWeapon">
    <option value="----">----</option>
    <optgroup label="Simple Melee Weapons">
      <option value="Club">Club</option>
      <option value="Dagger">Dagger</option>
      <option value="Greatclub">Greatclub</option>
      <option value="Handaxe">Handaxe</option>
      <option value="Javelin">Javelin</option>
      <option value="Light Hammer">Light Hammer</option>
      <option value="Mace">Mace</option>
      <option value="Quarterstaff">Quarterstaff</option>
      <option value="Sickle">Sickle</option>
      <option value="Spear">Spear</option>
      <option value="Unarmed Strike">Unarmed Strike</option>
    </optgroup>
    <optgroup label="Simple Ranged Weapons">
      <option value="Crossbow, light">Crossbow, light</option>
      <option value="Dart">Dart</option>
      <option value="Shortbow">Shortbow</option>
      <option value="Sling">Sling</option>
    </optgroup>
    <optgroup label="Martial Melee Weapons">
      <option value="Battleaxe">Battleaxe</option>
      <option value="Flail">Flail</option>
      <option value="Glaive">Glaive</option>
      <option value="Greataxe">Greataxe</option>
      <option value="Greatsword">Greatsword</option>
      <option value="Halberd">Halberd</option>
      <option value="Lance">Lance</option>
      <option value="Longsword">Longsword</option>
      <option value="Maul">Maul</option>
      <option value="Morningstar">Morningstar</option>
      <option value="Pike">Pike</option>
      <option value="Rapier">Rapier</option>
      <option value="Scimitar">Scimitar</option>
      <option value="Shortsword">Shortsword</option>
      <option value="Trident">Trident</option>
      <option value="War Pick">War Pick</option>
      <option value="Warhammer">Warhammer</option>
      <option value="Whip">Whip</option>
    </optgroup>
    <optgroup label="Martial Ranged Weapons">
      <option value="Blowgun">Blowgun</option>
      <option value="Crossbow, hand">Crossbow, hand</option>
      <option value="Crossbow, heavy">Crossbow, heavy</option>
      <option value="Longbow">Longbow</option>
      <option value="Net">Net</option>
    </optgroup>
  </select>
</template>



<script>
  export default {
    name: 'weapon-selector',
    props: ['weapon'],
    data () {
      return {
        weaponSelector: '----'
      }
    },
    created: function () {
      this.udpateWeapon()
    },
    methods: {
      udpateWeapon () {
        let weapon = {
          dmg: '1d4',
          type: 'blug.',
          modifier: 'str'
        }

        switch (this.weaponSelector) {
          case 'Dagger':
            weapon.type = 'pierc.'
            weapon.modifier = 'dex'
            break

          case 'Greatclub':
            weapon.dmg = '1d8'
            break

          case 'Handaxe':
            weapon.dmg = '1d6'
            weapon.type = 'slash.'
            break

          case 'Javelin':
            weapon.dmg = '1d6'
            weapon.type = 'pierc.'
            break

          case 'Mace':
            weapon.dmg = '1d6'
            break

          case 'Quarterstaff':
            weapon.dmg = '1d6'
            break

          case 'Sickle':
            weapon.type = 'slash.'
            break

          case 'Spear':
            weapon.dmg = '1d6'
            weapon.type = 'pierc.'
            break

          case 'Unarmed Strike':
            weapon.dmg = '1'
            break

          case 'Crossbow, light':
            weapon.dmg = '1d8'
            weapon.type = 'pierc.'
            weapon.modifier = 'dex'
            break

          case 'Dart':
            weapon.type = 'pierc.'
            weapon.modifier = 'dex'
            break

          case 'Shortbow':
            weapon.dmg = '1d6'
            weapon.type = 'pierc.'
            weapon.modifier = 'dex'
            break

          case 'Sling':
            weapon.modifier = 'dex'
            break

          case 'Battleaxe':
            weapon.dmg = '1d8'
            weapon.type = 'slash.'
            break

          case 'Flail':
            weapon.dmg = '1d8'
            break

          case 'Glaive':
            weapon.dmg = '1d10'
            weapon.type = 'slash.'
            break

          case 'Greataxe':
            weapon.dmg = '1d12'
            weapon.type = 'slash.'
            break

          case 'Greatsword':
            weapon.dmg = '2d6'
            weapon.type = 'slash.'
            break

          case 'Halberd':
            weapon.dmg = '1d10'
            weapon.type = 'slach.'
            break

          case 'Lance':
            weapon.dmg = '1d12'
            weapon.type = 'pierc.'
            break

          case 'Longsword':
            weapon.dmg = '1d8'
            weapon.type = 'slash.'
            break

          case 'Maul':
            weapon.dmg = '2d6'
            break

          case 'Morningstar':
            weapon.dmg = '1d8'
            weapon.type = 'pierc.'
            break

          case 'Pike':
            weapon.dmg = '1d10'
            weapon.type = 'pierc.'
            break

          case 'Rapier':
            weapon.dmg = '1d8'
            weapon.type = 'pierc.'
            weapon.modifier = 'dex'
            break

          case 'Scimitar':
            weapon.dmg = '1d6'
            weapon.type = 'slash.'
            weapon.modifier = 'dex'
            break

          case 'Shortsword':
            weapon.dmg = '1d6'
            weapon.type = 'pierc.'
            weapon.modifier = 'dex'
            break

          case 'Trident':
            weapon.dmg = '1d6'
            weapon.type = 'pierc.'
            break

          case 'War Pick':
            weapon.dmg = '1d8'
            weapon.type = 'pierc.'
            break

          case 'Warhammer':
            weapon.dmg = '1d8'
            break

          case 'Whip':
            weapon.type = 'slash.'
            weapon.modifier = 'dex'
            break

          case 'Blowgun':
            weapon.dmg = '1'
            weapon.type = 'pierc.'
            weapon.modifier = 'dex'
            break

          case 'Crossbow, hand':
            weapon.dmg = '1d6'
            weapon.type = 'pierc.'
            weapon.modifier = 'dex'
            break

          case 'Crossbow, heavy':
            weapon.dmg = '1d10'
            weapon.type = 'pierc.'
            weapon.modifier = 'dex'
            break

          case 'Longbow':
            weapon.dmg = '1d8'
            weapon.type = 'pierc.'
            weapon.modifier = 'dex'
            break

          case 'Net':
            weapon.dmg = '-'
            weapon.modifier = 'dex'
            break
        }

        this.$emit('update:weapon', weapon)
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
    width: 100%;
  }
</style>
