<template>
  <div class="ticker">
    <div class="ticker-line">
      <p>
        быстро надежно качественно безопасно быстро надежно качественно
        безопасно быстро надежно качественно безопасно быстро надежно
        качественно безопасно &nbsp;
      </p>
    </div>
    <div class="ticker-line">
      <p>
        быстро надежно качественно безопасно быстро надежно качественно
        безопасно быстро надежно качественно безопасно быстро надежно
        качественно безопасно &nbsp;
      </p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.ticker {
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-wrap: nowrap;
  padding: rem(10) 0;
  background-color: var(--c-black);
}
.ticker-line {
  color: var(--c-white);
  font-size: rem(24);
  text-transform: uppercase;
  animation: ticker 21s linear infinite;

  @include tablet() {
    font-size: rem(16);
  }
}
.ticker-line p {
  width: 100%;
  white-space: nowrap;
  letter-spacing: rem(2.5);
}

@keyframes ticker {
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(-100%);
  }
}
</style>
