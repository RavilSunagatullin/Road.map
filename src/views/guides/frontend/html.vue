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
    title: "html.article_1-title",
    haveButton: false,
    description: {
      paragraph_1: "html.paragraph_1",
      paragraph_2: "html.paragraph_1-2",
      paragraph_3: "html.paragraph_1-3",
      paragraph_4: "html.paragraph_1-4",
      paragraph_5: "html.paragraph_1-5",
      paragraph_6: "html.paragraph_1-6",
    },
    id: 1,
  },
  article_2: {
    title: "html.article_2-title",
    haveButton: false,
    description: {
      paragraph_1: "html.paragraph_2",
    },
    id: 2,
  },
  article_3: {
    title: "html.article_3-title",
    haveButton: false,
    description: {
      paragraph_1: "html.paragraph_3",
    },
    id: 3,
  },
  article_4: {
    title: "html.article_4-title",
    haveButton: false,
    description: {
      paragraph_1: "html.paragraph_4",
    },
    id: 4,
  },
  article_5: {
    title: "html.article_5-title",
    haveButton: false,
    description: {
      paragraph_1: "html.paragraph_5",
    },
    id: 5,
  },
};
</script>

<style lang="sass" scoped>
.cover
  margin-top:30px
  &-link
    margin-left: 30px
</style>
