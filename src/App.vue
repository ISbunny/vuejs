<template>
  <div class="container">
    <h3 class="p-3 text-center">Vue 3 - Display a list of items with v-for</h3>
    <table class="table table-striped table-border">
      <thead>
        <tr>
          <th v-for="coloumn in coloumn" :key="coloumn.id">
            {{ Object.values(coloumn)[1] }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.firstName }} {{ user.lastName }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.role }}</td>
        </tr>
      </tbody>
    </table>
    <div id="textBoolean">
      <MyButtons />
      <TableEx msg="Add Text" />
    </div>
    <!-- <div id="textBoolean">
      <TableEx/>
    </div> -->
    <div class="row">
      <div class="col-md-4" v-for="image in images" :key="image.id">
        <img :src="image.src" :alt="image.alt" class="img-fluid" />
      </div>
      </div>
  </div>
</template>
<script>
import { ref } from "vue";
import MyButtons from "./components/MyButtons.vue";
import TableEx from "./components/TableEx.vue";

export default {
  name: "App",
  components: { MyButtons, TableEx },
  setup() {
    const coloumn = ref([
      { id: 1, name: "Name" },
      { id: 2, name: "Email" },
      { id: 3, name: "Role" },
    ]);
    const users = ref([
      {
        firstName: "Frank",
        lastName: "Murphy",
        email: "frank.murphy@test.com",
        role: "User",
      },
      {
        firstName: "Vic",
        lastName: "Reynolds",
        email: "vic.reynolds@test.com",
        role: "Admin",
      },
      {
        firstName: "Gina",
        lastName: "Jabowski",
        email: "gina.jabowski@test.com",
        role: "Admin",
      },
      {
        firstName: "Jessi",
        lastName: "Glaser",
        email: "jessi.glaser@test.com",
        role: "User",
      },
      {
        firstName: "Jay",
        lastName: "Bilzerian",
        email: "jay.bilzerian@test.com",
        role: "User",
      },
    ]);
    const images = ref([
      {
        id: 1,
        src: "https://picsum.photos/200/300",
        alt: "Random image",
      },
      {
        id: 2,
        src: "https://picsum.photos/200/300",
        alt: "Random image",
      },
      {
        id: 3,
        src: "https://picsum.photos/200/300",
        alt: "Random image",
      },
      {
        id: 4,
        src: "https://picsum.photos/200/300",
        alt: "Random image",
      },
      {
        id: 5,
        src: "https://picsum.photos/200/300",
        alt: "Random image",
      },
    ])
    return { users, coloumn, images };
  },
};
</script>
<style>
#textBoolean {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
