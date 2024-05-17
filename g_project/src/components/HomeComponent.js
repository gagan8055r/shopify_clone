// // import React from 'react';
// // import grapesjs from 'grapesjs';
// // import 'grapesjs/dist/css/grapes.min.css';
// // import './HomeComponent.css';
// //
// // class HomeComponent extends React.Component {
// //     containerRef = React.createRef();
// //
// //     componentDidMount() {
// //         const editor = grapesjs.init({
// //             container: this.containerRef.current,
// //             height: '300px',
// //             width: 'auto',
// //             storageManager: false,
// //             panels: { defaults: [] },
// //         });
// //
// //         // Store the editor instance for later use or cleanup
// //         this.editor = editor;
// //     }
// //
// //     componentWillUnmount() {
// //         // Destroy the editor instance when the component unmounts
// //         this.editor.destroy();
// //     }
// //
// //     render() {
// //         return (
// //             <div>
// //                 <div ref={this.containerRef}>
// //                     <h1>Hello World Component!</h1>
// //                 </div>
// //             </div>
// //         );
// //     }
// // }
// //
// // export default HomeComponent;
//
// //
// // import React from 'react';
// // import grapesjs from 'grapesjs';
// // import 'grapesjs/dist/css/grapes.min.css';
// // import './HomeComponent.css';
// //
// // class HomeComponent extends React.Component {
// //     containerRef = React.createRef();
// //
// //     componentDidMount() {
// //         const editor = grapesjs.init({
// //             container: this.containerRef.current,
// //             height: '300px',
// //             width: 'auto',
// //             storageManager: false,
// //             panels: { defaults: [] },
// //             blockManager: {
// //                 appendTo: '#blocks',
// //                 blocks: [
// //                     {
// //                         id: 'custom-heading',
// //                         label: 'Custom Heading',
// //                         content: '<h1 class="custom-heading">Your Heading Here</h1>',
// //                         category: 'Basic',
// //                         attributes: { class: 'gjs-block-section' }
// //                     }
// //                 ],
// //             },
// //             styleManager: {
// //                 sectors: [{
// //                     name: 'General',
// //                     buildProps: [
// //                         'font-family',
// //                         'color',
// //                         'font-size',
// //                         'font-weight',
// //                         'letter-spacing',
// //                         'line-height',
// //                         'text-align',
// //                         'margin',
// //                         'padding'
// //                     ],
// //                 }]
// //             },
// //             traitManager: {
// //                 appendTo: '.traits-container',
// //                 traits: [
// //                     {
// //                         type: 'text',
// //                         label: 'Text',
// //                         name: 'content',
// //                         changeProp: 1
// //                     }
// //                 ]
// //             }
// //         });
// //
// //         // Store the editor instance for later use or cleanup
// //         this.editor = editor;
// //
// //         // Add event listener to update the heading content dynamically
// //         editor.on('component:toggled', model => {
// //             const selected = editor.getSelected();
// //             if (selected && selected.is('custom-heading')) {
// //                 const traitsManager = editor.TraitManager;
// //                 traitsManager.addType('text', {
// //                     onValueChange: (view, value) => {
// //                         selected.set('content', value);
// //                     }
// //                 });
// //             }
// //         });
// //     }
// //
// //     componentWillUnmount() {
// //         // Destroy the editor instance when the component unmounts
// //         this.editor.destroy();
// //     }
// //
// //     render() {
// //         return (
// //             <div>
// //                 <div id="blocks"></div>
// //                 <div ref={this.containerRef} className="editor-container"></div>
// //                 <div className="traits-container"></div>
// //             </div>
// //         );
// //     }
// // }
// //
// // export default HomeComponent;
//
//
//
// //
// //
// // import React from 'react';
// // import grapesjs from 'grapesjs';
// // import 'grapesjs/dist/css/grapes.min.css';
// // import './HomeComponent.css';
// //
// // class HomeComponent extends React.Component {
// //     containerRef = React.createRef();
// //
// //     componentDidMount() {
// //         const editor = grapesjs.init({
// //             container: this.containerRef.current,
// //             height: '300px',
// //             width: 'auto',
// //             storageManager: false,
// //             panels: { defaults: [] },
// //             blockManager: {
// //                 appendTo: '#blocks',
// //                 blocks: [
// //                     {
// //                         id: 'custom-heading',
// //                         label: 'Heading',
// //                         content: `<h1>Your Heading Here</h1>`,
// //                         category: 'Basic',
// //                         attributes: { class: 'gjs-block-section' },
// //                     }
// //                 ],
// //             },
// //             styleManager: {
// //                 appendTo: '.traits-container',
// //                 sectors: [
// //                     {
// //                         name: 'General',
// //                         buildProps: ['font-family', 'color', 'font-size'],
// //                     },
// //                     {
// //                         name: 'Typography',
// //                         buildProps: ['font-weight', 'letter-spacing', 'line-height', 'text-align'],
// //                     }
// //                 ],
// //             },
// //         });
// //
// //         this.editor = editor;
// //     }
// //
// //     componentWillUnmount() {
// //         this.editor.destroy();
// //     }
// //
// //     render() {
// //         return (
// //             <div>
// //                 <div id="blocks"></div>
// //                 <div ref={this.containerRef} className="editor-container"></div>
// //                 <div className="traits-container"></div>
// //             </div>
// //         );
// //     }
// // }
// //
// // export default HomeComponent;
// //
//
//
//
//
// //
// // import React from 'react';
// // import grapesjs from 'grapesjs';
// // import 'grapesjs/dist/css/grapes.min.css';
// // import './HomeComponent.css';
// //
// // class HomeComponent extends React.Component {
// //     containerRef = React.createRef();
// //
// //     componentDidMount() {
// //         const editor = grapesjs.init({
// //             container: this.containerRef.current,
// //             height: '300px',
// //             width: 'auto',
// //             storageManager: false,
// //             panels: { defaults: [] },
// //             blockManager: {
// //                 appendTo: '#blocks',
// //                 blocks: [
// //                     {
// //                         id: 'custom-heading',
// //                         label: 'Heading',
// //                         content: `<h1>Your Heading Here</h1>`,
// //                         category: 'Basic',
// //                         attributes: { class: 'gjs-block-section' },
// //                     }
// //                 ],
// //             },
// //             styleManager: {
// //                 appendTo: '.traits-container',
// //                 sectors: [
// //                     {
// //                         name: 'General',
// //                         buildProps: ['font-family', 'color', 'font-size'],
// //                     },
// //                     {
// //                         name: 'Typography',
// //                         buildProps: ['font-weight', 'letter-spacing', 'line-height', 'text-align'],
// //                     }
// //                 ],
// //             },
// //         });
// //
// //         this.editor = editor;
// //
// //         // Listen for changes in component properties
// //         editor.on('change', () => {
// //             const selectedComponent = editor.getSelected();
// //             if (selectedComponent) {
// //                 console.log('Component changed:', selectedComponent.attributes);
// //             }
// //         });
// //
// //         // Listen for component selection
// //         editor.on('component:selected', () => {
// //             const selectedComponent = editor.getSelected();
// //             if (selectedComponent) {
// //                 console.log('Component selected:', selectedComponent.attributes);
// //             }
// //         });
// //     }
// //
// //     componentWillUnmount() {
// //         this.editor.destroy();
// //     }
// //
// //     render() {
// //         return (
// //             <div>
// //                 <div id="blocks"></div>
// //                 <div ref={this.containerRef} className="editor-container"></div>
// //                 <div className="traits-container"></div>
// //             </div>
// //         );
// //     }
// // }
// //
// // export default HomeComponent;
// //
//
// //
// // import React from 'react';
// // import grapesjs from 'grapesjs';
// // import 'grapesjs/dist/css/grapes.min.css';
// // import grapesjsBasicBlocks from 'grapesjs-blocks-basic';
// // import grapesjsPresetWebpage from 'grapesjs-preset-webpage';
// // import './HomeComponent.css';
// //
// // class HomeComponent extends React.Component {
// //     containerRef = React.createRef();
// //
// //     componentDidMount() {
// //         const editor = grapesjs.init({
// //             container: this.containerRef.current,
// //             height: '100vh', // Set full viewport height
// //             width: 'auto',
// //             storageManager: false,
// //             panels: { defaults: [] },
// //             blockManager: {
// //                 appendTo: '#blocks',
// //             },
// //             styleManager: {
// //                 appendTo: '.traits-container',
// //                 sectors: [
// //                     {
// //                         name: 'General',
// //                         buildProps: ['background-image', 'background-color'],
// //                     },
// //                     {
// //                         name: 'Typography',
// //                         buildProps: [
// //                             'font-family',
// //                             'color',
// //                             'font-size',
// //                             'font-weight',
// //                             'letter-spacing',
// //                             'line-height',
// //                             'text-align'
// //                         ],
// //                     },
// //                     {
// //                         name: 'Dimension',
// //                         buildProps: ['width', 'height', 'margin', 'padding'],
// //                     },
// //                 ],
// //             },
// //             plugins: [grapesjsBasicBlocks, grapesjsPresetWebpage],
// //         });
// //
// //         // Add custom block for headings with editable text
// //         editor.BlockManager.add('custom-heading', {
// //             label: 'Custom Heading',
// //             category: 'Basic',
// //             content: `<h1 class="custom-heading" data-gjs-type="text">Your Heading Here</h1>`,
// //         });
// //
// //         // Store the editor instance for later use or cleanup
// //         this.editor = editor;
// //
// //         // Add traits for text components
// //         editor.DomComponents.addType('text', {
// //             isComponent: el => el.tagName === 'H1' || el.tagName === 'H2' || el.tagName === 'H3' || el.tagName === 'H4' || el.tagName === 'H5' || el.tagName === 'H6',
// //             model: {
// //                 defaults: {
// //                     traits: [
// //                         {
// //                             type: 'text',
// //                             label: 'Content',
// //                             name: 'content',
// //                         },
// //                         {
// //                             type: 'select',
// //                             label: 'Font Family',
// //                             name: 'font-family',
// //                             options: [
// //                                 { id: 'Arial', name: 'Arial' },
// //                                 { id: 'Georgia', name: 'Georgia' },
// //                                 { id: 'Times New Roman', name: 'Times New Roman' },
// //                                 { id: 'Verdana', name: 'Verdana' },
// //                             ],
// //                         },
// //                         {
// //                             type: 'color',
// //                             label: 'Text Color',
// //                             name: 'color',
// //                         },
// //                         {
// //                             type: 'number',
// //                             label: 'Font Size',
// //                             name: 'font-size',
// //                             min: 10,
// //                             max: 100,
// //                             unit: 'px',
// //                         },
// //                     ],
// //                     attributes: {
// //                         contenteditable: true,
// //                     },
// //                 },
// //             },
// //         });
// //
// //         // Ensure traits are visible for selected text component
// //         editor.on('component:selected', (model) => {
// //             const selected = editor.getSelected();
// //             if (selected && selected.is('text')) {
// //                 editor.TraitManager.getTraitsViewer().render();
// //             }
// //         });
// //     }
// //
// //     componentWillUnmount() {
// //         // Destroy the editor instance when the component unmounts
// //         this.editor.destroy();
// //     }
// //
// //     render() {
// //         return (
// //             <div>
// //                 <div id="blocks"></div>
// //                 <div ref={this.containerRef} className="editor-container"></div>
// //                 <div className="traits-container"></div>
// //             </div>
// //         );
// //     }
// // }
// //
// // export default HomeComponent;
//
//
//
//
//
// //
// // import React from 'react';
// // import grapesjs from 'grapesjs';
// // import 'grapesjs/dist/css/grapes.min.css';
// // import grapesjsBasicBlocks from 'grapesjs-blocks-basic';
// // import grapesjsPresetWebpage from 'grapesjs-preset-webpage';
// // import './HomeComponent.css';
// //
// // class HomeComponent extends React.Component {
// //     containerRef = React.createRef();
// //
// //     componentDidMount() {
// //         const editor = grapesjs.init({
// //             container: this.containerRef.current,
// //             height: '100vh', // Set full viewport height
// //             width: 'auto',
// //             storageManager: false,
// //             panels: { defaults: [] },
// //             blockManager: {
// //                 appendTo: '#blocks',
// //             },
// //             styleManager: {
// //                 appendTo: '.traits-container',
// //                 sectors: [
// //                     {
// //                         name: 'General',
// //                         buildProps: ['background-image', 'background-color'],
// //                     },
// //                     {
// //                         name: 'Typography',
// //                         buildProps: [
// //                             'font-family',
// //                             'color',
// //                             'font-size',
// //                             'font-weight',
// //                             'letter-spacing',
// //                             'line-height',
// //                             'text-align'
// //                         ],
// //                     },
// //                     {
// //                         name: 'Dimension',
// //                         buildProps: ['width', 'height', 'margin', 'padding'],
// //                     },
// //                 ],
// //             },
// //             plugins: [grapesjsBasicBlocks, grapesjsPresetWebpage],
// //         });
// //
// //         this.editor = editor;
// //
// //         // Add custom block for headings with editable text
// //         editor.BlockManager.add('custom-heading', {
// //             label: 'Custom Heading',
// //             category: 'Basic',
// //             content: `<h1 class="custom-heading" data-gjs-type="text">Your Heading Here</h1>`,
// //         });
// //
// //         // Add traits for text components
// //         editor.DomComponents.addType('text', {
// //             isComponent: el => el.tagName === 'H1' || el.tagName === 'H2' || el.tagName === 'H3' || el.tagName === 'H4' || el.tagName === 'H5' || el.tagName === 'H6',
// //             model: {
// //                 defaults: {
// //                     traits: [
// //                         {
// //                             type: 'text',
// //                             label: 'Content',
// //                             name: 'content',
// //                         },
// //                         {
// //                             type: 'select',
// //                             label: 'Font Family',
// //                             name: 'font-family',
// //                             options: [
// //                                 { id: 'Arial', name: 'Arial' },
// //                                 { id: 'Georgia', name: 'Georgia' },
// //                                 { id: 'Times New Roman', name: 'Times New Roman' },
// //                                 { id: 'Verdana', name: 'Verdana' },
// //                             ],
// //                         },
// //                         {
// //                             type: 'color',
// //                             label: 'Text Color',
// //                             name: 'color',
// //                         },
// //                         {
// //                             type: 'number',
// //                             label: 'Font Size',
// //                             name: 'font-size',
// //                             min: 10,
// //                             max: 100,
// //                             unit: 'px',
// //                         },
// //                     ],
// //                     attributes: {
// //                         contenteditable: true,
// //                     },
// //                 },
// //             },
// //         });
// //
// //         // Ensure traits are visible for selected text component
// //         editor.on('component:selected', (model) => {
// //             const selected = editor.getSelected();
// //             if (selected && selected.is('text')) {
// //                 editor.TraitManager.getTraitsViewer().render();
// //             }
// //         });
// //     }
// //
// //
// //
// //
// //     componentWillUnmount() {
// //         // Destroy the editor instance when the component unmounts
// //         this.editor.destroy();
// //     }
// //
// //     saveContent = () => {
// //         // Extract the HTML content from the editor
// //         const content = this.editor.getHtml();
// //
// //         // Send the content to the backend server for storage
// //         fetch('https://your-backend-api.com/save-content', {
// //             method: 'POST',
// //             headers: {
// //                 'Content-Type': 'application/json',
// //             },
// //             body: JSON.stringify({ content }),
// //         })
// //             .then(response => {
// //                 if (response.ok) {
// //                     console.log('Content saved successfully');
// //                 } else {
// //                     console.error('Failed to save content');
// //                 }
// //             })
// //             .catch(error => {
// //                 console.error('Error saving content:', error);
// //             });
// //     };
// //
// //     render() {
// //         return (
// //             <div>
// //                 <div id="blocks"></div>
// //                 <div ref={this.containerRef} className="editor-container"></div>
// //                 <div className="traits-container"></div>
// //                 <button onClick={this.saveContent}>Save Content</button>
// //             </div>
// //         );
// //     }
// // }
// //
// // export default HomeComponent;
//
//
//
//
//
//
//
//

