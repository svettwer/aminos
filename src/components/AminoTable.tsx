import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import './../App.css';

export interface AminoAcid{
    name: String,
    essential: boolean
}

export interface CoveredAminoAcids{
    name: String,
    percentage: number
}

export interface AminoTableProps {
  aminoAcidsToDisplay: AminoAcid[]
  coveredAminoAcids?: CoveredAminoAcids[]
}

export function AminoTable({aminoAcidsToDisplay, coveredAminoAcids}: AminoTableProps){
    const listItems = aminoAcidsToDisplay.map(aminoAcid => 
        <tr key={aminoAcid.name.toString()}>
            <td style={{width: "120px"}}>{aminoAcid.name}</td>
            <td className='ProgresBar'>{<ProgressBar bgColor="#adebad" width='200px' labelColor='#333333' completed={coveredAminoAcids?.find(amino => amino.name === aminoAcid.name)?.percentage || 0} />}</td>
        </tr>
    );

    return <table>{listItems}</table>;
}