<template>
    <b-card
            title="Kullanıcı Grupları"
    >
        <b-form @submit.prevent>
            <b-row>
                <b-col md="4">
                    <b-col md="12">

                        <b-form-group
                                label="Grup Adı"
                                label-for="mc-first-name"
                        >
                            <b-form-input


                            />
                        </b-form-group>
                    </b-col>


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
                        Kaydet
                    </b-button>

                </b-col>

            </b-row>


        </b-form>


        <b-row>
            <b-col md="6">
                <vue-good-table
                        class="mt-5"
                        :columns="columns"
                        :rows="rows"/>
            </b-col>
        </b-row>

    </b-card>


</template>

<script>
    import {VueGoodTable} from 'vue-good-table'
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
        BFormSelect, BDropdown, BDropdownItem
    } from 'bootstrap-vue'
    import BCardCode from "@core/components/b-card-code/BCardCode";
    import store from "@/store";

    export default {
        components: {
            BRow,
            BCol,
            BFormCheckbox,
            BForm,
            BButton,
            BCard,
            BCardCode,
            VueGoodTable,
            BAvatar,
            BBadge,
            BPagination,
            BFormGroup,
            BFormInput,
            BFormSelect,
            BDropdown,
            BDropdownItem,
        },
        data() {
            return {
                pageLength: 5,
                dir: false,
                columns: [
                    {
                        label: 'Grup Adı',
                        field: 'name',
                    },


                ],
                rows: [
                    {id: 1, name: "Admin"},
                    {id: 2, name: "Doktor"},
                    {id: 3, name: "Hemşire"},
                    {id: 4, name: "Hasta Kabul"},

                ],

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
    @import '@core/scss/vue/libs/vue-good-table.scss';
</style>