import React from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import grapesjsBasicBlocks from 'grapesjs-blocks-basic';
import grapesjsPresetWebpage from 'grapesjs-preset-webpage';
import './HomeComponent.css';






class HomeComponent extends React.Component {
    containerRef = React.createRef();

    componentDidMount() {
        const editor = grapesjs.init({
            container: this.containerRef.current,
            height: '100vh', // Set full viewport height
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

        this.editor = editor;

        // Add custom block for headings with editable text
        editor.BlockManager.add('custom-heading', {
            label: 'Custom Heading',
            category: 'Basic',
            content: `<h1 class="custom-heading" data-gjs-type="text">Your Heading Here</h1>`,
        });

        // Add traits for text components
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

        // Ensure traits are visible for selected text component
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
    }

    componentWillUnmount() {
        // Destroy the editor instance when the component unmounts
        this.editor.destroy();
    }

    saveContent = () => {
        // Extract the HTML content from the editor
        const content = this.editor.getHtml();

        // Send the content to the backend server for storage
        fetch('https://your-backend-api.com/save-content', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ content }),
        })
            .then(response => {
                if (response.ok) {
                    console.log('Content saved successfully');
                } else {
                    console.error('Failed to save content');
                }
            })
            .catch(error => {
                console.error('Error saving content:', error);
            });
    };

    render() {
        return (
            <div>
                <div id="blocks"></div>
                <div ref={this.containerRef} className="editor-container"></div>
                <div className="traits-container"></div>
                <button onClick={this.saveContent}>Save Content</button>
            </div>
        );
    }
}

