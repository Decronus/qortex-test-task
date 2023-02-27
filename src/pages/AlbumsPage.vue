<template>
    <h3 class="q-mb-lg">Aльбомы</h3>
    <q-list>
        <q-item
            clickable
            v-for="(album, index) in Object.keys($store.state.data.albums)"
            :key="index"
            @click="openAlbumModal(album)"
        >
            <q-item-section avatar style="min-width: 40px">
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
                        <q-item-section avatar style="min-width: 40px">
                            <q-icon name="audiotrack" />
                        </q-item-section>

                        <q-item-section
                            >{{ index + 1 }}. {{ song.song }}</q-item-section
                        >
                        <q-item-section class="text-grey-6">{{
                            song.year
                        }}</q-item-section>
                    </q-item>
                </q-list>
                <q-btn
                    class="q-ml-md q-mb-md"
                    color="primary"
                    label="Добавить песню"
                    @click="openAddSongModal"
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

                <div class="q-gutter-y-md q-mb-md column">
                    <q-input
                        class="q-px-md text-subtitle1"
                        outlined
                        v-model.trim="musician"
                        placeholder="Исполнитель"
                        :dense="true"
                        bottom-slots
                        error-message="Поле должно быть заполнено"
                        :error="!musicianIsValid"
                    />

                    <q-input
                        class="q-px-md text-subtitle1"
                        outlined
                        v-model.trim="songName"
                        placeholder="Название песни"
                        :dense="true"
                        bottom-slots
                        error-message="Поле должно быть заполнено"
                        :error="!songNameIsValid"
                    />

                    <q-input
                        class="q-px-md text-subtitle1"
                        outlined
                        v-model.trim="songYear"
                        placeholder="Год выпуска"
                        :dense="true"
                        maxlength="4"
                        @keypress="isNumber"
                        bottom-slots
                        error-message="Поле должно быть заполнено"
                        :error="!songYearIsValid"
                    />
                </div>
                <q-btn
                    class="q-ml-md q-mb-md"
                    color="primary"
                    label="Добавить"
                    @click="addSong"
                ></q-btn>
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
            musician: "",
            songName: "",
            songYear: "",
            musicianIsValid: true,
            songNameIsValid: true,
            songYearIsValid: true,
        };
    },

    methods: {
        openAlbumModal(album) {
            this.currentAlbum = album;
            this.modalAlbum = true;
        },

        openAddSongModal() {
            this.modalAlbum = false;
            this.modalAddSong = true;
        },

        addSong() {
            this.validateInputs();

            if (this.musician && this.songName && this.songYear) {
                const payload = {
                    musician: this.formatString(this.musician),
                    songName: this.formatString(this.songName),
                    songYear: this.formatString(this.songYear),
                    album: this.currentAlbum,
                };

                if (
                    JSON.stringify(
                        this.$store.state.data.albums[this.currentAlbum]
                    ).includes(`${payload.musician} - ${payload.songName}`)
                ) {
                    this.$q.notify({
                        type: "negative",
                        message: "Такая песня уже есть в этом альбоме",
                    });
                } else {
                    this.$store.commit("addSong", payload);
                    this.modalAddSong = false;
                    this.musician = this.songName = this.songYear = "";
                    this.$q.notify("Песня успешно добавлена");
                }
            }
        },

        validateInputs() {
            if (!this.musician) {
                this.musicianIsValid = false;
            } else {
                this.musicianIsValid = true;
            }

            if (!this.songName) {
                this.songNameIsValid = false;
            } else {
                this.songNameIsValid = true;
            }

            if (!this.songYear) {
                this.songYearIsValid = false;
            } else {
                this.songYearIsValid = true;
            }
        },

        formatString(str) {
            const newStr = str.toLowerCase();
            return newStr[0].toUpperCase() + newStr.substring(1);
        },

        isNumber(event) {
            if (event.key < "0" || event.key > "9") {
                event.preventDefault();
            }
        },
    },
};
</script>

<style></style>
