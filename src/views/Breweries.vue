<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h1>Breweries</h1>
    <form v-on:submit.prevent="onSearch">
      <label for="name">Search For Breweries</label>
      <input type="text" name="name" id="name" v-model="searchTerm" />
      <label for="searchBy">Search By:</label>
      <select name="" id="" v-model="searchBy">
        <option
          v-for="option in searchByOption"
          :key="option.id"
          v-bind:value="option.value"
        >
          {{ option.text }}
        </option>
      </select>
      <button :disabled="isInvalid" class="btn btn-success">Submit</button>
    </form>
    <div v-if="loading">Loading...</div>
    <section v-else>
        <p class="my-3" v-if="breweries.length===0">No Results Found</p>
        <article v-for="brewery in breweries" :key="brewery.id">
        <h2>{{ brewery.name }}</h2>
        <p>{{ brewery.street }},{{ brewery.city }}- {{ brewery.state }}</p>
    </article>
    </section>
  </div>
</template>
<script>
export default {
  name: "Breweries-view",
  data: function () {
    return {
      searchTerm: "",
      searchBy: "",
      searchByOption: [
        { text: "City", value: "city" },
        { text: "State", value: "state" },
        { text: "Postal Code", value: "postal_code" },
        { text: "Name", value: "name" },
      ],
      breweries: [],
      loading: false,
    };
  },
  computed: {
    isInvalid() {
      const valid = !!this.searchTerm.trim() && !!this.searchBy;
      return !valid;
    },
  },
  methods: {
    onSearch: async function () {
      this.loading = true;
      const term = this.searchTerm;
      term.replace(" ", "_");
      const type = this.searchBy;
      const base = "https://api.openbrewerydb.org/breweries";
      const url = `${base}?${type}=${term}`;
      const result = await this.$http.get(url);
      this.loading = false;
      this.breweries = result?.data || [];
    },
  },
};
</script>
<style>
form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

input,
select {
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #0056b3;
}
</style>
