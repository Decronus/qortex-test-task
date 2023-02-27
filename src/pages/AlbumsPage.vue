<template>
    <h3 class="q-mb-lg">Aльбомы</h3>
    <q-list>
        <q-item
            clickable
            v-for="(album, index) in Object.keys($store.state.data.albums)"
            :key="index"
            @click="showAlbum(album)"
        >
            <q-item-section avatar>
                <q-icon name="library_music" />
            </q-item-section>
            <q-item-section>{{ album }}</q-item-section>
            <q-item-section avatar>
                <q-icon color="primary" name="add_circle" />
            </q-item-section>
        </q-item>
    </q-list>

    <q-dialog v-model="modalAlbum">
        <q-layout style="min-height: 0%">
            <q-card class="q-pa-md">
                <q-card-section class="row items-center">
                    <div class="text-h6">{{ currentAlbum }}</div>
                    <q-space />
                    <q-btn icon="close" flat round dense v-close-popup />
                </q-card-section>

                <q-list class="q-mb-lg">
                    <q-item
                        v-for="(song, index) in $store.state.data.albums[
                            currentAlbum
                        ]"
                        :key="index"
                        @click="icon = true"
                    >
                        <q-item-section avatar>
                            <q-icon name="audiotrack" />
                        </q-item-section>
                        <q-item-section
                            >{{ index + 1 }}. {{ song }}</q-item-section
                        >
                    </q-item>
                </q-list>
                <q-btn
                    class="q-ml-md"
                    color="primary"
                    label="Добавить песню"
                    @click="addSong"
                ></q-btn>
            </q-card>
        </q-layout>
    </q-dialog>

    <q-dialog v-model="modalAddSong">
        <q-layout style="min-height: 0%">
            <q-card class="q-pa-md">
                <q-card-section class="row items-center">
                    <div class="text-h6">Добавить песню</div>
                    <q-space />
                    <q-btn icon="close" flat round dense v-close-popup />
                </q-card-section>
            </q-card>
        </q-layout>
    </q-dialog>
</template>

<script>
export default {
    data() {
        return {
            modalAlbum: false,
            modalAddSong: false,
            currentAlbum: null,
        };
    },

    methods: {
        showAlbum(album) {
            this.currentAlbum = album;
            this.modalAlbum = true;
        },

        addSong() {
            this.modalAlbum = false;
            this.modalAddSong = true;
        },
    },
};
</script>

<style></style>
