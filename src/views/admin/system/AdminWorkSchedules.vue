<template>
    <b-card
            title="Çalışma Takvimleri"
    >
        <b-form @submit.prevent>
            <b-row>
                <b-col md="3">
                    <b-col md="12">
                        <h5>Genel Süreler</h5>
                        <b-form-group
                                label="Muayene Süresi"
                                label-for="mc-first-name"
                        >
                            <b-form-input

                                    value="00:30:00"

                            />
                        </b-form-group>
                    </b-col>
                    <b-col md="12">
                        <b-form-group
                                label="Öğle Arası Başlama Saati"
                                label-for="mc-first-name"
                        >
                            <b-form-input

                                    value="12:00:00"

                            />
                        </b-form-group>
                    </b-col>
                    <b-col md="12">
                        <b-form-group
                                label="Öğle Arası Bitiş Saati"
                                label-for="mc-first-name"
                        >
                            <b-form-input

                                    value="13:00:00"

                            />
                        </b-form-group>
                    </b-col>

                </b-col>
                <b-col md="3">
                    <b-col md="12">
                        <h5>Pazartesi</h5>
                        <b-form-group
                                label="Başlama Saati"
                                label-for="mc-first-name"
                        >
                            <b-form-input

                                    value="08:00:00"

                            />
                        </b-form-group>
                    </b-col>
                    <b-col md="12">
                        <b-form-group
                                label="Bitiş Saati"
                                label-for="mc-first-name"
                        >
                            <b-form-input

                                    value="18:30:00"

                            />
                        </b-form-group>
                    </b-col>
                    <b-col cols="12">
                        <b-form-group>
                            <b-form-checkbox
                                    name="checkbox-10"
                                    value="Remember_me"
                            >
                                Tatil
                            </b-form-checkbox>
                        </b-form-group>
                    </b-col>

                </b-col>
                <b-col md="3">
                    <b-col md="12">
                        <h5>Salı</h5>
                        <b-form-group
                                label="Başlama Saati"
                                label-for="mc-first-name"
                        >
                            <b-form-input

                                    value="10:00:00"

                            />
                        </b-form-group>
                    </b-col>
                    <b-col md="12">
                        <b-form-group
                                label="Bitiş Saati"
                                label-for="mc-first-name"
                        >
                            <b-form-input

                                    value="17:30:00"

                            />
                        </b-form-group>
                    </b-col>
                    <b-col cols="12">
                        <b-form-group>
                            <b-form-checkbox
                                    name="checkbox-10"
                                    value="Remember_me"
                            >
                                Tatil
                            </b-form-checkbox>
                        </b-form-group>
                    </b-col>

                </b-col>
                <b-col md="3">
                    <b-col md="12">
                        <h5>Çarşamba</h5>
                        <b-form-group
                                label="Başlama Saati"
                                label-for="mc-first-name"
                        >
                            <b-form-input

                                    value="08:00:00"

                            />
                        </b-form-group>
                    </b-col>
                    <b-col md="12">
                        <b-form-group
                                label="Bitiş Saati"
                                label-for="mc-first-name"
                        >
                            <b-form-input

                                    value="18:00:00"

                            />
                        </b-form-group>
                    </b-col>
                    <b-col cols="12">
                        <b-form-group>
                            <b-form-checkbox
                                    name="checkbox-10"
                                    value="Remember_me"
                            >
                                Tatil
                            </b-form-checkbox>
                        </b-form-group>
                    </b-col>

                </b-col>
                <b-col md="3">
                    <b-col md="12">
                        <h5>Perşembe</h5>
                        <b-form-group
                                label="Başlama Saati"
                                label-for="mc-first-name"
                        >
                            <b-form-input

                                    value="09:00:00"

                            />
                        </b-form-group>
                    </b-col>
                    <b-col md="12">
                        <b-form-group
                                label="Bitiş Saati"
                                label-for="mc-first-name"
                        >
                            <b-form-input

                                    value="15:00:00"

                            />
                        </b-form-group>
                    </b-col>
                    <b-col cols="12">
                        <b-form-group>
                            <b-form-checkbox
                                    name="checkbox-10"
                                    value="Remember_me"
                            >
                                Tatil
                            </b-form-checkbox>
                        </b-form-group>
                    </b-col>

                </b-col>
                <b-col md="3">
                    <b-col md="12">
                        <h5>Cuma</h5>
                        <b-form-group
                                label="Başlama Saati"
                                label-for="mc-first-name"
                        >
                            <b-form-input

                                    value="10:00:00"

                            />
                        </b-form-group>
                    </b-col>
                    <b-col md="12">
                        <b-form-group
                                label="Bitiş Saati"
                                label-for="mc-first-name"
                        >
                            <b-form-input

                                    value="16:30:00"

                            />
                        </b-form-group>
                    </b-col>
                    <b-col cols="12">
                        <b-form-group>
                            <b-form-checkbox
                                    name="checkbox-10"
                                    value="Remember_me"
                            >
                                Tatil
                            </b-form-checkbox>
                        </b-form-group>
                    </b-col>


                </b-col>
                <b-col md="3">
                    <b-col md="12">
                        <h5>Cumartesi</h5>
                        <b-form-group
                                label="Başlama Saati"
                                label-for="mc-first-name"
                        >
                            <b-form-input

                                    value="09:00:00"

                            />
                        </b-form-group>
                    </b-col>
                    <b-col md="12">
                        <b-form-group
                                label="Bitiş Saati"
                                label-for="mc-first-name"
                        >
                            <b-form-input

                                    value="14:00:00"

                            />
                        </b-form-group>
                    </b-col>
                    <b-col cols="12">
                        <b-form-group>
                            <b-form-checkbox
                                    name="checkbox-10"
                                    value="Remember_me"
                            >
                                Tatil
                            </b-form-checkbox>
                        </b-form-group>
                    </b-col>


                </b-col>
                <b-col md="3">
                    <b-col md="12">
                        <h5>Pazar</h5>
                        <b-form-group
                                label="Başlama Saati"
                                label-for="mc-first-name"
                        >
                            <b-form-input

                                    value="08:00:00"

                            />
                        </b-form-group>
                    </b-col>
                    <b-col md="12">
                        <b-form-group
                                label="Bitiş Saati"
                                label-for="mc-first-name"
                        >
                            <b-form-input

                                    value="18:30:00"

                            />
                        </b-form-group>
                    </b-col>
                    <b-col cols="12">
                        <b-form-group>
                            <b-form-checkbox
                                    name="checkbox-10"
                                    value="Remember_me"
                            >
                                Tatil
                            </b-form-checkbox>
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


    </b-card>
</template>

<script>
    import BCardCode from '@core/components/b-card-code'
    import {
        BRow, BCol, BFormGroup, BFormInput, BFormCheckbox, BForm, BButton, BCard
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
        },
        directives: {
            Ripple,
        },

    }
</script>
