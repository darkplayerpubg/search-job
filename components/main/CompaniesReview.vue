<template>
  <section class="companies">
    <div class="companies__left">
      <p class="description">
        Наиболее типичные проблемы: отсутствие легального приглашения на работу
        (для оформления рабочих виз).<br /><br />Ввиду популярности оформления
        разрешений для трудоустройства за границей, участились случаи
        мошенничества, в частности, продажи поддельных или незарегистрированных
        рабочих приглашений, поэтому необходимо тщательно проверять фирмы
        работодателей в специальных базах. Неточное или неправильное объяснение
        цели посещения страны при пересечении границы зачастую приводит к отказу
        во въезде и даже к дальнейшему запрету на посещение различных держав
        сроком от полугода до 5 лет - это один из результатов отсутствия сервиса
        визовой поддержки. <br /><br />Как сделать все правильно и быстро,
        качественно и без ошибок - обязан рассказать профильный специалист
        агенства, более того, он всегда сможет помочь в решении текущих проблем
        при возникновении экстренных ситуаций. Заказчик не сможет срочно
        получить визу в желаемую страну без помощи специализирующегося агентства
        по работе с консульством данной державы. Отсутствие каких-либо гарантий
        в получении визового разрешения, особенно при наличии «чистого» паспорта
        без отметок о пересечении границ, также будет иметь место.
      </p>
    </div>
    <div class="companies__right">
      <div class="overlay" />
      <img class="inner-img" src="/footer.jpg" alt="companies" />
      <p class="companies__review n1">Более 9 тысяч довольных клиентов.</p>
      <p class="companies__review n2">
        Сотрудничество с мировыми крупнейшими компаниями
      </p>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.companies {
  display: flex;
  overflow: hidden;

  @include tablet() {
    display: block;
  }
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--c-black2);
  opacity: 0.6;
  z-index: 1;
}
.companies__left,
.companies__right {
  position: relative;
  width: 50%;
  height: rem(600);
  overflow: hidden;
  padding: unset;

  @include tablet() {
    width: 100%;
    height: auto;
    padding: rem(24) rem(12);
  }
}
.companies__right {
  @include tablet() {
    height: 50vh;
  }
}
.inner-img {
  transition: all 0.2s ease-out;
}
.companies__right:hover .inner-img {
  transform: scale(1.05);
}
.description {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 92%;
  transform: translate(-50%, -50%);
  font-size: rem(18);
  color: var(--c-white);
  text-align: left;

  @include tablet() {
    position: relative;
    top: unset;
    left: unset;
    width: 100%;
    font-size: rem(15);
    transform: translate(0, 0);
  }
}
.companies__left {
  background-color: var(--c-black);
}
.companies__review {
  position: absolute;
  top: 0;
  left: 50%;
  width: 95%;
  text-align: center;
  transform: translate(-50%, 0%);
  z-index: 2;
  font-size: rem(42);
  font-family: "Montserrat-500";
  color: var(--c-pure-white);

  @include tablet() {
    font-size: rem(24);
  }

  &.n1 {
    top: rem(24);
  }
  &.n2 {
    top: unset;
    bottom: rem(24);
  }
}
</style>
