<template>
  <div class="menu">
    <div class="card" @click="$router.push('/admin/products')">
      <h4>All Products</h4>
    </div>
    <div class="card" @click="$router.push('/admin/orders')">
      <h4>All Orders</h4>
    </div>
    <div class="card" @click="$router.push('/admin/users')">
      <h4>All Users</h4>
    </div>
    <div class="card" @click="logout">
      <h4>Logout</h4>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    logout() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="css" scoped>
.menu {
  display: flex;
  justify-content: space-between;
  padding: 1em;
  background: #000;
  color: #fff;
}

.card {
  display: block;
  cursor: pointer;
}
</style>