import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import './../App.css';

export interface AminoAcid{
    name: string
}

export interface CoveredAminoAcids{
    name: string,
    percentage: number
}

export interface AminoTableProps {
  aminoAcidsToDisplay: AminoAcid[]
  containedAminoAcidProfile?: CoveredAminoAcids[]
}

export function AminoTable({aminoAcidsToDisplay, containedAminoAcidProfile}: AminoTableProps){
    const listItems = aminoAcidsToDisplay.map(aminoAcid => 
        <tr key={aminoAcid.name}>
            <td style={{width: "120px"}}>{aminoAcid.name}</td>
            <td className='ProgresBar'> {
                <ProgressBar bgColor="#adebad"
                             width='200px'
                             labelColor='#333333'
                             completed={containedAminoAcidProfile?.find(amino => amino.name === aminoAcid.name)?.percentage || 0} 
                             />
                }
            </td>
        </tr>
    );

    return <table>{listItems}</table>;
}