<template>
  <div>
    <slot> </slot> <button @click="$emit('changeNum', 7);">changeNum</button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {},
  props: {},
  computed: {},
  methods: {},
  watch: {}
};
</script>
<style></style>
