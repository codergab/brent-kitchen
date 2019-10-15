<template>
  <div style="padding: 2em">
    <div class="pstn" style="text-align: center">
      <img src="/truck.svg" />
      <h4 class="textalgn">Admin Panel / All Users</h4>
      <br />
    </div>

    <div
      style="width: 100%; border: 1px solid #000; margin: 1em 0em; padding: 1em"
      v-for="(user, i) in users"
      :key="i"
    >
      <img :src="user.avatar" height="100" width="100" />
      <br />
      <h3>{{ user.name}}</h3>
      <h3>{{ user.email}}</h3>
      <h3>{{ user.phone}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: []
    };
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      await this.$axios
        .get("users")
        .then(res => {
          this.users = res.data;
        })
        .catch(er => {
          console.log(er);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>