export default HomeComponent;


//
// import React from 'react';
// import grapesjs from 'grapesjs';
// import 'grapesjs/dist/css/grapes.min.css';
// import grapesjsBasicBlocks from 'grapesjs-blocks-basic';
// import grapesjsPresetWebpage from 'grapesjs-preset-webpage';
// import grapesjsPluginForms from 'grapesjs-plugin-forms';
// import grapesjsNavbar from 'grapesjs-navbar';
// import grapesjsTabs from 'grapesjs-tabs';
// import grapesjsBlocksFlexbox from 'grapesjs-blocks-flexbox';
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
//             plugins: [
//                 grapesjsBasicBlocks,
//                 grapesjsPresetWebpage,
//                 grapesjsPluginForms,
//                 grapesjsNavbar,
//                 grapesjsTabs,
//                 grapesjsBlocksFlexbox,
//             ],
//         });
//
//         this.editor = editor;
//
//         // Add custom block for headings with editable text
//         editor.BlockManager.add('custom-heading', {
//             label: 'Custom Heading',
//             category: 'Basic',
//             content: `<h1 class="custom-heading" data-gjs-type="text">Your Heading Here</h1>`,
//         });
//
//         // Add traits for text components
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
//         // Destroy the editor instance when the component unmounts
//         this.editor.destroy();
//     }
//
//     saveContent = () => {
//         // Extract the HTML content from the editor
//         const content = this.editor.getHtml();
//
//         // Send the content to the backend server for storage
//         fetch('https://your-backend-api.com/save-content', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ content }),
//         })
//             .then(response => {
//                 if (response.ok) {
//                     console.log('Content saved successfully');
//                 } else {
//                     console.error('Failed to save content');
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
//                 <div id="blocks" className="blocks-container"></div>
//                 <div ref={this.containerRef} className="editor-container"></div>
//                 <div className="traits-container"></div>
//                 <button onClick={this.saveContent}>Save Content</button>
//             </div>
//         );
//     }
// }
//
// export default HomeComponent;
