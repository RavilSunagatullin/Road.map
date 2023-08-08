<template>
  <div class="wrapper-main">
    <greeting
      title="articles-titles.about"
      description="article-why-us.title-helper"
    />
    <div class="article">
      <titleStrike :title="$t('article-why-us.title')" />
      <div
        :class="[
          'article-content',
          { 'article-content-dark': store.lightTheme === false },
        ]"
      >
        <p v-for="el of arrayEl">{{ $t(`${el}`) }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import greeting from "@/components/molecules/greeting.vue";
import titleStrike from "@/components/atoms/titleStrike.vue";

import { useStore } from "@/store/store";
const store = useStore();

const arrayEl = [
  "article-why-us.paragraph_1", 
  "article-why-us.paragraph_2",
  "article-why-us.paragraph_3", 
  "article-why-us.paragraph_4", 
  "article-why-us.paragraph_5"];
</script>

<style lang="sass" scoped>
.article
    display: flex
    flex-direction: column
    gap: 25px
    &-content
        font-size: 16px
        line-height: 165%
        display: flex
        flex-direction: column
        gap: 15px
        max-width: 1000px
        width: 100%
        margin: auto
        padding: 15px
        text-indent: 20px
        border: 1px solid #fff
        background-color: #333
        color: #fff
        border-radius: 8px
        text-align: justify
        &-dark
            border: 1px solid #fff
            background-color: #fff
            color: #333
</style>
