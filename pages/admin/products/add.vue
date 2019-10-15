<template>
  <div style="padding: 1em ">
    <center>
      <nuxt-link to="/admin/products" class="button1">Back</nuxt-link>
    </center>

    <div class="margin">
      <label for="name">Name</label>

      <input
        type="text"
        name="name"
        placeholder="Product Name*"
        value="required"
        v-model="product.name"
      />
    </div>

    <div class="margin">
      <label for="name">Price</label>

      <input type="number" name="price" placeholder="0.00" value="required" v-model="product.price" />
    </div>

    <div class="margin">
      <label for="name">Image</label>

      <input
        type="text"
        name="name"
        placeholder="Paste Image Url Here"
        value="required"
        v-model="product.image"
      />
    </div>
    <div v-if="product.image">
      <img :src="product.image" height="100" width="100" />
    </div>
    <center>
      <button @click.prevent="addProduct" class="button1">Add Product</button>
    </center>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
const Loading = () => import("~/components/Loading");
const Products = () => import("~/components/Products");
export default {
  layout: "admin",
  components: { Loading },
  data() {
    return {
      product: {
        name: "",
        price: 0,
        image: ""
      }
    };
  },
  mounted() {
    // this.fetchOrders();
    // this.fetchProducts();
  },
  methods: {
    async addProduct() {
      await this.$axios
        .post("products", this.product)
        .then(res => {
          if (res.data.status) {
            this.$router.push("/admin/products");
          } else {
            alert("Unable to Add Product at the Moment - Reason -" + res.data);
          }
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
  margin: 1em auto;
}

input,
textarea {
  width: 100%;
  padding: 8px 4px 8px 10px;
  margin-bottom: 15px;
  border: 1px solid white;
  border: 1px solid #f3f3f3;
  background: white;
  border-radius: 2px;
  -webkit-box-shadow: 0 1px 0 rgba(255, 255, 255, 0.2),
    inset 0 1px 1px rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 0 #fbb140, inset 0 -2px 10px #e5f1f8;
  -webkit-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
  font-family: "Raleway", "Lato", Arial, sans-serif;
  color: #47494e;
  font-size: 13px;
  border-radius: 6px;
  outline: none;
}
</style>