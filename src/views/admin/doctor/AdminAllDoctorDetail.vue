<template>
    <b-card
            title="Doktor Detayları"
    >
        <b-form @submit.prevent>
            <b-row>

                <b-col md="6">
                    <b-form-group
                            label="Fotoğraf"
                            label-for="mc-first-name"
                    >
                        <b-form-file

                                v-model="file"
                                placeholder="Choose a file or drop it here..."
                                drop-placeholder="Drop file here..."
                        />

                        <b-card-text class="my-1">
                            Selected file: <strong>{{ file ? file.name : '' }}</strong>
                        </b-card-text>
                    </b-form-group>
                </b-col>


                <b-col md="3">
                    <b-form-group
                            label="Ad"
                            label-for="mc-first-name"
                    >
                        <b-form-input

                                value="Hakkı"
                                 disabled

                        />
                    </b-form-group>
                </b-col>
                <b-col md="3">
                    <b-form-group
                            label="Soyad"
                            label-for="mc-first-name"
                    >
                        <b-form-input

                                value="Şimşek"
                                 disabled

                        />
                    </b-form-group>
                </b-col>
                <b-col md="4">
                    <b-form-group
                            label="Telefon"
                            label-for="mc-first-name"
                    >
                        <b-form-input

                                value="05532095477"

                        />
                    </b-form-group>
                </b-col>
                <b-col md="4">
                    <b-form-group
                            label="E-Mail"
                            label-for="mc-first-name"
                    >
                        <b-form-input

                                value="hsimsek@gmail.com"

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
                        Kaydet
                    </b-button>

                </b-col>

            </b-row>


        </b-form>


    </b-card>
</template>

<script>

    import {
        BRow, BCol, BFormGroup, BFormInput, BFormCheckbox, BForm, BButton, BCard, BCardText, BFormFile
    } from 'bootstrap-vue'
    import Ripple from 'vue-ripple-directive'

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
            BCardText,
            BFormFile,
        },
        directives: {
            Ripple,
        },

    }
</script>
