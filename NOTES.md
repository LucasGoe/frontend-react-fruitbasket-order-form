```js
// bij gebruik van afbeeldingen in assets map
// import aardbeien from './assets/strawberry_1f353.png'
// import bananen from './assets/banana_1f34c.png';
// import appels from './assets/green-apple_1f34f.png';
// import kiwis from './assets/kiwi-fruit_1f95d.png';


// code App.js zonder gebruik van componenten Product.js ResetButton.js

<article>
    {/*<img id="aardbei" src={aardbeien} alt={"img_aardbei"}/>*/}
    <h2>🍓 Aardbeien</h2>
    <button
        type="button"
        className="aardbei-minus"
        onClick={() => (strawberryCounter > 0 ? setStrawberryCounter(strawberryCounter - 1) : setStrawberryCounter(0))}
    > -
    </button>
    <p>{strawberryCounter}</p>
    <button type="button"
            className="aardbei-plus"
            onClick={() => setStrawberryCounter(strawberryCounter + 1)}
    > +
    </button>
</article>

<article>
    {/*<img id="banaan" src={bananen} alt={"img_banaan"}/>*/}
    <h2>🍌 Bananen</h2>
    <button
        type="button"
        className="banaan-minus"
        onClick={() => (bananaCounter > 0 ? setBananaCounter(bananaCounter - 1) : setBananaCounter(0))}
    > -
    </button>
    <p>{bananaCounter}</p>
    <button type="button"
            className="banaan-plus"
            onClick={() => setBananaCounter(bananaCounter + 1)}
    > +
    </button>
</article>

<article>
    {/*<img id="appel" src={appels} alt={"img_appel"}/>*/}
    <h2>🍏 Appels</h2>
    <button
        type="button"
        className="appel-minus"
        onClick={() => (appleCounter > 0 ? setAppleCounter(appleCounter - 1) : setAppleCounter(0))}
    > -
    </button>
    <p>{appleCounter}</p>
    <button type="button"
            className="appel-plus"
            onClick={() => setAppleCounter(appleCounter + 1)}
    > +
    </button>
</article>

<article>
    {/*<img id="kiwi" src={kiwis} alt={"img_kiwi"}/>*/}
    <h2>🥝 Kiwi's</h2>
    <button
        type="button"
        className="kiwi-minus"
        onClick={() => (kiwiCounter > 0 ? setKiwiCounter(kiwiCounter - 1) : setKiwiCounter(0))}
    > -
    </button>
    <p>{kiwiCounter}</p>
    <button type="button"
            className="kiwi-plus"
            onClick={() => (setKiwiCounter(kiwiCounter + 1))}
    > +
    </button>
</article>
                       


<button
    type="reset"
    className="reset-button"
    onClick={resetAll}
> Reset
</button>


```