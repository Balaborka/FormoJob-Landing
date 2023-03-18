import React from 'react';

interface InstructionProps {
    title: string;
    description: string;
    image: string;
    signature: string; 
}

export const Instruction: React.FunctionComponent<InstructionProps> = (props) => {
    return (
        <div className='instruction'>
            <div>
                <div className='instructionTitle'>{ props.title }</div>
                <div className='instructionDescription'>{ props.description }</div>
            </div>
            <img className='instructionkImage' src={ props.image }></img>
            <div className='instructionSignature'>{ props.signature }</div>
        </div>
    );
};
