<script>
export default {
  data: () => ({
    newPassword: "",
  }),
  methods: {
    /*changePassword() {
      this.$store.state.defaultPassword = this.newPassword;
    },*/
  },
};
</script>

<template>
  <div>
    <input v-model="newPassword" type="text" />
    <button
      type="submit"
      @click="this.$store.mutations.changePassword(this.newPassword)"
    >
      Save
    </button>
    <button type="submit">Change password</button>
  </div>
</template>

<style lang="scss" scoped></style>
