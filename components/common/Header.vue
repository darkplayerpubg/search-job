<template>
  <header class="header">
    <a href="#main" class="header__logo">Recruitment UK</a>
    <nav class="header__nav">
      <a class="nav-item underline" href="#history">О нас</a>
      <a class="nav-item underline" href="#reviews">Отзывы</a>
      <a class="nav-item underline" href="#contacts">Контакты</a>
    </nav>
    <a
      href="https://t.me/ukrecruitmentt"
      target="_blank"
      class="header-phone underline"
    >
      @_Recruitment UK
    </a>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem rem(70);
  background-color: transparent;
  z-index: var(--z-header);
  background-color: rgba(13, 13, 13, 0.4);
  backdrop-filter: blur(16px);

  @include tablet() {
    padding: rem(8) rem(12);
  }
}
.header__logo {
  font-size: rem(42);
  font-family: "Montserrat-500";
  color: var(--c-white);

  @include tablet() {
    font-size: rem(18);
  }
}
.header-phone {
  font-size: rem(18);
  font-family: "Montserrat-500";
  color: var(--c-white);

  @include mobile() {
    font-size: rem(14);
  }
}
.header__nav {
  display: flex;
  align-items: center;

  @include tablet() {
    display: none;
  }
}
.nav-item {
  font-size: rem(16);
  color: var(--c-white);

  &:not(:last-child) {
    margin-right: rem(40);
  }
}
</style>
