<script>
export default {
  data: () => ({
    newPassword: "",
  }),
  methods: {
    changePassword() {
      this.$store.commit("changePassword", this.newPassword);
    },
  },
};
</script>

<template>
  <div>
    <input v-model="newPassword" type="text" />
    <button type="submit" @click="changePassword">Save</button>
    <button type="submit">Change password</button>
  </div>
</template>

<style lang="scss" scoped></style>
