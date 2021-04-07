<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Child>
      <template slot="type1" slot-scope="p1">
        <div>
          {{ p1.cx }} + {{ p1.cy }} = {{ parseInt(p1.cx) + parseInt(p1.cy) }}
        </div>
      </template>
    </Child>
  </div>
</template>

<script>
import Child from "../components/slot";
export default {
  name: "about",
  components: { Child },
  data: function() {
    return { amt: 1234567 };
  }
};
</script>
