<template>
    <b-card
            title="Protokol Detayları"
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
                                Protokol No:
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
                                Doktor:
                            </td>
                            <td><span class="font-weight-bold">Uzman Dr. Hande Şen</span></td>

                        </tr>
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

                        </tbody>
                    </table>
                </div>
            </b-col>
            <b-col
                    md="´4"


            >
                <div>

                    <table>
                        <tbody>

                        <tr>
                            <td class="pr-1">
                                Telefon:
                            </td>
                            <td><span class="font-weight-bold">05457875457</span></td>
                        </tr>


                        <tr>
                            <td class="pr-1">
                                Protokol Tarihi:
                            </td>
                            <td><span class="font-weight-bold">2020-05-01</span></td>
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
        <hr>

        <b-row class="mt-2">

            <b-modal
                    id="add-service"
                    centered
                    title="Hizmet Ekle"
                    ok-title="Ekle"
                    cancel-title="Kapat"
                    size="lg"
            >
                <b-card-text>
                    <b-form>
                        <b-row>
                            <b-col cols="12">
                                <b-form-group
                                        label="Hizmet"
                                        label-for="h-first-name"
                                        label-cols-md="4"
                                >
                                    <v-select
                                            v-model="selected2"
                                            multiple
                                            label="title"
                                            :options="option2"
                                    />
                                </b-form-group>
                            </b-col>


                        </b-row>

                    </b-form>

                </b-card-text>
            </b-modal>

            <b-col>
                <b-button
                        class="mr-1"
                        v-b-modal.add-service
                        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                        variant="outline-primary"
                >
                    Hizmet Ekle
                </b-button>
                <b-button
                        class="mr-1"
                        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                        variant="outline-primary"
                >
                    Tahsilat Ekle
                </b-button>
                <b-button
                        class="mr-1"
                        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                        variant="outline-primary"
                >
                    İndirim Yap
                </b-button>
                <b-button
                        class="mr-1"
                        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                        variant="outline-primary"
                >
                    Randevu Oluştur
                </b-button>


            </b-col>


        </b-row>
        <hr>
        <b-row>
            <b-col md="12">
                <b-tabs class="mt-2">
                    <b-tab
                            active
                            title="Hizmetler">

                        <vue-good-table

                                :columns="hizmetlercolumns"
                                :rows="hizmetlerrows"/>

                    </b-tab>

                    <b-tab

                            title="Tahsilat">

                        <vue-good-table

                                :columns="tahsilatcolumns"
                                :rows="tahsilatrows"/>
                        <b-row class="mt-2 ">
                            <b-col md="2">
                                <b-badge variant="primary" class="font-small-4">
                                    Toplam
                                </b-badge>
                                <br>
                                <span class="font-weight-bold font-medium-3">750 TL</span>
                            </b-col>
                            <b-col md="2">
                                <b-badge variant="warning" class="font-small-4">
                                    İndirim
                                </b-badge>
                                <br>
                                <span class="font-weight-bold font-medium-3">50 TL</span>
                            </b-col>
                            <b-col md="2">
                                <b-badge variant="success" class="font-small-4">
                                    Ödenen
                                </b-badge>
                                <br>
                                <span class="font-weight-bold font-medium-3">200 TL</span>
                            </b-col>
                            <b-col md="2">
                                <b-badge variant="danger" class="font-small-4">
                                    Borç
                                </b-badge>
                                <br>
                                <span class="font-weight-bold font-medium-3">500 TL</span>
                            </b-col>


                        </b-row>
                    </b-tab>


                    <b-tab

                            title="Muayene">
                        <b-row>

                            <b-col md="12">

                                <b-form @submit.prevent>
                                    <b-row>


                                        <b-col md="4">
                                            <b-form-group
                                                    label="Şikayet"
                                                    label-for="mc-first-name"
                                            >
                                                <b-form-textarea

                                                        rows="3"
                                                />
                                            </b-form-group>

                                        </b-col>


                                        <b-col md="4">
                                            <b-form-group
                                                    label="Doktor Yorumu"
                                                    label-for="mc-first-name"
                                            >
                                                <b-form-textarea

                                                        rows="3"
                                                />
                                            </b-form-group>

                                        </b-col>

                                        <b-col md="4">
                                            <b-form-group
                                                    label="Not"
                                                    label-for="mc-first-name"
                                            >
                                                <b-form-textarea

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


                            </b-col>
                        </b-row>


                    </b-tab>
                    <b-tab

                            title="Ölçümler">

                        <vue-good-table

                                :columns="columns2"
                                :rows="rows2"/>

                    </b-tab>

                    <b-tab

                            title="Muayene">

                        <vue-good-table

                                :columns="columns2"
                                :rows="rows2"/>

                    </b-tab>
                    <b-tab

                            title="Dökümanlar">

                        <vue-good-table

                                :columns="columns2"
                                :rows="rows2"/>

                    </b-tab>


                </b-tabs>
            </b-col>

        </b-row>


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
        BModal,
        BBadge,
        BFormTextarea
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
            BModal,
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
            VueGoodTable,
            BBadge,
            BFormTextarea
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
                    {
                        id: 1,
                        PNo: "6",
                        PDate: "2020-05-05",
                        branch: "Kadın Hastalıkları ve Doğum",
                        doctor: "Hakkı Şimşek",
                        PType: "Muayene",
                        Tahsilat: "500",
                        Borc: "500",
                        Islem: ""
                    },
                    {
                        id: 2,
                        PNo: "18",
                        PDate: "2020-09-05",
                        branch: "Radyoloji",
                        doctor: "Hande Şen",
                        PType: "Kontrol",
                        Tahsilat: "0",
                        Borc: "1000",
                        Islem: ""
                    },
                    {
                        id: 3,
                        PNo: "500",
                        PDate: "2021-04-05",
                        branch: "Psikoloji",
                        doctor: "Mustafa Bal",
                        PType: "İlk Kontrol",
                        Tahsilat: "500",
                        Borc: "5000",
                        Islem: ""
                    },

                ],


                tahsilatcolumns: [
                    {
                        label: 'Protokol No',
                        field: 'Pno',
                    },
                    {
                        label: 'Ödeme Tarihi',
                        field: 'Date',
                    },
                    {
                        label: 'Ödeme Türü',
                        field: 'type',
                    },
                    {
                        label: 'Hizmet',
                        field: 'service',
                    },
                    {
                        label: 'Miktar',
                        field: 'price',
                    },


                ],
                tahsilatrows: [
                    {
                        id: 1,
                        Pno: "7",
                        Date: "2021-05-05 15:30",
                        type: "Nakit",
                        service: "Doğum Paketi",
                        price: "500 TL"
                    },


                ],


                hizmetlercolumns: [

                    {
                        label: 'Hizmet Tarihi',
                        field: 'Date',
                    },
                    {
                        label: 'Hizmet Adı',
                        field: 'Name',
                    },
                    {
                        label: 'Adet',
                        field: 'count',
                    },
                    {
                        label: 'Tutar',
                        field: 'price',
                    },

                    {
                        label: 'İşlem',
                        field: 'action',
                    },


                ],
                hizmetlerrows: [
                    {
                        id: 1,
                        Date: "2021-04-05 14:00",
                        Name: "İlk Muayane",
                        count: "1",
                        price: "250"
                    },
                    {
                        id: 2,
                        Date: "2021-05-05 15:00",
                        Name: "Doğum Paketi",
                        count: "1",
                        price: "500"
                    },


                ],


                selected: {title: 'Seçiniz'},
                option: [{title: 'Kadın'}, {title: 'Erkek'}],
                time: '',

                option2: [
                    {title: 'İlk Muayene'},
                    {title: 'Kan Alma'},
                    {title: 'Doğum Paketi'},
                    {title: 'Şeker Yüklemesi'},
                    {title: '2li Tarama'},
                    {title: '3lü Tarama'},

                ],
                selected2: [
                    {title: 'Doğum Paketi'}
                ],

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
