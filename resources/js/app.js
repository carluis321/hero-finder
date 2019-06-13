import Vue from 'vue';
import axios from 'axios';
import $ from 'jquery';
import 'bootstrap';

new Vue({
    el: '#app',
    data: {
        title: 'Find your hero\'s information',
        hero: null,
        heroesFound: [],
        notFoundMessage: null
    },
    computed:{
        lookingForMessage () {
            if (this.hero && this.hero.length > 2){
                return 'Looking for heroes with name: ' + this.hero;
            }

            return '';
        }
    },
    methods: {
        async findHeroes () {
            this.notFoundMessage = '';

            if (this.hero.length < 3) {
                return [];
            }

            await axios.post('/find-heroes', {
                name: this.hero
            }).then(response => {
                this.heroesFound = response.data;

                if (this.heroesFound === null){
                    this.notFoundMessage = 'heroes not found';
                }
            }).catch(err => {
                console.log(err);
            });
        },
        heroInformation (heroId) {
            let hero = this.heroesFound.find(hero => hero.id === heroId);

            const modal = $('#hero-modal');

            modal.find('.modal-title').html(hero.name);

            modal.find('#hero-image').attr('src', hero.image.url);
            
            modal.find('#intelligence').html(hero.powerstats.intelligence);
            modal.find('#strength').html(hero.powerstats.strength);
            modal.find('#speed').html(hero.powerstats.speed);
            modal.find('#durability').html(hero.powerstats.durability);
            modal.find('#power').html(hero.powerstats.power);
            modal.find('#combat').html(hero.powerstats.combat);

            modal.modal('show');

            console.log(hero);
        }
    }
});