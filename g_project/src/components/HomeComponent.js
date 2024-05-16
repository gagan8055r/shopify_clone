import React from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import './HomeComponent.css';

class HomeComponent extends React.Component {
    containerRef = React.createRef();

    componentDidMount() {
        const editor = grapesjs.init({
            container: this.containerRef.current,
            height: '300px',
            width: 'auto',
            storageManager: false,
            panels: { defaults: [] },
        });

        // Store the editor instance for later use or cleanup
        this.editor = editor;
    }

    componentWillUnmount() {
        // Destroy the editor instance when the component unmounts
        this.editor.destroy();
    }

    render() {
        return (
            <div>
                <div ref={this.containerRef}>
                    <h1>Hello World Component!</h1>
                </div>
            </div>
        );
    }
}

export default HomeComponent;