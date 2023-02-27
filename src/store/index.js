import { createStore } from "vuex";

export default createStore({
    state: {
        data: {
            musicians: {
                Metallica: [
                    {
                        song: "Master of puppets",
                        year: 1989,
                    },
                    {
                        song: "Enter Sandman",
                        year: 1990,
                    },
                    {
                        song: "St.Anger",
                        year: 1993,
                    },
                    {
                        song: "Mama Said",
                        year: 1989,
                    },
                    {
                        song: "One",
                        year: 1989,
                    },
                    {
                        song: "Fuel",
                        year: 1989,
                    },
                    {
                        song: "Fade To Black",
                        year: 1991,
                    },
                ],
                Slipknot: [
                    {
                        song: "Psychosocial",
                        year: 2008,
                    },
                    {
                        song: "Duality",
                        year: 2003,
                    },
                    {
                        song: "Before I Forget",
                        year: 2003,
                    },
                    {
                        song: "Wait and Bleed",
                        year: 2001,
                    },
                    {
                        song: "Left Behind",
                        year: 2003,
                    },
                    {
                        song: "Eyeless",
                        year: 2003,
                    },
                    {
                        song: "Dead Memories",
                        year: 2008,
                    },
                ],
                Jinjer: [
                    {
                        song: "A Plus Or A Minus",
                        year: 2012,
                    },
                    {
                        song: "I Speak Astronomy",
                        year: 2017,
                    },
                    {
                        song: "Outlander",
                        year: 2014,
                    },
                ],
                "The agonist": [
                    {
                        song: "Dance Macabre",
                        year: 2016,
                    },
                    {
                        song: "Anxious Darwinians",
                        year: 2012,
                    },
                    {
                        song: "Architects Hallucinate",
                        year: 2016,
                    },
                    {
                        song: "Dead Ocean",
                        year: 2012,
                    },
                    {
                        song: "Follow The Crossed Line",
                        year: 2016,
                    },
                ],
                "Dream theater": [
                    {
                        song: "Dark Eternal Night",
                        year: 2007,
                    },
                    {
                        song: "Forsaken",
                        year: 1994,
                    },
                    {
                        song: "Paralyzed",
                        year: 1998,
                    },
                    {
                        song: "Innocence",
                        year: 2001,
                    },
                    {
                        song: "Constant Motion",
                        year: 2001,
                    },
                    {
                        song: "Beyond This Life",
                        year: 2012,
                    },
                ],
                "Lamb of god": [
                    {
                        song: "Broken Hands",
                        year: 2004,
                    },
                    {
                        song: "Black Label",
                        year: 2007,
                    },
                    {
                        song: "Guilty",
                        year: 2014,
                    },
                ],
            },

            albums: {
                "Топ треков": [
                    { song: "Dream theater - Forsaken", year: 1994 },
                ],
                2022: [{ song: "Jinjer - I speak astronomy", year: 2017 }],
                Новое: [{ song: "Metallica - Master of puppets", year: 1989 }],
                "Для тренировок": [
                    { song: "The agonist - Dance Macabre", year: 2016 },
                ],
                Классика: [{ song: "Lamb of god - Broken Hands", year: 2004 }],
            },
        },
    },
    getters: {},
    mutations: {
        addSong(state, payload) {
            const { musician, songName, songYear, album } = payload;

            const arr = [];
            for (let el in state.data.musicians[musician]) {
                arr.push(el.song);
            }

            const songToMusiciansList = {
                song: `${songName}`,
                year: songYear,
            };
            const songToAlbum = {
                song: `${musician} - ${songName}`,
                year: songYear,
            };

            if (Object.keys(state.data.musicians).includes(musician)) {
                if (!arr.includes(songName)) {
                    state.data.musicians[musician].push(songToMusiciansList);
                }
            }

            state.data.albums[album].push(songToAlbum);
        },
    },
    actions: {},
    modules: {},
});
