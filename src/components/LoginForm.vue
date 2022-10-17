<script>
export default {};
</script>

<template>
  <div class="wrapper">
    <div class="login__block">
      <div class="form__title">Log In</div>
      <div class="email__block">
        <input
          type="text"
          name="email"
          placeholder="Your Email"
          class="login__input"
          id="login__email"
        />
      </div>
      <div class="password__block">
        <input
          type="password"
          name="password"
          placeholder="Your Password"
          class="login__input"
          id="login__password"
        />
      </div>
      <button class="submit" id="login__submit">SUBMIT</button>
      <a href="#" class="forgot-pass">Forgot your password?</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
    color: #b7b9c2;
    .email__block,
    .password__block {
      width: 80%;
      position: relative;
      input {
        font-size: 18px;
        border: 1px solid #1a1c22;
        border-radius: 4px;
        background: #1a1c22;
        margin: 7px 0px;
        padding: 12px 15px 12px 45px;
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
