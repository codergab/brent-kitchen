<template>
  <div>
    <Loading :active="!settings || settings.closed" />
    <hero :closed="settings.closed" />
    <info />
    <products :products="products" :showcart="true" />
    <overlay :closed="settings.closed" />
    <cart-bar />
  </div>
</template>
<script>
const Loading = () => import("~/components/Loading");
const Overlay = () => import("~/components/Overlay");
const Products = () => import("~/components/Products");
const Info = () => import("~/components/Info");
const Hero = () => import("~/components/Hero");
const CartBar = () => import("~/components/CartBar");
// import { db } from "~/service/firebase";
export default {
  data() {
    return {
      loading: false,
      closed: true,
      settings: {
        closed: false
      },
      products: []
    };
  },
  mounted() {
    this.$axios
      .get("products")
      .then(res => {
        // console.log(res.data);
        this.products = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  // firestore() {
  //   return {
  //     settings: db.collection("settings"),
  //     products: db.collection("products")
  //   };
  // },
  methods: {},
  async created() {},
  components: { Loading, Overlay, Products, Info, Hero, CartBar }
};
</script>
