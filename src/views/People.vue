<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container">
    <h1>People</h1>
    <table class="table table-stripped">
      <thead>
        <tr>
          <th v-for="coloumn in coloumnNames" :key="coloumn.id">
            {{ coloumn }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="person in people" :key="person.id">
          <td>{{ person.id }}</td>
          <td>{{ person.name }}</td>
          <td :class="{'Promoted' : person.promoted, 'Standard' : !person.promoted  }">{{ person.promoted ? 'Promoted' : 'Standard' }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "People-Page",
  data() {
    return {
      coloumnNames: ["ID", "Name", "Promoted"],
      people: [
        { id: 1, name: "John Doe", isEven: false, promoted: true },
        { id: 2, name: "Jane", isEven: true, promoted: false },
        { id: 3, name: "Susan", isEven: false, promoted: true },
        { id: 4, name: "Mark", isEven: true, promoted: false },
        { id: 5, name: "Dan", isEven: false, promoted: false },
        { id: 6, name: "Chloe", isEven: true, promoted: false },
        { id: 7, name: "Peter", isEven: undefined, promoted: true },
        { id: 8, name: "Andy", isEven: true, promoted: false },
      ],
    };
  },
};
</script>
<style>
.Promoted {
  color: green;
}
.Standard {
  color: red;
}
</style>