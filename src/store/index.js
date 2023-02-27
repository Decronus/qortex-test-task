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
                "The Agonist": [
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
                "Dream Theater": [
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
                "Lamb of God": [
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
                "Топ треков": ["Metallica - Master of puppets"],
                2022: ["Metallica - Master of puppets"],
                Новое: ["Metallica - Master of puppets"],
                "Для тренировок": ["Metallica - Master of puppets"],
                Классика: ["Metallica - Master of puppets"],
            },
        },
    },
    getters: {},
    mutations: {},
    actions: {},
    modules: {},
});
