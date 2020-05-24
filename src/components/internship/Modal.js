import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'

class Modal extends Component {
    constructor(props){
        super(props)
        this.state = {
            open: false,
            files: [],
        }
    }

    handleChangeStatus = ({ meta, file }, status) => {
        if(status === 'done'){
            let arr = this.state.files
            arr.push(file)
            this.setState({
                files: arr,
                error: false,
            })
            this.props.getFiles(file)
        }
        this.props.getStatus(status)
    }

    Preview = ({ meta, fileWithMeta }) => {
        const { name, size, previewUrl } = meta
        let src = previewUrl
        if(previewUrl === undefined){
            src = 'https://img-16.ccm2.net/cJWsKe0SX47XzGL5nJQrYssqjYM=/2000x/20dc4a90563849048d5221a18e04745b/ccm-faq/2000px-Microsoft_Excel_2013_logo.svg.png'
        }
        return (
            <div className="preview">
                <div className="image">
                    <img src={src}></img>
                </div>
                <div className="content-modal">
                    <p><font color="black">{name}</font>, {size + "bytes"}</p>
                </div>
                <div className="iconCancle dzu-previewButton">
                    <i class="fa fa-trash" aria-hidden="true" onClick={() => fileWithMeta.remove()}></i>
                </div>
            </div>
        )
    }
    
    disabledButton = () => {
        if(this.state.files.length > 0){
            return true
        }else {
            return  false
        }
    }

    closeDialog = () => {
        this.setState({
            files: [],
            error: false,
        })
        this.props.handleClose(!this.props.open)
    }

    displayErrorMessage = () => {
        if(this.props.errorMessage !== undefined && this.props.errorMessage !== ''){
            return (
                <span className="errorDropFile">{this.props.errorMessage}</span>
            )
        }
    }

    handleAttach = () => {
        if(this.props.onAttach){
            this.props.onAttach()
        }
    }

    // handleChangeStatus = ({meta, file}, status) => {
    //     console.log(meta)
    //     console.log(file)
    //     console.log(status)
    // }
    // handleSubmit = (files, allFiles) => {
    //     console.log(files)
    //     console.log(allFiles)
    //     allFiles.forEach(f => f.remove())
    // }
    render() {
        return (
            <div>
                <Dialog
                    open={this.props.open}
                    onClose={() => this.closeDialog()}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"ATTACH FILE"}</DialogTitle>
                    <DialogContent className="dropzone">
                        <DialogContentText id="alert-dialog-description">
                            <Dropzone
                            PreviewComponent={this.Preview}
                            onChangeStatus={this.handleChangeStatus}
                            accept={this.props.accept}
                            maxFiles={this.props.maxFiles}
                            maxSizeBytes={this.props.maxSize}
                            inputWithFilesContent={files => (this.props.maxFiles ? `${files.length}/${this.props.maxFiles}` : 'Add file')}
                            inputContent={(files, extra) => (extra.reject ? 'File invalid' : 'Drag files or click to browse')}
                            styles={{ dropzone: { minHeight: 285, maxHeight: 285 }, 
                            inputLabel: (files, extra) => (extra.reject ? { color: 'red'} : {}),
                            dropzoneReject: { borderColor: 'red', backgroundColor: '#DAA' }, }}
                            />
                            <div>
                            {this.displayErrorMessage()}
                            </div>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <button type="button" class="btn buttonView btnColor" onClick={() => this.closeDialog()}>CLOSE</button>
                        <button type="button" 
                        class="btn buttonView" onClick={() => this.handleAttach()}
                        disabled={this.disabledButton() ? false : true}>ATTACH</button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default Modal;
