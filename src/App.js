import React from 'react';
import {useForm} from "react-hook-form";
import Product from "./components/Product";
import ResetButton from "./components/ResetButton";
import Button from "./components/Button";
import './App.css';

function App() {
    const [strawberryCounter, setStrawberryCounter] = React.useState(0);
    const [bananaCounter, setBananaCounter] = React.useState(0);
    const [appleCounter, setAppleCounter] = React.useState(0);
    const [kiwiCounter, setKiwiCounter] = React.useState(0);

    const {register, handleSubmit, errors, watch} = useForm();

    const alternativeField = watch('frequency');

    function onSubmit(data) {
        console.log("Gegevens: ", data)
        console.log
        (`Bestelling: 
        ${strawberryCounter} aardbeien
        ${bananaCounter} bananen
        ${appleCounter} appels
        ${kiwiCounter} kiwi's
        `)
    }

    function resetAll() {
        setStrawberryCounter(0);
        setBananaCounter(0);
        setAppleCounter(0);
        setKiwiCounter(0);
    }

    return (
        <>
            <fieldset>
                <div>
                    <h1>Fruitmand bezorgservice</h1>

                    <Product
                        title={"🍓 Aardbeien"}
                        counter={strawberryCounter}
                        setcounter={setStrawberryCounter}
                        buttonminus={"button-minus"}
                        buttonplus={"button-plus"}
                    />

                    <Product
                        title={"🍌 Bananen"}
                        counter={bananaCounter}
                        setcounter={setBananaCounter}
                        buttonminus={"button-minus"}
                        buttonplus={"button-plus"}
                    />

                    <Product
                        title={"🍏 Appels"}
                        counter={appleCounter}
                        setcounter={setAppleCounter}
                        buttonminus={"button-minus"}
                        buttonplus={"button-plus"}
                    />

                    <Product
                        title={"🥝 Kiwi's"}
                        counter={kiwiCounter}
                        setcounter={setKiwiCounter}
                        buttonminus={"button-minus"}
                        buttonplus={"button-plus"}
                    />

                    <ResetButton
                        title={"Reset"}
                        name="reset-button"
                        reset={resetAll}
                    />

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="firstName">Vooraam: </label>
                        <input
                            type="text"
                            name="firstName"
                            ref={register(
                                {
                                    required: {
                                        value: true,
                                        message: 'Dit veld mag niet leeg zijn',
                                    },
                                    maxLength: {
                                        value: 10,
                                        message: 'Er mogen maximaal 10 karakters gebruikt worden',
                                    },
                                }
                            )}
                        />
                        {errors.firstName && <p>Dit veld is vereist</p>}
                        <label htmlFor="lastName">Achteraam: </label>
                        <input
                            type="text"
                            name="lastName"
                            ref={register({required: true, minLength: 3})}
                        />
                        {errors.lastName && <p>Dit veld is vereist</p>}

                        <label htmlFor="age">Leeftijd: </label>
                        <input
                            type="number"
                            name="age"
                            placeholder="leeftijd minimaal 18 jaar"
                            ref={register({required: true, min: 18})}
                        />
                        {errors.age && <span>Je moet minimaal 18 jaar zijn</span>}

                        <label htmlFor="postalCode">Postcode: </label>
                        <input
                            type="text"
                            name="postalCode"
                            placeholder="1234AB"
                            ref={register({required: true, maxLength: 6})}
                        />

                        <label htmlFor="houseNumber">Huisnummer (zonder toevoeging): </label>
                        <input
                            type="text"
                            name="houseNumber"
                            placeholder="huisnummer zonder toevoeging"
                            ref={register({required: true})}
                        />

                        <label htmlFor="frequency">Bezorgfrequentie: </label>

                        <label htmlFor="field-every-week">
                            <input
                                type="radio"
                                name="frequency"
                                id="field-every-week"
                                value="every-week"
                                ref={register({required: true})}
                            />
                            iedere week
                        </label>

                        <label htmlFor="field-every-other-week">
                            <input
                                type="radio"
                                name="frequency"
                                id="field-every-other-week"
                                value="every-other-week"
                                ref={register({required: true})}
                            />
                            om de week
                        </label>

                        <label htmlFor="field-every-month">
                            <input
                                type="radio"
                                name="frequency"
                                id="field-every-month"
                                value="every-month"
                                ref={register({required: true})}
                            />
                            iedere maand
                        </label>

                        <label htmlFor="otherwise">
                            <input
                                type="radio"
                                name="frequency"
                                id="otherwise"
                                value="anders"
                                ref={register({required: true})}
                            />
                            anders
                        </label>
                        {alternativeField === "anders" && <textarea name="tekstveld" ref={register}/>}

                        <label htmlFor="remarks">Opmerkingen:
                            <textarea
                                id="remarks"
                                name="remarks"
                                rows="6" cols="40"
                                ref={register(
                                    {
                                        required: {
                                            value: true,
                                            message: 'Dit veld mag niet leeg zijn',
                                        },
                                        maxLength: {
                                            value: 50,
                                            message: 'Er mogen maximaal 50 karakters gebruikt worden',
                                        },
                                    }
                                )}
                            >
                            </textarea>
                        </label>

                        <label htmlFor="terms-and-conditions">
                            <input
                                type="checkbox"
                                name="terms-and-conditions"
                                id="terms-and-conditions"
                                ref={register({required: true})}
                            />

                            Ik ga akkoord met de algemene voorwaarden
                        </label>

                        <Button
                            type="submit"
                            title="Verzend"
                        />
                    </form>
                </div>
            </fieldset>
        </>

    );
}

export default App;
