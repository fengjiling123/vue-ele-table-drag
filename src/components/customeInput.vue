<template>
  <div>
    <input
      :value="value"
      @input="$emit('input', $event.target.value);"
      v-bind="$attrs"
    />
  </div>
</template>
<script>
export default {
  name: "custome-input",
  data() {
    return {};
  },
  inheritAttrs: false,
  props: {
    value: {
      required: true,
      type: [Number, String]
    }
  },
  mounted() {
    console.log(this.$attrs);
  }
};
</script>
<style></style>
