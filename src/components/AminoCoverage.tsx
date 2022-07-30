import React, { useEffect, useState } from 'react';
import './../App.css';
import { AminoTable, CoveredAminoAcids } from './AminoTable';
import aminoAcids from '../data/aminos.json'
import knownFood from '../data/food.json'
import { Food, FoodList } from './FoodList';

export function AminoCoverage(){

    const [foodList, setFoodList] = useState<Food[]>([]);
    const [coveredAminoAcids, setCoveredAminoAcids] = useState<CoveredAminoAcids[]>([])

    useEffect(() => {
        const coveredAminoAcids = foodList.flatMap(food => food.aminoAcids).map(aminoAcid => {
            return {name: aminoAcid.name, percentage: 0}}
            )
        setCoveredAminoAcids(coveredAminoAcids)
      }, [foodList])

    function onAddFood(food: Food){
        setFoodList([...foodList, food]);
    }

    function onRemoveFood(foodToRemove: Food){
        setFoodList(foodList.filter(food => food !== foodToRemove))
    }

    return (
        <div className='AminoCoverage'>
            <AminoTable aminoAcidsToDisplay={aminoAcids} coveredAminoAcids={coveredAminoAcids} />
            <br></br>
            <FoodList listOfFood={knownFood} onAddFood={onAddFood} onRemoveFood={onRemoveFood}/>
        </div>
    );
}