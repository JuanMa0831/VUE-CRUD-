<template>
    <div class="container">
      <h1 class="text-start">Listado de Comunas
        <button @click="newComuna" class="btn btn-success mx-2">
          <font-awesome-icon icon="plus" />
        </button>
      </h1>
      <table class="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">Codigo</th>
            <th scope="col">Comuna</th>
            <th scope="col">Municipio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(comuna, index) in comunas" :key="index">    
            <th scope='row'>{{ index + 1 }}</th>
            <td>{{ comuna.comu_codi }}</td>
            <td>{{ comuna.comu_nomb }}</td>
            <td>{{ comuna.muni_nomb }}</td>
            <td>
              <button @click="deleteComuna(comuna.comu_codi)" class="btn btn-danger mx-2">
                <font-awesome-icon icon="trash" />
              </button>
              <button @click="editComuna(comuna.comu_codi)" class="btn btn-warning mx-2">
                <font-awesome-icon icon="pencil" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import Swal from 'sweetalert2';
  
  export default {
    name: 'Comuna',
    data() {
      return {
        comunas: []
      };
    },
    methods: {
      deleteComuna(codigo) {
        Swal.fire({
          title: `¿Estás seguro de eliminar la comuna con id ${codigo}?`,
          showCancelButton: true,
          confirmButtonText: 'Eliminar',
        }).then((result) => {
          if (result.isConfirmed) {
            axios.delete(`http://127.0.0.1:8000/api/comunas/${codigo}`)
              .then(response => {
                if (response.data.success) {
                  Swal.fire('Eliminado!', '', 'success');
                  this.comunas = this.comunas.filter(comuna => comuna.comu_codi !== codigo);
                }
              })
              .catch(error => {
                console.error('Error eliminando la comuna:', error);
              });
          }
        });
      },
      editComuna(id) {
        this.$router.push({ name: 'EditarComuna', params: { id: id } });
      },
      newComuna() {
        this.$router.push({ name: 'NewComuna' });
      }
    },
    mounted() {
      axios
        .get('http://127.0.0.1:8000/api/comunas')
        .then(response => (this.comunas = response.data.comunas))
        .catch(error => {
          console.error('Error obteniendo las comunas:', error);
        });
    }
  };
  </script>
  