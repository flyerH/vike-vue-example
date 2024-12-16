<template>
  <div>Page root</div>
  <a href="/a">jump to a</a>
</template>

<script lang="ts" setup>
import { usePageContext } from "vike-vue/usePageContext";
usePageContext().testFlag = "test root";
</script>
