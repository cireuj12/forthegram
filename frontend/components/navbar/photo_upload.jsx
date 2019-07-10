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
        this.loading = this.loading.bind(this);
        // this.renderLoad = this.renderLoad.bind(this);
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

    loading(){
        this.props.closeModal()
    }

    // renderLoad() {
    //     var elem = document.getElementById("uploadButton")
    //     elem.value = "Uploading...Please wait"
    // }

    handleSubmit(e) {
        e.preventDefault();

        var elem = document.getElementById("uploadButton")
        elem.value = "Uploading...Please wait"
        elem.disabled = true;
        // elem.style.fontWeight = "600";

        const formData = new FormData();
        formData.append('post[caption]', this.state.caption);
        formData.append('post[author_id]', this.state.author_id);

        if (this.state.photoFile) {
            formData.append('post[photo]', this.state.photoFile);
        }
        this.props.createPost(formData).then(() => this.props.closeModal())//.then(() => this.props.history.push('/')) // () => dispatch(closeModal()) test this
    } //Warning: each Child in list should have unique "key prop"
    //there is some lag

    render() { //this is rendering
        // console.log(this.state);
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
                <input id="uploadButton" 
                       type="submit"
                       className="photo-upload-button" 
                       value="Upload your Post!"
                    //    onClick={this.renderLoad}
                       >
                    </input> 
            </form>
            </div>
        )
    }//FIX THE BUTTON THAT IS FAILING!!!!
    // Is the button actually working?

}

