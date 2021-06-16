<template>
    <b-card
            title="Hasta Arama"
    >
        <b-form @submit.prevent>
            <b-row>
                <b-col md="3">
                    <b-form-group>
                        <h5>Kimlik No</h5>


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
        BRow, BCol, BFormGroup, BFormInput, BFormCheckbox, BForm, BButton, BCard, BListGroup, BListGroupItem, BCardText
    } from 'bootstrap-vue'
    import Ripple from 'vue-ripple-directive'
    import vSelect from "vue-select"
    import flatPickr from "vue-flatpickr-component"
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
                        label: 'Kimlik No',
                        field: 'TC',
                    },
                    {
                        label: 'Ad Soyad',
                        field: 'FullName',
                    },
                    {
                        label: 'Cep Telefonu',
                        field: 'phone',
                    },

                    {
                        label: 'Yaş',
                        field: 'age',
                    },
                    {
                        label: 'Doğum Tarihi',
                        field: 'birtDate',
                    },
                    {
                        label: 'Cinsiyet',
                        field: 'gender',
                    },

                    {
                        label: 'İşlem',
                        field: 'Islem',
                    },


                ],
                rows: [
                    {
                        id: 1,
                        TC: "63214324324",
                        FullName: "Hakkı Şimşek",
                        phone: "0544454545",
                        age: "28",
                        birtDate: "1992-05-05",
                        gender: "Erkek",

                        Islem: ""
                    },
                    {
                        id: 2,
                        TC: "121212121121",
                        FullName: "Hakkı Şimşek",
                        phone: "0544454545",
                        age: "28",
                        birtDate: "1992-05-05",
                        gender: "Erkek",

                        Islem: ""
                    },
                    {
                        id: 3,
                        TC: "54754654644",
                        FullName: "Hakkı Şimşek",
                        phone: "0544454545",
                        age: "28",
                        birtDate: "1992-05-05",
                        gender: "Erkek",

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
    @import '@core/scss/vue/libs/vue-flatpicker.scss';
</style>
