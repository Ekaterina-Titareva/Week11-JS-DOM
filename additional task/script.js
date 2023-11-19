// "use strict";

const coatPrice = document.getElementById('coatPrice');
const coatPriceText = coatPrice.innerHTML;
const coatPriceTextNumber = +coatPrice.innerHTML;

const sweaterPrice = document.getElementById('sweaterPrice');
const sweaterPriceText = sweaterPrice.innerHTML;
const sweaterPriceTextNumber = +sweaterPrice.innerHTML;

const trousersPrice = document.getElementById('trousersPrice');
const trousersPriceText = trousersPrice.innerHTML;
const trousersPriceTextNumber = +trousersPrice.innerHTML;

const bootsPrice = document.getElementById('bootsPrice');
const bootsPriceText = bootsPrice.innerHTML;
const bootsPriceTextNumber = +bootsPrice.innerHTML;

const handbagPrice = document.getElementById('handbagPrice');
const handbagPriceText = handbagPrice.innerHTML;
const handbagPriceTextNumber = +handbagPrice.innerHTML;

const total = document.querySelector('.total');
const totalValue = coatPriceTextNumber + sweaterPriceTextNumber + trousersPriceTextNumber + bootsPriceTextNumber + handbagPriceTextNumber;
total.append(totalValue);


function calculateDiscount() {

    // Вычитаем скидку 20% от цен и заменяем старые значения

    const coatPriceDiscount = (coatPriceTextNumber) * 0.8;
    const coatPriceDiscountString = String(coatPriceDiscount);
    document.getElementById('coatPrice').innerHTML = coatPriceDiscountString; //coatPrice.innerHTML = coatPriceDiscountString; Подскажите, пожалуйса, почему такой код  не срабатывает.. 

    const sweaterPriceDiscount = (sweaterPriceTextNumber) * 0.8;
    const sweaterPriceDiscountString = String(sweaterPriceDiscount);
    document.getElementById('sweaterPrice').innerHTML = sweaterPriceDiscountString;

    const trousersPriceDiscount = (trousersPriceTextNumber) * 0.8;
    const trousersPriceDiscountString = String(trousersPriceDiscount);
    document.getElementById('trousersPrice').innerHTML = trousersPriceDiscountString;

    const bootsPriceDiscount = (bootsPriceTextNumber) * 0.8;
    const bootsPriceDiscountString = String(bootsPriceDiscount);
    document.getElementById('bootsPrice').innerHTML = bootsPriceDiscountString;

    const handbagPriceDiscount = (handbagPriceTextNumber) * 0.8;
    const handbagPriceDiscountString = String(handbagPriceDiscount);
    document.getElementById('handbagPrice').innerHTML = handbagPriceDiscountString;

    const totalValueDiscount = +coatPriceDiscountString + +sweaterPriceDiscountString + +trousersPriceDiscountString + +bootsPriceDiscountString + +handbagPriceDiscountString;
    document.querySelector('.total').innerHTML = totalValueDiscount;

    // Изменяем цвет цен

	const changePriceColorCoatPrice = coatPrice;
	changePriceColorCoatPrice.classList.toggle('discount-price');

    const changePriceColorSweaterPrice = sweaterPrice;
	changePriceColorSweaterPrice.classList.toggle('discount-price');

    const changePriceColorTrousersPrice = trousersPrice;
	changePriceColorTrousersPrice.classList.toggle('discount-price');

    const changePriceColorBootsPrice = bootsPrice;
    changePriceColorBootsPrice.classList.toggle('discount-price');

    const changePriceColorHadbagPrice = handbagPrice;
    changePriceColorHadbagPrice.classList.toggle('discount-price');
    
    const changePriceColorTotal = total;
    changePriceColorTotal.classList.toggle('discount-price');
}
document.querySelector('.btn').onclick = calculateDiscount;
