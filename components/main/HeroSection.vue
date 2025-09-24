<template>
  <section id="main" class="hero">
    <div class="hero-content">
      <a
        href="https://t.me/BPLimited"
        class="telegram-link _tg"
        target="_blank"
      >
        <CommonButtonWrap text="Связь со специалистом" />
      </a>
      <h1 class="hero__title">
        Всё о <span class="highlight">"Bland people limited"</span>
      </h1>
      <p class="hero__description">
        Визовая поддержка. Трудоустройство за границей.
      </p>
      <div class="hero__details">
        <p class="details-text">
          Визовые консультанты, эксперты по туризму и юристы по международному
          праву "Bland people limited" всегда окажут квалифицированную помощь и
          поддержку по вопросам оформления любых типов виз во все стран ы мира,
          а также в получении временного и постоянного вида на жительство в
          Европе.
        </p>
        <p class="details-text ml-auto">
          Основная миссия нашей команды - предоставить на самом высоком уровне
          профессиональную помощь по визовому сопровождению, качественно
          оформить иммиграционные разрешительные документы на выезд и дальнейшее
          пребывание за рубежом, высокий и стабильный заработок, комфортные
          условия и поддержка на всех этапах.
        </p>
      </div>
      <div class="hero__our-managers">
        <div class="left-part">
          <p class="text-about">Мы работаем для Вас!</p>
          <p class="schedule-text mb-20">
            <b>Понедельник - Пятница:</b> 08:00 - 22:00
          </p>
          <p class="schedule-text mb-20"><b>Суббота:</b> 09:00 - 20:00</p>
          <p class="schedule-text"><b>Воскресенье:</b> 10:00 - 19:00</p>
        </div>
        <div class="right-part">
          <p class="text-about">Наши менеджеры:</p>
          <div v-for="item of managers" class="wrap-manager-item mb-8">
            <a class="btn-item _tg" :href="item.link" target="_blank">
              <ButtonWrap text="Связаться" />
            </a>
            <p class="schedule-text underline">
              <b>
                <a class="pulse-icon ad1 _tg" :href="item.link" target="_blank">
                  @{{ item.name }}
                </a>
              </b>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ButtonWrap from "../common/ButtonWrap.vue";

const managers = [
  {
    link: "https://t.me/BPLimited",
    name: "BPLimited",
  },
];
</script>

<style scoped lang="scss">
.wrap-manager-item {
  display: flex;
  align-items: center;
  padding-left: rem(228);

  @include tablet() {
    padding-left: 0;
    display: flex;
    flex-direction: row-reverse;
  }
}
.hero {
  position: relative;
  width: 100%;
  background: linear-gradient(
      180deg,
      rgba(14, 14, 14, 0.2),
      rgba(14, 14, 14, 0.95)
    ),
    url("/visa-bg2.webp");
  background-size: cover;
  padding: rem(140) rem(70) rem(40) rem(70);
  overflow: hidden;

  @include tablet() {
    padding: rem(80) rem(14) rem(24) rem(14);
  }
}
.hero-content {
  position: relative;
  z-index: 1;
}
.hero__title {
  font-size: rem(56);
  font-family: "Montserrat-500";
  color: var(--c-white);
  letter-spacing: rem(2.5);

  @include tablet() {
    font-size: rem(38);
    text-align: center;
    letter-spacing: unset;
  }
}
.hero__description {
  font-size: rem(37);
  color: var(--c-white);
  margin-top: rem(12);

  @include tablet() {
    font-size: rem(26);
    text-align: center;
    margin-top: rem(24);
  }
}
.hero__details {
  width: 100%;
  margin-top: rem(80);

  @include tablet() {
    margin-top: rem(96);
  }
}
.details-text {
  width: 50%;
  font-size: rem(18);
  color: var(--c-white);
  text-align: center;
  border-left: 1px solid var(--c-white);
  border-bottom: 1px solid var(--c-white);
  padding: rem(12) 0 rem(24) rem(12);

  @include tablet() {
    width: 100%;
    padding: 0;
    border: none;

    &:not(:last-child) {
      margin-bottom: rem(24);
    }
  }
}
.telegram-link {
  position: absolute;
  top: rem(214);
  right: rem(0);
  left: unset;
  display: block;
  width: max-content;

  @include tablet() {
    right: unset;
    top: rem(188);
    left: 50%;
    transform: translateX(-50%);
  }
}
.hero__our-managers {
  width: 100%;
  display: flex;
  margin-top: rem(80);

  @include tablet() {
    margin-top: rem(42);
    display: block;
  }
}
.text-about {
  font-size: rem(42);
  font-family: "Montserrat-500";
  color: var(--c-white);
  margin-bottom: rem(42);

  @include tablet() {
    font-size: rem(26);
    margin-bottom: rem(12);
  }
}
.schedule-text {
  color: var(--c-white);
  font-size: rem(26);
  width: max-content;

  @include tablet() {
    font-size: rem(16);
  }

  & a {
    color: var(--c-white);
  }
}
.left-part,
.right-part {
  width: 50%;

  @include tablet() {
    width: 100%;
  }
}
.right-part .schedule-text {
  position: relative;
  margin-left: auto;
  margin-right: 0;
  margin-top: 0;

  @include tablet() {
    margin-right: auto;
    margin-left: 0;
  }
}
.right-part {
  margin-top: 0;

  @include tablet() {
    margin-top: rem(24);
  }
}
.right-part p {
  text-align: right;

  @include tablet() {
    text-align: left;
  }
}

.ml-auto {
  margin-left: auto;
}
.mb-8 {
  margin-bottom: rem(8);

  @include tablet() {
    margin-bottom: rem(10);
  }
}
.mb-20 {
  margin-bottom: rem(24);

  @include tablet() {
    margin-bottom: rem(12);
  }
}

.pulse-icon {
  position: relative;
  &.ad1::before {
    animation-delay: 0s;
  }
  &.ad2::before {
    animation-delay: 0.2s;
  }
  &.ad3::before {
    animation-delay: 0.4s;
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    right: rem(-22);
    width: rem(10);
    height: rem(10);
    border-radius: 50%;
    background-color: var(--c-white);
    transform: translateY(-40%);
    animation: pulse 1s ease-out infinite;
  }
}

@keyframes pulse {
  0% {
    transform: translateY(-40%) scale(1);
  }
  100% {
    transform: translateY(-40%) scale(0);
  }
}
</style>
