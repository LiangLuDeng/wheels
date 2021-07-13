<template>
  <div class="g-layout" :class="layoutClass">
    <slot></slot> 
  </div>
</template>
<script>
export default {
  name: 'GWLayout',
  data() {
    return {
      layoutClass:{
        hasSider: false,
      }
    }
  },
  mounted(){
    if (this.$children.some(child => child.$options.name === 'GWSider')) this.layoutClass.hasSider = true;
  }
}
</script>
<style lang="scss" scoped>
.g-layout {
  display: flex;
  flex-direction: column;
  // border: 1px solid green;
}
.hasSider {
    flex-direction: row;
}
</style>