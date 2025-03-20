function RollDice()
{
    const DiceImages = document.getElementById("DiceImages");
    const nbrOfDice = document.getElementById("inputNbrDice").value;
    let pDice = document.getElementById("pDice");
    let dices = [];
    let Images = [];
    for (let i = 0; i < nbrOfDice; i++)
    {
        let value = Math.floor(Math.random() * 6) + 1;
        dices.push(value);
        Images.push(`<img src="DicePng/${value}.svg" alt="Dice ${value}">`);
    }

    pDice.textContent = `dice: ${dices.join(", ")}`;
    DiceImages.innerHTML = Images.join(' ');
}