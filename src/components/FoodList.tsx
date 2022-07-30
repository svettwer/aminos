import React, { useState } from 'react';
import { BsFillTrashFill } from "react-icons/bs";
import './../App.css';

export interface ContainedAminoAcid{
    name: string
}

export interface Food{
    name: string
    aminoAcids: ContainedAminoAcid[]
}

export interface ConsumendFood extends Food{
    amount: number
}

export interface FoodListProps {
    onAddFood: (food: ConsumendFood) => void
    onRemoveFood: (food: Food) => void
    listOfFood: Food[]
  }

export function FoodList(props: FoodListProps){

    const [foodValue, setFoodValue] =  useState(""); 
    const [amountValue, setAmountValue] =  useState(0); 
    const [selectedFood, setSelectedFood] = useState<ConsumendFood[]>([])

    function onAddFood() {
        const foodToAdd = props.listOfFood.find(food => food.name === foodValue)
        if(foodToAdd){
            setSelectedFood([...selectedFood, {...foodToAdd, amount:amountValue}])
            props.onAddFood({...foodToAdd, amount:amountValue});
            setFoodValue("");
        }
    }

    function onRemoveFood(foodToRemove: Food) {
        setSelectedFood(selectedFood.filter(food => food.name !== foodToRemove.name))
        props.onRemoveFood(foodToRemove);
    }


    const listItems = selectedFood.map(food => 
        <tr key={food.name.toString()}>
            <td>{food.name}</td>
            <td>{food.amount} gr.</td>
            <td>{<button onClick={() => onRemoveFood(food)}><BsFillTrashFill/></button>}</td>
        </tr>
    );

    return (
        <div>
            <div>
                <input value={foodValue} onChange={(e) => {setFoodValue(e.target.value)}} list="browsers" />
                <input style={{width: "50px"}} value={amountValue} onChange={(e) => {setAmountValue(Number(e.target.value))}}/> gr.
                <button  style={{marginLeft: "5px"}} onClick={onAddFood}>Add</button>
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


