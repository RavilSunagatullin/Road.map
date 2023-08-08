<template>
  <div class="cover">
    <uiLink class="cover-link" :label="$t('back')" to="/base-frontend" />
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
    title: "css.article_1-title",
    haveButton: false,
    description: {
      paragraph_1: "css.paragraph_1",
      paragraph_2: "css.paragraph_1-2",
      paragraph_3: "css.paragraph_1-3",
      paragraph_4: "css.paragraph_1-4",
    },
    id: 1,
  },
  article_2: {
    title: "css.article_2-title",
    haveButton: false,
    description: {
      paragraph_1: "css.paragraph_2",
      paragraph_2: "css.paragraph_2-2",
      paragraph_3: "css.paragraph_2-3",
      paragraph_4: "css.paragraph_2-4",
      paragraph_4: "css.paragraph_2-5",
      paragraph_4: "css.paragraph_2-6",
    },
    id: 2,
  },
  article_3: {
    title: "css.article_3-title",
    haveButton: false,
    description: {
      paragraph_1: "css.paragraph_3",
      paragraph_2: "css.paragraph_3-2",
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
