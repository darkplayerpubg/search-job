<template>
  <section class="stages">
    <h4 class="stages__title">Этапы сотрудничества</h4>
    <p class="stages__sub-title">
      <span class="green"> 100% </span>
      гарантия качества
    </p>
    <div class="stages-line">
      <div class="stage">
        <b class="stage__num">1.</b>
        <img class="inner-img" src="/comp.png" alt="computer" />
        <p class="stage-action">Оставляете заявку на услугу</p>
      </div>
      <div class="stage">
        <b class="stage__num">2.</b>
        <img class="inner-img" src="/operator.webp" alt="operator" />
        <p class="stage-action">Получаете консультацию эксперта</p>
      </div>

      <div class="stage">
        <img class="inner-img" src="/docs.png" alt="docs" />
        <b class="stage__num">3.</b>
        <p class="stage-action">Предоставляете документы для проверки</p>
      </div>
      <div class="stage">
        <b class="stage__num">4.</b>
        <img class="inner-img" src="/payment.png" alt="payment" />
        <p class="stage-action">Оплачиваете необходимые сборы</p>
      </div>
      <div class="stage margin-auto">
        <b class="stage__num">5.</b>
        <img class="inner-img" src="/approve.png" alt="approve" />
        <p class="stage-action">Получаете положительное решение</p>
      </div>
    </div>
    <div class="stages-btn">
      <a href="https://t.me/ukrecruitmentt" target="_blank" class="_tg">
        <CommonButtonWrap text="Оставить заявку" dark />
      </a>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.margin-auto {
  margin: unset;

  @include tablet() {
    margin: 0 auto !important;
  }
}
.stage__num {
  position: absolute;
  top: 0;
  right: calc(100% + rem(8));
  font-size: rem(18);
  font-family: "Montserrat-500";
}
.stages {
  overflow: hidden;
  padding: rem(80) 0;
  background-color: var(--c-white);

  @include tablet() {
    padding: rem(24) 0;
  }
}
.stages__title {
  font-size: rem(36);
  text-align: center;
  font-family: "Montserrat-500";
  color: var(--c-black);

  @include tablet() {
    font-size: rem(32);
  }
}
.stages__sub-title {
  font-size: rem(24);
  text-align: center;
  font-family: "Montserrat-500";
  color: var(--c-black);
  margin-top: rem(10);

  @include tablet() {
    font-size: rem(20);
  }
}
.stages-line {
  position: relative;
  width: 100%;
  padding-bottom: 0;
  padding: rem(12) rem(100);
  background: rgb(0, 255, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 255, 0, 0.05934873949579833) 0%,
    rgba(0, 255, 0, 0.18539915966386555) 100%
  );
  margin-top: rem(60);
  display: flex;
  align-items: center;
  justify-content: space-between;

  @include tablet() {
    margin-top: rem(42);
    height: rem(600);
    padding-bottom: rem(50);
    padding: rem(24) rem(12);
    align-items: center;
    flex-wrap: wrap;
    background: linear-gradient(
      180deg,
      rgba(0, 255, 0, 0.02934873949579833) 0%,
      rgba(0, 255, 0, 0.18539915966386555) 100%
    );
  }
}
.green {
  color: var(--c-green);
}
.stage {
  position: relative;
  width: rem(80);
  height: rem(80);

  @include tablet() {
    margin: 0 rem(40);
  }
}
.stage-action {
  position: absolute;
  top: calc(100% + rem(32));
  left: 50%;
  width: rem(200);
  text-align: center;
  transform: translateX(-50%);
  font-size: rem(20);
  font-family: "Montserrat-500";

  @include tablet() {
    width: rem(160);
    font-size: rem(16);
    top: calc(100% + rem(12));
  }
}
.stages-btn {
  margin-top: rem(170);
  display: flex;
  justify-content: center;

  @include tablet() {
    margin-top: rem(32);
  }
}
.stages-btn > a {
  width: max-content;
}
</style>
