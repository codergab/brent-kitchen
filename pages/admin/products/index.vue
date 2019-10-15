<template>
  <div>
    <center>
      <nuxt-link to="/admin/products/add" class="button1">Add New Product</nuxt-link>
    </center>
    <products :products="products" :showCart="false" :isAdmin="true"></products>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
const Loading = () => import("~/components/Loading");
const Products = () => import("~/components/Products");
export default {
  layout: "admin",
  components: { Loading, Products },
  data() {
    return {
      products: []
    };
  },
  mounted() {
    // this.fetchOrders();
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      await this.$axios
        .get("products")
        .then(res => {
          this.products = res.data;
          console.log(res.data);
        })
        .catch(err => {
          alert(e.response);
        });
    }
  }
};
</script>

<style lang="css" scoped>
.button1 {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>