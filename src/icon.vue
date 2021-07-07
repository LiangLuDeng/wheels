<template>
  <svg class="g-icon">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>
<script>
import './svg'
export default {
  name:'icon',
  props:{
    name: {}
  }
}
</script>
<style lang="scss" scoped>
 .g-icon {
    width: 1em;
    height: 1em;
    font-size: 1.2em;
    padding: 0.5px;
  }
</style>