<template>
  <div class="g-sider" :class="siderFoldStatus">
    <div v-if="this.$attrs.collapsible" class="g-sider-fold" @click="foldSider">
      <g-icon
        :name="!siderFoldStatus.folded ? 'double-left' : 'double-right'"
      />
    </div>
    <slot></slot>
  </div>
</template>
<script>
import Icon from "./icon";

export default {
  name: "GWSider",
  components: {
    "g-icon": Icon,
  },
  props: {
    collapsible: "",
  },
  data() {
    return {
      siderFoldStatus: {
        folded: false,
      },
    };
  },
  methods: {
    foldSider() {
      this.siderFoldStatus.folded = !this.siderFoldStatus.folded;
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.g-sider {
  min-width: 200px;
  position: relative;
  transition: all 0.3s;

  & > .g-sider-fold {
    position: absolute;
    right: 2px;
    top: 0px;
    cursor: pointer;
    fill: rgb(17, 68, 161);
  }
}
.folded {
  min-width: 0;
  transition: all 0.3s;
}
.sider-enter-active,
.sider-leave-active {
  transition: all 0.5s;
}
.sider-enter,
.sider-leave-to {
  margin-left: -200px;
}
</style>