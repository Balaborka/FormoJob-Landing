import React from 'react'
import { Screenshot } from './screenshot'
import { PanelAboutHeader } from '../components/panelAboutHeader'

import ListBox from './listBox';

import TemplatesIcon from '../icons/Templates.png'
import ExtensionViewImage from '../icons/ExtensionView.png'

interface ListItem {
    id: number;
    text: string;
}

export function ExtensionPanel() {
    const listUseExtension: ListItem[] = [
        { id: 1, text: 'Install FormoJob Extension to your browser;' },
        { id: 2, text: 'Take a picture of a document using your phone;' },
        { id: 3, text: 'Copy the recognized fields;' },
        { id: 4, text: 'Paste the fields to the target fields on a website.' },
    ];

    return (
        <div>
            <PanelAboutHeader header={ "Browser Extension" } description={ "Your browser form-filling assistant" } />
            <div className='extensionContainer'>
                <Screenshot image= { ExtensionViewImage } signature='FormoJob Extension - Desktop view' />
                <div className='extensionInstructionContainer'>
                    <ListBox itemsSource={ listUseExtension } />
                    <img className='blockIcon' src={ TemplatesIcon } /> 
                </div>
            </div>
        </div>
    )
}