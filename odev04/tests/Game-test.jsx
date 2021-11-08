const React = require('react');
const { mount } = require('enzyme');
const { Game } = require('../src/Game');


test("Multi try", () => {
    const driver = mount(<Game />);
    for (let i = 0; i < 50; i++) {
        let card = driver.find('.kart').at(0);
        card.simulate('click');
        card.find("img").prop("src");
        card = driver.find('.kart').at(0);
        let src = card.find("img").prop("src")
        expect(src === 'img/Kopek.jpg' || src === 'img/Kedi.jpg').toBeTruthy();
    }
});

test("Lose", () => {
    const driver = mount(<Game />);
    let card = driver.find('.kart').at(0);
    card.simulate('click');
    card.find("img").prop("src");
    card = driver.find('.kart').at(0);
    let src = card.find("img").prop("src")
    expect(src === 'img/Kopek.jpg');
});


test("Win", () => {
    const driver = mount(<Game />);
    let card = driver.find('.kart').at(0);
    card.simulate('click');
    card.find("img").prop("src");
    card = driver.find('.kart').at(0);
    let src = card.find("img").prop("src")
    expect(src === 'img/Kedi.jpg');
});

test("NewGames", () => {
    const driver = mount(<Game />);
    let card = driver.find('.kart').at(0);
    card.simulate('click');
    card = driver.find('.kart').at(1);
    card.simulate('click');
    let tekrarla = driver.find('.link');
    tekrarla.simulate('click');
});