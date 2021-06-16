<template>
    <b-card
            title="Protokol Arama"
    >
        <b-form @submit.prevent>
            <b-row>
                <b-col md="3">
                    <b-form-group>
                        <h5>Protokol No</h5>


                        <b-form-input


                        />
                    </b-form-group>
                </b-col>


                <b-col md="3">
                    <b-form-group>
                        <h5>Ad</h5>


                        <b-form-input


                        />
                    </b-form-group>
                </b-col>


                <b-col md="3">
                    <b-form-group>
                        <h5>Soyad</h5>


                        <b-form-input


                        />
                    </b-form-group>
                </b-col>

                <b-col md="3">
                    <b-form-group>
                        <h5>Cep Numarası</h5>


                        <b-form-input


                        />
                    </b-form-group>
                </b-col>







            </b-row>
            <hr>
            <b-row>

                <b-col md="12">
                    <b-button
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            type="submit"
                            variant="primary"
                            class="mr-1"
                    >
                        Ara
                    </b-button>

                </b-col>

            </b-row>


        </b-form>

        <vue-good-table
                class="mt-5"
                :columns="columns"
                :rows="rows"/>


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

    } from 'bootstrap-vue'
    import Ripple from 'vue-ripple-directive'
    import vSelect from "vue-select";
    import flatPickr from "vue-flatpickr-component";
    import {VueGoodTable} from 'vue-good-table'

    export default {
        components: {
            BCard,
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
                        label: 'Ad Soyad',
                        field: 'FullName',
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
                        label: 'Protokol Tarihi',
                        field: 'PDate',
                    },
                    {
                        label: 'Protokol Tipi',
                        field: 'PType',
                    },

                    {
                        label: 'İşlem',
                        field: 'Islem',
                    },


                ],
                rows: [
                    {
                        id: 1,
                        FullName: "Hakkı Şimşek",
                        PNo: "6",
                        branch: "Kadın Hastalıkları ve Doğum",
                        doctor: "Hakkı Şimşek",
                        PDate: "2020-05-05",
                        PType: "Muayene",
                        Islem: ""
                    },
                    {
                        id: 2,
                        FullName: "Hakkı Şimşek",
                        PNo: "18",
                        branch: "Radyoloji",
                        doctor: "Hande Şen",
                        PDate: "2020-09-05",
                        PType: "Kontrol",
                        Islem: ""
                    },
                    {
                        id: 3,
                        FullName: "Hakkı Şimşek",
                        PNo: "500",
                        branch: "Psikoloji",
                        doctor: "Mustafa Bal",
                        PDate: "2021-04-05",
                        PType: "İlk Kontrol",
                        Islem: ""
                    },

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
