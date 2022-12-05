import './bootstrap';
import { createApp } from 'vue'
import app from './views/App.vue'
import router from './router';

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import 'sweetalert2/dist/sweetalert2.min.css'


// import "bootstrap/dist/css/bootstrap.min.css";
// import "datatables.net-bs4";
// import "datatables.net-bs4/css/dataTables.bootstrap4.min.css";
// import "jszip";
// import "pdfmake";
// import "datatables.net-buttons-bs4";
// import "datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css";
// import "datatables.net-buttons/js/buttons.colVis";
// import "datatables.net-buttons/js/buttons.flash";
// import "datatables.net-buttons/js/buttons.html5";
// import "datatables.net-buttons/js/buttons.print";

// const options = {
//     // You can set your default options here
// };  
const app1 = createApp(app);
// app1.use(new Swal);
app1.use(router);
app1.use(Toast);
app1.mount("#app");