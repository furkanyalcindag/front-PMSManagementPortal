<template>
    <b-card
            title="Kullanıcı Ekle"
    >
        <b-form @submit.prevent>
            <b-row>

                <b-col md="4">

                    <b-form-group
                            label="Ad"
                            label-for="mc-first-name"
                    >
                        <b-form-input


                        />
                    </b-form-group>
                </b-col>


                <b-col md="4">

                    <b-form-group
                            label="Soyad"
                            label-for="mc-first-name"
                    >
                        <b-form-input


                        />
                    </b-form-group>
                </b-col>


                <b-col md="4">

                    <b-form-group
                            label="E-Mail"
                            label-for="mc-first-name"
                    >
                        <b-form-input


                        />
                    </b-form-group>
                </b-col>

                <b-col md="4">

                    <b-form-group
                            label="Ünvan"
                            label-for="mc-first-name"
                    >
                        <b-form-input


                        />
                    </b-form-group>
                </b-col>

                <b-col md="4">

                    <b-form-group
                            label="Telefon"
                            label-for="mc-first-name"
                    >
                        <b-form-input


                        />
                    </b-form-group>
                </b-col>


                <b-col md="4">
                    <b-form-group>
                        <h5>Grup</h5>


                        <v-select
                                v-model="selected"
                                label="title"
                                :options="option"
                        />
                    </b-form-group>
                </b-col>


            </b-row>

            <b-row>

                <b-col md="12">
                    <b-button
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            type="submit"
                            variant="primary"
                            class="mr-1"
                    >
                        Kaydet
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
    import {VueGoodTable} from 'vue-good-table'
    import vSelect from "vue-select";
    import {
        BRow,
        BCol,
        BFormGroup,
        BFormInput,
        BFormCheckbox,
        BForm,
        BButton,
        BCard,
        BAvatar,
        BBadge,
        BPagination,
        BFormSelect, BDropdown, BDropdownItem, BFormTextarea
    } from 'bootstrap-vue'
    import store from "@/store";


    export default {
        components: {
            BRow,
            BCol,
            BFormCheckbox,
            BForm,
            BButton,
            BCard,
            VueGoodTable,
            BAvatar,
            BBadge,
            BPagination,
            BFormGroup,
            BFormInput,
            BFormSelect,
            BDropdown,
            BFormTextarea,
            BDropdownItem,
            vSelect

        },
        data() {
            return {
                selected: {title: 'Seçiniz'},
                option: [{title: 'Admin'}, {title: 'Doktor'}, {title: 'Hemşire'}],
                pageLength: 5,
                dir: false,
                columns: [
                    {
                        label: 'Ad Soyad',
                        field: 'fullname',
                    },
                     {
                        label: 'E-Mail',
                        field: 'email',
                    },
                    {
                        label: 'Telefon',
                        field: 'phone',
                    },
                     {
                        label: 'Grup',
                        field: 'group',
                    },



                ],
                rows: [
                    {id: 1, fullname: "Hakkı Şimşek",email:"hsimsek@gmail.com",phone:"05532095477",group:"Admin"},
                    {id: 2, fullname: "Mustafa Kara",email:"hsimsek@gmail.com",phone:"05532095477",group:"Doktor"},
                    {id: 3, fullname: "Hande Şen",email:"hsimsek@gmail.com",phone:"05532095477",group:"Hemşire"},

                ],


                content: ``,

            }
        },
        computed: {

            direction() {
                if (store.state.appConfig.isRTL) {
                    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                    this.dir = true
                    return this.dir
                }
                // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                this.dir = false
                return this.dir
            },
        },

    }
</script>
<style lang="scss">
    .editor-height {
        height: 200px;

    }

    @import '@core/scss/vue/libs/vue-good-table.scss';
</style>