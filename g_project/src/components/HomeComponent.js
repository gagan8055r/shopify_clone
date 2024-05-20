
// import React from 'react';
// import grapesjs from 'grapesjs';
// import 'grapesjs/dist/css/grapes.min.css';
// import grapesjsBasicBlocks from 'grapesjs-blocks-basic';
// import grapesjsPresetWebpage from 'grapesjs-preset-webpage';
// import './HomeComponent.css';
//
// class HomeComponent extends React.Component {
//     containerRef = React.createRef();
//
//     componentDidMount() {
//         const editor = grapesjs.init({
//             container: this.containerRef.current,
//             height: '100vh', // Set full viewport height
//             width: 'auto',
//             storageManager: false,
//             panels: { defaults: [] },
//             blockManager: {
//                 appendTo: '#blocks',
//             },
//             styleManager: {
//                 appendTo: '.traits-container',
//                 sectors: [
//                     {
//                         name: 'General',
//                         buildProps: ['background-image', 'background-color'],
//                     },
//                     {
//                         name: 'Typography',
//                         buildProps: [
//                             'font-family',
//                             'color',
//                             'font-size',
//                             'font-weight',
//                             'letter-spacing',
//                             'line-height',
//                             'text-align'
//                         ],
//                     },
//                     {
//                         name: 'Dimension',
//                         buildProps: ['width', 'height', 'margin', 'padding'],
//                     },
//                 ],
//             },
//             plugins: [grapesjsBasicBlocks, grapesjsPresetWebpage],
//         });
//
//         this.editor = editor;
//
//         editor.BlockManager.add('custom-heading', {
//             label: 'Custom Heading',
//             category: 'Basic',
//             content: `<h1 class="custom-heading" data-gjs-type="text">Your Heading Here</h1>`,
//         });
//
//         editor.DomComponents.addType('text', {
//             isComponent: el => el.tagName === 'H1' || el.tagName === 'H2' || el.tagName === 'H3' || el.tagName === 'H4' || el.tagName === 'H5' || el.tagName === 'H6',
//             model: {
//                 defaults: {
//                     traits: [
//                         {
//                             type: 'text',
//                             label: 'Content',
//                             name: 'content',
//                         },
//                         {
//                             type: 'select',
//                             label: 'Font Family',
//                             name: 'font-family',
//                             options: [
//                                 { id: 'Arial', name: 'Arial' },
//                                 { id: 'Georgia', name: 'Georgia' },
//                                 { id: 'Times New Roman', name: 'Times New Roman' },
//                                 { id: 'Verdana', name: 'Verdana' },
//                             ],
//                         },
//                         {
//                             type: 'color',
//                             label: 'Text Color',
//                             name: 'color',
//                         },
//                         {
//                             type: 'number',
//                             label: 'Font Size',
//                             name: 'font-size',
//                             min: 10,
//                             max: 100,
//                             unit: 'px',
//                         },
//                     ],
//                     attributes: {
//                         contenteditable: true,
//                     },
//                 },
//             },
//         });
//
//         // Ensure traits are visible for selected text component
//         editor.on('component:selected', () => {
//             const selected = editor.getSelected();
//             if (selected && selected.is('text')) {
//                 const traitManager = editor.TraitManager;
//                 if (traitManager) {
//                     const traitsViewer = traitManager.getTraitsViewer();
//                     if (traitsViewer) {
//                         traitsViewer.render();
//                     }
//                 }
//             }
//         });
//     }
//
//     componentWillUnmount() {
//         this.editor.destroy();
//     }
//
//     saveContent = () => {
//         const components = this.editor.getComponents().toArray();
//         const content = [];
//
//         for (const component of components) {
//             const componentData = { type: component.attributes.type };
//
//             switch (component.attributes.type) {
//                 case 'text':
//                     const styleObject = component.getStyle();
//                     componentData.content = component.view.$el.html();
//                     componentData.styles = {
//                         fontFamily: styleObject['font-family'],
//                         color: styleObject.color,
//                         fontSize: styleObject['font-size'],
//                     };
//                     break;
//                 case 'image':
//                     componentData.src = component.attributes.src;
//                     componentData.styles = {
//                         width: component.attributes.width,
//                         height: component.attributes.height,
//                     };
//                     break;
//
//                 default:
//                     break;
//             }
//
//             content.push(componentData);
//         }
//
//         const contentString = JSON.stringify(content);
//         const { storeId } = this.props;
//
//         const payload = {
//             content: contentString,
//             store_id: storeId,
//         };
//
//         console.log(payload);
//
//         fetch('https://capital-duck-18.hasura.app/api/rest/add-content', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'x-hasura-admin-secret': '7qN1gqjjqtf1QXkkW435OMGfAkmbMpSwSMc3EdUtVFnworAdDKosz6k8LB0nuL4v',
//             },
//             body: JSON.stringify(payload),
//         })
//             .then(response => response.json())
//             .then(data => {
//                 if (data.insert_theme_content_one) {
//                     console.log('Content saved successfully:', data);
//                 } else {
//                     console.error('Failed to save content:', data);
//                 }
//             })
//             .catch(error => {
//                 console.error('Error saving content:', error);
//             });
//     };
//
//     render() {
//         return (
//             <div>
//                 <div id="blocks"></div>
//                 <div ref={this.containerRef} className="editor-container"></div>
//                 <div className="traits-container"></div>
//                 <button onClick={this.saveContent}>Save Content</button>
//             </div>
//         );
//     }
// }
//
// export default HomeComponent;

