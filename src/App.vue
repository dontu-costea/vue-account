<script>
export default {
  mounted() {
    if (!this.$store.state.logged) {
      this.$router.push({ name: "mainPage" });
    }
  },
};
</script>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}
</style>
