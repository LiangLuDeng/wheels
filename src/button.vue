<template>
  <button class="g-button dengll" :class="{[`icon-${iconposition}`]: true}" @click="$emit('click')">
    <g-icon class="icon-loading icon" v-if="loading" name="loading"></g-icon>
    <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
    <div class="content">
      <slot/>  
    </div>
  </button> 
</template>
<script>
// import Vue from 'vue'
import Icon from './icon'
// Vue.component('g-icon', Icon)
export default {
  name:'GWButon',
  components:{
    'g-icon': Icon,
  },
  props:{
    icon:{},
    loading:{
      type: Boolean,
      default: false,
    },
    iconposition:{
      type: String,
      default: 'left',
      validator (value) {
        //校验器
        return ['left', 'right'].includes(value)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
  .g-button {
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    // margin: 10px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    > .icon {
      order: 2;
    }
    > .content{
      order: 1;
    }

    &.icon-left {
      > .icon {
        order: 1;
      }
      > .content{
        order: 2;
      }
    }
    .icon-loading {
      animation: spin 1.1s infinite linear;
    }
  }

  .g-button:hover {
    border-color: var(--border-color-hover);
  }
  .g-button:active {
    background-color: var(--button-active-bg);
  }
  .g-button:focus {
    outline: none;
  }
</style>