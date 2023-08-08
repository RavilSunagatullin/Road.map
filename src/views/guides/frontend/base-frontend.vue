<template>
  <div class="cover">
    <uiLink class="cover-link" :label="$t('back')" to="/frontend" />
    <uiTab :data="data" />
  </div>
</template>

<script setup>
import uiTab from "@/components/Organisms/uiTab.vue";
import uiLink from "@/components/atoms/uiLink.vue";

import { useI18n } from "vue-i18n";
const { t } = useI18n({ useScope: "global" });

const data = {
  article_1: {
    title: "base-frontend.article_1-title",
    haveButton: true,
    label: "base-frontend.article_1-label",
    to: "/html",
    description: {
      paragraph_1: "base-frontend.paragraph_1",
    },
    id: 1,
  },
  article_2: {
    title: "base-frontend.article_2-title",
    haveButton: true,
    label: "base-frontend.article_2-label",
    to: "/css",
    description: {
      paragraph_1: "base-frontend.paragraph_2",
    },
    id: 2,
  },
  article_3: {
    title: "base-frontend.article_3-title",
    haveButton: true,
    label: "base-frontend.article_3-label",
    to: "/js",
    description: {
      paragraph_1: "base-frontend.paragraph_3",
    },
    id: 3,
  },
};
</script>

<style lang="sass" scoped>
.cover
  margin-top:30px
  &-link
    margin-left: 30px
</style>
