import React, { Component } from 'react';

class VideoItem extends Component{
    constructor(props){
        super(props);
        console.log(props)
    }
//     componentDidMount() {
// 　　    const { classItem } = this.props;
//         console.log(this.props)
// 　  }
　　render() {
　　    return (
　　　　　   <div className="nav">
                第{this.props.classItem}节课！
            </div>
　　　  )
    }
}

export default VideoItem;