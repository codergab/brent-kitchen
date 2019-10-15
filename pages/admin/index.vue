<template>
  <div>
    <Loading :active="!orders || !orders[0]" />

    <div class="pstn">
      <img src="/truck.svg" />
      <h4 class="textalgn">Admin Panel / Order History</h4>
      <br />
    </div>

    <div class="menu">
      <div class="card-number" @click="$router.push('/admin/products')">
        <h1 style="font-size: 2em">{{ products.length }}</h1>
        <h5>Total Products</h5>
      </div>
      <div class="card-number" @click="$router.push('/admin/orders')">
        <h1 style="font-size: 2em">{{ orders.length }}</h1>
        <h5>Total Orders</h5>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex";
const Loading = () => import("~/components/Loading");

export default {
  layout: "admin",

  components: { Loading },
  data() {
    return {
      orders: [],
      products: []
    };
  },
  mounted() {
    this.fetchOrders();
    this.fetchProducts();
  },
  methods: {
    async fetchOrders() {
      await this.$axios
        .get("orders")
        .then(res => {
          this.orders = res.data;
          console.log(res.data);
        })
        .catch(err => {
          alert(e.response);
        });
    },
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
<style scoped>
.menu {
  display: flex;
  justify-content: space-around;
}

.card-number {
  align-content: center;
  text-align: center;
  background: #dcdcdc;
  padding: 1em;
  cursor: pointer;
  font-size: 2em;
}
.status {
  padding-top: 10px;
  padding-left: 10px;
}
center {
  font-size: 23px;
  font-weight: 700;
  padding-top: 10px;
}
.card {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 2px solid rgba(0, 0, 0, 0.05);
  border-radius: 0.25rem;
  position: relative;
}
.pstn {
  text-align: center;
}
.shadow {
  -webkit-box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
}
.textalgn {
  color: #212529 !important;
  padding-top: 0px;
  font-size: 14px;
  text-align: -webkit-center;
}
h1 {
  font-size: 14px;
  padding-left: 10px;
  color: #3a3ac9;
  letter-spacing: 0;
}
h2 {
  font-size: 12px;
  padding-left: 10px;
  color: #1cac7b;
  margin-top: 0px;
}
h3 {
  padding-right: 10px;
  margin-top: 6px;
}
h4 {
  text-transform: uppercase;
  font-size: 10px;
  letter-spacing: 0;
  margin-top: 1px;
}
h5 {
  text-align: -webkit-center;
  color: gray;
  padding-top: 0px;
  height: 0px;
  margin-top: -1.65rem;
}
h6 {
  margin-top: 7px;
  padding-left: 10px;
  font-size: 13px;
}
.is-mobile.columns.is-mobile {
  display: flex;
  flex-direction: column;
  line-height: 1px;
}
.payment_color {
  color: blue;
  text-transform: uppercase;
}
.media-content {
  flex-basis: auto;
  flex-grow: 1;
  flex-shrink: 1;
  text-align: left;
}
.columns {
  margin-left: 0.25rem;
  margin-right: 0.25rem;
  margin-top: -0.75rem;
  padding-top: 13px;
  padding-top: 13px;
  padding-left: 0px;
  padding-right: 0px;
}
.container {
  max-width: 1366px;
  margin: 0 auto;
  padding: 0 1px;
  width: 100%;
  padding-bottom: 10px;
}
.date {
  padding-right: 10px;
  color: black;
}
.border {
  border-bottom: 1px solid hsla(0, 0%, 85.9%, 0.5);
}
img {
  height: auto;
  max-width: 59px;
}
.align {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.font {
  font-family: sans-serif;
}
.add_flex_align {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.item_namealign {
  padding-left: 8px;
}
.p {
  margin-top: -19px;
  /* padding-left: 10px; */
  font-size: 13px;
}
.column.is-mobile {
  display: flex;
}
.column {
  margin-left: 0px;
  margin-right: 0px;
  margin-top: -0.75rem;
  padding-top: 13px;
  padding-bottom: 31px;
  padding-top: 0px;
  padding-bottom: 31px;
  padding-left: 0px;
  padding-right: 0px;
}
.breadcrumb-pagination {
  width: 100%;
  border-bottom: 1px solid #e1e6eb;
  text-align: center;
  float: left;
}
.breadcrumb-pagination div {
  display: inline-block;
  padding-right: 0px;
  padding-left: 0px;
}
.breadcrumb-pagination div span {
  /* margin: 0 auto; */
  display: block;
  border-radius: 5px;
  height: 30px;
  text-align: center;
  padding: 4px 0 0 0px;
  font-size: 22px;
  width: 69px;
}
.fntclr {
  color: black;
}
.fntclr2 {
  color: black;
  padding-left: 1px;
}
.fntclr3 {
  color: black;
  padding-left: 3px;
}
.Pending {
  color: blue;
}
.Shipped {
  color: skyblue;
}
.Delivered {
  color: green;
}
.Cancelled {
  color: red;
}
.circle span {
  background-color: gray;
  color: #fff;
}
.Pending span {
  background-color: blue;
  color: #fff;
}
.Shipped span {
  background-color: skyblue;
  color: #fff;
}
.Delivered span {
  background-color: green;
  color: #fff;
}
.Cancelled span {
  background-color: red;
  color: #fff;
}
.breadcrumb-pagination div p {
  text-align: center;
  line-height: 0;
  margin: 16px auto 25px;
  font-size: 13px;
}
.active1 {
  border-bottom: 2px solid blue;
  padding-bottom: 27px;
  margin-bottom: 0px !important;
  font-weight: 700;
}

.payment {
  padding-right: 10px;
  margin-top: 10px;
  font-size: 14px;
  letter-spacing: 0;
}
.active2 {
  border-bottom: 2px solid skyblue;
  padding-bottom: 27px;
  margin-bottom: 0px !important;
  font-weight: 700;
}
.active3 {
  border-bottom: 2px solid green;
  padding-bottom: 27px;
  margin-bottom: 0px !important;
  font-weight: 700;
}
.active4 {
  border-bottom: 2px solid red;
  padding-bottom: 27px;
  margin-bottom: 0px !important;
  font-weight: 700;
}
.active span::before {
  content: "\2713";
}
p {
  padding-left: 0px;
  font-size: 13px;
  margin-top: 9px;
  color: #bd531e;
  font-weight: bold;
}
.svgsize {
  height: 16px;
  width: 21px;
}
</style>

