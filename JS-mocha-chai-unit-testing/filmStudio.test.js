const FilmStudio = require('./filmStudio');
const assert = require('chai').assert;
describe('test film studion class', () => {
    let studio;
    beforeEach(() => {
        studio = new FilmStudio();
    })
    describe('test constructor', () => {
        it('is instanced with 1 param', () => {
            studio = new FilmStudio('Test');
            let expectedName = 'Test';
            let expectedFilms = [];   
            assert.equal(studio.name, expectedName);
            assert.equal(studio.films.toString(), expectedFilms.toString());
        });
        
    });

    describe('test makeMovie', () => {
        it('throw error when less that 2 args', () => {
            let result = function () {
                studio = new FilmStudio('Test');
                studio.makeMovie();
            }
            assert.throw(result, 'Invalid arguments count');
        });
        it('throw error when 1st arg is not string', () => {
            let result = function () {
                studio = new FilmStudio('Test');
                studio.makeMovie(1, ['dwq']);
            }
            assert.throw(result, 'Invalid arguments');
        });
        it('throw error when 2nd arg is not array', () => {
            let result = function () {
                studio = new FilmStudio('Test');
                studio.makeMovie('1', 'dwq');
            }
            assert.throw(result, 'Invalid arguments');
        });
        it('create film porperly', () => {
            studio = new FilmStudio('Test');
            assert.equal(studio.makeMovie('Avengers', ['role1', 'role2']).filmName, 'Avengers');
            assert.equal(studio.makeMovie('Avengers', ['role1', 'role2']).filmRoles.length, 2);
        });
        it('add more roles to created movie', () => {
            studio = new FilmStudio('Test');
            assert.equal(studio.makeMovie('Avengers', ['role1', 'role2']).filmRoles.length, 2);
            assert.equal(studio.makeMovie('Avengers', ['role1', 'role2', 'role3']).filmRoles.length, 3);
        });
        it('create sequal to created movie when created with the same name', () => {
            studio = new FilmStudio('Test');
            studio.makeMovie('Avengers', ['role1', 'role2']);
            assert.equal(studio.makeMovie('Avengers', ['role1', 'role2', 'role3']).filmName, 'Avengers 2');

        });

    });

    describe('test casting func', () => {
        it('return msg when there is no films', () => {
            studio = new FilmStudio('Test');
            assert.equal(studio.casting('any', 'any'), `There are no films yet in Test.`)
        });

        it('return msg when cannot find role', () => {
            studio = new FilmStudio('Test');
            studio.makeMovie('Avengers', ['role1', 'role2']);
            assert.equal(studio.casting('any', 'role3'), `any, we cannot find a role3 role...`)
        });
        it('return msg when found role for the actor', () => {
            studio = new FilmStudio('Test');
            studio.makeMovie('Avengers', ['role1', 'role2']);
            assert.equal(studio.casting('any', 'role1'), `You got the job! Mr. any you are next role1 in the Avengers. Congratz!`)
        });
    });

    describe('test lookForProducer', () => {
        it('throw error when no film is found', () => {

            let result = function () {
                studio = new FilmStudio('Test');
                studio.makeMovie('Avengers', ['role1', 'role2']);
                studio.lookForProducer('HP');
            }
            
            assert.throw(result, `HP do not exist yet, but we need the money...`)
        });
        it('return msg when film is found with no actors', () => {
            studio = new FilmStudio('Test');
            studio.makeMovie('Avengers', ['role1', 'role2']);
            assert.equal(studio.lookForProducer('Avengers'), 'Film name: Avengers\nCast:\nfalse as role1\nfalse as role2\n')
        });
        it('return msg when film is found with  actors', () => {
            studio = new FilmStudio('Test');
            studio.makeMovie('Avengers', ['role1', 'role2']);
            studio.casting('any1', 'role1');
            studio.casting('any2', 'role2');
            assert.equal(studio.lookForProducer('Avengers'), 'Film name: Avengers\nCast:\nany1 as role1\nany2 as role2\n')
        });

    });
});
