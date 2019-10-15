<template>
  <div>
    <Header />
    <AdminMenu />
    <nuxt />
  </div>
</template>
<script>
const Header = () => import("~/components/Header");
const AdminMenu = () => import("~/components/AdminMenu");
export default {
  components: { Header, AdminMenu }
};
</script>

<style lang="css" scoped>
.button {
  border: 1px solid transparent;
  border-width: 1px;
  color: #32325d;
  background-color: white;
  cursor: pointer;
  justify-content: center;
  padding: calc(0.375em - 1px) 0.75em;
  padding-bottom: 0px;
  text-align: center;
  white-space: nowrap;
  display: flex;
  flex-direction: row;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
}
</style>



