<script>
export default {
  data: () => ({
    email: "",
    password: "",
    passwordBorderColor: "#1a1c22",
    emailBorderColor: "#1a1c22",
  }),
  methods: {
    formValidation() {
      if (
        this.$store.state.defaultEmail === this.email &&
        this.$store.state.defaultPassword === this.password
      ) {
        this.$store.state.logged = true; // not sure
        this.$router.push({ name: "profile" });
        this.emailBorderColor = "#1a1c22";
        this.passwordBorderColor = "#1a1c22";
      } else {
        if (this.$store.state.defaultEmail !== this.email) {
          this.emailBorderColor = "red";
        } else {
          this.emailBorderColor = "#1a1c22";
        }

        if (this.$store.state.defaultPassword !== this.password) {
          this.passwordBorderColor = "red";
        } else {
          this.passwordBorderColor = "#1a1c22";
        }
      }
    },
  },
};
</script>

<template>
  <div class="wrapper">
    <div class="login__block" @keyup.enter="formValidation">
      <div class="form__title">Log In</div>
      <div class="email__block">
        <fa icon="fa-solid fa-at" class="form__icon" />
        <input
          v-model="email"
          type="text"
          name="email"
          placeholder="Your Email"
          class="login__input"
          id="login__email"
          :style="{ border: '1px' + ' solid ' + this.emailBorderColor }"
        />
      </div>
      <div class="password__block">
        <fa icon="fa-solid fa-lock" class="form__icon" />
        <input
          v-model="password"
          type="password"
          name="password"
          placeholder="Your Password"
          class="login__input"
          id="login__password"
          :style="{ border: '1px' + ' solid ' + this.passwordBorderColor }"
        />
      </div>
      <button class="submit" id="login__submit" @click="formValidation">
        SUBMIT
      </button>
      <a href="#" class="forgot-pass">Forgot your password?</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

* {
  color: #b7b9c2;
  transition: 0.2s all ease;
}
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: #1a1c22;
  .login__block {
    background: #292735;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 420px;
    height: 420px;
    padding: 0px 33px;
    .email__block,
    .password__block {
      width: 100%;
      position: relative;
      .form__icon {
        position: absolute;
        left: 15px;
        top: 20px;
        font-size: 21px;
        color: #fbe59a;
      }
      input {
        font-size: 18px;
        border: 1px solid #1a1c22;
        border-radius: 4px;
        background: #1a1c22;
        margin: 7px 0px;
        padding: 12px 12px 12px 45px;
        outline: none;
        box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
        width: 100%;
      }
    }
  }
}

.submit {
  font-size: 14px;
  font-weight: bold;
  color: #1a1c22;
  background: #fbe59a;
  padding: 12px 30px;
  border: 1px solid #fbe59a;
  border-radius: 5px;
  cursor: pointer;
  margin: 25px 0px;
  transform: translateZ(30px);
  box-shadow: 0px 7px 65px -18px #fbe59a;
  backface-visibility: hidden;
}
.submit:hover {
  background-color: #112264;
  border: 1px solid #112264;
  color: #fbe59a;
  box-shadow: none;
}
.forgot-pass {
  margin: 10px 0px 30px 0px;
  text-decoration: none;
  transform: translateZ(30px);
  backface-visibility: hidden;
}
.forgot-pass:hover {
  color: #fbe59a;
}
.form__title {
  font-size: 26px;
  font-weight: bold;
  margin: 30px 0px;
  transform: translateZ(30px);
  backface-visibility: hidden;
}
</style>
