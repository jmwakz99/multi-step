import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        towns: [
            'Ahero',
            'Athi River',
            'Awasi',
            'Bomet',
            'Bondo',
            'Bungoma',
            'Burnt Forest',
            'Busia',
            'Chuka',
            'Eldama Ravine',
            'Eldoret',
            'Embu',
            'Garissa',
            'Gilgil',
            'Homa Bay',
            'Isiolo',
            'Iten/Tambach',
            'Juja',
            'Kakamega',
            'Kakuma',
            'Kangundo',
            'Kapenguria',
            'Kapsabet',
            'Karuri',
            'Kehancha',
            'Kendu Bay',
            'Kericho',
            'Keroka',
            'Kerugoya',
            'Kiambu',
            'Kikuyu',
            'Kilifi',
            'Kimilili',
            'Kipkelion',
            'Kisii',
            'Kisumu',
            'Kitale',
            'Kitengela',
            'Kitui',
            'Kutus',
            'Limuru',
            'Litein',
            'Lodwar',
            'Londiani',
            'Luanda',
            'Machakos',
            'Makuyu',
            'Malaba',
            'Malakisi',
            'Malava',
            'Malindi',
            'Mandera',
            'Maragua',
            'Maralal',
            'Mariakani',
            'Matuu',
            'Maua',
            'Mbita Point',
            'Meru',
            'Migori',
            'Molo',
            'Mombasa',
            'Moyale',
            'Mtwapa',
            'Muhoroni',
            'Mumias',
            'Mwingi',
            'Nairobi',
            'Naivasha',
            'Nakuru',
            'Nambale',
            'Nandi Hills',
            'Nanyuki',
            'Narok',
            'Ngong',
            'Nyahururu',
            'Nyamira',
            'Nyansiongo',
            'Nyeri',
            'Ogembo',
            'Ol Kalou',
            'Ongata Rongai',
            'Oyugis',
            'Rongo',
            'Ruiru',
            'Rumuruti',
            'Runyenjes',
            'Siaya',
            'Suneka',
            'Tabaka',
            'Taveta',
            'Thika',
            'Ugunja',
            'Ukunda',
            'Ukwala',
            'Vihiga',
            'Voi',
            'Wajir',
            'Webuye',
            'Wundanyi',
            'Yala'
        ],
        details: {},
        alert: false
    },
    mutations: {
        setDetails(state, payload) {
            state.details = payload
        },
        setAlert(state, payload) {
            state.alert = payload
        }
    },
    actions: {
        displayDetails({ commit }, payload) {
            let details = {};
            details.firstName = payload.firstName
            details.lastName = payload.lastName
            details.email = payload.email
            details.phoneNumber = payload.phoneNumber
            details.identificationNumber = payload.identificationNumber
            details.companyName = payload.companyName
            details.town = payload.town
            details.kraPin = payload.kraPin
            details.companyRevenue = payload.companyRevenue
            commit('setDetails', details)
            commit('setAlert', true)
        },
        clearAlert({ commit }) {
            commit('setAlert', false)
        }
    },
    getters: {
        details(state) {
            return state.details
        },
        towns(state) {
            return state.towns
        },
        alert(state) {
            return state.alert
        }
    }
})