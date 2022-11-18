<template>
  <Container>
    <span>{{ count }}</span>
    <div class="flex space-x-2">
      <button
        @click="increment"
        class="bg-indigo-200 p-2 rounded "
        :disabled="btnIncrementDisabled"
      >
        Increment
      </button>
      <button @click="decrement" class="bg-indigo-200 p-2 rounded">
        Decrement
      </button>
    </div>
    <p class="text-3xl font-semibold m-5">Register</p>
    <Label name="Full Name:" />
    <Input
      type="text"
      v-model="name"
      placeholder="Enter your name"
      id="fullname"
    />
    <Label name="Nickname:" />
    <Input
      type="text"
      v-model="nickname"
      placeholder="Enter your nickname"
      id="nickname"
    />
    <Label name="Email:" />
    <Input
      type="email"
      v-model="email"
      placeholder="Enter your email"
      id="email"
    />
    <Label name="Age:" />
    <select
      @change="changeAge"
      v-model="selected_age"
      class="bg-gray-300 p-2 text-black mb-2 rounded focus:ring shadow-sm"
    >
      <option selected value="0">Select an option</option>
      <option v-for="ages in age_ranges" :key="ages.id" :value="ages.age_range">
        {{ ages.name }}
      </option>
    </select>
    <Input type="text" :value="age" id="age" disabled />
    <Label name="Birthday:" />

    <Input type="date" v-model="date_of_birth" id="age" @change="changeDate" />
  </Container>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import Input from "../components/Form/Input.vue";
import Label from "../components/Form/Label.vue";
import Container from "../components/Form/CenterDiv.vue";
import { useWatchCount } from '../use/useWatchCount'

const count = ref(0);
const name = ref(null);
const nickname = ref(null);
const email = ref(null);
const age = ref(null);
const date_of_birth = ref(null);
const selected_age = ref(0);
const age_ranges = reactive([
  {
    id: 1,
    name: "Expert",
    age_range: "30-35",
  },
  {
    id: 2,
    name: "Young Adult",
    age_range: "18-20",
  },
  {
    id: 3,
    name: "Student",
    age_range: "10-15",
  },
]);

const increment = () => {
  count.value++;
};
const decrement = () => {
  if (count.value > 0) {
    count.value--;
  }
};
const changeDate = (e) => {
  e.preventDefault();
  console.log(e.target.value);
};

const changeAge = (e) => (age.value = e.target.value);

/** WATCH */
useWatchCount(count,30)

const btnIncrementDisabled = computed(() => {
  return count.value == 30;
});
</script>
