<template>
    <b-card
            title="Hasta Detayları"
    >
      <b-row>
              <b-col
                    md="4"


            >
                <div>

                    <table>
                        <tbody>
                        <tr>
                            <td class="pr-1 ">
                                Hasta No:
                            </td>
                            <td><span class="font-weight-bold">7</span></td>
                        </tr>
                        <tr>
                            <td class="pr-1">
                                Ad Soyad:
                            </td>
                            <td><span class="font-weight-bold">Hakkı Şimşek</span></td>

                        </tr>
                        <tr>
                            <td class="pr-1">
                                Branş:
                            </td>
                            <td><span class="font-weight-bold">Kadın Hastalıkları ve Doğum</span></td>

                        </tr>
                        <tr>
                            <td class="pr-1">
                                Doktor:
                            </td>
                            <td><span class="font-weight-bold">Uzman Dr. Hande Şen</span></td>

                        </tr>
                        <tr>
                            <td class="pr-1">
                                Telefon:
                            </td>
                            <td><span class="font-weight-bold">05457875457</span></td>
                        </tr>

                        </tbody>
                    </table>
                </div>
            </b-col>
            <b-col
                    md="4"


            >
                <div>

                    <table>
                        <tbody>

                        <tr>
                            <td class="pr-1">
                                Cinsiyet:
                            </td>
                            <td><span class="font-weight-bold">Erkek</span></td>
                        </tr>
                        <tr>
                            <td class="pr-1">
                                Yaş:
                            </td>
                            <td><span class="font-weight-bold">28</span></td>
                        </tr>

                        <tr>
                            <td class="pr-1">
                                Anlaşmalı Kurum:
                            </td>
                            <td><span class="font-weight-bold">SGK</span></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </b-col>



      </b-row>


        <b-tabs class="mt-5">
            <b-tab
                    active
                    title="Önceki Gelişleri">

                <vue-good-table

                        :columns="columns"
                        :rows="rows"/>

            </b-tab>

             <b-tab
                    active
                    title="Tüm Randevuları">

                <vue-good-table

                        :columns="columns2"
                        :rows="rows2"/>

            </b-tab>







        </b-tabs>

    </b-card>
</template>

<script>

    import {
        BRow,
        BCol,
        BFormGroup,
        BFormInput,
        BFormCheckbox,
        BForm,
        BButton,
        BCard,
        BListGroup,
        BListGroupItem,
        BCardText,
        BTabs,
        BTab,
    } from 'bootstrap-vue'
    import Ripple from 'vue-ripple-directive'
    import vSelect from "vue-select";
    import flatPickr from "vue-flatpickr-component";
    import {VueGoodTable} from 'vue-good-table'

    export default {
        components: {
            BCard,
            BTabs,
            BTab,
            BRow,
            BCol,
            BFormGroup,
            BFormInput,
            BFormCheckbox,
            BForm,
            BButton,
            vSelect,
            flatPickr,
            BListGroup,
            BListGroupItem,
            BCardText,
            VueGoodTable
        },
        data() {
            return {
                columns: [
                    {
                        label: 'P.No',
                        field: 'PNo',
                    },
                     {
                        label: 'Protokol Tarihi',
                        field: 'PDate',
                    },
                      {
                        label: 'Branş',
                        field: 'branch',
                    },

                    {
                        label: 'Doktor',
                        field: 'doctor',
                    },
                     {
                        label: 'Protokol Tipi',
                        field: 'PType',
                    },
                    {
                        label: 'Tahsilat',
                        field: 'Tahsilat',
                    },
                    {
                        label: 'Borc',
                        field: 'Borc',
                    },
                     {
                        label: 'İşlem',
                        field: 'Islem',
                    },


                ],
                rows: [
                    {id: 1, PNo: "6",PDate:"2020-05-05",branch:"Kadın Hastalıkları ve Doğum",doctor:"Hakkı Şimşek",PType:"Muayene",Tahsilat:"500",Borc:"500",Islem:""},
                    {id: 2, PNo: "18",PDate:"2020-09-05",branch:"Radyoloji",doctor:"Hande Şen",PType:"Kontrol",Tahsilat:"0",Borc:"1000",Islem:""},
                    {id: 3, PNo: "500",PDate:"2021-04-05",branch:"Psikoloji",doctor:"Mustafa Bal",PType:"İlk Kontrol",Tahsilat:"500",Borc:"5000",Islem:""},

                ],









                 columns2: [
                    {
                        label: 'Randevu Gelişi',
                        field: 'AppointmentIn',
                    },
                     {
                        label: 'Randevu Tarihi',
                        field: 'AppointmentDate',
                    },
                      {
                        label: 'Doktor',
                        field: 'doctor',
                    },





                ],
                rows2: [
                    {id: 1, AppointmentIn: "2021-05-05 15:00",AppointmentDate:"2021-05-05 15:30",doctor:"Hakkı Şimşek"},
                    {id: 2, AppointmentIn: "2021-05-05 15:00",AppointmentDate:"2021-05-05 15:30",doctor:"Hakkı Şimşek"},
                    {id: 3, AppointmentIn: "2021-05-05 15:00",AppointmentDate:"2021-05-05 15:30",doctor:"Hakkı Şimşek"},

                ],
                selected: {title: 'Seçiniz'},
                option: [{title: 'Kadın'}, {title: 'Erkek'}],
                time: '',

            }
        },
        directives: {
            Ripple,
        },

    }
</script>

<style lang="scss">
    @import '@core/scss/vue/libs/vue-select.scss';
    @import '@core/scss/vue/libs/vue-good-table.scss';
    @import '@core/scss/vue/libs/vue-flatpicker.scss';
</style>
