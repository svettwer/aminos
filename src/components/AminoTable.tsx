import React from 'react';
import { FcCheckmark, FcCancel } from "react-icons/fc";
import './../App.css';

export interface AminoAcid{
    name: String,
    essential: boolean
}

export interface AminoTableProps {
  aminoAcidsToDisplay: AminoAcid[]
  coveredAminoAcids?: String[]
}

export function AminoTable(props: AminoTableProps){
    const listItems = props.aminoAcidsToDisplay.map(aminoAcid => 
        <tr key={aminoAcid.name.toString()}>
            <td>{aminoAcid.name}</td>
            <td>{props.coveredAminoAcids?.includes(aminoAcid.name) ? <FcCheckmark/> : <FcCancel/>}</td>
        </tr>
    );

    return <table>{listItems}</table>;
}