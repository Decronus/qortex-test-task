<template>
    <q-layout>
        <q-header bordered class="bg-white text-primary">
            <q-tabs no-caps>
                <q-route-tab name="main" label="Главная" to="/" />
                <q-route-tab
                    name="musicians"
                    label="Исполнители"
                    to="/musicians"
                />
                <q-route-tab name="albums" label="Альбомы" to="/albums" />
            </q-tabs>
        </q-header>

        <q-page-container>
            <q-page padding>
                <router-view></router-view>
            </q-page>
        </q-page-container>
    </q-layout>
</template>

<script>
export default {
    name: "LayoutDefault",
};
</script>
