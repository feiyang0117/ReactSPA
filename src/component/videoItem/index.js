import React, { Component } from 'react';
import 'video-react/dist/video-react.css';
import { Player } from 'video-react';
class VideoItem extends Component{
    constructor(props){
        super(props);
        console.log(props)
    }
    componentDidMount() {
　　    const { classItem } = this.props;
        console.log(this.props)
　  }
　　render() {
　　    return (
　　　　　   <div className="nav">
                {/* 第{this.props.classItem}节课！ */}
                <Player>
                    <source src="https://ksv-video-publish.cdn.bcebos.com/4f8dafafb9e6f666dbf89f9d3b946486a5c8e358.mp4?auth_key=1555883794-0-0-b3dfec7d7767d267a3878b022de7a297" />
                </Player>
            </div>
　　　  )
    }
}

export default VideoItem;