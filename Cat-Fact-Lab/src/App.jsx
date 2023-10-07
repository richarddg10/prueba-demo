import React from "react";
import { Header, CatImg, CatDescription, Button } from "./components";
import { useApp } from "./hooks/useApp";

export function App() {

    const { fact, img, isLoading, error, words, handleOnClick } = useApp()

    if (isLoading) {
        return (
            <>
                <Header />
                <p>Your Cat-Fact is loading...</p>
            </>
        )
    }

    if (error) {
        return (
            <p>{error}</p>
        )
    }

    return (
        <>
            <Header />
            <CatImg content={img} />
            <CatDescription text={fact} />
            <Button onClick={handleOnClick} />
        </>
    )
}