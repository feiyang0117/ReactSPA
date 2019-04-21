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
                    <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                </Player>
            </div>
　　　  )
    }
}

export default VideoItem;