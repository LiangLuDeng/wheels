<template>
  <div class="wrapper" :class="{ error: error }">
    <input
      :value="value"
      type="text"
      class="g-input"
      :disabled="disabled"
      @change="$emit('change', $event)"
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event)"
      @input="$emit('input', $event)"
    />
    <template v-if="etype">
      <icon :name="etype" :class="inputclassname(etype)"></icon>
      <span v-if="emsg" :class="inputclassname(etype)">{{ emsg }}</span>
    </template>
  </div>
</template>
<script>
import Icon from "./icon";

export default {
  name: "GWInput",
  components: {
    Icon,
  },
  props: {
    value: {
      type: String,
      default: "",
    },
    emsg: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    etype: {
      type: String,
    },
  },
  methods: {
    inputclassname: (etype) => (etype ? `icon-${etype}` : ""),
  },
};
</script>

<style lang="scss" scoped>
$font-size: 12px;
$border-color: #999;
$height: 32px;
$box-shadow-color: rbga(0, 0, 0, 0.5);
$border-hover-color: #666;
.wrapper {
  font-size: $font-size;
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
  column-gap: 3px;
  > input {
    height: $height;
    border: 1px solid $border-color;
    border-radius: var(--border-radius);
    font-size: inherit;
    padding: 0px 8px;
    &:hover {
      border-color: $border-hover-color;
    }
    &:focus {
      box-shadow: 0 1px 3px $box-shadow-color;
    }
    &:focus-visible {
      outline-style: unset;
    }
    &[disabled] {
      border-color: #bbb;
      color: #bbb;
      cursor: not-allowed;
    }
  }
  &.error {
    > input {
      border-color: red;
    }
  }
  .icon-error {
    fill: var(--error-color);
    color: var(--error-color);
  }
  .icon-warn {
    fill: var(--warn-color);
    color: var(--warn-color);
  }
  .icon-info {
    fill: var(--info-color);
    color: var(--info-color);
  }
  .icon-success {
    fill: var(--success-color);
    color: var(--success-color);
  }
}
</style>

