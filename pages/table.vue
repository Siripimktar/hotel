/* eslint-disable prettier/prettier */
<template>
  <div>
    <v-card color="#4281a4">
      <v-card-title>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :search="search"
        :headers="headers"
        :items="list"
        :items-per-page="5"
        class="elevation-3"
      ></v-data-table>
    </v-card>
  </div>
</template>

<script>
import { db } from '~/plugins/firebaseConfig.js'
export default {
  data() {
    return {
      search: '',
      list: [],
      headers: [
        {
          text: 'ชื่อผู้จอง',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        {
          text: 'E-mail',
          value: 'email',
        },
        {
          text: 'เบอร์โทร',
          value: 'phone',
        },
        {
          text: 'ที่อยู่',
          value: 'address.add',
        },
        {
          text: 'ตำบล/แขวง',
          value: 'address.sub_district',
        },
        {
          text: 'อำเภอ/เขต',
          value: 'address.district',
        },
        {
          text: 'จังหวัด',
          value: 'address.province',
        },
        {
          text: 'จำนวนห้อง',
          value: 'room',
        },
        {
          text: 'จำนวนคน',
          value: 'costumers',
        },
        {
          text: 'จองวันที่',
          value: 'date_in',
        },
        {
          text: 'ถึงวันที่',
          value: 'date_out',
        },
      ],
    }
  },
  mounted() {
    this.getdata()
  },
  methods: {
    getdata() {
      console.log('getdata()')
      db.collection('MyForm').onSnapshot((querySnapshot) => {
        const data = []
        querySnapshot.forEach((doc) => {
          data.push(doc.data())
          console.log(data.toString)
        })
        this.list = data
        console.log('list' + this.list)
      })
    },
  },
}
</script>
