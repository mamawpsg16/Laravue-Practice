<template>
  <Container>
    <p class="p-10 text-lg font-semibold">Profile</p>
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
    <Input type="number" v-model="age" placeholder="Enter your age" id="age" />
    <Label name="Birthday:" />
    <Input
      type="date"
      v-model="date_of_birth"
      placeholder="Enter your age"
      id="age"
    />
    <!-- <SubmitButton class="bg-blue-700 hover:bg-blue-500">Update</SubmitButton> -->
  </Container>
</template>

<script setup>
import { ref } from "vue";
import Input from "../components/Form/Input.vue";
import Label from "../components/Form/Label.vue";
import Container from "../components/Form/CenterDiv.vue";

const count = ref(0);
const name = ref(null);

const increment = () => count.value++;
</script>