import React, { useEffect, useState } from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import grapesjsBasicBlocks from 'grapesjs-blocks-basic';
import grapesjsPresetWebpage from 'grapesjs-preset-webpage';
import './HomeComponent.css';
import ColorPickerComponent from './ColorPicker';

const HomeComponent = ({ storeId }) => {
    const [sellerTheme, setSellerTheme] = useState({
        primaryColor: '#007bff',
        primaryColorHover: '#0056b3',
        secondaryColor: '#6c757d',
        secondaryColorHover: '#5a6268'
    });

    useEffect(() => {
        if (sellerTheme) {
            document.documentElement.style.setProperty('--primary-color', sellerTheme.primaryColor);
            document.documentElement.style.setProperty('--primary-color-hover', sellerTheme.primaryColorHover);
            document.documentElement.style.setProperty('--secondary-color', sellerTheme.secondaryColor);
            document.documentElement.style.setProperty('--secondary-color-hover', sellerTheme.secondaryColorHover);
        }
    }, [sellerTheme]);

    const saveContent = () => {
        const components = this.editor.getComponents().toArray();
        const content = [];

        for (const component of components) {
            const componentData = { type: component.attributes.type };

            switch (component.attributes.type) {
                case 'text':
                    const styleObject = component.getStyle();
                    componentData.content = component.view.$el.html();
                    componentData.styles = {
                        fontFamily: styleObject['font-family'],
                        color: styleObject.color,
                        fontSize: styleObject['font-size'],
                    };
                    break;
                case 'image':
                    componentData.src = component.attributes.src;
                    componentData.styles = {
                        width: component.attributes.width,
                        height: component.attributes.height,
                    };
                    break;
                default:
                    break;
            }

            content.push(componentData);
        }

        const contentString = JSON.stringify(content);
        const payload = {
            content: contentString,
            store_id: storeId,
        };

        console.log(payload);

        fetch('https://capital-duck-18.hasura.app/api/rest/add-content', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-hasura-admin-secret': '7qN1gqjjqtf1QXkkW435OMGfAkmbMpSwSMc3EdUtVFnworAdDKosz6k8LB0nuL4v',
            },
            body: JSON.stringify(payload),
        })
            .then(response => response.json())
            .then(data => {
                if (data.insert_theme_content_one) {
                    console.log('Content saved successfully:', data);
                } else {
                    console.error('Failed to save content:', data);
                }
            })
            .catch(error => {
                console.error('Error saving content:', error);
            });
    };

    const handleSaveTheme = (theme) => {
        setSellerTheme(theme);
    };

    const containerRef = React.createRef();

    useEffect(() => {
        const editor = grapesjs.init({
            container: containerRef.current,
            height: '100vh',
            width: 'auto',
            storageManager: false,
            panels: { defaults: [] },
            blockManager: {
                appendTo: '#blocks',
            },
            styleManager: {
                appendTo: '.traits-container',
                sectors: [
                    {
                        name: 'General',
                        buildProps: ['background-image', 'background-color'],
                    },
                    {
                        name: 'Typography',
                        buildProps: [
                            'font-family',
                            'color',
                            'font-size',
                            'font-weight',
                            'letter-spacing',
                            'line-height',
                            'text-align'
                        ],
                    },
                    {
                        name: 'Dimension',
                        buildProps: ['width', 'height', 'margin', 'padding'],
                    },
                ],
            },
            plugins: [grapesjsBasicBlocks, grapesjsPresetWebpage],
        });

        editor.BlockManager.add('custom-heading', {
            label: 'Custom Heading',
            category: 'Basic',
            content: `<h1 class="custom-heading" data-gjs-type="text">Your Heading Here</h1>`,
        });

        editor.DomComponents.addType('text', {
            isComponent: el => el.tagName === 'H1' || el.tagName === 'H2' || el.tagName === 'H3' || el.tagName === 'H4' || el.tagName === 'H5' || el.tagName === 'H6',
            model: {
                defaults: {
                    traits: [
                        {
                            type: 'text',
                            label: 'Content',
                            name: 'content',
                        },
                        {
                            type: 'select',
                            label: 'Font Family',
                            name: 'font-family',
                            options: [
                                { id: 'Arial', name: 'Arial' },
                                { id: 'Georgia', name: 'Georgia' },
                                { id: 'Times New Roman', name: 'Times New Roman' },
                                { id: 'Verdana', name: 'Verdana' },
                            ],
                        },
                        {
                            type: 'color',
                            label: 'Text Color',
                            name: 'color',
                        },
                        {
                            type: 'number',
                            label: 'Font Size',
                            name: 'font-size',
                            min: 10,
                            max: 100,
                            unit: 'px',
                        },
                    ],
                    attributes: {
                        contenteditable: true,
                    },
                },
            },
        });

        editor.on('component:selected', () => {
            const selected = editor.getSelected();
            if (selected && selected.is('text')) {
                const traitManager = editor.TraitManager;
                if (traitManager) {
                    const traitsViewer = traitManager.getTraitsViewer();
                    if (traitsViewer) {
                        traitsViewer.render();
                    }
                }
            }
        });

        return () => {
            editor.destroy();
        };
    }, []);

    return (
        <div>
            <div id="blocks"></div>
            <div ref={containerRef} className="editor-container"></div>
            <div className="traits-container"></div>
            <button onClick={saveContent}>Save Content</button>
            <ColorPickerComponent onSave={handleSaveTheme} />
        </div>
    );
};

export default HomeComponent;

