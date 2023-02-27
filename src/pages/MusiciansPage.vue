<template>
    <h3 class="q-mb-lg">Исполнители</h3>
    <q-list>
        <q-item
            clickable
            v-for="(musician, index) in Object.keys(
                $store.state.data.musicians
            )"
            :key="index"
            @click="openSongsModal(musician)"
        >
            <q-item-section avatar style="min-width: 40px">
                <q-icon name="mic_external_on" />
            </q-item-section>
            <q-item-section>{{ musician }}</q-item-section>
            <q-item-section avatar>
                <q-icon color="primary" name="more_horiz" />
            </q-item-section>
        </q-item>
    </q-list>

    <q-dialog v-model="modal">
        <q-layout style="min-height: 0%">
            <q-card class="q-pa-md">
                <q-card-section class="row items-center">
                    <div class="text-h6">{{ currentMusician }}</div>
                    <q-space />
                    <q-btn icon="close" flat round dense v-close-popup />
                </q-card-section>

                <q-list>
                    <q-item
                        v-for="(musician, index) in $store.state.data.musicians[
                            currentMusician
                        ]"
                        :key="index"
                        @click="icon = true"
                    >
                        <q-item-section avatar style="min-width: 40px">
                            <q-icon name="audiotrack" />
                        </q-item-section>
                        <q-item-section>{{ musician.song }}</q-item-section>
                        <q-item-section class="text-grey-6">{{
                            musician.year
                        }}</q-item-section>
                    </q-item>
                </q-list>
            </q-card>
        </q-layout>
    </q-dialog>
</template>

<script>
export default {
    data() {
        return {
            modal: false,
            currentMusician: null,
        };
    },

    methods: {
        openSongsModal(musician) {
            this.currentMusician = musician;
            this.modal = true;
        },
    },
};
</script>

<style></style>
