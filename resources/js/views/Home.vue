<template>
  <Container>
    <span>{{ count }}</span>
    <div>
      <button
        @click="increment"
        class="p-2 rounded "
        :disabled="btnIncrementDisabled"
      >
        Increment
      </button>
      <button @click="decrement" class="bg-indigo-200 p-2 rounded">
        Decrement
      </button>
    </div>
    <Label name="Full Name:" />
    <Input
      type="text"
      v-model="form.name"
      placeholder="Enter your name"
      id="fullname"
    />
    <!-- <div v-if="v$.name.$dirty">
        <p class="text-danger" v-if="v$.name.required">this field is required.</p>
    </div> -->
    <div
      class="text-danger"
      v-for="error of v$.name.$errors"
      :key="error.$uid"
    >
      <div class="error-msg">{{ error.$message }}</div>
    </div> 
    <Label name="Nickname:" />
    <Input
      type="text"
      v-model="form.nickname"
      placeholder="Enter your nickname"
      id="nickname"
    />
    <Label name="Email:" />
    <Input
      type="email"
      v-model="form.user_email"
      placeholder="Enter your email"
      id="email"
    />
    <!-- <div class="error-msg" v-if="(v$.user_email.$errors >0)">{{v$.user_email.required.$message}}</div>
    <div class="error-msg" v-if="v$.user_email.$errors">{{v$.user_email.required.$message}}</div> -->
    <div
      class="text-danger"
      v-for="error of v$.user_email.$errors"
      :key="error.$uid"
    >
      <div class="error-msg">{{ error.$message }}</div>
    </div> 
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
    <Input type="text" :value="form.age" id="age" disabled />
    <Label name="Birthday:" />

    <Input type="date" v-model="form.date_of_birth" id="age" @change="changeDate" />
    <button
      type="submit"
      class="btn btn-sm btn-success pull-right m-1 mb-5"
      title="Save"
      @click.prevent="saveDetails"
    >
      Save
    </button>
  </Container>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import Input from "../components/Form/Input.vue";
import Label from "../components/Form/Label.vue";
import Container from "../components/Form/CenterDiv.vue";
import { useWatchCount } from "../use/useWatchCount";
import { useToast } from "vue-toastification";
import Swal from "sweetalert2";
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
/** TOAST */
const toast = useToast();

const count = ref(0);
// const name = ref(null);
// const nickname = ref(null);
// const user_email = ref(null);
// const age = ref(null);
// const form
const form = reactive([
  {
    name:ref(null),
    nickname:'',
    user_email:'',
    // selected_age:0,
    date_of_birth:null,
    age:null,
  }
])
// const date_of_birth = ref(null);
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

/** VUELIDATE VALIDATIONS */
const rules = {
  name: { required  }, // Matches state.firstName
  user_email: { required, email }, // Matches state.lastName
};

const v$ = useVuelidate(rules, form);

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

const saveDetails = async (e) => {
  // alert('clicked');
  // const token = $('meta[name="csrf-token"]').attr('content');
  // console.log(name.value);

  // axios({
  //   method: 'post',
  //   url: '/saveData',
  //   data: {name:name.value,nickname:nickname.value,email:email.value}
  // })
  // console.log(form);
  // return false;
  console.log(v$.value.$validate());
  // return false;
  const result = await v$.value.$validate();
  if (!result) {
    console.log('ERROR');
    console.log(result);
    toast.error("Fill up the form!", {
              timeout: 2000,
              pauseOnHover: false
            });
  }else{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, save it!",
    }).then((result) => {
      console.log(result.isConfirmed);
      if (result.isConfirmed) {
        console.log(form.name);
        axios
          .post(
            "/api/saveData",
            { name: form.name, nickname: nickname.value, email: form.user_email }
            // , headers:{
            //               'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
            //               "Authorization": "Bearer "+this.$getCookie('access_token')
            //           }
          )
          .then((response) => {
            if (response.status == 200) {
              toast.success("Details Saved", {
                timeout: 2000,
                pauseOnHover: false
              });
            }
          })
          .catch((e) => {
            toast.error("Something went wrong!", {
              timeout: 2000,
              pauseOnHover: false
            });
          });
      }
    });
  }

  // if (this.v$.$invalid  || this.document_reference_exists == true) {
  //     //if validation error
  //     this.submitStatus = 'ERROR'
  // }
};
/** WATCH */
useWatchCount(count, 20);

const btnIncrementDisabled = computed(() => {
  return count.value == 20;
});
</script>
