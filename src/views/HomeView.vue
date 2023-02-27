<template>
  <div>
    <SearchComponent :users="users" />
  </div>
</template>

<script>
import SearchComponent from '@/components/SearchComponent.vue'

export default {
  name: 'HomeView',
  components: {
    SearchComponent
  },
  data() {
    return {
      users: [],
    }
  }
}
</script>