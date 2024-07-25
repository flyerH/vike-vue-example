<template>
    <div>
      <ol>
        <li v-for="item in data.movies" :key="item.id">
          <a :href="'/' + item.id">{{ item.id }}</a>
        </li>
      </ol>
      <div>id: {{ pageContext.routeParams.id }}</div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { usePageContext } from 'vike-vue/usePageContext';
  import { useData } from 'vike-vue/useData';
  const data = useData();
  const pageContext = usePageContext();
  </script>
  