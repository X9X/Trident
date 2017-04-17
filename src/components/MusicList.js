import React from 'react';
import "@style/MusicList.scss"
class MusicList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.getList = this.getList.bind(this);
    this.state = {
      musicList: [{
        title: '一生所爱',
        content: '大话西游'
      }, {
        title: '温柔',
        content: '走在风中今天阳光突然好温柔'
      }]
    }
  }

  getList() {
    return this.state.musicList.map(
      (item,index) => {
        return (
		<div className="list-container" key={index}>
			<div className="title"> {item.title}</div>
			<div className='content'>{item.content}</div>
		</div>
		)
      }
    )
  }

  render() {
    return (
		<div>
        	<h2> Music List </h2>
			{this.getList()}
		</div>
  );
}
}

export default MusicList;
