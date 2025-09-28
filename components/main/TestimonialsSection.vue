<template>
  <section id="reviews" class="testimonials">
    <h4 class="testimonials__title">Отзывы</h4>
    <div class="slider-mob">
      <Swiper
        slides-per-view="auto"
        :space-between="12"
        :centered-slides="true"
      >
        <SwiperSlide
          v-for="slide in SLIDES"
          :key="slide.id"
          class="testi-slide"
        >
          <img class="slide-img" :src="slide.image" alt="slide testimonial" />
          <p class="slide-text">{{ slide.text }}</p>
        </SwiperSlide>
      </Swiper>
    </div>
    <div
      v-for="slide in SLIDES"
      :key="slide.id"
      class="testimonial"
      :class="[`n${slide.id}`]"
    >
      <img class="inner-img" :src="slide.image" alt="testimonial" />
      <q class="testimonial___text">
        {{ slide.text }}
      </q>
    </div>
  </section>
</template>

<script setup lang="ts">
const SLIDES = [
  {
    id: 1,
    text: "Единственная компания с которой буду сотрудничать и советую всем.",
    image: "/review1.jpg",
  },
  {
    id: 2,
    text:
      "Oilamga Angliyada ishlash imkoniyatini bergani uchun Recruitment UK kompaniyasiga rahmat.",
    image: "/review2.jpg",
  },
  {
    id: 3,
    text:
      "Очень доволен. Первый раз летал работать за границу. Специалисты помогли с жильем и оказали поддержку на каждом этапе😇",
    image: "/review3.jpg",
  },
  {
    id: 4,
    text: "Быстро, качественно и надежно сделали весь пакет документов.",
    image: "/review4.jpg",
  },
  {
    id: 5,
    image: "/review6.jpg",
    text:
      "Спасибо большое компании за хорошую работу! Помогли собрать нужные документы, виза была готова меньше, чем за две недели! Я очень довольна.",
  },
  {
    id: 6,
    text:
      "Спасибо Асель, все быстро и оперативно помогли и правильно подсказали! подавался на срочную визу, через 4 дня пришел положительный ответ, а у меня был еще отказ по Чехии( Все в итоге было отлично, спасибо!",
    image: "/review5.jpg",
  },
];
</script>

<style scoped lang="scss">
.testi-slide {
  position: relative;
  padding: 0;
  width: rem(280);
  height: rem(565);
}
.slide-text {
  width: 100%;
  text-align: center;
  margin-top: rem(12);
  font-size: rem(16);
  color: var(--c-black);
}
.slide-img {
  width: 100%;
  height: rem(380);
}
.slider-mob {
  display: none;
  margin-top: rem(120);
  margin-bottom: rem(120);

  @include tablet() {
    display: block;
  }
}
.testimonials {
  position: relative;
  width: 100%;
  height: rem(1480);
  background-color: var(--c-white);
  overflow: hidden;

  @include tablet() {
    height: auto;
  }
}
.testimonials__title {
  position: absolute;
  top: rem(60);
  left: 50%;
  transform: translateX(-50%);
  font-size: rem(60);
  color: var(--c-black);
  font-family: "Montserrat-500";

  @include tablet() {
    top: rem(24);
    font-size: rem(42);
  }
}
.testimonial {
  position: absolute;
  -webkit-box-shadow: 10px 10px 15px 0px rgba(0, 0, 0, 0.61);
  -moz-box-shadow: 10px 10px 15px 0px rgba(0, 0, 0, 0.61);
  box-shadow: 10px 10px 15px 0px rgba(0, 0, 0, 0.61);

  @include tablet() {
    display: none;
  }

  &.n1 {
    width: rem(300);
    height: rem(400);
    top: rem(122);
    left: rem(100);
  }
  &.n2 {
    width: rem(300);
    height: rem(400);
    top: rem(240);
    left: 50%;
    transform: translateX(-50%);
  }
  &.n3 {
    width: rem(300);
    height: rem(400);
    top: rem(122);
    right: rem(100);
  }
  &.n4 {
    width: rem(300);
    height: rem(400);
    top: rem(760);
    left: rem(40);
  }
  &.n5 {
    width: rem(300);
    height: rem(400);
    top: rem(760);
    right: rem(40);
  }
  &.n6 {
    width: rem(560);
    height: rem(400);
    top: rem(860);
    left: 50%;
    transform: translateX(-50%);
  }
}
.testimonial___text {
  position: absolute;
  top: calc(100% + rem(24));
  width: 100%;
  padding: 0 rem(12);
  font-size: rem(18);
  font-family: "Montserrat-500";
  color: var(--c-black);
  text-align: center;
}
</style>
