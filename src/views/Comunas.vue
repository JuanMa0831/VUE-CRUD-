<template>
    <div class= "container">
        <h1>Listado de Comunas</h1>
        <table class="table">
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
            <th scope='row'> {{index+1}}</th>
              <td>{{ comuna.comu_codi }}</td>
              <td>{{comuna.comu_nomb}}</td>
              <td>{{comun.muni_nomb}}</td>
            </tr>
              </tbody>
        </table>
        </div>
        </template>
    
        <script>
        import axios from 'axios'
        
        export default {
            name: 'Comuna',
            data(){
                return{
                    comunas: []
                }
            },
            mounted(){
                axios
                .get('http://127.0.0.1:8000/api/comunas')
                .then(response => (this.comunas = response.data.comunas))
            },
        }
        </script>