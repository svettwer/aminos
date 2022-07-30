import React, { useState } from 'react';
import { BsFillTrashFill } from "react-icons/bs";
import './../App.css';

export interface ContainedAminoAcid{
    name: String
}

export interface Food{
    name: String
    aminoAcids: ContainedAminoAcid[]
}

export interface FoodListProps {
    onAddFood: (food: Food) => void
    onRemoveFood: (food: Food) => void
    listOfFood: Food[]
  }

export function FoodList(props: FoodListProps){

    const [inpuValue, setInputValue] =  useState(""); 
    const [selectedFood, setSelectedFood] = useState<Food[]>([])

    function onAddFood() {
        const foodToAdd = props.listOfFood.find(food => food.name === inpuValue)
        if(foodToAdd){
            setSelectedFood([...selectedFood, foodToAdd])
            props.onAddFood(foodToAdd);
            setInputValue("");
        }
    }

    function onRemoveFood(foodToRemove: Food) {
        setSelectedFood(selectedFood.filter(food => food.name !== foodToRemove.name))
        props.onRemoveFood(foodToRemove);
    }


    const listItems = selectedFood.map(food => 
        <tr key={food.name.toString()}>
            <td>{food.name}</td>
            <td>{<button onClick={() => onRemoveFood(food)}><BsFillTrashFill/></button>}</td>
        </tr>
    );

    return (
        <div>
            <div>
                <input value={inpuValue} onChange={(e) => {setInputValue(e.target.value)}} list="browsers" />
                <button onClick={onAddFood}>Add</button>
                <datalist id="browsers">
                {props.listOfFood.map(food => <option>{food.name}</option>)}
                </datalist>
            </div>
            <div>
                <table>{listItems}</table>
            </div>
      </div>
    );
}


