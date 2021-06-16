<template>
    <b-card
            title="Sık Sorulan Sorular"
    >
        <b-form @submit.prevent>
            <b-row>

                <b-col md="12">

                    <b-form-group
                            label="Sık Sorulan Soru Adı"
                            label-for="mc-first-name"
                    >
                        <b-form-input


                        />
                    </b-form-group>
                </b-col>


                <b-col md="12">
                    <b-form-group
                            label="Sık Sorulan Soru Cevabı"
                            label-for="mc-first-name"
                    >
                        <b-form-textarea
                                id="textarea-default"
                                rows="3"
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
    import {quillEditor} from 'vue-quill-editor'


    export default {
        components: {
            BRow,
            quillEditor,
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
        },
        data() {
            return {
                pageLength: 5,
                dir: false,
                columns: [
                    {
                        label: 'Sık Sorulan Soru',
                        field: 'name',
                    },


                ],
                rows: [
                    {id: 1, name: "Yaz Döneminde Dikkat Edilmesi Gerekenler"},
                    {id: 2, name: "Babalarından İlgi Gören Bebeklerin Farkı"},
                    {id: 3, name: "Gebelikte Meyve Yemek Çok Önemli"},

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