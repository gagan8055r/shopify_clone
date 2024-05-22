
import React from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import grapesjsBasicBlocks from 'grapesjs-blocks-basic';
import grapesjsPresetWebpage from 'grapesjs-preset-webpage';
import ColorPickerComponent from './ColorPicker';
import './HomeComponent.css';

class HomeComponent extends React.Component {
    containerRef = React.createRef();

    state = {
        primaryColors: {
            home: '#ffffff',
            catalog: '#ffffff',
            contact: '#ffffff',
        },
        backgroundColor: '#ffffff',
        selectedSection: 'home',
    };
    handleBackgroundColorChange = (color) => {
        this.setState({ backgroundColor: color });
    };
    componentDidMount() {
        const editor = grapesjs.init({
            container: this.containerRef.current,
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

        this.editor = editor;

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
                        {
                            type: 'color',
                            label: 'Background Color',
                            name: 'background-color',
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
    }

    componentWillUnmount() {
        this.editor.destroy();
    }

    saveContent = () => {
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
                        backgroundColor: styleObject['background-color'],
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
        const { storeId } = this.props;

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

    handleColorChange = (color) => {
        const { selectedSection } = this.state;
        this.setState((prevState) => ({
            primaryColors: {
                ...prevState.primaryColors,
                [selectedSection]: color,
            },
        }));
    };

    saveColor = () => {
        const { primaryColors, selectedSection,backgroundColor } = this.state;
        const buttonColor = primaryColors[selectedSection];
        const { storeId } = this.props;

        const payload = {
            button_color: buttonColor,
            background_color: backgroundColor,
            store_id: storeId,
        };

        console.log(payload);

        fetch('https://capital-duck-18.hasura.app/api/rest/add-color', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-hasura-admin-secret': '7qN1gqjjqtf1QXkkW435OMGfAkmbMpSwSMc3EdUtVFnworAdDKosz6k8LB0nuL4v',
            },
            body: JSON.stringify(payload),
        })
            .then(response => response.json())
            .then(data => {
                if (data.insert_color_home_one) {
                    console.log('Color saved successfully:', data);
                } else {
                    console.error('Failed to save color:', data);
                }
            })
            .catch(error => {
                console.error('Error saving color:', error);
            });
    };

    selectSection = (section) => {
        this.setState({ selectedSection: section });
    };

    render() {
        const { primaryColors, selectedSection,backgroundColor } = this.state;

        return (
            <div>
                <div id="blocks"></div>
                <div ref={this.containerRef} className="editor-container"></div>
                <div className="traits-container"></div>
                <div className='save-button'>
                <button onClick={this.saveContent} style={{backgroundColor:'rebeccapurple',color:'white',width:'100px' ,height:'40px',borderRadius:'10px'}}>Save Content</button>
                </div>
                <div className="color-picker-container">
                    <label>BUTTON COLOR :</label>
                    <ColorPickerComponent
                        color={primaryColors[selectedSection]}
                        onColorChange={this.handleColorChange}
                    />
                    <br/>
                    <label>BACKGROUND COLOR:</label>
                    <ColorPickerComponent
                        color={backgroundColor}
                        onColorChange={this.handleBackgroundColorChange}
                    />
                    <br/>
                    <button onClick={this.saveColor} style={{
                        backgroundColor: 'red',
                        color: 'white',
                        width: '100px',
                        height: '40px',
                        margin: '10px',
                        borderRadius: '10px'
                    }}>Save Color
                    </button>
                </div>
            </div>
        );
    }
}

export default HomeComponent;