<template>
  <section class="why-we">
    <p class="why-we__sub-title">Наши преимущества</p>
    <h3 class="why-we__title">
      почему <span class="highlight">выбирают</span> нас
    </h3>
    <p class="why-we__description">
      Тысячи заявителей уже воспользовались услугами наших экспертов
    </p>
    <div class="why-we__list">
      <article class="why-we__item">
        <div class="item-top__wrap">
          <div class="why-we__item-icon">
            <img class="inner-img" src="/visa1.png" alt="visa" />
          </div>
          <p class="why-we__item-name">
            Любая категория визы в любую страну мира
          </p>
        </div>
        <p class="why-we__item-description">
          Благодаря профессионализму наших сотрудников и многолетнему опыту
          работы, мы сократили процент отказов в выдаче виздо минимальной
          отметки
        </p>
      </article>
      <article class="why-we__item">
        <div class="item-top__wrap">
          <div class="why-we__item-icon wrap-svg">
            <IconBagI />
          </div>
          <p class="why-we__item-name">
            Индивидуальный подход к каждому клиенту
          </p>
        </div>
        <p class="why-we__item-description">
          Специалисты всегда рассматривают ситуацию каждого заказчика в
          индивидуальном порядке, с учётом особенностей ситуации
        </p>
      </article>
    </div>
    <div class="why-we__list">
      <article class="why-we__item">
        <div class="item-top__wrap">
          <div class="why-we__item-icon wrap-svg">
            <IconBookI />
          </div>
          <p class="why-we__item-name">Получение услуги на выгодных условиях</p>
        </div>
        <p class="why-we__item-description">
          Все услуги компании мы предоставляем на высоком профессиональном
          уровне, по доступным ценами в оговоренные сроки
        </p>
      </article>
      <article class="why-we__item">
        <div class="item-top__wrap">
          <div class="why-we__item-icon wrap-svg">
            <IconTimeI />
          </div>
          <p class="why-we__item-name">круглосуточная поддержка</p>
        </div>
        <p class="why-we__item-description">
          Звонки по любым вопросам в удобное для вас время. Мы всегда рядом.
        </p>
      </article>
    </div>
    <div class="btn-wrap">
      <a
        class="why-we__link _tg"
        href="https://t.me/ukrecruitmentt"
        target="_blank"
      >
        <CommonButtonWrap text="Детальная информация" dark />
      </a>
      <a
        class="button-certificate _tg"
        href="https://find-and-update.company-information.service.gov.uk/company/05520797"
        target="_blank"
      >
        <CommonButtonWrap dark text="Посмотреть сертификат" />
      </a>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.btn-wrap {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: rem(58);

  @include tablet() {
    display: block;
    margin-top: rem(24);
  }
}
.btn-wrap a {
  @include tablet() {
    display: block;
    width: max-content;
    margin: 0 auto;
  }
}
.why-we {
  padding: rem(80) rem(70);
  background-color: var(--c-white);
  overflow: hidden;

  @include tablet() {
    padding: rem(24) rem(14);
  }
}
.why-we__sub-title {
  font-size: rem(16);
  color: var(--c-black);
  text-align: center;
}
.why-we__description {
  font-size: rem(20);
  color: var(--c-black);
  text-align: center;
  margin-top: rem(12);
  margin-bottom: 0;

  @include tablet() {
    font-size: rem(18);
    margin-top: rem(18);
    margin-bottom: rem(42);
  }
}
.item-top__wrap {
  display: block;

  @include tablet() {
    display: flex;
    justify-content: space-between;
  }
}
.why-we__title {
  font-size: rem(46);
  color: var(--c-black2);
  text-align: center;
  margin-top: rem(24);
  text-transform: uppercase;

  @include tablet() {
    font-size: rem(32);
  }
}
.why-we__list {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: rem(58);
  align-items: unset;

  @include tablet() {
    flex-direction: column;
    align-items: center;
    margin-top: rem(12);
  }
}
.why-we__item {
  display: block;
  width: rem(420);
  height: rem(250);
  padding: rem(32) rem(24);
  border: 1px solid var(--c-gray);
  -webkit-box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.35);
  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.35);
  transition: all 0.2s ease-out;

  @include tablet() {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: rem(340);
    height: rem(200);
    padding: rem(20);
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);

    &:not(:last-child) {
      margin-bottom: rem(12);
    }
  }
}
.why-we__item:hover {
  transform: scale(1.02);
}
.why-we__item-icon {
  position: relative;
  width: rem(48);
  height: rem(48);

  & > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.why-we__item-name {
  width: 70%;
  font-family: "Montserrat-500";
  margin-top: rem(22);
  font-size: rem(16);
  color: var(--c-black2);
  text-transform: uppercase;

  @include tablet() {
    margin-top: 0;
  }
}
.why-we__item-description {
  margin-top: rem(16);
  font-size: rem(15);
  color: var(--c-black2);
  text-align: left;
}
.why-we__link {
  display: block;
  width: max-content;
}
</style>
