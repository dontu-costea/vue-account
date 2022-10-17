<script>
import LoginForm from "@/components/LoginForm.vue";
import ProfilePage from "@/components/ProfilePage.vue";

export default {
  components: {
    LoginForm,
    ProfilePage,
  },
};
</script>

<template>
  <div>
    <login-form />
    <profile-page />
  </div>
</template>

<style lang="scss">
* {
  margin: 0px;
  padding: 0px;
}
</style>
