import React from 'react';

export default class PhotoUploadForm extends React.Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     //need to change -- currently hardcoded author_id:""
        //     author_id: "2",
        //     caption: "",
        //     photoFile: null,
        //     photoUrl: null
        // } 
        this.state = this.props.testForm
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleInput = this.handleInput.bind(this);
    };


    handleInput(e) {
        this.setState({caption: e.currentTarget.value});
    }// this code is correct

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({photoFile: file, photoUrl: fileReader.result});
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }//this code is correct

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('post[caption]', this.state.caption);
        formData.append('post[author_id]', this.state.author_id);

        if (this.state.photoFile) {
            formData.append('post[photo]', this.state.photoFile);
        }
        this.props.createPost(formData)//.then(() => dispatch(closeModal()))//.then(() => this.props.history.push('/')) // () => dispatch(closeModal()) test this
    } //cannot read property push of undefined -- so close modal and reload the main page

    render() { //this is rendering
        console.log(this.state);
        console.log(this.props);
        const preview = this.state.photoUrl ? <img className="image-preview" src={this.state.photoUrl}/> : null;
        return (
            <div className="photo-submit-form-container">
            <form className="photo-submit-form" onSubmit={this.handleSubmit}>
                <input className="photo-caption-input" type="text"
                    id="post-caption"
                    placeholder="Write a caption..."
                    value={this.state.caption}
                    onChange={this.handleInput}/>
                <input className="select-file" type="file"
                    onChange={this.handleFile}/>
                <div className="image-preview-label">Image Preview</div>
                    {preview}
                <button className="photo-upload-button">Upload your Post!</button> 
            </form>
            </div>
        )
    }//FIX THE BUTTON THAT IS FAILING!!!!
    // Is the button actually working?

}

