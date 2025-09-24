<template>
  <div class="btn-wrap" :class="{ dark: props.dark, green: props.green }">
    <p>{{ props.text }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  text: string;
  dark?: boolean;
  green?: boolean;
}

const props = defineProps<Props>();
</script>

<style scoped lang="scss">
.btn-wrap {
  padding: rem(18) rem(24);
  color: var(--c-black2);
  background-color: var(--c-white);
  transition: all 0.2s ease-in;

  @include tablet() {
    padding: rem(12);
  }

  & > p {
    font-size: rem(20);
    font-family: "Montserrat-500";

    @include tablet() {
      font-size: rem(18);
    }
  }

  @include hover() {
    &:hover {
      background-color: var(--c-black2);
      color: var(--c-white);
    }
  }
}
.btn-wrap.dark {
  color: var(--c-white);
  background-color: var(--c-black2);

  @include hover() {
    &:hover {
      background-color: var(--c-gray);
      color: var(--c-black2);
    }
  }
}
</style>
