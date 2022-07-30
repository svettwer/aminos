import React, { useEffect, useState } from 'react';
import './../App.css';
import { AminoTable } from './AminoTable';
import aminoAcids from '../data/aminos.json'
import knownFood from '../data/food.json'
import { ConsumendFood, Food, FoodList } from './FoodList';


export interface ConsumedAminoAcid{
    name: string,
    consumedAmount: number
}

export function AminoCoverage(){

    const [foodList, setFoodList] = useState<ConsumendFood[]>([]);
    const [containedAminoAcids, setCoveredAminoAcids] = useState<ConsumedAminoAcid[]>([])

    useEffect(() => {
        const coveredAminoAcids = foodList.flatMap(food => food.aminoAcids).map(aminoAcid => {
            return {name: aminoAcid.name, consumedAmount: 0}}
            )
        setCoveredAminoAcids(coveredAminoAcids)
      }, [foodList])

    function onAddFood(food: ConsumendFood){
        setFoodList([...foodList, food]);
    }

    function onRemoveFood(foodToRemove: Food){
        setFoodList(foodList.filter(food => food !== foodToRemove))
    }

    function calculateContainedAminoAcids() {



        return []
    }

    return (
        <div className='AminoCoverage'>
            <AminoTable aminoAcidsToDisplay={aminoAcids} containedAminoAcidProfile={calculateContainedAminoAcids()} />
            <br></br>
            <FoodList listOfFood={knownFood} onAddFood={onAddFood} onRemoveFood={onRemoveFood}/>
        </div>
    );
}