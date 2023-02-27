import { createStore } from "vuex";

export default createStore({
    state: {
        data: {
            musicians: {
                Metallica: [
                    "Master of puppets",
                    "Enter Sandman",
                    "St.Anger",
                    "Mama Said",
                    "One",
                    "Fuel",
                    "Fade To Black",
                ],
                Slipknot: [
                    "Psychosocial",
                    "Duality",
                    "Before I Forget",
                    "Wait and Bleed",
                    "Dead Memories",
                    "Eyeless",
                    "Left Behind",
                    "Vermilion",
                ],
                Jinjer: [
                    "Master of puppets",
                    "Enter Sandman",
                    "St.Anger",
                    "A Plus Or A Minus",
                    "I Speak Astronomy",
                    "Outlander",
                ],
                "The Agonist": [
                    "Dance Macabre",
                    "Buiseness suits and combat boots",
                    "Anxious Darwinians",
                    "Architects Hallucinate",
                    "Dead Ocean",
                    "Follow The Crossed Line",
                ],
                "Dream Theater": [
                    "Dark Eternal Night",
                    "Forsaken",
                    "Beyond This Life",
                    "Constant Motion",
                    "Innocence",
                    "Paralyzed",
                ],
                "Lamb of God": ["Broken Hands", "Black Label", "Guilty"],
                "Children of Bodom": [
                    "Are yoy dead yet",
                    "Sixpounder",
                    "Everytime i die",
                    "Bastards Of Bodom",
                    "Bodom After Midnight",
                    "Follow The Reaper",
                    "In Your Face",
                ],
            },
        },
    },
    getters: {},
    mutations: {},
    actions: {},
    modules: {},
});
