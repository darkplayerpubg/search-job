<template>
  <section id="history" class="history">
    <img class="history__gb" src="/gb.png" alt="Great Britain" />
    <div class="history__left">
      <div class="history__left-overlay" />
      <img src="/visa.png" class="inner-img" alt="visa image" />
    </div>
    <div class="history__right">
      <h2 class="history__title">
        История нашего <span class="highlight">иммиграционного центра</span>
      </h2>
      <p class="history-text mt32">
        Наша компания начала свою деятельность в качестве турагенства в 2017
        году, затем мы "переросли" в туроператора по экзотическим направлениям.
        На сегодняшний день, мы перепрофилировались в иммиграционно-визовое
        агенство по оказанию услуг визовой поддержки и помощи в решении
        миграционных вопросов.
      </p>
      <p class="history-text mt24">
        За длительное время нашего существования у нас накопилась огромная база
        клиентов, которые пользовались предоставляемыми услугами агентства на
        протяжении многих лет.
      </p>
      <p class="history-text mt24">
        Мы, ни в коем случае, не можем отказать нашим постоянным клиентам,
        которые систематически обращались в нашу фирму еще со времен нашего
        существования в качестве туристической компании, поэтому, до сих пор,
        регулярно оказываем помощь и всяческое содействие в приобретении
        туристических пакетов по разным направлениям и странам, предоставляем
        лучшие рабочие места за границей. Сопровождаем на всех этапах.
      </p>
      <a
        href="https://t.me/ukrecruitmentt"
        target="_blank"
        class="more-info__link _tg"
      >
        <CommonButtonWrap text="Узнать больше" dark />
      </a>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.history {
  position: relative;
  width: 100%;
  display: flex;
  background-color: #fefefe;
  overflow: hidden;
}
.history__gb {
  position: absolute;
  top: 50%;
  left: 18%;
  width: rem(400);
  transform: translate(0, -50%);
  z-index: 2;
  opacity: 0.25;
  transition: opacity 0.5s ease-in;
  pointer-events: unset;

  &:hover {
    opacity: 1;
  }

  @include tablet() {
    opacity: 0.05;
    left: 50%;
    top: 50%;
    pointer-events: none;
    transform: translate(-50%, -50%);
  }
}
.history__left {
  position: relative;
  width: 35%;
  flex: 1;
  display: block;

  @include tablet() {
    display: none;
  }
}
.history__right {
  width: 65%;
  height: 100%;
  padding: rem(80) rem(40) rem(40) rem(140);

  @include tablet() {
    width: 100%;
    padding: rem(24) rem(14);
  }
}
.history__left-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--c-black);
  opacity: 0.5;
  z-index: 1;
}
.history__title {
  font-size: rem(52);
  font-family: "Montserrat-500";
  color: var(--c-black2);
  text-align: left;

  @include tablet() {
    font-size: rem(32);
    text-align: center;
  }
}
.history-text {
  width: 80%;
  font-size: rem(16);
  color: var(--c-black2);

  @include tablet() {
    width: 100%;
  }
}
.more-info__link {
  display: block;
  width: max-content;
  margin: 0 auto;
  margin-top: rem(60);

  @include tablet() {
    margin-top: rem(24);
  }
}
.mt32 {
  margin-top: rem(32);
}
.mt24 {
  margin-top: rem(24);
}
</style>
