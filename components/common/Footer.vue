<template>
  <footer id="contacts" class="footer">
    <div class="footer__left">
      <div class="footer-overlay" />
      <img src="/footer.webp" class="inner-img" alt="Great Britain" />
    </div>
    <div class="footer__right">
      <p class="in-touch">На связи с нами</p>
      <h4 class="footer__title">
        <span class="highlight">Контактная</span> информация
      </h4>
      <p class="our-managers">Наши <span class="highlight">вакансии: </span></p>
      <div class="contacts-info">
        <a href="https://t.me/ukrecruitmentt" target="_blank">
          <CommonButtonWrap text="Посмотреть вакансии" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.our-managers {
  font-size: rem(32);
  color: var(--c-white);
  margin-top: rem(40);

  @include tablet() {
    margin-top: rem(18);
    font-size: rem(28);
  }
}
.wrap_some {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.footer {
  display: flex;
  overflow: hidden;

  @include tablet() {
    display: block;
  }
}
.footer__left,
.footer__right {
  position: relative;
  width: 50%;
  background-color: var(--c-black);
  overflow: hidden;

  @include tablet() {
    width: 100%;
  }
}
.inner-img {
  transition: all 0.2s ease-out;
}
.footer__left:hover .inner-img {
  transform: scale(1.05);
}
.footer__left {
  @include tablet() {
    display: none;
  }
}
.footer-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--c-black2);
  opacity: 0.5;
  z-index: 1;
}
.footer__right {
  padding: rem(60);

  @include tablet() {
    padding: rem(24) rem(14);
  }
}
.in-touch {
  font-size: rem(18);
  font-family: "Montserrat-500";
  color: var(--c-gray);
}
.footer__title {
  font-size: rem(34);
  font-family: "Montserrat-500";
  text-transform: uppercase;
  margin-top: rem(16);
  color: var(--c-white);

  @include tablet() {
    margin-top: rem(18);
  }
}
.contacts-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 1.5rem;
}
.contact-item {
  display: flex;
  align-items: center;
  font-size: rem(20);
  color: var(--c-white);
  margin-top: rem(24);
}
.contact-item a {
  font-family: "Montserrat-500";
}
.mt80 {
  margin-top: rem(80);
}
.highlight.underline {
  &::after {
    background-color: #c8102e;
  }
}
.ad1,
.ad2,
.ad3 {
  color: var(--c-white);
}
</style>
